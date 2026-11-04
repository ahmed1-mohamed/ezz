import { z } from 'zod';

const editProjectSchema = z
  .object({
    developer_id: z.number(),
    latitude: z.string().nonempty('Latitude is required'),
    longitude: z.string().nonempty('Longitude is required'),
    landmark: z.string().nonempty('Landmark is required'),
    north_side: z.string().nonempty('North side is required'),
    south_side: z.string().nonempty('South side is required'),
    east_side: z.string().nonempty('East side is required'),
    west_side: z.string().nonempty('West side is required'),
    google_map_link: z.string().url('Must be a valid Google Maps URL'),
    project_name: z.string().min(1, 'Project name is required'),
    total_units: z.number().min(1, 'Total units must be at least 1'),
    available_units: z.number().min(0, 'Available units cannot be negative'),
    launch_date: z.string().min(1, 'Launch date is required'),
    completion_date: z.string().min(1, 'Completion date is required'),
    status: z.enum(['completed', 'ongoing', 'upcoming']),
    project_type: z.enum(['residential', 'commercial', 'mixed-use']),
    description: z.string().min(1, 'Description is required'),
    project_size: z.string().min(1, 'Project Size is required'),
    price_min: z.string().nonempty('Min price required'),
    price_max: z.string().nonempty('Max price required'),
    price_sq_min: z.string().nonempty('Min price SQ required'),
    price_sq_max: z.string().nonempty('Max price SQ required'),
    is_active: z.enum(['1', '0', '2']),
    currency: z.enum(['EGP', 'USD', 'AED']),
    permit_no: z.string().nullable().optional(),
  })
  .refine(
    (data) =>
      data.launch_date.trim() !== '' &&
      data.completion_date.trim() !== '' &&
      new Date(data.launch_date) <= new Date(data.completion_date),
    {
      path: ['completion_date'],
      message: 'Completion date must be after or equal to launch date.',
    }
  );

export type EditProjectInput = z.infer<typeof editProjectSchema>;

type Translate = (key: string, values?: Record<string, string | number>) => string;

const isBlank = (value?: string) => !value || !String(value).trim();

const isValidAmount = (value?: string) => {
  if (isBlank(value)) return true;
  const num = Number(String(value).replace(/[,\s]/g, ""));
  return Number.isFinite(num) && num >= 0;
};

const isWholeNumber = (value?: string) => Number.isInteger(Number(value));

/** Coordinates come from `valueAsNumber` inputs: an empty input is NaN and keeps the saved value. */
const coordinate = (min: number, max: number, message: string, numericMessage: string) =>
  z
    .number({ message: numericMessage })
    .or(z.nan())
    .refine((val) => Number.isNaN(val) || (val >= min && val <= max), { message });

/** Rules for the edit-project page form (`ProjectFormValues`); messages are translated. */
export const getEditProjectFormSchema = (t: Translate) => {
  const maxText = (max: number) => z.string().trim().max(max, t("validation.max_length", { max }));
  const optionalText = (max: number) => maxText(max).optional();
  const amount = z
    .string()
    .trim()
    .max(50, t("validation.max_length", { max: 50 }))
    .refine(isValidAmount, { message: t("projects.create.errors.amountInvalid") });
  const units = (requiredMessage: string, positiveMessage: string) =>
    z
      .string()
      .trim()
      .min(1, requiredMessage)
      .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, { message: positiveMessage })
      .refine((val) => isNaN(Number(val)) || Number(val) < 0 || isWholeNumber(val), {
        message: t("projects.create.errors.unitsWholeNumber"),
      });

  return z
    .object({
      project_name: z
        .string()
        .trim()
        .min(1, t("editProject.basicInfo.projectNameRequired"))
        .max(255, t("validation.project_name_max")),
      developer_id: z.string().trim().min(1, t("editProject.basicInfo.developerRequired")),
      project_type: z.string().min(1, t("validation.required")),
      status: z.string().min(1, t("validation.required")),
      currency: z.string().max(50, t("validation.currency_max")),
      // Optional like on create: projects created without one (incl. bulk imports) must stay editable.
      description: z.string().optional(),
      total_units: units(t("editProject.unitsPricing.totalUnitsRequired"), t("projects.create.errors.totalUnitsPositive")),
      available_units: units(
        t("editProject.unitsPricing.availableUnitsRequired"),
        t("projects.create.errors.availableUnitsPositive")
      ),
      project_size: maxText(50).refine(isValidAmount, { message: t("projects.create.errors.sizeInvalid") }),
      launch_date: z.string().min(1, t("editProject.unitsPricing.launchDateRequired")),
      completion_date: z.string(),
      min_price: amount,
      max_price: amount,
      price_sq_min: amount,
      price_sq_max: amount,
      city_id: maxText(255),
      area_id: maxText(255),
      landmark: maxText(255),
      google_map_link: z
        .string()
        .trim()
        .max(2048, t("validation.max_length", { max: 2048 }))
        .refine((val) => isBlank(val) || z.url().safeParse(val).success, { message: t("validation.url_invalid") }),
      latitude: coordinate(-90, 90, t("validation.latitude_range"), t("validation.numeric")),
      longitude: coordinate(-180, 180, t("validation.longitude_range"), t("validation.numeric")),
      north_side: maxText(255),
      south_side: maxText(255),
      east_side: maxText(255),
      west_side: maxText(255),
      slug: maxText(255),
      meta_title: maxText(255),
      meta_description: maxText(2000),
      permit_no: optionalText(20),
      phase: optionalText(255),
      barcode: optionalText(255),
      location_description: optionalText(2000),
    })
    .superRefine((data, ctx) => {
      if (data.launch_date && data.completion_date) {
        const launch = new Date(data.launch_date).getTime();
        const completion = new Date(data.completion_date).getTime();
        if (!isNaN(launch) && !isNaN(completion) && completion < launch) {
          ctx.addIssue({ code: "custom", message: t("projects.create.errors.dateValidation"), path: ["completion_date"] });
        }
      }

      const total = Number(data.total_units);
      const available = Number(data.available_units);
      if (data.total_units && data.available_units && !isNaN(total) && !isNaN(available) && available > total) {
        ctx.addIssue({
          code: "custom",
          message: t("projects.create.errors.availableExceedsTotal"),
          path: ["available_units"],
        });
      }

      const checkRange = (minKey: "min_price" | "price_sq_min", maxKey: "max_price" | "price_sq_max") => {
        if (isBlank(data[minKey]) || isBlank(data[maxKey])) return;
        const min = Number(String(data[minKey]).replace(/[,\s]/g, ""));
        const max = Number(String(data[maxKey]).replace(/[,\s]/g, ""));
        if (Number.isFinite(min) && Number.isFinite(max) && max < min) {
          ctx.addIssue({ code: "custom", message: t("projects.create.errors.maxBelowMin"), path: [maxKey] });
        }
      };
      checkRange("min_price", "max_price");
      checkRange("price_sq_min", "price_sq_max");
    });
};
