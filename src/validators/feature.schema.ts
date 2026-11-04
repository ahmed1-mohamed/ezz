import { z } from "zod";

export const featureSchema = z.object({
  feature_name: z.string().min(1, "features.validation.nameEnRequired"),
  feature_name_ar: z.string().min(1, "features.validation.nameArRequired"),
  is_amenity: z.number().min(0).max(1).optional(),
  icons: z.string().optional(),
});

export type FeatureInput = z.infer<typeof featureSchema>;

export const FEATURE_ICON_EXTENSIONS = ["svg", "png", "jpg", "jpeg", "gif"] as const;

// Messages are translation keys; the form translates them when rendering.
export const createFeatureSchema = z.object({
  feature_name: z.string().trim()
    .min(1, "features.validation.nameEnRequired")
    .min(2, "features.validation.nameMin")
    .max(255, "features.validation.nameMax"),
  feature_name_ar: z.string().trim()
    .min(1, "features.validation.nameArRequired")
    .min(2, "features.validation.nameMin")
    .max(255, "features.validation.nameMax"),
  category: z.enum(["amenity", "feature"], { message: "features.validation.categoryRequired" }),
  icons: z.string().optional().refine(
    (name) => !name || FEATURE_ICON_EXTENSIONS.some((ext) => name.toLowerCase().endsWith(`.${ext}`)),
    "features.validation.iconType"
  ),
});

export type CreateFeatureInput = z.infer<typeof createFeatureSchema>;

// Edit form: only `feature_name`, `is_amenity` and `icons` are sent, and the Arabic name may be
// pre-filled from the English one, so it isn't held to the Arabic-letters rule here.
export const editFeatureSchema = z.object({
  feature_name: z.string().trim()
    .min(1, "features.validation.nameEnRequired")
    .min(2, "features.validation.nameMin")
    .max(255, "features.validation.nameMax"),
  feature_name_ar: z.string().trim()
    .min(1, "features.validation.nameArRequired")
    .max(255, "features.validation.nameMax"),
  category: z.enum(["amenity", "feature"], { message: "features.validation.categoryRequired" }),
  icons: createFeatureSchema.shape.icons,
});

export type EditFeatureInput = z.infer<typeof editFeatureSchema>;
