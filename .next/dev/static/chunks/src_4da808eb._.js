(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/admin/chat/utils/chatReadPersistence.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyReadStateToConversation",
    ()=>applyReadStateToConversation,
    "isMessageMarkedAsRead",
    ()=>isMessageMarkedAsRead,
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
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return {};
        if (raw !== cachedRaw) {
            cachedMap = JSON.parse(raw) || {};
            cachedRaw = raw;
        }
        return cachedMap;
    } catch  {
        return {};
    }
}
function recordConversationAsRead(conversationId, lastMessage, lastMessageAt) {
    if (("TURBOPACK compile-time value", "object") === "undefined" || !conversationId) return;
    try {
        const map = {
            ...getMarkedReadMap()
        };
        const convIdStr = String(conversationId);
        const msgId = lastMessage?.id ?? lastMessage?.message_id ?? null;
        const msgTime = lastMessageAt || lastMessage?.created_at || new Date().toISOString();
        map[convIdStr] = {
            markedReadAt: new Date().toISOString(),
            lastMessageId: msgId,
            lastMessageAt: msgTime
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
    } catch (err) {
        console.warn("Failed to save read state to localStorage:", err);
    }
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/chat/hooks/useChatRealtime.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useChatRealtime",
    ()=>useChatRealtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$chat$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/chat.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$chatReadPersistence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/chat/utils/chatReadPersistence.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$chatSocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/chat/utils/chatSocket.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
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
function useChatRealtime(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(29);
    if ($[0] !== "1cdf2293d16025d59d414eff45eab923a102c0ab135e39249853a8dec218d95d") {
        for(let $i = 0; $i < 29; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1cdf2293d16025d59d414eff45eab923a102c0ab135e39249853a8dec218d95d";
    }
    const { token, currentUserId, isAdmin, selectedConversationId, queryClient, onNewMessage } = t0;
    const selectedConversationIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(selectedConversationId);
    const currentUserIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(currentUserId);
    const isAdminRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(isAdmin);
    const tokenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(token);
    const onNewMessageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onNewMessage);
    const queryClientRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(queryClient);
    let t1;
    let t2;
    if ($[1] !== selectedConversationId) {
        t1 = ({
            "useChatRealtime[useEffect()]": ()=>{
                selectedConversationIdRef.current = selectedConversationId;
            }
        })["useChatRealtime[useEffect()]"];
        t2 = [
            selectedConversationId
        ];
        $[1] = selectedConversationId;
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    let t4;
    if ($[4] !== currentUserId) {
        t3 = ({
            "useChatRealtime[useEffect()]": ()=>{
                currentUserIdRef.current = currentUserId;
            }
        })["useChatRealtime[useEffect()]"];
        t4 = [
            currentUserId
        ];
        $[4] = currentUserId;
        $[5] = t3;
        $[6] = t4;
    } else {
        t3 = $[5];
        t4 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    let t6;
    if ($[7] !== isAdmin) {
        t5 = ({
            "useChatRealtime[useEffect()]": ()=>{
                isAdminRef.current = isAdmin;
            }
        })["useChatRealtime[useEffect()]"];
        t6 = [
            isAdmin
        ];
        $[7] = isAdmin;
        $[8] = t5;
        $[9] = t6;
    } else {
        t5 = $[8];
        t6 = $[9];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    let t7;
    let t8;
    if ($[10] !== token) {
        t7 = ({
            "useChatRealtime[useEffect()]": ()=>{
                tokenRef.current = token;
            }
        })["useChatRealtime[useEffect()]"];
        t8 = [
            token
        ];
        $[10] = token;
        $[11] = t7;
        $[12] = t8;
    } else {
        t7 = $[11];
        t8 = $[12];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t7, t8);
    let t10;
    let t9;
    if ($[13] !== onNewMessage) {
        t9 = ({
            "useChatRealtime[useEffect()]": ()=>{
                onNewMessageRef.current = onNewMessage;
            }
        })["useChatRealtime[useEffect()]"];
        t10 = [
            onNewMessage
        ];
        $[13] = onNewMessage;
        $[14] = t10;
        $[15] = t9;
    } else {
        t10 = $[14];
        t9 = $[15];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t9, t10);
    let t11;
    let t12;
    if ($[16] !== queryClient) {
        t11 = ({
            "useChatRealtime[useEffect()]": ()=>{
                queryClientRef.current = queryClient;
            }
        })["useChatRealtime[useEffect()]"];
        t12 = [
            queryClient
        ];
        $[16] = queryClient;
        $[17] = t11;
        $[18] = t12;
    } else {
        t11 = $[17];
        t12 = $[18];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t11, t12);
    let t13;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = ({
            "useChatRealtime[useRef()]": (rawData)=>{
                const _isAdmin = isAdminRef.current;
                const _token = tokenRef.current;
                const _currentUserId = currentUserIdRef.current;
                const _queryClient = queryClientRef.current;
                const currentSelected = selectedConversationIdRef.current;
                if (!_token) {
                    return;
                }
                const msg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$chatSocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractChatMessage"])(rawData);
                const isReadEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$chatSocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isChatReadEvent"])(rawData);
                const readConvId = rawData?.conversation_id ?? rawData?.id ?? (isReadEvent ? currentSelected : null);
                if (isReadEvent && readConvId) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$chatReadPersistence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recordConversationAsRead"])(readConvId);
                    const readConvIdStr = String(readConvId);
                    const now = new Date().toISOString();
                    _queryClient.setQueriesData({
                        predicate: (query)=>{
                            const key = query.queryKey;
                            return Array.isArray(key) && key[0] === "supportMessages" && String(key[1]) === readConvIdStr;
                        }
                    }, {
                        "useChatRealtime[useRef() > _queryClient.setQueriesData()]": (old)=>{
                            if (!old) {
                                return old;
                            }
                            const updateMsg = {
                                "useChatRealtime[useRef() > _queryClient.setQueriesData() > updateMsg]": (m)=>({
                                        ...m,
                                        is_read: true,
                                        read_at: m.read_at || now,
                                        is_seen: true,
                                        read: true
                                    })
                            }["useChatRealtime[useRef() > _queryClient.setQueriesData() > updateMsg]"];
                            if (old.pages && Array.isArray(old.pages)) {
                                return {
                                    ...old,
                                    pages: old.pages.map({
                                        "useChatRealtime[useRef() > _queryClient.setQueriesData() > old.pages.map()]": (page)=>({
                                                ...page,
                                                data: Array.isArray(page.data) ? page.data.map(updateMsg) : page.data
                                            })
                                    }["useChatRealtime[useRef() > _queryClient.setQueriesData() > old.pages.map()]"])
                                };
                            }
                            return old;
                        }
                    }["useChatRealtime[useRef() > _queryClient.setQueriesData()]"]);
                    _queryClient.setQueriesData({
                        queryKey: [
                            "supportConversations"
                        ]
                    }, {
                        "useChatRealtime[useRef() > _queryClient.setQueriesData()]": (old_0)=>{
                            if (!old_0) {
                                return old_0;
                            }
                            const updateConv = {
                                "useChatRealtime[useRef() > _queryClient.setQueriesData() > updateConv]": (c)=>{
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
                                }
                            }["useChatRealtime[useRef() > _queryClient.setQueriesData() > updateConv]"];
                            if (old_0.pages && Array.isArray(old_0.pages)) {
                                return {
                                    ...old_0,
                                    pages: old_0.pages.map({
                                        "useChatRealtime[useRef() > _queryClient.setQueriesData() > old_0.pages.map()]": (page_0)=>({
                                                ...page_0,
                                                data: Array.isArray(page_0.data) ? page_0.data.map(updateConv) : page_0.data
                                            })
                                    }["useChatRealtime[useRef() > _queryClient.setQueriesData() > old_0.pages.map()]"])
                                };
                            }
                            return old_0;
                        }
                    }["useChatRealtime[useRef() > _queryClient.setQueriesData()]"]);
                    return;
                }
                if (msg) {
                    if (isDuplicateMessageEvent(msg)) {
                        return;
                    }
                    const msgId = msg.id ?? msg.message_id;
                    const msgConvId = msg.conversation_id;
                    const isCurrentOpen = currentSelected && String(msgConvId) === String(currentSelected);
                    if (isCurrentOpen) {
                        const formattedMsg = {
                            ...msg,
                            is_read: true,
                            read_at: msg.read_at || new Date().toISOString()
                        };
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$chatReadPersistence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recordConversationAsRead"])(currentSelected, formattedMsg, formattedMsg.created_at);
                        _queryClient.setQueriesData({
                            predicate: (query_0)=>{
                                const key_0 = query_0.queryKey;
                                return Array.isArray(key_0) && key_0[0] === "supportMessages" && String(key_0[1]) === String(currentSelected);
                            }
                        }, {
                            "useChatRealtime[useRef() > _queryClient.setQueriesData()]": (old_1)=>{
                                if (!old_1?.pages?.length) {
                                    return old_1;
                                }
                                const exists = old_1.pages.some({
                                    "useChatRealtime[useRef() > _queryClient.setQueriesData() > old_1.pages.some()]": (page_1)=>page_1.data.some({
                                            "useChatRealtime[useRef() > _queryClient.setQueriesData() > old_1.pages.some() > page_1.data.some()]": (m_0)=>(m_0.id ?? m_0.message_id) === msgId
                                        }["useChatRealtime[useRef() > _queryClient.setQueriesData() > old_1.pages.some() > page_1.data.some()]"])
                                }["useChatRealtime[useRef() > _queryClient.setQueriesData() > old_1.pages.some()]"]);
                                if (exists) {
                                    return old_1;
                                }
                                const lastPageIndex = old_1.pages.length - 1;
                                const newPages = [
                                    ...old_1.pages
                                ];
                                newPages[lastPageIndex] = {
                                    ...newPages[lastPageIndex],
                                    data: [
                                        ...newPages[lastPageIndex].data,
                                        formattedMsg
                                    ]
                                };
                                return {
                                    ...old_1,
                                    pages: newPages
                                };
                            }
                        }["useChatRealtime[useRef() > _queryClient.setQueriesData()]"]);
                        const isOwn = _currentUserId && (Number(msg.sender_id) === Number(_currentUserId) || Number(msg.user_id) === Number(_currentUserId));
                        if (!isOwn) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$chat$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markSupportConversationAsRead"])(currentSelected, _token, _isAdmin).catch(_useChatRealtimeUseRefAnonymous);
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
                    }, {
                        "useChatRealtime[useRef() > _queryClient.setQueriesData()]": (old_2)=>{
                            if (!old_2) {
                                return old_2;
                            }
                            const updateConv_0 = {
                                "useChatRealtime[useRef() > _queryClient.setQueriesData() > updateConv_0]": (c_0)=>{
                                    const cId_0 = c_0.id ?? c_0.conversation_id;
                                    if (String(cId_0) !== String(msgConvId)) {
                                        return c_0;
                                    }
                                    return {
                                        ...c_0,
                                        last_message_at: msg.created_at || new Date().toISOString(),
                                        last_message: isCurrentOpen ? {
                                            ...msg,
                                            is_read: true,
                                            read_at: msg.read_at || new Date().toISOString()
                                        } : msg,
                                        unread_for_admin: isCurrentOpen ? 0 : Number(c_0.unread_for_admin || 0) + (_isAdmin ? 1 : 0),
                                        unread_for_user: isCurrentOpen ? 0 : Number(c_0.unread_for_user || 0) + (!_isAdmin ? 1 : 0),
                                        unread_count: isCurrentOpen ? 0 : Number(c_0.unread_count || 0) + 1
                                    };
                                }
                            }["useChatRealtime[useRef() > _queryClient.setQueriesData() > updateConv_0]"];
                            if (old_2.pages && Array.isArray(old_2.pages)) {
                                let found = false;
                                const newPages_0 = old_2.pages.map({
                                    "useChatRealtime[useRef() > _queryClient.setQueriesData() > old_2.pages.map()]": (page_2)=>({
                                            ...page_2,
                                            data: page_2.data.map({
                                                "useChatRealtime[useRef() > _queryClient.setQueriesData() > old_2.pages.map() > page_2.data.map()]": (c_1)=>{
                                                    const updated = updateConv_0(c_1);
                                                    if (updated !== c_1) {
                                                        found = true;
                                                    }
                                                    return updated;
                                                }
                                            }["useChatRealtime[useRef() > _queryClient.setQueriesData() > old_2.pages.map() > page_2.data.map()]"])
                                        })
                                }["useChatRealtime[useRef() > _queryClient.setQueriesData() > old_2.pages.map()]"]);
                                if (!found && rawData?.conversation) {
                                    newPages_0[0] = {
                                        ...newPages_0[0],
                                        data: [
                                            rawData.conversation,
                                            ...newPages_0[0]?.data || []
                                        ]
                                    };
                                }
                                return {
                                    ...old_2,
                                    pages: newPages_0
                                };
                            }
                            if (old_2.data && Array.isArray(old_2.data)) {
                                return {
                                    ...old_2,
                                    data: old_2.data.map(updateConv_0)
                                };
                            }
                            return old_2;
                        }
                    }["useChatRealtime[useRef() > _queryClient.setQueriesData()]"]);
                } else {
                    if (rawData?.conversation) {
                        _queryClient.setQueriesData({
                            queryKey: [
                                "supportConversations"
                            ]
                        }, {
                            "useChatRealtime[useRef() > _queryClient.setQueriesData()]": (old_3)=>{
                                if (!old_3?.pages?.length) {
                                    return old_3;
                                }
                                return {
                                    ...old_3,
                                    pages: [
                                        {
                                            ...old_3.pages[0],
                                            data: [
                                                rawData.conversation,
                                                ...old_3.pages[0].data
                                            ]
                                        },
                                        ...old_3.pages.slice(1)
                                    ]
                                };
                            }
                        }["useChatRealtime[useRef() > _queryClient.setQueriesData()]"]);
                    }
                }
            }
        })["useChatRealtime[useRef()]"];
        $[19] = t13;
    } else {
        t13 = $[19];
    }
    const stableHandlerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(t13);
    let t14;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = ({
            "useChatRealtime[useRef()]": ()=>{
                const _queryClient_0 = queryClientRef.current;
                const currentSelected_0 = selectedConversationIdRef.current;
                _queryClient_0.invalidateQueries({
                    queryKey: [
                        "supportConversations"
                    ]
                });
                if (currentSelected_0) {
                    _queryClient_0.invalidateQueries({
                        predicate: (query_1)=>{
                            const key_1 = query_1.queryKey;
                            return Array.isArray(key_1) && key_1[0] === "supportMessages" && String(key_1[1]) === String(currentSelected_0);
                        }
                    });
                }
            }
        })["useChatRealtime[useRef()]"];
        $[20] = t14;
    } else {
        t14 = $[20];
    }
    const resyncRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(t14);
    let t15;
    let t16;
    if ($[21] !== isAdmin || $[22] !== token) {
        t15 = ({
            "useChatRealtime[useEffect()]": ()=>{
                if (!token) {
                    return;
                }
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$chatSocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribeToChatChannel"])(token, (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$chatSocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChatChannelName"])(isAdmin), {
                    onEvent: (data)=>stableHandlerRef.current(data),
                    onResubscribed: ()=>resyncRef.current()
                });
            }
        })["useChatRealtime[useEffect()]"];
        t16 = [
            token,
            isAdmin
        ];
        $[21] = isAdmin;
        $[22] = token;
        $[23] = t15;
        $[24] = t16;
    } else {
        t15 = $[23];
        t16 = $[24];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t15, t16);
    let t17;
    let t18;
    if ($[25] !== selectedConversationId || $[26] !== token) {
        t17 = ({
            "useChatRealtime[useEffect()]": ()=>{
                if (!selectedConversationId || !token) {
                    return;
                }
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$chatSocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribeToChatChannel"])(token, (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$chatSocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConversationChannelName"])(selectedConversationId), {
                    onEvent: (data_0)=>stableHandlerRef.current(data_0)
                });
            }
        })["useChatRealtime[useEffect()]"];
        t18 = [
            selectedConversationId,
            token
        ];
        $[25] = selectedConversationId;
        $[26] = token;
        $[27] = t17;
        $[28] = t18;
    } else {
        t17 = $[27];
        t18 = $[28];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t17, t18);
}
_s(useChatRealtime, "th8MmLbH7Fc/PO7znfTkNgwOUE4=");
function _useChatRealtimeUseRefAnonymous() {}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useDebounce.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SEARCH_DEBOUNCE_MS",
    ()=>SEARCH_DEBOUNCE_MS,
    "useDebounce",
    ()=>useDebounce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const SEARCH_DEBOUNCE_MS = 300;
