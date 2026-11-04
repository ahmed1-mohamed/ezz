import type { Notification } from "./components/NotificationCard";

export function isToday(date: Date): boolean {
  const now = new Date();
  return (
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth() &&
    date.getDate() === now.getDate()
  );
}

export function isYesterday(date: Date): boolean {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return (
    date.getFullYear() === yesterday.getFullYear() &&
    date.getMonth() === yesterday.getMonth() &&
    date.getDate() === yesterday.getDate()
  );
}

export function formatNotificationDate(dateString: string, isRTL: boolean): string {
  if (!dateString) return "";
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;

    const locale = isRTL ? "ar-EG-u-nu-latn" : "en-US";
    const formattedDate = date.toLocaleDateString(locale, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    const formattedTime = date.toLocaleTimeString(locale, {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    return `${formattedDate} • ${formattedTime}`;
  } catch {
    return dateString;
  }
}

export function formatNotificationTitle(rawTitle: string, isRTL: boolean = false): string {
  if (!rawTitle || typeof rawTitle !== "string") {
    return isRTL ? "إشعار جديد" : "Notification";
  }

  const trimmed = rawTitle.trim();
  const lower = trimmed.toLowerCase();

  if (lower === "reservation" || lower === "booking") {
    return isRTL ? "حجز عقاري" : "Property Reservation";
  }
  if (lower === "booking_update" || lower === "reservation_update") {
    return isRTL ? "تحديث الحجز" : "Booking Update";
  }
  if (lower === "property_update" || lower === "property" || lower === "unit") {
    return isRTL ? "تحديث عقار" : "Property Update";
  }
  if (lower === "project" || lower === "project_update") {
    return isRTL ? "تحديث مشروع" : "Project Update";
  }
  if (lower === "meeting") {
    return isRTL ? "اجتماع جديد" : "Meeting Alert";
  }
  if (lower === "lead" || lower === "client" || lower === "user") {
    return isRTL ? "تنبيه عميل" : "Client Notification";
  }
  if (lower === "payment" || lower === "transaction") {
    return isRTL ? "معاملة مالية" : "Transaction Alert";
  }

  // If it's formatted in snake_case or kebab-case, make it readable
  if (trimmed.includes("_") || trimmed.includes("-")) {
    const readable = trimmed
      .replace(/[-_]+/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
    return readable;
  }

  // Capitalize first letter
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
}

function isAdReference(ref: string): boolean {
  return /(^|[^a-z])ads?([^a-z]|$)|advert/.test(ref);
}

export function getLinkText(referenceType?: string, referenceId?: number | string, isRTL: boolean = false): string {
  if (!referenceId) return "";
  const ref = (referenceType || "").toLowerCase();
  if (ref.includes("reservation") || ref.includes("booking")) {
    return isRTL ? `عرض الحجز #${referenceId}` : `View Reservation #${referenceId}`;
  }
  if (ref.includes("project")) {
    return isRTL ? `عرض المشروع #${referenceId}` : `View Project #${referenceId}`;
  }
  if (ref.includes("property") || ref.includes("unit")) {
    return isRTL ? `عرض العقار #${referenceId}` : `View Property #${referenceId}`;
  }
  if (ref.includes("meeting")) {
    return isRTL ? `عرض الاجتماع` : `View Meeting`;
  }
  if (ref.includes("lead")) {
    return isRTL ? `عرض العميل المحتمل #${referenceId}` : `View Lead #${referenceId}`;
  }
  if (ref.includes("contract")) {
    return isRTL ? `عرض العقد #${referenceId}` : `View Contract #${referenceId}`;
  }
  if (ref.includes("offer")) {
    return isRTL ? `عرض العرض #${referenceId}` : `View Offer #${referenceId}`;
  }
  if (ref.includes("user") || ref.includes("customer")) {
    return isRTL ? `عرض المستخدم #${referenceId}` : `View User #${referenceId}`;
  }
  if (isAdReference(ref)) {
    return isRTL ? `عرض الإعلانات` : `View Ads`;
  }
  return isRTL ? `عرض #${referenceId}` : `View #${referenceId}`;
}

export function getLinkHref(referenceType?: string, referenceId?: number | string, basePath = "/admin"): string {
  if (!referenceId) return "#";
  const ref = (referenceType || "").toLowerCase();
  if (ref.includes("project")) return `${basePath}/projects/${referenceId}`;
  if (ref.includes("reservation") || ref.includes("booking")) return `${basePath}/reservations/${referenceId}`;
  if (ref.includes("meeting")) return `${basePath}/meetings`;
  if (ref.includes("property") || ref.includes("unit")) return `${basePath}/properties/${referenceId}`;
  if (ref.includes("lead")) return `${basePath}/leads/${referenceId}`;
  if (ref.includes("contract")) return `${basePath}/contracts/${referenceId}`;
  if (ref.includes("offer")) return `${basePath}/offers/${referenceId}`;
  if (ref.includes("user") || ref.includes("customer")) return `${basePath}/users/${referenceId}`;
  if (isAdReference(ref)) return `${basePath}/ads`;
  return "#";
}

export const extractListFromApiResponse = (res: any): any[] => {
  if (!res) return [];
  if (Array.isArray(res)) return res;
  if (Array.isArray(res.data)) return res.data;
  if (res.data && typeof res.data === "object") {
    if (Array.isArray(res.data.items)) return res.data.items;
    if (Array.isArray(res.data.data)) return res.data.data;
    if (Array.isArray(res.data.notifications)) return res.data.notifications;
    if (Array.isArray(res.data.list)) return res.data.list;
    if (Array.isArray(res.data.results)) return res.data.results;
  }
  if (Array.isArray(res.notifications)) return res.notifications;
  if (Array.isArray(res.items)) return res.items;
  if (Array.isArray(res.list)) return res.list;
  if (Array.isArray(res.results)) return res.results;

  // Fallback: search for first array property in res or res.data
  if (typeof res === "object") {
    for (const key of Object.keys(res)) {
      if (Array.isArray(res[key])) return res[key];
    }
  }

  return [];
};

export function mapApiNotifications(apiList: any[], isRTL: boolean, basePath: string): Notification[] {
  return apiList.map((item: any, idx: number) => {
    const nested = item.data && typeof item.data === "object" ? item.data : {};
    const id =
      Number(
        item.notification_id ??
        item.id ??
        nested.notification_id ??
        nested.id
      ) || idx + 1;

    const userId =
      item.user_id !== undefined && item.user_id !== null
        ? Number(item.user_id)
        : nested.user_id !== undefined && nested.user_id !== null
          ? Number(nested.user_id)
          : undefined;

    const type =
      item.type ||
      nested.type ||
      item.reference_type ||
      nested.reference_type ||
      "";

    const priority = item.priority || nested.priority || undefined;
    const status = item.status || nested.status || undefined;

    const rawTitle =
      item.title ||
      nested.title ||
      item.name ||
      item.subject ||
      "";

    const title = rawTitle
      ? formatNotificationTitle(rawTitle, isRTL)
      : isRTL
        ? "إشعار جديد"
        : "Notification";

    const description =
      item.message ||
      item.description ||
      item.body ||
      nested.message ||
      nested.body ||
      nested.description ||
      "";

    const rawTime =
      item.created_at ||
      item.date ||
      item.updated_at ||
      nested.created_at ||
      item.read_at ||
      "";

    const isRead =
      typeof item.is_read === "boolean"
        ? item.is_read
        : item.is_read === 1 || item.is_read === "1"
          ? true
          : item.is_read === 0 || item.is_read === "0"
            ? false
            : item.read_at !== null &&
              item.read_at !== undefined &&
              item.read_at !== ""
              ? true
              : Boolean(item.read);

    const referenceType =
      item.reference_type ||
      nested.reference_type ||
      item.type ||
      nested.type ||
      "";

    const referenceId =
      item.reference_id ||
      nested.reference_id ||
      item.notifiable_id ||
      nested.notifiable_id ||
      undefined;

    return {
      id,
      userId,
      type: String(type),
      title,
      description,
      time: formatNotificationDate(rawTime, isRTL),
      rawTime,
      isRead,
      priority: priority ? String(priority).toLowerCase() : undefined,
      status: status ? String(status).toLowerCase() : undefined,
      referenceType: String(referenceType),
      referenceId: referenceId ? Number(referenceId) : undefined,
      link: referenceId
        ? {
            text: getLinkText(referenceType, referenceId, isRTL),
            href: getLinkHref(referenceType, referenceId, basePath),
          }
        : undefined,
    };
  });
}
