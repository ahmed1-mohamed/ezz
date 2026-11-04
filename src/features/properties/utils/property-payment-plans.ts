import type { QueryClient } from "@tanstack/react-query";
import {
  addProjectPayment,
  deletePropertyPayment,
  editProjectPayment,
  fetchPaymentPlanItems,
  fetchPaymentPlans,
  fetchProjectPaymentDetails,
} from "@/data/api-client";
import {
  addDraftPlanItems,
  buildDraftPlanItems,
  buildPaymentPlanPayload,
  draftFromPlanItems,
  draftRowsForExistingItems,
  extractPaymentPlans,
  getCreatedPlanId,
  mergeEntityPaymentPlans,
  savePlanItems,
  toPaymentPlanItemList,
  toPaymentPlanList,
  toPaymentPlanView,
  withPlanItems,
  type PaymentPlanView,
} from "@/lib/payment-plans";
import {
  paymentPlanItemsListQueryKey,
  paymentPlanQueryKey,
  paymentPlansListQueryKey,
} from "@/hooks/use-payment-plan-actions";
import type { PropertyPaymentPlan } from "../components/create/tabs/payment-plans/payment-plans.types";

function toDraftPlan(view: PaymentPlanView): PropertyPaymentPlan {
  return {
    id: view.id,
    payment_plan_id: view.paymentPlanId,
    name: view.name,
    description: view.description || undefined,
    payment_plan_type: view.paymentPlanType,
    total_cost: view.totalCost != null && view.totalCost !== "" ? Number(view.totalCost) : undefined,
    status: view.status,
    user_id: view.userId,
    period_by_years: view.periodByYears ?? undefined,
    items: view.items,
    ...draftFromPlanItems(view.items),
  };
}

export async function loadPropertyPaymentPlans(
  property: unknown,
  propertyId: number,
  token: string,
  queryClient: QueryClient
): Promise<PropertyPaymentPlan[]> {
  let list: PaymentPlanView[] | undefined;
  try {
    list = toPaymentPlanList(
      await queryClient.fetchQuery({ queryKey: paymentPlansListQueryKey, queryFn: () => fetchPaymentPlans(token) })
    );
  } catch {
    list = undefined;
  }
  const summaries = mergeEntityPaymentPlans(extractPaymentPlans(property), list, "PROPERTIES", propertyId);
  const views = await Promise.all(
    summaries.map(async (summary) => {
      if (!summary.paymentPlanId) return summary;
      try {
        const raw = await queryClient.fetchQuery({
          queryKey: paymentPlanQueryKey(summary.paymentPlanId),
          queryFn: () => fetchProjectPaymentDetails(summary.paymentPlanId!, token),
        });
        const detail = toPaymentPlanView(raw);
        return detail ? { ...summary, ...detail, items: detail.items.length ? detail.items : summary.items } : summary;
      } catch {
        return summary;
      }
    })
  );

  if (views.some((v) => v.paymentPlanId && v.items.length === 0)) {
    try {
      const allItems = toPaymentPlanItemList(
        await queryClient.fetchQuery({
          queryKey: paymentPlanItemsListQueryKey,
          queryFn: () => fetchPaymentPlanItems(token),
        })
      );
      return views.map((v) => toDraftPlan(withPlanItems(v, allItems)));
    } catch {
    }
  }
  return views.map(toDraftPlan);
}

const scheduleKey = (plan: PropertyPaymentPlan) => JSON.stringify(buildDraftPlanItems(plan));

export async function syncPropertyPaymentPlans({
  propertyId,
  initialPlans,
  plans,
  token,
  userId,
}: {
  propertyId: number;
  initialPlans: PropertyPaymentPlan[];
  plans: PropertyPaymentPlan[];
  token: string;
  userId?: string;
}): Promise<{ failed: number }> {
  const initialById = new Map(
    initialPlans.filter((p) => p.payment_plan_id).map((p) => [p.payment_plan_id!, p])
  );
  const keptIds = new Set(plans.map((p) => p.payment_plan_id).filter(Boolean));
  let failed = 0;

  const run = async (task: () => Promise<unknown>) => {
    try {
      await task();
    } catch (err) {
      failed++;
      console.error("Failed to sync property payment plan:", err);
    }
  };

  for (const plan of plans) {
    const original = plan.payment_plan_id ? initialById.get(plan.payment_plan_id) : undefined;

    if (!original) {
      await run(async () => {
        const res = await addProjectPayment(
          {
            ...buildPaymentPlanPayload(plan, userId),
            entity_type: "PROPERTIES",
            entities: [{ entity_id: propertyId }],
          } as any,
          token
        );
        const createdPlanId = getCreatedPlanId(res);
        if (createdPlanId) await addDraftPlanItems(createdPlanId, plan, token);
      });
      continue;
    }

    const payload = buildPaymentPlanPayload(plan, userId);
    const fieldsChanged = JSON.stringify(payload) !== JSON.stringify(buildPaymentPlanPayload(original, userId));
    const scheduleChanged = scheduleKey(plan) !== scheduleKey(original);
    if (!fieldsChanged && !scheduleChanged) continue;

    await run(async () => {
      if (fieldsChanged) await editProjectPayment(plan.payment_plan_id!, payload, token);
      if (scheduleChanged) {
        const existing = original.items ?? [];
        await savePlanItems(plan.payment_plan_id!, draftRowsForExistingItems(plan, existing), existing, token);
      }
    });
  }

  for (const id of initialById.keys()) {
    if (!keptIds.has(id)) {
      await run(() => deletePropertyPayment(id, propertyId, token));
    }
  }

  return { failed };
}
