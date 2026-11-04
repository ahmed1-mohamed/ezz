type Translate = (key: string, values?: Record<string, string | number>) => string;

/** Max length of the admin comments / decline reason sent with booking stage actions. */
export const BOOKING_COMMENTS_MAX = 1000;

export interface UploadFileRule {
  /** Allowed MIME types; a file whose type is empty is checked by extension only. */
  mimeTypes: string[];
  /** Allowed lowercase extensions without the dot. */
  extensions: string[];
  maxSizeMb: number;
}

/** Signed sales offer / SPA documents: images, PDF or Word, up to 10 MB. */
export const BOOKING_DOCUMENT_RULE: UploadFileRule = {
  mimeTypes: [
    "image/png",
    "image/jpeg",
    "image/gif",
    "image/webp",
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ],
  extensions: ["png", "jpg", "jpeg", "gif", "webp", "pdf", "doc", "docx"],
  maxSizeMb: 10,
};

/** Sales offer image uploaded from the reservation timeline (stage 2): one image, up to 5 MB. */
export const SALES_OFFER_IMAGE_RULE: UploadFileRule = {
  mimeTypes: ["image/png", "image/jpeg", "image/webp"],
  extensions: ["png", "jpg", "jpeg", "webp"],
  maxSizeMb: 5,
};

/** Down payment receipt (stage 3): image or PDF, up to 10 MB. */
export const DOWN_PAYMENT_RECEIPT_RULE: UploadFileRule = {
  mimeTypes: ["image/png", "image/jpeg", "image/webp", "application/pdf"],
  extensions: ["png", "jpg", "jpeg", "webp", "pdf"],
  maxSizeMb: 10,
};

/** Value for an `<input type="file" accept>` matching the rule. */
export const toAcceptAttribute = (rule: UploadFileRule) =>
  [...rule.mimeTypes, ...rule.extensions.map((ext) => `.${ext}`)].join(",");

/** Returns a translated message when the file breaks the rule (type first, then size). */
export function validateUploadFile(file: File, rule: UploadFileRule, t: Translate): string | undefined {
  const extension = file.name.split(".").pop()?.toLowerCase() ?? "";
  const typeAllowed = file.type ? rule.mimeTypes.includes(file.type) : false;
  if (!typeAllowed && !rule.extensions.includes(extension)) {
    return t("reservations.validation.fileType", { formats: rule.extensions.join(", ").toUpperCase() });
  }
  if (file.size > rule.maxSizeMb * 1024 * 1024) {
    return t("reservations.uploadOfferDialog.fileSizeError", { max: rule.maxSizeMb });
  }
  return undefined;
}

/** Comments are optional unless `required` (decline reason); always capped in length. */
export function validateBookingComments(
  value: string,
  t: Translate,
  { required = false }: { required?: boolean } = {}
): string | undefined {
  const trimmed = value.trim();
  if (required && !trimmed) return t("reservations.validation.reasonRequired");
  if (trimmed.length > BOOKING_COMMENTS_MAX) return t("validation.max_length", { max: BOOKING_COMMENTS_MAX });
  return undefined;
}

/** Backend keys for the uploaded file in the booking stage endpoints. */
export const BOOKING_FILE_FIELD_MAP = { sales_offer: "file", down_payment: "file", spa: "file" };
