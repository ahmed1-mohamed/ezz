import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FieldError } from "@/components/ui/form-message";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { validateBookingComments } from "@/features/reservations/utils/booking-validation";

interface Stage1ApprovalProps {
  adminComment: string;
  setAdminComment: (val: string) => void;
  approveMutation: any;
  declineMutation: any;
  handleApprove: () => void;
  t: (key: string, values?: Record<string, string | number>) => string;
}

export function Stage1Approval({
  adminComment,
  setAdminComment,
  approveMutation,
  declineMutation,
  handleApprove,
  t,
}: Stage1ApprovalProps) {
  const [commentError, setCommentError] = useState<string | undefined>();
  const isBusy = approveMutation.isPending || declineMutation.isPending;

  const onApprove = () => {
    const message = validateBookingComments(adminComment, t);
    setCommentError(message);
    if (!message) handleApprove();
  };

  const onDecline = () => {
    // Declining cancels the reservation, so the client needs a reason.
    const message = validateBookingComments(adminComment, t, { required: true });
    setCommentError(message);
    if (message) return;
    declineMutation.mutate({
      comments: adminComment.trim(),
      reservation_status_type: "IDENTIFICATION",
    });
  };

  return (
    <div className="space-y-4 pt-4 border-t border-gray-100">
      <div className="space-y-2">
        <label htmlFor="stage1-admin-comment" className="text-sm font-medium text-gray-700">
          {t("reservations.approveDialog.commentsLabel")}
        </label>
        <textarea
          id="stage1-admin-comment"
          className={cn(
            "w-full min-h-[80px] p-3 text-sm border rounded-lg focus:ring-2 focus:border-transparent outline-none resize-y",
            commentError ? "border-red-500 focus:ring-red-500" : "border-gray-200 focus:ring-teal-500"
          )}
          placeholder={t("reservations.approveDialog.commentsPlaceholder")}
          value={adminComment}
          onChange={(e) => {
            setAdminComment(e.target.value);
            if (commentError) setCommentError(undefined);
          }}
          disabled={isBusy}
          aria-invalid={!!commentError}
        />
        <FieldError message={commentError} />
      </div>
      <div className="flex gap-2 pt-2">
        <Button
          className="flex-1 bg-teal-600 hover:bg-teal-700 text-white font-medium shadow-xs"
          disabled={isBusy}
          onClick={onApprove}
        >
          {approveMutation.isPending ? (
            <>
              <Loader2 className="h-4 w-4 me-2 animate-spin" />
              {t("reservations.actions.approving")}
            </>
          ) : (
            t("reservations.actions.approveAndMoveToStage2")
          )}
        </Button>
        <Button
          className="bg-rose-600 hover:bg-rose-700 text-white font-medium px-6"
          disabled={isBusy}
          onClick={onDecline}
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
    </div>
  );
}
