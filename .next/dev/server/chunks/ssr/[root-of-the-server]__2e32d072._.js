module.exports = [
"[project]/src/data/api/services/chat.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSupportConversation",
    ()=>createSupportConversation,
    "extractArrayFromResponse",
    ()=>extractArrayFromResponse,
    "extractNextCursor",
    ()=>extractNextCursor,
    "fetchAllChatsHistory",
    ()=>fetchAllChatsHistory,
    "fetchChatClientHistory",
    ()=>fetchChatClientHistory,
    "fetchChatHistory",
    ()=>fetchChatHistory,
    "fetchSupportConversationMessages",
    ()=>fetchSupportConversationMessages,
    "fetchSupportConversations",
    ()=>fetchSupportConversations,
    "markAsRead",
    ()=>markAsRead,
    "markSupportConversationAsRead",
    ()=>markSupportConversationAsRead,
    "normalizeSupportConversation",
    ()=>normalizeSupportConversation,
    "normalizeSupportMessage",
    ()=>normalizeSupportMessage,
    "releaseSupportConversation",
    ()=>releaseSupportConversation,
    "sendMessage",
    ()=>sendMessage,
    "sendSupportMessage",
    ()=>sendSupportMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/config.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.ts [app-ssr] (ecmascript)");
;
;
const API_URL = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BASE_URL"];
const DASHBOARD_API_URL = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DASHBOARD_API_BASE_URL"];
// Several support-chat operations probe a list of candidate endpoints until one responds.
// Remember which candidate worked per operation so later calls try it first instead of
// repeating the failed probes, and drop duplicate URLs from each list.
const resolvedCandidate = new Map();
function orderCandidates(operation, candidates) {
    const unique = Array.from(new Set(candidates));
    const index = resolvedCandidate.get(operation);
    if (index === undefined || index <= 0 || index >= unique.length) return unique;
    return [
        unique[index],
        ...unique.slice(0, index),
        ...unique.slice(index + 1)
    ];
}
function rememberCandidate(operation, candidates, endpoint) {
    const index = Array.from(new Set(candidates)).indexOf(endpoint);
    if (index >= 0) resolvedCandidate.set(operation, index);
}
async function fetchChatHistory(adminId, token) {
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`${API_URL}/chat/contacts/${adminId}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        });
        return response.data.data || response.data || [];
    } catch (error) {
        console.error("Error fetching chat history:", error);
        throw error;
    }
}
async function fetchChatClientHistory(adminId, clientId, token) {
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`${API_URL}/chat/history/${adminId}/${clientId}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        });
        return response.data.data || response.data || [];
    } catch (error) {
        console.error("Error fetching client messages:", error);
        throw error;
    }
}
async function sendMessage(token, messageData) {
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(`${API_URL}/chat/send`, messageData, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        });
        return response.data.data || response.data;
    } catch (error) {
        console.error("Error sending message:", error);
        throw error;
    }
}
async function markAsRead(clientId, adminId, token) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(`${API_URL}/chat/mark-as-read/${clientId}/${adminId}`, {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    } catch (error) {
        console.error("Error marking messages as read:", error);
        throw error;
    }
}
const fetchAllChatsHistory = async (token)=>{
    try {
        const response = await fetch(`${API_URL}/chat/all`, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${token}`
            }
        });
        const data = await response.json();
        if (data.status !== "success" && data.status !== true && data.status !== 200) {
            throw new Error(data.message || "Failed to fetch chat history");
        }
        if (!data.data || !Array.isArray(data.data)) {
            return [];
        }
        if (data.data.length > 0 && !data.data[0].sender) {
            return data.data.map((chat)=>({
                    user_id: chat.id || chat.user_id,
                    first_name: chat.first_name || chat.name?.split(' ')[0] || "",
                    last_name: chat.last_name || chat.name?.split(' ').slice(1).join(' ') || "",
                    email: chat.email || "",
                    profile_picture: chat.profile_picture || chat.avatar || null,
                    last_message: chat.last_message || null,
                    unread_count: chat.unread_count || 0
                }));
        }
        const contactsMap = new Map();
        data.data.forEach((msg)=>{
            const contact = msg.sender.role !== "admin" ? msg.sender : msg.receiver;
            const contactId = msg.sender.role !== "admin" ? msg.sender_id : msg.receiver_id;
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
                        read_at: msg.is_read ? msg.updated_at : null
                    },
                    unread_count: 0
                });
            } else {
                const existing = contactsMap.get(contactId);
                if (new Date(msg.created_at) > new Date(existing.last_message.created_at)) {
                    existing.last_message = {
                        message_id: msg.message_id,
                        sender_id: msg.sender_id,
                        receiver_id: msg.receiver_id,
                        message_text: msg.message_text,
                        message_type: msg.message_type,
                        created_at: msg.created_at,
                        updated_at: msg.updated_at,
                        read_at: msg.is_read ? msg.updated_at : null
                    };
                }
            }
            if (msg.is_read === 0 && msg.sender.role !== "admin") {
                const contact = contactsMap.get(contactId);
                contact.unread_count = (contact.unread_count || 0) + 1;
            }
        });
        return Array.from(contactsMap.values());
    } catch (error) {
        throw new Error(`Chat history fetch failed: ${error instanceof Error ? error.message : "Unknown error"}`);
    }
};
function extractArrayFromResponse(data) {
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
function extractNextCursor(data) {
    if (!data) return null;
    const cursor = data?.next_cursor || data?.data?.next_cursor || data?.meta?.next_cursor || data?.data?.meta?.next_cursor || data?.pagination?.next_cursor || data?.data?.pagination?.next_cursor || data?.links?.next || data?.data?.links?.next || data?.next_page_url || data?.data?.next_page_url || null;
    if (cursor && typeof cursor === "string") {
        try {
            if (cursor.startsWith("http")) {
                const url = new URL(cursor);
                return url.searchParams.get("cursor") || url.searchParams.get("page") || cursor;
            }
        } catch  {
        // ignore
        }
        return cursor;
    }
    if (typeof cursor === "number") return String(cursor);
    return null;
}
function normalizeSupportConversation(item) {
    if (!item || typeof item !== "object") return item;
    const id = item.id ?? item.conversation_id ?? item.support_conversation_id;
    const conversation_id = item.conversation_id ?? item.id ?? id;
    // Normalize user
    let user = item.user || null;
    if (user && typeof user === "object") {
        const userId = user.id ?? user.user_id;
        const firstName = user.first_name || "";
        const lastName = user.last_name || "";
        const fullName = user.name || `${firstName} ${lastName}`.trim() || user.email || `User #${userId}`;
        user = {
            ...user,
            id: userId,
            user_id: userId,
            name: fullName,
            first_name: firstName,
            last_name: lastName,
            email: user.email,
            avatar: user.avatar || user.profile_picture || null,
            profile_picture: user.profile_picture || user.avatar || null
        };
    } else if (item.user_id || item.user_name || item.user_email) {
        user = {
            id: item.user_id,
            user_id: item.user_id,
            name: item.user_name || item.user_email || `User #${item.user_id}`,
            email: item.user_email
        };
    }
    // Normalize admin
    let admin = item.admin || item.assigned_admin || null;
    if (admin && typeof admin === "object") {
        const adminId = admin.id ?? admin.user_id;
        const firstName = admin.first_name || "";
        const lastName = admin.last_name || "";
        const fullName = admin.name || `${firstName} ${lastName}`.trim() || admin.email || `Admin #${adminId}`;
        admin = {
            ...admin,
            id: adminId,
            name: fullName,
            email: admin.email
        };
    }
    // Normalize last / latest message
    const rawMsg = item.latest_message || item.last_message || null;
    let last_message = null;
    if (rawMsg) {
        if (typeof rawMsg === "string") {
            last_message = {
                body: rawMsg
            };
        } else {
            last_message = {
                ...rawMsg,
                id: rawMsg.id ?? rawMsg.message_id,
                conversation_id: rawMsg.conversation_id ?? id,
                sender_id: rawMsg.sender_id ?? rawMsg.user_id,
                sender_type: rawMsg.sender_type || "user",
                body: rawMsg.body ?? rawMsg.message_text ?? "",
                attachment_url: rawMsg.attachment_url ?? (typeof rawMsg.attachment === "string" ? rawMsg.attachment : rawMsg.attachment?.url) ?? rawMsg.file_url ?? null,
                created_at: rawMsg.created_at,
                read_at: rawMsg.read_at
            };
        }
    }
    const unreadCount = Number(item.unread_for_admin ?? item.unread_count ?? item.unread_for_user ?? item.unread ?? 0) || 0;
    const subject = item.subject || item.title || (user?.name ? user.name : null) || `Conversation #${id}`;
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
        last_message_at: item.last_message_at || last_message?.created_at || item.updated_at || item.created_at || null,
        unread_count: unreadCount,
        unread_for_admin: item.unread_for_admin ?? unreadCount,
        unread_for_user: item.unread_for_user ?? 0,
        subject,
        title: subject
    };
}
function normalizeSupportMessage(item, fallbackConvId) {
    if (!item || typeof item !== "object") return item;
    const id = item.id ?? item.message_id;
    const conversation_id = item.conversation_id ?? fallbackConvId;
    const sender_id = item.sender_id ?? item.user_id ?? item.sender?.id ?? item.sender?.user_id;
    let sender = item.sender || null;
    if (sender && typeof sender === "object") {
        const sId = sender.id ?? sender.user_id ?? sender_id;
        const firstName = sender.first_name || "";
        const lastName = sender.last_name || "";
        const fullName = sender.name || `${firstName} ${lastName}`.trim() || sender.email || "";
        sender = {
            ...sender,
            id: sId,
            name: fullName,
            first_name: firstName,
            last_name: lastName,
            email: sender.email,
            role: sender.role || item.sender_type
        };
    }
    const attachmentUrl = item.attachment_url ?? (typeof item.attachment === "string" ? item.attachment : item.attachment?.url) ?? item.file_url ?? (typeof item.file === "string" ? item.file : item.file?.url) ?? null;
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
        is_read: item.is_read ?? (Boolean(item.read_at) ? 1 : 0)
    };
}
async function fetchSupportConversations(token, params) {
    try {
        const isAdmin = params?.isAdmin !== false;
        const operation = isAdmin ? "conversations:admin" : "conversations:user";
        const candidates = Array.from(new Set(isAdmin ? [
            `${API_URL}/dashboard/conversations`,
            `${DASHBOARD_API_URL}/conversations`,
            `${API_URL}/support/conversations`,
            `${API_URL}/conversations`
        ] : [
            `${API_URL}/support/conversations`,
            `${API_URL}/dashboard/conversations`,
            `${API_URL}/conversations`
        ]));
        const query = new URLSearchParams();
        if (params?.cursor) query.append("cursor", params.cursor);
        if (params?.search) query.append("search", params.search);
        if (params?.status && params.status !== "all") query.append("status", params.status);
        if (params?.per_page) query.append("per_page", String(params.per_page));
        const queryString = query.toString() ? `?${query.toString()}` : "";
        const headers = {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
            "country-id": (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getCountryId"])(),
            "country_id": (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getCountryId"])()
        };
        let response = null;
        let lastError = null;
        for (const endpoint of orderCandidates(operation, candidates)){
            try {
                response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`${endpoint}${queryString}`, {
                    headers,
                    signal: params?.signal
                });
                if (response?.data) {
                    rememberCandidate(operation, candidates, endpoint);
                    break;
                }
            } catch (err) {
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isCancel(err) || err?.name === "CanceledError" || err?.name === "AbortError") {
                    return {
                        data: [],
                        next_cursor: null
                    };
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
        const rawItems = extractArrayFromResponse(rawData);
        const items = rawItems.map(normalizeSupportConversation);
        const next_cursor = extractNextCursor(rawData);
        return {
            data: items,
            next_cursor
        };
    } catch (error) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isCancel(error) || error?.name === "CanceledError" || error?.name === "AbortError") {
            return {
                data: [],
                next_cursor: null
            };
        }
        console.error("Error fetching support conversations:", error);
        throw error;
    }
}
async function fetchSupportConversationMessages(conversationId, token, cursor, isAdmin = true, signal) {
    try {
        const operation = isAdmin ? "messages:admin" : "messages:user";
        const candidates = Array.from(new Set(isAdmin ? [
            `${DASHBOARD_API_URL}/conversations/${conversationId}/messages`,
            `${API_URL}/dashboard/conversations/${conversationId}/messages`,
            `${API_URL}/support/conversations/${conversationId}/messages`,
            `${API_URL}/conversations/${conversationId}/messages`
        ] : [
            `${API_URL}/support/conversations/${conversationId}/messages`,
            `${DASHBOARD_API_URL}/conversations/${conversationId}/messages`,
            `${API_URL}/conversations/${conversationId}/messages`
        ]));
        const query = new URLSearchParams();
        if (cursor) query.append("cursor", cursor);
        const queryString = query.toString() ? `?${query.toString()}` : "";
        const headers = {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
            "country-id": (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getCountryId"])(),
            "country_id": (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getCountryId"])()
        };
        let response = null;
        let lastError = null;
        for (const endpoint of orderCandidates(operation, candidates)){
            try {
                response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`${endpoint}${queryString}`, {
                    headers,
                    signal
                });
                if (response?.data) {
                    rememberCandidate(operation, candidates, endpoint);
                    break;
                }
            } catch (err) {
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isCancel(err) || err?.name === "CanceledError" || err?.name === "AbortError") {
                    return {
                        data: [],
                        next_cursor: null
                    };
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
        const rawItems = extractArrayFromResponse(rawData);
        const items = rawItems.map((m)=>normalizeSupportMessage(m, conversationId));
        const next_cursor = extractNextCursor(rawData);
        return {
            data: items,
            next_cursor
        };
    } catch (error) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isCancel(error) || error?.name === "CanceledError" || error?.name === "AbortError") {
            return {
                data: [],
                next_cursor: null
            };
        }
        console.error("Error fetching support messages:", error);
        throw error;
    }
}
async function sendSupportMessage(conversationId, params, token, isAdmin = true) {
    const operation = isAdmin ? "send:admin" : "send:user";
    const candidates = Array.from(new Set(isAdmin ? [
        `${DASHBOARD_API_URL}/conversations/${conversationId}/messages`,
        `${API_URL}/dashboard/conversations/${conversationId}/messages`,
        `${API_URL}/support/conversations/${conversationId}/messages`,
        `${API_URL}/conversations/${conversationId}/messages`
    ] : [
        `${API_URL}/support/conversations/${conversationId}/messages`,
        `${DASHBOARD_API_URL}/conversations/${conversationId}/messages`,
        `${API_URL}/conversations/${conversationId}/messages`
    ]));
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
        "country-id": (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getCountryId"])(),
        "country_id": (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getCountryId"])()
    };
    let lastError = null;
    for (const endpoint of orderCandidates(operation, candidates)){
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(endpoint, formData, {
                headers
            });
            rememberCandidate(operation, candidates, endpoint);
            const resData = response.data;
            const rawMsg = resData?.data?.message || resData?.message || resData?.data || resData;
            return normalizeSupportMessage(rawMsg, conversationId);
        } catch (err) {
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
async function createSupportConversation(params, token) {
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
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(`${API_URL}/support/conversations`, formData, {
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
            }
        });
        const resData = response.data;
        const rawConv = resData?.data?.conversation || resData?.conversation || resData?.data || resData;
        return normalizeSupportConversation(rawConv);
    } catch (error) {
        console.error("Error creating support conversation:", error);
        throw error;
    }
}
async function markSupportConversationAsRead(conversationId, token, isAdmin = true) {
    const operation = isAdmin ? "markRead:admin" : "markRead:user";
    const candidates = isAdmin ? [
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
        `${API_URL}/support/conversations/${conversationId}/messages/read`
    ] : [
        `${API_URL}/support/conversations/${conversationId}/read`,
        `${DASHBOARD_API_URL}/conversations/${conversationId}/read`,
        `${API_URL}/conversations/${conversationId}/read`,
        `${API_URL}/support/conversations/${conversationId}/mark-as-read`,
        `${API_URL}/conversations/${conversationId}/mark-as-read`,
        `${API_URL}/support/conversations/${conversationId}/messages/read`,
        `${API_URL}/conversations/${conversationId}/messages/read`
    ];
    const headers = {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "country-id": (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getCountryId"])(),
        "country_id": (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getCountryId"])()
    };
    let lastError = null;
    for (const endpoint of orderCandidates(operation, candidates)){
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(endpoint, {}, {
                headers
            });
            rememberCandidate(operation, candidates, endpoint);
            return response.data;
        } catch (err) {
            if (err?.response?.status === 405) {
                try {
                    const patchRes = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].patch(endpoint, {}, {
                        headers
                    });
                    rememberCandidate(operation, candidates, endpoint);
                    return patchRes.data;
                } catch  {}
            }
            lastError = err;
        }
    }
    console.warn("markSupportConversationAsRead failed:", lastError?.response?.data || lastError?.message);
    return null;
}
async function releaseSupportConversation(conversationId, token) {
    const operation = "release";
    const candidates = [
        `${DASHBOARD_API_URL}/conversations/${conversationId}/release`,
        `${API_URL}/dashboard/conversations/${conversationId}/release`,
        `${API_URL}/support/conversations/${conversationId}/release`,
        `${DASHBOARD_API_URL}/support/conversations/${conversationId}/release`,
        `${API_URL}/conversations/${conversationId}/release`
    ];
    const headers = {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "country-id": (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getCountryId"])(),
        "country_id": (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getCountryId"])()
    };
    let lastError = null;
    for (const endpoint of orderCandidates(operation, candidates)){
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(endpoint, {}, {
                headers
            });
            rememberCandidate(operation, candidates, endpoint);
            return response.data;
        } catch (err) {
            if (err?.response?.status === 405) {
                try {
                    const patchRes = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].patch(endpoint, {}, {
                        headers
                    });
                    rememberCandidate(operation, candidates, endpoint);
                    return patchRes.data;
                } catch  {}
            }
            lastError = err;
        }
    }
    console.error("Error releasing support conversation:", lastError?.response?.data || lastError?.message);
    throw lastError;
}
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[project]/src/app/admin/chat/utils/chatReadPersistence.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyReadStateToConversation",
    ()=>applyReadStateToConversation,
    "isMessageMarkedAsRead",
    ()=>isMessageMarkedAsRead,
    "playNotificationSound",
    ()=>playNotificationSound,
    "recordConversationAsRead",
    ()=>recordConversationAsRead
]);
"use client";
const STORAGE_KEY = "advix_chat_marked_read_records_v1";
// isMessageMarkedAsRead/applyReadStateToConversation run once per message/conversation on
// every render, so the parsed map is reused until the stored JSON changes. Treat it as read-only.
let cachedRaw = null;
let cachedMap = {};
function getMarkedReadMap() {
    if ("TURBOPACK compile-time truthy", 1) return {};
    //TURBOPACK unreachable
    ;
}
function recordConversationAsRead(conversationId, lastMessage, lastMessageAt) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function isMessageMarkedAsRead(conversationId, message) {
    if (message.is_read === true || message.is_read === 1 || Boolean(message.read_at) || Boolean(message.is_seen) || Boolean(message.seen_at) || Boolean(message.read)) {
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
function applyReadStateToConversation(conv, isSelected = false) {
    const convId = String(conv.id ?? conv.conversation_id);
    if (!convId) return conv;
    if (isSelected) {
        return {
            ...conv,
            unread_for_admin: 0,
            unread_for_user: 0,
            unread_count: 0,
            unread: 0,
            last_message: conv.last_message ? {
                ...conv.last_message,
                is_read: true,
                read_at: conv.last_message.read_at || new Date().toISOString()
            } : conv.last_message
        };
    }
    const map = getMarkedReadMap();
    const record = map[convId];
    if (!record) return conv;
    const convLastMsgTime = conv.last_message_at || conv.last_message?.created_at || conv.updated_at;
    const convLastMsgId = conv.last_message?.id ?? conv.last_message?.message_id;
    const markedTime = new Date(record.markedReadAt).getTime();
    const msgTime = convLastMsgTime ? new Date(convLastMsgTime).getTime() : 0;
    const isSameMessage = record.lastMessageId && convLastMsgId && String(record.lastMessageId) === String(convLastMsgId);
    // If last message is same as when marked as read, or created on or before markedReadAt (+3s skew)
    const isOlderOrEqual = msgTime > 0 && markedTime > 0 && msgTime <= markedTime + 3000;
    if (isSameMessage || isOlderOrEqual || !convLastMsgTime) {
        return {
            ...conv,
            unread_for_admin: 0,
            unread_for_user: 0,
            unread_count: 0,
            unread: 0,
            last_message: conv.last_message ? {
                ...conv.last_message,
                is_read: true
            } : conv.last_message
        };
    }
    // A new message arrived after mark as read -> show exactly 1 unread message
    return {
        ...conv,
        unread_for_admin: 1,
        unread_for_user: 1,
        unread_count: 1,
        unread: 1
    };
}
function playNotificationSound() {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
}),
"[project]/src/app/admin/chat/hooks/useChatRealtime.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useChatRealtime",
    ()=>useChatRealtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pusher$2d$js$2f$dist$2f$node$2f$pusher$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pusher-js/dist/node/pusher.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$chat$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/chat.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$chatReadPersistence$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/chat/utils/chatReadPersistence.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/config.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
let globalPusher = null;
let globalToken = null;
let cachedAuthEndpoint = null;
let isBroadcastingAuthUnavailable = false;
let lastAuthFailTime = 0;
const AUTH_FAIL_COOLDOWN_MS = 5 * 60 * 1000;
const CHAT_EVENTS = [
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
    ".support.message.read"
];
// The open conversation is subscribed on both the global chat channel and its own
// conversation channel, so the same message event can arrive twice. Remember recently
// handled message ids so a re-delivery doesn't repeat the toast, sound and mark-as-read request.
const MAX_HANDLED_MESSAGE_KEYS = 500;
const handledMessageKeys = new Set();
function isDuplicateMessageEvent(msg) {
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
async function authorizePusherChannel(params, callback, token) {
    if (isBroadcastingAuthUnavailable) {
        if (Date.now() - lastAuthFailTime < AUTH_FAIL_COOLDOWN_MS) {
            callback(new Error("Broadcasting auth route is not configured on backend"), null);
            return;
        }
        isBroadcastingAuthUnavailable = false;
    }
    const countryId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getCountryId"])();
    const baseHeaders = {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
        "country-id": countryId,
        "country_id": countryId
    };
    const payload = {
        socket_id: params.socketId,
        channel_name: params.channelName
    };
    if (cachedAuthEndpoint) {
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(cachedAuthEndpoint, payload, {
                headers: baseHeaders
            });
            const authData = response.data?.data || response.data;
            if (authData && typeof authData === "object" && (authData.auth || authData.signature)) {
                callback(null, authData);
                return;
            }
        } catch  {
            cachedAuthEndpoint = null;
        }
    }
    const candidateEndpoints = [
        `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BASE_URL"]}/broadcasting/auth`,
        `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BASE_URL"]}/broadcasting/auth`
    ];
    let lastError = null;
    for (const endpoint of candidateEndpoints){
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(endpoint, payload, {
                headers: baseHeaders
            });
            const authData = response.data?.data || response.data;
            if (authData && typeof authData === "object" && (authData.auth || authData.signature)) {
                cachedAuthEndpoint = endpoint;
                isBroadcastingAuthUnavailable = false;
                callback(null, authData);
                return;
            }
        } catch (err) {
            lastError = err;
            if (err?.response?.status === 404) {
                continue;
            }
            break;
        }
    }
    if (lastError?.response?.status === 404) {
        isBroadcastingAuthUnavailable = true;
        lastAuthFailTime = Date.now();
    }
    callback(new Error(`Failed to authorize channel ${params.channelName}`), null);
}
function getOrCreatePusherInstance(token) {
    const pusherKey = ("TURBOPACK compile-time value", "1b2cea2ec32b54fa6026") || ("TURBOPACK compile-time value", "1b2cea2ec32b54fa6026") || process.env.PUSHER_APP_KEY || "1b2cea2ec32b54fa6026";
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const cluster = ("TURBOPACK compile-time value", "mt1") || process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTER || process.env.PUSHER_APP_CLUSTER || "mt1";
    if (globalPusher && globalToken === token && globalPusher.connection.state !== "disconnected" && globalPusher.connection.state !== "failed") {
        return globalPusher;
    }
    if (globalPusher) {
        try {
            globalPusher.disconnect();
        } catch  {}
        globalPusher = null;
    }
    try {
        const pusher = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pusher$2d$js$2f$dist$2f$node$2f$pusher$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](pusherKey, {
            cluster,
            channelAuthorization: {
                customHandler: (params, callback)=>{
                    authorizePusherChannel(params, callback, token);
                }
            }
        });
        globalPusher = pusher;
        globalToken = token;
        return pusher;
    } catch (err) {
        console.error("[Pusher] Failed to initialize:", err);
        return null;
    }
}
function useChatRealtime({ token, currentUserId, isAdmin, selectedConversationId, queryClient, onNewMessage }) {
    const pusherRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const selectedConversationIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(selectedConversationId);
    const currentUserIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(currentUserId);
    const isAdminRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(isAdmin);
    const tokenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(token);
    const onNewMessageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(onNewMessage);
    const queryClientRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(queryClient);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        selectedConversationIdRef.current = selectedConversationId;
    }, [
        selectedConversationId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        currentUserIdRef.current = currentUserId;
    }, [
        currentUserId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        isAdminRef.current = isAdmin;
    }, [
        isAdmin
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        tokenRef.current = token;
    }, [
        token
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        onNewMessageRef.current = onNewMessage;
    }, [
        onNewMessage
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        queryClientRef.current = queryClient;
    }, [
        queryClient
    ]);
    const stableHandlerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])((rawData)=>{
        const _isAdmin = isAdminRef.current;
        const _token = tokenRef.current;
        const _currentUserId = currentUserIdRef.current;
        const _queryClient = queryClientRef.current;
        const currentSelected = selectedConversationIdRef.current;
        if (!_token) return;
        const msg = rawData?.message || (rawData?.body !== undefined || rawData?.message_text !== undefined ? rawData : undefined);
        const isReadEvent = rawData?.event_type === "read" || rawData?.read === true || rawData?.is_read === true || rawData?.conversation_read === true;
        const readConvId = rawData?.conversation_id ?? rawData?.id ?? (isReadEvent ? currentSelected : null);
        if (isReadEvent && readConvId) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$chatReadPersistence$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["recordConversationAsRead"])(readConvId);
            const readConvIdStr = String(readConvId);
            const now = new Date().toISOString();
            _queryClient.setQueriesData({
                predicate: (query)=>{
                    const key = query.queryKey;
                    return Array.isArray(key) && key[0] === "supportMessages" && String(key[1]) === readConvIdStr;
                }
            }, (old)=>{
                if (!old) return old;
                const updateMsg = (m)=>({
                        ...m,
                        is_read: true,
                        read_at: m.read_at || now,
                        is_seen: true,
                        read: true
                    });
                if (old.pages && Array.isArray(old.pages)) {
                    return {
                        ...old,
                        pages: old.pages.map((page)=>({
                                ...page,
                                data: Array.isArray(page.data) ? page.data.map(updateMsg) : page.data
                            }))
                    };
                }
                return old;
            });
            _queryClient.setQueriesData({
                queryKey: [
                    "supportConversations"
                ]
            }, (old)=>{
                if (!old) return old;
                const updateConv = (c)=>{
                    const cId = c.id ?? c.conversation_id;
                    if (String(cId) === readConvIdStr) {
                        return {
                            ...c,
                            unread_for_user: 0,
                            unread_for_admin: 0,
                            unread_count: 0,
                            unread: 0
                        };
                    }
                    return c;
                };
                if (old.pages && Array.isArray(old.pages)) {
                    return {
                        ...old,
                        pages: old.pages.map((page)=>({
                                ...page,
                                data: Array.isArray(page.data) ? page.data.map(updateConv) : page.data
                            }))
                    };
                }
                return old;
            });
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
                    read_at: msg.read_at || new Date().toISOString()
                };
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$chatReadPersistence$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["recordConversationAsRead"])(currentSelected, formattedMsg, formattedMsg.created_at);
                _queryClient.setQueriesData({
                    predicate: (query)=>{
                        const key = query.queryKey;
                        return Array.isArray(key) && key[0] === "supportMessages" && String(key[1]) === String(currentSelected);
                    }
                }, (old)=>{
                    if (!old?.pages?.length) return old;
                    const exists = old.pages.some((page)=>page.data.some((m)=>(m.id ?? m.message_id) === msgId));
                    if (exists) return old;
                    const lastPageIndex = old.pages.length - 1;
                    const newPages = [
                        ...old.pages
                    ];
                    newPages[lastPageIndex] = {
                        ...newPages[lastPageIndex],
                        data: [
                            ...newPages[lastPageIndex].data,
                            formattedMsg
                        ]
                    };
                    return {
                        ...old,
                        pages: newPages
                    };
                });
                const isOwn = _currentUserId && (Number(msg.sender_id) === Number(_currentUserId) || Number(msg.user_id) === Number(_currentUserId));
                if (!isOwn) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$chat$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markSupportConversationAsRead"])(currentSelected, _token, _isAdmin).catch(()=>{});
                }
            }
            const isOwnMsg = _currentUserId && (Number(msg.sender_id) === Number(_currentUserId) || Number(msg.user_id) === Number(_currentUserId));
            if (!isOwnMsg) {
                onNewMessageRef.current?.(msg);
            }
            _queryClient.setQueriesData({
                queryKey: [
                    "supportConversations"
                ]
            }, (old)=>{
                if (!old) return old;
                const updateConv = (c)=>{
                    const cId = c.id ?? c.conversation_id;
                    if (String(cId) !== String(msgConvId)) return c;
                    return {
                        ...c,
                        last_message_at: msg.created_at || new Date().toISOString(),
                        last_message: isCurrentOpen ? {
                            ...msg,
                            is_read: true,
                            read_at: msg.read_at || new Date().toISOString()
                        } : msg,
                        unread_for_admin: isCurrentOpen ? 0 : Number(c.unread_for_admin || 0) + (_isAdmin ? 1 : 0),
                        unread_for_user: isCurrentOpen ? 0 : Number(c.unread_for_user || 0) + (!_isAdmin ? 1 : 0),
                        unread_count: isCurrentOpen ? 0 : Number(c.unread_count || 0) + 1
                    };
                };
                if (old.pages && Array.isArray(old.pages)) {
                    let found = false;
                    const newPages = old.pages.map((page)=>({
                            ...page,
                            data: page.data.map((c)=>{
                                const updated = updateConv(c);
                                if (updated !== c) found = true;
                                return updated;
                            })
                        }));
                    if (!found && rawData?.conversation) {
                        newPages[0] = {
                            ...newPages[0],
                            data: [
                                rawData.conversation,
                                ...newPages[0]?.data || []
                            ]
                        };
                    }
                    return {
                        ...old,
                        pages: newPages
                    };
                }
                if (old.data && Array.isArray(old.data)) {
                    return {
                        ...old,
                        data: old.data.map(updateConv)
                    };
                }
                return old;
            });
        } else if (rawData?.conversation) {
            _queryClient.setQueriesData({
                queryKey: [
                    "supportConversations"
                ]
            }, (old)=>{
                if (!old?.pages?.length) return old;
                return {
                    ...old,
                    pages: [
                        {
                            ...old.pages[0],
                            data: [
                                rawData.conversation,
                                ...old.pages[0].data
                            ]
                        },
                        ...old.pages.slice(1)
                    ]
                };
            });
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!token) return;
        const pusher = getOrCreatePusherInstance(token);
        if (!pusher) return;
        pusherRef.current = pusher;
        const channelName = isAdmin ? "private-admin.chat" : "private-chat";
        let ch;
        try {
            ch = pusher.subscribe(channelName);
        } catch (e) {
            console.warn(`[Pusher] Could not subscribe to ${channelName}:`, e);
            return;
        }
        ch.bind("pusher:subscription_error", (err)=>{
            console.warn(`[Pusher] Subscription error for ${channelName}:`, err);
        });
        const handler = (data)=>stableHandlerRef.current(data);
        CHAT_EVENTS.forEach((evt)=>ch.bind(evt, handler));
        return ()=>{
            try {
                CHAT_EVENTS.forEach((evt)=>ch.unbind(evt, handler));
                pusher.unsubscribe(channelName);
            } catch  {}
        };
    }, [
        token,
        isAdmin
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!selectedConversationId || !token) return;
        const pusher = pusherRef.current ?? getOrCreatePusherInstance(token);
        if (!pusher) return;
        pusherRef.current = pusher;
        const channelNames = [
            `private-chat.conversation.${selectedConversationId}`
        ];
        const handler = (data)=>stableHandlerRef.current(data);
        const channels = [];
        channelNames.forEach((chName)=>{
            try {
                const ch = pusher.subscribe(chName);
                ch.bind("pusher:subscription_error", (err)=>{
                    console.warn(`[Pusher] Auth failed for ${chName}:`, err);
                });
                CHAT_EVENTS.forEach((evt)=>ch.bind(evt, handler));
                channels.push(ch);
            } catch (e) {
                console.warn(`[Pusher] Could not subscribe to ${chName}:`, e);
            }
        });
        return ()=>{
            channels.forEach((ch)=>{
                try {
                    CHAT_EVENTS.forEach((evt)=>ch.unbind(evt, handler));
                    pusher.unsubscribe(ch.name);
                } catch  {}
            });
        };
    }, [
        selectedConversationId,
        token
    ]);
    // Declared last so it cleans up after the channel effects above: close the realtime
    // connection when the chat page unmounts (it is reopened on the next visit).
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            if (globalPusher) {
                try {
                    globalPusher.disconnect();
                } catch  {}
                globalPusher = null;
                globalToken = null;
            }
            pusherRef.current = null;
        };
    }, []);
}
}),
"[project]/src/app/admin/chat/hooks/useConversationsList.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalizeConversationStatus",
    ()=>normalizeConversationStatus,
    "useConversationsList",
    ()=>useConversationsList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$chat$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/chat.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$chatReadPersistence$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/chat/utils/chatReadPersistence.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function normalizeConversationStatus(status) {
    if (!status && status !== 0) return "open";
    const s = String(status).toLowerCase().trim();
    if (s === "closed" || s === "resolved" || s === "completed" || s === "finished" || s === "done" || s === "archived" || s === "3") {
        return "closed";
    }
    if (s === "pending" || s === "waiting" || s === "paused" || s === "hold" || s === "on_hold" || s === "2") {
        return "pending";
    }
    return "open";
}
function useConversationsList({ token, isAdmin, selectedConversationId }) {
    const [statusFilter, setStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [debouncedSearch, setDebouncedSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handler = setTimeout(()=>{
            setDebouncedSearch(searchQuery);
        }, 500);
        return ()=>clearTimeout(handler);
    }, [
        searchQuery
    ]);
    const { data: conversationsData, isLoading: isLoadingConversations, refetch: refetchConversations, isRefetching: isRefetchingConversations, fetchNextPage: fetchNextConversationsPage, hasNextPage: hasNextConversationsPage, isFetchingNextPage: isFetchingNextConversationsPage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInfiniteQuery"])({
        queryKey: [
            "supportConversations",
            token,
            debouncedSearch,
            isAdmin,
            "infinite"
        ],
        queryFn: ({ pageParam = undefined, signal })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$chat$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchSupportConversations"])(token || "", {
                cursor: pageParam,
                search: debouncedSearch,
                isAdmin,
                signal
            }),
        getNextPageParam: (lastPage)=>lastPage.next_cursor || undefined,
        enabled: !!token,
        initialPageParam: undefined,
        staleTime: 5 * 60 * 1000,
        gcTime: 30 * 60 * 1000,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false
    });
    const conversations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const raw = conversationsData?.pages.flatMap((page)=>page.data) || [];
        const seen = new Set();
        const deduplicated = [];
        for (const c of raw){
            const convId = String(c.id ?? c.conversation_id);
            if (!seen.has(convId)) {
                seen.add(convId);
                deduplicated.push(c);
            }
        }
        return deduplicated.map((c)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$chatReadPersistence$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyReadStateToConversation"])(c, selectedConversationId ? String(c.id ?? c.conversation_id) === String(selectedConversationId) : false));
    }, [
        conversationsData,
        selectedConversationId
    ]);
    const filteredConversations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return conversations.filter((c)=>{
            const s = normalizeConversationStatus(c.status);
            if (statusFilter !== "all" && s !== statusFilter) {
                return false;
            }
            if (debouncedSearch.trim()) {
                const query = debouncedSearch.toLowerCase().trim();
                const userName = (c.user?.name || `${c.user?.first_name || ""} ${c.user?.last_name || ""}`.trim()).toLowerCase();
                const userEmail = (c.user?.email || "").toLowerCase();
                const subject = (c.subject || "").toLowerCase();
                const convId = String(c.id ?? c.conversation_id);
                const matches = userName.includes(query) || userEmail.includes(query) || subject.includes(query) || convId.includes(query);
                if (!matches) return false;
            }
            return true;
        });
    }, [
        conversations,
        statusFilter,
        debouncedSearch
    ]);
    const counts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const all = conversations.length;
        let open = 0;
        let pending = 0;
        let closed = 0;
        conversations.forEach((c)=>{
            const s = normalizeConversationStatus(c.status);
            if (s === "open") open++;
            else if (s === "pending") pending++;
            else if (s === "closed") closed++;
        });
        return {
            all,
            open,
            pending,
            closed
        };
    }, [
        conversations
    ]);
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
        isFetchingNextConversationsPage
    };
}
}),
"[project]/src/app/admin/chat/utils/chatDateUtils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatChatTime",
    ()=>formatChatTime,
    "groupMessagesByDate",
    ()=>groupMessagesByDate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isToday$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/isToday.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isYesterday$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/isYesterday.js [app-ssr] (ecmascript)");
