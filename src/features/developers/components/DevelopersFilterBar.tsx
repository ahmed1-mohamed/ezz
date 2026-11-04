"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { TableSettings } from "@/components/table/table-settings";
import { useTableSettings } from "@/hooks/use-table-settings";
import { DevelopersFilters } from "@/features/developers/components/DevelopersFilters";
import { useLanguage } from "@/contexts/LanguageContext";

interface DevelopersFilterBarProps {
  searchQuery: string;
  statusFilter: string;
  countryFilter: string;
  tableSettings: ReturnType<typeof useTableSettings>;
  onSearchChange: (val: string) => void;
  onStatusChange: (val: string) => void;
  onCountryChange: (val: string) => void;
  onExportCsv: () => void;
}

export const DevelopersFilterBar = React.memo(function DevelopersFilterBar({
  searchQuery,
  statusFilter,
  countryFilter,
  tableSettings,
  onSearchChange,
  onStatusChange,
  onCountryChange,
  onExportCsv,
}: DevelopersFilterBarProps) {
  const { t } = useLanguage();

  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <DevelopersFilters
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
        statusFilter={statusFilter}
        onStatusChange={onStatusChange}
        countryFilter={countryFilter}
        onCountryChange={onCountryChange}
      />
      <div className="flex items-center gap-2 mb-4">

        <TableSettings settings={tableSettings} onExportCsv={onExportCsv} />
      </div>
    </div>
  );
});
