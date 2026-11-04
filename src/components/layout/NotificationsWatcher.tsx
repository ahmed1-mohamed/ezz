"use client";

import { useEffect, useRef } from "react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { apiClient2, ENDPOINTS, markNotificationAsRead } from "@/data/api-client";
import { useLanguage } from "@/contexts/LanguageContext";
import { extractListFromApiResponse, mapApiNotifications } from "@/app/admin/notifications/utils";
import {
  classifyNotification,
  showActivityNotification,
  showActivitySummaryNotification,
  type ActivityNotificationLabels,
} from "@/app/admin/notifications/components/ActivityNotificationToast";
import {
  requestBrowserNotificationPermission,
  showBrowserNotification,
} from "@/app/admin/chat/utils/chatNotifications";

export const NOTIFICATIONS_LIST_QUERY_KEY = ["notifications", "list"] as const;

export async function fetchNotificationsQuietly(token: string) {
  const res = await apiClient2.get(ENDPOINTS.COMMON.NOTIFICATIONS, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
}

const POLL_INTERVAL_MS = 15_000;
const MAX_TOASTS_PER_CHECK = 3;

/**
 * Developer dashboard: polls the user's notifications (sharing the notifications page cache)
 * and pops a card for each new unread one, e.g. when an admin changes their properties,
 * ads or projects. A foreground FCM push triggers an immediate refresh.
 */
export function NotificationsWatcher() {
  const { data: session } = useSession();
  const { t, language } = useLanguage();
  const pathname = usePathname() ?? "";
  const router = useRouter();
  const queryClient = useQueryClient();

  const token = session?.user?.accessToken as string | undefined;
  const enabled = !!token && pathname.startsWith("/developer");
  const isRTL = language === "ar";

  const seenIdsRef = useRef<Set<number> | null>(null);
  const latestRef = useRef({ t, router, isRTL, token });
  latestRef.current = { t, router, isRTL, token };

  const { data } = useQuery({
    queryKey: NOTIFICATIONS_LIST_QUERY_KEY,
    queryFn: () => fetchNotificationsQuietly(token!),
    enabled,
    refetchInterval: POLL_INTERVAL_MS,
    refetchIntervalInBackground: true,
    refetchOnWindowFocus: true,
    staleTime: 0,
  });

  useEffect(() => {
    seenIdsRef.current = null;
  }, [token]);

  useEffect(() => {
    if (!enabled) return;
    const onFirstInteraction = () => requestBrowserNotificationPermission();
    window.addEventListener("pointerdown", onFirstInteraction, { once: true });
    return () => window.removeEventListener("pointerdown", onFirstInteraction);
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;
    let unsubscribe: (() => void) | undefined;
    let cancelled = false;
    import("@/lib/firebase-config")
      .then(({ messaging, onMessage }) => {
        if (cancelled || !messaging) return;
        unsubscribe = onMessage(messaging, () => {
          queryClient.invalidateQueries({ queryKey: ["notifications"] });
        });
      })
      .catch(() => {});
    return () => {
      cancelled = true;
      unsubscribe?.();
    };
  }, [enabled, queryClient]);

  useEffect(() => {
    if (!enabled || !data) return;
    const { t: translate, router: nav, isRTL: rtl, token: authToken } = latestRef.current;
    const notifications = mapApiNotifications(extractListFromApiResponse(data), rtl, "/developer");

    const previous = seenIdsRef.current;
    seenIdsRef.current = new Set(notifications.map((n) => n.id));
    if (!previous) return;

    const fresh = notifications.filter((n) => !n.isRead && !previous.has(n.id));
    if (!fresh.length) return;

    const labels: ActivityNotificationLabels = {
      entity: {
        property: translate("notifications.live.property"),
        ad: translate("notifications.live.ad"),
        project: translate("notifications.live.project"),
        other: "",
      },
      action: {
        created: translate("notifications.live.created"),
        updated: translate("notifications.live.updated"),
        deleted: translate("notifications.live.deleted"),
        deactivated: translate("notifications.live.deactivated"),
        other: translate("notifications.live.new"),
      },
      view: translate("notifications.live.view"),
      dismiss: translate("notifications.live.dismiss"),
    };
    const direction = rtl ? "rtl" : "ltr";

    fresh.slice(0, MAX_TOASTS_PER_CHECK).forEach((notification) => {
      const { entity, action } = classifyNotification(notification);
      const href =
        action === "deleted" && entity === "property"
          ? "/developer/properties"
          : notification.link && notification.link.href !== "#"
            ? notification.link.href
            : "/developer/notifications";
      const open = () => {
        if (authToken) {
          markNotificationAsRead(authToken, notification.id)
            .then(() => queryClient.invalidateQueries({ queryKey: ["notifications"] }))
            .catch(() => {});
        }
        nav.push(href);
      };

      showActivityNotification({
        notification,
        entity,
        action,
        timeLabel: notification.time,
        labels,
        direction,
        onOpen: open,
      });
      showBrowserNotification(notification.title, notification.description, open);
    });

    const extra = fresh.length - MAX_TOASTS_PER_CHECK;
    if (extra > 0) {
      showActivitySummaryNotification({
        text: translate("notifications.live.more", { count: extra }),
        viewLabel: translate("notifications.live.viewAll"),
        direction,
        onOpen: () => nav.push("/developer/notifications"),
      });
    }
  }, [data, enabled, queryClient]);

  return null;
}
