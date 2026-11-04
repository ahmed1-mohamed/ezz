
"use client";

import { DashboardExpertService } from "@/data/api-client";
import { useQuery } from "@tanstack/react-query";

export function useReview(expertId?: number | null, enabled: boolean = true) {
    return useQuery({
        queryKey: ["ReviewsData", expertId],
        queryFn: () => DashboardExpertService.getReviews(expertId!),
        retry: false,
        enabled: enabled && !!expertId,
    });
}
