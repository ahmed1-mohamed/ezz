"use client";

import React from "react";
import { DollarSign, Target } from "lucide-react";
import { Representative } from "../types";
import { useLanguage } from "@/contexts/LanguageContext";

interface RepresentativeCardProps {
  representative: Representative;
}

export const RepresentativeCard = React.memo(function RepresentativeCard({
  representative,
}: RepresentativeCardProps) {
  const { language } = useLanguage();
  const isRTL = language === "ar";

  const { stats, target } = representative;
  const currency = stats?.currency || representative.currency || "EGP";

  return (
    <div className="rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 space-y-4 shadow-2xs">
      {/* 1. Top Header: Name, Role Badge, Commission */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="font-bold text-sm text-gray-900 dark:text-white">
            {representative.name}
          </span>
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-50 dark:bg-neutral-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-neutral-700">
            {representative.role}
          </span>
        </div>

        <div className="flex items-center gap-1 text-xs">
          <DollarSign className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
          <span className="text-gray-500 dark:text-gray-400">
            {isRTL ? "العمولة:" : "Commission:"}
          </span>
          <span className="font-bold text-emerald-600 dark:text-emerald-400">
            {(representative.commission ?? 0).toLocaleString()} {currency}
          </span>
        </div>
      </div>

      {/* 2. Middle Metrics Row (4 columns) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 text-center">
        <div>
          <span className="text-xs text-gray-500 dark:text-gray-400 block mb-1">
            {isRTL ? "العملاء المحتملين" : "Leads"}
          </span>
          <span className="text-sm font-bold text-gray-900 dark:text-white">
            {(stats?.leads ?? 0).toLocaleString()}
          </span>
        </div>

        <div>
          <span className="text-xs text-gray-500 dark:text-gray-400 block mb-1">
            {isRTL ? "الصفقات الرابحة" : "Won"}
          </span>
          <span className="text-sm font-bold text-gray-900 dark:text-white">
            {(stats?.won ?? 0).toLocaleString()}
          </span>
        </div>

        <div>
          <span className="text-xs text-gray-500 dark:text-gray-400 block mb-1">
            {isRTL ? "العقود" : "Contracts"}
          </span>
          <span className="text-sm font-bold text-gray-900 dark:text-white">
            {(stats?.contracts ?? 0).toLocaleString()}
          </span>
        </div>

        <div>
          <span className="text-xs text-gray-500 dark:text-gray-400 block mb-1">
            {isRTL ? "الإيرادات" : "Revenue"}
          </span>
          <span className="text-sm font-bold text-gray-900 dark:text-white">
            {(stats?.revenue ?? 0).toLocaleString()} {currency}
          </span>
        </div>
      </div>

      {/* 3. Bottom Target Tracker Row */}
      <div className="flex items-center gap-2 pt-2">
        <Target className="h-4 w-4 text-teal-600 dark:text-teal-400 shrink-0" />

        <div className="flex-1 h-1.5 bg-gray-100 dark:bg-neutral-800 rounded-full overflow-hidden">
          {target && target.percentage > 0 ? (
            <div
              className="h-full bg-teal-600 rounded-full transition-all duration-300"
              style={{ width: `${Math.min(100, target.percentage)}%` }}
            />
          ) : null}
        </div>

        <span className="text-[11px] text-gray-400 dark:text-gray-500 whitespace-nowrap">
          {target
            ? `${(target.current_amount ?? 0).toLocaleString()} / ${(target.target_amount ?? 0).toLocaleString()} ${currency} (${target.percentage}%)`
            : isRTL
            ? "لا يوجد هدف محدد"
            : "no target"}
        </span>
      </div>
    </div>
  );
});
