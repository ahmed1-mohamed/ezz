import React from "react";
import { CheckCircle2, XCircle, Play, CalendarClock, Loader2 } from "lucide-react";

interface CampaignStatusBadgeProps {
  status: string;
  id: string | number;
  pendingToggleId: string | number | null;
  isRTL: boolean;
  onToggle: (id: string | number, status: string) => void;
}

export const CampaignStatusBadge = React.memo(function CampaignStatusBadge({
  status,
  id,
  pendingToggleId,
  isRTL,
  onToggle,
}: CampaignStatusBadgeProps) {
  const s = status ? String(status).toLowerCase() : "scheduled";
  const isPending = pendingToggleId === id;

  if (s === "completed") {
    return (
      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-green-50 text-green-700 border border-green-200 dark:bg-green-950/20 dark:text-green-400 dark:border-green-900">
        <CheckCircle2 className="h-3.5 w-3.5" />
        <span>{isRTL ? "مكتمل" : "Completed"}</span>
      </div>
    );
  }

  if (s === "failed") {
    return (
      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-red-50 text-red-700 border border-red-200 dark:bg-red-950/20 dark:text-red-400 dark:border-red-900">
        <XCircle className="h-3.5 w-3.5" />
        <span>{isRTL ? "فشل" : "Failed"}</span>
      </div>
    );
  }

  if (s === "running") {
    return (
      <button
        type="button"
        disabled={pendingToggleId !== null}
        title={isRTL ? "إيقاف مؤقت (جدولة)" : "Pause campaign (schedule)"}
        onClick={() => onToggle(id, status)}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-green-100 text-green-800 border border-green-300 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800 transition-all hover:bg-green-200 cursor-pointer animate-pulse disabled:opacity-60"
      >
        {isPending ? (
          <Loader2 className="h-3.5 w-3.5 animate-spin" />
        ) : (
          <Play className="h-3.5 w-3.5 fill-current" />
        )}
        <span>{isRTL ? "جاري التشغيل" : "Running"}</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      disabled={pendingToggleId !== null}
      title={isRTL ? "تشغيل الحملة" : "Run campaign"}
      onClick={() => onToggle(id, status)}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-gray-50 text-gray-600 border border-gray-200 dark:bg-neutral-800/50 dark:text-gray-400 dark:border-neutral-700 transition-all hover:bg-gray-100 cursor-pointer disabled:opacity-60"
    >
      {isPending ? (
        <Loader2 className="h-3.5 w-3.5 animate-spin" />
      ) : (
        <CalendarClock className="h-3.5 w-3.5" />
      )}
      <span>{isRTL ? "مجدولة" : "Scheduled"}</span>
    </button>
  );
});
