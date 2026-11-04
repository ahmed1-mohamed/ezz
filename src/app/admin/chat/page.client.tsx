"use client";

import dynamic from "next/dynamic";
import { useSupportChat } from "./hooks/useSupportChat";
import { ChatTabs } from "./components/ChatTabs";
import { ChatContactList } from "./components/ChatContactList";
import { ChatHeader } from "./components/ChatHeader";
import { ChatMessageList } from "./components/ChatMessageList";
import { ChatInput } from "./components/ChatInput";
import { ChatEmptyState } from "./components/ChatEmptyState";

const NewConversationModal = dynamic(
  () => import("./components/NewConversationModal").then((mod) => mod.NewConversationModal),
  { ssr: false }
);

export default function ChatPage() {
  const {
    statusFilter,
    setStatusFilter,
    counts,
    searchQuery,
    setSearchQuery,
    filteredConversations,
    isLoadingConversations,
    refetchConversations,
    isRefetchingConversations,
    fetchNextConversationsPage,
    hasNextConversationsPage,
    isFetchingNextConversationsPage,
    selectedConversationId,
    setSelectedConversationId,
    activeConversation,
    handleConversationSelect,
    handleManualMarkAsRead,
    isMarkingAsRead,
    handleReleaseConversation,
    isReleasing,
    messages,
    messageGroups,
    isLoadingMessages,
    refetchMessages,
    isRefetchingMessages,
    fetchNextMessagesPage,
    hasNextMessagesPage,
    isFetchingNextMessagesPage,
    messageInput,
    setMessageInput,
    attachment,
    setAttachment,
    handleSendMessage,
    isSendingMessage,
    isNewConversationModalOpen,
    setIsNewConversationModalOpen,
    handleCreateConversation,
    isCreatingConversation,
    currentUserId,
    isAdmin,
    messagesEndRef,
    formatTime,
  } = useSupportChat();

  return (
    <div className="h-[calc(100dvh-4rem)] p-2 sm:p-3 md:p-4 lg:p-5 flex flex-col max-w-full overflow-hidden bg-gray-50/70 dark:bg-gray-950">
      <div className="flex-1 flex flex-col bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/90 dark:border-gray-800 shadow-xs overflow-hidden">
        <div className={`${activeConversation ? "hidden md:block" : "block"}`}>
          <ChatTabs
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            counts={counts}
            onCreateConversation={() => setIsNewConversationModalOpen(true)}
            isCreatingConversation={isCreatingConversation}
          />
        </div>

        <div className="flex-1 flex overflow-hidden">
          <ChatContactList
            className={`${activeConversation ? "hidden md:flex" : "flex flex-1 md:flex-initial"}`}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            isLoading={isLoadingConversations}
            conversations={filteredConversations}
            selectedConversationId={selectedConversationId}
            onConversationSelect={handleConversationSelect}
            formatTime={formatTime}
            onCreateConversation={() => setIsNewConversationModalOpen(true)}
            isCreatingConversation={isCreatingConversation}
            fetchNextPage={fetchNextConversationsPage}
            hasNextPage={hasNextConversationsPage}
            isFetchingNextPage={isFetchingNextConversationsPage}
          />

          {activeConversation ? (
            <div className="flex-1 flex flex-col bg-white dark:bg-gray-900 overflow-hidden w-full">
              <ChatHeader
                conversation={activeConversation}
                onBack={() => setSelectedConversationId(null)}
                onRefresh={() => {
                  refetchMessages();
                  refetchConversations();
                }}
                isRefreshing={isRefetchingMessages || isRefetchingConversations}
                onMarkAsRead={handleManualMarkAsRead}
                isMarkingAsRead={isMarkingAsRead}
                onRelease={handleReleaseConversation}
                isReleasing={isReleasing}
              />

              <ChatMessageList
                isLoadingMessages={isLoadingMessages}
                messages={messages}
                messageGroups={messageGroups}
                currentUserId={currentUserId}
                isAdmin={isAdmin}
                conversation={activeConversation}
                messagesEndRef={messagesEndRef}
                formatTime={formatTime}
                fetchNextPage={fetchNextMessagesPage}
                hasNextPage={hasNextMessagesPage}
                isFetchingNextPage={isFetchingNextMessagesPage}
              />

              <ChatInput
                messageInput={messageInput}
                setMessageInput={setMessageInput}
                attachment={attachment}
                setAttachment={setAttachment}
                onSubmit={handleSendMessage}
                isPending={isSendingMessage}
              />
            </div>
          ) : (
            <div className="hidden md:flex flex-1 flex-col overflow-hidden">
              <ChatEmptyState
                onNewConversation={() => setIsNewConversationModalOpen(true)}
                isLoading={isCreatingConversation}
              />
            </div>
          )}
        </div>
      </div>

      {isNewConversationModalOpen && (
        <NewConversationModal
          isOpen={isNewConversationModalOpen}
          onClose={() => setIsNewConversationModalOpen(false)}
          onSubmit={handleCreateConversation}
          isLoading={isCreatingConversation}
        />
      )}
    </div>
  );
}