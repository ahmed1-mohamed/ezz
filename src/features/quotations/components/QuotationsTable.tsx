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
import { Quotation } from "../types";
import { QuotationsTableRow } from "./QuotationsTableRow";
import { useLanguage } from "@/contexts/LanguageContext";

interface QuotationsTableProps {
  quotations: Quotation[];
  isLoading: boolean;
  onView?: (quote: Quotation) => void;
}

export function QuotationsTable({
  quotations,
  isLoading,
  onView,
}: QuotationsTableProps) {
  const { language } = useLanguage();
  const isRTL = language === "ar";

  return (
    <div className="rounded-lg border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden overflow-x-auto w-full">
      <Table className="w-full min-w-[850px]">
        <TableHeader>
          <TableRow className="bg-gray-50/80 dark:bg-neutral-800/60 hover:bg-gray-50/80 dark:hover:bg-neutral-800/60 border-b border-gray-200 dark:border-neutral-800">
            {/* 1. Code */}
            <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-4 text-[11px] tracking-wider w-24">
              #
            </TableHead>

            {/* 2. Customer */}
            <TableHead className={`font-semibold text-gray-500 dark:text-gray-400 px-4 text-[11px] tracking-wider min-w-[150px] ${isRTL ? "text-right" : "text-left"}`}>
              {isRTL ? "العميل" : "CUSTOMER"}
            </TableHead>

            {/* 3. Unit */}
            <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-4 text-[11px] tracking-wider min-w-[130px]">
              {isRTL ? "الوحدة" : "UNIT"}
            </TableHead>

            {/* 4. Project */}
            <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-4 text-[11px] tracking-wider min-w-[160px]">
              {isRTL ? "المشروع" : "PROJECT"}
            </TableHead>

            {/* 5. Net */}
            <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-4 text-[11px] tracking-wider min-w-[130px]">
              {isRTL ? "صافي السعر" : "NET"}
            </TableHead>

            {/* 6. Status */}
            <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-4 text-[11px] tracking-wider text-center w-28">
              {isRTL ? "الحالة" : "STATUS"}
            </TableHead>

            {/* 7. Date */}
            <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-4 text-[11px] tracking-wider text-end min-w-[110px]">
              {isRTL ? "التاريخ" : "DATE"}
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {isLoading ? (
            Array.from({ length: 4 }).map((_, i) => (
              <TableRow key={i} className="animate-pulse">
                <TableCell colSpan={7} className="py-4 px-4">
                  <div className="h-4 bg-gray-200 dark:bg-neutral-800 rounded w-full" />
                </TableCell>
              </TableRow>
            ))
          ) : quotations.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} className="p-0">
                <EmptyState
                  type="no_results"
                  title={isRTL ? "لا توجد عروض أسعار" : "No quotations found"}
                  className="py-12"
                />
              </TableCell>
            </TableRow>
          ) : (
            quotations.map((quote) => (
              <QuotationsTableRow
                key={quote.id}
                quote={quote}
                onView={onView}
              />
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
