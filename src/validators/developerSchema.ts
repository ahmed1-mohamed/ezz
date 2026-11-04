import { z } from "zod";

type Translate = (key: string, values?: Record<string, string | number>) => string;

export const DEVELOPER_LOGO_MAX_SIZE = 10 * 1024 * 1024;

/** Plain text of a rich-text (HTML) value, used for required/length checks. */
const developerHtmlToText = (html?: string) =>
  (html ?? "")
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

/** "+", spaces, dashes and brackets are allowed; 7-15 digits (E.164). */
const isValidDeveloperPhone = (value: string) => /^\+?\d{7,15}$/.test(value.replace(/[\s()-]/g, ""));

const isValidDeveloperUrl = (value: string) => {
  if (!/^https?:\/\//i.test(value)) return false;
  try {
    const { hostname } = new URL(value);
    return hostname.includes(".");
  } catch {
    return false;
  }
};

export const getDeveloperSchema = (t: Translate, mode: "create" | "edit" = "create") =>
  z
    .object({
      name: z
        .string()
        .trim()
        .min(1, t("developers.validation.nameRequired"))
        .max(255, t("validation.max_length", { max: 255 })),
      email: z
        .string()
        .trim()
        .min(1, t("validation.required"))
        .max(255, t("validation.max_length", { max: 255 }))
        .email(t("developers.validation.invalidEmail")),
      phone_number: z
        .string()
        .trim()
        .min(1, t("developers.validation.phoneRequired"))
        .max(30, t("validation.max_length", { max: 30 }))
        // Edit: stored numbers like "04.123.4567" or "800-EMAAR" must stay saveable.
        .refine((value) => mode === "edit" || isValidDeveloperPhone(value), { message: t("validation.phone_invalid") }),
      website: z
        .string()
        .trim()
        .min(1, t("developers.validation.websiteRequired"))
        .max(2048, t("validation.max_length", { max: 2048 }))
        .refine(isValidDeveloperUrl, { message: t("developers.validation.invalidUrlProtocol") }),
      logo: z
        .any()
        .optional()
        .refine((value) => !(value instanceof File) || value.type.startsWith("image/"), {
          message: t("validation.file_type"),
        })
        .refine((value) => !(value instanceof File) || value.size <= DEVELOPER_LOGO_MAX_SIZE, {
          message: t("validation.file_size"),
        }),
      description: z
        .string()
        .refine((value) => developerHtmlToText(value).length > 0, {
          message: t("developers.validation.descriptionRequired"),
        })
        .refine((value) => developerHtmlToText(value).length <= 5000, {
          message: t("validation.max_length", { max: 5000 }),
        }),
      status: z.string().optional(),
      is_top: z.boolean(),
      country_id: z.string().optional(),
      slug: z
        .string()
        .trim()
        .max(255, t("validation.max_length", { max: 255 }))
        .refine((value) => !/[\s/?#&%"'<>\\]/.test(value), { message: t("validation.slug_invalid") })
        .optional(),
      meta_title: z.string().trim().max(255, t("validation.max_length", { max: 255 })).optional(),
      meta_description: z.string().trim().max(2000, t("validation.max_length", { max: 2000 })).optional(),
      sync_erp_next: z.boolean().optional(),
      erp_next: z
        .object({
          admin_first_name: z.string().optional(),
          admin_last_name: z.string().optional(),
          admin_email: z.string().optional(),
          admin_password: z.string().optional(),
        })
        .optional(),
      admin_password: z.string().optional(),
    })
    .superRefine((data, ctx) => {
      // Mirrors backend rule: admin details required when creating ERPNext tenant.
      if (!data.sync_erp_next) return;

      const erp = data.erp_next;

      const firstName = erp?.admin_first_name?.trim();
      if (!firstName) {
        ctx.addIssue({
          code: "custom",
          path: ["erp_next", "admin_first_name"],
          message: t("developers.validation.adminFirstNameRequired"),
        });
      }

      const lastName = erp?.admin_last_name?.trim();
      if (!lastName) {
        ctx.addIssue({
          code: "custom",
          path: ["erp_next", "admin_last_name"],
          message: t("developers.validation.adminLastNameRequired"),
        });
      }

      const email = erp?.admin_email?.trim();
      if (!email) {
        ctx.addIssue({
          code: "custom",
          path: ["erp_next", "admin_email"],
          message: t("developers.validation.adminEmailRequired"),
        });
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        ctx.addIssue({
          code: "custom",
          path: ["erp_next", "admin_email"],
          message: t("developers.validation.invalidEmail"),
        });
      }

      const password = erp?.admin_password ?? data.admin_password ?? "";
      const issuePassword = (key: string) => {
        ctx.addIssue({ code: "custom", path: ["erp_next", "admin_password"], message: t(key) });
        if (data.admin_password !== undefined && data.admin_password !== "") {
          ctx.addIssue({ code: "custom", path: ["admin_password"], message: t(key) });
        }
      };

      if (!password) return issuePassword("developers.validation.adminPasswordRequired");
      if (password.length < 8) return issuePassword("developers.validation.adminPasswordMin");
      if (!/[a-z]/.test(password) || !/[A-Z]/.test(password))
        return issuePassword("developers.validation.adminPasswordMixedCase");
      if (!/\d/.test(password)) return issuePassword("developers.validation.adminPasswordNumber");
    });

export type FormValues = z.infer<ReturnType<typeof getDeveloperSchema>>;

/** Backend field names that differ from the developer form's. */
export const DEVELOPER_FIELD_MAP: Record<string, any> = {
  phone: "phone_number",
  developer_name: "name",
  logo: "logo",
  country: "country_id",
  "erp_next.admin_first_name": "erp_next.admin_first_name",
  "erp_next.admin_last_name": "erp_next.admin_last_name",
  "erp_next.admin_email": "erp_next.admin_email",
  "erp_next.admin_password": "erp_next.admin_password",
  admin_first_name: "erp_next.admin_first_name",
  admin_last_name: "erp_next.admin_last_name",
  admin_email: "erp_next.admin_email",
  admin_password: "erp_next.admin_password",
};
