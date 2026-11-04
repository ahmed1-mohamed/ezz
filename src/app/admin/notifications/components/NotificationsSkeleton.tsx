"use client";

import React from "react";

export function NotificationSkeleton() {
  return (
    <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-gray-200 dark:border-neutral-800 p-4 sm:p-5 space-y-3 animate-pulse">
      <div className="flex items-start gap-3.5">
        <div className="h-11 w-11 sm:h-12 sm:w-12 rounded-xl bg-gray-200 dark:bg-neutral-800 shrink-0" />
        <div className="flex-1 space-y-2">
          <div className="flex items-center justify-between gap-2">
            <div className="flex gap-1.5">
              <div className="h-4 w-16 bg-gray-200 dark:bg-neutral-800 rounded-md" />
              <div className="h-4 w-14 bg-gray-100 dark:bg-neutral-850 rounded-md" />
            </div>
            <div className="h-3 w-16 bg-gray-200 dark:bg-neutral-800 rounded" />
          </div>
          <div className="h-4 w-1/2 bg-gray-200 dark:bg-neutral-800 rounded" />
          <div className="h-3 w-3/4 bg-gray-100 dark:bg-neutral-850 rounded" />
        </div>
      </div>
    </div>
  );
}

export function NotificationsPageSkeleton() {
  return (
    <div className="space-y-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <NotificationSkeleton key={i} />
      ))}
    </div>
  );
}
