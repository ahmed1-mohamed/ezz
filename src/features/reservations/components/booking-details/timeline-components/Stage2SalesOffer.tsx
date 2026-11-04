import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FieldError } from "@/components/ui/form-message";
import { Badge } from "@/components/ui/badge";
import { Clock, Image as ImageIcon, Loader2, Upload, X } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  SALES_OFFER_IMAGE_RULE,
  toAcceptAttribute,
  validateBookingComments,
  validateUploadFile,
} from "@/features/reservations/utils/booking-validation";

interface Stage2SalesOfferProps {
  stage: any;
  salesOfferFile: File | null;
  setSalesOfferFile: (file: File | null) => void;
  isReuploadingSalesOffer: boolean;
  setIsReuploadingSalesOffer: (val: boolean) => void;
  salesOfferImagePreview: string | null;
  adminComment: string;
  setAdminComment: (val: string) => void;
  handleSalesOfferUpload: () => void;
  uploadSalesOfferMutation: any;
  t: (key: string, values?: Record<string, string | number>) => string;
}

export function Stage2SalesOffer({
  stage,
  salesOfferFile,
  setSalesOfferFile,
  isReuploadingSalesOffer,
  setIsReuploadingSalesOffer,
  salesOfferImagePreview,
  adminComment,
  setAdminComment,
  handleSalesOfferUpload,
  uploadSalesOfferMutation,
  t,
}: Stage2SalesOfferProps) {
  const [fileError, setFileError] = useState<string | undefined>();
  const [commentError, setCommentError] = useState<string | undefined>();
  const hasDoc = stage.documents && stage.documents.length > 0;
  const isUploadRequest = stage.currentStatusType === "sales_offer_request";
  const isWaitingApproval =
    stage.currentStatusType === "sales_offer" ||
    stage.currentStatusType === "sales_offer_approval" ||
    (hasDoc && !isUploadRequest);
  const shouldShowUpload =
    isUploadRequest || (!hasDoc && !isWaitingApproval) || isReuploadingSalesOffer || Boolean(salesOfferFile);

  if (shouldShowUpload) {
    return (
      <div className="mt-3 p-4 bg-teal-50/40 rounded-xl border border-teal-200 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal-800 flex items-center gap-1.5">
              <ImageIcon className="h-4 w-4 text-teal-600" />
              {t("reservations.salesOfferStage.uploadImage")}
            </span>
            <p className="text-xs text-gray-600 mt-0.5">
              {t("reservations.salesOfferStage.uploadDesc")}
            </p>
          </div>
          {isReuploadingSalesOffer && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="text-xs text-gray-500 hover:text-gray-700 h-8 px-2 cursor-pointer"
              onClick={() => {
                setIsReuploadingSalesOffer(false);
                setSalesOfferFile(null);
              }}
            >
              {t("common.cancel")}
            </Button>
          )}
        </div>

        <input
          type="file"
          id="salesOfferUpload"
          className="hidden"
          accept={toAcceptAttribute(SALES_OFFER_IMAGE_RULE)}
          multiple={false}
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              const message = validateUploadFile(file, SALES_OFFER_IMAGE_RULE, t);
              setFileError(message);
              if (message) {
                e.target.value = "";
                return;
              }
              setSalesOfferFile(file);
              setIsReuploadingSalesOffer(true);
            }
            e.target.value = "";
          }}
        />
        <label
          htmlFor="salesOfferUpload"
          aria-invalid={!!fileError}
          className={cn(
            "flex items-center justify-center gap-2 p-4 border-2 border-dashed rounded-lg cursor-pointer transition-colors",
            fileError
              ? "border-red-300 bg-red-50"
              : "border-teal-300 bg-white hover:border-teal-500 hover:bg-teal-50/50"
          )}
        >
          {salesOfferImagePreview ? (
            <div className="relative flex flex-col items-center justify-center w-full py-2">
              <div className="relative group max-w-sm">
                <img
                  src={salesOfferImagePreview}
                  alt={t("reservations.salesOfferStage.previewAlt")}
                  className="max-h-52 max-w-full rounded-lg object-contain border border-teal-200 shadow-sm"
                />
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setSalesOfferFile(null);
                  }}
                  className="absolute -top-2 -end-2 p-1.5 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-md cursor-pointer"
                  title={t("reservations.salesOfferStage.remove")}
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
              <div className="flex items-center gap-2 mt-2 text-xs text-teal-900 font-medium">
                <span>{salesOfferFile?.name}</span>
                <span className="text-gray-400">
                  ({(salesOfferFile?.size ? salesOfferFile.size / 1024 : 0).toFixed(1)} KB)
                </span>
              </div>
            </div>
          ) : (
            <div className="text-center py-2">
              <ImageIcon className="h-8 w-8 text-teal-600 mx-auto mb-1.5" />
              <span className="text-sm font-semibold text-gray-800 block">
                {t("reservations.salesOfferStage.clickToSelect")}
              </span>
              <span className="text-xs text-gray-500 mt-1 block">
                {t("reservations.salesOfferStage.singleImageHint")}
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
              commentError ? "border-red-500 focus:ring-red-500" : "border-gray-200 focus:ring-teal-500"
            )}
            placeholder={t("reservations.uploadOfferDialog.commentsPlaceholder")}
            value={adminComment}
            onChange={(e) => {
              setAdminComment(e.target.value);
              if (commentError) setCommentError(undefined);
            }}
            aria-invalid={!!commentError}
          />
          <FieldError message={commentError} />
        </div>

        <Button
          className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium shadow-xs cursor-pointer"
          onClick={() => {
            const message = validateBookingComments(adminComment, t);
            setCommentError(message);
            if (message) return;
            handleSalesOfferUpload();
            setIsReuploadingSalesOffer(false);
          }}
          disabled={!salesOfferFile || uploadSalesOfferMutation.isPending}
        >
          {uploadSalesOfferMutation.isPending ? (
            <>
              <Loader2 className="h-4 w-4 me-2 animate-spin" />
              {t("reservations.actions.uploading")}
            </>
          ) : (
            <>
              <Upload className="h-4 w-4 me-2" />
              {t("reservations.salesOfferStage.uploadImage")}
            </>
          )}
        </Button>
      </div>
    );
  }

  return (
    <div className="mt-3 space-y-3">
      {/* Waiting / Locked banner */}
      <div
        className={`p-4 rounded-xl border flex flex-col gap-2 ${
          stage.currentStatusType === "sales_offer_approval"
            ? "bg-blue-50/70 border-blue-200/80"
            : "bg-amber-50/70 border-amber-200/80"
        }`}
      >
        <div className="flex items-start gap-3">
          <div
            className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 mt-0.5 border ${
              stage.currentStatusType === "sales_offer_approval"
                ? "bg-blue-100 border-blue-300"
                : "bg-amber-100 border-amber-300"
            }`}
          >
            <Clock
              className={`h-4 w-4 animate-pulse ${
                stage.currentStatusType === "sales_offer_approval" ? "text-blue-600" : "text-amber-700"
              }`}
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <p
                className={`text-xs font-bold uppercase tracking-wider ${
                  stage.currentStatusType === "sales_offer_approval" ? "text-blue-900" : "text-amber-900"
                }`}
              >
                {stage.currentStatusType === "sales_offer_approval"
                  ? t("reservations.salesOfferStage.waitingAccept")
                  : t("reservations.salesOfferStage.waitingApproval")}
              </p>
              <Badge
                className={`text-[10px] px-2 py-0.5 font-semibold ${
                  stage.currentStatusType === "sales_offer_approval"
                    ? "bg-blue-100 text-blue-800 border-blue-300"
                    : "bg-amber-100 text-amber-800 border-amber-300"
                }`}
              >
                {stage.currentStatusType === "sales_offer_approval"
                  ? t("reservations.salesOfferStage.awaitingAcceptance")
                  : t("reservations.salesOfferStage.pendingApproval")}
              </Badge>
              {stage.currentStatusType === "sales_offer_approval" && (
                <Badge className="bg-gray-100 text-gray-600 border-gray-300 text-[10px] px-2 py-0.5 font-semibold">
                  🔒 {t("reservations.salesOfferStage.locked")}
                </Badge>
              )}
            </div>
            <p
              className={`text-xs mt-1 leading-relaxed ${
                stage.currentStatusType === "sales_offer_approval" ? "text-blue-800" : "text-amber-800"
              }`}
            >
              {stage.currentStatusType === "sales_offer_approval"
                ? t("reservations.salesOfferStage.lockedDesc")
                : t("reservations.salesOfferStage.uploadedDesc")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
