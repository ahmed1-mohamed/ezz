"use client";

import type { ElementType } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

interface StatItem {
  title: string;
  value: string;
  icon: ElementType;
  trend: string;
  trendUp: boolean;
}

interface AdsStatCardsProps {
  stats: StatItem[];
}

export function AdsStatCards({ stats }: AdsStatCardsProps) {
  const { t, language } = useLanguage();
  const isAr = language === "ar";

  if (stats.length === 0) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-lg p-4 shadow-xs hover:border-gray-300 dark:hover:border-neutral-700 transition-all flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <span
                className={cn(
                  "text-gray-500 dark:text-gray-400",
                  isAr
                    ? "text-[13px] sm:text-sm font-bold tracking-normal"
                    : "text-[11px] font-semibold uppercase tracking-wider"
                )}
              >
                {stat.title}
              </span>
              <div
                className={`p-2 rounded-lg shrink-0 ${
                  stat.trendUp
                    ? "bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400"
                    : "bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400"
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" />
              </div>
            </div>

            <div className="mt-3">
              <div
                className={cn(
                  "font-bold text-gray-900 dark:text-white",
                  isAr ? "text-2xl sm:text-3xl" : "text-2xl tracking-tight"
                )}
              >
                {stat.value}
              </div>
              <p
                className={cn(
                  "mt-1 font-medium",
                  isAr ? "text-xs sm:text-[13px] font-semibold" : "text-[11px]",
                  stat.trendUp
                    ? "text-teal-600 dark:text-teal-400"
                    : "text-red-600 dark:text-red-400"
                )}
              >
                {stat.trend} {t("ads.totals.fromLastMonth")}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
