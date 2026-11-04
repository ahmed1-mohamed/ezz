(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/rich-text-editor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RichTextEditor",
    ()=>RichTextEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tiptap/react/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$starter$2d$kit$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tiptap/starter-kit/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$underline$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tiptap/extension-underline/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$text$2d$align$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tiptap/extension-text-align/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$text$2d$style$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tiptap/extension-text-style/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$color$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tiptap/extension-color/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$highlight$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tiptap/extension-highlight/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$link$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tiptap/extension-link/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$image$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tiptap/extension-image/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bold$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bold$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bold.js [app-client] (ecmascript) <export default as Bold>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$italic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Italic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/italic.js [app-client] (ecmascript) <export default as Italic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$underline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Underline$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/underline.js [app-client] (ecmascript) <export default as Underline>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$strikethrough$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Strikethrough$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/strikethrough.js [app-client] (ecmascript) <export default as Strikethrough>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list.js [app-client] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$ordered$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListOrdered$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list-ordered.js [app-client] (ecmascript) <export default as ListOrdered>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$start$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/text-align-start.js [app-client] (ecmascript) <export default as AlignLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$center$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignCenter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/text-align-center.js [app-client] (ecmascript) <export default as AlignCenter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$end$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/text-align-end.js [app-client] (ecmascript) <export default as AlignRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$justify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignJustify$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/text-align-justify.js [app-client] (ecmascript) <export default as AlignJustify>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heading$2d$1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heading1$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heading-1.js [app-client] (ecmascript) <export default as Heading1>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heading$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heading2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heading-2.js [app-client] (ecmascript) <export default as Heading2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heading$2d$3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heading3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heading-3.js [app-client] (ecmascript) <export default as Heading3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/link-2.js [app-client] (ecmascript) <export default as Link2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code.js [app-client] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/quote.js [app-client] (ecmascript) <export default as Quote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$undo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Undo$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/undo.js [app-client] (ecmascript) <export default as Undo>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$redo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Redo$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/redo.js [app-client] (ecmascript) <export default as Redo>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
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
function RichTextEditor(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(163);
    if ($[0] !== "589453067f670271a8d40b6eb57351547c5d0fa43ce1575d15d838b6cbc538e3") {
        for(let $i = 0; $i < 163; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "589453067f670271a8d40b6eb57351547c5d0fa43ce1575d15d838b6cbc538e3";
    }
    const { content, onChange, placeholder: t1, error } = t0;
    t1 === undefined ? "Write something..." : t1;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$starter$2d$kit$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].configure({
            underline: false,
            link: false
        });
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    let t3;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$text$2d$align$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].configure({
            types: [
                "heading",
                "paragraph"
            ]
        });
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    let t4;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = [
            t2,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$underline$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            t3,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$text$2d$style$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextStyle"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$text$2d$style$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$highlight$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].configure({
                multicolor: true
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$link$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].configure({
                openOnClick: false
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$image$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
        ];
        $[3] = t4;
    } else {
        t4 = $[3];
    }
    let t5;
    if ($[4] !== onChange) {
        t5 = (t6)=>{
            const { editor } = t6;
            onChange(editor.getHTML());
        };
        $[4] = onChange;
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            attributes: {
                class: "prose prose-sm max-w-none focus:outline-none min-h-[200px] p-4"
            }
        };
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    let t7;
    if ($[7] !== content || $[8] !== t5) {
        t7 = {
            extensions: t4,
            content,
            immediatelyRender: false,
            onUpdate: t5,
            editorProps: t6
        };
        $[7] = content;
        $[8] = t5;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    const editor_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useEditor"])(t7);
    let t8;
    let t9;
    if ($[10] !== content || $[11] !== editor_0) {
        t8 = ({
            "RichTextEditor[useEffect()]": ()=>{
                if (editor_0 && content !== undefined && editor_0.getHTML() !== content) {
                    editor_0.commands.setContent(content || "");
                }
            }
        })["RichTextEditor[useEffect()]"];
        t9 = [
            editor_0,
            content
        ];
        $[10] = content;
        $[11] = editor_0;
        $[12] = t8;
        $[13] = t9;
    } else {
        t8 = $[12];
        t9 = $[13];
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](t8, t9);
    if (!editor_0) {
        return null;
    }
    let t10;
    if ($[14] !== editor_0 || $[15] !== t) {
        t10 = ({
            "RichTextEditor[addLink]": ()=>{
                const url = window.prompt(t("common.richText.enterUrl"));
                if (url) {
                    editor_0.chain().focus().setLink({
                        href: url
                    }).run();
                }
            }
        })["RichTextEditor[addLink]"];
        $[14] = editor_0;
        $[15] = t;
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    const addLink = t10;
    let t11;
    if ($[17] !== editor_0 || $[18] !== t) {
        t11 = ({
            "RichTextEditor[addImage]": ()=>{
                const url_0 = window.prompt(t("common.richText.enterImageUrl"));
                if (url_0) {
                    editor_0.chain().focus().setImage({
                        src: url_0
                    }).run();
                }
            }
        })["RichTextEditor[addImage]"];
        $[17] = editor_0;
        $[18] = t;
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    const addImage = t11;
    const t12 = error || undefined;
    const t13 = `mt-1 rounded-lg border overflow-hidden ${error ? "border-red-500 ring-1 ring-red-500" : "border-gray-300"}`;
    let t14;
    if ($[20] !== editor_0) {
        t14 = ({
            "RichTextEditor[<Button>.onClick]": ()=>editor_0.chain().focus().toggleBold().run()
        })["RichTextEditor[<Button>.onClick]"];
        $[20] = editor_0;
        $[21] = t14;
    } else {
        t14 = $[21];
    }
    const t15 = editor_0.isActive("bold") ? "bg-gray-200" : "";
    let t16;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bold$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bold$3e$__["Bold"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/rich-text-editor.tsx",
            lineNumber: 187,
            columnNumber: 11
        }, this);
        $[22] = t16;
    } else {
        t16 = $[22];
    }
    let t17;
    if ($[23] !== t14 || $[24] !== t15) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: t14,
            className: t15,
            children: t16
        }, void 0, false, {
            fileName: "[project]/src/components/ui/rich-text-editor.tsx",
            lineNumber: 194,
            columnNumber: 11
        }, this);
        $[23] = t14;
        $[24] = t15;
        $[25] = t17;
    } else {
        t17 = $[25];
    }
    let t18;
    if ($[26] !== editor_0) {
        t18 = ({
            "RichTextEditor[<Button>.onClick]": ()=>editor_0.chain().focus().toggleItalic().run()
        })["RichTextEditor[<Button>.onClick]"];
        $[26] = editor_0;
        $[27] = t18;
    } else {
        t18 = $[27];
    }
    const t19 = editor_0.isActive("italic") ? "bg-gray-200" : "";
    let t20;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$italic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Italic$3e$__["Italic"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/rich-text-editor.tsx",
            lineNumber: 214,
            columnNumber: 11
        }, this);
        $[28] = t20;
    } else {
        t20 = $[28];
    }
    let t21;
    if ($[29] !== t18 || $[30] !== t19) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: t18,
            className: t19,
            children: t20
        }, void 0, false, {
            fileName: "[project]/src/components/ui/rich-text-editor.tsx",
            lineNumber: 221,
            columnNumber: 11
        }, this);
        $[29] = t18;
        $[30] = t19;
        $[31] = t21;
    } else {
        t21 = $[31];
    }
    let t22;
    if ($[32] !== editor_0) {
        t22 = ({
            "RichTextEditor[<Button>.onClick]": ()=>editor_0.chain().focus().toggleUnderline().run()
        })["RichTextEditor[<Button>.onClick]"];
        $[32] = editor_0;
        $[33] = t22;
    } else {
        t22 = $[33];
    }
    const t23 = editor_0.isActive("underline") ? "bg-gray-200" : "";
    let t24;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$underline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Underline$3e$__["Underline"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/rich-text-editor.tsx",
            lineNumber: 241,
            columnNumber: 11
        }, this);
        $[34] = t24;
    } else {
        t24 = $[34];
    }
    let t25;
    if ($[35] !== t22 || $[36] !== t23) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: t22,
            className: t23,
            children: t24
        }, void 0, false, {
            fileName: "[project]/src/components/ui/rich-text-editor.tsx",
            lineNumber: 248,
            columnNumber: 11
        }, this);
        $[35] = t22;
        $[36] = t23;
        $[37] = t25;
    } else {
        t25 = $[37];
    }
    let t26;
    if ($[38] !== editor_0) {
        t26 = ({
            "RichTextEditor[<Button>.onClick]": ()=>editor_0.chain().focus().toggleStrike().run()
        })["RichTextEditor[<Button>.onClick]"];
        $[38] = editor_0;
        $[39] = t26;
    } else {
        t26 = $[39];
    }
    const t27 = editor_0.isActive("strike") ? "bg-gray-200" : "";
    let t28;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$strikethrough$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Strikethrough$3e$__["Strikethrough"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/rich-text-editor.tsx",
            lineNumber: 268,
            columnNumber: 11
        }, this);
        $[40] = t28;
    } else {
        t28 = $[40];
    }
    let t29;
    if ($[41] !== t26 || $[42] !== t27) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: t26,
            className: t27,
            children: t28
        }, void 0, false, {
            fileName: "[project]/src/components/ui/rich-text-editor.tsx",
            lineNumber: 275,
            columnNumber: 11
        }, this);
        $[41] = t26;
        $[42] = t27;
        $[43] = t29;
    } else {
        t29 = $[43];
    }
    let t30;
    if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-px h-6 bg-gray-300 mx-1"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/rich-text-editor.tsx",
            lineNumber: 284,
            columnNumber: 11
        }, this);
        $[44] = t30;
    } else {
        t30 = $[44];
    }
    let t31;
    if ($[45] !== editor_0) {
        t31 = ({
            "RichTextEditor[<Button>.onClick]": ()=>editor_0.chain().focus().toggleHeading({
                    level: 1
                }).run()
        })["RichTextEditor[<Button>.onClick]"];
        $[45] = editor_0;
        $[46] = t31;
    } else {
        t31 = $[46];
    }
    const t32 = editor_0.isActive("heading", {
        level: 1
    }) ? "bg-gray-200" : "";
    let t33;
    if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heading$2d$1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heading1$3e$__["Heading1"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/rich-text-editor.tsx",
            lineNumber: 306,
            columnNumber: 11
        }, this);
        $[47] = t33;
    } else {
        t33 = $[47];
    }
    let t34;
    if ($[48] !== t31 || $[49] !== t32) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: t31,
            className: t32,
            children: t33
        }, void 0, false, {
            fileName: "[project]/src/components/ui/rich-text-editor.tsx",
            lineNumber: 313,
            columnNumber: 11
        }, this);
        $[48] = t31;
        $[49] = t32;
        $[50] = t34;
    } else {
        t34 = $[50];
    }
    let t35;
    if ($[51] !== editor_0) {
        t35 = ({
            "RichTextEditor[<Button>.onClick]": ()=>editor_0.chain().focus().toggleHeading({
                    level: 2
                }).run()
        })["RichTextEditor[<Button>.onClick]"];
        $[51] = editor_0;
        $[52] = t35;
    } else {
        t35 = $[52];
    }
    const t36 = editor_0.isActive("heading", {
        level: 2
    }) ? "bg-gray-200" : "";
    let t37;
    if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heading$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heading2$3e$__["Heading2"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/rich-text-editor.tsx",
            lineNumber: 337,
            columnNumber: 11
        }, this);
        $[53] = t37;
    } else {
        t37 = $[53];
    }
    let t38;
    if ($[54] !== t35 || $[55] !== t36) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: t35,
            className: t36,
            children: t37
        }, void 0, false, {
            fileName: "[project]/src/components/ui/rich-text-editor.tsx",
            lineNumber: 344,
            columnNumber: 11
        }, this);
        $[54] = t35;
        $[55] = t36;
        $[56] = t38;
    } else {
        t38 = $[56];
    }
    let t39;
    if ($[57] !== editor_0) {
        t39 = ({
            "RichTextEditor[<Button>.onClick]": ()=>editor_0.chain().focus().toggleHeading({
                    level: 3
                }).run()
        })["RichTextEditor[<Button>.onClick]"];
        $[57] = editor_0;
        $[58] = t39;
    } else {
        t39 = $[58];
    }
    const t40 = editor_0.isActive("heading", {
        level: 3
    }) ? "bg-gray-200" : "";
    let t41;
    if ($[59] === Symbol.for("react.memo_cache_sentinel")) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heading$2d$3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heading3$3e$__["Heading3"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/rich-text-editor.tsx",
            lineNumber: 368,
            columnNumber: 11
        }, this);
        $[59] = t41;
    } else {
        t41 = $[59];
    }
    let t42;
    if ($[60] !== t39 || $[61] !== t40) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: t39,
            className: t40,
            children: t41
        }, void 0, false, {
            fileName: "[project]/src/components/ui/rich-text-editor.tsx",
            lineNumber: 375,
            columnNumber: 11
        }, this);
        $[60] = t39;
        $[61] = t40;
        $[62] = t42;
    } else {
        t42 = $[62];
    }
    let t43;
    if ($[63] === Symbol.for("react.memo_cache_sentinel")) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-px h-6 bg-gray-300 mx-1"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/rich-text-editor.tsx",
            lineNumber: 384,
            columnNumber: 11
        }, this);
        $[63] = t43;
    } else {
        t43 = $[63];
    }
    let t44;
    if ($[64] !== editor_0) {
        t44 = ({
            "RichTextEditor[<Button>.onClick]": ()=>editor_0.chain().focus().toggleBulletList().run()
        })["RichTextEditor[<Button>.onClick]"];
        $[64] = editor_0;
        $[65] = t44;
    } else {
        t44 = $[65];
    }
    const t45 = editor_0.isActive("bulletList") ? "bg-gray-200" : "";
    let t46;
    if ($[66] === Symbol.for("react.memo_cache_sentinel")) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/rich-text-editor.tsx",
            lineNumber: 402,
            columnNumber: 11
        }, this);
        $[66] = t46;
    } else {
        t46 = $[66];
    }
    let t47;
    if ($[67] !== t44 || $[68] !== t45) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: t44,
            className: t45,
            children: t46
        }, void 0, false, {
            fileName: "[project]/src/components/ui/rich-text-editor.tsx",
            lineNumber: 409,
            columnNumber: 11
        }, this);
        $[67] = t44;
        $[68] = t45;
        $[69] = t47;
    } else {
        t47 = $[69];
    }
    let t48;
    if ($[70] !== editor_0) {
        t48 = ({
            "RichTextEditor[<Button>.onClick]": ()=>editor_0.chain().focus().toggleOrderedList().run()
        })["RichTextEditor[<Button>.onClick]"];
        $[70] = editor_0;
        $[71] = t48;
    } else {
        t48 = $[71];
    }
    const t49 = editor_0.isActive("orderedList") ? "bg-gray-200" : "";
    let t50;
    if ($[72] === Symbol.for("react.memo_cache_sentinel")) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$ordered$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListOrdered$3e$__["ListOrdered"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/rich-text-editor.tsx",
            lineNumber: 429,
            columnNumber: 11
        }, this);
        $[72] = t50;
    } else {
        t50 = $[72];
    }
    let t51;
    if ($[73] !== t48 || $[74] !== t49) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: t48,
            className: t49,
            children: t50
        }, void 0, false, {
            fileName: "[project]/src/components/ui/rich-text-editor.tsx",
            lineNumber: 436,
            columnNumber: 11
        }, this);
        $[73] = t48;
        $[74] = t49;
        $[75] = t51;
    } else {
        t51 = $[75];
    }
    let t52;
    if ($[76] === Symbol.for("react.memo_cache_sentinel")) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-px h-6 bg-gray-300 mx-1"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/rich-text-editor.tsx",
            lineNumber: 445,
            columnNumber: 11
        }, this);
        $[76] = t52;
    } else {
        t52 = $[76];
    }
    let t53;
    if ($[77] !== editor_0) {
        t53 = ({
            "RichTextEditor[<Button>.onClick]": ()=>editor_0.chain().focus().setTextAlign("left").run()
        })["RichTextEditor[<Button>.onClick]"];
        $[77] = editor_0;
        $[78] = t53;
    } else {
        t53 = $[78];
    }
    const t54 = editor_0.isActive({
        textAlign: "left"
    }) ? "bg-gray-200" : "";
    let t55;
    if ($[79] === Symbol.for("react.memo_cache_sentinel")) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$start$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignLeft$3e$__["AlignLeft"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/rich-text-editor.tsx",
            lineNumber: 465,
            columnNumber: 11
        }, this);
        $[79] = t55;
    } else {
        t55 = $[79];
    }
    let t56;
    if ($[80] !== t53 || $[81] !== t54) {
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: t53,
            className: t54,
            children: t55
        }, void 0, false, {
            fileName: "[project]/src/components/ui/rich-text-editor.tsx",
            lineNumber: 472,
            columnNumber: 11
        }, this);
        $[80] = t53;
        $[81] = t54;
        $[82] = t56;
    } else {
        t56 = $[82];
    }
    let t57;
    if ($[83] !== editor_0) {
        t57 = ({
            "RichTextEditor[<Button>.onClick]": ()=>editor_0.chain().focus().setTextAlign("center").run()
        })["RichTextEditor[<Button>.onClick]"];
        $[83] = editor_0;
        $[84] = t57;
    } else {
        t57 = $[84];
    }
    const t58 = editor_0.isActive({
        textAlign: "center"
    }) ? "bg-gray-200" : "";
    let t59;
    if ($[85] === Symbol.for("react.memo_cache_sentinel")) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$center$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignCenter$3e$__["AlignCenter"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/rich-text-editor.tsx",
            lineNumber: 494,
            columnNumber: 11
        }, this);
        $[85] = t59;
    } else {
        t59 = $[85];
    }
    let t60;
    if ($[86] !== t57 || $[87] !== t58) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: t57,
            className: t58,
            children: t59
        }, void 0, false, {
            fileName: "[project]/src/components/ui/rich-text-editor.tsx",
            lineNumber: 501,
            columnNumber: 11
        }, this);
        $[86] = t57;
        $[87] = t58;
        $[88] = t60;
    } else {
        t60 = $[88];
    }
    let t61;
    if ($[89] !== editor_0) {
        t61 = ({
            "RichTextEditor[<Button>.onClick]": ()=>editor_0.chain().focus().setTextAlign("right").run()
        })["RichTextEditor[<Button>.onClick]"];
        $[89] = editor_0;
        $[90] = t61;
    } else {
        t61 = $[90];
    }
    const t62 = editor_0.isActive({
        textAlign: "right"
    }) ? "bg-gray-200" : "";
    let t63;
    if ($[91] === Symbol.for("react.memo_cache_sentinel")) {
        t63 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$end$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignRight$3e$__["AlignRight"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/rich-text-editor.tsx",
            lineNumber: 523,
            columnNumber: 11
        }, this);
        $[91] = t63;
    } else {
        t63 = $[91];
    }
    let t64;
    if ($[92] !== t61 || $[93] !== t62) {
        t64 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: t61,
            className: t62,
            children: t63
        }, void 0, false, {
            fileName: "[project]/src/components/ui/rich-text-editor.tsx",
            lineNumber: 530,
            columnNumber: 11
        }, this);
        $[92] = t61;
        $[93] = t62;
        $[94] = t64;
    } else {
        t64 = $[94];
    }
    let t65;
    if ($[95] !== editor_0) {
        t65 = ({
            "RichTextEditor[<Button>.onClick]": ()=>editor_0.chain().focus().setTextAlign("justify").run()
        })["RichTextEditor[<Button>.onClick]"];
        $[95] = editor_0;
        $[96] = t65;
    } else {
        t65 = $[96];
    }
    const t66 = editor_0.isActive({
        textAlign: "justify"
    }) ? "bg-gray-200" : "";
    let t67;
    if ($[97] === Symbol.for("react.memo_cache_sentinel")) {
        t67 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$justify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignJustify$3e$__["AlignJustify"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/rich-text-editor.tsx",
            lineNumber: 552,
            columnNumber: 11
        }, this);
        $[97] = t67;
    } else {
        t67 = $[97];
    }
    let t68;
    if ($[98] !== t65 || $[99] !== t66) {
        t68 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: t65,
            className: t66,
            children: t67
        }, void 0, false, {
            fileName: "[project]/src/components/ui/rich-text-editor.tsx",
            lineNumber: 559,
            columnNumber: 11
        }, this);
        $[98] = t65;
        $[99] = t66;
        $[100] = t68;
    } else {
        t68 = $[100];
    }
    let t69;
    if ($[101] === Symbol.for("react.memo_cache_sentinel")) {
        t69 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-px h-6 bg-gray-300 mx-1"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/rich-text-editor.tsx",
            lineNumber: 568,
            columnNumber: 11
        }, this);
        $[101] = t69;
    } else {
        t69 = $[101];
    }
    let t70;
    if ($[102] !== editor_0) {
        t70 = ({
            "RichTextEditor[<Button>.onClick]": ()=>editor_0.chain().focus().toggleCodeBlock().run()
        })["RichTextEditor[<Button>.onClick]"];
        $[102] = editor_0;
        $[103] = t70;
    } else {
        t70 = $[103];
    }
    const t71 = editor_0.isActive("codeBlock") ? "bg-gray-200" : "";
    let t72;
    if ($[104] === Symbol.for("react.memo_cache_sentinel")) {
        t72 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/rich-text-editor.tsx",
            lineNumber: 586,
            columnNumber: 11
        }, this);
        $[104] = t72;
    } else {
        t72 = $[104];
    }
    let t73;
    if ($[105] !== t70 || $[106] !== t71) {
        t73 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: t70,
            className: t71,
            children: t72
        }, void 0, false, {
            fileName: "[project]/src/components/ui/rich-text-editor.tsx",
            lineNumber: 593,
            columnNumber: 11
        }, this);
        $[105] = t70;
        $[106] = t71;
        $[107] = t73;
    } else {
        t73 = $[107];
    }
    let t74;
    if ($[108] !== editor_0) {
        t74 = ({
            "RichTextEditor[<Button>.onClick]": ()=>editor_0.chain().focus().toggleBlockquote().run()
        })["RichTextEditor[<Button>.onClick]"];
        $[108] = editor_0;
        $[109] = t74;
    } else {
        t74 = $[109];
    }
    const t75 = editor_0.isActive("blockquote") ? "bg-gray-200" : "";
    let t76;
    if ($[110] === Symbol.for("react.memo_cache_sentinel")) {
        t76 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__["Quote"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/rich-text-editor.tsx",
            lineNumber: 613,
            columnNumber: 11
        }, this);
        $[110] = t76;
    } else {
        t76 = $[110];
    }
    let t77;
    if ($[111] !== t74 || $[112] !== t75) {
        t77 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: t74,
            className: t75,
            children: t76
        }, void 0, false, {
            fileName: "[project]/src/components/ui/rich-text-editor.tsx",
            lineNumber: 620,
            columnNumber: 11
        }, this);
        $[111] = t74;
        $[112] = t75;
        $[113] = t77;
    } else {
        t77 = $[113];
    }
    let t78;
    if ($[114] === Symbol.for("react.memo_cache_sentinel")) {
        t78 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-px h-6 bg-gray-300 mx-1"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/rich-text-editor.tsx",
            lineNumber: 629,
            columnNumber: 11
        }, this);
        $[114] = t78;
    } else {
        t78 = $[114];
    }
    let t79;
    if ($[115] === Symbol.for("react.memo_cache_sentinel")) {
        t79 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__["Link2"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/rich-text-editor.tsx",
            lineNumber: 636,
            columnNumber: 11
        }, this);
        $[115] = t79;
    } else {
        t79 = $[115];
    }
    let t80;
    if ($[116] !== addLink) {
        t80 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: addLink,
            children: t79
        }, void 0, false, {
            fileName: "[project]/src/components/ui/rich-text-editor.tsx",
            lineNumber: 643,
            columnNumber: 11
        }, this);
        $[116] = addLink;
        $[117] = t80;
    } else {
        t80 = $[117];
    }
    let t81;
    if ($[118] === Symbol.for("react.memo_cache_sentinel")) {
        t81 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/rich-text-editor.tsx",
            lineNumber: 651,
            columnNumber: 11
        }, this);
        $[118] = t81;
    } else {
        t81 = $[118];
    }
    let t82;
    if ($[119] !== addImage) {
        t82 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: addImage,
            children: t81
        }, void 0, false, {
            fileName: "[project]/src/components/ui/rich-text-editor.tsx",
            lineNumber: 658,
            columnNumber: 11
        }, this);
        $[119] = addImage;
        $[120] = t82;
    } else {
        t82 = $[120];
    }
    let t83;
    if ($[121] === Symbol.for("react.memo_cache_sentinel")) {
        t83 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-px h-6 bg-gray-300 mx-1"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/rich-text-editor.tsx",
            lineNumber: 666,
            columnNumber: 11
        }, this);
        $[121] = t83;
    } else {
        t83 = $[121];
    }
    let t84;
    let t85;
    if ($[122] !== editor_0) {
        t84 = ({
            "RichTextEditor[<Button>.onClick]": ()=>editor_0.chain().focus().undo().run()
        })["RichTextEditor[<Button>.onClick]"];
        t85 = editor_0.can().undo();
        $[122] = editor_0;
        $[123] = t84;
        $[124] = t85;
    } else {
        t84 = $[123];
        t85 = $[124];
    }
    const t86 = !t85;
    let t87;
    if ($[125] === Symbol.for("react.memo_cache_sentinel")) {
        t87 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$undo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Undo$3e$__["Undo"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/rich-text-editor.tsx",
            lineNumber: 688,
            columnNumber: 11
        }, this);
        $[125] = t87;
    } else {
        t87 = $[125];
    }
    let t88;
    if ($[126] !== t84 || $[127] !== t86) {
        t88 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: t84,
            disabled: t86,
            children: t87
        }, void 0, false, {
            fileName: "[project]/src/components/ui/rich-text-editor.tsx",
            lineNumber: 695,
            columnNumber: 11
        }, this);
        $[126] = t84;
        $[127] = t86;
        $[128] = t88;
    } else {
        t88 = $[128];
    }
    let t89;
    let t90;
    if ($[129] !== editor_0) {
        t89 = ({
            "RichTextEditor[<Button>.onClick]": ()=>editor_0.chain().focus().redo().run()
        })["RichTextEditor[<Button>.onClick]"];
        t90 = editor_0.can().redo();
        $[129] = editor_0;
        $[130] = t89;
        $[131] = t90;
    } else {
        t89 = $[130];
        t90 = $[131];
    }
    const t91 = !t90;
    let t92;
    if ($[132] === Symbol.for("react.memo_cache_sentinel")) {
        t92 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$redo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Redo$3e$__["Redo"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/rich-text-editor.tsx",
            lineNumber: 719,
            columnNumber: 11
        }, this);
        $[132] = t92;
    } else {
        t92 = $[132];
    }
    let t93;
    if ($[133] !== t89 || $[134] !== t91) {
        t93 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: t89,
            disabled: t91,
            children: t92
        }, void 0, false, {
            fileName: "[project]/src/components/ui/rich-text-editor.tsx",
            lineNumber: 726,
            columnNumber: 11
        }, this);
        $[133] = t89;
        $[134] = t91;
        $[135] = t93;
    } else {
        t93 = $[135];
    }
    let t94;
    if ($[136] !== t17 || $[137] !== t21 || $[138] !== t25 || $[139] !== t29 || $[140] !== t34 || $[141] !== t38 || $[142] !== t42 || $[143] !== t47 || $[144] !== t51 || $[145] !== t56 || $[146] !== t60 || $[147] !== t64 || $[148] !== t68 || $[149] !== t73 || $[150] !== t77 || $[151] !== t80 || $[152] !== t82 || $[153] !== t88 || $[154] !== t93) {
        t94 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-b border-gray-300 bg-gray-50 p-2 flex flex-wrap gap-1",
            children: [
                t17,
                t21,
                t25,
                t29,
                t30,
                t34,
                t38,
                t42,
                t43,
                t47,
                t51,
                t52,
                t56,
                t60,
                t64,
                t68,
                t69,
                t73,
                t77,
                t78,
                t80,
                t82,
                t83,
                t88,
                t93
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/rich-text-editor.tsx",
            lineNumber: 735,
            columnNumber: 11
        }, this);
        $[136] = t17;
        $[137] = t21;
        $[138] = t25;
        $[139] = t29;
        $[140] = t34;
        $[141] = t38;
        $[142] = t42;
        $[143] = t47;
        $[144] = t51;
        $[145] = t56;
        $[146] = t60;
        $[147] = t64;
        $[148] = t68;
        $[149] = t73;
        $[150] = t77;
        $[151] = t80;
        $[152] = t82;
        $[153] = t88;
        $[154] = t93;
        $[155] = t94;
    } else {
        t94 = $[155];
    }
    let t95;
    if ($[156] !== editor_0) {
        t95 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EditorContent"], {
            editor: editor_0,
            className: "bg-white"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/rich-text-editor.tsx",
            lineNumber: 761,
            columnNumber: 11
        }, this);
        $[156] = editor_0;
        $[157] = t95;
    } else {
        t95 = $[157];
    }
    let t96;
    if ($[158] !== t12 || $[159] !== t13 || $[160] !== t94 || $[161] !== t95) {
        t96 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "aria-invalid": t12,
            className: t13,
            children: [
                t94,
                t95
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/rich-text-editor.tsx",
            lineNumber: 769,
            columnNumber: 11
        }, this);
        $[158] = t12;
        $[159] = t13;
        $[160] = t94;
        $[161] = t95;
        $[162] = t96;
    } else {
        t96 = $[162];
    }
    return t96;
}
_s(RichTextEditor, "P0kI5ebfVpbwiL29D1+tp0vR2RE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useEditor"]
    ];
});
_c = RichTextEditor;
var _c;
__turbopack_context__.k.register(_c, "RichTextEditor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/rich-text-editor.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/ui/rich-text-editor.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_ui_rich-text-editor_tsx_8d3fccff._.js.map