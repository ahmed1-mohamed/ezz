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
  FileSpreadsheet,
  FileDown,
  FileText,
  Plus,
} from "lucide-react";
import dynamic from "next/dynamic";
import { useTableSettings } from "@/hooks/use-table-settings";
import { useLanguage } from "@/contexts/LanguageContext";

const TableSettings = dynamic(
  () => import("@/components/table/table-settings").then((mod) => mod.TableSettings),
  { ssr: false }
);

interface UsersPageHeaderProps {
  totalUsers: number;
  isExporting: boolean;
  onExportExcel: () => void;
  onExportCsv: () => void;
  onExportPdf: () => void;
  onAddUserClick: () => void;
  tableSettings: ReturnType<typeof useTableSettings>;
}

export function UsersPageHeader({
  totalUsers,
  isExporting,
  onExportExcel,
  onExportCsv,
  onExportPdf,
  onAddUserClick,
  tableSettings,
}: UsersPageHeaderProps) {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {t("users.title")}
        </h1>
        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-1">
          {totalUsers} {t("users.usersCount")}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
        {/* Export Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="gap-1.5 h-8 px-3 text-xs font-medium border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-neutral-700 shadow-xs"
              disabled={isExporting}
            >
              <Download className="h-3.5 w-3.5 shrink-0 text-gray-500" />
              <span className="truncate">
                {isExporting ? t("users.exporting") : t("tableSettings.export")}
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

        {/* Add User Button */}
        <Button
          id="create-user-btn"
          className="bg-teal-600 hover:bg-teal-700 text-white font-medium gap-1.5 h-8 px-3.5 text-xs shadow-xs"
          onClick={onAddUserClick}
        >
          <Plus className="h-3.5 w-3.5 shrink-0" />
          <span className="truncate">{t("users.addUser")}</span>
        </Button>

        {/* Table Settings */}
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
