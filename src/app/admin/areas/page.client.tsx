"use client";

import { useState, useCallback, useEffect, useMemo } from "react";
import { useQueryClient } from "@tanstack/react-query";
import useDashboardAdminAreasData from "@/hooks/use-dashboardAdminAreas";
import { useServerPagination } from "@/hooks/useServerPagination";
import { Pagination } from "@/components/shared/Pagination";
import { AdminAreasService } from "@/data/api-client";
import { AreasHeader } from "./components/AreasHeader";
import { AreasFilters } from "./components/AreasFilters";
import { AreasTable, Area } from "./components/AreasTable";
import { areasExportToExcel, areasExportToPDF } from "@/lib/handle-export";
import { toast } from "sonner";
import { useTableSettings } from "@/hooks/use-table-settings";
import { useLanguage } from "@/contexts/LanguageContext";
import { AreasModals } from "./components/AreasModals";

export default function AreasPage() {
  const { t } = useLanguage();
  const queryClient = useQueryClient();

  const DEFAULT_COLUMNS = [
    { id: "areaName", label: t("areas.columns.areaName"), visible: true },
    { id: "description", label: t("areas.columns.description"), visible: true },
    { id: "created", label: t("areas.columns.created"), visible: true },
    { id: "status", label: t("areas.columns.status"), visible: true },
    { id: "actions", label: t("areas.columns.actions"), visible: true },
  ];

  const tableSettings = useTableSettings("areas", DEFAULT_COLUMNS);

  const INITIAL_FILTERS = { status: "all" };

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

  useEffect(() => {
    setPerPage(String(tableSettings.settings.itemsPerPage));
  }, [tableSettings.settings.itemsPerPage, setPerPage]);

  const [selectedAreas, setSelectedAreas] = useState<number[]>([]);
  const [areaStatuses, setAreaStatuses] = useState<Record<number, boolean>>({});

  const [isAddAreaModalOpen, setIsAddAreaModalOpen] = useState(false);
  const [viewAreaModalOpen, setViewAreaModalOpen] = useState(false);
  const [areaToView, setAreaToView] = useState<Area | null>(null);
  const [editAreaModalOpen, setEditAreaModalOpen] = useState(false);
  const [areaToEdit, setAreaToEdit] = useState<number | null>(null);
  const [areaToEditData, setAreaToEditData] = useState<Area | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [areaToDelete, setAreaToDelete] = useState<number | null>(null);

  const {
    areasData,
    areas,
    totalAreas,
    deleteAreaMutation,
  } = useDashboardAdminAreasData(
    page,
    Number(perPage),
    debouncedSearch || undefined,
    filters.status !== "all" ? filters.status : undefined,
    // Wait for the stored page size so the first request already uses it.
    tableSettings.isInitialized,
  );

  const { isError, error, refetch } = areasData;
  const isLoading = areasData.isLoading || !tableSettings.isInitialized;

  const filteredAreas = useMemo(() => {
    return areas.filter((area) => {
      const matchesSearch = !debouncedSearch || area.area_name.toLowerCase().includes(debouncedSearch.toLowerCase());

      let matchesStatus = true;
      if (filters.status !== "all") {
        const isActive = areaStatuses[area.area_id] ?? area.status;
        matchesStatus = filters.status === "active" ? isActive : !isActive;
      }

      return matchesSearch && matchesStatus;
    });
  }, [areas, debouncedSearch, filters.status, areaStatuses]);

  const totalItemsCount = areas.length > Number(perPage) ? filteredAreas.length : totalAreas;
  const totalPages = Math.max(1, Math.ceil(totalItemsCount / Number(perPage)));

  const paginatedAreas = useMemo(() => {
    if (areas.length > Number(perPage)) {
      const start = (page - 1) * Number(perPage);
      return filteredAreas.slice(start, start + Number(perPage));
    }
    return filteredAreas;
  }, [filteredAreas, areas.length, page, perPage]);

  const handleExport = async (format: "pdf" | "xlsx" | "excel") => {
    toast.info(t("areas.messages.preparingExport"), { duration: 3000 });
    try {
      let allExportedAreas: any[] = [];
      let currentPage = 1;
      let totalPagesToFetch = 1;
      const batchSize = 100;

      do {
        const response = await AdminAreasService.getAreas(
          currentPage,
          batchSize,
          debouncedSearch || undefined,
          filters.status !== "all" ? filters.status : undefined,
        );
        let batch: any[] = [];
        let currentTotal = 0;

        const rawData = (response as any)?.data?.data?.data || (response as any)?.data?.data || (response as any)?.data || response || [];

        if (Array.isArray(rawData)) {
          batch = rawData;
          totalPagesToFetch = 1;
        } else {
          const nested = (response as any)?.data as { data?: unknown; total?: number; meta?: any } | undefined;
          if (Array.isArray(nested?.data)) {
            batch = nested.data as any[];
            currentTotal = nested.total ?? nested.meta?.total ?? batch.length;
          } else {
            const doublyNested = (nested?.data as { data?: unknown; total?: number } | undefined);
            if (Array.isArray(doublyNested?.data)) {
              batch = doublyNested.data as any[];
              currentTotal = doublyNested.total ?? batch.length;
            }
          }
          if (currentTotal > 0) {
            totalPagesToFetch = Math.ceil(currentTotal / batchSize);
          } else {
            totalPagesToFetch = 1;
          }
        }

        allExportedAreas = [...allExportedAreas, ...batch];
        currentPage++;
      } while (currentPage <= totalPagesToFetch);

      const formattedToExport = allExportedAreas.map((area: any) => ({
        area_id: area.id || area.dld_area_id,
        area_name: area.dld_area_name || area.area_name || "N/A",
        latitude: area.latitude || "",
        longitude: area.longitude || "",
        description: area.description || "",
        created_at: area.created_at || "",
        updated_at: area.updated_at || "",
        deleted_at: area.deleted_at || null,
        dld_area_id: area.dld_area_id,
        locations_count: area.locations_count,
        projects_count: area.projects_count,
        status: !area.deleted_at,
      }));

      const exportData = formattedToExport;

      if (exportData.length === 0) {
        toast.info(t("areas.messages.noExportData"));
        return;
      }

      if (format === "pdf") {
        areasExportToPDF(exportData);
      } else {
        areasExportToExcel(exportData);
      }
      toast.success(t("areas.messages.exportSuccess"));
    } catch (error) {
      toast.error(t("areas.messages.exportFailed"));
    }
  };

  useEffect(() => {
    if (areas.length > 0) {
      const statusState = areas.reduce(
        (acc, area) => {
          acc[area.area_id] = area.status;
          return acc;
        },
        {} as Record<number, boolean>
      );
      setAreaStatuses((prev) => {
        const isDifferent =
          Object.keys(statusState).length !== Object.keys(prev).length ||
          Object.keys(statusState).some(
            (key) => statusState[Number(key)] !== prev[Number(key)]
          );
        return isDifferent ? statusState : prev;
      });
    }
  }, [areas]);

  const handleSelectAll = useCallback(
    (checked: boolean) => {
      if (checked) {
        setSelectedAreas(areas.map((a) => a.area_id));
      } else {
        setSelectedAreas([]);
      }
    },
    [areas],
  );

  const handleSelectArea = useCallback(
    (area_id: number, checked: boolean) => {
      if (checked) {
        setSelectedAreas((prev) => [...prev, area_id]);
      } else {
        setSelectedAreas((prev) => prev.filter((aid) => aid !== area_id));
      }
    },
    [],
  );

  const handleToggleStatus = useCallback(
    (area_id: number) => {
      setAreaStatuses((prev) => ({
        ...prev,
        [area_id]: !prev[area_id],
      }));
      queryClient.invalidateQueries({ queryKey: ["areas"] });
    },
    [queryClient],
  );

  const handleDeleteArea = useCallback((id: number | null) => {
    if (id === null) return;
    setAreaToDelete(id);
    setDeleteDialogOpen(true);
  }, []);

  const confirmDeleteArea = useCallback(() => {
    if (areaToDelete !== null) {
      deleteAreaMutation.mutate(areaToDelete, {
        onSuccess: () => {
          setDeleteDialogOpen(false);
          setAreaToDelete(null);
        },
      });
    }
  }, [areaToDelete, deleteAreaMutation]);

  return (
    <div className="p-4 px-3 space-y-4 max-w-full overflow-hidden">
      <AreasHeader
        totalAreas={totalItemsCount}
        onAddArea={() => setIsAddAreaModalOpen(true)}
        tableSettings={tableSettings}
        onExportExcel={() => handleExport("excel")}
        onExportPdf={() => handleExport("pdf")}
      />

      <AreasFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        statusFilter={filters.status}
        setStatusFilter={(val) => setFilter("status", val)}
      />

      <AreasTable
        settings={tableSettings}
        areas={paginatedAreas}
        isLoading={isLoading}
        isError={isError}
        error={error}
        selectedAreas={selectedAreas}
        areaStatuses={areaStatuses}
        onRetry={() => refetch()}
        onSelectAll={handleSelectAll}
        onSelectArea={handleSelectArea}
        onToggleStatus={handleToggleStatus}
        onView={(area) => {
          setAreaToView(area);
          setViewAreaModalOpen(true);
        }}
        onEdit={(area) => {
          setAreaToEdit(area.area_id);
          setAreaToEditData(area);
          setEditAreaModalOpen(true);
        }}
        onDelete={(id) => handleDeleteArea(id)}
      />

      {!isLoading && !isError && (
        <Pagination
          page={page}
          totalPages={totalPages}
          perPage={Number(perPage)}
          totalItems={totalItemsCount}
          currentItemsCount={paginatedAreas.length}
          onPageChange={setPage}
          onPerPageChange={(val) => {
            setPerPage(val);
            tableSettings.setItemsPerPage(Number(val));
          }}
        />
      )}

      <AreasModals
        isAddAreaModalOpen={isAddAreaModalOpen}
        setIsAddAreaModalOpen={setIsAddAreaModalOpen}
        viewAreaModalOpen={viewAreaModalOpen}
        setViewAreaModalOpen={setViewAreaModalOpen}
        editAreaModalOpen={editAreaModalOpen}
        setEditAreaModalOpen={setEditAreaModalOpen}
        deleteDialogOpen={deleteDialogOpen}
        setDeleteDialogOpen={setDeleteDialogOpen}
        areaToDelete={areaToDelete}
        setAreaToDelete={setAreaToDelete}
        areaToView={areaToView}
        setAreaToView={setAreaToView}
        areaToEdit={areaToEdit}
        setAreaToEdit={setAreaToEdit}
        areaToEditData={areaToEditData}
        setAreaToEditData={setAreaToEditData}
        areas={areas}
        deleteAreaMutation={deleteAreaMutation}
        handleDeleteArea={handleDeleteArea}
        confirmDeleteArea={confirmDeleteArea}
        t={t}
      />
    </div>
  );
}