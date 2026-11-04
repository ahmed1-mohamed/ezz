"use client";

import { memo } from "react";
import { Clock, CheckCircle2, Paperclip } from "lucide-react";
import { SupportConversation } from "@/data/api/services/chat.service";
import { useLanguage } from "@/contexts/LanguageContext";
import { normalizeConversationStatus } from "../hooks/useConversationsList";

interface ChatContactItemProps {
  conversation: SupportConversation;
  isSelected: boolean;
  onSelect: (id: string | number) => void;
  formatTime: (dateString?: string | null) => string;
}
export const ChatContactItem = memo(function ChatContactItem({
  conversation,
  isSelected,
  onSelect,
  formatTime,
}: ChatContactItemProps) {
  const { t } = useLanguage();
  const convId = conversation.id ?? conversation.conversation_id;
  const rawUnread =
    conversation.unread_for_user ??
    conversation.unread_for_admin ??
    conversation.unread_count ??
    (conversation as any).unread ??
    0;
  const unreadCount = isSelected ? 0 : Number(rawUnread || 0);
  const timeStr = formatTime(
    conversation.last_message_at || conversation.updated_at || conversation.created_at
  );

  const getStatusBadge = (status?: string) => {
    const s = normalizeConversationStatus(status);
    if (s === "open") {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          {t("chat.open")}
        </span>
      );
    }
    if (s === "pending") {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60">
          <Clock className="h-2.5 w-2.5" />
          {t("chat.pending")}
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
        <CheckCircle2 className="h-2.5 w-2.5" />
        {t("chat.closed")}
      </span>
    );
  };
  const getLastMessageText = (): string => {
    const msg = conversation.last_message || (conversation as any).latest_message;
    if (!msg) {
      if (conversation.subject) return conversation.subject;
      return t("chat.noMessagesYet");
    }
    if (typeof msg === "string") return msg;
    if (msg.body) return msg.body;
    if (msg.message_text) return msg.message_text;
    if (
      msg.attachment ||
      msg.attachment_url
    ) {
      return "📎 " + (t("chat.attachment"));
    }
    return conversation.subject || t("chat.noMessagesYet");
  };

  const userName =
    conversation.user?.name ||
    (conversation.user?.first_name
      ? `${conversation.user.first_name} ${conversation.user.last_name || ""}`.trim()
      : null);

  const title =
    userName ||
    conversation.subject ||
    conversation.title ||
    `${t("chat.conversation")} #${convId}`;
  const lastMsg = getLastMessageText();
  const avatarLetter = (userName || conversation.user?.email || "")[0]?.toUpperCase() || `#${convId}`;

  return (
    <button
      onClick={() => onSelect(convId)}
      className={`w-full p-3.5 flex items-start gap-3 transition-all text-start cursor-pointer border-b border-gray-100 dark:border-gray-800/70 ${isSelected
        ? "bg-teal-50/80 dark:bg-teal-950/30 border-s-3 border-teal-600 text-gray-900 dark:text-white shadow-2xs"
        : "hover:bg-gray-50/80 dark:hover:bg-gray-800/50 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900"
        }`}
    >
      <div className="relative flex-shrink-0">
        <div
          className={`h-10 w-10 rounded-xl flex items-center justify-center text-xs font-bold transition-colors ${isSelected
            ? "bg-teal-600 text-white shadow-xs"
            : "bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300 border border-teal-100 dark:border-teal-900/40"
            }`}
        >
          {avatarLetter}
        </div>
        {unreadCount > 0 && (
          <span className="absolute -top-1 -end-1 h-4 min-w-4 px-1 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white dark:ring-gray-900 shadow-xs animate-in zoom-in-50">
            {unreadCount}
          </span>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-1 mb-1">
          <h4
            className={`text-sm truncate ${isSelected
              ? "font-bold text-gray-900 dark:text-white"
              : "font-semibold text-gray-800 dark:text-gray-200"
              }`}
          >
            {title}
          </h4>
          {timeStr && (
            <span className="text-[11px] text-gray-400 dark:text-gray-500 flex-shrink-0 font-normal">
              {timeStr}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between gap-2">
          <p className="text-xs text-gray-500 dark:text-gray-400 truncate flex-1 flex items-center gap-1">
            {typeof conversation.last_message === "object" &&
              (conversation.last_message?.attachment ||
                conversation.last_message?.attachment_url) && (
                <Paperclip className="h-3 w-3 flex-shrink-0 text-teal-600 dark:text-teal-400" />
              )}
            <span className="truncate">{lastMsg}</span>
          </p>
          <div className="flex-shrink-0">{getStatusBadge(conversation.status)}</div>
        </div>
      </div>
    </button>
  );
});