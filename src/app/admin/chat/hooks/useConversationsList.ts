"use client";

import { useState, useMemo } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import {
  fetchSupportConversations,
} from "@/data/api/services/chat.service";
import { StatusFilter } from "../components/ChatTabs";
import { applyReadStateToConversation } from "../utils/chatReadPersistence";
import { useDebounce } from "@/hooks/useDebounce";

interface UseConversationsListParams {
  token?: string;
  isAdmin: boolean;
  selectedConversationId?: string | number | null;
}

export function normalizeConversationStatus(status?: any): "open" | "pending" | "closed" {
  if (!status && status !== 0) return "open";
  const s = String(status).toLowerCase().trim();
  if (
    s === "closed" ||
    s === "resolved" ||
    s === "completed" ||
    s === "finished" ||
    s === "done" ||
    s === "archived" ||
    s === "3"
  ) {
    return "closed";
  }
  if (
    s === "pending" ||
    s === "waiting" ||
    s === "paused" ||
    s === "hold" ||
    s === "on_hold" ||
    s === "2"
  ) {
    return "pending";
  }
  return "open";
}

export function useConversationsList({
  token,
  isAdmin,
  selectedConversationId,
}: UseConversationsListParams) {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebounce(searchQuery);

  const {
    data: conversationsData,
    isLoading: isLoadingConversations,
    refetch: refetchConversations,
    isRefetching: isRefetchingConversations,
    fetchNextPage: fetchNextConversationsPage,
    hasNextPage: hasNextConversationsPage,
    isFetchingNextPage: isFetchingNextConversationsPage,
  } = useInfiniteQuery({
    queryKey: ["supportConversations", token, debouncedSearch, isAdmin, "infinite"],
    queryFn: ({ pageParam = undefined, signal }) =>
      fetchSupportConversations(token || "", {
        cursor: pageParam,
        search: debouncedSearch,
        isAdmin,
        signal,
      }),
    getNextPageParam: (lastPage) => lastPage.next_cursor || undefined,
    enabled: !!token,
    initialPageParam: undefined as string | undefined,
    // Kept up to date by websocket events (useChatRealtime); refetched only when marked stale
    // (missed events, mutations) or on the first load.
    staleTime: Infinity,
    gcTime: 30 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    refetchOnReconnect: true,
  });

  const conversations = useMemo(() => {
    const raw = conversationsData?.pages.flatMap((page) => page.data) || [];
    const seen = new Set<string>();
    const deduplicated: typeof raw = [];
    for (const c of raw) {
      const convId = String(c.id ?? c.conversation_id);
      if (!seen.has(convId)) {
        seen.add(convId);
        deduplicated.push(c);
      }
    }

    return deduplicated.map((c) =>
      applyReadStateToConversation(
        c,
        selectedConversationId
          ? String(c.id ?? c.conversation_id) === String(selectedConversationId)
          : false
      )
    );
  }, [conversationsData, selectedConversationId]);

  const filteredConversations = useMemo(() => {
    return conversations.filter((c) => {
      const s = normalizeConversationStatus(c.status);
      if (statusFilter !== "all" && s !== statusFilter) {
        return false;
      }
      if (debouncedSearch.trim()) {
        const query = debouncedSearch.toLowerCase().trim();
        const userName = (
          c.user?.name ||
          `${c.user?.first_name || ""} ${c.user?.last_name || ""}`.trim()
        ).toLowerCase();
        const userEmail = (c.user?.email || "").toLowerCase();
        const subject = (c.subject || "").toLowerCase();
        const convId = String(c.id ?? c.conversation_id);
        const matches =
          userName.includes(query) ||
          userEmail.includes(query) ||
          subject.includes(query) ||
          convId.includes(query);
        if (!matches) return false;
      }
      return true;
    });
  }, [conversations, statusFilter, debouncedSearch]);

  const counts = useMemo(() => {
    const all = conversations.length;
    let open = 0;
    let pending = 0;
    let closed = 0;

    conversations.forEach((c) => {
      const s = normalizeConversationStatus(c.status);
      if (s === "open") open++;
      else if (s === "pending") pending++;
      else if (s === "closed") closed++;
    });

    return { all, open, pending, closed };
  }, [conversations]);

  return {
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
  };
}