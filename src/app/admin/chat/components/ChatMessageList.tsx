"use client";

import { useState, useCallback } from "react";
import { MessageSquareDashed, Loader2 } from "lucide-react";
import { SupportMessage, SupportConversation } from "@/data/api/services/chat.service";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChatMessageItem } from "./ChatMessageItem";
import { ChatMessageListSkeleton } from "./ChatSkeletons";
import { ImageLightboxModal } from "./ImageLightboxModal";

// Group keys produced by groupMessagesByDate that need translating for display.
const DATE_GROUP_LABEL_KEYS: Record<string, string> = {
  Today: "chat.today",
  Yesterday: "chat.yesterday",
  Recent: "chat.recent",
};

interface ChatMessageListProps {
  isLoadingMessages: boolean;
  messages: SupportMessage[];
  messageGroups: { [key: string]: SupportMessage[] };
  currentUserId?: string | number;
  isAdmin?: boolean;
  conversation?: SupportConversation | null;
  messagesEndRef: React.RefObject<HTMLDivElement | null>;
  formatTime: (dateString: string) => string;
  fetchNextPage?: () => void;
  hasNextPage?: boolean;
  isFetchingNextPage?: boolean;
}

export function ChatMessageList({
  isLoadingMessages,
  messages,
  messageGroups,
  currentUserId,
  isAdmin,
  conversation,
  messagesEndRef,
  formatTime,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
}: ChatMessageListProps) {
  const { t } = useLanguage();
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    url: string | null;
    name: string;
  }>({
    isOpen: false,
    url: null,
    name: "",
  });

  const handlePreviewImage = useCallback((url: string, name: string) => {
    setLightboxState({
      isOpen: true,
      url,
      name,
    });
  }, []);

  const handleCloseLightbox = useCallback(() => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  }, []);

  if (isLoadingMessages) {
    return <ChatMessageListSkeleton />;
  }

  if (messages.length === 0) {
    return (
      <div className="flex-1 overflow-y-auto p-8 bg-gray-50/50 dark:bg-gray-950/60 flex flex-col items-center justify-center text-center">
        <div className="h-12 w-12 rounded-2xl bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 border border-teal-100 dark:border-teal-900/40 flex items-center justify-center mb-3 shadow-2xs">
          <MessageSquareDashed className="h-6 w-6" />
        </div>
        <h4 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white mb-1">
          {t("chat.noMessagesYet")}
        </h4>
        <p className="text-xs text-gray-500 dark:text-gray-400 max-w-sm">
          {t("chat.noMessagesPrompt")}
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="flex-1 overflow-y-auto p-3 sm:p-5 md:p-6 space-y-6 bg-gray-50/50 dark:bg-gray-950/60">
        {hasNextPage && (
          <div className="flex justify-center mb-2">
            <button
              onClick={() => fetchNextPage && fetchNextPage()}
              disabled={isFetchingNextPage}
              className="px-3.5 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-2xs transition-colors flex items-center gap-2 cursor-pointer"
            >
              {isFetchingNextPage ? (
                <>
                  <Loader2 className="h-3.5 w-3.5 animate-spin text-teal-600" />
                  <span>{t("chat.loading")}</span>
                </>
              ) : (
                <span>{t("chat.loadOlder")}</span>
              )}
            </button>
          </div>
        )}

        {Object.entries(messageGroups).map(([date, msgs]) => (
          <div key={date} className="space-y-4">
            <div className="flex items-center justify-center sticky top-0 z-10 py-1">
              <span className="text-[11px] font-semibold text-gray-500 dark:text-gray-400 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xs border border-gray-200/80 dark:border-gray-800 shadow-2xs px-3 py-0.5 rounded-full">
                {DATE_GROUP_LABEL_KEYS[date] ? t(DATE_GROUP_LABEL_KEYS[date]) : date}
              </span>
            </div>

            {msgs.map((message: SupportMessage, idx) => {
              const senderType = message.sender_type?.toLowerCase();

              let isOwn: boolean;

              if (currentUserId &&
                (Number(message.sender_id) === Number(currentUserId) ||
                  Number(message.user_id) === Number(currentUserId))) {
                isOwn = true;
              } else if (senderType) {
                if (isAdmin) {
                  isOwn = senderType === "admin" || senderType === "support";
                } else {
                  isOwn = senderType === "user";
                }
              } else if (message.sender?.role) {
                const role = message.sender.role.toLowerCase();
                if (isAdmin) {
                  isOwn = role === "admin" || role === "support";
                } else {
                  isOwn = role !== "admin" && role !== "support";
                }
              } else {
                isOwn = false;
              }

              return (
                <ChatMessageItem
                  key={String(message.id || message.message_id || `msg-${idx}`)}
                  message={message}
                  isOwn={isOwn}
                  formatTime={formatTime}
                  onPreviewImage={handlePreviewImage}
                />
              );
            })}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <ImageLightboxModal
        isOpen={lightboxState.isOpen}
        onClose={handleCloseLightbox}
        imageUrl={lightboxState.url}
        imageName={lightboxState.name}
      />
    </>
  );
}