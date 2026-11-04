import { z } from "zod";

// Messages are translation keys; the forms translate them when rendering.
export const areaSchema = z.object({
  dld_area_name: z.string().trim()
    .min(1, "areas.validation.nameRequired")
    .max(255, "areas.validation.nameMax"),
  latitude: z.number({ message: "validation.numeric" })
    .min(-90, "validation.latitude_range")
    .max(90, "validation.latitude_range")
    .optional(),
  longitude: z.number({ message: "validation.numeric" })
    .min(-180, "validation.longitude_range")
    .max(180, "validation.longitude_range")
    .optional(),
  description: z.string().trim().max(2000, "areas.validation.descriptionMax").optional(),
});

export type AreaInput = z.infer<typeof areaSchema>;

/** For coordinate inputs: an empty box means "not set" instead of NaN. */
export const toOptionalNumber = (value: unknown) =>
  value === "" || value === null || value === undefined ? undefined : Number(value);
