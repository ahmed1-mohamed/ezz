import { z } from "zod";

type Translate = (key: string, values?: Record<string, string | number>) => string;

/** At most two decimal places (prices are entered with step 0.01 and sent as cents). */
const hasAtMostTwoDecimals = (value: number) => Math.abs(Math.round(value * 100) - value * 100) < 1e-6;

const requiredText = (t: Translate, max: number, requiredMessage?: string, min = 1) =>
  z
    .string()
    .trim()
    .min(1, requiredMessage ?? t("validation.required"))
    .min(min, t("validation.min_length", { min }))
    .max(max, t("validation.max_length", { max }));

/** Number inputs registered with `valueAsNumber`: an empty input is NaN, which fails as "required". */
const requiredNumber = (t: Translate) => z.number({ message: t("validation.required") });

const price = (t: Translate) =>
  requiredNumber(t)
    .min(0, t("subscriptions.common.cannotBeNegative"))
    .refine(hasAtMostTwoDecimals, t("subscriptions.validation.priceDecimals"));

const wholeNumber = (t: Translate, min: number, minMessage: string) =>
  requiredNumber(t).int(t("subscriptions.validation.wholeNumber")).min(min, minMessage);

export const getCustomerPlanSchema = (t: Translate) =>
  z.object({
    code: requiredText(t, 100, t("subscriptions.updateCustomerPlanModal.planCodeRequired")),
    name: requiredText(t, 255, t("subscriptions.updateCustomerPlanModal.planNameRequired")),
    description: z.string().trim().max(2000, t("validation.max_length", { max: 2000 })),
    price: price(t),
    interval: z.enum(["month", "year"], { message: t("validation.required") }),
    currency: z
      .string()
      .trim()
      .min(1, t("validation.required"))
      .regex(/^[A-Za-z]{3}$/, t("subscriptions.validation.currencyCode")),
    is_active: z.enum(["true", "false"]),
    sort_order: wholeNumber(t, 0, t("subscriptions.common.cannotBeNegative")),
  });

export type CustomerPlanFormValues = z.infer<ReturnType<typeof getCustomerPlanSchema>>;

export const CUSTOMER_PLAN_DEFAULTS: CustomerPlanFormValues = {
  code: "",
  name: "",
  description: "",
  price: 0,
  interval: "month",
  currency: "USD",
  is_active: "true",
  sort_order: 1,
};

/**
 * A feature limit is optional (empty = unlimited); when set it must be a whole number ≥ 0.
 * -1 is how stored plans mark "unlimited", so it stays valid.
 */
/** Empty, -1 (unlimited) or a whole number ≥ 0. The API may return limits as strings ("5", "-1", ""). */
export const isValidFeatureLimit = (limit: number | string | null | undefined) => {
  if (limit === null || limit === undefined || limit === "") return true;
  const value = Number(limit);
  return value === -1 || (Number.isInteger(value) && value >= 0);
};

export const getAddonSchema = (t: Translate) =>
  z.object({
    feature_id: z.string().min(1, t("subscriptions.addonModal.typeRequired")),
    name: requiredText(t, 255, t("subscriptions.common.nameRequired")),
    code: requiredText(t, 100, t("subscriptions.addonModal.codeRequired")),
    amount: requiredNumber(t).min(0, t("subscriptions.common.cannotBeNegative")),
    price_cents: price(t),
    is_active: z.boolean(),
  });

export type AddonFormValues = z.infer<ReturnType<typeof getAddonSchema>>;

/** The form edits the price in currency units; the payload sends it as `price_cents`. */
export const ADDON_FIELD_MAP = { price: "price_cents" } as const;

export const getBadgeSchema = (t: Translate) =>
  z
    .object({
      name: requiredText(t, 255, t("subscriptions.common.nameRequired"), 2),
      applies_to: z.enum(["developer", "agent", "property"], {
        message: t("subscriptions.badgeModal.appliesToRequired"),
      }),
      monthly_price_credits: requiredNumber(t).min(0, t("subscriptions.common.cannotBeNegative")),
      max_entities: wholeNumber(t, 1, t("subscriptions.badgeModal.min1")),
      priority_boost: wholeNumber(t, 0, t("subscriptions.badgeModal.min0")),
      is_active: z.boolean(),
      has_placement: z.boolean(),
      placement_platform: z.string(),
      placement_location: z.string().trim().max(255, t("validation.max_length", { max: 255 })),
      placement_format: z.string(),
    })
    .refine((data) => !data.has_placement || !!data.placement_location, {
      message: t("subscriptions.badgeModal.locationRequired"),
      path: ["placement_location"],
      // Run alongside the other field errors instead of only after they're fixed.
      when: (payload) =>
        !payload.issues.some((issue) => ["has_placement", "placement_location"].includes(String(issue.path?.[0]))),
    });

export type BadgeFormValues = z.infer<ReturnType<typeof getBadgeSchema>>;

/** Placement is sent nested (`placement.location`); map it back to the flat form fields. */
export const BADGE_FIELD_MAP = {
  "placement.platform": "placement_platform",
  "placement.location": "placement_location",
  "placement.format": "placement_format",
  placement: "placement_location",
  price_credits: "monthly_price_credits",
} as const;

export const getDeveloperPackageSchema = (t: Translate) =>
  z.object({
    code: requiredText(t, 100, t("subscriptions.packageModal.codeRequired"), 2),
    name: requiredText(t, 255, t("subscriptions.packageModal.nameRequired"), 2),
    price_dollars: requiredNumber(t)
      .min(0, t("subscriptions.packageModal.priceNonNegative"))
      .refine(hasAtMostTwoDecimals, t("subscriptions.validation.priceDecimals")),
    credits: wholeNumber(t, 1, t("subscriptions.packageModal.creditsMin")),
    is_active: z.boolean(),
  });

export type DeveloperPackageFormValues = z.infer<ReturnType<typeof getDeveloperPackageSchema>>;

/** The form edits the price in currency units; the payload sends it as `price_cents`. */
export const DEVELOPER_PACKAGE_FIELD_MAP = { price_cents: "price_dollars", price: "price_dollars" } as const;
