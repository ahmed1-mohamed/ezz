"use client";

const STORAGE_KEY = "advix_chat_marked_read_records_v1";

interface ReadRecord {
  markedReadAt: string; // ISO timestamp
  lastMessageId?: string | number | null;
  lastMessageAt?: string | null;
}

// isMessageMarkedAsRead/applyReadStateToConversation run once per message/conversation on
// every render, so the parsed map is reused until the stored JSON changes. Treat it as read-only.
let cachedRaw: string | null = null;
let cachedMap: Record<string, ReadRecord> = {};

function getMarkedReadMap(): Record<string, ReadRecord> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    if (raw !== cachedRaw) {
      cachedMap = JSON.parse(raw) || {};
      cachedRaw = raw;
    }
    return cachedMap;
  } catch {
    return {};
  }
}

export function recordConversationAsRead(
  conversationId: string | number,
  lastMessage?: any,
  lastMessageAt?: string | null
) {
  if (typeof window === "undefined" || !conversationId) return;
  try {
    const map = { ...getMarkedReadMap() };
    const convIdStr = String(conversationId);
    const msgId = lastMessage?.id ?? lastMessage?.message_id ?? null;
    const msgTime =
      lastMessageAt ||
      lastMessage?.created_at ||
      new Date().toISOString();

    map[convIdStr] = {
      markedReadAt: new Date().toISOString(),
      lastMessageId: msgId,
      lastMessageAt: msgTime,
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
  } catch (err) {
    console.warn("Failed to save read state to localStorage:", err);
  }
}

export function isMessageMarkedAsRead(
  conversationId: string | number | null | undefined,
  message: {
    id?: string | number;
    message_id?: string | number;
    created_at?: string;
    is_read?: boolean | number;
    read_at?: string | null;
  }
): boolean {
  if (
    message.is_read === true ||
    message.is_read === 1 ||
    Boolean(message.read_at) ||
    Boolean((message as any).is_seen) ||
    Boolean((message as any).seen_at) ||
    Boolean((message as any).read)
  ) {
    return true;
  }

  if (!conversationId) return false;
  const map = getMarkedReadMap();
  const record = map[String(conversationId)];
  if (!record || !record.markedReadAt) return false;

  if (record.lastMessageId && (message.id ?? message.message_id)) {
    if (String(record.lastMessageId) === String(message.id ?? message.message_id)) {
      return true;
    }
  }

  if (message.created_at) {
    const msgTime = new Date(message.created_at).getTime();
    const markedTime = new Date(record.markedReadAt).getTime();
    if (msgTime > 0 && markedTime > 0 && msgTime <= markedTime + 3000) {
      return true;
    }
  }

  return false;
}

export function applyReadStateToConversation<
  T extends {
    id?: string | number;
    conversation_id?: string | number;
    last_message_at?: string | null;
    updated_at?: string | null;
    last_message?: any;
    unread_for_admin?: number;
    unread_for_user?: number;
    unread_count?: number;
    unread?: number;
  }
>(conv: T, isSelected: boolean = false): T {
  const convId = String(conv.id ?? conv.conversation_id);
  if (!convId) return conv;

  if (isSelected) {
    return {
      ...conv,
      unread_for_admin: 0,
      unread_for_user: 0,
      unread_count: 0,
      unread: 0,
      last_message: conv.last_message
        ? {
          ...conv.last_message,
          is_read: true,
          read_at: conv.last_message.read_at || new Date().toISOString(),
        }
        : conv.last_message,
    };
  }

  const map = getMarkedReadMap();
  const record = map[convId];
  if (!record) return conv;

  const convLastMsgTime =
    conv.last_message_at ||
    conv.last_message?.created_at ||
    conv.updated_at;
  const convLastMsgId =
    conv.last_message?.id ?? conv.last_message?.message_id;

  const markedTime = new Date(record.markedReadAt).getTime();
  const msgTime = convLastMsgTime ? new Date(convLastMsgTime).getTime() : 0;

  const isSameMessage =
    record.lastMessageId &&
    convLastMsgId &&
    String(record.lastMessageId) === String(convLastMsgId);

  // If last message is same as when marked as read, or created on or before markedReadAt (+3s skew)
  const isOlderOrEqual =
    msgTime > 0 && markedTime > 0 && msgTime <= markedTime + 3000;

  if (isSameMessage || isOlderOrEqual || !convLastMsgTime) {
    return {
      ...conv,
      unread_for_admin: 0,
      unread_for_user: 0,
      unread_count: 0,
      unread: 0,
      last_message: conv.last_message
        ? { ...conv.last_message, is_read: true }
        : conv.last_message,
    };
  }

  // A new message arrived after mark as read -> show exactly 1 unread message
  return {
    ...conv,
    unread_for_admin: 1,
    unread_for_user: 1,
    unread_count: 1,
    unread: 1,
  };
}
