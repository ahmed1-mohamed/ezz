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
import { EmptyState } from "@/components/ui/empty-state";
import { ActivityLogItem } from "../types";
import { LogsTableRow } from "./LogsTableRow";
import { useLanguage } from "@/contexts/LanguageContext";

interface LogsTableProps {
  logs: ActivityLogItem[];
  isLoading: boolean;
  onView?: (log: ActivityLogItem) => void;
}

export function LogsTable({ logs, isLoading, onView }: LogsTableProps) {
  const { language } = useLanguage();
  const isRTL = language === "ar";

  return (
    <div className="rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden overflow-x-auto w-full">
      <Table className="w-full min-w-[850px]">
        <TableHeader>
          <TableRow className="bg-gray-50/80 dark:bg-neutral-800/60 hover:bg-gray-50/80 dark:hover:bg-neutral-800/60 border-b border-gray-200 dark:border-neutral-800">
            {/* 1. TIME */}
            <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-4 text-[11px] tracking-wider w-40">
              {isRTL ? "الوقت" : "TIME"}
            </TableHead>

            {/* 2. LEVEL */}
            <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-4 text-[11px] tracking-wider w-28">
              {isRTL ? "المستوى" : "LEVEL"}
            </TableHead>

            {/* 3. CATEGORY */}
            <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-4 text-[11px] tracking-wider w-32">
              {isRTL ? "التصنيف" : "CATEGORY"}
            </TableHead>

            {/* 4. EVENT */}
            <TableHead className={`font-semibold text-gray-500 dark:text-gray-400 px-4 text-[11px] tracking-wider ${isRTL ? "text-right" : "text-left"}`}>
              {isRTL ? "الحدث" : "EVENT"}
            </TableHead>

            {/* 5. SOURCE */}
            <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-4 text-[11px] tracking-wider min-w-[140px]">
              {isRTL ? "المصدر" : "SOURCE"}
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {isLoading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <TableRow key={i} className="animate-pulse">
                <TableCell colSpan={5} className="py-4 px-4">
                  <div className="h-4 bg-gray-200 dark:bg-neutral-800 rounded w-full" />
                </TableCell>
              </TableRow>
            ))
          ) : logs.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} className="p-0">
                <EmptyState
                  type="no_results"
                  title={isRTL ? "لا توجد سجلات أحداث" : "No server logs found"}
                  className="py-12"
                />
              </TableCell>
            </TableRow>
          ) : (
            logs.map((log) => (
              <LogsTableRow key={log.id} log={log} onView={onView} />
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
