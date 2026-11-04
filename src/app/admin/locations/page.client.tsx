"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useLanguage } from "@/contexts/LanguageContext";
import { getApiErrorMessage } from "@/lib/api-errors";
import { EmptyState } from "@/components/ui/empty-state";

import useDashboardAdminLocations from "@/hooks/use-dashboardAdminLocations";
import { Pagination } from "@/components/shared/Pagination";
import { locationsExportToPDF, locationsExportToExcel } from "@/lib/handle-export";

import { LocationsHeader } from "@/features/locations/components/LocationsHeader";
import { LocationsFilters } from "@/features/locations/components/LocationsFilters";
import { LocationsTable } from "@/features/locations/components/LocationsTable";
import { Location } from "@/features/locations/types";
import { useTableSettings } from "@/hooks/use-table-settings";
import { useDebounce } from "@/hooks/useDebounce";

import dynamic from "next/dynamic";

const AddLocationModal = dynamic(() => import("@/components/modals/locations/AddLocationModal").then(mod => mod.AddLocationModal), { ssr: false });
const EditLocationModal = dynamic(() => import("@/components/modals/locations/EditLocationModal").then(mod => mod.EditLocationModal), { ssr: false });
const DeleteLocationModal = dynamic(() => import("@/components/modals/locations/delete-location-modal").then(mod => mod.DeleteLocationModal), { ssr: false });

