(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
            outline: "text-foreground",
            success: "border-transparent bg-green-500 text-white shadow hover:bg-green-600",
            warning: "border-transparent bg-yellow-500 text-yellow-950 shadow hover:bg-yellow-600",
            info: "border-transparent bg-blue-500 text-white shadow hover:bg-blue-600"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "131defe38b2c408d35282d118a2c53fca224aae57d57a4f5f58a63132ce0704b") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "131defe38b2c408d35282d118a2c53fca224aae57d57a4f5f58a63132ce0704b";
    }
    let className;
    let props;
    let variant;
    if ($[1] !== t0) {
        ({ className, variant, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
        $[4] = variant;
    } else {
        className = $[2];
        props = $[3];
        variant = $[4];
    }
    let t1;
    if ($[5] !== className || $[6] !== variant) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className);
        $[5] = className;
        $[6] = variant;
        $[7] = t1;
    } else {
        t1 = $[7];
    }
    let t2;
    if ($[8] !== props || $[9] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/badge.tsx",
            lineNumber: 61,
            columnNumber: 10
        }, this);
        $[8] = props;
        $[9] = t1;
        $[10] = t2;
    } else {
        t2 = $[10];
    }
    return t2;
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/use-add-project-feature.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAddProjectFeatureData",
    ()=>useAddProjectFeatureData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/api-client.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$misc$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/misc.service.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function useAddProjectFeatureData(isOpen) {
    _s();
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const token = session?.user?.accessToken;
    const [features, setFeatures] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAddProjectFeatureData.useEffect": ()=>{
            if (!token || !isOpen) return;
            const loadFeatures = {
                "useAddProjectFeatureData.useEffect.loadFeatures": async ()=>{
                    setLoading(true);
                    try {
                        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$misc$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchFeatures"])(token);
                        const featuresList = response?.data || [];
                        const formattedFeatures = featuresList.map({
                            "useAddProjectFeatureData.useEffect.loadFeatures.formattedFeatures": (f)=>({
                                    feature_id: f.feature_id,
                                    feature_name: f.feature_name,
                                    is_amenity: f.is_amenity || 0
                                })
                        }["useAddProjectFeatureData.useEffect.loadFeatures.formattedFeatures"]);
                        setFeatures(formattedFeatures);
                    } catch (error) {
                        console.error("Error loading features:", error);
                    } finally{
                        setLoading(false);
                    }
                }
            }["useAddProjectFeatureData.useEffect.loadFeatures"];
            loadFeatures();
        }
    }["useAddProjectFeatureData.useEffect"], [
        token,
        isOpen
    ]);
    return {
        features,
        loading
    };
}
_s(useAddProjectFeatureData, "ezstxY2NnC1jpCcFJN7vkGjVxJU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/modals/projects/add-project-feature-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddProjectFeatureModal",
    ()=>AddProjectFeatureModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$add$2d$project$2d$feature$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-add-project-feature.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/ui/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-question-mark.js [app-client] (ecmascript) <export default as HelpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/api-client.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$projects$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/projects.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
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
;
;
;
;
;
;
const getProjectFeatureSchema = (t)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        feature_id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(1, t("projects.features.validation.featureRequired") || "Feature is required"),
        value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, t("projects.features.validation.valueRequired") || "Value is required"),
        is_amenity: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(1).optional()
    });
