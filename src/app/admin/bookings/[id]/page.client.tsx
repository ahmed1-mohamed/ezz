"use client";

import { useState, useCallback, useEffect, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import {
  ArrowLeft,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Upload,
  RotateCcw,
  Clock,
} from "lucide-react";
import useBookingDetails from "@/hooks/use-booking-details";
import { useLanguage } from "@/contexts/LanguageContext";
import { getApiErrorMessage } from "@/lib/api-errors";
import { ApproveBookingDialog } from "../components/ApproveBookingDialog";
import { DeclineBookingDialog } from "../components/DeclineBookingDialog";
import { UploadSalesOfferDialog } from "../components/UploadSalesOfferDialog";
import { ApproveDownPaymentDialog } from "../components/ApproveDownPaymentDialog";
import { UploadSPADialog } from "../components/UploadSPADialog";
import { ClientSummaryCard } from "../components/ClientSummaryCard";
import { PropertySummaryCard } from "../components/PropertySummaryCard";
import { ReservationProgressTracker } from "../components/ReservationProgressTracker";

type ActionType =
  | "approve"
  | "decline"
  | "upload-offer"
  | "approve-down-payment"
  | "decline-down-payment"
  | "upload-spa"
  | null;

export default function BookingDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { t, language } = useLanguage();
  const isRtl = language === "ar";

  const reservationId = Number(params.id);

  const {
    reservationData,
    isLoading,
    isError,
    error,
    refetch,
    mutationApprove,
    mutationDecline,
    mutationSalesOffer,
    mutationSPA,
    mutationDownPayment,
    stages,
    getStatusIcon,
    getStatusBadge,
    isApproving,
    isRejecting,
    isSalesOfferUploading,
    isDownPaymentApproving,
    isSPAUploading,
  } = useBookingDetails({ reservationId });

  const [activeAction, setActiveAction] = useState<ActionType>(null);

  const isSavedInStorage = typeof window !== "undefined" && reservationId
    ? localStorage.getItem(`approved_stage1_${reservationId}`) === "true" ||
      localStorage.getItem(`approved_stage1_${String(reservationId).replace(/\D/g, "")}`) === "true" ||
      localStorage.getItem(`reservation_${reservationId}_stage1_approved`) === "true"
    : false;

  // Derive isStage1Approved from server data and storage so it survives page refreshes
  const stage1FromServer = stages.find((s: any) => s.id === 1);
  const stage1InitiallyApproved = useMemo(() =>
    isSavedInStorage ||
    stage1FromServer?.status === "Complete" ||
    stage1FromServer?.currentStatus === "confirmed" ||
    stage1FromServer?.currentStatus === "approved" ||
    stage1FromServer?.currentStatus === "completed" ||
    stages.some((s: any) => s.id > 1 && (s.status === "Complete" || (s.documents && s.documents.length > 0)))
  , [isSavedInStorage, stage1FromServer?.status, stage1FromServer?.currentStatus, stages]);

  const [isStage1Approved, setIsStage1Approved] = useState(!!stage1InitiallyApproved);

  useEffect(() => {
    if (stage1InitiallyApproved && !isStage1Approved) {
      setIsStage1Approved(true);
    }
  }, [stage1InitiallyApproved, isStage1Approved]);

  const handleDialogClose = useCallback((): void => {
    setActiveAction(null);
    // Drop the last failure so a reopened dialog doesn't show a stale error.
    mutationApprove.reset();
    mutationDecline.reset();
    mutationSalesOffer.reset();
    mutationDownPayment.reset();
    mutationSPA.reset();
  }, [mutationApprove.reset, mutationDecline.reset, mutationSalesOffer.reset, mutationDownPayment.reset, mutationSPA.reset]);

  const handleApprove = useCallback((comments: string): void => {
    mutationApprove.mutate(
      {
        reservationId,
        comments,
        reservation_status_type: "IDENTIFICATION",
      },
      {
        onSuccess: () => {
          setIsStage1Approved(true);
          if (typeof window !== "undefined" && reservationId) {
            localStorage.setItem(`approved_stage1_${reservationId}`, "true");
            localStorage.setItem(`reservation_${reservationId}_stage1_approved`, "true");
          }
          handleDialogClose();
          setActiveAction("upload-offer");
        },
        onError: (err: any) => {
          // "Already approved" is handled like a success by the hook; for other errors the dialog
          // stays open (keeping the comments) and shows the error.
          const errMsg = String(err?.response?.data?.message || err?.message || "");
          if (errMsg.toLowerCase().includes("already approved")) handleDialogClose();
        },
      },
    );
  }, [reservationId, mutationApprove, handleDialogClose]);

  const handleDecline = useCallback((comments: string): void => {
    mutationDecline.mutate(
      {
        reservationId,
        comments,
        reservation_status_type: "IDENTIFICATION",
      },
      { onSuccess: handleDialogClose },
    );
  }, [reservationId, mutationDecline, handleDialogClose]);

  const handleUploadSalesOffer = useCallback((file: File, comments: string): void => {
    mutationSalesOffer.mutate(
      { reservationId, file, comments },
      { onSuccess: handleDialogClose },
    );
  }, [reservationId, mutationSalesOffer, handleDialogClose]);

  const handleApproveDownPayment = useCallback((comments: string): void => {
    mutationDownPayment.mutate(
      {
        reservationId,
        comments,
        reservation_status_type: "DOWN_PAYMENT",
      },
      {
        onSuccess: () => {
          handleDialogClose();
          setActiveAction("upload-spa");
        },
      },
    );
  }, [reservationId, mutationDownPayment, handleDialogClose]);

  const handleDeclineDownPayment = useCallback((comments: string): void => {
    mutationDecline.mutate(
      {
        reservationId,
        comments,
        reservation_status_type: "DOWN_PAYMENT",
      },
      { onSuccess: handleDialogClose },
    );
  }, [reservationId, mutationDecline, handleDialogClose]);

  const handleUploadSPA = useCallback((file: File, comments: string): void => {
    mutationSPA.mutate(
      { reservationId, file, comments },
      { onSuccess: handleDialogClose },
    );
  }, [reservationId, mutationSPA, handleDialogClose]);

  const isPending =
    isApproving ||
    isRejecting ||
    isSalesOfferUploading ||
    isDownPaymentApproving ||
    isSPAUploading;

  if (isLoading) {
    return (
      <div className="p-6 space-y-6 max-w-5xl mx-auto">
        <Skeleton className="h-8 w-48" />
        <div className="grid grid-cols-2 gap-6">
          <Skeleton className="h-40 rounded-xl" />
          <Skeleton className="h-40 rounded-xl" />
        </div>
        <Skeleton className="h-64 rounded-xl" />
      </div>
    );
  }

  if (isError || !reservationData) {
    return (
      <div className="p-6 max-w-5xl mx-auto">
        <div className="rounded-lg border border-red-200 bg-red-50 p-6 flex flex-col items-center gap-4">
          <AlertCircle className="h-10 w-10 text-red-500" />
          <p className="text-red-800 font-medium text-center">
            {getApiErrorMessage(error, t, t("reservations.details.failedLoad"))}
          </p>
          <Button
            variant="outline"
            onClick={() => refetch()}
            className="border-red-200 text-red-700 hover:bg-red-100 gap-2"
          >
            <RotateCcw className="h-4 w-4" />
            {t("reservations.details.tryAgain")}
          </Button>
        </div>
      </div>
    );
  }

  const { reservation, user, property, media } = reservationData as {
    reservation: Record<string, string>;
    user: Record<string, string>;
    property: Record<string, string>;
    media: Record<string, string | null>;
  };

  const normType: string = (reservation.reservation_status_type || "").toLowerCase().replace(/\s+/g, "_");
  const normStatus: string = (reservation.reservation_status || "").toLowerCase().replace(/\s+/g, "_");
  const isCancelled =
    normStatus === "cancelled" ||
    normStatus === "rejected" ||
    normStatus === "declined" ||
    normStatus === "expired";

  const hasSalesOfferDoc = Boolean(media?.sales_offer);
  const hasDownPaymentDoc = Boolean(media?.down_payment);
  const hasSpaDoc = Boolean(media?.sales_purchase);

  const isStage1Closed =
    (normType === "identification" && (normStatus === "confirmed" || isStage1Approved)) ||
    normType !== "identification" ||
    hasSalesOfferDoc || hasDownPaymentDoc || hasSpaDoc;

  const isStage1Active =
    !isStage1Closed && !isCancelled && normType === "identification" && normStatus === "in_process";

  const isReadyToUploadOffer =
    !isCancelled &&
    !hasSalesOfferDoc &&
    isStage1Closed;

  const isAwaitingClientOffer =
    !isCancelled &&
    hasSalesOfferDoc &&
    (normType === "sales_offer" || normType === "identification");

  const isAwaitingClientBankTransfer =
    !isCancelled &&
    normType === "sales_offer" &&
    normStatus === "confirmed";

  const isDownPaymentReview =
    !isCancelled &&
    normType === "down_payment" &&
    normStatus === "in_process";

  const isReadyToUploadSPA =
    !isCancelled &&
    normType === "down_payment" &&
    normStatus === "confirmed";

  const isUnitSold =
    !isCancelled &&
    (normType === "sales_purchase" || hasSpaDoc);

  const displayReservationId = reservation.reservation_id ?? reservationId;

  const formattedDate = reservation.reservation_date
    ? new Date(reservation.reservation_date).toLocaleDateString(
      isRtl ? "ar-EG" : "en-US",
      { year: "numeric", month: "long", day: "numeric" },
    )
    : "—";

  const effectiveStages = stages.map((s) => {
    if (s.id === 1 && isStage1Closed) {
      return { ...s, status: "Complete" };
    }
    if (s.id === 2 && isStage1Closed && s.status !== "Complete") {
      return { ...s, status: "Pending" };
    }
    return s;
  });

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.back()}
            className="h-9 w-9"
          >
            <ArrowLeft className={`h-5 w-5 ${isRtl ? "rotate-180" : ""}`} />
          </Button>
          <div>
            <h1 className="text-xl font-bold text-gray-900">
              {t("reservations.details.bookingNumber", { id: displayReservationId })}
            </h1>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {isCancelled ? (
            <Badge className="bg-red-50 text-red-700 border-red-200 py-1.5 px-3 text-sm flex items-center gap-1.5">
              <XCircle className="h-4 w-4" />
              {t("reservations.details.cancelled")}
            </Badge>
          ) : isUnitSold ? (
            <Badge className="bg-emerald-50 text-emerald-700 border-emerald-300 py-1.5 px-3 text-sm font-semibold flex items-center gap-1.5 shadow-xs">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              {t("reservations.details.unitSold")}
            </Badge>
          ) : isReadyToUploadSPA ? (
            <Button
              className="bg-teal-600 hover:bg-teal-700 text-white gap-2 shadow-xs"
              onClick={() => setActiveAction("upload-spa")}
              disabled={isPending}
            >
              <Upload className="h-4 w-4" />
              {t("reservations.actions.uploadSPA")}
            </Button>
          ) : isDownPaymentReview ? (
            <>
              <Button
                className="bg-amber-600 hover:bg-amber-700 text-white gap-2 shadow-xs"
                onClick={() => setActiveAction("approve-down-payment")}
                disabled={isPending}
              >
                <CheckCircle2 className="h-4 w-4" />
                {t("reservations.actions.approveDownPayment")}
              </Button>
              <Button
                variant="outline"
                className="text-red-600 border-red-200 hover:bg-red-50 gap-2"
                onClick={() => setActiveAction("decline-down-payment")}
                disabled={isPending}
              >
                <XCircle className="h-4 w-4" />
                {t("reservations.actions.decline")}
              </Button>
            </>
          ) : isAwaitingClientBankTransfer ? (
            <Badge className="bg-amber-50 text-amber-800 border-amber-200 py-1.5 px-3 text-xs flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-amber-600" />
              {t("reservations.details.awaitingBankTransfer")}
            </Badge>
          ) : isStage1Active ? (
            <>
              <Button
                className="bg-teal-600 hover:bg-teal-700 text-white gap-2"
                onClick={() => setActiveAction("approve")}
                disabled={isPending}
              >
                <CheckCircle2 className="h-4 w-4" />
                {t("reservations.actions.approve")}
              </Button>
              <Button
                variant="outline"
                className="text-red-600 border-red-200 hover:bg-red-50 gap-2"
                onClick={() => setActiveAction("decline")}
                disabled={isPending}
              >
                <XCircle className="h-4 w-4" />
                {t("reservations.actions.decline")}
              </Button>
            </>
          ) : isReadyToUploadOffer ? (
            <Button
              className="bg-teal-600 hover:bg-teal-700 text-white gap-2 shadow-xs cursor-pointer"
              onClick={() => setActiveAction("upload-offer")}
              disabled={isPending}
            >
              <Upload className="h-4 w-4" />
              {isRtl ? "رفع صورة عرض المبيعات" : "Upload Sales Offer Image"}
            </Button>
          ) : isAwaitingClientOffer ? (
            <div className="flex items-center gap-2">
              <Badge className="bg-amber-50 text-amber-800 border-amber-200 py-1.5 px-3 text-xs flex items-center gap-1.5 font-medium shadow-2xs">
                <Clock className="h-3.5 w-3.5 text-amber-600 animate-pulse" />
                {isRtl ? "في انتظار قبول العميل" : "Waiting for Client Acceptance"}
              </Badge>
              <Button
                variant="outline"
                size="sm"
                className="gap-1.5 text-teal-700 border-teal-300 hover:bg-teal-50 cursor-pointer h-8 text-xs"
                onClick={() => setActiveAction("upload-offer")}
                disabled={isPending}
              >
                <Upload className="h-3.5 w-3.5" />
                {isRtl ? "تغيير الصورة" : "Change Image"}
              </Button>
            </div>
          ) : null}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ClientSummaryCard user={user} />
        <PropertySummaryCard reservation={reservation} property={property} />
      </div>

      <ReservationProgressTracker
        stages={effectiveStages}
        getStatusIcon={getStatusIcon}
        getStatusBadge={getStatusBadge}
      />

      <ApproveBookingDialog
        isOpen={activeAction === "approve"}
        onClose={handleDialogClose}
        onConfirm={handleApprove}
        isPending={isApproving}
        error={mutationApprove.error}
      />

      <DeclineBookingDialog
        isOpen={activeAction === "decline" || activeAction === "decline-down-payment"}
        onClose={handleDialogClose}
        onConfirm={
          activeAction === "decline-down-payment"
            ? handleDeclineDownPayment
            : handleDecline
        }
        isPending={isRejecting}
        error={mutationDecline.error}
      />

      <UploadSalesOfferDialog
        isOpen={activeAction === "upload-offer"}
        onClose={handleDialogClose}
        onConfirm={handleUploadSalesOffer}
        isPending={isSalesOfferUploading}
        error={mutationSalesOffer.error}
      />

      <ApproveDownPaymentDialog
        isOpen={activeAction === "approve-down-payment"}
        onClose={handleDialogClose}
        onConfirm={handleApproveDownPayment}
        isPending={isDownPaymentApproving}
        error={mutationDownPayment.error}
      />

      <UploadSPADialog
        isOpen={activeAction === "upload-spa"}
        onClose={handleDialogClose}
        onConfirm={handleUploadSPA}
        isPending={isSPAUploading}
        error={mutationSPA.error}
      />
    </div>
  );
}