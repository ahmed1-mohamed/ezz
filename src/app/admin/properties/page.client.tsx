"use client";

import { useState, useCallback, useMemo, Suspense } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Pagination } from "@/components/shared/Pagination";
import { toast } from "sonner";
import { getApiErrorMessage } from "@/lib/api-errors";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import { useServerPagination } from "@/hooks/useServerPagination";
import useProperties from "@/features/properties/hooks/useProperties";
import { PropertiesTable } from "@/features/properties/components/PropertiesTable";
import { PropertiesFilters } from "@/features/properties/components/PropertiesFilters";
import { PropertiesPageHeader } from "@/features/properties/components/PropertiesPageHeader";
import { PropertiesLoadingSkeleton } from "@/features/properties/components/PropertiesLoadingSkeleton";
import { PropertiesErrorState } from "@/features/properties/components/PropertiesErrorState";
import { PropertiesDeleteDialog } from "@/features/properties/components/PropertiesDeleteDialog";
import { AdminPropertiesService } from "@/features/properties/services/AdminPropertiesService";
import { useTableSettings } from "@/hooks/use-table-settings";
import dynamic from "next/dynamic";
import { useLanguage } from "@/contexts/LanguageContext";

const BulkImportPropertiesModal = dynamic(
  () =>
    import("@/components/modals/properties/bulk-import-properties-modal").then(
      (mod) => mod.BulkImportPropertiesModal,
    ),
  { ssr: false },
);

const INITIAL_FILTERS = {
  type: "all",
  status: "all",
  project: "all",
};

async function fetchAllProperties(apiFilters: Record<string, unknown>) {
  const batchSize = 100;
  let all: unknown[] = [];
  let currentPage = 1;
  let totalPages = 1;

  do {
    const response = await AdminPropertiesService.getProperties({
      page: currentPage,
      per_page: batchSize,
      ...(apiFilters as any),
    });

    const rawData = (response as any)?.data || response;
    let batch: unknown[] = [];
    let total = 0;

    if (Array.isArray(rawData)) {
      batch = rawData;
    } else {
      const nested = rawData as { data?: unknown; total?: number; meta?: any };
      if (Array.isArray(nested?.data)) {
        batch = nested.data;
        total = nested.total ?? nested.meta?.total ?? 0;
      } else {
        const dn = nested?.data as { data?: unknown; total?: number } | undefined;
        if (Array.isArray(dn?.data)) {
          batch = dn.data;
          total = dn.total ?? 0;
        }
      }
      if (total > 0) totalPages = Math.ceil(total / batchSize);
    }

    all = [...all, ...batch];
    currentPage++;
  } while (currentPage <= totalPages);

  return all;
}

export default function PropertiesPage() {
  const { t } = useLanguage();
  return (
    <Suspense fallback={<div className="p-8 text-center">{t("common.loading")}</div>}>
      <PropertiesPageContent />
    </Suspense>
  );
}

