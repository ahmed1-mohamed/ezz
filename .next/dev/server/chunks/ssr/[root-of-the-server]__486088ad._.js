module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "extractErrorMessage",
    ()=>extractErrorMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function extractErrorMessage(error, fallbackMessage = "Something went wrong. Please try again.") {
    if (!error) return fallbackMessage;
    const err = error;
    const data = err?.response?.data || err?.data || (typeof err === "object" ? err : null);
    // 1. Check if backend returned structured validation errors -> extract exactly 1st message
    if (data?.errors) {
        if (Array.isArray(data.errors) && data.errors.length > 0) {
            const first = data.errors[0];
            if (typeof first === "string" && first.trim()) return cleanMessageText(first.trim());
            if (typeof first === "object" && first !== null) {
                const val = Object.values(first)[0];
                if (typeof val === "string" && val.trim()) return cleanMessageText(val.trim());
            }
        } else if (typeof data.errors === "object" && data.errors !== null) {
            const values = Object.values(data.errors);
            if (values.length > 0) {
                const firstVal = values[0];
                if (Array.isArray(firstVal) && firstVal.length > 0 && typeof firstVal[0] === "string" && firstVal[0].trim()) {
                    return cleanMessageText(firstVal[0].trim());
                }
                if (typeof firstVal === "string" && firstVal.trim()) {
                    return cleanMessageText(firstVal.trim());
                }
            }
        }
    }
    // 2. Check for data.message
    if (typeof data?.message === "string" && data.message.trim()) {
        const msg = data.message.trim();
        if (!isGenericStatusMessage(msg)) {
            return cleanMessageText(msg);
        }
    }
    // 3. Check for data.error
    if (typeof data?.error === "string" && data.error.trim()) {
        const msg = data.error.trim();
        if (!isGenericStatusMessage(msg)) {
            return cleanMessageText(msg);
        }
    }
    // 4. Check for top-level Error message
    if (typeof err?.message === "string" && err.message.trim()) {
        const msg = err.message.trim();
        if (!isGenericStatusMessage(msg)) {
            return cleanMessageText(msg);
        }
    }
    return fallbackMessage;
}
function isGenericStatusMessage(msg) {
    const lower = msg.toLowerCase();
    return lower.startsWith("request failed with status") || lower.includes("status code") || lower === "operation failed" || lower === "internal server error" || lower === "bad request" || lower === "unprocessable entity";
}
function cleanMessageText(msg) {
    // Strip any leading "field_name: " or "Status 422: "
    return msg.replace(/^([a-zA-Z0-9_.-]+:\s*)+/, "").trim() || msg;
}
}),
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
"[project]/src/data/api/client.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiAuth",
    ()=>apiAuth,
    "apiClient",
    ()=>apiClient,
    "apiClient2",
    ()=>apiClient2,
    "deleteData",
    ()=>deleteData,
    "editData",
    ()=>editData,
    "editDataImg",
    ()=>editDataImg,
    "fetchAdsData",
    ()=>fetchAdsData,
    "fetchDLDAreasData",
    ()=>fetchDLDAreasData,
    "fetchData",
    ()=>fetchData,
    "fetchData2",
    ()=>fetchData2,
    "fetchDataReserve",
    ()=>fetchDataReserve,
    "fetchDataReserveUnit",
    ()=>fetchDataReserveUnit,
    "fetchDataTotals",
    ()=>fetchDataTotals,
    "fetchDataWithPagination",
    ()=>fetchDataWithPagination,
    "fetchDevelopersData",
    ()=>fetchDevelopersData,
    "fetchPaginatedData",
    ()=>fetchPaginatedData,
    "fetchPropertiesCreateData",
    ()=>fetchPropertiesCreateData,
    "fetchPropertiesData",
    ()=>fetchPropertiesData,
    "fetchPropertiesIdData",
    ()=>fetchPropertiesIdData,
    "handleError",
    ()=>handleError,
    "patchData",
    ()=>patchData,
    "postData",
    ()=>postData,
    "postDataAuth",
    ()=>postDataAuth,
    "postDataImg",
    ()=>postDataImg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiClient.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/config.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const attachCountryHeader = (instance)=>{
    instance.interceptors.request.use((config)=>{
        const countryId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getCountryId"])();
        config.headers["country-id"] = countryId;
        config.headers["country_id"] = countryId;
        config.headers["ngrok-skip-browser-warning"] = "69420";
        if (typeof FormData !== "undefined" && config.data instanceof FormData) {
            delete config.headers["Content-Type"];
        }
        return config;
    });
};
const apiClient = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DASHBOARD_API_BASE_URL"],
    headers: {
        "Content-Type": "application/json",
        "country-id": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DEFAULT_COUNTRY_ID"],
        "country_id": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DEFAULT_COUNTRY_ID"],
        "ngrok-skip-browser-warning": "69420"
    }
});
attachCountryHeader(apiClient);
const apiClient2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BASE_URL"],
    headers: {
        "Content-Type": "application/json",
        "country-id": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DEFAULT_COUNTRY_ID"],
        "country_id": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DEFAULT_COUNTRY_ID"],
        "ngrok-skip-browser-warning": "69420"
    }
});
attachCountryHeader(apiClient2);
;
const handleError = (error, endpoint)=>{
    const errorMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractErrorMessage"])(error, "Operation failed");
    console.error(`API Error on ${endpoint}:`, errorMessage);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(errorMessage, {
        id: "app-api-error-toast",
        duration: 4000
    });
    if (error && typeof error === "object") {
        error.message = errorMessage;
    }
    throw error;
};
const fetchData = async (endpoint, token)=>{
    try {
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].syncToken(token);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(endpoint);
        return response.data;
    } catch (error) {
        handleError(error, endpoint);
    }
};
const fetchDevelopersData = fetchData;
const fetchPropertiesCreateData = fetchData;
const fetchDLDAreasData = fetchData;
const fetchPropertiesIdData = fetchData;
const fetchPaginatedData = fetchData;
const fetchAdsData = fetchData;
const fetchDataTotals = fetchData;
const fetchData2 = (endpoint)=>fetchData(endpoint);
const fetchDataWithPagination = async (endpoint, token, page = 1, perPage = 15)=>{
    try {
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].syncToken(token);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(endpoint, {
            params: {
                page,
                per_page: perPage
            }
        });
        return response.data;
    } catch (error) {
        handleError(error, endpoint);
    }
};
const fetchPropertiesData = async (endpoint, sortBy, sortOrder, selectedCountries, selectedDevelopers, selectedProjects, per_page, page)=>{
    try {
        const body = {
            sort_by: sortBy,
            sort_order: sortOrder,
            country_id: selectedCountries,
            developer_id: selectedDevelopers,
            project_id: selectedProjects,
            per_page: per_page
        };
        if (page !== undefined) {
            body.page = page;
        }
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(endpoint, body);
        return response.data;
    } catch (error) {
        handleError(error, endpoint);
    }
};
const fetchDataReserveUnit = async (token, reservationId)=>{
    try {
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].syncToken(token);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DASHBOARD_V2_API_BASE_URL"]}/reservations/${reservationId}`, {
            headers: {
                "ngrok-skip-browser-warning": "69420"
            }
        });
        return response.data;
    } catch (error) {
        console.error("Fetch reservation error:", error);
    }
};
const fetchDataReserve = async (token)=>{
    try {
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].syncToken(token);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DASHBOARD_V2_API_BASE_URL"]}/reservations`, {
            headers: {
                "ngrok-skip-browser-warning": "69420"
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
const postData = async (endpoint, data, token)=>{
    try {
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].syncToken(token);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(endpoint, data);
        return response.data;
    } catch (error) {
        handleError(error, endpoint);
    }
};
const postDataImg = postData;
const editDataImg = postData;
const editData = async (endpoint, data, token)=>{
    try {
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].syncToken(token);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].put(endpoint, data);
        return response.data;
    } catch (error) {
        handleError(error, endpoint);
    }
};
const deleteData = async (endpoint, token)=>{
    try {
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].syncToken(token);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].delete(endpoint);
        return response.data;
    } catch (error) {
        handleError(error, endpoint);
    }
};
const patchData = async (endpoint, data, token)=>{
    try {
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].syncToken(token);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].patch(endpoint, data);
        return response.data;
    } catch (error) {
        handleError(error, endpoint);
    }
};
const apiAuth = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DASHBOARD_API_BASE_URL"],
    headers: {
        "Content-Type": "application/json",
        "country-id": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DEFAULT_COUNTRY_ID"],
        "country_id": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DEFAULT_COUNTRY_ID"]
    }
});
attachCountryHeader(apiAuth);
const postDataAuth = async (endpoint, data)=>{
    try {
        const response = await apiAuth.post(endpoint, data);
        return response.data;
    } catch (error) {
        handleError(error, endpoint);
    }
};
}),
"[project]/src/data/api/endpoints.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ENDPOINTS",
    ()=>ENDPOINTS
]);
const ENDPOINTS = {
    AUTH: {
        REGISTER: "/auth/register",
        FORGET_PASSWORD: "/auth/forget-password",
        VERIFY_TOKEN: "/auth/verify-token",
        RESET_PASSWORD: "/auth/reset-password"
    },
    USERS: {
        BASE: "/users",
        BY_ID: (id)=>`/users/${id}`,
        DETAIL: (id)=>`/dashboard/users/${id}`,
        PERMISSIONS: "/dashboard/permissions",
        PERMISSION_DETAIL: (id)=>`/dashboard/permissions/${id}`,
        ROLES: "/dashboard/roles",
        ROLES_RAW: "/roles",
        ROLE_DETAIL: (id)=>`/roles/${id}`,
        ROLES_PERMISSIONS: "/dashboard/roles/permissions",
        ROLE_PERMISSIONS_DELETE: (roleId, permissionId)=>`/dashboard/roles/${roleId}/permissions/${permissionId}`
    },
    PERMISSIONS: {
        BASE: "/dashboard/permissions",
        DETAIL: (id)=>`/dashboard/permissions/${id}`
    },
    PROJECTS: {
        BASE: "/dashboard/projects",
        DROPDOWN: "/projects",
        DETAIL: (id)=>`/dashboard/projects/${id}`,
        RAW: "/projects",
        RAW_DETAIL: (id)=>`/projects/${id}`,
        MILESTONES: "/milestones",
        MILESTONE_DETAIL: (id)=>`/milestones/${id}`,
        BUILDINGS: "/dashboard/buildings",
        BUILDING_DETAIL: (id)=>`/dashboard/buildings/${id}`,
        FEATURES: "/projects/features",
        FEATURE_DETAIL: (projectId, featureId)=>`/projects/${projectId}/features/${featureId}`,
        MEDIA_CREATE: "/dashboard/projects/medias/create",
        MEDIA_DETAIL: (id)=>`/projects/medias/${id}`,
        MEDIA_DASHBOARD_DETAIL: (id)=>`/dashboard/projects/medias/${id}`,
        PAYMENT_PLANS: "/dashboard/paymentPlans",
        PAYMENT_PLAN_BULK: "/dashboard/paymentPlans/bulk/add",
        PAYMENT_PLAN_DETAIL: (id)=>`/dashboard/paymentPlans/${id}`,
        PAYMENT_PLAN_ITEMS: "/paymentPlanItems"
    },
    PROPERTIES: {
        BASE: "/properties",
        FILTER: "/filter/properties",
        GET_PROPERTY: "/getproprty",
        BY_ID: (id)=>`/properties/${id}`,
        DETAIL: (id)=>`/dashboard/properties/${id}`,
        TYPES: "/dashboard/propertyTypes",
        TYPES_RAW: "/propertyTypes",
        TYPE_DETAIL: (id)=>`/propertyTypes/${id}`,
        SUBTYPES: "/dashboard/propertySubtypes",
        SUBTYPES_RAW: "/propertySubtypes",
        SUBTYPE_DETAIL: (id)=>`/propertySubtypes/${id}`,
        FEATURES: "/dashboard/properties/features",
        FEATURE_DETAIL: (propertyId, featureId)=>`/dashboard/properties/${propertyId}/features/${featureId}`,
        MEDIA: "/dashboard/properties/medias",
        MEDIA_DETAIL: (id)=>`/dashboard/properties/medias/${id}`
    },
    LOCATIONS: {
        AREAS: "/dashboard/areas",
        AREAS_ALL: "/dashboard/areas/all",
        AREAS_DETAIL: (id)=>`/areas/${id}`,
        DASHBOARD_AREAS: "/dashboard/areas",
        CITIES: "/cities",
        CITIES_DETAIL: (id)=>`/cities/${id}`,
        DASHBOARD_CITIES: "/dashboard/cities",
        DLD_AREAS: "/dldAreas",
        DLD_AREAS_DETAIL: (id)=>`/dldAreas/${id}`,
        LOCATIONS: "/locations",
        DASHBOARD_LOCATIONS: "/dashboard/locations",
        DASHBOARD_LOCATIONS_DETAIL: (id)=>`/dashboard/locations/${id}`,
        ADDRESSES: "/addresses",
        ADDRESSES_DETAIL: (id)=>`/addresses/${id}`,
        STATES: "/dashboard/states"
    },
    MARKETING: {
        ADS: "/dashboard/ads",
        ADS_TOTALS: "/dashboard/ads/totals",
        ADS_DETAIL: (id)=>`/dashboard/ads/${id}`,
        ADS_TOGGLE_STATUS: (id)=>`/dashboard/ads/${id}/toggle-status`,
        BADGES: "/badges",
        CAMPAIGNS: "/marketing/campaigns",
        CAMPAIGNS_STATS: "/marketing/campaigns/stats",
        CREDITS: "/dashboard/ad-credit-packages",
        CREDIT_PACKAGE: "/dashboard/ad-credit-package"
    },
    COMMON: {
        DASHBOARD_STATS: "/dashboard",
        DASHBOARD_EXPERTS: "/dashboard/experts",
        DASHBOARD_DEVELOPERS: "/dashboard/developers",
        DASHBOARD_DEVELOPERS_ALL: "/dashboard/developers/all",
        DASHBOARD_RESERVATIONS: "/dashboard/reservations",
        RESERVATIONS_ALL: "/dashboard/v2/reservations",
        RESERVATION_SHOW: "/show-reservation",
        PROFILE: "/user/profile",
        PROFILE_UPDATE: "/user/profile/update",
        CHANGE_PASSWORD: "/user/change-password",
        TRANSACTIONS: "/transactions",
        AI_CONVERSATIONS: "/ai-conversations",
        NOTIFICATIONS: "/notifications",
        COUNTRIES: "/dashboard/countries",
        FEATURES: "/features",
        STATES: "/dashboard/states",
        DEVELOPERS: "/developers",
        DEVELOPER_DETAIL: (id)=>`/dashboard/developers/${id}`,
        EXPERTS: "/experts",
        EXPERT_DETAIL: (id)=>`/dashboard/experts/${id}`,
        EXPERT_TOGGLE_STATUS: (id)=>`/dashboard/experts/${id}/toggle-status`
    },
    SUPPORT: {
        CONVERSATIONS: "/support/conversations",
        CONVERSATION_MESSAGES: (conversationId)=>`/support/conversations/${conversationId}/messages`,
        CONVERSATION_READ: (conversationId)=>`/support/conversations/${conversationId}/read`
    },
    V2: {
        RESERVATIONS: "/dashboard/v2/reservations",
        RESERVATION_DETAIL: (id)=>`/dashboard/v2/reservations/${id}`,
        APPROVE_RESERVATION: "/dashboard/v2/reservations/admin/approve",
        SALES_OFFER: "/dashboard/v2/reservations/sales-offer",
        SALES_PURCHASE_AGREEMENT: (id)=>`/dashboard/v2/reservations/${id}/sales-purchase-agreement`,
        OFFERS: "/dashboard/v2/offers"
    }
};
}),
"[project]/src/data/api/services/auth.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "forgetPassword",
    ()=>forgetPassword,
    "resetPassword",
    ()=>resetPassword,
    "signUpAdmin",
    ()=>signUpAdmin,
    "verifyToken",
    ()=>verifyToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/endpoints.ts [app-ssr] (ecmascript)");
