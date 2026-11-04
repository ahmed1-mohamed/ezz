"use client";

import { useState, useMemo } from "react";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import {
  fetchDashboardCounts,
  fetchReservationStatusMetrics,
  fetchInProgressReservations,
} from "@/data/api-client";
import { dashboardExportToExcel } from "@/lib/handle-export";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import {
  FolderOpen,
  Building2,
  Eye,
  Megaphone,
  RefreshCw,
  Download,
  Info,
  X,
  Calendar,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface StatsCard {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: any;
}

const DeveloperChartsSection = dynamic(
  () => import("./components/DeveloperChartsSection").then((m) => m.DeveloperChartsSection),
  {
    loading: () => (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-pulse">
        <div className="h-[400px] bg-gray-50 border border-gray-100 rounded-2xl"></div>
        <div className="h-[400px] bg-gray-50 border border-gray-100 rounded-2xl"></div>
      </div>
    ),
    ssr: false,
  }
);

const BookingsSection = dynamic(
  () => import("@/app/admin/home/components/BookingsSection").then((m) => m.BookingsSection),
  {
    loading: () => (
      <div className="h-[300px] bg-gray-50 border border-gray-100 rounded-2xl animate-pulse"></div>
    ),
    ssr: false,
  }
);

const getStatsCards = (t: (key: string) => string, countsData?: any): StatsCard[] => {
  const getMetric = (key: string) => countsData?.[key] || {};
  return [
    {
      title: t("dashboardHome.stats.activeProjects"),
      value: getMetric("active_projects").value?.toString() || "50",
      change: countsData
        ? `${getMetric("active_projects").trend === "down" ? "↓" : "↑"} ${Math.abs(getMetric("active_projects").percentage_change || 10)}% ${t("dashboardHome.stats.vsLast3Months")}`
        : "↑ 10% " + t("dashboardHome.stats.vsLast3Months"),
      isPositive: getMetric("active_projects").trend !== "down",
      icon: FolderOpen,
    },
    {
      title: t("dashboardHome.stats.totalProperties"),
      value: getMetric("total_properties").value?.toString() || "240",
      change: countsData
        ? `${getMetric("total_properties").trend === "down" ? "↓" : "↑"} ${Math.abs(getMetric("total_properties").percentage_change || 2.4)}% ${t("dashboardHome.stats.vsLast3Months")}`
        : "↓ 2.4% " + t("dashboardHome.stats.vsLast3Months"),
      isPositive: getMetric("total_properties").trend !== "down",
      icon: Building2,
    },
    {
      title: t("dashboardHome.stats.totalViews"),
      value: getMetric("total_views").value?.toString() || "12,340",
      change: countsData
        ? `${getMetric("total_views").trend === "down" ? "↓" : "↑"} ${Math.abs(getMetric("total_views").percentage_change || 5.6)}% ${t("dashboardHome.stats.vsLast3Months")}`
        : "↑ 5.6% " + t("dashboardHome.stats.vsLast3Months"),
      isPositive: getMetric("total_views").trend !== "down",
      icon: Eye,
    },
    {
      title: t("dashboardHome.stats.featuredAds"),
      value: countsData?.featured_ads?.value?.toString() || "20",
      change: countsData?.featured_ads
        ? `${countsData.featured_ads.trend === "down" ? "↓" : "↑"} ${Math.abs(countsData.featured_ads.percentage_change || 8)}% ${t("dashboardHome.stats.vsLast3Months")}`
        : "↑ 8% " + t("dashboardHome.stats.vsLast3Months"),
      isPositive: countsData?.featured_ads?.trend !== "down",
      icon: Megaphone,
    },
  ];
};

const getInitialBookings = (t: (key: string) => string, inProgressData?: any): any[] => {
  const dataArray = Array.isArray(inProgressData) ? inProgressData : inProgressData?.data;
  if (dataArray && Array.isArray(dataArray)) {
    return dataArray.map((item: any, index: number) => {
      let formattedLastUpdated = "";
      const rawDate = item.updated_at || item.created_at;
      if (rawDate) {
        try {
          const parsed = new Date(rawDate);
          if (!isNaN(parsed.getTime())) {
            formattedLastUpdated = `${t("dashboardHome.bookings.lastUpdated")} ${parsed.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}`;
          }
        } catch {}
      }

      const rawFirstName =
        item.first_name ||
        item.user?.first_name ||
        item.client?.first_name ||
        "";
      const rawFullName = item.client_name || item.user_name || item.name || "";
      const fullName = rawFullName || t("dashboardHome.bookings.unknown");
      const resolvedFirstName =
        rawFirstName ||
        (rawFullName ? rawFullName.trim().split(/\s+/)[0] : "");

      const getEffectiveStage = (statusType: string, status: string) => {
        const normType = (statusType || "").toLowerCase().trim();
        const normStatus = (status || "").toLowerCase().trim();
        if (normStatus === "cancelled" || normStatus === "rejected" || normStatus === "declined" || normStatus === "expired") return "Cancelled";
        if (normType === "identification" && normStatus === "confirmed") return "Sales Offer";
        if (normType === "sales_offer" && normStatus === "confirmed") return "Down Payment";
        if (normType === "down_payment" && normStatus === "confirmed") return "Sales Purchase";
        if (normType === "sales_purchase" && normStatus === "confirmed") return "Completed";
        const formatType = (type: string) => type.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        return formatType(normType) || "Open";
      };

      return {
        id: item.reservation_id || item.id || index,
        name: fullName,
        firstName: resolvedFirstName,
        avatar: (item.client_name || item.user_name) ? (item.client_name || item.user_name).substring(0, 2).toUpperCase() : "UN",
        property: item.property_no || item.project_name || t("dashboardHome.bookings.unknown"),
        unit: item.property_name || item.property?.property_name || t("common.na"),
        lastUpdated: formattedLastUpdated,
        amount: item.price || item.amount ? `${parseFloat(item.price || item.amount).toLocaleString()} AED` : t("common.na"),
        status: getEffectiveStage(item.reservation_status_type, item.reservation_status),
        updatedAt: item.updated_at || item.created_at || item.reservation_date || item.date || null,
      };
    });
  }
  return [];
};

function StatsCardSkeleton() {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between animate-pulse h-[145px]">
      <div>
        <div className="flex items-center justify-between text-gray-500 font-medium text-sm">
          <div className="h-4 w-28 bg-gray-100 rounded"></div>
          <div className="h-5 w-5 bg-gray-100 rounded-full"></div>
        </div>
        <div className="h-8 w-20 bg-gray-100 rounded mt-3"></div>
      </div>
      <div className="h-4 w-36 bg-gray-100 rounded mt-4"></div>
    </div>
  );
}