function PropertiesPageContent() {
  const router = useRouter();
  const pathname = usePathname();
  const routePrefix = pathname?.startsWith("/developer") ? "/developer" : "/admin";
  const { t } = useLanguage();
  const [isExporting, setIsExporting] = useState(false);

  const DEFAULT_COLUMNS = useMemo(
    () => [

      { id: "propertyName", label: t("properties.columns.propertyName"), visible: true },
      { id: "unitNumber", label: t("properties.columns.unitNumber"), visible: true },
      { id: "type", label: t("properties.columns.type"), visible: true },
      { id: "area", label: t("properties.columns.location"), visible: true },
      { id: "size", label: t("properties.columns.size"), visible: true },
      { id: "price", label: t("properties.columns.price"), visible: true },
      { id: "ownerName", label: t("properties.columns.ownerName"), visible: true },
      { id: "status", label: t("properties.columns.status"), visible: true },
      { id: "listingStatus", label: t("properties.columns.listingStatus"), visible: true },
      { id: "import", label: t("properties.columns.import"), visible: true },
      { id: "actions", label: t("properties.columns.actions"), visible: true },
    ],
    [t],
  );

  const tableSettings = useTableSettings("properties", DEFAULT_COLUMNS);

  const {
    page,
    perPage,
    searchQuery,
    debouncedSearch,
    filters,
    setPage,
    setPerPage,
    setSearchQuery,
    setFilter,
  } = useServerPagination({
    initialPage: 1,
    initialPerPage: tableSettings.settings.itemsPerPage,
    initialFilters: INITIAL_FILTERS,
  });

  const apiFilters = useMemo(
    () => ({
      search: debouncedSearch,
      status: filters.status !== "all" ? filters.status : undefined,
      property_type_id:
        filters.type !== "all" ? Number(filters.type) : undefined,
      project_id:
        filters.project !== "all" ? Number(filters.project) : undefined,
    }),
    [debouncedSearch, filters],
  );

  const {
    properties,
    totalProperties,
    isLoading: isQueryLoading,
    isError,
    error,
    refetch,
    deletePropertyMutation,
  } = useProperties(page, perPage, apiFilters, tableSettings.isInitialized);
  // Wait for the saved page size so the list is requested once with the right per_page.
  const isLoading = isQueryLoading || !tableSettings.isInitialized;

  const [selectedProperties, setSelectedProperties] = useState<number[]>([]);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [propertyToDelete, setPropertyToDelete] = useState<number | null>(null);
  const [importModalOpen, setImportModalOpen] = useState(false);

  const totalPages = Math.max(1, Math.ceil(totalProperties / perPage));

  const handleSelectAll = useCallback(
    (checked: boolean) =>
      setSelectedProperties(checked ? properties.map((p) => p.id) : []),
    [properties],
  );

  const handleSelectProperty = useCallback(
    (id: number, checked: boolean) =>
      setSelectedProperties((prev) =>
        checked ? [...prev, id] : prev.filter((pid) => pid !== id),
      ),
    [],
  );

  const handleEditClick = useCallback(
    (id: number) => router.push(`${routePrefix}/properties/${id}/edit`),
    [router, routePrefix],
  );

  const handleDeleteClick = useCallback((id: number) => {
    setPropertyToDelete(id);
    setDeleteDialogOpen(true);
  }, []);

  const handleConfirmDelete = useCallback(() => {
    if (!propertyToDelete) return;
    deletePropertyMutation.mutate(propertyToDelete, {
      onSuccess: () => {
        toast.success(t("properties.messages.deleteSuccess"));
        setDeleteDialogOpen(false);
        setPropertyToDelete(null);
        setSelectedProperties((prev) => prev.filter((id) => id !== propertyToDelete));
      },
      onError: (error) =>
        toast.error(getApiErrorMessage(error, t, t("properties.messages.deleteFailed")), {
          id: API_ERROR_TOAST_ID,
        }),
    });
  }, [propertyToDelete, deletePropertyMutation, t]);

  const runExport = useCallback(
    async (format: "excel" | "csv" | "pdf") => {
      setIsExporting(true);
      toast.info(t("properties.messages.exportPreparing"), { duration: 3000 });
      try {
        const all = await fetchAllProperties(apiFilters);
        if (!all.length) {
          toast.info(t("properties.messages.exportNoData"));
          return;
        }
        if (format === "excel") {
          const { propertiesExportToExcel } = await import(
            "@/lib/exports/export-properties"
          );
          await propertiesExportToExcel(all);
        } else if (format === "csv") {
          const { propertiesExportToCsv } = await import(
            "@/lib/exports/export-properties"
          );
          propertiesExportToCsv(all);
        } else {
          const { propertiesExportToPdf } = await import(
            "@/lib/exports/export-properties"
          );
          await propertiesExportToPdf(all);
        }
        toast.success(t("properties.messages.exportSuccess"));
      } catch {
        toast.error(t("properties.messages.exportFailed"));
      } finally {
        setIsExporting(false);
      }
    },
    [apiFilters, t],
  );

  const handleExportExcel = useCallback(() => runExport("excel"), [runExport]);
  const handleExportCsv = useCallback(() => runExport("csv"), [runExport]);
  const handleExportPdf = useCallback(() => runExport("pdf"), [runExport]);

  return (
    <div className="p-3 sm:p-4 space-y-4 max-w-full overflow-hidden">
      <PropertiesPageHeader
        totalProperties={totalProperties}
        isExporting={isExporting}
        onExportExcel={handleExportExcel}
        onExportCsv={handleExportCsv}
        onExportPdf={handleExportPdf}
        onImportClick={() => setImportModalOpen(true)}
        onSyncClick={() => {
          refetch();
          toast.success(t("properties.messages.erpSyncInitiated"));
        }}
        onCreateClick={() => router.push(`${routePrefix}/properties/create`)}
        tableSettings={tableSettings}
      />

      {isLoading && <PropertiesLoadingSkeleton />}

      {isError && !isLoading && (
        <PropertiesErrorState error={error} onRetry={() => refetch()} />
      )}

      {!isLoading && !isError && (
        <>
          <div className="w-full">
            <PropertiesFilters
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              typeFilter={filters.type}
              onTypeChange={(val) => setFilter("type", val)}
              statusFilter={filters.status}
              onStatusChange={(val) => setFilter("status", val)}
              projectFilter={filters.project}
              onProjectChange={(val) => setFilter("project", val)}
            />
          </div>

          <div className="overflow-x-auto -mx-3 px-3 sm:mx-0 sm:px-0">
            <PropertiesTable
              settings={tableSettings}
              properties={properties}
              selectedProperties={selectedProperties}
              onSelectAll={handleSelectAll}
              onSelectProperty={handleSelectProperty}
              onEdit={handleEditClick}
              onDelete={handleDeleteClick}
              onImport={() => setImportModalOpen(true)}
            />
          </div>

          <Pagination
            page={page}
            totalPages={totalPages}
            perPage={perPage}
            totalItems={totalProperties}
            currentItemsCount={properties.length}
            onPageChange={setPage}
            onPerPageChange={(val) => {
              setPerPage(val);
              tableSettings.setItemsPerPage(Number(val));
            }}
          />
        </>
      )}

      <PropertiesDeleteDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        onConfirm={handleConfirmDelete}
        isDeleting={deletePropertyMutation.isPending}
      />

      {importModalOpen && (
        <BulkImportPropertiesModal
          isOpen={importModalOpen}
          onClose={() => setImportModalOpen(false)}
          propertiesData={properties || []}
        />
      )}
    </div>
  );
}