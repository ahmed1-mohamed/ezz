import { z } from "zod";

const isGoogleMapsUrl = (url: string) =>
  /^https?:\/\//.test(url) && (
    /google\.[a-z.]+\/maps/i.test(url) ||
    /maps\.google\.[a-z.]+/i.test(url) ||
    /goo\.gl\/maps/i.test(url) ||
    /maps\.app\.goo\.gl/i.test(url)
  );

const isNumberInRange = (val: string, min: number, max: number) => {
  const num = Number(val);
  return Number.isFinite(num) && num >= min && num <= max;
};

export const getAddLocationFormSchema = (t: any) => {
  const optionalText = (max: number) =>
    z.string().trim().max(max, t("validation.max_length", { max })).optional();

  return z.object({
    locationName: z.string().trim()
      .min(1, t("locations.validation.nameRequired"))
      .min(2, t("validation.min_length", { min: 2 }))
      .max(255, t("validation.max_length", { max: 255 })),
    googleMapLink: z.string().trim()
      .min(1, t("validation.required"))
      .max(2048, t("validation.max_length", { max: 2048 }))
      .refine(isGoogleMapsUrl, { message: t("locations.validation.invalidMapLinkFormat") }),
    cityId: z.string().min(1, t("locations.validation.cityRequired")),
    areaId: z.string().min(1, t("locations.validation.areaRequired")),
    latitude: z.string().trim().optional()
      .refine((val) => !val || Number.isFinite(Number(val)), { message: t("validation.numeric") })
      .refine((val) => !val || isNumberInRange(val, -90, 90), { message: t("validation.latitude_range") }),
    longitude: z.string().trim().optional()
      .refine((val) => !val || Number.isFinite(Number(val)), { message: t("validation.numeric") })
      .refine((val) => !val || isNumberInRange(val, -180, 180), { message: t("validation.longitude_range") }),
    northSide: optionalText(255),
    southSide: optionalText(255),
    eastSide: optionalText(255),
    westSide: optionalText(255),
    landmark: optionalText(500),
    description: optionalText(2000),
  });
};

export type AddLocationFormInput = z.infer<ReturnType<typeof getAddLocationFormSchema>>;
