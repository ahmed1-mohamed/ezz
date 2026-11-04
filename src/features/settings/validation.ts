import { z } from "zod";
import { GeneralSettings } from "./types";

type Translate = (key: string, values?: Record<string, string | number>) => string;

/** Digits with optional leading +, spaces, dashes, dots or brackets; 7–15 digits in total. */
const PHONE_PATTERN = /^\+?[\d\s\-().]+$/;
export const isValidPhone = (value: string) => {
  if (!PHONE_PATTERN.test(value)) return false;
  const digits = value.replace(/\D/g, "").length;
  return digits >= 7 && digits <= 15;
};

const isValidTimezone = (value: string) => {
  try {
    new Intl.DateTimeFormat("en", { timeZone: value });
    return true;
  } catch {
    return false;
  }
};

/** Maps the first issue per field to its message (for useState forms). */
export function zodIssuesToErrors(error: z.ZodError): Record<string, string> {
  const errors: Record<string, string> = {};
  error.issues.forEach((issue) => {
    const field = String(issue.path[0] ?? "");
    if (field && !errors[field]) errors[field] = issue.message;
  });
  return errors;
}

export const getGeneralSettingsSchema = (t: Translate) => {
  const optionalText = (max: number) => z.string().trim().max(max, t("validation.max_length", { max }));
  const optionalPhone = z
    .string()
    .trim()
    .refine((val) => !val || isValidPhone(val), t("validation.phone_invalid"));

  return z.object({
    site_name: z
      .string()
      .trim()
      .min(1, t("validation.required"))
      .max(255, t("validation.max_length", { max: 255 })),
    site_name_ar: optionalText(255).optional(),
    site_tagline: optionalText(255),
    contact_email: z
      .string()
      .trim()
      .min(1, t("validation.required"))
      .max(255, t("validation.max_length", { max: 255 }))
      .pipe(z.email(t("validation.email_invalid"))),
    contact_phone: optionalPhone,
    whatsapp_number: optionalPhone,
    timezone: z
      .string()
      .trim()
      .min(1, t("validation.required"))
      .refine(isValidTimezone, t("siteSettings.validation.timezoneInvalid")),
  });
};

export function validateGeneralSettings(form: GeneralSettings, t: Translate): Record<string, string> {
  const result = getGeneralSettingsSchema(t).safeParse(form);
  return result.success ? {} : zodIssuesToErrors(result.error);
}

/** Max length for the policy / contract / quotation text areas. */
export const LONG_TEXT_MAX = 50000;

export function validateLongText(value: string | undefined, t: Translate): string | undefined {
  if (value && value.length > LONG_TEXT_MAX) return t("validation.max_length", { max: LONG_TEXT_MAX });
  return undefined;
}

/** Validates the "Add item" dialog of App Settings for the active sub-tab; returns field → message. */
export function validateAppSettingsItem(
  tab: string,
  values: Record<string, string>,
  t: Translate
): Record<string, string> {
  const errors: Record<string, string> = {};
  const text = (field: string, { required = false, max = 255 } = {}) => {
    const value = (values[field] ?? "").trim();
    if (!value) {
      if (required) errors[field] = t("validation.required");
    } else if (value.length > max) {
      errors[field] = t("validation.max_length", { max });
    }
    return value;
  };
  const pattern = (field: string, regex: RegExp, messageKey: string) => {
    const value = (values[field] ?? "").trim();
    if (value && !errors[field] && !regex.test(value)) errors[field] = t(messageKey);
  };

  text("name", { required: true });
  switch (tab) {
    case "countries":
      text("code", { required: true, max: 3 });
      pattern("code", /^[A-Za-z]{2,3}$/, "siteSettings.validation.countryCode");
      text("currency_code", { required: true, max: 3 });
      pattern("currency_code", /^[A-Za-z]{3}$/, "siteSettings.validation.currencyCode");
      break;
    case "currencies": {
      text("code", { required: true, max: 3 });
      pattern("code", /^[A-Za-z]{3}$/, "siteSettings.validation.currencyCode");
      text("symbol", { max: 10 });
      const rate = (values.exchange_rate ?? "").trim();
      if (!rate) errors.exchange_rate = t("validation.required");
      else if (!Number.isFinite(Number(rate))) errors.exchange_rate = t("validation.numeric");
      else if (Number(rate) <= 0) errors.exchange_rate = t("validation.greater_than_zero");
      break;
    }
    case "cities":
      text("country_id", { required: true });
      break;
    case "areas":
      text("city_id", { required: true });
      break;
    case "amenities":
      text("category");
      break;
    case "property_types":
      text("code", { max: 100 });
      pattern("code", /^[A-Za-z0-9_-]+$/, "validation.slug_invalid");
      break;
  }
  return errors;
}