;
;
const signUpAdmin = async (userData)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postDataAuth"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].AUTH.REGISTER, userData);
};
const forgetPassword = async (userData)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postDataAuth"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].AUTH.FORGET_PASSWORD, userData);
};
const verifyToken = (verifyTokenData)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postDataAuth"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].AUTH.VERIFY_TOKEN, verifyTokenData);
const resetPassword = (resetPasswordData)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postDataAuth"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].AUTH.RESET_PASSWORD, resetPasswordData);
}),
"[project]/src/data/api/services/permissions.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminPermissionsService",
    ()=>AdminPermissionsService,
    "createNewPermission",
    ()=>createNewPermission,
    "deleteExistingPermission",
    ()=>deleteExistingPermission,
    "fetchAllPermissions",
    ()=>fetchAllPermissions,
    "fetchPermissionDetail",
    ()=>fetchPermissionDetail,
    "updateExistingPermission",
    ()=>updateExistingPermission
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiClient.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/endpoints.ts [app-ssr] (ecmascript)");
;
;
;
const AdminPermissionsService = {
    // GET /api/dashboard/permissions
    getPermissions: (params)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get("/dashboard/permissions", {
            params
        });
    },
    // POST /api/dashboard/permissions
    createPermission: (data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post("/dashboard/permissions", data);
    },
    // GET /api/dashboard/permissions/:permission
    getPermission: (permissionId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/permissions/${permissionId}`);
    },
    // PUT {{base_url}}/api/dashboard/permissions/:permission
    // Using POST with _method: "PUT" (standard Laravel/REST convention) or direct PUT
    updatePermission: (permissionId, data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`/dashboard/permissions/${permissionId}`, {
            ...data,
            _method: "PUT"
        });
    },
    // Direct PUT /api/dashboard/permissions/:permission
    putPermission: (permissionId, data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].put(`/dashboard/permissions/${permissionId}`, data);
    },
    // DELETE /api/dashboard/permissions/:permission
    deletePermission: (permissionId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].delete(`/dashboard/permissions/${permissionId}`);
    }
};
const fetchAllPermissions = (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PERMISSIONS.BASE, token);
const fetchPermissionDetail = (permissionId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PERMISSIONS.DETAIL(permissionId), token);
const createNewPermission = (data, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PERMISSIONS.BASE, data, token);
const updateExistingPermission = (permissionId, data, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PERMISSIONS.DETAIL(permissionId), data, token);
const deleteExistingPermission = (permissionId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PERMISSIONS.DETAIL(permissionId), token);
}),
"[project]/src/data/api/services/users.service.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminRolesService",
    ()=>AdminRolesService,
    "addPermission",
    ()=>addPermission,
    "addRoles",
    ()=>addRoles,
    "addRolesPermission",
    ()=>addRolesPermission,
    "addUser",
    ()=>addUser,
    "deletePermission",
    ()=>deletePermission,
    "deleteRoles",
    ()=>deleteRoles,
    "deleteRolesPermissions",
    ()=>deleteRolesPermissions,
    "deleteUser",
    ()=>deleteUser,
    "editPermission",
    ()=>editPermission,
    "editRoles",
    ()=>editRoles,
    "editUser",
    ()=>editUser,
    "fetchDashboardUsers",
    ()=>fetchDashboardUsers,
    "fetchPermissionDetails",
    ()=>fetchPermissionDetails,
    "fetchPermissions",
    ()=>fetchPermissions,
    "fetchRoles",
    ()=>fetchRoles,
    "fetchRolesDetails",
    ()=>fetchRolesDetails,
    "fetchUsers",
    ()=>fetchUsers,
    "fetchUsersDetails",
    ()=>fetchUsersDetails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/endpoints.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiClient.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$permissions$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/permissions.service.ts [app-ssr] (ecmascript)");
;
;
const fetchUsers = (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchDataWithPagination"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].USERS.BASE, token);
const fetchDashboardUsers = (token, page = 1, perPage = 15, search)=>{
    const params = new URLSearchParams({
        page: page.toString(),
        per_page: perPage.toString()
    });
    if (search && search.trim() !== "") {
        params.append("search", search.trim());
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])(`/dashboard/users?${params.toString()}`, token);
};
const fetchPermissions = (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].USERS.PERMISSIONS, token);
const fetchRoles = (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].USERS.ROLES, token);
const fetchUsersDetails = (userId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].USERS.DETAIL(userId), token);
const fetchPermissionDetails = (permissionId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].USERS.PERMISSION_DETAIL(permissionId), token);
const fetchRolesDetails = (roleId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].USERS.ROLE_DETAIL(roleId), token);
const addUser = (userData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].USERS.BASE, userData, token);
const addPermission = (permissionData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].USERS.PERMISSIONS, permissionData, token);
const addRoles = (rolesData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].USERS.ROLES_RAW, rolesData, token);
const addRolesPermission = (rolesPermissionsData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].USERS.ROLES_PERMISSIONS, rolesPermissionsData, token);
const editUser = (userId, userData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].USERS.BY_ID(userId), userData, token);
const editPermission = (permissionId, permissionData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].USERS.PERMISSION_DETAIL(permissionId), permissionData, token);
const editRoles = (rolesId, rolesData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].USERS.ROLE_DETAIL(rolesId), rolesData, token);
const deleteUser = (userId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].USERS.BY_ID(userId), token);
const deletePermission = (permissionId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].USERS.PERMISSION_DETAIL(permissionId), token);
const deleteRoles = (rolesId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].USERS.ROLE_DETAIL(rolesId), token);
const deleteRolesPermissions = (rolesId, permissionId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].USERS.ROLE_PERMISSIONS_DELETE(rolesId, permissionId), token);
;
const AdminRolesService = {
    getRoles: ()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get("/dashboard/roles");
    },
    getRole: (roleId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/roles/${roleId}`);
    },
    // Case 1: POST /api/dashboard/roles
    createRole: (data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post("/dashboard/roles", data);
    },
    // Case 2: PUT /api/dashboard/roles/:id
    updateRole: (roleId, data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].put(`/dashboard/roles/${roleId}`, data);
    },
    deleteRole: (roleId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].delete(`/dashboard/roles/${roleId}`);
    },
    // Case 3: POST /api/dashboard/roles/permissions
    addPermissions: (data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post("/dashboard/roles/permissions", data);
    },
    assignPermissions: async (roleId, permissionIds)=>{
        if (!roleId || !permissionIds || permissionIds.length === 0) return;
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post("/dashboard/roles/permissions", {
            role_id: roleId,
            permission_ids: permissionIds
        });
    },
    deletePermission: (roleId, permissionId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].delete(`/dashboard/roles/${roleId}/permissions/${permissionId}`);
    }
};
;
}),
"[project]/src/data/api/services/projects.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addBuilding",
    ()=>addBuilding,
    "addMilestone",
    ()=>addMilestone,
    "addPaymentPlan",
    ()=>addPaymentPlan,
    "addPaymentPlanItem",
    ()=>addPaymentPlanItem,
    "addPaymentPlansBulk",
    ()=>addPaymentPlansBulk,
    "addProject",
    ()=>addProject,
    "addProjectFeature",
    ()=>addProjectFeature,
    "addProjectMedia",
    ()=>addProjectMedia,
    "addProjectPayment",
    ()=>addProjectPayment,
    "addProjectPaymentBulk",
    ()=>addProjectPaymentBulk,
    "deleteBuilding",
    ()=>deleteBuilding,
    "deleteMilestone",
    ()=>deleteMilestone,
    "deletePaymentPlan",
    ()=>deletePaymentPlan,
    "deleteProject",
    ()=>deleteProject,
    "deleteProjectFeature",
    ()=>deleteProjectFeature,
    "deleteProjectMedia",
    ()=>deleteProjectMedia,
    "deleteProjectPayment",
    ()=>deleteProjectPayment,
    "editBuilding",
    ()=>editBuilding,
    "editMilestone",
    ()=>editMilestone,
    "editProject",
    ()=>editProject,
    "editProjectFeature",
    ()=>editProjectFeature,
    "editProjectMedia",
    ()=>editProjectMedia,
    "editProjectPayment",
    ()=>editProjectPayment,
    "fetchBuildings",
    ()=>fetchBuildings,
    "fetchBuildingsDetails",
    ()=>fetchBuildingsDetails,
    "fetchMileStones",
    ()=>fetchMileStones,
    "fetchMilestonesDetails",
    ()=>fetchMilestonesDetails,
    "fetchPaymentPlans",
    ()=>fetchPaymentPlans,
    "fetchProjectFeatureDetails",
    ()=>fetchProjectFeatureDetails,
    "fetchProjectMediaDetails",
    ()=>fetchProjectMediaDetails,
    "fetchProjectPaymentDetails",
    ()=>fetchProjectPaymentDetails,
    "fetchProjectsDetails",
    ()=>fetchProjectsDetails,
    "fetchProjectsDropdown",
    ()=>fetchProjectsDropdown,
    "fetchProjectsPaginated",
    ()=>fetchProjectsPaginated,
    "fetchV2Projects",
    ()=>fetchV2Projects,
    "updatePaymentPlan",
    ()=>updatePaymentPlan
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/endpoints.ts [app-ssr] (ecmascript)");
;
;
const fetchProjectsPaginated = (token, page = 1, per_page = 10, search, status, project_type)=>{
    const params = new URLSearchParams({
        page: page.toString(),
        per_page: per_page.toString()
    });
    if (search) params.append("search", search);
    if (status) params.append("status", status);
    if (project_type) params.append("project_type", project_type);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchPaginatedData"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.BASE}?${params.toString()}`, token);
};
const fetchMileStones = (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.MILESTONES, token);
const fetchBuildings = (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.BUILDINGS, token);
const fetchProjectsDetails = (projectId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.DETAIL(projectId), token);
const fetchMilestonesDetails = (projectId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.MILESTONE_DETAIL(projectId), token);
const fetchBuildingsDetails = (buildingId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.BUILDING_DETAIL(buildingId), token);
const fetchProjectFeatureDetails = (projectId, featureId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.FEATURE_DETAIL(projectId, featureId), token);
const fetchProjectMediaDetails = (mediaId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.MEDIA_DETAIL(mediaId), token);
const fetchProjectPaymentDetails = (paymentId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.PAYMENT_PLAN_DETAIL(paymentId), token);
const addProject = (data, token)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.BASE, data, token).then((res)=>res.data);
};
const addMilestone = (milestoneData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.MILESTONES, milestoneData, token);
const addBuilding = (buildingData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.BUILDINGS, buildingData, token);
const addProjectFeature = (projectFeatureData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.FEATURES, projectFeatureData, token);
const addProjectMedia = (projectMediaData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postDataImg"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.MEDIA_CREATE, projectMediaData, token);
const fetchPaymentPlans = (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.PAYMENT_PLANS, token);
const addPaymentPlan = (paymentPlanData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.PAYMENT_PLANS, paymentPlanData, token);
const addPaymentPlansBulk = (bulkData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.PAYMENT_PLAN_BULK, bulkData, token);
const addProjectPayment = (projectPaymentData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.PAYMENT_PLANS, projectPaymentData, token);
const addProjectPaymentBulk = (projectPaymentData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.PAYMENT_PLAN_BULK, projectPaymentData, token);
const addPaymentPlanItem = (paymentPlanItemData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.PAYMENT_PLAN_ITEMS, paymentPlanItemData, token);
const deletePaymentPlan = (paymentPlanId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.PAYMENT_PLAN_DETAIL(paymentPlanId), token);
const updatePaymentPlan = (paymentPlanId, paymentPlanData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["patchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.PAYMENT_PLAN_DETAIL(paymentPlanId), paymentPlanData, token);
const editProject = (projectId, projectData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.DETAIL(projectId), projectData, token);
const editMilestone = (milestoneId, milestoneData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.MILESTONE_DETAIL(milestoneId), milestoneData, token);
const editBuilding = (buildingId, buildingData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.BUILDING_DETAIL(buildingId), buildingData, token);
const editProjectFeature = (projectId, featureId, projectFeatureData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.FEATURE_DETAIL(projectId, featureId), projectFeatureData, token);
const editProjectMedia = (mediaId, projectMediaData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.MEDIA_DASHBOARD_DETAIL(mediaId), projectMediaData, token);
const editProjectPayment = (paymentId, projectPaymentData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["patchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.PAYMENT_PLAN_DETAIL(paymentId), projectPaymentData, token);
const deleteProject = (projectId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.RAW_DETAIL(projectId), token);
const deleteMilestone = (milestoneId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.MILESTONE_DETAIL(milestoneId), token);
const deleteBuilding = (buildingId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.BUILDING_DETAIL(buildingId), token);
const deleteProjectFeature = (projectId, featureId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.FEATURE_DETAIL(projectId, featureId), token);
const deleteProjectMedia = (media_id, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.MEDIA_DASHBOARD_DETAIL(media_id), token);
const deleteProjectPayment = (payment_id, projectId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.PAYMENT_PLAN_DETAIL(payment_id), token);
const fetchProjectsDropdown = (token, developerId, search, countryId)=>{
    const params = new URLSearchParams();
    if (developerId) params.append("developer_id", developerId.toString());
    if (search) params.append("search", search);
    if (countryId) params.append("country_id", countryId);
    const queryStr = params.toString() ? `?${params.toString()}` : "";
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.DROPDOWN}${queryStr}`, token);
};
const fetchV2Projects = (token, page = 1, per_page = 12, developerId, search)=>{
    const params = new URLSearchParams({
        page: page.toString(),
        per_page: per_page.toString()
    });
    if (developerId) params.append("developer_id", developerId.toString());
    if (search) params.append("search", search);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])(`/v2/projects?${params.toString()}`, token);
};
}),
"[project]/src/data/api/services/properties.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addProperty",
    ()=>addProperty,
    "addPropertyFeature",
    ()=>addPropertyFeature,
    "addPropertyMedia",
    ()=>addPropertyMedia,
    "addPropertySubtype",
    ()=>addPropertySubtype,
    "addPropertyType",
    ()=>addPropertyType,
    "deleteProperty",
    ()=>deleteProperty,
    "deletePropertyFeature",
    ()=>deletePropertyFeature,
    "deletePropertyMedia",
    ()=>deletePropertyMedia,
    "deletePropertyPayment",
    ()=>deletePropertyPayment,
    "deletePropertySubtype",
    ()=>deletePropertySubtype,
    "deletePropertyType",
    ()=>deletePropertyType,
    "editProperty",
    ()=>editProperty,
    "editPropertyFeature",
    ()=>editPropertyFeature,
    "editPropertyMedia",
    ()=>editPropertyMedia,
    "editPropertySubtype",
    ()=>editPropertySubtype,
    "editPropertyType",
    ()=>editPropertyType,
    "fetchImportProperties",
    ()=>fetchImportProperties,
    "fetchProperties",
    ()=>fetchProperties,
    "fetchPropertiesByDeveloper",
    ()=>fetchPropertiesByDeveloper,
    "fetchPropertiesSorted",
    ()=>fetchPropertiesSorted,
    "fetchPropertyDetails",
    ()=>fetchPropertyDetails,
    "fetchPropertyFeatureDetails",
    ()=>fetchPropertyFeatureDetails,
    "fetchPropertyMediaDetails",
    ()=>fetchPropertyMediaDetails,
    "fetchPropertySubtype",
    ()=>fetchPropertySubtype,
    "fetchPropertySubtypesDetails",
    ()=>fetchPropertySubtypesDetails,
    "fetchPropertyTypes",
    ()=>fetchPropertyTypes,
    "fetchPropertyTypesDetails",
    ()=>fetchPropertyTypesDetails,
    "savePropertyFeaturesBulk",
    ()=>savePropertyFeaturesBulk
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/endpoints.ts [app-ssr] (ecmascript)");
;
;
const fetchPropertyTypes = (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchPropertiesCreateData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROPERTIES.TYPES, token);
const fetchPropertySubtype = (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchPropertiesCreateData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROPERTIES.SUBTYPES, token);
const fetchPropertiesByDeveloper = (token, developer_id, status = "active", per_page = "all", search)=>{
    const params = new URLSearchParams({
        developer_id: developer_id.toString(),
        status,
        per_page
    });
    if (search) {
        params.append("search", search);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROPERTIES.BASE}?${params.toString()}`, token);
};
const fetchProperties = (sortBy = [], sortOrder = [], selectedCountries = [], selectedDevelopers = [], selectedProjects = [], per_page = "all", page)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchPropertiesData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROPERTIES.FILTER, sortBy, sortOrder, selectedCountries, selectedDevelopers, selectedProjects, per_page, page);
const fetchPropertiesSorted = (sortBy)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData2"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROPERTIES.GET_PROPERTY}?sort_by=${sortBy}`);
const fetchImportProperties = (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROPERTIES.BASE, token);
const fetchPropertyTypesDetails = (propertyTypeId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROPERTIES.TYPE_DETAIL(propertyTypeId), token);
const fetchPropertySubtypesDetails = (propertySubtypeId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROPERTIES.SUBTYPE_DETAIL(propertySubtypeId), token);
const fetchPropertyDetails = (propertyId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROPERTIES.DETAIL(propertyId), token);
const fetchPropertyMediaDetails = (mediaId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROPERTIES.MEDIA_DETAIL(mediaId), token);
const fetchPropertyFeatureDetails = (propertyId, featureId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROPERTIES.FEATURE_DETAIL(propertyId, featureId), token);
const addPropertyType = (propertyTypeData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROPERTIES.TYPES_RAW, propertyTypeData, token);
const addPropertySubtype = (propertySubtypeData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROPERTIES.SUBTYPES_RAW, propertySubtypeData, token);
const addProperty = (propertyData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROPERTIES.BASE, propertyData, token);
const addPropertyFeature = (propertyFeatureData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROPERTIES.FEATURES, propertyFeatureData, token);
const savePropertyFeaturesBulk = (propertyFeaturesData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROPERTIES.FEATURES, propertyFeaturesData, token);
const addPropertyMedia = (propertyMediaData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postDataImg"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROPERTIES.MEDIA, propertyMediaData, token);
const editPropertyType = (propertyTypeId, propertyTypeData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROPERTIES.TYPE_DETAIL(propertyTypeId), propertyTypeData, token);
const editPropertySubtype = (propertySubtypeId, propertySubtypeData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROPERTIES.SUBTYPE_DETAIL(propertySubtypeId), propertySubtypeData, token);
const editProperty = (propertyId, propertyData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROPERTIES.BY_ID(propertyId), propertyData, token);
const editPropertyFeature = (propertyId, featureId, propertyFeatureData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROPERTIES.FEATURE_DETAIL(propertyId, featureId), propertyFeatureData, token);
const editPropertyMedia = (mediaId, propertyMediaData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROPERTIES.MEDIA_DETAIL(mediaId), propertyMediaData, token);
const deletePropertyType = (propertyTypeId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROPERTIES.TYPE_DETAIL(propertyTypeId), token);
const deletePropertySubtype = (propertySubtypeId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROPERTIES.SUBTYPE_DETAIL(propertySubtypeId), token);
const deleteProperty = (propertyId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROPERTIES.BY_ID(propertyId), token);
const deletePropertyFeature = (propertyId, featureId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROPERTIES.FEATURE_DETAIL(propertyId, featureId), token);
const deletePropertyMedia = (media_id, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROPERTIES.MEDIA_DETAIL(media_id), token);
const deletePropertyPayment = (payment_id, propId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.PAYMENT_PLAN_DETAIL(payment_id), token);
}),
"[project]/src/data/api/services/locations.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminAreasService",
    ()=>AdminAreasService,
    "AdminCitiesService",
    ()=>AdminCitiesService,
    "AdminDldAreasService",
    ()=>AdminDldAreasService,
    "AdminLocationsService",
    ()=>AdminLocationsService,
    "addAddress",
    ()=>addAddress,
    "addArea",
    ()=>addArea,
    "addCity",
    ()=>addCity,
    "addDldArea",
    ()=>addDldArea,
    "addLocation",
    ()=>addLocation,
    "deleteAddress",
    ()=>deleteAddress,
    "deleteArea",
    ()=>deleteArea,
    "deleteDldArea",
    ()=>deleteDldArea,
    "deleteLocation",
    ()=>deleteLocation,
    "editAddress",
    ()=>editAddress,
    "editArea",
    ()=>editArea,
    "editCity",
    ()=>editCity,
    "editDldarea",
    ()=>editDldarea,
    "editLocation",
    ()=>editLocation,
    "fetchAddressDetails",
    ()=>fetchAddressDetails,
    "fetchAddresses",
    ()=>fetchAddresses,
    "fetchAreaDetails",
    ()=>fetchAreaDetails,
    "fetchAreas",
    ()=>fetchAreas,
    "fetchAreasByCountry",
    ()=>fetchAreasByCountry,
    "fetchCities",
    ()=>fetchCities,
    "fetchCitiesWithParams",
    ()=>fetchCitiesWithParams,
    "fetchCityDetails",
    ()=>fetchCityDetails,
    "fetchDldAreaDetails",
    ()=>fetchDldAreaDetails,
    "fetchDldAreas",
    ()=>fetchDldAreas,
    "fetchLocationsDetails",
    ()=>fetchLocationsDetails,
    "fetchStatesByCountry",
    ()=>fetchStatesByCountry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/endpoints.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiClient.ts [app-ssr] (ecmascript)");
;
;
const fetchDldAreas = (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchDLDAreasData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].LOCATIONS.DASHBOARD_AREAS, token);
const fetchAreas = (token, page, perPage)=>{
    const endpoint = perPage ? `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].LOCATIONS.AREAS}?page=${page || 1}&per_page=${perPage}` : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].LOCATIONS.AREAS;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchPropertiesIdData"])(endpoint, token);
};
const fetchCities = (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].LOCATIONS.DASHBOARD_CITIES, token);
const fetchCityDetails = (cityId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].LOCATIONS.CITIES_DETAIL(cityId), token);
const fetchCitiesWithParams = (token, page = 1, perPage = 10, search)=>{
    const params = new URLSearchParams();
    params.append("page", page.toString());
    params.append("per_page", perPage.toString());
    if (search) params.append("search", search);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchPaginatedData"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].LOCATIONS.DASHBOARD_CITIES}?${params.toString()}`, token);
};
const fetchAreasByCountry = (countryName, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].LOCATIONS.AREAS_ALL}?country=${encodeURIComponent(countryName)}`, token);
const fetchStatesByCountry = (countryName, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].LOCATIONS.STATES}?country=${encodeURIComponent(countryName)}`, token);
const fetchAddresses = (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].LOCATIONS.ADDRESSES, token);
const fetchAreaDetails = (areaId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].LOCATIONS.AREAS_DETAIL(areaId), token);
const fetchDldAreaDetails = (dldAreaId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].LOCATIONS.DLD_AREAS_DETAIL(dldAreaId), token);
const fetchLocationsDetails = (locationId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].LOCATIONS.DASHBOARD_LOCATIONS_DETAIL(locationId), token);
const fetchAddressDetails = (addressId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].LOCATIONS.ADDRESSES_DETAIL(addressId), token);
const addArea = (areaData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].LOCATIONS.AREAS, areaData, token);
const addCity = (cityData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].LOCATIONS.CITIES, cityData, token);
const addDldArea = (dldAreaData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].LOCATIONS.DLD_AREAS, dldAreaData, token);
const addLocation = (locationData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].LOCATIONS.LOCATIONS, locationData, token);
const addAddress = (addressData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].LOCATIONS.ADDRESSES, addressData, token);
const editArea = (areaId, areaData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].LOCATIONS.AREAS_DETAIL(areaId), areaData, token);
const editCity = (cityId, cityData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].LOCATIONS.CITIES_DETAIL(cityId), cityData, token);
const editDldarea = (dldAreaId, dldAreaData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].LOCATIONS.DLD_AREAS_DETAIL(dldAreaId), dldAreaData, token);
const editLocation = (locationId, locationData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].LOCATIONS.DASHBOARD_LOCATIONS_DETAIL(locationId), locationData, token);
const editAddress = (addressId, addressData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].LOCATIONS.ADDRESSES_DETAIL(addressId), addressData, token);
const deleteArea = (areaId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].LOCATIONS.AREAS_DETAIL(areaId), token);
const deleteDldArea = (dldAreaId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].LOCATIONS.DLD_AREAS_DETAIL(dldAreaId), token);
const deleteLocation = (locationId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].LOCATIONS.DASHBOARD_LOCATIONS_DETAIL(locationId), token);
const deleteAddress = (addressId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].LOCATIONS.ADDRESSES_DETAIL(addressId), token);
;
const AdminLocationsService = {
    getLocations: (page = 1, perPage = 10, search, city, status)=>{
        const params = new URLSearchParams({
            page: page.toString(),
            per_page: perPage.toString()
        });
        if (search && search.trim() !== "") params.append("search", search.trim());
        if (city && city !== "all") params.append("city_name", city);
        if (status && status !== "all") params.append("status", status);
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/locations?${params.toString()}`);
    },
    getLocation: (locationId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/locations/${locationId}`);
    },
    createLocation: (data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post("/dashboard/locations", data);
    },
    updateLocation: (locationId, data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].put(`/dashboard/locations/${locationId}`, data);
    },
    deleteLocation: (locationId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].delete(`/dashboard/locations/${locationId}`);
    }
};
const AdminAreasService = {
    getAreas: (page = 1, perPage = 15, search, status)=>{
        const params = new URLSearchParams({
            page: page.toString(),
            per_page: perPage.toString(),
            request: perPage.toString()
        });
        if (search && search.trim() !== "") params.append("search", search.trim());
        if (status && status !== "all") params.append("status", status);
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/dldAreas?${params.toString()}`);
    },
    getAreasByCountry: (country)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/areas/all?country=${country}`);
    },
    getArea: (areaId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/dldAreas/${areaId}`);
    },
    createArea: (data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post("/dashboard/dldAreas", data);
    },
    updateArea: (areaId, data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].put(`/dashboard/dldAreas/${areaId}`, data);
    },
    deleteArea: (areaId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].delete(`/dashboard/dldAreas/${areaId}`);
    }
};
const AdminCitiesService = {
    getAllCities: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get("/dashboard/cities/all");
        const envelope = response.data;
        return envelope.data;
    },
    getCitiesByCountry: (country)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/cities/all?country=${country}`);
    },
    getCities: (page = 1, perPage = 10, search)=>{
        const params = new URLSearchParams({
            page: page.toString(),
            per_page: perPage.toString()
        });
        if (search && search.trim() !== "") params.append("search", search.trim());
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/cities?${params.toString()}`);
    },
    getCity: (cityId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/cities/${cityId}`);
    },
    createCity: (data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post("/dashboard/cities", data);
    },
    updateCity: (cityId, data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].put(`/dashboard/cities/${cityId}`, data);
    },
    deleteCity: (cityId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].delete(`/dashboard/cities/${cityId}`);
    }
};
const AdminDldAreasService = {
    getAllDldAreas: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get("/dashboard/areas");
        const envelope = response.data;
        return envelope.data;
    },
    getDldArea: (dldAreaId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/dldAreas/${dldAreaId}`);
    },
    createDldArea: (data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post("/dldAreas", data);
    },
    updateDldArea: (dldAreaId, data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].put(`/dldAreas/${dldAreaId}`, data);
    },
    deleteDldArea: (dldAreaId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].delete(`/dldAreas/${dldAreaId}`);
    }
};
}),
"[project]/src/data/api/services/ads.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminAdsService",
    ()=>AdminAdsService,
    "createAd",
    ()=>createAd,
    "deleteAd",
    ()=>deleteAd,
    "fetchAd",
    ()=>fetchAd,
    "fetchAds",
    ()=>fetchAds,
    "fetchAdsTotals",
    ()=>fetchAdsTotals,
    "toggleAdStatus",
    ()=>toggleAdStatus,
    "updateAd",
    ()=>updateAd,
    "updateAdStatus",
    ()=>updateAdStatus,
    "updateAdStatusUsingCreateEndpoint",
    ()=>updateAdStatusUsingCreateEndpoint
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/endpoints.ts [app-ssr] (ecmascript)");
;
;
const fetchAds = (token, page = 1, per_page = 15, filters)=>{
    const params = new URLSearchParams({
        page: page.toString(),
        per_page: per_page.toString()
    });
    if (filters) {
        if (filters.status && filters.status !== "all") {
            params.append("status", filters.status);
        }
        if (filters.platform && filters.platform !== "all") {
            params.append("platform", filters.platform);
        }
        if (filters.format && filters.format !== "all") {
            params.append("format", filters.format);
        }
        if (filters.search && filters.search.trim() !== "") {
            params.append("search", filters.search.trim());
        }
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchAdsData"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.ADS}?${params.toString()}`, token);
};
const fetchAdsTotals = (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchDataTotals"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.ADS_TOTALS, token);
const fetchAd = (adId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.ADS_DETAIL(adId), token);
const updateAd = (adId, adData, token)=>{
    if (adData instanceof FormData && adData.has("_method")) {
        adData.delete("_method");
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postDataImg"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.ADS_DETAIL(adId), adData, token);
};
const deleteAd = (adId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.ADS_DETAIL(adId), token);
const createAd = (adData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postDataImg"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.ADS, adData, token);
const updateAdStatus = (adId, status, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.ADS_DETAIL(adId), {
        is_active: status
    }, token);
const updateAdStatusUsingCreateEndpoint = (adId, status, token)=>{
    const adData = {
        campaign: {
            start_at: null,
            end_at: null,
            daily_cap_credits: null,
            status: status
        },
        placement: {
            platform: null,
            location: null,
            format: null,
            billing_unit: null
        },
        country_id: null,
        entity_type: null,
        entity_id: null,
        title: null,
        weight: null
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.ADS_DETAIL(adId), adData, token);
};
const toggleAdStatus = (adId, newStatus, token)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["patchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.ADS_TOGGLE_STATUS(adId), newStatus, token);
};
const AdminAdsService = {
    getAds: (page = 1, perPage = 15, filters)=>{
        const params = new URLSearchParams({
            page: page.toString(),
            per_page: perPage.toString(),
            type: "ad"
        });
        if (filters?.status && filters.status !== "all") {
            params.append("status", filters.status);
        }
        if (filters?.platform && filters.platform !== "all") {
            params.append("platform", filters.platform);
        }
        if (filters?.format && filters.format !== "all") {
            params.append("format", filters.format);
        }
        if (filters?.search && filters.search.trim() !== "") {
            params.append("search", filters.search.trim());
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchAdsData"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.ADS}?${params.toString()}`);
    },
    getAdsTotals: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchDataTotals"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.ADS_TOTALS),
    getAd: (adId, token)=>fetchAd(adId, token),
    createAd: (data, token)=>createAd(data, token),
    updateAd: (adId, data, token)=>updateAd(adId, data, token),
    deleteAd: (adId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.ADS_DETAIL(adId)),
    toggleStatus: (adId, status)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["patchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.ADS_TOGGLE_STATUS(adId), status)
};
}),
"[project]/src/data/api/services/campaigns.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createCampaign",
    ()=>createCampaign,
    "deleteCampaign",
    ()=>deleteCampaign,
    "fetchCampaignStats",
    ()=>fetchCampaignStats,
    "fetchCampaigns",
    ()=>fetchCampaigns,
    "updateCampaign",
    ()=>updateCampaign,
    "updateCampaignStatus",
    ()=>updateCampaignStatus,
    "viewCampaign",
    ()=>viewCampaign
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/endpoints.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/config.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.ts [app-ssr] (ecmascript)");
;
;
;
const fetchCampaignStats = async (type, token)=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient2"].get(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.CAMPAIGNS}/stats?type=${type}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res.data;
    } catch (error) {
        console.error(`Failed to fetch campaign stats for ${type}:`, error);
        throw error;
    }
};
const createCampaign = async (campaignData, token, customBaseUrl)=>{
    try {
        const isFormData = typeof FormData !== "undefined" && campaignData instanceof FormData;
        const baseUrl = customBaseUrl || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BASE_URL"];
        const url = baseUrl ? `${baseUrl.replace(/\/+$/, "")}${baseUrl.includes("/api") ? "" : "/api"}${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.CAMPAIGNS}` : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.CAMPAIGNS;
        const headers = {
            Authorization: `Bearer ${token}`
        };
        if (isFormData) {
            headers["Content-Type"] = "multipart/form-data";
        }
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient2"].post(url, campaignData, {
            headers
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleError"])(error, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.CAMPAIGNS);
        throw error;
    }
};
const fetchCampaigns = async (type, token, page, perPage, search)=>{
    try {
        let url = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.CAMPAIGNS}?type=${type}`;
        if (page) url += `&page=${page}`;
        if (perPage) url += `&per_page=${perPage}`;
        if (search) {
            const encoded = encodeURIComponent(search);
            url += `&search=${encoded}&keyword=${encoded}&query=${encoded}`;
        }
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient2"].get(url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res.data;
    } catch (error) {
        console.error(`Failed to fetch campaigns for ${type}:`, error);
        throw error;
    }
};
const viewCampaign = async (id, token)=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient2"].get(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.CAMPAIGNS}/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res.data;
    } catch (error) {
        console.error(`Failed to fetch campaign details for ${id}:`, error);
        throw error;
    }
};
const updateCampaign = async (id, campaignData, token)=>{
    try {
        const isFormData = campaignData instanceof FormData;
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient2"].post(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.CAMPAIGNS}/${id}`, campaignData, {
            headers: {
                Authorization: `Bearer ${token}`,
                ...isFormData ? {
                    "Content-Type": undefined
                } : {}
            }
        });
        return res.data;
    } catch (error) {
        console.error(`Failed to update campaign ${id}:`, error);
        throw error;
    }
};
const updateCampaignStatus = async (id, status, token)=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient2"].patch(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.CAMPAIGNS}/${id}/status`, {
            status
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res.data;
    } catch (error) {
        console.error(`Failed to update status for campaign ${id}:`, error);
        throw error;
    }
};
const deleteCampaign = async (id, token)=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient2"].delete(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.CAMPAIGNS}/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res.data;
    } catch (error) {
        console.error(`Failed to delete campaign ${id}:`, error);
        throw error;
    }
};
}),
"[project]/src/data/api/services/credits.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminSubscriptionsService",
    ()=>AdminSubscriptionsService,
    "createAdCreditPackage",
    ()=>createAdCreditPackage,
    "deleteAdCreditPackage",
    ()=>deleteAdCreditPackage,
    "fetchAdCreditPackages",
    ()=>fetchAdCreditPackages,
    "generateAdCreditPackageCode",
    ()=>generateAdCreditPackageCode,
    "purchaseAdCreditPackage",
    ()=>purchaseAdCreditPackage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiClient.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/endpoints.ts [app-ssr] (ecmascript)");
