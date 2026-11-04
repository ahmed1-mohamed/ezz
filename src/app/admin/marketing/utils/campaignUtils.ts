
function getStatValue(statField: any, fallback: any = 0): any {
  if (statField === undefined || statField === null) return fallback;
  if (typeof statField === "number" || typeof statField === "string") return statField;
  if (typeof statField === "object" && statField.value !== undefined) return statField.value;
  return fallback;
}

function getStatThisMonth(statField: any, fallback: any = undefined): any {
  if (statField === undefined || statField === null) return fallback;
  if (typeof statField === "object" && statField.this_month !== undefined) return statField.this_month;
  return fallback;
}

function getStatLabel(statField: any, fallback: any = undefined): string | undefined {
  if (statField === undefined || statField === null) return fallback;
  if (typeof statField === "object" && statField.label !== undefined) return String(statField.label);
  return fallback;
}

function getStatChangePercent(statField: any): number | null {
  if (statField && typeof statField === "object" && statField.change_percent !== undefined && statField.change_percent !== null) {
    return Number(statField.change_percent);
  }
  return null;
}

function getStatDirection(statField: any): "up" | "down" | "flat" | undefined {
  if (statField && typeof statField === "object" && statField.direction) {
    const dir = String(statField.direction).toLowerCase();
    if (dir === "up" || dir === "increase" || dir === "positive") return "up";
    if (dir === "down" || dir === "decrease" || dir === "negative") return "down";
    if (dir === "flat" || dir === "same") return "flat";
  }
  return undefined;
}

