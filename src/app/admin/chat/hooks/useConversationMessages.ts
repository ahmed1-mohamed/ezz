"use client";

import { useRef, useEffect, useMemo } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchSupportConversationMessages } from "@/data/api/services/chat.service";
import { groupMessagesByDate } from "../utils/chatDateUtils";

interface UseConversationMessagesParams {
  token?: string;
  selectedConversationId: string | number | null;
  isAdmin: boolean;
}

export function useConversationMessages({
  token,
  selectedConversationId,
  isAdmin,
}: UseConversationMessagesParams) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const prevMessageCountRef = useRef(0);

  const {
    data: messagesData,
    isLoading: isLoadingMessages,
    refetch: refetchMessages,
    isRefetching: isRefetchingMessages,
    fetchNextPage: fetchNextMessagesPage,
    hasNextPage: hasNextMessagesPage,
    isFetchingNextPage: isFetchingNextMessagesPage,
  } = useInfiniteQuery({
    queryKey: ["supportMessages", selectedConversationId, token, isAdmin],
    queryFn: ({ pageParam = undefined, signal }) =>
      fetchSupportConversationMessages(
        selectedConversationId!,
        token || "",
        pageParam,
        isAdmin,
        signal
      ),
    getNextPageParam: (lastPage) => lastPage.next_cursor || undefined,
    enabled: !!selectedConversationId && !!token,
    initialPageParam: undefined as string | undefined,
    // New messages arrive over the websocket (useChatRealtime), so no polling or refetch on focus.
    staleTime: 0,
    gcTime: 30 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    refetchOnReconnect: true,
  });

  const messages = useMemo(() => {
    const raw = messagesData?.pages.flatMap((page) => page.data) || [];
    const seen = new Set<string | number>();
    const deduplicated = raw.filter((m) => {
      const id = m.id ?? m.message_id;
      if (id === undefined || id === null) return true;
      if (seen.has(id)) return false;
      seen.add(id);
      return true;
    });

    return deduplicated.sort((a, b) => {
      const timeA = a.created_at ? new Date(a.created_at).getTime() : 0;
      const timeB = b.created_at ? new Date(b.created_at).getTime() : 0;
      return timeA - timeB;
    });
  }, [messagesData]);

  const messageGroups = useMemo(() => groupMessagesByDate(messages), [messages]);

  useEffect(() => {
    prevMessageCountRef.current = 0;
  }, [selectedConversationId]);

  useEffect(() => {
    if (!messagesEndRef.current) return;
    const isInitialLoad = prevMessageCountRef.current === 0 && messages.length > 0;
    const hasNewMessage = messages.length > prevMessageCountRef.current;
    prevMessageCountRef.current = messages.length;

    if (hasNewMessage || isInitialLoad) {
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: isInitialLoad ? "instant" : "smooth" });
      }, 50);
    }
  }, [messages]);

  return {
    messages,
    messageGroups,
    isLoadingMessages,
    refetchMessages,
    isRefetchingMessages,
    fetchNextMessagesPage,
    hasNextMessagesPage,
    isFetchingNextMessagesPage,
    messagesEndRef,
  };
}