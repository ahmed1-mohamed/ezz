import { Check, ChevronDown, ChevronUp } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Stage1Approval } from "./timeline-components/Stage1Approval";
import { Stage2SalesOffer } from "./timeline-components/Stage2SalesOffer";
import { Stage3DownPayment } from "./timeline-components/Stage3DownPayment";
import { Stage4SPA } from "./timeline-components/Stage4SPA";
import { StageDocumentsList } from "./timeline-components/StageDocumentsList";
import { StageCommentsList } from "./timeline-components/StageCommentsList";
import { useLanguage } from "@/contexts/LanguageContext";
 
interface BookingStagesTimelineProps {
  stages: any[];
  getStatusBadge: (status: string) => React.ReactNode;
  handleDownload: (url: string, filename: string) => void;
  salesOfferFile: File | null;
  setSalesOfferFile: (file: File | null) => void;
  spaFile: File | null;
  setSpaFile: (file: File | null) => void;
  adminComment: string;
  setAdminComment: (comment: string) => void;
  uploadSalesOfferMutation: any;
  uploadSPAMutation: any;
  approveMutation: any;
  declineMutation: any;
  approveDownPaymentMutation: any;
  handleSalesOfferUpload: () => void;
  handleSpaUpload: () => void;
  reservationId?: number | string;
  uploadDownPaymentMutation?: any;
  acceptSalesOfferMutation?: any;
}