interface CredentialRule {
  /** Defaults to 255. */
  max?: number;
  /** Checked only when the field has a value — none of these fields are required. */
  validate?: (value: string) => boolean;
  /** Translation key shown when `validate` fails. */
  messageKey?: string;
}

const KEY_MAX = 2048;
const digitsOnly = (value: string) => /^\d+$/.test(value);
const phoneRule: CredentialRule = { max: 30, validate: isValidPhone, messageKey: "validation.phone_invalid" };
const keyRule: CredentialRule = { max: KEY_MAX };
const numericIdRule: CredentialRule = { max: 64, validate: digitsOnly, messageKey: "siteSettings.validation.digitsOnly" };

/** Format rules for the payment gateway / integration credential fields, keyed by item id then field. */
export const CREDENTIAL_RULES: Record<string, Record<string, CredentialRule>> = {
  // Payment gateways
  stripe: {
    publishable_key: { max: KEY_MAX, validate: (v) => /^pk_(live|test)_\S+$/.test(v), messageKey: "siteSettings.validation.stripePublishableKey" },
    secret_key: { max: KEY_MAX, validate: (v) => /^(sk|rk)_(live|test)_\S+$/.test(v), messageKey: "siteSettings.validation.stripeSecretKey" },
    webhook_secret: { max: KEY_MAX, validate: (v) => /^whsec_\S+$/.test(v), messageKey: "siteSettings.validation.stripeWebhookSecret" },
    currency: { max: 3, validate: (v) => /^[A-Za-z]{3}$/.test(v), messageKey: "siteSettings.validation.currencyCode" },
  },
  paymob: {
    api_key: keyRule,
    integration_id: numericIdRule,
    iframe_id: numericIdRule,
    hmac_secret: keyRule,
  },
  paypal: {
    client_id: keyRule,
    client_secret: keyRule,
  },
  bank_transfer: {
    bank_name: {},
    account_name: {},
    iban: {
      max: 42,
      validate: (v) => /^[A-Z]{2}\d{2}[A-Z0-9]{11,30}$/i.test(v.replace(/\s+/g, "")),
      messageKey: "siteSettings.validation.ibanInvalid",
    },
    swift: { max: 11, validate: (v) => /^[A-Z]{6}[A-Z0-9]{2}([A-Z0-9]{3})?$/i.test(v), messageKey: "siteSettings.validation.swiftInvalid" },
    instructions: { max: 2000 },
  },
  instapay: {
    instapay_address: { validate: (v) => /^[^\s@]+@instapay$/i.test(v), messageKey: "siteSettings.validation.instapayAddress" },
    mobile_number: phoneRule,
  },
  pay_at_office: {
    office_address: { max: 500 },
    working_hours: {},
    contact_phone: phoneRule,
  },
  // Integrations
  twilio_sms: {
    account_sid: { max: 34, validate: (v) => /^AC[0-9a-fA-F]{32}$/.test(v), messageKey: "siteSettings.validation.twilioSid" },
    auth_token: keyRule,
    sender_number: phoneRule,
  },
  whatsapp_cloud: {
    phone_number_id: numericIdRule,
    waba_id: numericIdRule,
    access_token: keyRule,
    webhook_verify_token: {},
  },
  sendgrid_email: {
    api_key: keyRule,
    from_email: { validate: (v) => z.email().safeParse(v).success, messageKey: "validation.email_invalid" },
    from_name: {},
  },
  facebook_lead_ads: {
    app_id: numericIdRule,
    app_secret: keyRule,
    page_access_token: keyRule,
  },
  agora_video: {
    app_id: keyRule,
    app_certificate: keyRule,
  },
  google_analytics: {
    measurement_id: { max: 50, validate: (v) => /^G-[A-Z0-9]+$/i.test(v), messageKey: "siteSettings.validation.measurementId" },
    api_secret: keyRule,
  },
  microsoft_clarity: {
    project_id: { max: 50 },
  },
};

/** Validates one gateway / integration's fields; returns field → message for the invalid ones. */
export function validateCredentials(
  itemId: string,
  values: Record<string, string>,
  t: Translate
): Record<string, string> {
  const rules = CREDENTIAL_RULES[itemId] ?? {};
  const errors: Record<string, string> = {};
  Object.entries(rules).forEach(([field, rule]) => {
    const value = (values[field] ?? "").trim();
    if (!value) return;
    const max = rule.max ?? 255;
    if (value.length > max) {
      errors[field] = t("validation.max_length", { max });
    } else if (rule.validate && !rule.validate(value)) {
      errors[field] = t(rule.messageKey ?? "validation.api.invalidValue");
    }
  });
  return errors;
}