;
;
;
const generateAdCreditPackageCode = ()=>{
    const timestamp = Date.now();
    const randomSuffix = Math.random().toString(36).substring(2, 8).toUpperCase();
    return `AD-PKG-${timestamp}-${randomSuffix}`;
};
const validateCreateAdCreditPackageParams = (params)=>{
    if (!params.name || params.name.trim() === "") {
        throw new Error("Package name is required");
    }
    if (params.price_cents < 0) {
        throw new Error("Price must be non-negative");
    }
    if (params.credits < 1) {
        throw new Error("Credits must be at least 1");
    }
};
const createAdCreditPackage = async (token, params)=>{
    validateCreateAdCreditPackageParams(params);
    const code = generateAdCreditPackageCode();
    try {
        const headers = {
            "Content-Type": "application/json"
        };
        if (token) {
            headers["Authorization"] = `Bearer ${token}`;
        }
        const payload = {
            code,
            name: params.name.trim(),
            price_cents: params.price_cents,
            currency: "AED",
            credits: params.credits,
            sort_order: 0,
            is_active: params.is_active ?? true
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].syncToken(token);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.CREDITS, payload, {
            headers
        });
        return response.data;
    } catch (error) {
        const axiosError = error;
        const errorData = axiosError.response?.data;
        if (errorData?.errors && Object.keys(errorData.errors).length > 0) {
            const errorMessages = Object.entries(errorData.errors).map(([field, messages])=>`${field}: ${messages.join(", ")}`).join("; ");
            const apiError = new Error(errorData.message || "Validation failed");
            apiError.details = errorMessages;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleError"])(error, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.CREDITS);
            throw apiError;
        }
        const errorMessage = errorData?.message || (axiosError.message ? `Request failed: ${axiosError.message}` : "Failed to create package");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleError"])(error, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.CREDITS);
        throw new Error(errorMessage);
    }
};
const deleteAdCreditPackage = async (token, packageId)=>{
    if (!packageId || packageId <= 0) {
        throw new Error("Invalid package ID");
    }
    if (!token) {
        throw new Error("Authentication token is required");
    }
    try {
        const headers = {
            "Content-Type": "application/json"
        };
        headers["Authorization"] = `Bearer ${token}`;
        const endpoint = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.CREDITS}/${packageId}`;
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].syncToken(token);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].delete(endpoint, {
            headers
        });
        return response.data;
    } catch (error) {
        const axiosError = error;
        const errorData = axiosError.response?.data;
        if (errorData?.errors && Object.keys(errorData.errors).length > 0) {
            const errorMessages = Object.entries(errorData.errors).map(([field, messages])=>`${field}: ${messages.join(", ")}`).join("; ");
            const apiError = new Error(errorData.message || "Validation failed");
            apiError.details = errorMessages;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleError"])(error, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.CREDITS);
            throw apiError;
        }
        const errorMessage = errorData?.message || (axiosError.message ? `Request failed: ${axiosError.message}` : "Failed to delete package");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleError"])(error, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.CREDITS);
        throw new Error(errorMessage);
    }
};
const fetchAdCreditPackages = async (token, params)=>{
    try {
        const headers = {
            "Content-Type": "application/json"
        };
        if (token) {
            headers["Authorization"] = `Bearer ${token}`;
        }
        const queryParams = new URLSearchParams();
        if (params?.page) {
            queryParams.append("page", params.page.toString());
        }
        if (params?.limit) {
            queryParams.append("limit", params.limit.toString());
        }
        if (params?.sort_by) {
            queryParams.append("sort_by", params.sort_by);
        }
        if (params?.sort_order) {
            queryParams.append("sort_order", params.sort_order);
        }
        if (typeof params?.is_active === "boolean") {
            queryParams.append("is_active", params.is_active.toString());
        }
        if (params?.include_inactive) {
            queryParams.append("include_inactive", "true");
        }
        const endpoint = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.CREDITS}${queryParams.toString() ? `?${queryParams.toString()}` : ""}`;
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].syncToken(token);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(endpoint, {
            headers
        });
        return {
            packages: response.data.data || [],
            pagination: response.data.pagination || null
        };
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleError"])(error, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.CREDIT_PACKAGE);
        throw error;
    }
};
const purchaseAdCreditPackage = async (token, developerId, packageId, paymentDetails)=>{
    try {
        const headers = {
            "Content-Type": "application/json"
        };
        if (token) {
            headers["Authorization"] = `Bearer ${token}`;
        }
        const payload = paymentDetails || {
            payment_method: "card"
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].syncToken(token);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.DEVELOPERS}/${developerId}/packages/${packageId}`, payload, {
            headers
        });
        return response.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleError"])(error, `/developers/${developerId}/packages/${packageId}`);
        throw error;
    }
};
;
const AdminSubscriptionsService = {
    getCustomerPlans: ()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get("/dashboard/subs/customerPlans");
    },
    getCustomerPlanById: (id)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/subs/customerPlans/${id}`);
    },
    getPackages: (token, params)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get("/dashboard/ad-credit-packages", {
            params
        });
    },
    createPackage: (tokenOrData, data)=>{
        const actualData = data || tokenOrData;
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post("/dashboard/ad-credit-packages", actualData);
    },
    updatePackage: (id, data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].put(`/dashboard/ad-credit-packages/${id}`, data);
    },
    getBadges: (params)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get("/dashboard/badges", {
            params
        });
    },
    getSubscriptionFeatures: ()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get("/dashboard/subscription-features");
    },
    createBadge: (data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post("/dashboard/badges", data);
    },
    updateBadge: (id, data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].put(`/dashboard/badges/${id}`, data);
    },
    deleteBadge: (id)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].delete(`/dashboard/badges/${id}`);
    },
    getAddons: (params)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get("/dashboard/subs/add-ons", {
            params
        });
    },
    getAddonTypes: ()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get("/dashboard/subs/add-ons/types");
    },
    createAddon: (data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post("/dashboard/subs/add-ons", data);
    },
    updateAddon: (id, data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].put(`/dashboard/subs/add-ons/${id}`, data);
    },
    deleteAddon: (id)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].delete(`/dashboard/subs/add-ons/${id}`);
    },
    createCustomerPlan: (data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post("/dashboard/subs/customerPlans", data);
    },
    updateCustomerPlan: (id, data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].put(`/dashboard/subs/customerPlans/${id}`, data);
    },
    deletePackage: (tokenOrId, id)=>{
        const actualId = id !== undefined ? id : tokenOrId;
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].delete(`/dashboard/ad-credit-packages/${actualId}`);
    },
    deleteCustomerPlan: (id)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].delete(`/dashboard/subs/customerPlans/${id}`);
    }
};
}),
"[project]/src/data/api/services/badges.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addBadge",
    ()=>addBadge,
    "addSubscriptionFeature",
    ()=>addSubscriptionFeature,
    "createBadge",
    ()=>createBadge,
    "createBadgeFeature",
    ()=>createBadgeFeature,
    "deleteBadgeFeature",
    ()=>deleteBadgeFeature,
    "fetchBadgeFeatures",
    ()=>fetchBadgeFeatures
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiClient.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/endpoints.ts [app-ssr] (ecmascript)");
;
;
;
const fetchBadgeFeatures = async (token)=>{
    try {
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].syncToken(token);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.BADGES, {
            headers
        });
        return response.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleError"])(error, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.BADGES);
        throw error;
    }
};
const createBadge = async (token, data)=>{
    try {
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].syncToken(token);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.BADGES, data, {
            headers
        });
        return response.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleError"])(error, `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.BADGES} (POST)`);
        throw error;
    }
};
const createBadgeFeature = async (token, data)=>{
    try {
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].syncToken(token);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.BADGES, data, {
            headers
        });
        return response.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleError"])(error, `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.BADGES} (POST)`);
        throw error;
    }
};
const deleteBadgeFeature = async (token, featureId)=>{
    try {
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].syncToken(token);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].delete(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.BADGES}/${featureId}`, {
            headers
        });
        return response.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleError"])(error, `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.BADGES}/${featureId} (DELETE)`);
        throw error;
    }
};
const addSubscriptionFeature = (projectFeatureData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.BADGES, projectFeatureData, token);
const addBadge = (badgeData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.BADGES, badgeData, token);
}),
"[project]/src/data/api/services/developers.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addDeveloper",
    ()=>addDeveloper,
    "addDeveloperFeature",
    ()=>addDeveloperFeature,
    "deleteDeveloper",
    ()=>deleteDeveloper,
    "deleteDeveloperFeature",
    ()=>deleteDeveloperFeature,
    "editDeveloper",
    ()=>editDeveloper,
    "editDeveloperFeature",
    ()=>editDeveloperFeature,
    "fetchDeveloperDetails",
    ()=>fetchDeveloperDetails,
    "fetchDeveloperFeatureDetails",
    ()=>fetchDeveloperFeatureDetails,
    "fetchDeveloperFeaturesDetails",
    ()=>fetchDeveloperFeaturesDetails,
    "fetchDevelopers",
    ()=>fetchDevelopers,
    "fetchDevelopersPaginated",
    ()=>fetchDevelopersPaginated,
    "toggleDeveloperStatus",
    ()=>toggleDeveloperStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiClient.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/endpoints.ts [app-ssr] (ecmascript)");
;
;
;
const fetchDevelopersPaginated = async (token, params = {})=>{
    const { page = 1, per_page = 10, search, status } = params;
    const urlParams = new URLSearchParams({
        page: page.toString(),
        per_page: per_page.toString()
    });
    if (search) urlParams.append("search", search);
    if (status) urlParams.append("status", status);
    try {
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].syncToken(token);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.DEVELOPERS}?${urlParams.toString()}`);
        const responseData = response.data;
        return {
            developers: responseData.data || [],
            pagination: {
                page: responseData.page || page,
                per_page: responseData.per_page || per_page,
                total: responseData.total || 0,
                total_pages: responseData.total_pages || Math.ceil((responseData.total || 0) / per_page)
            }
        };
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleError"])(error, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.DEVELOPERS);
        throw error;
    }
};
const fetchDevelopers = (token, page, per_page, search, status, country_id)=>{
    const params = new URLSearchParams({
        page: page.toString(),
        per_page: per_page.toString()
    });
    if (search) params.append("search", search);
    if (status) params.append("status", status);
    if (country_id) params.append("country_id", country_id);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.DASHBOARD_DEVELOPERS}?${params.toString()}`, token);
};
const fetchDeveloperDetails = (developerId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchDevelopersData"])(`/developers/${developerId}`, token);
const fetchDeveloperFeaturesDetails = (developerFeatureId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])(`/feature-developers/${developerFeatureId}`, token);
const fetchDeveloperFeatureDetails = (developerId, featureId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])(`/developers/${developerId}/features/${featureId}`, token);
const addDeveloper = (developerData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postDataImg"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.DEVELOPERS, developerData, token);
const addDeveloperFeature = (developerFeatureData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postData"])(`/developers/features/create`, developerFeatureData, token);
const editDeveloper = (developerId, developerData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editDataImg"])(`/developers/${developerId}`, developerData, token);
const toggleDeveloperStatus = (developerId, newStatus, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["patchData"])(`/developers/${developerId}/toggle-status`, newStatus, token);
const editDeveloperFeature = (developerId, featureId, developerFeatureData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editData"])(`/developers/${developerId}/features/${featureId}`, developerFeatureData, token);
const deleteDeveloper = (developerId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteData"])(`/developers/${developerId}`, token);
const deleteDeveloperFeature = (developerId, featureId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteData"])(`/developers/${developerId}/features/${featureId}`, token);
}),
"[project]/src/data/api/services/experts.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminExpertsService",
    ()=>AdminExpertsService,
    "addExpert",
    ()=>addExpert,
    "deleteExpert",
    ()=>deleteExpert,
    "editExpert",
    ()=>editExpert,
    "fetchExpertDetails",
    ()=>fetchExpertDetails,
    "fetchExpertsPaginated",
    ()=>fetchExpertsPaginated,
    "toggleExpertStatus",
    ()=>toggleExpertStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiClient.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/endpoints.ts [app-ssr] (ecmascript)");
;
;
;
;
const fetchExpertsPaginated = async (token, params)=>{
    try {
        const queryParams = new URLSearchParams();
        if (params.page) queryParams.append("page", params.page.toString());
        if (params.per_page) queryParams.append("per_page", params.per_page.toString());
        if (params.search) queryParams.append("search", params.search);
        if (params.status) queryParams.append("status", params.status);
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.EXPERTS}?${queryParams.toString()}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return {
            experts: res.data?.data || [],
            total: res.data?.total || 0
        };
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleError"])(error, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.EXPERTS);
        return {
            experts: [],
            total: 0
        };
    }
};
const deleteExpert = async (id, token)=>{
    try {
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].syncToken(token);
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].delete(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.EXPERT_DETAIL(id));
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleError"])(error, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.EXPERT_DETAIL(id));
        throw error;
    }
};
const addExpert = async (data, token)=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.DASHBOARD_EXPERTS, data, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
            }
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleError"])(error, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.DASHBOARD_EXPERTS);
        throw error;
    }
};
const editExpert = async (id, data, token)=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.EXPERT_DETAIL(id), data, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
            }
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleError"])(error, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.EXPERT_DETAIL(id));
        throw error;
    }
};
const toggleExpertStatus = async (id, token, data)=>{
    try {
        const payload = typeof data === "boolean" ? {
            status: data ? "approved" : "inactive",
            is_active: data ? 1 : 0
        } : data || {};
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].patch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.EXPERT_TOGGLE_STATUS(id), payload, token ? {
            headers: {
                Authorization: `Bearer ${token}`
            }
        } : undefined);
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleError"])(error, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.EXPERT_TOGGLE_STATUS(id));
        throw error;
    }
};
const fetchExpertDetails = async (id, token)=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.EXPERTS}/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Cache-Control": "no-cache",
                Pragma: "no-cache"
            }
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleError"])(error, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.EXPERT_DETAIL(id));
        throw error;
    }
};
const AdminExpertsService = {
    getLanguages: ()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/experts/languages`);
    },
    getCategories: ()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/experts/categories`);
    },
    getCountries: ()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.COUNTRIES}`);
    },
    getExpert: (expertId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.EXPERT_DETAIL(expertId), {
            headers: {
                "Cache-Control": "no-cache",
                Pragma: "no-cache"
            }
        });
    },
    getExpertsPaginated: async (page = 1, limit = 10, search, status)=>{
        const params = new URLSearchParams({
            page: page.toString(),
            per_page: limit.toString()
        });
        if (search && search.trim() !== "") {
            params.append("search", search.trim());
        }
        if (status && status !== "all") {
            params.append("status", status);
        }
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/experts?${params.toString()}`, {
            headers: {
                "Cache-Control": "no-cache",
                Pragma: "no-cache"
            }
        });
        return response.data;
    },
    createExpert: (data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.DASHBOARD_EXPERTS, data);
    },
    updateExpert: (expertId, data)=>{
        if (data instanceof FormData) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.EXPERT_DETAIL(expertId), data);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].put(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.EXPERT_DETAIL(expertId), data);
    },
    deleteExpert: (expertId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].delete(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.EXPERT_DETAIL(expertId));
    },
    toggleExpertStatus: (expertId, data)=>{
        const payload = typeof data === "boolean" ? {
            status: data ? "approved" : "inactive",
            is_active: data ? 1 : 0
        } : data || {};
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].patch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.EXPERT_TOGGLE_STATUS(expertId), payload);
    },
    bulkImportExperts: (file)=>{
        const formData = new FormData();
        formData.append("file", file);
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post("/dashboard/experts/bulk-import", formData);
    }
};
}),
"[project]/src/data/api/services/reservations.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminBookingsService",
    ()=>AdminBookingsService,
    "cancelMeetingRequest",
    ()=>cancelMeetingRequest,
    "confirmBooking",
    ()=>confirmBooking,
    "confirmMeetingRequest",
    ()=>confirmMeetingRequest,
    "declineBooking",
    ()=>declineBooking,
    "fetchBookings",
    ()=>fetchBookings,
    "fetchReservationDetails",
    ()=>fetchReservationDetails,
    "fetchReservations",
    ()=>fetchReservations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiClient.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/endpoints.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/config.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.ts [app-ssr] (ecmascript)");
;
;
;
;
const fetchReservations = (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchDataReserve"])(token);
const fetchReservationDetails = (token, reservationId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchDataReserveUnit"])(token, reservationId);
const confirmBooking = (bookingId, token, comments)=>{
    const formData = new FormData();
    formData.append("reservation_id", String(bookingId));
    formData.append("status", "confirmed");
    if (comments) formData.append("comments", comments);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postData"])(`/approve-reservation`, formData, token);
};
const declineBooking = (bookingId, token, comments)=>{
    const formData = new FormData();
    formData.append("reservation_id", String(bookingId));
    formData.append("status", "cancelled");
    if (comments) formData.append("comments", comments);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postData"])(`/approve-reservation`, formData, token);
};
const fetchBookings = (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.RAW_DETAIL(99999), token);
const confirmMeetingRequest = (id, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editData"])(`/meeting-requests/${id}`, {
        status: "active"
    }, token);
const cancelMeetingRequest = (id, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editData"])(`/meeting-requests/${id}`, {
        status: "cancelled"
    }, token);
const AdminBookingsService = {
    getBookings: async (page = 1, perPage = 10, filters)=>{
        const params = new URLSearchParams({
            page: page.toString(),
            per_page: perPage.toString()
        });
        if (filters?.country && filters.country !== "all") {
            params.append("country", filters.country);
        }
        if (filters?.status && filters.status !== "all") {
            params.append("status", filters.status);
        }
        if (filters?.type && filters.type !== "all") {
            params.append("type", filters.type.trim().toUpperCase());
        }
        if (filters?.expiryDate && filters.expiryDate !== "all") {
            params.append("expiry_date", filters.expiryDate);
        }
        if (filters?.search && filters.search.trim() !== "") {
            const rawSearch = filters.search.trim();
            const cleanSearch = /^bk-0*(\d+)$/i.test(rawSearch) ? rawSearch.replace(/^bk-0*/i, "") : rawSearch;
            params.append("search", cleanSearch);
        }
        const RESERVATIONS_URL = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DASHBOARD_V2_API_BASE_URL"]}/reservations`;
        const queryString = params.toString();
        const fullUrl = queryString ? `${RESERVATIONS_URL}?${queryString}` : RESERVATIONS_URL;
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(fullUrl, {
            headers: {
                "ngrok-skip-browser-warning": "69420"
            }
        });
        return response.data;
    },
    getBookingDetails: (bookingId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DASHBOARD_V2_API_BASE_URL"]}/reservations/${bookingId}`, {
            headers: {
                "ngrok-skip-browser-warning": "69420"
            }
        }).then((res)=>res.data);
    },
    confirmBooking: (bookingId, comments, type = "IDENTIFICATION")=>{
        const resType = (type || "IDENTIFICATION").toUpperCase();
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].patch(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DASHBOARD_V2_API_BASE_URL"]}/reservations/admin/approve`, {
            reservation_id: bookingId,
            status: "confirmed",
            reservation_status_type: resType,
            comments: comments || undefined
        }, {
            headers: {
                "ngrok-skip-browser-warning": "69420"
            }
        }).then((res)=>res.data);
    },
    approveReservation: (bookingId, comments, type = "IDENTIFICATION")=>{
        const resType = (type || "IDENTIFICATION").toUpperCase();
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].patch(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DASHBOARD_V2_API_BASE_URL"]}/reservations/admin/approve`, {
            reservation_id: bookingId,
            status: "confirmed",
            reservation_status_type: resType,
            comments: comments || undefined
        }, {
            headers: {
                "ngrok-skip-browser-warning": "69420"
            }
        }).then((res)=>res.data);
    },
    declineBooking: (bookingId, comments, type = "IDENTIFICATION")=>{
        const resType = (type || "IDENTIFICATION").toUpperCase();
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].patch(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DASHBOARD_V2_API_BASE_URL"]}/reservations/admin/approve`, {
            reservation_id: bookingId,
            status: "cancelled",
            reservation_status_type: resType,
            comments: comments || undefined
        }, {
            headers: {
                "ngrok-skip-browser-warning": "69420"
            }
        }).then((res)=>res.data);
    },
    uploadSalesOffer: (formData)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DASHBOARD_V2_API_BASE_URL"]}/reservations/sales-offer`, formData, {
            headers: {
                "ngrok-skip-browser-warning": "69420"
            }
        }).then((res)=>res.data);
    },
    createSalesOffer: (formData)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DASHBOARD_V2_API_BASE_URL"]}/reservations/sales-offer`, formData, {
            headers: {
                "ngrok-skip-browser-warning": "69420"
            }
        }).then((res)=>res.data);
    },
    uploadSPA: (reservationId, formData)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DASHBOARD_V2_API_BASE_URL"]}/reservations/${reservationId}/sales-purchase-agreement`, formData, {
            headers: {
                "ngrok-skip-browser-warning": "69420"
            }
        }).then((res)=>res.data);
    }
};
}),
"[project]/src/data/api/services/profile.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "changePassword",
    ()=>changePassword,
    "fetchTransactions",
    ()=>fetchTransactions,
    "fetchUserProfile",
    ()=>fetchUserProfile,
    "updateUserProfile",
    ()=>updateUserProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/endpoints.ts [app-ssr] (ecmascript)");
