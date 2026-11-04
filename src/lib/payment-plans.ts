import { addPaymentPlanItem, updatePaymentPlanItem } from "@/data/api-client";

export const PAYMENT_PLAN_ITEM_TYPES = [
  { value: "Booking", labelKey: "projects.paymentPlans.types.booking" },
  { value: "Reservation", labelKey: "projects.paymentPlans.types.reservation" },
  { value: "Down payment", labelKey: "projects.paymentPlans.types.downPayment" },
  { value: "Monthly installment", labelKey: "projects.paymentPlans.types.monthlyInstallment" },
  { value: "Quarterly installment", labelKey: "projects.paymentPlans.types.quarterlyInstallment" },
  { value: "Half year installment", labelKey: "projects.paymentPlans.types.halfYearInstallment" },
  { value: "Yearly installment", labelKey: "projects.paymentPlans.types.yearlyInstallment" },
  { value: "installments before handover", labelKey: "projects.paymentPlans.types.installmentsBeforeHandover" },
  { value: "Handover installment", labelKey: "projects.paymentPlans.types.handoverInstallment" },
  { value: "installments after handover", labelKey: "projects.paymentPlans.types.installmentsAfterHandover" },
  { value: "Maintenance yearly fees", labelKey: "projects.paymentPlans.types.maintenanceYearlyFees" },
  { value: "Maintenance deposit", labelKey: "projects.paymentPlans.types.maintenanceDeposit" },
  { value: "Registration fees", labelKey: "projects.paymentPlans.types.registrationFees" },
  { value: "DLD payment", labelKey: "projects.paymentPlans.types.dldPayment" },
  { value: "Handover fees", labelKey: "projects.paymentPlans.types.handoverFees" },
  { value: "Other fees", labelKey: "projects.paymentPlans.types.otherFees" },
] as const;

export function normalizeItemType(type: string): string {
  return type.trim().toLowerCase().replace(/[\s-]+/g, "_");
}

export function toApiItemType(type: string): string {
  const key = normalizeItemType(type);
  return PAYMENT_PLAN_ITEM_TYPES.find((o) => normalizeItemType(o.value) === key)?.value ?? type;
}

export function getPaymentPlanItemTypeLabel(type: string, t: (key: string) => string): string {
  const key = normalizeItemType(type);
  const option = PAYMENT_PLAN_ITEM_TYPES.find((o) => normalizeItemType(o.value) === key);
  return option ? t(option.labelKey) : type;
}

export interface DraftPaymentPlan {
  down_payment_percentage: number;
  installments_count: number;
  period: string;
  handover_percentage?: number;
}

const PERIOD_ITEM_TYPE: Record<string, string> = {
  Monthly: "Monthly installment",
  Quarterly: "Quarterly installment",
  "Semi-Annually": "Half year installment",
  Yearly: "Yearly installment",
  "During Construction": "installments before handover",
  "Post Handover (2 Years)": "installments after handover",
  "Post Handover (3 Years)": "installments after handover",
  Immediate: "Down payment",
};

export function getInstallmentItemType(period: string): string {
  return PERIOD_ITEM_TYPE[period] ?? "Monthly installment";
}

export interface PaymentPlanPayload {
  name: string;
  payment_plan_type: string;
  description: string;
  total_cost: number;
  status: string;
  user_id?: string;
  period_by_years: number;
}

export interface PaymentPlanFields {
  name: string;
  description?: string;
  payment_plan_type?: string;
  total_cost?: number;
  status?: string;
  user_id?: string;
  period_by_years?: number;
  installments_count?: number;
  period?: string;
}

const PERIOD_MONTHS: Record<string, number> = {
  Monthly: 1,
  Quarterly: 3,
  "Semi-Annually": 6,
  Yearly: 12,
};

function estimatePeriodByYears(plan: PaymentPlanFields): number {
  if (plan.period === "Immediate") return 0;
  if (plan.period === "Post Handover (2 Years)") return 2;
  if (plan.period === "Post Handover (3 Years)") return 3;
  const months = PERIOD_MONTHS[plan.period ?? ""];
  if (months && plan.installments_count) {
    return Math.max(1, Math.ceil((months * plan.installments_count) / 12));
  }
  return 1;
}

