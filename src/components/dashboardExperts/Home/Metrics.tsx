'use client';

import { useMetrics } from "@/hooks/dashboardExpert/useMetrics";
import { Calendar, CheckSquare, DollarSign, Star } from "lucide-react";
import MetricCard from "./MetricCard";
import { formatDate } from "@/utlis/format";
import { useLanguage } from "@/contexts/LanguageContext";

function SkeletonCard() {
    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col gap-3 animate-pulse">
            <div className="h-4 w-32 bg-gray-100 rounded" />
            <div className="h-8 w-20 bg-gray-100 rounded" />
            <div className="h-4 w-40 bg-gray-100 rounded" />
        </div>
    );
}

export default function Metrics() {
    const { t } = useLanguage();
    const { data, isLoading, isError } = useMetrics();

    if (isLoading) {
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
                {[...Array(4)].map((_, i) => <SkeletonCard key={i} />)}
            </div>
        );
    }

    if (isError || !data) {
        return (
            <div className="my-6 text-center text-sm text-red-400 py-6">
                {t("experts.common.failedToLoad")}
            </div>
        );
    }

    const { upcoming_sessions, completed_sessions, monthly_earnings, rating } = data?.data?.data;

    const nextSession = upcoming_sessions?.next_session
        ? formatDate(upcoming_sessions.next_session)
        : t("experts.metrics.noUpcoming");

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
            <MetricCard
                icon={Calendar}
                label={t("experts.metrics.upcomingSessions")}
                value={upcoming_sessions?.total ?? 0}
                trend={upcoming_sessions?.trend ?? "up"}
                growth={`${upcoming_sessions?.growth ?? 0}%`}
                subLabel={t("experts.metrics.nextSession", { session: nextSession })}
            />
            <MetricCard
                icon={CheckSquare}
                label={t("experts.metrics.completedSessions")}
                value={completed_sessions?.total ?? 0}
                trend={completed_sessions?.trend ?? "up"}
                growth={`${completed_sessions?.growth ?? 0}`}
                subLabel={t("experts.metrics.thisMonth", { count: completed_sessions?.this_month ?? 0 })}
            />
            <MetricCard
                icon={DollarSign}
                label={t("experts.metrics.monthlyEarnings")}
                value={monthly_earnings?.previous_period ?? 0}
                trend={monthly_earnings?.trend ?? "up"}
                growth={`${monthly_earnings?.growth ?? 0}%`}
                subLabel={t("experts.metrics.lastMonth", { amount: (monthly_earnings?.last_month ?? 0).toLocaleString() })}
            />
            <MetricCard
                icon={Star}
                label={t("experts.metrics.averageRating")}
                value={rating?.average?.toFixed(1) ?? "—"}
                trend="up"
                growth="—"
                subLabel={t("experts.metrics.totalReviews", { count: rating?.total_reviews ?? 0 })}
            />
        </div>
    );
}