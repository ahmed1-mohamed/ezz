"use client";

import { useState, useCallback, useMemo, useEffect } from "react";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { useRouter, usePathname } from "next/navigation";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  fetchNotifications as fetchNotificationsApi,
  markNotificationAsRead as markNotificationAsReadApi,
} from "@/data/api-client";
import { useLanguage } from "@/contexts/LanguageContext";

import { NotificationCard, Notification } from "./components/NotificationCard";
import { NotificationsHeader } from "./components/NotificationsHeader";
import { NotificationsSearch } from "./components/NotificationsSearch";
import {
  NotificationsFilterTabs,
  FilterTab,
  FilterCounts,
} from "./components/NotificationsFilterTabs";
import { NotificationsEmptyState } from "./components/NotificationsEmptyState";
import { NotificationsList } from "./components/NotificationsList";
import { NotificationsPageSkeleton } from "./components/NotificationsSkeleton";
import {
  mapApiNotifications,
  isToday,
  isYesterday,
  extractListFromApiResponse,
} from "./utils";

export type { Notification, FilterTab, FilterCounts };

export default function NotificationsPage() {
  const [extraNotifications, setExtraNotifications] = useState<Notification[]>([]);
  const [nextCursor, setNextCursor] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [isMarkingRead, setIsMarkingRead] = useState(false);
  const [readIds, setReadIds] = useState<Set<number | string>>(new Set());
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<FilterTab>("all");

  const { data: session } = useSession();
  const token = session?.user?.accessToken;
  const router = useRouter();
  const pathname = usePathname();
  const { t, language } = useLanguage();
  const isRTL = language === "ar";
  const basePath = pathname?.startsWith("/developer")
    ? "/developer"
    : pathname?.startsWith("/expert")
      ? "/expert"
      : "/admin";
  const queryClient = useQueryClient();

  const transformApiNotifications = useCallback(
    (apiList: any[]): Notification[] => mapApiNotifications(apiList, isRTL, basePath),
    [isRTL, basePath]
  );

  const { data: apiResponse, isLoading } = useQuery({
    queryKey: ["notifications", "list"],
    queryFn: async () => {
      if (!token) return null;
      return await fetchNotificationsApi(token, "");
    },
    enabled: !!token,
    staleTime: 0,
    refetchOnMount: "always",
    refetchOnWindowFocus: true,
  });

  useEffect(() => {
    if (apiResponse) {
      const dataObj =
        apiResponse?.data && typeof apiResponse.data === "object"
          ? apiResponse.data
          : apiResponse;

      const nextCur =
        apiResponse?.next_cursor ||
        dataObj?.next_cursor ||
        dataObj?.meta?.next_cursor ||
        null;

      const curPage =
        apiResponse?.current_page ||
        dataObj?.current_page ||
        dataObj?.meta?.current_page ||
        1;

      const lastPage =
        apiResponse?.last_page ||
        dataObj?.last_page ||
        dataObj?.meta?.last_page ||
        1;

      setNextCursor(nextCur);
      setCurrentPage(curPage);
      setHasMore(
        Boolean(
          nextCur ||
          curPage < lastPage ||
          apiResponse?.next_page_url ||
          dataObj?.next_page_url
        )
      );
      setExtraNotifications([]);
    }
  }, [apiResponse]);

  const allNotifications = useMemo(() => {
    const rawList = extractListFromApiResponse(apiResponse);
    const baseList = transformApiNotifications(rawList);
    const map = new Map<number | string, Notification>();

    baseList.forEach((n) => {
      map.set(n.id, {
        ...n,
        isRead: n.isRead || readIds.has(n.id),
      });
    });

    extraNotifications.forEach((n) => {
      map.set(n.id, {
        ...n,
        isRead: n.isRead || readIds.has(n.id),
      });
    });

    return Array.from(map.values());
  }, [apiResponse, extraNotifications, readIds, transformApiNotifications]);

  const loadMore = useCallback(async () => {
    if (!token || (!nextCursor && !hasMore)) return;
    setIsLoadingMore(true);
    try {
      const paramStr = nextCursor ? `cursor=${nextCursor}` : `page=${currentPage + 1}`;
      const res: any = await fetchNotificationsApi(token, paramStr);
      const rawList = extractListFromApiResponse(res);
      const transformed = transformApiNotifications(rawList);

      setExtraNotifications((prev) => [...prev, ...transformed]);

      const dataObj =
        res?.data && typeof res.data === "object" ? res.data : res;

      const nextCur =
        res?.next_cursor ||
        dataObj?.next_cursor ||
        dataObj?.meta?.next_cursor ||
        null;

      const curPage =
        res?.current_page ||
        dataObj?.current_page ||
        dataObj?.meta?.current_page ||
        currentPage + 1;

      const lastPage =
        res?.last_page ||
        dataObj?.last_page ||
        dataObj?.meta?.last_page ||
        curPage;

      setNextCursor(nextCur);
      setCurrentPage(curPage);
      setHasMore(
        Boolean(
          nextCur ||
          curPage < lastPage ||
          res?.next_page_url ||
          dataObj?.next_page_url
        )
      );
    } catch (error) {
      console.error("Failed to load more notifications:", error);
      toast.error(
        t("notifications.error.loadFailed") ||
          (isRTL ? "فشل تحميل المزيد من الإشعارات" : "Failed to load more notifications")
      );
    } finally {
      setIsLoadingMore(false);
    }
  }, [token, nextCursor, hasMore, currentPage, t, isRTL, transformApiNotifications]);

  const handleNotificationClick = useCallback(
    (notification: Notification) => {
      if (!notification.isRead && token) {
        setReadIds((prev) => new Set(prev).add(notification.id));
        markNotificationAsReadApi(token, notification.id).catch(console.error);
        toast.success(
          t("notifications.success.markedAsRead") ||
            (isRTL ? "تم تحديد الإشعار كمقروء" : "Notification marked as read")
        );
      }
      if (notification.link?.href && notification.link.href !== "#") {
        router.push(notification.link.href);
      }
    },
    [token, router, t, isRTL]
  );

  const handleMarkAsRead = useCallback(async () => {
    if (!token || isMarkingRead) return;
    setIsMarkingRead(true);
    try {
      await markNotificationAsReadApi(token);
      toast.success(
        t("notifications.success.markedAllAsRead") ||
          (isRTL ? "تم تحديد جميع الإشعارات كمقروءة" : "All notifications marked as read")
      );
      setReadIds((prev) => {
        const next = new Set(prev);
        allNotifications.forEach((n) => next.add(n.id));
        return next;
      });
      await queryClient.invalidateQueries({ queryKey: ["notifications"] });
    } catch (error) {
      console.error("Failed to mark all as read:", error);
      toast.error(
        t("notifications.error.general") ||
          (isRTL ? "حدث خطأ أثناء تحديث الإشعارات" : "An error occurred")
      );
    } finally {
      setIsMarkingRead(false);
    }
  }, [token, isMarkingRead, t, isRTL, allNotifications, queryClient]);

  const handleSearch = useCallback((query: string) => setSearchQuery(query), []);
  const handleClearSearch = useCallback(() => setSearchQuery(""), []);

  const counts = useMemo((): FilterCounts => {
    let unread = 0;
    let bookings = 0;
    let properties = 0;
    let highPriority = 0;

    allNotifications.forEach((n) => {
      if (!n.isRead) unread++;
      const typeStr = (n.type || n.referenceType || "").toLowerCase();
      if (typeStr.includes("booking") || typeStr.includes("reservation")) bookings++;
      if (typeStr.includes("property") || typeStr.includes("unit")) properties++;
      const p = (n.priority || "").toLowerCase();
      if (p === "high" || p === "urgent") highPriority++;
    });

    return {
      all: allNotifications.length,
      unread,
      bookings,
      properties,
      highPriority,
    };
  }, [allNotifications]);

  const filteredNotifications = useMemo(() => {
    let list = allNotifications;

    if (activeTab === "unread") {
      list = list.filter((n) => !n.isRead);
    } else if (activeTab === "bookings") {
      list = list.filter((n) => {
        const typeStr = (n.type || n.referenceType || "").toLowerCase();
        return typeStr.includes("booking") || typeStr.includes("reservation");
      });
    } else if (activeTab === "properties") {
      list = list.filter((n) => {
        const typeStr = (n.type || n.referenceType || "").toLowerCase();
        return typeStr.includes("property") || typeStr.includes("unit");
      });
    } else if (activeTab === "high_priority") {
      list = list.filter((n) => {
        const p = (n.priority || "").toLowerCase();
        return p === "high" || p === "urgent";
      });
    }

    if (!searchQuery.trim()) return list;
    const query = searchQuery.toLowerCase().trim();
    return list.filter(
      (n) =>
        n.title.toLowerCase().includes(query) ||
        n.description.toLowerCase().includes(query) ||
        (n.referenceId && String(n.referenceId).includes(query)) ||
        (n.userId && String(n.userId).includes(query)) ||
        (n.status && n.status.toLowerCase().includes(query)) ||
        (n.type && n.type.toLowerCase().includes(query))
    );
  }, [allNotifications, activeTab, searchQuery]);

  const todayNotifications = useMemo(
    () => filteredNotifications.filter((n) => (n.rawTime ? isToday(new Date(n.rawTime)) : false)),
    [filteredNotifications]
  );

  const yesterdayNotifications = useMemo(
    () => filteredNotifications.filter((n) => (n.rawTime ? isYesterday(new Date(n.rawTime)) : false)),
    [filteredNotifications]
  );

  const earlierNotifications = useMemo(
    () =>
      filteredNotifications.filter((n) =>
        n.rawTime ? !isToday(new Date(n.rawTime)) && !isYesterday(new Date(n.rawTime)) : true
      ),
    [filteredNotifications]
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-950">
      <div className="max-w-8xl mx-auto p-4 sm:p-6 space-y-6">
        <NotificationsHeader
          t={t}
          onMarkAsRead={handleMarkAsRead}
          onBack={() => router.back()}
          basePath={basePath}
          isRTL={isRTL}
          isMarkingRead={isMarkingRead}
          unreadCount={counts.unread}
          totalCount={counts.all}
        />

        <div className="space-y-3">
          <NotificationsSearch
            language={language}
            t={t}
            onSearch={handleSearch}
            onClear={handleClearSearch}
          />

          <NotificationsFilterTabs
            activeTab={activeTab}
            onTabChange={setActiveTab}
            counts={counts}
            isRTL={isRTL}
          />
        </div>

        {isLoading && allNotifications.length === 0 ? (
          <NotificationsPageSkeleton />
        ) : filteredNotifications.length === 0 ? (
          <NotificationsEmptyState
            searchQuery={searchQuery}
            isFiltered={Boolean(searchQuery || activeTab !== "all")}
            onReset={() => {
              setSearchQuery("");
              setActiveTab("all");
            }}
            t={t}
            isRTL={isRTL}
          />
        ) : (
          <NotificationsList
            todayNotifications={todayNotifications}
            yesterdayNotifications={yesterdayNotifications}
            earlierNotifications={earlierNotifications}
            onNotificationClick={handleNotificationClick}
            hasMore={hasMore}
            isLoadingMore={isLoadingMore}
            onLoadMore={loadMore}
            t={t}
            isRTL={isRTL}
          />
        )}
      </div>
    </div>
  );
}