"use client";

import { Loader2 } from "lucide-react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PaymentPlansList } from "@/components/shared/PaymentPlansList";
import { usePaymentPlanDetail } from "@/hooks/use-payment-plan-actions";
import { useLanguage } from "@/contexts/LanguageContext";

interface ViewPaymentPlanModalProps {
  isOpen: boolean;
  onClose: () => void;
  paymentPlanId: number | null;
  currency?: string;
  onEdit?: () => void;
}

export function ViewPaymentPlanModal({ isOpen, onClose, paymentPlanId, currency, onEdit }: ViewPaymentPlanModalProps) {
  const { t } = useLanguage();
  const { data: plan, isLoading, isError } = usePaymentPlanDetail(paymentPlanId, isOpen);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={t("paymentPlansView.viewTitle")}
      size="lg"
      footer={
        <div className="flex justify-end gap-2.5">
          <Button type="button" variant="outline" size="sm" onClick={onClose}>
            {t("common.close")}
          </Button>
          {onEdit && plan && (
            <Button type="button" size="sm" className="bg-teal-600 hover:bg-teal-700 text-white" onClick={onEdit}>
              {t("common.edit")}
            </Button>
          )}
        </div>
      }
    >
      {isLoading ? (
        <div className="flex justify-center py-10">
          <Loader2 className="h-6 w-6 animate-spin text-teal-600" />
        </div>
      ) : isError || !plan ? (
        <p className="py-10 text-center text-sm text-gray-500 dark:text-gray-400">{t("paymentPlansView.loadFailed")}</p>
      ) : (
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2 text-xs">
            {plan.paymentPlanType && (
              <Badge variant="outline">
                {t("paymentPlansView.planType")}: {plan.paymentPlanType}
              </Badge>
            )}
            {plan.status && (
              <Badge variant="outline">
                {plan.status === "active" ? t("common.active") : plan.status === "inactive" ? t("common.inactive") : plan.status}
              </Badge>
            )}
            {plan.periodByYears ? (
              <Badge variant="outline">{t("paymentPlansView.periodYears", { years: plan.periodByYears })}</Badge>
            ) : null}
          </div>
          <PaymentPlansList plans={[plan]} currency={currency} />
        </div>
      )}
    </Modal>
  );
}
