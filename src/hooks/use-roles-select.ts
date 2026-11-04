"use client";

import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { apiClient } from "@/lib/apiClient";
import type { RolesDataType } from "@/types";

export function useRolesSelect() {
  const { data: session } = useSession();
  const token = session?.user?.accessToken;

  const { data: roles = [], isLoading } = useQuery<RolesDataType[]>({
    queryKey: ["roles", "select"],
    queryFn: async () => {
      const response = await apiClient.get<any>("/dashboard/roles/all");
      const raw = response.data;
      if (Array.isArray(raw)) {
        return raw;
      }
      return raw?.data || [];
    },
    enabled: !!token,
    staleTime: 5 * 60 * 1000,
  });

  return { roles, isLoading };
}
