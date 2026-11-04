"use client";

import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { AdminDevelopersService } from "@/features/developers/services/AdminDevelopersService";
import type { DeveloperDataType } from "@/types";

export default function useDashboardAdminProjectsCreateData(
  countryId?: number,
) {
  const { data: session } = useSession();
  const token = session?.user?.accessToken;

  const developersData = useQuery<DeveloperDataType[]>({
    queryKey: ["developers", "all"],
    queryFn: async () => {
      const raw = await AdminDevelopersService.getAllDevelopers();

      const items = (() => {
        if (!raw) return [];
        if (Array.isArray(raw)) return raw;
        if (Array.isArray(raw.data)) return raw.data;
        if (raw.data && Array.isArray(raw.data.data)) return raw.data.data;
        if (raw.data && Array.isArray(raw.data.developers)) return raw.data.developers;
        if (Array.isArray(raw.developers)) return raw.developers;
        if (Array.isArray(raw.result)) return raw.result;
        return [];
      })();

      return items.map((item: any) => ({
        ...item,
        developer_id: item.developer_id ?? item.id,
        developer_name: item.developer_name ?? item.name ?? item.title ?? "",
      }));
    },
    retry: false,
    enabled: !!token,
    staleTime: 5 * 60 * 1000,
  });

  return {
    developersData,
  };
}
