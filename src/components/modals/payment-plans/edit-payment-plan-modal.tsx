"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { Loader2, Plus, Trash2, Percent } from "lucide-react";
import { toast } from "sonner";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { usePaymentPlanActions, usePaymentPlanDetail } from "@/hooks/use-payment-plan-actions";
import { PAYMENT_PLAN_ITEM_TYPES, type PaymentPlanView } from "@/lib/payment-plans";
import { useLanguage } from "@/contexts/LanguageContext";
import { DEFAULT_PAYMENT_PLAN_TYPE, PaymentPlanTypeSelect } from "@/components/shared/PaymentPlanTypeSelect";
import { cn } from "@/lib/utils";
import { FieldError, FormErrorAlert } from "@/components/ui/form-message";
import { scrollToFirstInvalidField } from "@/lib/form-utils";
import { parseApiError } from "@/lib/api-errors";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import {
  getPaymentPlanDetailsSchema,
  getPaymentPlanItemRowSchema,
  paymentPlanIssuesToErrors,
  type PaymentPlanItemRowErrors,
} from "@/validators/payment-plan.schema";

interface EditPaymentPlanModalProps {
  isOpen: boolean;
  onClose: () => void;
  paymentPlanId: number | null;
}

export function EditPaymentPlanModal({ isOpen, onClose, paymentPlanId }: EditPaymentPlanModalProps) {
  const { t } = useLanguage();
  const { data: plan, isLoading, isError } = usePaymentPlanDetail(paymentPlanId, isOpen);
  const [isSaving, setIsSaving] = useState(false);

  const handleClose = () => {
    if (isSaving) return;
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title={t("paymentPlansView.editTitle")} size="lg">
      {isLoading ? (
        <div className="flex justify-center py-10">
          <Loader2 className="h-6 w-6 animate-spin text-teal-600" />
        </div>
      ) : isError || !plan || !paymentPlanId ? (
        <p className="py-10 text-center text-sm text-gray-500 dark:text-gray-400">{t("paymentPlansView.loadFailed")}</p>
      ) : (
        <EditPaymentPlanForm
          key={plan.id}
          plan={plan}
          paymentPlanId={paymentPlanId}
          onDone={onClose}
          onSavingChange={setIsSaving}
        />
      )}
    </Modal>
  );
}

interface ItemRow {
  key: string;
  paymentPlanItemId?: number;
  type: string;
  percentage: string;
  intervals: string;
}

let rowSeq = 0;
const newRowKey = () => `row-${++rowSeq}`;

/** Plan fields the backend may report errors for (payload keys of the update request). */
const PLAN_FIELDS = ["name", "payment_plan_type", "description", "status", "total_cost", "period_by_years"];

