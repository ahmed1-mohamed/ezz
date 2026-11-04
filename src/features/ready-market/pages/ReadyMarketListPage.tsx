"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useQueryClient } from "@tanstack/react-query";
import { Plus, Search, SlidersHorizontal } from "lucide-react";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";
import { ConfirmModal } from "@/components/ui/modal";
import { Pagination } from "@/components/shared/Pagination";
import { useCountriesSelect } from "@/hooks/use-countries-select";
import { useDebounce } from "@/hooks/useDebounce";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { readyUnitsKeys, useReadyUnitReview, useReadyUnitsList } from "../hooks";
import { ReadyUnitsService, type ReadyUnitsFilters } from "../services/ReadyUnitsService";
import { unpackReadyUnitsList } from "../utils";
import { exportReadyUnits, type ExportFormat } from "../export";
import type { ReadyUnitRow } from "../types";
import { useReadyMarketBasePath } from "../use-base-path";
import { ReadyUnitsTable } from "../components/ReadyUnitsTable";
import { FilterSelect } from "../components/FilterSelect";
import { SellerFilter, type SellerValue } from "../components/SellerFilter";
import { ExportMenu } from "../components/ExportMenu";
import {
  AdvancedFiltersModal,
  EMPTY_ADVANCED_FILTERS,
  type AdvancedFilters,
} from "../components/AdvancedFiltersModal";

const MAX_EXPORT_ROWS = 1000;

