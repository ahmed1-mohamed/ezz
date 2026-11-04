import { z } from "zod";

type Translate = (key: string, values?: Record<string, string | number>) => string;

const identity: Translate = (key) => key;

/** Parses a user-typed amount ("1,500,000" or "1500000.50"); NaN when it isn't a number. */
export const parseAmount = (value?: string) => {
  if (value === undefined || value === null) return NaN;
  const cleaned = String(value).replace(/[,\s]/g, "");
  return cleaned === "" ? NaN : Number(cleaned);
};

const isBlank = (value?: string) => !value || !String(value).trim();

const isValidAmount = (value?: string) => {
  if (isBlank(value)) return true;
  const num = parseAmount(value);
  return Number.isFinite(num) && num >= 0;
};

const isWholeNumber = (value: string) => Number.isInteger(Number(value));

/**
 * Create-project form schema. Messages are translated with `t`; without it they stay as i18n keys
 * (the form components pass messages through `t()` again, which leaves translated text untouched).
 */
export const getCreateProjectSchema = (t: Translate = identity) => {
  const maxText = (max: number) => z.string().trim().max(max, t("validation.max_length", { max }));
  const amount = maxText(50).optional().refine(isValidAmount, { message: t("projects.create.errors.amountInvalid") });

  return z
    .object({
      project_name: z
        .string()
        .trim()
        .min(1, t("projects.create.errors.projectNameRequired"))
        .max(255, t("validation.project_name_max")),
      project_name_en: maxText(255).optional(),
      project_type: z.enum(["residential", "commercial", "mixed-use"], {
        message: t("validation.required"),
      }),
      total_units: z
        .string()
        .trim()
        .min(1, t("projects.create.errors.totalUnitsRequired"))
        .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
          message: t("projects.create.errors.totalUnitsPositive"),
        })
        .refine((val) => isNaN(Number(val)) || Number(val) < 0 || isWholeNumber(val), {
          message: t("projects.create.errors.unitsWholeNumber"),
        }),
      available_units: z
        .string()
        .trim()
        .min(1, t("projects.create.errors.availableUnitsRequired"))
        .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
          message: t("projects.create.errors.availableUnitsPositive"),
        })
        .refine((val) => isNaN(Number(val)) || Number(val) < 0 || isWholeNumber(val), {
          message: t("projects.create.errors.unitsWholeNumber"),
        }),
      launch_date: z.string().min(1, t("projects.create.errors.launchDateRequired")),
      completion_date: z.string().optional(),
      delivery_date: z.string().optional(),
      unit_types: maxText(255).optional(),
      status: z.enum(["ongoing", "completed", "upcoming"], {
        message: t("validation.required"),
      }),
      currency: z.string().max(50, t("validation.currency_max")).optional(),
      min_price: amount,
      max_price: amount,
      price_sq_min: amount,
      price_sq_max: amount,
      price_range: z.string().optional(),
      price_range_SQ: z.string().optional(),
      description: maxText(2000).optional(),
      project_size: maxText(50).optional().refine(isValidAmount, { message: t("projects.create.errors.sizeInvalid") }),
      developer_id: z.string().min(1, t("projects.create.errors.developerRequired")),

      latitude: z
        .number({ message: t("validation.numeric") })
        .min(-90, t("validation.latitude_range"))
        .max(90, t("validation.latitude_range")),
      longitude: z
        .number({ message: t("validation.numeric") })
        .min(-180, t("validation.longitude_range"))
        .max(180, t("validation.longitude_range")),
      landmark: maxText(255).optional(),
      city_id: z.string().trim().min(1, t("projects.create.errors.cityRequired")),
      area_id: z.string().trim().min(1, t("projects.create.errors.areaRequired")),
      north_side: maxText(255).optional(),
      south_side: maxText(255).optional(),
      east_side: maxText(255).optional(),
      west_side: maxText(255).optional(),
      google_map_link: z
        .string()
        .trim()
        .min(1, t("projects.create.errors.mapLinkRequired"))
        .max(2048, t("validation.max_length", { max: 2048 }))
        .url(t("validation.url_invalid")),
      location_description: maxText(2000).optional(),

      is_active: z.enum(["0", "1", "2"]).optional(),
      milestone_id: z.string().optional(),
      phase: z.string().optional(),
      permit_no: z.string().max(20, t("validation.max_length", { max: 20 })).optional(),
      barcode: z.any().optional(),
      slug: maxText(255).optional(),
      meta_title: maxText(255).optional(),
      meta_description: maxText(2000).optional(),
      payment_plans: z.any().optional(),
      milestones: z.any().optional(),
      buildings: z.any().optional(),
    })
    .superRefine((data, ctx) => {
      if (data.launch_date && data.completion_date) {
        const launchDate = new Date(data.launch_date);
        const completionDate = new Date(data.completion_date);

        if (!isNaN(launchDate.getTime()) && !isNaN(completionDate.getTime()) && completionDate < launchDate) {
          ctx.addIssue({
            code: "custom",
            message: t("projects.create.errors.dateValidation"),
            path: ["completion_date"],
          });
        }
      }

      if (data.total_units && data.available_units) {
        const total = Number(data.total_units);
        const available = Number(data.available_units);
        if (!isNaN(total) && !isNaN(available) && available > total) {
          ctx.addIssue({
            code: "custom",
            message: t("projects.create.errors.availableExceedsTotal"),
            path: ["available_units"],
          });
        }
      }

      const checkRange = (minKey: "min_price" | "price_sq_min", maxKey: "max_price" | "price_sq_max") => {
        const min = parseAmount(data[minKey]);
        const max = parseAmount(data[maxKey]);
        if (Number.isFinite(min) && Number.isFinite(max) && max < min) {
          ctx.addIssue({
            code: "custom",
            message: t("projects.create.errors.maxBelowMin"),
            path: [maxKey],
          });
        }
      };
      checkRange("min_price", "max_price");
      checkRange("price_sq_min", "price_sq_max");
    });
};

export const createProjectSchema = getCreateProjectSchema();

export type CreateProjectInput = z.infer<typeof createProjectSchema>;
