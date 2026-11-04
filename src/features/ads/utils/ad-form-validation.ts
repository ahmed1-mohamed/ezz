type Translate = (key: string, values?: Record<string, string | number>) => string;

export const AD_NAME_MAX_LENGTH = 255;
export const AD_TITLE_MAX_LENGTH = 255;
export const AD_DESCRIPTION_MAX_LENGTH = 2000;
export const AD_CTA_LABEL_MAX_LENGTH = 255;
export const AD_IMAGE_MAX_SIZE = 2 * 1024 * 1024;
export const AD_IMAGE_TYPES = ["image/png", "image/jpeg", "image/jpg", "image/webp"];

/**
 * Backend field (as sent in the ad FormData) → form field name. Shared by the create/edit ad
 * pages and the ad modals; keys the current form doesn't have are simply ignored.
 */
export const AD_FIELD_MAP: Record<string, string> = {
  "campaign.name": "campaignName",
  "campaign[name]": "campaignName",
  "campaign.title": "campaignName",
  "campaign[title]": "campaignName",
  "campaign.start_at": "startDate",
  "campaign[start_at]": "startDate",
  start_at: "startDate",
  "campaign.end_at": "endDate",
  "campaign[end_at]": "endDate",
  end_at: "endDate",
  "campaign.status": "status",
  "campaign[status]": "status",
  "campaign.developer_id": "developerId",
  "campaign[developer_id]": "developerId",
  developer_id: "developerId",
  "placement.platform": "platform",
  "placement[platform]": "platform",
  "placement.location": "location",
  "placement[location]": "location",
  "placement.format": "type",
  "placement[format]": "type",
  "placement.billing_unit": "billing_unit",
  "placement[billing_unit]": "billing_unit",
  "placement.width": "width",
  "placement[width]": "width",
  "placement.position": "position",
  "placement[position]": "position",
  country_id: "country",
  cta_url: "ctaUrl",
  cta_label: "ctaButtonText",
  entity_type: "linkTo",
  entity_id: "projectId",
  subtitle: "description",
  weight: "priority",
  image: "image",
  image_url: "image",
};

/** Same as AD_FIELD_MAP, for forms where the campaign name is the `title` field (ad modals). */
export const AD_MODAL_FIELD_MAP: Record<string, string> = {
  ...AD_FIELD_MAP,
  "campaign.name": "title",
  "campaign[name]": "title",
  "campaign.title": "title",
  "campaign[title]": "title",
};

/** Accepts URLs with or without a scheme (the forms prepend https:// before sending). */
export function isValidAdUrl(value: string): boolean {
  const trimmed = (value || "").trim();
  if (!trimmed || /\s/.test(trimmed)) return false;
  const withScheme = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  try {
    const url = new URL(withScheme);
    return /^https?:$/.test(url.protocol) && url.hostname.includes(".");
  } catch {
    return false;
  }
}

/** Returns a translated error for an ad image that is not PNG/JPG/WEBP or is over 2MB. */
export function getAdImageError(file: File, t: Translate): string | null {
  if (file.type && !AD_IMAGE_TYPES.includes(file.type.toLowerCase())) {
    return t("ads.form.imageTypeInvalid");
  }
  if (!file.type && !/\.(png|jpe?g|webp)$/i.test(file.name)) {
    return t("ads.form.imageTypeInvalid");
  }
  if (file.size > AD_IMAGE_MAX_SIZE) {
    return t("ads.form.imageTooLarge");
  }
  return null;
}
