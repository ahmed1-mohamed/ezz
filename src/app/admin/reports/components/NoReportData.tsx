"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export function NoReportData() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-4xl p-6">
      <div className="text-center text-gray-500">
        {t("reportsPage.noData") || "No report data available"}
      </div>
    </div>
  );
}
