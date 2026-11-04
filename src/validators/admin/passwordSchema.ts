import z from "zod";

/** Any character that isn't a letter, digit or whitespace counts as special (e.g. ! @ # ?). */
export const PASSWORD_SPECIAL_CHAR_REGEX = /[^A-Za-z0-9\s]/;

/** Account password rules (shown in the change-password requirements list). */
export const newPasswordRule = z
    .string()
    .min(1, "validation.required")
    .min(10, "validation.password_min_10")
    .max(100, "validation.password_max_100")
    .regex(/[a-z]/, "validation.password_lowercase")
    .regex(PASSWORD_SPECIAL_CHAR_REGEX, "validation.password_special_char");

export const passwordSchema = z
    .object({
        currentPassword: z.string().min(1, "validation.required"),
        newPassword: newPasswordRule,
        confirmPassword: z.string().min(1, "validation.confirm_password_required"),
    })
    .refine((d) => d.newPassword === d.confirmPassword, {
        message: "validation.passwords_must_match",
        path: ["confirmPassword"],
    })
    .refine((d) => !d.currentPassword || d.newPassword !== d.currentPassword, {
        message: "validation.password_same_as_current",
        path: ["newPassword"],
    });

export type PasswordFormValues = z.infer<typeof passwordSchema>;
