import { CheckCircle, XCircle, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BookingDetailsResponse } from "./types";

export function useBookingStages(
  bookingData: BookingDetailsResponse | undefined,
  reservationId: number,
  t: any
) {
  const currencyMap: Record<string, string> = {
    Dollar: "USD",
    Euro: "EUR",
    Pound: "GBP",
    EGP: "EGP",
    AED: "AED",
  };

  const formatPrice = (price: string, currency: string = "AED") => {
    const isoCode = currencyMap[currency] || currency || "AED";
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: isoCode,
    }).format(Number(price) || 0);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Complete":
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case "Rejected":
        return <XCircle className="h-5 w-5 text-red-600" />;
      case "Pending":
        return <Clock className="h-5 w-5 text-orange-600" />;
      default:
        return <Clock className="h-5 w-5 text-gray-400" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      Complete: "bg-green-50 text-green-700 border-green-200",
      Rejected: "bg-red-50 text-red-700 border-red-200",
      Pending: "bg-orange-50 text-orange-700 border-orange-200",
      Waiting: "bg-gray-50 text-gray-700 border-gray-200",
    };
    const labelKey: Record<string, string> = {
      Complete: "reservations.statusMap.completed",
      Rejected: "reservations.statusMap.cancelled",
      Pending: "reservations.statusMap.pending",
      Waiting: "reservations.details.waiting",
    };
    const label = labelKey[status] ? t(labelKey[status]) : status;
    return (
      <Badge className={`${styles[status] || styles.Waiting} text-xs`}>
        {label}
      </Badge>
    );
  };

  const getStageStatus = (
    stageId: number,
    currentStatusType?: string,
    currentStatus?: string,
    mediaObj?: any,
  ): "Complete" | "Rejected" | "Pending" | "Waiting" => {
    const rawType = (currentStatusType || "").toLowerCase().trim();
    const normType = rawType.replace(/\s+/g, "_");
    const status = (currentStatus || "").toLowerCase().trim().replace(/\s+/g, "_");
    const isCancelled = status === "cancelled" || status === "rejected" || status === "declined" || status === "expired";
    const isConfirmed = status === "confirmed" || status === "approved" || status === "complete" || status === "completed";
    const isInProcess = !isConfirmed && !isCancelled;
    const isStage1Type = normType === "identification" || normType === "identification_confirmation";
    const isStage2Type = normType === "sales_offer" || normType === "sales_offer_request" || normType === "sales_offer_approval";
     const isStage2UploadPending = normType === "sales_offer_request";
    const isStage2ApprovalType = normType === "sales_offer" || normType === "sales_offer_approval";
    const isStage3Type = normType === "down_payment" || normType === "down_payment_pending";
    const isStage4Type = normType === "sales_purchase" || normType === "spa" || normType === "sales_purchase_agreement";
    const hasSalesOfferDoc = Boolean(mediaObj?.sales_offer);
    const hasDownPaymentDoc = Boolean(mediaObj?.down_payment);
    const hasSpaDoc = Boolean(mediaObj?.sales_purchase);

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
      !(isStage1Type && isInProcess) &&
      (isStage1SavedApproved ||
        (isStage1Type && isConfirmed) ||
        isStage2Type ||
        isStage3Type ||
        isStage4Type ||
        hasSalesOfferDoc ||
        hasDownPaymentDoc ||
        hasSpaDoc ||
        isSalesOfferAccepted);

    if (stageId === 1) {
      if (isStage1Complete) return "Complete";
      if (isCancelled) return "Rejected";
      return "Pending";
    }

     const isStage2Complete =
      isStage1Complete &&
      !isStage2UploadPending &&
      !(isStage2ApprovalType && isInProcess) &&
      ((isStage2ApprovalType && isConfirmed) ||
        isSalesOfferAccepted ||
        isStage3Type ||
        isStage4Type ||
        hasDownPaymentDoc ||
        hasSpaDoc);

    // Stage 2 pending when: stage 1 is complete and stage 2 is not yet complete
    const isStage2Pending =
      isStage1Complete &&
      !isCancelled &&
      !isStage2Complete;

    if (stageId === 2) {
      if (!isStage1Complete) return "Waiting";
      if (isStage2Complete) return "Complete";
      if (isCancelled) return "Rejected";
      if (isStage2Pending || hasSalesOfferDoc) return "Pending";
      return "Waiting";
    }

     const isStage3Complete =
      isStage2Complete &&
      !(isStage3Type && isInProcess) &&
      ((isStage3Type && isConfirmed) || isDownPaymentApproved || isStage4Type || hasSpaDoc);

     const isStage3Pending =
      isStage2Complete &&
      !isCancelled &&
      !isStage3Complete;

    if (stageId === 3) {
      if (!isStage2Complete) return "Waiting";
      if (isStage3Complete) return "Complete";
      if (isCancelled) return "Rejected";
      if (isStage3Pending || hasDownPaymentDoc) return "Pending";
      return "Waiting";
    }

     if (stageId === 4) {
      if (!isStage3Complete) return "Waiting";
      if (hasSpaDoc || (isStage4Type && isConfirmed)) return "Complete";
      if (isCancelled) return "Rejected";
      return "Pending";
    }
    return "Waiting";
  };

  const getStages = () => {
    if (!bookingData) return [];

    const resObj =
      bookingData.reservation ||
      (bookingData as any)?.data?.reservation ||
      (bookingData as any)?.data ||
      bookingData ||
      {};

    const mediaObj =
      bookingData.media ||
      (bookingData as any)?.data?.media ||
      resObj?.media ||
      {};

    const userObj =
      bookingData.user ||
      (bookingData as any)?.data?.user ||
      resObj?.user ||
      (bookingData as any)?.client ||
      {};

    const statusType =
      resObj?.reservation_status_type ||
      resObj?.status_type ||
      (bookingData as any)?.status_type ||
      (bookingData as any)?.reservation_status_type ||
      "identification";

    const status =
      resObj?.reservation_status ||
      resObj?.status ||
      (bookingData as any)?.status ||
      (bookingData as any)?.reservation_status ||
      "in_process";

    const comments = resObj?.comments || (bookingData as any)?.comments;
    const authorName =
      [userObj?.first_name, userObj?.last_name].filter(Boolean).join(" ") ||
      userObj?.user_name ||
      userObj?.name ||
      t("reservations.details.client");
    const date =
      resObj?.reservation_date ||
      resObj?.created_at ||
      (bookingData as any)?.reservation_date;

     const normType = statusType.toLowerCase().trim().replace(/\s+/g, "_");
    const normStatus = status.toLowerCase().trim().replace(/\s+/g, "_");

    return [
      {
        id: 1,
        name: t("reservations.typeMap.identification"),
        status: getStageStatus(1, statusType, status, mediaObj),
        step: t("reservations.details.stepOf", { step: 1, total: 4 }),
        currentStatusType: normType,
        currentStatus: normStatus,
        subtitle: t("reservations.stages.identificationSubtitle"),
        documents: [
          mediaObj?.identification
            ? { name: t("reservations.typeMap.identification"), url: mediaObj.identification }
            : null,
          mediaObj?.selfie
            ? { name: t("reservations.details.selfie"), url: mediaObj.selfie }
            : null,
        ].filter(Boolean) as Array<{ name: string; url: string }>,
        comments: comments
          ? [
            {
              author: authorName,
              date: date,
              text: comments,
            },
          ]
          : [],
      },
      {
        id: 2,
        name: t("reservations.typeMap.sales_offer"),
        status: getStageStatus(2, statusType, status, mediaObj),
        step: t("reservations.details.stepOf", { step: 2, total: 4 }),
        currentStatusType: normType,
        currentStatus: normStatus,
        reservationId: Number(reservationId),
        subtitle:
          !mediaObj?.sales_offer
            ? t("reservations.stages.salesOfferUploadSubtitle")
            : normType.includes("sales_offer") && normStatus === "confirmed"
              ? t("reservations.stages.salesOfferApprovedSubtitle")
              : t("reservations.stages.salesOfferAwaitingSubtitle"),
        documents: mediaObj?.sales_offer
          ? [{ name: t("reservations.typeMap.sales_offer"), url: mediaObj.sales_offer }]
          : [],
      },
      {
        id: 3,
        name: t("reservations.typeMap.down_payment"),
        status: getStageStatus(3, statusType, status, mediaObj),
        step: t("reservations.details.stepOf", { step: 3, total: 4 }),
        currentStatusType: normType,
        currentStatus: normStatus,
        subtitle:
          normType.includes("sales_offer") && normStatus === "confirmed"
            ? t("reservations.stages.downPaymentAwaitingSubtitle")
            : normType.includes("down_payment") && normStatus === "in_process"
              ? t("reservations.stages.downPaymentReviewSubtitle")
              : normType.includes("down_payment") && normStatus === "confirmed"
                ? t("reservations.stages.downPaymentApprovedSubtitle")
                : t("reservations.typeMap.down_payment"),
        documents: mediaObj?.down_payment
          ? [
            {
              name: t("reservations.details.downPaymentReceipt"),
              url: mediaObj.down_payment,
            },
          ]
          : [],
      },
      {
        id: 4,
        name: t("reservations.typeMap.sales_purchase"),
        status: getStageStatus(4, statusType, status, mediaObj),
        step: t("reservations.details.stepOf", { step: 4, total: 4 }),
        currentStatusType: normType,
        currentStatus: normStatus,
        subtitle: t("reservations.stages.spaSubtitle"),
        documents: mediaObj?.sales_purchase
          ? [{ name: t("reservations.details.spaDocument"), url: mediaObj.sales_purchase }]
          : [],
      },
    ];
  };

  return {
    formatPrice,
    getStatusIcon,
    getStatusBadge,
    getStageStatus,
    getStages,
    stages: getStages(),
  };
}
