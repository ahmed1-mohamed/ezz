"use client";

import React from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NotificationCard, Notification } from "./NotificationCard";

interface NotificationsListProps {
  todayNotifications: Notification[];
  yesterdayNotifications: Notification[];
  earlierNotifications: Notification[];
  onNotificationClick: (notification: Notification) => void;
  hasMore: boolean;
  isLoadingMore: boolean;
  onLoadMore: () => void;
  t: (key: string) => string;
  isRTL?: boolean;
}

export const NotificationsList = React.memo(function NotificationsList({
  todayNotifications,
  yesterdayNotifications,
  earlierNotifications,
  onNotificationClick,
  hasMore,
  isLoadingMore,
  onLoadMore,
  t,
  isRTL = false,
}: NotificationsListProps) {
  return (
    <div className="space-y-6">
      {/* Today Section */}
      {todayNotifications.length > 0 && (
        <div className="space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 text-start">
            {t("notifications.today") || (isRTL ? "اليوم" : "Today")}
          </h2>
          <div className="space-y-2.5">
            {todayNotifications.map((notification) => (
              <NotificationCard
                key={notification.id}
                notification={notification}
                onClick={() => onNotificationClick(notification)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Yesterday Section */}
      {yesterdayNotifications.length > 0 && (
        <div className="space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 text-start">
            {t("notifications.yesterday") || (isRTL ? "أمس" : "Yesterday")}
          </h2>
          <div className="space-y-2.5">
            {yesterdayNotifications.map((notification) => (
              <NotificationCard
                key={notification.id}
                notification={notification}
                onClick={() => onNotificationClick(notification)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Earlier Section */}
      {earlierNotifications.length > 0 && (
        <div className="space-y-3">
          {(todayNotifications.length > 0 || yesterdayNotifications.length > 0) && (
            <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 text-start">
              {t("notifications.earlier") || (isRTL ? "في وقت سابق" : "Earlier")}
            </h2>
          )}
          <div className="space-y-2.5">
            {earlierNotifications.map((notification) => (
              <NotificationCard
                key={notification.id}
                notification={notification}
                onClick={() => onNotificationClick(notification)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Load More Button */}
      {hasMore && (
        <div className="pt-4 text-center">
          <Button
            onClick={onLoadMore}
            disabled={isLoadingMore}
            variant="outline"
            className="bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 text-teal-600 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-neutral-800 px-6 py-2.5 cursor-pointer"
          >
            {isLoadingMore ? (
              <span className="flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                {t("notifications.loadingMore") || (isRTL ? "جاري التحميل..." : "Loading...")}
              </span>
            ) : (
              t("notifications.loadMore") || (isRTL ? "تحميل المزيد" : "Load more")
            )}
          </Button>
        </div>
      )}
    </div>
  );
});
