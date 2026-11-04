"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Plus, Download, FileSpreadsheet, FileText } from "lucide-react";
import dynamic from "next/dynamic";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTableSettings } from "@/hooks/use-table-settings";

const TableSettings = dynamic(
  () => import("@/components/table/table-settings").then((mod) => mod.TableSettings),
  { ssr: false }
);

interface LocationsHeaderProps {
  totalLocations: number;
  onAddLocation: () => void;
  tableSettings?: ReturnType<typeof useTableSettings>;
  onExportExcel?: () => void;
  onExportPdf?: () => void;
  isExporting?: boolean;
}

export function LocationsHeader({
  totalLocations,
  onAddLocation,
  tableSettings,
  onExportExcel,
  onExportPdf,
  isExporting = false,
}: LocationsHeaderProps) {
  const { t, language } = useLanguage();
  const isRTL = language === "ar";

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div className="flex items-center gap-2.5">
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {t("locations.title")}
        </h1>
        <Badge
          variant="outline"
          className="bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950/40 dark:text-teal-400 dark:border-teal-900/60 rounded-full px-2.5 py-0.5 text-xs font-semibold"
        >
          {totalLocations}
        </Badge>
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        {(onExportExcel || onExportPdf) && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="gap-1.5 h-9 px-3 text-xs font-medium border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-neutral-700 shadow-2xs cursor-pointer"
                disabled={isExporting}
              >
                <Download className="h-3.5 w-3.5 shrink-0 text-gray-500 dark:text-gray-400" />
                <span>{isExporting ? t("common.exporting") : t("common.export")}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align={isRTL ? "start" : "end"}
              className="bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 shadow-lg text-xs"
            >
              {onExportExcel && (
                <DropdownMenuItem
                  onClick={onExportExcel}
                  className="gap-2 cursor-pointer text-gray-700 dark:text-gray-200 focus:bg-gray-100 dark:focus:bg-neutral-800"
                >
                  <FileSpreadsheet className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  <span>{t("tableSettings.exportExcel")}</span>
                </DropdownMenuItem>
              )}
              {onExportPdf && (
                <DropdownMenuItem
                  onClick={onExportPdf}
                  className="gap-2 cursor-pointer text-gray-700 dark:text-gray-200 focus:bg-gray-100 dark:focus:bg-neutral-800"
                >
                  <FileText className="h-4 w-4 text-rose-600 dark:text-rose-400" />
                  <span>{t("tableSettings.exportPdf")}</span>
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        )}

        {tableSettings && (
          <TableSettings
            settings={tableSettings}
            onExportExcel={onExportExcel}
          />
        )}

        <Button
          onClick={onAddLocation}
          className="h-9 px-4 bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold rounded-lg shadow-2xs gap-1.5 cursor-pointer"
        >
          <Plus className="h-4 w-4" />
          <span>{t("locations.addNewLocation")}</span>
        </Button>
      </div>
    </div>
  );
}
