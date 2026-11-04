"use client";

import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { fetchNotifications, searchNotifications } from "@/data/api-client";
import { extractListFromApiResponse } from "@/app/admin/notifications/utils";

export default function useDashboardAdminNotificationsData() {
  const { data: session } = useSession();
  const token = session?.user?.accessToken;

  const notificationsData = useQuery({
    queryKey: ["notifications"],
    queryFn: async () => {
      const res: any = await fetchNotifications(token!);
      const items = extractListFromApiResponse(res);
      return {
        raw: res,
        items,
        data: res?.data || res,
      };
    },
    retry: false,
    enabled: !!token,
    staleTime: 5 * 60 * 1000,
    placeholderData: keepPreviousData,
  });

  const searchNotificationsData = {
    async mutate(keyword: string, perPage: number) {
      const res: any = await searchNotifications(
        { keyword, per_page: perPage },
        token!,
      );

      return res?.data || res;
    },
  };

  return {
    notificationsData,
    searchNotificationsData,
  };
}
