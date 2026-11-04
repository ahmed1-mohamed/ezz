"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { EmptyState } from "@/components/ui/empty-state";
import { Lead } from "../types";
import { LeadsTableRow } from "./LeadsTableRow";
import { useLanguage } from "@/contexts/LanguageContext";

interface LeadsTableProps {
  leads: Lead[];
  isLoading: boolean;
  selectedLeads: string[];
  onSelectAll: (checked: boolean) => void;
  onSelectOne: (id: string, checked: boolean) => void;
  onView?: (lead: Lead) => void;
}

export function LeadsTable({
  leads,
  isLoading,
  selectedLeads,
  onSelectAll,
  onSelectOne,
  onView,
}: LeadsTableProps) {
  const { language } = useLanguage();
  const isRTL = language === "ar";
  const allSelected = leads.length > 0 && selectedLeads.length === leads.length;

  return (
    <div className="rounded-lg border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden overflow-x-auto w-full">
      <Table className="w-full min-w-[1200px]">
        <TableHeader>
          <TableRow className="bg-gray-50/80 dark:bg-neutral-800/60 hover:bg-gray-50/80 dark:hover:bg-neutral-800/60 border-b border-gray-200 dark:border-neutral-800">
            <TableHead className="w-10 px-3">
              <Checkbox
                checked={allSelected}
                onCheckedChange={(v) => onSelectAll(v as boolean)}
              />
            </TableHead>

            <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3 text-[11px] tracking-wider w-24">
              #
            </TableHead>

            <TableHead className={`font-semibold text-gray-500 dark:text-gray-400 px-3 text-[11px] tracking-wider min-w-[140px] ${isRTL ? "text-right" : "text-left"}`}>
              {isRTL ? "العميل" : "CUSTOMER"}
            </TableHead>

            <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3 text-[11px] tracking-wider min-w-[130px]">
              {isRTL ? "الهاتف" : "PHONE"}
            </TableHead>

            <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3 text-[11px] tracking-wider min-w-[160px]">
              {isRTL ? "البريد الإلكتروني" : "EMAIL"}
            </TableHead>

            <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3 text-[11px] tracking-wider min-w-[150px]">
              {isRTL ? "المشروع" : "PROJECT"}
            </TableHead>

            <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3 text-[11px] tracking-wider text-center w-20">
              {isRTL ? "الوحدة" : "UNIT"}
            </TableHead>

            <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3 text-[11px] tracking-wider text-center w-24">
              {isRTL ? "الميزانية" : "BUDGET"}
            </TableHead>

            <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3 text-[11px] tracking-wider min-w-[110px]">
              {isRTL ? "المصدر" : "SOURCE"}
            </TableHead>

            <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3 text-[11px] tracking-wider min-w-[120px]">
              {isRTL ? "المسؤول" : "ASSIGNED"}
            </TableHead>

            <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3 text-[11px] tracking-wider text-center w-24">
              {isRTL ? "الحالة" : "STATUS"}
            </TableHead>

            <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3 text-[11px] tracking-wider text-center w-24">
              {isRTL ? "الأولوية" : "PRIORITY"}
            </TableHead>

            <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3 text-[11px] tracking-wider text-center min-w-[100px]">
              {isRTL ? "الوسوم" : "TAGS"}
            </TableHead>

            <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3 text-[11px] tracking-wider text-end min-w-[110px]">
              {isRTL ? "تاريخ الإنشاء" : "CREATED"}
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {isLoading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <TableRow key={i} className="animate-pulse">
                <TableCell colSpan={14} className="py-4 px-4">
                  <div className="h-4 bg-gray-200 dark:bg-neutral-800 rounded w-full" />
                </TableCell>
              </TableRow>
            ))
          ) : leads.length === 0 ? (
            <TableRow>
              <TableCell colSpan={14} className="p-0">
                <EmptyState
                  type="no_results"
                  title={isRTL ? "لا يوجد عملاء محتملون مطابقة لبحثك" : "No leads found"}
                  className="py-12"
                />
              </TableCell>
            </TableRow>
          ) : (
            leads.map((lead) => (
              <LeadsTableRow
                key={lead.id}
                lead={lead}
                isSelected={selectedLeads.includes(String(lead.id))}
                onSelect={onSelectOne}
                onView={onView}
              />
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}