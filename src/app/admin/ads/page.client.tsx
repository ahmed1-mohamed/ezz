"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useTableSettings } from "@/hooks/use-table-settings";
import { Megaphone, TrendingUp, Eye, MousePointerClick } from "lucide-react";
import useDashboardAdminAdsData from "@/hooks/use-dashboardAdminAds";
import { toast } from "sonner";
import { AdminAdsService } from "@/data/api-client";
import { useAdActions } from "@/hooks/use-ad-actions";
import { useUrlFilters } from "@/hooks/use-url-filters";
import { useDebounce } from "@/hooks/useDebounce";
import { useLanguage } from "@/contexts/LanguageContext";
import { AdsPageHeader } from "@/features/ads/components/AdsPageHeader";
import { AdsLoadingState } from "@/features/ads/components/AdsLoadingState";
import { AdsStatCards } from "@/features/ads/components/AdsStatCards";
import { AdsTableSection } from "@/features/ads/components/AdsTableSection";
import { AdsModals } from "@/features/ads/components/AdsModals";

export default function AdsPage({
  initialPage = 1,
  initialItemsPerPage = 15,
}: {
  initialPage?: number;
  initialItemsPerPage?: number;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const routePrefix = pathname?.startsWith("/developer") ? "/developer" : "/admin";
  const { t } = useLanguage();

  const DEFAULT_COLUMNS = useMemo(
    () => [
      { id: "type", label: t("ads.columns.type"), visible: true },
      { id: "platform", label: t("ads.columns.platform"), visible: true },
      { id: "country", label: t("ads.columns.country"), visible: true },
      { id: "location", label: t("ads.columns.locations"), visible: true },
      { id: "views", label: t("ads.columns.views"), visible: true },
      { id: "clicks", label: t("ads.columns.clicks"), visible: true },
      { id: "ctr", label: t("ads.columns.ctr"), visible: true },
      { id: "visibility", label: t("ads.columns.active"), visible: true },
      { id: "status", label: t("ads.columns.status"), visible: true },
    ],
    [t]
  );

  const { filters, setFilter } = useUrlFilters({
    search: "",
    platform: "all",
    status: "all",
    format: "all",
    page: initialPage,
  });

  const [searchQuery, setSearchQuery] = useState(filters.search as string);
  const debouncedSearch = useDebounce(searchQuery);
  const [selectedAds, setSelectedAds] = useState<string[]>([]);
  const [createAdModalOpen, setCreateAdModalOpen] = useState(false);
  const [editAdModalOpen, setEditAdModalOpen] = useState(false);
  const [deleteAdDialogOpen, setDeleteAdDialogOpen] = useState(false);
  const [selectedAd, setSelectedAd] = useState<any | null>(null);
  const [updatingAdId, setUpdatingAdId] = useState<string | null>(null);

  const tableSettings = useTableSettings("ads", DEFAULT_COLUMNS, initialItemsPerPage);
  const itemsPerPage = tableSettings.settings.itemsPerPage;

  // Only react to the debounced value: an external URL change (e.g. reset) updates searchQuery
  // below, and must not be overwritten by the stale debounced value.
  useEffect(() => {
    if (filters.search !== debouncedSearch) {
      setFilter("search", debouncedSearch);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch]);

  useEffect(() => {
    setSearchQuery(filters.search as string);
  }, [filters.search]);

  const isColVisible = (colId: string): boolean =>
    tableSettings.settings.columns.find((c) => c.id === colId)?.visible !== false;

  const adsFilters = useMemo(
    () => ({
      status: filters.status as string,
      platform: filters.platform as string,
      format: filters.format as string,
      search: filters.search as string,
    }),
    [filters.status, filters.platform, filters.format, filters.search],
  );

  const { adsData, totalsData, isFetching } = useDashboardAdminAdsData(
    Number(filters.page),
    itemsPerPage,
    adsFilters,
    tableSettings.isInitialized,
  );

  const { data, isLoading: isQueryLoading, isError, error, refetch } = adsData;
  // Wait for the saved page size so the list is requested once with the right per_page.
  const isLoading = isQueryLoading || !tableSettings.isInitialized;

  const ads = useMemo(() => {
    if (!data) return [];
    if (Array.isArray(data)) return data;
    if (Array.isArray((data as any)?.data)) return (data as any).data;
    if (Array.isArray((data as any)?.data?.data)) return (data as any).data.data;
    if (Array.isArray((data as any)?.ads)) return (data as any).ads;
    return [];
  }, [data]);

  const totals = useMemo(() => {
    const raw = (totalsData as any)?.data;
    if (!raw) return {};
    if (raw.data && typeof raw.data === "object") return raw.data;
    return raw;
  }, [totalsData]);

  const totalItems = useMemo(() => {
    const fromData =
      (data as any)?.total ??
      (data as any)?.meta?.total ??
      (data as any)?.data?.meta?.total ??
      (data as any)?.data?.total;

    if (fromData !== undefined && fromData !== null && !isNaN(Number(fromData))) {
      return Number(fromData);
    }

    if (
      totals?.total_ads !== undefined &&
      totals?.total_ads !== null &&
      !isNaN(Number(totals.total_ads))
    ) {
      return Number(totals.total_ads);
    }

    return ads.length;
  }, [data, totals?.total_ads, ads.length]);

  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));

  const adsTotals = useMemo(() => {
    return [
      {
        title: t("ads.totals.totalAds"),
        value: (totals?.total_ads ?? "0").toString(),
        icon: Megaphone,
        trend: "+12.5%",
        trendUp: true,
      },
      {
        title: t("ads.totals.activeAds"),
        value: (totals?.active_ads ?? "0").toString(),
        icon: TrendingUp,
        trend: "+8.2%",
        trendUp: true,
      },
      {
        title: t("ads.totals.views"),
        value: Number(totals?.total_views ?? 0).toLocaleString(),
        icon: Eye,
        trend: "+5.2%",
        trendUp: true,
      },
      {
        title: t("ads.totals.clicks"),
        value: Number(totals?.total_clicks ?? 0).toLocaleString(),
        icon: MousePointerClick,
        trend: "+2.1%",
        trendUp: true,
      },
    ];
  }, [totals, t]);

  const handleExportExcel = async (): Promise<void> => {
    try {
      toast.loading(t("ads.export.fetching"), { id: "export" });
      const response: any = await AdminAdsService.getAds(1, 10000, adsFilters);
      const dataToExport = response.data?.data || response.data || [];
      if (dataToExport.length > 0) {
        const { adsExportToExcel } = await import("@/lib/exports/export-ads");
        adsExportToExcel(dataToExport);
        toast.success(t("ads.export.excelSuccess"), { id: "export" });
      } else {
        toast.error(t("ads.export.noData"), { id: "export" });
      }
    } catch (err) {
      console.error(err);
      toast.error(t("ads.export.fetchFailed"), { id: "export" });
    }
  };

  const handleExportPdf = async (): Promise<void> => {
    try {
      toast.loading(t("ads.export.fetching"), { id: "export" });
      const response: any = await AdminAdsService.getAds(1, 10000, adsFilters);
      const dataToExport = response.data?.data || response.data || [];
      if (dataToExport.length > 0) {
        const { adsExportToPDF } = await import("@/lib/exports/export-ads");
        adsExportToPDF(dataToExport);
        toast.success(t("ads.export.pdfSuccess"), { id: "export" });
      } else {
        toast.error(t("ads.export.noData"), { id: "export" });
      }
    } catch (err) {
      console.error(err);
      toast.error(t("ads.export.fetchFailed"), { id: "export" });
    }
  };

  const { toggleAdStatus } = useAdActions();

  const handleStatusToggle = async (adId: string, checked: boolean): Promise<void> => {
    setUpdatingAdId(adId);
    try {
      await toggleAdStatus({
        adId: Number(adId),
        status: checked ? "active" : "inactive",
      });
    } catch (err) {
      console.error(err);
    } finally {
      setUpdatingAdId(null);
    }
  };

  const handleSelectAll = (checked: boolean): void => {
    setSelectedAds(checked ? ads.map((ad: any) => String(ad.creative_id || ad.id)) : []);
  };

  const handleSelectOne = (id: string, checked: boolean): void => {
    setSelectedAds((prev) =>
      checked ? [...prev, id] : prev.filter((adId) => adId !== id),
    );
  };

  const handleEditClick = (ad: any): void => {
    const adId = ad.creative_id || ad.id;
    router.push(`${routePrefix}/ads/${adId}/edit`);
  };

  const handleDeleteClick = (ad: any): void => {
    setSelectedAd(ad);
    setDeleteAdDialogOpen(true);
  };

  const isInitialLoading = isLoading && !data;

  return (
    <div className="p-3 sm:p-4 space-y-4 max-w-full overflow-hidden">
      <AdsPageHeader
        totalAds={Number(totals?.total_ads ?? totalItems)}
        activeAds={Number(totals?.active_ads ?? 0)}
        tableSettings={tableSettings}
        onCreateAd={() => router.push(`${routePrefix}/ads/create`)}
        onExportExcel={handleExportExcel}
        onExportPdf={handleExportPdf}
      />

      {isInitialLoading ? (
        <AdsLoadingState
          isLoading={true}
          isError={false}
          error={null}
          onRetry={refetch}
        />
      ) : isError && !data ? (
        <AdsLoadingState
          isLoading={false}
          isError={true}
          error={error as Error | null}
          onRetry={refetch}
        />
      ) : (
        <>
          <AdsStatCards stats={adsTotals} />

          <AdsTableSection
            settings={tableSettings}
            ads={ads}
            selectedAds={selectedAds}
            updatingAdId={updatingAdId}
            searchQuery={searchQuery}
            statusFilter={filters.status as string}
            platformFilter={filters.platform as string}
            typeFilter={filters.format as string}
            pagination={{
              page: Number(filters.page),
              totalPages,
              totalItems,
              itemsPerPage,
            }}
            isColVisible={isColVisible}
            isFetching={isFetching}
            onSearchChange={setSearchQuery}
            onStatusChange={(val) => setFilter("status", val)}
            onPlatformChange={(val) => setFilter("platform", val)}
            onTypeChange={(val) => setFilter("format", val)}
            onSelectAll={handleSelectAll}
            onSelectOne={handleSelectOne}
            onStatusToggle={handleStatusToggle}
            onEditClick={handleEditClick}
            onDeleteClick={handleDeleteClick}
            onPageChange={(page) => setFilter("page", page)}
            onItemsPerPageChange={(count) => {
              tableSettings.setItemsPerPage(count);
              setFilter("page", 1);
            }}
          />
        </>
      )}

      <AdsModals
        selectedAd={selectedAd}
        createAdModalOpen={createAdModalOpen}
        editAdModalOpen={editAdModalOpen}
        deleteAdDialogOpen={deleteAdDialogOpen}
        onCreateClose={() => setCreateAdModalOpen(false)}
        onEditClose={() => setEditAdModalOpen(false)}
        onDeleteClose={() => setDeleteAdDialogOpen(false)}
        onSuccess={() => {
          adsData.refetch();
          totalsData.refetch();
        }}
      />
    </div>
  );
}