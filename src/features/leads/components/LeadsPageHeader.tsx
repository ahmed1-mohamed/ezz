"use client";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Upload, Download, RefreshCw, Kanban, Plus } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface LeadsPageHeaderProps {
  isPipelineView: boolean;
  onPipelineToggle: (val: boolean) => void;
  onSync?: () => void;
  onImport?: () => void;
  onExport?: () => void;
  onAddLead?: () => void;
}

export function LeadsPageHeader({
  isPipelineView,
  onPipelineToggle,
  onSync,
  onImport,
  onExport,
  onAddLead,
}: LeadsPageHeaderProps) {
  const { t, language } = useLanguage();
  const isRTL = language === "ar";

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {t("sidebar.leads") || "Leads"}
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-0.5">
          {isRTL
            ? "جميع العملاء المحتملين في مكان واحد — انقر على العميل لفتح ملفه وإدارته"
            : "Every lead in one place — click a lead to open and work its profile"}
        </p>
      </div>

      <div className="flex items-center flex-wrap gap-2">
        <Button
          variant="outline"
          onClick={onImport}
          className="h-8.5 text-xs font-medium border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-neutral-800 gap-1.5 shadow-2xs cursor-pointer"
        >
          <Upload className="h-3.5 w-3.5 text-gray-500" />
          <span>{isRTL ? "استيراد" : "Import"}</span>
        </Button>

        <Button
          variant="outline"
          onClick={onExport}
          className="h-8.5 text-xs font-medium border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-neutral-800 gap-1.5 shadow-2xs cursor-pointer"
        >
          <Download className="h-3.5 w-3.5 text-gray-500" />
          <span>{isRTL ? "تصدير" : "Export"}</span>
        </Button>

        <Button
          variant="outline"
          onClick={onSync}
          className="h-8.5 text-xs font-medium border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-neutral-800 gap-1.5 shadow-2xs cursor-pointer"
        >
          <RefreshCw className="h-3.5 w-3.5 text-gray-500" />
          <span>{isRTL ? "مزامنة" : "Sync"}</span>
        </Button>

        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 h-8.5 shadow-2xs">
          <Kanban className="h-3.5 w-3.5 text-gray-500" />
          <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
            {isRTL ? "مراحل المبيعات" : "Pipeline"}
          </span>
          <Switch
            checked={isPipelineView}
            onCheckedChange={onPipelineToggle}
            className="data-[state=checked]:bg-teal-600 data-[state=unchecked]:bg-gray-300 dark:data-[state=unchecked]:bg-neutral-700 scale-85"
          />
        </div>

        <Button
          onClick={onAddLead}
          className="h-8.5 bg-teal-700 hover:bg-teal-800 text-white text-xs font-medium gap-1.5 px-3.5 rounded-lg shadow-xs cursor-pointer"
        >
          <Plus className="h-4 w-4" />
          <span>{isRTL ? "+ إضافة عميل محتمل" : "+ Add Lead"}</span>
        </Button>
      </div>
    </div>
  );
}