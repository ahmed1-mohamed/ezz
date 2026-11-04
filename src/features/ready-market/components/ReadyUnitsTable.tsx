"use client";

import Link from "next/link";
import { MoreHorizontal, Eye, Pencil, CheckCircle2, XCircle, Trash2, HelpCircle } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EmptyState } from "@/components/ui/empty-state";
import { useLanguage } from "@/contexts/LanguageContext";
import { READY_UNIT_STATE, type ReadyUnitRow } from "../types";
import { ReadyUnitStatusBadge } from "./ReadyUnitStatusBadge";
import { useReadyMarketBasePath } from "../use-base-path";
import { cn } from "@/lib/utils";

const AVAILABILITY_STYLES: Record<string, string> = {
  available: "bg-teal-50 text-[#007b78] dark:bg-teal-950/40 dark:text-teal-300",
  reserved: "bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300",
  sold: "bg-gray-100 text-gray-600 dark:bg-neutral-800 dark:text-gray-300",
};

interface ReadyUnitsTableProps {
  rows: ReadyUnitRow[];
  selectedIds: number[];
  onSelectAll: (checked: boolean) => void;
  onSelect: (id: number, checked: boolean) => void;
  onAccept: (id: number) => void;
  onReject: (id: number) => void;
  onDelete: (row: ReadyUnitRow) => void;
  pendingId?: number;
}

const head = "font-medium text-gray-700 dark:text-gray-300 px-3.5 py-3 text-xs";
const cell = "px-3.5 py-3 text-xs";

