"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { usePaymentPlansList } from "@/hooks/use-payment-plan-actions";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

export const DEFAULT_PAYMENT_PLAN_TYPE = "developer";

interface PaymentPlanTypeSelectProps {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
  error?: boolean;
}

export function PaymentPlanTypeSelect({ id, value, onChange, className, error }: PaymentPlanTypeSelectProps) {
  const { t } = useLanguage();
  const { data: plans = [] } = usePaymentPlansList();

  const options = Array.from(
    new Set(
      [DEFAULT_PAYMENT_PLAN_TYPE, ...plans.map((p) => p.paymentPlanType), value]
        .map((type) => type?.trim())
        .filter((type): type is string => !!type)
    )
  );

  return (
    <Select value={value || DEFAULT_PAYMENT_PLAN_TYPE} onValueChange={onChange}>
      <SelectTrigger id={id} className={cn("mt-1 text-xs", className)} error={error}>
        <SelectValue placeholder={t("paymentPlansView.planType")} />
      </SelectTrigger>
      <SelectContent>
        {options.map((type) => (
          <SelectItem key={type} value={type} className="text-xs capitalize">
            {type}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
