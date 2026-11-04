"use client";

import React from "react";
import { BellOff, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NotificationsEmptyStateProps {
  searchQuery?: string;
  isFiltered?: boolean;
  onReset?: () => void;
  t: (key: string) => string;
  isRTL?: boolean;
}

export const NotificationsEmptyState = React.memo(function NotificationsEmptyState({
  searchQuery,
  isFiltered,
  onReset,
  t,
  isRTL = false,
}: NotificationsEmptyStateProps) {
  return (
    <div className="py-16 text-center bg-white dark:bg-neutral-900 rounded-2xl border border-gray-200 dark:border-neutral-800 flex flex-col items-center justify-center p-6 space-y-3">
      <div className="p-4 rounded-full bg-gray-50 dark:bg-neutral-800 text-gray-400 dark:text-gray-500">
        <BellOff className="h-8 w-8" />
      </div>
      <p className="text-base font-semibold text-gray-700 dark:text-gray-300">
        {t("notifications.noNotifications") || (isRTL ? "لا توجد إشعارات حالياً" : "No notifications found")}
      </p>
      {searchQuery && (
        <p className="text-xs text-gray-400">
          {isRTL ? "جرّب البحث بكلمات أخرى" : "Try searching with different keywords"}
        </p>
      )}
      {isFiltered && onReset && (
        <Button
          variant="outline"
          size="sm"
          onClick={onReset}
          className="gap-2 mt-1 text-xs border-gray-200 dark:border-neutral-800"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          {isRTL ? "إعادة تعيين التصفية" : "Reset filters"}
        </Button>
      )}
    </div>
  );
});
