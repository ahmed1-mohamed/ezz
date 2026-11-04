"use client";

import { useState, useCallback } from "react";
import { Plus, RefreshCw, Search } from "lucide-react";
import { toast } from "sonner";
import { getApiErrorMessage } from "@/lib/api-errors";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCustomerPlans } from "@/hooks/use-dashboardAdminSubscriptions";
import { useDebounce } from "@/hooks/useDebounce";
import { useLanguage } from "@/contexts/LanguageContext";

import { CustomerPlanCard } from "../components/customer-plan-card";
import { LoadingSkeleton } from "../components/loading-skeleton";
import { ErrorState } from "../components/error-state";
import { EmptyState } from "@/components/ui/empty-state";

import dynamic from "next/dynamic";

const AddCustomerPlanModal = dynamic(() => import("@/components/modals/subscriptions/add-customer-plan-modal"), { ssr: false });
const UpdateCustomerPlanModal = dynamic(() => import("@/components/modals/subscriptions/update-customer-plan-modal"), { ssr: false });
const ViewCustomerPlanModal = dynamic(() => import("@/components/modals/subscriptions/view-customer-plan-modal"), { ssr: false });

export function CustomerPlansTab() {
  const { t } = useLanguage();
  const {
    customerPlansQuery,
    deleteCustomerPlanMutation,
  } = useCustomerPlans();
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebounce(searchQuery);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [updatePlanId, setUpdatePlanId] = useState<number | string | null>(null);
  const [viewPlanId, setViewPlanId] = useState<number | string | null>(null);
  const handleDeleteCustomerPlan = useCallback(
    (planId: number | string) => {
      deleteCustomerPlanMutation.mutate(planId, {
        onSuccess: () => {
          toast.success(t("subscriptions.customerPlans.deleteSuccess"));
        },
        onError: (error) => {
          toast.error(getApiErrorMessage(error, t, t("subscriptions.customerPlans.deleteFailed")), { id: API_ERROR_TOAST_ID });
        },
      });
    },
    [deleteCustomerPlanMutation],
  );
  const customerPlans = (customerPlansQuery.data?.data as any)?.data || [];
  const filteredCustomerPlans = customerPlans.filter(
    (plan: any) =>
      plan.name?.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      plan.code?.toLowerCase().includes(debouncedSearch.toLowerCase()),
  );
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="relative w-72">
          <Search className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder={t("subscriptions.customerPlans.searchPlaceholder")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="ps-9"
          />
        </div>
        <div className="flex gap-2">
          <Button
            variant="default"
            onClick={() => setCreateModalOpen(true)}
            className="gap-2"
          >
            <Plus className="w-4 h-4" />
            {t("subscriptions.customerPlans.addPlan")}
          </Button>
          <Button
            variant="outline"
            onClick={() => customerPlansQuery.refetch()}
            disabled={customerPlansQuery.isFetching}
            className="gap-2"
          >
            <RefreshCw
              className={`w-4 h-4 ${customerPlansQuery.isFetching ? "animate-spin" : ""}`}
            />
            {t("subscriptions.common.refresh")}
          </Button>
        </div>
      </div>
      {customerPlansQuery.isLoading ? (
        <LoadingSkeleton />
      ) : customerPlansQuery.isError ? (
        <ErrorState
          error={getApiErrorMessage(customerPlansQuery.error, t, t("subscriptions.customerPlans.loadFailed"))}
          onRetry={() => customerPlansQuery.refetch()}
        />
      ) : filteredCustomerPlans.length === 0 ? (
        <EmptyState
          title={t("subscriptions.customerPlans.emptyTitle")}
          message={t("subscriptions.customerPlans.emptyMessage")}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredCustomerPlans.map((plan: any, index: number) => (
            <CustomerPlanCard
              key={plan.id || plan.code || `plan-${index}`}
              plan={plan}
              onView={(id) => setViewPlanId(id)}
              onEdit={(id) => setUpdatePlanId(id)}
              onDelete={handleDeleteCustomerPlan}
            />
          ))}
        </div>
      )}
      <AddCustomerPlanModal
        open={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        onSuccess={() => setCreateModalOpen(false)}
      />
      <UpdateCustomerPlanModal
        open={!!updatePlanId}
        onClose={() => setUpdatePlanId(null)}
        onSuccess={() => setUpdatePlanId(null)}
        planId={updatePlanId}
      />
      <ViewCustomerPlanModal
        open={!!viewPlanId}
        onClose={() => setViewPlanId(null)}
        planId={viewPlanId}
      />
    </div>
  );
}