export default function ReadyMarketListPage() {
  const { t } = useLanguage();
  const basePath = useReadyMarketBasePath();
  const queryClient = useQueryClient();

  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search);
  const [countryId, setCountryId] = useState("");
  const [seller, setSeller] = useState<SellerValue | null>(null);
  const [isActive, setIsActive] = useState("");
  const [role, setRole] = useState("");
  const [listingType, setListingType] = useState("");
  const [advanced, setAdvanced] = useState<AdvancedFilters>(EMPTY_ADVANCED_FILTERS);
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const [countriesRequested, setCountriesRequested] = useState(false);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [rowToDelete, setRowToDelete] = useState<ReadyUnitRow | null>(null);
  const [isExporting, setIsExporting] = useState(false);

  useEffect(() => {
    setPage(1);
  }, [debouncedSearch]);

  const filters: ReadyUnitsFilters = {
    search: debouncedSearch,
    countryId,
    sellerId: seller?.id,
    isActive,
    role,
    listingType,
    propertyTypeId: advanced.propertyTypeId,
    propertySubtypeId: advanced.propertySubtypeId,
    city: advanced.locationScope === "city" ? advanced.location : "",
    area: advanced.locationScope === "area" ? advanced.location : "",
  };

  const { data, isLoading, isError } = useReadyUnitsList({ ...filters, page, perPage });
  const rows = data?.rows ?? [];
  const total = data?.total ?? 0;
  const totalPages = Math.max(1, Math.ceil(total / perPage));

  // Country options are only requested once the Country dropdown is opened.
  const { countries, isLoading: countriesLoading } = useCountriesSelect(countriesRequested);
  const { acceptUnit, rejectUnit, deleteUnit, isDeleting, pendingId } = useReadyUnitReview();

  const withPageReset = <T,>(setter: (v: T) => void) => (value: T) => {
    setter(value);
    setPage(1);
    setSelectedIds([]);
  };

  const advancedCount = [advanced.location.trim(), advanced.propertyTypeId, advanced.propertySubtypeId].filter(Boolean).length;

  const handleExport = async (format: ExportFormat) => {
    setIsExporting(true);
    try {
      let exportRows = rows.filter((row) => selectedIds.includes(row.id));
      if (exportRows.length === 0) {
        const params = { ...filters, page: 1, perPage: Math.min(Math.max(total, perPage), MAX_EXPORT_ROWS) };
        const body = await queryClient.fetchQuery({
          queryKey: readyUnitsKeys.list(params),
          queryFn: () => ReadyUnitsService.list(params),
        });
        exportRows = unpackReadyUnitsList(body).rows;
      }
      if (exportRows.length === 0) {
        toast.error(t("readyMarket.export.empty"));
        return;
      }
      await exportReadyUnits(exportRows, format);
      toast.success(t("readyMarket.export.success"));
    } catch {
      toast.error(t("readyMarket.export.failed"));
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">{t("readyMarket.title")}</h1>
        <Link
          href={`${basePath}/create`}
          prefetch={false}
          className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-[#007b78] px-4 text-xs font-medium text-white hover:bg-[#006664]"
        >
          <Plus className="h-4 w-4" />
          {t("readyMarket.createNew")}
        </Link>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-3 sm:p-4 dark:border-neutral-800 dark:bg-neutral-900 space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <div className="relative w-full sm:w-56">
            <Search className="absolute start-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t("readyMarket.filters.searchPlaceholder")}
              className="h-9 w-full rounded-lg border border-gray-200 bg-white ps-9 pe-3 text-xs outline-none focus:border-[#007b78] dark:border-neutral-700 dark:bg-neutral-900"
            />
          </div>

          <FilterSelect
            label={t("readyMarket.filters.country")}
            allLabel={t("readyMarket.filters.all")}
            value={countryId}
            onChange={withPageReset(setCountryId)}
            onOpenChange={(open) => open && setCountriesRequested(true)}
            isLoading={countriesLoading}
            options={countries.map((c: any) => ({ value: String(c.country_id), label: c.country_name }))}
          />
          <SellerFilter value={seller} onChange={withPageReset(setSeller)} />
          <FilterSelect
            label={t("readyMarket.filters.status")}
            allLabel={t("readyMarket.filters.all")}
            value={isActive}
            onChange={withPageReset(setIsActive)}
            options={[
              { value: "2", label: t("readyMarket.status.pending") },
              { value: "1", label: t("readyMarket.status.confirmed") },
              { value: "0", label: t("readyMarket.status.rejected") },
            ]}
          />
          <FilterSelect
            label={t("readyMarket.filters.role")}
            allLabel={t("readyMarket.filters.all")}
            value={role}
            onChange={withPageReset(setRole)}
            options={[
              { value: "user", label: t("readyMarket.roles.customer") },
              { value: "developer", label: t("readyMarket.roles.developer") },
              { value: "admin", label: t("readyMarket.roles.admin") },
            ]}
          />
          <FilterSelect
            label={t("readyMarket.filters.listingType")}
            allLabel={t("readyMarket.filters.all")}
            value={listingType}
            onChange={withPageReset(setListingType)}
            options={[
              { value: "rent", label: t("readyMarket.listingType.rent") },
              { value: "sale", label: t("readyMarket.listingType.sale") },
            ]}
          />
          <button
            type="button"
            onClick={() => setAdvancedOpen(true)}
            className={cn(
              "inline-flex h-9 items-center gap-1.5 rounded-lg border px-3 text-xs transition-colors",
              advancedCount > 0
                ? "border-[#007b78] bg-teal-50/50 text-[#007b78] dark:bg-teal-950/40"
                : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-gray-200"
            )}
          >
            <SlidersHorizontal className="h-3.5 w-3.5" />
            {t("readyMarket.filters.allFilters")}
            {advancedCount > 0 && (
              <span className="rounded-full bg-[#007b78] px-1.5 text-[10px] font-semibold text-white">{advancedCount}</span>
            )}
          </button>

          <div className="ms-auto">
            <ExportMenu onExport={handleExport} isExporting={isExporting} />
          </div>
        </div>

        {isLoading ? (
          <div className="space-y-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-10 w-full" />
            ))}
          </div>
        ) : isError ? (
          <p className="py-12 text-center text-sm text-red-600">{t("readyMarket.table.loadFailed")}</p>
        ) : (
          <>
            <ReadyUnitsTable
              rows={rows}
              selectedIds={selectedIds}
              onSelectAll={(checked) => setSelectedIds(checked ? rows.map((r) => r.id) : [])}
              onSelect={(id, checked) =>
                setSelectedIds((prev) => (checked ? [...prev, id] : prev.filter((x) => x !== id)))
              }
              onAccept={(id) => acceptUnit(id)}
              onReject={(id) => rejectUnit(id)}
              onDelete={setRowToDelete}
              pendingId={pendingId}
            />
            <Pagination
              page={page}
              totalPages={totalPages}
              totalItems={total}
              perPage={perPage}
              currentItemsCount={rows.length}
              onPageChange={(p) => {
                setPage(p);
                setSelectedIds([]);
              }}
              onPerPageChange={(v) => {
                setPerPage(Number(v));
                setPage(1);
                setSelectedIds([]);
              }}
            />
          </>
        )}
      </div>

      {advancedOpen && (
        <AdvancedFiltersModal
          initial={advanced}
          onClose={() => setAdvancedOpen(false)}
          onApply={(next) => {
            setAdvanced(next);
            setPage(1);
            setSelectedIds([]);
            setAdvancedOpen(false);
          }}
        />
      )}

      <ConfirmModal
        isOpen={rowToDelete !== null}
        onClose={() => setRowToDelete(null)}
        onConfirm={() => {
          if (!rowToDelete) return;
          deleteUnit(rowToDelete.id, { onSuccess: () => setRowToDelete(null) });
        }}
        title={t("readyMarket.deleteDialog.title")}
        description={t("readyMarket.deleteDialog.description", { name: rowToDelete?.name || rowToDelete?.unitNumber || "" })}
        confirmText={t("common.delete")}
        variant="destructive"
        isLoading={isDeleting}
      />
    </div>
  );
}
