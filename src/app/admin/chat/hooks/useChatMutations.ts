"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { useMutation, QueryClient } from "@tanstack/react-query";
import {
  sendSupportMessage,
  createSupportConversation,
  markSupportConversationAsRead,
  releaseSupportConversation,
  CreateSupportConversationParams,
} from "@/data/api/services/chat.service";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";
import { getApiErrorMessage } from "@/lib/api-errors";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import { storeLocalBlobUrl, fileToDataUrl } from "../utils/localAttachmentCache";
import { recordConversationAsRead } from "../utils/chatReadPersistence";

interface UseChatMutationsParams {
  token?: string;
  isAdmin: boolean;
  selectedConversationId: string | number | null;
  setSelectedConversationId: (id: string | number | null) => void;
  debouncedSearch: string;
  statusFilter: string;
  queryClient: QueryClient;
  refetchConversations: () => void;
}

export function useChatMutations({
  token,
  isAdmin,
  selectedConversationId,
  setSelectedConversationId,
  debouncedSearch,
  statusFilter,
  queryClient,
  refetchConversations,
}: UseChatMutationsParams) {
  const { t } = useLanguage();
  const [messageInput, setMessageInput] = useState("");
  const [attachment, setAttachment] = useState<File | null>(null);
  const [isNewConversationModalOpen, setIsNewConversationModalOpen] = useState(false);
  const [isMarkingAsRead, setIsMarkingAsRead] = useState(false);
  const [isReleasing, setIsReleasing] = useState(false);

  const createConversationMutation = useMutation({
    mutationFn: (data: CreateSupportConversationParams) => {
      if (!token) throw new Error("Missing authentication token");
      return createSupportConversation(data, token);
    },
    onSuccess: (newConv) => {
      const convId = newConv.id ?? newConv.conversation_id;

      queryClient.setQueriesData(
        { queryKey: ["supportConversations"] },
        (old: any) => {
          if (!old || !old.pages || old.pages.length === 0) return old;
          const firstPage = old.pages[0];
          const exists = firstPage.data.some(
            (c: any) => (c.id ?? c.conversation_id) === convId
          );
          if (exists) return old;

          return {
            ...old,
            pages: [
              { ...firstPage, data: [newConv, ...firstPage.data] },
              ...old.pages.slice(1),
            ],
          };
        }
      );

      if (convId) {
        setSelectedConversationId(convId);
        queryClient.invalidateQueries({
          queryKey: ["supportMessages", convId, token, isAdmin],
        });
      }
      refetchConversations();
      setIsNewConversationModalOpen(false);
      toast.success(t("chat.conversationCreated"));
    },
    onError: (error) => {
      toast.error(getApiErrorMessage(error, t, t("chat.createFailed")), { id: API_ERROR_TOAST_ID });
    },
  });

  const sendMessageMutation = useMutation({
    mutationFn: (data: { body?: string; attachment?: File | null; _localBlobUrl?: string }) => {
      if (!selectedConversationId || !token) {
        throw new Error("Missing conversation or token");
      }
      return sendSupportMessage(
        selectedConversationId,
        { body: data.body, attachment: data.attachment },
        token,
        isAdmin
      );
    },
    onSuccess: (sentMessage, variables) => {
      const msgId = sentMessage?.id ?? sentMessage?.message_id;
      if (variables.attachment) {
        fileToDataUrl(variables.attachment).then((dataUrl) => {
          if (dataUrl) {
            if (msgId) storeLocalBlobUrl(msgId, dataUrl);
            if (sentMessage?.attachment_url) storeLocalBlobUrl(sentMessage.attachment_url, dataUrl);
            if ((sentMessage as any)?.file_url) storeLocalBlobUrl((sentMessage as any).file_url, dataUrl);
            storeLocalBlobUrl(variables.attachment!.name, dataUrl);
          }
        });
      }
      if (variables._localBlobUrl) {
        if (msgId) storeLocalBlobUrl(msgId, variables._localBlobUrl);
        if (sentMessage?.attachment_url) storeLocalBlobUrl(sentMessage.attachment_url, variables._localBlobUrl);
        if ((sentMessage as any)?.file_url) storeLocalBlobUrl((sentMessage as any).file_url, variables._localBlobUrl);
      }

      queryClient.setQueriesData(
        {
          predicate: (query) => {
            const key = query.queryKey;
            return (
              Array.isArray(key) &&
              key[0] === "supportMessages" &&
              String(key[1]) === String(selectedConversationId)
            );
          },
        },
        (old: any) => {
          if (!old || !old.pages || old.pages.length === 0) return old;

          const newMsg = {
            ...sentMessage,
            created_at: sentMessage.created_at || new Date().toISOString(),
            attachment_url: variables._localBlobUrl || sentMessage.attachment_url || null,
            file_name: variables.attachment?.name || sentMessage.file_name || null,
            file_type: variables.attachment?.type || sentMessage.file_type || null,
          };

          const lastPageIndex = old.pages.length - 1;
          const lastPage = old.pages[lastPageIndex];

          const newPages = [...old.pages];
          newPages[lastPageIndex] = {
            ...lastPage,
            data: [...lastPage.data, newMsg],
          };

          return { ...old, pages: newPages };
        }
      );

      queryClient.setQueriesData(
        { queryKey: ["supportConversations"] },
        (old: any) => {
          if (!old || !old.pages) return old;
          return {
            ...old,
            pages: old.pages.map((page: any) => ({
              ...page,
              data: page.data.map((conv: any) => {
                const convId = conv.id ?? conv.conversation_id;
                if (String(convId) === String(selectedConversationId)) {
                  return {
                    ...conv,
                    last_message_at: sentMessage.created_at || new Date().toISOString(),
                    last_message: sentMessage,
                  };
                }
                return conv;
              }),
            })),
          };
        }
      );

      setTimeout(() => {
        queryClient.invalidateQueries({ queryKey: ["supportConversations"] });
        queryClient.invalidateQueries({
          predicate: (query) => {
            const key = query.queryKey;
            return (
              Array.isArray(key) &&
              key[0] === "supportMessages" &&
              String(key[1]) === String(selectedConversationId)
            );
          }
        });
      }, 1000);

      setMessageInput("");
      setAttachment(null);
    },
    onError: (error) => {
      toast.error(getApiErrorMessage(error, t, t("chat.sendFailed")), { id: API_ERROR_TOAST_ID });
    },
  });

  const updateConversationReadState = useCallback(
    (convIdToUpdate: string | number) => {
      if (!convIdToUpdate) return;
      const convIdStr = String(convIdToUpdate);

      recordConversationAsRead(convIdToUpdate);

      queryClient.setQueriesData(
        { queryKey: ["supportConversations"] },
        (old: any) => {
          if (!old) return old;

          const updateConv = (c: any) => {
            const cId = c.id ?? c.conversation_id;
            if (String(cId) === convIdStr) {
              return {
                ...c,
                unread_for_user: 0,
                unread_for_admin: 0,
                unread_count: 0,
                unread: 0,
                last_message: c.last_message
                  ? {
                    ...c.last_message,
                    is_read: true,
                    read_at: c.last_message.read_at || new Date().toISOString(),
                  }
                  : c.last_message,
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

          if (old.data && Array.isArray(old.data)) {
            return {
              ...old,
              data: old.data.map(updateConv),
            };
          }

          return old;
        }
      );

      queryClient.setQueriesData(
        {
          predicate: (query) => {
            const key = query.queryKey;
            return (
              Array.isArray(key) &&
              key[0] === "supportMessages" &&
              String(key[1]) === convIdStr
            );
          },
        },
        (old: any) => {
          if (!old) return old;
          const now = new Date().toISOString();

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

          if (Array.isArray(old)) {
            return old.map(updateMsg);
          }

          if (old.data && Array.isArray(old.data)) {
            return {
              ...old,
              data: old.data.map(updateMsg),
            };
          }

          return old;
        }
      );
    },
    [queryClient]
  );

  const selectedConversationIdRef = useRef(selectedConversationId);
  useEffect(() => {
    selectedConversationIdRef.current = selectedConversationId;
  }, [selectedConversationId]);

  const handleConversationSelect = useCallback(
    (conversationId: string | number) => {
      const selectionChanges = !Object.is(conversationId, selectedConversationIdRef.current);
      setSelectedConversationId(conversationId);
      if (selectionChanges) return;
      updateConversationReadState(conversationId);
      if (token) {
        markSupportConversationAsRead(conversationId, token, isAdmin).catch(() => { });
      }
    },
    [setSelectedConversationId, updateConversationReadState, token, isAdmin]
  );

  const handleManualMarkAsRead = useCallback(async () => {
    if (!selectedConversationId || !token) return;
    try {
      setIsMarkingAsRead(true);
      updateConversationReadState(selectedConversationId);
      await markSupportConversationAsRead(selectedConversationId, token, isAdmin);
      toast.success(t("chat.markedAsRead"));
    } catch (error) {
      console.error("Error marking as read:", error);
      toast.error(t("chat.markAsReadFailed"));
    } finally {
      setIsMarkingAsRead(false);
    }
  }, [selectedConversationId, token, t, updateConversationReadState, isAdmin]);

  const handleReleaseConversation = useCallback(async () => {
    if (!selectedConversationId || !token) return;
    try {
      setIsReleasing(true);
      await releaseSupportConversation(selectedConversationId, token);
      queryClient.invalidateQueries({ queryKey: ["supportConversations"] });
      toast.success(t("chat.conversationReleased"));
    } catch (error) {
      console.error("Error releasing conversation:", error);
      toast.error(t("chat.releaseFailed"));
    } finally {
      setIsReleasing(false);
    }
  }, [selectedConversationId, token, queryClient, t]);

  const handleSendMessage = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const trimmed = messageInput.trim();
      if (!trimmed && !attachment) return;
      if (!selectedConversationId) return;

      const localBlobUrl = attachment ? URL.createObjectURL(attachment) : undefined;

      sendMessageMutation.mutate({
        body: trimmed || undefined,
        attachment: attachment,
        _localBlobUrl: localBlobUrl,
      });
    },
    [messageInput, attachment, selectedConversationId, sendMessageMutation]
  );

  return {
    messageInput,
    setMessageInput,
    attachment,
    setAttachment,
    handleSendMessage,
    isSendingMessage: sendMessageMutation.isPending,
    isNewConversationModalOpen,
    setIsNewConversationModalOpen,
    handleCreateConversation: (data: CreateSupportConversationParams) =>
      createConversationMutation.mutate(data),
    isCreatingConversation: createConversationMutation.isPending,
    handleConversationSelect,
    handleManualMarkAsRead,
    isMarkingAsRead,
    handleReleaseConversation,
    isReleasing,
    updateConversationReadState,
  };
}