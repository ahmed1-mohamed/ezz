"use client";

import React from "react";
import {
  Contact,
  Award,
  Percent,
  Handshake,
  FileSignature,
  DollarSign,
  TrendingUp,
} from "lucide-react";
import { ReportsStats } from "../types";
import { useLanguage } from "@/contexts/LanguageContext";

interface ReportsStatsCardsProps {
  stats?: ReportsStats;
  isLoading?: boolean;
}

export function ReportsStatsCards({ stats, isLoading }: ReportsStatsCardsProps) {
  const { language } = useLanguage();
  const isRTL = language === "ar";

  const currency = stats?.currency || "EGP";

  const row1 = [
    {
      title: isRTL ? "إجمالي العملاء المحتملين" : "Total leads",
      value: (stats?.total_leads ?? 0).toLocaleString(),
      icon: Contact,
      iconColor: "text-teal-600 dark:text-teal-400",
    },
    {
      title: isRTL ? "الصفقات الرابحة" : "Won deals",
      value: (stats?.won_deals ?? 0).toLocaleString(),
      icon: Award,
      iconColor: "text-emerald-600 dark:text-emerald-400",
    },
    {
      title: isRTL ? "معدل التحويل" : "Conversion",
      value: `${stats?.conversion_rate ?? 0}%`,
      icon: Percent,
      iconColor: "text-purple-600 dark:text-purple-400",
    },
    {
      title: isRTL ? "الحجوزات" : "Reservations",
      value: (stats?.reservations ?? 0).toLocaleString(),
      icon: Handshake,
      iconColor: "text-teal-600 dark:text-teal-400",
    },
  ];

  const row2 = [
    {
      title: isRTL ? "العقود" : "Contracts",
      value: (stats?.contracts ?? 0).toLocaleString(),
      icon: FileSignature,
      iconColor: "text-teal-600 dark:text-teal-400",
    },
    {
      title: isRTL ? "الإيرادات" : "Revenue",
      value: `${(stats?.revenue ?? 0).toLocaleString()} ${currency}`,
      icon: DollarSign,
      iconColor: "text-emerald-600 dark:text-emerald-400",
    },
    {
      title: isRTL ? "العمولة" : "Commission",
      value: `${(stats?.commission ?? 0).toLocaleString()} ${currency}`,
      icon: TrendingUp,
      iconColor: "text-amber-500 dark:text-amber-400",
    },
  ];

  return (
    <div className="space-y-4">
      {/* Row 1: 4 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {row1.map((card, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 shadow-2xs flex flex-col justify-between"
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

      {/* Row 2: 3 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {row2.map((card, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 shadow-2xs flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                {card.title}
              </span>
              <card.icon className={`h-4.5 w-4.5 ${card.iconColor}`} />
            </div>

            <div className="mt-3">
              {isLoading ? (
                <div className="h-6 w-24 bg-gray-200 dark:bg-neutral-800 rounded animate-pulse" />
              ) : (
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  {card.value}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