;
function formatChatTime(dateString, yesterdayTemplate = "Yesterday, {time}") {
    if (!dateString) return "";
    try {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return "";
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isToday$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isToday"])(date)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(date, "HH:mm");
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isYesterday$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isYesterday"])(date)) {
            return yesterdayTemplate.replace("{time}", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(date, "HH:mm"));
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(date, "MMM d, HH:mm");
    } catch  {
        return "";
    }
}
function groupMessagesByDate(messages) {
    const sorted = [
        ...messages || []
    ].sort((a, b)=>{
        const timeA = a.created_at ? new Date(a.created_at).getTime() : 0;
        const timeB = b.created_at ? new Date(b.created_at).getTime() : 0;
        return timeA - timeB;
    });
    const groups = {};
    sorted.forEach((message)=>{
        try {
            const dateObj = new Date(message.created_at);
            const dateKey = isNaN(dateObj.getTime()) ? "Recent" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isToday$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isToday"])(dateObj) ? "Today" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isYesterday$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isYesterday"])(dateObj) ? "Yesterday" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(dateObj, "MMM d, yyyy");
            if (!groups[dateKey]) groups[dateKey] = [];
            groups[dateKey].push(message);
        } catch  {
            const fallbackKey = "Recent";
            if (!groups[fallbackKey]) groups[fallbackKey] = [];
            groups[fallbackKey].push(message);
        }
    });
    return groups;
}
}),
"[project]/src/app/admin/chat/hooks/useConversationMessages.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useConversationMessages",
    ()=>useConversationMessages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$chat$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/chat.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$chatDateUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/chat/utils/chatDateUtils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function useConversationMessages({ token, selectedConversationId, isAdmin }) {
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const prevMessageCountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const { data: messagesData, isLoading: isLoadingMessages, refetch: refetchMessages, isRefetching: isRefetchingMessages, fetchNextPage: fetchNextMessagesPage, hasNextPage: hasNextMessagesPage, isFetchingNextPage: isFetchingNextMessagesPage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInfiniteQuery"])({
        queryKey: [
            "supportMessages",
            selectedConversationId,
            token,
            isAdmin
        ],
        queryFn: ({ pageParam = undefined, signal })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$chat$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchSupportConversationMessages"])(selectedConversationId, token || "", pageParam, isAdmin, signal),
        getNextPageParam: (lastPage)=>lastPage.next_cursor || undefined,
        enabled: !!selectedConversationId && !!token,
        initialPageParam: undefined,
        staleTime: 0,
        gcTime: 30 * 60 * 1000,
        refetchOnWindowFocus: true,
        refetchOnMount: true,
        refetchOnReconnect: true,
        refetchInterval: !!selectedConversationId && !!token ? 8000 : false,
        refetchIntervalInBackground: false
    });
    const messages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const raw = messagesData?.pages.flatMap((page)=>page.data) || [];
        const seen = new Set();
        const deduplicated = raw.filter((m)=>{
            const id = m.id ?? m.message_id;
            if (id === undefined || id === null) return true;
            if (seen.has(id)) return false;
            seen.add(id);
            return true;
        });
        return deduplicated.sort((a, b)=>{
            const timeA = a.created_at ? new Date(a.created_at).getTime() : 0;
            const timeB = b.created_at ? new Date(b.created_at).getTime() : 0;
            return timeA - timeB;
        });
    }, [
        messagesData
    ]);
    const messageGroups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$chatDateUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["groupMessagesByDate"])(messages), [
        messages
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        prevMessageCountRef.current = 0;
    }, [
        selectedConversationId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!messagesEndRef.current) return;
        const isInitialLoad = prevMessageCountRef.current === 0 && messages.length > 0;
        const hasNewMessage = messages.length > prevMessageCountRef.current;
        prevMessageCountRef.current = messages.length;
        if (hasNewMessage || isInitialLoad) {
            setTimeout(()=>{
                messagesEndRef.current?.scrollIntoView({
                    behavior: isInitialLoad ? "instant" : "smooth"
                });
            }, 50);
        }
    }, [
        messages
    ]);
    return {
        messages,
        messageGroups,
        isLoadingMessages,
        refetchMessages,
        isRefetchingMessages,
        fetchNextMessagesPage,
        hasNextMessagesPage,
        isFetchingNextMessagesPage,
        messagesEndRef
    };
}
}),
"[project]/src/app/admin/chat/utils/localAttachmentCache.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fileToDataUrl",
    ()=>fileToDataUrl,
    "getLocalBlobUrl",
    ()=>getLocalBlobUrl,
    "storeLocalBlobUrl",
    ()=>storeLocalBlobUrl
]);
const localBlobMap = new Map();
const STORAGE_PREFIX = "chat_media_cache_";
function storeLocalBlobUrl(key, blobUrl) {
    if (!key || !blobUrl) return;
    const strKey = String(key);
    localBlobMap.set(strKey, blobUrl);
    try {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    } catch  {}
}
function getLocalBlobUrl(key) {
    if (!key) return null;
    const strKey = String(key);
    const inMemory = localBlobMap.get(strKey);
    if (inMemory) return inMemory;
    try {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    } catch  {}
    return null;
}
async function fileToDataUrl(file) {
    return new Promise((resolve)=>{
        const reader = new FileReader();
        reader.onload = ()=>resolve(reader.result);
        reader.onerror = ()=>resolve("");
        reader.readAsDataURL(file);
    });
}
}),
"[project]/src/app/admin/chat/hooks/useChatMutations.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useChatMutations",
    ()=>useChatMutations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$chat$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/chat.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$localAttachmentCache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/chat/utils/localAttachmentCache.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$chatReadPersistence$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/chat/utils/chatReadPersistence.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function useChatMutations({ token, isAdmin, selectedConversationId, setSelectedConversationId, debouncedSearch, statusFilter, queryClient, refetchConversations }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [messageInput, setMessageInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [attachment, setAttachment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isNewConversationModalOpen, setIsNewConversationModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMarkingAsRead, setIsMarkingAsRead] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isReleasing, setIsReleasing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const createConversationMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: (data)=>{
            if (!token) throw new Error("Missing authentication token");
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$chat$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSupportConversation"])(data, token);
        },
        onSuccess: (newConv)=>{
            const convId = newConv.id ?? newConv.conversation_id;
            queryClient.setQueriesData({
                queryKey: [
                    "supportConversations"
                ]
            }, (old)=>{
                if (!old || !old.pages || old.pages.length === 0) return old;
                const firstPage = old.pages[0];
                const exists = firstPage.data.some((c)=>(c.id ?? c.conversation_id) === convId);
                if (exists) return old;
                return {
                    ...old,
                    pages: [
                        {
                            ...firstPage,
                            data: [
                                newConv,
                                ...firstPage.data
                            ]
                        },
                        ...old.pages.slice(1)
                    ]
                };
            });
            if (convId) {
                setSelectedConversationId(convId);
                queryClient.invalidateQueries({
                    queryKey: [
                        "supportMessages",
                        convId,
                        token,
                        isAdmin
                    ]
                });
            }
            refetchConversations();
            setIsNewConversationModalOpen(false);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(t("chat.conversationCreated"));
        },
        onError: (error)=>{
            const msg = error?.response?.data?.message || error?.response?.data?.errors?.body?.[0] || error?.response?.data?.errors?.attachment?.[0] || error?.message || t("chat.createFailed");
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(msg);
        }
    });
    const sendMessageMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: (data)=>{
            if (!selectedConversationId || !token) {
                throw new Error("Missing conversation or token");
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$chat$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sendSupportMessage"])(selectedConversationId, {
                body: data.body,
                attachment: data.attachment
            }, token, isAdmin);
        },
        onSuccess: (sentMessage, variables)=>{
            const msgId = sentMessage?.id ?? sentMessage?.message_id;
            if (variables.attachment) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$localAttachmentCache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fileToDataUrl"])(variables.attachment).then((dataUrl)=>{
                    if (dataUrl) {
                        if (msgId) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$localAttachmentCache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storeLocalBlobUrl"])(msgId, dataUrl);
                        if (sentMessage?.attachment_url) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$localAttachmentCache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storeLocalBlobUrl"])(sentMessage.attachment_url, dataUrl);
                        if (sentMessage?.file_url) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$localAttachmentCache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storeLocalBlobUrl"])(sentMessage.file_url, dataUrl);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$localAttachmentCache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storeLocalBlobUrl"])(variables.attachment.name, dataUrl);
                    }
                });
            }
            if (variables._localBlobUrl) {
                if (msgId) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$localAttachmentCache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storeLocalBlobUrl"])(msgId, variables._localBlobUrl);
                if (sentMessage?.attachment_url) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$localAttachmentCache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storeLocalBlobUrl"])(sentMessage.attachment_url, variables._localBlobUrl);
                if (sentMessage?.file_url) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$localAttachmentCache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storeLocalBlobUrl"])(sentMessage.file_url, variables._localBlobUrl);
            }
            queryClient.setQueriesData({
                predicate: (query)=>{
                    const key = query.queryKey;
                    return Array.isArray(key) && key[0] === "supportMessages" && String(key[1]) === String(selectedConversationId);
                }
            }, (old)=>{
                if (!old || !old.pages || old.pages.length === 0) return old;
                const newMsg = {
                    ...sentMessage,
                    created_at: sentMessage.created_at || new Date().toISOString(),
                    attachment_url: variables._localBlobUrl || sentMessage.attachment_url || null,
                    file_name: variables.attachment?.name || sentMessage.file_name || null,
                    file_type: variables.attachment?.type || sentMessage.file_type || null
                };
                const lastPageIndex = old.pages.length - 1;
                const lastPage = old.pages[lastPageIndex];
                const newPages = [
                    ...old.pages
                ];
                newPages[lastPageIndex] = {
                    ...lastPage,
                    data: [
                        ...lastPage.data,
                        newMsg
                    ]
                };
                return {
                    ...old,
                    pages: newPages
                };
            });
            queryClient.setQueriesData({
                queryKey: [
                    "supportConversations"
                ]
            }, (old)=>{
                if (!old || !old.pages) return old;
                return {
                    ...old,
                    pages: old.pages.map((page)=>({
                            ...page,
                            data: page.data.map((conv)=>{
                                const convId = conv.id ?? conv.conversation_id;
                                if (String(convId) === String(selectedConversationId)) {
                                    return {
                                        ...conv,
                                        last_message_at: sentMessage.created_at || new Date().toISOString(),
                                        last_message: sentMessage
                                    };
                                }
                                return conv;
                            })
                        }))
                };
            });
            setTimeout(()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "supportConversations"
                    ]
                });
                queryClient.invalidateQueries({
                    predicate: (query)=>{
                        const key = query.queryKey;
                        return Array.isArray(key) && key[0] === "supportMessages" && String(key[1]) === String(selectedConversationId);
                    }
                });
            }, 1000);
            setMessageInput("");
            setAttachment(null);
        },
        onError: (error)=>{
            const msg = error?.response?.data?.message || error?.response?.data?.errors?.body?.[0] || error?.response?.data?.errors?.attachment?.[0] || error?.message || t("chat.sendFailed");
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(msg);
        }
    });
    const updateConversationReadState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((convIdToUpdate)=>{
        if (!convIdToUpdate) return;
        const convIdStr = String(convIdToUpdate);
        // Persist to localStorage so refreshing never shows a stale unread count
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$chatReadPersistence$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["recordConversationAsRead"])(convIdToUpdate);
        // 1. Reset unread counts in conversations query cache
        queryClient.setQueriesData({
            queryKey: [
                "supportConversations"
            ]
        }, (old)=>{
            if (!old) return old;
            const updateConv = (c)=>{
                const cId = c.id ?? c.conversation_id;
                if (String(cId) === convIdStr) {
                    return {
                        ...c,
                        unread_for_user: 0,
                        unread_for_admin: 0,
                        unread_count: 0,
                        unread: 0,
                        last_message: c.last_message ? {
                            ...c.last_message,
                            is_read: true,
                            read_at: c.last_message.read_at || new Date().toISOString()
                        } : c.last_message
                    };
                }
                return c;
            };
            if (old.pages && Array.isArray(old.pages)) {
                return {
                    ...old,
                    pages: old.pages.map((page)=>({
                            ...page,
                            data: Array.isArray(page.data) ? page.data.map(updateConv) : page.data
                        }))
                };
            }
            if (old.data && Array.isArray(old.data)) {
                return {
                    ...old,
                    data: old.data.map(updateConv)
                };
            }
            return old;
        });
        // 2. Set double checkmarks (is_read = true) on all messages in messages query cache
        queryClient.setQueriesData({
            predicate: (query)=>{
                const key = query.queryKey;
                return Array.isArray(key) && key[0] === "supportMessages" && String(key[1]) === convIdStr;
            }
        }, (old)=>{
            if (!old) return old;
            const now = new Date().toISOString();
            const updateMsg = (m)=>({
                    ...m,
                    is_read: true,
                    read_at: m.read_at || now,
                    is_seen: true,
                    read: true
                });
            if (old.pages && Array.isArray(old.pages)) {
                return {
                    ...old,
                    pages: old.pages.map((page)=>({
                            ...page,
                            data: Array.isArray(page.data) ? page.data.map(updateMsg) : page.data
                        }))
                };
            }
            if (Array.isArray(old)) {
                return old.map(updateMsg);
            }
            if (old.data && Array.isArray(old.data)) {
                return {
                    ...old,
                    data: old.data.map(updateMsg)
                };
            }
            return old;
        });
    }, [
        queryClient
    ]);
    const selectedConversationIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(selectedConversationId);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        selectedConversationIdRef.current = selectedConversationId;
    }, [
        selectedConversationId
    ]);
    const handleConversationSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((conversationId)=>{
        // Selecting a different conversation changes `selectedConversationId`, and the
        // effect in useSupportChat then updates the read state and calls the mark-as-read
        // API. Only do it here when the selection does not change, to avoid a duplicate request.
        const selectionChanges = !Object.is(conversationId, selectedConversationIdRef.current);
        setSelectedConversationId(conversationId);
        if (selectionChanges) return;
        updateConversationReadState(conversationId);
        if (token) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$chat$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markSupportConversationAsRead"])(conversationId, token, isAdmin).catch(()=>{});
        }
    }, [
        setSelectedConversationId,
        updateConversationReadState,
        token,
        isAdmin
    ]);
    const handleManualMarkAsRead = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!selectedConversationId || !token) return;
        try {
            setIsMarkingAsRead(true);
            updateConversationReadState(selectedConversationId);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$chat$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markSupportConversationAsRead"])(selectedConversationId, token, isAdmin);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(t("chat.markedAsRead"));
        } catch (error) {
            console.error("Error marking as read:", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(t("chat.markAsReadFailed"));
        } finally{
            setIsMarkingAsRead(false);
        }
    }, [
        selectedConversationId,
        token,
        t,
        updateConversationReadState,
        isAdmin
    ]);
    const handleReleaseConversation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!selectedConversationId || !token) return;
        try {
            setIsReleasing(true);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$chat$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["releaseSupportConversation"])(selectedConversationId, token);
            queryClient.invalidateQueries({
                queryKey: [
                    "supportConversations"
                ]
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(t("chat.conversationReleased"));
        } catch (error) {
            console.error("Error releasing conversation:", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(t("chat.releaseFailed"));
        } finally{
            setIsReleasing(false);
        }
    }, [
        selectedConversationId,
        token,
        queryClient,
        t
    ]);
    const handleSendMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        e.preventDefault();
        const trimmed = messageInput.trim();
        if (!trimmed && !attachment) return;
        if (!selectedConversationId) return;
        const localBlobUrl = attachment ? URL.createObjectURL(attachment) : undefined;
        sendMessageMutation.mutate({
            body: trimmed || undefined,
            attachment: attachment,
            _localBlobUrl: localBlobUrl
        });
    }, [
        messageInput,
        attachment,
        selectedConversationId,
        sendMessageMutation
    ]);
    return {
        messageInput,
        setMessageInput,
        attachment,
        setAttachment,
        handleSendMessage,
        isSendingMessage: sendMessageMutation.isPending,
        isNewConversationModalOpen,
        setIsNewConversationModalOpen,
        handleCreateConversation: (data)=>createConversationMutation.mutate(data),
        isCreatingConversation: createConversationMutation.isPending,
        handleConversationSelect,
        handleManualMarkAsRead,
        isMarkingAsRead,
        handleReleaseConversation,
        isReleasing,
        updateConversationReadState
    };
}
}),
"[project]/src/app/admin/chat/hooks/useSupportChat.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSupportChat",
    ()=>useSupportChat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$chat$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/chat.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$hooks$2f$useChatRealtime$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/chat/hooks/useChatRealtime.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$hooks$2f$useConversationsList$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/chat/hooks/useConversationsList.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$hooks$2f$useConversationMessages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/chat/hooks/useConversationMessages.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$hooks$2f$useChatMutations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/chat/hooks/useChatMutations.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$chatDateUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/chat/utils/chatDateUtils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$chatReadPersistence$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/chat/utils/chatReadPersistence.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
