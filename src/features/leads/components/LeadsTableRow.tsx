"use client";

import React from "react";
import { TableRow, TableCell } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Globe } from "lucide-react";
import { Lead } from "../types";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

interface LeadsTableRowProps {
  lead: Lead;
  isSelected: boolean;
  onSelect: (id: string, checked: boolean) => void;
  onView?: (lead: Lead) => void;
}

const STATUS_STYLES: Record<string, string> = {
  new: "bg-sky-50 text-sky-600 border-sky-200 dark:bg-sky-950/40 dark:text-sky-400 dark:border-sky-800",
  contacted: "bg-indigo-50 text-indigo-600 border-indigo-200 dark:bg-indigo-950/40 dark:text-indigo-400 dark:border-indigo-800",
  meeting: "bg-purple-50 text-purple-600 border-purple-200 dark:bg-purple-950/40 dark:text-purple-400 dark:border-purple-800",
  qualified: "bg-teal-50 text-teal-600 border-teal-200 dark:bg-teal-950/40 dark:text-teal-400 dark:border-teal-800",
  viewing: "bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-950/40 dark:text-blue-400 dark:border-blue-800",
  negotiation: "bg-amber-50 text-amber-600 border-amber-200 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-800",
  reserved: "bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800",
  contract: "bg-cyan-50 text-cyan-600 border-cyan-200 dark:bg-cyan-950/40 dark:text-cyan-400 dark:border-cyan-800",
  won: "bg-emerald-100 text-emerald-800 border-emerald-300 dark:bg-emerald-900/40 dark:text-emerald-300 dark:border-emerald-700",
  lost: "bg-rose-50 text-rose-600 border-rose-200 dark:bg-rose-950/40 dark:text-rose-400 dark:border-rose-800",
};

const PRIORITY_STYLES: Record<string, string> = {
  high: "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/40 dark:text-rose-400 dark:border-rose-800",
  medium: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-800",
  low: "bg-gray-100 text-gray-600 border-gray-200 dark:bg-neutral-800 dark:text-gray-300 dark:border-neutral-700",
};

export const LeadsTableRow = React.memo(function LeadsTableRow({
  lead,
  isSelected,
  onSelect,
  onView,
}: LeadsTableRowProps) {
  const { language } = useLanguage();
  const isRTL = language === "ar";

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "—";
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <TableRow className="border-b border-gray-100 dark:border-neutral-800/80 hover:bg-gray-50/50 dark:hover:bg-neutral-800/50 transition-colors">
      <TableCell className="px-3 py-2.5 w-10" onClick={(e) => e.stopPropagation()}>
        <Checkbox
          checked={isSelected}
          onCheckedChange={(v) => onSelect(String(lead.id), v as boolean)}
        />
      </TableCell>

      <TableCell className="px-3 py-2.5 whitespace-nowrap">
        <span className="text-xs text-gray-500 dark:text-gray-400 font-mono font-medium">
          {lead.code}
        </span>
      </TableCell>

      <TableCell className="px-3 py-2.5">
        <button
          onClick={() => onView?.(lead)}
          className="text-gray-900 dark:text-gray-100 text-xs font-bold hover:text-teal-600 dark:hover:text-teal-400 transition-colors cursor-pointer text-start focus:outline-none tracking-tight truncate max-w-[160px] block"
          title={lead.customer_name}
        >
          {lead.customer_name || "—"}
        </button>
      </TableCell>

      <TableCell className="px-3 py-2.5 whitespace-nowrap">
        <span className="text-xs text-gray-600 dark:text-gray-300 font-mono" dir="ltr">
          {lead.phone || "—"}
        </span>
      </TableCell>

      <TableCell className="px-3 py-2.5 max-w-[180px]">
        <span className="text-xs text-gray-600 dark:text-gray-300 truncate block" title={lead.email || ""}>
          {lead.email || "—"}
        </span>
      </TableCell>

      <TableCell className="px-3 py-2.5 max-w-[160px]">
        <span className="text-xs text-gray-700 dark:text-gray-300 font-medium truncate block" title={lead.project_name || ""}>
          {lead.project_name || "—"}
        </span>
      </TableCell>

      <TableCell className="px-3 py-2.5 text-center whitespace-nowrap">
        <span className="text-xs text-gray-400 dark:text-gray-500">
          {lead.unit || "—"}
        </span>
      </TableCell>

      <TableCell className="px-3 py-2.5 text-center whitespace-nowrap">
        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
          {lead.budget || "—"}
        </span>
      </TableCell>

      <TableCell className="px-3 py-2.5 whitespace-nowrap">
        <div className="inline-flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-300">
          <Globe className="h-3.5 w-3.5 text-gray-400 shrink-0" />
          <span>{lead.source || "Direct"}</span>
        </div>
      </TableCell>

      <TableCell className="px-3 py-2.5 whitespace-nowrap">
        <span className="text-xs text-gray-600 dark:text-gray-300">
          {lead.assigned_to || "Unassigned"}
        </span>
      </TableCell>

      <TableCell className="px-3 py-2.5 whitespace-nowrap text-center">
        <span
          className={cn(
            "inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium border capitalize",
            STATUS_STYLES[lead.status] || STATUS_STYLES.new
          )}
        >
          {lead.status}
        </span>
      </TableCell>

      <TableCell className="px-3 py-2.5 whitespace-nowrap text-center">
        <span
          className={cn(
            "inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium border capitalize",
            PRIORITY_STYLES[lead.priority] || PRIORITY_STYLES.medium
          )}
        >
          {lead.priority}
        </span>
      </TableCell>

      <TableCell className="px-3 py-2.5 whitespace-nowrap text-center">
        {lead.tags && lead.tags.length > 0 ? (
          <div className="flex items-center justify-center gap-1 flex-wrap">
            {lead.tags.map((tag, idx) => (
              <span
                key={idx}
                className="inline-flex items-center px-2 py-0.5 rounded text-[11px] text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : (
          <span className="text-xs text-gray-400 dark:text-gray-500">—</span>
        )}
      </TableCell>

      <TableCell className="px-3 py-2.5 whitespace-nowrap text-end text-xs text-gray-500 dark:text-gray-400">
        {formatDate(lead.created_at)}
      </TableCell>
    </TableRow>
  );
});