;
;
const fetchUserProfile = (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.PROFILE, token);
const updateUserProfile = (userData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.PROFILE_UPDATE, userData, token);
const changePassword = (passwordData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.CHANGE_PASSWORD, passwordData, token);
const fetchTransactions = (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.TRANSACTIONS, token);
}),
"[project]/src/data/api/services/ai-notifications.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addAiTemplate",
    ()=>addAiTemplate,
    "fetchActivityLogs",
    ()=>fetchActivityLogs,
    "fetchAiConversations",
    ()=>fetchAiConversations,
    "fetchAiTemplates",
    ()=>fetchAiTemplates,
    "fetchNotifications",
    ()=>fetchNotifications,
    "markNotificationAsRead",
    ()=>markNotificationAsRead,
    "searchActivityLogs",
    ()=>searchActivityLogs,
    "searchNotifications",
    ()=>searchNotifications
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/endpoints.ts [app-ssr] (ecmascript)");
;
;
const fetchAiConversations = (token, params)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])(`/ai/conversations${params ? `?${params}` : ""}`, token);
const fetchAiTemplates = (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])("/ai/templates", token);
const addAiTemplate = (templateData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postData"])("/ai/templates", templateData, token);
const fetchNotifications = async (token, params)=>{
    try {
        const url = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.NOTIFICATIONS}${params ? `?${params}` : ""}`;
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient2"].get(url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res.data;
    } catch (error) {
        console.error("Failed to fetch notifications with apiClient2, trying fallback:", error);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.NOTIFICATIONS}${params ? `?${params}` : ""}`, token);
    }
};
const searchNotifications = (searchData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postData"])("/notifications/search", searchData, token);
const markNotificationAsRead = async (token, notificationId)=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient2"].post("/mark-notification-as-read", notificationId ? {
            notification_id: notificationId
        } : {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res.data;
    } catch (error) {
        console.error("Failed to mark notification as read with apiClient2, trying fallback:", error);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postData"])("/mark-notification-as-read", notificationId ? {
            notification_id: notificationId
        } : {}, token);
    }
};
const fetchActivityLogs = (token, params)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])(`/activityLogs${params ? `?${params}` : ""}`, token);
const searchActivityLogs = (searchData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postData"])("/activityLogs", searchData, token);
}),
"[project]/src/data/api/services/dashboard.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashboardAdminService",
    ()=>DashboardAdminService,
    "DashboardExpertService",
    ()=>DashboardExpertService,
    "fetchDashboardCounts",
    ()=>fetchDashboardCounts,
    "fetchDashboardReviews",
    ()=>fetchDashboardReviews,
    "fetchDashboardStats",
    ()=>fetchDashboardStats,
    "fetchInProgressReservations",
    ()=>fetchInProgressReservations,
    "fetchReservationStatusMetrics",
    ()=>fetchReservationStatusMetrics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiClient.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/endpoints.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/config.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.ts [app-ssr] (ecmascript)");
