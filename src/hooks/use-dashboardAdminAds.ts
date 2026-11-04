"use client";

import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { AdminAdsService } from "@/data/api-client";

export default function useDashboardAdminAdsData(
  page: number = 1,
  limit: number = 15,
  filters?: {
    status?: string;
    platform?: string;
    format?: string;
    search?: string;
  },
  enabled: boolean = true,
) {
  const { data: session } = useSession();
  const token = session?.user?.accessToken;

  const adsData = useQuery<{ data: any[]; meta?: any; total?: number; raw?: any }>({
    queryKey: ["ads", page, limit, filters?.status, filters?.platform, filters?.format, filters?.search],
    queryFn: async () => {
      const res: any = await AdminAdsService.getAds(page, limit, filters);
      if (!res) return { data: [], total: 0 };

      let items: any[] = [];
      let total: number | undefined;

      if (Array.isArray(res)) {
        items = res;
        total = res.length;
      } else if (Array.isArray(res.data)) {
        items = res.data;
        total = res.total ?? res.meta?.total ?? res.pagination?.total ?? res.count;
      } else if (res.data && Array.isArray(res.data.data)) {
        items = res.data.data;
        total = res.data.total ?? res.data.meta?.total ?? res.total;
      } else if (Array.isArray(res.ads)) {
        items = res.ads;
        total = res.total ?? res.meta?.total;
      } else if (res.data && typeof res.data === "object") {
        items = Object.values(res.data);
        total = res.total ?? items.length;
      }

      return {
        data: items,
        total: total ?? (typeof res.total === "number" ? res.total : undefined),
        meta: res.meta ?? res.data?.meta,
        raw: res,
      };
    },
    retry: 1,
    enabled: !!token && enabled,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    placeholderData: keepPreviousData,
  });

  const totalsData = useQuery<{
    total_ads?: number | string;
    active_ads?: number | string;
    total_views?: number | string;
    total_clicks?: number | string;
  }>({
    queryKey: ["adsTotals"],
    queryFn: async () => {
      const res: any = await AdminAdsService.getAdsTotals();
      if (!res) return {};
      if (res.data && typeof res.data === "object") {
        return res.data.data || res.data;
      }
      return res;
    },
    retry: 1,
    enabled: !!token,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    placeholderData: keepPreviousData,
  });

  return {
    adsData,
    totalsData,
    isLoading: adsData.isLoading,
    isFetching: adsData.isFetching,
    isError: adsData.isError,
  };
}
