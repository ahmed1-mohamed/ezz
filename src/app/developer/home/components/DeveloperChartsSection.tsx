"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";

interface DeveloperChartsSectionProps {
  statusData?: any;
  chartData?: any;
  onPeriodChange?: (period: string) => void;
  currentPeriod?: string;
  countsData?: any;
}

export function DeveloperChartsSection({
  statusData,
  onPeriodChange,
  currentPeriod,
  countsData,
}: DeveloperChartsSectionProps) {
  const { t } = useLanguage();

  const completedCount = countsData?.units_sold?.value || statusData?.data?.completed || 0;

  const inProgressCount = countsData?.sales_offers?.value || (statusData?.data?.pending || 0) + (statusData?.data?.in_progress || 0) || 0;

  const totalBookingsCount = countsData?.total_bookings?.value || statusData?.data?.total || 0;
  const cancelledCount = countsData
    ? Math.max(totalBookingsCount - (completedCount + inProgressCount), 0)
    : (statusData?.data?.cancelled || 0);

  const maxVal = Math.max(completedCount, inProgressCount, cancelledCount, totalBookingsCount, 1);

  const salesPurchaseHeight = Math.max(Math.round((completedCount / maxVal) * 100), 5) + "%";
  const downPaymentHeight = Math.max(Math.round((inProgressCount / maxVal) * 100), 5) + "%";
  const salesOfferHeight = Math.max(Math.round((cancelledCount / maxVal) * 100), 5) + "%";
  const identificationHeight = Math.max(Math.round((totalBookingsCount / maxVal) * 100), 5) + "%";

  const totalSum = (completedCount + inProgressCount + cancelledCount) || 1;
  const completedPct = (completedCount / totalSum) * 100;
  const inProgressPct = (inProgressCount / totalSum) * 100;
  const cancelledPct = (cancelledCount / totalSum) * 100;
  const stagesToRender = [
    {
      key: "activeProjects",
      label: t("dashboardHome.stats.activeProjects"),
      value: countsData?.active_projects?.value || 0,
    },
    {
      key: "totalProperties",
      label: t("dashboardHome.stats.totalProperties"),
      value: countsData?.total_properties?.value || 0,
    },
    {
      key: "totalViews",
      label: t("dashboardHome.stats.totalViews"),
      value: countsData?.total_views?.value || 0,
    },
    {
      key: "featuredAds",
      label: t("dashboardHome.stats.featuredAds"),
      value: countsData?.featured_ads?.value || 0,
    },
  ];

  const maxStageValue = Math.max(...stagesToRender.map((s) => Number(s.value)), 1);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white rounded-lg border border-gray-200 p-6 flex flex-col">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {t("dashboardHome.charts.salesStagesStatusOverview")}
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              {t("dashboardHome.charts.salesStagesStatusSubtitle")}
            </p>
          </div>
          <Select defaultValue={currentPeriod || "all"} value={currentPeriod} onValueChange={onPeriodChange}>
            <SelectTrigger className="w-[130px] bg-gray-50 border-gray-200">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t("dashboardHome.dateRanges.allTime")}</SelectItem>
              <SelectItem value="last7">{t("dashboardHome.dateRanges.last7Days")}</SelectItem>
              <SelectItem value="last30">{t("dashboardHome.dateRanges.last30Days")}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1 flex flex-col justify-center space-y-8">
          <div className="flex items-end justify-around h-64 gap-4 px-2">
            <div className="flex-1 flex flex-col items-center justify-end h-full">
              <div className="w-full max-w-[50px] sm:max-w-[60px] bg-gray-100 rounded-t-xl overflow-hidden flex flex-col justify-end relative shadow-inner" style={{ height: salesPurchaseHeight }}>
                <div className="w-full bg-green-500 h-full transition-all hover:brightness-110"></div>
              </div>
              <span className="text-xs font-medium text-gray-600 mt-3 text-center h-8 flex items-center">
                {t("dashboardHome.charts.salesPurchase")}
              </span>
            </div>

            <div className="flex-1 flex flex-col items-center justify-end h-full">
              <div className="w-full max-w-[50px] sm:max-w-[60px] bg-gray-100 rounded-t-xl overflow-hidden flex flex-col justify-end relative shadow-inner" style={{ height: downPaymentHeight }}>
                <div className="w-full bg-cyan-400 h-full transition-all hover:brightness-110"></div>
              </div>
              <span className="text-xs font-medium text-gray-600 mt-3 text-center h-8 flex items-center">
                {t("dashboardHome.charts.downPayment")}
              </span>
            </div>

            <div className="flex-1 flex flex-col items-center justify-end h-full">
              <div className="w-full max-w-[50px] sm:max-w-[60px] bg-gray-100 rounded-t-xl overflow-hidden flex flex-col justify-end relative shadow-inner" style={{ height: salesOfferHeight }}>
                <div className="w-full bg-pink-500 h-full transition-all hover:brightness-110"></div>
              </div>
              <span className="text-xs font-medium text-gray-600 mt-3 text-center h-8 flex items-center">
                {t("dashboardHome.charts.salesOffer")}
              </span>
            </div>

            <div className="flex-1 flex flex-col items-center justify-end h-full">
              <div className="w-full max-w-[50px] sm:max-w-[60px] bg-gray-100 rounded-t-xl overflow-hidden flex flex-col justify-end relative shadow-inner" style={{ height: identificationHeight }}>
                <div className="w-full bg-pink-500 transition-all hover:brightness-110" style={{ height: `${cancelledPct}%` }}></div>
                <div className="w-full bg-cyan-400 transition-all hover:brightness-110" style={{ height: `${inProgressPct}%` }}></div>
                <div className="w-full bg-green-500 transition-all hover:brightness-110" style={{ height: `${completedPct}%` }}></div>
              </div>
              <span className="text-xs font-medium text-gray-600 mt-3 text-center h-8 flex items-center">
                {t("dashboardHome.charts.identification")}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500 shadow-sm"></div>
              <span className="text-xs sm:text-sm text-gray-700 font-medium">{t("dashboardHome.charts.completed")}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-sm"></div>
              <span className="text-xs sm:text-sm text-gray-700 font-medium">{t("dashboardHome.charts.inProgress")}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-pink-500 shadow-sm"></div>
              <span className="text-xs sm:text-sm text-gray-700 font-medium">{t("dashboardHome.charts.rejected")}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {t("dashboardHome.charts.salesStages")}
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              {t("dashboardHome.charts.salesStagesSubtitle")}
            </p>
          </div>
          <Select defaultValue={currentPeriod || "all"} value={currentPeriod} onValueChange={onPeriodChange}>
            <SelectTrigger className="w-[130px] bg-gray-50 border-gray-200">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t("dashboardHome.dateRanges.allTime")}</SelectItem>
              <SelectItem value="last7">{t("dashboardHome.dateRanges.last7Days")}</SelectItem>
              <SelectItem value="last30">{t("dashboardHome.dateRanges.last30Days")}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-4">
          <div className="flex items-end justify-around h-64 gap-4 px-2">
            {stagesToRender.map((stageItem, index) => {
              const heightPercentage = Math.max(Math.round((Number(stageItem.value) / maxStageValue) * 100), 5) + "%";
              const colors = [
                "bg-gradient-to-t from-teal-600 to-teal-400 shadow-teal-500/20",
                "bg-gradient-to-t from-cyan-600 to-cyan-400 shadow-cyan-500/20",
                "bg-gradient-to-t from-purple-600 to-purple-400 shadow-purple-500/20",
                "bg-gradient-to-t from-orange-600 to-orange-400 shadow-orange-500/20"
              ];
              const color = colors[index % colors.length];
              return (
                <div key={stageItem.key} className="flex-1 flex flex-col items-center justify-end h-full group relative cursor-pointer">
                  <div className="w-full max-w-[50px] sm:max-w-[60px] bg-gray-50 rounded-t-xl overflow-hidden h-56 flex flex-col justify-end relative shadow-inner">
                    <div
                      className={`w-full ${color} transition-all duration-700 ease-out rounded-t-xl opacity-85 group-hover:opacity-100 shadow-lg relative`}
                      style={{ height: heightPercentage }}
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-gray-800 text-white text-xs py-1 px-2 rounded shadow-lg pointer-events-none whitespace-nowrap z-10">
                        {stageItem.value} {stageItem.label}
                      </div>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-gray-800 mt-3">{stageItem.value}</span>
                  <span className="text-xs text-gray-500 mt-1 text-center font-medium line-clamp-1 max-w-[80px] h-8 flex items-center">
                    {stageItem.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}