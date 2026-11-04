"use client";

import { useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  fetchSupportConversations,
  type SupportConversation,
  type SupportMessage,
} from "@/data/api/services/chat.service";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  claimChatNotification,
  requestBrowserNotificationPermission,
  showBrowserNotification,
} from "@/app/admin/chat/utils/chatNotifications";
import {
  extractChatMessage,
  getChatChannelName,
  isChatReadEvent,
  subscribeToChatChannel,
} from "@/app/admin/chat/utils/chatSocket";
import {
  showChatNotification,
  showChatSummaryNotification,
  type ChatNotificationLabels,
} from "@/app/admin/chat/components/ChatNotificationToast";

/** Only used while the websocket channel is unavailable. */
const FALLBACK_POLL_INTERVAL_MS = 30_000;
const MAX_TOASTS_PER_CHECK = 3;

function lastMessageOf(conv: SupportConversation) {
  return (conv.last_message ?? conv.latest_message ?? null) as Record<string, any> | null;
}

function messageKeyOf(conv: SupportConversation): string {
  const msg = lastMessageOf(conv);
  return String(msg?.id ?? msg?.message_id ?? msg?.created_at ?? conv.last_message_at ?? "");
}

function personName(person: any): string | null {
  if (!person) return null;
  return person.name || `${person.first_name || ""} ${person.last_name || ""}`.trim() || null;
}

function isChatPage() {
  return window.location.pathname.endsWith("/chat");
}

function markChatDataStale(queryClient: ReturnType<typeof useQueryClient>, conversationId?: string | number | null) {
  queryClient.invalidateQueries({ queryKey: ["supportConversations"], refetchType: "none" });
  if (conversationId == null) return;
  queryClient.invalidateQueries({
    predicate: (query) => {
      const key = query.queryKey;
      return Array.isArray(key) && key[0] === "supportMessages" && String(key[1]) === String(conversationId);
    },
    refetchType: "none",
  });
}

/**
 * Listens for support chat events over the websocket on every dashboard page and notifies about
 * new conversations and messages from other people. The chat page handles its own events; on other
 * pages the cached chat data is marked stale so it is fetched again when the chat page opens.
 * Falls back to polling only while the websocket channel can't be subscribed.
 */
