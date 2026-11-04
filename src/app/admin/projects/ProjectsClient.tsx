"use client";

import { useState, useCallback, useMemo, useEffect, Suspense } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Pagination } from "@/components/shared/Pagination";
import { ProjectsLoading } from "@/features/projects/components/ProjectsLoading";
import { ProjectsError } from "@/features/projects/components/ProjectsError";
import { useServerPagination } from "@/hooks/useServerPagination";
import useProjects from "@/features/projects/hooks/useProjects";
import { ProjectsTable } from "@/features/projects/components/ProjectsTable";
import { ProjectsFilters } from "@/features/projects/components/ProjectsFilters";
import { ProjectsPageHeader } from "@/features/projects/components/ProjectsPageHeader";
import { Project } from "@/features/projects/types";
import dynamic from "next/dynamic";
import { toast } from "sonner";
import { AdminProjectsService } from "@/features/projects/services/AdminProjectsService";
import { useTableSettings } from "@/hooks/use-table-settings";
import { useLanguage } from "@/contexts/LanguageContext";
import { getApiErrorMessage } from "@/lib/api-errors";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";

const BulkImportProjectsModal = dynamic(
  () =>
    import("@/components/modals/projects/bulk-import-projects-modal").then(
      (mod) => mod.BulkImportProjectsModal
    ),
  { ssr: false }
);

const DeleteProjectDialog = dynamic(
  () =>
    import("@/features/projects/components/DeleteProjectDialog").then(
      (mod) => mod.DeleteProjectDialog
    ),
  { ssr: false }
);

const INITIAL_FILTERS = {
  status: "all",
  projectType: "all",
  country: "all",
};

export function ProjectsClient() {
  const { t } = useLanguage();
  return (
    <Suspense fallback={<div className="p-8 text-center text-gray-500">{t("common.loading")}</div>}>
      <ProjectsPageContent />
    </Suspense>
  );
}

