"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Download, RefreshCw, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface DashboardHeaderProps {
  dateRange: string;
  setDateRange: (val: string) => void;
  onExport: () => void;
  onRefresh: () => void;
  isRefreshing?: boolean;
}

export function DashboardHeader({
  dateRange,
  setDateRange,
  onExport,
  onRefresh,
  isRefreshing = false,
}: DashboardHeaderProps) {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          {t("dashboardHome.title")}
        </h1>
        <p className="text-sm text-teal-600 dark:text-teal-400 mt-0.5">
          {t("dashboardHome.subtitle")}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Select value={dateRange} onValueChange={setDateRange}>
          <SelectTrigger className="w-[160px] bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-600 hover:bg-gray-50 text-gray-700 dark:text-slate-200 text-sm h-9 transition-all">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-gray-400" />
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
          size="sm"
          className="gap-2 border-gray-200 dark:border-slate-600 text-gray-700 dark:text-slate-200 h-9"
          onClick={onExport}
        >
          <Download className="h-4 w-4" />
          {t("dashboardHome.export")}
        </Button>

        <Button
          variant="outline"
          size="sm"
          className="gap-2 border-gray-200 dark:border-slate-600 text-gray-700 dark:text-slate-200 h-9 transition-all hover:bg-gray-50 active:scale-95"
          onClick={onRefresh}
          disabled={isRefreshing}
        >
          <RefreshCw className={`h-4 w-4 ${isRefreshing ? "animate-spin text-teal-600" : ""}`} />
          {isRefreshing ? t("dashboardHome.refreshing") : t("dashboardHome.refresh")}
        </Button>
      </div>
    </div>
  );
}