import { z } from "zod";

const optionalNumber = z
  .union([z.number(), z.nan()])
  .optional()
  .refine((v) => v === undefined || Number.isNaN(v) || v >= 0, { message: "validation.positive_number" });

const requiredNumber = z
  .number({ message: "validation.required" })
  .refine((v) => !Number.isNaN(v), { message: "validation.required" })
  .refine((v) => v >= 0, { message: "validation.positive_number" });

const requiredCount = requiredNumber.refine((v) => Number.isNaN(v) || Number.isInteger(v), {
  message: "validation.positive_integer",
});

const MAX_255 = "readyMarket.validation.maxLength255";
const optionalText = (max = 255, maxKey = MAX_255) => z.string().trim().max(max, maxKey).optional();

/** Digits with optional leading +, spaces, dashes, dots or brackets; 7–15 digits in total. */
const PHONE_PATTERN = /^\+?[\d\s\-().]+$/;
const isValidPhone = (value: string) => {
  if (!PHONE_PATTERN.test(value)) return false;
  const digits = value.replace(/\D/g, "").length;
  return digits >= 7 && digits <= 15;
};
const requiredPhone = z
  .string()
  .trim()
  .min(1, "validation.required")
  .max(30, "readyMarket.validation.maxLength30")
  .refine(isValidPhone, { message: "validation.phone_invalid" });

const plainTextLength = (html: string) => html.replace(/<[^>]*>/g, "").trim().length;

const optionalInteger = optionalNumber.refine((v) => v === undefined || Number.isNaN(v) || Number.isInteger(v), {
  message: "validation.positive_integer",
});

const isHttpUrl = (value: string) => {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
};

/** Messages are translation keys rendered with t(). */
export const readyUnitSchema = z
  .object({
    listing_type: z.enum(["sale", "rent"], { message: "validation.required" }),
    property_name: z.string().trim().min(1, "validation.required").max(255, MAX_255),
    property_no: optionalText(),
    description: z
      .string()
      .refine((v) => plainTextLength(v) > 0, { message: "validation.required" })
      .refine((v) => plainTextLength(v) <= 5000, { message: "readyMarket.validation.maxLength5000" }),
    property_type_id: z.string().min(1, "validation.required"),
    property_subtype_id: z.string().min(1, "validation.required"),
    price: requiredNumber,
    size: requiredNumber,
    bedrooms: requiredCount,
    bathrooms: requiredCount,
    floor: optionalInteger,
    view: optionalText(),
    year_built: optionalText(20, "readyMarket.validation.maxLength20"),
    parking_spaces: optionalInteger,

    payment_name: optionalText(),
    payment_type: z.string().optional(),
    payment_total_cost: optionalNumber,
    payment_intervals: optionalInteger,
    payment_down_payment: optionalNumber,
    payment_description: optionalText(2000, "readyMarket.validation.maxLength2000"),

    user_id: z.number({ message: "validation.required" }).nullable().refine((v) => v !== null, { message: "validation.required" }),
    email: z.string().trim().min(1, "validation.required").max(255, MAX_255).email("validation.email_invalid"),
    phone_number: requiredPhone,
    whatsapp_number: requiredPhone,

    status: z.enum(["active", "inactive"]),
    availability_status: z.enum(["available", "reserved", "sold"]),
    construction_status: z.enum(["ready", "under-construction", "off-plan"]),
    finishing_status: z.enum(["finished", "semi-finished", "unfinished"]),

    google_map_link: z
      .string()
      .trim()
      .min(1, "validation.required")
      .max(2048, "readyMarket.validation.maxLength2048")
      .refine(isHttpUrl, { message: "validation.url_invalid" }),
    latitude: requiredNumber.refine((v) => v >= -90 && v <= 90, { message: "validation.latitude_range" }),
    longitude: z
      .number({ message: "validation.required" })
      .refine((v) => !Number.isNaN(v), { message: "validation.required" })
      .refine((v) => v >= -180 && v <= 180, { message: "validation.longitude_range" }),
    country: optionalText(),
    city: optionalText(),
    area: optionalText(),
    address: optionalText(500, "readyMarket.validation.maxLength500"),

    feature_ids: z.array(z.number()),
  })
  .superRefine((data, ctx) => {
    if (data.payment_type === "installments") {
      if (!(Number(data.payment_intervals) >= 1)) {
        ctx.addIssue({ code: "custom", path: ["payment_intervals"], message: "validation.required" });
      }
      if (data.payment_down_payment === undefined || Number.isNaN(data.payment_down_payment)) {
        ctx.addIssue({ code: "custom", path: ["payment_down_payment"], message: "validation.required" });
      }
    }
  });

/** Create also requires floor, city and area; in edit they are optional. */
const CREATE_REQUIRED = ["city", "area"] as const;
export const readyUnitCreateSchema = readyUnitSchema.superRefine((data, ctx) => {
  if (data.floor === undefined || Number.isNaN(data.floor)) {
    ctx.addIssue({ code: "custom", path: ["floor"], message: "validation.required" });
  }
  CREATE_REQUIRED.forEach((field) => {
    if (!data[field]?.trim()) ctx.addIssue({ code: "custom", path: [field], message: "validation.required" });
  });
});

export type ReadyUnitFormValues = z.infer<typeof readyUnitSchema>;

export const READY_UNIT_DEFAULTS: Partial<ReadyUnitFormValues> = {
  listing_type: "sale",
  property_name: "",
  description: "",
  property_type_id: "",
  property_subtype_id: "",
  view: "",
  year_built: "",
  payment_name: "",
  payment_type: "",
  payment_description: "",
  user_id: null,
  email: "",
  phone_number: "",
  whatsapp_number: "",
  status: "active",
  availability_status: "available",
  construction_status: "ready",
  finishing_status: "finished",
  google_map_link: "",
  city: "",
  area: "",
  address: "",
  feature_ids: [],
};
