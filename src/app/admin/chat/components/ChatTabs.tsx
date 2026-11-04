"use client";

import { MessageSquare, CheckCircle2, Clock, Inbox, Plus, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export type StatusFilter = "all" | "open" | "pending" | "closed";

interface ChatTabsProps {
  statusFilter: StatusFilter;
  setStatusFilter: (filter: StatusFilter) => void;
  counts?: {
    all: number;
    open: number;
    pending: number;
    closed: number;
  };
  onCreateConversation?: () => void;
  isCreatingConversation?: boolean;
}

export function ChatTabs({
  statusFilter,
  setStatusFilter,
  counts,
  onCreateConversation,
  isCreatingConversation,
}: ChatTabsProps) {
  const { t } = useLanguage();

  const tabs: { key: StatusFilter; label: string; icon: any; count?: number }[] = [
    { key: "all", label: t("chat.all"), icon: Inbox, count: counts?.all },
    { key: "open", label: t("chat.open"), icon: Clock, count: counts?.open },
    { key: "pending", label: t("chat.pending"), icon: Clock, count: counts?.pending },
    { key: "closed", label: t("chat.closed"), icon: CheckCircle2, count: counts?.closed },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="px-6 pt-4 pb-0">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 border border-teal-100 dark:border-teal-900/40 flex items-center justify-center shadow-xs">
              <MessageSquare className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">{t("chat.title")}</h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">{t("chat.chatsTitle")}</p>
            </div>
          </div>

          {onCreateConversation && (
            <Button
              onClick={onCreateConversation}
              disabled={isCreatingConversation}
              className="bg-teal-600 hover:bg-teal-700 text-white gap-2 h-9 text-xs font-semibold shadow-xs cursor-pointer"
            >
              {isCreatingConversation ? (
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
              ) : (
                <Plus className="h-3.5 w-3.5" />
              )}
              <span>
                {isCreatingConversation
                  ? t("chat.creatingConversation")
                  : t("chat.newConversation")}
              </span>
            </Button>
          )}
        </div>

        <div className="flex gap-4 border-b border-gray-100 dark:border-gray-800">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = statusFilter === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setStatusFilter(tab.key)}
                className={`pb-3 px-1.5 relative flex items-center gap-2 text-sm font-medium transition-colors cursor-pointer ${isActive
                    ? "text-teal-600 dark:text-teal-400 font-semibold"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                  }`}
              >
                <Icon className="h-4 w-4" />
                <span>{tab.label}</span>
                {tab.count !== undefined && tab.count > 0 && (
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-semibold ${isActive
                        ? "bg-teal-100 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                      }`}
                  >
                    {tab.count}
                  </span>
                )}
                {isActive && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-600 dark:bg-teal-500 rounded-full" />}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}