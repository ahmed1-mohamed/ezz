"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { EmptyState } from "@/components/ui/empty-state";
import { Contract } from "../types";
import { ContractsTableRow } from "./ContractsTableRow";
import { useLanguage } from "@/contexts/LanguageContext";

interface ContractsTableProps {
  contracts: Contract[];
  isLoading: boolean;
  onView?: (contract: Contract) => void;
}

export function ContractsTable({
  contracts,
  isLoading,
  onView,
}: ContractsTableProps) {
  const { language } = useLanguage();
  const isRTL = language === "ar";

  return (
    <div className="rounded-lg border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden overflow-x-auto w-full">
      <Table className="w-full min-w-[850px]">
        <TableHeader>
          <TableRow className="bg-gray-50/80 dark:bg-neutral-800/60 hover:bg-gray-50/80 dark:hover:bg-neutral-800/60 border-b border-gray-200 dark:border-neutral-800">
            <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-4 text-[11px] tracking-wider w-24">
              #
            </TableHead>

            <TableHead className={`font-semibold text-gray-500 dark:text-gray-400 px-4 text-[11px] tracking-wider min-w-[150px] ${isRTL ? "text-right" : "text-left"}`}>
              {isRTL ? "العميل" : "CUSTOMER"}
            </TableHead>

            <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-4 text-[11px] tracking-wider min-w-[130px]">
              {isRTL ? "الوحدة" : "UNIT"}
            </TableHead>

            <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-4 text-[11px] tracking-wider min-w-[160px]">
              {isRTL ? "المشروع" : "PROJECT"}
            </TableHead>

            <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-4 text-[11px] tracking-wider min-w-[130px]">
              {isRTL ? "قيمة العقد" : "VALUE"}
            </TableHead>

            <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-4 text-[11px] tracking-wider text-center w-28">
              {isRTL ? "الحالة" : "STATUS"}
            </TableHead>

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
          ) : contracts.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} className="p-0">
                <EmptyState
                  type="no_results"
                  title={isRTL ? "لا توجد عقود" : "No contracts found"}
                  className="py-12"
                />
              </TableCell>
            </TableRow>
          ) : (
            contracts.map((contract) => (
              <ContractsTableRow
                key={contract.id}
                contract={contract}
                onView={onView}
              />
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}