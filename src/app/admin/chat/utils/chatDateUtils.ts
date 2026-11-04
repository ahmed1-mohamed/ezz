import { format, isToday, isYesterday } from "date-fns";
import { SupportMessage } from "@/data/api/services/chat.service";

export function formatChatTime(
  dateString?: string | null,
  yesterdayTemplate: string = "Yesterday, {time}"
): string {
  if (!dateString) return "";
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "";
    if (isToday(date)) {
      return format(date, "HH:mm");
    }
    if (isYesterday(date)) {
      return yesterdayTemplate.replace("{time}", format(date, "HH:mm"));
    }
    return format(date, "MMM d, HH:mm");
  } catch {
    return "";
  }
}

export function groupMessagesByDate(messages: SupportMessage[]): Record<string, SupportMessage[]> {
  const sorted = [...(messages || [])].sort((a, b) => {
    const timeA = a.created_at ? new Date(a.created_at).getTime() : 0;
    const timeB = b.created_at ? new Date(b.created_at).getTime() : 0;
    return timeA - timeB;
  });

  const groups: Record<string, SupportMessage[]> = {};
  sorted.forEach((message: SupportMessage) => {
    try {
      const dateObj = new Date(message.created_at);
      const dateKey = isNaN(dateObj.getTime())
        ? "Recent"
        : isToday(dateObj)
          ? "Today"
          : isYesterday(dateObj)
            ? "Yesterday"
            : format(dateObj, "MMM d, yyyy");

      if (!groups[dateKey]) groups[dateKey] = [];
      groups[dateKey].push(message);
    } catch {
      const fallbackKey = "Recent";
      if (!groups[fallbackKey]) groups[fallbackKey] = [];
      groups[fallbackKey].push(message);
    }
  });
  return groups;
}