"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ChevronRight, ChevronLeft, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NotificationsHeaderProps {
  t: (key: string) => string;
  onMarkAsRead: () => void;
  onBack: () => void;
  basePath?: string;
  isRTL?: boolean;
  isMarkingRead?: boolean;
  unreadCount?: number;
  totalCount?: number;
}

export const NotificationsHeader = React.memo(function NotificationsHeader({
  t,
  onMarkAsRead,
  onBack,
  basePath = "/admin",
  isRTL = false,
  isMarkingRead = false,
  unreadCount = 0,
  totalCount = 0,
}: NotificationsHeaderProps) {
  const ChevronIcon = isRTL ? ChevronLeft : ChevronRight;
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
        <Link href={`${basePath}/home`} prefetch={false} className="hover:text-teal-600 transition-colors">
          {t("properties.breadcrumbs.home") || (isRTL ? "الرئيسية" : "Home")}
        </Link>
        <ChevronIcon className="h-4 w-4" />
        <span className="text-gray-900 dark:text-gray-100 font-medium">
          {t("notifications.title") || (isRTL ? "الإشعارات" : "Notifications")}
        </span>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full"
            onClick={onBack}
          >
            <ArrowLeft className={`h-5 w-5 ${isRTL ? "rotate-180" : ""}`} />
          </Button>
          <div className="flex items-center gap-2.5">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {t("notifications.title") || (isRTL ? "الإشعارات" : "Notifications")}
            </h1>
            {unreadCount > 0 && (
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-teal-100 text-teal-800 dark:bg-teal-900/60 dark:text-teal-300 animate-pulse">
                {unreadCount} {isRTL ? "غير مقروء" : "unread"}
              </span>
            )}
          </div>
        </div>

        <Button
          onClick={onMarkAsRead}
          disabled={isMarkingRead}
          variant="outline"
          className="gap-2 text-teal-600 border-teal-200 hover:bg-teal-50 dark:border-teal-800 dark:text-teal-400 dark:hover:bg-teal-950/40"
        >
          {isMarkingRead ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <CheckCircle2 className="h-4 w-4" />
          )}
          {t("notifications.markAllAsRead") || (isRTL ? "تحديد الكل كمقروء" : "Mark all as read")}
        </Button>
      </div>
    </div>
  );
});
