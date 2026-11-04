"use client";

import { useState, useMemo } from "react";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import { fetchDashboardCounts, fetchReservationStatusMetrics, fetchInProgressReservations } from "@/data/api-client";
import { type Booking, type StatsCard } from "./types";
import { DashboardHeader } from "./components/DashboardHeader";
import { StatsCards } from "./components/StatsCards";
import { dashboardExportToExcel } from "@/lib/handle-export";
import {
  FileText,
  Home,
  DollarSign,
  FolderOpen,
  Building2,
  Eye,
  Megaphone,
  Users,
  Phone,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

import { BookingsStatusChart, PropertiesStatusChart } from "./components/ChartsSection";
import { BookingsSection, getStageLabel } from "./components/BookingsSection";
import { PropertiesAreaChart } from "./components/PropertiesAreaChart";
import Link from "next/link";

const getStatsCards = (t: (key: string) => string, countsData?: any): StatsCard[] => {
  const getMetric = (key: string) => countsData?.[key] || {};
  return [
    {
      title: t("dashboardHome.stats.totalBookings"),
      value: getMetric("total_bookings").value?.toString() || "0",
      change: countsData ? `${Math.abs(getMetric("total_bookings").percentage_change || 0)}% ${getMetric("total_bookings").comparison_label || t("dashboardHome.stats.vsLast3Months")}` : "",
      isPositive: getMetric("total_bookings").trend !== "down",
      icon: FileText,
    },
    {
      title: t("dashboardHome.stats.salesOffers"),
      value: getMetric("sales_offers").value?.toString() || "0",
      change: countsData ? `${Math.abs(getMetric("sales_offers").percentage_change || 0)}% ${getMetric("sales_offers").comparison_label || t("dashboardHome.stats.vsLast3Months")}` : "",
      isPositive: getMetric("sales_offers").trend !== "down",
      icon: FileText,
    },
    {
      title: t("dashboardHome.stats.unitsSold"),
      value: getMetric("units_sold").value?.toString() || "0",
      change: countsData ? `${Math.abs(getMetric("units_sold").percentage_change || 0)}% ${getMetric("units_sold").comparison_label || t("dashboardHome.stats.vsLast3Months")}` : "",
      isPositive: getMetric("units_sold").trend !== "down",
      icon: Home,
    },
    {
      title: t("dashboardHome.stats.totalValue"),
      value: getMetric("total_value").formatted_value ? `${getMetric("total_value").formatted_value} AED` : "0 AED",
      change: countsData ? `${Math.abs(getMetric("total_value").percentage_change || 0)}% ${getMetric("total_value").comparison_label || t("dashboardHome.stats.vsLast3Months")}` : "",
      isPositive: getMetric("total_value").trend !== "down",
      icon: DollarSign,
    },
    {
      title: t("dashboardHome.stats.activeProjects"),
      value: getMetric("active_projects").value?.toString() || "0",
      change: countsData ? `${Math.abs(getMetric("active_projects").percentage_change || 0)}% ${getMetric("active_projects").comparison_label || t("dashboardHome.stats.vsLast3Months")}` : "",
      isPositive: getMetric("active_projects").trend !== "down",
      icon: FolderOpen,
    },
    {
      title: t("dashboardHome.stats.totalProperties"),
      value: getMetric("total_properties").value?.toString() || "0",
      change: countsData ? `${Math.abs(getMetric("total_properties").percentage_change || 0)}% ${getMetric("total_properties").comparison_label || t("dashboardHome.stats.vsLast3Months")}` : "",
      isPositive: getMetric("total_properties").trend !== "down",
      icon: Building2,
    },
    {
      title: t("dashboardHome.stats.totalViews"),
      value: getMetric("total_views").value?.toString() || "0",
      change: countsData ? `${Math.abs(getMetric("total_views").percentage_change || 0)}% ${getMetric("total_views").comparison_label || t("dashboardHome.stats.vsLast3Months")}` : "",
      isPositive: getMetric("total_views").trend !== "down",
      icon: Eye,
    },
    {
      title: t("dashboardHome.stats.featuredAds"),
      value: countsData?.featured_ads?.value?.toString() || "0",
      change: countsData?.featured_ads ? `8% ${t("dashboardHome.stats.vsLast3Months")}` : "",
      isPositive: true,
      icon: Megaphone,
    },
  ];
};

const getInitialBookings = (t: (key: string) => string, inProgressData?: any): Booking[] => {
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
    <div className="bg-white rounded-lg border border-gray-200 p-4 animate-pulse h-[80px]">
      <div className="flex items-start justify-between mb-2">
        <div className="h-3 w-24 bg-gray-100 rounded" />
        <div className="h-4 w-4 bg-gray-100 rounded" />
      </div>
      <div className="h-7 w-16 bg-gray-100 rounded" />
    </div>
  );
}

