import { useState, useEffect, useRef, useCallback } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FieldError, FormErrorAlert } from "@/components/ui/form-message";
import { scrollToFirstInvalidField } from "@/lib/form-utils";
import { Upload, AlertCircle, Loader2, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { parseApiError } from "@/lib/api-errors";
import {
  BOOKING_FILE_FIELD_MAP,
  SALES_OFFER_IMAGE_RULE,
  toAcceptAttribute,
  validateBookingComments,
  validateUploadFile,
} from "@/features/reservations/utils/booking-validation";

interface UploadSalesOfferDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (file: File, comments: string) => void;
  isPending: boolean;
  /** The last failed request, shown inside the dialog (field errors under the input, others in a banner). */
  error?: unknown;
}

const ACCEPTED_MIMES = toAcceptAttribute(SALES_OFFER_IMAGE_RULE);

export function UploadSalesOfferDialog({
  isOpen,
  onClose,
  onConfirm,
  isPending,
  error,
}: UploadSalesOfferDialogProps) {
  const { t, language } = useLanguage();
  const isAr = language === "ar";
  const [comments, setComments] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [commentsError, setCommentsError] = useState<string | undefined>();
  const [generalError, setGeneralError] = useState<string | undefined>();
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) {
      setComments("");
      setSelectedFile(null);
      setFileError(null);
      setCommentsError(undefined);
      setGeneralError(undefined);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  }, [isOpen]);

  useEffect(() => {
    if (!error) return;
    const { fieldErrors, generalMessage } = parseApiError(error, {
      t,
      fallbackMessage: t("reservations.messages.salesOfferFailed"),
      fields: ["file", "comments"],
      fieldMap: BOOKING_FILE_FIELD_MAP,
    });
    setFileError(fieldErrors.file ?? null);
    setCommentsError(fieldErrors.comments);
    setGeneralError(generalMessage);
  }, [error, t]);

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      setFileError(null);
      const file = e.target.files?.[0] ?? null;
      if (!file) return;
      const message = validateUploadFile(file, SALES_OFFER_IMAGE_RULE, t);
      if (message) {
        setFileError(message);
        return;
      }
      setSelectedFile(file);
    },
    [t],
  );

  const handleConfirm = () => {
    if (isPending) return;
    const nextFileError = selectedFile ? fileError : t("reservations.validation.fileRequired");
    const nextCommentsError = validateBookingComments(comments, t);
    setFileError(nextFileError);
    setCommentsError(nextCommentsError);
    if (!selectedFile || nextFileError || nextCommentsError) {
      scrollToFirstInvalidField();
      return;
    }
    setGeneralError(undefined);
    onConfirm(selectedFile, comments.trim());
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && !isPending && onClose()}>
      <DialogContent className="sm:max-w-md bg-white">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-teal-700">
            <Upload className="h-5 w-5" />
            {isAr ? "رفع صورة عرض المبيعات" : "Upload Sales Offer Image"}
          </DialogTitle>
          <DialogDescription>
            {isAr
              ? "ارفع صورة عرض المبيعات (صورة واحدة فقط: PNG, JPG, WEBP - الحد الأقصى 5 ميجابايت). بعد الرفع ستكون المرحلة في انتظار قبول العميل."
              : "Upload the sales offer image (one image only: PNG, JPG, WEBP - max 5 MB). Once uploaded, the stage will wait for client acceptance."}
          </DialogDescription>
        </DialogHeader>

        <div className="py-3 space-y-4">
          <FormErrorAlert message={generalError} />
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              {isAr ? "صورة عرض المبيعات" : "Sales Offer Image"} <span className="text-red-500">*</span>
            </label>
            <div
              role="button"
              tabIndex={0}
              aria-invalid={!!fileError}
              className={`relative flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-6 cursor-pointer transition-colors ${fileError
                  ? "border-red-300 bg-red-50"
                  : selectedFile
                    ? "border-teal-400 bg-teal-50"
                    : "border-gray-300 bg-gray-50 hover:border-gray-400 hover:bg-gray-100"
                }`}
              onClick={() => !isPending && fileInputRef.current?.click()}
              onKeyDown={(e) => {
                if ((e.key === "Enter" || e.key === " ") && !isPending) {
                  e.preventDefault();
                  fileInputRef.current?.click();
                }
              }}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept={ACCEPTED_MIMES}
                multiple={false}
                onChange={handleFileChange}
                className="hidden"
              />
              {selectedFile ? (
                <div className="flex flex-col items-center">
                  <img
                    src={URL.createObjectURL(selectedFile)}
                    alt="Sales Offer Preview"
                    className="max-h-40 max-w-full rounded-md object-contain border border-teal-200 mb-2 shadow-xs"
                  />
                  <p className="text-sm font-medium text-teal-700 text-center break-all">
                    {selectedFile.name}
                  </p>
                  <p className="text-xs text-teal-600">
                    {(selectedFile.size / 1024).toFixed(1)} KB
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {isAr ? "انقر لتغيير الصورة" : "Click to change image"}
                  </p>
                </div>
              ) : (
                <>
                  <Upload className="h-8 w-8 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-600 font-medium">
                    {isAr ? "انقر لاختيار صورة عرض المبيعات" : "Click to select sales offer image"}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {isAr ? "صورة واحدة فقط (PNG, JPG, WEBP) بحد أقصى 5 ميجابايت" : "Single image only (PNG, JPG, WEBP) — max 5 MB"}
                  </p>
                </>
              )}
            </div>
            {fileError && (
              <p role="alert" data-field-error="" className="text-xs text-red-600 mt-1 flex items-center gap-1 text-start">
                <AlertCircle className="h-3 w-3 shrink-0" />
                {fileError}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="sales-offer-comments" className="text-sm font-medium text-gray-700 mb-1 block">
              {t("reservations.uploadOfferDialog.commentsLabel")}
            </label>
            <Textarea
              id="sales-offer-comments"
              placeholder={t("reservations.uploadOfferDialog.commentsPlaceholder")}
              value={comments}
              onChange={(e) => {
                setComments(e.target.value);
                if (commentsError) setCommentsError(undefined);
              }}
              rows={2}
              className="resize-none"
              disabled={isPending}
              error={!!commentsError}
              aria-invalid={!!commentsError}
            />
            <FieldError message={commentsError} />
          </div>
        </div>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={onClose}
            disabled={isPending}
          >
            {t("reservations.actions.cancel")}
          </Button>
          <Button
            className="bg-teal-600 hover:bg-teal-700 text-white gap-2"
            onClick={handleConfirm}
            disabled={isPending}
          >
            {isPending ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <CheckCircle2 className="h-4 w-4" />
            )}
            {isPending ? t("reservations.actions.uploading") : t("reservations.actions.uploadAndApprove")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
