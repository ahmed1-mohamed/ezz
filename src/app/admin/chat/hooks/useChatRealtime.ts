"use client";

import { useEffect, useRef } from "react";
import { QueryClient } from "@tanstack/react-query";
import {
  SupportMessage,
  markSupportConversationAsRead,
} from "@/data/api/services/chat.service";
import { recordConversationAsRead } from "../utils/chatReadPersistence";
import {
  extractChatMessage,
  getChatChannelName,
  getConversationChannelName,
  isChatReadEvent,
  subscribeToChatChannel,
} from "../utils/chatSocket";

interface UseChatRealtimeParams {
  token?: string;
  currentUserId?: string | number;
  isAdmin: boolean;
  selectedConversationId: string | number | null;
  queryClient: QueryClient;
  onNewMessage?: (msg: SupportMessage) => void;
}

const MAX_HANDLED_MESSAGE_KEYS = 500;
const handledMessageKeys = new Set<string>();

function isDuplicateMessageEvent(msg: SupportMessage): boolean {
  const msgId = msg.id ?? msg.message_id;
  if (msgId === undefined || msgId === null) return false;
  const key = `${msg.conversation_id}:${msgId}`;
  if (handledMessageKeys.has(key)) return true;
  handledMessageKeys.add(key);
  if (handledMessageKeys.size > MAX_HANDLED_MESSAGE_KEYS) {
    const oldest = handledMessageKeys.values().next().value;
    if (oldest !== undefined) handledMessageKeys.delete(oldest);
  }
  return false;
}