function ProjectsPageContent() {
  const router = useRouter();
  const pathname = usePathname();
  const routePrefix = pathname.startsWith("/developer") ? "/developer" : "/admin";
  const { t } = useLanguage();
  const [isExporting, setIsExporting] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);

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
    initialPerPage: 10,
    initialFilters: INITIAL_FILTERS,
  });

  const DEFAULT_COLUMNS = useMemo(
    () => [
      { id: "project", label: t("projects.columns.project"), visible: true },
      { id: "developer", label: t("projects.columns.developer"), visible: true },
      { id: "country", label: t("projects.columns.country"), visible: true },
      { id: "units", label: t("projects.columns.propertiesCount"), visible: true },
      { id: "type", label: t("projects.columns.type"), visible: true },
      { id: "price", label: t("projects.columns.price"), visible: true },
      { id: "visibility", label: t("projects.columns.visibility"), visible: true },
      { id: "status", label: t("projects.columns.status"), visible: true },
      { id: "actions", label: t("projects.columns.actions"), visible: true },
    ],
    [t]
  );

  const tableSettings = useTableSettings("projects", DEFAULT_COLUMNS);
  const isPerPageSynced = perPage === tableSettings.settings.itemsPerPage;

  const {
    paginatedProjectsData,
    projects,
    totalProjects,
    deleteProjectMutation,
    toggleActiveMutation,
    toggleFeaturedMutation,
  } = useProjects(
    page,
    perPage,
    debouncedSearch || undefined,
    filters.status !== "all" ? filters.status : undefined,
    filters.projectType !== "all" ? filters.projectType : undefined,
    filters.country !== "all" ? filters.country : undefined,
    // Wait until the URL's perPage matches the saved table setting (synced by the
    // effect below) so the list isn't fetched twice on load (perPage 10, then N).
    isPerPageSynced,
  );

  const { isError, error, refetch } = paginatedProjectsData;
  // Keep showing the loading state while waiting for the perPage sync.
  const isLoading =
    paginatedProjectsData.isLoading ||
    (!isPerPageSynced && paginatedProjectsData.isPending);

  const [selectedProjects, setSelectedProjects] = useState<number[]>([]);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState<number | null>(null);
  const [importModalOpen, setImportModalOpen] = useState(false);
  const [bulkImportProjectId, setBulkImportProjectId] = useState<number | undefined>(undefined);
  const [bulkImportProjectName, setBulkImportProjectName] = useState<string | undefined>(undefined);

  const filteredProjects: Project[] = projects;
  const totalPages = Math.max(1, Math.ceil(totalProjects / perPage));
  const featuredCount = useMemo(
    () => filteredProjects.filter((p) => p.is_favourite).length,
    [filteredProjects]
  );

  const handleImport = useCallback((id?: number, name?: string) => {
    setBulkImportProjectId(id);
    setBulkImportProjectName(name);
    setImportModalOpen(true);
  }, []);

  const handleSelectAll = useCallback(
    (checked: boolean) => {
      setSelectedProjects(checked ? filteredProjects.map((p) => p.id) : []);
    },
    [filteredProjects],
  );

  const handleSelectProject = useCallback((id: number, checked: boolean) => {
    setSelectedProjects((prev) =>
      checked ? [...prev, id] : prev.filter((pid) => pid !== id),
    );
  }, []);

  const handleActiveToggle = useCallback(
    (id: number, isActive: boolean) => {
      toggleActiveMutation.mutate(
        { id, isActive },
        {
          onSuccess: () => {
            toast.success(t("projects.messages.statusUpdateSuccess"));
          },
          onError: (err) => {
            toast.error(getApiErrorMessage(err, t, t("projects.messages.statusUpdateFailed")), {
              id: API_ERROR_TOAST_ID,
            });
          },
        },
      );
    },
    [toggleActiveMutation, t],
  );

  const handleToggleFavorite = useCallback(
    (id: number, isFeatured: boolean) => {
      toggleFeaturedMutation.mutate(
        { id, isFeatured },
        {
          onSuccess: () => {
            toast.success(
              isFeatured
                ? t("projects.messages.featuredSuccess")
                : t("projects.messages.unfeaturedSuccess")
            );
          },
          onError: (err) => {
            toast.error(getApiErrorMessage(err, t, t("projects.messages.featuredFailed")), {
              id: API_ERROR_TOAST_ID,
            });
          },
        }
      );
    },
    [toggleFeaturedMutation, t]
  );

  const handleEditClick = useCallback(
    (id: number) => {
      router.push(`${routePrefix}/projects/${id}/edit`);
    },
    [router, routePrefix],
  );

  const handleDeleteClick = useCallback((id: number) => {
    setProjectToDelete(id);
    setDeleteDialogOpen(true);
  }, []);

  const handleSyncERPNext = useCallback(async () => {
    if (isSyncing) return;
    setIsSyncing(true);
    try {
      await AdminProjectsService.syncERPNext();
      toast.success(t("projects.messages.syncErpnextSuccess"));
      refetch();
    } catch (error) {
      toast.error(getApiErrorMessage(error, t, t("projects.messages.syncErpnextFailed")), {
        id: API_ERROR_TOAST_ID,
      });
    } finally {
      setIsSyncing(false);
    }
  }, [isSyncing, refetch, t]);

  const runExport = useCallback(
    async (format: "excel" | "csv" | "pdf") => {
      if (isExporting) return;
      setIsExporting(true);

      try {
        let allExportedProjects: any[] = [];
        let currentPage = 1;
        const batchSize = 100;
        let totalPagesToFetch = 1;

        do {
          const rawData = await AdminProjectsService.getProjectsPaginated(
            currentPage,
            batchSize,
            debouncedSearch || undefined,
            filters.status !== "all" ? filters.status : undefined,
            filters.projectType !== "all" ? filters.projectType : undefined,
          );

          let batch: any[] = [];
          let currentTotal = 0;

          if (Array.isArray(rawData)) {
            batch = rawData;
            currentTotal = rawData.length;
          } else if (rawData && typeof rawData === "object") {
            const nested = (rawData as { data?: unknown; total?: number; meta?: any } | undefined);
            if (Array.isArray(nested?.data)) {
              batch = nested.data;
              currentTotal = nested.total ?? nested.meta?.total ?? batch.length;
            } else {
              const doublyNested = (nested?.data as { data?: unknown; total?: number } | undefined);
              if (Array.isArray(doublyNested?.data)) {
                batch = doublyNested.data;
                currentTotal = doublyNested.total ?? batch.length;
              }
            }

            if (currentTotal > 0) {
              totalPagesToFetch = Math.ceil(currentTotal / batchSize);
            } else {
              totalPagesToFetch = 1;
            }
          }

          allExportedProjects = [...allExportedProjects, ...batch];
          currentPage++;
        } while (currentPage <= totalPagesToFetch);

        if (allExportedProjects.length === 0) {
          toast.info(t("projects.messages.exportNoData"));
          setIsExporting(false);
          return;
        }

        const exportModule = await import("@/lib/exports/export-projects");
        if (format === "excel") {
          await exportModule.projectsExportToExcel(allExportedProjects);
        } else if (format === "csv") {
          exportModule.projectsExportToCsv(allExportedProjects);
        } else if (format === "pdf") {
          await exportModule.projectsExportToPDF(allExportedProjects);
        }

        toast.success(t("projects.messages.exportSuccess"));
      } catch (error) {
        toast.error(getApiErrorMessage(error, t, t("projects.messages.exportFailed")), {
          id: API_ERROR_TOAST_ID,
        });
      } finally {
        setIsExporting(false);
      }
    },
    [debouncedSearch, filters.status, filters.projectType, isExporting, t]
  );

  const handleExportExcel = useCallback(() => runExport("excel"), [runExport]);
  const handleExportCsv = useCallback(() => runExport("csv"), [runExport]);
  const handleExportPdf = useCallback(() => runExport("pdf"), [runExport]);

  const handleConfirmDelete = useCallback(() => {
    if (!projectToDelete || deleteProjectMutation.isPending) return;
    deleteProjectMutation.mutate(projectToDelete, {
      onSuccess: () => {
        toast.success(t("projects.messages.deleteSuccess"));
        setDeleteDialogOpen(false);
        setProjectToDelete(null);
        setSelectedProjects((prev) =>
          prev.filter((id) => id !== projectToDelete),
        );
      },
      onError: (error) =>
        toast.error(getApiErrorMessage(error, t, t("projects.messages.deleteFailed")), {
          id: API_ERROR_TOAST_ID,
        }),
    });
  }, [projectToDelete, deleteProjectMutation, t]);

  useEffect(() => {
    setPerPage(String(tableSettings.settings.itemsPerPage));
  }, [tableSettings.settings.itemsPerPage, setPerPage]);

  return (
    <div className="p-3 sm:p-4 space-y-4 max-w-full overflow-hidden">
      <ProjectsPageHeader
        totalProjects={totalProjects}
        featuredCount={featuredCount}
        isExporting={isExporting}
        isSyncing={isSyncing}
        onExportExcel={handleExportExcel}
        onExportCsv={handleExportCsv}
        onExportPdf={handleExportPdf}
        onImportClick={() => setImportModalOpen(true)}
        onSyncClick={handleSyncERPNext}
        onCreateClick={() => router.push(`${routePrefix}/projects/create`)}
        tableSettings={tableSettings}
      />

      {isLoading ? (
        <ProjectsLoading />
      ) : isError ? (
        <ProjectsError error={error} onRetry={refetch} />
      ) : (
        <>
          <div className="w-full">
            <ProjectsFilters
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              statusFilter={filters.status}
              onStatusChange={(val) => setFilter("status", val)}
              projectTypeFilter={filters.projectType}
              onProjectTypeChange={(val) => setFilter("projectType", val)}
              countryFilter={filters.country}
              onCountryChange={(val) => setFilter("country", val)}
            />
          </div>

          <ProjectsTable
            settings={tableSettings}
            projects={filteredProjects}
            selectedProjects={selectedProjects}
            onSelectAll={handleSelectAll}
            onSelectProject={handleSelectProject}
            onActiveToggle={handleActiveToggle}
            togglingActiveId={
              toggleActiveMutation.isPending ? toggleActiveMutation.variables?.id : undefined
            }
            onToggleFavorite={handleToggleFavorite}
            onEdit={handleEditClick}
            onDelete={handleDeleteClick}
            onImport={handleImport}
          />

          <Pagination
            page={page}
            totalPages={totalPages}
            perPage={perPage}
            totalItems={totalProjects}
            currentItemsCount={filteredProjects.length}
            onPageChange={setPage}
            onPerPageChange={(val) => {
              setPerPage(val);
              tableSettings.setItemsPerPage(Number(val));
            }}
          />
        </>
      )}

      <DeleteProjectDialog
        isOpen={deleteDialogOpen}
        onClose={setDeleteDialogOpen}
        onConfirm={handleConfirmDelete}
        isPending={deleteProjectMutation.isPending}
      />

      {importModalOpen && (
        <BulkImportProjectsModal
          isOpen={importModalOpen}
          projectId={bulkImportProjectId}
          projectName={bulkImportProjectName}
          onClose={() => {
            setImportModalOpen(false);
            setBulkImportProjectId(undefined);
            setBulkImportProjectName(undefined);
          }}
        />
      )}
    </div>
  );
}