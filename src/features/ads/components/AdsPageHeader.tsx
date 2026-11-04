"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Download, FileSpreadsheet, FileText, Plus } from "lucide-react";
import dynamic from "next/dynamic";
import { useTableSettings } from "@/hooks/use-table-settings";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

const TableSettings = dynamic(
  () => import("@/components/table/table-settings").then((mod) => mod.TableSettings),
  { ssr: false }
);

interface AdsPageHeaderProps {
  totalAds?: number;
  activeAds?: number;
  tableSettings: ReturnType<typeof useTableSettings>;
  onCreateAd: () => void;
  onExportExcel: () => void;
  onExportPdf: () => void;
}

export function AdsPageHeader({
  totalAds = 0,
  activeAds = 0,
  tableSettings,
  onCreateAd,
  onExportExcel,
  onExportPdf,
}: AdsPageHeaderProps) {
  const { t, language } = useLanguage();
  const isAr = language === "ar";

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <h1 className={cn(
          "font-bold text-gray-900 dark:text-white",
          isAr ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl tracking-tight"
        )}>
          {t("ads.title")}
        </h1>
        <div className={cn(
          "flex items-center gap-2 mt-1 text-gray-500 dark:text-gray-400 font-medium",
          isAr ? "text-sm font-semibold" : "text-xs"
        )}>
          <span>{totalAds} {t("ads.title").toLowerCase()}</span>
          {activeAds !== undefined && (
            <>
              <span>•</span>
              <span className="text-teal-700 dark:text-teal-400 font-semibold">
                {activeAds} {t("ads.active")}
              </span>
            </>
          )}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "gap-1.5 h-8 px-3 font-medium border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-neutral-700 shadow-xs",
                isAr ? "text-xs font-semibold" : "text-xs"
              )}
            >
              <Download className="h-3.5 w-3.5 shrink-0 text-gray-500" />
              <span className="truncate">{t("tableSettings.export")}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800"
          >
            <DropdownMenuItem
              onClick={onExportExcel}
              className={cn(
                "cursor-pointer dark:text-gray-200 dark:hover:bg-neutral-800",
                isAr ? "text-xs font-medium" : "text-xs"
              )}
            >
              <FileSpreadsheet className="h-3.5 w-3.5 me-2 text-emerald-600" />
              <span>{t("tableSettings.exportExcel")}</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={onExportPdf}
              className={cn(
                "cursor-pointer dark:text-gray-200 dark:hover:bg-neutral-800",
                isAr ? "text-xs font-medium" : "text-xs"
              )}
            >
              <FileText className="h-3.5 w-3.5 me-2 text-red-600" />
              <span>{t("tableSettings.exportPdf")}</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <TableSettings
          settings={tableSettings}
          onExportExcel={onExportExcel}
          onExportPdf={onExportPdf}
        />

        <Button
          onClick={onCreateAd}
          className={cn(
            "gap-1.5 h-8 px-3 font-medium bg-teal-600 hover:bg-teal-700 text-white shadow-xs rounded-md",
            isAr ? "text-xs font-semibold" : "text-xs"
          )}
        >
          <Plus className="h-3.5 w-3.5 shrink-0" />
          <span>{t("ads.createAd")}</span>
        </Button>
      </div>
    </div>
  );
}
