"use client";

import { useState, useCallback } from "react";
import { Plus, RefreshCw, Search } from "lucide-react";
import { toast } from "sonner";
import { getApiErrorMessage } from "@/lib/api-errors";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAddons } from "@/hooks/use-dashboardAdminSubscriptions";
import { useDebounce } from "@/hooks/useDebounce";
import { useLanguage } from "@/contexts/LanguageContext";

import { AddonCard } from "../components/addon-card";
import { LoadingSkeleton } from "../components/loading-skeleton";
import { ErrorState } from "../components/error-state";
import { EmptyState } from "@/components/ui/empty-state";

import dynamic from "next/dynamic";

const CreateAddonModal = dynamic(() => import("@/components/modals/subscriptions/create-addon-modal"), { ssr: false });
const UpdateAddonModal = dynamic(() => import("@/components/modals/subscriptions/update-addon-modal"), { ssr: false });
const ViewAddonModal = dynamic(() => import("@/components/modals/subscriptions/view-addon-modal"), { ssr: false });

export function AddonsTab() {
  const { t } = useLanguage();
  const {
    addonsQuery,
    deleteAddonMutation,
  } = useAddons({ addonTypesEnabled: false });
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebounce(searchQuery);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [updateAddonData, setUpdateAddonData] = useState<any | null>(null);
  const [viewAddonData, setViewAddonData] = useState<any | null>(null);
  const handleDeleteAddon = useCallback(
    (addonId: number) => {
      deleteAddonMutation.mutate(addonId, {
        onSuccess: () => {
          toast.success(t("subscriptions.addons.deleteSuccess"));
        },
        onError: (error) => {
          toast.error(getApiErrorMessage(error, t, t("subscriptions.addons.deleteFailed")), { id: API_ERROR_TOAST_ID });
        },
      });
    },
    [deleteAddonMutation],
  );
  const addonsData = (addonsQuery.data as any)?.data;
  const addons = Array.isArray(addonsData) ? addonsData : (addonsData?.data || []);
  const filteredAddons = addons.filter(
    (a: any) =>
      a.name?.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      a.code?.toLowerCase().includes(debouncedSearch.toLowerCase()),
  );
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="relative w-72">
          <Search className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder={t("subscriptions.addons.searchPlaceholder")}
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
            {t("subscriptions.actions.addAddon")}
          </Button>
          <Button
            variant="outline"
            onClick={() => addonsQuery.refetch()}
            disabled={addonsQuery.isFetching}
            className="gap-2"
          >
            <RefreshCw
              className={`w-4 h-4 ${addonsQuery.isFetching ? "animate-spin" : ""}`}
            />
            {t("subscriptions.common.refresh")}
          </Button>
        </div>
      </div>
      {addonsQuery.isLoading ? (
        <LoadingSkeleton />
      ) : addonsQuery.isError ? (
        <ErrorState
          error={getApiErrorMessage(addonsQuery.error, t, t("subscriptions.addons.loadFailed"))}
          onRetry={() => addonsQuery.refetch()}
        />
      ) : filteredAddons.length === 0 ? (
        <EmptyState
          title={t("subscriptions.addons.emptyTitle")}
          message={t("subscriptions.addons.emptyMessage")}
        />
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredAddons.map((addon: any, index: number) => (
            <AddonCard
              key={addon.id || addon.addon_id || `addon-${index}`}
              addon={addon}
              onView={(a) => setViewAddonData(a)}
              onEdit={(a) => setUpdateAddonData(a)}
              onDelete={handleDeleteAddon}
              isDeleting={
                deleteAddonMutation.isPending &&
                deleteAddonMutation.variables === (addon.id || addon.addon_id)
              }
            />
          ))}
        </div>
      )}
      <CreateAddonModal
        open={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
      />
      <UpdateAddonModal
        open={!!updateAddonData}
        onClose={() => setUpdateAddonData(null)}
        addonData={updateAddonData}
      />
      <ViewAddonModal
        open={!!viewAddonData}
        onClose={() => setViewAddonData(null)}
        addonData={viewAddonData}
      />
    </div>
  );
}
