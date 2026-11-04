import { z } from "zod";

type Translate = (key: string, values?: Record<string, string | number>) => string;

/** Validates the expert package dialog's raw (string) values; the payload itself is sent unchanged. */
export function getPackageFormSchema(t: Translate) {
    return z.object({
        name: z
            .string()
            .trim()
            .min(1, { message: t("validation.required") })
            .max(255, { message: t("validation.max_length", { max: 255 }) }),
        minutes: z
            .string()
            .trim()
            .min(1, { message: t("validation.required") })
            .refine((value) => /^\d+$/.test(value) && Number(value) > 0, {
                message: t("validation.positive_integer"),
            }),
        price_cents: z
            .string()
            .trim()
            .min(1, { message: t("validation.required") })
            .refine((value) => !Number.isNaN(Number(value)), { message: t("validation.numeric") })
            .refine((value) => Number(value) >= 0, { message: t("validation.positive_number") }),
        currency: z
            .string()
            .trim()
            .min(1, { message: t("validation.required") })
            .max(50, { message: t("validation.currency_max") }),
        is_active: z.boolean(),
    });
}