export default function DeveloperDashboardPage() {
  const { data: session, status: sessionStatus } = useSession();
  const { t } = useLanguage();
  const [showBanner, setShowBanner] = useState(true);
  const [dateRange, setDateRange] = useState("all");
  const [chartPeriod, setChartPeriod] = useState("all");

  const token = session?.user?.accessToken;
  const userName = session?.user?.name || "Emaar Properties";

  const overviewQueryParams = useMemo(() => {
    let startDate: string | undefined;
    let endDate: string | undefined;
    let days: number | undefined;

    if (dateRange === "last7") {
      const start = new Date();
      start.setDate(start.getDate() - 7);
      startDate = start.toISOString().split("T")[0];
      endDate = new Date().toISOString().split("T")[0];
      days = 7;
    } else if (dateRange === "last30") {
      const start = new Date();
      start.setDate(start.getDate() - 30);
      startDate = start.toISOString().split("T")[0];
      endDate = new Date().toISOString().split("T")[0];
      days = 30;
    } else if (dateRange === "all") {
      startDate = "1970-01-01";
      endDate = new Date().toISOString().split("T")[0];
    }

    return { startDate, endDate, days };
  }, [dateRange]);

  const chartQueryParams = useMemo(() => {
    let startDate: string | undefined;
    let endDate: string | undefined;
    let days: number | undefined;

    if (chartPeriod === "last7") {
      const start = new Date();
      start.setDate(start.getDate() - 7);
      startDate = start.toISOString().split("T")[0];
      endDate = new Date().toISOString().split("T")[0];
      days = 7;
    } else if (chartPeriod === "last30") {
      const start = new Date();
      start.setDate(start.getDate() - 30);
      startDate = start.toISOString().split("T")[0];
      endDate = new Date().toISOString().split("T")[0];
      days = 30;
    } else if (chartPeriod === "all") {
      startDate = "1970-01-01";
      endDate = new Date().toISOString().split("T")[0];
    }

    return { startDate, endDate, days };
  }, [chartPeriod]);

  const countsQuery = useQuery({
    queryKey: ["developerCounts", token, overviewQueryParams.startDate, overviewQueryParams.endDate],
    queryFn: () => fetchDashboardCounts(token!, overviewQueryParams.startDate, overviewQueryParams.endDate),
    enabled: !!token && sessionStatus !== "loading",
    staleTime: 5 * 60 * 1000,
    select: (res: any) => res?.data ?? res,
  });

  const inProgressQuery = useQuery({
    queryKey: ["developerInProgressReservations", token, overviewQueryParams.days],
    queryFn: () => fetchInProgressReservations(token!, overviewQueryParams.days),
    enabled: !!token && sessionStatus !== "loading",
    staleTime: 5 * 60 * 1000,
    select: (res: any) => res,
  });

  // Same key shape as countsQuery so identical date ranges share one cached request.
  const chartCountsQuery = useQuery({
    queryKey: ["developerCounts", token, chartQueryParams.startDate, chartQueryParams.endDate],
    queryFn: () => fetchDashboardCounts(token!, chartQueryParams.startDate, chartQueryParams.endDate),
    enabled: !!token && sessionStatus !== "loading",
    staleTime: 5 * 60 * 1000,
    select: (res: any) => res?.data ?? res,
  });

  const chartStatusQuery = useQuery({
    queryKey: ["developerChartStatusMetrics", token, chartQueryParams.days],
    queryFn: () => fetchReservationStatusMetrics(token!, chartQueryParams.days),
    enabled: !!token && sessionStatus !== "loading",
    staleTime: 5 * 60 * 1000,
    select: (res: any) => res?.data ?? res,
  });

  const countsData = countsQuery.data;
  const inProgressData = inProgressQuery.data;
  const chartCountsData = chartCountsQuery.data;
  const chartStatusData = chartStatusQuery.data;

  const handleDateRangeChange = (val: string) => {
    setDateRange(val);
    setChartPeriod(val);
  };

  const handleChartPeriodChange = (val: string) => {
    setChartPeriod(val);
  };

  const stats = useMemo(() => getStatsCards(t, countsData), [t, countsData]);
  const bookings = useMemo(() => getInitialBookings(t, inProgressData), [t, inProgressData]);

  const handleExport = () => {
    dashboardExportToExcel(stats, bookings);
  };

  const handleRefresh = () => {
    countsQuery.refetch();
    inProgressQuery.refetch();
    if (
      chartQueryParams.startDate !== overviewQueryParams.startDate ||
      chartQueryParams.endDate !== overviewQueryParams.endDate
    ) {
      chartCountsQuery.refetch();
    }
    chartStatusQuery.refetch();
  };

  const isStatsLoading = countsQuery.isLoading && !countsData;
  const isRefreshing =
    countsQuery.isFetching ||
    inProgressQuery.isFetching ||
    chartCountsQuery.isFetching ||
    chartStatusQuery.isFetching;

  return (
    <div className="p-6 space-y-6 max-w-full overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-[#1e1435]">
            {t("dashboardHome.developer.welcomeBack", { name: userName })}
          </h1>
          <p className="text-sm text-gray-500 mt-1.5 font-medium">
            {t("dashboardHome.developer.welcomeSubtitle")}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2.5">
          <Select value={dateRange} onValueChange={handleDateRangeChange}>
            <SelectTrigger className="w-[180px] bg-white border-gray-200 hover:bg-gray-50 text-gray-700 transition-all">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-gray-500" />
                <SelectValue />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t("dashboardHome.dateRanges.allTime")}</SelectItem>
              <SelectItem value="last30">{t("dashboardHome.dateRanges.last30Days")}</SelectItem>
              <SelectItem value="last7">{t("dashboardHome.dateRanges.last7Days")}</SelectItem>
            </SelectContent>
          </Select>

          <Button
            variant="outline"
            className="gap-2 border-gray-200 bg-[#0D7A70] hover:bg-[#0b665d] text-white hover:text-white"
            onClick={handleExport}
          >
            <Download className="h-4 w-4" />
            {t("dashboardHome.export")}
          </Button>
          <Button
            variant="outline"
            className="gap-2 border-gray-200 bg-white hover:bg-gray-50 text-gray-700 transition-all active:scale-95"
            onClick={handleRefresh}
            disabled={isRefreshing}
          >
            <RefreshCw className={`h-4 w-4 ${isRefreshing ? "animate-spin text-teal-600" : ""}`} />
            {isRefreshing ? t("dashboardHome.refreshing") : t("dashboardHome.refresh")}
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {isStatsLoading ? (
          Array.from({ length: 4 }).map((_, idx) => <StatsCardSkeleton key={idx} />)
        ) : (
          stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between text-gray-500 font-medium text-sm">
                    <span className="text-gray-500 font-semibold">{stat.title}</span>
                    <Icon className="h-5 w-5 text-gray-400" />
                  </div>
                  <div className="text-3xl font-extrabold text-[#1e1435] mt-3">
                    {stat.value}
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold">
                  <span className={stat.isPositive ? "text-emerald-600" : "text-rose-500"}>
                    {stat.change}
                  </span>
                </div>
              </div>
            );
          })
        )}
      </div>

      {showBanner && (
        <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm relative">
          <div className=" flex flex-col md:flex-row md:items-center justify-between gap-4">
            <button
              onClick={() => setShowBanner(false)}
              className="absolute top-4 end-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-start gap-3.5 pe-8">
              <Info className="w-5 h-5 text-[#0D7A70] flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-base font-bold text-slate-900">
                  {t("dashboardHome.developer.freePlanTitle")}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed max-w-4xl">
                  {t("dashboardHome.developer.freePlanDesc")}
                </p>
              </div>
            </div>
          </div>
          <Button className="bg-[#1e293b] hover:bg-[#0f172a] text-white font-semibold rounded-lg px-5 py-2.5 mt-4 mx-8 transition self-start md:self-center">
            {t("dashboardHome.developer.viewPlans")}
          </Button>
        </div>
      )}

      <DeveloperChartsSection
        statusData={chartStatusData}
        countsData={chartCountsData}
        onPeriodChange={handleChartPeriodChange}
        currentPeriod={chartPeriod}
      />

      <BookingsSection bookings={bookings} />
    </div>
  );
}