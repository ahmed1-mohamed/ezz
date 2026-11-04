"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CreditCard, Eye, Pencil } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { PaymentPlansList } from "@/components/shared/PaymentPlansList";
import { ViewPaymentPlanModal } from "@/components/modals/payment-plans/view-payment-plan-modal";
import { EditPaymentPlanModal } from "@/components/modals/payment-plans/edit-payment-plan-modal";
import type { PaymentPlanView } from "@/lib/payment-plans";
import { useEntityPaymentPlans } from "@/hooks/use-payment-plan-actions";

interface PropertyPaymentPlansProps {
  plans: PaymentPlanView[];
  propertyId?: number;
  currency?: string;
}

export function PropertyPaymentPlans({ plans: summaries, propertyId, currency }: PropertyPaymentPlansProps) {
  const { t } = useLanguage();
  const { plans } = useEntityPaymentPlans(summaries, "PROPERTIES", propertyId);
  const [viewPlanId, setViewPlanId] = useState<number | null>(null);
  const [editPlanId, setEditPlanId] = useState<number | null>(null);

  return (
    <Card className="border border-gray-200 dark:border-neutral-800 shadow-xs overflow-hidden">
      <CardHeader className="pb-3 border-b border-gray-100 dark:border-neutral-800/80 flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-teal-50 dark:bg-teal-950/50 text-teal-600 dark:text-teal-400">
            <CreditCard className="w-4 h-4" />
          </div>
          <CardTitle className="text-base font-semibold text-gray-900 dark:text-gray-100">
            {t("paymentPlansView.title")}
          </CardTitle>
        </div>
        {plans.length > 0 && (
          <Badge variant="outline" className="text-xs font-normal">
            {t("paymentPlansView.plansCount", { count: plans.length })}
          </Badge>
        )}
      </CardHeader>
      <CardContent className="pt-4">
        <PaymentPlansList
          plans={plans}
          currency={currency}
          renderActions={(plan) =>
            plan.paymentPlanId ? (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label={t("paymentPlansView.view")}
                  onClick={() => setViewPlanId(plan.paymentPlanId!)}
                >
                  <Eye className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label={t("common.edit")}
                  onClick={() => setEditPlanId(plan.paymentPlanId!)}
                >
                  <Pencil className="h-4 w-4" />
                </Button>
              </>
            ) : null
          }
        />
      </CardContent>

      {viewPlanId !== null && (
        <ViewPaymentPlanModal
          isOpen
          onClose={() => setViewPlanId(null)}
          paymentPlanId={viewPlanId}
          currency={currency}
          onEdit={() => {
            setEditPlanId(viewPlanId);
            setViewPlanId(null);
          }}
        />
      )}
      {editPlanId !== null && (
        <EditPaymentPlanModal isOpen onClose={() => setEditPlanId(null)} paymentPlanId={editPlanId} />
      )}
    </Card>
  );
}
