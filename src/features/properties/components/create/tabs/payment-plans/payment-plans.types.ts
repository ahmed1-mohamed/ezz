import type { PaymentPlanItemView } from "@/lib/payment-plans";

export interface PropertyPaymentPlan {
  id: string;
  payment_plan_id?: number;
  items?: PaymentPlanItemView[];
  name: string;
  description?: string;
  down_payment_percentage: number;
  installments_count: number;
  period: string;
  handover_percentage?: number;
  payment_plan_type?: string;
  total_cost?: number;
  status?: string;
  user_id?: string;
  period_by_years?: number;
}

export const PAYMENT_PERIOD_OPTIONS = [
  { value: "Monthly", labelKey: "properties.create.paymentPlans.periods.monthly" },
  { value: "Quarterly", labelKey: "properties.create.paymentPlans.periods.quarterly" },
  { value: "Semi-Annually", labelKey: "properties.create.paymentPlans.periods.semiAnnually" },
  { value: "Yearly", labelKey: "properties.create.paymentPlans.periods.yearly" },
  { value: "During Construction", labelKey: "properties.create.paymentPlans.periods.duringConstruction" },
  { value: "Post Handover (2 Years)", labelKey: "properties.create.paymentPlans.periods.postHandover2" },
  { value: "Post Handover (3 Years)", labelKey: "properties.create.paymentPlans.periods.postHandover3" },
  { value: "Immediate", labelKey: "properties.create.paymentPlans.periods.immediate" },
] as const;

export function getPaymentPeriodLabel(period: string, t: (key: string) => string): string {
  const option = PAYMENT_PERIOD_OPTIONS.find((o) => o.value === period);
  return option ? t(option.labelKey) : period;
}

export interface PresetPlanTemplate {
  id: string;
  name: string;
  nameKey: string;
  description: string;
  descriptionKey: string;
  down_payment_percentage: number;
  installments_count: number;
  period: string;
  handover_percentage?: number;
}

export const PRESET_PLAN_TEMPLATES: PresetPlanTemplate[] = [
  {
    id: "plan_50_50",
    name: "50/50 On Handover",
    nameKey: "properties.create.paymentPlans.presets.plan50_50",
    description: "20% Down payment, 30% during construction, 50% on handover",
    descriptionKey: "properties.create.paymentPlans.presetDescriptions.plan50_50",
    down_payment_percentage: 20,
    installments_count: 4,
    period: "Quarterly",
    handover_percentage: 50,
  },
  {
    id: "plan_60_40",
    name: "60/40 Payment Plan",
    nameKey: "properties.create.paymentPlans.presets.plan60_40",
    description: "20% Down payment, 40% during construction, 40% on handover",
    descriptionKey: "properties.create.paymentPlans.presetDescriptions.plan60_40",
    down_payment_percentage: 20,
    installments_count: 6,
    period: "Quarterly",
    handover_percentage: 40,
  },
  {
    id: "plan_70_30",
    name: "70/30 Standard",
    nameKey: "properties.create.paymentPlans.presets.plan70_30",
    description: "15% Down payment, 55% during construction, 30% on handover",
    descriptionKey: "properties.create.paymentPlans.presetDescriptions.plan70_30",
    down_payment_percentage: 15,
    installments_count: 8,
    period: "Quarterly",
    handover_percentage: 30,
  },
  {
    id: "plan_80_20",
    name: "80/20 Post Handover (2 Yrs)",
    nameKey: "properties.create.paymentPlans.presets.plan80_20",
    description: "20% Down payment, 60% construction, 10% handover, 10% post-handover",
    descriptionKey: "properties.create.paymentPlans.presetDescriptions.plan80_20",
    down_payment_percentage: 20,
    installments_count: 12,
    period: "Monthly",
    handover_percentage: 10,
  },
  {
    id: "plan_cash",
    name: "100% Cash / Lump Sum",
    nameKey: "properties.create.paymentPlans.presets.cash",
    description: "Full payment upfront with maximum discount",
    descriptionKey: "properties.create.paymentPlans.presetDescriptions.cash",
    down_payment_percentage: 100,
    installments_count: 1,
    period: "Immediate",
    handover_percentage: 0,
  },
];
