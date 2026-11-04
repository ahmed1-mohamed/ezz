module.exports = [
"[project]/src/lib/firebase-config.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "app",
    ()=>app,
    "messaging",
    ()=>messaging
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$messaging$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/messaging/dist/esm/index.esm2017.js [app-ssr] (ecmascript)");
;
;
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};
const isFirebaseConfigured = ()=>{
    return !!(firebaseConfig.apiKey && firebaseConfig.authDomain && firebaseConfig.projectId && firebaseConfig.storageBucket && firebaseConfig.messagingSenderId && firebaseConfig.appId);
};
const isAnyFirebaseVariableSet = ()=>{
    return !!(firebaseConfig.apiKey || firebaseConfig.authDomain || firebaseConfig.projectId || firebaseConfig.storageBucket || firebaseConfig.messagingSenderId || firebaseConfig.appId);
};
let app;
let messaging;
if (("TURBOPACK compile-time value", "undefined") !== "undefined" && isFirebaseConfigured()) //TURBOPACK unreachable
;
else if (("TURBOPACK compile-time value", "undefined") !== "undefined" && !isFirebaseConfigured() && isAnyFirebaseVariableSet()) {
    console.warn("Firebase is partially configured. Please set up all Firebase environment variables in .env file.");
}
;
}),
"[project]/src/lib/firebase-config.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "app",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["app"],
    "getToken",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$messaging$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getToken"],
    "messaging",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["messaging"],
    "onMessage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$messaging$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onMessage"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/firebase-config.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$messaging$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/messaging/dist/esm/index.esm2017.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=src_lib_firebase-config_ts_eb0265e6._.js.map