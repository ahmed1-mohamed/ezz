"use client";

import { useQuery } from "@tanstack/react-query";
import { AdminPermissionsService, PermissionItem } from "@/data/api-client";

function extractPermissionsArray(res: any): PermissionItem[] {
  if (!res) return [];

  // 1. If response or response.data is directly an array
  if (Array.isArray(res)) return res;
  if (Array.isArray(res.data)) return res.data;
  if (Array.isArray(res.data?.data)) return res.data.data;
  if (Array.isArray(res.permissions)) return res.permissions;
  if (Array.isArray(res.data?.permissions)) return res.data.permissions;

  // 2. If data is an object of groups: { activity_logs: [...], ad_campaigns: [...], ... }
  const rawObj =
    res.data?.data && typeof res.data.data === "object" && !Array.isArray(res.data.data)
      ? res.data.data
      : res.data && typeof res.data === "object" && !Array.isArray(res.data)
        ? res.data
        : typeof res === "object" && !Array.isArray(res)
          ? res
          : null;

  if (rawObj) {
    const list: PermissionItem[] = [];
    Object.entries(rawObj).forEach(([groupKey, val]) => {
      if (Array.isArray(val)) {
        val.forEach((item: any) => {
          if (item && (item.permission_id !== undefined || item.id !== undefined)) {
            list.push({
              permission_id: Number(item.permission_id ?? item.id),
              permission_name: String(item.permission_name ?? item.name ?? ""),
              group: String(item.group ?? groupKey),
              description: String(item.description ?? item.permission_name ?? item.name ?? ""),
              created_at: item.created_at,
              updated_at: item.updated_at,
            });
          }
        });
      }
    });
    if (list.length > 0) return list;
  }

  return [];
}

export function useDashboardPermissions(params?: Record<string, unknown>, enabled = true) {
  return useQuery({
    queryKey: ["dashboard_permissions", params],
    queryFn: async () => {
      const res = await AdminPermissionsService.getPermissions(params);
      return extractPermissionsArray(res);
    },
    enabled,
    staleTime: 5 * 60 * 1000,
  });
}