function EditPaymentPlanForm({
  plan,
  paymentPlanId,
  onDone,
  onSavingChange,
}: {
  plan: PaymentPlanView;
  paymentPlanId: number;
  onDone: () => void;
  onSavingChange?: (saving: boolean) => void;
}) {
  const { t } = useLanguage();
  const { updatePaymentPlan, isUpdating } = usePaymentPlanActions();
  const { data: session } = useSession();
  const userId = plan.userId || (session?.user?.id ? String(session.user.id) : undefined);

  const [name, setName] = useState(plan.name);
  const [description, setDescription] = useState(plan.description);
  const [planType, setPlanType] = useState(plan.paymentPlanType || DEFAULT_PAYMENT_PLAN_TYPE);
  const [totalCost, setTotalCost] = useState(plan.totalCost != null ? String(plan.totalCost) : "");
  const [status, setStatus] = useState(plan.status === "inactive" ? "inactive" : "active");
  const [periodByYears, setPeriodByYears] = useState(plan.periodByYears != null ? String(plan.periodByYears) : "");
  const [rows, setRows] = useState<ItemRow[]>(() =>
    plan.items.map((item) => ({
      key: newRowKey(),
      paymentPlanItemId: /^\d+$/.test(item.id) ? Number(item.id) : undefined,
      type: item.type,
      percentage: String(item.percentage),
      intervals: String(item.intervals || 1),
    }))
  );

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [rowErrors, setRowErrors] = useState<Record<string, PaymentPlanItemRowErrors>>({});
  const [generalError, setGeneralError] = useState<string | undefined>();

  useEffect(() => {
    onSavingChange?.(isUpdating);
  }, [isUpdating, onSavingChange]);
  useEffect(() => () => onSavingChange?.(false), [onSavingChange]);

  const totalPercentage = Number(rows.reduce((sum, r) => sum + (Number(r.percentage) || 0), 0).toFixed(2));
  const updateRow = (key: string, patch: Partial<ItemRow>) => {
    setRows((prev) => prev.map((r) => (r.key === key ? { ...r, ...patch } : r)));
    setRowErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev[key] };
      (Object.keys(patch) as Array<keyof PaymentPlanItemRowErrors>).forEach((field) => delete next[field]);
      return { ...prev, [key]: next };
    });
  };
  const clearError = (field: string) =>
    setErrors((prev) => {
      if (!(field in prev)) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    if (isUpdating) return;
    setGeneralError(undefined);

    const details = getPaymentPlanDetailsSchema(t).safeParse({
      name,
      description,
      total_cost: totalCost,
      period_by_years: periodByYears,
    });
    const nextErrors = details.success ? {} : paymentPlanIssuesToErrors(details.error.issues);
    const rowSchema = getPaymentPlanItemRowSchema(t);
    const nextRowErrors: Record<string, PaymentPlanItemRowErrors> = {};
    rows.forEach((row) => {
      const result = rowSchema.safeParse({ type: row.type, percentage: row.percentage, intervals: row.intervals });
      if (!result.success) nextRowErrors[row.key] = paymentPlanIssuesToErrors(result.error.issues);
    });
    setErrors(nextErrors);
    setRowErrors(nextRowErrors);
    if (Object.keys(nextErrors).length > 0) {
      scrollToFirstInvalidField(formElement);
      return;
    }
    if (Object.keys(nextRowErrors).length > 0) {
      toast.error(t("paymentPlansView.itemsInvalid"));
      scrollToFirstInvalidField(formElement);
      return;
    }

    try {
      await updatePaymentPlan({
        paymentId: paymentPlanId,
        data: {
          name: name.trim(),
          ...(planType.trim() ? { payment_plan_type: planType.trim() } : {}),
          description: description.trim(),
          status,
          ...(userId ? { user_id: userId } : {}),
          ...(totalCost.trim() !== "" ? { total_cost: Number(totalCost) } : {}),
          ...(periodByYears.trim() !== "" ? { period_by_years: Number(periodByYears) } : {}),
        },
        items: rows.map((r) => ({
          paymentPlanItemId: r.paymentPlanItemId,
          type: r.type,
          percentage: Number(r.percentage),
          intervals: Number(r.intervals),
        })),
        originalItems: plan.items,
      });
      onDone();
    } catch (error) {
      // Plan fields map to their inputs; installment errors can't be tied to a row, so they go to the banner.
      const { fieldErrors, generalMessage, summary } = parseApiError(error, {
        t,
        fallbackMessage: t("projects.messages.paymentPlanUpdateFailed"),
        fields: PLAN_FIELDS,
      });
      setErrors(fieldErrors);
      setGeneralError(generalMessage);
      toast.error(summary, { id: API_ERROR_TOAST_ID });
      scrollToFirstInvalidField(formElement);
    }
  };

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-4 pt-1">
      <FormErrorAlert message={generalError} />

      <div>
        <Label htmlFor="edit_plan_name">
          {t("paymentPlansView.name")} <span className="text-red-500">*</span>
        </Label>
        <Input
          id="edit_plan_name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            clearError("name");
          }}
          className="mt-1 text-xs"
          required
          error={!!errors.name}
          aria-invalid={!!errors.name}
        />
        <FieldError message={errors.name} />
      </div>

      <div>
        <Label htmlFor="edit_plan_type">{t("paymentPlansView.planType")}</Label>
        <PaymentPlanTypeSelect
          id="edit_plan_type"
          value={planType}
          onChange={(value) => {
            setPlanType(value);
            clearError("payment_plan_type");
          }}
          error={!!errors.payment_plan_type}
        />
        <FieldError message={errors.payment_plan_type} />
      </div>

      <div>
        <Label htmlFor="edit_plan_description">{t("paymentPlansView.description")}</Label>
        <Textarea
          id="edit_plan_description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
            clearError("description");
          }}
          rows={2}
          className="mt-1 text-xs"
          error={!!errors.description}
          aria-invalid={!!errors.description}
        />
        <FieldError message={errors.description} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div>
          <Label htmlFor="edit_plan_total">{t("paymentPlansView.totalCost")}</Label>
          <Input
            id="edit_plan_total"
            type="number"
            min="0"
            step="any"
            dir="ltr"
            value={totalCost}
            onChange={(e) => {
              setTotalCost(e.target.value);
              clearError("total_cost");
            }}
            className="mt-1 text-xs"
            error={!!errors.total_cost}
            aria-invalid={!!errors.total_cost}
          />
          <FieldError message={errors.total_cost} />
        </div>
        <div>
          <Label htmlFor="edit_plan_period">{t("paymentPlansView.periodByYears")}</Label>
          <Input
            id="edit_plan_period"
            type="number"
            min="0"
            dir="ltr"
            value={periodByYears}
            onChange={(e) => {
              setPeriodByYears(e.target.value);
              clearError("period_by_years");
            }}
            className="mt-1 text-xs"
            error={!!errors.period_by_years}
            aria-invalid={!!errors.period_by_years}
          />
          <FieldError message={errors.period_by_years} />
        </div>
        <div>
          <Label>{t("paymentPlansView.status")}</Label>
          <Select
            value={status}
            onValueChange={(value) => {
              setStatus(value);
              clearError("status");
            }}
          >
            <SelectTrigger className="mt-1 text-xs" error={!!errors.status} aria-invalid={!!errors.status}>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="active">{t("common.active")}</SelectItem>
              <SelectItem value="inactive">{t("common.inactive")}</SelectItem>
            </SelectContent>
          </Select>
          <FieldError message={errors.status} />
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">{t("paymentPlansView.schedule")}</p>
          <span
            className={cn(
              "inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-semibold border",
              Math.round(totalPercentage) === 100
                ? "bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700"
                : "bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border-amber-300 dark:border-amber-700"
            )}
          >
            <Percent className="h-3 w-3" />
            {t("paymentPlansView.total", { percentage: totalPercentage })}
          </span>
        </div>

        <div className="space-y-2 max-h-[300px] overflow-y-auto pe-1">
          {rows.map((row) => (
            <div key={row.key} className="grid grid-cols-12 gap-2 items-start">
              <div className="col-span-12 sm:col-span-6">
                <Label className="text-[11px]">{t("paymentPlansView.itemType")}</Label>
                <Select value={row.type} onValueChange={(type) => updateRow(row.key, { type })}>
                  <SelectTrigger
                    className="mt-1 text-xs"
                    error={!!rowErrors[row.key]?.type}
                    aria-invalid={!!rowErrors[row.key]?.type}
                  >
                    <SelectValue placeholder={t("paymentPlansView.itemType")} />
                  </SelectTrigger>
                  <SelectContent>
                    {row.type && !PAYMENT_PLAN_ITEM_TYPES.some((o) => o.value === row.type) && (
                      <SelectItem value={row.type}>{row.type}</SelectItem>
                    )}
                    {PAYMENT_PLAN_ITEM_TYPES.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {t(option.labelKey)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FieldError message={rowErrors[row.key]?.type} />
              </div>
              <div className="col-span-5 sm:col-span-2">
                <Label className="text-[11px]">%</Label>
                <Input
                  type="number"
                  min="0"
                  step="any"
                  dir="ltr"
                  value={row.percentage}
                  onChange={(e) => updateRow(row.key, { percentage: e.target.value })}
                  className="mt-1 text-xs"
                  error={!!rowErrors[row.key]?.percentage}
                  aria-invalid={!!rowErrors[row.key]?.percentage}
                />
                <FieldError message={rowErrors[row.key]?.percentage} />
              </div>
              <div className="col-span-5 sm:col-span-3">
                <Label className="text-[11px]">{t("paymentPlansView.intervals")}</Label>
                <Input
                  type="number"
                  min="1"
                  dir="ltr"
                  value={row.intervals}
                  onChange={(e) => updateRow(row.key, { intervals: e.target.value })}
                  className="mt-1 text-xs"
                  error={!!rowErrors[row.key]?.intervals}
                  aria-invalid={!!rowErrors[row.key]?.intervals}
                />
                <FieldError message={rowErrors[row.key]?.intervals} />
              </div>
              <div className="col-span-2 sm:col-span-1 flex justify-end pt-5">
                {!row.paymentPlanItemId && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="text-red-600 hover:text-red-700"
                    aria-label={t("common.delete")}
                    disabled={isUpdating}
                    onClick={() => setRows((prev) => prev.filter((r) => r.key !== row.key))}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        <Button
          type="button"
          variant="outline"
          size="sm"
          className="gap-1.5"
          disabled={isUpdating}
          onClick={() =>
            setRows((prev) => [...prev, { key: newRowKey(), type: "Monthly installment", percentage: "", intervals: "1" }])
          }
        >
          <Plus className="h-4 w-4" />
          {t("paymentPlansView.addItem")}
        </Button>
      </div>

      <div className="flex justify-end gap-2.5 pt-4 border-t border-gray-100 dark:border-neutral-800">
        <Button type="button" variant="outline" size="sm" onClick={onDone} disabled={isUpdating}>
          {t("common.cancel")}
        </Button>
        <Button
          type="submit"
          size="sm"
          className="bg-teal-600 hover:bg-teal-700 text-white gap-1.5"
          disabled={isUpdating}
        >
          {isUpdating && <Loader2 className="w-4 h-4 animate-spin" />}
          {isUpdating ? t("common.saving") : t("common.save")}
        </Button>
      </div>
    </form>
  );
}
