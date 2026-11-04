"use client";

import { useState, useCallback } from "react";
import { Plus, RefreshCw, Search } from "lucide-react";
import { toast } from "sonner";
import { getApiErrorMessage } from "@/lib/api-errors";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useDeveloperPackages } from "@/hooks/use-dashboardAdminSubscriptions";
import { useDebounce } from "@/hooks/useDebounce";
import { useLanguage } from "@/contexts/LanguageContext";

import { PackageCard } from "../components/package-card";
import { LoadingSkeleton } from "../components/loading-skeleton";
import { ErrorState } from "../components/error-state";
import { EmptyState } from "@/components/ui/empty-state";

import dynamic from "next/dynamic";

const AddDeveloperPackageModal = dynamic(() => import("@/components/modals/subscriptions/create-developer-package-modal"), { ssr: false });
const UpdateDeveloperPackageModal = dynamic(() => import("@/components/modals/subscriptions/update-developer-package-modal"), { ssr: false });
const ViewDeveloperPackageModal = dynamic(() => import("@/components/modals/subscriptions/view-developer-package-modal"), { ssr: false });

export function DeveloperPackagesTab() {
  const { t } = useLanguage();
  const {
    packagesQuery,
    deletePackageMutation,
  } = useDeveloperPackages();
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebounce(searchQuery);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [updatePackageData, setUpdatePackageData] = useState<any | null>(null);
  const [viewPackageData, setViewPackageData] = useState<any | null>(null);
  const handleDeletePackage = useCallback(
    (packageId: number) => {
      deletePackageMutation.mutate(packageId, {
        onSuccess: () => {
          toast.success(t("subscriptions.packages.deleteSuccess"));
        },
        onError: (error) => {
          toast.error(getApiErrorMessage(error, t, t("subscriptions.packages.deleteFailed")), { id: API_ERROR_TOAST_ID });
        },
      });
    },
    [deletePackageMutation],
  );
  const packagesData = (packagesQuery.data as any)?.data;
  const packages = Array.isArray(packagesData)
    ? packagesData
    : (packagesData?.data || (packagesData as any)?.packages || []);
  const filteredPackages = packages.filter(
    (pkg: any) =>
      pkg.name?.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      pkg.code?.toLowerCase().includes(debouncedSearch.toLowerCase()),
  );
  let bestValueId: number | null = null;
  let lowestRate = Infinity;
  filteredPackages.forEach((p: any) => {
    const rate = p.price / p.credits;
    if (rate < lowestRate && p.status) {
      lowestRate = rate;
      bestValueId = p.id;
    }
  });
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="relative w-72">
          <Search className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder={t("subscriptions.packages.searchPlaceholder")}
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
            {t("subscriptions.packages.addPackage")}
          </Button>
          <Button
            variant="outline"
            onClick={() => packagesQuery.refetch()}
            disabled={packagesQuery.isFetching}
            className="gap-2"
          >
            <RefreshCw
              className={`w-4 h-4 ${packagesQuery.isFetching ? "animate-spin" : ""}`}
            />
            {t("subscriptions.common.refresh")}
          </Button>
        </div>
      </div>
      {packagesQuery.isLoading ? (
        <LoadingSkeleton />
      ) : packagesQuery.isError ? (
        <ErrorState
          error={getApiErrorMessage(packagesQuery.error, t, t("subscriptions.packages.loadFailed"))}
          onRetry={() => packagesQuery.refetch()}
        />
      ) : packages.length === 0 ? (
        <EmptyState
          title={t("subscriptions.packages.emptyTitle")}
          message={t("subscriptions.packages.emptyMessage")}
        />
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPackages.map((pkg: any) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              isBestValue={pkg.id === bestValueId}
              onView={(pkgData) => setViewPackageData(pkgData)}
              onEdit={(pkgData) => setUpdatePackageData(pkgData)}
              onDelete={handleDeletePackage}
              isDeleting={
                deletePackageMutation.isPending &&
                deletePackageMutation.variables === pkg.id
              }
            />
          ))}
        </div>
      )}
      <AddDeveloperPackageModal
        open={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
      />
      <UpdateDeveloperPackageModal
        open={!!updatePackageData}
        onClose={() => setUpdatePackageData(null)}
        packageData={updatePackageData}
      />
      <ViewDeveloperPackageModal
        open={!!viewPackageData}
        onClose={() => setViewPackageData(null)}
        packageData={viewPackageData}
      />
    </div>
  );
}
