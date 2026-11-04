"use client";

import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Download,
  UploadCloud,
  FileSpreadsheet,
  FileDown,
  FileText,
  RefreshCw,
  Plus,
} from "lucide-react";
import dynamic from "next/dynamic";
import { useTableSettings } from "@/hooks/use-table-settings";
import { useLanguage } from "@/contexts/LanguageContext";

const TableSettings = dynamic(
  () => import("@/components/table/table-settings").then((mod) => mod.TableSettings),
  { ssr: false }
);

interface PropertiesPageHeaderProps {
  totalProperties: number;
  isExporting: boolean;
  onExportExcel: () => void;
  onExportCsv: () => void;
  onExportPdf: () => void;
  onImportClick: () => void;
  onSyncClick: () => void;
  onCreateClick: () => void;
  tableSettings: ReturnType<typeof useTableSettings>;
}

export function PropertiesPageHeader({
  totalProperties,
  isExporting,
  onExportExcel,
  onExportCsv,
  onExportPdf,
  onImportClick,
  onSyncClick,
  onCreateClick,
  tableSettings,
}: PropertiesPageHeaderProps) {
  const { t } = useLanguage();

  return (
    <PageHeader
      title={t("properties.title")}
      totalItems={totalProperties}
    >
      <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
        {/* Export Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="gap-1.5 h-8 px-3 text-xs font-medium border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-neutral-700 shadow-sm"
              disabled={isExporting}
            >
              <Download className="h-3.5 w-3.5 shrink-0 text-gray-500" />
              <span className="truncate">
                {isExporting ? t("common.exporting") : t("tableSettings.export")}
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800"
          >
            <DropdownMenuItem
              onClick={onExportExcel}
              className="gap-2 cursor-pointer dark:hover:bg-neutral-800 dark:text-gray-200"
            >
              <FileSpreadsheet className="h-4 w-4 text-emerald-600" /> Excel
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={onExportCsv}
              className="gap-2 cursor-pointer dark:hover:bg-neutral-800 dark:text-gray-200"
            >
              <FileDown className="h-4 w-4 text-blue-600" /> CSV
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={onExportPdf}
              className="gap-2 cursor-pointer dark:hover:bg-neutral-800 dark:text-gray-200"
            >
              <FileText className="h-4 w-4 text-red-600" /> PDF
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Import Button */}
        <Button
          variant="outline"
          className="gap-1.5 h-8 px-3 text-xs font-medium border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-neutral-700 shadow-sm"
          onClick={onImportClick}
        >
          <UploadCloud className="h-3.5 w-3.5 shrink-0 text-gray-500" />
          <span className="truncate">{t("properties.columns.import")}</span>
        </Button>

        {/* Sync ERPNext Button */}
        <Button
          variant="outline"
          className="gap-1.5 h-8 px-3 text-xs font-medium border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-neutral-700 shadow-sm"
          onClick={onSyncClick}
        >
          <RefreshCw className="h-3.5 w-3.5 shrink-0 text-gray-500" />
          <span className="truncate">{t("properties.syncErpnext")}</span>
        </Button>

        {/* Add Property Button */}
        <Button
          id="create-property-btn"
          className="bg-teal-600 hover:bg-teal-700 text-white gap-1.5 h-8 px-3.5 text-xs font-semibold rounded-md shadow-sm"
          onClick={onCreateClick}
        >
          <Plus className="h-3.5 w-3.5 shrink-0" />
          <span className="truncate">{t("properties.createProperty")}</span>
        </Button>

        {/* Table Settings */}
        <div className="hidden sm:flex justify-center bg-white dark:bg-neutral-800 rounded-md">
          <TableSettings
            settings={tableSettings}
            onExportExcel={onExportExcel}
            onExportCsv={onExportCsv}
            onExportPdf={onExportPdf}
            isExporting={isExporting}
          />
        </div>
      </div>
    </PageHeader>
  );
}
