"use client";

import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { SidebarMenuItem } from "./sidebar-menu-item";

interface SidebarItem {
  icon: React.ComponentType<{ className?: string }>;
  labelKey: string;
  href: string;
  badge?: string | number;
}

interface TabGroup {
  id: string;
  labelKey: string;
  icon?: React.ComponentType<{ className?: string }>;
  items: SidebarItem[];
}

interface SidebarCollapsibleGroupProps {
  group: TabGroup;
  pathname: string;
  isExpanded: boolean;
  onToggle: () => void;
  isRTL: boolean;
  t: (key: string) => string;
  isCollapsed?: boolean;
}

export function SidebarCollapsibleGroup({
  group,
  pathname,
  isExpanded,
  onToggle,
  isRTL,
  t,
  isCollapsed,
}: SidebarCollapsibleGroupProps) {
  const isTabActive = (group: TabGroup) => {
    return group.items.some(
      (item) => pathname === item.href || pathname.startsWith(item.href + "/"),
    );
  };
  const isActive = isTabActive(group);
  const GroupIcon = group.icon;

  // In collapsed mode: show items as icon-only rows (no group header)
  if (isCollapsed) {
    return (
      <div className="space-y-0.5">
        {group.items.map((item) => (
          <SidebarMenuItem
            key={item.href}
            item={item}
            pathname={pathname}
            t={t}
            isCollapsed={true}
          />
        ))}
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={onToggle}
        className={cn(
          "group flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer",
          isActive
            ? "text-teal-600 dark:text-teal-400"
            : "text-gray-400 dark:text-slate-500 hover:text-gray-600 dark:hover:text-slate-300",
        )}
      >
        <div className="flex items-center gap-2">
          {GroupIcon && <GroupIcon className="h-3.5 w-3.5" />}
          <span>{t(group.labelKey)}</span>
        </div>
        {isExpanded ? (
          <ChevronDown className="h-3 w-3 opacity-60" />
        ) : (
          <ChevronRight className={cn("h-3 w-3 opacity-60", isRTL && "rotate-180")} />
        )}
      </button>

      {isExpanded && (
        <ul className="mt-0.5 space-y-0.5">
          {group.items.map((item) => (
            <SidebarMenuItem
              key={item.href}
              item={item}
              pathname={pathname}
              t={t}
              isCollapsed={false}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
