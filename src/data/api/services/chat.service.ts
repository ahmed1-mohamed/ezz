import axios from "axios";
import { getCountryId, API_BASE_URL, DASHBOARD_API_BASE_URL } from "@/data/config";

const API_URL = API_BASE_URL;
const DASHBOARD_API_URL = DASHBOARD_API_BASE_URL;


const resolvedCandidate = new Map<string, number>();

function orderCandidates(operation: string, candidates: string[]): string[] {
  const unique = Array.from(new Set(candidates));
  const index = resolvedCandidate.get(operation);
  if (index === undefined || index <= 0 || index >= unique.length) return unique;
  return [unique[index], ...unique.slice(0, index), ...unique.slice(index + 1)];
}

function rememberCandidate(operation: string, candidates: string[], endpoint: string) {
  const index = Array.from(new Set(candidates)).indexOf(endpoint);
  if (index >= 0) resolvedCandidate.set(operation, index);
}

export interface SupportConversation {
  id: number | string;
  conversation_id?: number | string;
  user_id?: number | string;
  status: "open" | "closed" | "pending" | string;
  last_message_at: string | null;
  unread_for_user?: number;
  unread_for_admin?: number;
  unread_count?: number;
  subject?: string | null;
  title?: string | null;
  assigned_admin?: any;
  user?: {
    id?: number | string;
    user_id?: number | string;
    name?: string;
    first_name?: string;
    last_name?: string;
    email?: string;
    avatar?: string | null;
    profile_picture?: string | null;
  } | null;
  admin?: {
    id?: number | string;
    user_id?: number | string;
    name?: string;
    first_name?: string;
    last_name?: string;
    email?: string;
    avatar?: string | null;
  } | null;
  latest_message?: SupportMessage | {
    id?: number | string;
    conversation_id?: number | string;
    sender_id?: number | string;
    sender_type?: string;
    body?: string;
    message_text?: string;
    created_at?: string;
    read_at?: string | null;
    attachment?: string | null;
    attachment_url?: string | null;
  } | null;
  last_message?: SupportMessage | {
    id?: number | string;
    conversation_id?: number | string;
    sender_id?: number | string;
    sender_type?: string;
    body?: string;
    message_text?: string;
    created_at?: string;
    read_at?: string | null;
    attachment?: string | null;
    attachment_url?: string | null;
  } | null;
  created_at?: string;
  updated_at?: string;
}

export interface SupportMessage {
  id: number | string;
  message_id?: number | string;
  conversation_id: number | string;
  sender_id?: number | string;
  user_id?: number | string;
  sender_type?: "user" | "admin" | "support" | string;
  sender?: {
    id?: number | string;
    name?: string;
    first_name?: string;
    last_name?: string;
    email?: string;
    avatar?: string | null;
    role?: string;
  } | null;
  body?: string | null;
  message_text?: string | null;
  attachment?: string | {
    url?: string;
    file_url?: string;
    original_url?: string;
    path?: string;
    file_name?: string;
    file_size?: number;
    mime_type?: string;
  } | null;
  attachment_url?: string | null;
  file_url?: string | null;
  file_name?: string | null;
  file_type?: string | null;
  is_read?: boolean | number;
  read_at?: string | null;
  created_at: string;
  updated_at?: string;
}

export interface SendSupportMessageParams {
  conversationId: string | number;
  body?: string;
  attachment?: File | null;
}

export interface Message {
  message_id?: number;
  sender_id: number;
  receiver_id: number;
  message_text: string;
  message_type: string;
  created_at: string;
  updated_at?: string;
  read_at?: string | null;
}

export interface MessageData {
  sender_id: number;
  receiver_id: number;
  message_text: string;
  message_type: string;
  entity_type?: string;
  entity_id?: number;
}

export interface ChatContact {
  user_id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone_number?: string | null;
  profile_picture?: string | null;
  last_message?: Message;
  unread_count?: number;
}

export interface MessageSender {
  sender_id: number;
  name: string;
  email: string;
  avatar: string | null;
  role: string;
}

