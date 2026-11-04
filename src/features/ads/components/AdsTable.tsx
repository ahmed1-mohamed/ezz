"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import { Eye, Edit, Trash2 } from "lucide-react";
import { useTableSettings } from "@/hooks/use-table-settings";
import { useLanguage } from "@/contexts/LanguageContext";
import { EmptyState } from "@/components/ui/empty-state";
import { cn } from "@/lib/utils";

interface AdsTableProps {
  settings?: ReturnType<typeof useTableSettings>;
  ads: any[];
  selectedAds?: string[];
  handleSelectAll?: (checked: boolean) => void;
  handleSelectOne?: (id: string, checked: boolean) => void;
  isColVisible: (colId: string) => boolean;
  updatingAdId: string | null;
  handleStatusToggle: (adId: string, checked: boolean) => void;
  onEditClick?: (ad: any) => void;
  onDeleteClick: (ad: any) => void;
}

export const AdsTable = React.memo(function AdsTable({
  settings,
  ads,
  isColVisible,
  updatingAdId,
  handleStatusToggle,
  onEditClick,
  onDeleteClick,
}: AdsTableProps) {
  const router = useRouter();
  const pathname = usePathname();
  const routePrefix = pathname.startsWith("/developer") ? "/developer" : "/admin";
  const { t, language } = useLanguage();
  const isAr = language === "ar";

  const getDensityClass = () => {
    const density = settings?.settings?.density;
    switch (density) {
      case "compact": return "py-1.5 px-3";
      case "spacious": return "py-3.5 px-3";
      case "comfortable":
      default: return "py-2.5 px-3";
    }
  };

  const densityClass = getDensityClass();

  const headTextClass = cn(
    "font-semibold text-gray-500 dark:text-gray-400 px-3",
    isAr ? "text-[13px] font-bold tracking-normal" : "text-[11px] tracking-wider"
  );

  const cellTextClass = isAr ? "text-sm font-medium" : "text-xs";
  const cellNumberClass = isAr ? "text-sm font-bold" : "text-xs font-bold";

  return (
    <div className="rounded-lg border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden overflow-x-auto w-full">
      <Table className="w-full min-w-[1000px]">
        <TableHeader>
          <TableRow className="bg-gray-50/80 dark:bg-neutral-800/60 hover:bg-gray-50/80 dark:hover:bg-neutral-800/60 border-b border-gray-200 dark:border-neutral-800">
            <TableHead className={cn(headTextClass, "min-w-[220px]")}>
              {t("ads.columns.title")}
            </TableHead>

            {isColVisible("type") && (
              <TableHead className={cn(headTextClass, "w-[100px]")}>
                {t("ads.columns.type")}
              </TableHead>
            )}

            {isColVisible("platform") && (
              <TableHead className={cn(headTextClass, "w-[100px]")}>
                {t("ads.columns.platform")}
              </TableHead>
            )}

            {isColVisible("country") && (
              <TableHead className={cn(headTextClass, "w-[110px]")}>
                {t("ads.columns.country")}
              </TableHead>
            )}

            {isColVisible("location") && (
              <TableHead className={cn(headTextClass, "w-[120px]")}>
                {t("ads.columns.locations")}
              </TableHead>
            )}

            {isColVisible("views") && (
              <TableHead className={cn(headTextClass, "w-[90px]")}>
                {t("ads.columns.views")}
              </TableHead>
            )}

            {isColVisible("clicks") && (
              <TableHead className={cn(headTextClass, "w-[90px]")}>
                {t("ads.columns.clicks")}
              </TableHead>
            )}

            {isColVisible("ctr") && (
              <TableHead className={cn(headTextClass, "w-[80px]")}>
                {t("ads.columns.ctr")}
              </TableHead>
            )}

            {isColVisible("visibility") && (
              <TableHead className={cn(headTextClass, "text-center w-[90px]")}>
                {t("ads.columns.active")}
              </TableHead>
            )}

            {isColVisible("status") && (
              <TableHead className={cn(headTextClass, "w-[110px]")}>
                {t("ads.columns.status")}
              </TableHead>
            )}

            <TableHead className={cn(headTextClass, "text-center w-[110px]")}>
              {t("ads.columns.actions")}
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {ads.length === 0 ? (
            <TableRow>
              <TableCell colSpan={11} className="p-0">
                <EmptyState
                  type="no_results"
                  title={t("ads.table.noAds")}
                  className="py-12"
                />
              </TableCell>
            </TableRow>
          ) : (
            ads.map((ad: any) => {
              const adId = ad.creative_id || ad.id;
              const isActive = ad.status === "active" || ad.is_active === true;
              return (
                <TableRow
                  key={adId}
                  className="border-b border-gray-100 dark:border-neutral-800/80 hover:bg-gray-50/50 dark:hover:bg-neutral-800/50 transition-colors"
                >
                  <TableCell className={`px-3 ${densityClass}`}>
                    <button
                      onClick={() => router.push(`${routePrefix}/ads/${adId}`)}
                      className={cn(
                        "text-gray-900 dark:text-gray-100 font-bold hover:text-teal-600 dark:hover:text-teal-400 transition-colors cursor-pointer text-start focus:outline-none tracking-tight truncate max-w-[240px]",
                        isAr ? "text-sm font-bold" : "text-xs font-bold"
                      )}
                    >
                      {ad.creative_title || ad.title || t("ads.table.adFallback", { id: adId })}
                    </button>
                  </TableCell>

                  {isColVisible("type") && (
                    <TableCell className={cn("text-gray-600 dark:text-gray-300 px-3 capitalize truncate", cellTextClass, densityClass)}>
                      {ad.type || "-"}
                    </TableCell>
                  )}

                  {isColVisible("platform") && (
                    <TableCell className={cn("text-gray-600 dark:text-gray-300 px-3 capitalize truncate", cellTextClass, densityClass)}>
                      {ad.platform || "-"}
                    </TableCell>
                  )}

                  {isColVisible("country") && (
                    <TableCell className={cn("text-gray-500 dark:text-gray-400 px-3 truncate", cellTextClass, densityClass)}>
                      {ad.country || "-"}
                    </TableCell>
                  )}

                  {isColVisible("location") && (
                    <TableCell className={cn("text-gray-500 dark:text-gray-400 px-3 truncate", cellTextClass, densityClass)}>
                      {ad.location || "-"}
                    </TableCell>
                  )}

                  {isColVisible("views") && (
                    <TableCell className={cn("text-teal-600 dark:text-teal-400 px-3", cellNumberClass, densityClass)}>
                      {Number(ad.views || 0).toLocaleString()}
                    </TableCell>
                  )}

                  {isColVisible("clicks") && (
                    <TableCell className={cn("text-teal-600 dark:text-teal-400 px-3", cellNumberClass, densityClass)}>
                      {Number(ad.clicks || 0).toLocaleString()}
                    </TableCell>
                  )}

                  {isColVisible("ctr") && (
                    <TableCell className={cn("text-gray-900 dark:text-gray-100 px-3", cellTextClass, densityClass)}>
                      {ad.ctr || "0%"}
                    </TableCell>
                  )}

                  {isColVisible("visibility") && (
                    <TableCell className={`text-center px-3 ${densityClass}`} onClick={(e) => e.stopPropagation()}>
                      <Switch
                        checked={isActive}
                        onCheckedChange={(checked) => handleStatusToggle(String(adId), checked)}
                        disabled={updatingAdId === String(adId)}
                      />
                    </TableCell>
                  )}

                  {isColVisible("status") && (
                    <TableCell className={`px-3 ${densityClass}`}>
                      <span
                        className={cn(
                          "inline-flex items-center rounded border",
                          isAr ? "text-xs font-semibold px-2.5 py-1" : "text-[11px] font-medium px-2 py-0.5",
                          ad.status?.toLowerCase() === "active"
                            ? "bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800"
                            : ad.status?.toLowerCase() === "paused"
                              ? "bg-amber-50 text-amber-600 border-amber-200 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-800"
                              : "bg-neutral-100 text-neutral-600 border-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:border-neutral-700"
                        )}
                      >
                        {ad.status || t("ads.status.draft")}
                      </span>
                    </TableCell>
                  )}

                  <TableCell className={`text-center px-3 ${densityClass}`} onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center justify-center gap-1">
                      <button
                        onClick={() => router.push(`${routePrefix}/ads/${adId}`)}
                        title={t("ads.table.view")}
                        className="h-7 w-7 inline-flex items-center justify-center rounded text-gray-400 hover:text-teal-600 hover:bg-teal-50 dark:hover:bg-slate-800 transition-colors"
                      >
                        <Eye className="h-3.5 w-3.5" />
                      </button>

                      <button
                        onClick={() => onEditClick ? onEditClick(ad) : router.push(`${routePrefix}/ads/${adId}/edit`)}
                        title={t("common.edit")}
                        className="h-7 w-7 inline-flex items-center justify-center rounded text-gray-400 hover:text-teal-600 hover:bg-teal-50 dark:hover:bg-slate-800 transition-colors"
                      >
                        <Edit className="h-3.5 w-3.5" />
                      </button>

                      <button
                        onClick={() => onDeleteClick(ad)}
                        title={t("common.delete")}
                        className="h-7 w-7 inline-flex items-center justify-center rounded text-red-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })
          )}
        </TableBody>
      </Table>
    </div>
  );
});
