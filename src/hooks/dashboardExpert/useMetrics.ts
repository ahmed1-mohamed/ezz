"use client";

import { DashboardExpertService } from "@/data/api-client";
import { useQuery } from "@tanstack/react-query";

export function useMetrics() {
    return useQuery({
        queryKey: ["MetricsData"],
        queryFn: () => DashboardExpertService.getMetrics(),
        retry: false,
    });
}
