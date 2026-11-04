"use client";

import { Plus, Headphones, ShieldCheck, Clock, Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface ChatEmptyStateProps {
  onNewConversation: () => void;
  isLoading?: boolean;
}

export function ChatEmptyState({ onNewConversation, isLoading }: ChatEmptyStateProps) {
  const { t } = useLanguage();

  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-b from-gray-50/50 dark:from-gray-900/50 via-white dark:via-gray-900 to-gray-50/30 dark:to-gray-950/80 p-8 text-center select-none overflow-y-auto">
      <div className="max-w-md w-full flex flex-col items-center">
        <div className="relative mb-6">
          <div className="absolute -inset-2 rounded-full bg-teal-100/60 dark:bg-teal-900/30 blur-md animate-pulse" />
          <div className="relative h-20 w-20 rounded-2xl bg-gradient-to-tr from-teal-600 to-teal-500 text-white flex items-center justify-center shadow-lg shadow-teal-600/20 border-2 border-white dark:border-gray-800">
            <Headphones className="h-10 w-10" />
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {t("chat.selectChatToStart")}
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
          {t("chat.emptyStateSubtitle")}
        </p>

        <Button
          onClick={onNewConversation}
          disabled={isLoading}
          className="bg-teal-600 hover:bg-teal-700 text-white gap-2 text-sm font-semibold h-11 px-6 rounded-xl shadow-md shadow-teal-600/20 hover:shadow-lg hover:shadow-teal-600/30 transition-all cursor-pointer mb-8"
        >
          <Plus className="h-4 w-4" />
          <span>{t("chat.newConversation")}</span>
        </Button>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full text-start">
          <div className="bg-white dark:bg-gray-850 dark:bg-gray-800/90 border border-gray-200/80 dark:border-gray-800 rounded-xl p-3.5 shadow-2xs">
            <div className="h-7 w-7 rounded-lg bg-teal-50 dark:bg-teal-950/50 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-2">
              <Clock className="h-4 w-4" />
            </div>
            <h4 className="text-xs font-semibold text-gray-800 dark:text-gray-200 mb-0.5">
              {t("chat.quickResponse")}
            </h4>
            <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-tight">
              {t("chat.quickResponseDesc")}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-850 dark:bg-gray-800/90 border border-gray-200/80 dark:border-gray-800 rounded-xl p-3.5 shadow-2xs">
            <div className="h-7 w-7 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-2">
              <Paperclip className="h-4 w-4" />
            </div>
            <h4 className="text-xs font-semibold text-gray-800 dark:text-gray-200 mb-0.5">
              {t("chat.attachments")}
            </h4>
            <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-tight">
              {t("chat.attachmentsDesc")}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-850 dark:bg-gray-800/90 border border-gray-200/80 dark:border-gray-800 rounded-xl p-3.5 shadow-2xs">
            <div className="h-7 w-7 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-2">
              <ShieldCheck className="h-4 w-4" />
            </div>
            <h4 className="text-xs font-semibold text-gray-800 dark:text-gray-200 mb-0.5">
              {t("chat.trackIssues")}
            </h4>
            <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-tight">
              {t("chat.trackIssuesDesc")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}