export function buildPaymentPlanPayload(plan: PaymentPlanFields, fallbackUserId?: string): PaymentPlanPayload {
  const userId = plan.user_id || fallbackUserId;
  return {
    name: plan.name.trim(),
    payment_plan_type: plan.payment_plan_type?.trim() || "developer",
    description: plan.description?.trim() || "",
    total_cost: Number(plan.total_cost) || 0,
    status: plan.status || "active",
    ...(userId ? { user_id: String(userId) } : {}),
    period_by_years: plan.period_by_years ?? estimatePeriodByYears(plan),
  };
}

const ITEM_TYPE_PERIOD: Record<string, string> = {
  monthly_installment: "Monthly",
  quarterly_installment: "Quarterly",
  half_year_installment: "Semi-Annually",
  yearly_installment: "Yearly",
  installments_before_handover: "During Construction",
  installments_after_handover: "Post Handover (2 Years)",
};

export function draftFromPlanItems(items: PaymentPlanItemView[]): DraftPaymentPlan {
  const byType = (type: string) => items.filter((i) => normalizeItemType(i.type) === type);
  const sum = (rows: PaymentPlanItemView[]) => rows.reduce((total, row) => total + row.percentage, 0);
  const installment = items.find((i) => ITEM_TYPE_PERIOD[normalizeItemType(i.type)]);
  return {
    down_payment_percentage: sum(byType("down_payment")),
    handover_percentage: sum(byType("handover_installment")),
    installments_count: installment?.intervals || 1,
    period: installment ? ITEM_TYPE_PERIOD[normalizeItemType(installment.type)] : "Immediate",
  };
}

export function getCreatedPlanId(response: unknown): number | undefined {
  const res = response as any;
  const id = res?.data?.payment_plan_id ?? res?.payment_plan_id ?? res?.data?.id ?? res?.id;
  return id ? Number(id) : undefined;
}

export function buildDraftPlanItems(plan: DraftPaymentPlan): Array<{ type: string; percentage: number; intervals: number }> {
  const downPayment = plan.down_payment_percentage || 0;
  const handover = plan.handover_percentage || 0;
  const installments = Math.max(1, plan.installments_count || 1);
  const remaining = Number(Math.max(0, 100 - downPayment - handover).toFixed(2));

  const items: Array<{ type: string; percentage: number; intervals: number }> = [];
  if (downPayment > 0) items.push({ type: "Down payment", percentage: downPayment, intervals: 1 });
  if (remaining > 0) {
    items.push({ type: getInstallmentItemType(plan.period), percentage: remaining, intervals: installments });
  }
  if (handover > 0) items.push({ type: "Handover installment", percentage: handover, intervals: 1 });
  return items;
}

export async function addDraftPlanItems(
  paymentPlanId: number,
  plan: DraftPaymentPlan,
  token: string
): Promise<void> {
  for (const item of buildDraftPlanItems(plan)) {
    await addPaymentPlanItem({ payment_plan_id: paymentPlanId, ...item }, token);
  }
}

export interface PaymentPlanItemView {
  id: string;
  type: string;
  percentage: number;
  intervals: number;
}

export interface PaymentPlanView {
  id: string;
  paymentPlanId?: number;
  name: string;
  description: string;
  paymentPlanType?: string;
  totalCost?: string | number | null;
  status?: string;
  userId?: string;
  periodByYears?: number | null;
  developerId?: number;
  entityType?: string;
  entityId?: number;
  items: PaymentPlanItemView[];
}

export function extractPaymentPlans(entity: any): PaymentPlanView[] {
  const raw = entity?.paymentPlans ?? entity?.payment_plans ?? entity?.paymentplans ?? [];
  if (!Array.isArray(raw)) return [];
  return raw.map((plan: any, planIndex: number) => {
    const rawItems = plan?.paymentplanitems ?? plan?.payment_plan_items ?? plan?.paymentPlanItems ?? plan?.items ?? [];
    const planId = plan?.payment_plan_id ?? plan?.id;
    return {
      id: String(planId ?? `plan-${planIndex}`),
      paymentPlanId: planId !== undefined ? Number(planId) : undefined,
      name: plan?.name ?? "",
      description: plan?.description ?? "",
      paymentPlanType: plan?.payment_plan_type ?? undefined,
      totalCost: plan?.total_cost ?? null,
      status: plan?.status,
      userId: plan?.user_id != null ? String(plan.user_id) : undefined,
      periodByYears: plan?.period_by_years ?? null,
      developerId: plan?.developer_id != null ? Number(plan.developer_id) : undefined,
      entityType: typeof plan?.type === "string" ? plan.type : undefined,
      entityId: plan?.entity_id != null ? Number(plan.entity_id) : undefined,
      items: (Array.isArray(rawItems) ? rawItems : []).map((item: any, itemIndex: number) => ({
        id: String(item?.payment_plan_item_id ?? item?.id ?? `item-${itemIndex}`),
        type: toApiItemType(String(item?.type ?? "")),
        percentage: Number(item?.percentage ?? 0),
        intervals: Number(item?.intervals ?? 1),
      })),
    };
  });
}

