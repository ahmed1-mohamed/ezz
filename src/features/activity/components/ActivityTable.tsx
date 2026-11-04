"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, Trash2, Loader2 } from "lucide-react";
import { Activity } from "../types";
import { useLanguage } from "@/contexts/LanguageContext";
import { EmptyState } from "@/components/ui/empty-state";
import { cn } from "@/lib/utils";

interface ActivityTableProps {
  activities: Activity[];
  selectedActivities: number[];
  onSelectAll: (checked: boolean) => void;
  onSelectActivity: (id: number, checked: boolean) => void;
  onView?: (id: number) => void;
  onDelete?: (id: number) => void;
  isLoading?: boolean;
}

const ACTION_STYLES: Record<string, string> = {
  create: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800",
  update: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-400 dark:border-blue-800",
  delete: "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/40 dark:text-rose-400 dark:border-rose-800",
  login: "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/40 dark:text-purple-400 dark:border-purple-800",
  warning: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-800",
};

export const ActivityTable = React.memo(function ActivityTable({
  activities,
  selectedActivities,
  onSelectAll,
  onSelectActivity,
  onView,
  onDelete,
  isLoading = false,
}: ActivityTableProps) {
  const { t } = useLanguage();

  return (
    <div className="rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden overflow-x-auto w-full shadow-none">
      <Table className="w-full min-w-[950px]">
        <TableHeader>
          <TableRow className="bg-gray-50/80 dark:bg-neutral-800/60 hover:bg-gray-50/80 dark:hover:bg-neutral-800/60 border-b border-gray-200 dark:border-neutral-800">
            <TableHead className="w-10 px-3">
              <Checkbox
                checked={
                  activities.length > 0 &&
                  selectedActivities.length === activities.length
                }
                onCheckedChange={onSelectAll}
              />
            </TableHead>

            <TableHead className={`font-semibold text-gray-500 dark:text-gray-400 px-3 text-[11px] uppercase tracking-wider min-w-[140px] text-start`}>
              {t("activity.columns.user")}
            </TableHead>

            <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3 text-[11px] uppercase tracking-wider text-center w-28">
              {t("activity.columns.action")}
            </TableHead>

            <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3 text-[11px] uppercase tracking-wider min-w-[110px]">
              {t("activity.columns.entity")}
            </TableHead>

            <TableHead className={`font-semibold text-gray-500 dark:text-gray-400 px-3 text-[11px] uppercase tracking-wider min-w-[200px] max-w-sm text-start`}>
              {t("activity.columns.description")}
            </TableHead>

            <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3 text-[11px] uppercase tracking-wider min-w-[150px]">
              {t("activity.columns.dateTime")}
            </TableHead>

            <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3 text-[11px] uppercase tracking-wider w-32 font-mono">
              {t("activity.columns.ipAddress")}
            </TableHead>

            <TableHead className="font-semibold text-gray-500 dark:text-gray-400 text-center w-20 px-3 text-[11px] uppercase tracking-wider">
              {t("activity.columns.actions")}
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={8} className="py-16 text-center">
                <div className="flex flex-col items-center justify-center gap-2">
                  <Loader2 className="h-6 w-6 animate-spin text-teal-600" />
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {t("activity.loading")}
                  </span>
                </div>
              </TableCell>
            </TableRow>
          ) : activities.length === 0 ? (
            <TableRow>
              <TableCell colSpan={8} className="p-0">
                <EmptyState
                  type="default"
                  title={t("activity.table.noActivities") || undefined}
                  className="py-12"
                />
              </TableCell>
            </TableRow>
          ) : (
            activities.map((activity, index) => {
              const actionKey = activity.action?.toLowerCase() || "create";
              const isSelected = selectedActivities.includes(activity.id);

              return (
                <TableRow
                  key={activity.id || `activity-${index}`}
                  className={cn(
                    "border-b border-gray-100 dark:border-neutral-800/80 hover:bg-gray-50/60 dark:hover:bg-neutral-800/50 transition-colors group",
                    isSelected && "bg-teal-50/30 dark:bg-teal-950/20"
                  )}
                >
                  <TableCell className="px-3 py-3 w-10" onClick={(e) => e.stopPropagation()}>
                    <Checkbox
                      checked={isSelected}
                      onCheckedChange={(checked) =>
                        onSelectActivity(activity.id, checked as boolean)
                      }
                    />
                  </TableCell>

                  <TableCell className="px-3 py-3 whitespace-nowrap">
                    <button
                      onClick={() => onView && onView(activity.id)}
                      className="font-medium text-xs text-gray-900 dark:text-gray-100 hover:text-teal-600 dark:hover:text-teal-400 transition-colors cursor-pointer text-start block truncate max-w-[150px]"
                      title={activity.user}
                    >
                      {activity.user}
                    </button>
                  </TableCell>

                  <TableCell className="px-3 py-3 text-center whitespace-nowrap">
                    <span
                      className={cn(
                        "inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium border capitalize",
                        ACTION_STYLES[actionKey] || ACTION_STYLES.update
                      )}
                    >
                      {activity.action}
                    </span>
                  </TableCell>

                  <TableCell className="px-3 py-3 whitespace-nowrap">
                    <span className="text-xs text-gray-600 dark:text-gray-300 font-medium">
                      {activity.entity}
                    </span>
                  </TableCell>

                  <TableCell
                    className="px-3 py-3 text-xs text-gray-600 dark:text-gray-400 max-w-sm truncate cursor-help"
                    title={activity.description}
                  >
                    {activity.description}
                  </TableCell>

                  <TableCell className="px-3 py-3 whitespace-nowrap text-xs text-gray-500 dark:text-gray-400 font-mono">
                    {activity.dateTime}
                  </TableCell>

                  <TableCell className="px-3 py-3 whitespace-nowrap text-xs text-gray-500 dark:text-gray-400 font-mono">
                    {activity.ipAddress}
                  </TableCell>

                  <TableCell className="px-3 py-3 text-center">
                    <div className="flex items-center justify-center gap-1">
                      {onView && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onView(activity.id);
                          }}
                          className="p-1.5 text-gray-400 hover:text-teal-600 hover:bg-teal-50 dark:hover:bg-neutral-800 rounded-md transition-colors cursor-pointer"
                          title={t("activity.table.viewDetails")}
                        >
                          <Eye className="h-3.5 w-3.5" />
                        </button>
                      )}
                      {onDelete && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onDelete(activity.id);
                          }}
                          className="p-1.5 text-gray-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-neutral-800 rounded-md transition-colors cursor-pointer"
                          title={t("activity.table.deleteLog")}
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              );
            })
          )}
        </TableBody>
      </Table>
    </div>
  );
});