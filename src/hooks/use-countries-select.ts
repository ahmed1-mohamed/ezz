"use client";

import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { apiClient } from "@/lib/apiClient";

export function useCountriesSelect(enabled: boolean = true) {
  const { data: session } = useSession();
  const token = session?.user?.accessToken;

  const { data: countries = [], isLoading } = useQuery({
    queryKey: ["countries", "select"],
    queryFn: async () => {
      const response = await apiClient.get<any>("/dashboard/countries");
      const raw = response.data;

      const items = (() => {
        if (!raw) return [];
        if (Array.isArray(raw)) return raw;
        if (Array.isArray(raw.data)) return raw.data;
        if (raw.data && Array.isArray(raw.data.countries)) return raw.data.countries;
        if (Array.isArray(raw.countries)) return raw.countries;
        return [];
      })();

      return items.map((item: any) => ({
        country_id: item.country_id || item.id,
        country_name: item.country_name || item.name || "",
      }));
    },
    enabled: !!token && enabled,
    staleTime: 5 * 60 * 1000,
  });

  return { countries, isLoading };
}
