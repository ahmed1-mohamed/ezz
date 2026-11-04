"use client";

import { useState, useCallback, useEffect, Suspense, useMemo } from "react";
import useDashboardAdminBookingsData from "@/hooks/use-dashboardAdminBookings";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { EmptyState } from "@/components/ui/empty-state";
import { useLanguage } from "@/contexts/LanguageContext";
import { getApiErrorMessage } from "@/lib/api-errors";

import { ReservationTable } from "@/features/reservations/components/ReservationTable";
import { ReservationFilters } from "@/features/reservations/components/ReservationFilters";
import { Pagination } from "@/components/shared/Pagination";
import { TableSettings } from "@/components/table/table-settings";
import { useTableSettings } from "@/hooks/use-table-settings";
import { useServerPagination } from "@/hooks/useServerPagination";

interface BookingsPageProps {
  initialPage?: number;
  itemsPerPage?: number;
}

const INITIAL_FILTERS = {
  country: "all",
  status: "all",
  type: "all",
  expiryDate: "all",
};

export default function BookingsPage(props: BookingsPageProps) {
  const { t } = useLanguage();
  return (
    <Suspense fallback={<div className="p-8 text-center">{t("common.loading")}</div>}>
      <BookingsPageContent {...props} />
    </Suspense>
  );
}

