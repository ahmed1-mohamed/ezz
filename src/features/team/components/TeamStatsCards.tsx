"use client";

import React from "react";
import { Users2, Award, FileSignature, DollarSign } from "lucide-react";
import { TeamOverviewStats } from "../types";
import { useLanguage } from "@/contexts/LanguageContext";

interface TeamStatsCardsProps {
  overview?: TeamOverviewStats;
  isLoading?: boolean;
}

export function TeamStatsCards({ overview, isLoading }: TeamStatsCardsProps) {
  const { language } = useLanguage();
  const isRTL = language === "ar";

  const cards = [
    {
      title: isRTL ? "العملاء المحتملين" : "Leads",
      value: (overview?.leads ?? 0).toLocaleString(),
      icon: Users2,
      iconColor: "text-teal-600 dark:text-teal-400",
    },
    {
      title: isRTL ? "الصفقات الرابحة" : "Won",
      value: (overview?.won ?? 0).toLocaleString(),
      icon: Award,
      iconColor: "text-emerald-600 dark:text-emerald-400",
    },
    {
      title: isRTL ? "العقود" : "Contracts",
      value: (overview?.contracts ?? 0).toLocaleString(),
      icon: FileSignature,
      iconColor: "text-teal-600 dark:text-teal-400",
    },
    {
      title: isRTL ? "الإيرادات" : "Revenue",
      value: `${(overview?.revenue ?? 0).toLocaleString()} ${overview?.currency || "EGP"}`,
      icon: DollarSign,
      iconColor: "text-emerald-600 dark:text-emerald-400",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 shadow-2xs transition-all flex flex-col justify-between"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
              {card.title}
            </span>
            <card.icon className={`h-4.5 w-4.5 ${card.iconColor}`} />
          </div>

          <div className="mt-3">
            {isLoading ? (
              <div className="h-6 w-16 bg-gray-200 dark:bg-neutral-800 rounded animate-pulse" />
            ) : (
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                {card.value}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