;
;
;
;
const fetchDashboardReviews = (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROPERTIES.BY_ID(999999), token);
const fetchDashboardCounts = (token, startDate, endDate)=>{
    let url = "/dashboard/test-dashboard-counts";
    if (startDate || endDate) {
        const params = new URLSearchParams();
        if (startDate) params.append("start_date", startDate);
        if (endDate) params.append("end_date", endDate);
        url += `?${params.toString()}`;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])(url, token);
};
const fetchReservationStatusMetrics = (token, days)=>{
    let url = "/dashboard/reservation-status-metrics";
    if (days) {
        url += `?days=${days}`;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])(url, token);
};
const fetchInProgressReservations = (token, days, stage)=>{
    let url = "/dashboard/inprogress-reservations";
    const params = new URLSearchParams();
    if (days) params.append("days", days.toString());
    if (stage) params.append("stage", stage);
    const paramString = params.toString();
    if (paramString) url += `?${paramString}`;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])(url, token);
};
const fetchDashboardStats = (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.DASHBOARD_STATS, token);
const DashboardAdminService = {
    getBookings: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get("/admin/reservations");
        return response.data;
    },
    getExperts: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get("/experts");
        return response.data;
    },
    getExpertsPaginated: async (page, limit, search)=>{
        const params = new URLSearchParams();
        params.append("page", page.toString());
        params.append("limit", limit.toString());
        if (search) params.append("search", search);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/experts?${params.toString()}`);
        return response.data;
    },
    getProjects: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get("/dashboard/projects");
        return response.data;
    },
    getProjectsPaginated: async (page, limit, search)=>{
        const params = new URLSearchParams();
        params.append("page", page.toString());
        params.append("per_page", limit.toString());
        if (search) params.append("search", search);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/projects?${params.toString()}`);
        return response.data;
    },
    getProjectDetails: async (projectId)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/projects/${projectId}`);
        return response.data;
    },
    getProperties: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get("/properties");
        return response.data;
    },
    getPropertiesPaginated: async (page, limit, search)=>{
        const params = new URLSearchParams();
        params.append("page", page.toString());
        params.append("limit", limit.toString());
        if (search) params.append("search", search);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/properties?${params.toString()}`);
        return response.data;
    },
    getDevelopers: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get("/developers");
        return response.data;
    },
    getDevelopersPaginated: async (page, limit, search)=>{
        const params = new URLSearchParams();
        params.append("page", page.toString());
        params.append("limit", limit.toString());
        if (search) params.append("search", search);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/developers?${params.toString()}`);
        return response.data;
    },
    getCities: async (country)=>{
        const params = country ? `?country=${country}` : "";
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/cities/all${params}`);
        return response.data;
    },
    getAreas: async (country)=>{
        const params = country ? `?country=${country}` : "";
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/areas/all${params}`);
        return response.data;
    },
    getFeatures: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get("/features");
        return response.data;
    },
    getBookingDetails: async (reservationId)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DASHBOARD_V2_API_BASE_URL"]}/reservations/${reservationId}`, {
            headers: {
                "ngrok-skip-browser-warning": "69420"
            }
        });
        return response.data;
    },
    confirmBooking: async (bookingId, payload)=>{
        const comments = typeof payload?.comments === "string" ? payload.comments : undefined;
        const status = typeof payload?.status === "string" ? payload.status : "confirmed";
        const type = typeof payload?.reservation_status_type === "string" ? payload.reservation_status_type.toUpperCase() : typeof payload?.type === "string" ? payload.type.toUpperCase() : "IDENTIFICATION";
        const body = {
            reservation_id: bookingId,
            status,
            reservation_status_type: type
        };
        if (comments) body.comments = comments;
        let patchResult = null;
        try {
            patchResult = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].patch(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DASHBOARD_V2_API_BASE_URL"]}/reservations/admin/approve`, body, {
                headers: {
                    "ngrok-skip-browser-warning": "69420"
                }
            }).then((res)=>res.data);
        } catch (err) {
            console.warn("PATCH approve failed", err?.message);
        }
        return patchResult || {
            status: true,
            message: "Confirmed"
        };
    },
    approveReservation: (bookingId, comments, type = "IDENTIFICATION")=>{
        const resType = (type || "IDENTIFICATION").toUpperCase();
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].patch(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DASHBOARD_V2_API_BASE_URL"]}/reservations/admin/approve`, {
            reservation_id: bookingId,
            status: "confirmed",
            reservation_status_type: resType,
            comments: comments || undefined
        }, {
            headers: {
                "ngrok-skip-browser-warning": "69420"
            }
        }).then((res)=>res.data);
    },
    declineBooking: (bookingId, payload)=>{
        const type = typeof payload?.reservation_status_type === "string" ? payload.reservation_status_type.toUpperCase() : typeof payload?.type === "string" ? payload.type.toUpperCase() : "IDENTIFICATION";
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].patch(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DASHBOARD_V2_API_BASE_URL"]}/reservations/admin/approve`, {
            ...payload,
            status: "cancelled",
            reservation_id: bookingId,
            reservation_status_type: type
        }, {
            headers: {
                "ngrok-skip-browser-warning": "69420"
            }
        }).then((res)=>res.data);
    },
    uploadSalesOffer: (formData)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DASHBOARD_V2_API_BASE_URL"]}/reservations/sales-offer`, formData, {
            headers: {
                "ngrok-skip-browser-warning": "69420"
            }
        }).then((res)=>res.data);
    },
    createSalesOffer: (formData)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DASHBOARD_V2_API_BASE_URL"]}/reservations/sales-offer`, formData, {
            headers: {
                "ngrok-skip-browser-warning": "69420"
            }
        }).then((res)=>res.data);
    },
    uploadDownPayment: async (formData)=>{
        // Attempt sales-offer endpoint (handles reservation media) or general reservation upload
        try {
            return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DASHBOARD_V2_API_BASE_URL"]}/reservations/sales-offer`, formData, {
                headers: {
                    "ngrok-skip-browser-warning": "69420"
                }
            }).then((res)=>res.data);
        } catch (_err) {
            return {
                status: true,
                message: "Uploaded"
            };
        }
    },
    uploadSPA: (_reservationId, formData)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DASHBOARD_V2_API_BASE_URL"]}/reservations/sales-purchase-agreement`, formData, {
            headers: {
                "ngrok-skip-browser-warning": "69420"
            }
        }).then((res)=>res.data);
    },
    getProfileInformation: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('auth/me'),
    updateProfileInformation: (data)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post('/auth/me', data),
    sendOtpEmail: (data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post("/auth/email/otp/send", data, {
            headers: {
                "X-Context": "website",
                "verificationtype": 'existing-user'
            }
        });
    },
    resendOtpEmail: (data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post("/auth/email/otp/resend", data, {
            headers: {
                "X-Context": "website",
                "verificationtype": 'existing-user'
            }
        });
    },
    verifyPhoneOREmail: (data, verificationtype)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post("/auth/verify", data, {
            headers: {
                "X-Context": "website",
                "verificationtype": verificationtype
            }
        });
    },
    changePassword: (data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post("/dashboard/users/profile/change-password/request", data);
    },
    socialLogin: (data)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post("/auth/social-login", data, {
            headers: {
                "X-Context": "website"
            }
        }),
    forgetPassword: async (formData)=>{
        const payload = {
            action: "reset_password",
            data: {
                email: formData.email
            }
        };
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post("/auth/v2/send-otp", payload, {
            headers: {
                "X-Context": "website"
            }
        });
    },
    resetPassword: async (data)=>{
        const payload = {
            email: data.email,
            reset_token: data.reset_token || data.token || data.otp || data.code,
            password: data.password,
            password_confirmation: data.password_confirmation
        };
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post("/auth/password/reset", payload, {
            headers: {
                "X-Context": "website",
                "X-Guest-Token": data.reset_token || data.token
            }
        });
    },
    verifyOtpPassword: async (data)=>{
        const payload = {
            action: "reset_password",
            otp: data.otp
        };
        if (data.token) {
            payload.token = data.token;
        }
        const headers = {
            "X-Context": "website",
            "X-Guest-Token": data.token || ""
        };
        try {
            return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post("/auth/v2/verify-otp", payload, {
                headers
            });
        } catch (err) {
            const responseData = err?.response?.data;
            if (responseData && responseData.message === "This action has already been verified") {
                return {
                    data: responseData,
                    status: 200
                };
            }
            throw err;
        }
    }
};
const DashboardExpertService = {
    getMetrics: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get("/dashboard/experts/me/bookings-metrics"),
    getReviews: (expertId)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/experts/${expertId}/reviews`),
    getBookings: ({ page, per_page, status, search })=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get("/dashboard/experts/me/bookings", {
            params: {
                page,
                per_page,
                status,
                search
            }
        });
    },
    confirmBooking: (bookingId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`/dashboard/experts/bookings/${bookingId}/confirm`);
    },
    declineBooking: (bookingId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`/dashboard/experts/bookings/${bookingId}/decline`);
    },
    rescheduleBookings: (bookingId, data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`/dashboard/experts/bookings/${bookingId}/reschedule`, data);
    },
    agoraCall: (channelName)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`agora/token?channel_name=${channelName}`);
    },
    getBookingsHistory: ({ page, status, search })=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get("/dashboard/experts/me/history", {
            params: {
                page,
                status,
                search
            }
        });
    },
    getWeeklyAvailability (expertId) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/experts/${expertId}/availabilities`);
    },
    toggleAvailabilityDay: (expertId, data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].patch(`/dashboard/experts/${expertId}/availabilities/day-toggle`, data);
    },
    getAvailabilitySlot: (expertId, ruleId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/experts/${expertId}/availabilities/${ruleId}`);
    },
    addAvailabilitySlot: (expertId, data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`/dashboard/experts/${expertId}/availabilities/slots`, data);
    },
    updateAvailabilitySlot: (expertId, ruleId, data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].put(`/dashboard/experts/${expertId}/availabilities/slots/${ruleId}`, data);
    },
    deleteAvailabilitySlot: (expertId, ruleId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].delete(`/dashboard/experts/${expertId}/availabilities/slots/${ruleId}`);
    },
    getAvailabilityException: (expertId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/experts/${expertId}/availabilities/exceptions`);
    },
    getSingleAvailabilityException: (expertId, exceptionId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/experts/${expertId}/availabilities/exceptions/${exceptionId}`);
    },
    setAvailabilityException: (expertId, data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`/dashboard/experts/${expertId}/availabilities/exceptions`, data);
    },
    updateAvailabilityException: (expertId, exceptionId, data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].put(`/dashboard/experts/${expertId}/availabilities/exceptions/${exceptionId}`, data);
    },
    deleteAvailabilityException: (expertId, exceptionId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].delete(`/dashboard/experts/${expertId}/availabilities/exceptions/${exceptionId}`);
    },
    getAllPackages (expertId) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/experts/${expertId}/packages`);
    },
    getSinglePackage: (expertId, packageId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/experts/${expertId}/packages/${packageId}`);
    },
    addPackage: (expertId, data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`/dashboard/experts/${expertId}/packages`, data);
    },
    updatePackage: (expertId, packageId, data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].put(`/dashboard/experts/${expertId}/packages/${packageId}`, data);
    },
    deletePackage: (expertId, packageId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].delete(`/dashboard/experts/${expertId}/packages/${packageId}`);
    },
    getMyTransactions: (params)=>{
        const query = new URLSearchParams();
        if (params?.page) query.append("page", String(params.page));
        if (params?.per_page) query.append("per_page", String(params.per_page));
        if (params?.status) query.append("status", params.status);
        if (params?.search) query.append("search", params.search);
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/experts/me/transactions?${query.toString()}`);
    },
    requestWithdrawal: (data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post("/dashboard/experts/me/payouts", data);
    },
    getProfileInformation: (expertId)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/experts/${expertId}`),
    updateProfileInformation: (expertId, data)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`/dashboard/experts/${expertId}`, data),
    getCountriesList: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/countries`),
    getLanguagesList: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/experts/languages`),
    getCategoriesList: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/experts/categories`)
};
}),
"[project]/src/data/api/services/misc.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminFeaturesService",
    ()=>AdminFeaturesService,
    "AdminMeetingsService",
    ()=>AdminMeetingsService,
    "AdminOffersService",
    ()=>AdminOffersService,
    "addFeature",
    ()=>addFeature,
    "addReferral",
    ()=>addReferral,
    "deleteCity",
    ()=>deleteCity,
    "deleteFeature",
    ()=>deleteFeature,
    "deleteReferral",
    ()=>deleteReferral,
    "editFeature",
    ()=>editFeature,
    "editReferral",
    ()=>editReferral,
    "fetchCountries",
    ()=>fetchCountries,
    "fetchFeatures",
    ()=>fetchFeatures,
    "fetchFeaturesDetails",
    ()=>fetchFeaturesDetails,
    "fetchLocations",
    ()=>fetchLocations,
    "fetchProjects",
    ()=>fetchProjects,
    "fetchProjectsByDeveloper",
    ()=>fetchProjectsByDeveloper,
    "fetchRereferralDetails",
    ()=>fetchRereferralDetails,
    "fetchTenants",
    ()=>fetchTenants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiClient.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/endpoints.ts [app-ssr] (ecmascript)");
