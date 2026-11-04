"use client";

import React from "react";
import { TableRow, TableCell } from "@/components/ui/table";
import { Contract } from "../types";
import { cn } from "@/lib/utils";

interface ContractsTableRowProps {
  contract: Contract;
  onView?: (contract: Contract) => void;
}

const STATUS_STYLES: Record<string, string> = {
  draft: "bg-gray-100 text-gray-700 border-gray-200 dark:bg-neutral-800 dark:text-gray-300 dark:border-neutral-700",
  sent: "bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950/40 dark:text-teal-400 dark:border-teal-800",
  signed: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800",
  cancelled: "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/40 dark:text-rose-400 dark:border-rose-800",
};

export const ContractsTableRow = React.memo(function ContractsTableRow({
  contract,
  onView,
}: ContractsTableRowProps) {
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
      <TableCell className="px-4 py-3 whitespace-nowrap">
        <span className="text-xs text-gray-500 dark:text-gray-400 font-mono font-medium">
          {contract.code}
        </span>
      </TableCell>

      <TableCell className="px-4 py-3">
        <button
          onClick={() => onView?.(contract)}
          className="text-gray-900 dark:text-gray-100 text-xs font-bold hover:text-teal-600 dark:hover:text-teal-400 transition-colors cursor-pointer text-start focus:outline-none tracking-tight truncate max-w-[180px] block"
          title={contract.customer_name}
        >
          {contract.customer_name}
        </button>
      </TableCell>

      <TableCell className="px-4 py-3 whitespace-nowrap">
        <span className="text-xs text-gray-600 dark:text-gray-300 font-medium">
          {contract.unit || "—"}
        </span>
      </TableCell>

      <TableCell className="px-4 py-3 max-w-[200px]">
        <span className="text-xs text-gray-600 dark:text-gray-300 truncate block" title={contract.project_name || ""}>
          {contract.project_name || "—"}
        </span>
      </TableCell>

      <TableCell className="px-4 py-3 whitespace-nowrap">
        <span className="text-xs font-semibold text-gray-900 dark:text-gray-100">
          {contract.value}
        </span>
      </TableCell>

      <TableCell className="px-4 py-3 whitespace-nowrap text-center">
        <span
          className={cn(
            "inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium border capitalize",
            STATUS_STYLES[contract.status] || STATUS_STYLES.draft
          )}
        >
          {contract.status}
        </span>
      </TableCell>

      <TableCell className="px-4 py-3 whitespace-nowrap text-end text-xs text-gray-500 dark:text-gray-400">
        {formatDate(contract.created_at)}
      </TableCell>
    </TableRow>
  );
});