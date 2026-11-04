"use client";

import { DashboardAdminService } from "@/data/api-client";
import { useQuery } from "@tanstack/react-query";

export function useProfile() {
    return useQuery({
        queryKey: ["adminProfile"],
        queryFn: () => DashboardAdminService.getProfileInformation(),
        retry: false,
    });
}