export function toPaymentPlanView(response: unknown): PaymentPlanView | null {
  const body = response as any;
  const plan = body?.data?.payment_plan_id !== undefined || body?.data?.name !== undefined ? body.data : body;
  if (!plan || typeof plan !== "object") return null;
  return extractPaymentPlans({ paymentPlans: [plan] })[0] ?? null;
}

export function toPaymentPlanList(response: unknown): PaymentPlanView[] {
  const body = response as any;
  const raw = Array.isArray(body?.data) ? body.data : Array.isArray(body?.data?.data) ? body.data.data : Array.isArray(body) ? body : [];
  return extractPaymentPlans({ paymentPlans: raw });
}

export function mergeEntityPaymentPlans(
  summaries: PaymentPlanView[],
  list: PaymentPlanView[] | undefined,
  entityType: "PROJECTS" | "PROPERTIES",
  entityId: number | undefined
): PaymentPlanView[] {
  if (!list || !entityId) return summaries;
  const known = new Set(summaries.map((p) => p.paymentPlanId).filter(Boolean));
  const linked = list.filter(
    (p) =>
      p.entityType?.toUpperCase() === entityType &&
      p.entityId === entityId &&
      p.paymentPlanId &&
      !known.has(p.paymentPlanId)
  );
  return linked.length ? [...summaries, ...linked] : summaries;
}

export interface PaymentPlanItemRecord extends PaymentPlanItemView {
  paymentPlanId?: number;
}

export function toPaymentPlanItemList(response: unknown): PaymentPlanItemRecord[] {
  const body = response as any;
  const raw = Array.isArray(body?.data) ? body.data : Array.isArray(body?.data?.data) ? body.data.data : Array.isArray(body) ? body : [];
  return raw.map((item: any, index: number) => ({
    id: String(item?.id ?? item?.payment_plan_item_id ?? `item-${index}`),
    paymentPlanId: item?.payment_plan_id != null ? Number(item.payment_plan_id) : undefined,
    type: toApiItemType(String(item?.type ?? "")),
    percentage: Number(item?.percentage ?? 0),
    intervals: Number(item?.intervals ?? 1) || 1,
  }));
}

export function withPlanItems(plan: PaymentPlanView, allItems: PaymentPlanItemRecord[] | undefined): PaymentPlanView {
  if (plan.items.length > 0 || !allItems || !plan.paymentPlanId) return plan;
  const items = allItems.filter((item) => item.paymentPlanId === plan.paymentPlanId);
  return items.length ? { ...plan, items } : plan;
}

export interface PlanItemRow {
  paymentPlanItemId?: number;
  type: string;
  percentage: number;
  intervals: number;
}

export async function savePlanItems(
  paymentPlanId: number,
  rows: PlanItemRow[],
  originalItems: PaymentPlanItemView[],
  token: string
): Promise<void> {
  const originalById = new Map(originalItems.map((item) => [item.id, item]));
  for (const row of rows) {
    const body = { payment_plan_id: paymentPlanId, type: row.type, percentage: row.percentage, intervals: row.intervals };
    if (!row.paymentPlanItemId) {
      await addPaymentPlanItem(body, token);
      continue;
    }
    const original = originalById.get(String(row.paymentPlanItemId));
    const changed =
      !original ||
      original.type !== row.type ||
      original.percentage !== row.percentage ||
      original.intervals !== row.intervals;
    if (changed) await updatePaymentPlanItem(row.paymentPlanItemId, body, token);
  }
}

export function draftRowsForExistingItems(plan: DraftPaymentPlan, existing: PaymentPlanItemView[]): PlanItemRow[] {
  return buildDraftPlanItems(plan).map((item, index) => {
    const id = existing[index]?.id;
    return { ...item, paymentPlanItemId: id && /^\d+$/.test(id) ? Number(id) : undefined };
  });
}
