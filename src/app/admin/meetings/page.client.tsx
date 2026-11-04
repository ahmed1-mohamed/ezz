"use client";

import { useState, useMemo, useCallback } from "react";
import { EmptyState } from "@/components/ui/empty-state";
import useDashboardAdminMeetingsData from "@/hooks/use-dashboardAdminMeetingsData";
import { useDebounce } from "@/hooks/useDebounce";
import { ViewMeetingModal } from "@/components/modals/meetings/view-meeting-modal";
import { MeetingRequestsDataType } from "@/types";
import { MeetingsFilterBar } from "./components/MeetingsFilterBar";
import { MeetingsTable, MeetingRequest } from "./components/MeetingsTable";
import { MeetingsPagination } from "./components/MeetingsPagination";

export default function MeetingRequestsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebounce(searchQuery);
  const [countryFilter, setCountryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [userIdToView, setUserIdToView] = useState<number | null>(null);

  const filters = useMemo(
    () => ({
      country: countryFilter,
      status: statusFilter,
      search: debouncedSearch,
    }),
    [countryFilter, statusFilter, debouncedSearch],
  );

  const { meetingsData, confirmMeetingMutation, cancelMeetingMutation } =
    useDashboardAdminMeetingsData(currentPage, perPage, filters);

  const { data, isLoading, isError, error } = meetingsData;

  const meetingRequests: MeetingRequest[] = useMemo(() => {
    const rawData = data as { data?: any } | undefined;
    let itemsArray: any[] = rawData?.data?.data || [];

    return itemsArray.map((item) => ({
      id: item.id,
      clientName: item.user
        ? `${item.user.first_name} ${item.user.last_name}`
        : "Unknown Client",
      clientAvatar: item.user
        ? `${item.user.first_name.charAt(0)}${item.user.last_name.charAt(0)}`
        : "??",
      relatedTo: "Meeting Request",
      email: item.user?.email || "N/A",
      preferredDate: item.date || "N/A",
      requestDate: item.created_at || "N/A",
      status: (item.status.charAt(0).toUpperCase() + item.status.slice(1)) as
        | "Pending"
        | "Approved"
        | "Rejected"
        | "Active",
    }));
  }, [data]);

  const meetingRequestsWithUser = useMemo(() => {
    const rawData = data as
      | { data?: Array<MeetingRequestsDataType & { user_id?: number }> }
      | Array<MeetingRequestsDataType & { user_id?: number }>
      | undefined;

    let itemsArray: Array<MeetingRequestsDataType & { user_id?: number }> = [];

    if (Array.isArray(rawData)) {
      itemsArray = rawData;
    } else if (rawData && Array.isArray((rawData as any).data)) {
      itemsArray = (rawData as any).data;
    }

    return itemsArray;
  }, [data]);

  const rawDataForTotal = (data as any)?.toatal || (data as any)?.data?.total;
  const total = rawDataForTotal || 0;

  const totalPages = Math.ceil(total / perPage);

  const getPageNumbers = () => {
    const pages: number[] = [];
    const maxVisible = Math.min(10, totalPages);

    for (let i = 1; i <= maxVisible; i++) {
      pages.push(i);
    }

    return pages;
  };

  const handlePerPageChange = (value: string) => {
    setPerPage(Number(value));
    setCurrentPage(1);
  };

  const handleApprove = useCallback(
    (id: number) => {
      confirmMeetingMutation.mutate(id);
    },
    [confirmMeetingMutation],
  );

  const handleReject = useCallback(
    (id: number) => {
      cancelMeetingMutation.mutate(id);
    },
    [cancelMeetingMutation],
  );

  const handleViewUser = useCallback((userId: number) => {
    setUserIdToView(userId);
    setViewModalOpen(true);
  }, []);

  return (
    <div className="p-4 px-3 space-y-4 max-w-full overflow-hidden">
      {isLoading && (
        <div className="flex items-center justify-center py-12">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-teal-600 border-r-transparent"></div>
            <p className="mt-4 text-sm text-gray-600">
              Loading meeting requests...
            </p>
          </div>
        </div>
      )}

      {isError && (
        <div className="flex flex-col items-center">
          <EmptyState
            type="error"
            message={(error as Error)?.message}
          />
        </div>
      )}

      {!isLoading && !isError && (
        <>
          <MeetingsFilterBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            countryFilter={countryFilter}
            setCountryFilter={setCountryFilter}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            total={total}
          />

          <MeetingsTable
            meetingRequests={meetingRequests}
            meetingRequestsWithUser={meetingRequestsWithUser}
            onApprove={handleApprove}
            onReject={handleReject}
            isApprovePending={confirmMeetingMutation.isPending}
            isRejectPending={cancelMeetingMutation.isPending}
            onViewUser={handleViewUser}
          />

          <MeetingsPagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            perPage={perPage}
            handlePerPageChange={handlePerPageChange}
            total={total}
            totalPages={totalPages}
            getPageNumbers={getPageNumbers}
          />
        </>
      )}

      <ViewMeetingModal
        isOpen={viewModalOpen}
        onClose={() => setViewModalOpen(false)}
        meetingId={userIdToView}
      />
    </div>
  );
}