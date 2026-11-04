"use client";

import { DashboardExpertService } from "@/data/api-client";
import { useQuery } from "@tanstack/react-query";

export function useAvailability(expertId?: number) {
    return useQuery({
        queryKey: ["weekly-availability", expertId],
        queryFn: () => {
            if (!expertId) throw new Error("expertId is required");
            return DashboardExpertService.getWeeklyAvailability(expertId);
        },
        enabled: !!expertId,
        retry: false,
    });
}