"use client";

import React from "react";
import { TableRow, TableCell } from "@/components/ui/table";
import { ActivityLogItem } from "../types";
import { cn } from "@/lib/utils";

interface LogsTableRowProps {
  log: ActivityLogItem;
  onView?: (log: ActivityLogItem) => void;
}

const LEVEL_STYLES: Record<string, string> = {
  warning: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-900/60",
  error: "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/40 dark:text-rose-400 dark:border-rose-900/60",
  info: "bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950/40 dark:text-teal-400 dark:border-teal-900/60",
  debug: "bg-gray-100 text-gray-700 border-gray-200 dark:bg-neutral-800 dark:text-gray-300 dark:border-neutral-700",
};

export const LogsTableRow = React.memo(function LogsTableRow({
  log,
  onView,
}: LogsTableRowProps) {
  const levelKey = (log.level || "info").toLowerCase();

  return (
    <TableRow
      onClick={() => onView?.(log)}
      className="border-b border-gray-100 dark:border-neutral-800/80 hover:bg-gray-50/60 dark:hover:bg-neutral-800/50 transition-colors cursor-pointer group"
    >
      {/* 1. TIME */}
      <TableCell className="px-4 py-3 whitespace-nowrap text-xs text-gray-500 dark:text-gray-400 font-mono">
        {log.time}
      </TableCell>

      {/* 2. LEVEL */}
      <TableCell className="px-4 py-3 whitespace-nowrap">
        <span
          className={cn(
            "inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium border capitalize",
            LEVEL_STYLES[levelKey] || LEVEL_STYLES.warning
          )}
        >
          {log.level || "Warning"}
        </span>
      </TableCell>

      {/* 3. CATEGORY */}
      <TableCell className="px-4 py-3 whitespace-nowrap text-xs text-gray-500 dark:text-gray-400 font-mono">
        {log.category || "—"}
      </TableCell>

      {/* 4. EVENT */}
      <TableCell className="px-4 py-3 min-w-[320px] max-w-xl">
        <div className="space-y-0.5">
          <p className="text-xs font-medium text-gray-900 dark:text-gray-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors line-clamp-2">
            {log.event}
          </p>
          {log.urlOrMethod && (
            <p className="text-[11px] text-gray-400 dark:text-gray-500 font-mono truncate">
              {log.urlOrMethod}
            </p>
          )}
        </div>
      </TableCell>

      {/* 5. SOURCE */}
      <TableCell className="px-4 py-3 whitespace-nowrap min-w-[140px]">
        <div className="space-y-0.5">
          <p className="text-xs font-medium text-gray-800 dark:text-gray-200">
            {log.sourceUser || "AdminUser #1"}
          </p>
          <p className="text-[11px] text-gray-400 dark:text-gray-500 font-mono">
            {log.ipAddress || "—"}
          </p>
        </div>
      </TableCell>
    </TableRow>
  );
});
