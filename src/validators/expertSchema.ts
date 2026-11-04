import { z } from "zod";

type Translate = (key: string, values?: Record<string, string | number>) => string;

export const EXPERT_PHOTO_MAX_SIZE = 10 * 1024 * 1024;
export const EXPERT_YEARS_MAX = 100;

/** "+", spaces, dashes and brackets are allowed; 7-15 digits (E.164). */
const isValidExpertPhone = (value: string) => /^\+?\d{7,15}$/.test(value.replace(/[\s()-]/g, ""));

const isValidExpertUrl = (value: string) => {
  // Scheme optional: existing profiles store values like "www.site.com".
  const withScheme = /^[a-z][a-z\d+.-]*:\/\//i.test(value) ? value : `https://${value}`;
  if (!/^https?:\/\//i.test(withScheme)) return false;
  try {
    return new URL(withScheme).hostname.includes(".");
  } catch {
    return false;
  }
};

const optionalUrl = (t: Translate) =>
  z
    .string()
    .trim()
    .max(255, t("validation.max_length", { max: 255 }))
    .refine((value) => !value || isValidExpertUrl(value), {
      message: t("experts.edit.form.validation.invalidUrl"),
    })
    .optional()
    .or(z.literal(""));

const photoField = (t: Translate) =>
  z
    .any()
    .optional()
    .refine((value) => !(value instanceof File) || value.type.startsWith("image/"), {
      message: t("validation.file_type"),
    })
    .refine((value) => !(value instanceof File) || value.size <= EXPERT_PHOTO_MAX_SIZE, {
      message: t("validation.file_size"),
    });

/**
 * Number input registered with `valueAsNumber` (empty → NaN). `required` rejects empty values;
 * `integer` rejects fractions. The value type stays loose so it fits the forms' `number | ""`.
 */
const numberField = (
  t: Translate,
  { required, requiredMessage, integer, max }: { required?: boolean; requiredMessage?: string; integer?: boolean; max?: number }
) =>
  z.any().superRefine((value, ctx) => {
    const isEmpty = value === "" || value === null || value === undefined || (typeof value === "number" && Number.isNaN(value));
    if (isEmpty) {
      if (required) ctx.addIssue({ code: "custom", message: requiredMessage ?? t("validation.required") });
      return;
    }
    const num = Number(value);
    if (!Number.isFinite(num)) return ctx.addIssue({ code: "custom", message: t("validation.numeric") });
    if (num < 0) return ctx.addIssue({ code: "custom", message: t("validation.positive_number") });
    if (integer && !Number.isInteger(num)) return ctx.addIssue({ code: "custom", message: t("validation.positive_integer") });
    if (max !== undefined && num > max) {
      ctx.addIssue({ code: "custom", message: t("experts.validation.maxValue", { max }) });
    }
  });

const certificationsField = (t: Translate) =>
  z
    .array(
      z.object({
        cert_name: z.string().trim().max(128, t("experts.edit.form.validation.certMaxLength")).optional().or(z.literal("")),
      })
    )
    .optional();

const displayNameField = (t: Translate) =>
  z
    .string()
    .trim()
    .min(1, t("experts.edit.form.validation.nameRequired"))
    .max(128, t("experts.edit.form.validation.nameMaxLength"));

const bioField = (t: Translate) =>
  z
    .string()
    .trim()
    .min(1, t("experts.edit.form.validation.bioRequired"))
    .max(2000, t("validation.max_length", { max: 2000 }));

export const getExpertSchema = (t: Translate) =>
  z.object({
    email: z
      .string()
      .trim()
      .min(1, t("experts.edit.form.validation.emailRequired"))
      .max(255, t("validation.max_length", { max: 255 }))
      .email(t("experts.edit.form.validation.invalidEmail")),
    phone_number: z
      .string()
      .trim()
      .min(1, t("experts.edit.form.validation.phoneRequired"))
      .refine(isValidExpertPhone, { message: t("validation.phone_invalid") }),
    display_name: displayNameField(t),
    title: z.string().trim().max(128, t("experts.edit.form.validation.titleMaxLength")).optional().or(z.literal("")),
    bio: bioField(t),
    years_experience: numberField(t, {
      required: true,
      requiredMessage: t("experts.edit.form.validation.yearsExperienceRequired"),
      integer: true,
      max: EXPERT_YEARS_MAX,
    }),
    certifications: certificationsField(t),
    website: optionalUrl(t),
    linkedin: optionalUrl(t),
    languages: z.array(z.union([z.string(), z.number()])).min(1, t("experts.edit.form.validation.selectLanguage")),
    categories: z.array(z.number()).min(1, t("experts.edit.form.validation.selectCategory")),
    countries: z.array(z.number()).min(1, t("experts.edit.form.validation.selectCountry")),
    podcast: z.boolean().optional(),
    image: photoField(t),
  });

export type ExpertFormValues = z.infer<ReturnType<typeof getExpertSchema>>;

/** Schema for the expert edit page (all tabs). Email and phone are read-only there. */
export const getEditExpertSchema = (t: Translate) =>
  z.object({
    image: photoField(t),
    display_name: displayNameField(t),
    title: z.string().trim().max(128, t("experts.edit.form.validation.titleMaxLength")).optional().or(z.literal("")),
    email: z.any().optional(),
    phone_number: z.any().optional(),
    bio: bioField(t),
    status: z.string().optional(),
    podcast: z.boolean().optional(),
    years_experience: numberField(t, {
      required: true,
      requiredMessage: t("experts.edit.form.validation.yearsExperienceRequired"),
      integer: true,
      max: EXPERT_YEARS_MAX,
    }),
    website: optionalUrl(t),
    linkedin: optionalUrl(t),
    currency: z.string().optional(),
    starting_from: numberField(t, {}),
    rate_per_30min_cents: numberField(t, {}),
    languages: z.array(z.number()).min(1, t("experts.edit.form.validation.selectLanguage")),
    categories: z.array(z.number()).min(1, t("experts.edit.form.validation.selectCategory")),
    countries: z.array(z.number()).min(1, t("experts.edit.form.validation.selectCountry")),
    certifications: certificationsField(t),
  });

/** Backend field names that differ from the expert forms' field names. */
export const EXPERT_FIELD_MAP = {
  photo: "image",
  photo_url: "image",
  name: "display_name",
  phone: "phone_number",
  experience: "years_experience",
} as const;
