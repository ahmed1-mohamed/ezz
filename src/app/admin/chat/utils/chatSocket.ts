"use client";

import Pusher, { type Channel } from "pusher-js";
import axios from "axios";
import type { SupportMessage } from "@/data/api/services/chat.service";
import { getCountryId, BASE_URL } from "@/data/config";

/**
 * One shared websocket (Pusher) connection for support chat. The chat page and the background
 * notifications watcher subscribe to channels through here, so a channel used by both is only
 * subscribed once and the connection closes shortly after the last subscriber leaves.
 */

export type ChatChannelStatus = "subscribed" | "error";
export type ChatEventHandler = (data: any) => void;

export interface ChatChannelListener {
  onEvent: ChatEventHandler;
  /** "subscribed" once the channel is live, "error" when it can't be (auth failure, connection down). */
  onStatus?: (status: ChatChannelStatus) => void;
  /** The channel came back after a connection drop; events sent meanwhile were missed. */
  onResubscribed?: () => void;
}

export const CHAT_EVENTS = [
  "support.message.sent",
  ".support.message.sent",
  "SupportMessageSent",
  ".SupportMessageSent",
  "App\\Events\\SupportMessageSent",
  "message.sent",
  ".message.sent",
  "MessageSent",
  ".MessageSent",
  "support.conversation.read",
  ".support.conversation.read",
  "SupportConversationRead",
  ".SupportConversationRead",
  "conversation.read",
  ".conversation.read",
  "support.message.read",
  ".support.message.read",
];

export function getChatChannelName(isAdmin: boolean) {
  return isAdmin ? "private-admin.chat" : "private-chat";
}

export function getConversationChannelName(conversationId: string | number) {
  return `private-chat.conversation.${conversationId}`;
}

export function isChatReadEvent(rawData: any): boolean {
  return (
    rawData?.event_type === "read" ||
    rawData?.read === true ||
    rawData?.is_read === true ||
    rawData?.conversation_read === true
  );
}

export function extractChatMessage(rawData: any): SupportMessage | undefined {
  return (
    rawData?.message ||
    (rawData?.body !== undefined || rawData?.message_text !== undefined ? rawData : undefined)
  );
}

const DISCONNECT_DELAY_MS = 3000;
const AUTH_FAIL_COOLDOWN_MS = 5 * 60 * 1000;
const BROADCASTING_AUTH_URL = `${BASE_URL}/broadcasting/auth`;
const PUSHER_AUTH_PATTERN = /^[^:\s]+:[a-f0-9]{64}$/i;

let socket: Pusher | null = null;
let socketToken: string | null = null;
let pendingDisconnect: ReturnType<typeof setTimeout> | null = null;
let isBroadcastingAuthUnavailable = false;
let lastAuthFailTime = 0;

interface ChannelEntry {
  channel: Channel;
  listeners: Set<ChatChannelListener>;
  status: ChatChannelStatus | null;
  subscribedOnce: boolean;
}

const channels = new Map<string, ChannelEntry>();

function extractPusherAuth(body: unknown): { auth: string; channel_data?: string } | null {
  let value: any = body;
  if (typeof value === "string") {
    const trimmed = value.trim();
    if (PUSHER_AUTH_PATTERN.test(trimmed)) return { auth: trimmed };
    try {
      value = JSON.parse(trimmed);
    } catch {
      return null;
    }
  }
  for (const candidate of [value, value?.data, value?.data?.data]) {
    if (candidate && typeof candidate === "object" && typeof candidate.auth === "string") return candidate;
    if (typeof candidate === "string" && PUSHER_AUTH_PATTERN.test(candidate.trim())) return { auth: candidate.trim() };
  }
  return null;
}

function previewBody(body: unknown): string {
  const text = typeof body === "string" ? body : JSON.stringify(body);
  return (text ?? "").slice(0, 200);
}

async function authorizeChannel(
  params: { socketId: string; channelName: string },
  callback: (error: Error | null, authData: any) => void
) {
  if (isBroadcastingAuthUnavailable && Date.now() - lastAuthFailTime < AUTH_FAIL_COOLDOWN_MS) {
    callback(new Error("Broadcasting auth route is not configured on backend"), null);
    return;
  }
  isBroadcastingAuthUnavailable = false;

  const countryId = getCountryId();
  const fail = (detail: string) =>
    callback(new Error(`Failed to authorize channel ${params.channelName} (${detail})`), null);

  try {
    const response = await axios.post(
      BROADCASTING_AUTH_URL,
      { socket_id: params.socketId, channel_name: params.channelName },
      {
        headers: {
          Authorization: `Bearer ${socketToken}`,
          Accept: "application/json",
          "Content-Type": "application/json",
          "country-id": countryId,
          "country_id": countryId,
        },
      }
    );
    const authData = extractPusherAuth(response.data);
    if (authData) {
      callback(null, authData);
      return;
    }
    fail(`HTTP ${response.status}, unexpected response: ${previewBody(response.data)}`);
  } catch (err: any) {
    const status = err?.response?.status;
    if (status === 404) {
      isBroadcastingAuthUnavailable = true;
      lastAuthFailTime = Date.now();
    }
    if (status) {
      const message = err.response.data?.message;
      fail(`HTTP ${status}${message ? `: ${message}` : ""}`);
    } else {
      fail(`no response: ${err?.message ?? "network error"}`);
    }
  }
}

