import { z } from "zod";
import { getProfilePictureSchema } from "../accountSetting-schema";

type Translate = (key: string, values?: Record<string, string | number>) => string;

export const NAME_MAX_LENGTH = 128;
export const CERT_NAME_MAX_LENGTH = 128;
const URL_MAX_LENGTH = 255;
const BIO_MAX_LENGTH = 2000;
const YEARS_EXPERIENCE_MAX = 100;

export const existingImageSchema = z.object({
    url: z.string(),
    existingFile: z.literal(true),
});

function isHttpUrl(value: string): boolean {
    try {
        const url = new URL(value);
        return (url.protocol === "http:" || url.protocol === "https:") && !!url.hostname;
    } catch {
        return false;
    }
}

/** Text content of the rich-text bio (tags and non-breaking spaces removed). */
export function getBioText(html: string): string {
    return html
        .replace(/<[^>]*>/g, " ")
        .replace(/&nbsp;/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

export function getUpdateExpertSchema(t: Translate) {
    const optionalUrl = z
        .string()
        .trim()
        .max(URL_MAX_LENGTH, { message: t("validation.max_length", { max: URL_MAX_LENGTH }) })
        .refine((val) => !val || isHttpUrl(val), { message: t("experts.edit.form.validation.invalidUrl") })
        .optional();

    return z.object({
        full_name: z
            .string()
            .trim()
            .min(1, { message: t("experts.edit.form.validation.nameRequired") })
            .max(NAME_MAX_LENGTH, { message: t("experts.edit.form.validation.nameMaxLength") })
            .refine(
                (value) => {
                    const parts = value.trim().split(/\s+/);
                    return parts.length >= 2 && parts.every((p) => p.length >= 2);
                },
                { message: t("experts.settings.validation.fullNameTwoWords") }
            ),

        email: z.string().optional(),
        phone_number: z.string().optional(),

        title: z
            .string()
            .trim()
            .max(NAME_MAX_LENGTH, { message: t("experts.edit.form.validation.titleMaxLength") })
            .optional(),
        bio: z
            .string()
            .trim()
            .refine((val) => getBioText(val).length <= BIO_MAX_LENGTH, {
                message: t("validation.max_length", { max: BIO_MAX_LENGTH }),
            }),
        // Empty input → "required" (z.coerce would silently turn it into 0).
        years_experience: z.preprocess(
            (value) => (value === "" || value === null || value === undefined ? undefined : Number(value)),
            z
                .number({ message: t("experts.edit.form.validation.yearsExperienceRequired") })
                .int({ message: t("validation.positive_integer") })
                .min(0, { message: t("experts.edit.form.validation.yearsMin") })
                .max(YEARS_EXPERIENCE_MAX, {
                    message: t("experts.settings.validation.yearsMax", { max: YEARS_EXPERIENCE_MAX }),
                })
        ),

        website: optionalUrl,
        linkedin: optionalUrl,

        languages: z.array(z.number()).min(1, { message: t("experts.edit.form.validation.selectLanguage") }),
        categories: z.array(z.number()).min(1, { message: t("experts.edit.form.validation.selectCategory") }),
        countries: z.array(z.number()).min(1, { message: t("experts.edit.form.validation.selectCountry") }),

        certifications: z
            .array(
                z.object({
                    cert_name: z
                        .string()
                        .trim()
                        .min(1, { message: t("validation.required") })
                        .max(CERT_NAME_MAX_LENGTH, { message: t("experts.edit.form.validation.certMaxLength") }),
                })
            )
            .optional(),

        photo: getProfilePictureSchema(t),

        podcast: z.boolean().optional(),
    });
}

export type UpdateExpertValues = z.infer<ReturnType<typeof getUpdateExpertSchema>>;
export type ExistingImage = z.infer<typeof existingImageSchema>;
