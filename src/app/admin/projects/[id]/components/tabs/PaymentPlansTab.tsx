"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, Eye, Pencil } from "lucide-react";
import { deletePaymentPlan } from "@/data/api-client";
import { AddPaymentPlanModal } from "@/components/modals/projects/add-payment-plan-modal";
import { DeleteFeatureModal } from "@/components/modals/projects/delete-feature-modal";
import { PaymentPlansList } from "@/components/shared/PaymentPlansList";
import { ViewPaymentPlanModal } from "@/components/modals/payment-plans/view-payment-plan-modal";
import { EditPaymentPlanModal } from "@/components/modals/payment-plans/edit-payment-plan-modal";
import { extractPaymentPlans, type PaymentPlanView } from "@/lib/payment-plans";
import { paymentPlansListQueryKey, useEntityPaymentPlans } from "@/hooks/use-payment-plan-actions";
import { getApiErrorMessage } from "@/lib/api-errors";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import { useLanguage } from "@/contexts/LanguageContext";

interface PaymentPlansTabProps {
  projectId: number;
  developerId: number;
  token: string;
  paymentPlans: unknown[];
  currency: string;
}

export function PaymentPlansTab({
  projectId,
  developerId,
  token,
  paymentPlans,
  currency,
}: PaymentPlansTabProps) {
  const queryClient = useQueryClient();
  const { t } = useLanguage();
  const { plans } = useEntityPaymentPlans(extractPaymentPlans({ paymentPlans }), "PROJECTS", projectId);

  const [isPaymentPlanModalOpen, setIsPaymentPlanModalOpen] = useState(false);
  const [paymentPlanToDelete, setPaymentPlanToDelete] = useState<PaymentPlanView | null>(null);
  const [viewPlanId, setViewPlanId] = useState<number | null>(null);
  const [editPlanId, setEditPlanId] = useState<number | null>(null);

  const deletePaymentPlanMutation = useMutation({
    mutationFn: (planId: number) => deletePaymentPlan(planId, token),
    onSuccess: () => {
      toast.success(t("projects.messages.paymentPlanDeleteSuccess"));
      queryClient.invalidateQueries({ queryKey: ["projectDetails", projectId.toString()] });
      queryClient.invalidateQueries({ queryKey: paymentPlansListQueryKey });
      setPaymentPlanToDelete(null);
    },
    onError: (error) => {
      toast.error(getApiErrorMessage(error, t, t("projects.messages.paymentPlanDeleteFailed")), { id: API_ERROR_TOAST_ID });
    },
  });

  const confirmDeletePaymentPlan = () => {
    if (paymentPlanToDelete?.paymentPlanId) {
      deletePaymentPlanMutation.mutate(paymentPlanToDelete.paymentPlanId);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">{t("editProject.tabs.paymentPlans")}</h3>
        <Button
          className="bg-[#008081] hover:bg-[#006666] text-white gap-2"
          onClick={() => setIsPaymentPlanModalOpen(true)}
        >
          <Plus className="h-4 w-4" />
          {t("projects.details.addPaymentPlan")}
        </Button>
      </div>

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
              <Button
                variant="ghost"
                size="icon"
                className="text-red-600 hover:text-red-700"
                aria-label={t("common.delete")}
                onClick={() => setPaymentPlanToDelete(plan)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </>
          ) : null
        }
      />

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

      <AddPaymentPlanModal
        isOpen={isPaymentPlanModalOpen}
        onClose={() => setIsPaymentPlanModalOpen(false)}
        projectId={projectId}
        developerId={developerId}
        status="active"
      />

      <DeleteFeatureModal
        isOpen={paymentPlanToDelete !== null}
        onClose={() => setPaymentPlanToDelete(null)}
        onConfirm={confirmDeletePaymentPlan}
        feature={
          paymentPlanToDelete
            ? {
              feature_id: paymentPlanToDelete.paymentPlanId ?? 0,
              feature_name: paymentPlanToDelete.name,
              value: paymentPlanToDelete.totalCost?.toString() || "",
              description: paymentPlanToDelete.description,
              is_amenity: 0,
            }
            : null
        }
        isDeleting={deletePaymentPlanMutation.isPending}
      />
    </div>
  );
}