function setStatus(entry: ChannelEntry, status: ChatChannelStatus) {
  if (entry.status === status) return;
  entry.status = status;
  entry.listeners.forEach((l) => l.onStatus?.(status));
}

function bindChannel(name: string, entry: ChannelEntry) {
  const dispatch = (data: any) => entry.listeners.forEach((l) => l.onEvent(data));
  CHAT_EVENTS.forEach((evt) => entry.channel.bind(evt, dispatch));
  entry.channel.bind("pusher:subscription_succeeded", () => {
    const isResubscribe = entry.subscribedOnce;
    entry.subscribedOnce = true;
    setStatus(entry, "subscribed");
    if (isResubscribe) entry.listeners.forEach((l) => l.onResubscribed?.());
  });
  entry.channel.bind("pusher:subscription_error", (err: any) => {
    console.warn(`[Pusher] Subscription error for ${name}: ${err?.error ?? err?.type ?? "unknown"}`);
    setStatus(entry, "error");
  });
}

function createSocket(): Pusher | null {
  const pusherKey =
    process.env.NEXT_PUBLIC_PUSHER_KEY ||
    process.env.NEXT_PUBLIC_PUSHER_APP_KEY ||
    process.env.PUSHER_APP_KEY ||
    "1b2cea2ec32b54fa6026";
  if (!pusherKey) return null;

  const cluster =
    process.env.NEXT_PUBLIC_PUSHER_CLUSTER ||
    process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTER ||
    process.env.PUSHER_APP_CLUSTER ||
    "mt1";

  try {
    const pusher = new Pusher(pusherKey, {
      cluster,
      channelAuthorization: {
        customHandler: (params, callback) => {
          authorizeChannel(params, callback);
        },
      },
    });
    pusher.connection.bind("state_change", ({ current }: { current: string }) => {
      if (current !== "unavailable" && current !== "failed") return;
      channels.forEach((entry) => setStatus(entry, "error"));
    });
    return pusher;
  } catch (err) {
    console.error("[Pusher] Failed to initialize:", err);
    return null;
  }
}

function ensureSocket(token: string): Pusher | null {
  // Channel auth reads the latest token, so a refreshed token doesn't need a new connection.
  socketToken = token;
  if (socket && socket.connection.state !== "disconnected" && socket.connection.state !== "failed") {
    return socket;
  }

  if (socket) {
    try { socket.disconnect(); } catch { }
  }
  socket = createSocket();
  if (!socket) return null;

  const pusher = socket;
  channels.forEach((entry, name) => {
    entry.channel = pusher.subscribe(name);
    entry.status = null;
    bindChannel(name, entry);
  });
  return socket;
}

function scheduleDisconnect() {
  if (pendingDisconnect) clearTimeout(pendingDisconnect);
  pendingDisconnect = setTimeout(() => {
    pendingDisconnect = null;
    if (channels.size > 0 || !socket) return;
    try { socket.disconnect(); } catch { }
    socket = null;
    socketToken = null;
  }, DISCONNECT_DELAY_MS);
}

/** Listens for chat events on a private channel. Returns a function that stops listening. */
export function subscribeToChatChannel(
  token: string,
  channelName: string,
  listener: ChatChannelListener
): () => void {
  if (pendingDisconnect) {
    clearTimeout(pendingDisconnect);
    pendingDisconnect = null;
  }

  const pusher = ensureSocket(token);
  if (!pusher) {
    listener.onStatus?.("error");
    return () => {};
  }

  let entry = channels.get(channelName);
  if (!entry) {
    try {
      entry = { channel: pusher.subscribe(channelName), listeners: new Set(), status: null, subscribedOnce: false };
    } catch (e) {
      console.warn(`[Pusher] Could not subscribe to ${channelName}:`, e);
      listener.onStatus?.("error");
      return () => {};
    }
    channels.set(channelName, entry);
    bindChannel(channelName, entry);
  }

  entry.listeners.add(listener);
  if (entry.status) listener.onStatus?.(entry.status);

  const subscribed = entry;
  return () => {
    subscribed.listeners.delete(listener);
    if (subscribed.listeners.size > 0 || channels.get(channelName) !== subscribed) return;
    channels.delete(channelName);
    try {
      subscribed.channel.unbind_all();
      socket?.unsubscribe(channelName);
    } catch { }
    if (channels.size === 0) scheduleDisconnect();
  };
}
