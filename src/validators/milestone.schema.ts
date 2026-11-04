import { z } from "zod";

type Translate = (key: string, values?: Record<string, string | number>) => string;

export const milestoneSchema = z.object({
  milestone_name: z.string().min(1, "projects.milestones.validation.nameRequired"),
  description: z.string().optional(),
  status: z.string(),
  planned_start_date: z.string(),
  planned_end_date: z.string(),
  completion_percentage: z.string().optional(),
  actual_start_date: z.string().optional(),
  actual_end_date: z.string().optional(),
  project_id: z.number().optional(),
});

export type MilestoneSchema = z.infer<typeof milestoneSchema>;

const isEndBeforeStart = (start?: string, end?: string) => {
  if (!start || !end) return false;
  const s = new Date(start).getTime();
  const e = new Date(end).getTime();
  return !Number.isNaN(s) && !Number.isNaN(e) && e < s;
};

const isValidPercentage = (value?: string | number) => {
  if (value === undefined || value === null || String(value).trim() === "") return true;
  const num = Number(value);
  return Number.isFinite(num) && num >= 0 && num <= 100;
};

/** Shared milestone rules: end date ≥ start date (planned and actual). Works for any object with those keys. */
export const refineMilestoneDates = (
  t: Translate,
  data: {
    planned_start_date?: string;
    planned_end_date?: string;
    actual_start_date?: string;
    actual_end_date?: string;
  },
  ctx: z.RefinementCtx
) => {
  if (isEndBeforeStart(data.planned_start_date, data.planned_end_date)) {
    ctx.addIssue({
      code: "custom",
      message: t("projects.milestones.validation.endBeforeStart"),
      path: ["planned_end_date"],
    });
  }
  if (isEndBeforeStart(data.actual_start_date, data.actual_end_date)) {
    ctx.addIssue({
      code: "custom",
      message: t("projects.milestones.validation.endBeforeStart"),
      path: ["actual_end_date"],
    });
  }
};

/**
 * Form schema for milestone forms (same shape as `milestoneSchema`, translated messages).
 * `completion_percentage` is a string (as typed in the input) and must be 0–100 when given.
 */
export const getMilestoneFormSchema = (t: Translate) =>
  z
    .object({
      milestone_name: z
        .string()
        .trim()
        .min(1, t("projects.milestones.validation.nameRequired"))
        .max(255, t("validation.max_length", { max: 255 })),
      description: z.string().trim().max(2000, t("validation.max_length", { max: 2000 })).optional(),
      status: z.string().min(1, t("validation.required")),
      planned_start_date: z.string(),
      planned_end_date: z.string(),
      completion_percentage: z
        .string()
        .optional()
        .refine((val) => isValidPercentage(val), {
          message: t("projects.milestones.validation.percentageRange"),
        }),
      actual_start_date: z.string().optional(),
      actual_end_date: z.string().optional(),
      project_id: z.number().optional(),
    })
    .superRefine((data, ctx) => refineMilestoneDates(t, data, ctx));

/** Rules for the draft milestone modal on the create-project page (useState form). */
export const getDraftMilestoneSchema = (t: Translate) =>
  z
    .object({
      milestone_name: z
        .string()
        .trim()
        .min(1, t("projects.milestones.validation.nameRequired"))
        .max(255, t("validation.max_length", { max: 255 })),
      description: z.string().trim().max(2000, t("validation.max_length", { max: 2000 })),
      completion_percentage: z
        .number({ message: t("validation.numeric") })
        .refine((val) => isValidPercentage(val), {
          message: t("projects.milestones.validation.percentageRange"),
        }),
      planned_start_date: z.string(),
      planned_end_date: z.string(),
      actual_start_date: z.string(),
      actual_end_date: z.string(),
    })
    .superRefine((data, ctx) => refineMilestoneDates(t, data, ctx));
