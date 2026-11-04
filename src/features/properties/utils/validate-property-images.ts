import { toast } from "sonner";

/** "Up to 8 images", as the upload area tells the user. */
export const MAX_PROPERTY_IMAGES = 8;
export const MAX_PROPERTY_IMAGE_MB = 10;
const MAX_PROPERTY_IMAGE_BYTES = MAX_PROPERTY_IMAGE_MB * 1024 * 1024;

interface PickValidPropertyImagesOptions {
  t: (key: string, values?: Record<string, string | number>) => string;
  /** Images already selected, counted against `maxCount`. */
  currentCount?: number;
  maxCount?: number;
}

/**
 * Keeps the image files (≤ 10 MB each) the property upload accepts, up to `maxCount` in total,
 * and toasts why any file was skipped.
 */
export function pickValidPropertyImages(
  files: File[],
  { t, currentCount = 0, maxCount }: PickValidPropertyImagesOptions
): File[] {
  const accepted: File[] = [];
  let wrongType = false;
  let tooLarge = false;
  let overLimit = false;

  files.forEach((file) => {
    if (!file.type.startsWith("image/")) {
      wrongType = true;
    } else if (file.size > MAX_PROPERTY_IMAGE_BYTES) {
      tooLarge = true;
    } else if (maxCount !== undefined && currentCount + accepted.length >= maxCount) {
      overLimit = true;
    } else {
      accepted.push(file);
    }
  });

  if (wrongType) toast.error(t("properties.validation.imageType"));
  if (tooLarge) toast.error(t("properties.validation.imageSize", { max: MAX_PROPERTY_IMAGE_MB }));
  if (overLimit) toast.error(t("properties.validation.imageCount", { max: maxCount ?? 0 }));
  return accepted;
}
