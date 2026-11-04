"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import dynamic from "next/dynamic";

const AddFeatureModal2 = dynamic(() => import("@/components/modals/features/add-feature-modal2").then(mod => mod.AddFeatureModal2));
const EditFeatureModal2 = dynamic(() => import("@/components/modals/features/edit-feature-modal2").then(mod => mod.EditFeatureModal2));
const DeleteFeatureModal2 = dynamic(() => import("@/components/modals/features/delete-feature-modal2").then(mod => mod.DeleteFeatureModal2));
const ViewFeatureModal = dynamic(() => import("@/components/modals/features/view-feature-modal").then(mod => mod.ViewFeatureModal));

import useDashboardAdminFeatures from "@/hooks/use-dashboardAdminFeatures";
import { featuresExportToExcel, featuresExportToPDF } from "@/lib/handle-export";

import { FeaturesHeader } from "./components/FeaturesHeader";
import { FeaturesFilters } from "./components/FeaturesFilters";
import { FeaturesTable, Feature } from "./components/FeaturesTable";
import { useTableSettings } from "@/hooks/use-table-settings";
import { useDebounce } from "@/hooks/useDebounce";
import { useLanguage } from "@/contexts/LanguageContext";
import { getApiErrorMessage } from "@/lib/api-errors";
import { cn } from "@/lib/utils";

export default function FeaturesManagementPage() {
  const { t } = useLanguage();
  const { featuresData, features } = useDashboardAdminFeatures();
  const { isLoading, error } = featuresData;

  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebounce(searchQuery);
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedFeatures, setSelectedFeatures] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isAddFeatureModal2Open, setIsAddFeatureModal2Open] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const DEFAULT_COLUMNS = [
    { id: "id", label: t("features.columns.id"), visible: true },
    { id: "featureName", label: t("features.columns.featureName"), visible: true },
    { id: "isAmenity", label: t("features.columns.isAmenity"), visible: true },
    { id: "icon", label: t("features.columns.icon"), visible: true },
    { id: "actions", label: t("features.columns.actions"), visible: true },
  ];

  const tableSettings = useTableSettings("features", DEFAULT_COLUMNS);

  const itemsPerPage = tableSettings.settings.itemsPerPage;

  if (isLoading)
    return <div className="p-8 text-center text-gray-500">{t("features.messages.loading")}</div>;
  if (error)
    return (
      <div className="p-8 text-center text-red-500">
        {t("features.messages.loadFailed")} {getApiErrorMessage(error, t, t("common.failedToLoad"))}
      </div>
    );

  const filteredFeatures = features.filter((feature) => {
    const matchesSearch = feature.featureName
      .toLowerCase()
      .includes(debouncedSearch.toLowerCase());
    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "active" && feature.isAmenity) ||
      (statusFilter === "inactive" && !feature.isAmenity);

    return matchesSearch && matchesStatus;
  });

  const totalPages = Math.ceil(filteredFeatures.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedFeatures = filteredFeatures.slice(startIndex, endIndex);

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedFeatures(paginatedFeatures.map((f) => f.id));
    } else {
      setSelectedFeatures([]);
    }
  };

  const handleSelectFeature = (id: number, checked: boolean) => {
    if (checked) {
      setSelectedFeatures([...selectedFeatures, id]);
    } else {
      setSelectedFeatures(selectedFeatures.filter((fid) => fid !== id));
    }
  };

  const getPageNumbers = () => {
    const pages: number[] = [];
    const maxVisible = 10;
    const end = Math.min(maxVisible, totalPages);
    for (let i = 1; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  const handleView = (feature: Feature) => {
    setSelectedFeature(feature);
    setIsViewModalOpen(true);
  };

  const handleEdit = (feature: Feature) => {
    setSelectedFeature(feature);
    setIsEditModalOpen(true);
  };

  const handleDelete = (feature: Feature) => {
    setSelectedFeature(feature);
    setIsDeleteModalOpen(true);
  };

  const handleExport = (format: "pdf" | "xlsx" | "excel") => {
    if (format === "pdf") {
      featuresExportToPDF(filteredFeatures);
    } else {
      featuresExportToExcel(filteredFeatures);
    }
  };

  return (
    <div className="p-4 px-3 space-y-4 max-w-full overflow-hidden">
      <FeaturesHeader
        featuresCount={features.length}
        onAddFeature={() => setIsAddFeatureModal2Open(true)}
        tableSettings={tableSettings}
        onExportExcel={() => handleExport("excel")}
        onExportPdf={() => handleExport("pdf")}
      />

      <FeaturesFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      <FeaturesTable
        settings={tableSettings}
        features={paginatedFeatures}
        selectedFeatures={selectedFeatures}
        handleSelectAll={handleSelectAll}
        handleSelectFeature={handleSelectFeature}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
        <div className="text-xs text-gray-500 dark:text-gray-400">
          {t("features.messages.showing")}{" "}
          <span className="font-semibold text-gray-800 dark:text-gray-200">{filteredFeatures.length > 0 ? startIndex + 1 : 0}</span>-
          <span className="font-semibold text-gray-800 dark:text-gray-200">{Math.min(endIndex, filteredFeatures.length)}</span>{" "}
          {t("features.messages.of")}{" "}
          <span className="font-semibold text-gray-800 dark:text-gray-200">{filteredFeatures.length}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="h-8 w-8 rounded-lg border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 cursor-pointer shadow-2xs"
          >
            <ChevronLeft className="h-4 w-4 rtl:rotate-180" />
          </Button>
          {getPageNumbers().map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "outline"}
              size="icon"
              onClick={() => setCurrentPage(page)}
              className={cn(
                "h-8 w-8 rounded-lg text-xs font-semibold shadow-2xs cursor-pointer",
                currentPage === page
                  ? "bg-teal-700 hover:bg-teal-800 text-white border-teal-700"
                  : "border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-neutral-800"
              )}
            >
              {page}
            </Button>
          ))}
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages || totalPages === 0}
            className="h-8 w-8 rounded-lg border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 cursor-pointer shadow-2xs"
          >
            <ChevronRight className="h-4 w-4 rtl:rotate-180" />
          </Button>
        </div>
      </div>

      {isViewModalOpen && selectedFeature && (
        <ViewFeatureModal
          feature={selectedFeature}
          isOpen={isViewModalOpen}
          onClose={() => {
            setIsViewModalOpen(false);
            setSelectedFeature(null);
          }}
          onEdit={() => {
            setIsViewModalOpen(false);
            setIsEditModalOpen(true);
          }}
          onDelete={() => {
            setIsViewModalOpen(false);
            setIsDeleteModalOpen(true);
          }}
        />
      )}

      {isAddFeatureModal2Open && (
        <AddFeatureModal2
          isOpen={isAddFeatureModal2Open}
          onClose={() => setIsAddFeatureModal2Open(false)}
          onEdit={(feature) => handleEdit(feature)}
          onDelete={(feature) => handleDelete(feature)}
        />
      )}

      {isEditModalOpen && selectedFeature && (
        <EditFeatureModal2
          isOpen={isEditModalOpen}
          onClose={() => {
            setIsEditModalOpen(false);
            setSelectedFeature(null);
          }}
          feature={selectedFeature}
        />
      )}

      {isDeleteModalOpen && selectedFeature && (
        <DeleteFeatureModal2
          isOpen={isDeleteModalOpen}
          onClose={() => {
            setIsDeleteModalOpen(false);
            setSelectedFeature(null);
          }}
          feature={selectedFeature}
        />
      )}
    </div>
  );
}