;
;
;
const fetchLocations = (token, page = 1, perPage = 10)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchPaginatedData"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].LOCATIONS.LOCATIONS}?page=${page}&per_page=${perPage}`, token);
const fetchProjects = (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.RAW, token);
const fetchProjectsByDeveloper = (token, developer_id, is_active, per_page = "100", search)=>{
    const params = new URLSearchParams({
        developer_id: developer_id.toString(),
        per_page
    });
    if (is_active !== undefined && is_active !== null) {
        params.append("is_active", is_active.toString());
    }
    if (search) {
        params.append("search", search);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.BASE}?${params.toString()}`, token);
};
const fetchCountries = (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.COUNTRIES, token);
const fetchFeatures = (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.FEATURES, token);
const fetchTenants = (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])("/tenants", token);
const fetchRereferralDetails = (referralId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])(`/referrals/${referralId}`, token);
const fetchFeaturesDetails = (featureId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])(`/features/${featureId}`, token);
const addReferral = (referralData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postData"])("/referrals", referralData, token);
const addFeature = (featureData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postData"])("/features", featureData, token);
const editReferral = (referralId, referralData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editData"])(`/referrals/${referralId}`, referralData, token);
const editFeature = (featureId, featureData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editData"])(`/features/${featureId}`, featureData, token);
const deleteReferral = (referralId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteData"])(`/referrals/${referralId}`, token);
const deleteCity = (cityId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteData"])(`/cities/${cityId}`, token);
const deleteFeature = (featureId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteData"])(`/dashboard/features/${featureId}`, token);
const AdminMeetingsService = {
    getMeetingRequests: (page = 1, perPage = 10, filters)=>{
        const params = new URLSearchParams({
            page: page.toString(),
            per_page: perPage.toString()
        });
        if (filters) {
            if (filters.country && filters.country !== "all") {
                params.append("country", filters.country);
            }
            if (filters.status && filters.status !== "all") {
                params.append("status", filters.status);
            }
            if (filters.search && filters.search.trim() !== "") {
                params.append("search", filters.search.trim());
            }
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/meeting-requests?${params.toString()}`);
    },
    getMeetingRequest: (meetingId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/meeting-requests/${meetingId}`);
    },
    confirmMeeting: (meetingId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`/meeting-requests/${meetingId}/confirm`);
    },
    cancelMeeting: (meetingId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`/meeting-requests/${meetingId}/cancel`);
    }
};
const AdminOffersService = {
    getOffers: async (page = 1, perPage = 15, filters)=>{
        const params = new URLSearchParams({
            page: page.toString(),
            per_page: perPage.toString()
        });
        if (filters?.status && filters.status !== "all") {
            params.append("status", filters.status);
        }
        if (filters?.search && filters.search.trim()) {
            params.append("search", filters.search.trim());
        }
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/offers?${params.toString()}`);
        return response;
    },
    getOffersTotals: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get("/dashboard/offers/totals");
        return response.data;
    },
    getOffer: async (offerId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/offers/${offerId}`);
    },
    createOffer: (data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].V2.OFFERS, data, {
            headers: {
                "Content-Type": "application/json"
            }
        });
    },
    updateOffer: (offerId, data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`/dashboard/offers/${offerId}`, data);
    },
    deleteOffer: (offerId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].delete(`/dashboard/offers/${offerId}`);
    },
    toggleStatus: (offerId, fields)=>{
        const formData = new FormData();
        formData.append("entity_type", fields.entity_type);
        formData.append("entity_id", String(fields.entity_id));
        formData.append("discount_type", fields.discount_type);
        formData.append("is_active", fields.is_active ? "1" : "0");
        if (fields.name) formData.append("name", fields.name);
        if (fields.description) formData.append("description", fields.description);
        if (fields.starts_at) formData.append("starts_at", fields.starts_at);
        if (fields.ends_at) formData.append("ends_at", fields.ends_at);
        if (fields.discount_pct != null) formData.append("discount_pct", String(fields.discount_pct));
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`/dashboard/offers/${offerId}`, formData);
    }
};
const AdminFeaturesService = {
    getFeatures: ()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get("/dashboard/features");
    },
    getFeature: (featureId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/features/${featureId}`);
    },
    createFeature: (data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post("/dashboard/features", data);
    },
    updateFeature: (featureId, data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].put(`/dashboard/features/${featureId}`, data);
    },
    deleteFeature: (featureId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].delete(`/dashboard/features/${featureId}`);
    }
};
}),
"[project]/src/data/api/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/config.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/endpoints.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$auth$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/auth.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$users$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/api/services/users.service.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$projects$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/projects.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$properties$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/properties.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$locations$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/locations.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$ads$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/ads.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$campaigns$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/campaigns.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$credits$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/credits.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$badges$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/badges.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$developers$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/developers.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$experts$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/experts.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$reservations$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/reservations.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$profile$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/profile.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$ai$2d$notifications$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/ai-notifications.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$dashboard$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/dashboard.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$misc$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/misc.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$chat$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/chat.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$permissions$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/permissions.service.ts [app-ssr] (ecmascript)");
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
;
;
;
;
;
;
;
;
}),
"[project]/src/data/api-client.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/api/index.ts [app-ssr] (ecmascript) <locals>");
;
}),
"[project]/src/components/layout/sidebar/sidebar-logo.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SidebarLogo",
    ()=>SidebarLogo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2d$close$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelLeftClose$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/panel-left-close.js [app-ssr] (ecmascript) <export default as PanelLeftClose>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelLeftOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/panel-left-open.js [app-ssr] (ecmascript) <export default as PanelLeftOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function SidebarLogo({ isCollapsed, onToggleCollapse, isRTL }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const toggleLabel = isCollapsed ? t("sidebar.expandSidebar") : t("sidebar.collapseSidebar");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-16 items-center justify-between border-b border-gray-200 dark:border-slate-700 px-3",
        children: [
            !isCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 flex-1 min-w-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: "/images/logo.svg",
                    alt: "Property Adviser Logo",
                    width: 140,
                    height: 36,
                    priority: true,
                    className: "object-contain px-1"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/sidebar/sidebar-logo.tsx",
                    lineNumber: 21,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/sidebar/sidebar-logo.tsx",
                lineNumber: 20,
                columnNumber: 9
            }, this),
            isCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: "/logo-icon.svg",
                    alt: "Property Adviser",
                    width: 32,
                    height: 32,
                    priority: true,
                    className: "object-contain",
                    onError: (e)=>{
                        e.currentTarget.style.display = "none";
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/sidebar/sidebar-logo.tsx",
                    lineNumber: 34,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/sidebar/sidebar-logo.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onToggleCollapse,
                className: `hidden lg:flex items-center justify-center h-8 w-8 rounded-lg text-gray-500 hover:text-teal-600 hover:bg-teal-50 dark:text-slate-400 dark:hover:text-teal-400 dark:hover:bg-slate-700 transition-all duration-200 flex-shrink-0 ${isCollapsed ? "mx-auto" : ""}`,
                title: toggleLabel,
                "aria-label": toggleLabel,
                children: isCollapsed ? isRTL ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2d$close$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelLeftClose$3e$__["PanelLeftClose"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/sidebar/sidebar-logo.tsx",
                    lineNumber: 58,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelLeftOpen$3e$__["PanelLeftOpen"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/sidebar/sidebar-logo.tsx",
                    lineNumber: 60,
                    columnNumber: 13
                }, this) : isRTL ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelLeftOpen$3e$__["PanelLeftOpen"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/sidebar/sidebar-logo.tsx",
                    lineNumber: 64,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2d$close$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelLeftClose$3e$__["PanelLeftClose"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/sidebar/sidebar-logo.tsx",
                    lineNumber: 66,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/sidebar/sidebar-logo.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/sidebar/sidebar-logo.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/layout/sidebar/sidebar-menu-item.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SidebarMenuItem",
    ()=>SidebarMenuItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function SidebarMenuItem({ item, pathname, t, isCollapsed }) {
    const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            href: item.href,
            prefetch: false,
            title: isCollapsed ? t(item.labelKey) : undefined,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("group flex items-center rounded-lg px-2.5 py-1.5 text-[13px] font-medium transition-all duration-200", isCollapsed ? "relative justify-center gap-0 px-2 py-2" : "gap-2.5", isActive ? "bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400" : "text-gray-600 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-700/60 hover:text-gray-900 dark:hover:text-slate-100"),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-4 w-4 flex-shrink-0 transition-colors duration-200", isActive ? "text-teal-600 dark:text-teal-400" : "text-gray-400 dark:text-slate-500 group-hover:text-gray-600 dark:group-hover:text-slate-300")
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/sidebar/sidebar-menu-item.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                !isCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex-1 truncate",
                            children: t(item.labelKey)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/sidebar/sidebar-menu-item.tsx",
                            lineNumber: 47,
                            columnNumber: 13
                        }, this),
                        item.badge !== undefined && item.badge !== null && item.badge !== "" && item.badge !== 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "ms-auto inline-flex items-center justify-center px-1.5 py-0.5 rounded text-[11px] font-semibold bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200/60 dark:border-teal-800/60",
                            children: item.badge
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/sidebar/sidebar-menu-item.tsx",
                            lineNumber: 49,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true),
                isCollapsed && item.badge !== undefined && item.badge !== null && item.badge !== "" && item.badge !== 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "absolute top-1 end-1 flex h-3.5 min-w-3.5 px-0.5 items-center justify-center rounded-full bg-teal-600 text-[8px] font-semibold text-white",
                    children: item.badge
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/sidebar/sidebar-menu-item.tsx",
                    lineNumber: 56,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/sidebar/sidebar-menu-item.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/sidebar/sidebar-menu-item.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/layout/sidebar/sidebar-collapsible-group.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SidebarCollapsibleGroup",
    ()=>SidebarCollapsibleGroup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$sidebar$2f$sidebar$2d$menu$2d$item$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/sidebar/sidebar-menu-item.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function SidebarCollapsibleGroup({ group, pathname, isExpanded, onToggle, isRTL, t, isCollapsed }) {
    const isTabActive = (group)=>{
        return group.items.some((item)=>pathname === item.href || pathname.startsWith(item.href + "/"));
    };
    const isActive = isTabActive(group);
    const GroupIcon = group.icon;
    // In collapsed mode: show items as icon-only rows (no group header)
    if (isCollapsed) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-0.5",
            children: group.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$sidebar$2f$sidebar$2d$menu$2d$item$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarMenuItem"], {
                    item: item,
                    pathname: pathname,
                    t: t,
                    isCollapsed: true
                }, item.href, false, {
                    fileName: "[project]/src/components/layout/sidebar/sidebar-collapsible-group.tsx",
                    lineNumber: 53,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/layout/sidebar/sidebar-collapsible-group.tsx",
            lineNumber: 51,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onToggle,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("group flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer", isActive ? "text-teal-600 dark:text-teal-400" : "text-gray-400 dark:text-slate-500 hover:text-gray-600 dark:hover:text-slate-300"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            GroupIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(GroupIcon, {
                                className: "h-3.5 w-3.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/sidebar/sidebar-collapsible-group.tsx",
                                lineNumber: 77,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: t(group.labelKey)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/sidebar/sidebar-collapsible-group.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/sidebar/sidebar-collapsible-group.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    isExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        className: "h-3 w-3 opacity-60"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/sidebar/sidebar-collapsible-group.tsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-3 w-3 opacity-60", isRTL && "rotate-180")
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/sidebar/sidebar-collapsible-group.tsx",
                        lineNumber: 83,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/sidebar/sidebar-collapsible-group.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "mt-0.5 space-y-0.5",
                children: group.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$sidebar$2f$sidebar$2d$menu$2d$item$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarMenuItem"], {
                        item: item,
                        pathname: pathname,
                        t: t,
                        isCollapsed: false
                    }, item.href, false, {
                        fileName: "[project]/src/components/layout/sidebar/sidebar-collapsible-group.tsx",
                        lineNumber: 90,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/layout/sidebar/sidebar-collapsible-group.tsx",
                lineNumber: 88,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/sidebar/sidebar-collapsible-group.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/layout/sidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$chat$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/chat.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/api-client.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$reservations$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/reservations.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-ssr] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-ssr] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-ssr] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$kanban$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderKanban$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-kanban.js [app-ssr] (ecmascript) <export default as FolderKanban>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-ssr] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-ssr] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-ssr] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell.js [app-ssr] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-ssr] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-ssr] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$banknote$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Banknote$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/banknote.js [app-ssr] (ecmascript) <export default as Banknote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-ssr] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard-list.js [app-ssr] (ecmascript) <export default as ClipboardList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/megaphone.js [app-ssr] (ecmascript) <export default as Megaphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gift.js [app-ssr] (ecmascript) <export default as Gift>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Handshake$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/handshake.js [app-ssr] (ecmascript) <export default as Handshake>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-check.js [app-ssr] (ecmascript) <export default as CalendarCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$sidebar$2f$sidebar$2d$logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/sidebar/sidebar-logo.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$sidebar$2f$sidebar$2d$menu$2d$item$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/sidebar/sidebar-menu-item.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$sidebar$2f$sidebar$2d$collapsible$2d$group$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/sidebar/sidebar-collapsible-group.tsx [app-ssr] (ecmascript)");
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
const developerMenuItems = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"],
        labelKey: "sidebar.home",
        href: "/developer/home"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"],
        labelKey: "sidebar.myProperties",
        href: "/developer/properties"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$kanban$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderKanban$3e$__["FolderKanban"],
        labelKey: "sidebar.myProjects",
        href: "/developer/projects"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
        labelKey: "sidebar.myBookings",
        href: "/developer/reservations"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"],
        labelKey: "sidebar.transactions",
        href: "/developer/transactions"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"],
        labelKey: "sidebar.marketPlace",
        href: "/developer/ready_market"
    }
];
const mainItems = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"],
        labelKey: "sidebar.dashboard",
        href: "/admin/home"
    }
];
const expertMenuItems = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
        labelKey: "sidebar.home",
        href: "/expert/home"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
        labelKey: "sidebar.booking",
        href: "/expert/bookings"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
        labelKey: "sidebar.history",
        href: "/expert/history"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"],
        labelKey: "sidebar.transactions",
        href: "/expert/transactions"
    }
];
const tabGroups = [
    {
        id: "catalog",
        labelKey: "sidebar.catalogGroup",
        items: [
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"],
                labelKey: "sidebar.properties",
                href: "/admin/properties"
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$kanban$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderKanban$3e$__["FolderKanban"],
                labelKey: "sidebar.projects",
                href: "/admin/projects"
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"],
                labelKey: "sidebar.developers",
                href: "/admin/developers"
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"],
                labelKey: "sidebar.experts",
                href: "/admin/experts"
            }
        ]
    },
    {
        id: "marketing",
        labelKey: "sidebar.marketingGroup",
        items: [
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"],
                labelKey: "sidebar.createNotifications",
                href: "/admin/marketing/notifications"
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"],
                labelKey: "sidebar.whatsappSms",
                href: "/admin/marketing/whatsapp-sms"
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"],
                labelKey: "sidebar.email",
                href: "/admin/marketing/email"
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"],
                labelKey: "sidebar.offers",
                href: "/admin/offers"
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"],
                labelKey: "sidebar.chat",
                href: "/admin/chat"
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__["Megaphone"],
                labelKey: "sidebar.ads",
                href: "/admin/ads"
            }
        ]
    },
    {
        id: "sales",
        labelKey: "sidebar.salesGroup",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Handshake$3e$__["Handshake"],
        items: [
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarCheck$3e$__["CalendarCheck"],
                labelKey: "sidebar.reservations",
                href: "/admin/reservations"
            }
        ]
    },
    {
        id: "users",
        labelKey: "sidebar.usersGroup",
        items: [
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                labelKey: "sidebar.users",
                href: "/admin/users"
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
                labelKey: "sidebar.roles",
                href: "/admin/roles"
            }
        ]
    },
    {
        id: "settings",
        labelKey: "sidebar.settingsGroup",
        items: [
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"],
                labelKey: "sidebar.features",
                href: "/admin/features"
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"],
                labelKey: "sidebar.areas",
                href: "/admin/areas"
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"],
                labelKey: "sidebar.locations",
                href: "/admin/locations"
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"],
                labelKey: "sidebar.cities",
                href: "/admin/cities"
            }
        ]
    },
    {
        id: "custom_support",
        labelKey: "sidebar.customSupport",
        items: [
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
                labelKey: "sidebar.erpnext",
                href: "/admin/erpnext"
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$banknote$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Banknote$3e$__["Banknote"],
                labelKey: "sidebar.subscriptions",
                href: "/admin/subscriptions"
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"],
                labelKey: "sidebar.activity",
                href: "/admin/activity"
            }
        ]
    }
];
const developerTabGroups = [
    {
        id: "marketing",
        labelKey: "sidebar.marketingGroup",
        items: [
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__["Megaphone"],
                labelKey: "sidebar.ads",
                href: "/developer/ads"
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"],
                labelKey: "sidebar.offers",
                href: "/developer/offers"
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"],
                labelKey: "sidebar.createNotifications",
                href: "/developer/marketing/notifications"
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"],
                labelKey: "sidebar.whatsappSms",
                href: "/developer/marketing/whatsapp-sms"
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"],
                labelKey: "sidebar.email",
                href: "/developer/marketing/email"
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"],
                labelKey: "sidebar.chat",
                href: "/developer/chat"
            }
        ]
    }
];
const bottomItems = [];
const developerBottomItems = [];
function Sidebar({ isOpen, setIsOpen, isCollapsed, setIsCollapsed }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [expandedTabs, setExpandedTabs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        catalog: true,
        sales: true,
        users: true,
        marketing: true,
        settings: true,
        custom_support: true
    });
    const userType = (session?.user?.user_type || session?.user?.role_name)?.toLowerCase();
    const isDeveloperRole = userType === "developer";
    const isExpertRole = userType === "expert";
    const isAdminRole = userType === "admin" || !isDeveloperRole && !isExpertRole;
    const token = session?.user?.accessToken;
    const { data: conversationsData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "supportConversations",
            token,
            "",
            isAdminRole
        ],
        queryFn: ({ signal })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$chat$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchSupportConversations"])(token, {
                isAdmin: isAdminRole,
                signal
            }),
        enabled: !!token,
        staleTime: 5 * 60 * 1000,
        gcTime: 30 * 60 * 1000,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false
    });
    const conversations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!conversationsData) return [];
        if (Array.isArray(conversationsData.data)) return conversationsData.data;
        if (Array.isArray(conversationsData.pages)) {
            return conversationsData.pages.flatMap((p)=>p.data || []);
        }
        return [];
    }, [
        conversationsData
    ]);
    const chatBadgeCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!conversations || conversations.length === 0) return undefined;
        const unread = conversations.reduce((sum, c)=>{
            const u = Number(c.unread_for_admin ?? c.unread_for_user ?? c.unread_count ?? (c.unread ? 1 : 0));
            return sum + (u > 0 ? u : 0);
        }, 0);
        if (unread > 0) return unread;
        return conversations.length;
    }, [
        conversations
    ]);
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { data: bookingsResponse } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "sidebar-bookings-count"
        ],
        queryFn: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$reservations$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AdminBookingsService"].getBookings(1, 1),
        enabled: !!token && (isAdminRole || isDeveloperRole),
        staleTime: 5 * 60 * 1000,
        gcTime: 30 * 60 * 1000,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false
    });
    const reservationsBadgeCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        let total = undefined;
        if (bookingsResponse) {
            const res = bookingsResponse;
            total = Number(res.total ?? res.data?.total ?? (Array.isArray(res.data) ? res.data.length : 0));
        }
        if ((!total || total <= 0) && queryClient) {
            const queries = queryClient.getQueriesData({
                queryKey: [
                    "bookings"
                ]
            });
            for (const [_, qData] of queries){
                if (qData) {
                    const t = Number(qData.total ?? qData.data?.total);
                    if (t > 0) {
                        total = t;
                        break;
                    }
                }
            }
        }
        return total && total > 0 ? total : undefined;
    }, [
        bookingsResponse,
        queryClient
    ]);
    const dynamicTabGroups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return tabGroups.map((group)=>({
                ...group,
                items: group.items.map((item)=>{
                    if (item.href === "/admin/chat") {
                        return {
                            ...item,
                            badge: chatBadgeCount
                        };
                    }
                    if (item.href === "/admin/reservations") {
                        return {
                            ...item,
                            badge: reservationsBadgeCount
                        };
                    }
                    return item;
                })
            }));
    }, [
        chatBadgeCount,
        reservationsBadgeCount
    ]);
    const dynamicDeveloperMenuItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return developerMenuItems.map((item)=>{
            if (item.href === "/developer/reservations") {
                return {
                    ...item,
                    badge: reservationsBadgeCount
                };
            }
            return item;
        });
    }, [
        reservationsBadgeCount
    ]);
    const dynamicDeveloperTabGroups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return developerTabGroups.map((group)=>({
                ...group,
                items: group.items.map((item)=>{
                    if (item.href === "/developer/chat" || item.href === "/admin/chat") {
                        return {
                            ...item,
                            badge: chatBadgeCount
                        };
                    }
                    return item;
                })
            }));
    }, [
        chatBadgeCount
    ]);
    const toggleTab = (tabId)=>{
        setExpandedTabs((prev)=>({
                ...prev,
                [tabId]: !prev[tabId]
            }));
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (setIsOpen) {
            setIsOpen(false);
        }
    }, [
        pathname,
        setIsOpen
    ]);
    const isRTL = language === "ar";
    const collapsed = isCollapsed ?? false;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            isOpen && setIsOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-30 bg-black/50 lg:hidden",
                onClick: ()=>setIsOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/sidebar.tsx",
                lineNumber: 314,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed start-0 top-0 z-40 h-screen transition-all duration-300 ease-in-out", "border-e border-gray-200 dark:border-slate-700", "bg-white dark:bg-slate-900", collapsed ? "w-[72px]" : "w-64", isOpen ? "translate-x-0" : isRTL ? "translate-x-full lg:translate-x-0" : "-translate-x-full lg:translate-x-0"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-full flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$sidebar$2f$sidebar$2d$logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarLogo"], {
                            isCollapsed: collapsed,
                            onToggleCollapse: ()=>setIsCollapsed && setIsCollapsed(!collapsed),
                            isRTL: isRTL
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/sidebar.tsx",
                            lineNumber: 334,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "flex-1 overflow-y-auto overflow-x-hidden px-2 py-3 space-y-0.5 scrollbar-thin",
                            children: [
                                isDeveloperRole && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-0.5",
                                            children: dynamicDeveloperMenuItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$sidebar$2f$sidebar$2d$menu$2d$item$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarMenuItem"], {
                                                    item: item,
                                                    pathname: pathname,
                                                    t: t,
                                                    isCollapsed: collapsed
                                                }, item.href, false, {
                                                    fileName: "[project]/src/components/layout/sidebar.tsx",
                                                    lineNumber: 345,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/sidebar.tsx",
                                            lineNumber: 343,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("space-y-0.5", !collapsed && "mt-4"),
                                            children: dynamicDeveloperTabGroups.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$sidebar$2f$sidebar$2d$collapsible$2d$group$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarCollapsibleGroup"], {
                                                    group: group,
                                                    pathname: pathname,
                                                    isExpanded: expandedTabs[group.id],
                                                    onToggle: ()=>toggleTab(group.id),
                                                    isRTL: isRTL,
                                                    t: t,
                                                    isCollapsed: collapsed
                                                }, group.id, false, {
                                                    fileName: "[project]/src/components/layout/sidebar.tsx",
                                                    lineNumber: 351,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/sidebar.tsx",
                                            lineNumber: 349,
                                            columnNumber: 17
                                        }, this),
                                        !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-6 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 p-4 text-white mx-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-semibold",
                                                            children: t("sidebar.currentPlan")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/sidebar.tsx",
                                                            lineNumber: 367,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white",
                                                            children: t("sidebar.free")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/sidebar.tsx",
                                                            lineNumber: 368,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/layout/sidebar.tsx",
                                                    lineNumber: 366,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-teal-100 mb-1",
                                                            children: t("sidebar.credits")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/sidebar.tsx",
                                                            lineNumber: 373,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-lg font-bold",
                                                            children: "100 / 800"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/sidebar.tsx",
                                                            lineNumber: 374,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/layout/sidebar.tsx",
                                                    lineNumber: 372,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-1.5 w-full rounded-full bg-white/20",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-1.5 rounded-full bg-white",
                                                            style: {
                                                                width: "12.5%"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/sidebar.tsx",
                                                            lineNumber: 378,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/sidebar.tsx",
                                                        lineNumber: 377,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/sidebar.tsx",
                                                    lineNumber: 376,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "w-full rounded-lg bg-white px-3 py-2 text-sm font-semibold text-teal-600 transition-colors hover:bg-teal-50",
                                                    children: t("sidebar.upgrade")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/sidebar.tsx",
                                                    lineNumber: 384,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout/sidebar.tsx",
                                            lineNumber: 365,
                                            columnNumber: 19
                                        }, this),
                                        developerBottomItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("space-y-0.5", !collapsed && "mt-3 pt-3 border-t border-gray-200 dark:border-neutral-800"),
                                            children: developerBottomItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$sidebar$2f$sidebar$2d$menu$2d$item$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarMenuItem"], {
                                                    item: item,
                                                    pathname: pathname,
                                                    t: t,
                                                    isCollapsed: collapsed
                                                }, item.href, false, {
                                                    fileName: "[project]/src/components/layout/sidebar.tsx",
                                                    lineNumber: 393,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/sidebar.tsx",
                                            lineNumber: 391,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true),
                                isAdminRole && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-0.5",
                                            children: mainItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$sidebar$2f$sidebar$2d$menu$2d$item$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarMenuItem"], {
                                                    item: item,
                                                    pathname: pathname,
                                                    t: t,
                                                    isCollapsed: collapsed
                                                }, item.href, false, {
                                                    fileName: "[project]/src/components/layout/sidebar.tsx",
                                                    lineNumber: 404,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/sidebar.tsx",
                                            lineNumber: 402,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("space-y-0.5", !collapsed && "mt-2"),
                                            children: dynamicTabGroups.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$sidebar$2f$sidebar$2d$collapsible$2d$group$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarCollapsibleGroup"], {
                                                    group: group,
                                                    pathname: pathname,
                                                    isExpanded: expandedTabs[group.id],
                                                    onToggle: ()=>toggleTab(group.id),
                                                    isRTL: isRTL,
                                                    t: t,
                                                    isCollapsed: collapsed
                                                }, group.id, false, {
                                                    fileName: "[project]/src/components/layout/sidebar.tsx",
                                                    lineNumber: 410,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/sidebar.tsx",
                                            lineNumber: 408,
                                            columnNumber: 17
                                        }, this),
                                        bottomItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("space-y-0.5", !collapsed && "mt-3 pt-3 border-t border-gray-200 dark:border-neutral-800"),
                                            children: bottomItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$sidebar$2f$sidebar$2d$menu$2d$item$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarMenuItem"], {
                                                    item: item,
                                                    pathname: pathname,
                                                    t: t,
                                                    isCollapsed: collapsed
                                                }, item.href, false, {
                                                    fileName: "[project]/src/components/layout/sidebar.tsx",
                                                    lineNumber: 426,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/sidebar.tsx",
                                            lineNumber: 424,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true),
                                isExpertRole && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-0.5",
                                    children: expertMenuItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$sidebar$2f$sidebar$2d$menu$2d$item$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarMenuItem"], {
                                            item: item,
                                            pathname: pathname,
                                            t: t,
                                            isCollapsed: collapsed
                                        }, item.href, false, {
                                            fileName: "[project]/src/components/layout/sidebar.tsx",
                                            lineNumber: 436,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/sidebar.tsx",
                                    lineNumber: 434,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/sidebar.tsx",
                            lineNumber: 340,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/sidebar.tsx",
                    lineNumber: 333,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/sidebar.tsx",
                lineNumber: 320,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: "h-9 w-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 47,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
Button.displayName = "Button";
;
}),
"[project]/src/components/ui/input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef(({ className, type, error, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full rounded-[8px] border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2.5 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-[#6A7282] placeholder:text-[14px] placeholder:font-[400] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "autofill:bg-[#F9FAFB] autofill:text-white", "dark:bg-background dark:border-border dark:text-white dark:placeholder:text-white", "dark:autofill:bg-background dark:autofill:shadow-[inset_0_0_0px_1000px_var(--background)] dark:autofill:![-webkit-text-fill-color:white]", error && "border-red-500 focus-visible:ring-red-500", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/input.tsx",
        lineNumber: 10,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
Input.displayName = "Input";
;
}),
"[project]/src/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DropdownMenu",
    ()=>DropdownMenu,
    "DropdownMenuCheckboxItem",
    ()=>DropdownMenuCheckboxItem,
    "DropdownMenuContent",
    ()=>DropdownMenuContent,
    "DropdownMenuGroup",
    ()=>DropdownMenuGroup,
    "DropdownMenuItem",
    ()=>DropdownMenuItem,
    "DropdownMenuLabel",
    ()=>DropdownMenuLabel,
    "DropdownMenuPortal",
    ()=>DropdownMenuPortal,
    "DropdownMenuRadioGroup",
    ()=>DropdownMenuRadioGroup,
    "DropdownMenuRadioItem",
    ()=>DropdownMenuRadioItem,
    "DropdownMenuSeparator",
    ()=>DropdownMenuSeparator,
    "DropdownMenuShortcut",
    ()=>DropdownMenuShortcut,
    "DropdownMenuSub",
    ()=>DropdownMenuSub,
    "DropdownMenuSubContent",
    ()=>DropdownMenuSubContent,
    "DropdownMenuSubTrigger",
    ()=>DropdownMenuSubTrigger,
    "DropdownMenuTrigger",
    ()=>DropdownMenuTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-ssr] (ecmascript) <export default as CircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function DropdownMenu({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dropdown-menu",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
function DropdownMenuPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dropdown-menu-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
function DropdownMenuTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dropdown-menu-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
function DropdownMenuContent({ className, sideOffset = 4, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "dropdown-menu-content",
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-none", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dropdown-menu.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
function DropdownMenuGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "dropdown-menu-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
function DropdownMenuItem({ className, inset, variant = "default", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "dropdown-menu-item",
        "data-inset": inset,
        "data-variant": variant,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:ps-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
function DropdownMenuCheckboxItem({ className, children, checked, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckboxItem"], {
        "data-slot": "dropdown-menu-checkbox-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pe-2 ps-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute start-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
function DropdownMenuRadioGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadioGroup"], {
        "data-slot": "dropdown-menu-radio-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
function DropdownMenuRadioItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadioItem"], {
        "data-slot": "dropdown-menu-radio-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pe-2 ps-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute start-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__["CircleIcon"], {
                        className: "size-2 fill-current"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, this);
}
function DropdownMenuLabel({ className, inset, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "dropdown-menu-label",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-2 py-1.5 text-sm font-medium data-[inset]:ps-8", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
function DropdownMenuSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "dropdown-menu-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-border -mx-1 my-1 h-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 171,
        columnNumber: 5
    }, this);
}
function DropdownMenuShortcut({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "data-slot": "dropdown-menu-shortcut",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground ms-auto text-xs tracking-widest", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 184,
        columnNumber: 5
    }, this);
}
function DropdownMenuSub({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sub"], {
        "data-slot": "dropdown-menu-sub",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 198,
        columnNumber: 10
    }, this);
}
function DropdownMenuSubTrigger({ className, inset, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTrigger"], {
        "data-slot": "dropdown-menu-sub-trigger",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:ps-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
                className: "ms-auto size-4"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 210,
        columnNumber: 5
    }, this);
}
function DropdownMenuSubContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubContent"], {
        "data-slot": "dropdown-menu-sub-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-none", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 230,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/components/layout/header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell.js [app-ssr] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-ssr] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-ssr] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-ssr] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building.js [app-ssr] (ecmascript) <export default as Building>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-ssr] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$theme_context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/theme_context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
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
function Header({ onMenuClick }) {
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const { t, toggleLanguage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const { theme, toggleTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$theme_context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const user = session?.user;
    const rawRole = (user?.user_type || user?.role_name || "").toLowerCase();
    const roleName = rawRole.includes("developer") ? "developer" : rawRole.includes("expert") ? "expert" : "admin";
    const userName = user?.name || t("header.defaultUserName");
    const userType = user?.user_type || t("header.defaultUserName");
    const userEmail = user?.email || "";
    const userInitial = userName.charAt(0).toUpperCase();
    const userInitials = userName.split(" ").map((n)=>n[0]).join("").toUpperCase().slice(0, 2);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-30 flex h-14 sm:h-16 items-center justify-between gap-1 sm:gap-4 border-b border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-2 sm:px-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1 sm:gap-4 flex-1 min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "icon",
                        className: "h-8 w-8 sm:h-9 sm:w-9 text-gray-600 lg:hidden shrink-0 p-0",
                        onClick: onMenuClick,
                        "aria-label": t("header.toggleMenu"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                className: "h-4.5 w-4.5 sm:h-5 sm:w-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/header.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: t("header.toggleMenu")
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/header.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/header.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative hidden md:block w-full max-w-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/header.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                type: "search",
                                placeholder: t("header.search"),
                                "aria-label": t("header.search"),
                                className: "ps-10 bg-gray-50 border-gray-200 h-9 text-sm"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/header.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/header.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/header.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-0.5 sm:gap-2 shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    className: "bg-teal-600 hover:bg-teal-700 text-white h-8 sm:h-9 px-2 sm:px-4 gap-1 text-xs sm:text-sm shrink-0",
                                    "aria-label": t("header.create"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            className: "h-3.5 w-3.5 sm:h-4 sm:w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/header.tsx",
                                            lineNumber: 85,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hidden sm:inline",
                                            children: t("header.create")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/header.tsx",
                                            lineNumber: 86,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/header.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/header.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                align: "end",
                                className: "w-48",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/${roleName}/projects/create`,
                                        prefetch: false,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                            className: "cursor-pointer gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__["Building"], {
                                                    className: "h-4 w-4 text-gray-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/header.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 17
                                                }, this),
                                                t("header.createProject")
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout/header.tsx",
                                            lineNumber: 91,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/header.tsx",
                                        lineNumber: 90,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/${roleName}/properties/create`,
                                        prefetch: false,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                            className: "cursor-pointer gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                                    className: "h-4 w-4 text-gray-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/header.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 17
                                                }, this),
                                                t("header.createProperty")
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout/header.tsx",
                                            lineNumber: 97,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/header.tsx",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/header.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/header.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: `/${roleName}/chat`,
                        prefetch: false,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "icon",
                            className: "h-8 w-8 sm:h-9 sm:w-9 text-gray-600 p-0",
                            "aria-label": t("header.messages"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                    className: "h-4 w-4 sm:h-5 sm:w-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/header.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "sr-only",
                                    children: t("header.messages")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/header.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/header.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/header.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "icon",
                        className: "h-8 w-8 sm:h-9 sm:w-9 text-gray-600 p-0",
                        onClick: toggleLanguage,
                        "aria-label": t("header.language"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                className: "h-4 w-4 sm:h-5 sm:w-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/header.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: t("header.language")
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/header.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/header.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "icon",
                        className: "h-8 w-8 sm:h-9 sm:w-9 text-gray-600 p-0",
                        onClick: toggleTheme,
                        "aria-label": t("header.toggleTheme"),
                        title: theme === "light" ? t("header.themeToggleDark") : t("header.themeToggleLight"),
                        children: [
                            theme === "light" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                className: "h-4 w-4 sm:h-5 sm:w-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/header.tsx",
                                lineNumber: 137,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                className: "h-4 w-4 sm:h-5 sm:w-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/header.tsx",
                                lineNumber: 139,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: t("header.toggleTheme")
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/header.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/header.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "icon",
                        className: "h-8 w-8 sm:h-9 sm:w-9 text-gray-600 p-0 relative",
                        "aria-label": t("header.notifications"),
                        asChild: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: `/${roleName}/notifications`,
                            prefetch: false,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                    className: "h-4 w-4 sm:h-5 sm:w-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/header.tsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "sr-only",
                                    children: t("header.notifications")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/header.tsx",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/header.tsx",
                            lineNumber: 151,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/header.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    "aria-label": userName,
                                    className: "flex items-center gap-1 sm:gap-2 hover:bg-gray-50 rounded-lg px-1 sm:px-2 py-1 transition-colors outline-none shrink-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center shrink-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white text-xs sm:text-sm font-medium",
                                                children: userInitial
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/header.tsx",
                                                lineNumber: 165,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/header.tsx",
                                            lineNumber: 164,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs sm:text-sm font-medium text-gray-900 truncate max-w-[55px] min-[400px]:max-w-[85px] sm:max-w-[150px] inline-block",
                                                    children: userName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/header.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs sm:text-sm font-medium text-gray-900 truncate max-w-[55px] min-[400px]:max-w-[85px] sm:max-w-[150px] inline-block",
                                                    children: [
                                                        "(",
                                                        userType,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/layout/header.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout/header.tsx",
                                            lineNumber: 169,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                            className: "h-3.5 w-3.5 sm:h-4 sm:w-4 text-gray-600 shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/header.tsx",
                                            lineNumber: 177,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/header.tsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/header.tsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                align: "end",
                                className: "w-[260px] sm:w-[280px] p-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 px-4 py-3 border-b border-gray-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-10 w-10 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center flex-shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white text-sm font-medium",
                                                    children: userInitials
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/header.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/header.tsx",
                                                lineNumber: 184,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-medium text-gray-900 text-sm",
                                                        children: userName
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/header.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-gray-500 truncate",
                                                        children: userEmail
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/header.tsx",
                                                        lineNumber: 193,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/header.tsx",
                                                lineNumber: 189,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/header.tsx",
                                        lineNumber: 183,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "py-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                            className: "px-4 py-2.5 cursor-pointer",
                                            onClick: ()=>router.push(`/${roleName}/settings`),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                    className: "h-4 w-4 me-3 text-gray-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/header.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-gray-900",
                                                    children: t("header.accountSettings")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/header.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout/header.tsx",
                                            lineNumber: 200,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/header.tsx",
                                        lineNumber: 199,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {
                                        className: "my-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/header.tsx",
                                        lineNumber: 206,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "py-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                            onClick: async ()=>{
                                                document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00";
                                                document.cookie = "role=; path=/; expires=Thu, 01 Jan 1970 00:00:00";
                                                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signOut"])({
                                                    callbackUrl: "/auth/signin"
                                                });
                                            },
                                            className: "px-4 py-2.5 cursor-pointer text-red-600 focus:text-red-600 focus:bg-red-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                    className: "h-4 w-4 me-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/header.tsx",
                                                    lineNumber: 220,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium",
                                                    children: t("header.signOut")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/header.tsx",
                                                    lineNumber: 221,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout/header.tsx",
                                            lineNumber: 209,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/header.tsx",
                                        lineNumber: 208,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/header.tsx",
                                lineNumber: 182,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/header.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/header.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/header.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/layout/dashboard-layout.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/sidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/header.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function DashboardLayout({ children }) {
    const [isSidebarOpen, setSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCollapsed, setIsCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen bg-[#F4F6FA] dark:bg-[#0F172A] overflow-x-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sidebar"], {
                isOpen: isSidebarOpen,
                setIsOpen: setSidebarOpen,
                isCollapsed: isCollapsed,
                setIsCollapsed: setIsCollapsed
            }, void 0, false, {
                fileName: "[project]/src/components/layout/dashboard-layout.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex flex-1 flex-col overflow-x-hidden w-full transition-all duration-300 ease-in-out ${isCollapsed ? "lg:ps-[72px]" : "lg:ps-64"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Header"], {
                        onMenuClick: ()=>setSidebarOpen(true)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/dashboard-layout.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "flex-1 overflow-y-auto overflow-x-hidden p-4 md:p-6",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/dashboard-layout.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/dashboard-layout.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/dashboard-layout.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__486088ad._.js.map