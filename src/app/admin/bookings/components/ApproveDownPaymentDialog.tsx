import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FieldError, FormErrorAlert } from "@/components/ui/form-message";
import { scrollToFirstInvalidField } from "@/lib/form-utils";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { parseApiError } from "@/lib/api-errors";
import { validateBookingComments } from "@/features/reservations/utils/booking-validation";

interface ApproveDownPaymentDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (comments: string) => void;
  isPending: boolean;
  /** The last failed request, shown inside the dialog (field errors under the input, others in a banner). */
  error?: unknown;
}

export function ApproveDownPaymentDialog({
  isOpen,
  onClose,
  onConfirm,
  isPending,
  error,
}: ApproveDownPaymentDialogProps) {
  const { t } = useLanguage();
  const [comments, setComments] = useState("");
  const [commentsError, setCommentsError] = useState<string | undefined>();
  const [generalError, setGeneralError] = useState<string | undefined>();

  useEffect(() => {
    if (!isOpen) {
      setComments("");
      setCommentsError(undefined);
      setGeneralError(undefined);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!error) return;
    const { fieldErrors, generalMessage } = parseApiError(error, {
      t,
      fallbackMessage: t("reservations.messages.approveFailed"),
      fields: ["comments"],
    });
    setCommentsError(fieldErrors.comments);
    setGeneralError(generalMessage);
  }, [error, t]);

  const handleConfirm = () => {
    if (isPending) return;
    const message = validateBookingComments(comments, t);
    setCommentsError(message);
    if (message) {
      scrollToFirstInvalidField();
      return;
    }
    setGeneralError(undefined);
    onConfirm(comments.trim());
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && !isPending && onClose()}>
      <DialogContent className="sm:max-w-md bg-white">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-teal-700">
            <CheckCircle2 className="h-5 w-5" />
            {t("reservations.approveDownPaymentDialog.title")}
          </DialogTitle>
          <DialogDescription>
            {t("reservations.approveDownPaymentDialog.description")}
          </DialogDescription>
        </DialogHeader>
        <div className="py-3 space-y-3">
          <FormErrorAlert message={generalError} />
          <div>
            <label htmlFor="approve-down-payment-comments" className="text-sm font-medium text-gray-700 mb-1 block">
              {t("reservations.approveDownPaymentDialog.commentsLabel")}
            </label>
            <Textarea
              id="approve-down-payment-comments"
              placeholder={t("reservations.approveDownPaymentDialog.commentsPlaceholder")}
              value={comments}
              onChange={(e) => {
                setComments(e.target.value);
                if (commentsError) setCommentsError(undefined);
              }}
              rows={3}
              className="resize-none"
              disabled={isPending}
              error={!!commentsError}
              aria-invalid={!!commentsError}
            />
            <FieldError message={commentsError} />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose} disabled={isPending}>
            {t("reservations.actions.cancel")}
          </Button>
          <Button
            className="bg-amber-600 hover:bg-amber-700 text-white gap-2"
            onClick={handleConfirm}
            disabled={isPending}
          >
            {isPending ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <CheckCircle2 className="h-4 w-4" />
            )}
            {isPending ? t("reservations.actions.approving") : t("reservations.approveDownPaymentDialog.confirm")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
