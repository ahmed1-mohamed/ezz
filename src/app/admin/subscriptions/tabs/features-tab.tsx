"use client";

import { useState, useCallback } from "react";
import { Plus, RefreshCw, Search } from "lucide-react";
import { toast } from "sonner";
import { getApiErrorMessage } from "@/lib/api-errors";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFeatures } from "@/hooks/use-dashboardAdminSubscriptions";
import { useDebounce } from "@/hooks/useDebounce";
import { useLanguage } from "@/contexts/LanguageContext";

import { BadgeCard } from "../components/badge-card";
import { LoadingSkeleton } from "../components/loading-skeleton";
import { ErrorState } from "../components/error-state";
import { EmptyState } from "@/components/ui/empty-state";

import dynamic from "next/dynamic";

const CreateBadgeModal = dynamic(() => import("@/components/modals/subscriptions/create-badge-modal"), { ssr: false });
const UpdateBadgeModal = dynamic(() => import("@/components/modals/subscriptions/update-badge-modal"), { ssr: false });
const ViewBadgeModal = dynamic(() => import("@/components/modals/subscriptions/view-badge-modal"), { ssr: false });

export function FeaturesTab() {
  const { t } = useLanguage();
  const {
    badgesQuery,
    deleteBadgeMutation,
  } = useFeatures();
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebounce(searchQuery);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [updateBadgeData, setUpdateBadgeData] = useState<any | null>(null);
  const [viewBadgeData, setViewBadgeData] = useState<any | null>(null);
  const handleDeleteBadge = useCallback(
    (badgeId: number) => {
      deleteBadgeMutation.mutate(badgeId, {
        onSuccess: () => {
          toast.success(t("subscriptions.features.deleteSuccess"));
        },
        onError: (error) => {
          toast.error(getApiErrorMessage(error, t, t("subscriptions.features.deleteFailed")), { id: API_ERROR_TOAST_ID });
        },
      });
    },
    [deleteBadgeMutation],
  );
  const badgesData = (badgesQuery.data as any)?.data;
  const badges = Array.isArray(badgesData) ? badgesData : (badgesData?.data || []);
  const filteredBadges = badges.filter(
    (b: any) =>
      b.name?.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      b.code?.toLowerCase().includes(debouncedSearch.toLowerCase()),
  );
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="relative w-72">
          <Search className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder={t("subscriptions.features.searchPlaceholder")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="ps-9"
          />
        </div>
        <div className="flex gap-2">
          <Button
            onClick={() => setCreateModalOpen(true)}
            className="bg-teal-600 hover:bg-teal-700 text-white gap-2"
          >
            <Plus className="w-4 h-4" />
            {t("subscriptions.actions.addFeature")}
          </Button>
          <Button
            variant="outline"
            onClick={() => badgesQuery.refetch()}
            disabled={badgesQuery.isFetching}
            className="gap-2"
          >
            <RefreshCw
              className={`w-4 h-4 ${badgesQuery.isFetching ? "animate-spin" : ""}`}
            />
            {t("subscriptions.common.refresh")}
          </Button>
        </div>
      </div>
      {badgesQuery.isLoading ? (
        <LoadingSkeleton />
      ) : badgesQuery.isError ? (
        <ErrorState
          error={getApiErrorMessage(badgesQuery.error, t, t("subscriptions.features.loadFailed"))}
          onRetry={() => badgesQuery.refetch()}
        />
      ) : filteredBadges.length === 0 ? (
        <EmptyState
          title={t("subscriptions.features.emptyTitle")}
          message={t("subscriptions.features.emptyMessage")}
        />
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredBadges.map((badge: any, index: number) => (
            <BadgeCard
              key={badge.id || badge.badge_id || `badge-${index}`}
              badge={badge}
              onView={(b) => setViewBadgeData(b)}
              onEdit={(b) => setUpdateBadgeData(b)}
              onDelete={handleDeleteBadge}
              isDeleting={
                deleteBadgeMutation.isPending &&
                deleteBadgeMutation.variables === (badge.id || badge.badge_id)
              }
            />
          ))}
        </div>
      )}
      <CreateBadgeModal
        open={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
      />
      <UpdateBadgeModal
        open={!!updateBadgeData}
        onClose={() => setUpdateBadgeData(null)}
        badgeData={updateBadgeData}
      />
      <ViewBadgeModal
        open={!!viewBadgeData}
        onClose={() => setViewBadgeData(null)}
        badgeData={viewBadgeData}
      />
    </div>
  );
}