function AddProjectFeatureModal(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(114);
    if ($[0] !== "3707dc86191ebb066c46a90ec4bcf796cfc335a3015c277d0c4f0321bd5f0c87") {
        for(let $i = 0; $i < 114; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3707dc86191ebb066c46a90ec4bcf796cfc335a3015c277d0c4f0321bd5f0c87";
    }
    const { isOpen, onClose, projectId } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const token = session?.user?.accessToken;
    const { features, loading: featuresLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$add$2d$project$2d$feature$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAddProjectFeatureData"])(isOpen);
    const [addAnother, setAddAnother] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[1] !== t) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodResolver"])(getProjectFeatureSchema(t));
        $[1] = t;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            feature_id: undefined,
            value: "",
            is_amenity: 0
        };
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== t1) {
        t3 = {
            resolver: t1,
            defaultValues: t2
        };
        $[4] = t1;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const { register, handleSubmit, control, formState: t4, reset, setError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])(t3);
    const { errors } = t4;
    let t5;
    if ($[6] !== token) {
        t5 = (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$projects$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addProjectFeature"])(data, token);
        $[6] = token;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== setError || $[9] !== t) {
        t6 = (error)=>{
            setError("root", {
                message: error.message || t("projects.features.addFailed") || "Failed to Create Project Feature."
            });
        };
        $[8] = setError;
        $[9] = t;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    const mutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: t5,
        onSuccess: {
            "AddProjectFeatureModal.useMutation[mutation]": ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("projects.features.addedSuccess") || "Project feature added successfully!");
                queryClient.invalidateQueries({
                    queryKey: [
                        "projectDetails"
                    ]
                });
                handleClose();
            }
        }["AddProjectFeatureModal.useMutation[mutation]"],
        onError: t6
    });
    const handleClose = {
        "AddProjectFeatureModal[handleClose]": ()=>{
            reset();
            setAddAnother(false);
            onClose();
        }
    }["AddProjectFeatureModal[handleClose]"];
    let t7;
    if ($[11] !== mutation || $[12] !== projectId) {
        t7 = ({
            "AddProjectFeatureModal[onSubmit]": (formData)=>{
                const data_0 = {
                    project_id: projectId,
                    features: [
                        {
                            feature_id: formData.feature_id,
                            value: formData.value,
                            description: ""
                        }
                    ]
                };
                mutation.mutate(data_0);
            }
        })["AddProjectFeatureModal[onSubmit]"];
        $[11] = mutation;
        $[12] = projectId;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    const onSubmit = t7;
    let t8;
    if ($[14] !== t) {
        t8 = t("projects.features.addTitle") || "Add Project Feature";
        $[14] = t;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] !== handleSubmit || $[17] !== onSubmit) {
        t9 = handleSubmit(onSubmit);
        $[16] = handleSubmit;
        $[17] = onSubmit;
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    let t10;
    if ($[19] !== errors.root) {
        t10 = errors.root && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-md bg-red-50 p-3 text-sm text-red-500",
            children: errors.root.message
        }, void 0, false, {
            fileName: "[project]/src/components/modals/projects/add-project-feature-modal.tsx",
            lineNumber: 178,
            columnNumber: 26
        }, this);
        $[19] = errors.root;
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    let t11;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-1.5 bg-blue-100 rounded-md",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                className: "h-4 w-4 text-blue-600"
            }, void 0, false, {
                fileName: "[project]/src/components/modals/projects/add-project-feature-modal.tsx",
                lineNumber: 186,
                columnNumber: 57
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/modals/projects/add-project-feature-modal.tsx",
            lineNumber: 186,
            columnNumber: 11
        }, this);
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    let t12;
    if ($[22] !== t) {
        t12 = t("projects.features.addTitle") || "Add Project Feature";
        $[22] = t;
        $[23] = t12;
    } else {
        t12 = $[23];
    }
    let t13;
    if ($[24] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm font-medium text-blue-900",
            children: t12
        }, void 0, false, {
            fileName: "[project]/src/components/modals/projects/add-project-feature-modal.tsx",
            lineNumber: 201,
            columnNumber: 11
        }, this);
        $[24] = t12;
        $[25] = t13;
    } else {
        t13 = $[25];
    }
    let t14;
    if ($[26] !== t) {
        t14 = t("projects.features.addSubtitle") || "Assign features to this project";
        $[26] = t;
        $[27] = t14;
    } else {
        t14 = $[27];
    }
    let t15;
    if ($[28] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-blue-600",
            children: t14
        }, void 0, false, {
            fileName: "[project]/src/components/modals/projects/add-project-feature-modal.tsx",
            lineNumber: 217,
            columnNumber: 11
        }, this);
        $[28] = t14;
        $[29] = t15;
    } else {
        t15 = $[29];
    }
    let t16;
    if ($[30] !== t13 || $[31] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100",
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t13,
                        t15
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/projects/add-project-feature-modal.tsx",
                    lineNumber: 225,
                    columnNumber: 138
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/projects/add-project-feature-modal.tsx",
            lineNumber: 225,
            columnNumber: 11
        }, this);
        $[30] = t13;
        $[31] = t15;
        $[32] = t16;
    } else {
        t16 = $[32];
    }
    let t17;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
            className: "h-3 w-3 text-blue-500"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/projects/add-project-feature-modal.tsx",
            lineNumber: 234,
            columnNumber: 11
        }, this);
        $[33] = t17;
    } else {
        t17 = $[33];
    }
    let t18;
    if ($[34] !== t) {
        t18 = t("projects.features.featureName") || "Feature name";
        $[34] = t;
        $[35] = t18;
    } else {
        t18 = $[35];
    }
    let t19;
    let t20;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/projects/add-project-feature-modal.tsx",
            lineNumber: 250,
            columnNumber: 11
        }, this);
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"], {
            className: "h-3 w-3 text-gray-400 ml-auto"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/projects/add-project-feature-modal.tsx",
            lineNumber: 251,
            columnNumber: 11
        }, this);
        $[36] = t19;
        $[37] = t20;
    } else {
        t19 = $[36];
        t20 = $[37];
    }
    let t21;
    if ($[38] !== t18) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "flex items-center gap-1.5 text-xs",
            children: [
                t17,
                t18,
                " ",
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/projects/add-project-feature-modal.tsx",
            lineNumber: 260,
            columnNumber: 11
        }, this);
        $[38] = t18;
        $[39] = t21;
    } else {
        t21 = $[39];
    }
    let t22;
    if ($[40] !== features || $[41] !== featuresLoading || $[42] !== t) {
        t22 = ({
            "AddProjectFeatureModal[<Controller>.render]": (t23)=>{
                const { field } = t23;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                    value: field.value?.toString() || "",
                    onValueChange: {
                        "AddProjectFeatureModal[<Controller>.render > <Select>.onValueChange]": (val)=>field.onChange(Number(val))
                    }["AddProjectFeatureModal[<Controller>.render > <Select>.onValueChange]"],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                            className: "bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 py-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                placeholder: featuresLoading ? t("projects.features.loadingFeatures") || "Loading features..." : t("projects.features.selectFeature") || "Select a feature"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/projects/add-project-feature-modal.tsx",
                                lineNumber: 275,
                                columnNumber: 188
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/projects/add-project-feature-modal.tsx",
                            lineNumber: 275,
                            columnNumber: 84
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                            className: "max-h-60 overflow-y-auto",
                            children: featuresLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2 text-sm text-gray-500 text-center",
                                children: t("projects.features.loadingFeatures") || "Loading features..."
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/projects/add-project-feature-modal.tsx",
                                lineNumber: 275,
                                columnNumber: 447
                            }, this) : features.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2 text-sm text-gray-500 text-center",
                                children: t("projects.features.noFeaturesAvailable") || "No features available"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/projects/add-project-feature-modal.tsx",
                                lineNumber: 275,
                                columnNumber: 600
                            }, this) : features.map({
                                "AddProjectFeatureModal[<Controller>.render > features.map()]": (feature)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: feature.feature_id.toString(),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: feature.feature_name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/projects/add-project-feature-modal.tsx",
                                                    lineNumber: 276,
                                                    columnNumber: 206
                                                }, this),
                                                feature.is_amenity === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded",
                                                    children: t("projects.features.amenity") || "Amenity"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/projects/add-project-feature-modal.tsx",
                                                    lineNumber: 276,
                                                    columnNumber: 270
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modals/projects/add-project-feature-modal.tsx",
                                            lineNumber: 276,
                                            columnNumber: 165
                                        }, this)
                                    }, feature.feature_id, false, {
                                        fileName: "[project]/src/components/modals/projects/add-project-feature-modal.tsx",
                                        lineNumber: 276,
                                        columnNumber: 90
                                    }, this)
                            }["AddProjectFeatureModal[<Controller>.render > features.map()]"])
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/projects/add-project-feature-modal.tsx",
                            lineNumber: 275,
                            columnNumber: 376
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/projects/add-project-feature-modal.tsx",
                    lineNumber: 273,
                    columnNumber: 16
                }, this);
            }
        })["AddProjectFeatureModal[<Controller>.render]"];
        $[40] = features;
        $[41] = featuresLoading;
        $[42] = t;
        $[43] = t22;
    } else {
        t22 = $[43];
    }
    let t23;
    if ($[44] !== control || $[45] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
            name: "feature_id",
            control: control,
            render: t22
        }, void 0, false, {
            fileName: "[project]/src/components/modals/projects/add-project-feature-modal.tsx",
            lineNumber: 289,
            columnNumber: 11
        }, this);
        $[44] = control;
        $[45] = t22;
        $[46] = t23;
    } else {
        t23 = $[46];
    }
    let t24;
    if ($[47] !== errors.feature_id) {
        t24 = errors.feature_id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-red-500",
            children: errors.feature_id.message
        }, void 0, false, {
            fileName: "[project]/src/components/modals/projects/add-project-feature-modal.tsx",
            lineNumber: 298,
            columnNumber: 32
        }, this);
        $[47] = errors.feature_id;
        $[48] = t24;
    } else {
        t24 = $[48];
    }
    let t25;
    if ($[49] !== t21 || $[50] !== t23 || $[51] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-1.5",
            children: [
                t21,
                t23,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/projects/add-project-feature-modal.tsx",
            lineNumber: 306,
            columnNumber: 11
        }, this);
        $[49] = t21;
        $[50] = t23;
        $[51] = t24;
        $[52] = t25;
    } else {
        t25 = $[52];
    }
    let t26;
    if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
            className: "h-3 w-3 text-blue-500"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/projects/add-project-feature-modal.tsx",
            lineNumber: 316,
            columnNumber: 11
        }, this);
        $[53] = t26;
    } else {
        t26 = $[53];
    }
    let t27;
    if ($[54] !== t) {
        t27 = t("projects.features.value") || "Value";
        $[54] = t;
        $[55] = t27;
    } else {
        t27 = $[55];
    }
    let t28;
    let t29;
    if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/projects/add-project-feature-modal.tsx",
            lineNumber: 332,
            columnNumber: 11
        }, this);
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"], {
            className: "h-3 w-3 text-gray-400 ml-auto"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/projects/add-project-feature-modal.tsx",
            lineNumber: 333,
            columnNumber: 11
        }, this);
        $[56] = t28;
        $[57] = t29;
    } else {
        t28 = $[56];
        t29 = $[57];
    }
    let t30;
    if ($[58] !== t27) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "flex items-center gap-1.5 text-xs",
            children: [
                t26,
                t27,
                " ",
                t28,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/projects/add-project-feature-modal.tsx",
            lineNumber: 342,
            columnNumber: 11
        }, this);
        $[58] = t27;
        $[59] = t30;
    } else {
        t30 = $[59];
    }
    let t31;
    if ($[60] !== t) {
        t31 = t("projects.features.valuePlaceholder") || "Enter feature value (e.g., Yes, No, 10, etc.)";
        $[60] = t;
        $[61] = t31;
    } else {
        t31 = $[61];
    }
    let t32;
    if ($[62] !== register) {
        t32 = register("value");
        $[62] = register;
        $[63] = t32;
    } else {
        t32 = $[63];
    }
    let t33;
    if ($[64] !== t31 || $[65] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            placeholder: t31,
            ...t32,
            className: "bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 py-3"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/projects/add-project-feature-modal.tsx",
            lineNumber: 366,
            columnNumber: 11
        }, this);
        $[64] = t31;
        $[65] = t32;
        $[66] = t33;
    } else {
        t33 = $[66];
    }
    let t34;
    if ($[67] !== errors.value) {
        t34 = errors.value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-red-500",
            children: errors.value.message
        }, void 0, false, {
            fileName: "[project]/src/components/modals/projects/add-project-feature-modal.tsx",
            lineNumber: 375,
            columnNumber: 27
        }, this);
        $[67] = errors.value;
        $[68] = t34;
    } else {
        t34 = $[68];
    }
    let t35;
    if ($[69] !== t30 || $[70] !== t33 || $[71] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-1.5",
            children: [
                t30,
                t33,
                t34
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/projects/add-project-feature-modal.tsx",
            lineNumber: 383,
            columnNumber: 11
        }, this);
        $[69] = t30;
        $[70] = t33;
        $[71] = t34;
        $[72] = t35;
    } else {
        t35 = $[72];
    }
    let t36;
    if ($[73] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = ({
            "AddProjectFeatureModal[<input>.onChange]": (e)=>setAddAnother(e.target.checked)
        })["AddProjectFeatureModal[<input>.onChange]"];
        $[73] = t36;
    } else {
        t36 = $[73];
    }
    let t37;
    if ($[74] !== addAnother || $[75] !== mutation.isPending) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "checkbox",
            id: "addAnother",
            checked: addAnother,
            onChange: t36,
            disabled: mutation.isPending,
            className: "h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/projects/add-project-feature-modal.tsx",
            lineNumber: 402,
            columnNumber: 11
        }, this);
        $[74] = addAnother;
        $[75] = mutation.isPending;
        $[76] = t37;
    } else {
        t37 = $[76];
    }
    let t38;
    if ($[77] !== t) {
        t38 = t("common.addAnotherItem") || "Add another item";
        $[77] = t;
        $[78] = t38;
    } else {
        t38 = $[78];
    }
    let t39;
    if ($[79] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "addAnother",
            className: "text-sm text-gray-700",
            children: t38
        }, void 0, false, {
            fileName: "[project]/src/components/modals/projects/add-project-feature-modal.tsx",
            lineNumber: 419,
            columnNumber: 11
        }, this);
        $[79] = t38;
        $[80] = t39;
    } else {
        t39 = $[80];
    }
    let t40;
    if ($[81] !== t37 || $[82] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center space-x-2",
            children: [
                t37,
                t39
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/projects/add-project-feature-modal.tsx",
            lineNumber: 427,
            columnNumber: 11
        }, this);
        $[81] = t37;
        $[82] = t39;
        $[83] = t40;
    } else {
        t40 = $[83];
    }
    let t41;
    if ($[84] !== t) {
        t41 = t("common.cancel") || "Cancel";
        $[84] = t;
        $[85] = t41;
    } else {
        t41 = $[85];
    }
    let t42;
    if ($[86] !== handleClose || $[87] !== mutation.isPending || $[88] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            variant: "outline",
            onClick: handleClose,
            disabled: mutation.isPending,
            className: "hover:bg-gray-50",
            children: t41
        }, void 0, false, {
            fileName: "[project]/src/components/modals/projects/add-project-feature-modal.tsx",
            lineNumber: 444,
            columnNumber: 11
        }, this);
        $[86] = handleClose;
        $[87] = mutation.isPending;
        $[88] = t41;
        $[89] = t42;
    } else {
        t42 = $[89];
    }
    let t43;
    if ($[90] !== mutation.isPending || $[91] !== t) {
        t43 = mutation.isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "w-4 h-4 animate-spin"
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/projects/add-project-feature-modal.tsx",
                    lineNumber: 454,
                    columnNumber: 34
                }, this),
                t("common.adding") || "Adding..."
            ]
        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/projects/add-project-feature-modal.tsx",
                    lineNumber: 454,
                    columnNumber: 121
                }, this),
                t("projects.features.addTitle") || "Add Feature"
            ]
        }, void 0, true);
        $[90] = mutation.isPending;
        $[91] = t;
        $[92] = t43;
    } else {
        t43 = $[92];
    }
    let t44;
    if ($[93] !== mutation.isPending || $[94] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "submit",
            className: "bg-blue-600 hover:bg-blue-700 text-white gap-2",
            disabled: mutation.isPending,
            children: t43
        }, void 0, false, {
            fileName: "[project]/src/components/modals/projects/add-project-feature-modal.tsx",
            lineNumber: 463,
            columnNumber: 11
        }, this);
        $[93] = mutation.isPending;
        $[94] = t43;
        $[95] = t44;
    } else {
        t44 = $[95];
    }
    let t45;
    if ($[96] !== t42 || $[97] !== t44) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-2 justify-end",
            children: [
                t42,
                t44
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/projects/add-project-feature-modal.tsx",
            lineNumber: 472,
            columnNumber: 11
        }, this);
        $[96] = t42;
        $[97] = t44;
        $[98] = t45;
    } else {
        t45 = $[98];
    }
    let t46;
    if ($[99] !== t40 || $[100] !== t45) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3 pt-3 border-t border-gray-200",
            children: [
                t40,
                t45
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/projects/add-project-feature-modal.tsx",
            lineNumber: 481,
            columnNumber: 11
        }, this);
        $[99] = t40;
        $[100] = t45;
        $[101] = t46;
    } else {
        t46 = $[101];
    }
    let t47;
    if ($[102] !== t10 || $[103] !== t16 || $[104] !== t25 || $[105] !== t35 || $[106] !== t46 || $[107] !== t9) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: t9,
            className: "space-y-4 px-1",
            children: [
                t10,
                t16,
                t25,
                t35,
                t46
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/projects/add-project-feature-modal.tsx",
            lineNumber: 490,
            columnNumber: 11
        }, this);
        $[102] = t10;
        $[103] = t16;
        $[104] = t25;
        $[105] = t35;
        $[106] = t46;
        $[107] = t9;
        $[108] = t47;
    } else {
        t47 = $[108];
    }
    let t48;
    if ($[109] !== handleClose || $[110] !== isOpen || $[111] !== t47 || $[112] !== t8) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
            isOpen: isOpen,
            onClose: handleClose,
            title: t8,
            size: "md",
            showCloseButton: false,
            scrollable: true,
            children: t47
        }, void 0, false, {
            fileName: "[project]/src/components/modals/projects/add-project-feature-modal.tsx",
            lineNumber: 503,
            columnNumber: 11
        }, this);
        $[109] = handleClose;
        $[110] = isOpen;
        $[111] = t47;
        $[112] = t8;
        $[113] = t48;
    } else {
        t48 = $[113];
    }
    return t48;
}
_s(AddProjectFeatureModal, "c97D0GnXtnYgb5iJtbMqNC6yu60=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$add$2d$project$2d$feature$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAddProjectFeatureData"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
_c = AddProjectFeatureModal;
var _c;
__turbopack_context__.k.register(_c, "AddProjectFeatureModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/modals/projects/delete-feature-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DeleteFeatureModal",
    ()=>DeleteFeatureModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/modal.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function DeleteFeatureModal(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "ba37c7628ba0778980eb7b8d7c7fc496461b803f1ba623c638c9a5d67dce2308") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ba37c7628ba0778980eb7b8d7c7fc496461b803f1ba623c638c9a5d67dce2308";
    }
    const { isOpen, onClose, onConfirm, feature, isDeleting: t1 } = t0;
    const isDeleting = t1 === undefined ? false : t1;
    const t2 = feature ? `Are you sure you want to delete "${feature.feature_name}"? This action cannot be undone.` : "Are you sure you want to delete this feature? This action cannot be undone.";
    const t3 = isDeleting ? "Deleting..." : "Delete";
    let t4;
    if ($[1] !== isDeleting || $[2] !== isOpen || $[3] !== onClose || $[4] !== onConfirm || $[5] !== t2 || $[6] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfirmModal"], {
            isOpen: isOpen,
            onClose: onClose,
            onConfirm: onConfirm,
            title: "Delete Feature",
            description: t2,
            confirmText: t3,
            cancelText: "Cancel",
            variant: "destructive",
            isLoading: isDeleting
        }, void 0, false, {
            fileName: "[project]/src/components/modals/projects/delete-feature-modal.tsx",
            lineNumber: 39,
            columnNumber: 10
        }, this);
        $[1] = isDeleting;
        $[2] = isOpen;
        $[3] = onClose;
        $[4] = onConfirm;
        $[5] = t2;
        $[6] = t3;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    return t4;
}
_c = DeleteFeatureModal;
var _c;
__turbopack_context__.k.register(_c, "DeleteFeatureModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/projects/[id]/components/tabs/FeaturesTab.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FeaturesTab",
    ()=>FeaturesTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/checkbox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/api-client.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$projects$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/projects.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$projects$2f$add$2d$project$2d$feature$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/modals/projects/add-project-feature-modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$projects$2f$delete$2d$feature$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/modals/projects/delete-feature-modal.tsx [app-client] (ecmascript)");
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
;
;
function FeaturesTab(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(38);
    if ($[0] !== "dc01d0451677968775a302bd91f658c7c61751c060a00f21b7ba9975cb1393b6") {
        for(let $i = 0; $i < 38; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "dc01d0451677968775a302bd91f658c7c61751c060a00f21b7ba9975cb1393b6";
    }
    const { projectId, token, features } = t0;
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [selectedFeatures, setSelectedFeatures] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [isAddFeatureModalOpen, setIsAddFeatureModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [featureToDelete, setFeatureToDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isDeleteFeatureModalOpen, setIsDeleteFeatureModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t2;
    if ($[2] !== projectId || $[3] !== token) {
        t2 = (featureId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$projects$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteProjectFeature"])(projectId, featureId, token);
        $[2] = projectId;
        $[3] = token;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== projectId || $[6] !== queryClient || $[7] !== t) {
        t3 = ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("projects.messages.featureDeleteSuccess"));
            queryClient.invalidateQueries({
                queryKey: [
                    "projectDetails",
                    projectId.toString()
                ]
            });
            setIsDeleteFeatureModalOpen(false);
            setFeatureToDelete(null);
        };
        $[5] = projectId;
        $[6] = queryClient;
        $[7] = t;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] !== t) {
        t4 = (error)=>{
            const axiosError = error;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(axiosError?.response?.data?.message || t("projects.messages.featureDeleteFailed"));
        };
        $[9] = t;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== t2 || $[12] !== t3 || $[13] !== t4) {
        t5 = {
            mutationFn: t2,
            onSuccess: t3,
            onError: t4
        };
        $[11] = t2;
        $[12] = t3;
        $[13] = t4;
        $[14] = t5;
    } else {
        t5 = $[14];
    }
    const deleteFeatureMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(t5);
    let t6;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "FeaturesTab[handleDeleteFeature]": (feature)=>{
                setFeatureToDelete(feature);
                setIsDeleteFeatureModalOpen(true);
            }
        })["FeaturesTab[handleDeleteFeature]"];
        $[15] = t6;
    } else {
        t6 = $[15];
    }
    const handleDeleteFeature = t6;
    let t7;
    if ($[16] !== deleteFeatureMutation || $[17] !== featureToDelete) {
        t7 = ({
            "FeaturesTab[confirmDeleteFeature]": ()=>{
                if (featureToDelete) {
                    deleteFeatureMutation.mutate(featureToDelete.feature_id);
                }
            }
        })["FeaturesTab[confirmDeleteFeature]"];
        $[16] = deleteFeatureMutation;
        $[17] = featureToDelete;
        $[18] = t7;
    } else {
        t7 = $[18];
    }
    const confirmDeleteFeature = t7;
    let t8;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-semibold",
            children: "Project Features"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/[id]/components/tabs/FeaturesTab.tsx",
            lineNumber: 135,
            columnNumber: 10
        }, this);
        $[19] = t8;
    } else {
        t8 = $[19];
    }
    let t9;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between mb-4",
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    className: "bg-[#008081] hover:bg-[#006666] text-white gap-2",
                    onClick: {
                        "FeaturesTab[<Button>.onClick]": ()=>setIsAddFeatureModalOpen(true)
                    }["FeaturesTab[<Button>.onClick]"],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/projects/[id]/components/tabs/FeaturesTab.tsx",
                            lineNumber: 144,
                            columnNumber: 43
                        }, this),
                        "Add New Project Feature"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/projects/[id]/components/tabs/FeaturesTab.tsx",
                    lineNumber: 142,
                    columnNumber: 70
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/[id]/components/tabs/FeaturesTab.tsx",
            lineNumber: 142,
            columnNumber: 10
        }, this);
        $[20] = t9;
    } else {
        t9 = $[20];
    }
    let t10;
    if ($[21] !== features || $[22] !== selectedFeatures) {
        t10 = features.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-12 text-gray-500",
            children: "No features available"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/[id]/components/tabs/FeaturesTab.tsx",
            lineNumber: 151,
            columnNumber: 35
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "overflow-x-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                        className: "border-b border-gray-200 bg-gray-50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "px-3 py-3 text-start",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Checkbox"], {}, void 0, false, {
                                        fileName: "[project]/src/app/admin/projects/[id]/components/tabs/FeaturesTab.tsx",
                                        lineNumber: 151,
                                        columnNumber: 269
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/projects/[id]/components/tabs/FeaturesTab.tsx",
                                    lineNumber: 151,
                                    columnNumber: 232
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "px-3 py-3 text-start text-xs font-semibold text-gray-900",
                                    children: "Feature Name"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/projects/[id]/components/tabs/FeaturesTab.tsx",
                                    lineNumber: 151,
                                    columnNumber: 286
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "px-3 py-3 text-start text-xs font-semibold text-gray-900",
                                    children: "Value"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/projects/[id]/components/tabs/FeaturesTab.tsx",
                                    lineNumber: 151,
                                    columnNumber: 376
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "px-3 py-3 text-start text-xs font-semibold text-gray-900",
                                    children: "Description"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/projects/[id]/components/tabs/FeaturesTab.tsx",
                                    lineNumber: 151,
                                    columnNumber: 459
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "px-3 py-3 text-start text-xs font-semibold text-gray-900",
                                    children: "Is Amenity"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/projects/[id]/components/tabs/FeaturesTab.tsx",
                                    lineNumber: 151,
                                    columnNumber: 548
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "px-3 py-3 text-start text-xs font-semibold text-gray-900",
                                    children: "Actions"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/projects/[id]/components/tabs/FeaturesTab.tsx",
                                    lineNumber: 151,
                                    columnNumber: 636
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/projects/[id]/components/tabs/FeaturesTab.tsx",
                            lineNumber: 151,
                            columnNumber: 228
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/projects/[id]/components/tabs/FeaturesTab.tsx",
                        lineNumber: 151,
                        columnNumber: 173
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: features.map({
                            "FeaturesTab[features.map()]": (feature_0, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "border-b border-gray-200 hover:bg-gray-50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Checkbox"], {
                                                checked: selectedFeatures.includes(feature_0.feature_id),
                                                onCheckedChange: {
                                                    "FeaturesTab[features.map() > <Checkbox>.onCheckedChange]": (checked)=>{
                                                        if (checked) {
                                                            setSelectedFeatures([
                                                                ...selectedFeatures,
                                                                feature_0.feature_id
                                                            ]);
                                                        } else {
                                                            setSelectedFeatures(selectedFeatures.filter({
                                                                "FeaturesTab[features.map() > <Checkbox>.onCheckedChange > selectedFeatures.filter()]": (id)=>id !== feature_0.feature_id
                                                            }["FeaturesTab[features.map() > <Checkbox>.onCheckedChange > selectedFeatures.filter()]"]));
                                                        }
                                                    }
                                                }["FeaturesTab[features.map() > <Checkbox>.onCheckedChange]"]
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/projects/[id]/components/tabs/FeaturesTab.tsx",
                                                lineNumber: 152,
                                                columnNumber: 205
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/projects/[id]/components/tabs/FeaturesTab.tsx",
                                            lineNumber: 152,
                                            columnNumber: 179
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-3 text-sm text-gray-900",
                                            children: feature_0.feature_name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/projects/[id]/components/tabs/FeaturesTab.tsx",
                                            lineNumber: 162,
                                            columnNumber: 87
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-3 text-sm text-gray-600",
                                            children: feature_0.value
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/projects/[id]/components/tabs/FeaturesTab.tsx",
                                            lineNumber: 162,
                                            columnNumber: 164
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-3 text-sm text-gray-600",
                                            children: feature_0.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/projects/[id]/components/tabs/FeaturesTab.tsx",
                                            lineNumber: 162,
                                            columnNumber: 234
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                className: feature_0.is_amenity ? "bg-green-50 text-green-700" : "bg-gray-50 text-gray-700",
                                                children: feature_0.is_amenity ? "Yes" : "No"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/projects/[id]/components/tabs/FeaturesTab.tsx",
                                                lineNumber: 162,
                                                columnNumber: 336
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/projects/[id]/components/tabs/FeaturesTab.tsx",
                                            lineNumber: 162,
                                            columnNumber: 310
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-3 text-sm text-gray-500",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "ghost",
                                                        size: "sm",
                                                        className: "h-8 w-8 p-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/projects/[id]/components/tabs/FeaturesTab.tsx",
                                                            lineNumber: 162,
                                                            columnNumber: 633
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/projects/[id]/components/tabs/FeaturesTab.tsx",
                                                        lineNumber: 162,
                                                        columnNumber: 575
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "ghost",
                                                        size: "sm",
                                                        className: "h-8 w-8 p-0 text-red-600 hover:text-red-700",
                                                        onClick: {
                                                            "FeaturesTab[features.map() > <Button>.onClick]": ()=>handleDeleteFeature(feature_0)
                                                        }["FeaturesTab[features.map() > <Button>.onClick]"],
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/projects/[id]/components/tabs/FeaturesTab.tsx",
                                                            lineNumber: 164,
                                                            columnNumber: 72
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/projects/[id]/components/tabs/FeaturesTab.tsx",
                                                        lineNumber: 162,
                                                        columnNumber: 670
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/projects/[id]/components/tabs/FeaturesTab.tsx",
                                                lineNumber: 162,
                                                columnNumber: 534
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/projects/[id]/components/tabs/FeaturesTab.tsx",
                                            lineNumber: 162,
                                            columnNumber: 486
                                        }, this)
                                    ]
                                }, `feat-${feature_0.feature_id || index}-${index}`, true, {
                                    fileName: "[project]/src/app/admin/projects/[id]/components/tabs/FeaturesTab.tsx",
                                    lineNumber: 152,
                                    columnNumber: 66
                                }, this)
                        }["FeaturesTab[features.map()]"])
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/projects/[id]/components/tabs/FeaturesTab.tsx",
                        lineNumber: 151,
                        columnNumber: 734
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/projects/[id]/components/tabs/FeaturesTab.tsx",
                lineNumber: 151,
                columnNumber: 147
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/[id]/components/tabs/FeaturesTab.tsx",
            lineNumber: 151,
            columnNumber: 114
        }, this);
        $[21] = features;
        $[22] = selectedFeatures;
        $[23] = t10;
    } else {
        t10 = $[23];
    }
    let t11;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = ({
            "FeaturesTab[<AddProjectFeatureModal>.onClose]": ()=>setIsAddFeatureModalOpen(false)
        })["FeaturesTab[<AddProjectFeatureModal>.onClose]"];
        $[24] = t11;
    } else {
        t11 = $[24];
    }
    let t12;
    if ($[25] !== isAddFeatureModalOpen || $[26] !== projectId) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$projects$2f$add$2d$project$2d$feature$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddProjectFeatureModal"], {
            isOpen: isAddFeatureModalOpen,
            onClose: t11,
            projectId: projectId
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/[id]/components/tabs/FeaturesTab.tsx",
            lineNumber: 183,
            columnNumber: 11
        }, this);
        $[25] = isAddFeatureModalOpen;
        $[26] = projectId;
        $[27] = t12;
    } else {
        t12 = $[27];
    }
    let t13;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = ({
            "FeaturesTab[<DeleteFeatureModal>.onClose]": ()=>{
                setIsDeleteFeatureModalOpen(false);
                setFeatureToDelete(null);
            }
        })["FeaturesTab[<DeleteFeatureModal>.onClose]"];
        $[28] = t13;
    } else {
        t13 = $[28];
    }
    let t14;
    if ($[29] !== confirmDeleteFeature || $[30] !== deleteFeatureMutation.isPending || $[31] !== featureToDelete || $[32] !== isDeleteFeatureModalOpen) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$projects$2f$delete$2d$feature$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeleteFeatureModal"], {
            isOpen: isDeleteFeatureModalOpen,
            onClose: t13,
            onConfirm: confirmDeleteFeature,
            feature: featureToDelete,
            isDeleting: deleteFeatureMutation.isPending
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/[id]/components/tabs/FeaturesTab.tsx",
            lineNumber: 204,
            columnNumber: 11
        }, this);
        $[29] = confirmDeleteFeature;
        $[30] = deleteFeatureMutation.isPending;
        $[31] = featureToDelete;
        $[32] = isDeleteFeatureModalOpen;
        $[33] = t14;
    } else {
        t14 = $[33];
    }
    let t15;
    if ($[34] !== t10 || $[35] !== t12 || $[36] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t9,
                t10,
                t12,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/[id]/components/tabs/FeaturesTab.tsx",
            lineNumber: 215,
            columnNumber: 11
        }, this);
        $[34] = t10;
        $[35] = t12;
        $[36] = t14;
        $[37] = t15;
    } else {
        t15 = $[37];
    }
    return t15;
}
_s(FeaturesTab, "2Z0gHHrr5An5mCweiHqNj0xD0i4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
_c = FeaturesTab;
var _c;
__turbopack_context__.k.register(_c, "FeaturesTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/projects/[id]/components/tabs/FeaturesTab.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/admin/projects/[id]/components/tabs/FeaturesTab.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_bf09910d._.js.map