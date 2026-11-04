"use client";

import { Download, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface ContractsPageHeaderProps {
  onExport?: () => void;
  onNewContract?: () => void;
}

export function ContractsPageHeader({
  onExport,
  onNewContract,
}: ContractsPageHeaderProps) {
  const { t, language } = useLanguage();
  const isRTL = language === "ar";

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {t("sidebar.contracts") || "Contracts"}
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-0.5">
          {isRTL
            ? "جميع العقود التي أنشأها الفريق — تتبع التوقيعات وحالة العقود"
            : "Every contract the team created — track signatures and status"}
        </p>
      </div>

      <div className="flex items-center gap-2 self-start sm:self-auto">
        <Button
          variant="outline"
          onClick={onExport}
          className="h-8.5 text-xs font-medium border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-neutral-800 gap-1.5 shadow-2xs cursor-pointer"
        >
          <Download className="h-3.5 w-3.5 text-gray-500" />
          <span>{isRTL ? "تصدير" : "Export"}</span>
        </Button>

        <Button
          onClick={onNewContract}
          className="h-8.5 bg-teal-700 hover:bg-teal-800 text-white text-xs font-medium gap-1.5 px-3.5 rounded-lg shadow-xs cursor-pointer"
        >
          <Plus className="h-4 w-4" />
          <span>{isRTL ? "+ عقد جديد" : "+ New contract"}</span>
        </Button>
      </div>
    </div>
  );
}