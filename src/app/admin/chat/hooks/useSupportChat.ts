"use client";

import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { useSession } from "next-auth/react";
import { useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { markSupportConversationAsRead } from "@/data/api/services/chat.service";
import { useLanguage } from "@/contexts/LanguageContext";
import { useChatRealtime } from "./useChatRealtime";
import { useConversationsList } from "./useConversationsList";
import { useConversationMessages } from "./useConversationMessages";
import { useChatMutations } from "./useChatMutations";
import { formatChatTime } from "../utils/chatDateUtils";
import { claimChatNotification } from "../utils/chatNotifications";
import { showChatNotification } from "../components/ChatNotificationToast";

const markedAsReadConvIds = new Set<string>();

export function useSupportChat() {
  const { t, language } = useLanguage();
  const { data: session } = useSession();
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();

  const initialConversationId = searchParams.get("conversationId");
  const [selectedConversationId, setSelectedConversationId] = useState<string | number | null>(
    initialConversationId || null
  );

  const currentUserId = session?.user?.id;
  const token = session?.user?.accessToken as string;
  const userType =
    session?.user?.user_type?.toLowerCase() ||
    (session?.user?.role_name as string | undefined)?.toLowerCase();
  const roleId = (session?.user as any)?.role_id;
  const isDeveloperRole = userType === "developer" || roleId === 3;
  const isExpertRole = userType === "expert" || roleId === 6;
  const isAdmin = userType === "admin" || (!isDeveloperRole && !isExpertRole);

  useEffect(() => {
    if (selectedConversationId && typeof window !== "undefined") {
      const url = new URL(window.location.href);
      if (url.searchParams.get("conversationId") !== String(selectedConversationId)) {
        url.searchParams.set("conversationId", String(selectedConversationId));
        window.history.replaceState(null, "", url.toString());
      }
    }
  }, [selectedConversationId]);

  const {
    statusFilter,
    setStatusFilter,
    searchQuery,
    setSearchQuery,
    debouncedSearch,
    conversations,
    filteredConversations,
    counts,
    isLoadingConversations,
    refetchConversations,
    isRefetchingConversations,
    fetchNextConversationsPage,
    hasNextConversationsPage,
    isFetchingNextConversationsPage,
  } = useConversationsList({ token, isAdmin, selectedConversationId });

  const {
    messages,
    messageGroups,
    isLoadingMessages,
    refetchMessages,
    isRefetchingMessages,
    fetchNextMessagesPage,
    hasNextMessagesPage,
    isFetchingNextMessagesPage,
    messagesEndRef,
  } = useConversationMessages({ token, selectedConversationId, isAdmin });

  const {
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
    handleConversationSelect,
    handleManualMarkAsRead,
    isMarkingAsRead,
    handleReleaseConversation,
    isReleasing,
    updateConversationReadState,
  } = useChatMutations({
    token,
    isAdmin,
    selectedConversationId,
    setSelectedConversationId,
    debouncedSearch,
    statusFilter,
    queryClient,
    refetchConversations,
  });

  const markedAsReadSetRef = useRef(markedAsReadConvIds);

  useEffect(() => {
    const markedSet = markedAsReadSetRef.current;
    if (markedSet.size === 0) return;

    let needsUpdate = false;
    conversations.forEach((c) => {
      const cId = String(c.id ?? c.conversation_id);
      if (!markedSet.has(cId)) return;
      const unread = Number(c.unread_for_admin || 0) + Number(c.unread_for_user || 0) + Number(c.unread_count || 0);
      if (unread > 0) needsUpdate = true;
    });

    if (needsUpdate) {
      markedSet.forEach((convId) => updateConversationReadState(convId));
    }
  }, [conversations]);

  useEffect(() => {
    if (!selectedConversationId || !token) return;

    const convIdStr = String(selectedConversationId);
    markedAsReadConvIds.add(convIdStr);
    updateConversationReadState(selectedConversationId);
    markSupportConversationAsRead(selectedConversationId, token, isAdmin).catch((err) => {
      console.warn("Auto mark as read error:", err);
    });
  }, [selectedConversationId, token, isAdmin, updateConversationReadState]);

  const handleMarkAsReadWithTracking = useCallback(async () => {
    if (selectedConversationId) {
      markedAsReadConvIds.add(String(selectedConversationId));
    }
    return handleManualMarkAsRead();
  }, [selectedConversationId, handleManualMarkAsRead]);

  const handleNewMessage = useCallback(
    (msg: any) => {
      if (msg?.conversation_id != null && !claimChatNotification(msg.conversation_id, msg?.id ?? msg?.message_id)) return;
      const senderName =
        msg?.sender?.name ||
        msg?.user?.name ||
        (msg?.sender?.first_name ? `${msg.sender.first_name} ${msg.sender.last_name || ""}`.trim() : null) ||
        t("chat.supportAgent");

      const preview: string = msg?.body || msg?.message_text || "";

      const convId = msg?.conversation_id;
      const conv = conversations.find(
        (c) => String(c.id ?? c.conversation_id) === String(convId)
      );
      const chatTitle =
        conv?.subject ||
        conv?.title ||
        conv?.user?.name ||
        (convId ? `${t("chat.conversation")} #${convId}` : "");

      if (convId == null) return;
      showChatNotification({
        conversationId: convId,
        kind: "message",
        senderName,
        title: chatTitle,
        preview,
        hasAttachment: !!(msg?.attachment || msg?.attachment_url),
        createdAt: msg?.created_at,
        labels: {
          newMessage: t("chat.notifyNewMessage"),
          newConversation: t("chat.notifyNewConversation"),
          open: t("chat.openChat"),
          dismiss: t("chat.dismiss"),
          attachment: t("chat.attachment"),
          messagesCount: (count) => t("chat.newMessagesCount", { count }),
        },
        direction: language === "ar" ? "rtl" : "ltr",
        onOpen: () => handleConversationSelect(convId),
      });
    },
    [t, language, conversations, handleConversationSelect]
  );

  useChatRealtime({
    token,
    currentUserId,
    isAdmin,
    selectedConversationId,
    queryClient,
    onNewMessage: handleNewMessage,
  });

  const activeConversation = useMemo(() => {
    return conversations.find(
      (c) => String(c.id ?? c.conversation_id) === String(selectedConversationId)
    );
  }, [conversations, selectedConversationId]);

  return {
    t,
    currentUserId,
    isAdmin,
    statusFilter,
    setStatusFilter,
    counts,
    searchQuery,
    setSearchQuery,
    conversations,
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
    handleManualMarkAsRead: handleMarkAsReadWithTracking,
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
    messagesEndRef,
    formatTime: (dateString?: string | null) =>
      formatChatTime(dateString, t("chat.yesterdayAt")),
  };
}