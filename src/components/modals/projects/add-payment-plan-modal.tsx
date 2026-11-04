"use client";

import { useState } from "react";
import { useFieldArray, Controller } from "react-hook-form";
import { useForm } from "@/hooks/use-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, Check, Plus, Trash2, Percent } from "lucide-react";
import { addProjectPayment, addPaymentPlanItem } from "@/data/api-client";
import { PAYMENT_PLAN_ITEM_TYPES, buildPaymentPlanPayload } from "@/lib/payment-plans";
import { paymentPlansListQueryKey } from "@/hooks/use-payment-plan-actions";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { DEFAULT_PAYMENT_PLAN_TYPE, PaymentPlanTypeSelect } from "@/components/shared/PaymentPlanTypeSelect";
import { cn } from "@/lib/utils";
import { FieldError, FormErrorAlert } from "@/components/ui/form-message";
import { parseApiError } from "@/lib/api-errors";
import { scrollToFirstInvalidField } from "@/lib/form-utils";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import {
  getPaymentPlanDetailsSchema,
  getPaymentPlanItemRowSchema,
  paymentPlanIssuesToErrors,
  type PaymentPlanItemRowErrors,
} from "@/validators/payment-plan.schema";

interface AddPaymentPlanModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectId: number;
  developerId: number;
  status?: string;
}

interface TypeRow {
  type_key: string;
  value: string;
  intervals: string;
}

const typeOptions = PAYMENT_PLAN_ITEM_TYPES;

/** Fields of the plan details step that the backend may report errors for. */
const PLAN_FIELDS = ["name", "description", "total_cost", "period_by_years", "payment_plan_type"];

