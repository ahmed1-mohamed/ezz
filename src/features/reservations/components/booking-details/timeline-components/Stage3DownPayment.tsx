import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FieldError } from "@/components/ui/form-message";
import { FileText, Loader2, Upload, X, Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DOWN_PAYMENT_RECEIPT_RULE,
  toAcceptAttribute,
  validateBookingComments,
  validateUploadFile,
} from "@/features/reservations/utils/booking-validation";

interface Stage3DownPaymentProps {
  stage: any;
  downPaymentFile: File | null;
  setDownPaymentFile: (file: File | null) => void;
  isReuploadingDownPayment: boolean;
  setIsReuploadingDownPayment: (val: boolean) => void;
  downPaymentPreview: string | null;
  downPaymentComment: string;
  setDownPaymentComment: (val: string) => void;
  adminComment: string;
  setAdminComment: (val: string) => void;
  handleDownPaymentUpload: () => void;
  uploadDownPaymentMutation: any;
  handleApproveDownPaymentAction: () => void;
  approveDownPaymentMutation: any;
  declineMutation: any;
  handleDownload: (url: string, filename: string) => void;
  t: (key: string, values?: Record<string, string | number>) => string;
}

export function Stage3DownPayment({
  stage,
  downPaymentFile,
  setDownPaymentFile,
  isReuploadingDownPayment,
  setIsReuploadingDownPayment,
  downPaymentPreview,
  downPaymentComment,
  setDownPaymentComment,
  adminComment,
  setAdminComment,
  handleDownPaymentUpload,
  uploadDownPaymentMutation,
  handleApproveDownPaymentAction,
  approveDownPaymentMutation,
  declineMutation,
  t,
}: Stage3DownPaymentProps) {
  const [fileError, setFileError] = useState<string | undefined>();
  const [uploadCommentError, setUploadCommentError] = useState<string | undefined>();
  const [reviewCommentError, setReviewCommentError] = useState<string | undefined>();
  const hasReceiptDoc = stage.documents && stage.documents.length > 0;
  const isDownPaymentPending = stage.currentStatusType === "down_payment_pending";
  const shouldShowApproveReject = isDownPaymentPending || (hasReceiptDoc && !isReuploadingDownPayment && !downPaymentFile);
  const shouldShowPaymentUpload =
    !isDownPaymentPending && (!hasReceiptDoc || isReuploadingDownPayment || Boolean(downPaymentFile));

  return (
    <div className="mt-4 space-y-4">
      {shouldShowPaymentUpload && (
        <div className="p-4 bg-teal-50/40 rounded-xl border border-teal-200 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-800 flex items-center gap-1.5">
                <ImageIcon className="h-4 w-4 text-teal-600" />
                {hasReceiptDoc
                  ? t("reservations.downPaymentStage.replaceReceipt")
                  : t("reservations.downPaymentStage.uploadReceipt")}
              </span>
              <p className="text-xs text-gray-600 mt-0.5">
                {t("reservations.downPaymentStage.uploadDesc")}
              </p>
            </div>
            {hasReceiptDoc && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="text-xs text-gray-500 hover:text-gray-700 h-8 px-2 cursor-pointer"
                onClick={() => {
                  setIsReuploadingDownPayment(false);
                  setDownPaymentFile(null);
                }}
              >
                {t("common.cancel")}
              </Button>
            )}
          </div>

          <input
            type="file"
            id="downPaymentUpload"
            className="hidden"
            accept={toAcceptAttribute(DOWN_PAYMENT_RECEIPT_RULE)}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                const message = validateUploadFile(file, DOWN_PAYMENT_RECEIPT_RULE, t);
                setFileError(message);
                if (message) {
                  e.target.value = "";
                  return;
                }
                setDownPaymentFile(file);
                setIsReuploadingDownPayment(true);
              }
              e.target.value = "";
            }}
          />
          <label
            htmlFor="downPaymentUpload"
            aria-invalid={!!fileError}
            className={cn(
              "flex items-center justify-center gap-2 p-4 border-2 border-dashed rounded-lg cursor-pointer transition-colors",
              fileError
                ? "border-red-300 bg-red-50"
                : "border-teal-300 bg-white hover:border-teal-500 hover:bg-teal-50/50"
            )}
          >
            {downPaymentPreview ? (
              <div className="relative flex flex-col items-center justify-center w-full py-2">
                <div className="relative group max-w-sm">
                  <img
                    src={downPaymentPreview}
                    alt={t("reservations.details.downPaymentReceipt")}
                    className="max-h-52 max-w-full rounded-lg object-contain border border-teal-200 shadow-sm"
                  />
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setDownPaymentFile(null);
                    }}
                    className="absolute -top-2 -end-2 p-1.5 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-md cursor-pointer"
                    title={t("reservations.salesOfferStage.remove")}
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
                <div className="flex items-center gap-2 mt-2 text-xs text-teal-900 font-medium">
                  <span>{downPaymentFile?.name}</span>
                  <span className="text-gray-400">
                    ({(downPaymentFile?.size ? downPaymentFile.size / 1024 : 0).toFixed(1)} KB)
                  </span>
                </div>
              </div>
            ) : downPaymentFile ? (
              <div className="flex items-center justify-between w-full p-2 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <FileText className="h-6 w-6 text-teal-600" />
                  <span className="text-xs font-medium text-gray-800">{downPaymentFile.name}</span>
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setDownPaymentFile(null);
                  }}
                  className="p-1 text-red-600 hover:text-red-700"
                  title={t("reservations.salesOfferStage.remove")}
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <div className="text-center py-2">
                <Upload className="h-8 w-8 text-teal-600 mx-auto mb-1.5" />
                <span className="text-sm font-semibold text-gray-800 block">
                  {t("reservations.downPaymentStage.clickToSelect")}
                </span>
                <span className="text-xs text-gray-500 mt-1 block">
                  {t("reservations.downPaymentStage.fileHint")}
                </span>
              </div>
            )}
          </label>
          <FieldError message={fileError} />

          <div className="space-y-1">
            <label className="text-xs font-medium text-gray-700 block">
              {t("reservations.approveDialog.commentsLabel")}
            </label>
            <textarea
              className={cn(
                "w-full min-h-[60px] p-2.5 text-xs bg-white border rounded-lg focus:ring-2 focus:border-transparent outline-none resize-y",
                uploadCommentError ? "border-red-500 focus:ring-red-500" : "border-gray-200 focus:ring-teal-500"
              )}
              placeholder={t("reservations.approveDialog.commentsPlaceholder")}
              value={downPaymentComment}
              onChange={(e) => {
                setDownPaymentComment(e.target.value);
                if (uploadCommentError) setUploadCommentError(undefined);
              }}
              aria-invalid={!!uploadCommentError}
            />
            <FieldError message={uploadCommentError} />
          </div>

          <Button
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium shadow-xs cursor-pointer"
            onClick={() => {
              const message = validateBookingComments(downPaymentComment, t);
              setUploadCommentError(message);
              if (!message) handleDownPaymentUpload();
            }}
            disabled={!downPaymentFile || (uploadDownPaymentMutation && uploadDownPaymentMutation.isPending)}
          >
            {uploadDownPaymentMutation && uploadDownPaymentMutation.isPending ? (
              <>
                <Loader2 className="h-4 w-4 me-2 animate-spin" />
                {t("reservations.actions.uploading")}
              </>
            ) : (
              <>
                <Upload className="h-4 w-4 me-2" />
                {t("reservations.downPaymentStage.uploadReceipt")}
              </>
            )}
          </Button>
        </div>
      )}

      {/* Verification & Approval Actions Section */}
      {shouldShowApproveReject && (
        <div className="space-y-3 p-4 bg-emerald-50/40 rounded-xl border border-emerald-200 shadow-2xs">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                {t("reservations.actions.approveDownPayment")}
              </span>
              <p className="text-xs text-gray-600 mt-0.5">
                {isDownPaymentPending
                  ? t("reservations.downPaymentStage.clientUploaded")
                  : t("reservations.stages.downPaymentReviewSubtitle")}
              </p>
            </div>
            {!isDownPaymentPending && (
              <Button
                type="button"
                size="sm"
                variant="outline"
                onClick={() => setIsReuploadingDownPayment(true)}
                className="gap-1.5 border-teal-300 text-teal-700 hover:bg-teal-50 hover:text-teal-800 cursor-pointer h-7 text-xs font-medium"
              >
                <Upload className="h-3 w-3" />
                <span>{t("reservations.downPaymentStage.changeReceipt")}</span>
              </Button>
            )}
          </div>

          {stage.currentStatus === "in_process" && (
            <>
              <div className="space-y-1">
                <label className="text-xs font-medium text-gray-700 block">
                  {t("reservations.approveDialog.commentsLabel")}
                </label>
                <textarea
                  className={cn(
                    "w-full min-h-[60px] p-2.5 text-xs bg-white border rounded-lg focus:ring-2 focus:border-transparent outline-none resize-y",
                    reviewCommentError ? "border-red-500 focus:ring-red-500" : "border-gray-200 focus:ring-emerald-500"
                  )}
                  placeholder={t("reservations.approveDialog.commentsPlaceholder")}
                  value={adminComment}
                  onChange={(e) => {
                    setAdminComment(e.target.value);
                    if (reviewCommentError) setReviewCommentError(undefined);
                  }}
                  aria-invalid={!!reviewCommentError}
                />
                <FieldError message={reviewCommentError} />
              </div>

              <div className="flex gap-2">
                <Button
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-medium shadow-xs cursor-pointer"
                  disabled={approveDownPaymentMutation.isPending || declineMutation.isPending}
                  onClick={() => {
                    const message = validateBookingComments(adminComment, t);
                    setReviewCommentError(message);
                    if (!message) handleApproveDownPaymentAction();
                  }}
                >
                  {approveDownPaymentMutation.isPending ? (
                    <>
                      <Loader2 className="h-4 w-4 me-2 animate-spin" />
                      {t("reservations.actions.approving")}
                    </>
                  ) : (
                    t("reservations.actions.approveDownPayment")
                  )}
                </Button>
                <Button
                  className="bg-rose-600 hover:bg-rose-700 text-white font-medium px-5 cursor-pointer"
                  disabled={declineMutation.isPending || approveDownPaymentMutation.isPending}
                  onClick={() => {
                    // Declining cancels the reservation, so the client needs a reason.
                    const message = validateBookingComments(adminComment, t, { required: true });
                    setReviewCommentError(message);
                    if (message) return;
                    declineMutation.mutate({
                      comments: adminComment.trim(),
                      reservation_status_type: "DOWN_PAYMENT",
                    });
                  }}
                >
                  {declineMutation.isPending ? (
                    <>
                      <Loader2 className="h-4 w-4 me-2 animate-spin" />
                      {t("reservations.actions.declining")}
                    </>
                  ) : (
                    t("reservations.actions.decline")
                  )}
                </Button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
