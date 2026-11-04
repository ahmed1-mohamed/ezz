"use client";

import { useState, useMemo, useCallback } from "react";
import { useSession } from "next-auth/react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";

import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { getApiErrorMessage } from "@/lib/api-errors";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import { useServerPagination } from "@/hooks/useServerPagination";
import {
  fetchCampaignStats,
  fetchCampaigns,
  updateCampaignStatus,
  deleteCampaign,
  viewCampaign,
  updateCampaign,
} from "@/data/api-client";
import { computeDisplayStats } from "@/app/admin/marketing/utils/campaignUtils";
import type { CampaignType } from "@/app/admin/marketing/utils/campaignUtils";

interface UseCampaignPageOptions {
  type: CampaignType;
  queryType?: string;
}

export function useCampaignPage({ type, queryType }: UseCampaignPageOptions) {
  const resolvedType = queryType ?? type;

  const { t, language } = useLanguage();
  const isRTL = language === "ar";
  const pathname = usePathname();
  const router = useRouter();
  const basePath = pathname.startsWith("/developer") ? "/developer" : "/admin";

  const { data: session } = useSession();
  const token = session?.user?.accessToken;
  const queryClient = useQueryClient();

  const [selectedCampaign, setSelectedCampaign] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"view" | "edit">("view");

  const { page, perPage, setPage, setPerPage } = useServerPagination({
    initialPage: 1,
    initialPerPage: 10,
  });

  const { data: stats = null, isLoading: isLoadingStats } = useQuery({
    queryKey: ["campaignStats", resolvedType],
    queryFn: async () => {
      if (!token) return null;
      try {
        const res = await fetchCampaignStats(resolvedType, token);
        const data = res?.data?.total_campaigns !== undefined ? res.data : res;
        return data ?? null;
      } catch {
        return null;
      }
    },
    enabled: !!token,
    staleTime: 60_000,
  });

  const { data: rawCampaignsData, isLoading: isLoadingCampaigns } = useQuery({
    queryKey: ["campaigns", resolvedType, page, perPage],
    queryFn: async () => {
      if (!token) return null;
      try {
        const res = await fetchCampaigns(resolvedType, token, page, perPage);
        const items = Array.isArray(res) ? res : (res?.data || res?.data?.data || []);
        const total = res?.total ?? res?.meta?.total ?? items.length;
        return { data: items, total };
      } catch {
        return null;
      }
    },
    enabled: !!token,
    staleTime: 60_000,
  });

  const campaigns = useMemo(() => {
    if (!rawCampaignsData) return [];
    const raw = rawCampaignsData as any;
    const items = Array.isArray(raw) ? raw : (raw?.data || []);
    return Array.isArray(items) ? items : [];
  }, [rawCampaignsData]);

  const totalCampaigns = useMemo(() => {
    if (!rawCampaignsData) return 0;
    const raw = rawCampaignsData as any;
    return raw?.total ?? campaigns.length;
  }, [rawCampaignsData, campaigns]);

  const totalPages = Math.max(1, Math.ceil(totalCampaigns / perPage));

  const displayStats = useMemo(
    () => computeDisplayStats(stats, campaigns),
    [stats, campaigns]
  );

  const handleToggleStatus = useCallback(
    async (id: string | number, currentStatus: any) => {
      const statusStr = currentStatus ? String(currentStatus).toLowerCase() : "";
      if (statusStr === "completed" || statusStr === "failed") return;
      if (!token) {
        toast.error(isRTL ? "جلسة العمل منتهية" : "Session expired");
        return;
      }
      const newStatus = statusStr === "running" ? "scheduled" : "running";
      try {
        await updateCampaignStatus(id, newStatus, token);
        toast.success(
          newStatus === "running"
            ? isRTL ? "تم تشغيل الحملة بنجاح!" : "Campaign is now running!"
            : isRTL ? "تم جدولة الحملة بنجاح!" : "Campaign scheduled successfully!"
        );
        queryClient.invalidateQueries({ queryKey: ["campaigns"], refetchType: "all" });
        queryClient.invalidateQueries({ queryKey: ["campaignStats"], refetchType: "all" });
      } catch (err: any) {
        toast.error(
          getApiErrorMessage(err, t, isRTL ? "فشل تحديث حالة الحملة" : "Failed to update campaign status"),
          { id: API_ERROR_TOAST_ID }
        );
      }
    },
    [token, isRTL, queryClient, t]
  );

  const handleView = useCallback(
    (id: string | number) => {
      router.push(`${basePath}/marketing/campaigns/${id}`);
    },
    [router, basePath]
  );

  const handleEdit = useCallback(
    async (id: string | number) => {
      try {
        const res = await viewCampaign(id, token!);
        setSelectedCampaign(res?.data || res);
        setModalMode("edit");
        setIsModalOpen(true);
      } catch (err) {
        toast.error(
          getApiErrorMessage(err, t, isRTL ? "فشل تحميل تفاصيل الحملة" : "Failed to load campaign details"),
          { id: API_ERROR_TOAST_ID }
        );
      }
    },
    [token, isRTL, t]
  );

  const handleSaveCampaign = useCallback(
    async (id: string | number, updatedData: any) => {
      try {
        await updateCampaign(id, updatedData, token!);
        toast.success(isRTL ? "تم تحديث الحملة بنجاح." : "Campaign updated successfully.");
        queryClient.invalidateQueries({ queryKey: ["campaigns"], refetchType: "all" });
        queryClient.invalidateQueries({ queryKey: ["campaignStats"], refetchType: "all" });
      } catch (err: any) {
        // EditCampaignModal (the only caller) shows field errors, the banner and the toast.
        throw err;
      }
    },
    [token, isRTL, queryClient]
  );

  const handleDelete = useCallback(
    async (id: string | number) => {
      if (!token) return;
      const Swal = (await import("sweetalert2")).default;
      const result = await Swal.fire({
        title: isRTL ? "هل أنت متأكد؟" : "Are you sure?",
        text: isRTL
          ? "لن تتمكن من استعادة هذه الحملة بعد الحذف!"
          : "You won't be able to revert this campaign delete!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: isRTL ? "نعم، احذفها!" : "Yes, delete it!",
        cancelButtonText: isRTL ? "إلغاء" : "Cancel",
        buttonsStyling: false,
        reverseButtons: isRTL,
        customClass: {
          popup: "rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 p-6 shadow-xl max-w-sm w-full mx-4",
          title: "text-lg font-bold text-gray-900 dark:text-gray-100",
          htmlContainer: "text-sm text-gray-500 dark:text-gray-400 mt-2",
          confirmButton: "bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-all focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 mx-2",
          cancelButton: "border border-gray-200 dark:border-neutral-800 text-gray-700 dark:text-gray-300 bg-white dark:bg-neutral-950 hover:bg-gray-50 dark:hover:bg-neutral-900 font-semibold px-4 py-2 rounded-lg text-sm transition-all focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 mx-2",
          actions: "flex justify-center items-center gap-2 mt-6",
        }
      });

      if (result.isConfirmed) {
        try {
          await deleteCampaign(id, token);
          toast.success(isRTL ? "تم حذف الحملة بنجاح." : "Campaign deleted successfully.");
          queryClient.invalidateQueries({ queryKey: ["campaigns"], refetchType: "all" });
          queryClient.invalidateQueries({ queryKey: ["campaignStats"], refetchType: "all" });
        } catch (err) {
          toast.error(
            getApiErrorMessage(err, t, isRTL ? "فشل حذف الحملة" : "Failed to delete campaign"),
            { id: API_ERROR_TOAST_ID }
          );
        }
      }
    },
    [token, isRTL, queryClient, t]
  );

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedCampaign(null);
  }, []);

  return {
    token,
    basePath,
    isRTL,
    language,
    t,
    stats,
    campaigns,
    totalCampaigns,
    totalPages,
    displayStats,
    isLoadingStats,
    isLoadingCampaigns,
    page,
    perPage,
    setPage,
    setPerPage,
    selectedCampaign,
    isModalOpen,
    modalMode,
    closeModal,
    handleToggleStatus,
    handleView,
    handleEdit,
    handleSaveCampaign,
    handleDelete,
  };
}