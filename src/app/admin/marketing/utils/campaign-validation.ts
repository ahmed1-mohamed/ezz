import { parseAndNormalizeEmailContacts, parseAndNormalizePhoneContacts } from "./campaignUtils";

type Translate = (key: string, values?: Record<string, string | number>) => string;

export const CAMPAIGN_NAME_MAX_LENGTH = 255;
export const CAMPAIGN_TITLE_MAX_LENGTH = 255;
export const CAMPAIGN_DESCRIPTION_MAX_LENGTH = 2000;
export const CONTACTS_FILE_MAX_SIZE = 10 * 1024 * 1024;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const MAX_LISTED_INVALID = 3;

export function isValidEmail(value: string): boolean {
  return EMAIL_REGEX.test((value || "").trim());
}

function splitContacts(rawText: string): string[] {
  return rawText
    .split(/[\r\n,;]+/)
    .map((item) => item.trim().replace(/^["'<(\[]+|["'>)\]]+$/g, "").trim())
    .filter(Boolean);
}

/**
 * Entries that look like emails (contain "@") but can't be read as one (same rules as the payload
 * parser). Plain names next to emails ("Name, user@example.com") are ignored.
 */
export function getInvalidEmailContacts(rawText: string): string[] {
  if (!rawText.trim()) return [];
  return splitContacts(rawText).filter(
    (item) => item.includes("@") && parseAndNormalizeEmailContacts(item).length === 0
  );
}

/**
 * Entries with digits that can't be read as a phone number (same rules as the payload parser).
 * Entries without any digit (names, CSV headers) are ignored.
 */
export function getInvalidPhoneContacts(rawText: string, defaultCountry?: string): string[] {
  if (!rawText.trim()) return [];
  return splitContacts(rawText).filter(
    (item) => /\d/.test(item) && parseAndNormalizePhoneContacts(item, defaultCountry).length === 0
  );
}

/** Short, user-facing list of invalid entries ("a, b, c +2"). */
export function formatInvalidContacts(items: string[]): string {
  const shown = items.slice(0, MAX_LISTED_INVALID).join(", ");
  return items.length > MAX_LISTED_INVALID ? `${shown} +${items.length - MAX_LISTED_INVALID}` : shown;
}

/** Returns a translated error for a contacts file that is not CSV/TXT or is over 10MB. */
export function getContactsFileError(file: File, t: Translate): string | null {
  const isCsvOrTxt = [".csv", ".txt"].some((ext) => file.name.toLowerCase().endsWith(ext));
  if (!isCsvOrTxt) return t("marketingCampaigns.validation.contactsFileType");
  if (file.size > CONTACTS_FILE_MAX_SIZE) return t("marketingCampaigns.validation.contactsFileSize");
  return null;
}

/** Today's date in the user's timezone as YYYY-MM-DD (for `min` on schedule date inputs). */
export function getTodayInputDate(): string {
  const now = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
}

/**
 * Validates a scheduled send (date + hour). Returns null when valid, otherwise a translated message
 * using the given keys for "required" and "must be in the future".
 */
export function getScheduleError(
  date: string,
  time: string,
  messages: { required: string; future: string; invalid: string }
): string | null {
  if (!date || !time) return messages.required;
  const scheduled = new Date(`${date}T${time}:00`);
  if (isNaN(scheduled.getTime())) return messages.invalid;
  if (scheduled.getTime() <= Date.now()) return messages.future;
  return null;
}

/** Removes the given keys (and `prefix.*` sub-keys) from an errors object. */
export function omitErrors(errors: Record<string, string>, keys: string[]): Record<string, string> {
  const next = { ...errors };
  Object.keys(next).forEach((key) => {
    if (keys.some((k) => key === k || key.startsWith(`${k}.`))) delete next[key];
  });
  return next;
}
