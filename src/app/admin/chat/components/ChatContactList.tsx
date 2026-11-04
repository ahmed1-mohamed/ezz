"use client";

import { Search, X, MessageSquare, Plus, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { SupportConversation } from "@/data/api/services/chat.service";
import { ChatContactItem } from "./ChatContactItem";
import { ChatContactListSkeleton } from "./ChatSkeletons";

interface ChatContactListProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isLoading: boolean;
  conversations: SupportConversation[];
  selectedConversationId: string | number | null;
  onConversationSelect: (id: string | number) => void;
  formatTime: (dateString?: string | null) => string;
  onCreateConversation?: () => void;
  isCreatingConversation?: boolean;
  fetchNextPage?: () => void;
  hasNextPage?: boolean;
  isFetchingNextPage?: boolean;
  className?: string;
}

export function ChatContactList({
  searchQuery,
  setSearchQuery,
  isLoading,
  conversations,
  selectedConversationId,
  onConversationSelect,
  formatTime,
  onCreateConversation,
  isCreatingConversation,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
  className = "",
}: ChatContactListProps) {
  const { t } = useLanguage();

  return (
    <div
      className={`w-full md:w-80 lg:w-96 border-e border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex flex-col h-full flex-shrink-0 ${className}`}
    >
      <div className="p-3 border-b border-gray-200 dark:border-gray-800 space-y-2.5">
        {onCreateConversation && (
          <Button
            onClick={onCreateConversation}
            disabled={isCreatingConversation}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white gap-2 h-9 text-xs font-semibold shadow-xs cursor-pointer"
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

        <div className="relative">
          <Search className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder={t("chat.searchChats")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="ps-9 pe-8 bg-gray-50/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 text-xs sm:text-sm h-9 focus-visible:ring-teal-500 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto divide-y divide-gray-100 dark:divide-gray-800/70">
        {isLoading ? (
          <ChatContactListSkeleton />
        ) : conversations.length === 0 ? (
          <div className="p-8 text-center text-gray-400 dark:text-gray-500 flex flex-col items-center justify-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400 dark:text-gray-500">
              <MessageSquare className="h-5 w-5" />
            </div>
            <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
              {t("chat.noContactsFound")}
            </p>
            {onCreateConversation && (
              <Button
                variant="outline"
                size="sm"
                onClick={onCreateConversation}
                disabled={isCreatingConversation}
                className="text-xs gap-1.5 border-teal-600 text-teal-700 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/40"
              >
                <Plus className="h-3.5 w-3.5" />
                {t("chat.newConversation")}
              </Button>
            )}
          </div>
        ) : (
          conversations.map((conv) => {
            const convId = conv.id ?? conv.conversation_id;
            const isSelected = String(selectedConversationId) === String(convId);

            return (
              <ChatContactItem
                key={String(convId)}
                conversation={conv}
                isSelected={isSelected}
                onSelect={onConversationSelect}
                formatTime={formatTime}
              />
            );
          })
        )}

        {hasNextPage && (
          <div className="p-3 pb-6 flex justify-center">
            <Button
              variant="outline"
              size="sm"
              onClick={() => fetchNextPage && fetchNextPage()}
              disabled={isFetchingNextPage}
              className="text-xs bg-white dark:bg-gray-800 text-teal-600 dark:text-teal-400 border-teal-200 dark:border-teal-800 hover:bg-teal-50 dark:hover:bg-teal-900/50"
            >
              {isFetchingNextPage ? (
                <>
                  <Loader2 className="h-3.5 w-3.5 animate-spin me-2" />
                  {t("chat.loading")}
                </>
              ) : (
                t("chat.loadMore")
              )}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}