export function useChatRealtime({
  token,
  currentUserId,
  isAdmin,
  selectedConversationId,
  queryClient,
  onNewMessage,
}: UseChatRealtimeParams) {
  const selectedConversationIdRef = useRef(selectedConversationId);
  const currentUserIdRef = useRef(currentUserId);
  const isAdminRef = useRef(isAdmin);
  const tokenRef = useRef(token);
  const onNewMessageRef = useRef(onNewMessage);
  const queryClientRef = useRef(queryClient);

  useEffect(() => { selectedConversationIdRef.current = selectedConversationId; }, [selectedConversationId]);
  useEffect(() => { currentUserIdRef.current = currentUserId; }, [currentUserId]);
  useEffect(() => { isAdminRef.current = isAdmin; }, [isAdmin]);
  useEffect(() => { tokenRef.current = token; }, [token]);
  useEffect(() => { onNewMessageRef.current = onNewMessage; }, [onNewMessage]);
  useEffect(() => { queryClientRef.current = queryClient; }, [queryClient]);

  const stableHandlerRef = useRef((rawData: any) => {
    const _isAdmin = isAdminRef.current;
    const _token = tokenRef.current;
    const _currentUserId = currentUserIdRef.current;
    const _queryClient = queryClientRef.current;
    const currentSelected = selectedConversationIdRef.current;

    if (!_token) return;

    const msg = extractChatMessage(rawData);
    const isReadEvent = isChatReadEvent(rawData);

    const readConvId = rawData?.conversation_id ?? rawData?.id ?? (isReadEvent ? currentSelected : null);

    if (isReadEvent && readConvId) {
      recordConversationAsRead(readConvId);
      const readConvIdStr = String(readConvId);
      const now = new Date().toISOString();

      _queryClient.setQueriesData(
        {
          predicate: (query) => {
            const key = query.queryKey;
            return (
              Array.isArray(key) &&
              key[0] === "supportMessages" &&
              String(key[1]) === readConvIdStr
            );
          },
        },
        (old: any) => {
          if (!old) return old;
          const updateMsg = (m: any) => ({
            ...m,
            is_read: true,
            read_at: m.read_at || now,
            is_seen: true,
            read: true,
          });

          if (old.pages && Array.isArray(old.pages)) {
            return {
              ...old,
              pages: old.pages.map((page: any) => ({
                ...page,
                data: Array.isArray(page.data) ? page.data.map(updateMsg) : page.data,
              })),
            };
          }
          return old;
        }
      );

      _queryClient.setQueriesData(
        { queryKey: ["supportConversations"] },
        (old: any) => {
          if (!old) return old;
          const updateConv = (c: any) => {
            const cId = c.id ?? c.conversation_id;
            if (String(cId) === readConvIdStr) {
              return {
                ...c,
                unread_for_user: 0,
                unread_for_admin: 0,
                unread_count: 0,
                unread: 0,
              };
            }
            return c;
          };

          if (old.pages && Array.isArray(old.pages)) {
            return {
              ...old,
              pages: old.pages.map((page: any) => ({
                ...page,
                data: Array.isArray(page.data) ? page.data.map(updateConv) : page.data,
              })),
            };
          }
          return old;
        }
      );
      return;
    }

    if (msg) {
      if (isDuplicateMessageEvent(msg)) return;
      const msgId = msg.id ?? msg.message_id;
      const msgConvId = msg.conversation_id;
      const isCurrentOpen = currentSelected && String(msgConvId) === String(currentSelected);

      if (isCurrentOpen) {
        const formattedMsg = {
          ...msg,
          is_read: true,
          read_at: msg.read_at || new Date().toISOString(),
        };

        recordConversationAsRead(currentSelected, formattedMsg, formattedMsg.created_at);

        _queryClient.setQueriesData(
          {
            predicate: (query) => {
              const key = query.queryKey;
              return (
                Array.isArray(key) &&
                key[0] === "supportMessages" &&
                String(key[1]) === String(currentSelected)
              );
            },
          },
          (old: any) => {
            if (!old?.pages?.length) return old;

            const exists = old.pages.some((page: any) =>
              page.data.some((m: any) => (m.id ?? m.message_id) === msgId)
            );
            if (exists) return old;

            const lastPageIndex = old.pages.length - 1;
            const newPages = [...old.pages];
            newPages[lastPageIndex] = {
              ...newPages[lastPageIndex],
              data: [...newPages[lastPageIndex].data, formattedMsg],
            };
            return { ...old, pages: newPages };
          }
        );

        const isOwn =
          _currentUserId &&
          (Number(msg.sender_id) === Number(_currentUserId) ||
            Number(msg.user_id) === Number(_currentUserId));

        if (!isOwn) {
          markSupportConversationAsRead(currentSelected, _token, _isAdmin).catch(() => { });
        }
      }

      const isOwnMsg =
        _currentUserId &&
        (Number(msg.sender_id) === Number(_currentUserId) ||
          Number(msg.user_id) === Number(_currentUserId));

      if (!isOwnMsg) {
        onNewMessageRef.current?.(msg);
      }

      _queryClient.setQueriesData(
        { queryKey: ["supportConversations"] },
        (old: any) => {
          if (!old) return old;

          const updateConv = (c: any) => {
            const cId = c.id ?? c.conversation_id;
            if (String(cId) !== String(msgConvId)) return c;
            return {
              ...c,
              last_message_at: msg.created_at || new Date().toISOString(),
              last_message: isCurrentOpen
                ? { ...msg, is_read: true, read_at: msg.read_at || new Date().toISOString() }
                : msg,
              unread_for_admin: isCurrentOpen ? 0 : Number(c.unread_for_admin || 0) + (_isAdmin ? 1 : 0),
              unread_for_user: isCurrentOpen ? 0 : Number(c.unread_for_user || 0) + (!_isAdmin ? 1 : 0),
              unread_count: isCurrentOpen ? 0 : Number(c.unread_count || 0) + 1,
            };
          };

          if (old.pages && Array.isArray(old.pages)) {
            let found = false;
            const newPages = old.pages.map((page: any) => ({
              ...page,
              data: page.data.map((c: any) => {
                const updated = updateConv(c);
                if (updated !== c) found = true;
                return updated;
              }),
            }));
            if (!found && rawData?.conversation) {
              newPages[0] = {
                ...newPages[0],
                data: [rawData.conversation, ...(newPages[0]?.data || [])],
              };
            }
            return { ...old, pages: newPages };
          }

          if (old.data && Array.isArray(old.data)) {
            return { ...old, data: old.data.map(updateConv) };
          }

          return old;
        }
      );
    } else if (rawData?.conversation) {
      _queryClient.setQueriesData(
        { queryKey: ["supportConversations"] },
        (old: any) => {
          if (!old?.pages?.length) return old;
          return {
            ...old,
            pages: [
              { ...old.pages[0], data: [rawData.conversation, ...old.pages[0].data] },
              ...old.pages.slice(1),
            ],
          };
        }
      );
    }
  });

  // Fetch again after a websocket drop: events sent while disconnected never arrive.
  const resyncRef = useRef(() => {
    const _queryClient = queryClientRef.current;
    const currentSelected = selectedConversationIdRef.current;
    _queryClient.invalidateQueries({ queryKey: ["supportConversations"] });
    if (currentSelected) {
      _queryClient.invalidateQueries({
        predicate: (query) => {
          const key = query.queryKey;
          return Array.isArray(key) && key[0] === "supportMessages" && String(key[1]) === String(currentSelected);
        },
      });
    }
  });

  useEffect(() => {
    if (!token) return;
    return subscribeToChatChannel(token, getChatChannelName(isAdmin), {
      onEvent: (data) => stableHandlerRef.current(data),
      onResubscribed: () => resyncRef.current(),
    });
  }, [token, isAdmin]);

  useEffect(() => {
    if (!selectedConversationId || !token) return;
    return subscribeToChatChannel(token, getConversationChannelName(selectedConversationId), {
      onEvent: (data) => stableHandlerRef.current(data),
    });
  }, [selectedConversationId, token]);
}
