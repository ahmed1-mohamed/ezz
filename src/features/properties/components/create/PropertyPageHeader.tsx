"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronLeft } from "lucide-react";

interface PropertyPageHeaderProps {
  onCancel: () => void;
}

export default function PropertyPageHeader({ onCancel }: PropertyPageHeaderProps) {
  const { t } = useLanguage();

  return (
    <div className="flex items-center justify-between pb-2 pt-0">
      <h1 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">
        {t("properties.create.header.title")}
      </h1>

      <button
        type="button"
        onClick={onCancel}
        className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-lg shadow-2xs hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors"
      >
        <ChevronLeft className="h-3.5 w-3.5 text-gray-500 shrink-0 rtl:rotate-180" />
        <span>{t("properties.create.header.backToProperties")}</span>
      </button>
    </div>
  );
}
