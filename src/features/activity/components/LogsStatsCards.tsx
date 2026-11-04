"use client";

import { useLanguage } from "@/contexts/LanguageContext";

interface LogsStatsCardsProps {
  totalLogs: number;
  errorsCount: number;
  warningsCount: number;
  isLoading?: boolean;
}

export function LogsStatsCards({
  totalLogs,
  errorsCount,
  warningsCount,
  isLoading,
}: LogsStatsCardsProps) {
  const { t } = useLanguage();

  const cards = [
    {
      title: t("activity.stats.totalLogs"),
      value: totalLogs.toLocaleString(),
      valueColor: "text-gray-900 dark:text-white",
    },
    {
      title: t("activity.stats.errors"),
      value: errorsCount.toLocaleString(),
      valueColor: "text-rose-600 dark:text-rose-400",
    },
    {
      title: t("activity.stats.warnings"),
      value: warningsCount.toLocaleString(),
      valueColor: "text-amber-500 dark:text-amber-400",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 shadow-2xs flex flex-col justify-between"
        >
          <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
            {card.title}
          </span>

          <div className="mt-2">
            {isLoading ? (
              <div className="h-7 w-16 bg-gray-200 dark:bg-neutral-800 rounded animate-pulse" />
            ) : (
              <span className={`text-2xl font-bold ${card.valueColor}`}>
                {card.value}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