export function AddPaymentPlanModal({
  isOpen,
  onClose,
  projectId,
  developerId,
  status = "active",
}: AddPaymentPlanModalProps) {
  const queryClient = useQueryClient();
  const { data: session } = useSession();
  const token = session?.user?.accessToken;
  const { t, language } = useLanguage();
  const isAr = language === "ar";

  const [step, setStep] = useState(1);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [period, setPeriod] = useState<number | string>("");
  const [planType, setPlanType] = useState(DEFAULT_PAYMENT_PLAN_TYPE);
  const [totalCost, setTotalCost] = useState("");

  const [paymentPlanId, setPaymentPlanId] = useState<number | null>(null);

  const [planErrors, setPlanErrors] = useState<Record<string, string>>({});
  const [planGeneralError, setPlanGeneralError] = useState<string | undefined>();
  // Installment row errors, keyed by the field array's stable row id.
  const [rowErrors, setRowErrors] = useState<Record<string, PaymentPlanItemRowErrors>>({});
  const [itemsGeneralError, setItemsGeneralError] = useState<string | undefined>();

  const clearPlanError = (field: string) => {
    setPlanErrors((prev) => {
      if (!(field in prev)) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const clearRowError = (rowId: string, field: keyof PaymentPlanItemRowErrors) => {
    setRowErrors((prev) => {
      if (!prev[rowId]?.[field]) return prev;
      return { ...prev, [rowId]: { ...prev[rowId], [field]: undefined } };
    });
  };

  const {
    register,
    reset: resetRHF,
    getValues,
    watch,
    control,
  } = useForm<{ types: TypeRow[] }>({
    defaultValues: { types: [] },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "types",
  });

  const watchedTypes = watch("types");
  const totalPercentage = (watchedTypes || []).reduce((acc, row) => {
    const val = parseFloat(row?.value || "0");
    return acc + (isNaN(val) ? 0 : val);
  }, 0);

  const createPlanMutation = useMutation({
    mutationFn: async (data: unknown) =>
      addProjectPayment(
        data as Parameters<typeof addProjectPayment>[0],
        token!,
      ),
    onSuccess: (data: any) => {
      const planId =
        data?.data?.payment_plan_id ??
        data?.payment_plan_id ??
        data?.data?.id ??
        data?.id;

      if (planId) {
        setPaymentPlanId(Number(planId));
      }

      const currentTypes = getValues("types");
      if (!currentTypes || currentTypes.length === 0) {
        append({ type_key: "Down payment", value: "20", intervals: "1" });
        append({ type_key: "Quarterly installment", value: "40", intervals: "4" });
        append({ type_key: "Handover installment", value: "40", intervals: "1" });
      }

      setStep(2);
      toast.success(t("projects.paymentPlans.planCreatedSuccess"));
      queryClient.invalidateQueries({ queryKey: ["projectDetails"] });
      queryClient.invalidateQueries({ queryKey: paymentPlansListQueryKey });
    },
    onError: (error: Error) => {
      console.error("Upload error:", error);
      const { fieldErrors, generalMessage, summary } = parseApiError(error, {
        t,
        fallbackMessage: t("projects.paymentPlans.createFailed"),
        fields: PLAN_FIELDS,
        fieldMap: { period: "period_by_years" },
      });
      setPlanErrors(fieldErrors);
      setPlanGeneralError(generalMessage);
      if (Object.keys(fieldErrors).length > 0 || generalMessage) {
        scrollToFirstInvalidField();
      }
      toast.error(summary, { id: API_ERROR_TOAST_ID });
    },
  });

  const createItemsMutation = useMutation({
    mutationFn: async (items: TypeRow[]) => {
      if (!paymentPlanId) {
        throw new Error(t("projects.paymentPlans.planIdMissing"));
      }
      return Promise.all(
        items.map((row) =>
          addPaymentPlanItem(
            {
              payment_plan_id: paymentPlanId,
              type: row.type_key,
              percentage: Number(row.value) || 0,
              intervals: Number(row.intervals) || 0,
            },
            token!
          )
        )
      );
    },
    onSuccess: () => {
      toast.success(t("projects.paymentPlans.createSuccess"));
      queryClient.invalidateQueries({ queryKey: ["projectDetails"] });
      resetAndClose();
    },
    onError: (error: Error) => {
      console.error("Error creating items:", error);
      // Rows are sent in parallel, so a backend error can't be tied to a single row.
      const { generalMessage, summary } = parseApiError(error, {
        t,
        fallbackMessage: t("projects.paymentPlans.itemsCreateFailed"),
      });
      setItemsGeneralError(generalMessage ?? summary);
      toast.error(summary, { id: API_ERROR_TOAST_ID });
    },
  });

  const handleCreatePlan = (e: React.FormEvent) => {
    e.preventDefault();
    if (createPlanMutation.isPending) return;
    setPlanGeneralError(undefined);
    const result = getPaymentPlanDetailsSchema(t).safeParse({
      name,
      description,
      total_cost: totalCost,
      period_by_years: String(period),
    });
    if (!result.success) {
      const errors = paymentPlanIssuesToErrors(result.error.issues);
      setPlanErrors(errors);
      scrollToFirstInvalidField(e.currentTarget);
      return;
    }
    setPlanErrors({});

    const payload = {
      ...buildPaymentPlanPayload(
        {
          name,
          description,
          payment_plan_type: planType,
          total_cost: Number(totalCost) || 0,
          status: status || "active",
          period_by_years: Number(period) || 1,
        },
        session?.user?.id ? String(session.user.id) : undefined
      ),
      entity_type: "PROJECTS",
      entities: [{ entity_id: projectId, developer_id: developerId }],
    };

    createPlanMutation.mutate(payload as unknown as any);
  };

  const handleCreateItems = async (e?: React.MouseEvent<HTMLButtonElement>) => {
    if (createItemsMutation.isPending) return;
    if (!paymentPlanId) {
      toast.error(t("projects.paymentPlans.planIdMissing"));
      return;
    }

    setItemsGeneralError(undefined);
    const { types } = getValues();
    if (!types || types.length === 0) {
      toast.error(t("projects.paymentPlans.validation.atLeastOneItem"));
      return;
    }

    const rowSchema = getPaymentPlanItemRowSchema(t);
    const nextRowErrors: Record<string, PaymentPlanItemRowErrors> = {};
    types.forEach((row, index) => {
      const result = rowSchema.safeParse({
        type: row.type_key ?? "",
        percentage: String(row.value ?? ""),
        intervals: String(row.intervals ?? ""),
      });
      if (!result.success && fields[index]) {
        nextRowErrors[fields[index].id] = paymentPlanIssuesToErrors(result.error.issues);
      }
    });
    setRowErrors(nextRowErrors);
    if (Object.keys(nextRowErrors).length > 0) {
      toast.error(t("paymentPlansView.itemsInvalid"));
      scrollToFirstInvalidField(e?.currentTarget ?? null);
      return;
    }

    createItemsMutation.mutate(types);
  };

  const isPending = createPlanMutation.isPending || createItemsMutation.isPending;

  const handleClose = () => {
    if (isPending) return;
    resetAndClose();
  };

  const resetAndClose = () => {
    setStep(1);
    setName("");
    setDescription("");
    setPeriod("");
    setPlanType(DEFAULT_PAYMENT_PLAN_TYPE);
    setTotalCost("");
    setPaymentPlanId(null);
    setPlanErrors({});
    setPlanGeneralError(undefined);
    setRowErrors({});
    setItemsGeneralError(undefined);
    resetRHF({ types: [] });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={
        step === 1
          ? isAr
            ? "إنشاء خطة سداد"
            : "Create Payment Plan"
          : isAr
          ? "إضافة الأقساط وجدول السداد"
          : "Add Payment Plan Installments"
      }
      description={
        step === 1
          ? isAr
            ? "الخطوة 1: أدخل بيانات الخطة الأساسية."
            : "Step 1: Enter basic plan details."
          : isAr
          ? "الخطوة 2: أضف بنود الأقساط والنسب المئوية."
          : "Step 2: Configure installment breakdown & percentages."
      }
      size="lg"
      showCloseButton={true}
    >
      {step === 1 ? (
        <form noValidate onSubmit={handleCreatePlan} className="space-y-4 pt-1">
          <FormErrorAlert message={planGeneralError} />

          <div>
            <Label htmlFor="plan_name_input">
              {isAr ? "اسم الخطة" : "Plan Name"} <span className="text-red-500">*</span>
            </Label>
            <Input
              id="plan_name_input"
              placeholder={isAr ? "مثال: خطة 60/40 أثناء الإنشاء" : "e.g. 60/40 Construction Plan"}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                clearPlanError("name");
              }}
              className="mt-1 text-xs"
              required
              error={!!planErrors.name}
              aria-invalid={!!planErrors.name}
            />
            <FieldError message={planErrors.name} />
          </div>

          <div>
            <Label htmlFor="plan_desc_input">{isAr ? "الوصف" : "Description"}</Label>
            <Textarea
              id="plan_desc_input"
              placeholder={isAr ? "اكتب تفاصيل الخطة هنا" : "Write plan description here"}
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
                clearPlanError("description");
              }}
              rows={2}
              className="mt-1 text-xs"
              error={!!planErrors.description}
              aria-invalid={!!planErrors.description}
            />
            <FieldError message={planErrors.description} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <Label htmlFor="plan_type_input">{t("paymentPlansView.planType")}</Label>
              <PaymentPlanTypeSelect
                id="plan_type_input"
                value={planType}
                onChange={(value) => {
                  setPlanType(value);
                  clearPlanError("payment_plan_type");
                }}
              />
              <FieldError message={planErrors.payment_plan_type} />
            </div>
            <div>
              <Label htmlFor="plan_total_cost_input">{t("paymentPlansView.totalCost")}</Label>
              <Input
                id="plan_total_cost_input"
                type="number"
                min="0"
                step="any"
                dir="ltr"
                value={totalCost}
                onChange={(e) => {
                  setTotalCost(e.target.value);
                  clearPlanError("total_cost");
                }}
                className="mt-1 text-xs"
                error={!!planErrors.total_cost}
                aria-invalid={!!planErrors.total_cost}
              />
              <FieldError message={planErrors.total_cost} />
            </div>
          </div>

          <div>
            <Label htmlFor="plan_period_input">{isAr ? "المدة (بالسنوات)" : "Period (Years)"}</Label>
            <Input
              id="plan_period_input"
              type="number"
              min="0"
              placeholder="e.g. 3"
              dir="ltr"
              value={period}
              onChange={(e) => {
                setPeriod(e.target.value);
                clearPlanError("period_by_years");
              }}
              className="mt-1 text-xs"
              error={!!planErrors.period_by_years}
              aria-invalid={!!planErrors.period_by_years}
            />
            <FieldError message={planErrors.period_by_years} />
          </div>

          <div className="flex justify-end gap-2.5 pt-4 border-t border-gray-100 dark:border-neutral-800">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleClose}
              disabled={createPlanMutation.isPending}
            >
              {t("common.cancel")}
            </Button>
            <Button
              type="submit"
              size="sm"
              className="bg-teal-600 hover:bg-teal-700 text-white gap-1.5"
              disabled={createPlanMutation.isPending}
            >
              {createPlanMutation.isPending ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>{isAr ? "جاري الإنشاء..." : "Creating..."}</span>
                </>
              ) : (
                <>
                  <Check className="w-4 h-4" />
                  <span>{isAr ? "متابعة لإضافة الأقساط" : "Continue to Installments"}</span>
                </>
              )}
            </Button>
          </div>
        </form>
      ) : (
        <div className="space-y-4 pt-1">
          <FormErrorAlert message={itemsGeneralError} />

          <div className="bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800/60 p-3 rounded-lg flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <p className="text-xs font-semibold text-teal-900 dark:text-teal-200">
                {name}
              </p>
              <p className="text-[11px] text-teal-700 dark:text-teal-400">
                {isAr
                  ? "أضف بنود الأقساط ونسبة كل بند. يجب أن يصل المجموع إلى 100%."
                  : "Configure the installment schedule and percentages (target: 100%)."}
              </p>
            </div>
            <div
              className={cn(
                "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold self-start sm:self-auto",
                Math.round(totalPercentage) === 100
                  ? "bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700"
                  : "bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-700"
              )}
            >
              <Percent className="h-3 w-3" />
              <span>{isAr ? `الإجمالي: ${totalPercentage}%` : `Total: ${totalPercentage}%`}</span>
            </div>
          </div>

          <div className="space-y-2.5 max-h-[320px] overflow-y-auto pe-1">
            {fields.map((field, index) => (
              <div
                key={field.id}
                className="flex items-start gap-2 p-2.5 rounded-lg border border-gray-200 dark:border-neutral-800 bg-gray-50/60 dark:bg-neutral-900"
              >
                <div className="flex-1 min-w-[140px]">
                  <Label className="text-[10px] text-gray-500 dark:text-gray-400 block mb-1">
                    {isAr ? "نوع الدفعة / القسط" : "Installment Type"}
                  </Label>
                  <Controller
                    name={`types.${index}.type_key`}
                    control={control}
                    render={({ field: selectField }) => (
                      <Select
                        value={selectField.value || "Monthly installment"}
                        onValueChange={(value) => {
                          selectField.onChange(value);
                          clearRowError(field.id, "type");
                        }}
                      >
                        <SelectTrigger
                          ref={selectField.ref}
                          className="h-8 text-xs bg-white dark:bg-neutral-950"
                          error={!!rowErrors[field.id]?.type}
                          aria-invalid={!!rowErrors[field.id]?.type}
                        >
                          <SelectValue placeholder={t("common.selectType")} />
                        </SelectTrigger>
                        <SelectContent className="max-h-56">
                          {typeOptions.map((opt) => (
                            <SelectItem key={opt.value} value={opt.value} className="text-xs">
                              {t(opt.labelKey)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  <FieldError message={rowErrors[field.id]?.type} />
                </div>

                <div className="w-28 sm:w-32">
                  <Label className="text-[10px] text-gray-500 dark:text-gray-400 block mb-1">
                    {isAr ? "النسبة (%)" : "Percentage (%)"}
                  </Label>
                  <div className="relative">
                    <Input
                      placeholder="e.g. 20"
                      type="number"
                      step="any"
                      min="0"
                      max="100"
                      dir="ltr"
                      {...register(`types.${index}.value`, {
                        onChange: () => clearRowError(field.id, "percentage"),
                      })}
                      className="h-8 text-xs pe-6 bg-white dark:bg-neutral-950"
                      error={!!rowErrors[field.id]?.percentage}
                      aria-invalid={!!rowErrors[field.id]?.percentage}
                    />
                    <Percent className="absolute end-2 top-1/2 -translate-y-1/2 h-3 w-3 text-gray-400 pointer-events-none" />
                  </div>
                  <FieldError message={rowErrors[field.id]?.percentage} />
                </div>

                <div className="w-24 sm:w-28">
                  <Label className="text-[10px] text-gray-500 dark:text-gray-400 block mb-1">
                    {isAr ? "الفترة / الأقساط" : "Intervals"}
                  </Label>
                  <Input
                    placeholder="e.g. 1"
                    type="number"
                    min="1"
                    dir="ltr"
                    {...register(`types.${index}.intervals`, {
                      onChange: () => clearRowError(field.id, "intervals"),
                    })}
                    className="h-8 text-xs bg-white dark:bg-neutral-950"
                    error={!!rowErrors[field.id]?.intervals}
                    aria-invalid={!!rowErrors[field.id]?.intervals}
                  />
                  <FieldError message={rowErrors[field.id]?.intervals} />
                </div>

                <div className="pt-4">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    disabled={createItemsMutation.isPending}
                    aria-label={t("common.delete")}
                    onClick={() => remove(index)}
                    className="h-8 w-8 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 cursor-pointer"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-1">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => append({ type_key: "Monthly installment", value: "", intervals: "1" })}
              disabled={createItemsMutation.isPending}
              className="text-xs h-8 gap-1.5 cursor-pointer text-gray-700 dark:text-gray-300"
            >
              <Plus className="h-3.5 w-3.5" />
              <span>{isAr ? "إضافة قسط" : "Add Installment"}</span>
            </Button>

            <span className="text-[11px] text-gray-400 dark:text-gray-500">
              {fields.length} {isAr ? "أقساط" : "items"}
            </span>
          </div>

          <div className="flex justify-end gap-2.5 pt-4 border-t border-gray-100 dark:border-neutral-800">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleClose}
              disabled={createItemsMutation.isPending}
            >
              {isAr ? "تخطي / تم" : "Done / Close"}
            </Button>
            <Button
              type="button"
              size="sm"
              className="bg-teal-600 hover:bg-teal-700 text-white gap-1.5"
              onClick={handleCreateItems}
              disabled={createItemsMutation.isPending || fields.length === 0}
            >
              {createItemsMutation.isPending ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>{isAr ? "جاري الحفظ..." : "Saving..."}</span>
                </>
              ) : (
                <>
                  <Check className="w-4 h-4" />
                  <span>{isAr ? "حفظ الأقساط" : "Save Installments"}</span>
                </>
              )}
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
}