// Latest Leads — shows the same bookings styled as "leads"
const LEADS_PER_PAGE = 5;

function LatestLeads({ bookings, className = "" }: { bookings: Booking[]; className?: string }) {
  const { t, language } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(bookings.length / LEADS_PER_PAGE) || 1;
  const safePage = Math.min(currentPage, totalPages);

  const leads = bookings.slice(
    (safePage - 1) * LEADS_PER_PAGE,
    safePage * LEADS_PER_PAGE
  );

  const statusColors: Record<string, string> = {
    new: "text-teal-600 bg-teal-50 border-teal-200",
    contacted: "text-orange-500 bg-orange-50 border-orange-200",
    open: "text-blue-600 bg-blue-50 border-blue-200",
    "in progress": "text-purple-600 bg-purple-50 border-purple-200",
    completed: "text-green-600 bg-green-50 border-green-200",
  };

  const getStatusClass = (status: string) => {
    const key = status?.toLowerCase() || "new";
    return statusColors[key] || statusColors["new"];
  };

  return (
    <div className={`bg-white rounded-lg border border-gray-200 p-4 h-full flex flex-col justify-between ${className}`}>
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-teal-600" />
            <h3 className="text-sm font-semibold text-gray-800">
              {t("dashboardHome.leads.title")}
            </h3>
          </div>
          <Link
            href="/admin/reservations"
            prefetch={false}
            className="text-xs text-teal-600 hover:text-teal-700 font-medium transition-colors"
          >
            {t("dashboardHome.leads.viewAll")}
          </Link>
        </div>

        <div className="space-y-0 min-h-[220px]">
          {leads.length > 0 ? (
            leads.map((lead) => {
              let dateStr = "";
              if (lead.updatedAt) {
                try {
                  const d = new Date(lead.updatedAt);
                  if (!isNaN(d.getTime())) {
                    dateStr = d.toLocaleDateString(language === "ar" ? "ar-EG" : "en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    });
                  }
                } catch {}
              }
              const targetUrl = lead.id
                ? `/admin/reservations/${lead.id}`
                : `/admin/reservations`;
              return (
                <Link
                  key={lead.id}
                  href={targetUrl}
                  prefetch={false}
                  className="flex items-center justify-between py-2.5 border-b border-gray-100 last:border-0 hover:bg-gray-50/70 transition-colors px-1.5 -mx-1.5 rounded-md group cursor-pointer"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="h-8 w-8 rounded-md bg-teal-50 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-100 transition-colors">
                      <Users className="h-4 w-4 text-teal-600" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-medium text-gray-900 group-hover:text-teal-600 transition-colors truncate">
                        {lead.name}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-400">
                        <Phone className="h-3 w-3" />
                        <span>{lead.property}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-0.5 flex-shrink-0 ms-2">
                    <span className={`text-xs font-medium border px-2 py-0.5 rounded ${getStatusClass(lead.status)}`}>
                      {lead.status ? getStageLabel(lead.status, t) : t("dashboardHome.leads.new")}
                    </span>
                    {dateStr && (
                      <span className="text-[10px] text-gray-400">{dateStr}</span>
                    )}
                  </div>
                </Link>
              );
            })
          ) : (
            <div className="text-center text-xs text-gray-400 py-12">
              {t("dashboardHome.leads.noLeads")}
            </div>
          )}
        </div>
      </div>

      {/* Pagination Controls */}
      {bookings.length > LEADS_PER_PAGE && (
        <div className="flex items-center justify-between pt-2 mt-2 border-t border-gray-100 text-xs text-gray-500">
          <span>
            {(safePage - 1) * LEADS_PER_PAGE + 1}-
            {Math.min(safePage * LEADS_PER_PAGE, bookings.length)} / {bookings.length}
          </span>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 text-gray-500 hover:text-gray-900 disabled:opacity-30 p-0"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={safePage === 1}
            >
              <ChevronLeft className="h-3.5 w-3.5 rtl:rotate-180" />
            </Button>
            <span className="text-[11px] font-medium text-gray-700 px-1">
              {safePage} / {totalPages}
            </span>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 text-gray-500 hover:text-gray-900 disabled:opacity-30 p-0"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={safePage === totalPages}
            >
              <ChevronRight className="h-3.5 w-3.5 rtl:rotate-180" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function DashboardPage() {
  const { data: session, status: sessionStatus } = useSession();
  const { t } = useLanguage();
  const [dateRange, setDateRange] = useState("all");
  const [chartPeriod, setChartPeriod] = useState("all");

  const token = session?.user?.accessToken;

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
    queryKey: ["dashboardCounts", token, overviewQueryParams.startDate, overviewQueryParams.endDate],
    queryFn: () => fetchDashboardCounts(token!, overviewQueryParams.startDate, overviewQueryParams.endDate),
    enabled: !!token && sessionStatus !== "loading",
    staleTime: 5 * 60 * 1000,
    select: (res: any) => res?.data ?? res,
  });

  const inProgressQuery = useQuery({
    queryKey: ["dashboardInProgressReservations", token, overviewQueryParams.days],
    queryFn: () => fetchInProgressReservations(token!, overviewQueryParams.days),
    enabled: !!token && sessionStatus !== "loading",
    staleTime: 5 * 60 * 1000,
    select: (res: any) => res,
  });

  // Same key shape as countsQuery so identical date ranges share one cached request.
  const chartCountsQuery = useQuery({
    queryKey: ["dashboardCounts", token, chartQueryParams.startDate, chartQueryParams.endDate],
    queryFn: () => fetchDashboardCounts(token!, chartQueryParams.startDate, chartQueryParams.endDate),
    enabled: !!token && sessionStatus !== "loading",
    staleTime: 5 * 60 * 1000,
    select: (res: any) => res?.data ?? res,
  });

  const chartStatusQuery = useQuery({
    queryKey: ["dashboardChartStatusMetrics", token, chartQueryParams.days],
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
    <div className="p-4 md:p-6 space-y-4 max-w-full overflow-hidden">
      <DashboardHeader
        dateRange={dateRange}
        setDateRange={handleDateRangeChange}
        onExport={handleExport}
        onRefresh={handleRefresh}
        isRefreshing={isRefreshing}
      />

      {isStatsLoading ? (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {Array.from({ length: 8 }).map((_, idx) => <StatsCardSkeleton key={idx} />)}
        </div>
      ) : (
        <StatsCards stats={stats} />
      )}

      {/* Row 1: Latest Bookings + Bookings by Status (Equal height) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch">
        <div className="lg:col-span-2">
          <BookingsSection bookings={bookings} />
        </div>
        <div className="lg:col-span-1">
          <BookingsStatusChart
            statusData={chartStatusData}
            countsData={chartCountsData}
            onPeriodChange={handleChartPeriodChange}
            currentPeriod={chartPeriod}
          />
        </div>
      </div>

      {/* Row 2: Latest Leads + Properties by Status (Equal height) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch">
        <div className="lg:col-span-2">
          <LatestLeads bookings={bookings} />
        </div>
        <div className="lg:col-span-1">
          <PropertiesStatusChart
            statusData={chartStatusData}
            countsData={chartCountsData}
            onPeriodChange={handleChartPeriodChange}
            currentPeriod={chartPeriod}
          />
        </div>
      </div>

      {/* Properties Added per Month — full-width area chart at the bottom */}

      <PropertiesAreaChart countsData={chartCountsData} statusData={chartStatusData} />
    </div>
  );
}