function useDebounce(value, t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "7bfb8253cd3f2186ed2b51176bb19c940bb9912cd70bb174b367711127bc5539") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7bfb8253cd3f2186ed2b51176bb19c940bb9912cd70bb174b367711127bc5539";
    }
    const delay = t0 === undefined ? SEARCH_DEBOUNCE_MS : t0;
    const [debouncedValue, setDebouncedValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(value);
    let t1;
    let t2;
    if ($[1] !== delay || $[2] !== value) {
        t1 = ({
            "useDebounce[useEffect()]": ()=>{
                const timer = setTimeout({
                    "useDebounce[useEffect() > setTimeout()]": ()=>{
                        setDebouncedValue(value);
                    }
                }["useDebounce[useEffect() > setTimeout()]"], delay);
                return ()=>clearTimeout(timer);
            }
        })["useDebounce[useEffect()]"];
        t2 = [
            value,
            delay
        ];
        $[1] = delay;
        $[2] = value;
        $[3] = t1;
        $[4] = t2;
    } else {
        t1 = $[3];
        t2 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    return debouncedValue;
}
_s(useDebounce, "KDuPAtDOgxm8PU6legVJOb3oOmA=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/chat/hooks/useConversationsList.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalizeConversationStatus",
    ()=>normalizeConversationStatus,
    "useConversationsList",
    ()=>useConversationsList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$chat$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/chat.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$chatReadPersistence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/chat/utils/chatReadPersistence.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useDebounce.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
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
    _s();
    const [statusFilter, setStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const debouncedSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebounce"])(searchQuery);
    const { data: conversationsData, isLoading: isLoadingConversations, refetch: refetchConversations, isRefetching: isRefetchingConversations, fetchNextPage: fetchNextConversationsPage, hasNextPage: hasNextConversationsPage, isFetchingNextPage: isFetchingNextConversationsPage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInfiniteQuery"])({
        queryKey: [
            "supportConversations",
            token,
            debouncedSearch,
            isAdmin,
            "infinite"
        ],
        queryFn: {
            "useConversationsList.useInfiniteQuery": ({ pageParam = undefined, signal })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$chat$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchSupportConversations"])(token || "", {
                    cursor: pageParam,
                    search: debouncedSearch,
                    isAdmin,
                    signal
                })
        }["useConversationsList.useInfiniteQuery"],
        getNextPageParam: {
            "useConversationsList.useInfiniteQuery": (lastPage)=>lastPage.next_cursor || undefined
        }["useConversationsList.useInfiniteQuery"],
        enabled: !!token,
        initialPageParam: undefined,
        // Kept up to date by websocket events (useChatRealtime); refetched only when marked stale
        // (missed events, mutations) or on the first load.
        staleTime: Infinity,
        gcTime: 30 * 60 * 1000,
        refetchOnWindowFocus: false,
        refetchOnMount: true,
        refetchOnReconnect: true
    });
    const conversations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useConversationsList.useMemo[conversations]": ()=>{
            const raw = conversationsData?.pages.flatMap({
                "useConversationsList.useMemo[conversations]": (page)=>page.data
            }["useConversationsList.useMemo[conversations]"]) || [];
            const seen = new Set();
            const deduplicated = [];
            for (const c of raw){
                const convId = String(c.id ?? c.conversation_id);
                if (!seen.has(convId)) {
                    seen.add(convId);
                    deduplicated.push(c);
                }
            }
            return deduplicated.map({
                "useConversationsList.useMemo[conversations]": (c_0)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$chatReadPersistence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyReadStateToConversation"])(c_0, selectedConversationId ? String(c_0.id ?? c_0.conversation_id) === String(selectedConversationId) : false)
            }["useConversationsList.useMemo[conversations]"]);
        }
    }["useConversationsList.useMemo[conversations]"], [
        conversationsData,
        selectedConversationId
    ]);
    const filteredConversations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useConversationsList.useMemo[filteredConversations]": ()=>{
            return conversations.filter({
                "useConversationsList.useMemo[filteredConversations]": (c_1)=>{
                    const s = normalizeConversationStatus(c_1.status);
                    if (statusFilter !== "all" && s !== statusFilter) {
                        return false;
                    }
                    if (debouncedSearch.trim()) {
                        const query = debouncedSearch.toLowerCase().trim();
                        const userName = (c_1.user?.name || `${c_1.user?.first_name || ""} ${c_1.user?.last_name || ""}`.trim()).toLowerCase();
                        const userEmail = (c_1.user?.email || "").toLowerCase();
                        const subject = (c_1.subject || "").toLowerCase();
                        const convId_0 = String(c_1.id ?? c_1.conversation_id);
                        const matches = userName.includes(query) || userEmail.includes(query) || subject.includes(query) || convId_0.includes(query);
                        if (!matches) return false;
                    }
                    return true;
                }
            }["useConversationsList.useMemo[filteredConversations]"]);
        }
    }["useConversationsList.useMemo[filteredConversations]"], [
        conversations,
        statusFilter,
        debouncedSearch
    ]);
    const counts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useConversationsList.useMemo[counts]": ()=>{
            const all = conversations.length;
            let open = 0;
            let pending = 0;
            let closed = 0;
            conversations.forEach({
                "useConversationsList.useMemo[counts]": (c_2)=>{
                    const s_0 = normalizeConversationStatus(c_2.status);
                    if (s_0 === "open") open++;
                    else if (s_0 === "pending") pending++;
                    else if (s_0 === "closed") closed++;
                }
            }["useConversationsList.useMemo[counts]"]);
            return {
                all,
                open,
                pending,
                closed
            };
        }
    }["useConversationsList.useMemo[counts]"], [
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
_s(useConversationsList, "gSf3o2c/Uicbno+trHrVA6l3W4Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebounce"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInfiniteQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/chat/hooks/useConversationMessages.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useConversationMessages",
    ()=>useConversationMessages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$chat$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/chat.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$chatDateUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/chat/utils/chatDateUtils.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function useConversationMessages(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(29);
    if ($[0] !== "e8e51dc0f5ed4581696e9016b14ae43bfbb69d08990d5d38c61e051e3bc1b38e") {
        for(let $i = 0; $i < 29; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e8e51dc0f5ed4581696e9016b14ae43bfbb69d08990d5d38c61e051e3bc1b38e";
    }
    const { token, selectedConversationId, isAdmin } = t0;
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const prevMessageCountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    let t1;
    let t2;
    if ($[1] !== isAdmin || $[2] !== selectedConversationId || $[3] !== token) {
        t1 = [
            "supportMessages",
            selectedConversationId,
            token,
            isAdmin
        ];
        t2 = (t3)=>{
            const { pageParam: t4, signal } = t3;
            const pageParam = t4 === undefined ? undefined : t4;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$chat$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchSupportConversationMessages"])(selectedConversationId, token || "", pageParam, isAdmin, signal);
        };
        $[1] = isAdmin;
        $[2] = selectedConversationId;
        $[3] = token;
        $[4] = t1;
        $[5] = t2;
    } else {
        t1 = $[4];
        t2 = $[5];
    }
    const t3 = !!selectedConversationId && !!token;
    let t4;
    if ($[6] !== t1 || $[7] !== t2 || $[8] !== t3) {
        t4 = {
            queryKey: t1,
            queryFn: t2,
            getNextPageParam: _temp,
            enabled: t3,
            initialPageParam: undefined,
            staleTime: 0,
            gcTime: 1800000,
            refetchOnWindowFocus: false,
            refetchOnMount: true,
            refetchOnReconnect: true
        };
        $[6] = t1;
        $[7] = t2;
        $[8] = t3;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    const { data: messagesData, isLoading: isLoadingMessages, refetch: refetchMessages, isRefetching: isRefetchingMessages, fetchNextPage: fetchNextMessagesPage, hasNextPage: hasNextMessagesPage, isFetchingNextPage: isFetchingNextMessagesPage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInfiniteQuery"])(t4);
    let t5;
    if ($[10] !== messagesData?.pages) {
        const raw = messagesData?.pages.flatMap(_useConversationMessagesAnonymous) || [];
        const seen = new Set();
        const deduplicated = raw.filter({
            "useConversationMessages[raw.filter()]": (m)=>{
                const id = m.id ?? m.message_id;
                if (id === undefined || id === null) {
                    return true;
                }
                if (seen.has(id)) {
                    return false;
                }
                seen.add(id);
                return true;
            }
        }["useConversationMessages[raw.filter()]"]);
        t5 = deduplicated.sort(_useConversationMessagesDeduplicatedSort);
        $[10] = messagesData?.pages;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    const messages = t5;
    let t6;
    if ($[12] !== messages) {
        t6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$chatDateUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["groupMessagesByDate"])(messages);
        $[12] = messages;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    const messageGroups = t6;
    let t7;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "useConversationMessages[useEffect()]": ()=>{
                prevMessageCountRef.current = 0;
            }
        })["useConversationMessages[useEffect()]"];
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== selectedConversationId) {
        t8 = [
            selectedConversationId
        ];
        $[15] = selectedConversationId;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t7, t8);
    let t10;
    let t9;
    if ($[17] !== messages) {
        t9 = ({
            "useConversationMessages[useEffect()]": ()=>{
                if (!messagesEndRef.current) {
                    return;
                }
                const isInitialLoad = prevMessageCountRef.current === 0 && messages.length > 0;
                const hasNewMessage = messages.length > prevMessageCountRef.current;
                prevMessageCountRef.current = messages.length;
                if (hasNewMessage || isInitialLoad) {
                    setTimeout({
                        "useConversationMessages[useEffect() > setTimeout()]": ()=>{
                            messagesEndRef.current?.scrollIntoView({
                                behavior: isInitialLoad ? "instant" : "smooth"
                            });
                        }
                    }["useConversationMessages[useEffect() > setTimeout()]"], 50);
                }
            }
        })["useConversationMessages[useEffect()]"];
        t10 = [
            messages
        ];
        $[17] = messages;
        $[18] = t10;
        $[19] = t9;
    } else {
        t10 = $[18];
        t9 = $[19];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t9, t10);
    let t11;
    if ($[20] !== fetchNextMessagesPage || $[21] !== hasNextMessagesPage || $[22] !== isFetchingNextMessagesPage || $[23] !== isLoadingMessages || $[24] !== isRefetchingMessages || $[25] !== messageGroups || $[26] !== messages || $[27] !== refetchMessages) {
        t11 = {
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
        $[20] = fetchNextMessagesPage;
        $[21] = hasNextMessagesPage;
        $[22] = isFetchingNextMessagesPage;
        $[23] = isLoadingMessages;
        $[24] = isRefetchingMessages;
        $[25] = messageGroups;
        $[26] = messages;
        $[27] = refetchMessages;
        $[28] = t11;
    } else {
        t11 = $[28];
    }
    return t11;
}
_s(useConversationMessages, "75q21rpMDpBMnHmQkkwviA3p2og=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInfiniteQuery"]
    ];
});
function _useConversationMessagesDeduplicatedSort(a, b) {
    const timeA = a.created_at ? new Date(a.created_at).getTime() : 0;
    const timeB = b.created_at ? new Date(b.created_at).getTime() : 0;
    return timeA - timeB;
}
function _useConversationMessagesAnonymous(page) {
    return page.data;
}
function _temp(lastPage) {
    return lastPage.next_cursor || undefined;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/chat/utils/localAttachmentCache.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
        if (("TURBOPACK compile-time value", "object") !== "undefined" && window.sessionStorage) {
            if (blobUrl.startsWith("data:") || blobUrl.startsWith("http")) {
                sessionStorage.setItem(`${STORAGE_PREFIX}${strKey}`, blobUrl);
            }
        }
    } catch  {}
}
function getLocalBlobUrl(key) {
    if (!key) return null;
    const strKey = String(key);
    const inMemory = localBlobMap.get(strKey);
    if (inMemory) return inMemory;
    try {
        if (("TURBOPACK compile-time value", "object") !== "undefined" && window.sessionStorage) {
            const persisted = sessionStorage.getItem(`${STORAGE_PREFIX}${strKey}`);
            if (persisted) {
                localBlobMap.set(strKey, persisted);
                return persisted;
            }
        }
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/chat/hooks/useChatMutations.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useChatMutations",
    ()=>useChatMutations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$chat$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/chat.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$errors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api-errors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$toast$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/toast-config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$localAttachmentCache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/chat/utils/localAttachmentCache.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$chatReadPersistence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/chat/utils/chatReadPersistence.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
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
function useChatMutations({ token, isAdmin, selectedConversationId, setSelectedConversationId, debouncedSearch, statusFilter, queryClient, refetchConversations }) {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [messageInput, setMessageInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [attachment, setAttachment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isNewConversationModalOpen, setIsNewConversationModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMarkingAsRead, setIsMarkingAsRead] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isReleasing, setIsReleasing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const createConversationMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useChatMutations.useMutation[createConversationMutation]": (data)=>{
                if (!token) throw new Error("Missing authentication token");
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$chat$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSupportConversation"])(data, token);
            }
        }["useChatMutations.useMutation[createConversationMutation]"],
        onSuccess: {
            "useChatMutations.useMutation[createConversationMutation]": (newConv)=>{
                const convId = newConv.id ?? newConv.conversation_id;
                queryClient.setQueriesData({
                    queryKey: [
                        "supportConversations"
                    ]
                }, {
                    "useChatMutations.useMutation[createConversationMutation]": (old)=>{
                        if (!old || !old.pages || old.pages.length === 0) return old;
                        const firstPage = old.pages[0];
                        const exists = firstPage.data.some({
                            "useChatMutations.useMutation[createConversationMutation].exists": (c)=>(c.id ?? c.conversation_id) === convId
                        }["useChatMutations.useMutation[createConversationMutation].exists"]);
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
                    }
                }["useChatMutations.useMutation[createConversationMutation]"]);
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
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("chat.conversationCreated"));
            }
        }["useChatMutations.useMutation[createConversationMutation]"],
        onError: {
            "useChatMutations.useMutation[createConversationMutation]": (error)=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$errors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiErrorMessage"])(error, t, t("chat.createFailed")), {
                    id: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$toast$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ERROR_TOAST_ID"]
                });
            }
        }["useChatMutations.useMutation[createConversationMutation]"]
    });
    const sendMessageMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useChatMutations.useMutation[sendMessageMutation]": (data_0)=>{
                if (!selectedConversationId || !token) {
                    throw new Error("Missing conversation or token");
                }
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$chat$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendSupportMessage"])(selectedConversationId, {
                    body: data_0.body,
                    attachment: data_0.attachment
                }, token, isAdmin);
            }
        }["useChatMutations.useMutation[sendMessageMutation]"],
        onSuccess: {
            "useChatMutations.useMutation[sendMessageMutation]": (sentMessage, variables)=>{
                const msgId = sentMessage?.id ?? sentMessage?.message_id;
                if (variables.attachment) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$localAttachmentCache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fileToDataUrl"])(variables.attachment).then({
                        "useChatMutations.useMutation[sendMessageMutation]": (dataUrl)=>{
                            if (dataUrl) {
                                if (msgId) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$localAttachmentCache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storeLocalBlobUrl"])(msgId, dataUrl);
                                if (sentMessage?.attachment_url) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$localAttachmentCache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storeLocalBlobUrl"])(sentMessage.attachment_url, dataUrl);
                                if (sentMessage?.file_url) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$localAttachmentCache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storeLocalBlobUrl"])(sentMessage.file_url, dataUrl);
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$localAttachmentCache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storeLocalBlobUrl"])(variables.attachment.name, dataUrl);
                            }
                        }
                    }["useChatMutations.useMutation[sendMessageMutation]"]);
                }
                if (variables._localBlobUrl) {
                    if (msgId) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$localAttachmentCache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storeLocalBlobUrl"])(msgId, variables._localBlobUrl);
                    if (sentMessage?.attachment_url) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$localAttachmentCache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storeLocalBlobUrl"])(sentMessage.attachment_url, variables._localBlobUrl);
                    if (sentMessage?.file_url) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$localAttachmentCache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storeLocalBlobUrl"])(sentMessage.file_url, variables._localBlobUrl);
                }
                queryClient.setQueriesData({
                    predicate: {
                        "useChatMutations.useMutation[sendMessageMutation]": (query)=>{
                            const key = query.queryKey;
                            return Array.isArray(key) && key[0] === "supportMessages" && String(key[1]) === String(selectedConversationId);
                        }
                    }["useChatMutations.useMutation[sendMessageMutation]"]
                }, {
                    "useChatMutations.useMutation[sendMessageMutation]": (old_0)=>{
                        if (!old_0 || !old_0.pages || old_0.pages.length === 0) return old_0;
                        const newMsg = {
                            ...sentMessage,
                            created_at: sentMessage.created_at || new Date().toISOString(),
                            attachment_url: variables._localBlobUrl || sentMessage.attachment_url || null,
                            file_name: variables.attachment?.name || sentMessage.file_name || null,
                            file_type: variables.attachment?.type || sentMessage.file_type || null
                        };
                        const lastPageIndex = old_0.pages.length - 1;
                        const lastPage = old_0.pages[lastPageIndex];
                        const newPages = [
                            ...old_0.pages
                        ];
                        newPages[lastPageIndex] = {
                            ...lastPage,
                            data: [
                                ...lastPage.data,
                                newMsg
                            ]
                        };
                        return {
                            ...old_0,
                            pages: newPages
                        };
                    }
                }["useChatMutations.useMutation[sendMessageMutation]"]);
                queryClient.setQueriesData({
                    queryKey: [
                        "supportConversations"
                    ]
                }, {
                    "useChatMutations.useMutation[sendMessageMutation]": (old_1)=>{
                        if (!old_1 || !old_1.pages) return old_1;
                        return {
                            ...old_1,
                            pages: old_1.pages.map({
                                "useChatMutations.useMutation[sendMessageMutation]": (page)=>({
                                        ...page,
                                        data: page.data.map({
                                            "useChatMutations.useMutation[sendMessageMutation]": (conv)=>{
                                                const convId_0 = conv.id ?? conv.conversation_id;
                                                if (String(convId_0) === String(selectedConversationId)) {
                                                    return {
                                                        ...conv,
                                                        last_message_at: sentMessage.created_at || new Date().toISOString(),
                                                        last_message: sentMessage
                                                    };
                                                }
                                                return conv;
                                            }
                                        }["useChatMutations.useMutation[sendMessageMutation]"])
                                    })
                            }["useChatMutations.useMutation[sendMessageMutation]"])
                        };
                    }
                }["useChatMutations.useMutation[sendMessageMutation]"]);
                setTimeout({
                    "useChatMutations.useMutation[sendMessageMutation]": ()=>{
                        queryClient.invalidateQueries({
                            queryKey: [
                                "supportConversations"
                            ]
                        });
                        queryClient.invalidateQueries({
                            predicate: {
                                "useChatMutations.useMutation[sendMessageMutation]": (query_0)=>{
                                    const key_0 = query_0.queryKey;
                                    return Array.isArray(key_0) && key_0[0] === "supportMessages" && String(key_0[1]) === String(selectedConversationId);
                                }
                            }["useChatMutations.useMutation[sendMessageMutation]"]
                        });
                    }
                }["useChatMutations.useMutation[sendMessageMutation]"], 1000);
                setMessageInput("");
                setAttachment(null);
            }
        }["useChatMutations.useMutation[sendMessageMutation]"],
        onError: {
            "useChatMutations.useMutation[sendMessageMutation]": (error_0)=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$errors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiErrorMessage"])(error_0, t, t("chat.sendFailed")), {
                    id: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$toast$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ERROR_TOAST_ID"]
                });
            }
        }["useChatMutations.useMutation[sendMessageMutation]"]
    });
    const updateConversationReadState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useChatMutations.useCallback[updateConversationReadState]": (convIdToUpdate)=>{
            if (!convIdToUpdate) return;
            const convIdStr = String(convIdToUpdate);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$chatReadPersistence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recordConversationAsRead"])(convIdToUpdate);
            queryClient.setQueriesData({
                queryKey: [
                    "supportConversations"
                ]
            }, {
                "useChatMutations.useCallback[updateConversationReadState]": (old_2)=>{
                    if (!old_2) return old_2;
                    const updateConv = {
                        "useChatMutations.useCallback[updateConversationReadState].updateConv": (c_0)=>{
                            const cId = c_0.id ?? c_0.conversation_id;
                            if (String(cId) === convIdStr) {
                                return {
                                    ...c_0,
                                    unread_for_user: 0,
                                    unread_for_admin: 0,
                                    unread_count: 0,
                                    unread: 0,
                                    last_message: c_0.last_message ? {
                                        ...c_0.last_message,
                                        is_read: true,
                                        read_at: c_0.last_message.read_at || new Date().toISOString()
                                    } : c_0.last_message
                                };
                            }
                            return c_0;
                        }
                    }["useChatMutations.useCallback[updateConversationReadState].updateConv"];
                    if (old_2.pages && Array.isArray(old_2.pages)) {
                        return {
                            ...old_2,
                            pages: old_2.pages.map({
                                "useChatMutations.useCallback[updateConversationReadState]": (page_0)=>({
                                        ...page_0,
                                        data: Array.isArray(page_0.data) ? page_0.data.map(updateConv) : page_0.data
                                    })
                            }["useChatMutations.useCallback[updateConversationReadState]"])
                        };
                    }
                    if (old_2.data && Array.isArray(old_2.data)) {
                        return {
                            ...old_2,
                            data: old_2.data.map(updateConv)
                        };
                    }
                    return old_2;
                }
            }["useChatMutations.useCallback[updateConversationReadState]"]);
            queryClient.setQueriesData({
                predicate: {
                    "useChatMutations.useCallback[updateConversationReadState]": (query_1)=>{
                        const key_1 = query_1.queryKey;
                        return Array.isArray(key_1) && key_1[0] === "supportMessages" && String(key_1[1]) === convIdStr;
                    }
                }["useChatMutations.useCallback[updateConversationReadState]"]
            }, {
                "useChatMutations.useCallback[updateConversationReadState]": (old_3)=>{
                    if (!old_3) return old_3;
                    const now = new Date().toISOString();
                    const updateMsg = {
                        "useChatMutations.useCallback[updateConversationReadState].updateMsg": (m)=>({
                                ...m,
                                is_read: true,
                                read_at: m.read_at || now,
                                is_seen: true,
                                read: true
                            })
                    }["useChatMutations.useCallback[updateConversationReadState].updateMsg"];
                    if (old_3.pages && Array.isArray(old_3.pages)) {
                        return {
                            ...old_3,
                            pages: old_3.pages.map({
                                "useChatMutations.useCallback[updateConversationReadState]": (page_1)=>({
                                        ...page_1,
                                        data: Array.isArray(page_1.data) ? page_1.data.map(updateMsg) : page_1.data
                                    })
                            }["useChatMutations.useCallback[updateConversationReadState]"])
                        };
                    }
                    if (Array.isArray(old_3)) {
                        return old_3.map(updateMsg);
                    }
                    if (old_3.data && Array.isArray(old_3.data)) {
                        return {
                            ...old_3,
                            data: old_3.data.map(updateMsg)
                        };
                    }
                    return old_3;
                }
            }["useChatMutations.useCallback[updateConversationReadState]"]);
        }
    }["useChatMutations.useCallback[updateConversationReadState]"], [
        queryClient
    ]);
    const selectedConversationIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(selectedConversationId);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useChatMutations.useEffect": ()=>{
            selectedConversationIdRef.current = selectedConversationId;
        }
    }["useChatMutations.useEffect"], [
        selectedConversationId
    ]);
    const handleConversationSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useChatMutations.useCallback[handleConversationSelect]": (conversationId)=>{
            const selectionChanges = !Object.is(conversationId, selectedConversationIdRef.current);
            setSelectedConversationId(conversationId);
            if (selectionChanges) return;
            updateConversationReadState(conversationId);
            if (token) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$chat$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markSupportConversationAsRead"])(conversationId, token, isAdmin).catch({
                    "useChatMutations.useCallback[handleConversationSelect]": ()=>{}
                }["useChatMutations.useCallback[handleConversationSelect]"]);
            }
        }
    }["useChatMutations.useCallback[handleConversationSelect]"], [
        setSelectedConversationId,
        updateConversationReadState,
        token,
        isAdmin
    ]);
    const handleManualMarkAsRead = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useChatMutations.useCallback[handleManualMarkAsRead]": async ()=>{
            if (!selectedConversationId || !token) return;
            try {
                setIsMarkingAsRead(true);
                updateConversationReadState(selectedConversationId);
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$chat$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markSupportConversationAsRead"])(selectedConversationId, token, isAdmin);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("chat.markedAsRead"));
            } catch (error_1) {
                console.error("Error marking as read:", error_1);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t("chat.markAsReadFailed"));
            } finally{
                setIsMarkingAsRead(false);
            }
        }
    }["useChatMutations.useCallback[handleManualMarkAsRead]"], [
        selectedConversationId,
        token,
        t,
        updateConversationReadState,
        isAdmin
    ]);
    const handleReleaseConversation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useChatMutations.useCallback[handleReleaseConversation]": async ()=>{
            if (!selectedConversationId || !token) return;
            try {
                setIsReleasing(true);
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$chat$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["releaseSupportConversation"])(selectedConversationId, token);
                queryClient.invalidateQueries({
                    queryKey: [
                        "supportConversations"
                    ]
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("chat.conversationReleased"));
            } catch (error_2) {
                console.error("Error releasing conversation:", error_2);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t("chat.releaseFailed"));
            } finally{
                setIsReleasing(false);
            }
        }
    }["useChatMutations.useCallback[handleReleaseConversation]"], [
        selectedConversationId,
        token,
        queryClient,
        t
    ]);
    const handleSendMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useChatMutations.useCallback[handleSendMessage]": (e)=>{
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
        }
    }["useChatMutations.useCallback[handleSendMessage]"], [
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
        handleCreateConversation: (data_1)=>createConversationMutation.mutate(data_1),
        isCreatingConversation: createConversationMutation.isPending,
        handleConversationSelect,
        handleManualMarkAsRead,
        isMarkingAsRead,
        handleReleaseConversation,
        isReleasing,
        updateConversationReadState
    };
}
_s(useChatMutations, "r5N7tp7EGB0pJvylCyZVmuRr3Cw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/chat/hooks/useSupportChat.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSupportChat",
    ()=>useSupportChat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$chat$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/chat.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$hooks$2f$useChatRealtime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/chat/hooks/useChatRealtime.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$hooks$2f$useConversationsList$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/chat/hooks/useConversationsList.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$hooks$2f$useConversationMessages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/chat/hooks/useConversationMessages.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$hooks$2f$useChatMutations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/chat/hooks/useChatMutations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$chatDateUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/chat/utils/chatDateUtils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$chatNotifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/chat/utils/chatNotifications.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$components$2f$ChatNotificationToast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/chat/components/ChatNotificationToast.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
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
;
const markedAsReadConvIds = new Set();
function useSupportChat() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(102);
    if ($[0] !== "6399381742477ffd7a57ae31d8fb06189543c9712ce0266670512e43ffb8ad52") {
        for(let $i = 0; $i < 102; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6399381742477ffd7a57ae31d8fb06189543c9712ce0266670512e43ffb8ad52";
    }
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    let t0;
    if ($[1] !== searchParams) {
        t0 = searchParams.get("conversationId");
        $[1] = searchParams;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const initialConversationId = t0;
    const [selectedConversationId, setSelectedConversationId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialConversationId || null);
    const currentUserId = session?.user?.id;
    const token = session?.user?.accessToken;
    let t1;
    if ($[3] !== session?.user?.role_name || $[4] !== session?.user?.user_type) {
        t1 = session?.user?.user_type?.toLowerCase() || session?.user?.role_name?.toLowerCase();
        $[3] = session?.user?.role_name;
        $[4] = session?.user?.user_type;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    const userType = t1;
    const roleId = session?.user?.role_id;
    const isDeveloperRole = userType === "developer" || roleId === 3;
    const isExpertRole = userType === "expert" || roleId === 6;
    const isAdmin = userType === "admin" || !isDeveloperRole && !isExpertRole;
    let t2;
    let t3;
    if ($[6] !== selectedConversationId) {
        t2 = ({
            "useSupportChat[useEffect()]": ()=>{
                if (selectedConversationId && ("TURBOPACK compile-time value", "object") !== "undefined") {
                    const url = new URL(window.location.href);
                    if (url.searchParams.get("conversationId") !== String(selectedConversationId)) {
                        url.searchParams.set("conversationId", String(selectedConversationId));
                        window.history.replaceState(null, "", url.toString());
                    }
                }
            }
        })["useSupportChat[useEffect()]"];
        t3 = [
            selectedConversationId
        ];
        $[6] = selectedConversationId;
        $[7] = t2;
        $[8] = t3;
    } else {
        t2 = $[7];
        t3 = $[8];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[9] !== isAdmin || $[10] !== selectedConversationId || $[11] !== token) {
        t4 = {
            token,
            isAdmin,
            selectedConversationId
        };
        $[9] = isAdmin;
        $[10] = selectedConversationId;
        $[11] = token;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    const { statusFilter, setStatusFilter, searchQuery, setSearchQuery, debouncedSearch, conversations, filteredConversations, counts, isLoadingConversations, refetchConversations, isRefetchingConversations, fetchNextConversationsPage, hasNextConversationsPage, isFetchingNextConversationsPage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$hooks$2f$useConversationsList$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConversationsList"])(t4);
    let t5;
    if ($[13] !== isAdmin || $[14] !== selectedConversationId || $[15] !== token) {
        t5 = {
            token,
            selectedConversationId,
            isAdmin
        };
        $[13] = isAdmin;
        $[14] = selectedConversationId;
        $[15] = token;
        $[16] = t5;
    } else {
        t5 = $[16];
    }
    const { messages, messageGroups, isLoadingMessages, refetchMessages, isRefetchingMessages, fetchNextMessagesPage, hasNextMessagesPage, isFetchingNextMessagesPage, messagesEndRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$hooks$2f$useConversationMessages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConversationMessages"])(t5);
    let t6;
    if ($[17] !== debouncedSearch || $[18] !== isAdmin || $[19] !== queryClient || $[20] !== refetchConversations || $[21] !== selectedConversationId || $[22] !== statusFilter || $[23] !== token) {
        t6 = {
            token,
            isAdmin,
            selectedConversationId,
            setSelectedConversationId,
            debouncedSearch,
            statusFilter,
            queryClient,
            refetchConversations
        };
        $[17] = debouncedSearch;
        $[18] = isAdmin;
        $[19] = queryClient;
        $[20] = refetchConversations;
        $[21] = selectedConversationId;
        $[22] = statusFilter;
        $[23] = token;
        $[24] = t6;
    } else {
        t6 = $[24];
    }
    const { messageInput, setMessageInput, attachment, setAttachment, handleSendMessage, isSendingMessage, isNewConversationModalOpen, setIsNewConversationModalOpen, handleCreateConversation, isCreatingConversation, handleConversationSelect, handleManualMarkAsRead, isMarkingAsRead, handleReleaseConversation, isReleasing, updateConversationReadState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$hooks$2f$useChatMutations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatMutations"])(t6);
    const markedAsReadSetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(markedAsReadConvIds);
    let t7;
    if ($[25] !== conversations || $[26] !== updateConversationReadState) {
        t7 = ({
            "useSupportChat[useEffect()]": ()=>{
                const markedSet = markedAsReadSetRef.current;
                if (markedSet.size === 0) {
                    return;
                }
                let needsUpdate = false;
                conversations.forEach({
                    "useSupportChat[useEffect() > conversations.forEach()]": (c)=>{
                        const cId = String(c.id ?? c.conversation_id);
                        if (!markedSet.has(cId)) {
                            return;
                        }
                        const unread = Number(c.unread_for_admin || 0) + Number(c.unread_for_user || 0) + Number(c.unread_count || 0);
                        if (unread > 0) {
                            needsUpdate = true;
                        }
                    }
                }["useSupportChat[useEffect() > conversations.forEach()]"]);
                if (needsUpdate) {
                    markedSet.forEach({
                        "useSupportChat[useEffect() > markedSet.forEach()]": (convId)=>updateConversationReadState(convId)
                    }["useSupportChat[useEffect() > markedSet.forEach()]"]);
                }
            }
        })["useSupportChat[useEffect()]"];
        $[25] = conversations;
        $[26] = updateConversationReadState;
        $[27] = t7;
    } else {
        t7 = $[27];
    }
    let t8;
    if ($[28] !== conversations) {
        t8 = [
            conversations
        ];
        $[28] = conversations;
        $[29] = t8;
    } else {
        t8 = $[29];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t7, t8);
    let t10;
    let t9;
    if ($[30] !== isAdmin || $[31] !== selectedConversationId || $[32] !== token || $[33] !== updateConversationReadState) {
        t9 = ({
            "useSupportChat[useEffect()]": ()=>{
                if (!selectedConversationId || !token) {
                    return;
                }
                const convIdStr = String(selectedConversationId);
                markedAsReadConvIds.add(convIdStr);
                updateConversationReadState(selectedConversationId);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$chat$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markSupportConversationAsRead"])(selectedConversationId, token, isAdmin).catch(_useSupportChatUseEffectAnonymous);
            }
        })["useSupportChat[useEffect()]"];
        t10 = [
            selectedConversationId,
            token,
            isAdmin,
            updateConversationReadState
        ];
        $[30] = isAdmin;
        $[31] = selectedConversationId;
        $[32] = token;
        $[33] = updateConversationReadState;
        $[34] = t10;
        $[35] = t9;
    } else {
        t10 = $[34];
        t9 = $[35];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t9, t10);
    let t11;
    if ($[36] !== handleManualMarkAsRead || $[37] !== selectedConversationId) {
        t11 = ({
            "useSupportChat[handleMarkAsReadWithTracking]": async ()=>{
                if (selectedConversationId) {
                    markedAsReadConvIds.add(String(selectedConversationId));
                }
                return handleManualMarkAsRead();
            }
        })["useSupportChat[handleMarkAsReadWithTracking]"];
        $[36] = handleManualMarkAsRead;
        $[37] = selectedConversationId;
        $[38] = t11;
    } else {
        t11 = $[38];
    }
    const handleMarkAsReadWithTracking = t11;
    let t12;
    if ($[39] !== conversations || $[40] !== handleConversationSelect || $[41] !== language || $[42] !== t) {
        t12 = ({
            "useSupportChat[handleNewMessage]": (msg)=>{
                if (msg?.conversation_id != null && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$chatNotifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["claimChatNotification"])(msg.conversation_id, msg?.id ?? msg?.message_id)) {
                    return;
                }
                const senderName = msg?.sender?.name || msg?.user?.name || (msg?.sender?.first_name ? `${msg.sender.first_name} ${msg.sender.last_name || ""}`.trim() : null) || t("chat.supportAgent");
                const preview = msg?.body || msg?.message_text || "";
                const convId_0 = msg?.conversation_id;
                const conv = conversations.find({
                    "useSupportChat[handleNewMessage > conversations.find()]": (c_0)=>String(c_0.id ?? c_0.conversation_id) === String(convId_0)
                }["useSupportChat[handleNewMessage > conversations.find()]"]);
                const chatTitle = conv?.subject || conv?.title || conv?.user?.name || (convId_0 ? `${t("chat.conversation")} #${convId_0}` : "");
                if (convId_0 == null) {
                    return;
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$components$2f$ChatNotificationToast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showChatNotification"])({
                    conversationId: convId_0,
                    kind: "message",
                    senderName,
                    title: chatTitle,
                    preview,
                    hasAttachment: !!(msg?.attachment || msg?.attachment_url),
                    createdAt: msg?.created_at,
                    labels: {
                        newMessage: t("chat.notifyNewMessage"),
                        newConversation: t("chat.notifyNewConversation"),
                        open: t("chat.openChat"),
                        dismiss: t("chat.dismiss"),
                        attachment: t("chat.attachment"),
                        messagesCount: (count)=>t("chat.newMessagesCount", {
                                count
                            })
                    },
                    direction: language === "ar" ? "rtl" : "ltr",
                    onOpen: ()=>handleConversationSelect(convId_0)
                });
            }
        })["useSupportChat[handleNewMessage]"];
        $[39] = conversations;
        $[40] = handleConversationSelect;
        $[41] = language;
        $[42] = t;
        $[43] = t12;
    } else {
        t12 = $[43];
    }
    const handleNewMessage = t12;
    let t13;
    if ($[44] !== currentUserId || $[45] !== handleNewMessage || $[46] !== isAdmin || $[47] !== queryClient || $[48] !== selectedConversationId || $[49] !== token) {
        t13 = {
            token,
            currentUserId,
            isAdmin,
            selectedConversationId,
            queryClient,
            onNewMessage: handleNewMessage
        };
        $[44] = currentUserId;
        $[45] = handleNewMessage;
        $[46] = isAdmin;
        $[47] = queryClient;
        $[48] = selectedConversationId;
        $[49] = token;
        $[50] = t13;
    } else {
        t13 = $[50];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$hooks$2f$useChatRealtime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatRealtime"])(t13);
    let t14;
    if ($[51] !== conversations || $[52] !== selectedConversationId) {
        let t15;
        if ($[54] !== selectedConversationId) {
            t15 = ({
                "useSupportChat[conversations.find()]": (c_1)=>String(c_1.id ?? c_1.conversation_id) === String(selectedConversationId)
            })["useSupportChat[conversations.find()]"];
            $[54] = selectedConversationId;
            $[55] = t15;
        } else {
            t15 = $[55];
        }
        t14 = conversations.find(t15);
        $[51] = conversations;
        $[52] = selectedConversationId;
        $[53] = t14;
    } else {
        t14 = $[53];
    }
    const activeConversation = t14;
    let t15;
    if ($[56] !== t) {
        t15 = (dateString)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$chatDateUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatChatTime"])(dateString, t("chat.yesterdayAt"));
        $[56] = t;
        $[57] = t15;
    } else {
        t15 = $[57];
    }
    let t16;
    if ($[58] !== activeConversation || $[59] !== attachment || $[60] !== conversations || $[61] !== counts || $[62] !== currentUserId || $[63] !== fetchNextConversationsPage || $[64] !== fetchNextMessagesPage || $[65] !== filteredConversations || $[66] !== handleConversationSelect || $[67] !== handleCreateConversation || $[68] !== handleMarkAsReadWithTracking || $[69] !== handleReleaseConversation || $[70] !== handleSendMessage || $[71] !== hasNextConversationsPage || $[72] !== hasNextMessagesPage || $[73] !== isAdmin || $[74] !== isCreatingConversation || $[75] !== isFetchingNextConversationsPage || $[76] !== isFetchingNextMessagesPage || $[77] !== isLoadingConversations || $[78] !== isLoadingMessages || $[79] !== isMarkingAsRead || $[80] !== isNewConversationModalOpen || $[81] !== isRefetchingConversations || $[82] !== isRefetchingMessages || $[83] !== isReleasing || $[84] !== isSendingMessage || $[85] !== messageGroups || $[86] !== messageInput || $[87] !== messages || $[88] !== messagesEndRef || $[89] !== refetchConversations || $[90] !== refetchMessages || $[91] !== searchQuery || $[92] !== selectedConversationId || $[93] !== setAttachment || $[94] !== setIsNewConversationModalOpen || $[95] !== setMessageInput || $[96] !== setSearchQuery || $[97] !== setStatusFilter || $[98] !== statusFilter || $[99] !== t || $[100] !== t15) {
        t16 = {
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
            formatTime: t15
        };
        $[58] = activeConversation;
        $[59] = attachment;
        $[60] = conversations;
        $[61] = counts;
        $[62] = currentUserId;
        $[63] = fetchNextConversationsPage;
        $[64] = fetchNextMessagesPage;
        $[65] = filteredConversations;
        $[66] = handleConversationSelect;
        $[67] = handleCreateConversation;
        $[68] = handleMarkAsReadWithTracking;
        $[69] = handleReleaseConversation;
        $[70] = handleSendMessage;
        $[71] = hasNextConversationsPage;
        $[72] = hasNextMessagesPage;
        $[73] = isAdmin;
        $[74] = isCreatingConversation;
        $[75] = isFetchingNextConversationsPage;
        $[76] = isFetchingNextMessagesPage;
        $[77] = isLoadingConversations;
        $[78] = isLoadingMessages;
        $[79] = isMarkingAsRead;
        $[80] = isNewConversationModalOpen;
        $[81] = isRefetchingConversations;
        $[82] = isRefetchingMessages;
        $[83] = isReleasing;
        $[84] = isSendingMessage;
        $[85] = messageGroups;
        $[86] = messageInput;
        $[87] = messages;
        $[88] = messagesEndRef;
        $[89] = refetchConversations;
        $[90] = refetchMessages;
        $[91] = searchQuery;
        $[92] = selectedConversationId;
        $[93] = setAttachment;
        $[94] = setIsNewConversationModalOpen;
        $[95] = setMessageInput;
        $[96] = setSearchQuery;
        $[97] = setStatusFilter;
        $[98] = statusFilter;
        $[99] = t;
        $[100] = t15;
        $[101] = t16;
    } else {
        t16 = $[101];
    }
    return t16;
}
_s(useSupportChat, "06wtDJer5PhwQ61GNCakPGsUlj4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$hooks$2f$useConversationsList$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConversationsList"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$hooks$2f$useConversationMessages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConversationMessages"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$hooks$2f$useChatMutations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatMutations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$hooks$2f$useChatRealtime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatRealtime"]
    ];
});
function _useSupportChatUseEffectAnonymous(err) {
    console.warn("Auto mark as read error:", err);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/chat/components/ChatTabs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatTabs",
    ()=>ChatTabs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/inbox.js [app-client] (ecmascript) <export default as Inbox>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ChatTabs(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(52);
    if ($[0] !== "8a8adbd9b621705fb63e358ec46e1f7825b5dd1de3f5dd4c8eb4483ce8f44be1") {
        for(let $i = 0; $i < 52; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8a8adbd9b621705fb63e358ec46e1f7825b5dd1de3f5dd4c8eb4483ce8f44be1";
    }
    const { statusFilter, setStatusFilter, counts, onCreateConversation, isCreatingConversation } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t1;
    if ($[1] !== t) {
        t1 = t("chat.all");
        $[1] = t;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const t2 = counts?.all;
    let t3;
    if ($[3] !== t1 || $[4] !== t2) {
        t3 = {
            key: "all",
            label: t1,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__["Inbox"],
            count: t2
        };
        $[3] = t1;
        $[4] = t2;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== t) {
        t4 = t("chat.open");
        $[6] = t;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    const t5 = counts?.open;
    let t6;
    if ($[8] !== t4 || $[9] !== t5) {
        t6 = {
            key: "open",
            label: t4,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
            count: t5
        };
        $[8] = t4;
        $[9] = t5;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== t) {
        t7 = t("chat.pending");
        $[11] = t;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    const t8 = counts?.pending;
    let t9;
    if ($[13] !== t7 || $[14] !== t8) {
        t9 = {
            key: "pending",
            label: t7,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
            count: t8
        };
        $[13] = t7;
        $[14] = t8;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] !== t) {
        t10 = t("chat.closed");
        $[16] = t;
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    const t11 = counts?.closed;
    let t12;
    if ($[18] !== t10 || $[19] !== t11) {
        t12 = {
            key: "closed",
            label: t10,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"],
            count: t11
        };
        $[18] = t10;
        $[19] = t11;
        $[20] = t12;
    } else {
        t12 = $[20];
    }
    let t13;
    if ($[21] !== t12 || $[22] !== t3 || $[23] !== t6 || $[24] !== t9) {
        t13 = [
            t3,
            t6,
            t9,
            t12
        ];
        $[21] = t12;
        $[22] = t3;
        $[23] = t6;
        $[24] = t9;
        $[25] = t13;
    } else {
        t13 = $[25];
    }
    const tabs = t13;
    let t14;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-9 w-9 rounded-lg bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 border border-teal-100 dark:border-teal-900/40 flex items-center justify-center shadow-xs",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/chat/components/ChatTabs.tsx",
                lineNumber: 144,
                columnNumber: 201
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ChatTabs.tsx",
            lineNumber: 144,
            columnNumber: 11
        }, this);
        $[26] = t14;
    } else {
        t14 = $[26];
    }
    let t15;
    if ($[27] !== t) {
        t15 = t("chat.title");
        $[27] = t;
        $[28] = t15;
    } else {
        t15 = $[28];
    }
    let t16;
    if ($[29] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-xl font-bold text-gray-900 dark:text-white",
            children: t15
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ChatTabs.tsx",
            lineNumber: 159,
            columnNumber: 11
        }, this);
        $[29] = t15;
        $[30] = t16;
    } else {
        t16 = $[30];
    }
    let t17;
    if ($[31] !== t) {
        t17 = t("chat.chatsTitle");
        $[31] = t;
        $[32] = t17;
    } else {
        t17 = $[32];
    }
    let t18;
    if ($[33] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-500 dark:text-gray-400",
            children: t17
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ChatTabs.tsx",
            lineNumber: 175,
            columnNumber: 11
        }, this);
        $[33] = t17;
        $[34] = t18;
    } else {
        t18 = $[34];
    }
    let t19;
    if ($[35] !== t16 || $[36] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t16,
                        t18
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/chat/components/ChatTabs.tsx",
                    lineNumber: 183,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/chat/components/ChatTabs.tsx",
            lineNumber: 183,
            columnNumber: 11
        }, this);
        $[35] = t16;
        $[36] = t18;
        $[37] = t19;
    } else {
        t19 = $[37];
    }
    let t20;
    if ($[38] !== isCreatingConversation || $[39] !== onCreateConversation || $[40] !== t) {
        t20 = onCreateConversation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            onClick: onCreateConversation,
            disabled: isCreatingConversation,
            className: "bg-teal-600 hover:bg-teal-700 text-white gap-2 h-9 text-xs font-semibold shadow-xs cursor-pointer",
            children: [
                isCreatingConversation ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "h-3.5 w-3.5 animate-spin"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/chat/components/ChatTabs.tsx",
                    lineNumber: 192,
                    columnNumber: 244
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                    className: "h-3.5 w-3.5"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/chat/components/ChatTabs.tsx",
                    lineNumber: 192,
                    columnNumber: 295
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: isCreatingConversation ? t("chat.creatingConversation") : t("chat.newConversation")
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/chat/components/ChatTabs.tsx",
                    lineNumber: 192,
                    columnNumber: 328
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/chat/components/ChatTabs.tsx",
            lineNumber: 192,
            columnNumber: 35
        }, this);
        $[38] = isCreatingConversation;
        $[39] = onCreateConversation;
        $[40] = t;
        $[41] = t20;
    } else {
        t20 = $[41];
    }
    let t21;
    if ($[42] !== t19 || $[43] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between mb-3",
            children: [
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/chat/components/ChatTabs.tsx",
            lineNumber: 202,
            columnNumber: 11
        }, this);
        $[42] = t19;
        $[43] = t20;
        $[44] = t21;
    } else {
        t21 = $[44];
    }
    let t22;
    if ($[45] !== setStatusFilter || $[46] !== statusFilter || $[47] !== tabs) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-4 border-b border-gray-100 dark:border-gray-800",
            children: tabs.map({
                "ChatTabs[tabs.map()]": (tab)=>{
                    const Icon = tab.icon;
                    const isActive = statusFilter === tab.key;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "ChatTabs[tabs.map() > <button>.onClick]": ()=>setStatusFilter(tab.key)
                        }["ChatTabs[tabs.map() > <button>.onClick]"],
                        className: `pb-3 px-1.5 relative flex items-center gap-2 text-sm font-medium transition-colors cursor-pointer ${isActive ? "text-teal-600 dark:text-teal-400 font-semibold" : "text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/chat/components/ChatTabs.tsx",
                                lineNumber: 217,
                                columnNumber: 314
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: tab.label
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/chat/components/ChatTabs.tsx",
                                lineNumber: 217,
                                columnNumber: 342
                            }, this),
                            tab.count !== undefined && tab.count > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `text-xs px-2 py-0.5 rounded-full font-semibold ${isActive ? "bg-teal-100 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300" : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"}`,
                                children: tab.count
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/chat/components/ChatTabs.tsx",
                                lineNumber: 217,
                                columnNumber: 411
                            }, this),
                            isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-0 left-0 right-0 h-0.5 bg-teal-600 dark:bg-teal-500 rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/chat/components/ChatTabs.tsx",
                                lineNumber: 217,
                                columnNumber: 657
                            }, this)
                        ]
                    }, tab.key, true, {
                        fileName: "[project]/src/app/admin/chat/components/ChatTabs.tsx",
                        lineNumber: 215,
                        columnNumber: 18
                    }, this);
                }
            }["ChatTabs[tabs.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ChatTabs.tsx",
            lineNumber: 211,
            columnNumber: 11
        }, this);
        $[45] = setStatusFilter;
        $[46] = statusFilter;
        $[47] = tabs;
        $[48] = t22;
    } else {
        t22 = $[48];
    }
    let t23;
    if ($[49] !== t21 || $[50] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 pt-4 pb-0",
                children: [
                    t21,
                    t22
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/chat/components/ChatTabs.tsx",
                lineNumber: 229,
                columnNumber: 100
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ChatTabs.tsx",
            lineNumber: 229,
            columnNumber: 11
        }, this);
        $[49] = t21;
        $[50] = t22;
        $[51] = t23;
    } else {
        t23 = $[51];
    }
    return t23;
}
_s(ChatTabs, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = ChatTabs;
var _c;
__turbopack_context__.k.register(_c, "ChatTabs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/chat/components/ChatContactItem.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatContactItem",
    ()=>ChatContactItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/paperclip.js [app-client] (ecmascript) <export default as Paperclip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$hooks$2f$useConversationsList$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/chat/hooks/useConversationsList.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const ChatContactItem = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = _s(function ChatContactItem(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(57);
    if ($[0] !== "49a7128b7de53f28fd9eb051713805c8de0e29babc3d03ca3e06dc9c4e462447") {
        for(let $i = 0; $i < 57; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "49a7128b7de53f28fd9eb051713805c8de0e29babc3d03ca3e06dc9c4e462447";
    }
    const { conversation, isSelected, onSelect, formatTime } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const convId = conversation.id ?? conversation.conversation_id;
    const rawUnread = conversation.unread_for_user ?? conversation.unread_for_admin ?? conversation.unread_count ?? conversation.unread ?? 0;
    const unreadCount = isSelected ? 0 : Number(rawUnread || 0);
    const t1 = conversation.last_message_at || conversation.updated_at || conversation.created_at;
    let t2;
    if ($[1] !== formatTime || $[2] !== t1) {
        t2 = formatTime(t1);
        $[1] = formatTime;
        $[2] = t1;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const timeStr = t2;
    let t3;
    if ($[4] !== t) {
        t3 = ({
            "ChatContactItem[getStatusBadge]": (status)=>{
                const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$hooks$2f$useConversationsList$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeConversationStatus"])(status);
                if (s === "open") {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "h-1.5 w-1.5 rounded-full bg-emerald-500"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/chat/components/ChatContactItem.tsx",
                                lineNumber: 52,
                                columnNumber: 245
                            }, this),
                            t("chat.open")
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/chat/components/ChatContactItem.tsx",
                        lineNumber: 52,
                        columnNumber: 18
                    }, this);
                }
                if (s === "pending") {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                className: "h-2.5 w-2.5"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/chat/components/ChatContactItem.tsx",
                                lineNumber: 55,
                                columnNumber: 233
                            }, this),
                            t("chat.pending")
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/chat/components/ChatContactItem.tsx",
                        lineNumber: 55,
                        columnNumber: 18
                    }, this);
                }
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                            className: "h-2.5 w-2.5"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/chat/components/ChatContactItem.tsx",
                            lineNumber: 57,
                            columnNumber: 220
                        }, this),
                        t("chat.closed")
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/chat/components/ChatContactItem.tsx",
                    lineNumber: 57,
                    columnNumber: 16
                }, this);
            }
        })["ChatContactItem[getStatusBadge]"];
        $[4] = t;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const getStatusBadge = t3;
    let t4;
    if ($[6] !== conversation || $[7] !== t) {
        t4 = ({
            "ChatContactItem[getLastMessageText]": ()=>{
                const msg = conversation.last_message || conversation.latest_message;
                if (!msg) {
                    if (conversation.subject) {
                        return conversation.subject;
                    }
                    return t("chat.noMessagesYet");
                }
                if (typeof msg === "string") {
                    return msg;
                }
                if (msg.body) {
                    return msg.body;
                }
                if (msg.message_text) {
                    return msg.message_text;
                }
                if (msg.attachment || msg.attachment_url) {
                    return "\uD83D\uDCCE " + t("chat.attachment");
                }
                return conversation.subject || t("chat.noMessagesYet");
            }
        })["ChatContactItem[getLastMessageText]"];
        $[6] = conversation;
        $[7] = t;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    const getLastMessageText = t4;
    let t5;
    if ($[9] !== conversation.user) {
        t5 = conversation.user?.name || (conversation.user?.first_name ? `${conversation.user.first_name} ${conversation.user.last_name || ""}`.trim() : null);
        $[9] = conversation.user;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    const userName = t5;
    const title = userName || conversation.subject || conversation.title || `${t("chat.conversation")} #${convId}`;
    let t6;
    if ($[11] !== getLastMessageText) {
        t6 = getLastMessageText();
        $[11] = getLastMessageText;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    const lastMsg = t6;
    let t7;
    if ($[13] !== convId || $[14] !== conversation.user?.email || $[15] !== userName) {
        t7 = (userName || conversation.user?.email || "")[0]?.toUpperCase() || `#${convId}`;
        $[13] = convId;
        $[14] = conversation.user?.email;
        $[15] = userName;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    const avatarLetter = t7;
    let t8;
    if ($[17] !== convId || $[18] !== onSelect) {
        t8 = ({
            "ChatContactItem[<button>.onClick]": ()=>onSelect(convId)
        })["ChatContactItem[<button>.onClick]"];
        $[17] = convId;
        $[18] = onSelect;
        $[19] = t8;
    } else {
        t8 = $[19];
    }
    const t9 = `w-full p-3.5 flex items-start gap-3 transition-all text-start cursor-pointer border-b border-gray-100 dark:border-gray-800/70 ${isSelected ? "bg-teal-50/80 dark:bg-teal-950/30 border-s-3 border-teal-600 text-gray-900 dark:text-white shadow-2xs" : "hover:bg-gray-50/80 dark:hover:bg-gray-800/50 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900"}`;
    const t10 = `h-10 w-10 rounded-xl flex items-center justify-center text-xs font-bold transition-colors ${isSelected ? "bg-teal-600 text-white shadow-xs" : "bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300 border border-teal-100 dark:border-teal-900/40"}`;
    let t11;
    if ($[20] !== avatarLetter || $[21] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t10,
            children: avatarLetter
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ChatContactItem.tsx",
            lineNumber: 144,
            columnNumber: 11
        }, this);
        $[20] = avatarLetter;
        $[21] = t10;
        $[22] = t11;
    } else {
        t11 = $[22];
    }
    let t12;
    if ($[23] !== unreadCount) {
        t12 = unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "absolute -top-1 -end-1 h-4 min-w-4 px-1 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white dark:ring-gray-900 shadow-xs animate-in zoom-in-50",
            children: unreadCount
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ChatContactItem.tsx",
            lineNumber: 153,
            columnNumber: 30
        }, this);
        $[23] = unreadCount;
        $[24] = t12;
    } else {
        t12 = $[24];
    }
    let t13;
    if ($[25] !== t11 || $[26] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex-shrink-0",
            children: [
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/chat/components/ChatContactItem.tsx",
            lineNumber: 161,
            columnNumber: 11
        }, this);
        $[25] = t11;
        $[26] = t12;
        $[27] = t13;
    } else {
        t13 = $[27];
    }
    const t14 = `text-sm truncate ${isSelected ? "font-bold text-gray-900 dark:text-white" : "font-semibold text-gray-800 dark:text-gray-200"}`;
    let t15;
    if ($[28] !== t14 || $[29] !== title) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: t14,
            children: title
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ChatContactItem.tsx",
            lineNumber: 171,
            columnNumber: 11
        }, this);
        $[28] = t14;
        $[29] = title;
        $[30] = t15;
    } else {
        t15 = $[30];
    }
    let t16;
    if ($[31] !== timeStr) {
        t16 = timeStr && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[11px] text-gray-400 dark:text-gray-500 flex-shrink-0 font-normal",
            children: timeStr
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ChatContactItem.tsx",
            lineNumber: 180,
            columnNumber: 22
        }, this);
        $[31] = timeStr;
        $[32] = t16;
    } else {
        t16 = $[32];
    }
    let t17;
    if ($[33] !== t15 || $[34] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between gap-1 mb-1",
            children: [
                t15,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/chat/components/ChatContactItem.tsx",
            lineNumber: 188,
            columnNumber: 11
        }, this);
        $[33] = t15;
        $[34] = t16;
        $[35] = t17;
    } else {
        t17 = $[35];
    }
    let t18;
    if ($[36] !== conversation.last_message) {
        t18 = typeof conversation.last_message === "object" && (conversation.last_message?.attachment || conversation.last_message?.attachment_url) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__["Paperclip"], {
            className: "h-3 w-3 flex-shrink-0 text-teal-600 dark:text-teal-400"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ChatContactItem.tsx",
            lineNumber: 197,
            columnNumber: 148
        }, this);
        $[36] = conversation.last_message;
        $[37] = t18;
    } else {
        t18 = $[37];
    }
    let t19;
    if ($[38] !== lastMsg) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "truncate",
            children: lastMsg
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ChatContactItem.tsx",
            lineNumber: 205,
            columnNumber: 11
        }, this);
        $[38] = lastMsg;
        $[39] = t19;
    } else {
        t19 = $[39];
    }
    let t20;
    if ($[40] !== t18 || $[41] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-500 dark:text-gray-400 truncate flex-1 flex items-center gap-1",
            children: [
                t18,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/chat/components/ChatContactItem.tsx",
            lineNumber: 213,
            columnNumber: 11
        }, this);
        $[40] = t18;
        $[41] = t19;
        $[42] = t20;
    } else {
        t20 = $[42];
    }
    let t21;
    if ($[43] !== conversation.status || $[44] !== getStatusBadge) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-shrink-0",
            children: getStatusBadge(conversation.status)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ChatContactItem.tsx",
            lineNumber: 222,
            columnNumber: 11
        }, this);
        $[43] = conversation.status;
        $[44] = getStatusBadge;
        $[45] = t21;
    } else {
        t21 = $[45];
    }
    let t22;
    if ($[46] !== t20 || $[47] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between gap-2",
            children: [
                t20,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/chat/components/ChatContactItem.tsx",
            lineNumber: 231,
            columnNumber: 11
        }, this);
        $[46] = t20;
        $[47] = t21;
        $[48] = t22;
    } else {
        t22 = $[48];
    }
    let t23;
    if ($[49] !== t17 || $[50] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 min-w-0",
            children: [
                t17,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/chat/components/ChatContactItem.tsx",
            lineNumber: 240,
            columnNumber: 11
        }, this);
        $[49] = t17;
        $[50] = t22;
        $[51] = t23;
    } else {
        t23 = $[51];
    }
    let t24;
    if ($[52] !== t13 || $[53] !== t23 || $[54] !== t8 || $[55] !== t9) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t8,
            className: t9,
            children: [
                t13,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/chat/components/ChatContactItem.tsx",
            lineNumber: 249,
            columnNumber: 11
        }, this);
        $[52] = t13;
        $[53] = t23;
        $[54] = t8;
        $[55] = t9;
        $[56] = t24;
    } else {
        t24 = $[56];
    }
    return t24;
}, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
})), "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c1 = ChatContactItem;
var _c, _c1;
__turbopack_context__.k.register(_c, "ChatContactItem$memo");
__turbopack_context__.k.register(_c1, "ChatContactItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/chat/components/ChatSkeletons.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatContactListSkeleton",
    ()=>ChatContactListSkeleton,
    "ChatMessageListSkeleton",
    ()=>ChatMessageListSkeleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
"use client";
;
;
function ChatContactListSkeleton() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "93c0356a6cb52c2354979d120ac4639f902d0b88b5f7f1aaf8371332d9cb3d5e") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "93c0356a6cb52c2354979d120ac4639f902d0b88b5f7f1aaf8371332d9cb3d5e";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "divide-y divide-gray-100 dark:divide-gray-800/70 animate-pulse",
            children: [
                1,
                2,
                3,
                4,
                5,
                6
            ].map(_ChatContactListSkeletonAnonymous)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
            lineNumber: 14,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c = ChatContactListSkeleton;