export default function LocationsManagementPage() {
  const router = useRouter();
  const { t } = useLanguage();
  const [page, setPage] = useState(1);
  const DEFAULT_COLUMNS = [
    { id: "landmark", label: t("locations.columns.landmark"), visible: true },
    { id: "details", label: t("locations.columns.details"), visible: true },
    { id: "projects", label: t("locations.columns.projects"), visible: true },
    { id: "created", label: t("locations.columns.created"), visible: true },
    { id: "country", label: t("locations.columns.country"), visible: true },
    { id: "actions", label: t("locations.columns.actions"), visible: true },
  ];
  const tableSettings = useTableSettings("locations", DEFAULT_COLUMNS);
  const [perPage, setPerPage] = useState(tableSettings.settings.itemsPerPage);
  useEffect(() => {
    setPerPage(tableSettings.settings.itemsPerPage);
  }, [tableSettings.settings.itemsPerPage]);
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebounce(searchQuery);
  const [filters, setFilters] = useState({ city: "all" });
  useEffect(() => {
    setPage(1);
  }, [debouncedSearch]);
  const setFilter = useCallback((key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setPage(1);
  }, []);
  const [selectedLocations, setSelectedLocations] = useState<number[]>([]);
  const [isAddLocationModalOpen, setIsAddLocationModalOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [locationToDelete, setLocationToDelete] = useState<Location | null>(null);
  const queryClient = useQueryClient();
  const { paginatedLocationsData: allLocationsData } = useDashboardAdminLocations(1, 1000, debouncedSearch);
  const allRaw = (allLocationsData.data as { data?: any } | undefined)?.data;
  const allItems: any[] = Array.isArray(allRaw) ? allRaw : allRaw?.data ?? [];
  
  const cities: string[] = useMemo(() => {
    return Array.from(
      new Set(
        allItems
          .map((loc: any) => loc?.city_name)
          .filter((c: string) => c && c !== "N/A" && c.trim() !== ""),
      ),
    ).sort() as string[];
  }, [allItems]);

  const { isLoading, isError, error, refetch } = allLocationsData;

  const locations: Location[] = useMemo(() => {
    return allItems.map((loc: any) => ({
      location_id: loc.location_id,
      location_landmark: loc.location_landmark || "N/A",
      city_name: loc.city_name || "N/A",
      country_name: loc.country_name || "N/A",
      area_name: loc.area_name?.trim() || "N/A",
      created_at: loc.created_at || "N/A",
      projects_count: loc.projects_count || 0,
      status: loc.status || loc.is_active || "active",
    }));
  }, [allItems]);
  const filteredLocations: Location[] = useMemo(() => {
    if (filters.city !== "all") {
      return locations.filter((loc) => loc.city_name === filters.city);
    }
    return locations;
  }, [locations, filters.city]);

  const total: number = filteredLocations.length;
  const totalPages = Math.max(1, Math.ceil(total / perPage));

  const currentLocations = useMemo(() => {
    return filteredLocations.slice((page - 1) * perPage, page * perPage);
  }, [filteredLocations, page, perPage]);
  const handleSelectAll = useCallback(
    (checked: boolean) => {
      if (checked) {
        setSelectedLocations(locations.map((l) => l.location_id));
      } else {
        setSelectedLocations([]);
      }
    },
    [locations],
  );
  const handleSelectLocation = useCallback(
    (location_id: number, checked: boolean) => {
      if (checked) {
        setSelectedLocations((prev) => [...prev, location_id]);
      } else {
        setSelectedLocations((prev) => prev.filter((id) => id !== location_id));
      }
    },
    [],
  );

  // The delete modal performs the request and shows the toast; the page only refreshes the list.
  const handleDeleteSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ["locations"] });
    setIsDeleteModalOpen(false);
    setLocationToDelete(null);
  };
  return (
    <div className="p-4 px-3 space-y-4 max-w-full overflow-hidden">
      <LocationsHeader
        totalLocations={total}
        onAddLocation={() => setIsAddLocationModalOpen(true)}
        tableSettings={tableSettings}
        onExportExcel={() => locationsExportToExcel(locations)}
        onExportPdf={() => locationsExportToPDF(locations)}
      />

      <LocationsFilters
        searchQuery={searchQuery}
        onSearchChange={(val) => { setSearchQuery(val); setPage(1); }}
        cities={cities}
        cityFilter={filters.city}
        onCityChange={(val) => { setFilter("city", val); setPage(1); }}
      />
      {isLoading && (
        <div className="space-y-4">
          <div className="rounded-lg border border-gray-200 bg-white">
            <div className="p-4 space-y-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex items-center gap-6">
                  <Skeleton className="h-4 w-4" />
                  <Skeleton className="h-4 w-1/4" />
                  <Skeleton className="h-4 w-1/4" />
                  <Skeleton className="h-4 w-[100px]" />
                  <Skeleton className="h-4 w-[80px]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {isError && !isLoading && (
        <div className="flex flex-col items-center">
          <EmptyState
            type="error"
            message={getApiErrorMessage(error, t, t("locations.messages.loadFailed"))}
          />
          <Button
            variant="outline"
            size="sm"
            onClick={() => refetch()}
            className="mt-4 border-gray-200 text-gray-700 hover:bg-gray-50"
          >
            {t("locations.messages.tryAgain")}
          </Button>
        </div>
      )}
      {!isLoading && !isError && (
        <>
          <LocationsTable
            settings={tableSettings}
            locations={currentLocations}
            selectedLocations={selectedLocations}
            onSelectAll={handleSelectAll}
            onSelectLocation={handleSelectLocation}
            onView={(loc) => {
              router.push(`/admin/locations/${loc.location_id}`);
            }}
            onEdit={(loc) => {
              setSelectedLocation(loc);
              setIsEditModalOpen(true);
            }}
            onDelete={(loc) => {
              setLocationToDelete(loc);
              setIsDeleteModalOpen(true);
            }}
          />
          <Pagination
            page={page}
            totalPages={totalPages}
            totalItems={total}
            perPage={perPage}
            onPageChange={setPage}
            onPerPageChange={(val) => {
              setPerPage(Number(val));
              setPage(1);
            }}
          />
        </>
      )}
      {isAddLocationModalOpen && (
        <AddLocationModal
          isOpen={isAddLocationModalOpen}
          onClose={() => setIsAddLocationModalOpen(false)}
        />
      )}
      {isEditModalOpen && selectedLocation && (
        <EditLocationModal
          locationId={selectedLocation.location_id}
          isOpen={isEditModalOpen}
          onClose={() => {
            setIsEditModalOpen(false);
            setSelectedLocation(null);
          }}
          onSuccess={() => {}}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteLocationModal
          location={locationToDelete}
          isOpen={isDeleteModalOpen}
          onClose={() => {
            setIsDeleteModalOpen(false);
            setLocationToDelete(null);
          }}
          onSuccess={handleDeleteSuccess}
        />
      )}
    </div>
  );
}