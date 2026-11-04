"use client";

import { useState, useEffect } from "react";
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
import { Percent } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { FieldError } from "@/components/ui/form-message";
import { scrollToFirstInvalidField } from "@/lib/form-utils";
import { DEFAULT_PAYMENT_PLAN_TYPE, PaymentPlanTypeSelect } from "@/components/shared/PaymentPlanTypeSelect";
import { PAYMENT_PERIOD_OPTIONS, PropertyPaymentPlan } from "./payment-plans.types";

type PlanField =
  | "name"
  | "description"
  | "totalCost"
  | "periodByYears"
  | "downPayment"
  | "handoverPercentage"
  | "installmentsCount"
  | "period";

const isPercent = (value: number) => Number.isFinite(value) && value >= 0 && value <= 100;

interface AddPropertyPaymentPlanModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (plan: PropertyPaymentPlan) => void;
  initialData?: PropertyPaymentPlan | null;
}

export function AddPropertyPaymentPlanModal({
  isOpen,
  onClose,
  onSave,
  initialData,
}: AddPropertyPaymentPlanModalProps) {
  const { t } = useLanguage();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [downPayment, setDownPayment] = useState<number>(20);
  const [installmentsCount, setInstallmentsCount] = useState<number>(4);
  const [period, setPeriod] = useState<string>("Quarterly");
  const [handoverPercentage, setHandoverPercentage] = useState<number>(40);
  const [planType, setPlanType] = useState(DEFAULT_PAYMENT_PLAN_TYPE);
  const [totalCost, setTotalCost] = useState("");
  const [periodByYears, setPeriodByYears] = useState("");
  const [status, setStatus] = useState("active");
  const [errors, setErrors] = useState<Partial<Record<PlanField, string>>>({});

  const clearError = (...fields: PlanField[]) =>
    setErrors((prev) => {
      if (!fields.some((field) => prev[field])) return prev;
      const next = { ...prev };
      fields.forEach((field) => delete next[field]);
      return next;
    });

  useEffect(() => {
    setErrors({});
    if (initialData) {
      setName(initialData.name || "");
      setDescription(initialData.description || "");
      setDownPayment(initialData.down_payment_percentage ?? 20);
      setInstallmentsCount(initialData.installments_count ?? 4);
      setPeriod(initialData.period || "Quarterly");
      setHandoverPercentage(initialData.handover_percentage ?? 40);
      setPlanType(initialData.payment_plan_type || DEFAULT_PAYMENT_PLAN_TYPE);
      setTotalCost(initialData.total_cost != null ? String(initialData.total_cost) : "");
      setPeriodByYears(initialData.period_by_years != null ? String(initialData.period_by_years) : "");
      setStatus(initialData.status === "inactive" ? "inactive" : "active");
    } else {
      setName("");
      setDescription("");
      setDownPayment(20);
      setInstallmentsCount(4);
      setPeriod("Quarterly");
      setHandoverPercentage(40);
      setPlanType(DEFAULT_PAYMENT_PLAN_TYPE);
      setTotalCost("");
      setPeriodByYears("");
      setStatus("active");
    }
  }, [initialData, isOpen]);

  const handleSubmit = (e?: React.FormEvent | React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const nextErrors: Partial<Record<PlanField, string>> = {};
    if (!name.trim()) nextErrors.name = t("validation.required");
    else if (name.trim().length > 255) nextErrors.name = t("validation.max_length", { max: 255 });
    if (description.trim().length > 2000) nextErrors.description = t("validation.max_length", { max: 2000 });
    if (totalCost.trim() !== "" && !(Number(totalCost) >= 0)) nextErrors.totalCost = t("validation.positive_number");
    if (periodByYears.trim() !== "" && !(Number.isInteger(Number(periodByYears)) && Number(periodByYears) >= 0)) {
      nextErrors.periodByYears = t("validation.positive_integer");
    }
    if (!isPercent(Number(downPayment))) nextErrors.downPayment = t("properties.validation.percentRange");
    if (!isPercent(Number(handoverPercentage))) {
      nextErrors.handoverPercentage = t("properties.validation.percentRange");
    } else if (!nextErrors.downPayment && Number(downPayment) + Number(handoverPercentage) > 100) {
      nextErrors.handoverPercentage = t("properties.validation.percentTotalExceeded");
    }
    if (!(Number.isInteger(Number(installmentsCount)) && installmentsCount >= 1 && installmentsCount <= 120)) {
      nextErrors.installmentsCount = t("properties.validation.installmentsRange", { min: 1, max: 120 });
    }
    if (!period) nextErrors.period = t("validation.required");

    setErrors(nextErrors);
    const firstInvalid = Object.keys(nextErrors)[0] as PlanField | undefined;
    if (firstInvalid) {
      scrollToFirstInvalidField(e?.currentTarget ?? null);
      return;
    }

    onSave({
      ...initialData,
      id: initialData?.id || `plan_${Date.now()}`,
      name: name.trim(),
      description: description.trim() || undefined,
      down_payment_percentage: Number(downPayment) || 0,
      installments_count: Number(installmentsCount) || 1,
      period: period || "Monthly",
      handover_percentage: Number(handoverPercentage) || 0,
      payment_plan_type: planType.trim() || undefined,
      total_cost: totalCost.trim() !== "" ? Number(totalCost) : undefined,
      period_by_years: periodByYears.trim() !== "" ? Number(periodByYears) : undefined,
      status,
    });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={
        initialData
          ? t("properties.create.paymentPlans.editPlanTitle")
          : t("properties.create.paymentPlans.addPlanTitle")
      }
      description={
        t("properties.create.paymentPlans.modalDescription")
      }
      size="lg"
    >
      <div className="space-y-3 pt-1">
        <div>
          <Label htmlFor="plan_name" className="text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300">
            {t("properties.create.paymentPlans.planName")} *
          </Label>
          <Input
            id="plan_name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              clearError("name");
            }}
            placeholder={t("properties.create.paymentPlans.planNamePlaceholder")}
            required
            error={!!errors.name}
            aria-invalid={!!errors.name}
            className="mt-1 text-xs h-8"
          />
          <FieldError message={errors.name} />
        </div>

        <div>
          <Label htmlFor="plan_desc" className="text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300">
            {t("properties.create.paymentPlans.description")}
          </Label>
          <Textarea
            id="plan_desc"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              clearError("description");
            }}
            placeholder={t("properties.create.paymentPlans.descriptionPlaceholder")}
            rows={2}
            error={!!errors.description}
            aria-invalid={!!errors.description}
            className="mt-1 text-xs min-h-[60px]"
          />
          <FieldError message={errors.description} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <Label htmlFor="plan_type" className="text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300">
              {t("paymentPlansView.planType")}
            </Label>
            <PaymentPlanTypeSelect id="plan_type" value={planType} onChange={setPlanType} className="h-8" />
          </div>

          <div>
            <Label className="text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300">
              {t("paymentPlansView.status")}
            </Label>
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger className="mt-1 text-xs h-8">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active" className="text-xs">{t("common.active")}</SelectItem>
                <SelectItem value="inactive" className="text-xs">{t("common.inactive")}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="plan_total_cost" className="text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300">
              {t("paymentPlansView.totalCost")}
            </Label>
            <Input
              id="plan_total_cost"
              type="number"
              min="0"
              step="any"
              value={totalCost}
              onChange={(e) => {
                setTotalCost(e.target.value);
                clearError("totalCost");
              }}
              dir="ltr"
              error={!!errors.totalCost}
              aria-invalid={!!errors.totalCost}
              className="mt-1 text-xs h-8"
            />
            <FieldError message={errors.totalCost} />
          </div>

          <div>
            <Label htmlFor="plan_period_years" className="text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300">
              {t("paymentPlansView.periodByYears")}
            </Label>
            <Input
              id="plan_period_years"
              type="number"
              min="0"
              value={periodByYears}
              onChange={(e) => {
                setPeriodByYears(e.target.value);
                clearError("periodByYears");
              }}
              dir="ltr"
              error={!!errors.periodByYears}
              aria-invalid={!!errors.periodByYears}
              className="mt-1 text-xs h-8"
            />
            <FieldError message={errors.periodByYears} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <Label htmlFor="down_payment" className="text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300">
              {t("properties.create.paymentPlans.downPayment")} (%) *
            </Label>
            <div className="relative mt-1">
              <Input
                id="down_payment"
                type="number"
                min="0"
                max="100"
                value={downPayment}
                onChange={(e) => {
                  setDownPayment(Number(e.target.value));
                  clearError("downPayment", "handoverPercentage");
                }}
                required
                dir="ltr"
                error={!!errors.downPayment}
                aria-invalid={!!errors.downPayment}
                className="pe-7 text-xs h-8"
              />
              <Percent className="absolute end-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400 dark:text-gray-500" />
            </div>
            <FieldError message={errors.downPayment} />
          </div>

          <div>
            <Label htmlFor="handover_perc" className="text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300">
              {t("properties.create.paymentPlans.onHandover")} (%)
            </Label>
            <div className="relative mt-1">
              <Input
                id="handover_perc"
                type="number"
                min="0"
                max="100"
                value={handoverPercentage}
                onChange={(e) => {
                  setHandoverPercentage(Number(e.target.value));
                  clearError("handoverPercentage");
                }}
                dir="ltr"
                error={!!errors.handoverPercentage}
                aria-invalid={!!errors.handoverPercentage}
                className="pe-7 text-xs h-8"
              />
              <Percent className="absolute end-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400 dark:text-gray-500" />
            </div>
            <FieldError message={errors.handoverPercentage} />
          </div>

          <div>
            <Label htmlFor="installments_count" className="text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300">
              {t("properties.create.paymentPlans.installmentsCount")} *
            </Label>
            <Input
              id="installments_count"
              type="number"
              min="1"
              max="120"
              value={installmentsCount}
              onChange={(e) => {
                setInstallmentsCount(Number(e.target.value));
                clearError("installmentsCount");
              }}
              required
              dir="ltr"
              error={!!errors.installmentsCount}
              aria-invalid={!!errors.installmentsCount}
              className="mt-1 text-xs h-8"
            />
            <FieldError message={errors.installmentsCount} />
          </div>

          <div>
            <Label htmlFor="period_select" className="text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300">
              {t("properties.create.paymentPlans.period")} *
            </Label>
            <Select
              value={period}
              onValueChange={(value) => {
                setPeriod(value);
                clearError("period");
              }}
            >
              <SelectTrigger
                id="period_select"
                className="mt-1 text-xs h-8"
                error={!!errors.period}
                aria-invalid={!!errors.period}
              >
                <SelectValue placeholder={t("properties.create.paymentPlans.selectPeriod")} />
              </SelectTrigger>
              <SelectContent>
                {PAYMENT_PERIOD_OPTIONS.map((option) => (
                  <SelectItem key={option.value} value={option.value} className="text-xs">
                    {t(option.labelKey)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FieldError message={errors.period} />
          </div>
        </div>

        <div className="flex justify-end gap-2 pt-3 border-t border-gray-100 dark:border-neutral-800">
          <Button type="button" variant="outline" size="sm" onClick={onClose} className="text-xs h-8">
            {t("common.cancel")}
          </Button>
          <Button type="button" size="sm" onClick={handleSubmit} className="bg-teal-600 hover:bg-teal-700 text-white text-xs h-8">
            {initialData
              ? t("common.saveChanges")
              : t("properties.create.paymentPlans.addPlanBtn")}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
