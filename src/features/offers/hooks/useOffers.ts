"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useTableSettings } from "@/hooks/use-table-settings";
import { useDebounce } from "@/hooks/useDebounce";
import useDashboardAdminOffersData from "@/hooks/use-dashboardAdminOffers";
import { AdminOffersService } from "@/data/api-client";
import type { OfferUpdateFields } from "@/data/api-client";
import type { Offer, OffersFilters, OffersColumn } from "@/features/offers/types";
import { useLanguage } from "@/contexts/LanguageContext";
import { getApiErrorMessage } from "@/lib/api-errors";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";

const DEFAULT_COLUMNS: (Omit<OffersColumn, "label"> & { labelKey: string })[] = [
  { id: "linked_to", labelKey: "offers.columns.linkedTo", visible: true },
  { id: "type", labelKey: "offers.columns.type", visible: true },
  { id: "discount", labelKey: "offers.columns.discount", visible: true },
  { id: "validity", labelKey: "offers.columns.validityPeriod", visible: true },
  { id: "clicks", labelKey: "offers.columns.clicks", visible: true },
  { id: "views", labelKey: "offers.columns.views", visible: true },
  { id: "status", labelKey: "offers.columns.status", visible: true },
];

function extractOffers(data: unknown): Offer[] {
  if (!data) return [];
  if (Array.isArray(data)) return data as Offer[];
  const d = data as Record<string, unknown>;
  if (Array.isArray(d.data)) return d.data as Offer[];
  const inner = d.data as Record<string, unknown> | undefined;
  if (inner && Array.isArray(inner.data)) return inner.data as Offer[];
  const arrays = Object.values(d).filter(Array.isArray);
  return arrays.length > 0 ? (arrays[0] as Offer[]) : [];
}

function extractTotalItems(data: unknown, fallback: number): number {
  if (!data) return fallback;
  const d = data as Record<string, unknown>;
  const meta = d.meta as Record<string, unknown> | undefined;
  const innerData = d.data as Record<string, unknown> | undefined;
  return (
    Number(meta?.total) ||
    Number(d.total) ||
    Number(innerData?.total) ||
    fallback
  );
}

export function useOffers(initialPage = 1, initialItemsPerPage = 15) {
  const queryClient = useQueryClient();
  const { t } = useLanguage();

  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const debouncedSearch = useDebounce(searchQuery);

  const [currentPage, setCurrentPage] = useState(initialPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [filterStatus, debouncedSearch]);

  const [selectedOffers, setSelectedOffers] = useState<string[]>([]);
  const [updatingOfferId, setUpdatingOfferId] = useState<string | null>(null);

  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [viewModalOpenId, setViewModalOpenId] = useState<number | string | null>(null);
  const [editModalOpenId, setEditModalOpenId] = useState<number | string | null>(null);

  const columns: OffersColumn[] = DEFAULT_COLUMNS.map(({ labelKey, ...col }) => ({
    ...col,
    label: t(labelKey),
  }));
  const tableSettings = useTableSettings("offers", columns, initialItemsPerPage);
  const itemsPerPage = tableSettings.settings.itemsPerPage;

  const isColVisible = useCallback(
    (colId: string) =>
      tableSettings.settings.columns.find((c) => c.id === colId)?.visible !== false,
    [tableSettings.settings.columns],
  );

  const offersFilters = useMemo<OffersFilters>(
    () => ({ status: filterStatus, search: debouncedSearch }),
    [filterStatus, debouncedSearch],
  );

  const { offersData, totalsData } = useDashboardAdminOffersData(
    currentPage,
    itemsPerPage,
    offersFilters,
    tableSettings.isInitialized,
  );

  const { data, isLoading: isQueryLoading, isError, error, refetch } = offersData;
  // Wait for the saved page size so the list is requested once with the right per_page.
  const isLoading = isQueryLoading || !tableSettings.isInitialized;
  const { data: totalsRaw } = totalsData as { data?: unknown };

  const offers = useMemo(() => extractOffers(data), [data]);
  const totalItems = useMemo(
    () => extractTotalItems(data, offers.length),
    [data, offers.length],
  );
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));

  const toggleStatusMutation = useMutation({
    mutationFn: (params: { offerId: number; fields: OfferUpdateFields }) =>
      AdminOffersService.toggleStatus(params.offerId, params.fields),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["offers"] });
      toast.success(t("offers.messages.statusUpdateSuccess"));
    },
    onError: (error) =>
      toast.error(getApiErrorMessage(error, t, t("offers.messages.statusUpdateFailed")), { id: API_ERROR_TOAST_ID }),
    onSettled: () => setUpdatingOfferId(null),
  });

  const deleteMutation = useMutation({
    mutationFn: (offerId: number) => AdminOffersService.deleteOffer(offerId),
    onSuccess: () => {
      toast.success(t("offers.messages.deleteSuccess"));
      queryClient.invalidateQueries({ queryKey: ["offers"] });
      queryClient.invalidateQueries({ queryKey: ["offersTotals"] });
    },
    onError: (error) =>
      toast.error(getApiErrorMessage(error, t, t("offers.messages.deleteFailed")), { id: API_ERROR_TOAST_ID }),
  });

  const handleStatusToggle = useCallback(
    (offer: Offer, checked: boolean) => {
      setUpdatingOfferId(String(offer.offer_id));
      const fields: OfferUpdateFields = {
        entity_type: offer.entity_type ?? "PROPERTIES",
        entity_id: Number(offer.entity_id ?? 0),
        discount_type: offer.discount_type ?? "percentage",
        name: offer.name || offer.offer_details,
        is_active: checked,
        description: offer.description,
        starts_at: offer.starts_at || offer.valid_from,
        ends_at: offer.ends_at || offer.valid_to,
        discount_pct: offer.discount_pct,
      };
      toggleStatusMutation.mutate({ offerId: Number(offer.offer_id), fields });
    },
    [toggleStatusMutation],
  );

  const handleSelectAll = useCallback(
    (checked: boolean) => {
      setSelectedOffers(checked ? offers.map((o) => String(o.offer_id ?? o.id)) : []);
    },
    [offers],
  );

  const handleSelectOne = useCallback((id: string, checked: boolean) => {
    setSelectedOffers((prev) =>
      checked ? [...prev, id] : prev.filter((sid) => sid !== id),
    );
  }, []);

  const handleDeleteClick = useCallback(
    (offer: Offer) => {
      const name = offer.name || offer.offer_details || t("offers.thisOffer");
      if (window.confirm(t("offers.deleteConfirm", { name }))) {
        deleteMutation.mutate(Number(offer.offer_id ?? offer.id));
      }
    },
    [deleteMutation, t],
  );

  const handleExportExcel = useCallback(() => {
    toast.success(t("offers.messages.exportExcelSuccess"));
  }, [t]);

  const handleExportPdf = useCallback(() => {
    toast.success(t("offers.messages.exportPdfSuccess"));
  }, [t]);

  return {
    offers,
    totalItems,
    totalPages,
    totalsRaw,
    isLoading,
    isError,
    error,
    refetch,
    currentPage,
    setCurrentPage,
    itemsPerPage,
    searchQuery,
    setSearchQuery,
    filterStatus,
    setFilterStatus,
    selectedOffers,
    handleSelectAll,
    handleSelectOne,
    updatingOfferId,
    handleStatusToggle,
    handleDeleteClick,
    handleExportExcel,
    handleExportPdf,
    createModalOpen,
    setCreateModalOpen,
    viewModalOpenId,
    setViewModalOpenId,
    editModalOpenId,
    setEditModalOpenId,
    tableSettings,
    isColVisible,
  };
}