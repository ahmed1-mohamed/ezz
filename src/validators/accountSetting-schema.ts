import { z } from "zod";

type Translate = (key: string, values?: Record<string, string | number>) => string;

export const PROFILE_PICTURE_MAX_SIZE_MB = 5;
const PROFILE_PICTURE_TYPES = ["image/svg+xml", "image/png", "image/jpeg", "image/gif"];

export const existingImageSchema = z.object({
    url: z.string(),
    existingFile: z.literal(true),
});

/** Profile picture: an already-uploaded image, or a new SVG/PNG/JPG/GIF file (as the picker says). */
export function getProfilePictureSchema(t: Translate) {
    return z
        .union([z.instanceof(File), existingImageSchema])
        .optional()
        .superRefine((value, ctx) => {
            if (!(value instanceof File)) return;
            if (!PROFILE_PICTURE_TYPES.includes(value.type)) {
                ctx.addIssue({ code: "custom", message: t("experts.settings.imagePicker.invalidType") });
            } else if (value.size > PROFILE_PICTURE_MAX_SIZE_MB * 1024 * 1024) {
                ctx.addIssue({
                    code: "custom",
                    message: t("experts.settings.imagePicker.tooLarge", { max: PROFILE_PICTURE_MAX_SIZE_MB }),
                });
            }
        });
}

export function getUpdateAdminSchema(t: Translate) {
    const nameRule = z
        .string()
        .trim()
        .min(1, { message: t("validation.required") })
        .min(2, { message: t("validation.min_length", { min: 2 }) })
        .max(255, { message: t("validation.max_length", { max: 255 }) });

    return z.object({
        first_name: nameRule,
        last_name: nameRule,
        email: z
            .string()
            .trim()
            .min(1, { message: t("validation.required") })
            .max(255, { message: t("validation.max_length", { max: 255 }) })
            .email({ message: t("validation.email_invalid") }),
        // Optional (the update skips an empty phone); format checked when present.
        // react-phone-input-2 gives digits only; stored values may still carry "+", spaces or dashes.
        phone_number: z
            .string()
            .trim()
            .refine((value) => !value || /^\d{7,15}$/.test(value.replace(/[\s()+-]/g, "")), {
                message: t("validation.phone_invalid"),
            }),
        profile_picture: getProfilePictureSchema(t),
    });
}

export type UpdateAdminValues = z.infer<ReturnType<typeof getUpdateAdminSchema>>;
export type ExistingImage = z.infer<typeof existingImageSchema>;
