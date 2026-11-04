import { z } from "zod";

type Translate = (key: string, values?: Record<string, string | number>) => string;

export const buildingSchema = z.object({
  building_name: z.string().min(1, "buildings.validation.nameRequired"),
  total_floors: z.number().min(1, "buildings.validation.minFloors"),
  total_units: z.number().min(0, "buildings.validation.unitsNonNegative"),
  construction_status: z.string(),
  completion_date: z.string(),
  description: z.string().optional(),
  latitude: z.string().optional(),
  longitude: z.string().optional(),
  building_type: z.string(),
  built_type: z.string(),
  parking_spaces: z.number().min(0).optional(),
  location_id: z.number().optional(),
  project_id: z.number().optional(),
});

export type BuildingInputType = z.infer<typeof buildingSchema>;

/** Form schema for the add/edit building modals (same shape as `buildingSchema`, translated messages). */
export const getBuildingFormSchema = (t: Translate) => {
  const wholeNumber = (min: number, minMessage: string) =>
    z
      .number({ message: t("validation.numeric") })
      .int(t("buildings.validation.wholeNumber"))
      .min(min, minMessage)
      .max(100000, t("buildings.validation.tooLarge"));

  return z.object({
    building_name: z
      .string()
      .trim()
      .min(1, t("buildings.validation.nameRequired"))
      .max(255, t("validation.max_length", { max: 255 })),
    total_floors: wholeNumber(1, t("buildings.validation.minFloors")),
    total_units: wholeNumber(0, t("buildings.validation.unitsNonNegative")),
    construction_status: z.string().min(1, t("validation.required")),
    // Not required (empty string allowed, as before): buildings added on the create-project page may have no date.
    completion_date: z.string(),
    description: z.string().trim().max(2000, t("validation.max_length", { max: 2000 })).optional(),
    latitude: z.string().optional(),
    longitude: z.string().optional(),
    building_type: z.string().min(1, t("validation.required")),
    built_type: z.string().min(1, t("validation.required")),
    parking_spaces: wholeNumber(0, t("buildings.validation.wholeNumber")).optional(),
    location_id: z.number().optional(),
    project_id: z.number().optional(),
  });
};

/** Rules for the draft building modal on the create-project page (useState form). */
export const getDraftBuildingSchema = (t: Translate) =>
  z.object({
    building_name: z
      .string()
      .trim()
      .min(1, t("buildings.validation.nameRequired"))
      .max(255, t("validation.max_length", { max: 255 })),
    total_floors: z
      .number({ message: t("validation.numeric") })
      .int(t("buildings.validation.wholeNumber"))
      .min(1, t("buildings.validation.minFloors"))
      .max(100000, t("buildings.validation.tooLarge")),
    total_units: z
      .number({ message: t("validation.numeric") })
      .int(t("buildings.validation.wholeNumber"))
      .min(0, t("buildings.validation.unitsNonNegative"))
      .max(100000, t("buildings.validation.tooLarge")),
    parking_spaces: z
      .number({ message: t("validation.numeric") })
      .int(t("buildings.validation.wholeNumber"))
      .min(0, t("buildings.validation.wholeNumber"))
      .max(100000, t("buildings.validation.tooLarge")),
    description: z.string().trim().max(2000, t("validation.max_length", { max: 2000 })),
  });
