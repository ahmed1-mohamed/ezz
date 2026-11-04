"use client";

import { useMutation, useQueries, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { editProjectPayment, fetchPaymentPlanItems, fetchPaymentPlans, fetchProjectPaymentDetails } from "@/data/api-client";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  mergeEntityPaymentPlans,
  savePlanItems,
  toPaymentPlanItemList,
  toPaymentPlanList,
  toPaymentPlanView,
  withPlanItems,
  type PaymentPlanItemView,
  type PaymentPlanView,
  type PlanItemRow,
} from "@/lib/payment-plans";

export interface UpdatePaymentPlanData {
  name: string;
  payment_plan_type?: string;
  description?: string;
  total_cost?: number;
  status?: string;
  user_id?: string;
  period_by_years?: number;
}

export const paymentPlanQueryKey = (paymentPlanId: number) => ["paymentPlan", paymentPlanId] as const;
export const paymentPlansListQueryKey = ["paymentPlan", "list"] as const;
export const paymentPlanItemsListQueryKey = ["paymentPlan", "items"] as const;

export function usePaymentPlanItemsList(enabled = true) {
  const { data: session } = useSession();
  const token = session?.user?.accessToken;

  return useQuery({
    queryKey: paymentPlanItemsListQueryKey,
    queryFn: () => fetchPaymentPlanItems(token),
    select: toPaymentPlanItemList,
    enabled: !!token && enabled,
    staleTime: 60_000,
  });
}

export function usePaymentPlansList(enabled = true) {
  const { data: session } = useSession();
  const token = session?.user?.accessToken;

  return useQuery({
    queryKey: paymentPlansListQueryKey,
    queryFn: () => fetchPaymentPlans(token),
    select: toPaymentPlanList,
    enabled: !!token && enabled,
    staleTime: 60_000,
  });
}

export function useEntityPaymentPlans(
  summaries: PaymentPlanView[],
  entityType: "PROJECTS" | "PROPERTIES",
  entityId: number | undefined
) {
  const { data: list } = usePaymentPlansList(!!entityId);
  return usePaymentPlansById(mergeEntityPaymentPlans(summaries, list, entityType, entityId));
}

export function usePaymentPlanDetail(paymentPlanId: number | null | undefined, enabled: boolean) {
  const { data: session } = useSession();
  const token = session?.user?.accessToken;

  const query = useQuery({
    queryKey: paymentPlanQueryKey(paymentPlanId ?? 0),
    queryFn: () => fetchProjectPaymentDetails(paymentPlanId!, token!),
    select: toPaymentPlanView,
    enabled: !!token && !!paymentPlanId && enabled,
  });
  const needsItems = !!query.data && query.data.items.length === 0;
  const { data: allItems, isLoading: itemsLoading } = usePaymentPlanItemsList(needsItems);

  return {
    ...query,
    data: query.data ? withPlanItems(query.data, allItems) : query.data,
    isLoading: query.isLoading || (needsItems && itemsLoading),
  };
}

export function usePaymentPlansById(summaries: PaymentPlanView[]) {
  const { data: session } = useSession();
  const token = session?.user?.accessToken;

  const results = useQueries({
    queries: summaries.map((summary) => ({
      queryKey: paymentPlanQueryKey(summary.paymentPlanId ?? 0),
      queryFn: () => fetchProjectPaymentDetails(summary.paymentPlanId!, token!),
      select: toPaymentPlanView,
      enabled: !!token && !!summary.paymentPlanId,
    })),
  });

  const merged = summaries.map((summary, index): PaymentPlanView => {
    const detail = results[index]?.data;
    if (!detail) return summary;
    return {
      ...summary,
      ...detail,
      id: summary.id,
      items: detail.items.length > 0 ? detail.items : summary.items,
    };
  });
  const needsItems = merged.some((plan) => plan.paymentPlanId && plan.items.length === 0);
  const { data: allItems } = usePaymentPlanItemsList(needsItems);
  const plans = merged.map((plan) => withPlanItems(plan, allItems));

  return { plans, isLoading: results.some((r) => r.isLoading) };
}

export function usePaymentPlanActions() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();
  const { t } = useLanguage();

  const updateMutation = useMutation({
    mutationFn: async ({
      paymentId,
      data,
      items,
      originalItems = [],
    }: {
      paymentId: number;
      data: UpdatePaymentPlanData;
      items?: PlanItemRow[];
      originalItems?: PaymentPlanItemView[];
    }) => {
      const token = session?.user?.accessToken;
      if (!token) throw new Error(t("validation.api.forbidden"));
      const result = await editProjectPayment(paymentId, data, token);
      if (items) await savePlanItems(paymentId, items, originalItems, token);
      return result;
    },
    onSuccess: (_result, { paymentId }) => {
      queryClient.invalidateQueries({ queryKey: paymentPlanQueryKey(paymentId) });
      queryClient.invalidateQueries({ queryKey: paymentPlansListQueryKey });
      queryClient.invalidateQueries({ queryKey: paymentPlanItemsListQueryKey });
      queryClient.invalidateQueries({ queryKey: ["projectDetails"] });
      queryClient.invalidateQueries({ queryKey: ["propertyDetails"] });
      toast.success(t("projects.messages.paymentPlanUpdateSuccess"));
    },
  });

  return {
    updatePaymentPlan: updateMutation.mutateAsync,
    isUpdating: updateMutation.isPending,
  };
}
