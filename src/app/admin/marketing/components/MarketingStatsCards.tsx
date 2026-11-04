import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Users2, CheckCircle, BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

function StatCardSkeleton() {
  return (
    <Card className="border-gray-200 dark:border-neutral-800 shadow-sm bg-white dark:bg-neutral-900 rounded-xl overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="h-4 w-28 bg-gray-200 dark:bg-neutral-700 rounded animate-pulse" />
          <div className="h-9 w-9 bg-gray-200 dark:bg-neutral-700 rounded-lg animate-pulse" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="h-8 w-20 bg-gray-200 dark:bg-neutral-700 rounded animate-pulse" />
          <div className="h-3 w-24 bg-gray-100 dark:bg-neutral-800 rounded animate-pulse" />
        </div>
      </CardContent>
    </Card>
  );
}

interface StatCardProps {
  label: string;
  value: string | number;
  trend: string;
  trendColor?: string;
  icon: React.ReactNode;
  accentBg: string;
  accentText: string;
}

const StatCard = React.memo(function StatCard({
  label,
  value,
  trend,
  trendColor = "text-emerald-600 dark:text-emerald-400",
  icon,
  accentBg,
  accentText,
}: StatCardProps) {
  return (
    <Card className="border-gray-200 dark:border-neutral-800 shadow-sm bg-white dark:bg-neutral-900 rounded-xl overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400 leading-snug">
            {label}
          </span>
          <div className={`p-2 rounded-lg ${accentBg} ${accentText}`}>{icon}</div>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            {typeof value === "number" ? value.toLocaleString() : value}
          </span>
          <span className={`text-xs font-medium flex items-center gap-1 ${trendColor}`}>
            {trend}
          </span>
        </div>
      </CardContent>
    </Card>
  );
});

type MarketingType = "sms" | "email" | "notification";

interface MarketingStatsCardsProps {
  isLoadingStats: boolean;
  displayTotalCampaigns: number | string;
  displayTotalCampaignsThisMonth?: number | string;
  displayTotalSent: number | string;
  displayTotalSentChangePercent?: number | null;
  displayTotalSentDirection?: "up" | "down" | "flat";
  displayDeliveryRate: number | string;
  displayDeliveryRateLabel?: string;
  displayReadRate: number | string;
  displayReadRateLabel?: string;
  type?: MarketingType;
}

export const MarketingStatsCards = React.memo(function MarketingStatsCards({
  isLoadingStats,
  displayTotalCampaigns,
  displayTotalCampaignsThisMonth,
  displayTotalSent,
  displayTotalSentChangePercent,
  displayTotalSentDirection,
  displayDeliveryRate,
  displayDeliveryRateLabel,
  displayReadRate,
  displayReadRateLabel,
  type = "sms",
}: MarketingStatsCardsProps) {
  const { t, language } = useLanguage();
  const isRTL = language === "ar";

  const prefix =
    type === "email"
      ? "marketingEmail"
      : type === "notification"
        ? "marketingNotifications"
        : "marketingWhatsappSms";

  const accentBg =
    type === "email"
      ? "bg-amber-50 dark:bg-amber-950/20"
      : "bg-teal-50 dark:bg-teal-950/20";
  const accentText =
    type === "email"
      ? "text-amber-600 dark:text-amber-400"
      : "text-teal-600 dark:text-teal-400";

  const thisMonthTrend =
    displayTotalCampaignsThisMonth !== undefined
      ? isRTL
        ? `↑ ${displayTotalCampaignsThisMonth} هذا الشهر`
        : `↑ ${displayTotalCampaignsThisMonth} this month`
      : isRTL
        ? "↑ هذا الشهر"
        : "↑ this month";

  const totalSentTrend = (() => {
    if (displayTotalSentDirection === "flat" || displayTotalSentChangePercent === null || displayTotalSentChangePercent === undefined) {
      return isRTL ? "→ ثابت عن الشهر الماضي" : "→ Flat from last month";
    }
    if (displayTotalSentDirection === "down") {
      return isRTL ? `↓ ${displayTotalSentChangePercent}% عن الشهر الماضي` : `↓ ${displayTotalSentChangePercent}% from last month`;
    }
    return isRTL ? `↑ ${displayTotalSentChangePercent}% عن الشهر الماضي` : `↑ ${displayTotalSentChangePercent}% from last month`;
  })();

  const totalSentTrendColor = (() => {
    if (displayTotalSentDirection === "down") return "text-red-600 dark:text-red-400";
    if (displayTotalSentDirection === "flat") return "text-gray-500 dark:text-gray-400";
    return "text-emerald-600 dark:text-emerald-400";
  })();

  const deliveryTrend = displayDeliveryRateLabel
    ? `↑ ${displayDeliveryRateLabel}`
    : isRTL
      ? "↑ ممتاز"
      : "↑ Excellent";

  const deliveryTrendColor =
    displayDeliveryRateLabel?.toLowerCase().includes("poor")
      ? "text-red-600 dark:text-red-400"
      : displayDeliveryRateLabel?.toLowerCase().includes("fair") || displayDeliveryRateLabel?.toLowerCase().includes("average")
        ? "text-amber-600 dark:text-amber-400"
        : "text-emerald-600 dark:text-emerald-400";

  const readTrend = displayReadRateLabel
    ? `↑ ${displayReadRateLabel}`
    : isRTL
      ? "↑ جيد جداً"
      : "↑ Very Good";

  const readTrendColor =
    displayReadRateLabel?.toLowerCase().includes("poor")
      ? "text-red-600 dark:text-red-400"
      : displayReadRateLabel?.toLowerCase().includes("fair") || displayReadRateLabel?.toLowerCase().includes("average")
        ? "text-amber-600 dark:text-amber-400"
        : "text-emerald-600 dark:text-emerald-400";

  if (isLoadingStats) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {[0, 1, 2, 3].map((i) => (
          <StatCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      <StatCard
        label={t(`${prefix}.totalCampaigns`)}
        value={displayTotalCampaigns}
        trend={thisMonthTrend}
        icon={<MessageSquare className="h-5 w-5" />}
        accentBg={accentBg}
        accentText={accentText}
      />

      <StatCard
        label={t(`${prefix}.totalSent`)}
        value={displayTotalSent}
        trend={totalSentTrend}
        trendColor={totalSentTrendColor}
        icon={<Users2 className="h-5 w-5" />}
        accentBg={accentBg}
        accentText={accentText}
      />

      <StatCard
        label={t(`${prefix}.deliveryRate`)}
        value={`${displayDeliveryRate}%`}
        trend={deliveryTrend}
        trendColor={deliveryTrendColor}
        icon={<CheckCircle className="h-5 w-5" />}
        accentBg={accentBg}
        accentText={accentText}
      />

      <StatCard
        label={t(`${prefix}.readRate`)}
        value={`${displayReadRate}%`}
        trend={readTrend}
        trendColor={readTrendColor}
        icon={<BookOpen className="h-5 w-5" />}
        accentBg={accentBg}
        accentText={accentText}
      />
    </div>
  );
});