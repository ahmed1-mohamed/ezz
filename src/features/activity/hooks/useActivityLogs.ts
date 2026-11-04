"use client";

import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { AdminActivityService } from "../services/AdminActivityService";

export default function useActivityLogs(
  page: number = 1,
  perPage: number = 10,
  search?: string,
  action?: string,
  entityType?: string,
  dateRange?: string,
) {
  const { data: session } = useSession();
  const token = session?.user?.accessToken;

  const paginatedActivityData = useQuery({
    // token is not part of the key: a refreshed access token must not refetch the same page.
    queryKey: ["activity", page, perPage, search, action, entityType, dateRange],
    queryFn: () =>
      AdminActivityService.getActivityLogs(
        page,
        perPage,
        search,
        action,
        entityType,
        dateRange,
        token
      ),
    retry: 1,
    enabled: !!token,
  });

  return {
    paginatedActivityData,
  };
}