function BookingsPageContent({
  initialPage = 1,
  itemsPerPage = 10,
}: BookingsPageProps) {
  const { t } = useLanguage();

  const DEFAULT_COLUMNS = useMemo(
    () => [
      { id: "number", label: t("reservations.columns.number"), visible: true },
      { id: "client", label: t("reservations.columns.client"), visible: true },
      { id: "project", label: t("reservations.columns.project"), visible: true },
      { id: "price", label: t("reservations.columns.price"), visible: true },
      { id: "status", label: t("reservations.columns.status"), visible: true },
      { id: "statusType", label: t("reservations.columns.statusType"), visible: true },
      { id: "reservationDate", label: t("reservations.columns.reservationDate"), visible: true },
      { id: "expiryDate", label: t("reservations.columns.expiryDate"), visible: false },
      { id: "country", label: t("reservations.columns.country"), visible: false },
      { id: "lastLog", label: t("reservations.columns.lastLog"), visible: false },
      { id: "actions", label: t("reservations.columns.actions"), visible: true },
    ],
    [t],
  );

  const tableSettings = useTableSettings("reservations", DEFAULT_COLUMNS, itemsPerPage);

  const {
    page,
    perPage,
    searchQuery,
    debouncedSearch,
    filters,
    setPage,
    setPerPage,
    setSearchQuery,
    setFilter,
  } = useServerPagination({
    initialPage,
    initialPerPage: tableSettings.settings.itemsPerPage >= 5 ? tableSettings.settings.itemsPerPage : itemsPerPage,
    initialFilters: INITIAL_FILTERS,
  });

  const [selectedBookings, setSelectedBookings] = useState<number[]>([]);

  const {
    bookingsData,
    bookings,
    totalBookings,
    lastPage,
  } = useDashboardAdminBookingsData({
    page,
    perPage,
    search: debouncedSearch,
    country: filters.country !== "all" ? filters.country : undefined,
    status: filters.status !== "all" ? filters.status : undefined,
    type: filters.type !== "all" ? filters.type : undefined,
    expiryDate: filters.expiryDate !== "all" ? filters.expiryDate : undefined,
    enabled: tableSettings.isInitialized,
  });

  const { isLoading: isQueryLoading, isError, error, isFetching, refetch } = bookingsData;
  // Wait for the saved page size so the list is requested once with the right per_page.
  const isLoading = isQueryLoading || !tableSettings.isInitialized;

  const totalPages = Math.max(1, lastPage || Math.ceil(Number(totalBookings) / (perPage || 1)));

  useEffect(() => {
    if (totalPages > 0 && page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages, setPage]);

  const displayBookings = useMemo(() => {
    if (!debouncedSearch || !debouncedSearch.trim()) return bookings;
    const rawTerm = debouncedSearch.trim().toLowerCase();
    const cleanDigits = rawTerm.replace(/^bk-0*/i, "");

    const filtered = bookings.filter((booking) => {
      const idStr = String(booking.id || "");
      const bookingNum = (booking.bookingNumber || "").toLowerCase();
      const userName = (booking.user_name || "").toLowerCase();
      const userPhone = (booking.user_phone || "").toLowerCase();
      const userEmail = (booking.user_email || "").toLowerCase();
      const propName = (booking.property_name || "").toLowerCase();
      const projName = (booking.project_name || "").toLowerCase();
      const devName = (booking.developer_name || "").toLowerCase();
      const country = (booking.country || "").toLowerCase();
      const status = (booking.status || "").toLowerCase();
      const statusType = (booking.status_type || "").toLowerCase();

      return (
        idStr.includes(rawTerm) ||
        (cleanDigits && idStr === cleanDigits) ||
        bookingNum.includes(rawTerm) ||
        userName.includes(rawTerm) ||
        userPhone.includes(rawTerm) ||
        userEmail.includes(rawTerm) ||
        propName.includes(rawTerm) ||
        projName.includes(rawTerm) ||
        devName.includes(rawTerm) ||
        country.includes(rawTerm) ||
        status.includes(rawTerm) ||
        statusType.includes(rawTerm)
      );
    });

    return filtered.length > 0 ? filtered : bookings;
  }, [bookings, debouncedSearch]);

  const handleSelectAll = useCallback(
    (checked: boolean) => {
      if (checked) {
        setSelectedBookings(displayBookings.map((b) => b.id));
      } else {
        setSelectedBookings([]);
      }
    },
    [displayBookings],
  );

  const handleSelectBooking = useCallback(
    (id: number, checked: boolean) => {
      if (checked) {
        setSelectedBookings([...selectedBookings, id]);
      } else {
        setSelectedBookings(selectedBookings.filter((bid) => bid !== id));
      }
    },
    [selectedBookings],
  );

  const handleRetry = useCallback(() => {
    refetch();
  }, [refetch]);

  return (
    <div className="p-4 px-3 space-y-4 max-w-full overflow-hidden">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-gray-900">{t("reservations.title")}</h1>
          <Badge
            variant="outline"
            className="bg-purple-100 text-purple-700 border-purple-200 rounded-full px-2"
          >
            {totalBookings}
          </Badge>
        </div>
      </div>

      {isLoading && (
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Skeleton className="h-10 w-[200px]" />
            <Skeleton className="h-10 w-[120px]" />
            <Skeleton className="h-10 w-[120px]" />
          </div>
          <div className="rounded-lg border border-gray-200 bg-white">
            <div className="p-4 space-y-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex items-center gap-4">
                  <Skeleton className="h-4 w-4" />
                  <Skeleton className="h-4 w-[100px]" />
                  <Skeleton className="h-4 w-[100px]" />
                  <Skeleton className="h-4 w-[60px]" />
                  <Skeleton className="h-4 w-[80px]" />
                  <Skeleton className="h-4 w-[70px]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {isError && !isLoading && (
        <div className="flex flex-col items-center">
          <EmptyState
            type="error"
            message={getApiErrorMessage(error, t, t("reservations.failedLoad"))}
          />
          <Button
            variant="outline"
            size="sm"
            onClick={handleRetry}
            className="mt-4 border-gray-200 text-gray-700 hover:bg-gray-50"
          >
            {t("reservations.messages.tryAgain")}
          </Button>
        </div>
      )}

      {!isLoading && !isError && (
        <div className="w-full space-y-4">
          <ReservationFilters
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            countryFilter={filters.country}
            onCountryChange={(val) => setFilter("country", val)}
            statusFilter={filters.status}
            onStatusChange={(val) => setFilter("status", val)}
            typeFilter={filters.type}
            onTypeChange={(val) => setFilter("type", val)}
            expiryDateFilter={filters.expiryDate}
            onExpiryDateChange={(val) => setFilter("expiryDate", val)}
          >
            <TableSettings
              settings={tableSettings}
              onExportExcel={() => { }}
              onExportCsv={() => { }}
            />
          </ReservationFilters>

          <ReservationTable
            settings={tableSettings}
            bookings={displayBookings}
            selectedBookings={selectedBookings}
            onSelectAll={handleSelectAll}
            onSelectBooking={handleSelectBooking}
          />

          <div className="mt-4">
            <Pagination
              page={page}
              totalPages={totalPages}
              perPage={perPage}
              totalItems={totalBookings}
              onPageChange={setPage}
              onPerPageChange={(val) => {
                const newPerPage = Number(val);
                tableSettings.setItemsPerPage(newPerPage);
                setPerPage(newPerPage);
              }}
              currentItemsCount={displayBookings.length}
              isLoading={isFetching}
            />
          </div>
        </div>
      )}
    </div>
  );
}