export function ReadyUnitsTable({ rows, selectedIds, onSelectAll, onSelect, onAccept, onReject, onDelete, pendingId }: ReadyUnitsTableProps) {
  const { t, language } = useLanguage();
  const basePath = useReadyMarketBasePath();
  const locale = language === "ar" ? "ar-EG" : "en-US";
  const formatPrice = (row: ReadyUnitRow) =>
    row.price === null ? "-" : `${row.price.toLocaleString(locale)} ${row.currency || t("common.aed")}`;
  const formatSize = (row: ReadyUnitRow) =>
    row.size === null ? "-" : `${row.size.toLocaleString(locale)} ${row.sizeUnit.toLowerCase() || t("readyMarket.table.sqm")}`;
  const formatDate = (value: string | null) => {
    const date = value ? new Date(value) : null;
    return date && !Number.isNaN(date.getTime())
      ? date.toLocaleDateString(locale, { day: "2-digit", month: "short", year: "numeric" })
      : "-";
  };

  return (
    <div className="overflow-x-auto w-full">
      <Table className="w-full min-w-[1100px]">
        <TableHeader>
          <TableRow className="bg-white dark:bg-neutral-900 border-b border-gray-100 dark:border-neutral-800 hover:bg-white dark:hover:bg-neutral-900">
            <TableHead className="w-[44px] px-4">
              <Checkbox
                checked={rows.length > 0 && selectedIds.length === rows.length}
                onCheckedChange={(checked) => onSelectAll(checked === true)}
                aria-label={t("readyMarket.table.selectAll")}
              />
            </TableHead>
            <TableHead className={head}>{t("readyMarket.columns.name")}</TableHead>
            <TableHead className={`${head} border-e border-gray-100 dark:border-neutral-800`}>{t("readyMarket.columns.owner")}</TableHead>
            <TableHead className={head}>{t("readyMarket.columns.location")}</TableHead>
            <TableHead className={head}>{t("readyMarket.columns.size")}</TableHead>
            <TableHead className={head}>{t("readyMarket.columns.price")}</TableHead>
            <TableHead className={head}>{t("readyMarket.columns.availability")}</TableHead>
            <TableHead className={`${head} border-e border-gray-100 dark:border-neutral-800`}>{t("readyMarket.columns.createdAt")}</TableHead>
            <TableHead className={`${head} border-e border-gray-100 dark:border-neutral-800`}>{t("readyMarket.columns.status")}</TableHead>
            <TableHead className={`${head} text-center`}>
              <div className="flex items-center justify-center gap-1">
                <span>{t("readyMarket.columns.actions")}</span>
                <HelpCircle className="h-3.5 w-3.5 text-gray-400" />
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.length === 0 ? (
            <TableRow>
              <TableCell colSpan={10} className="p-0">
                <EmptyState
                  type="no_results"
                  title={t("readyMarket.table.noData")}
                  message={t("readyMarket.table.noDataDesc")}
                  className="py-12"
                />
              </TableCell>
            </TableRow>
          ) : (
            rows.map((row) => (
              <TableRow key={row.id} className="border-b border-gray-100 dark:border-neutral-800 hover:bg-gray-50/50 dark:hover:bg-neutral-800/40 transition-colors">
                <TableCell className="px-4">
                  <Checkbox
                    checked={selectedIds.includes(row.id)}
                    onCheckedChange={(checked) => onSelect(row.id, checked === true)}
                  />
                </TableCell>
                <TableCell className={`${cell} max-w-[220px]`}>
                  <Link
                    href={`${basePath}/${row.id}`}
                    prefetch={false}
                    title={row.name}
                    className="block truncate font-semibold text-[#007b78] no-underline transition-colors hover:text-[#005f5c] hover:no-underline dark:text-teal-400 dark:hover:text-teal-300"
                  >
                    {row.name || "-"}
                  </Link>
                </TableCell>
                <TableCell className={`${cell} text-gray-900 dark:text-gray-100 font-medium border-e border-gray-100 dark:border-neutral-800`}>{row.owner}</TableCell>
                <TableCell className={`${cell} text-gray-800 dark:text-gray-200 max-w-[160px]`}>
                  <span className="block truncate" title={row.location}>{row.location}</span>
                </TableCell>
                <TableCell className={`${cell} text-gray-800 dark:text-gray-200 whitespace-nowrap`}>{formatSize(row)}</TableCell>
                <TableCell className={`${cell} font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap`}>{formatPrice(row)}</TableCell>
                <TableCell className={cell}>
                  {row.availability ? (
                    <span className={cn("inline-flex rounded-md px-2 py-0.5 text-[11px] font-medium", AVAILABILITY_STYLES[row.availability] ?? AVAILABILITY_STYLES.sold)}>
                      {t(`readyMarket.availability.${row.availability}`)}
                    </span>
                  ) : (
                    "-"
                  )}
                </TableCell>
                <TableCell className={`${cell} text-gray-800 dark:text-gray-200 whitespace-nowrap border-e border-gray-100 dark:border-neutral-800`}>
                  {formatDate(row.createdAt)}
                </TableCell>
                <TableCell className={`${cell} border-e border-gray-100 dark:border-neutral-800`}>
                  {row.state !== null ? (
                    <ReadyUnitStatusBadge state={row.state} />
                  ) : row.status ? (
                    <span
                      className={cn(
                        "inline-flex rounded-md border px-2.5 py-0.5 text-xs font-medium",
                        row.status === "active"
                          ? "border-[#abefc6] bg-[#ecfdf3] text-[#027a48] dark:border-emerald-800/60 dark:bg-emerald-950/40 dark:text-emerald-300"
                          : "border-gray-200 bg-gray-50 text-gray-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-gray-300"
                      )}
                    >
                      {t(row.status === "active" ? "readyMarket.listingStatus.active" : "readyMarket.listingStatus.inactive")}
                    </span>
                  ) : (
                    "-"
                  )}
                </TableCell>
                <TableCell className={`${cell} text-center`}>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-gray-900" aria-label={t("readyMarket.columns.actions")}>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-44">
                      <DropdownMenuItem asChild className="gap-2 cursor-pointer">
                        <Link href={`${basePath}/${row.id}`} prefetch={false}>
                          <Eye className="h-4 w-4" />
                          {t("readyMarket.actions.view")}
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild className="gap-2 cursor-pointer">
                        <Link href={`${basePath}/${row.id}/edit`} prefetch={false}>
                          <Pencil className="h-4 w-4" />
                          {t("readyMarket.actions.edit")}
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        className="gap-2 cursor-pointer text-emerald-700 focus:text-emerald-700"
                        disabled={row.state === READY_UNIT_STATE.ACCEPTED || pendingId === row.id}
                        onClick={() => onAccept(row.id)}
                      >
                        <CheckCircle2 className="h-4 w-4" />
                        {t("readyMarket.actions.accept")}
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="gap-2 cursor-pointer text-red-600 focus:text-red-600"
                        disabled={row.state === READY_UNIT_STATE.REJECTED || pendingId === row.id}
                        onClick={() => onReject(row.id)}
                      >
                        <XCircle className="h-4 w-4" />
                        {t("readyMarket.actions.reject")}
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        className="gap-2 cursor-pointer text-red-600 focus:text-red-600"
                        onClick={() => onDelete(row)}
                      >
                        <Trash2 className="h-4 w-4" />
                        {t("readyMarket.actions.delete")}
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
