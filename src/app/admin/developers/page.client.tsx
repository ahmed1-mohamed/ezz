"use client";

import React, { useState, useCallback, Suspense, useMemo } from "react";
import { useRouter, usePathname } from "next/navigation";
import { PageHeader } from "@/components/shared/PageHeader";
import { Pagination } from "@/components/shared/Pagination";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Plus,
  UploadCloud,
  Download,
  FileSpreadsheet,
  FileDown,
  FileText,
  RefreshCw,
} from "lucide-react";
import { toast } from "sonner";
import { getApiErrorMessage } from "@/lib/api-errors";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";

import { DeveloperApiResponse } from "@/features/developers/types";
import { useDevelopers } from "@/features/developers/hooks/useDevelopers";
import { DevelopersTable } from "@/features/developers/components/DevelopersTable";
import { DevelopersLoadingState } from "@/features/developers/components/DevelopersLoadingState";
import { DevelopersFilters } from "@/features/developers/components/DevelopersFilters";
import { DevelopersModals } from "@/features/developers/components/DevelopersModals";
import { TableSettings } from "@/components/table/table-settings";
import { useServerPagination } from "@/hooks/useServerPagination";
import { useTableSettings } from "@/hooks/use-table-settings";
import { useLanguage } from "@/contexts/LanguageContext";

interface DeveloperData {
  developer_id: number;
  name: string;
  email: string;
  phone_number: string;
  website: string;
  logo: string;
  description: string;
  status: string;
  is_top: number;
}

export default function DevelopersPage() {
  const { t } = useLanguage();
  return (
    <Suspense fallback={<div className="p-8 text-center text-gray-500">{t("common.loading")}</div>}>
      <DevelopersPageContent />
    </Suspense>
  );
}

const INITIAL_FILTERS = { status: "all", country: "all" };

