"use client";

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
  Star,
} from "lucide-react";
import dynamic from "next/dynamic";
import { useTableSettings } from "@/hooks/use-table-settings";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

const TableSettings = dynamic(
  () => import("@/components/table/table-settings").then((mod) => mod.TableSettings),
  { ssr: false }
);

interface ProjectsPageHeaderProps {
  totalProjects: number;
  featuredCount?: number;
  maxFeatured?: number;
  isExporting: boolean;
  isSyncing?: boolean;
  onExportExcel: () => void;
  onExportCsv: () => void;
  onExportPdf: () => void;
  onImportClick: () => void;
  onSyncClick: () => void;
  onCreateClick: () => void;
  tableSettings: ReturnType<typeof useTableSettings>;
}

export function ProjectsPageHeader({
  totalProjects,
  featuredCount,
  maxFeatured = 8,
  isExporting,
  isSyncing = false,
  onExportExcel,
  onExportCsv,
  onExportPdf,
  onImportClick,
  onSyncClick,
  onCreateClick,
  tableSettings,
}: ProjectsPageHeaderProps) {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {t("projects.title")}
        </h1>
        <div className="flex items-center gap-2 mt-1 text-xs text-gray-500 dark:text-gray-400 font-medium">
          <span>{totalProjects} {t("projects.title").toLowerCase()}</span>
          {featuredCount !== undefined && (
            <>
              <span>•</span>
              <span className="inline-flex items-center gap-1 text-teal-700 dark:text-teal-400 font-medium">
                <Star className="h-3 w-3 text-amber-500 fill-amber-500" />
                <span>{featuredCount}/{maxFeatured} {t("projects.featured")}</span>
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
              className="gap-1.5 h-8 px-3 text-xs font-medium border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-neutral-700 shadow-xs"
              disabled={isExporting}
            >
              <Download className="h-3.5 w-3.5 shrink-0 text-gray-500" />
              <span className="truncate">
                {isExporting ? t("projects.messages.exporting") : t("tableSettings.export")}
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

        <Button
          variant="outline"
          className="gap-1.5 h-8 px-3 text-xs font-medium border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-neutral-700 shadow-xs"
          onClick={onSyncClick}
          disabled={isSyncing}
          aria-busy={isSyncing}
        >
          <RefreshCw className={cn("h-3.5 w-3.5 shrink-0 text-gray-500", isSyncing && "animate-spin")} />
          <span className="truncate">{t("projects.syncErpnext")}</span>
        </Button>

        <Button
          variant="outline"
          className="gap-1.5 h-8 px-3 text-xs font-medium border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-neutral-700 shadow-xs"
          onClick={onImportClick}
        >
          <UploadCloud className="h-3.5 w-3.5 shrink-0 text-gray-500" />
          <span className="truncate">{t("projects.import")}</span>
        </Button>

        <Button
          id="create-project-btn"
          className="bg-[#008081] hover:bg-[#006666] text-white font-medium gap-1.5 h-8 px-3.5 text-xs shadow-xs"
          onClick={onCreateClick}
        >
          <Plus className="h-3.5 w-3.5 shrink-0" />
          <span className="truncate">{t("projects.addNew")}</span>
        </Button>

        <div className="bg-white dark:bg-neutral-800 rounded-md">
          <TableSettings
            settings={tableSettings}
            onExportExcel={onExportExcel}
            onExportCsv={onExportCsv}
            onExportPdf={onExportPdf}
            isExporting={isExporting}
          />
        </div>
      </div>
    </div>
  );
}
