"use client";

import { useState, useCallback, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Plus,
  ChevronLeft,
  ChevronRight,
  Download,
  UploadCloud,
} from "lucide-react";
import { toast } from "sonner";
import useDashboardAdminExpertsData from "@/hooks/use-dashboardAdminExperts";
import { ExpertDataType } from "@/types";
import { AddExpertModal } from "@/components/modals/experts/add-expert-modal";
import { useLanguage } from "@/contexts/LanguageContext";
import { getApiErrorMessage } from "@/lib/api-errors";
import { useTableSettings } from "@/hooks/use-table-settings";
import { useDebounce } from "@/hooks/useDebounce";
import { TableSettings } from "@/components/table/table-settings";
import dynamic from "next/dynamic";

import { ExpertsFilters } from "./components/ExpertsFilters";
import { ExpertsTable } from "./components/ExpertsTable";

const BulkImportExpertsModal = dynamic(
  () =>
    import(
      "@/components/modals/experts/bulk-import-experts-modal"
    ).then((mod) => mod.BulkImportExpertsModal),
  { ssr: false },
);

interface Expert {
  id: number;
  name: string;
  email: string;
  phone: string;
  specializations: string[];
  countries: string[];
  consultations: number;
  rating_avg: number;
  rating_count: number;
  status: string;
}