function DevelopersPageContent() {
  const { t } = useLanguage();
  const [isExporting, setIsExporting] = useState(false);

  const DEFAULT_COLUMNS = useMemo(
    () => [
      { id: "developer", label: t("developers.columns.developer"), visible: true },
      { id: "country", label: t("developers.columns.country"), visible: true },
      { id: "city", label: t("developers.columns.city"), visible: true },
      { id: "projects", label: t("developers.columns.projects"), visible: true },
      { id: "website", label: t("developers.columns.website"), visible: true },
      { id: "email", label: t("developers.columns.email"), visible: true },
      { id: "contact", label: t("developers.columns.contact"), visible: true },
      { id: "status", label: t("developers.columns.status"), visible: true },
      { id: "actions", label: t("developers.columns.actions"), visible: true },
    ],
    [t]
  );

  const tableSettings = useTableSettings("developers", DEFAULT_COLUMNS);

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

  React.useEffect(() => {
    setPerPage(String(tableSettings.settings.itemsPerPage));
  }, [tableSettings.settings.itemsPerPage, setPerPage]);

  const {
    developersData,
    developers,
    totalDevelopers,
    deleteMutation,
    bulkImportMutation,
    toggleStatusMutation,
  } = useDevelopers(
    page,
    perPage,
    debouncedSearch || undefined,
    filters.status !== "all" ? filters.status : undefined,
    filters.country !== "all" ? filters.country : undefined,
    tableSettings.isInitialized,
  );

  const { isLoading: isQueryLoading, isError, error, refetch } = developersData;
  // Wait for the saved page size so the list is requested once with the right per_page.
  const isLoading = isQueryLoading || !tableSettings.isInitialized;

  const [addModalOpen, setAddModalOpen] = useState(false);
  const [bulkImportModalOpen, setBulkImportModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedDeveloperId, setSelectedDeveloperId] = useState<number | null>(null);
  const [selectedDeveloperData, setSelectedDeveloperData] = useState<DeveloperData | undefined>(undefined);
  const [selectedDevelopers, setSelectedDevelopers] = useState<number[]>([]);

  const totalPages = Math.max(1, Math.ceil(totalDevelopers / perPage));

  const handleSelectAll = useCallback(
    (checked: boolean) => {
      setSelectedDevelopers(checked ? developers.map((d) => d.id) : []);
    },
    [developers],
  );

  const handleSelectDeveloper = useCallback((id: number, checked: boolean) => {
    setSelectedDevelopers((prev) =>
      checked ? [...prev, id] : prev.filter((did) => did !== id),
    );
  }, []);

  const handleToggleStatus = useCallback(
    (id: number, newStatus: boolean) => {
      const status = newStatus ? "active" : "inactive";
      toggleStatusMutation.mutate(
        { id, status },
        {
          onSuccess: () =>
            toast.success(
              newStatus
                ? t("developers.messages.activatedSuccess")
                : t("developers.messages.deactivatedSuccess"),
            ),
          onError: (err) =>
            toast.error(getApiErrorMessage(err, t, t("developers.messages.updateStatusFailed")), {
              id: API_ERROR_TOAST_ID,
            }),
        },
      );
    },
    [toggleStatusMutation, t],
  );

  const router = useRouter();
  const pathname = usePathname();
  const routePrefix = pathname.startsWith("/developer") ? "/developer" : "/admin";

  const handleEditDeveloper = useCallback(
    (id: number) => {
      router.push(`${routePrefix}/developers/${id}/edit`);
    },
    [router, routePrefix],
  );

  const handleDeleteDeveloper = useCallback(
    async (id: number) => {
      const Swal = (await import("sweetalert2")).default;
      const result = await Swal.fire({
        title: t("developers.deleteTitle"),
        text:
          t("developers.deleteConfirm"),
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: t("common.yesDelete"),
        cancelButtonText: t("common.cancel"),
        customClass: {
          popup: "rounded-2xl dark:bg-gray-800 dark:text-white",
          title: "dark:text-white",
          htmlContainer: "dark:text-gray-300",
        },
      });

      if (result.isConfirmed) {
        deleteMutation.mutate(id, {
          onSuccess: () => {
            toast.success(
              t("developers.messages.deletedSuccess"),
            );
          },
          onError: (err) =>
            toast.error(getApiErrorMessage(err, t, t("developers.messages.deleteFailed")), {
              id: API_ERROR_TOAST_ID,
            }),
        });
      }
    },
    [deleteMutation, t],
  );

  // Errors propagate to BulkImportDevelopersModal, which shows them and keeps the file selected.
  const handleBulkImport = useCallback(
    async (file: File) => {
      await bulkImportMutation.mutateAsync(file);
      toast.success(t("developers.messages.importSuccess"));
      setBulkImportModalOpen(false);
    },
    [bulkImportMutation, t],
  );

  const runExport = useCallback(
    async (format: "excel" | "csv" | "pdf"): Promise<void> => {
      if (isExporting) return;
      setIsExporting(true);
      toast.info(
        t("developers.messages.preparingExport"),
        { duration: 3000 },
      );
      try {
        let allExportedDevelopers: any[] = [];
        let currentPage = 1;
        let totalPagesToFetch = 1;
        const batchSize = 100;
        const { AdminDevelopersService } = await import(
          "@/features/developers/services/AdminDevelopersService"
        );

        do {
          const response: any = await AdminDevelopersService.getDevelopersPaginated(
            currentPage,
            batchSize,
            debouncedSearch || undefined,
            filters.status !== "all" ? filters.status : undefined,
            filters.country !== "all" ? filters.country : undefined,
          );

          let batch: DeveloperApiResponse[] = [];
          let currentTotal = 0;

          const rawData = response?.data || response;
          if (Array.isArray(rawData)) {
            batch = rawData;
            totalPagesToFetch = 1;
          } else {
            const nested = rawData as { data?: unknown; total?: number; meta?: any } | undefined;
            if (Array.isArray(nested?.data)) {
              batch = nested.data as DeveloperApiResponse[];
              currentTotal = nested.total ?? nested.meta?.total ?? batch.length;
            } else {
              const doublyNested = nested?.data as { data?: unknown; total?: number } | undefined;
              if (Array.isArray(doublyNested?.data)) {
                batch = doublyNested.data as DeveloperApiResponse[];
                currentTotal = doublyNested.total ?? batch.length;
              } else if (Array.isArray((rawData as any)?.developers)) {
                batch = (rawData as any).developers as DeveloperApiResponse[];
                currentTotal = (rawData as any).total ?? batch.length;
              }
            }
            totalPagesToFetch = currentTotal > 0 ? Math.ceil(currentTotal / batchSize) : 1;
          }

          allExportedDevelopers = [...allExportedDevelopers, ...batch];
          currentPage++;
        } while (currentPage <= totalPagesToFetch);

        if (allExportedDevelopers.length === 0) {
          toast.info(t("developers.messages.noExportData"));
          setIsExporting(false);
          return;
        }

        const exportModule = await import("@/lib/exports/export-developers");
        if (format === "excel") {
          await exportModule.developersExportToExcel(allExportedDevelopers);
        } else if (format === "csv") {
          exportModule.developersExportToCsv(allExportedDevelopers);
        } else if (format === "pdf") {
          await exportModule.developersExportToPDF(allExportedDevelopers);
        }

        toast.success(t("developers.messages.exportSuccess"));
      } catch {
        toast.error(t("developers.messages.exportFailed"));
      } finally {
        setIsExporting(false);
      }
    },
    [debouncedSearch, filters.status, filters.country, isExporting, t]
  );

  const handleExportExcel = useCallback(() => runExport("excel"), [runExport]);
  const handleExportCsv = useCallback(() => runExport("csv"), [runExport]);
  const handleExportPdf = useCallback(() => runExport("pdf"), [runExport]);

  const handleEditClose = (): void => {
    setEditModalOpen(false);
    setSelectedDeveloperId(null);
    setSelectedDeveloperData(undefined);
  };

  return (
    <div className="p-3 sm:p-4 space-y-4 max-w-full overflow-hidden">
      <PageHeader
        title={t("developers.title")}
        totalItems={totalDevelopers}
      >
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 w-full sm:w-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="gap-2 h-9 px-3 sm:px-4 text-xs sm:text-sm font-medium w-full sm:w-auto justify-center border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-neutral-700 shadow-2xs"
                disabled={isExporting}
              >
                <Download className="h-4 w-4 shrink-0" />
                <span className="truncate">{isExporting ? t("developers.exporting") : t("developers.export")}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800">
              <DropdownMenuItem onClick={handleExportExcel} className="gap-2 cursor-pointer dark:hover:bg-neutral-800 dark:text-gray-200">
                <FileSpreadsheet className="h-4 w-4 text-emerald-600" /> Excel
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleExportCsv} className="gap-2 cursor-pointer dark:hover:bg-neutral-800 dark:text-gray-200">
                <FileDown className="h-4 w-4 text-blue-600" /> CSV
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleExportPdf} className="gap-2 cursor-pointer dark:hover:bg-neutral-800 dark:text-gray-200">
                <FileText className="h-4 w-4 text-red-600" /> PDF
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="outline"
            className="gap-2 h-9 px-3 sm:px-4 text-xs sm:text-sm font-medium w-full sm:w-auto justify-center border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-neutral-700 shadow-2xs"
            onClick={() => toast.info(t("developers.messages.syncErpnextInfo"))}
          >
            <RefreshCw className="h-4 w-4 shrink-0" />
            <span className="truncate">{t("developers.syncErpnext")}</span>
          </Button>

          <Button
            variant="outline"
            className="gap-2 h-9 px-3 sm:px-4 text-xs sm:text-sm font-medium w-full sm:w-auto justify-center border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-neutral-700 shadow-2xs"
            onClick={() => setBulkImportModalOpen(true)}
          >
            <UploadCloud className="h-4 w-4 shrink-0" />
            <span className="truncate">{t("developers.import")}</span>
          </Button>

          <Button
            id="create-developer-btn"
            className="bg-teal-600 hover:bg-teal-700 text-white gap-2 h-9 px-3 sm:px-4 text-xs sm:text-sm font-medium w-full sm:w-auto justify-center shadow-2xs"
            onClick={() => router.push(`${routePrefix}/developers/create`)}
          >
            <Plus className="h-4 w-4 shrink-0" />
            <span className="truncate">{t("developers.addDeveloper")}</span>
          </Button>

          <div className="w-full sm:w-auto flex justify-center bg-white dark:bg-neutral-800 rounded-md">
            <TableSettings
              settings={tableSettings}
              onExportExcel={handleExportExcel}
              onExportCsv={handleExportCsv}
              onExportPdf={handleExportPdf}
              isExporting={isExporting}
            />
          </div>
        </div>
      </PageHeader>

      <DevelopersLoadingState
        isLoading={isLoading}
        isError={isError}
        error={error as Error | null}
        onRetry={refetch}
      />

      {!isLoading && !isError && (
        <>
          <div className="w-full">
            <DevelopersFilters
              searchQuery={searchQuery}
              statusFilter={filters.status}
              countryFilter={filters.country}
              onSearchChange={setSearchQuery}
              onStatusChange={(val) => setFilter("status", val)}
              onCountryChange={(val) => setFilter("country", val)}
            />
          </div>

          <DevelopersTable
            settings={tableSettings}
            developers={developers}
            selectedDevelopers={selectedDevelopers}
            onSelectAll={handleSelectAll}
            onSelectDeveloper={handleSelectDeveloper}
            onToggleStatus={handleToggleStatus}
            onEdit={handleEditDeveloper}
            onDelete={handleDeleteDeveloper}
            onImport={() => setBulkImportModalOpen(true)}
          />

          <Pagination
            page={page}
            totalPages={totalPages}
            perPage={perPage}
            totalItems={totalDevelopers}
            currentItemsCount={developers.length}
            onPageChange={setPage}
            onPerPageChange={(val) => {
              setPerPage(val);
              tableSettings.setItemsPerPage(Number(val));
            }}
          />
        </>
      )}

      <DevelopersModals
        addModalOpen={addModalOpen}
        bulkImportModalOpen={bulkImportModalOpen}
        editModalOpen={editModalOpen}
        selectedDeveloperId={selectedDeveloperId}
        selectedDeveloperData={selectedDeveloperData}
        onBulkImport={handleBulkImport}
        onAddClose={() => setAddModalOpen(false)}
        onBulkImportClose={() => setBulkImportModalOpen(false)}
        onEditClose={handleEditClose}
        onEditSuccess={handleEditClose}
      />
    </div>
  );
}