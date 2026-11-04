import { z } from "zod";

// Letters (any script), digits, "-" and "_" only: rejects spaces and URL-reserved characters
// without blocking existing records whose slugs contain Arabic or uppercase letters.
const SLUG_PATTERN = /^[\p{L}\p{N}_-]+$/u;

const isHttpUrl = (value: string) => {
  const candidate = /^[a-z][a-z\d+.-]*:\/\//i.test(value) ? value : `https://${value}`;
  try {
    const url = new URL(candidate);
    return (url.protocol === "http:" || url.protocol === "https:") && url.hostname.includes(".");
  } catch {
    return false;
  }
};

// Messages are translation keys: the form tabs render them with `t(message)`.
const MAX_255 = "properties.validation.maxLength255";

/** Required select/text value; `message` also covers an untouched (undefined) select. */
const requiredString = () => z.string({ message: "validation.required" }).trim().min(1, "validation.required");

/** Optional number input: an empty `valueAsNumber` field is NaN, which zod 4's number() rejects. */
const optionalNumber = () => z.union([z.number(), z.nan()]);

const optionalText = (max = 255, maxKey = MAX_255) => z.string().trim().max(max, maxKey).optional();

/**
 * Whole number ≥ 0 that must be filled in (0 is valid, e.g. studios or land). Typed optional so
 * records loaded without a value still fit the form type; the refinement enforces it on submit.
 */
const requiredCount = () =>
  z.number({ message: "validation.required" })
    .optional()
    .refine((val) => val !== undefined && !isNaN(val), { message: "validation.required" })
    .refine((val) => val === undefined || isNaN(val) || (Number.isInteger(val) && val >= 0), {
      message: "validation.positive_integer",
    });

export const propertiesSchema = z.object({
  property_name: requiredString().max(255, MAX_255),
  property_name_en: z.string().optional(),
  property_type_id: requiredString(),
  property_subtype_id: requiredString(),
  project_id: requiredString(),
  size: z.number({ message: "validation.required" })
    .refine((val) => !isNaN(val), { message: "validation.required" })
    .refine((val) => val > 0, { message: "validation.greater_than_zero" }),
  price: z.number({ message: "validation.required" })
    .refine((val) => !isNaN(val), { message: "validation.required" })
    .refine((val) => val >= 0, { message: "validation.positive_number" }),
  status: requiredString(),
  availability_status: requiredString(),
  construction_status: requiredString(),
  finishing_status: requiredString(),

  property_no: optionalText(),
  building_name: optionalText(),
  plot_size: optionalNumber()
    .refine((val) => isNaN(val) || val >= 0, { message: "validation.positive_number" })
    .optional(),
  bua_size: optionalNumber()
    .refine((val) => isNaN(val) || val >= 0, { message: "validation.positive_number" })
    .optional(),
  // Marked required (*) in the Unit Details tab.
  bedrooms: requiredCount(),
  bathrooms: requiredCount(),
  parking_spaces: optionalNumber()
    .refine((val) => isNaN(val) || (Number.isInteger(val) && val >= 0), {
      message: "validation.positive_integer",
    })
    .optional(),
  ownership_type: z.string().optional(),
  maid_room: z.boolean().optional(),
  furnish_status: z.string().optional(),
  description: optionalText(5000, "properties.validation.maxLength5000"),
  reference_listed: optionalText(),
  broker_license: optionalText(),
  agent_license: optionalText(),
  zone_name: optionalText(),
  city_name: optionalText(),
  area_name: optionalText(),
  landmark: optionalText(500, "properties.validation.maxLength500"),
  maps_url: z.string().trim()
    .max(2048, "properties.validation.maxLength2048")
    .refine((val) => !val || isHttpUrl(val), { message: "validation.url_invalid" })
    .optional(),
  latitude: optionalNumber()
    .refine((val) => isNaN(val) || (val >= -90 && val <= 90), { message: "validation.latitude_range" })
    .optional(),
  longitude: optionalNumber()
    .refine((val) => isNaN(val) || (val >= -180 && val <= 180), { message: "validation.longitude_range" })
    .optional(),
  dld_permit_number: optionalText(),
  dld_barcode: optionalText(),
  currency: z.string().optional(),
  price_per_m2: optionalNumber()
    .refine((val) => isNaN(val) || val >= 0, { message: "validation.positive_number" })
    .optional(),
  price_description: optionalText(2000, "properties.validation.maxLength2000"),
  floor: optionalText(),
  view: z.string().optional(),
  slug: z.string().trim()
    .max(255, MAX_255)
    .refine((val) => !val || SLUG_PATTERN.test(val), { message: "validation.slug_invalid" })
    .optional(),
  meta_title: optionalText(),
  meta_description: optionalText(500, "properties.validation.maxLength500"),
  payment_plans: z.any().optional(),
});

export type PropertiesInput = z.infer<typeof propertiesSchema>;

export type PropertiesUpdateInput = Partial<PropertiesInput>;
