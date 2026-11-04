"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export function ReportsHeader() {
  const { t, language } = useLanguage();
  const isRTL = language === "ar";

  return (
    <div>
      <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {t("sidebar.reports") || "Reports"}
      </h1>
      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-0.5">
        {isRTL
          ? "ملخص أداء المبيعات — التحويلات، الحجوزات، العقود والإيرادات"
          : "Sales performance summary — conversion, reservations, contracts, revenue"}
      </p>
    </div>
  );
}
