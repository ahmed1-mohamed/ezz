"use client";

import React from "react";
import { useReports } from "@/features/reports/hooks/useReports";
import { ReportsHeader } from "@/features/reports/components/ReportsHeader";
import { ReportsStatsCards } from "@/features/reports/components/ReportsStatsCards";
import { LeadsByStageSection } from "@/features/reports/components/LeadsByStageSection";

export default function ReportsClient() {
  const { stats, stages, isLoading } = useReports();

  return (
    <div className="p-6 space-y-6 max-w-full overflow-hidden">
      {/* 1. Page Header */}
      <ReportsHeader />

      {/* 2. 7 Metrics Cards (2 Rows) */}
      <ReportsStatsCards stats={stats} isLoading={isLoading} />

      {/* 3. Leads by stage horizontal chart */}
      <LeadsByStageSection stages={stages} isLoading={isLoading} />
    </div>
  );
}