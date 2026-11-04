"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface SidebarItem {
  icon: React.ComponentType<{ className?: string }>;
  labelKey: string;
  href: string;
  badge?: string | number;
}

interface SidebarMenuItemProps {
  item: SidebarItem;
  pathname: string;
  t: (key: string) => string;
  isCollapsed?: boolean;
}

export function SidebarMenuItem({ item, pathname, t, isCollapsed }: SidebarMenuItemProps) {
  const isActive = pathname === item.href || pathname.startsWith(item.href + "/");

  return (
    <li>
      <Link
        href={item.href}
        prefetch={false}
        title={isCollapsed ? t(item.labelKey) : undefined}
        className={cn(
          "group flex items-center rounded-lg px-2.5 py-1.5 text-[13px] font-medium transition-all duration-200",
          isCollapsed ? "relative justify-center gap-0 px-2 py-2" : "gap-2.5",
          isActive
            ? "bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400"
            : "text-gray-600 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-700/60 hover:text-gray-900 dark:hover:text-slate-100",
        )}
      >
        <item.icon
          className={cn(
            "h-4 w-4 flex-shrink-0 transition-colors duration-200",
            isActive
              ? "text-teal-600 dark:text-teal-400"
              : "text-gray-400 dark:text-slate-500 group-hover:text-gray-600 dark:group-hover:text-slate-300",
          )}
        />
        {!isCollapsed && (
          <>
            <span className="flex-1 truncate">{t(item.labelKey)}</span>
            {item.badge !== undefined && item.badge !== null && item.badge !== "" && item.badge !== 0 && (
              <span className="ms-auto inline-flex items-center justify-center px-1.5 py-0.5 rounded text-[11px] font-semibold bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200/60 dark:border-teal-800/60">
                {item.badge}
              </span>
            )}
          </>
        )}
        {isCollapsed && item.badge !== undefined && item.badge !== null && item.badge !== "" && item.badge !== 0 && (
          <span className="absolute top-1 end-1 flex h-3.5 min-w-3.5 px-0.5 items-center justify-center rounded-full bg-teal-600 text-[8px] font-semibold text-white">
            {item.badge}
          </span>
        )}
      </Link>
    </li>
  );
}