export default function ExpertsPage() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [expertActiveStatus, setExpertActiveStatus] = useState<
    Record<number, boolean>
  >({});
  const [updatingExpertId, setUpdatingExpertId] = useState<number | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [expertToDelete, setExpertToDelete] = useState<number | null>(null);
  const [addExpertModalOpen, setAddExpertModalOpen] = useState(false);
  const [bulkImportModalOpen, setBulkImportModalOpen] = useState(false);

  const debouncedSearch = useDebounce(searchQuery);

  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearch]);

  useEffect(() => {
    setCurrentPage(1);
  }, [statusFilter]);

  const tableSettings = useTableSettings("experts-table", [
    { id: "expert", label: t("experts.columns.expert"), visible: true },
    { id: "email", label: t("experts.columns.email"), visible: true },
    { id: "specializations", label: t("experts.columns.specializations"), visible: true },
    { id: "country", label: t("experts.columns.country"), visible: true },
    { id: "contact", label: t("experts.columns.contact"), visible: true },
    { id: "consultations", label: t("experts.columns.consultations"), visible: true },
    { id: "responseRate", label: t("experts.columns.responseRate"), visible: true },
    { id: "status", label: t("experts.columns.status"), visible: true },
    { id: "actions", label: t("experts.columns.actions"), visible: true },
  ]);

  const itemsPerPage = tableSettings.settings.itemsPerPage;

  const {
    expertsData,
    deleteExpertMutation,
    toggleStatusMutation,
  } = useDashboardAdminExpertsData(
    currentPage,
    itemsPerPage,
    debouncedSearch,
    statusFilter,
    tableSettings.isInitialized,
  );

  const { data, isLoading: isQueryLoading, isError, error, isFetching } = expertsData;
  // Wait for the saved page size so the list is requested once with the right per_page.
  const isLoading = isQueryLoading || !tableSettings.isInitialized;

  const experts: Expert[] = useMemo(() => {
    const rawResponse = data as
      | { data?: ExpertDataType[]; total?: number }
      | undefined;

    const expertsList = rawResponse?.data || [];

    return expertsList.map((exp: ExpertDataType) => ({
      id: exp.expert_id,
      name: exp.display_name || t("experts.table.na"),
      email: exp.email || t("experts.table.na"),
      phone: exp.phone_number || t("experts.table.na"),
      specializations: exp.categories || [],
      countries: exp.countries || [],
      consultations: exp.consultations_count ?? 0,
      rating_avg: exp.rating_avg ?? 0,
      rating_count: exp.rating_count ?? 0,
      status: exp.status || "pending",
    }));
  }, [data, t]);

  const totalExperts = (data as { total?: number })?.total || 0;
  const totalPages = Math.ceil(Number(totalExperts) / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;

  useEffect(() => {
    if (experts.length > 0) {
      setExpertActiveStatus((prev) => {
        const next = { ...prev };
        let hasChanges = false;
        experts.forEach((exp) => {
          const isActive = exp.status === "approved" || exp.status === "active";
          if (next[exp.id] === undefined || next[exp.id] !== isActive) {
            next[exp.id] = isActive;
            hasChanges = true;
          }
        });
        return hasChanges ? next : prev;
      });
    }
  }, [experts]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const toggleStatus = useCallback(
    (id: number, checked: boolean) => {
      const previousStatus = expertActiveStatus[id];

      setExpertActiveStatus((prev) => ({ ...prev, [id]: checked }));
      setUpdatingExpertId(id);

      toggleStatusMutation.mutate(
        { expertId: id, newStatus: checked },
        {
          onSettled: () => {
            setUpdatingExpertId(null);
          },
          // The mutation hook toasts the error; only roll back the optimistic switch here.
          onError: () => {
            setExpertActiveStatus((prev) => ({
              ...prev,
              [id]: previousStatus,
            }));
          },
        },
      );
    },
    [toggleStatusMutation, expertActiveStatus],
  );

  const handleDeleteExpert = useCallback(
    (id: number) => {
      deleteExpertMutation.mutate(id, {
        onSuccess: () => {
          setDeleteDialogOpen(false);
          setExpertToDelete(null);
        },
      });
    },
    [deleteExpertMutation],
  );

  return (
    <div className="p-4 px-3 space-y-4 max-w-full overflow-hidden">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
            {t("experts.realEstateExperts")}
          </h1>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            {totalExperts} {t("experts.expertsCount")}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="gap-2 border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-700 dark:text-gray-200 text-xs sm:text-sm h-9 shadow-2xs"
            onClick={() => {
              toast.info(t("experts.messages.preparingExport"));
            }}
          >
            <Download className="h-4 w-4" />
            {t("common.export")}
          </Button>
          <Button
            variant="outline"
            className="gap-2 border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-700 dark:text-gray-200 text-xs sm:text-sm h-9 shadow-2xs"
            onClick={() => setBulkImportModalOpen(true)}
          >
            <UploadCloud className="h-4 w-4" />
            {t("experts.import")}
          </Button>
          <TableSettings settings={tableSettings} />
          <Button
            className="bg-[#006262] hover:bg-[#004d4d] text-white gap-2 text-xs sm:text-sm h-9 font-medium shadow-2xs"
            onClick={() => setAddExpertModalOpen(true)}
          >
            <Plus className="h-4 w-4" />
            {t("experts.addNewExpert")}
          </Button>
        </div>
      </div>

      <ExpertsFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      {isLoading && (
        <div className="space-y-4">
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-96 w-full" />
          <div className="flex justify-between">
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-8 w-64" />
          </div>
        </div>
      )}

      {isError && !isLoading && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4">
          <p className="text-sm text-red-800">
            <strong>{t("experts.errorLabel")}</strong>{" "}
            {getApiErrorMessage(error, t, t("experts.failedLoad"))}
          </p>
        </div>
      )}

      {!isLoading && !isError && (
        <ExpertsTable
          tableSettings={tableSettings}
          experts={experts}
          expertActiveStatus={expertActiveStatus}
          updatingExpertId={updatingExpertId}
          toggleStatus={toggleStatus}
          setBulkImportModalOpen={setBulkImportModalOpen}
          deleteDialogOpen={deleteDialogOpen}
          setDeleteDialogOpen={setDeleteDialogOpen}
          expertToDelete={expertToDelete}
          setExpertToDelete={setExpertToDelete}
          handleDeleteExpert={handleDeleteExpert}
          isDeleting={deleteExpertMutation.isPending}
        />
      )}

      {!isLoading && !isError && totalPages > 0 && (
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
          <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            {t("experts.messages.showing")} {startIndex + 1}–
            {Math.min(startIndex + itemsPerPage, totalExperts)} {t("experts.messages.of")}{" "}
            {totalExperts}
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1 || isFetching}
              className="h-8 w-8 rounded-lg border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-600 shadow-2xs disabled:opacity-40"
            >
              <ChevronLeft className="h-4 w-4 rtl:rotate-180" />
            </Button>
            
            <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 px-1">
              {currentPage}/{totalPages}
            </span>

            <Button
              variant="outline"
              size="icon"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages || isFetching}
              className="h-8 w-8 rounded-lg border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-600 shadow-2xs disabled:opacity-40"
            >
              <ChevronRight className="h-4 w-4 rtl:rotate-180" />
            </Button>
          </div>
        </div>
      )}

      <AddExpertModal
        isOpen={addExpertModalOpen}
        onClose={() => setAddExpertModalOpen(false)}
      />

      {bulkImportModalOpen && (
        <BulkImportExpertsModal
          isOpen={bulkImportModalOpen}
          onClose={() => setBulkImportModalOpen(false)}
        />
      )}
    </div>
  );
}