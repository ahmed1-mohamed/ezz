"use client";

import { Download, Loader2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/contexts/LanguageContext";
import type { ExportFormat } from "../export";

interface ExportMenuProps {
  onExport: (format: ExportFormat) => void;
  isExporting?: boolean;
}

const OPTIONS: { format: ExportFormat; labelKey: string }[] = [
  { format: "xlsx", labelKey: "readyMarket.export.xlsx" },
  { format: "pdf", labelKey: "readyMarket.export.pdf" },
  { format: "xls", labelKey: "readyMarket.export.excel" },
];

export function ExportMenu({ onExport, isExporting }: ExportMenuProps) {
  const { t } = useLanguage();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          disabled={isExporting}
          className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 text-xs text-gray-700 hover:bg-gray-50 disabled:opacity-60 dark:border-neutral-700 dark:bg-neutral-900 dark:text-gray-200"
        >
          {isExporting ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Download className="h-3.5 w-3.5" />}
          {t("readyMarket.export.title")}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[120px]">
        {OPTIONS.map((option) => (
          <DropdownMenuItem key={option.format} className="text-xs cursor-pointer" onClick={() => onExport(option.format)}>
            {t(option.labelKey)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
