import { z } from "zod";

const paymentPlanItemSchema = z.object({
  type: z.string(),
  percentage: z.number().min(0).max(100),
  intervals: z.number().optional(),
});

const paymentPlanSchema = z.object({
  name: z.string().min(1, "Payment plan name is required"),
  description: z.string().optional(),
  total_cost: z.number().min(0),
  period_by_years: z.number().min(0),
  status: z.string().optional(),
  paymentplanitems: z.array(paymentPlanItemSchema).optional(),
});

export type PaymentPlanInput = z.infer<typeof paymentPlanSchema>;


type Translate = (key: string, values?: Record<string, string | number>) => string;

const isBlank = (value: string) => value.trim() === "";

/** Optional numeric input (kept as typed): empty, or a number ≥ 0. */
const nonNegativeNumberString = (t: Translate) =>
  z
    .string()
    .refine((val) => isBlank(val) || Number.isFinite(Number(val)), t("validation.numeric"))
    .refine(
      (val) => isBlank(val) || !Number.isFinite(Number(val)) || Number(val) >= 0,
      t("projects.paymentPlans.validation.nonNegative")
    );

/** Plan details as typed in the add/edit payment plan forms (useState strings). */
export const getPaymentPlanDetailsSchema = (t: Translate) =>
  z.object({
    name: z
      .string()
      .trim()
      .min(1, t("projects.paymentPlans.nameRequired"))
      .max(255, t("validation.max_length", { max: 255 })),
    description: z.string().trim().max(2000, t("validation.max_length", { max: 2000 })),
    total_cost: nonNegativeNumberString(t),
    period_by_years: nonNegativeNumberString(t),
  });

/** One installment row as typed: type required, 0 < percentage ≤ 100, whole number of payments ≥ 1. */
export const getPaymentPlanItemRowSchema = (t: Translate) =>
  z.object({
    type: z.string().trim().min(1, t("validation.required")),
    percentage: z
      .string()
      .refine((val) => !isBlank(val), t("validation.required"))
      .refine((val) => isBlank(val) || Number.isFinite(Number(val)), t("validation.numeric"))
      .refine((val) => {
        const num = Number(val);
        return isBlank(val) || !Number.isFinite(num) || (num > 0 && num <= 100);
      }, t("projects.paymentPlans.validation.percentageRange")),
    intervals: z
      .string()
      .refine((val) => !isBlank(val), t("validation.required"))
      .refine((val) => {
        const num = Number(val);
        return isBlank(val) || (Number.isInteger(num) && num >= 1);
      }, t("projects.paymentPlans.validation.intervalsMin")),
  });

export type PaymentPlanItemRowErrors = Partial<Record<"type" | "percentage" | "intervals", string>>;

/** First message per top-level field of a failed `safeParse`. */
export const paymentPlanIssuesToErrors = (issues: z.core.$ZodIssue[]): Record<string, string> => {
  const errors: Record<string, string> = {};
  issues.forEach((issue) => {
    const field = String(issue.path[0] ?? "");
    if (field && !(field in errors)) errors[field] = issue.message;
  });
  return errors;
};
