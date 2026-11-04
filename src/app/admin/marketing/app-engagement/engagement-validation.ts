type Translate = (key: string, values?: Record<string, string | number>) => string;

export const ENGAGEMENT_TEXT_MAX_LENGTH = 255;
export const ENGAGEMENT_BODY_MAX_LENGTH = 2000;

export interface EngagementTemplateValues {
  titleAr?: string;
  titleEn?: string;
  event?: string;
  subject?: string;
  body?: string;
  actionLink?: string;
}

export type EngagementTemplateErrors = Partial<Record<keyof EngagementTemplateValues, string>>;

/**
 * Validates a triggered template. Only the fields present in `values` are checked, so the inline
 * edit form (subject/body/action link) and the create modal (all fields) can share it.
 * Every field except the action link is required.
 */
export function validateEngagementTemplate(values: EngagementTemplateValues, t: Translate): EngagementTemplateErrors {
  const errors: EngagementTemplateErrors = {};
  (Object.keys(values) as Array<keyof EngagementTemplateValues>).forEach((field) => {
    const value = (values[field] ?? "").trim();
    const max = field === "body" ? ENGAGEMENT_BODY_MAX_LENGTH : ENGAGEMENT_TEXT_MAX_LENGTH;
    if (!value && field !== "actionLink") {
      errors[field] = t("validation.required");
    } else if (value.length > max) {
      errors[field] = t("validation.max_length", { max });
    }
  });
  return errors;
}
