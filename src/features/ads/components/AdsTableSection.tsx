"use client";

import { AdsFilters } from "@/features/ads/components/AdsFilters";
import { AdsTable } from "@/features/ads/components/AdsTable";
import { Pagination } from "@/components/shared/Pagination";
import { useTableSettings } from "@/hooks/use-table-settings";

interface AdsPaginationInfo {
  page: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}

interface AdsTableSectionProps {
  settings?: ReturnType<typeof useTableSettings>;
  ads: any[];
  selectedAds: string[];
  updatingAdId: string | null;
  searchQuery: string;
  statusFilter: string;
  platformFilter: string;
  typeFilter: string;
  pagination: AdsPaginationInfo;
  isColVisible: (colId: string) => boolean;
  isFetching?: boolean;
  onSearchChange: (val: string) => void;
  onStatusChange: (val: string) => void;
  onPlatformChange: (val: string) => void;
  onTypeChange: (val: string) => void;
  onSelectAll: (checked: boolean) => void;
  onSelectOne: (id: string, checked: boolean) => void;
  onStatusToggle: (adId: string, checked: boolean) => void;
  onEditClick?: (ad: any) => void;
  onDeleteClick: (ad: any) => void;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (count: number) => void;
}

export function AdsTableSection({
  settings,
  ads,
  selectedAds,
  updatingAdId,
  searchQuery,
  statusFilter,
  platformFilter,
  typeFilter,
  pagination,
  isColVisible,
  isFetching = false,
  onSearchChange,
  onStatusChange,
  onPlatformChange,
  onTypeChange,
  onSelectAll,
  onSelectOne,
  onStatusToggle,
  onEditClick,
  onDeleteClick,
  onPageChange,
  onItemsPerPageChange,
}: AdsTableSectionProps) {
  const { page, totalPages, totalItems, itemsPerPage } = pagination;

  return (
    <div className="space-y-4 w-full relative">
      {isFetching && (
        <div className="absolute -top-1 left-0 right-0 h-0.5 bg-teal-500/20 overflow-hidden rounded-full z-10">
          <div className="h-full bg-teal-600 animate-pulse w-1/3 rounded-full" />
        </div>
      )}
      <div className="w-full">
        <AdsFilters
          searchQuery={searchQuery}
          onSearchChange={onSearchChange}
          statusFilter={statusFilter}
          onStatusChange={onStatusChange}
          platformFilter={platformFilter}
          onPlatformChange={onPlatformChange}
          typeFilter={typeFilter}
          onTypeChange={onTypeChange}
        />
      </div>

      <div className={`transition-opacity duration-200 ${isFetching ? "opacity-75" : "opacity-100"}`}>
        <AdsTable
          settings={settings}
          ads={ads}
          selectedAds={selectedAds}
          handleSelectAll={onSelectAll}
          handleSelectOne={onSelectOne}
          isColVisible={isColVisible}
          updatingAdId={updatingAdId}
          handleStatusToggle={onStatusToggle}
          onEditClick={onEditClick}
          onDeleteClick={onDeleteClick}
        />
      </div>

      <Pagination
        page={page}
        totalPages={totalPages}
        perPage={itemsPerPage}
        totalItems={totalItems}
        currentItemsCount={ads.length}
        onPageChange={onPageChange}
        onPerPageChange={(val) => {
          onItemsPerPageChange(Number(val));
          settings?.setItemsPerPage(Number(val));
        }}
      />
    </div>
  );
}
