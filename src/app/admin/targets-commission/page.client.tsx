"use client";

import React from "react";
import { useTargetsCommission } from "@/features/targets-commission/hooks/useTargetsCommission";
import { TargetsPageHeader } from "@/features/targets-commission/components/TargetsPageHeader";
import { TargetsCommissionTable } from "@/features/targets-commission/components/TargetsCommissionTable";

export default function TargetsCommissionClient() {
  const {
    selectedMonth,
    setSelectedMonth,
    defaultRow,
    repRows,
    totalTarget,
    totalAchieved,
    totalCommission,
    isLoading,
    isSaving,
    saveTargets,
    updateDefaultTarget,
    updateDefaultCommRate,
    updateRepTarget,
    updateRepCommRate,
  } = useTargetsCommission();

  return (
    <div className="p-6 space-y-6 max-w-full overflow-hidden">
      {/* 1. Header with Month Selector and Save Button */}
      <TargetsPageHeader
        selectedMonth={selectedMonth}
        onMonthChange={setSelectedMonth}
        onSave={() => saveTargets()}
        isSaving={isSaving}
      />

      {/* 2. Main Targets & Commission Table */}
      <TargetsCommissionTable
        month={selectedMonth}
        defaultRow={defaultRow}
        repRows={repRows}
        totalTarget={totalTarget}
        totalAchieved={totalAchieved}
        totalCommission={totalCommission}
        isLoading={isLoading}
        onUpdateDefaultTarget={updateDefaultTarget}
        onUpdateDefaultCommRate={updateDefaultCommRate}
        onUpdateRepTarget={updateRepTarget}
        onUpdateRepCommRate={updateRepCommRate}
      />
    </div>
  );
}
