"use client";

import React from "react";
import { Inbox, Bell, CalendarCheck, Building2, Flame } from "lucide-react";

export type FilterTab = "all" | "unread" | "bookings" | "properties" | "high_priority";

export interface FilterCounts {
  all: number;
  unread: number;
  bookings: number;
  properties: number;
  highPriority: number;
}

interface NotificationsFilterTabsProps {
  activeTab: FilterTab;
  onTabChange: (tab: FilterTab) => void;
  counts: FilterCounts;
  isRTL?: boolean;
}

export const NotificationsFilterTabs = React.memo(function NotificationsFilterTabs({
  activeTab,
  onTabChange,
  counts,
  isRTL = false,
}: NotificationsFilterTabsProps) {
  const tabs = [
    { id: "all" as const, label: isRTL ? "الكل" : "All", count: counts.all, icon: Inbox },
    { id: "unread" as const, label: isRTL ? "غير مقروء" : "Unread", count: counts.unread, icon: Bell },
    { id: "bookings" as const, label: isRTL ? "الحجوزات" : "Bookings", count: counts.bookings, icon: CalendarCheck },
    { id: "properties" as const, label: isRTL ? "العقارات" : "Properties", count: counts.properties, icon: Building2 },
    { id: "high_priority" as const, label: isRTL ? "أولوية عالية" : "High Priority", count: counts.highPriority, icon: Flame },
  ];

  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onTabChange(tab.id)}
            className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-150 border cursor-pointer select-none ${
              isActive
                ? "bg-teal-600 text-white border-teal-600 shadow-xs"
                : "bg-white dark:bg-neutral-900 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-neutral-800 hover:bg-gray-50 dark:hover:bg-neutral-800"
            }`}
          >
            <Icon className={`h-4 w-4 ${isActive ? "text-white" : "text-gray-400 dark:text-gray-500"}`} />
            <span>{tab.label}</span>
            <span
              className={`px-1.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold ${
                isActive
                  ? "bg-white/25 text-white"
                  : "bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-400"
              }`}
            >
              {tab.count}
            </span>
          </button>
        );
      })}
    </div>
  );
});
