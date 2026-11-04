"use client";

import React from "react";
import { StageCount } from "../types";
import { useLanguage } from "@/contexts/LanguageContext";

interface LeadsByStageSectionProps {
  stages: StageCount[];
  isLoading?: boolean;
}

export function LeadsByStageSection({
  stages,
  isLoading,
}: LeadsByStageSectionProps) {
  const { language } = useLanguage();
  const isRTL = language === "ar";

  const maxCount = Math.max(...stages.map((s) => s.count), 1);

  return (
    <div className="rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-2xs space-y-4">
      <h2 className="text-sm font-semibold text-gray-900 dark:text-white">
        {isRTL ? "العملاء المحتملين حسب المرحلة" : "Leads by stage"}
      </h2>

      {isLoading ? (
        <div className="space-y-3 animate-pulse">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="h-4 bg-gray-200 dark:bg-neutral-800 rounded w-20" />
              <div className="flex-1 h-5.5 bg-gray-100 dark:bg-neutral-800 rounded-md" />
              <div className="h-4 bg-gray-200 dark:bg-neutral-800 rounded w-6" />
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-2.5">
          {stages.map((item) => {
            const percentage = item.count > 0 ? (item.count / maxCount) * 100 : 0;
            return (
              <div
                key={item.stage}
                className="flex items-center gap-3 py-0.5 group"
              >
                {/* Stage Label */}
                <span className="w-24 text-xs font-medium text-gray-600 dark:text-gray-400 shrink-0">
                  {isRTL ? item.label_ar : item.label_en}
                </span>

                {/* Progress Track */}
                <div className="flex-1 h-5.5 bg-gray-100 dark:bg-neutral-800 rounded-md overflow-hidden p-0.5 flex items-center">
                  {percentage > 0 ? (
                    <div
                      className="h-full bg-teal-600 dark:bg-teal-500 rounded-sm transition-all duration-300"
                      style={{ width: `${percentage}%` }}
                    />
                  ) : null}
                </div>

                {/* Count */}
                <span className="w-6 text-xs font-semibold text-gray-700 dark:text-gray-300 text-end shrink-0">
                  {item.count}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
