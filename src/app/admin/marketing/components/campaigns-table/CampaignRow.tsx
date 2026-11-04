import React from "react";
import { TableRow, TableCell } from "@/components/ui/table";
import { Eye, Edit, Trash2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { formatCampaignDate, getAudienceLabel } from "@/app/admin/marketing/utils/campaignUtils";
import { Campaign, CampaignsType } from "./types";
import { cn } from "@/lib/utils";

interface CampaignRowProps {
  camp: Campaign;
  type: CampaignsType;
  isRTL: boolean;
  handleView?: (id: string | number) => void;
  handleEdit?: (id: string | number) => void;
  handleDelete?: (id: string | number) => void;
}

const PLATFORM_COLORS: Record<string, string> = {
  mobile: "bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/40 dark:text-sky-400 dark:border-sky-800",
  web: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-800",
  all: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800",
};

const CHANNEL_COLORS: Record<string, string> = {
  whatsapp: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800",
  sms: "bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/40 dark:text-sky-400 dark:border-sky-800",
  all: "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/40 dark:text-purple-400 dark:border-purple-800",
};

export const CampaignRow = React.memo(function CampaignRow({
  camp,
  type,
  isRTL,
  handleView,
  handleEdit,
  handleDelete,
}: CampaignRowProps) {
  const { t } = useLanguage();

  const getPlatformLabel = (plat: string) => {
    if (plat === "mobile") return isRTL ? "جوال" : "Mobile";
    if (plat === "web") return isRTL ? "ويب" : "Web";
    return isRTL ? "الكل" : "All";
  };

  const getChannelLabel = (chan: string) => {
    if (chan === "whatsapp") return t("marketingWhatsappSms.modal.channels.whatsapp");
    if (chan === "sms") return t("marketingWhatsappSms.modal.channels.sms");
    return t("marketingWhatsappSms.modal.channels.all");
  };

  const statusStr = camp.status ? String(camp.status).toLowerCase() : "";
  const isEditDisabled = statusStr === "completed" || statusStr === "failed";

  const smsCh =
    type === "sms"
      ? camp.content?.channel || camp.channel || camp.type || "sms"
      : "";

  return (
    <TableRow className="border-b border-gray-100 dark:border-neutral-800/80 hover:bg-gray-50/50 dark:hover:bg-neutral-800/50 transition-colors">
      {/* Campaign Name */}
      <TableCell className="px-4 py-2.5 text-start">
        <button
          onClick={() => handleView && handleView(camp.id)}
          className="text-gray-900 dark:text-gray-100 text-xs font-bold hover:text-teal-600 dark:hover:text-teal-400 transition-colors cursor-pointer text-start focus:outline-none tracking-tight truncate max-w-[260px] block"
        >
          {camp.campaign_name || camp.name || "-"}
        </button>
      </TableCell>

      {/* Channel / Platform Badge */}
      {type !== "email" && (
        <TableCell className="px-3 py-2.5 text-center">
          {type === "notification" ? (
            <span
              className={cn(
                "inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium border capitalize",
                PLATFORM_COLORS[camp.platform || "all"] ?? PLATFORM_COLORS.all
              )}
            >
              {getPlatformLabel(camp.platform || "all")}
            </span>
          ) : type === "sms" ? (
            <span
              className={cn(
                "inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium border capitalize",
                CHANNEL_COLORS[smsCh] ?? CHANNEL_COLORS.all
              )}
            >
              {getChannelLabel(smsCh)}
            </span>
          ) : null}
        </TableCell>
      )}

      {/* Audience */}
      <TableCell className="px-3 py-2.5 text-center text-xs text-gray-600 dark:text-gray-300">
        {getAudienceLabel(camp.audience || camp.audience_segment || "all", isRTL)}
      </TableCell>

      {/* Sent */}
      <TableCell className="px-3 py-2.5 text-center text-xs font-medium text-gray-700 dark:text-gray-200">
        {(camp.sent || 0).toLocaleString()}
      </TableCell>

      {/* Received / Delivered */}
      <TableCell className="px-3 py-2.5 text-center text-xs font-semibold text-emerald-600 dark:text-emerald-400">
        {(camp.received || 0).toLocaleString()}
      </TableCell>

      {/* Opened / Read */}
      <TableCell className="px-3 py-2.5 text-center text-xs font-semibold text-teal-600 dark:text-teal-400">
        {((camp.opened || camp.read) ?? 0).toLocaleString()}
      </TableCell>

      {/* Failed */}
      <TableCell className="px-3 py-2.5 text-center text-xs font-semibold text-red-600 dark:text-red-400">
        {(camp.failed || 0).toLocaleString()}
      </TableCell>

      {/* Date */}
      <TableCell className="px-4 py-2.5 text-center text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
        {formatCampaignDate(camp.date || camp.created_at || "", isRTL)}
      </TableCell>

      {/* Inline Actions matching Project Table */}
      <TableCell className="px-3 py-2.5 text-center whitespace-nowrap min-w-[120px] w-[120px]" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-center gap-1.5 shrink-0">
          {handleView && (
            <button
              onClick={() => handleView(camp.id)}
              title={isRTL ? "عرض التفاصيل" : "View"}
              className="h-8 w-8 inline-flex items-center justify-center hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg text-gray-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors cursor-pointer shrink-0"
            >
              <Eye className="h-4 w-4 shrink-0" />
            </button>
          )}

          {handleEdit && (
            <button
              onClick={() => handleEdit(camp.id)}
              title={isRTL ? "تعديل" : "Edit"}
              disabled={isEditDisabled}
              className={cn(
                "h-8 w-8 inline-flex items-center justify-center rounded-lg transition-colors cursor-pointer shrink-0",
                isEditDisabled
                  ? "text-gray-300 dark:text-neutral-700 cursor-not-allowed"
                  : "text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-neutral-800"
              )}
            >
              <Edit className="h-4 w-4 shrink-0" />
            </button>
          )}

          {handleDelete && (
            <button
              onClick={() => handleDelete(camp.id)}
              title={isRTL ? "حذف" : "Delete"}
              className="h-8 w-8 inline-flex items-center justify-center hover:bg-red-50 dark:hover:bg-red-950/30 rounded-lg text-gray-500 hover:text-red-600 dark:hover:text-red-400 transition-colors cursor-pointer shrink-0"
            >
              <Trash2 className="h-4 w-4 shrink-0" />
            </button>
          )}
        </div>
      </TableCell>
    </TableRow>
  );
});