export function BookingStagesTimeline({
  stages,
  getStatusBadge,
  handleDownload,
  salesOfferFile,
  setSalesOfferFile,
  spaFile,
  setSpaFile,
  adminComment,
  setAdminComment,
  uploadSalesOfferMutation,
  uploadSPAMutation,
  approveMutation,
  declineMutation,
  approveDownPaymentMutation,
  handleSalesOfferUpload,
  handleSpaUpload,
  reservationId,
  uploadDownPaymentMutation,
}: BookingStagesTimelineProps) {
  const { t } = useLanguage();

  const [isReuploadingSalesOffer, setIsReuploadingSalesOffer] = useState(false);
  const [salesOfferImagePreview, setSalesOfferImagePreview] = useState<string | null>(null);

   const [downPaymentFile, setDownPaymentFile] = useState<File | null>(null);
  const [downPaymentPreview, setDownPaymentPreview] = useState<string | null>(null);
  const [downPaymentComment, setDownPaymentComment] = useState("");
  const [isReuploadingDownPayment, setIsReuploadingDownPayment] = useState(false);

  useEffect(() => {
    if (salesOfferFile && salesOfferFile.type.startsWith("image/")) {
      const url = URL.createObjectURL(salesOfferFile);
      setSalesOfferImagePreview(url);
      return () => URL.revokeObjectURL(url);
    } else {
      setSalesOfferImagePreview(null);
    }
  }, [salesOfferFile]);

  useEffect(() => {
    if (downPaymentFile && downPaymentFile.type.startsWith("image/")) {
      const url = URL.createObjectURL(downPaymentFile);
      setDownPaymentPreview(url);
      return () => URL.revokeObjectURL(url);
    } else {
      setDownPaymentPreview(null);
    }
  }, [downPaymentFile]);

   const stage1FromServer = stages.find((s: any) => s.id === 1);
  const stage2FromServer = stages.find((s: any) => s.id === 2);
  const stage3FromServer = stages.find((s: any) => s.id === 3);
  const targetResId = reservationId || stages?.[0]?.reservationId || (stages as any)?.reservationId;
  const cleanTargetId = targetResId ? String(targetResId).replace(/\D/g, "") : "";

  const isSavedInStorage = (id: any) => {
    if (typeof window === "undefined" || !id) return false;
    const clean = String(id).replace(/\D/g, "");
    return (
      localStorage.getItem(`approved_stage1_${id}`) === "true" ||
      (Boolean(clean) && localStorage.getItem(`approved_stage1_${clean}`) === "true") ||
      localStorage.getItem(`reservation_${id}_stage1_approved`) === "true" ||
      (Boolean(clean) && localStorage.getItem(`reservation_${clean}_stage1_approved`) === "true")
    );
  };

  const isSalesOfferAcceptedInStorage = (id: any) => {
    if (typeof window === "undefined" || !id) return false;
    const clean = String(id).replace(/\D/g, "");
    return (
      localStorage.getItem(`accepted_sales_offer_${id}`) === "true" ||
      (Boolean(clean) && localStorage.getItem(`accepted_sales_offer_${clean}`) === "true")
    );
  };

  const isDownPaymentApprovedInStorage = (id: any) => {
    if (typeof window === "undefined" || !id) return false;
    const clean = String(id).replace(/\D/g, "");
    return (
      localStorage.getItem(`approved_down_payment_${id}`) === "true" ||
      (Boolean(clean) && localStorage.getItem(`approved_down_payment_${clean}`) === "true")
    );
  };

  const isStage1SavedInStorage =
    isSavedInStorage(targetResId) || (reservationId && isSavedInStorage(reservationId));

  const isLaterStageActiveOrDone =
    stages.some((s: any) => s.id > 1 && (s.status === "Complete" || (s.documents && s.documents.length > 0))) ||
    stage1FromServer?.currentStatusType === "sales_offer" ||
    stage1FromServer?.currentStatusType === "down_payment" ||
    stage1FromServer?.currentStatusType === "sales_purchase";

  const stage1InitiallyApproved =
    Boolean(isStage1SavedInStorage) ||
    Boolean(isLaterStageActiveOrDone) ||
    stage1FromServer?.status === "Complete" ||
    stage1FromServer?.currentStatus === "confirmed" ||
    stage1FromServer?.currentStatus === "approved" ||
    stage1FromServer?.currentStatus === "completed" ||
    (stage1FromServer?.currentStatusType !== "identification" && stage1FromServer?.currentStatusType !== "identification_confirmation");

  const [isStage1Approved, setIsStage1Approved] = useState(Boolean(stage1InitiallyApproved));
  const [collapsedStages, setCollapsedStages] = useState<Record<number, boolean>>({});

   useEffect(() => {
    if (stage1InitiallyApproved && !isStage1Approved) {
      setIsStage1Approved(true);
    }
    if (isSavedInStorage(targetResId) && !isStage1Approved) {
      setIsStage1Approved(true);
    }
  }, [stage1InitiallyApproved, targetResId]);

  const isCollapsed = (stageId: number, isComplete: boolean, isPending: boolean): boolean => {
    if (collapsedStages[stageId] !== undefined) {
      return collapsedStages[stageId];
    }
     if (isComplete) return true;
    if (isPending) return false;
    return false;
  };

  const toggleStage = (stageId: number, isComplete: boolean, isPending: boolean) => {
    setCollapsedStages((prev) => ({
      ...prev,
      [stageId]: !isCollapsed(stageId, isComplete, isPending),
    }));
  };

  const handleApprove = () => {
    approveMutation.mutate(
      {
        comments: adminComment,
        reservation_status_type: "IDENTIFICATION",
        reservationId: targetResId,
      },
      {
        onSuccess: () => {
          setIsStage1Approved(true);
          if (typeof window !== "undefined" && targetResId) {
            localStorage.setItem(`approved_stage1_${targetResId}`, "true");
            if (cleanTargetId) localStorage.setItem(`approved_stage1_${cleanTargetId}`, "true");
            localStorage.setItem(`reservation_${targetResId}_stage1_approved`, "true");
            if (cleanTargetId) localStorage.setItem(`reservation_${cleanTargetId}_stage1_approved`, "true");
          }
          setAdminComment("");
           setCollapsedStages((prev) => ({ ...prev, 1: true, 2: false }));
          setTimeout(() => {
            const stage2El = document.getElementById("stage-2");
            if (stage2El) {
              stage2El.scrollIntoView({ behavior: "smooth", block: "center" });
            }
          }, 200);
        },
        onError: (err: any) => {
          const errMsg = err?.response?.data?.message || err?.message || "";
          if (errMsg.toLowerCase().includes("already approved")) {
            setIsStage1Approved(true);
            if (typeof window !== "undefined" && targetResId) {
              localStorage.setItem(`approved_stage1_${targetResId}`, "true");
              if (cleanTargetId) localStorage.setItem(`approved_stage1_${cleanTargetId}`, "true");
            }
            setAdminComment("");
          }
        },
      }
    );
  };

  const handleDownPaymentUpload = () => {
    if (!downPaymentFile) return;
    if (uploadDownPaymentMutation) {
      uploadDownPaymentMutation.mutate(
        {
          file: downPaymentFile,
          comments: downPaymentComment,
          reservationId: targetResId,
        },
        {
          onSuccess: () => {
            setDownPaymentFile(null);
            setDownPaymentComment("");
            setIsReuploadingDownPayment(false);
          },
        }
      );
    } else {
      setDownPaymentFile(null);
      setIsReuploadingDownPayment(false);
    }
  };

  const handleApproveDownPaymentAction = () => {
    approveDownPaymentMutation.mutate(
      {
        comments: adminComment || downPaymentComment,
        reservation_status_type: "DOWN_PAYMENT",
        reservationId: targetResId,
      },
      {
        onSuccess: () => {
          if (typeof window !== "undefined" && targetResId) {
            localStorage.setItem(`approved_down_payment_${targetResId}`, "true");
            if (cleanTargetId) localStorage.setItem(`approved_down_payment_${cleanTargetId}`, "true");
          }
          setCollapsedStages((prev) => ({ ...prev, 3: true, 4: false }));
          setTimeout(() => {
            const stage4El = document.getElementById("stage-4");
            if (stage4El) {
              stage4El.scrollIntoView({ behavior: "smooth", block: "center" });
            }
          }, 200);
        },
      }
    );
  };

  return (
    <div className="lg:col-span-2 space-y-4">
      {(() => {
         const s1 = stage1FromServer;
        const s2 = stage2FromServer;
        const s3 = stage3FromServer;

        const globalStage1Complete = Boolean(
          s1 &&
          (s1.status === "Complete" ||
            isStage1Approved ||
            stage1InitiallyApproved ||
            isStage1SavedInStorage ||
            s1.currentStatus === "confirmed" ||
            s1.currentStatus === "approved" ||
            (s1.currentStatusType !== "identification" && s1.currentStatusType !== "identification_confirmation") ||
            stages.some((sx: any) => sx.id > 1 && (sx.status === "Complete" || (sx.documents && sx.documents.length > 0))))
        );

        const globalStage2Complete = Boolean(
          globalStage1Complete &&
          s2 &&
          (s2.status === "Complete" ||
            isSalesOfferAcceptedInStorage(targetResId) ||
            (reservationId && isSalesOfferAcceptedInStorage(reservationId)) ||
            ((s2.currentStatusType === "sales_offer" || s2.currentStatusType === "sales_offer_approval") &&
              (s2.currentStatus === "confirmed" || s2.currentStatus === "approved" || s2.currentStatus === "completed")) ||
            s2.currentStatusType === "down_payment" ||
            s2.currentStatusType === "down_payment_pending" ||
            s2.currentStatusType === "sales_purchase" ||
            s2.currentStatusType === "sales_purchase_agreement" ||
            stages.some((sx: any) => sx.id > 2 && (sx.status === "Complete" || (sx.documents && sx.documents.length > 0))))
        );

        const globalStage3Complete = Boolean(
          globalStage2Complete &&
          s3 &&
          (s3.status === "Complete" ||
            isDownPaymentApprovedInStorage(targetResId) ||
            (reservationId && isDownPaymentApprovedInStorage(reservationId)) ||
            ((s3.currentStatusType === "down_payment" || s3.currentStatusType === "down_payment_pending") &&
              (s3.currentStatus === "confirmed" || s3.currentStatus === "approved" || s3.currentStatus === "completed")) ||
            s3.currentStatusType === "sales_purchase" ||
            s3.currentStatusType === "sales_purchase_agreement" ||
            stages.some((sx: any) => sx.id > 3 && (sx.status === "Complete" || (sx.documents && sx.documents.length > 0))))
        );

        const isCancelledGlobally = Boolean(s1 && (s1.currentStatus === "cancelled" || s1.currentStatus === "rejected"));

        return stages.map((stage: any) => {
          const isStage1Complete = stage.id === 1 ? globalStage1Complete : false;

          const isComplete =
            stage.id === 1
              ? globalStage1Complete
              : stage.id === 2
                ? globalStage2Complete
                : stage.id === 3
                  ? globalStage3Complete
                  : stage.status === "Complete";

          let isPending =
            stage.id === 1
              ? (!globalStage1Complete && stage.status === "Pending")
              : stage.id === 2
                ? (!globalStage2Complete && globalStage1Complete)
                : stage.id === 3
                  ? (!globalStage3Complete && globalStage2Complete)
                  : (globalStage3Complete && stage.status !== "Complete");

          // If the reservation is entirely cancelled, no stage should be active/pending.
          if (isCancelledGlobally) {
            isPending = false;
          }

          const isRejected = stage.status === "Rejected" || (isCancelledGlobally && !isComplete);
          const collapsed = isCollapsed(stage.id, isComplete, isPending);

        return (
          <div
            key={stage.id}
            id={`stage-${stage.id}`}
            className={`bg-white rounded-lg border overflow-hidden transition-all duration-200 ${isPending
                ? "border-teal-400 ring-2 ring-teal-500/20 shadow-xs"
                : isComplete
                  ? "border-emerald-200"
                  : isRejected
                    ? "border-rose-200"
                    : "border-gray-200 opacity-90"
              }`}
          >
            <div
              onClick={() => toggleStage(stage.id, isComplete, isPending)}
              className={`border-b p-4 flex items-center justify-between transition-colors cursor-pointer select-none ${isPending
                  ? "bg-teal-50/70 border-teal-200"
                  : isComplete
                    ? "bg-emerald-50/50 border-emerald-100"
                    : isRejected
                      ? "bg-rose-50/50 border-rose-100"
                      : "bg-gray-50/50 border-gray-200"
                }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-semibold text-sm transition-colors ${isComplete
                      ? "bg-emerald-600 text-white shadow-xs"
                      : isPending
                        ? "bg-teal-600 text-white ring-4 ring-teal-100"
                        : isRejected
                          ? "bg-rose-600 text-white"
                          : "bg-gray-200 text-gray-500"
                    }`}
                >
                  {isComplete ? <Check className="h-4 w-4 stroke-[3]" /> : stage.id}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">
                    {t("reservations.details.stage")} {stage.id}: {stage.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">{stage.subtitle || stage.step}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {getStatusBadge(isComplete ? "Complete" : isPending ? "Pending" : stage.status)}
                {collapsed ? (
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                ) : (
                  <ChevronUp className="h-4 w-4 text-gray-400" />
                )}
              </div>
            </div>

            {!collapsed && (
              <div className="p-5 space-y-4">
                {stage.id === 1 && isComplete && (
                  <div className="flex items-center gap-2 p-3 bg-emerald-50 text-emerald-800 text-xs font-medium rounded-lg border border-emerald-200">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>{t("reservations.stages.stage1Closed")}</span>
                  </div>
                )}
                {stage.id === 2 && isComplete && (
                  <div className="flex items-center gap-2 p-3 bg-emerald-50 text-emerald-800 text-xs font-medium rounded-lg border border-emerald-200">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>{t("reservations.stages.stage2Closed")}</span>
                  </div>
                )}

                {stage.id === 3 && isComplete && (
                  <div className="flex items-center gap-2 p-3 bg-emerald-50 text-emerald-800 text-xs font-medium rounded-lg border border-emerald-200">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>{t("reservations.stages.stage3Closed")}</span>
                  </div>
                )}

                {(stage.documents && stage.documents.length > 0) ||
                  ((stage.id === 2 || stage.id === 3 || stage.id === 4) && isPending) ? (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">
                      {stage.documents && stage.documents.length > 0
                        ? `${t("reservations.details.documents")} (${stage.documents.length})`
                        : isPending
                          ? t("reservations.details.requiredAction")
                          : t("reservations.details.documents")}
                    </h4>
                    <div className="space-y-2">
                      <StageDocumentsList documents={stage.documents} handleDownload={handleDownload} t={t} />

                      {stage.id === 2 && isPending && (
                        <Stage2SalesOffer
                          stage={stage}
                          salesOfferFile={salesOfferFile}
                          setSalesOfferFile={setSalesOfferFile}
                          isReuploadingSalesOffer={isReuploadingSalesOffer}
                          setIsReuploadingSalesOffer={setIsReuploadingSalesOffer}
                          salesOfferImagePreview={salesOfferImagePreview}
                          adminComment={adminComment}
                          setAdminComment={setAdminComment}
                          handleSalesOfferUpload={handleSalesOfferUpload}
                          uploadSalesOfferMutation={uploadSalesOfferMutation}
                          t={t}
                        />
                      )}



                      {stage.id === 3 && isPending && (
                        <Stage3DownPayment
                          stage={stage}
                          downPaymentFile={downPaymentFile}
                          setDownPaymentFile={setDownPaymentFile}
                          isReuploadingDownPayment={isReuploadingDownPayment}
                          setIsReuploadingDownPayment={setIsReuploadingDownPayment}
                          downPaymentPreview={downPaymentPreview}
                          downPaymentComment={downPaymentComment}
                          setDownPaymentComment={setDownPaymentComment}
                          adminComment={adminComment}
                          setAdminComment={setAdminComment}
                          handleDownPaymentUpload={handleDownPaymentUpload}
                          uploadDownPaymentMutation={uploadDownPaymentMutation}
                          handleApproveDownPaymentAction={handleApproveDownPaymentAction}
                          approveDownPaymentMutation={approveDownPaymentMutation}
                          declineMutation={declineMutation}
                          handleDownload={handleDownload}
                          t={t}
                        />
                      )}

                      {stage.id === 4 && isPending && (
                        <Stage4SPA
                          spaFile={spaFile}
                          setSpaFile={setSpaFile}
                          handleSpaUpload={handleSpaUpload}
                          uploadSPAMutation={uploadSPAMutation}
                          t={t}
                        />
                      )}
                    </div>
                  </div>
                ) : null}

                <StageCommentsList comments={stage.comments} t={t} />
                {stage.id === 1 && !isStage1Complete && !isStage1Approved && stage.currentStatus === "in_process" && (
                  <Stage1Approval
                    adminComment={adminComment}
                    setAdminComment={setAdminComment}
                    approveMutation={approveMutation}
                    declineMutation={declineMutation}
                    handleApprove={handleApprove}
                    t={t}
                  />
                )}
              </div>
            )}
          </div>
        );
        });
      })()}
    </div>
  );
}