"use client";

import { DashboardExpertService } from "@/data/api-client";
import { HistoryStats } from "@/types/expertDashboard/history";
import { useQuery } from "@tanstack/react-query";

export function useHistory({ page, status, search }: { page: number; status?: HistoryStats; search?: string }) {
    return useQuery({
        queryKey: ["HistoryData", page, status, search],
        queryFn: () => DashboardExpertService.getBookingsHistory({ page, status, search }),
        retry: false,
    });
}
