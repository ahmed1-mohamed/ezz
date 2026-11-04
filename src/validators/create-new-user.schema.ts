import { z } from "zod";

type Translate = (key: string, values?: Record<string, string | number>) => string;

export const USER_IMAGE_MAX_SIZE = 10 * 1024 * 1024;

/** "+", spaces, dashes and brackets are allowed; 7-15 digits (E.164). "+" alone counts as empty. */
export const isValidUserPhone = (value: string) => {
  const digits = value.replace(/[\s()-]/g, "");
  return /^\+?\d{7,15}$/.test(digits);
};
export const isEmptyUserPhone = (value?: string) => !value || value.trim() === "" || value.trim() === "+";

/** Accepts an empty value, a URL string, or an image File under the size limit. */
export const userImageSchema = (t: Translate) =>
  z
    .any()
    .optional()
    .refine((value) => !(value instanceof File) || value.type.startsWith("image/"), {
      message: t("validation.file_type"),
    })
    .refine((value) => !(value instanceof File) || value.size <= USER_IMAGE_MAX_SIZE, {
      message: t("validation.file_size"),
    });

export const userNameField = (t: Translate) =>
  z
    .string()
    .trim()
    .min(1, t("validation.required"))
    .max(255, t("validation.max_length", { max: 255 }));

export const userEmailField = (t: Translate) =>
  z
    .string()
    .trim()
    .min(1, t("validation.required"))
    .max(255, t("validation.max_length", { max: 255 }))
    .email(t("validation.email_invalid"));

export const userPhoneField = (t: Translate) =>
  z
    .string()
    .trim()
    .optional()
    .refine((value) => isEmptyUserPhone(value) || isValidUserPhone(value!), {
      message: t("validation.phone_invalid"),
    });

export const getCreateNewUserSchema = (t: Translate) =>
  z
    .object({
      first_name: userNameField(t),
      last_name: userNameField(t),
      email: userEmailField(t),
      phone_number: z
        .string()
        .trim()
        .refine((value) => isEmptyUserPhone(value) || isValidUserPhone(value), {
          message: t("validation.phone_invalid"),
        }),
      password: z
        .string()
        .min(1, t("validation.required"))
        .min(8, t("validation.password_min"))
        .max(100, t("validation.password_max_100")),
      password_confirmation: z.string().min(1, t("validation.confirm_password_required")),
      role_id: z.number({ message: t("validation.required") }),
      user_type: z.string().optional(),
      developer_id: z.number().optional(),
      developer_role: z.string().optional(),
      status: z.enum(["active", "inactive", "banned"]).optional(),
      description: z.string().trim().max(2000, t("validation.max_length", { max: 2000 })).optional(),
      profile_picture: userImageSchema(t),
    })
    .refine((data) => data.password === data.password_confirmation, {
      message: t("validation.passwords_must_match"),
      path: ["password_confirmation"],
    })
    .refine(
      (data) => {
        if (data.user_type?.toLowerCase() === "developer") {
          return !!data.developer_id;
        }
        return true;
      },
      {
        message: t("validation.developer_required"),
        path: ["developer_id"],
      }
    )
    .refine(
      (data) => {
        if (data.user_type?.toLowerCase() === "developer") {
          return !!data.developer_role;
        }
        return true;
      },
      {
        message: t("validation.developer_role_required"),
        path: ["developer_role"],
      }
    );

export type CreateNewUserInput = z.infer<ReturnType<typeof getCreateNewUserSchema>>;