const markedAsReadConvIds = new Set();
function useSupportChat() {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const initialConversationId = searchParams.get("conversationId");
    const [selectedConversationId, setSelectedConversationId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialConversationId || null);
    const currentUserId = session?.user?.id;
    const token = session?.user?.accessToken;
    const userType = session?.user?.user_type?.toLowerCase() || session?.user?.role_name?.toLowerCase();
    const roleId = session?.user?.role_id;
    const isDeveloperRole = userType === "developer" || roleId === 3;
    const isExpertRole = userType === "expert" || roleId === 6;
    const isAdmin = userType === "admin" || !isDeveloperRole && !isExpertRole;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, [
        selectedConversationId
    ]);
    const { statusFilter, setStatusFilter, searchQuery, setSearchQuery, debouncedSearch, conversations, filteredConversations, counts, isLoadingConversations, refetchConversations, isRefetchingConversations, fetchNextConversationsPage, hasNextConversationsPage, isFetchingNextConversationsPage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$hooks$2f$useConversationsList$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConversationsList"])({
        token,
        isAdmin,
        selectedConversationId
    });
    const { messages, messageGroups, isLoadingMessages, refetchMessages, isRefetchingMessages, fetchNextMessagesPage, hasNextMessagesPage, isFetchingNextMessagesPage, messagesEndRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$hooks$2f$useConversationMessages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConversationMessages"])({
        token,
        selectedConversationId,
        isAdmin
    });
    const { messageInput, setMessageInput, attachment, setAttachment, handleSendMessage, isSendingMessage, isNewConversationModalOpen, setIsNewConversationModalOpen, handleCreateConversation, isCreatingConversation, handleConversationSelect, handleManualMarkAsRead, isMarkingAsRead, handleReleaseConversation, isReleasing, updateConversationReadState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$hooks$2f$useChatMutations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChatMutations"])({
        token,
        isAdmin,
        selectedConversationId,
        setSelectedConversationId,
        debouncedSearch,
        statusFilter,
        queryClient,
        refetchConversations
    });
    const markedAsReadSetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(markedAsReadConvIds);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const markedSet = markedAsReadSetRef.current;
        if (markedSet.size === 0) return;
        let needsUpdate = false;
        conversations.forEach((c)=>{
            const cId = String(c.id ?? c.conversation_id);
            if (!markedSet.has(cId)) return;
            const unread = Number(c.unread_for_admin || 0) + Number(c.unread_for_user || 0) + Number(c.unread_count || 0);
            if (unread > 0) needsUpdate = true;
        });
        if (needsUpdate) {
            markedSet.forEach((convId)=>updateConversationReadState(convId));
        }
    }, [
        conversations
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!selectedConversationId || !token) return;
        const convIdStr = String(selectedConversationId);
        markedAsReadConvIds.add(convIdStr);
        updateConversationReadState(selectedConversationId);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$chat$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markSupportConversationAsRead"])(selectedConversationId, token, isAdmin).catch((err)=>{
            console.warn("Auto mark as read error:", err);
        });
    }, [
        selectedConversationId,
        token,
        isAdmin,
        updateConversationReadState
    ]);
    const handleMarkAsReadWithTracking = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (selectedConversationId) {
            markedAsReadConvIds.add(String(selectedConversationId));
        }
        return handleManualMarkAsRead();
    }, [
        selectedConversationId,
        handleManualMarkAsRead
    ]);
    const handleNewMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((msg)=>{
        const senderName = msg?.sender?.name || msg?.user?.name || (msg?.sender?.first_name ? `${msg.sender.first_name} ${msg.sender.last_name || ""}`.trim() : null) || t("chat.supportAgent");
        const preview = msg?.body || msg?.message_text || (msg?.attachment_url ? `📎 ${t("chat.attachment")}` : null) || "...";
        const trimmedPreview = preview.length > 60 ? preview.slice(0, 57) + "..." : preview;
        const convId = msg?.conversation_id;
        const conv = conversations.find((c)=>String(c.id ?? c.conversation_id) === String(convId));
        const chatTitle = conv?.subject || conv?.title || conv?.user?.name || (convId ? `${t("chat.conversation")} #${convId}` : "");
        const newMsgPrefix = t("chat.newMessage");
        const openLabel = t("chat.openChat");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$chatReadPersistence$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playNotificationSound"])();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].info(chatTitle ? `💬 ${newMsgPrefix} ${chatTitle}` : `💬 ${senderName}`, {
            description: `${senderName}: ${trimmedPreview}`,
            duration: 5000,
            position: "bottom-right",
            action: convId ? {
                label: openLabel,
                onClick: ()=>handleConversationSelect(convId)
            } : undefined
        });
    }, [
        t,
        conversations,
        handleConversationSelect
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$hooks$2f$useChatRealtime$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChatRealtime"])({
        token,
        currentUserId,
        isAdmin,
        selectedConversationId,
        queryClient,
        onNewMessage: handleNewMessage
    });
    const activeConversation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return conversations.find((c)=>String(c.id ?? c.conversation_id) === String(selectedConversationId));
    }, [
        conversations,
        selectedConversationId
    ]);
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
        formatTime: (dateString)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$chatDateUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatChatTime"])(dateString, t("chat.yesterdayAt"))
    };
}
}),
"[project]/src/app/admin/chat/components/ChatTabs.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatTabs",
    ()=>ChatTabs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/inbox.js [app-ssr] (ecmascript) <export default as Inbox>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function ChatTabs({ statusFilter, setStatusFilter, counts, onCreateConversation, isCreatingConversation }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const tabs = [
        {
            key: "all",
            label: t("chat.all"),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__["Inbox"],
            count: counts?.all
        },
        {
            key: "open",
            label: t("chat.open"),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
            count: counts?.open
        },
        {
            key: "pending",
            label: t("chat.pending"),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
            count: counts?.pending
        },
        {
            key: "closed",
            label: t("chat.closed"),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"],
            count: counts?.closed
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-6 pt-4 pb-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-9 w-9 rounded-lg bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 border border-teal-100 dark:border-teal-900/40 flex items-center justify-center shadow-xs",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/chat/components/ChatTabs.tsx",
                                        lineNumber: 44,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/chat/components/ChatTabs.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-xl font-bold text-gray-900 dark:text-white",
                                            children: t("chat.title")
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/chat/components/ChatTabs.tsx",
                                            lineNumber: 47,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500 dark:text-gray-400",
                                            children: t("chat.chatsTitle")
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/chat/components/ChatTabs.tsx",
                                            lineNumber: 48,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/chat/components/ChatTabs.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/chat/components/ChatTabs.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        onCreateConversation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: onCreateConversation,
                            disabled: isCreatingConversation,
                            className: "bg-teal-600 hover:bg-teal-700 text-white gap-2 h-9 text-xs font-semibold shadow-xs cursor-pointer",
                            children: [
                                isCreatingConversation ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "h-3.5 w-3.5 animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/chat/components/ChatTabs.tsx",
                                    lineNumber: 59,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/chat/components/ChatTabs.tsx",
                                    lineNumber: 61,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: isCreatingConversation ? t("chat.creatingConversation") : t("chat.newConversation")
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/chat/components/ChatTabs.tsx",
                                    lineNumber: 63,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/chat/components/ChatTabs.tsx",
                            lineNumber: 53,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/chat/components/ChatTabs.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-4 border-b border-gray-100 dark:border-gray-800",
                    children: tabs.map((tab)=>{
                        const Icon = tab.icon;
                        const isActive = statusFilter === tab.key;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setStatusFilter(tab.key),
                            className: `pb-3 px-1.5 relative flex items-center gap-2 text-sm font-medium transition-colors cursor-pointer ${isActive ? "text-teal-600 dark:text-teal-400 font-semibold" : "text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/chat/components/ChatTabs.tsx",
                                    lineNumber: 85,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: tab.label
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/chat/components/ChatTabs.tsx",
                                    lineNumber: 86,
                                    columnNumber: 17
                                }, this),
                                tab.count !== undefined && tab.count > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `text-xs px-2 py-0.5 rounded-full font-semibold ${isActive ? "bg-teal-100 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300" : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"}`,
                                    children: tab.count
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/chat/components/ChatTabs.tsx",
                                    lineNumber: 88,
                                    columnNumber: 19
                                }, this),
                                isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-0 left-0 right-0 h-0.5 bg-teal-600 dark:bg-teal-500 rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/chat/components/ChatTabs.tsx",
                                    lineNumber: 97,
                                    columnNumber: 30
                                }, this)
                            ]
                        }, tab.key, true, {
                            fileName: "[project]/src/app/admin/chat/components/ChatTabs.tsx",
                            lineNumber: 77,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/chat/components/ChatTabs.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/chat/components/ChatTabs.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/admin/chat/components/ChatTabs.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/admin/chat/components/ChatContactItem.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatContactItem",
    ()=>ChatContactItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/paperclip.js [app-ssr] (ecmascript) <export default as Paperclip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$hooks$2f$useConversationsList$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/chat/hooks/useConversationsList.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const ChatContactItem = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function ChatContactItem({ conversation, isSelected, onSelect, formatTime }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const convId = conversation.id ?? conversation.conversation_id;
    const rawUnread = conversation.unread_for_user ?? conversation.unread_for_admin ?? conversation.unread_count ?? conversation.unread ?? 0;
    const unreadCount = isSelected ? 0 : Number(rawUnread || 0);
    const timeStr = formatTime(conversation.last_message_at || conversation.updated_at || conversation.created_at);
    const getStatusBadge = (status)=>{
        const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$hooks$2f$useConversationsList$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeConversationStatus"])(status);
        if (s === "open") {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "h-1.5 w-1.5 rounded-full bg-emerald-500"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/chat/components/ChatContactItem.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this),
                    t("chat.open")
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/chat/components/ChatContactItem.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, this);
        }
        if (s === "pending") {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                        className: "h-2.5 w-2.5"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/chat/components/ChatContactItem.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this),
                    t("chat.pending")
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/chat/components/ChatContactItem.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                    className: "h-2.5 w-2.5"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/chat/components/ChatContactItem.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this),
                t("chat.closed")
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/chat/components/ChatContactItem.tsx",
            lineNumber: 53,
            columnNumber: 7
        }, this);
    };
    const getLastMessageText = ()=>{
        const msg = conversation.last_message || conversation.latest_message;
        if (!msg) {
            if (conversation.subject) return conversation.subject;
            return t("chat.noMessagesYet");
        }
        if (typeof msg === "string") return msg;
        if (msg.body) return msg.body;
        if (msg.message_text) return msg.message_text;
        if (msg.attachment || msg.attachment_url) {
            return "📎 " + t("chat.attachment");
        }
        return conversation.subject || t("chat.noMessagesYet");
    };
    const userName = conversation.user?.name || (conversation.user?.first_name ? `${conversation.user.first_name} ${conversation.user.last_name || ""}`.trim() : null);
    const title = userName || conversation.subject || conversation.title || `${t("chat.conversation")} #${convId}`;
    const lastMsg = getLastMessageText();
    const avatarLetter = (userName || conversation.user?.email || "")[0]?.toUpperCase() || `#${convId}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: ()=>onSelect(convId),
        className: `w-full p-3.5 flex items-start gap-3 transition-all text-start cursor-pointer border-b border-gray-100 dark:border-gray-800/70 ${isSelected ? "bg-teal-50/80 dark:bg-teal-950/30 border-s-3 border-teal-600 text-gray-900 dark:text-white shadow-2xs" : "hover:bg-gray-50/80 dark:hover:bg-gray-800/50 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex-shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `h-10 w-10 rounded-xl flex items-center justify-center text-xs font-bold transition-colors ${isSelected ? "bg-teal-600 text-white shadow-xs" : "bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300 border border-teal-100 dark:border-teal-900/40"}`,
                        children: avatarLetter
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/chat/components/ChatContactItem.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute -top-1 -end-1 h-4 min-w-4 px-1 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white dark:ring-gray-900 shadow-xs animate-in zoom-in-50",
                        children: unreadCount
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/chat/components/ChatContactItem.tsx",
                        lineNumber: 109,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/chat/components/ChatContactItem.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between gap-1 mb-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: `text-sm truncate ${isSelected ? "font-bold text-gray-900 dark:text-white" : "font-semibold text-gray-800 dark:text-gray-200"}`,
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/chat/components/ChatContactItem.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this),
                            timeStr && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px] text-gray-400 dark:text-gray-500 flex-shrink-0 font-normal",
                                children: timeStr
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/chat/components/ChatContactItem.tsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/chat/components/ChatContactItem.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500 dark:text-gray-400 truncate flex-1 flex items-center gap-1",
                                children: [
                                    typeof conversation.last_message === "object" && (conversation.last_message?.attachment || conversation.last_message?.attachment_url) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__["Paperclip"], {
                                        className: "h-3 w-3 flex-shrink-0 text-teal-600 dark:text-teal-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/chat/components/ChatContactItem.tsx",
                                        lineNumber: 137,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "truncate",
                                        children: lastMsg
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/chat/components/ChatContactItem.tsx",
                                        lineNumber: 139,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/chat/components/ChatContactItem.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-shrink-0",
                                children: getStatusBadge(conversation.status)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/chat/components/ChatContactItem.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/chat/components/ChatContactItem.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/chat/components/ChatContactItem.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/chat/components/ChatContactItem.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
});
}),
"[project]/src/app/admin/chat/components/ChatSkeletons.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatContactListSkeleton",
    ()=>ChatContactListSkeleton,
    "ChatMessageListSkeleton",
    ()=>ChatMessageListSkeleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function ChatContactListSkeleton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "divide-y divide-gray-100 dark:divide-gray-800/70 animate-pulse",
        children: [
            1,
            2,
            3,
            4,
            5,
            6
        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3.5 flex items-start gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-10 w-10 rounded-xl bg-gray-200 dark:bg-gray-800 flex-shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
                        lineNumber: 8,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-0 space-y-2 py-0.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-3.5 bg-gray-200 dark:bg-gray-800 rounded w-24"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
                                        lineNumber: 11,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-3 bg-gray-200 dark:bg-gray-800 rounded w-10"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
                                        lineNumber: 12,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
                                lineNumber: 10,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-3 bg-gray-200 dark:bg-gray-800 rounded w-36"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
                                        lineNumber: 15,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-4 bg-gray-200 dark:bg-gray-800 rounded-full w-12"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
                                        lineNumber: 16,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
                                lineNumber: 14,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
                        lineNumber: 9,
                        columnNumber: 11
                    }, this)
                ]
            }, i, true, {
                fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
                lineNumber: 7,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
function ChatMessageListSkeleton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 p-4 sm:p-6 space-y-6 animate-pulse overflow-hidden bg-gray-50/50 dark:bg-gray-950/60",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-5 bg-gray-200 dark:bg-gray-800 rounded-full w-20"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-start",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1.5 max-w-[75%] sm:max-w-md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-3 bg-gray-200 dark:bg-gray-800 rounded w-16 px-1"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-14 bg-gray-200 dark:bg-gray-800 rounded-2xl rounded-es-xs w-48 sm:w-64"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1.5 max-w-[75%] sm:max-w-md flex flex-col items-end",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-16 bg-teal-200/50 dark:bg-teal-950/50 rounded-2xl rounded-ee-xs w-56 sm:w-72"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-2.5 bg-gray-200 dark:bg-gray-800 rounded w-12"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-start",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1.5 max-w-[75%] sm:max-w-md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-3 bg-gray-200 dark:bg-gray-800 rounded w-20 px-1"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-10 bg-gray-200 dark:bg-gray-800 rounded-2xl rounded-es-xs w-36 sm:w-52"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1.5 max-w-[75%] sm:max-w-md flex flex-col items-end",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-32 bg-teal-200/50 dark:bg-teal-950/50 rounded-2xl rounded-ee-xs w-60 sm:w-80"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-2.5 bg-gray-200 dark:bg-gray-800 rounded w-14"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/admin/chat/components/ChatContactList.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatContactList",
    ()=>ChatContactList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$components$2f$ChatContactItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/chat/components/ChatContactItem.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$components$2f$ChatSkeletons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/chat/components/ChatSkeletons.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function ChatContactList({ searchQuery, setSearchQuery, isLoading, conversations, selectedConversationId, onConversationSelect, formatTime, onCreateConversation, isCreatingConversation, fetchNextPage, hasNextPage, isFetchingNextPage, className = "" }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `w-full md:w-80 lg:w-96 border-e border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex flex-col h-full flex-shrink-0 ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 border-b border-gray-200 dark:border-gray-800 space-y-2.5",
                children: [
                    onCreateConversation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: onCreateConversation,
                        disabled: isCreatingConversation,
                        className: "w-full bg-teal-600 hover:bg-teal-700 text-white gap-2 h-9 text-xs font-semibold shadow-xs cursor-pointer",
                        children: [
                            isCreatingConversation ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "h-3.5 w-3.5 animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/chat/components/ChatContactList.tsx",
                                lineNumber: 56,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                className: "h-3.5 w-3.5"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/chat/components/ChatContactList.tsx",
                                lineNumber: 58,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: isCreatingConversation ? t("chat.creatingConversation") : t("chat.newConversation")
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/chat/components/ChatContactList.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/chat/components/ChatContactList.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/chat/components/ChatContactList.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                placeholder: t("chat.searchChats"),
                                value: searchQuery,
                                onChange: (e)=>setSearchQuery(e.target.value),
                                className: "ps-9 pe-8 bg-gray-50/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 text-xs sm:text-sm h-9 focus-visible:ring-teal-500 transition-colors"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/chat/components/ChatContactList.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSearchQuery(""),
                                className: "absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/chat/components/ChatContactList.tsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/chat/components/ChatContactList.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/chat/components/ChatContactList.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/chat/components/ChatContactList.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto divide-y divide-gray-100 dark:divide-gray-800/70",
                children: [
                    isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$components$2f$ChatSkeletons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChatContactListSkeleton"], {}, void 0, false, {
                        fileName: "[project]/src/app/admin/chat/components/ChatContactList.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this) : conversations.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-8 text-center text-gray-400 dark:text-gray-500 flex flex-col items-center justify-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-10 w-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400 dark:text-gray-500",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/chat/components/ChatContactList.tsx",
                                    lineNumber: 93,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/chat/components/ChatContactList.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400",
                                children: t("chat.noContactsFound")
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/chat/components/ChatContactList.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this),
                            onCreateConversation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "sm",
                                onClick: onCreateConversation,
                                disabled: isCreatingConversation,
                                className: "text-xs gap-1.5 border-teal-600 text-teal-700 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/40",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/chat/components/ChatContactList.tsx",
                                        lineNumber: 106,
                                        columnNumber: 17
                                    }, this),
                                    t("chat.newConversation")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/chat/components/ChatContactList.tsx",
                                lineNumber: 99,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/chat/components/ChatContactList.tsx",
                        lineNumber: 91,
                        columnNumber: 11
                    }, this) : conversations.map((conv)=>{
                        const convId = conv.id ?? conv.conversation_id;
                        const isSelected = String(selectedConversationId) === String(convId);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$components$2f$ChatContactItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChatContactItem"], {
                            conversation: conv,
                            isSelected: isSelected,
                            onSelect: onConversationSelect,
                            formatTime: formatTime
                        }, String(convId), false, {
                            fileName: "[project]/src/app/admin/chat/components/ChatContactList.tsx",
                            lineNumber: 117,
                            columnNumber: 15
                        }, this);
                    }),
                    hasNextPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 pb-6 flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            size: "sm",
                            onClick: ()=>fetchNextPage && fetchNextPage(),
                            disabled: isFetchingNextPage,
                            className: "text-xs bg-white dark:bg-gray-800 text-teal-600 dark:text-teal-400 border-teal-200 dark:border-teal-800 hover:bg-teal-50 dark:hover:bg-teal-900/50",
                            children: isFetchingNextPage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "h-3.5 w-3.5 animate-spin me-2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/chat/components/ChatContactList.tsx",
                                        lineNumber: 139,
                                        columnNumber: 19
                                    }, this),
                                    t("chat.loading")
                                ]
                            }, void 0, true) : t("chat.loadMore")
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/chat/components/ChatContactList.tsx",
                            lineNumber: 130,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/chat/components/ChatContactList.tsx",
                        lineNumber: 129,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/chat/components/ChatContactList.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/chat/components/ChatContactList.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/admin/chat/components/ChatHeader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatHeader",
    ()=>ChatHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-cw.js [app-ssr] (ecmascript) <export default as RotateCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Headphones$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/headphones.js [app-ssr] (ecmascript) <export default as Headphones>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check-check.js [app-ssr] (ecmascript) <export default as CheckCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-alert.js [app-ssr] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$hooks$2f$useConversationsList$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/chat/hooks/useConversationsList.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function ChatHeader({ conversation, onRefresh, isRefreshing, onMarkAsRead, isMarkingAsRead, onRelease, isReleasing, onBack }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const convId = conversation.id ?? conversation.conversation_id;
    const status = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$hooks$2f$useConversationsList$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeConversationStatus"])(conversation.status);
    const getStatusBadge = ()=>{
        if (status === "open") {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this),
                    t("chat.open")
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
                lineNumber: 45,
                columnNumber: 9
            }, this);
        }
        if (status === "pending") {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                        className: "h-3 w-3"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this),
                    t("chat.pending")
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                    className: "h-3 w-3"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this),
                t("chat.closed")
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
            lineNumber: 60,
            columnNumber: 7
        }, this);
    };
    const userName = conversation.user?.name || (conversation.user?.first_name ? `${conversation.user.first_name} ${conversation.user.last_name || ""}`.trim() : null);
    const userEmail = conversation.user?.email;
    const title = userName || conversation.subject || conversation.title || `${t("chat.conversation")} #${convId}`;
    const avatarLetter = (userName || userEmail || "")[0]?.toUpperCase();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-3 sm:px-5 flex items-center justify-between flex-shrink-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2.5 sm:gap-3 min-w-0",
                children: [
                    onBack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onBack,
                        className: "md:hidden p-1.5 -ms-1 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
                        title: t("chat.back"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                            className: "h-5 w-5 rtl:rotate-180"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
                            lineNumber: 91,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-9 w-9 sm:h-10 sm:w-10 rounded-xl bg-teal-600 text-white flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0 shadow-xs",
                        children: avatarLetter ? avatarLetter : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Headphones$3e$__["Headphones"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
                            lineNumber: 96,
                            columnNumber: 42
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-gray-900 dark:text-white text-xs sm:text-sm truncate max-w-[130px] sm:max-w-xs md:max-w-md",
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this),
                                    getStatusBadge()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-gray-500 dark:text-gray-400 truncate",
                                children: userName && title !== userName ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        userName,
                                        " • #",
                                        convId,
                                        " ",
                                        userEmail ? `• ${userEmail}` : ""
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
                                    lineNumber: 108,
                                    columnNumber: 15
                                }, this) : userEmail ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "#",
                                        convId,
                                        " • ",
                                        userEmail
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
                                    lineNumber: 112,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "#",
                                        convId
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
                                    lineNumber: 116,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1.5 sm:gap-2 flex-shrink-0",
                children: [
                    onRelease && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        size: "sm",
                        onClick: onRelease,
                        disabled: isReleasing,
                        className: "h-8 px-2 sm:px-3 gap-1.5 text-xs text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800/80 bg-amber-50/60 dark:bg-amber-950/40 hover:bg-amber-100 dark:hover:bg-amber-950/80 cursor-pointer shadow-2xs",
                        title: t("chat.release"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                                className: "h-3.5 w-3.5"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
                                lineNumber: 134,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline",
                                children: isReleasing ? t("chat.releasing") : t("chat.release")
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
                                lineNumber: 135,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
                        lineNumber: 126,
                        columnNumber: 11
                    }, this),
                    onMarkAsRead && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        size: "sm",
                        onClick: onMarkAsRead,
                        disabled: isMarkingAsRead,
                        className: "h-8 px-2 sm:px-3 gap-1.5 text-xs text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800/80 bg-teal-50/60 dark:bg-teal-950/40 hover:bg-teal-100 dark:hover:bg-teal-950/80 cursor-pointer shadow-2xs",
                        title: t("chat.markAsRead"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCheck$3e$__["CheckCheck"], {
                                className: `h-3.5 w-3.5 ${isMarkingAsRead ? "animate-spin" : "text-teal-600 dark:text-teal-400"}`
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
                                lineNumber: 150,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline",
                                children: t("chat.markAsRead")
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
                        lineNumber: 142,
                        columnNumber: 11
                    }, this),
                    onRefresh && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        size: "sm",
                        onClick: onRefresh,
                        disabled: isRefreshing,
                        className: "h-8 px-2 sm:px-3 gap-1 text-xs text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer shadow-2xs",
                        title: t("chat.refresh"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCw$3e$__["RotateCw"], {
                                className: `h-3.5 w-3.5 ${isRefreshing ? "animate-spin text-teal-600" : ""}`
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
                                lineNumber: 170,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline",
                                children: t("chat.refresh")
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
                                lineNumber: 175,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
                        lineNumber: 162,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/admin/chat/components/ChatMessageItem.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatMessageItem",
    ()=>ChatMessageItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check-check.js [app-ssr] (ecmascript) <export default as CheckCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zoom-in.js [app-ssr] (ecmascript) <export default as ZoomIn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-ssr] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$localAttachmentCache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/chat/utils/localAttachmentCache.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$chatReadPersistence$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/chat/utils/chatReadPersistence.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/config.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const ChatMessageItem = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function ChatMessageItem({ message, isOwn, formatTime, onPreviewImage }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const text = message.body || message.message_text;
    const isImageFile = (url, name)=>{
        const rawType = (message.file_type || (typeof message.attachment === "object" ? message.attachment?.mime_type : "") || "").toLowerCase();
        if (rawType.startsWith("image/") || rawType.includes("image")) return true;
        const targetUrl = (url || "").toLowerCase();
        if (targetUrl.startsWith("data:image/")) return true;
        const targetName = (name || message.file_name || (typeof message.attachment === "object" ? message.attachment?.file_name : "") || "").toLowerCase();
        const imageExtensions = [
            ".jpg",
            ".jpeg",
            ".png",
            ".webp",
            ".gif",
            ".svg",
            ".bmp",
            ".ico",
            ".avif",
            ".heic"
        ];
        const hasImageExt = imageExtensions.some((ext)=>targetName.endsWith(ext) || targetUrl.includes(ext));
        if (hasImageExt) return true;
        if (targetUrl.startsWith("blob:")) {
            return true;
        }
        return false;
    };
    const getAttachmentUrl = ()=>{
        const msgId = message.id ?? message.message_id;
        const cachedByMsgId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$localAttachmentCache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLocalBlobUrl"])(msgId);
        if (cachedByMsgId) return cachedByMsgId;
        let url = null;
        if (typeof message.attachment === "string") {
            url = message.attachment;
        } else if (typeof message.attachment === "object" && message.attachment) {
            url = message.attachment.url || message.attachment.file_url || message.attachment.original_url || message.attachment.path || message.attachment.file_path || null;
        }
        if (!url && message.attachment_url) url = message.attachment_url;
        if (!url && message.file_url) url = message.file_url;
        if (!url && message.url) url = message.url;
        if (!url && message.photo_url) url = message.photo_url;
        if (!url && message.image_url) url = message.image_url;
        if (!url && message.media_url) url = message.media_url;
        if (!url && typeof message.file === "string") {
            url = message.file;
        } else if (!url && typeof message.file === "object" && message.file) {
            const f = message.file;
            url = f.url || f.file_url || f.path || f.original_url;
        }
        if (!url && typeof message.photo === "string") url = message.photo;
        if (!url && Array.isArray(message.attachments) && message.attachments.length > 0) {
            const first = message.attachments[0];
            url = typeof first === "string" ? first : first?.url || first?.file_url || first?.path || first?.original_url;
        }
        if (!url && Array.isArray(message.media) && message.media.length > 0) {
            const first = message.media[0];
            url = typeof first === "string" ? first : first?.url || first?.original_url || first?.file_url || first?.path;
        }
        const cachedByUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$localAttachmentCache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLocalBlobUrl"])(url);
        if (cachedByUrl) return cachedByUrl;
        const cachedByName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$localAttachmentCache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLocalBlobUrl"])(message.file_name || (typeof message.attachment === "object" ? message.attachment?.file_name : null));
        if (cachedByName) return cachedByName;
        if (url && typeof url === "string") {
            if (url.startsWith("http://") || url.startsWith("https://") || url.startsWith("blob:") || url.startsWith("data:")) {
                return url;
            }
            const cleanPath = url.startsWith("/") ? url : `/${url}`;
            return `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BASE_URL"]}${cleanPath}`;
        }
        return null;
    };
    const getAttachmentName = (url)=>{
        if (typeof message.attachment === "object" && message.attachment?.file_name) {
            return message.attachment.file_name;
        }
        if (message.file_name) return message.file_name;
        if (message.name) return message.name;
        if (url) {
            if (url.startsWith("blob:")) return t("chat.image");
            const cleanUrl = url.split("?")[0];
            const parts = cleanUrl.split("/");
            return parts[parts.length - 1] || "attachment";
        }
        return "attachment";
    };
    const attachmentUrl = getAttachmentUrl();
    const attachmentName = getAttachmentName(attachmentUrl);
    const isImage = attachmentUrl ? isImageFile(attachmentUrl, attachmentName) : false;
    const [hasImageError, setHasImageError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDownloading, setIsDownloading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleDownload = async (e)=>{
        e.preventDefault();
        e.stopPropagation();
        if (!attachmentUrl) return;
        if (attachmentUrl.startsWith("blob:") || attachmentUrl.startsWith("data:")) {
            const link = document.createElement("a");
            link.href = attachmentUrl;
            link.download = attachmentName || "download";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            return;
        }
        try {
            setIsDownloading(true);
            const res = await fetch(attachmentUrl, {
                mode: "cors"
            });
            if (res.ok) {
                const blob = await res.blob();
                const blobUrl = window.URL.createObjectURL(blob);
                const link = document.createElement("a");
                link.href = blobUrl;
                link.download = attachmentName || "download";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                window.URL.revokeObjectURL(blobUrl);
                return;
            }
        } catch  {} finally{
            setIsDownloading(false);
        }
        window.open(attachmentUrl, "_blank", "noopener,noreferrer");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex ${isOwn ? "justify-end" : "justify-start"} group`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[85%] sm:max-w-md md:max-w-lg transition-all",
            children: [
                !isOwn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-1.5 mb-0.5 px-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[11px] font-semibold text-teal-700 dark:text-teal-400",
                            children: message.sender?.name || (message.sender?.first_name ? `${message.sender.first_name} ${message.sender.last_name || ""}`.trim() : null) || t("chat.supportAgent")
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/chat/components/ChatMessageItem.tsx",
                            lineNumber: 188,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[10px] text-gray-400 dark:text-gray-500 font-normal",
                            children: formatTime(message.created_at)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/chat/components/ChatMessageItem.tsx",
                            lineNumber: 195,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/chat/components/ChatMessageItem.tsx",
                    lineNumber: 187,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `rounded-xl px-3 py-2 sm:px-3.5 sm:py-2 shadow-2xs transition-all ${isOwn ? "bg-gradient-to-tr from-teal-600 to-teal-500 text-white rounded-ee-xs" : "bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-200/60 dark:border-gray-800/60 rounded-es-xs"}`,
                    children: [
                        text && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[13px] sm:text-[13.5px] whitespace-pre-wrap break-words leading-relaxed selection:bg-teal-200 dark:selection:bg-teal-800 selection:text-teal-900 dark:selection:text-teal-100",
                            children: text
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/chat/components/ChatMessageItem.tsx",
                            lineNumber: 208,
                            columnNumber: 13
                        }, this),
                        attachmentUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${text ? "mt-2 pt-1.5 border-t" : ""} ${isOwn ? "border-teal-500/50" : "border-gray-100 dark:border-gray-800/50"}`,
                            children: isImage && !hasImageError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>onPreviewImage(attachmentUrl, attachmentName),
                                className: "relative group/img overflow-hidden rounded-lg cursor-pointer border border-black/5 dark:border-white/5 bg-black/5 dark:bg-black/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: attachmentUrl,
                                        alt: attachmentName,
                                        loading: "lazy",
                                        onError: ()=>setHasImageError(true),
                                        className: "max-h-56 sm:max-h-64 w-full object-cover rounded-lg group-hover/img:scale-102 transition-transform duration-300"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/chat/components/ChatMessageItem.tsx",
                                        lineNumber: 223,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-black/30 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "p-1.5 rounded-full bg-black/60 backdrop-blur-xs",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__["ZoomIn"], {
                                                className: "h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/chat/components/ChatMessageItem.tsx",
                                                lineNumber: 232,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/chat/components/ChatMessageItem.tsx",
                                            lineNumber: 231,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/chat/components/ChatMessageItem.tsx",
                                        lineNumber: 230,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/chat/components/ChatMessageItem.tsx",
                                lineNumber: 219,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: handleDownload,
                                className: `flex items-center gap-2.5 p-2 rounded-lg border transition-all cursor-pointer ${isOwn ? "bg-teal-700/40 border-teal-400/30 text-white hover:bg-teal-700/60" : "bg-gray-50 dark:bg-gray-800/60 border-gray-200/70 dark:border-gray-700/60 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `p-1.5 rounded-md ${isOwn ? "bg-teal-800 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"}`,
                                        children: isImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/chat/components/ChatMessageItem.tsx",
                                            lineNumber: 250,
                                            columnNumber: 32
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/chat/components/ChatMessageItem.tsx",
                                            lineNumber: 250,
                                            columnNumber: 68
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/chat/components/ChatMessageItem.tsx",
                                        lineNumber: 244,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-semibold truncate",
                                                children: attachmentName
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/chat/components/ChatMessageItem.tsx",
                                                lineNumber: 253,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `text-[10px] ${isOwn ? "text-teal-200" : "text-gray-400 dark:text-gray-500"}`,
                                                children: isDownloading ? t("chat.downloading") : t("chat.downloadFile")
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/chat/components/ChatMessageItem.tsx",
                                                lineNumber: 254,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/chat/components/ChatMessageItem.tsx",
                                        lineNumber: 252,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                        className: "h-3.5 w-3.5 flex-shrink-0 opacity-80 group-hover:opacity-100"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/chat/components/ChatMessageItem.tsx",
                                        lineNumber: 261,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/chat/components/ChatMessageItem.tsx",
                                lineNumber: 237,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/chat/components/ChatMessageItem.tsx",
                            lineNumber: 214,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/chat/components/ChatMessageItem.tsx",
                    lineNumber: 201,
                    columnNumber: 9
                }, this),
                isOwn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-end gap-1 mt-0.5 px-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[10px] text-gray-400 dark:text-gray-500 font-medium",
                            children: formatTime(message.created_at)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/chat/components/ChatMessageItem.tsx",
                            lineNumber: 270,
                            columnNumber: 13
                        }, this),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$chatReadPersistence$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isMessageMarkedAsRead"])(message.conversation_id, message) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCheck$3e$__["CheckCheck"], {
                            className: "h-3.5 w-3.5 text-teal-600 dark:text-teal-400 transition-colors"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/chat/components/ChatMessageItem.tsx",
                            lineNumber: 274,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                            className: "h-3.5 w-3.5 text-gray-400 dark:text-gray-500 transition-colors"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/chat/components/ChatMessageItem.tsx",
                            lineNumber: 276,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/chat/components/ChatMessageItem.tsx",
                    lineNumber: 269,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/chat/components/ChatMessageItem.tsx",
            lineNumber: 185,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/admin/chat/components/ChatMessageItem.tsx",
        lineNumber: 184,
        columnNumber: 5
    }, this);
});
}),
"[project]/src/app/admin/chat/components/ImageLightboxModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ImageLightboxModal",
    ()=>ImageLightboxModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function ImageLightboxModal({ isOpen, onClose, imageUrl, imageName }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const displayName = imageName || t("chat.image");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleKeyDown = (e)=>{
            if (e.key === "Escape") onClose();
        };
        if (isOpen) {
            window.addEventListener("keydown", handleKeyDown);
        }
        return ()=>window.removeEventListener("keydown", handleKeyDown);
    }, [
        isOpen,
        onClose
    ]);
    if (!isOpen || !imageUrl) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-xs p-4 transition-all duration-200 animate-in fade-in",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative max-w-4xl max-h-[90vh] flex flex-col items-center justify-center",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full flex items-center justify-between gap-4 mb-3 text-white",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs font-medium truncate max-w-xs sm:max-w-md text-gray-300",
                            children: displayName
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/chat/components/ImageLightboxModal.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: imageUrl,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    download: displayName,
                                    className: "h-8 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs flex items-center gap-1.5 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                            className: "h-3.5 w-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/chat/components/ImageLightboxModal.tsx",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: t("chat.download")
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/chat/components/ImageLightboxModal.tsx",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/chat/components/ImageLightboxModal.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: imageUrl,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "h-8 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs flex items-center gap-1.5 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                            className: "h-3.5 w-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/chat/components/ImageLightboxModal.tsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: t("chat.openFile")
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/chat/components/ImageLightboxModal.tsx",
                                            lineNumber: 68,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/chat/components/ImageLightboxModal.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "h-8 w-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors ms-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/chat/components/ImageLightboxModal.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/chat/components/ImageLightboxModal.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/chat/components/ImageLightboxModal.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/chat/components/ImageLightboxModal.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-black/40 max-h-[80vh] flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: imageUrl,
                        alt: imageName,
                        className: "max-h-[80vh] max-w-full object-contain rounded-lg"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/chat/components/ImageLightboxModal.tsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/chat/components/ImageLightboxModal.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/chat/components/ImageLightboxModal.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/admin/chat/components/ImageLightboxModal.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/admin/chat/components/ChatMessageList.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatMessageList",
    ()=>ChatMessageList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2d$dashed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquareDashed$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square-dashed.js [app-ssr] (ecmascript) <export default as MessageSquareDashed>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$components$2f$ChatMessageItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/chat/components/ChatMessageItem.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$components$2f$ChatSkeletons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/chat/components/ChatSkeletons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$components$2f$ImageLightboxModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/chat/components/ImageLightboxModal.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
// Group keys produced by groupMessagesByDate that need translating for display.
const DATE_GROUP_LABEL_KEYS = {
    Today: "chat.today",
    Yesterday: "chat.yesterday",
    Recent: "chat.recent"
};
function ChatMessageList({ isLoadingMessages, messages, messageGroups, currentUserId, isAdmin, conversation, messagesEndRef, formatTime, fetchNextPage, hasNextPage, isFetchingNextPage }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [lightboxState, setLightboxState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        isOpen: false,
        url: null,
        name: ""
    });
    const handlePreviewImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((url, name)=>{
        setLightboxState({
            isOpen: true,
            url,
            name
        });
    }, []);
    const handleCloseLightbox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setLightboxState((prev)=>({
                ...prev,
                isOpen: false
            }));
    }, []);
    if (isLoadingMessages) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$components$2f$ChatSkeletons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChatMessageListSkeleton"], {}, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ChatMessageList.tsx",
            lineNumber: 69,
            columnNumber: 12
        }, this);
    }
    if (messages.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 overflow-y-auto p-8 bg-gray-50/50 dark:bg-gray-950/60 flex flex-col items-center justify-center text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-12 w-12 rounded-2xl bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 border border-teal-100 dark:border-teal-900/40 flex items-center justify-center mb-3 shadow-2xs",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2d$dashed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquareDashed$3e$__["MessageSquareDashed"], {
                        className: "h-6 w-6"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/chat/components/ChatMessageList.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/chat/components/ChatMessageList.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    className: "text-sm sm:text-base font-bold text-gray-900 dark:text-white mb-1",
                    children: t("chat.noMessagesYet")
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/chat/components/ChatMessageList.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-gray-500 dark:text-gray-400 max-w-sm",
                    children: t("chat.noMessagesPrompt")
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/chat/components/ChatMessageList.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/chat/components/ChatMessageList.tsx",
            lineNumber: 74,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto p-3 sm:p-5 md:p-6 space-y-6 bg-gray-50/50 dark:bg-gray-950/60",
                children: [
                    hasNextPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center mb-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>fetchNextPage && fetchNextPage(),
                            disabled: isFetchingNextPage,
                            className: "px-3.5 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-2xs transition-colors flex items-center gap-2 cursor-pointer",
                            children: isFetchingNextPage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "h-3.5 w-3.5 animate-spin text-teal-600"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/chat/components/ChatMessageList.tsx",
                                        lineNumber: 100,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: t("chat.loading")
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/chat/components/ChatMessageList.tsx",
                                        lineNumber: 101,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: t("chat.loadOlder")
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/chat/components/ChatMessageList.tsx",
                                lineNumber: 104,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/chat/components/ChatMessageList.tsx",
                            lineNumber: 93,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/chat/components/ChatMessageList.tsx",
                        lineNumber: 92,
                        columnNumber: 11
                    }, this),
                    Object.entries(messageGroups).map(([date, msgs])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center sticky top-0 z-10 py-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] font-semibold text-gray-500 dark:text-gray-400 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xs border border-gray-200/80 dark:border-gray-800 shadow-2xs px-3 py-0.5 rounded-full",
                                        children: DATE_GROUP_LABEL_KEYS[date] ? t(DATE_GROUP_LABEL_KEYS[date]) : date
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/chat/components/ChatMessageList.tsx",
                                        lineNumber: 113,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/chat/components/ChatMessageList.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this),
                                msgs.map((message, idx)=>{
                                    const senderType = message.sender_type?.toLowerCase();
                                    let isOwn;
                                    if (currentUserId && (Number(message.sender_id) === Number(currentUserId) || Number(message.user_id) === Number(currentUserId))) {
                                        isOwn = true;
                                    } else if (senderType) {
                                        if (isAdmin) {
                                            isOwn = senderType === "admin" || senderType === "support";
                                        } else {
                                            isOwn = senderType === "user";
                                        }
                                    } else if (message.sender?.role) {
                                        const role = message.sender.role.toLowerCase();
                                        if (isAdmin) {
                                            isOwn = role === "admin" || role === "support";
                                        } else {
                                            isOwn = role !== "admin" && role !== "support";
                                        }
                                    } else {
                                        isOwn = false;
                                    }
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$components$2f$ChatMessageItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChatMessageItem"], {
                                        message: message,
                                        isOwn: isOwn,
                                        formatTime: formatTime,
                                        onPreviewImage: handlePreviewImage
                                    }, String(message.id || message.message_id || `msg-${idx}`), false, {
                                        fileName: "[project]/src/app/admin/chat/components/ChatMessageList.tsx",
                                        lineNumber: 145,
                                        columnNumber: 17
                                    }, this);
                                })
                            ]
                        }, date, true, {
                            fileName: "[project]/src/app/admin/chat/components/ChatMessageList.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: messagesEndRef
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/chat/components/ChatMessageList.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/chat/components/ChatMessageList.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$components$2f$ImageLightboxModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImageLightboxModal"], {
                isOpen: lightboxState.isOpen,
                onClose: handleCloseLightbox,
                imageUrl: lightboxState.url,
                imageName: lightboxState.name
            }, void 0, false, {
                fileName: "[project]/src/app/admin/chat/components/ChatMessageList.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/app/admin/chat/components/ChatInput.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatInput",
    ()=>ChatInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/paperclip.js [app-ssr] (ecmascript) <export default as Paperclip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-ssr] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const ALLOWED_EXTENSIONS = [
    "jpeg",
    "jpg",
    "png",
    "pdf",
    "doc",
    "docx"
];
const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024;
function ChatInput({ messageInput, setMessageInput, attachment, setAttachment, onSubmit, isPending }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleFileChange = (e)=>{
        const file = e.target.files?.[0];
        if (!file) return;
        const ext = file.name.split(".").pop()?.toLowerCase() || "";
        if (!ALLOWED_EXTENSIONS.includes(ext)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(t("chat.invalidFileType"));
            if (fileInputRef.current) fileInputRef.current.value = "";
            return;
        }
        if (file.size > MAX_FILE_SIZE_BYTES) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(t("chat.fileTooLarge"));
            if (fileInputRef.current) fileInputRef.current.value = "";
            return;
        }
        setAttachment(file);
        if (fileInputRef.current) fileInputRef.current.value = "";
    };
    const removeAttachment = ()=>{
        setAttachment(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
    };
    const formatFileSize = (bytes)=>{
        if (bytes < 1024) return `${bytes} B`;
        if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
        return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    };
    const handleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            if ((messageInput.trim().length > 0 || attachment !== null) && !isPending) {
                onSubmit(e);
            }
        }
    }, [
        messageInput,
        attachment,
        isPending,
        onSubmit
    ]);
    const isImageAttachment = attachment?.type.startsWith("image/");
    const canSubmit = (messageInput.trim().length > 0 || attachment !== null) && !isPending;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 p-2.5 sm:p-3.5 flex-shrink-0",
        children: [
            attachment && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-2.5 flex items-center gap-2 p-2 bg-teal-50/80 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800/60 rounded-xl max-w-fit shadow-2xs animate-in zoom-in-95",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-1.5 bg-teal-600 text-white rounded-lg",
                        children: isImageAttachment ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/chat/components/ChatInput.tsx",
                            lineNumber: 87,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/chat/components/ChatInput.tsx",
                            lineNumber: 89,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/chat/components/ChatInput.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-semibold text-gray-900 dark:text-white max-w-[160px] sm:max-w-[220px] truncate",
                                children: attachment.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/chat/components/ChatInput.tsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] text-gray-500 dark:text-gray-400",
                                children: formatFileSize(attachment.size)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/chat/components/ChatInput.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/chat/components/ChatInput.tsx",
                        lineNumber: 92,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: removeAttachment,
                        className: "p-1 text-gray-400 hover:text-red-500 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors ms-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "h-3.5 w-3.5"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/chat/components/ChatInput.tsx",
                            lineNumber: 105,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/chat/components/ChatInput.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/chat/components/ChatInput.tsx",
                lineNumber: 84,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: onSubmit,
                className: "flex items-center gap-1.5 sm:gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: fileInputRef,
                        type: "file",
                        accept: ".jpeg,.jpg,.png,.pdf,.doc,.docx",
                        onChange: handleFileChange,
                        className: "hidden",
                        id: "chat-file-attachment-input"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/chat/components/ChatInput.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        type: "button",
                        variant: "outline",
                        size: "icon",
                        onClick: ()=>fileInputRef.current?.click(),
                        disabled: isPending,
                        className: "h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0 text-gray-500 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/40 border-gray-200 dark:border-gray-700 cursor-pointer rounded-xl",
                        title: t("chat.attachFile"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__["Paperclip"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/chat/components/ChatInput.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/chat/components/ChatInput.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            placeholder: t("chat.writeReply"),
                            value: messageInput,
                            onChange: (e)=>setMessageInput(e.target.value),
                            onKeyDown: handleKeyDown,
                            disabled: isPending,
                            className: "w-full bg-gray-50/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 h-9 sm:h-10 px-3.5 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white dark:focus:bg-gray-800 transition-colors"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/chat/components/ChatInput.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/chat/components/ChatInput.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        type: "submit",
                        disabled: !canSubmit,
                        className: "bg-teal-600 hover:bg-teal-700 text-white gap-1.5 sm:gap-2 h-9 sm:h-10 px-3 sm:px-4 flex-shrink-0 shadow-xs cursor-pointer disabled:opacity-50 rounded-xl",
                        children: [
                            isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "h-4 w-4 animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/chat/components/ChatInput.tsx",
                                lineNumber: 149,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                className: "h-4 w-4 rtl:rotate-180"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/chat/components/ChatInput.tsx",
                                lineNumber: 151,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline text-xs font-semibold",
                                children: t("chat.sendMessage")
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/chat/components/ChatInput.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/chat/components/ChatInput.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/chat/components/ChatInput.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/chat/components/ChatInput.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/admin/chat/components/ChatEmptyState.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatEmptyState",
    ()=>ChatEmptyState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Headphones$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/headphones.js [app-ssr] (ecmascript) <export default as Headphones>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-ssr] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/paperclip.js [app-ssr] (ecmascript) <export default as Paperclip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function ChatEmptyState({ onNewConversation, isLoading }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 flex flex-col items-center justify-center bg-gradient-to-b from-gray-50/50 dark:from-gray-900/50 via-white dark:via-gray-900 to-gray-50/30 dark:to-gray-950/80 p-8 text-center select-none overflow-y-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-md w-full flex flex-col items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -inset-2 rounded-full bg-teal-100/60 dark:bg-teal-900/30 blur-md animate-pulse"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/chat/components/ChatEmptyState.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative h-20 w-20 rounded-2xl bg-gradient-to-tr from-teal-600 to-teal-500 text-white flex items-center justify-center shadow-lg shadow-teal-600/20 border-2 border-white dark:border-gray-800",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Headphones$3e$__["Headphones"], {
                                className: "h-10 w-10"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/chat/components/ChatEmptyState.tsx",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/chat/components/ChatEmptyState.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/chat/components/ChatEmptyState.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xl font-bold text-gray-900 dark:text-white mb-2",
                    children: t("chat.selectChatToStart")
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/chat/components/ChatEmptyState.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-8 leading-relaxed",
                    children: t("chat.emptyStateSubtitle")
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/chat/components/ChatEmptyState.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    onClick: onNewConversation,
                    disabled: isLoading,
                    className: "bg-teal-600 hover:bg-teal-700 text-white gap-2 text-sm font-semibold h-11 px-6 rounded-xl shadow-md shadow-teal-600/20 hover:shadow-lg hover:shadow-teal-600/30 transition-all cursor-pointer mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/chat/components/ChatEmptyState.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: t("chat.newConversation")
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/chat/components/ChatEmptyState.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/chat/components/ChatEmptyState.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-3 gap-3 w-full text-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white dark:bg-gray-850 dark:bg-gray-800/90 border border-gray-200/80 dark:border-gray-800 rounded-xl p-3.5 shadow-2xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-7 w-7 rounded-lg bg-teal-50 dark:bg-teal-950/50 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/chat/components/ChatEmptyState.tsx",
                                        lineNumber: 44,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/chat/components/ChatEmptyState.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-xs font-semibold text-gray-800 dark:text-gray-200 mb-0.5",
                                    children: t("chat.quickResponse")
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/chat/components/ChatEmptyState.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] text-gray-500 dark:text-gray-400 leading-tight",
                                    children: t("chat.quickResponseDesc")
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/chat/components/ChatEmptyState.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/chat/components/ChatEmptyState.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white dark:bg-gray-850 dark:bg-gray-800/90 border border-gray-200/80 dark:border-gray-800 rounded-xl p-3.5 shadow-2xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-7 w-7 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__["Paperclip"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/chat/components/ChatEmptyState.tsx",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/chat/components/ChatEmptyState.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-xs font-semibold text-gray-800 dark:text-gray-200 mb-0.5",
                                    children: t("chat.attachments")
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/chat/components/ChatEmptyState.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] text-gray-500 dark:text-gray-400 leading-tight",
                                    children: t("chat.attachmentsDesc")
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/chat/components/ChatEmptyState.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/chat/components/ChatEmptyState.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white dark:bg-gray-850 dark:bg-gray-800/90 border border-gray-200/80 dark:border-gray-800 rounded-xl p-3.5 shadow-2xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-7 w-7 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/chat/components/ChatEmptyState.tsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/chat/components/ChatEmptyState.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-xs font-semibold text-gray-800 dark:text-gray-200 mb-0.5",
                                    children: t("chat.trackIssues")
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/chat/components/ChatEmptyState.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] text-gray-500 dark:text-gray-400 leading-tight",
                                    children: t("chat.trackIssuesDesc")
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/chat/components/ChatEmptyState.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/chat/components/ChatEmptyState.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/chat/components/ChatEmptyState.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/chat/components/ChatEmptyState.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/admin/chat/components/ChatEmptyState.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/admin/chat/page.client.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$hooks$2f$useSupportChat$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/chat/hooks/useSupportChat.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$components$2f$ChatTabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/chat/components/ChatTabs.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$components$2f$ChatContactList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/chat/components/ChatContactList.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$components$2f$ChatHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/chat/components/ChatHeader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$components$2f$ChatMessageList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/chat/components/ChatMessageList.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$components$2f$ChatInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/chat/components/ChatInput.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$components$2f$ChatEmptyState$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/chat/components/ChatEmptyState.tsx [app-ssr] (ecmascript)");
;
"use client";
;
;
;
;
;
;
;
;
;
const NewConversationModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/src/app/admin/chat/components/NewConversationModal.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
function ChatPage() {
    const { statusFilter, setStatusFilter, counts, searchQuery, setSearchQuery, filteredConversations, isLoadingConversations, refetchConversations, isRefetchingConversations, fetchNextConversationsPage, hasNextConversationsPage, isFetchingNextConversationsPage, selectedConversationId, setSelectedConversationId, activeConversation, handleConversationSelect, handleManualMarkAsRead, isMarkingAsRead, handleReleaseConversation, isReleasing, messages, messageGroups, isLoadingMessages, refetchMessages, isRefetchingMessages, fetchNextMessagesPage, hasNextMessagesPage, isFetchingNextMessagesPage, messageInput, setMessageInput, attachment, setAttachment, handleSendMessage, isSendingMessage, isNewConversationModalOpen, setIsNewConversationModalOpen, handleCreateConversation, isCreatingConversation, currentUserId, isAdmin, messagesEndRef, formatTime } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$hooks$2f$useSupportChat$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSupportChat"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-[calc(100dvh-4rem)] p-2 sm:p-3 md:p-4 lg:p-5 flex flex-col max-w-full overflow-hidden bg-gray-50/70 dark:bg-gray-950",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/90 dark:border-gray-800 shadow-xs overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${activeConversation ? "hidden md:block" : "block"}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$components$2f$ChatTabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChatTabs"], {
                            statusFilter: statusFilter,
                            setStatusFilter: setStatusFilter,
                            counts: counts,
                            onCreateConversation: ()=>setIsNewConversationModalOpen(true),
                            isCreatingConversation: isCreatingConversation
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/chat/page.client.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/chat/page.client.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$components$2f$ChatContactList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChatContactList"], {
                                className: `${activeConversation ? "hidden md:flex" : "flex flex-1 md:flex-initial"}`,
                                searchQuery: searchQuery,
                                setSearchQuery: setSearchQuery,
                                isLoading: isLoadingConversations,
                                conversations: filteredConversations,
                                selectedConversationId: selectedConversationId,
                                onConversationSelect: handleConversationSelect,
                                formatTime: formatTime,
                                onCreateConversation: ()=>setIsNewConversationModalOpen(true),
                                isCreatingConversation: isCreatingConversation,
                                fetchNextPage: fetchNextConversationsPage,
                                hasNextPage: hasNextConversationsPage,
                                isFetchingNextPage: isFetchingNextConversationsPage
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/chat/page.client.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            activeConversation ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 flex flex-col bg-white dark:bg-gray-900 overflow-hidden w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$components$2f$ChatHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChatHeader"], {
                                        conversation: activeConversation,
                                        onBack: ()=>setSelectedConversationId(null),
                                        onRefresh: ()=>{
                                            refetchMessages();
                                            refetchConversations();
                                        },
                                        isRefreshing: isRefetchingMessages || isRefetchingConversations,
                                        onMarkAsRead: handleManualMarkAsRead,
                                        isMarkingAsRead: isMarkingAsRead,
                                        onRelease: handleReleaseConversation,
                                        isReleasing: isReleasing
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/chat/page.client.tsx",
                                        lineNumber: 95,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$components$2f$ChatMessageList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChatMessageList"], {
                                        isLoadingMessages: isLoadingMessages,
                                        messages: messages,
                                        messageGroups: messageGroups,
                                        currentUserId: currentUserId,
                                        isAdmin: isAdmin,
                                        conversation: activeConversation,
                                        messagesEndRef: messagesEndRef,
                                        formatTime: formatTime,
                                        fetchNextPage: fetchNextMessagesPage,
                                        hasNextPage: hasNextMessagesPage,
                                        isFetchingNextPage: isFetchingNextMessagesPage
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/chat/page.client.tsx",
                                        lineNumber: 109,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$components$2f$ChatInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChatInput"], {
                                        messageInput: messageInput,
                                        setMessageInput: setMessageInput,
                                        attachment: attachment,
                                        setAttachment: setAttachment,
                                        onSubmit: handleSendMessage,
                                        isPending: isSendingMessage
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/chat/page.client.tsx",
                                        lineNumber: 123,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/chat/page.client.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:flex flex-1 flex-col overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$components$2f$ChatEmptyState$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChatEmptyState"], {
                                    onNewConversation: ()=>setIsNewConversationModalOpen(true),
                                    isLoading: isCreatingConversation
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/chat/page.client.tsx",
                                    lineNumber: 134,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/chat/page.client.tsx",
                                lineNumber: 133,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/chat/page.client.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/chat/page.client.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            isNewConversationModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NewConversationModal, {
                isOpen: isNewConversationModalOpen,
                onClose: ()=>setIsNewConversationModalOpen(false),
                onSubmit: handleCreateConversation,
                isLoading: isCreatingConversation
            }, void 0, false, {
                fileName: "[project]/src/app/admin/chat/page.client.tsx",
                lineNumber: 144,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/chat/page.client.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2e32d072._.js.map