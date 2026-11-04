"use client";

import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { apiClient } from "@/lib/apiClient";
import { unpackAreasResponse } from "@/app/admin/areas/utils/map-area";

export interface NormalizedArea {
  area_id: number;
  area_name: string;
  city_name?: string;
  city_id?: number | string;
  country?: string;
  raw?: any;
}

export default function useAreasByCountry(
  country?: string,
  city?: string | number,
  enabled: boolean = true,
) {
  const { data: session } = useSession();
  const token = session?.user?.accessToken;

  return useQuery<NormalizedArea[]>({
    queryKey: ["areas", country || "all", city ? String(city) : "all"],
    queryFn: async () => {
      let rawData: any = null;

      const buildParams = (extra?: Record<string, string>) => {
        const p = new URLSearchParams();
        if (country) p.append("country", country);
        if (city) {
          p.append("city", String(city));
          if (!isNaN(Number(city))) {
            p.append("city_id", String(city));
          }
        }
        if (extra) {
          Object.entries(extra).forEach(([k, v]) => p.append(k, v));
        }
        const str = p.toString();
        return str ? `?${str}` : "";
      };

      try {
        const res = await apiClient.get(`/dashboard/areas/all${buildParams()}`);
        if (res.data) rawData = res.data;
      } catch (err) {
      }

      if (!rawData || (Array.isArray(rawData) && rawData.length === 0)) {
        try {
          const res = await apiClient.get(
            `/dashboard/areas${buildParams({ per_page: "1000" })}`
          );
          if (res.data) rawData = res.data;
        } catch (err) {
        }
      }

      if (!rawData || (Array.isArray(rawData) && rawData.length === 0)) {
        try {
          const res = await apiClient.get(`/dashboard/dldAreas?per_page=1000&request=1000`);
          if (res.data) rawData = res.data;
        } catch (err) {
          console.error("Failed to fetch areas from all endpoints:", err);
        }
      }

      const { itemsArray } = unpackAreasResponse(rawData);

      const seen = new Set<string>();
      const normalized: NormalizedArea[] = [];

      for (const item of itemsArray) {
        const name = (
          item.area_name ||
          item.name ||
          item.dld_area_name ||
          item.title ||
          ""
        ).trim();

        if (!name) continue;

        const key = name.toLowerCase();
        if (seen.has(key)) continue;
        seen.add(key);

        const id = Number(item.area_id ?? item.id ?? item.dld_area_id ?? 0);
        const cityName =
          item.city?.name ||
          item.city?.city_name ||
          item.city_name ||
          (typeof item.city === "string" ? item.city : undefined) ||
          item.state?.name ||
          item.state?.city_name ||
          (item.dld_area_id || item.dld_area_name ? "Dubai" : undefined);

        const cityId =
          item.city_id ??
          item.city?.id ??
          item.city?.city_id ??
          (item.dld_area_id || item.dld_area_name ? 6 : undefined);

        normalized.push({
          area_id: id,
          area_name: name,
          city_name: cityName,
          city_id: cityId,
          country: item.country || item.country_name || country,
          raw: item,
        });
      }

      normalized.sort((a, b) => a.area_name.localeCompare(b.area_name));

      return normalized;
    },
    retry: 1,
    enabled: !!token && enabled,
    staleTime: 5 * 60 * 1000,
  });
}