const MONTHS_AR = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
const MONTHS_EN = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export function formatCampaignDate(dateStr: string, isRTL: boolean): string {
  if (!dateStr) return "-";
  const d = new Date(dateStr);
  if (!isNaN(d.getTime())) {
    return d.toLocaleDateString(isRTL ? "ar-EG" : "en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }
  const parts = dateStr.split("-");
  if (parts.length === 3) {
    const year = parts[0];
    const monthNum = parseInt(parts[1], 10);
    const day = parseInt(parts[2], 10);
    const months = isRTL ? MONTHS_AR : MONTHS_EN;
    return `${day} ${months[monthNum - 1] ?? ""} ${year}`;
  }
  return dateStr;
}

interface RawStats {
  total_campaigns?: any;
  total_sent?: any;
  delivered?: any;
  opened?: any;
  failed?: any;
  delivery_rate?: any;
  open_rate?: any;
}

interface Campaign {
  sent?: number;
  received?: number;
  opened?: number;
  read?: number;
}

interface DisplayStats {
  displayTotalCampaigns: number | string;
  displayTotalCampaignsThisMonth?: number | string;
  displayTotalSent: number | string;
  displayTotalSentChangePercent?: number | null;
  displayTotalSentDirection?: "up" | "down" | "flat";
  displayDeliveryRate: string;
  displayDeliveryRateLabel?: string;
  displayReadRate: string;
  displayReadRateLabel?: string;
}

export function computeDisplayStats(stats: RawStats | null, campaigns: Campaign[]): DisplayStats {
  const totalSent = campaigns.reduce((acc, c) => acc + (c.sent || 0), 0);
  const totalReceived = campaigns.reduce((acc, c) => acc + (c.received || 0), 0);
  const totalRead = campaigns.reduce((acc, c) => acc + (c.opened || c.read || 0), 0);

  const deliveryRateFallback = totalSent > 0 ? ((totalReceived / totalSent) * 100).toFixed(1) : "0.0";
  const readRateFallback = totalReceived > 0 ? ((totalRead / totalReceived) * 100).toFixed(1) : "0.0";

  if (!stats) {
    return {
      displayTotalCampaigns: campaigns.length,
      displayTotalCampaignsThisMonth: undefined,
      displayTotalSent: totalSent,
      displayTotalSentChangePercent: null,
      displayTotalSentDirection: "flat",
      displayDeliveryRate: deliveryRateFallback,
      displayDeliveryRateLabel: undefined,
      displayReadRate: readRateFallback,
      displayReadRateLabel: undefined,
    };
  }

  const rawDeliveryRate = getStatValue(stats.delivery_rate, deliveryRateFallback);
  const rawReadRate = getStatValue(stats.open_rate, readRateFallback);

  return {
    displayTotalCampaigns: getStatValue(stats.total_campaigns, campaigns.length),
    displayTotalCampaignsThisMonth: getStatThisMonth(stats.total_campaigns, undefined),
    displayTotalSent: getStatValue(stats.total_sent, totalSent),
    displayTotalSentChangePercent: getStatChangePercent(stats.total_sent),
    displayTotalSentDirection: getStatDirection(stats.total_sent),
    displayDeliveryRate: typeof rawDeliveryRate === "number" ? rawDeliveryRate.toFixed(1) : String(rawDeliveryRate),
    displayDeliveryRateLabel: getStatLabel(stats.delivery_rate, undefined),
    displayReadRate: typeof rawReadRate === "number" ? rawReadRate.toFixed(1) : String(rawReadRate),
    displayReadRateLabel: getStatLabel(stats.open_rate, undefined),
  };
}

export function getAudienceLabel(aud: string, isRTL: boolean): string {
  if (aud === "registered") return isRTL ? "مسجلون" : "Registered";
  if (aud === "visitors") return isRTL ? "زوار" : "Visitors";
  if (aud === "specific") return isRTL ? "مستخدمين محددين" : "Specific Users";
  if (aud === "foreign_contacts" || aud === "manual") return isRTL ? "جهات اتصال خارجية / يدوية" : "Foreign / Manual Contacts";
  if (aud === "failed") return isRTL ? "عمليات دفع فاشلة" : "Failed Payments";
  return isRTL ? "الكل" : "All";
}

export type CampaignType = "sms" | "email" | "notification";

function normalizeSinglePhoneNumber(raw: string, defaultCountry?: string): string | null {
  let cleaned = raw.trim().replace(/['"<>]/g, "");
  if (!cleaned) return null;

  const phoneMatch = cleaned.match(/(?:\+|00)?[\d\s\-().]{6,}/);
  if (phoneMatch) {
    cleaned = phoneMatch[0].trim();
  }

  if (cleaned.startsWith("00")) {
    cleaned = "+" + cleaned.slice(2);
  }

  const hasPlus = cleaned.startsWith("+");
  let digits = cleaned.replace(/\D/g, "");

  if (!digits || digits.length < 6) return null;

  if (hasPlus) {
    if (digits.startsWith("0")) {
      digits = digits.replace(/^0+/, "");
    } else {
      if (digits.length >= 7 && digits.length <= 15) {
        return "+" + digits;
      }
      return null;
    }
  }

  if (digits.startsWith("201") && digits.length === 12) {
    return "+" + digits;
  }
  if (digits.startsWith("9715") && digits.length === 12) {
    return "+" + digits;
  }
  if (digits.startsWith("9665") && digits.length === 12) {
    return "+" + digits;
  }
  if (digits.startsWith("968") && digits.length === 11) {
    return "+" + digits;
  }

  const country = (defaultCountry || "").toLowerCase();

  if (/^01[0125]\d{8}$/.test(digits)) {
    return "+20" + digits.slice(1);
  }
  if (/^1[0125]\d{8}$/.test(digits) && (country === "eg" || !country)) {
    return "+20" + digits;
  }

  if (/^05\d{8}$/.test(digits)) {
    if (country === "sa") return "+966" + digits.slice(1);
    return "+971" + digits.slice(1);
  }
  if (/^5\d{8}$/.test(digits) && (country === "ae" || !country)) {
    return "+971" + digits;
  }

  if (/^[97]\d{7}$/.test(digits) && (country === "om" || !country)) {
    return "+968" + digits;
  }

  if (country === "eg") {
    const stripped = digits.replace(/^0+/, "");
    if (stripped.length >= 9 && stripped.length <= 11) return "+20" + stripped;
  } else if (country === "ae") {
    const stripped = digits.replace(/^0+/, "");
    if (stripped.length >= 8 && stripped.length <= 10) return "+971" + stripped;
  } else if (country === "om") {
    const stripped = digits.replace(/^0+/, "");
    if (stripped.length >= 7 && stripped.length <= 9) return "+968" + stripped;
  }

  if (digits.length >= 7 && digits.length <= 15 && !digits.startsWith("0")) {
    return "+" + digits;
  }

  return null;
}

export function parseAndNormalizePhoneContacts(rawText: string, defaultCountry?: string): string[] {
  if (!rawText.trim()) return [];

  const lines = rawText.split(/[\r\n,;]+/);
  const contacts: string[] = [];

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    const normalized = normalizeSinglePhoneNumber(trimmed, defaultCountry);
    if (normalized) {
      contacts.push(normalized);
    } else {
      const cleanDigits = trimmed.replace(/\D/g, "");
      if (cleanDigits.length >= 7 && cleanDigits.length <= 15) {
        if (trimmed.startsWith("+")) {
          contacts.push(trimmed);
        } else if (cleanDigits.startsWith("00")) {
          contacts.push("+" + cleanDigits.slice(2));
        } else if (cleanDigits.startsWith("0")) {
          contacts.push("+" + cleanDigits.replace(/^0+/, ""));
        } else {
          contacts.push("+" + cleanDigits);
        }
      }
    }
  }

  return Array.from(new Set(contacts));
}

export function parseAndNormalizeEmailContacts(rawText: string): string[] {
  if (!rawText.trim()) return [];

  const lines = rawText.split(/[\r\n;]+/);
  const emails: string[] = [];
  const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    const lower = trimmed.toLowerCase();
    if (
      lower === "email" ||
      lower === "contact" ||
      lower === "contacts" ||
      lower === "emails" ||
      lower.startsWith("email,") ||
      lower.startsWith("name,email")
    ) {
      continue;
    }

    const match = trimmed.match(emailRegex);
    if (match) {
      emails.push(match[0].toLowerCase().trim());
    }
  }

  return Array.from(new Set(emails));
}