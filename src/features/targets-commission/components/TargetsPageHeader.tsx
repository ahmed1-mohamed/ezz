"use client";

import React from "react";
import { Calendar, Save, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface TargetsPageHeaderProps {
  selectedMonth: string;
  onMonthChange?: (val: string) => void;
  onSave?: () => void;
  isSaving?: boolean;
}

export function TargetsPageHeader({
  selectedMonth,
  onMonthChange,
  onSave,
  isSaving,
}: TargetsPageHeaderProps) {
  const { t, language } = useLanguage();
  const isRTL = language === "ar";

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {t("sidebar.targetsCommission") || "Targets & Commission"}
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-0.5">
          {isRTL
            ? "تعيين هدف المبيعات الشهري ونسبة العمولة لكل مندوب"
            : "Set the monthly sales target and commission rate per rep"}
        </p>
      </div>

      <div className="flex items-center gap-2.5 self-start sm:self-auto">
        {/* Month Selector Button/Input */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 h-9 shadow-2xs text-xs font-medium text-gray-700 dark:text-gray-200">
          <span>{isRTL ? "أغسطس 2026" : "August 2026"}</span>
          <Calendar className="h-3.5 w-3.5 text-gray-400" />
        </div>

        {/* Save Button */}
        <Button
          onClick={onSave}
          disabled={isSaving}
          className="h-9 bg-teal-700 hover:bg-teal-800 text-white text-xs font-medium gap-1.5 px-4 rounded-lg shadow-xs cursor-pointer"
        >
          {isSaving ? (
            <Loader2 className="h-3.5 w-3.5 animate-spin" />
          ) : (
            <Save className="h-3.5 w-3.5" />
          )}
          <span>{isRTL ? "حفظ" : "Save"}</span>
        </Button>
      </div>
    </div>
  );
}
