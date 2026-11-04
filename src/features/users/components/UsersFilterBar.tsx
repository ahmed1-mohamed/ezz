"use client";

import dynamic from "next/dynamic";
import { useTableSettings } from "@/hooks/use-table-settings";

const UsersFilters = dynamic(
  () =>
    import("@/features/users/components/UsersFilters").then(
      (mod) => mod.UsersFilters,
    ),
  { ssr: false },
);

interface UsersFilterBarProps {
  searchQuery: string;
  statusFilter: string;
  userTypeFilter: string;
  tableSettings?: ReturnType<typeof useTableSettings>;
  onSearchChange: (val: string) => void;
  onStatusChange: (val: string) => void;
  onUserTypeChange: (val: string) => void;
  onExportCsv?: () => void;
}

export function UsersFilterBar({
  searchQuery,
  statusFilter,
  userTypeFilter,
  onSearchChange,
  onStatusChange,
  onUserTypeChange,
}: UsersFilterBarProps) {
  return (
    <div className="w-full">
      <UsersFilters
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
        statusFilter={statusFilter}
        onStatusChange={onStatusChange}
        userTypeFilter={userTypeFilter}
        onUserTypeChange={onUserTypeChange}
      />
    </div>
  );
}
