"use client";

import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { apiClient } from "@/lib/apiClient";
import type { DeveloperDataType } from "@/types";

export function useDevelopersSelect(countryId?: number) {
  const { data: session } = useSession();
  const token = session?.user?.accessToken;

  const { data: developers = [], isLoading } = useQuery<DeveloperDataType[]>({
    queryKey: ["developers", "all", countryId],
    queryFn: async () => {
      const response = await apiClient.get<any>("/dashboard/developers/all", {
        params: {
          ...(countryId && { country_id: countryId }),
        },
      });
      const raw = response.data;

      const items = (() => {
        if (!raw) return [];
        if (Array.isArray(raw)) return raw;
        if (Array.isArray(raw.data)) return raw.data;
        if (raw.data && Array.isArray(raw.data.developers)) return raw.data.developers;
        if (Array.isArray(raw.developers)) return raw.developers;
        return [];
      })();

      return items.map((item: any) => ({
        ...item,
        developer_id: item.developer_id || item.id,
        developer_name: item.developer_name || item.name || "",
      }));
    },
    // The developer list is only shown after a country is picked, so skip the unfiltered fetch.
    enabled: !!token && countryId != null,
    staleTime: 5 * 60 * 1000,
  });

  return { developers, isLoading };
}
