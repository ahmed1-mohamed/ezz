"use client";

import { Eye, Trash2, Edit, ToggleLeft, ToggleRight } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { EmptyState } from "@/components/ui/empty-state";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

interface Campaign {
  id: string | number;
  campaign_name: string;
  audience: string;
  platform: string;
  status: string;
  sent: number;
  received: number;
  opened: number;
  failed: number;
  date: string;
}

interface NotificationsTableProps {
  campaigns: Campaign[];
  isLoadingCampaigns: boolean;
  handleToggleStatus: (id: string | number, status: string) => void;
  handleView: (id: string | number) => void;
  handleEdit: (id: string | number) => void;
  handleDelete: (id: string | number) => void;
}

export function NotificationsTable({
  campaigns,
  isLoadingCampaigns,
  handleToggleStatus,
  handleView,
  handleEdit,
  handleDelete,
}: NotificationsTableProps) {
  const { t, language } = useLanguage();
  const isRTL = language === "ar";

  const getPlatformLabel = (plat: string) => {
    if (plat === "mobile") return language === "ar" ? "جوال" : "Mobile";
    if (plat === "web") return language === "ar" ? "ويب" : "Web";
    return language === "ar" ? "الكل" : "All";
  };

  const getPlatformBadgeColor = (plat: string) => {
    if (plat === "mobile") return "bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/40 dark:text-sky-400 dark:border-sky-800";
    if (plat === "web") return "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-800";
    return "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800";
  };

  const getAudienceLabel = (aud: string) => {
    if (aud === "registered") return language === "ar" ? "مسجلون" : "Registered";
    if (aud === "visitors") return language === "ar" ? "زوار" : "Visitors";
    if (aud === "specific") return language === "ar" ? "مستخدمين محددين" : "Specific Users";
    if (aud === "failed") return language === "ar" ? "عمليات دفع فاشلة" : "Failed Payments";
    return language === "ar" ? "الكل" : "All";
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "-";
    const d = new Date(dateStr);
    return isNaN(d.getTime())
      ? dateStr
      : d.toLocaleDateString(isRTL ? "ar-EG" : "en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        });
  };

  return (
    <div className="rounded-lg border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden overflow-x-auto w-full">
      <Table className="w-full min-w-[950px]">
        <TableHeader>
          <TableRow className="bg-gray-50/80 dark:bg-neutral-800/60 hover:bg-gray-50/80 dark:hover:bg-neutral-800/60 border-b border-gray-200 dark:border-neutral-800">
            <TableHead className={`font-semibold text-gray-500 dark:text-gray-400 px-4 py-3 text-[11px] tracking-wider min-w-[200px] ${isRTL ? "text-right" : "text-left"}`}>
              {t("marketingNotifications.columns.campaignName") || "Campaign Name"}
            </TableHead>
            <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3 py-3 text-[11px] tracking-wider text-center w-[110px]">
              {t("marketingNotifications.columns.platform") || "Platform"}
            </TableHead>
            <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3 py-3 text-[11px] tracking-wider text-center w-[130px]">
              {t("marketingNotifications.columns.audience") || "Audience"}
            </TableHead>
            <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3 py-3 text-[11px] tracking-wider text-center w-[90px]">
              {t("marketingNotifications.columns.sent") || "Sent"}
            </TableHead>
            <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3 py-3 text-[11px] tracking-wider text-center w-[90px]">
              {t("marketingNotifications.columns.received") || "Received"}
            </TableHead>
            <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3 py-3 text-[11px] tracking-wider text-center w-[90px]">
              {t("marketingNotifications.columns.opened") || "Opened"}
            </TableHead>
            <TableHead className="font-semibold text-red-500 dark:text-red-400 px-3 py-3 text-[11px] tracking-wider text-center w-[90px]">
              {t("marketingNotifications.columns.failed") || "Failed"}
            </TableHead>
            <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3 py-3 text-[11px] tracking-wider text-center w-[120px] min-w-[110px] whitespace-nowrap">
              {t("marketingNotifications.columns.date") || "Date"}
            </TableHead>
            <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3 py-3 text-[11px] tracking-wider text-center w-[90px] min-w-[90px] whitespace-nowrap">
              {language === "ar" ? "الحالة" : "Status"}
            </TableHead>
            <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3 py-3 text-[11px] tracking-wider text-center w-[120px] min-w-[120px] whitespace-nowrap">
              {isRTL ? "العمليات" : "Actions"}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoadingCampaigns ? (
            Array.from({ length: 5 }).map((_, i) => (
              <TableRow key={i} className="animate-pulse">
                <TableCell colSpan={10} className="py-4 px-4">
                  <div className="h-4 bg-gray-200 dark:bg-neutral-800 rounded w-full" />
                </TableCell>
              </TableRow>
            ))
          ) : campaigns.length === 0 ? (
            <TableRow>
              <TableCell colSpan={10} className="p-0">
                <EmptyState
                  type="no_results"
                  title={isRTL ? "لا توجد حملات حتى الآن" : "No campaigns found"}
                  className="py-12"
                />
              </TableCell>
            </TableRow>
          ) : (
            campaigns.map((camp) => (
              <TableRow
                key={camp.id}
                className="border-b border-gray-100 dark:border-neutral-800/80 hover:bg-gray-50/50 dark:hover:bg-neutral-800/50 transition-colors"
              >
                {/* Campaign Name */}
                <TableCell className={`px-4 py-2.5 ${isRTL ? "text-right" : "text-left"}`}>
                  <button
                    onClick={() => handleView(camp.id)}
                    className="text-gray-900 dark:text-gray-100 text-xs font-bold hover:text-teal-600 dark:hover:text-teal-400 transition-colors cursor-pointer text-start focus:outline-none tracking-tight truncate max-w-[260px] block"
                  >
                    {camp.campaign_name}
                  </button>
                </TableCell>

                {/* Platform Badge */}
                <TableCell className="px-3 py-2.5 text-center">
                  <span
                    className={cn(
                      "inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium border capitalize",
                      getPlatformBadgeColor(camp.platform || "all")
                    )}
                  >
                    {getPlatformLabel(camp.platform || "all")}
                  </span>
                </TableCell>

                {/* Audience */}
                <TableCell className="px-3 py-2.5 text-center text-xs text-gray-600 dark:text-gray-300">
                  {getAudienceLabel(camp.audience)}
                </TableCell>

                {/* Sent */}
                <TableCell className="px-3 py-2.5 text-center text-xs font-medium text-gray-700 dark:text-gray-200">
                  {(camp.sent || 0).toLocaleString()}
                </TableCell>

                {/* Received */}
                <TableCell className="px-3 py-2.5 text-center text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  {(camp.received || 0).toLocaleString()}
                </TableCell>

                {/* Opened */}
                <TableCell className="px-3 py-2.5 text-center text-xs font-semibold text-teal-600 dark:text-teal-400">
                  {(camp.opened || 0).toLocaleString()}
                </TableCell>

                {/* Failed */}
                <TableCell className="px-3 py-2.5 text-center text-xs font-semibold text-red-600 dark:text-red-400">
                  {(camp.failed || 0).toLocaleString()}
                </TableCell>

                {/* Date */}
                <TableCell className="px-4 py-2.5 text-center text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
                  {formatDate(camp.date)}
                </TableCell>

                {/* Status Toggle */}
                <TableCell className="px-3 py-2.5 text-center whitespace-nowrap min-w-[90px] w-[90px]" onClick={(e) => e.stopPropagation()}>
                  <button
                    onClick={() => handleToggleStatus(camp.id, camp.status)}
                    className="focus:outline-none transition-all duration-200 hover:scale-105 active:scale-95 inline-flex items-center justify-center cursor-pointer shrink-0"
                    title={isRTL ? "تغيير الحالة" : "Toggle Status"}
                  >
                    {camp.status === "running" || camp.status === "true" || (camp.status as any) === true ? (
                      <ToggleRight className="h-6 w-6 text-emerald-500 hover:text-emerald-600 transition-colors shrink-0" />
                    ) : (
                      <ToggleLeft className="h-6 w-6 text-gray-300 dark:text-neutral-700 hover:text-gray-400 shrink-0" />
                    )}
                  </button>
                </TableCell>

                {/* Actions */}
                <TableCell className="px-3 py-2.5 text-center whitespace-nowrap min-w-[120px] w-[120px]" onClick={(e) => e.stopPropagation()}>
                  <div className="flex items-center justify-center gap-1.5 shrink-0">
                    <button
                      onClick={() => handleView(camp.id)}
                      title={isRTL ? "عرض التفاصيل" : "View"}
                      className="h-8 w-8 inline-flex items-center justify-center hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg text-gray-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors cursor-pointer shrink-0"
                    >
                      <Eye className="h-4 w-4 shrink-0" />
                    </button>
                    <button
                      onClick={() => handleEdit(camp.id)}
                      title={isRTL ? "تعديل" : "Edit"}
                      className="h-8 w-8 inline-flex items-center justify-center hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer shrink-0"
                    >
                      <Edit className="h-4 w-4 shrink-0" />
                    </button>
                    <button
                      onClick={() => handleDelete(camp.id)}
                      title={isRTL ? "حذف" : "Delete"}
                      className="h-8 w-8 inline-flex items-center justify-center hover:bg-red-50 dark:hover:bg-red-950/30 rounded-lg text-gray-500 hover:text-red-600 dark:hover:text-red-400 transition-colors cursor-pointer shrink-0"
                    >
                      <Trash2 className="h-4 w-4 shrink-0" />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}