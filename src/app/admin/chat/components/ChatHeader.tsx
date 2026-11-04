"use client";

import {
  RotateCw,
  Clock,
  CheckCircle2,
  Headphones,
  CheckCheck,
  ArrowLeft,
  ShieldAlert,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { SupportConversation } from "@/data/api/services/chat.service";
import { normalizeConversationStatus } from "../hooks/useConversationsList";

interface ChatHeaderProps {
  conversation: SupportConversation;
  onRefresh?: () => void;
  isRefreshing?: boolean;
  onMarkAsRead?: () => void;
  isMarkingAsRead?: boolean;
  onRelease?: () => void;
  isReleasing?: boolean;
  onBack?: () => void;
}

export function ChatHeader({
  conversation,
  onRefresh,
  isRefreshing,
  onMarkAsRead,
  isMarkingAsRead,
  onRelease,
  isReleasing,
  onBack,
}: ChatHeaderProps) {
  const { t } = useLanguage();
  const convId = conversation.id ?? conversation.conversation_id;
  const status = normalizeConversationStatus(conversation.status);

  const getStatusBadge = () => {
    if (status === "open") {
      return (
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          {t("chat.open")}
        </span>
      );
    }
    if (status === "pending") {
      return (
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60">
          <Clock className="h-3 w-3" />
          {t("chat.pending")}
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
        <CheckCircle2 className="h-3 w-3" />
        {t("chat.closed")}
      </span>
    );
  };

  const userName =
    conversation.user?.name ||
    (conversation.user?.first_name
      ? `${conversation.user.first_name} ${conversation.user.last_name || ""}`.trim()
      : null);
  const userEmail = conversation.user?.email;

  const title =
    userName ||
    conversation.subject ||
    conversation.title ||
    `${t("chat.conversation")} #${convId}`;

  const avatarLetter = (userName || userEmail || "")[0]?.toUpperCase();

  return (
    <div className="h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-3 sm:px-5 flex items-center justify-between flex-shrink-0">
      <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
        {onBack && (
          <button
            onClick={onBack}
            className="md:hidden p-1.5 -ms-1 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            title={t("chat.back")}
          >
            <ArrowLeft className="h-5 w-5 rtl:rotate-180" />
          </button>
        )}

        <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl bg-teal-600 text-white flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0 shadow-xs">
          {avatarLetter ? avatarLetter : <Headphones className="h-5 w-5" />}
        </div>

        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-gray-900 dark:text-white text-xs sm:text-sm truncate max-w-[130px] sm:max-w-xs md:max-w-md">
              {title}
            </h3>
            {getStatusBadge()}
          </div>
          <p className="text-[11px] text-gray-500 dark:text-gray-400 truncate">
            {userName && title !== userName ? (
              <span>
                {userName} • #{convId} {userEmail ? `• ${userEmail}` : ""}
              </span>
            ) : userEmail ? (
              <span>
                #{convId} • {userEmail}
              </span>
            ) : (
              <span>
                #{convId}
              </span>
            )}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
        {onRelease && (
          <Button
            variant="outline"
            size="sm"
            onClick={onRelease}
            disabled={isReleasing}
            className="h-8 px-2 sm:px-3 gap-1.5 text-xs text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800/80 bg-amber-50/60 dark:bg-amber-950/40 hover:bg-amber-100 dark:hover:bg-amber-950/80 cursor-pointer shadow-2xs"
            title={t("chat.release")}
          >
            <ShieldAlert className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">
              {isReleasing ? t("chat.releasing") : t("chat.release")}
            </span>
          </Button>
        )}

        {onMarkAsRead && (
          <Button
            variant="outline"
            size="sm"
            onClick={onMarkAsRead}
            disabled={isMarkingAsRead}
            className="h-8 px-2 sm:px-3 gap-1.5 text-xs text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800/80 bg-teal-50/60 dark:bg-teal-950/40 hover:bg-teal-100 dark:hover:bg-teal-950/80 cursor-pointer shadow-2xs"
            title={t("chat.markAsRead")}
          >
            <CheckCheck
              className={`h-3.5 w-3.5 ${
                isMarkingAsRead ? "animate-spin" : "text-teal-600 dark:text-teal-400"
              }`}
            />
            <span className="hidden sm:inline">
              {t("chat.markAsRead")}
            </span>
          </Button>
        )}

        {onRefresh && (
          <Button
            variant="outline"
            size="sm"
            onClick={onRefresh}
            disabled={isRefreshing}
            className="h-8 px-2 sm:px-3 gap-1 text-xs text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer shadow-2xs"
            title={t("chat.refresh")}
          >
            <RotateCw
              className={`h-3.5 w-3.5 ${
                isRefreshing ? "animate-spin text-teal-600" : ""
              }`}
            />
            <span className="hidden sm:inline">{t("chat.refresh")}</span>
          </Button>
        )}
      </div>
    </div>
  );
}