import React, { useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

interface BookingStatusPillsProps {
  stages: any[];
  getStatusIcon: (status: string) => React.ReactNode;
  getStatusBadge: (status: string) => React.ReactNode;
  reservationId?: number | string;
}

export function BookingStatusPills({
  stages,
  getStatusIcon,
  getStatusBadge,
  reservationId,
}: BookingStatusPillsProps) {
  const { t } = useLanguage();

  const effectiveStages = useMemo(() => {
    const stage1 = stages.find((s: any) => s.id === 1);
    const stage2 = stages.find((s: any) => s.id === 2);
    const stage3 = stages.find((s: any) => s.id === 3);

    const cleanResId = reservationId ? String(reservationId).replace(/\D/g, "") : "";

    const isStage1SavedApproved =
      typeof window !== "undefined"
        ? (Boolean(reservationId) && localStorage.getItem(`approved_stage1_${reservationId}`) === "true") ||
        (Boolean(cleanResId) && localStorage.getItem(`approved_stage1_${cleanResId}`) === "true") ||
        (Boolean(reservationId) && localStorage.getItem(`reservation_${reservationId}_stage1_approved`) === "true") ||
        (Boolean(cleanResId) && localStorage.getItem(`reservation_${cleanResId}_stage1_approved`) === "true")
        : false;

    const isSalesOfferAccepted =
      typeof window !== "undefined"
        ? (Boolean(reservationId) && localStorage.getItem(`accepted_sales_offer_${reservationId}`) === "true") ||
        (Boolean(cleanResId) && localStorage.getItem(`accepted_sales_offer_${cleanResId}`) === "true")
        : false;

    const isDownPaymentApproved =
      typeof window !== "undefined"
        ? (Boolean(reservationId) && localStorage.getItem(`approved_down_payment_${reservationId}`) === "true") ||
        (Boolean(cleanResId) && localStorage.getItem(`approved_down_payment_${cleanResId}`) === "true")
        : false;

    const isStage1Complete =
      isStage1SavedApproved ||
      stage1?.status === "Complete" ||
      stage1?.currentStatus === "confirmed" ||
      stage1?.currentStatus === "approved" ||
      stage1?.currentStatus === "completed" ||
      (stage1?.currentStatusType !== "identification" && stage1?.currentStatusType !== "identification_confirmation") ||
      stages.some((s: any) => s.id > 1 && (s.status === "Complete" || (s.documents && s.documents.length > 0)));

    const isStage2Complete =
      isStage1Complete &&
      (stage2?.status === "Complete" ||
        isSalesOfferAccepted ||
        ((stage2?.currentStatusType === "sales_offer" || stage2?.currentStatusType === "sales_offer_approval") &&
          (stage2?.currentStatus === "confirmed" || stage2?.currentStatus === "approved" || stage2?.currentStatus === "completed")) ||
        stage2?.currentStatusType === "down_payment" ||
        stage2?.currentStatusType === "down_payment_pending" ||
        stage2?.currentStatusType === "sales_purchase" ||
        stage2?.currentStatusType === "sales_purchase_agreement" ||
        stages.some((s: any) => s.id > 2 && (s.status === "Complete" || (s.documents && s.documents.length > 0))));

    const isStage3Complete =
      isStage2Complete &&
      (stage3?.status === "Complete" ||
        isDownPaymentApproved ||
        ((stage3?.currentStatusType === "down_payment" || stage3?.currentStatusType === "down_payment_pending") &&
          (stage3?.currentStatus === "confirmed" || stage3?.currentStatus === "approved" || stage3?.currentStatus === "completed")) ||
        stage3?.currentStatusType === "sales_purchase" ||
        stage3?.currentStatusType === "sales_purchase_agreement" ||
        stages.some((s: any) => s.id > 3 && (s.status === "Complete" || (s.documents && s.documents.length > 0))));

    return stages.map((stage: any) => {
      if (stage.id === 1) {
        if (stage.status === "Rejected") return stage;
        if (isStage1Complete) return { ...stage, status: "Complete" };
        return { ...stage, status: "Pending" };
      }
      if (stage.id === 2) {
        if (stage.status === "Rejected") return stage;
        if (!isStage1Complete) return { ...stage, status: "Waiting" };
        if (isStage2Complete) return { ...stage, status: "Complete" };
        return { ...stage, status: "Pending" };
      }
      if (stage.id === 3) {
        if (stage.status === "Rejected") return stage;
        if (!isStage2Complete) return { ...stage, status: "Waiting" };
        if (isStage3Complete) return { ...stage, status: "Complete" };
        return { ...stage, status: "Pending" };
      }
      if (stage.id === 4) {
        if (stage.status === "Rejected") return stage;
        if (!isStage3Complete) return { ...stage, status: "Waiting" };
        if (stage.status === "Complete") return stage;
        return { ...stage, status: "Pending" };
      }
      return stage;
    });
  }, [stages, reservationId]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {effectiveStages.map((stage: any) => {
        const isStage2AwaitingAccept =
          stage.id === 2 &&
          stage.status !== "Complete" &&
          stage.status !== "Rejected" &&
          stage.documents &&
          stage.documents.length > 0;

        return (
          <div
            key={stage.id}
            className="bg-white rounded-lg border border-gray-200 p-4 flex flex-col gap-1 shadow-2xs"
          >
            <div>
              <p className="text-sm font-semibold text-gray-900">{stage.name}</p>
              {isStage2AwaitingAccept ? (
                <Badge className="bg-amber-50 text-amber-700 border-amber-200 text-xs font-medium">
                  {t("reservations.details.waitForAccept")}
                </Badge>
              ) : (
                getStatusBadge(stage.status)
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}