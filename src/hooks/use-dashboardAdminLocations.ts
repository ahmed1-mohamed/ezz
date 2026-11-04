"use client";

import { useQuery, useMutation, useQueryClient, keepPreviousData } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { AdminLocationsService } from "@/data/api-client";

export default function useDashboardAdminLocations(
  page?: number,
  limit?: number,
  search?: string,
  city?: string,
  status?: string,
) {
  const { data: session } = useSession();
  const token = session?.user?.accessToken;
  const queryClient = useQueryClient();

  const paginatedLocationsData = useQuery({
    queryKey: ["locations", page, limit, search, city, status],
    queryFn: () => AdminLocationsService.getLocations(page!, limit!, search, city, status),
    retry: false,
    enabled: !!token,
    staleTime: 5 * 60 * 1000,
    placeholderData: keepPreviousData,
  });

  const deleteLocationMutation = useMutation({
    mutationFn: (id: number) => AdminLocationsService.deleteLocation(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["locations"] });
    },
  });

  return {
    paginatedLocationsData,
    deleteLocationMutation,
  };
}