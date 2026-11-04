(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/modals/projects/edit-project-media-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditProjectMediaModal",
    ()=>EditProjectMediaModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$safe$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/safe-image.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/api-client.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$projects$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/projects.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
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
;
function EditProjectMediaModal(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(76);
    if ($[0] !== "d7f0ecf7631f19c42497fafe278505da82a17e80f83b1e6db9dbf9954e2be033") {
        for(let $i = 0; $i < 76; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d7f0ecf7631f19c42497fafe278505da82a17e80f83b1e6db9dbf9954e2be033";
    }
    const { isOpen, onClose, projectId, media } = t0;
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const token = session?.user?.accessToken;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isPrimary, setIsPrimary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [myOrder, setMyOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    let t2;
    if ($[1] !== media) {
        t1 = ({
            "EditProjectMediaModal[useEffect()]": ()=>{
                if (media) {
                    setDescription(media.description || "");
                    setIsPrimary(Boolean(media.is_primary));
                    setMyOrder(Boolean(media.my_order));
                }
            }
        })["EditProjectMediaModal[useEffect()]"];
        t2 = [
            media
        ];
        $[1] = media;
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] !== media || $[5] !== token) {
        t3 = (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$projects$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editProjectMedia"])(media.media_id, data, token);
        $[4] = media;
        $[5] = token;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== onClose || $[8] !== projectId || $[9] !== queryClient || $[10] !== t) {
        t4 = ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("projects.form.media.updateSuccess") || "Media updated successfully!");
            queryClient.invalidateQueries({
                queryKey: [
                    "projectDetails",
                    String(projectId)
                ]
            });
            onClose();
        };
        $[7] = onClose;
        $[8] = projectId;
        $[9] = queryClient;
        $[10] = t;
        $[11] = t4;
    } else {
        t4 = $[11];
    }
    let t5;
    if ($[12] !== t) {
        t5 = (error)=>{
            console.error("Update error:", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(error.message || t("projects.form.media.updateFailed") || "Failed to update media. Please try again.");
        };
        $[12] = t;
        $[13] = t5;
    } else {
        t5 = $[13];
    }
    let t6;
    if ($[14] !== t3 || $[15] !== t4 || $[16] !== t5) {
        t6 = {
            mutationFn: t3,
            onSuccess: t4,
            onError: t5
        };
        $[14] = t3;
        $[15] = t4;
        $[16] = t5;
        $[17] = t6;
    } else {
        t6 = $[17];
    }
    const mutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(t6);
    let t7;
    if ($[18] !== description || $[19] !== isPrimary || $[20] !== mutation || $[21] !== myOrder) {
        t7 = ({
            "EditProjectMediaModal[handleSubmit]": (e)=>{
                e.preventDefault();
                const payload = {
                    description: description.trim(),
                    is_primary: isPrimary,
                    my_order: myOrder
                };
                mutation.mutate(payload);
            }
        })["EditProjectMediaModal[handleSubmit]"];
        $[18] = description;
        $[19] = isPrimary;
        $[20] = mutation;
        $[21] = myOrder;
        $[22] = t7;
    } else {
        t7 = $[22];
    }
    const handleSubmit = t7;
    if (!isOpen || !media) {
        return null;
    }
    const isVideo = media.media_type === "video";
    let t8;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-xl font-semibold",
            children: "Edit Media"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/projects/edit-project-media-modal.tsx",
            lineNumber: 153,
            columnNumber: 10
        }, this);
        $[23] = t8;
    } else {
        t8 = $[23];
    }
    let t9;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            className: "h-5 w-5"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/projects/edit-project-media-modal.tsx",
            lineNumber: 160,
            columnNumber: 10
        }, this);
        $[24] = t9;
    } else {
        t9 = $[24];
    }
    let t10;
    if ($[25] !== onClose) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4 flex items-center justify-between",
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "rounded-full p-1 hover:bg-gray-100",
                    children: t9
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/projects/edit-project-media-modal.tsx",
                    lineNumber: 167,
                    columnNumber: 71
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/projects/edit-project-media-modal.tsx",
            lineNumber: 167,
            columnNumber: 11
        }, this);
        $[25] = onClose;
        $[26] = t10;
    } else {
        t10 = $[26];
    }
    let t11;
    if ($[27] !== isVideo || $[28] !== media.media_url) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "aspect-video overflow-hidden rounded-lg bg-gray-100",
            children: isVideo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                src: media.media_url,
                className: "h-full w-full object-cover",
                controls: true
            }, void 0, false, {
                fileName: "[project]/src/components/modals/projects/edit-project-media-modal.tsx",
                lineNumber: 175,
                columnNumber: 91
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$safe$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeImage"], {
                src: media.media_url,
                alt: "Media preview",
                fill: true,
                sizes: "448px",
                fallbackSrc: "/images/default-logo.svg",
                className: "object-cover"
            }, void 0, false, {
                fileName: "[project]/src/components/modals/projects/edit-project-media-modal.tsx",
                lineNumber: 175,
                columnNumber: 180
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/modals/projects/edit-project-media-modal.tsx",
            lineNumber: 175,
            columnNumber: 11
        }, this);
        $[27] = isVideo;
        $[28] = media.media_url;
        $[29] = t11;
    } else {
        t11 = $[29];
    }
    let t12;
    if ($[30] !== isVideo) {
        t12 = isVideo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/projects/edit-project-media-modal.tsx",
            lineNumber: 184,
            columnNumber: 21
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/projects/edit-project-media-modal.tsx",
            lineNumber: 184,
            columnNumber: 53
        }, this);
        $[30] = isVideo;
        $[31] = t12;
    } else {
        t12 = $[31];
    }
    let t13;
    if ($[32] !== media.media_type) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "capitalize",
            children: media.media_type
        }, void 0, false, {
            fileName: "[project]/src/components/modals/projects/edit-project-media-modal.tsx",
            lineNumber: 192,
            columnNumber: 11
        }, this);
        $[32] = media.media_type;
        $[33] = t13;
    } else {
        t13 = $[33];
    }
    let t14;
    if ($[34] !== t12 || $[35] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-2 flex items-center gap-2 text-sm text-gray-500",
            children: [
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/projects/edit-project-media-modal.tsx",
            lineNumber: 200,
            columnNumber: 11
        }, this);
        $[34] = t12;
        $[35] = t13;
        $[36] = t14;
    } else {
        t14 = $[36];
    }
    let t15;
    if ($[37] !== t11 || $[38] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4",
            children: [
                t11,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/projects/edit-project-media-modal.tsx",
            lineNumber: 209,
            columnNumber: 11
        }, this);
        $[37] = t11;
        $[38] = t14;
        $[39] = t15;
    } else {
        t15 = $[39];
    }
    let t16;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "mb-2 block text-sm font-medium",
            children: "Description"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/projects/edit-project-media-modal.tsx",
            lineNumber: 218,
            columnNumber: 11
        }, this);
        $[40] = t16;
    } else {
        t16 = $[40];
    }
    let t17;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = ({
            "EditProjectMediaModal[<textarea>.onChange]": (e_0)=>setDescription(e_0.target.value)
        })["EditProjectMediaModal[<textarea>.onChange]"];
        $[41] = t17;
    } else {
        t17 = $[41];
    }
    let t18;
    if ($[42] !== description) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4",
            children: [
                t16,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    value: description,
                    onChange: t17,
                    placeholder: "Enter description",
                    rows: 3,
                    className: "w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/projects/edit-project-media-modal.tsx",
                    lineNumber: 234,
                    columnNumber: 38
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/projects/edit-project-media-modal.tsx",
            lineNumber: 234,
            columnNumber: 11
        }, this);
        $[42] = description;
        $[43] = t18;
    } else {
        t18 = $[43];
    }
    let t19;
    if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = ({
            "EditProjectMediaModal[<input>.onChange]": (e_1)=>setIsPrimary(e_1.target.checked)
        })["EditProjectMediaModal[<input>.onChange]"];
        $[44] = t19;
    } else {
        t19 = $[44];
    }
    let t20;
    if ($[45] !== isPrimary) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "checkbox",
            checked: isPrimary,
            onChange: t19,
            className: "rounded border-gray-300 text-teal-600 focus:ring-teal-500"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/projects/edit-project-media-modal.tsx",
            lineNumber: 251,
            columnNumber: 11
        }, this);
        $[45] = isPrimary;
        $[46] = t20;
    } else {
        t20 = $[46];
    }
    let t21;
    if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm",
            children: "Set as primary image"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/projects/edit-project-media-modal.tsx",
            lineNumber: 259,
            columnNumber: 11
        }, this);
        $[47] = t21;
    } else {
        t21 = $[47];
    }
    let t22;
    if ($[48] !== t20) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "flex items-center gap-2",
            children: [
                t20,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/projects/edit-project-media-modal.tsx",
            lineNumber: 266,
            columnNumber: 11
        }, this);
        $[48] = t20;
        $[49] = t22;
    } else {
        t22 = $[49];
    }
    let t23;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = ({
            "EditProjectMediaModal[<input>.onChange]": (e_2)=>setMyOrder(e_2.target.checked)
        })["EditProjectMediaModal[<input>.onChange]"];
        $[50] = t23;
    } else {
        t23 = $[50];
    }
    let t24;
    if ($[51] !== myOrder) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "checkbox",
            checked: myOrder,
            onChange: t23,
            className: "rounded border-gray-300 text-teal-600 focus:ring-teal-500"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/projects/edit-project-media-modal.tsx",
            lineNumber: 283,
            columnNumber: 11
        }, this);
        $[51] = myOrder;
        $[52] = t24;
    } else {
        t24 = $[52];
    }
    let t25;
    if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm",
            children: "Include in media order"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/projects/edit-project-media-modal.tsx",
            lineNumber: 291,
            columnNumber: 11
        }, this);
        $[53] = t25;
    } else {
        t25 = $[53];
    }
    let t26;
    if ($[54] !== t24) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "flex items-center gap-2",
            children: [
                t24,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/projects/edit-project-media-modal.tsx",
            lineNumber: 298,
            columnNumber: 11
        }, this);
        $[54] = t24;
        $[55] = t26;
    } else {
        t26 = $[55];
    }
    let t27;
    if ($[56] !== t22 || $[57] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4 space-y-3",
            children: [
                t22,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/projects/edit-project-media-modal.tsx",
            lineNumber: 306,
            columnNumber: 11
        }, this);
        $[56] = t22;
        $[57] = t26;
        $[58] = t27;
    } else {
        t27 = $[58];
    }
    let t28;
    if ($[59] !== onClose) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            variant: "outline",
            onClick: onClose,
            children: "Cancel"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/projects/edit-project-media-modal.tsx",
            lineNumber: 315,
            columnNumber: 11
        }, this);
        $[59] = onClose;
        $[60] = t28;
    } else {
        t28 = $[60];
    }
    const t29 = mutation.isPending ? "Saving..." : "Save Changes";
    let t30;
    if ($[61] !== mutation.isPending || $[62] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "submit",
            disabled: mutation.isPending,
            className: "bg-teal-600 hover:bg-teal-700",
            children: t29
        }, void 0, false, {
            fileName: "[project]/src/components/modals/projects/edit-project-media-modal.tsx",
            lineNumber: 324,
            columnNumber: 11
        }, this);
        $[61] = mutation.isPending;
        $[62] = t29;
        $[63] = t30;
    } else {
        t30 = $[63];
    }
    let t31;
    if ($[64] !== t28 || $[65] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-end gap-2",
            children: [
                t28,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/projects/edit-project-media-modal.tsx",
            lineNumber: 333,
            columnNumber: 11
        }, this);
        $[64] = t28;
        $[65] = t30;
        $[66] = t31;
    } else {
        t31 = $[66];
    }
    let t32;
    if ($[67] !== handleSubmit || $[68] !== t15 || $[69] !== t18 || $[70] !== t27 || $[71] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            children: [
                t15,
                t18,
                t27,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/projects/edit-project-media-modal.tsx",
            lineNumber: 342,
            columnNumber: 11
        }, this);
        $[67] = handleSubmit;
        $[68] = t15;
        $[69] = t18;
        $[70] = t27;
        $[71] = t31;
        $[72] = t32;
    } else {
        t32 = $[72];
    }
    let t33;
    if ($[73] !== t10 || $[74] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-md rounded-lg bg-white p-6",
                children: [
                    t10,
                    t32
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals/projects/edit-project-media-modal.tsx",
                lineNumber: 354,
                columnNumber: 92
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/modals/projects/edit-project-media-modal.tsx",
            lineNumber: 354,
            columnNumber: 11
        }, this);
        $[73] = t10;
        $[74] = t32;
        $[75] = t33;
    } else {
        t33 = $[75];
    }
    return t33;
}
_s(EditProjectMediaModal, "YJ78QZnn1hDolbWQZLIsta3aTWo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
_c = EditProjectMediaModal;
var _c;
__turbopack_context__.k.register(_c, "EditProjectMediaModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/modals/projects/edit-project-media-modal.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/modals/projects/edit-project-media-modal.tsx [app-client] (ecmascript)"));
}),
"[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>X
]);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }
    ],
    [
        "path",
        {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }
    ]
];
const X = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("x", __iconNode);
;
 //# sourceMappingURL=x.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "X",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_8a1b3713._.js.map