function _ChatContactListSkeletonAnonymous(i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-3.5 flex items-start gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-10 w-10 rounded-xl bg-gray-200 dark:bg-gray-800 flex-shrink-0"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
                lineNumber: 22,
                columnNumber: 64
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-w-0 space-y-2 py-0.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-3.5 bg-gray-200 dark:bg-gray-800 rounded w-24"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
                                lineNumber: 22,
                                columnNumber: 253
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-3 bg-gray-200 dark:bg-gray-800 rounded w-10"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
                                lineNumber: 22,
                                columnNumber: 320
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
                        lineNumber: 22,
                        columnNumber: 196
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-3 bg-gray-200 dark:bg-gray-800 rounded w-36"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
                                lineNumber: 22,
                                columnNumber: 448
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-4 bg-gray-200 dark:bg-gray-800 rounded-full w-12"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
                                lineNumber: 22,
                                columnNumber: 513
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
                        lineNumber: 22,
                        columnNumber: 391
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
                lineNumber: 22,
                columnNumber: 147
            }, this)
        ]
    }, i, true, {
        fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
        lineNumber: 22,
        columnNumber: 10
    }, this);
}
function ChatMessageListSkeleton() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "93c0356a6cb52c2354979d120ac4639f902d0b88b5f7f1aaf8371332d9cb3d5e") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "93c0356a6cb52c2354979d120ac4639f902d0b88b5f7f1aaf8371332d9cb3d5e";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-5 bg-gray-200 dark:bg-gray-800 rounded-full w-20"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
                lineNumber: 34,
                columnNumber: 47
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
            lineNumber: 34,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-start",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1.5 max-w-[75%] sm:max-w-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-3 bg-gray-200 dark:bg-gray-800 rounded w-16 px-1"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
                        lineNumber: 41,
                        columnNumber: 99
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-14 bg-gray-200 dark:bg-gray-800 rounded-2xl rounded-es-xs w-48 sm:w-64"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
                        lineNumber: 41,
                        columnNumber: 169
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
                lineNumber: 41,
                columnNumber: 46
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
            lineNumber: 41,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-end",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1.5 max-w-[75%] sm:max-w-md flex flex-col items-end",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-16 bg-teal-200/50 dark:bg-teal-950/50 rounded-2xl rounded-ee-xs w-56 sm:w-72"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
                        lineNumber: 48,
                        columnNumber: 121
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-2.5 bg-gray-200 dark:bg-gray-800 rounded w-12"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
                        lineNumber: 48,
                        columnNumber: 219
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
                lineNumber: 48,
                columnNumber: 44
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
            lineNumber: 48,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-start",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1.5 max-w-[75%] sm:max-w-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-3 bg-gray-200 dark:bg-gray-800 rounded w-20 px-1"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
                        lineNumber: 55,
                        columnNumber: 99
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-10 bg-gray-200 dark:bg-gray-800 rounded-2xl rounded-es-xs w-36 sm:w-52"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
                        lineNumber: 55,
                        columnNumber: 169
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
                lineNumber: 55,
                columnNumber: 46
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
            lineNumber: 55,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 p-4 sm:p-6 space-y-6 animate-pulse overflow-hidden bg-gray-50/50 dark:bg-gray-950/60",
            children: [
                t0,
                t1,
                t2,
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1.5 max-w-[75%] sm:max-w-md flex flex-col items-end",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-32 bg-teal-200/50 dark:bg-teal-950/50 rounded-2xl rounded-ee-xs w-60 sm:w-80"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
                                lineNumber: 62,
                                columnNumber: 246
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-2.5 bg-gray-200 dark:bg-gray-800 rounded w-14"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
                                lineNumber: 62,
                                columnNumber: 344
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
                        lineNumber: 62,
                        columnNumber: 169
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
                    lineNumber: 62,
                    columnNumber: 135
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/chat/components/ChatSkeletons.tsx",
            lineNumber: 62,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    return t4;
}
_c1 = ChatMessageListSkeleton;
var _c, _c1;
__turbopack_context__.k.register(_c, "ChatContactListSkeleton");
__turbopack_context__.k.register(_c1, "ChatMessageListSkeleton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/chat/components/ChatContactList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatContactList",
    ()=>ChatContactList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$components$2f$ChatContactItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/chat/components/ChatContactItem.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$components$2f$ChatSkeletons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/chat/components/ChatSkeletons.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function ChatContactList(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(44);
    if ($[0] !== "2c1dbf1a7457052842e578e738a38b0b30449fd040fff7cba11e807860cab2b9") {
        for(let $i = 0; $i < 44; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2c1dbf1a7457052842e578e738a38b0b30449fd040fff7cba11e807860cab2b9";
    }
    const { searchQuery, setSearchQuery, isLoading, conversations, selectedConversationId, onConversationSelect, formatTime, onCreateConversation, isCreatingConversation, fetchNextPage, hasNextPage, isFetchingNextPage, className: t1 } = t0;
    const className = t1 === undefined ? "" : t1;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const t2 = `w-full md:w-80 lg:w-96 border-e border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex flex-col h-full flex-shrink-0 ${className}`;
    let t3;
    if ($[1] !== isCreatingConversation || $[2] !== onCreateConversation || $[3] !== t) {
        t3 = onCreateConversation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            onClick: onCreateConversation,
            disabled: isCreatingConversation,
            className: "w-full bg-teal-600 hover:bg-teal-700 text-white gap-2 h-9 text-xs font-semibold shadow-xs cursor-pointer",
            children: [
                isCreatingConversation ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "h-3.5 w-3.5 animate-spin"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/chat/components/ChatContactList.tsx",
                    lineNumber: 56,
                    columnNumber: 250
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                    className: "h-3.5 w-3.5"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/chat/components/ChatContactList.tsx",
                    lineNumber: 56,
                    columnNumber: 301
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: isCreatingConversation ? t("chat.creatingConversation") : t("chat.newConversation")
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/chat/components/ChatContactList.tsx",
                    lineNumber: 56,
                    columnNumber: 334
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/chat/components/ChatContactList.tsx",
            lineNumber: 56,
            columnNumber: 34
        }, this);
        $[1] = isCreatingConversation;
        $[2] = onCreateConversation;
        $[3] = t;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
            className: "absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ChatContactList.tsx",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== t) {
        t5 = t("chat.searchChats");
        $[6] = t;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== setSearchQuery) {
        t6 = ({
            "ChatContactList[<Input>.onChange]": (e)=>setSearchQuery(e.target.value)
        })["ChatContactList[<Input>.onChange]"];
        $[8] = setSearchQuery;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== searchQuery || $[11] !== t5 || $[12] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            placeholder: t5,
            value: searchQuery,
            onChange: t6,
            className: "ps-9 pe-8 bg-gray-50/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 text-xs sm:text-sm h-9 focus-visible:ring-teal-500 transition-colors"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ChatContactList.tsx",
            lineNumber: 91,
            columnNumber: 10
        }, this);
        $[10] = searchQuery;
        $[11] = t5;
        $[12] = t6;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] !== searchQuery || $[15] !== setSearchQuery) {
        t8 = searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: {
                "ChatContactList[<button>.onClick]": ()=>setSearchQuery("")
            }["ChatContactList[<button>.onClick]"],
            className: "absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                className: "h-3.5 w-3.5"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/chat/components/ChatContactList.tsx",
                lineNumber: 103,
                columnNumber: 158
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ChatContactList.tsx",
            lineNumber: 101,
            columnNumber: 25
        }, this);
        $[14] = searchQuery;
        $[15] = setSearchQuery;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    let t9;
    if ($[17] !== t7 || $[18] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t4,
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/chat/components/ChatContactList.tsx",
            lineNumber: 112,
            columnNumber: 10
        }, this);
        $[17] = t7;
        $[18] = t8;
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    let t10;
    if ($[20] !== t3 || $[21] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-3 border-b border-gray-200 dark:border-gray-800 space-y-2.5",
            children: [
                t3,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/chat/components/ChatContactList.tsx",
            lineNumber: 121,
            columnNumber: 11
        }, this);
        $[20] = t3;
        $[21] = t9;
        $[22] = t10;
    } else {
        t10 = $[22];
    }
    let t11;
    if ($[23] !== conversations || $[24] !== formatTime || $[25] !== isCreatingConversation || $[26] !== isLoading || $[27] !== onConversationSelect || $[28] !== onCreateConversation || $[29] !== selectedConversationId || $[30] !== t) {
        t11 = isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$components$2f$ChatSkeletons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatContactListSkeleton"], {}, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ChatContactList.tsx",
            lineNumber: 130,
            columnNumber: 23
        }, this) : conversations.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-8 text-center text-gray-400 dark:text-gray-500 flex flex-col items-center justify-center gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-10 w-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400 dark:text-gray-500",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                        className: "h-5 w-5"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/chat/components/ChatContactList.tsx",
                        lineNumber: 130,
                        columnNumber: 329
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/chat/components/ChatContactList.tsx",
                    lineNumber: 130,
                    columnNumber: 196
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400",
                    children: t("chat.noContactsFound")
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/chat/components/ChatContactList.tsx",
                    lineNumber: 130,
                    columnNumber: 372
                }, this),
                onCreateConversation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "outline",
                    size: "sm",
                    onClick: onCreateConversation,
                    disabled: isCreatingConversation,
                    className: "text-xs gap-1.5 border-teal-600 text-teal-700 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/40",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                            className: "h-3.5 w-3.5"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/chat/components/ChatContactList.tsx",
                            lineNumber: 130,
                            columnNumber: 728
                        }, this),
                        t("chat.newConversation")
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/chat/components/ChatContactList.tsx",
                    lineNumber: 130,
                    columnNumber: 507
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/chat/components/ChatContactList.tsx",
            lineNumber: 130,
            columnNumber: 82
        }, this) : conversations.map({
            "ChatContactList[conversations.map()]": (conv)=>{
                const convId = conv.id ?? conv.conversation_id;
                const isSelected = String(selectedConversationId) === String(convId);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$components$2f$ChatContactItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatContactItem"], {
                    conversation: conv,
                    isSelected: isSelected,
                    onSelect: onConversationSelect,
                    formatTime: formatTime
                }, String(convId), false, {
                    fileName: "[project]/src/app/admin/chat/components/ChatContactList.tsx",
                    lineNumber: 134,
                    columnNumber: 16
                }, this);
            }
        }["ChatContactList[conversations.map()]"]);
        $[23] = conversations;
        $[24] = formatTime;
        $[25] = isCreatingConversation;
        $[26] = isLoading;
        $[27] = onConversationSelect;
        $[28] = onCreateConversation;
        $[29] = selectedConversationId;
        $[30] = t;
        $[31] = t11;
    } else {
        t11 = $[31];
    }
    let t12;
    if ($[32] !== fetchNextPage || $[33] !== hasNextPage || $[34] !== isFetchingNextPage || $[35] !== t) {
        t12 = hasNextPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-3 pb-6 flex justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "outline",
                size: "sm",
                onClick: {
                    "ChatContactList[<Button>.onClick]": ()=>fetchNextPage && fetchNextPage()
                }["ChatContactList[<Button>.onClick]"],
                disabled: isFetchingNextPage,
                className: "text-xs bg-white dark:bg-gray-800 text-teal-600 dark:text-teal-400 border-teal-200 dark:border-teal-800 hover:bg-teal-50 dark:hover:bg-teal-900/50",
                children: isFetchingNextPage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                            className: "h-3.5 w-3.5 animate-spin me-2"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/chat/components/ChatContactList.tsx",
                            lineNumber: 153,
                            columnNumber: 260
                        }, this),
                        t("chat.loading")
                    ]
                }, void 0, true) : t("chat.loadMore")
            }, void 0, false, {
                fileName: "[project]/src/app/admin/chat/components/ChatContactList.tsx",
                lineNumber: 151,
                columnNumber: 72
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ChatContactList.tsx",
            lineNumber: 151,
            columnNumber: 26
        }, this);
        $[32] = fetchNextPage;
        $[33] = hasNextPage;
        $[34] = isFetchingNextPage;
        $[35] = t;
        $[36] = t12;
    } else {
        t12 = $[36];
    }
    let t13;
    if ($[37] !== t11 || $[38] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 overflow-y-auto divide-y divide-gray-100 dark:divide-gray-800/70",
            children: [
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/chat/components/ChatContactList.tsx",
            lineNumber: 164,
            columnNumber: 11
        }, this);
        $[37] = t11;
        $[38] = t12;
        $[39] = t13;
    } else {
        t13 = $[39];
    }
    let t14;
    if ($[40] !== t10 || $[41] !== t13 || $[42] !== t2) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: [
                t10,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/chat/components/ChatContactList.tsx",
            lineNumber: 173,
            columnNumber: 11
        }, this);
        $[40] = t10;
        $[41] = t13;
        $[42] = t2;
        $[43] = t14;
    } else {
        t14 = $[43];
    }
    return t14;
}
_s(ChatContactList, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = ChatContactList;
var _c;
__turbopack_context__.k.register(_c, "ChatContactList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/chat/components/ChatHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatHeader",
    ()=>ChatHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-cw.js [app-client] (ecmascript) <export default as RotateCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Headphones$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/headphones.js [app-client] (ecmascript) <export default as Headphones>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check-check.js [app-client] (ecmascript) <export default as CheckCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-alert.js [app-client] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$hooks$2f$useConversationsList$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/chat/hooks/useConversationsList.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function ChatHeader(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(62);
    if ($[0] !== "f0b9b74b5cd9bca53a029d005ab5fc4a0a5cd82cf8907c9dab17ec9f7cdb99d5") {
        for(let $i = 0; $i < 62; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f0b9b74b5cd9bca53a029d005ab5fc4a0a5cd82cf8907c9dab17ec9f7cdb99d5";
    }
    const { conversation, onRefresh, isRefreshing, onMarkAsRead, isMarkingAsRead, onRelease, isReleasing, onBack } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const convId = conversation.id ?? conversation.conversation_id;
    let t1;
    if ($[1] !== conversation.status) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$hooks$2f$useConversationsList$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeConversationStatus"])(conversation.status);
        $[1] = conversation.status;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const status = t1;
    let t2;
    if ($[3] !== status || $[4] !== t) {
        t2 = ({
            "ChatHeader[getStatusBadge]": ()=>{
                if (status === "open") {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
                                lineNumber: 55,
                                columnNumber: 249
                            }, this),
                            t("chat.open")
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
                        lineNumber: 55,
                        columnNumber: 18
                    }, this);
                }
                if (status === "pending") {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                className: "h-3 w-3"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
                                lineNumber: 58,
                                columnNumber: 237
                            }, this),
                            t("chat.pending")
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
                        lineNumber: 58,
                        columnNumber: 18
                    }, this);
                }
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                            className: "h-3 w-3"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
                            lineNumber: 60,
                            columnNumber: 224
                        }, this),
                        t("chat.closed")
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
                    lineNumber: 60,
                    columnNumber: 16
                }, this);
            }
        })["ChatHeader[getStatusBadge]"];
        $[3] = status;
        $[4] = t;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const getStatusBadge = t2;
    let t3;
    if ($[6] !== conversation.user) {
        t3 = conversation.user?.name || (conversation.user?.first_name ? `${conversation.user.first_name} ${conversation.user.last_name || ""}`.trim() : null);
        $[6] = conversation.user;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    const userName = t3;
    const userEmail = conversation.user?.email;
    let t4;
    if ($[8] !== convId || $[9] !== conversation.subject || $[10] !== conversation.title || $[11] !== t || $[12] !== userName) {
        t4 = userName || conversation.subject || conversation.title || `${t("chat.conversation")} #${convId}`;
        $[8] = convId;
        $[9] = conversation.subject;
        $[10] = conversation.title;
        $[11] = t;
        $[12] = userName;
        $[13] = t4;
    } else {
        t4 = $[13];
    }
    const title = t4;
    let t5;
    if ($[14] !== userEmail || $[15] !== userName) {
        t5 = (userName || userEmail || "")[0]?.toUpperCase();
        $[14] = userEmail;
        $[15] = userName;
        $[16] = t5;
    } else {
        t5 = $[16];
    }
    const avatarLetter = t5;
    let t6;
    if ($[17] !== onBack || $[18] !== t) {
        t6 = onBack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onBack,
            className: "md:hidden p-1.5 -ms-1 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
            title: t("chat.back"),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                className: "h-5 w-5 rtl:rotate-180"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
                lineNumber: 105,
                columnNumber: 247
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
            lineNumber: 105,
            columnNumber: 20
        }, this);
        $[17] = onBack;
        $[18] = t;
        $[19] = t6;
    } else {
        t6 = $[19];
    }
    let t7;
    if ($[20] !== avatarLetter) {
        t7 = avatarLetter ? avatarLetter : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Headphones$3e$__["Headphones"], {
            className: "h-5 w-5"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
            lineNumber: 114,
            columnNumber: 40
        }, this);
        $[20] = avatarLetter;
        $[21] = t7;
    } else {
        t7 = $[21];
    }
    let t8;
    if ($[22] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-9 w-9 sm:h-10 sm:w-10 rounded-xl bg-teal-600 text-white flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0 shadow-xs",
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
            lineNumber: 122,
            columnNumber: 10
        }, this);
        $[22] = t7;
        $[23] = t8;
    } else {
        t8 = $[23];
    }
    let t9;
    if ($[24] !== title) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "font-bold text-gray-900 dark:text-white text-xs sm:text-sm truncate max-w-[130px] sm:max-w-xs md:max-w-md",
            children: title
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
            lineNumber: 130,
            columnNumber: 10
        }, this);
        $[24] = title;
        $[25] = t9;
    } else {
        t9 = $[25];
    }
    let t10;
    if ($[26] !== getStatusBadge) {
        t10 = getStatusBadge();
        $[26] = getStatusBadge;
        $[27] = t10;
    } else {
        t10 = $[27];
    }
    let t11;
    if ($[28] !== t10 || $[29] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
            lineNumber: 146,
            columnNumber: 11
        }, this);
        $[28] = t10;
        $[29] = t9;
        $[30] = t11;
    } else {
        t11 = $[30];
    }
    let t12;
    if ($[31] !== convId || $[32] !== title || $[33] !== userEmail || $[34] !== userName) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[11px] text-gray-500 dark:text-gray-400 truncate",
            children: userName && title !== userName ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    userName,
                    " • #",
                    convId,
                    " ",
                    userEmail ? `• ${userEmail}` : ""
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
                lineNumber: 155,
                columnNumber: 114
            }, this) : userEmail ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    "#",
                    convId,
                    " • ",
                    userEmail
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
                lineNumber: 155,
                columnNumber: 200
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    "#",
                    convId
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
                lineNumber: 155,
                columnNumber: 239
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
            lineNumber: 155,
            columnNumber: 11
        }, this);
        $[31] = convId;
        $[32] = title;
        $[33] = userEmail;
        $[34] = userName;
        $[35] = t12;
    } else {
        t12 = $[35];
    }
    let t13;
    if ($[36] !== t11 || $[37] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-w-0",
            children: [
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
            lineNumber: 166,
            columnNumber: 11
        }, this);
        $[36] = t11;
        $[37] = t12;
        $[38] = t13;
    } else {
        t13 = $[38];
    }
    let t14;
    if ($[39] !== t13 || $[40] !== t6 || $[41] !== t8) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2.5 sm:gap-3 min-w-0",
            children: [
                t6,
                t8,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
            lineNumber: 175,
            columnNumber: 11
        }, this);
        $[39] = t13;
        $[40] = t6;
        $[41] = t8;
        $[42] = t14;
    } else {
        t14 = $[42];
    }
    let t15;
    if ($[43] !== isReleasing || $[44] !== onRelease || $[45] !== t) {
        t15 = onRelease && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            size: "sm",
            onClick: onRelease,
            disabled: isReleasing,
            className: "h-8 px-2 sm:px-3 gap-1.5 text-xs text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800/80 bg-amber-50/60 dark:bg-amber-950/40 hover:bg-amber-100 dark:hover:bg-amber-950/80 cursor-pointer shadow-2xs",
            title: t("chat.release"),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                    className: "h-3.5 w-3.5"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
                    lineNumber: 185,
                    columnNumber: 359
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "hidden sm:inline",
                    children: isReleasing ? t("chat.releasing") : t("chat.release")
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
                    lineNumber: 185,
                    columnNumber: 398
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
            lineNumber: 185,
            columnNumber: 24
        }, this);
        $[43] = isReleasing;
        $[44] = onRelease;
        $[45] = t;
        $[46] = t15;
    } else {
        t15 = $[46];
    }
    let t16;
    if ($[47] !== isMarkingAsRead || $[48] !== onMarkAsRead || $[49] !== t) {
        t16 = onMarkAsRead && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            size: "sm",
            onClick: onMarkAsRead,
            disabled: isMarkingAsRead,
            className: "h-8 px-2 sm:px-3 gap-1.5 text-xs text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800/80 bg-teal-50/60 dark:bg-teal-950/40 hover:bg-teal-100 dark:hover:bg-teal-950/80 cursor-pointer shadow-2xs",
            title: t("chat.markAsRead"),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCheck$3e$__["CheckCheck"], {
                    className: `h-3.5 w-3.5 ${isMarkingAsRead ? "animate-spin" : "text-teal-600 dark:text-teal-400"}`
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
                    lineNumber: 195,
                    columnNumber: 364
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "hidden sm:inline",
                    children: t("chat.markAsRead")
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
                    lineNumber: 195,
                    columnNumber: 477
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
            lineNumber: 195,
            columnNumber: 27
        }, this);
        $[47] = isMarkingAsRead;
        $[48] = onMarkAsRead;
        $[49] = t;
        $[50] = t16;
    } else {
        t16 = $[50];
    }
    let t17;
    if ($[51] !== isRefreshing || $[52] !== onRefresh || $[53] !== t) {
        t17 = onRefresh && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            size: "sm",
            onClick: onRefresh,
            disabled: isRefreshing,
            className: "h-8 px-2 sm:px-3 gap-1 text-xs text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer shadow-2xs",
            title: t("chat.refresh"),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCw$3e$__["RotateCw"], {
                    className: `h-3.5 w-3.5 ${isRefreshing ? "animate-spin text-teal-600" : ""}`
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
                    lineNumber: 205,
                    columnNumber: 335
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "hidden sm:inline",
                    children: t("chat.refresh")
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
                    lineNumber: 205,
                    columnNumber: 425
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
            lineNumber: 205,
            columnNumber: 24
        }, this);
        $[51] = isRefreshing;
        $[52] = onRefresh;
        $[53] = t;
        $[54] = t17;
    } else {
        t17 = $[54];
    }
    let t18;
    if ($[55] !== t15 || $[56] !== t16 || $[57] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1.5 sm:gap-2 flex-shrink-0",
            children: [
                t15,
                t16,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
            lineNumber: 215,
            columnNumber: 11
        }, this);
        $[55] = t15;
        $[56] = t16;
        $[57] = t17;
        $[58] = t18;
    } else {
        t18 = $[58];
    }
    let t19;
    if ($[59] !== t14 || $[60] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-3 sm:px-5 flex items-center justify-between flex-shrink-0",
            children: [
                t14,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/chat/components/ChatHeader.tsx",
            lineNumber: 225,
            columnNumber: 11
        }, this);
        $[59] = t14;
        $[60] = t18;
        $[61] = t19;
    } else {
        t19 = $[61];
    }
    return t19;
}
_s(ChatHeader, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = ChatHeader;
var _c;
__turbopack_context__.k.register(_c, "ChatHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/chat/components/ChatMessageItem.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatMessageItem",
    ()=>ChatMessageItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check-check.js [app-client] (ecmascript) <export default as CheckCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zoom-in.js [app-client] (ecmascript) <export default as ZoomIn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$localAttachmentCache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/chat/utils/localAttachmentCache.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$chatReadPersistence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/chat/utils/chatReadPersistence.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/config.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const ChatMessageItem = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = _s(function ChatMessageItem({ message, isOwn, formatTime, onPreviewImage }) {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
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
        const cachedByMsgId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$localAttachmentCache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocalBlobUrl"])(msgId);
        if (cachedByMsgId) return cachedByMsgId;
        let url_0 = null;
        if (typeof message.attachment === "string") {
            url_0 = message.attachment;
        } else if (typeof message.attachment === "object" && message.attachment) {
            url_0 = message.attachment.url || message.attachment.file_url || message.attachment.original_url || message.attachment.path || message.attachment.file_path || null;
        }
        if (!url_0 && message.attachment_url) url_0 = message.attachment_url;
        if (!url_0 && message.file_url) url_0 = message.file_url;
        if (!url_0 && message.url) url_0 = message.url;
        if (!url_0 && message.photo_url) url_0 = message.photo_url;
        if (!url_0 && message.image_url) url_0 = message.image_url;
        if (!url_0 && message.media_url) url_0 = message.media_url;
        if (!url_0 && typeof message.file === "string") {
            url_0 = message.file;
        } else if (!url_0 && typeof message.file === "object" && message.file) {
            const f = message.file;
            url_0 = f.url || f.file_url || f.path || f.original_url;
        }
        if (!url_0 && typeof message.photo === "string") url_0 = message.photo;
        if (!url_0 && Array.isArray(message.attachments) && message.attachments.length > 0) {
            const first = message.attachments[0];
            url_0 = typeof first === "string" ? first : first?.url || first?.file_url || first?.path || first?.original_url;
        }
        if (!url_0 && Array.isArray(message.media) && message.media.length > 0) {
            const first_0 = message.media[0];
            url_0 = typeof first_0 === "string" ? first_0 : first_0?.url || first_0?.original_url || first_0?.file_url || first_0?.path;
        }
        const cachedByUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$localAttachmentCache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocalBlobUrl"])(url_0);
        if (cachedByUrl) return cachedByUrl;
        const cachedByName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$localAttachmentCache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocalBlobUrl"])(message.file_name || (typeof message.attachment === "object" ? message.attachment?.file_name : null));
        if (cachedByName) return cachedByName;
        if (url_0 && typeof url_0 === "string") {
            if (url_0.startsWith("http://") || url_0.startsWith("https://") || url_0.startsWith("blob:") || url_0.startsWith("data:")) {
                return url_0;
            }
            const cleanPath = url_0.startsWith("/") ? url_0 : `/${url_0}`;
            return `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_URL"]}${cleanPath}`;
        }
        return null;
    };
    const getAttachmentName = (url_1)=>{
        if (typeof message.attachment === "object" && message.attachment?.file_name) {
            return message.attachment.file_name;
        }
        if (message.file_name) return message.file_name;
        if (message.name) return message.name;
        if (url_1) {
            if (url_1.startsWith("blob:")) return t("chat.image");
            const cleanUrl = url_1.split("?")[0];
            const parts = cleanUrl.split("/");
            return parts[parts.length - 1] || "attachment";
        }
        return "attachment";
    };
    const attachmentUrl = getAttachmentUrl();
    const attachmentName = getAttachmentName(attachmentUrl);
    const isImage = attachmentUrl ? isImageFile(attachmentUrl, attachmentName) : false;
    const [hasImageError, setHasImageError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDownloading, setIsDownloading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
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
                const link_0 = document.createElement("a");
                link_0.href = blobUrl;
                link_0.download = attachmentName || "download";
                document.body.appendChild(link_0);
                link_0.click();
                document.body.removeChild(link_0);
                window.URL.revokeObjectURL(blobUrl);
                return;
            }
        } catch  {} finally{
            setIsDownloading(false);
        }
        window.open(attachmentUrl, "_blank", "noopener,noreferrer");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex ${isOwn ? "justify-end" : "justify-start"} group`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[85%] sm:max-w-md md:max-w-lg transition-all",
            children: [
                !isOwn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-1.5 mb-0.5 px-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[11px] font-semibold text-teal-700 dark:text-teal-400",
                            children: message.sender?.name || (message.sender?.first_name ? `${message.sender.first_name} ${message.sender.last_name || ""}`.trim() : null) || t("chat.supportAgent")
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/chat/components/ChatMessageItem.tsx",
                            lineNumber: 141,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[10px] text-gray-400 dark:text-gray-500 font-normal",
                            children: formatTime(message.created_at)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/chat/components/ChatMessageItem.tsx",
                            lineNumber: 144,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/chat/components/ChatMessageItem.tsx",
                    lineNumber: 140,
                    columnNumber: 20
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `rounded-xl px-3 py-2 sm:px-3.5 sm:py-2 shadow-2xs transition-all ${isOwn ? "bg-gradient-to-tr from-teal-600 to-teal-500 text-white rounded-ee-xs" : "bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-200/60 dark:border-gray-800/60 rounded-es-xs"}`,
                    children: [
                        text && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[13px] sm:text-[13.5px] whitespace-pre-wrap break-words leading-relaxed selection:bg-teal-200 dark:selection:bg-teal-800 selection:text-teal-900 dark:selection:text-teal-100",
                            children: text
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/chat/components/ChatMessageItem.tsx",
                            lineNumber: 150,
                            columnNumber: 20
                        }, this),
                        attachmentUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${text ? "mt-2 pt-1.5 border-t" : ""} ${isOwn ? "border-teal-500/50" : "border-gray-100 dark:border-gray-800/50"}`,
                            children: isImage && !hasImageError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>onPreviewImage(attachmentUrl, attachmentName),
                                className: "relative group/img overflow-hidden rounded-lg cursor-pointer border border-black/5 dark:border-white/5 bg-black/5 dark:bg-black/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: attachmentUrl,
                                        alt: attachmentName,
                                        loading: "lazy",
                                        onError: ()=>setHasImageError(true),
                                        className: "max-h-56 sm:max-h-64 w-full object-cover rounded-lg group-hover/img:scale-102 transition-transform duration-300"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/chat/components/ChatMessageItem.tsx",
                                        lineNumber: 156,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-black/30 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "p-1.5 rounded-full bg-black/60 backdrop-blur-xs",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__["ZoomIn"], {
                                                className: "h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/chat/components/ChatMessageItem.tsx",
                                                lineNumber: 159,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/chat/components/ChatMessageItem.tsx",
                                            lineNumber: 158,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/chat/components/ChatMessageItem.tsx",
                                        lineNumber: 157,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/chat/components/ChatMessageItem.tsx",
                                lineNumber: 155,
                                columnNumber: 44
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: handleDownload,
                                className: `flex items-center gap-2.5 p-2 rounded-lg border transition-all cursor-pointer ${isOwn ? "bg-teal-700/40 border-teal-400/30 text-white hover:bg-teal-700/60" : "bg-gray-50 dark:bg-gray-800/60 border-gray-200/70 dark:border-gray-700/60 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `p-1.5 rounded-md ${isOwn ? "bg-teal-800 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"}`,
                                        children: isImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/chat/components/ChatMessageItem.tsx",
                                            lineNumber: 164,
                                            columnNumber: 32
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/chat/components/ChatMessageItem.tsx",
                                            lineNumber: 164,
                                            columnNumber: 68
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/chat/components/ChatMessageItem.tsx",
                                        lineNumber: 163,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-semibold truncate",
                                                children: attachmentName
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/chat/components/ChatMessageItem.tsx",
                                                lineNumber: 167,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `text-[10px] ${isOwn ? "text-teal-200" : "text-gray-400 dark:text-gray-500"}`,
                                                children: isDownloading ? t("chat.downloading") : t("chat.downloadFile")
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/chat/components/ChatMessageItem.tsx",
                                                lineNumber: 168,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/chat/components/ChatMessageItem.tsx",
                                        lineNumber: 166,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                        className: "h-3.5 w-3.5 flex-shrink-0 opacity-80 group-hover:opacity-100"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/chat/components/ChatMessageItem.tsx",
                                        lineNumber: 172,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/chat/components/ChatMessageItem.tsx",
                                lineNumber: 162,
                                columnNumber: 26
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/chat/components/ChatMessageItem.tsx",
                            lineNumber: 154,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/chat/components/ChatMessageItem.tsx",
                    lineNumber: 149,
                    columnNumber: 9
                }, this),
                isOwn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-end gap-1 mt-0.5 px-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[10px] text-gray-400 dark:text-gray-500 font-medium",
                            children: formatTime(message.created_at)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/chat/components/ChatMessageItem.tsx",
                            lineNumber: 178,
                            columnNumber: 13
                        }, this),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$utils$2f$chatReadPersistence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMessageMarkedAsRead"])(message.conversation_id, message) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCheck$3e$__["CheckCheck"], {
                            className: "h-3.5 w-3.5 text-teal-600 dark:text-teal-400 transition-colors"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/chat/components/ChatMessageItem.tsx",
                            lineNumber: 181,
                            columnNumber: 72
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                            className: "h-3.5 w-3.5 text-gray-400 dark:text-gray-500 transition-colors"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/chat/components/ChatMessageItem.tsx",
                            lineNumber: 181,
                            columnNumber: 164
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/chat/components/ChatMessageItem.tsx",
                    lineNumber: 177,
                    columnNumber: 19
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/chat/components/ChatMessageItem.tsx",
            lineNumber: 139,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/admin/chat/components/ChatMessageItem.tsx",
        lineNumber: 138,
        columnNumber: 10
    }, this);
}, "uwkfAFSNQVTWfQZqZMlkdzo4/Uo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
})), "uwkfAFSNQVTWfQZqZMlkdzo4/Uo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c1 = ChatMessageItem;
var _c, _c1;
__turbopack_context__.k.register(_c, "ChatMessageItem$memo");
__turbopack_context__.k.register(_c1, "ChatMessageItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/chat/components/ImageLightboxModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ImageLightboxModal",
    ()=>ImageLightboxModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ImageLightboxModal(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(46);
    if ($[0] !== "04146cb2a15d137a73c66ca381efa79c064f522f0c8a5f6afa10945c11f01e93") {
        for(let $i = 0; $i < 46; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "04146cb2a15d137a73c66ca381efa79c064f522f0c8a5f6afa10945c11f01e93";
    }
    const { isOpen, onClose, imageUrl, imageName } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t1;
    if ($[1] !== imageName || $[2] !== t) {
        t1 = imageName || t("chat.image");
        $[1] = imageName;
        $[2] = t;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const displayName = t1;
    let t2;
    let t3;
    if ($[4] !== isOpen || $[5] !== onClose) {
        t2 = ({
            "ImageLightboxModal[useEffect()]": ()=>{
                const handleKeyDown = {
                    "ImageLightboxModal[useEffect() > handleKeyDown]": (e)=>{
                        if (e.key === "Escape") {
                            onClose();
                        }
                    }
                }["ImageLightboxModal[useEffect() > handleKeyDown]"];
                if (isOpen) {
                    window.addEventListener("keydown", handleKeyDown);
                }
                return ()=>window.removeEventListener("keydown", handleKeyDown);
            }
        })["ImageLightboxModal[useEffect()]"];
        t3 = [
            isOpen,
            onClose
        ];
        $[4] = isOpen;
        $[5] = onClose;
        $[6] = t2;
        $[7] = t3;
    } else {
        t2 = $[6];
        t3 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    if (!isOpen || !imageUrl) {
        return null;
    }
    let t4;
    if ($[8] !== displayName) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs font-medium truncate max-w-xs sm:max-w-md text-gray-300",
            children: displayName
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ImageLightboxModal.tsx",
            lineNumber: 73,
            columnNumber: 10
        }, this);
        $[8] = displayName;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
            className: "h-3.5 w-3.5"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ImageLightboxModal.tsx",
            lineNumber: 81,
            columnNumber: 10
        }, this);
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== t) {
        t6 = t("chat.download");
        $[11] = t;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: t6
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ImageLightboxModal.tsx",
            lineNumber: 96,
            columnNumber: 10
        }, this);
        $[13] = t6;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== displayName || $[16] !== imageUrl || $[17] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: imageUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            download: displayName,
            className: "h-8 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs flex items-center gap-1.5 transition-colors",
            children: [
                t5,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/chat/components/ImageLightboxModal.tsx",
            lineNumber: 104,
            columnNumber: 10
        }, this);
        $[15] = displayName;
        $[16] = imageUrl;
        $[17] = t7;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    let t9;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
            className: "h-3.5 w-3.5"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ImageLightboxModal.tsx",
            lineNumber: 114,
            columnNumber: 10
        }, this);
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    let t10;
    if ($[20] !== t) {
        t10 = t("chat.openFile");
        $[20] = t;
        $[21] = t10;
    } else {
        t10 = $[21];
    }
    let t11;
    if ($[22] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: t10
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ImageLightboxModal.tsx",
            lineNumber: 129,
            columnNumber: 11
        }, this);
        $[22] = t10;
        $[23] = t11;
    } else {
        t11 = $[23];
    }
    let t12;
    if ($[24] !== imageUrl || $[25] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: imageUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "h-8 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs flex items-center gap-1.5 transition-colors",
            children: [
                t9,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/chat/components/ImageLightboxModal.tsx",
            lineNumber: 137,
            columnNumber: 11
        }, this);
        $[24] = imageUrl;
        $[25] = t11;
        $[26] = t12;
    } else {
        t12 = $[26];
    }
    let t13;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ImageLightboxModal.tsx",
            lineNumber: 146,
            columnNumber: 11
        }, this);
        $[27] = t13;
    } else {
        t13 = $[27];
    }
    let t14;
    if ($[28] !== onClose) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClose,
            className: "h-8 w-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors ms-1",
            children: t13
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ImageLightboxModal.tsx",
            lineNumber: 153,
            columnNumber: 11
        }, this);
        $[28] = onClose;
        $[29] = t14;
    } else {
        t14 = $[29];
    }
    let t15;
    if ($[30] !== t12 || $[31] !== t14 || $[32] !== t8) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t8,
                t12,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/chat/components/ImageLightboxModal.tsx",
            lineNumber: 161,
            columnNumber: 11
        }, this);
        $[30] = t12;
        $[31] = t14;
        $[32] = t8;
        $[33] = t15;
    } else {
        t15 = $[33];
    }
    let t16;
    if ($[34] !== t15 || $[35] !== t4) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full flex items-center justify-between gap-4 mb-3 text-white",
            children: [
                t4,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/chat/components/ImageLightboxModal.tsx",
            lineNumber: 171,
            columnNumber: 11
        }, this);
        $[34] = t15;
        $[35] = t4;
        $[36] = t16;
    } else {
        t16 = $[36];
    }
    let t17;
    if ($[37] !== imageName || $[38] !== imageUrl) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-black/40 max-h-[80vh] flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: imageUrl,
                alt: imageName,
                className: "max-h-[80vh] max-w-full object-contain rounded-lg"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/chat/components/ImageLightboxModal.tsx",
                lineNumber: 180,
                columnNumber: 156
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ImageLightboxModal.tsx",
            lineNumber: 180,
            columnNumber: 11
        }, this);
        $[37] = imageName;
        $[38] = imageUrl;
        $[39] = t17;
    } else {
        t17 = $[39];
    }
    let t18;
    if ($[40] !== t16 || $[41] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative max-w-4xl max-h-[90vh] flex flex-col items-center justify-center",
            onClick: _ImageLightboxModalDivOnClick,
            children: [
                t16,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/chat/components/ImageLightboxModal.tsx",
            lineNumber: 189,
            columnNumber: 11
        }, this);
        $[40] = t16;
        $[41] = t17;
        $[42] = t18;
    } else {
        t18 = $[42];
    }
    let t19;
    if ($[43] !== onClose || $[44] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-xs p-4 transition-all duration-200 animate-in fade-in",
            onClick: onClose,
            children: t18
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ImageLightboxModal.tsx",
            lineNumber: 198,
            columnNumber: 11
        }, this);
        $[43] = onClose;
        $[44] = t18;
        $[45] = t19;
    } else {
        t19 = $[45];
    }
    return t19;
}
_s(ImageLightboxModal, "PCFpesqcodnZQkAaiH0fVd5oGyE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = ImageLightboxModal;
function _ImageLightboxModalDivOnClick(e_0) {
    return e_0.stopPropagation();
}
var _c;
__turbopack_context__.k.register(_c, "ImageLightboxModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/chat/components/ChatMessageList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatMessageList",
    ()=>ChatMessageList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2d$dashed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquareDashed$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square-dashed.js [app-client] (ecmascript) <export default as MessageSquareDashed>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$components$2f$ChatMessageItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/chat/components/ChatMessageItem.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$components$2f$ChatSkeletons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/chat/components/ChatSkeletons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$components$2f$ImageLightboxModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/chat/components/ImageLightboxModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
function ChatMessageList(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(41);
    if ($[0] !== "a56866fc8767253860f5d988a3f11ab39924bf4af96d452730e6a3f8f42410ba") {
        for(let $i = 0; $i < 41; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a56866fc8767253860f5d988a3f11ab39924bf4af96d452730e6a3f8f42410ba";
    }
    const { isLoadingMessages, messages, messageGroups, currentUserId, isAdmin, messagesEndRef, formatTime, fetchNextPage, hasNextPage, isFetchingNextPage } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            isOpen: false,
            url: null,
            name: ""
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [lightboxState, setLightboxState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "ChatMessageList[handlePreviewImage]": (url, name)=>{
                setLightboxState({
                    isOpen: true,
                    url,
                    name
                });
            }
        })["ChatMessageList[handlePreviewImage]"];
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const handlePreviewImage = t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "ChatMessageList[handleCloseLightbox]": ()=>{
                setLightboxState(_ChatMessageListHandleCloseLightboxSetLightboxState);
            }
        })["ChatMessageList[handleCloseLightbox]"];
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    const handleCloseLightbox = t3;
    if (isLoadingMessages) {
        let t4;
        if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$components$2f$ChatSkeletons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatMessageListSkeleton"], {}, void 0, false, {
                fileName: "[project]/src/app/admin/chat/components/ChatMessageList.tsx",
                lineNumber: 99,
                columnNumber: 12
            }, this);
            $[4] = t4;
        } else {
            t4 = $[4];
        }
        return t4;
    }
    if (messages.length === 0) {
        let t4;
        if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-12 w-12 rounded-2xl bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 border border-teal-100 dark:border-teal-900/40 flex items-center justify-center mb-3 shadow-2xs",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2d$dashed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquareDashed$3e$__["MessageSquareDashed"], {
                    className: "h-6 w-6"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/chat/components/ChatMessageList.tsx",
                    lineNumber: 109,
                    columnNumber: 211
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/chat/components/ChatMessageList.tsx",
                lineNumber: 109,
                columnNumber: 12
            }, this);
            $[5] = t4;
        } else {
            t4 = $[5];
        }
        let t5;
        if ($[6] !== t) {
            t5 = t("chat.noMessagesYet");
            $[6] = t;
            $[7] = t5;
        } else {
            t5 = $[7];
        }
        let t6;
        if ($[8] !== t5) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: "text-sm sm:text-base font-bold text-gray-900 dark:text-white mb-1",
                children: t5
            }, void 0, false, {
                fileName: "[project]/src/app/admin/chat/components/ChatMessageList.tsx",
                lineNumber: 124,
                columnNumber: 12
            }, this);
            $[8] = t5;
            $[9] = t6;
        } else {
            t6 = $[9];
        }
        let t7;
        if ($[10] !== t) {
            t7 = t("chat.noMessagesPrompt");
            $[10] = t;
            $[11] = t7;
        } else {
            t7 = $[11];
        }
        let t8;
        if ($[12] !== t7) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-gray-500 dark:text-gray-400 max-w-sm",
                children: t7
            }, void 0, false, {
                fileName: "[project]/src/app/admin/chat/components/ChatMessageList.tsx",
                lineNumber: 140,
                columnNumber: 12
            }, this);
            $[12] = t7;
            $[13] = t8;
        } else {
            t8 = $[13];
        }
        let t9;
        if ($[14] !== t6 || $[15] !== t8) {
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto p-8 bg-gray-50/50 dark:bg-gray-950/60 flex flex-col items-center justify-center text-center",
                children: [
                    t4,
                    t6,
                    t8
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/chat/components/ChatMessageList.tsx",
                lineNumber: 148,
                columnNumber: 12
            }, this);
            $[14] = t6;
            $[15] = t8;
            $[16] = t9;
        } else {
            t9 = $[16];
        }
        return t9;
    }
    let t4;
    if ($[17] !== fetchNextPage || $[18] !== hasNextPage || $[19] !== isFetchingNextPage || $[20] !== t) {
        t4 = hasNextPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center mb-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: {
                    "ChatMessageList[<button>.onClick]": ()=>fetchNextPage && fetchNextPage()
                }["ChatMessageList[<button>.onClick]"],
                disabled: isFetchingNextPage,
                className: "px-3.5 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-2xs transition-colors flex items-center gap-2 cursor-pointer",
                children: isFetchingNextPage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                            className: "h-3.5 w-3.5 animate-spin text-teal-600"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/chat/components/ChatMessageList.tsx",
                            lineNumber: 161,
                            columnNumber: 371
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: t("chat.loading")
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/chat/components/ChatMessageList.tsx",
                            lineNumber: 161,
                            columnNumber: 433
                        }, this)
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: t("chat.loadOlder")
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/chat/components/ChatMessageList.tsx",
                    lineNumber: 161,
                    columnNumber: 471
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/chat/components/ChatMessageList.tsx",
                lineNumber: 159,
                columnNumber: 67
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ChatMessageList.tsx",
            lineNumber: 159,
            columnNumber: 25
        }, this);
        $[17] = fetchNextPage;
        $[18] = hasNextPage;
        $[19] = isFetchingNextPage;
        $[20] = t;
        $[21] = t4;
    } else {
        t4 = $[21];
    }
    let t5;
    if ($[22] !== currentUserId || $[23] !== formatTime || $[24] !== isAdmin || $[25] !== messageGroups || $[26] !== t) {
        t5 = Object.entries(messageGroups).map({
            "ChatMessageList[(anonymous)()]": (t6)=>{
                const [date, msgs] = t6;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center sticky top-0 z-10 py-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px] font-semibold text-gray-500 dark:text-gray-400 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xs border border-gray-200/80 dark:border-gray-800 shadow-2xs px-3 py-0.5 rounded-full",
                                children: DATE_GROUP_LABEL_KEYS[date] ? t(DATE_GROUP_LABEL_KEYS[date]) : date
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/chat/components/ChatMessageList.tsx",
                                lineNumber: 175,
                                columnNumber: 127
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/chat/components/ChatMessageList.tsx",
                            lineNumber: 175,
                            columnNumber: 54
                        }, this),
                        msgs.map({
                            "ChatMessageList[(anonymous)() > msgs.map()]": (message, idx)=>{
                                const senderType = message.sender_type?.toLowerCase();
                                let isOwn;
                                if (currentUserId && (Number(message.sender_id) === Number(currentUserId) || Number(message.user_id) === Number(currentUserId))) {
                                    isOwn = true;
                                } else {
                                    if (senderType) {
                                        if (isAdmin) {
                                            isOwn = senderType === "admin" || senderType === "support";
                                        } else {
                                            isOwn = senderType === "user";
                                        }
                                    } else {
                                        if (message.sender?.role) {
                                            const role = message.sender.role.toLowerCase();
                                            if (isAdmin) {
                                                isOwn = role === "admin" || role === "support";
                                            } else {
                                                isOwn = role !== "admin" && role !== "support";
                                            }
                                        } else {
                                            isOwn = false;
                                        }
                                    }
                                }
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$components$2f$ChatMessageItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatMessageItem"], {
                                    message: message,
                                    isOwn: isOwn,
                                    formatTime: formatTime,
                                    onPreviewImage: handlePreviewImage
                                }, String(message.id || message.message_id || `msg-${idx}`), false, {
                                    fileName: "[project]/src/app/admin/chat/components/ChatMessageList.tsx",
                                    lineNumber: 201,
                                    columnNumber: 22
                                }, this);
                            }
                        }["ChatMessageList[(anonymous)() > msgs.map()]"])
                    ]
                }, date, true, {
                    fileName: "[project]/src/app/admin/chat/components/ChatMessageList.tsx",
                    lineNumber: 175,
                    columnNumber: 16
                }, this);
            }
        }["ChatMessageList[(anonymous)()]"]);
        $[22] = currentUserId;
        $[23] = formatTime;
        $[24] = isAdmin;
        $[25] = messageGroups;
        $[26] = t;
        $[27] = t5;
    } else {
        t5 = $[27];
    }
    let t6;
    if ($[28] !== messagesEndRef) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: messagesEndRef
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ChatMessageList.tsx",
            lineNumber: 217,
            columnNumber: 10
        }, this);
        $[28] = messagesEndRef;
        $[29] = t6;
    } else {
        t6 = $[29];
    }
    let t7;
    if ($[30] !== t4 || $[31] !== t5 || $[32] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 overflow-y-auto p-3 sm:p-5 md:p-6 space-y-6 bg-gray-50/50 dark:bg-gray-950/60",
            children: [
                t4,
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/chat/components/ChatMessageList.tsx",
            lineNumber: 225,
            columnNumber: 10
        }, this);
        $[30] = t4;
        $[31] = t5;
        $[32] = t6;
        $[33] = t7;
    } else {
        t7 = $[33];
    }
    let t8;
    if ($[34] !== lightboxState.isOpen || $[35] !== lightboxState.name || $[36] !== lightboxState.url) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$components$2f$ImageLightboxModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageLightboxModal"], {
            isOpen: lightboxState.isOpen,
            onClose: handleCloseLightbox,
            imageUrl: lightboxState.url,
            imageName: lightboxState.name
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ChatMessageList.tsx",
            lineNumber: 235,
            columnNumber: 10
        }, this);
        $[34] = lightboxState.isOpen;
        $[35] = lightboxState.name;
        $[36] = lightboxState.url;
        $[37] = t8;
    } else {
        t8 = $[37];
    }
    let t9;
    if ($[38] !== t7 || $[39] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t7,
                t8
            ]
        }, void 0, true);
        $[38] = t7;
        $[39] = t8;
        $[40] = t9;
    } else {
        t9 = $[40];
    }
    return t9;
}
_s(ChatMessageList, "/Xrbske/MPuLRTpfn0k2PsaJDAU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = ChatMessageList;
function _ChatMessageListHandleCloseLightboxSetLightboxState(prev) {
    return {
        ...prev,
        isOpen: false
    };
}
var _c;
__turbopack_context__.k.register(_c, "ChatMessageList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/chat/components/ChatInput.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatInput",
    ()=>ChatInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/paperclip.js [app-client] (ecmascript) <export default as Paperclip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
function ChatInput(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(59);
    if ($[0] !== "2a3f964c1a1bc97ea8173e6a102473234ced7508fcd016c07daf62ec97a61655") {
        for(let $i = 0; $i < 59; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2a3f964c1a1bc97ea8173e6a102473234ced7508fcd016c07daf62ec97a61655";
    }
    const { messageInput, setMessageInput, attachment, setAttachment, onSubmit, isPending } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    if ($[1] !== setAttachment || $[2] !== t) {
        t1 = ({
            "ChatInput[handleFileChange]": (e)=>{
                const file = e.target.files?.[0];
                if (!file) {
                    return;
                }
                const ext = file.name.split(".").pop()?.toLowerCase() || "";
                if (!ALLOWED_EXTENSIONS.includes(ext)) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t("chat.invalidFileType"));
                    if (fileInputRef.current) {
                        fileInputRef.current.value = "";
                    }
                    return;
                }
                if (file.size > MAX_FILE_SIZE_BYTES) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t("chat.fileTooLarge"));
                    if (fileInputRef.current) {
                        fileInputRef.current.value = "";
                    }
                    return;
                }
                setAttachment(file);
                if (fileInputRef.current) {
                    fileInputRef.current.value = "";
                }
            }
        })["ChatInput[handleFileChange]"];
        $[1] = setAttachment;
        $[2] = t;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const handleFileChange = t1;
    let t2;
    if ($[4] !== setAttachment) {
        t2 = ({
            "ChatInput[removeAttachment]": ()=>{
                setAttachment(null);
                if (fileInputRef.current) {
                    fileInputRef.current.value = "";
                }
            }
        })["ChatInput[removeAttachment]"];
        $[4] = setAttachment;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const removeAttachment = t2;
    const formatFileSize = _ChatInputFormatFileSize;
    let t3;
    if ($[6] !== attachment || $[7] !== isPending || $[8] !== messageInput || $[9] !== onSubmit) {
        t3 = ({
            "ChatInput[handleKeyDown]": (e_0)=>{
                if (e_0.key === "Enter" && !e_0.shiftKey) {
                    e_0.preventDefault();
                    if ((messageInput.trim().length > 0 || attachment !== null) && !isPending) {
                        onSubmit(e_0);
                    }
                }
            }
        })["ChatInput[handleKeyDown]"];
        $[6] = attachment;
        $[7] = isPending;
        $[8] = messageInput;
        $[9] = onSubmit;
        $[10] = t3;
    } else {
        t3 = $[10];
    }
    const handleKeyDown = t3;
    let t4;
    if ($[11] !== attachment?.type) {
        t4 = attachment?.type.startsWith("image/");
        $[11] = attachment?.type;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    const isImageAttachment = t4;
    let t5;
    if ($[13] !== attachment || $[14] !== isPending || $[15] !== messageInput) {
        t5 = (messageInput.trim().length > 0 || attachment !== null) && !isPending;
        $[13] = attachment;
        $[14] = isPending;
        $[15] = messageInput;
        $[16] = t5;
    } else {
        t5 = $[16];
    }
    const canSubmit = t5;
    let t6;
    if ($[17] !== attachment || $[18] !== isImageAttachment || $[19] !== removeAttachment) {
        t6 = attachment && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-2.5 flex items-center gap-2 p-2 bg-teal-50/80 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800/60 rounded-xl max-w-fit shadow-2xs animate-in zoom-in-95",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-1.5 bg-teal-600 text-white rounded-lg",
                    children: isImageAttachment ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/chat/components/ChatInput.tsx",
                        lineNumber: 135,
                        columnNumber: 289
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/chat/components/ChatInput.tsx",
                        lineNumber: 135,
                        columnNumber: 325
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/chat/components/ChatInput.tsx",
                    lineNumber: 135,
                    columnNumber: 211
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-semibold text-gray-900 dark:text-white max-w-[160px] sm:max-w-[220px] truncate",
                            children: attachment.name
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/chat/components/ChatInput.tsx",
                            lineNumber: 135,
                            columnNumber: 389
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[10px] text-gray-500 dark:text-gray-400",
                            children: formatFileSize(attachment.size)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/chat/components/ChatInput.tsx",
                            lineNumber: 135,
                            columnNumber: 509
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/chat/components/ChatInput.tsx",
                    lineNumber: 135,
                    columnNumber: 364
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: removeAttachment,
                    className: "p-1 text-gray-400 hover:text-red-500 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors ms-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        className: "h-3.5 w-3.5"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/chat/components/ChatInput.tsx",
                        lineNumber: 135,
                        columnNumber: 782
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/chat/components/ChatInput.tsx",
                    lineNumber: 135,
                    columnNumber: 612
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/chat/components/ChatInput.tsx",
            lineNumber: 135,
            columnNumber: 24
        }, this);
        $[17] = attachment;
        $[18] = isImageAttachment;
        $[19] = removeAttachment;
        $[20] = t6;
    } else {
        t6 = $[20];
    }
    let t7;
    if ($[21] !== handleFileChange) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            ref: fileInputRef,
            type: "file",
            accept: ".jpeg,.jpg,.png,.pdf,.doc,.docx",
            onChange: handleFileChange,
            className: "hidden",
            id: "chat-file-attachment-input"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ChatInput.tsx",
            lineNumber: 145,
            columnNumber: 10
        }, this);
        $[21] = handleFileChange;
        $[22] = t7;
    } else {
        t7 = $[22];
    }
    let t8;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = ({
            "ChatInput[<Button>.onClick]": ()=>fileInputRef.current?.click()
        })["ChatInput[<Button>.onClick]"];
        $[23] = t8;
    } else {
        t8 = $[23];
    }
    let t9;
    if ($[24] !== t) {
        t9 = t("chat.attachFile");
        $[24] = t;
        $[25] = t9;
    } else {
        t9 = $[25];
    }
    let t10;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__["Paperclip"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ChatInput.tsx",
            lineNumber: 170,
            columnNumber: 11
        }, this);
        $[26] = t10;
    } else {
        t10 = $[26];
    }
    let t11;
    if ($[27] !== isPending || $[28] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            variant: "outline",
            size: "icon",
            onClick: t8,
            disabled: isPending,
            className: "h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0 text-gray-500 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/40 border-gray-200 dark:border-gray-700 cursor-pointer rounded-xl",
            title: t9,
            children: t10
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ChatInput.tsx",
            lineNumber: 177,
            columnNumber: 11
        }, this);
        $[27] = isPending;
        $[28] = t9;
        $[29] = t11;
    } else {
        t11 = $[29];
    }
    let t12;
    if ($[30] !== t) {
        t12 = t("chat.writeReply");
        $[30] = t;
        $[31] = t12;
    } else {
        t12 = $[31];
    }
    let t13;
    if ($[32] !== setMessageInput) {
        t13 = ({
            "ChatInput[<input>.onChange]": (e_1)=>setMessageInput(e_1.target.value)
        })["ChatInput[<input>.onChange]"];
        $[32] = setMessageInput;
        $[33] = t13;
    } else {
        t13 = $[33];
    }
    let t14;
    if ($[34] !== handleKeyDown || $[35] !== isPending || $[36] !== messageInput || $[37] !== t12 || $[38] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 min-w-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                placeholder: t12,
                value: messageInput,
                onChange: t13,
                onKeyDown: handleKeyDown,
                disabled: isPending,
                className: "w-full bg-gray-50/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 h-9 sm:h-10 px-3.5 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white dark:focus:bg-gray-800 transition-colors"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/chat/components/ChatInput.tsx",
                lineNumber: 204,
                columnNumber: 43
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ChatInput.tsx",
            lineNumber: 204,
            columnNumber: 11
        }, this);
        $[34] = handleKeyDown;
        $[35] = isPending;
        $[36] = messageInput;
        $[37] = t12;
        $[38] = t13;
        $[39] = t14;
    } else {
        t14 = $[39];
    }
    const t15 = !canSubmit;
    let t16;
    if ($[40] !== isPending) {
        t16 = isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
            className: "h-4 w-4 animate-spin"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ChatInput.tsx",
            lineNumber: 217,
            columnNumber: 23
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
            className: "h-4 w-4 rtl:rotate-180"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ChatInput.tsx",
            lineNumber: 217,
            columnNumber: 70
        }, this);
        $[40] = isPending;
        $[41] = t16;
    } else {
        t16 = $[41];
    }
    let t17;
    if ($[42] !== t) {
        t17 = t("chat.sendMessage");
        $[42] = t;
        $[43] = t17;
    } else {
        t17 = $[43];
    }
    let t18;
    if ($[44] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "hidden sm:inline text-xs font-semibold",
            children: t17
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ChatInput.tsx",
            lineNumber: 233,
            columnNumber: 11
        }, this);
        $[44] = t17;
        $[45] = t18;
    } else {
        t18 = $[45];
    }
    let t19;
    if ($[46] !== t15 || $[47] !== t16 || $[48] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "submit",
            disabled: t15,
            className: "bg-teal-600 hover:bg-teal-700 text-white gap-1.5 sm:gap-2 h-9 sm:h-10 px-3 sm:px-4 flex-shrink-0 shadow-xs cursor-pointer disabled:opacity-50 rounded-xl",
            children: [
                t16,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/chat/components/ChatInput.tsx",
            lineNumber: 241,
            columnNumber: 11
        }, this);
        $[46] = t15;
        $[47] = t16;
        $[48] = t18;
        $[49] = t19;
    } else {
        t19 = $[49];
    }
    let t20;
    if ($[50] !== onSubmit || $[51] !== t11 || $[52] !== t14 || $[53] !== t19 || $[54] !== t7) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: onSubmit,
            className: "flex items-center gap-1.5 sm:gap-2",
            children: [
                t7,
                t11,
                t14,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/chat/components/ChatInput.tsx",
            lineNumber: 251,
            columnNumber: 11
        }, this);
        $[50] = onSubmit;
        $[51] = t11;
        $[52] = t14;
        $[53] = t19;
        $[54] = t7;
        $[55] = t20;
    } else {
        t20 = $[55];
    }
    let t21;
    if ($[56] !== t20 || $[57] !== t6) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 p-2.5 sm:p-3.5 flex-shrink-0",
            children: [
                t6,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/chat/components/ChatInput.tsx",
            lineNumber: 263,
            columnNumber: 11
        }, this);
        $[56] = t20;
        $[57] = t6;
        $[58] = t21;
    } else {
        t21 = $[58];
    }
    return t21;
}
_s(ChatInput, "epnEVwUj9yB3JT3UqiIsQv9w5/g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = ChatInput;
function _ChatInputFormatFileSize(bytes) {
    if (bytes < 1024) {
        return `${bytes} B`;
    }
    if (bytes < 1048576) {
        return `${(bytes / 1024).toFixed(1)} KB`;
    }
    return `${(bytes / 1048576).toFixed(1)} MB`;
}
var _c;
__turbopack_context__.k.register(_c, "ChatInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/chat/components/ChatEmptyState.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatEmptyState",
    ()=>ChatEmptyState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Headphones$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/headphones.js [app-client] (ecmascript) <export default as Headphones>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/paperclip.js [app-client] (ecmascript) <export default as Paperclip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ChatEmptyState(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(65);
    if ($[0] !== "716780f2ba33fe54afe80f99fb90ae77ef00008c4075ee9915eaf162a1867a50") {
        for(let $i = 0; $i < 65; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "716780f2ba33fe54afe80f99fb90ae77ef00008c4075ee9915eaf162a1867a50";
    }
    const { onNewConversation, isLoading } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute -inset-2 rounded-full bg-teal-100/60 dark:bg-teal-900/30 blur-md animate-pulse"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ChatEmptyState.tsx",
            lineNumber: 28,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative mb-6",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative h-20 w-20 rounded-2xl bg-gradient-to-tr from-teal-600 to-teal-500 text-white flex items-center justify-center shadow-lg shadow-teal-600/20 border-2 border-white dark:border-gray-800",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Headphones$3e$__["Headphones"], {
                        className: "h-10 w-10"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/chat/components/ChatEmptyState.tsx",
                        lineNumber: 35,
                        columnNumber: 253
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/chat/components/ChatEmptyState.tsx",
                    lineNumber: 35,
                    columnNumber: 45
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/chat/components/ChatEmptyState.tsx",
            lineNumber: 35,
            columnNumber: 10
        }, this);
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] !== t) {
        t3 = t("chat.selectChatToStart");
        $[3] = t;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-xl font-bold text-gray-900 dark:text-white mb-2",
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ChatEmptyState.tsx",
            lineNumber: 50,
            columnNumber: 10
        }, this);
        $[5] = t3;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== t) {
        t5 = t("chat.emptyStateSubtitle");
        $[7] = t;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-8 leading-relaxed",
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ChatEmptyState.tsx",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        $[9] = t5;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ChatEmptyState.tsx",
            lineNumber: 74,
            columnNumber: 10
        }, this);
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] !== t) {
        t8 = t("chat.newConversation");
        $[12] = t;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: t8
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ChatEmptyState.tsx",
            lineNumber: 89,
            columnNumber: 10
        }, this);
        $[14] = t8;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] !== isLoading || $[17] !== onNewConversation || $[18] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            onClick: onNewConversation,
            disabled: isLoading,
            className: "bg-teal-600 hover:bg-teal-700 text-white gap-2 text-sm font-semibold h-11 px-6 rounded-xl shadow-md shadow-teal-600/20 hover:shadow-lg hover:shadow-teal-600/30 transition-all cursor-pointer mb-8",
            children: [
                t7,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/chat/components/ChatEmptyState.tsx",
            lineNumber: 97,
            columnNumber: 11
        }, this);
        $[16] = isLoading;
        $[17] = onNewConversation;
        $[18] = t9;
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    let t11;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-7 w-7 rounded-lg bg-teal-50 dark:bg-teal-950/50 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/chat/components/ChatEmptyState.tsx",
                lineNumber: 107,
                columnNumber: 149
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ChatEmptyState.tsx",
            lineNumber: 107,
            columnNumber: 11
        }, this);
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    let t12;
    if ($[21] !== t) {
        t12 = t("chat.quickResponse");
        $[21] = t;
        $[22] = t12;
    } else {
        t12 = $[22];
    }
    let t13;
    if ($[23] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "text-xs font-semibold text-gray-800 dark:text-gray-200 mb-0.5",
            children: t12
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ChatEmptyState.tsx",
            lineNumber: 122,
            columnNumber: 11
        }, this);
        $[23] = t12;
        $[24] = t13;
    } else {
        t13 = $[24];
    }
    let t14;
    if ($[25] !== t) {
        t14 = t("chat.quickResponseDesc");
        $[25] = t;
        $[26] = t14;
    } else {
        t14 = $[26];
    }
    let t15;
    if ($[27] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[11px] text-gray-500 dark:text-gray-400 leading-tight",
            children: t14
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ChatEmptyState.tsx",
            lineNumber: 138,
            columnNumber: 11
        }, this);
        $[27] = t14;
        $[28] = t15;
    } else {
        t15 = $[28];
    }
    let t16;
    if ($[29] !== t13 || $[30] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-gray-850 dark:bg-gray-800/90 border border-gray-200/80 dark:border-gray-800 rounded-xl p-3.5 shadow-2xs",
            children: [
                t11,
                t13,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/chat/components/ChatEmptyState.tsx",
            lineNumber: 146,
            columnNumber: 11
        }, this);
        $[29] = t13;
        $[30] = t15;
        $[31] = t16;
    } else {
        t16 = $[31];
    }
    let t17;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-7 w-7 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__["Paperclip"], {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/chat/components/ChatEmptyState.tsx",
                lineNumber: 155,
                columnNumber: 161
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ChatEmptyState.tsx",
            lineNumber: 155,
            columnNumber: 11
        }, this);
        $[32] = t17;
    } else {
        t17 = $[32];
    }
    let t18;
    if ($[33] !== t) {
        t18 = t("chat.attachments");
        $[33] = t;
        $[34] = t18;
    } else {
        t18 = $[34];
    }
    let t19;
    if ($[35] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "text-xs font-semibold text-gray-800 dark:text-gray-200 mb-0.5",
            children: t18
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ChatEmptyState.tsx",
            lineNumber: 170,
            columnNumber: 11
        }, this);
        $[35] = t18;
        $[36] = t19;
    } else {
        t19 = $[36];
    }
    let t20;
    if ($[37] !== t) {
        t20 = t("chat.attachmentsDesc");
        $[37] = t;
        $[38] = t20;
    } else {
        t20 = $[38];
    }
    let t21;
    if ($[39] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[11px] text-gray-500 dark:text-gray-400 leading-tight",
            children: t20
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ChatEmptyState.tsx",
            lineNumber: 186,
            columnNumber: 11
        }, this);
        $[39] = t20;
        $[40] = t21;
    } else {
        t21 = $[40];
    }
    let t22;
    if ($[41] !== t19 || $[42] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-gray-850 dark:bg-gray-800/90 border border-gray-200/80 dark:border-gray-800 rounded-xl p-3.5 shadow-2xs",
            children: [
                t17,
                t19,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/chat/components/ChatEmptyState.tsx",
            lineNumber: 194,
            columnNumber: 11
        }, this);
        $[41] = t19;
        $[42] = t21;
        $[43] = t22;
    } else {
        t22 = $[43];
    }
    let t23;
    if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-7 w-7 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/chat/components/ChatEmptyState.tsx",
                lineNumber: 203,
                columnNumber: 149
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ChatEmptyState.tsx",
            lineNumber: 203,
            columnNumber: 11
        }, this);
        $[44] = t23;
    } else {
        t23 = $[44];
    }
    let t24;
    if ($[45] !== t) {
        t24 = t("chat.trackIssues");
        $[45] = t;
        $[46] = t24;
    } else {
        t24 = $[46];
    }
    let t25;
    if ($[47] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "text-xs font-semibold text-gray-800 dark:text-gray-200 mb-0.5",
            children: t24
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ChatEmptyState.tsx",
            lineNumber: 218,
            columnNumber: 11
        }, this);
        $[47] = t24;
        $[48] = t25;
    } else {
        t25 = $[48];
    }
    let t26;
    if ($[49] !== t) {
        t26 = t("chat.trackIssuesDesc");
        $[49] = t;
        $[50] = t26;
    } else {
        t26 = $[50];
    }
    let t27;
    if ($[51] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[11px] text-gray-500 dark:text-gray-400 leading-tight",
            children: t26
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ChatEmptyState.tsx",
            lineNumber: 234,
            columnNumber: 11
        }, this);
        $[51] = t26;
        $[52] = t27;
    } else {
        t27 = $[52];
    }
    let t28;
    if ($[53] !== t25 || $[54] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-gray-850 dark:bg-gray-800/90 border border-gray-200/80 dark:border-gray-800 rounded-xl p-3.5 shadow-2xs",
            children: [
                t23,
                t25,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/chat/components/ChatEmptyState.tsx",
            lineNumber: 242,
            columnNumber: 11
        }, this);
        $[53] = t25;
        $[54] = t27;
        $[55] = t28;
    } else {
        t28 = $[55];
    }
    let t29;
    if ($[56] !== t16 || $[57] !== t22 || $[58] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-3 gap-3 w-full text-start",
            children: [
                t16,
                t22,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/chat/components/ChatEmptyState.tsx",
            lineNumber: 251,
            columnNumber: 11
        }, this);
        $[56] = t16;
        $[57] = t22;
        $[58] = t28;
        $[59] = t29;
    } else {
        t29 = $[59];
    }
    let t30;
    if ($[60] !== t10 || $[61] !== t29 || $[62] !== t4 || $[63] !== t6) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex flex-col items-center justify-center bg-gradient-to-b from-gray-50/50 dark:from-gray-900/50 via-white dark:via-gray-900 to-gray-50/30 dark:to-gray-950/80 p-8 text-center select-none overflow-y-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-md w-full flex flex-col items-center",
                children: [
                    t2,
                    t4,
                    t6,
                    t10,
                    t29
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/chat/components/ChatEmptyState.tsx",
                lineNumber: 261,
                columnNumber: 238
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/components/ChatEmptyState.tsx",
            lineNumber: 261,
            columnNumber: 11
        }, this);
        $[60] = t10;
        $[61] = t29;
        $[62] = t4;
        $[63] = t6;
        $[64] = t30;
    } else {
        t30 = $[64];
    }
    return t30;
}
_s(ChatEmptyState, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = ChatEmptyState;
var _c;
__turbopack_context__.k.register(_c, "ChatEmptyState");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/chat/page.client.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$hooks$2f$useSupportChat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/chat/hooks/useSupportChat.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$components$2f$ChatTabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/chat/components/ChatTabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$components$2f$ChatContactList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/chat/components/ChatContactList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$components$2f$ChatHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/chat/components/ChatHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$components$2f$ChatMessageList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/chat/components/ChatMessageList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$components$2f$ChatInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/chat/components/ChatInput.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$components$2f$ChatEmptyState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/chat/components/ChatEmptyState.tsx [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
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
const NewConversationModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/app/admin/chat/components/NewConversationModal.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.NewConversationModal), {
    loadableGenerated: {
        modules: [
            "[project]/src/app/admin/chat/components/NewConversationModal.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = NewConversationModal;
function ChatPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(71);
    if ($[0] !== "b734b225dc4754651d1308fa4200967b384d442702261a94cc3cfded0d48ae35") {
        for(let $i = 0; $i < 71; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b734b225dc4754651d1308fa4200967b384d442702261a94cc3cfded0d48ae35";
    }
    const { statusFilter, setStatusFilter, counts, searchQuery, setSearchQuery, filteredConversations, isLoadingConversations, refetchConversations, isRefetchingConversations, fetchNextConversationsPage, hasNextConversationsPage, isFetchingNextConversationsPage, selectedConversationId, setSelectedConversationId, activeConversation, handleConversationSelect, handleManualMarkAsRead, isMarkingAsRead, handleReleaseConversation, isReleasing, messages, messageGroups, isLoadingMessages, refetchMessages, isRefetchingMessages, fetchNextMessagesPage, hasNextMessagesPage, isFetchingNextMessagesPage, messageInput, setMessageInput, attachment, setAttachment, handleSendMessage, isSendingMessage, isNewConversationModalOpen, setIsNewConversationModalOpen, handleCreateConversation, isCreatingConversation, currentUserId, isAdmin, messagesEndRef, formatTime } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$hooks$2f$useSupportChat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSupportChat"])();
    const t0 = `${activeConversation ? "hidden md:block" : "block"}`;
    let t1;
    if ($[1] !== setIsNewConversationModalOpen) {
        t1 = ({
            "ChatPage[<ChatTabs>.onCreateConversation]": ()=>setIsNewConversationModalOpen(true)
        })["ChatPage[<ChatTabs>.onCreateConversation]"];
        $[1] = setIsNewConversationModalOpen;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== counts || $[4] !== isCreatingConversation || $[5] !== setStatusFilter || $[6] !== statusFilter || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$components$2f$ChatTabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatTabs"], {
            statusFilter: statusFilter,
            setStatusFilter: setStatusFilter,
            counts: counts,
            onCreateConversation: t1,
            isCreatingConversation: isCreatingConversation
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/page.client.tsx",
            lineNumber: 80,
            columnNumber: 10
        }, this);
        $[3] = counts;
        $[4] = isCreatingConversation;
        $[5] = setStatusFilter;
        $[6] = statusFilter;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    let t3;
    if ($[9] !== t0 || $[10] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t0,
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/page.client.tsx",
            lineNumber: 92,
            columnNumber: 10
        }, this);
        $[9] = t0;
        $[10] = t2;
        $[11] = t3;
    } else {
        t3 = $[11];
    }
    const t4 = `${activeConversation ? "hidden md:flex" : "flex flex-1 md:flex-initial"}`;
    let t5;
    if ($[12] !== setIsNewConversationModalOpen) {
        t5 = ({
            "ChatPage[<ChatContactList>.onCreateConversation]": ()=>setIsNewConversationModalOpen(true)
        })["ChatPage[<ChatContactList>.onCreateConversation]"];
        $[12] = setIsNewConversationModalOpen;
        $[13] = t5;
    } else {
        t5 = $[13];
    }
    let t6;
    if ($[14] !== fetchNextConversationsPage || $[15] !== filteredConversations || $[16] !== formatTime || $[17] !== handleConversationSelect || $[18] !== hasNextConversationsPage || $[19] !== isCreatingConversation || $[20] !== isFetchingNextConversationsPage || $[21] !== isLoadingConversations || $[22] !== searchQuery || $[23] !== selectedConversationId || $[24] !== setSearchQuery || $[25] !== t4 || $[26] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$components$2f$ChatContactList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatContactList"], {
            className: t4,
            searchQuery: searchQuery,
            setSearchQuery: setSearchQuery,
            isLoading: isLoadingConversations,
            conversations: filteredConversations,
            selectedConversationId: selectedConversationId,
            onConversationSelect: handleConversationSelect,
            formatTime: formatTime,
            onCreateConversation: t5,
            isCreatingConversation: isCreatingConversation,
            fetchNextPage: fetchNextConversationsPage,
            hasNextPage: hasNextConversationsPage,
            isFetchingNextPage: isFetchingNextConversationsPage
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/page.client.tsx",
            lineNumber: 112,
            columnNumber: 10
        }, this);
        $[14] = fetchNextConversationsPage;
        $[15] = filteredConversations;
        $[16] = formatTime;
        $[17] = handleConversationSelect;
        $[18] = hasNextConversationsPage;
        $[19] = isCreatingConversation;
        $[20] = isFetchingNextConversationsPage;
        $[21] = isLoadingConversations;
        $[22] = searchQuery;
        $[23] = selectedConversationId;
        $[24] = setSearchQuery;
        $[25] = t4;
        $[26] = t5;
        $[27] = t6;
    } else {
        t6 = $[27];
    }
    let t7;
    if ($[28] !== activeConversation || $[29] !== attachment || $[30] !== currentUserId || $[31] !== fetchNextMessagesPage || $[32] !== formatTime || $[33] !== handleManualMarkAsRead || $[34] !== handleReleaseConversation || $[35] !== handleSendMessage || $[36] !== hasNextMessagesPage || $[37] !== isAdmin || $[38] !== isCreatingConversation || $[39] !== isFetchingNextMessagesPage || $[40] !== isLoadingMessages || $[41] !== isMarkingAsRead || $[42] !== isRefetchingConversations || $[43] !== isRefetchingMessages || $[44] !== isReleasing || $[45] !== isSendingMessage || $[46] !== messageGroups || $[47] !== messageInput || $[48] !== messages || $[49] !== messagesEndRef || $[50] !== refetchConversations || $[51] !== refetchMessages || $[52] !== setAttachment || $[53] !== setIsNewConversationModalOpen || $[54] !== setMessageInput || $[55] !== setSelectedConversationId) {
        t7 = activeConversation ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex flex-col bg-white dark:bg-gray-900 overflow-hidden w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$components$2f$ChatHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatHeader"], {
                    conversation: activeConversation,
                    onBack: {
                        "ChatPage[<ChatHeader>.onBack]": ()=>setSelectedConversationId(null)
                    }["ChatPage[<ChatHeader>.onBack]"],
                    onRefresh: {
                        "ChatPage[<ChatHeader>.onRefresh]": ()=>{
                            refetchMessages();
                            refetchConversations();
                        }
                    }["ChatPage[<ChatHeader>.onRefresh]"],
                    isRefreshing: isRefetchingMessages || isRefetchingConversations,
                    onMarkAsRead: handleManualMarkAsRead,
                    isMarkingAsRead: isMarkingAsRead,
                    onRelease: handleReleaseConversation,
                    isReleasing: isReleasing
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/chat/page.client.tsx",
                    lineNumber: 132,
                    columnNumber: 118
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$components$2f$ChatMessageList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatMessageList"], {
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
                    lineNumber: 139,
                    columnNumber: 249
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$components$2f$ChatInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatInput"], {
                    messageInput: messageInput,
                    setMessageInput: setMessageInput,
                    attachment: attachment,
                    setAttachment: setAttachment,
                    onSubmit: handleSendMessage,
                    isPending: isSendingMessage
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/chat/page.client.tsx",
                    lineNumber: 139,
                    columnNumber: 614
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/chat/page.client.tsx",
            lineNumber: 132,
            columnNumber: 31
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden md:flex flex-1 flex-col overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$components$2f$ChatEmptyState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatEmptyState"], {
                onNewConversation: {
                    "ChatPage[<ChatEmptyState>.onNewConversation]": ()=>setIsNewConversationModalOpen(true)
                }["ChatPage[<ChatEmptyState>.onNewConversation]"],
                isLoading: isCreatingConversation
            }, void 0, false, {
                fileName: "[project]/src/app/admin/chat/page.client.tsx",
                lineNumber: 139,
                columnNumber: 874
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/page.client.tsx",
            lineNumber: 139,
            columnNumber: 810
        }, this);
        $[28] = activeConversation;
        $[29] = attachment;
        $[30] = currentUserId;
        $[31] = fetchNextMessagesPage;
        $[32] = formatTime;
        $[33] = handleManualMarkAsRead;
        $[34] = handleReleaseConversation;
        $[35] = handleSendMessage;
        $[36] = hasNextMessagesPage;
        $[37] = isAdmin;
        $[38] = isCreatingConversation;
        $[39] = isFetchingNextMessagesPage;
        $[40] = isLoadingMessages;
        $[41] = isMarkingAsRead;
        $[42] = isRefetchingConversations;
        $[43] = isRefetchingMessages;
        $[44] = isReleasing;
        $[45] = isSendingMessage;
        $[46] = messageGroups;
        $[47] = messageInput;
        $[48] = messages;
        $[49] = messagesEndRef;
        $[50] = refetchConversations;
        $[51] = refetchMessages;
        $[52] = setAttachment;
        $[53] = setIsNewConversationModalOpen;
        $[54] = setMessageInput;
        $[55] = setSelectedConversationId;
        $[56] = t7;
    } else {
        t7 = $[56];
    }
    let t8;
    if ($[57] !== t6 || $[58] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex overflow-hidden",
            children: [
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/chat/page.client.tsx",
            lineNumber: 176,
            columnNumber: 10
        }, this);
        $[57] = t6;
        $[58] = t7;
        $[59] = t8;
    } else {
        t8 = $[59];
    }
    let t9;
    if ($[60] !== t3 || $[61] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex flex-col bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/90 dark:border-gray-800 shadow-xs overflow-hidden",
            children: [
                t3,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/chat/page.client.tsx",
            lineNumber: 185,
            columnNumber: 10
        }, this);
        $[60] = t3;
        $[61] = t8;
        $[62] = t9;
    } else {
        t9 = $[62];
    }
    let t10;
    if ($[63] !== handleCreateConversation || $[64] !== isCreatingConversation || $[65] !== isNewConversationModalOpen || $[66] !== setIsNewConversationModalOpen) {
        t10 = isNewConversationModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NewConversationModal, {
            isOpen: isNewConversationModalOpen,
            onClose: {
                "ChatPage[<NewConversationModal>.onClose]": ()=>setIsNewConversationModalOpen(false)
            }["ChatPage[<NewConversationModal>.onClose]"],
            onSubmit: handleCreateConversation,
            isLoading: isCreatingConversation
        }, void 0, false, {
            fileName: "[project]/src/app/admin/chat/page.client.tsx",
            lineNumber: 194,
            columnNumber: 41
        }, this);
        $[63] = handleCreateConversation;
        $[64] = isCreatingConversation;
        $[65] = isNewConversationModalOpen;
        $[66] = setIsNewConversationModalOpen;
        $[67] = t10;
    } else {
        t10 = $[67];
    }
    let t11;
    if ($[68] !== t10 || $[69] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-[calc(100dvh-4rem)] p-2 sm:p-3 md:p-4 lg:p-5 flex flex-col max-w-full overflow-hidden bg-gray-50/70 dark:bg-gray-950",
            children: [
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/chat/page.client.tsx",
            lineNumber: 207,
            columnNumber: 11
        }, this);
        $[68] = t10;
        $[69] = t9;
        $[70] = t11;
    } else {
        t11 = $[70];
    }
    return t11;
}
_s(ChatPage, "qgNCKFFS9LKIyVDlepEs0EtjeFQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$chat$2f$hooks$2f$useSupportChat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSupportChat"]
    ];
});
_c1 = ChatPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "NewConversationModal");
__turbopack_context__.k.register(_c1, "ChatPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_4da808eb._.js.map