"use client";

import React from "react";
import { useTeamPerformance } from "@/features/team/hooks/useTeamPerformance";
import { TeamStatsCards } from "@/features/team/components/TeamStatsCards";
import { RepresentativesList } from "@/features/team/components/RepresentativesList";
import { useLanguage } from "@/contexts/LanguageContext";

export default function TeamClient() {
  const { t, language } = useLanguage();
  const isRTL = language === "ar";

  const { overview, representatives, isLoading } = useTeamPerformance();

  return (
    <div className="p-6 space-y-6 max-w-full overflow-hidden">
      {/* 1. Page Header */}
      <div>
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {t("sidebar.team") || "Team"}
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-0.5">
          {isRTL
            ? "أداء ممثلي المبيعات لشهرك الحالي"
            : "Your sales reps' performance this month"}
        </p>
      </div>

      {/* 2. Overview Stats Cards (Leads, Won, Contracts, Revenue) */}
      <TeamStatsCards overview={overview} isLoading={isLoading} />

      {/* 3. Representatives List */}
      <RepresentativesList
        representatives={representatives}
        isLoading={isLoading}
      />
    </div>
  );
}