export interface MessageReceiver {
  receiver_id: number;
  name: string;
  email: string;
  avatar: string | null;
  role: string;
}

export interface AllChatMessage {
  message_id: number;
  sender_id: number;
  receiver_id: number;
  message_text: string;
  message_type: string;
  attachment_url: string | null;
  is_read: number;
  created_at: string;
  updated_at: string;
  sent_at: string;
  entity_type: string;
  entity_id: number;
  is_deleted: number;
  deleted_at: string | null;
  role_sender_name: string;
  role_receiver_name: string;
  sender: MessageSender;
  receiver: MessageReceiver;
  last_message: null;
}

export interface allchats {
  user_id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone_number?: string | null;
  profile_picture?: string | null;
  last_message?: Message;
  unread_count?: number;
}

export interface ApiResponse<T> {
  status: string;
  message?: string;
  data: T;
}

export async function fetchChatHistory(
  adminId: string | number,
  token: string
): Promise<ChatContact[]> {
  try {
    const response = await axios.get(`${API_URL}/chat/contacts/${adminId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data || response.data || [];
  } catch (error) {
    console.error("Error fetching chat history:", error);
    throw error;
  }
}

export async function fetchChatClientHistory(
  adminId: string | number,
  clientId: number,
  token: string
): Promise<Message[]> {
  try {
    const response = await axios.get(
      `${API_URL}/chat/history/${adminId}/${clientId}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.data || response.data || [];
  } catch (error) {
    console.error("Error fetching client messages:", error);
    throw error;
  }
}

export async function sendMessage(
  token: string,
  messageData: MessageData
): Promise<Message> {
  try {
    const response = await axios.post(`${API_URL}/chat/send`, messageData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data || response.data;
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
}

export async function markAsRead(
  clientId: number,
  adminId: string | number,
  token: string
): Promise<void> {
  try {
    await axios.post(
      `${API_URL}/chat/mark-as-read/${clientId}/${adminId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    console.error("Error marking messages as read:", error);
    throw error;
  }
}

export const fetchAllChatsHistory = async (
  token: string
): Promise<allchats[]> => {
  try {
    const response = await fetch(
      `${API_URL}/chat/all`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = (await response.json()) as any;

    if (data.status !== "success" && data.status !== true && data.status !== 200) {
      throw new Error(data.message || "Failed to fetch chat history");
    }

    if (!data.data || !Array.isArray(data.data)) {
      return [];
    }

    if (data.data.length > 0 && !data.data[0].sender) {
      return data.data.map((chat: any) => ({
        user_id: chat.id || chat.user_id,
        first_name: chat.first_name || chat.name?.split(' ')[0] || "",
        last_name: chat.last_name || chat.name?.split(' ').slice(1).join(' ') || "",
        email: chat.email || "",
        profile_picture: chat.profile_picture || chat.avatar || null,
        last_message: chat.last_message || null,
        unread_count: chat.unread_count || 0,
      }));
    }

    const contactsMap = new Map<number, allchats>();

    data.data.forEach((msg: any) => {
      const contact = msg.sender.role !== "admin" ? msg.sender : msg.receiver;
      const contactId =
        msg.sender.role !== "admin" ? msg.sender_id : msg.receiver_id;

      if (!contactsMap.has(contactId)) {

        const nameParts = contact.name.split(" ");
        const firstName = nameParts[0] || "";
        const lastName = nameParts.slice(1).join(" ") || "";

        contactsMap.set(contactId, {
          user_id: contactId,
          first_name: firstName,
          last_name: lastName,
          email: contact.email,
          phone_number: null,
          profile_picture: contact.avatar,
          last_message: {
            message_id: msg.message_id,
            sender_id: msg.sender_id,
            receiver_id: msg.receiver_id,
            message_text: msg.message_text,
            message_type: msg.message_type,
            created_at: msg.created_at,
            updated_at: msg.updated_at,
            read_at: msg.is_read ? msg.updated_at : null,
          },
          unread_count: 0,
        });
      } else {
        const existing = contactsMap.get(contactId)!;
        if (
          new Date(msg.created_at) > new Date(existing.last_message!.created_at)
        ) {
          existing.last_message = {
            message_id: msg.message_id,
            sender_id: msg.sender_id,
            receiver_id: msg.receiver_id,
            message_text: msg.message_text,
            message_type: msg.message_type,
            created_at: msg.created_at,
            updated_at: msg.updated_at,
            read_at: msg.is_read ? msg.updated_at : null,
          };
        }
      }

      if (msg.is_read === 0 && msg.sender.role !== "admin") {
        const contact = contactsMap.get(contactId)!;
        contact.unread_count = (contact.unread_count || 0) + 1;
      }
    });

    return Array.from(contactsMap.values());
  } catch (error) {
    throw new Error(
      `Chat history fetch failed: ${error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
};

export function extractArrayFromResponse<T = any>(data: any): T[] {
  if (!data) return [];
  if (Array.isArray(data)) return data;
  if (Array.isArray(data?.items)) return data.items;
  if (Array.isArray(data?.data)) return data.data;
  if (Array.isArray(data?.data?.items)) return data.data.items;
  if (Array.isArray(data?.data?.data)) return data.data.data;
  if (Array.isArray(data?.data?.data?.items)) return data.data.data.items;
  if (Array.isArray(data?.conversations)) return data.conversations;
  if (Array.isArray(data?.data?.conversations)) return data.data.conversations;
  if (Array.isArray(data?.messages)) return data.messages;
  if (Array.isArray(data?.data?.messages)) return data.data.messages;
  if (Array.isArray(data?.records)) return data.records;
  if (Array.isArray(data?.data?.records)) return data.data.records;
  if (Array.isArray(data?.results)) return data.results;
  if (Array.isArray(data?.data?.results)) return data.data.results;
  return [];
}

export function extractNextCursor(data: any): string | null {
  if (!data) return null;
  const cursor =
    data?.next_cursor ||
    data?.data?.next_cursor ||
    data?.meta?.next_cursor ||
    data?.data?.meta?.next_cursor ||
    data?.pagination?.next_cursor ||
    data?.data?.pagination?.next_cursor ||
    data?.links?.next ||
    data?.data?.links?.next ||
    data?.next_page_url ||
    data?.data?.next_page_url ||
    null;

  if (cursor && typeof cursor === "string") {
    try {
      if (cursor.startsWith("http")) {
        const url = new URL(cursor);
        return url.searchParams.get("cursor") || url.searchParams.get("page") || cursor;
      }
    } catch {
    }
    return cursor;
  }
  if (typeof cursor === "number") return String(cursor);
  return null;
}

export function normalizeSupportConversation(item: any): SupportConversation {
  if (!item || typeof item !== "object") return item;

  const id = item.id ?? item.conversation_id ?? item.support_conversation_id;
  const conversation_id = item.conversation_id ?? item.id ?? id;

  let user = item.user || null;
  if (user && typeof user === "object") {
    const userId = user.id ?? user.user_id;
    const firstName = user.first_name || "";
    const lastName = user.last_name || "";
    const fullName =
      user.name ||
      `${firstName} ${lastName}`.trim() ||
      user.email ||
      `User #${userId}`;

    user = {
      ...user,
      id: userId,
      user_id: userId,
      name: fullName,
      first_name: firstName,
      last_name: lastName,
      email: user.email,
      avatar: user.avatar || user.profile_picture || null,
      profile_picture: user.profile_picture || user.avatar || null,
    };
  } else if (item.user_id || item.user_name || item.user_email) {
    user = {
      id: item.user_id,
      user_id: item.user_id,
      name: item.user_name || item.user_email || `User #${item.user_id}`,
      email: item.user_email,
    };
  }

  let admin = item.admin || item.assigned_admin || null;
  if (admin && typeof admin === "object") {
    const adminId = admin.id ?? admin.user_id;
    const firstName = admin.first_name || "";
    const lastName = admin.last_name || "";
    const fullName =
      admin.name ||
      `${firstName} ${lastName}`.trim() ||
      admin.email ||
      `Admin #${adminId}`;
    admin = {
      ...admin,
      id: adminId,
      name: fullName,
      email: admin.email,
    };
  }

   const rawMsg = item.latest_message || item.last_message || null;
  let last_message: any = null;
  if (rawMsg) {
    if (typeof rawMsg === "string") {
      last_message = { body: rawMsg };
    } else {
      last_message = {
        ...rawMsg,
        id: rawMsg.id ?? rawMsg.message_id,
        conversation_id: rawMsg.conversation_id ?? id,
        sender_id: rawMsg.sender_id ?? rawMsg.user_id,
        sender_type: rawMsg.sender_type || "user",
        body: rawMsg.body ?? rawMsg.message_text ?? "",
        attachment_url:
          rawMsg.attachment_url ??
          (typeof rawMsg.attachment === "string" ? rawMsg.attachment : rawMsg.attachment?.url) ??
          rawMsg.file_url ??
          null,
        created_at: rawMsg.created_at,
        read_at: rawMsg.read_at,
      };
    }
  }

  const unreadCount =
    Number(
      item.unread_for_admin ??
      item.unread_count ??
      item.unread_for_user ??
      item.unread ??
      0
    ) || 0;

  const subject =
    item.subject ||
    item.title ||
    (user?.name ? user.name : null) ||
    `Conversation #${id}`;

  return {
    ...item,
    id,
    conversation_id,
    user,
    admin,
    assigned_admin: admin,
    last_message,
    latest_message: last_message,
    status: item.status || "open",
    last_message_at:
      item.last_message_at ||
      last_message?.created_at ||
      item.updated_at ||
      item.created_at ||
      null,
    unread_count: unreadCount,
    unread_for_admin: item.unread_for_admin ?? unreadCount,
    unread_for_user: item.unread_for_user ?? 0,
    subject,
    title: subject,
  };
}

export function normalizeSupportMessage(item: any, fallbackConvId?: string | number): SupportMessage {
  if (!item || typeof item !== "object") return item;

  const id = item.id ?? item.message_id;
  const conversation_id = item.conversation_id ?? fallbackConvId;
  const sender_id = item.sender_id ?? item.user_id ?? item.sender?.id ?? item.sender?.user_id;

  let sender = item.sender || null;
  if (sender && typeof sender === "object") {
    const sId = sender.id ?? sender.user_id ?? sender_id;
    const firstName = sender.first_name || "";
    const lastName = sender.last_name || "";
    const fullName =
      sender.name ||
      `${firstName} ${lastName}`.trim() ||
      sender.email ||
      "";
    sender = {
      ...sender,
      id: sId,
      name: fullName,
      first_name: firstName,
      last_name: lastName,
      email: sender.email,
      role: sender.role || item.sender_type,
    };
  }

  const attachmentUrl =
    item.attachment_url ??
    (typeof item.attachment === "string" ? item.attachment : item.attachment?.url) ??
    item.file_url ??
    (typeof item.file === "string" ? item.file : item.file?.url) ??
    null;

  return {
    ...item,
    id,
    message_id: id,
    conversation_id,
    sender_id,
    sender,
    sender_type: item.sender_type || (sender?.role ? sender.role.toLowerCase() : "user"),
    body: item.body ?? item.message_text ?? item.text ?? null,
    message_text: item.message_text ?? item.body ?? null,
    attachment: item.attachment ?? attachmentUrl,
    attachment_url: attachmentUrl,
    created_at: item.created_at || new Date().toISOString(),
    read_at: item.read_at ?? null,
    is_read: item.is_read ?? (Boolean(item.read_at) ? 1 : 0),
  };
}

export interface PaginatedSupportConversations {
  data: SupportConversation[];
  next_cursor: string | null;
}

export async function fetchSupportConversations(
  token: string,
  params?: {
    cursor?: string;
    search?: string;
    status?: string;
    per_page?: number;
    isAdmin?: boolean;
    signal?: AbortSignal;
  }
): Promise<PaginatedSupportConversations> {
  try {
    const isAdmin = params?.isAdmin !== false;
    const operation = isAdmin ? "conversations:admin" : "conversations:user";
    const candidates = Array.from(
      new Set(
        isAdmin
          ? [
            `${API_URL}/dashboard/conversations`,
            `${DASHBOARD_API_URL}/conversations`,
            `${API_URL}/support/conversations`,
            `${API_URL}/conversations`,
          ]
          : [
            `${API_URL}/support/conversations`,
            `${API_URL}/dashboard/conversations`,
            `${API_URL}/conversations`,
          ]
      )
    );

    const query = new URLSearchParams();
    if (params?.cursor) query.append("cursor", params.cursor);
    if (params?.search) query.append("search", params.search);
    if (params?.status && params.status !== "all") query.append("status", params.status);
    if (params?.per_page) query.append("per_page", String(params.per_page));

    const queryString = query.toString() ? `?${query.toString()}` : "";
    const headers = {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "country-id": getCountryId(),
      "country_id": getCountryId(),
    };

    let response: any = null;
    let lastError: any = null;

    for (const endpoint of orderCandidates(operation, candidates)) {
      try {
        response = await axios.get(`${endpoint}${queryString}`, {
          headers,
          signal: params?.signal,
        });
        if (response?.data) {
          rememberCandidate(operation, candidates, endpoint);
          break;
        }
      } catch (err: any) {
        if (axios.isCancel(err) || err?.name === "CanceledError" || err?.name === "AbortError") {
          return { data: [], next_cursor: null };
        }
        lastError = err;
        if (err?.response?.status === 404) {
          continue;
        }
        throw err;
      }
    }

    if (!response && lastError) {
      throw lastError;
    }

    const rawData = response?.data;
    const rawItems = extractArrayFromResponse<any>(rawData);
    const items: SupportConversation[] = rawItems.map(normalizeSupportConversation);
    const next_cursor = extractNextCursor(rawData);

    return { data: items, next_cursor };
  } catch (error: any) {
    if (axios.isCancel(error) || error?.name === "CanceledError" || error?.name === "AbortError") {
      return { data: [], next_cursor: null };
    }
    console.error("Error fetching support conversations:", error);
    throw error;
  }
}

export interface PaginatedSupportMessages {
  data: SupportMessage[];
  next_cursor: string | null;
}

export async function fetchSupportConversationMessages(
  conversationId: string | number,
  token: string,
  cursor?: string,
  isAdmin: boolean = true,
  signal?: AbortSignal
): Promise<PaginatedSupportMessages> {
  try {
    const operation = isAdmin ? "messages:admin" : "messages:user";
    const candidates = Array.from(
      new Set(
        isAdmin
          ? [
            `${DASHBOARD_API_URL}/conversations/${conversationId}/messages`,
            `${API_URL}/dashboard/conversations/${conversationId}/messages`,
            `${API_URL}/support/conversations/${conversationId}/messages`,
            `${API_URL}/conversations/${conversationId}/messages`,
          ]
          : [
            `${API_URL}/support/conversations/${conversationId}/messages`,
            `${DASHBOARD_API_URL}/conversations/${conversationId}/messages`,
            `${API_URL}/conversations/${conversationId}/messages`,
          ]
      )
    );

    const query = new URLSearchParams();
    if (cursor) query.append("cursor", cursor);

    const queryString = query.toString() ? `?${query.toString()}` : "";
    const headers = {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "country-id": getCountryId(),
      "country_id": getCountryId(),
    };

    let response: any = null;
    let lastError: any = null;

    for (const endpoint of orderCandidates(operation, candidates)) {
      try {
        response = await axios.get(`${endpoint}${queryString}`, {
          headers,
          signal,
        });
        if (response?.data) {
          rememberCandidate(operation, candidates, endpoint);
          break;
        }
      } catch (err: any) {
        if (axios.isCancel(err) || err?.name === "CanceledError" || err?.name === "AbortError") {
          return { data: [], next_cursor: null };
        }
        lastError = err;
        if (err?.response?.status === 404) {
          continue;
        }
        throw err;
      }
    }

    if (!response && lastError) {
      throw lastError;
    }

    const rawData = response?.data;
    const rawItems = extractArrayFromResponse<any>(rawData);
    const items: SupportMessage[] = rawItems.map((m) =>
      normalizeSupportMessage(m, conversationId)
    );
    const next_cursor = extractNextCursor(rawData);

    return { data: items, next_cursor };
  } catch (error: any) {
    if (axios.isCancel(error) || error?.name === "CanceledError" || error?.name === "AbortError") {
      return { data: [], next_cursor: null };
    }
    console.error("Error fetching support messages:", error);
    throw error;
  }
}

export async function sendSupportMessage(
  conversationId: string | number,
  params: { body?: string; attachment?: File | null },
  token: string,
  isAdmin: boolean = true
): Promise<SupportMessage> {
  const operation = isAdmin ? "send:admin" : "send:user";
  const candidates = Array.from(
    new Set(
      isAdmin
        ? [
          `${DASHBOARD_API_URL}/conversations/${conversationId}/messages`,
          `${API_URL}/dashboard/conversations/${conversationId}/messages`,
          `${API_URL}/support/conversations/${conversationId}/messages`,
          `${API_URL}/conversations/${conversationId}/messages`,
        ]
        : [
          `${API_URL}/support/conversations/${conversationId}/messages`,
          `${DASHBOARD_API_URL}/conversations/${conversationId}/messages`,
          `${API_URL}/conversations/${conversationId}/messages`,
        ]
    )
  );

  const hasAttachment = Boolean(params.attachment);
  const bodyText = params.body ? params.body.trim() : "";

  if (!bodyText && !hasAttachment) {
    throw new Error("The body field is required when attachment is not present.");
  }

  const formData = new FormData();
  if (bodyText) {
    formData.append("body", bodyText);
  }
  if (hasAttachment && params.attachment) {
    formData.append("attachment", params.attachment, params.attachment.name);
    formData.append("file", params.attachment, params.attachment.name);
  }

  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
    "Content-Type": "multipart/form-data",
    "country-id": getCountryId(),
    "country_id": getCountryId(),
  };

  let lastError: any = null;
  for (const endpoint of orderCandidates(operation, candidates)) {
    try {
      const response = await axios.post(endpoint, formData, { headers });
      rememberCandidate(operation, candidates, endpoint);
      const resData = response.data;
      const rawMsg =
        resData?.data?.message ||
        resData?.message ||
        resData?.data ||
        resData;
      return normalizeSupportMessage(rawMsg, conversationId);
    } catch (err: any) {
      lastError = err;
      if (err?.response?.status === 404) {
        continue;
      }
      throw err;
    }
  }

  console.error("Error sending support message:", lastError);
  throw lastError;
}

export interface CreateSupportConversationParams {
  body: string;
  subject?: string;
  attachment?: File | null;
}

export async function createSupportConversation(
  params: CreateSupportConversationParams,
  token: string
): Promise<SupportConversation> {
  try {
    const bodyText = params.body ? params.body.trim() : "";
    const hasAttachment = Boolean(params.attachment);

    if (!bodyText && !hasAttachment) {
      throw new Error("The body field is required when attachment is not present.");
    }

    const formData = new FormData();
    if (bodyText) {
      formData.append("body", bodyText);
    }
    if (params.subject?.trim()) {
      formData.append("subject", params.subject.trim());
    }
    if (hasAttachment && params.attachment) {
      formData.append("attachment", params.attachment, params.attachment.name);
      formData.append("file", params.attachment, params.attachment.name);
    }

    const response = await axios.post(
      `${API_URL}/support/conversations`,
      formData,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    const resData = response.data;
    const rawConv =
      resData?.data?.conversation ||
      resData?.conversation ||
      resData?.data ||
      resData;
    return normalizeSupportConversation(rawConv);
  } catch (error) {
    console.error("Error creating support conversation:", error);
    throw error;
  }
}

export async function markSupportConversationAsRead(
  conversationId: string | number,
  token: string,
  isAdmin: boolean = true
): Promise<any> {
  const operation = isAdmin ? "markRead:admin" : "markRead:user";
  const candidates = isAdmin
    ? [
      `${DASHBOARD_API_URL}/conversations/${conversationId}/read`,
      `${API_URL}/dashboard/conversations/${conversationId}/read`,
      `${API_URL}/support/conversations/${conversationId}/read`,
      `${DASHBOARD_API_URL}/support/conversations/${conversationId}/read`,
      `${API_URL}/conversations/${conversationId}/read`,
      `${DASHBOARD_API_URL}/conversations/${conversationId}/mark-as-read`,
      `${API_URL}/dashboard/conversations/${conversationId}/mark-as-read`,
      `${API_URL}/support/conversations/${conversationId}/mark-as-read`,
      `${API_URL}/conversations/${conversationId}/mark-as-read`,
      `${DASHBOARD_API_URL}/conversations/${conversationId}/messages/read`,
      `${API_URL}/dashboard/conversations/${conversationId}/messages/read`,
      `${API_URL}/support/conversations/${conversationId}/messages/read`,
    ]
    : [
      `${API_URL}/support/conversations/${conversationId}/read`,
      `${DASHBOARD_API_URL}/conversations/${conversationId}/read`,
      `${API_URL}/conversations/${conversationId}/read`,
      `${API_URL}/support/conversations/${conversationId}/mark-as-read`,
      `${API_URL}/conversations/${conversationId}/mark-as-read`,
      `${API_URL}/support/conversations/${conversationId}/messages/read`,
      `${API_URL}/conversations/${conversationId}/messages/read`,
    ];

  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
    "country-id": getCountryId(),
    "country_id": getCountryId(),
  };

  let lastError: any = null;
  for (const endpoint of orderCandidates(operation, candidates)) {
    try {
      const response = await axios.post(endpoint, {}, { headers });
      rememberCandidate(operation, candidates, endpoint);
      return response.data;
    } catch (err: any) {
      if (err?.response?.status === 405) {
        try {
          const patchRes = await axios.patch(endpoint, {}, { headers });
          rememberCandidate(operation, candidates, endpoint);
          return patchRes.data;
        } catch { }
      }
      lastError = err;
    }
  }

  console.warn("markSupportConversationAsRead failed:", lastError?.response?.data || lastError?.message);
  return null;
}

export async function releaseSupportConversation(
  conversationId: string | number,
  token: string
): Promise<any> {
  const operation = "release";
  const candidates = [
    `${DASHBOARD_API_URL}/conversations/${conversationId}/release`,
    `${API_URL}/dashboard/conversations/${conversationId}/release`,
    `${API_URL}/support/conversations/${conversationId}/release`,
    `${DASHBOARD_API_URL}/support/conversations/${conversationId}/release`,
    `${API_URL}/conversations/${conversationId}/release`,
  ];

  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
    "country-id": getCountryId(),
    "country_id": getCountryId(),
  };

  let lastError: any = null;
  for (const endpoint of orderCandidates(operation, candidates)) {
    try {
      const response = await axios.post(endpoint, {}, { headers });
      rememberCandidate(operation, candidates, endpoint);
      return response.data;
    } catch (err: any) {
      if (err?.response?.status === 405) {
        try {
          const patchRes = await axios.patch(endpoint, {}, { headers });
          rememberCandidate(operation, candidates, endpoint);
          return patchRes.data;
        } catch { }
      }
      lastError = err;
    }
  }

  console.error("Error releasing support conversation:", lastError?.response?.data || lastError?.message);
  throw lastError;
}