export function ChatNotificationsWatcher() {
  const { data: session } = useSession();
  const { t, language } = useLanguage();
  const pathname = usePathname() ?? "";
  const router = useRouter();
  const queryClient = useQueryClient();

  const token = session?.user?.accessToken as string | undefined;
  const currentUserId = session?.user?.id;
  const userType =
    session?.user?.user_type?.toLowerCase() || (session?.user?.role_name as string | undefined)?.toLowerCase();
  const roleId = (session?.user as any)?.role_id;
  const isDeveloper = userType === "developer" || roleId === 3;
  const isExpert = userType === "expert" || roleId === 6;
  const isAdmin = userType === "admin" || (!isDeveloper && !isExpert);
  const chatPath = pathname.startsWith("/developer") ? "/developer/chat" : pathname.startsWith("/admin") ? "/admin/chat" : null;

  const snapshotRef = useRef<Map<string, string> | null>(null);
  const direction: "ltr" | "rtl" = language === "ar" ? "rtl" : "ltr";
  const latestRef = useRef({ t, router, chatPath, currentUserId, direction });
  latestRef.current = { t, router, chatPath, currentUserId, direction };

  useEffect(() => {
    const onFirstInteraction = () => requestBrowserNotificationPermission();
    window.addEventListener("pointerdown", onFirstInteraction, { once: true });
    return () => window.removeEventListener("pointerdown", onFirstInteraction);
  }, []);

  const [isRealtimeDown, setIsRealtimeDown] = useState(false);
  const isWatching = !!token && !!chatPath;

  useEffect(() => {
    snapshotRef.current = null;
  }, [token, isAdmin]);

  useEffect(() => {
    if (!token || !isWatching) return;
    setIsRealtimeDown(false);

    const labelsFor = (translate: typeof t): ChatNotificationLabels => ({
      newMessage: translate("chat.notifyNewMessage"),
      newConversation: translate("chat.notifyNewConversation"),
      open: translate("chat.openChat"),
      dismiss: translate("chat.dismiss"),
      attachment: translate("chat.attachment"),
      messagesCount: (count) => translate("chat.newMessagesCount", { count }),
    });

    const handleEvent = (rawData: any) => {
      // The chat page subscribes to the same channel and handles its own updates and toasts.
      if (isChatReadEvent(rawData) || isChatPage()) return;

      const msg: SupportMessage | undefined = extractChatMessage(rawData);
      const conv: SupportConversation | undefined = rawData?.conversation;
      const convId = msg?.conversation_id ?? conv?.id ?? conv?.conversation_id;
      if (convId == null) return;
      markChatDataStale(queryClient, convId);

      const { t: translate, router: nav, chatPath: path, currentUserId: me, direction: dir } = latestRef.current;
      const isMine = (id: unknown) => me != null && id != null && String(id) === String(me);
      if (msg ? isMine(msg.sender_id ?? msg.user_id) : isMine(conv?.user_id ?? conv?.user?.id)) return;
      if (!path || !claimChatNotification(convId, msg ? msg.id ?? msg.message_id : null)) return;

      const labels = labelsFor(translate);
      const isNew = !msg;
      const sender =
        personName(msg?.sender) ||
        personName((msg as any)?.user) ||
        personName(isAdmin ? conv?.user : conv?.admin) ||
        translate("chat.supportAgent");
      const title = conv?.subject || conv?.title || `${translate("chat.conversation")} #${convId}`;
      const text: string = msg?.body || msg?.message_text || "";
      const hasAttachment = !!(msg?.attachment || msg?.attachment_url);
      const open = () => nav.push(`${path}?conversationId=${convId}`);

      showChatNotification({
        conversationId: convId,
        kind: isNew ? "conversation" : "message",
        senderName: sender,
        title,
        preview: text,
        hasAttachment,
        createdAt: msg?.created_at ?? conv?.last_message_at ?? conv?.created_at,
        labels,
        direction: dir,
        onOpen: open,
      });
      showBrowserNotification(
        `${isNew ? labels.newConversation : labels.newMessage} — ${sender}`,
        text || (hasAttachment ? labels.attachment : title),
        open
      );
    };

    return subscribeToChatChannel(token, getChatChannelName(isAdmin), {
      onEvent: handleEvent,
      onStatus: (status) => {
        snapshotRef.current = null;
        setIsRealtimeDown(status === "error");
      },
      onResubscribed: () => {
        if (!isChatPage()) markChatDataStale(queryClient);
      },
    });
  }, [token, isAdmin, isWatching, queryClient]);

  const { data } = useQuery({
    queryKey: ["chatWatcher", token, isAdmin],
    queryFn: ({ signal }) => fetchSupportConversations(token || "", { isAdmin, signal }),
    enabled: isWatching && isRealtimeDown,
    refetchInterval: FALLBACK_POLL_INTERVAL_MS,
    refetchIntervalInBackground: true,
    refetchOnWindowFocus: false,
    staleTime: 0,
  });

  useEffect(() => {
    const conversations = data?.data;
    if (!conversations || !isRealtimeDown) return;

    const next = new Map<string, string>();
    conversations.forEach((c) => next.set(String(c.id ?? c.conversation_id), messageKeyOf(c)));

    const previous = snapshotRef.current;
    snapshotRef.current = next;
    if (!previous) return;

    const { t: translate, router: nav, chatPath: path, currentUserId: me, direction: dir } = latestRef.current;
    const isMine = (id: unknown) => me != null && id != null && String(id) === String(me);
    const params = new URLSearchParams(window.location.search);
    const openConversationId = window.location.pathname.endsWith("/chat") ? params.get("conversationId") : null;

    const changed: { conv: SupportConversation; isNew: boolean }[] = [];
    for (const conv of conversations) {
      const id = String(conv.id ?? conv.conversation_id);
      const key = next.get(id) ?? "";
      const prevKey = previous.get(id);
      if (prevKey === undefined) changed.push({ conv, isNew: true });
      else if (key && key !== prevKey) changed.push({ conv, isNew: false });
    }
    if (!changed.length) return;

    queryClient.invalidateQueries({ queryKey: ["supportConversations"] });
    changed.forEach(({ conv }) =>
      queryClient.invalidateQueries({ queryKey: ["supportMessages", conv.id ?? conv.conversation_id] })
    );

    const toNotify = changed.filter(({ conv, isNew }) => {
      const id = String(conv.id ?? conv.conversation_id);
      const msg = lastMessageOf(conv);
      if (msg ? isMine(msg.sender_id ?? msg.user_id) : isNew && isMine(conv.user_id ?? conv.user?.id)) return false;
      if (openConversationId === id && document.visibilityState === "visible") return false;
      return claimChatNotification(id, msg?.id ?? msg?.message_id ?? (isNew ? null : messageKeyOf(conv)));
    });
    if (!toNotify.length || !path) return;

    const labels: ChatNotificationLabels = {
      newMessage: translate("chat.notifyNewMessage"),
      newConversation: translate("chat.notifyNewConversation"),
      open: translate("chat.openChat"),
      dismiss: translate("chat.dismiss"),
      attachment: translate("chat.attachment"),
      messagesCount: (count) => translate("chat.newMessagesCount", { count }),
    };

    toNotify.slice(0, MAX_TOASTS_PER_CHECK).forEach(({ conv, isNew }) => {
      const id = conv.id ?? conv.conversation_id;
      const msg = lastMessageOf(conv);
      const sender = personName(msg?.sender) || personName(isAdmin ? conv.user : conv.admin) || translate("chat.supportAgent");
      const title = conv.subject || conv.title || `${translate("chat.conversation")} #${id}`;
      const text: string = msg?.body || msg?.message_text || "";
      const hasAttachment = !!(msg?.attachment || msg?.attachment_url);
      const open = () => nav.push(`${path}?conversationId=${id}`);

      showChatNotification({
        conversationId: id,
        kind: isNew ? "conversation" : "message",
        senderName: sender,
        title,
        preview: text,
        hasAttachment,
        createdAt: msg?.created_at ?? conv.last_message_at ?? conv.created_at,
        labels,
        direction: dir,
        onOpen: open,
      });
      showBrowserNotification(
        `${isNew ? labels.newConversation : labels.newMessage} — ${sender}`,
        text || (hasAttachment ? labels.attachment : title),
        open
      );
    });

    const extra = toNotify.length - MAX_TOASTS_PER_CHECK;
    if (extra > 0) {
      showChatSummaryNotification({
        text: translate("chat.moreNewMessages", { count: extra }),
        openLabel: labels.open,
        direction: dir,
        onOpen: () => nav.push(path),
      });
    }
  }, [data, isAdmin, isRealtimeDown, queryClient]);

  return null;
}
