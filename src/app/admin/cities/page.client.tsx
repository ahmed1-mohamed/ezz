"use client";

import { useState, useCallback, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertCircle } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { getApiErrorMessage } from "@/lib/api-errors";
import useDashboardAdminCitiesData from "@/hooks/use-dashboardAdminCities";
import { useTableSettings } from "@/hooks/use-table-settings";
import { useDebounce } from "@/hooks/useDebounce";
import { CitiesHeader } from "./components/CitiesHeader";
import { CitiesFilters } from "./components/CitiesFilters";
import { CitiesTable } from "./components/CitiesTable";
import { Pagination } from "@/components/shared/Pagination";
import { CitiesModals } from "./components/CitiesModals";

interface CityApiResponse {
  id: number;
  name: string;
  area_name: string;
  country_name: string;
  locations_count: number;
  projects_count: number;
  created_at: string;
  updated_at: string;
  status: boolean;
}

interface City {
  id: number;
  name: string;
  areaName: string;
  countryName: string;
  locationsCount: number;
  projectsCount: number;
  createdAt: string;
  updatedAt: string;
  status: boolean;
}

interface CitiesPageProps {
  initialPage?: number;
  itemsPerPage?: number;
}

export default function CitiesPage({
  initialPage = 1,
  itemsPerPage = 10,
}: CitiesPageProps) {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebounce(searchQuery);
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [selectedCities, setSelectedCities] = useState<number[]>([]);
  const [selectedCityId, setSelectedCityId] = useState<number | null>(null);
  const [cityVisibility, setCityVisibility] = useState<Record<number, boolean>>({});
  const [isAddCityModalOpen, setIsAddCityModalOpen] = useState(false);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [cityToDelete, setCityToDelete] = useState<number | null>(null);
  const [isExporting, setIsExporting] = useState(false);

  const DEFAULT_COLUMNS = useMemo(() => [
    { id: "name", label: t("cities.columns.name"), visible: true },
    { id: "area", label: t("cities.columns.area"), visible: true },
    { id: "country", label: t("cities.columns.country"), visible: true },
    { id: "locationsCount", label: t("cities.columns.locationsCount"), visible: true },
    { id: "projectsCount", label: t("cities.columns.projectsCount"), visible: true },
    { id: "created", label: t("cities.columns.created"), visible: true },
    { id: "status", label: t("cities.columns.status"), visible: true },
    { id: "import", label: t("cities.columns.import"), visible: true },
    { id: "actions", label: t("cities.columns.actions"), visible: true },
  ], [t]);

  const tableSettings = useTableSettings("cities", DEFAULT_COLUMNS);

  const {
    paginatedCitiesData,
    createCityMutation,
    deleteCityMutation,
    updateCityMutation,
  } = useDashboardAdminCitiesData(currentPage, itemsPerPage, debouncedSearch);

  const { data, isLoading, isError, error, isFetching, refetch } = paginatedCitiesData;

  const rawData = data as { data?: { data?: CityApiResponse[]; total?: number } } | undefined;
  const itemsArray: CityApiResponse[] = rawData?.data?.data ?? [];

  const cities: City[] = useMemo(() => itemsArray.map((city) => ({
    id: city.id,
    name: city.name || t("common.na"),
    areaName: city.area_name || t("common.na"),
    countryName: city.country_name || t("common.na"),
    locationsCount: city.locations_count || 0,
    projectsCount: city.projects_count || 0,
    createdAt: city.created_at || new Date().toISOString(),
    updatedAt: city.updated_at || new Date().toISOString(),
    status: city.status ?? true,
  })), [itemsArray, t]);

  const totalCities = rawData?.data?.total ?? 0;
  const totalPages = Math.ceil(Number(totalCities) / itemsPerPage);

  const handleExportExcel = useCallback(async () => {
    try {
      setIsExporting(true);
      if (itemsArray.length === 0) {
        toast.info(t("cities.messages.noExportData"));
        return;
      }
      toast.success(t("cities.messages.exportPreparing"));
      const { citiesExportToExcel } = await import("@/lib/exports/export-cities");
      citiesExportToExcel(itemsArray);
      toast.success(t("cities.messages.exportSuccess"));
    } catch (error) {
      console.error("Export error:", error);
      toast.error(t("cities.messages.exportFailed"));
    } finally {
      setIsExporting(false);
    }
  }, [itemsArray, t]);

  const handleExportPdf = useCallback(async () => {
    try {
      setIsExporting(true);
      if (itemsArray.length === 0) {
        toast.info(t("cities.messages.noExportData"));
        return;
      }
      toast.success(t("cities.messages.exportPreparing"));
      const { citiesExportToPDF } = await import("@/lib/exports/export-cities");
      citiesExportToPDF(itemsArray);
      toast.success(t("cities.messages.exportSuccess"));
    } catch (error) {
      console.error("Export error:", error);
      toast.error(t("cities.messages.exportFailed"));
    } finally {
      setIsExporting(false);
    }
  }, [itemsArray, t]);

  const handleViewCity = useCallback((city: City) => {
    setSelectedCityId(city.id);
    setIsViewModalOpen(true);
  }, []);

  const handleEditCity = useCallback((id: number) => {
    setSelectedCityId(id);
    setIsEditModalOpen(true);
  }, []);

  const handleDeleteCity = useCallback((id: number) => {
    setCityToDelete(id);
    setDeleteDialogOpen(true);
  }, []);

  useEffect(() => {
    if (itemsArray.length > 0) {
      const visibilityState = itemsArray.reduce(
        (acc: Record<number, boolean>, item: CityApiResponse) => ({
          ...acc,
          [item.id]: item.status,
        }),
        {},
      );
      setCityVisibility(visibilityState);
    }
  }, [itemsArray]);

  const handleSelectAll = useCallback(
    (checked: boolean) => {
      setSelectedCities(checked ? cities.map((c) => c.id) : []);
    },
    [cities],
  );

  const handleSelectCity = useCallback(
    (id: number, checked: boolean) => {
      setSelectedCities((prev) =>
        checked ? [...prev, id] : prev.filter((cid) => cid !== id),
      );
    },
    [],
  );

  const toggleVisibility = useCallback((id: number) => {
    setCityVisibility((prev) => ({ ...prev, [id]: !prev[id] }));
    toast.success(t("cities.messages.statusUpdated"));
  }, [t]);

  const handlePageChange = useCallback(
    (page: number) => {
      if (page >= 1 && page <= totalPages) setCurrentPage(page);
    },
    [totalPages],
  );

  const handleRetry = useCallback(() => refetch(), [refetch]);

  const selectedCity = useMemo(() => cities.find((c) => c.id === selectedCityId) ?? null, [cities, selectedCityId]);

  return (
    <div className="p-4 px-3 space-y-4 max-w-full overflow-hidden">
      <CitiesHeader
        totalCities={totalCities}
        onAddClick={() => setIsAddCityModalOpen(true)}
        tableSettings={tableSettings}
        onExportExcel={handleExportExcel}
        onExportPdf={handleExportPdf}
        isExporting={isExporting}
      />

      <CitiesFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      {isLoading && (
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Skeleton className="h-10 w-[200px]" />
            <Skeleton className="h-10 w-[120px]" />
          </div>
          <div className="rounded-lg border border-gray-200 bg-white">
            <div className="p-4 space-y-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex items-center gap-4">
                  <Skeleton className="h-4 w-4" />
                  <Skeleton className="h-4 w-[100px]" />
                  <Skeleton className="h-4 w-[100px]" />
                  <Skeleton className="h-4 w-[60px]" />
                  <Skeleton className="h-4 w-[80px]" />
                  <Skeleton className="h-4 w-[70px]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {isError && !isLoading && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-red-500" />
            <p className="text-sm text-red-800">
              <strong>{t("cities.messages.errorLabel")}</strong>{" "}
              {getApiErrorMessage(error, t, t("cities.messages.loadFailed"))}
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleRetry}
            className="mt-2 border-red-200 text-red-700 hover:bg-red-100 cursor-pointer"
          >
            {t("cities.messages.tryAgain")}
          </Button>
        </div>
      )}

      {!isLoading && !isError && (
        <CitiesTable
          cities={cities}
          selectedCities={selectedCities}
          onSelectAll={handleSelectAll}
          onSelectCity={handleSelectCity}
          tableSettings={tableSettings}
          cityVisibility={cityVisibility}
          onToggleVisibility={toggleVisibility}
          onViewCity={handleViewCity}
          onEditCity={handleEditCity}
          onDeleteCity={handleDeleteCity}
          onImportCity={() => setIsImportModalOpen(true)}
        />
      )}

      {!isLoading && !isError && totalPages > 1 && (
        <Pagination
          page={currentPage}
          totalPages={totalPages}
          perPage={itemsPerPage}
          totalItems={totalCities}
          onPageChange={handlePageChange}
          onPerPageChange={(val) => tableSettings.setItemsPerPage(Number(val))}
          currentItemsCount={cities.length}
          isLoading={isFetching}
        />
      )}

      <CitiesModals
        isAddCityModalOpen={isAddCityModalOpen}
        setIsAddCityModalOpen={setIsAddCityModalOpen}
        isViewModalOpen={isViewModalOpen}
        setIsViewModalOpen={setIsViewModalOpen}
        isEditModalOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
        isImportModalOpen={isImportModalOpen}
        setIsImportModalOpen={setIsImportModalOpen}
        deleteDialogOpen={deleteDialogOpen}
        setDeleteDialogOpen={setDeleteDialogOpen}
        selectedCityId={selectedCityId}
        setSelectedCityId={setSelectedCityId}
        cityToDelete={cityToDelete}
        setCityToDelete={setCityToDelete}
        selectedCity={selectedCity}
        cities={cities}
        createCityMutation={createCityMutation}
        updateCityMutation={updateCityMutation}
        deleteCityMutation={deleteCityMutation}
        t={t}
      />
    </div>
  );
}