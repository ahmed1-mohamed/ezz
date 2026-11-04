(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/modals/projects/AddProjectMediaModal/hooks.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAddProjectMediaLogic",
    ()=>useAddProjectMediaLogic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/api-client.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$projects$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/projects.service.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
function useAddProjectMediaLogic(projectId, token, isOpen, onClose, t) {
    _s();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const [mediaItems, setMediaItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isProcessing, setIsProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [videoLink, setVideoLink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [watermarkLoaded, setWatermarkLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [watermarkImage, setWatermarkImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedMediaType, setSelectedMediaType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("image");
    const config = {
        enabled: true,
        imageSize: {
            width: 1024,
            height: 768
        },
        maxSizeMB: 0.5,
        quality: 85,
        watermarkEnabled: true,
        watermarkOpacity: 100,
        watermarkPosition: "bottom-right",
        maintainAspectRatio: false,
        watermarkSize: 30
    };
    const mutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useAddProjectMediaLogic.useMutation[mutation]": (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$projects$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addProjectMedia"])(data, token)
        }["useAddProjectMediaLogic.useMutation[mutation]"],
        onSuccess: {
            "useAddProjectMediaLogic.useMutation[mutation]": ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("projects.messages.mediaUploadSuccess"));
                queryClient.invalidateQueries({
                    queryKey: [
                        "projectDetails",
                        String(projectId)
                    ]
                });
                setMediaItems([]);
                onClose();
            }
        }["useAddProjectMediaLogic.useMutation[mutation]"],
        onError: {
            "useAddProjectMediaLogic.useMutation[mutation]": (error)=>{
                console.error("Upload error:", error);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(error.message || t("projects.messages.mediaUploadFailed"));
            }
        }["useAddProjectMediaLogic.useMutation[mutation]"]
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAddProjectMediaLogic.useEffect": ()=>{
            if (!isOpen) return;
            const loadWatermarkImage = {
                "useAddProjectMediaLogic.useEffect.loadWatermarkImage": ()=>{
                    const img = new Image();
                    img.crossOrigin = "anonymous";
                    img.onload = ({
                        "useAddProjectMediaLogic.useEffect.loadWatermarkImage": ()=>{
                            setWatermarkImage(img);
                            setWatermarkLoaded(true);
                        }
                    })["useAddProjectMediaLogic.useEffect.loadWatermarkImage"];
                    img.onerror = ({
                        "useAddProjectMediaLogic.useEffect.loadWatermarkImage": ()=>{
                            setWatermarkLoaded(false);
                        }
                    })["useAddProjectMediaLogic.useEffect.loadWatermarkImage"];
                    img.src = "/images/logo_media.png";
                }
            }["useAddProjectMediaLogic.useEffect.loadWatermarkImage"];
            if (config.watermarkEnabled) {
                loadWatermarkImage();
            }
        }
    }["useAddProjectMediaLogic.useEffect"], [
        isOpen,
        config.watermarkEnabled
    ]);
    function resizeImageDimensions(originalWidth, originalHeight, maxWidth = 1024, maxHeight = 768) {
        const widthRatio = originalWidth / maxWidth;
        const heightRatio = originalHeight / maxHeight;
        const ratio = Math.min(widthRatio, heightRatio);
        if (Math.round(originalHeight + originalHeight * ratio) > 768 && Math.round(originalWidth + originalWidth * ratio) > 1024) {
            return {
                width: 1024,
                height: 768
            };
        }
        if (Math.round(originalHeight + originalHeight * ratio) > 768) {
            return {
                width: Math.round(originalWidth + originalWidth * ratio),
                height: 768
            };
        }
        if (Math.round(originalWidth + originalWidth * ratio) > 1024) {
            return {
                width: 1024,
                height: Math.round(originalHeight + originalHeight * ratio)
            };
        }
        return {
            width: Math.round(originalWidth + originalWidth * ratio),
            height: Math.round(originalHeight + originalHeight * ratio)
        };
    }
    const processImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAddProjectMediaLogic.useCallback[processImage]": async (file)=>{
            try {
                const canvas = document.createElement("canvas");
                const ctx = canvas.getContext("2d");
                if (!ctx) throw new Error("Could not get canvas context");
                const originalImage = await new Promise({
                    "useAddProjectMediaLogic.useCallback[processImage]": (resolve, reject)=>{
                        const img_0 = new Image();
                        img_0.onload = ({
                            "useAddProjectMediaLogic.useCallback[processImage]": ()=>resolve(img_0)
                        })["useAddProjectMediaLogic.useCallback[processImage]"];
                        img_0.onerror = reject;
                        img_0.src = URL.createObjectURL(file);
                    }
                }["useAddProjectMediaLogic.useCallback[processImage]"]);
                const { width: newWidth, height: newHeight } = resizeImageDimensions(originalImage.width, originalImage.height, config.imageSize.width, config.imageSize.height);
                canvas.width = newWidth;
                canvas.height = newHeight;
                ctx.fillStyle = "transparent";
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(originalImage, 0, 0, canvas.width, canvas.height);
                if (config.watermarkEnabled && watermarkImage && watermarkLoaded) {
                    ctx.globalAlpha = config.watermarkOpacity / 100;
                    const watermarkWidth = 500;
                    const watermarkHeight = 300;
                    let x = 0, y = 0;
                    const margin = 20;
                    switch(config.watermarkPosition){
                        case "top-left":
                            x = margin;
                            y = margin;
                            break;
                        case "top-right":
                            x = canvas.width - watermarkWidth - margin;
                            y = margin;
                            break;
                        case "bottom-left":
                            x = margin;
                            y = canvas.height - watermarkHeight - margin;
                            break;
                        case "bottom-right":
                            x = canvas.width - watermarkWidth - margin;
                            y = canvas.height - watermarkHeight - margin;
                            break;
                        case "center":
                            x = (canvas.width - watermarkWidth) / 2;
                            y = (canvas.height - watermarkHeight) / 2;
                            break;
                    }
                    ctx.drawImage(watermarkImage, x, y, watermarkWidth, watermarkHeight);
                    ctx.globalAlpha = 1.0;
                }
                const processedBlob = await new Promise({
                    "useAddProjectMediaLogic.useCallback[processImage]": (resolve_0, reject_0)=>{
                        canvas.toBlob({
                            "useAddProjectMediaLogic.useCallback[processImage]": (blob)=>blob ? resolve_0(blob) : reject_0(new Error("Failed to create blob"))
                        }["useAddProjectMediaLogic.useCallback[processImage]"], "image/jpeg", config.quality / 100);
                    }
                }["useAddProjectMediaLogic.useCallback[processImage]"]);
                let finalBlob = processedBlob;
                if (processedBlob.size > config.maxSizeMB * 1024 * 1024) {
                    const tempFile = new File([
                        processedBlob
                    ], file.name, {
                        type: "image/jpeg"
                    });
                    const imageCompression = (await __turbopack_context__.A("[project]/node_modules/browser-image-compression/dist/browser-image-compression.mjs [app-client] (ecmascript, async loader)")).default;
                    const compressedFile = await imageCompression(tempFile, {
                        maxSizeMB: config.maxSizeMB,
                        maxWidthOrHeight: Math.max(config.imageSize.width, config.imageSize.height),
                        useWebWorker: true,
                        initialQuality: (config.quality - 10) / 100,
                        fileType: "image/jpeg"
                    });
                    finalBlob = compressedFile;
                }
                const processedFile = new File([
                    finalBlob
                ], file.name, {
                    type: "image/jpeg",
                    lastModified: Date.now()
                });
                URL.revokeObjectURL(originalImage.src);
                return {
                    file: processedFile,
                    width: newWidth,
                    height: newHeight
                };
            } catch (error_0) {
                console.error("Image processing error:", error_0);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t("projects.form.media.messages.failedProcess"));
                return {
                    file,
                    width: 0,
                    height: 0
                };
            }
        }
    }["useAddProjectMediaLogic.useCallback[processImage]"], [
        config,
        watermarkImage,
        watermarkLoaded,
        t
    ]);
    const handleFileSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAddProjectMediaLogic.useCallback[handleFileSelect]": async (files)=>{
            if (!files || !selectedMediaType) return;
            const validFiles = Array.from(files).filter({
                "useAddProjectMediaLogic.useCallback[handleFileSelect].validFiles": (file_0)=>{
                    const isImage = file_0.type.startsWith("image/");
                    if (!isImage) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(`${file_0.name} ${t("projects.form.media.messages.notValidImage")}`);
                        return false;
                    }
                    return true;
                }
            }["useAddProjectMediaLogic.useCallback[handleFileSelect].validFiles"]);
            if (validFiles.length === 0) return;
            if (config.watermarkEnabled && !watermarkLoaded && selectedMediaType === "image") {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t("projects.form.media.messages.watermarkNotLoaded"));
                return;
            }
            setIsProcessing(true);
            try {
                const processedItems = [];
                for (const file_1 of validFiles){
                    const { file: processedFile_0, width, height } = config.enabled && selectedMediaType === "image" ? await processImage(file_1) : {
                        file: file_1,
                        width: 0,
                        height: 0
                    };
                    const preview = await new Promise({
                        "useAddProjectMediaLogic.useCallback[handleFileSelect]": (resolve_1)=>{
                            const reader = new FileReader();
                            reader.onload = ({
                                "useAddProjectMediaLogic.useCallback[handleFileSelect]": (e)=>resolve_1(e.target?.result)
                            })["useAddProjectMediaLogic.useCallback[handleFileSelect]"];
                            reader.readAsDataURL(processedFile_0);
                        }
                    }["useAddProjectMediaLogic.useCallback[handleFileSelect]"]);
                    processedItems.push({
                        file: processedFile_0,
                        originalFile: file_1,
                        description: "",
                        is_primary: mediaItems.length === 0 && processedItems.length === 0,
                        my_order: false,
                        preview,
                        isProcessed: config.enabled && selectedMediaType === "image",
                        media_type: selectedMediaType,
                        originalSize: file_1.size,
                        compressedSize: processedFile_0.size,
                        resizedWidth: width,
                        resizedHeight: height
                    });
                }
                setMediaItems({
                    "useAddProjectMediaLogic.useCallback[handleFileSelect]": (prev)=>[
                            ...prev,
                            ...processedItems
                        ]
                }["useAddProjectMediaLogic.useCallback[handleFileSelect]"]);
            } catch (error_1) {
                console.error("File processing error:", error_1);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t("projects.form.media.messages.failedProcessAll"));
            } finally{
                setIsProcessing(false);
            }
        }
    }["useAddProjectMediaLogic.useCallback[handleFileSelect]"], [
        selectedMediaType,
        config,
        watermarkLoaded,
        t,
        processImage,
        mediaItems.length
    ]);
    const handleAddVideoLink = ()=>{
        if (!videoLink.trim()) return;
        let embedUrl = videoLink;
        try {
            const url = new URL(videoLink);
            if (url.hostname.includes('youtube.com') || url.hostname.includes('youtu.be')) {
                const videoId = url.hostname.includes('youtu.be') ? url.pathname.slice(1) : url.searchParams.get('v');
                if (videoId) embedUrl = `https://www.youtube.com/embed/${videoId}`;
            } else if (url.hostname.includes('vimeo.com')) {
                const videoId_0 = url.pathname.split('/').pop();
                if (videoId_0) embedUrl = `https://player.vimeo.com/video/${videoId_0}`;
            }
        } catch (e_0) {}
        setMediaItems((prev_0)=>[
                ...prev_0,
                {
                    description: "",
                    is_primary: prev_0.length === 0,
                    my_order: false,
                    preview: embedUrl,
                    isProcessed: true,
                    media_type: "video",
                    media_url: embedUrl
                }
            ]);
        setVideoLink("");
    };
    const updateMediaItem = (index, field, value)=>{
        setMediaItems((prev_1)=>prev_1.map((item, i)=>i === index ? {
                    ...item,
                    [field]: value
                } : item));
    };
    const removeMediaItem = (index_0)=>{
        setMediaItems((prev_2)=>prev_2.filter((_, i_0)=>i_0 !== index_0));
    };
    const handleSubmit = (e_1)=>{
        e_1.preventDefault();
        if (mediaItems.length === 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t("projects.form.media.messages.selectMediaFirst"));
            return;
        }
        const formData = new FormData();
        formData.append("project_id", projectId.toString());
        const imageItems = mediaItems.filter((item_0)=>item_0.media_type === "image" || item_0.media_type === "floor_plan" || item_0.media_type === "3D_tour");
        const videoItems = mediaItems.filter((item_1)=>item_1.media_type === "video");
        const orderedItems = [
            ...imageItems,
            ...videoItems
        ];
        imageItems.forEach((item_2)=>{
            if (item_2.file) {
                formData.append("medias[]", item_2.file);
            }
        });
        const mediaMeta = orderedItems.map((item_3)=>({
                description: item_3.description,
                is_primary: item_3.is_primary ? 1 : 0,
                my_order: item_3.my_order ? 1 : 0,
                media_type: item_3.media_type,
                ...item_3.media_type === "video" && {
                    media_url: item_3.media_url
                }
            }));
        formData.append("media_meta", JSON.stringify(mediaMeta));
        mutation.mutate(formData);
    };
    return {
        mediaItems,
        isProcessing,
        videoLink,
        setVideoLink,
        selectedMediaType,
        setSelectedMediaType,
        mutation,
        handleFileSelect,
        handleAddVideoLink,
        updateMediaItem,
        removeMediaItem,
        handleSubmit
    };
}
_s(useAddProjectMediaLogic, "ThkFuEXC39N3xzHGu/HGhTUpS3g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/modals/projects/AddProjectMediaModal/MediaForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MediaForm",
    ()=>MediaForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/link.js [app-client] (ecmascript) <export default as Link>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function MediaForm(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(24);
    if ($[0] !== "78312858f39221bc9b29f034b43f19712d500c8b6a278f79954777c242b6bcca") {
        for(let $i = 0; $i < 24; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "78312858f39221bc9b29f034b43f19712d500c8b6a278f79954777c242b6bcca";
    }
    const { selectedMediaType, setSelectedMediaType, videoLink, setVideoLink, isProcessing, mediaItems, handleFileSelect, handleAddVideoLink, updateMediaItem, removeMediaItem } = t0;
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "mb-2 block text-sm font-medium",
            children: "Media Type"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/projects/AddProjectMediaModal/MediaForm.tsx",
            lineNumber: 41,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [
            {
                value: "image",
                label: "Image",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"]
            },
            {
                value: "floor_plan",
                label: "Floor Plan",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"]
            },
            {
                value: "3D_tour",
                label: "3D Tour",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"]
            },
            {
                value: "video",
                label: "Video",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"]
            }
        ];
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] !== selectedMediaType || $[4] !== setSelectedMediaType) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2 flex-wrap",
                    children: t2.map({
                        "MediaForm[(anonymous)()]": (type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: {
                                    "MediaForm[(anonymous)() > <button>.onClick]": ()=>setSelectedMediaType(type.value)
                                }["MediaForm[(anonymous)() > <button>.onClick]"],
                                className: `flex items-center gap-2 rounded-lg border px-4 py-2 ${selectedMediaType === type.value ? "border-teal-600 bg-teal-50 text-teal-600" : "border-gray-300 hover:bg-gray-50"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(type.icon, {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/projects/AddProjectMediaModal/MediaForm.tsx",
                                        lineNumber: 74,
                                        columnNumber: 245
                                    }, this),
                                    type.label
                                ]
                            }, type.value, true, {
                                fileName: "[project]/src/components/modals/projects/AddProjectMediaModal/MediaForm.tsx",
                                lineNumber: 72,
                                columnNumber: 47
                            }, this)
                    }["MediaForm[(anonymous)()]"])
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/projects/AddProjectMediaModal/MediaForm.tsx",
                    lineNumber: 71,
                    columnNumber: 36
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/projects/AddProjectMediaModal/MediaForm.tsx",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[3] = selectedMediaType;
        $[4] = setSelectedMediaType;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== handleFileSelect || $[7] !== isProcessing || $[8] !== selectedMediaType) {
        t4 = selectedMediaType !== "video" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    htmlFor: "file-upload",
                    className: "hidden",
                    children: "Upload Images"
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/projects/AddProjectMediaModal/MediaForm.tsx",
                    lineNumber: 84,
                    columnNumber: 65
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    id: "file-upload",
                    ref: fileInputRef,
                    type: "file",
                    accept: "image/*",
                    multiple: true,
                    className: "hidden",
                    onChange: {
                        "MediaForm[<input>.onChange]": (e)=>handleFileSelect(e.target.files)
                    }["MediaForm[<input>.onChange]"]
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/projects/AddProjectMediaModal/MediaForm.tsx",
                    lineNumber: 84,
                    columnNumber: 134
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: {
                        "MediaForm[<button>.onClick]": ()=>fileInputRef.current?.click()
                    }["MediaForm[<button>.onClick]"],
                    disabled: isProcessing,
                    className: "flex w-full items-center justify-center gap-2 rounded-lg border-2 border-dashed border-gray-300 py-8 hover:border-teal-500 hover:bg-gray-50 disabled:opacity-50",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                            className: "h-5 w-5 text-gray-400"
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/projects/AddProjectMediaModal/MediaForm.tsx",
                            lineNumber: 88,
                            columnNumber: 237
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-600",
                            children: isProcessing ? "Processing..." : "Click to upload images"
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/projects/AddProjectMediaModal/MediaForm.tsx",
                            lineNumber: 88,
                            columnNumber: 281
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/projects/AddProjectMediaModal/MediaForm.tsx",
                    lineNumber: 86,
                    columnNumber: 43
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/projects/AddProjectMediaModal/MediaForm.tsx",
            lineNumber: 84,
            columnNumber: 43
        }, this);
        $[6] = handleFileSelect;
        $[7] = isProcessing;
        $[8] = selectedMediaType;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== handleAddVideoLink || $[11] !== selectedMediaType || $[12] !== setVideoLink || $[13] !== videoLink) {
        t5 = selectedMediaType === "video" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "mb-2 block text-sm font-medium",
                    children: "Video URL"
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/projects/AddProjectMediaModal/MediaForm.tsx",
                    lineNumber: 98,
                    columnNumber: 65
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "url",
                            value: videoLink,
                            onChange: {
                                "MediaForm[<input>.onChange]": (e_0)=>setVideoLink(e_0.target.value)
                            }["MediaForm[<input>.onChange]"],
                            placeholder: "Enter video URL",
                            className: "flex-1 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/projects/AddProjectMediaModal/MediaForm.tsx",
                            lineNumber: 98,
                            columnNumber: 160
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            type: "button",
                            onClick: handleAddVideoLink,
                            disabled: !videoLink.trim(),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__["Link"], {
                                    className: "mr-2 h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals/projects/AddProjectMediaModal/MediaForm.tsx",
                                    lineNumber: 100,
                                    columnNumber: 270
                                }, this),
                                "Add Video"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modals/projects/AddProjectMediaModal/MediaForm.tsx",
                            lineNumber: 100,
                            columnNumber: 190
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/projects/AddProjectMediaModal/MediaForm.tsx",
                    lineNumber: 98,
                    columnNumber: 132
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/projects/AddProjectMediaModal/MediaForm.tsx",
            lineNumber: 98,
            columnNumber: 43
        }, this);
        $[10] = handleAddVideoLink;
        $[11] = selectedMediaType;
        $[12] = setVideoLink;
        $[13] = videoLink;
        $[14] = t5;
    } else {
        t5 = $[14];
    }
    let t6;
    if ($[15] !== mediaItems || $[16] !== removeMediaItem || $[17] !== updateMediaItem) {
        t6 = mediaItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "mb-2 text-sm font-medium",
                    children: [
                        "Selected Media (",
                        mediaItems.length,
                        ")"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/projects/AddProjectMediaModal/MediaForm.tsx",
                    lineNumber: 111,
                    columnNumber: 57
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-h-60 space-y-3 overflow-y-auto",
                    children: mediaItems.map({
                        "MediaForm[mediaItems.map()]": (item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row sm:items-center gap-3 rounded-lg border p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-16 w-24 flex-shrink-0 overflow-hidden rounded bg-gray-100",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: item.preview,
                                            alt: "Preview",
                                            className: "h-full w-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/projects/AddProjectMediaModal/MediaForm.tsx",
                                            lineNumber: 112,
                                            columnNumber: 235
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/projects/AddProjectMediaModal/MediaForm.tsx",
                                        lineNumber: 112,
                                        columnNumber: 158
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                placeholder: "Description",
                                                value: item.description,
                                                onChange: {
                                                    "MediaForm[mediaItems.map() > <input>.onChange]": (e_1)=>updateMediaItem(index, "description", e_1.target.value)
                                                }["MediaForm[mediaItems.map() > <input>.onChange]"],
                                                className: "w-full rounded border border-gray-300 px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/projects/AddProjectMediaModal/MediaForm.tsx",
                                                lineNumber: 112,
                                                columnNumber: 354
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "flex items-center gap-1 text-xs cursor-pointer",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: item.is_primary,
                                                                onChange: {
                                                                    "MediaForm[mediaItems.map() > <input>.onChange]": (e_2)=>updateMediaItem(index, "is_primary", e_2.target.checked)
                                                                }["MediaForm[mediaItems.map() > <input>.onChange]"],
                                                                className: "rounded text-teal-600 focus:ring-teal-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modals/projects/AddProjectMediaModal/MediaForm.tsx",
                                                                lineNumber: 114,
                                                                columnNumber: 284
                                                            }, this),
                                                            "Primary"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modals/projects/AddProjectMediaModal/MediaForm.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 218
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "flex items-center gap-1 text-xs cursor-pointer",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: item.my_order,
                                                                onChange: {
                                                                    "MediaForm[mediaItems.map() > <input>.onChange]": (e_3)=>updateMediaItem(index, "my_order", e_3.target.checked)
                                                                }["MediaForm[mediaItems.map() > <input>.onChange]"],
                                                                className: "rounded text-teal-600 focus:ring-teal-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modals/projects/AddProjectMediaModal/MediaForm.tsx",
                                                                lineNumber: 116,
                                                                columnNumber: 209
                                                            }, this),
                                                            "Order"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modals/projects/AddProjectMediaModal/MediaForm.tsx",
                                                        lineNumber: 116,
                                                        columnNumber: 143
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modals/projects/AddProjectMediaModal/MediaForm.tsx",
                                                lineNumber: 114,
                                                columnNumber: 190
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modals/projects/AddProjectMediaModal/MediaForm.tsx",
                                        lineNumber: 112,
                                        columnNumber: 320
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: {
                                            "MediaForm[mediaItems.map() > <button>.onClick]": ()=>removeMediaItem(index)
                                        }["MediaForm[mediaItems.map() > <button>.onClick]"],
                                        className: "text-red-500 hover:text-red-700 self-end sm:self-center p-1",
                                        "aria-label": "Remove media item",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/projects/AddProjectMediaModal/MediaForm.tsx",
                                            lineNumber: 120,
                                            columnNumber: 169
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/projects/AddProjectMediaModal/MediaForm.tsx",
                                        lineNumber: 118,
                                        columnNumber: 153
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/src/components/modals/projects/AddProjectMediaModal/MediaForm.tsx",
                                lineNumber: 112,
                                columnNumber: 59
                            }, this)
                    }["MediaForm[mediaItems.map()]"])
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/projects/AddProjectMediaModal/MediaForm.tsx",
                    lineNumber: 111,
                    columnNumber: 139
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/projects/AddProjectMediaModal/MediaForm.tsx",
            lineNumber: 111,
            columnNumber: 35
        }, this);
        $[15] = mediaItems;
        $[16] = removeMediaItem;
        $[17] = updateMediaItem;
        $[18] = t6;
    } else {
        t6 = $[18];
    }
    let t7;
    if ($[19] !== t3 || $[20] !== t4 || $[21] !== t5 || $[22] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t3,
                t4,
                t5,
                t6
            ]
        }, void 0, true);
        $[19] = t3;
        $[20] = t4;
        $[21] = t5;
        $[22] = t6;
        $[23] = t7;
    } else {
        t7 = $[23];
    }
    return t7;
}
_s(MediaForm, "YQqvMxdmg33cmOXmQcOjJm+FLVI=");
_c = MediaForm;
var _c;
__turbopack_context__.k.register(_c, "MediaForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/modals/projects/AddProjectMediaModal/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddProjectMediaModal",
    ()=>AddProjectMediaModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$projects$2f$AddProjectMediaModal$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/modals/projects/AddProjectMediaModal/hooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$projects$2f$AddProjectMediaModal$2f$MediaForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/modals/projects/AddProjectMediaModal/MediaForm.tsx [app-client] (ecmascript)");
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
function AddProjectMediaModal(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(30);
    if ($[0] !== "0e50556ff686a980d6068732d87c2685ebaee4989da1cc20f1fe73af08fd339d") {
        for(let $i = 0; $i < 30; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0e50556ff686a980d6068732d87c2685ebaee4989da1cc20f1fe73af08fd339d";
    }
    const { isOpen, onClose, projectId } = t0;
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const token = session?.user?.accessToken;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const { mediaItems, isProcessing, videoLink, setVideoLink, selectedMediaType, setSelectedMediaType, mutation, handleFileSelect, handleAddVideoLink, updateMediaItem, removeMediaItem, handleSubmit } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$projects$2f$AddProjectMediaModal$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAddProjectMediaLogic"])(projectId, token, isOpen, onClose, t);
    let t1;
    if ($[1] !== mutation.isPending || $[2] !== onClose) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            onClick: onClose,
            disabled: mutation.isPending,
            children: "Cancel"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/projects/AddProjectMediaModal/index.tsx",
            lineNumber: 47,
            columnNumber: 10
        }, this);
        $[1] = mutation.isPending;
        $[2] = onClose;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const t2 = mutation.isPending || mediaItems.length === 0;
    const t3 = mutation.isPending ? "Uploading..." : "Upload Media";
    let t4;
    if ($[4] !== handleSubmit || $[5] !== t2 || $[6] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            className: "bg-teal-600 text-white hover:bg-teal-700",
            onClick: handleSubmit,
            disabled: t2,
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/components/modals/projects/AddProjectMediaModal/index.tsx",
            lineNumber: 58,
            columnNumber: 10
        }, this);
        $[4] = handleSubmit;
        $[5] = t2;
        $[6] = t3;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== t1 || $[9] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex w-full justify-end gap-3",
            children: [
                t1,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/projects/AddProjectMediaModal/index.tsx",
            lineNumber: 68,
            columnNumber: 10
        }, this);
        $[8] = t1;
        $[9] = t4;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== handleAddVideoLink || $[12] !== handleFileSelect || $[13] !== isProcessing || $[14] !== mediaItems || $[15] !== removeMediaItem || $[16] !== selectedMediaType || $[17] !== setSelectedMediaType || $[18] !== setVideoLink || $[19] !== updateMediaItem || $[20] !== videoLink) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$projects$2f$AddProjectMediaModal$2f$MediaForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaForm"], {
            selectedMediaType: selectedMediaType,
            setSelectedMediaType: setSelectedMediaType,
            videoLink: videoLink,
            setVideoLink: setVideoLink,
            isProcessing: isProcessing,
            mediaItems: mediaItems,
            handleFileSelect: handleFileSelect,
            handleAddVideoLink: handleAddVideoLink,
            updateMediaItem: updateMediaItem,
            removeMediaItem: removeMediaItem
        }, void 0, false, {
            fileName: "[project]/src/components/modals/projects/AddProjectMediaModal/index.tsx",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        $[11] = handleAddVideoLink;
        $[12] = handleFileSelect;
        $[13] = isProcessing;
        $[14] = mediaItems;
        $[15] = removeMediaItem;
        $[16] = selectedMediaType;
        $[17] = setSelectedMediaType;
        $[18] = setVideoLink;
        $[19] = updateMediaItem;
        $[20] = videoLink;
        $[21] = t6;
    } else {
        t6 = $[21];
    }
    let t7;
    if ($[22] !== handleSubmit || $[23] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            children: t6
        }, void 0, false, {
            fileName: "[project]/src/components/modals/projects/AddProjectMediaModal/index.tsx",
            lineNumber: 94,
            columnNumber: 10
        }, this);
        $[22] = handleSubmit;
        $[23] = t6;
        $[24] = t7;
    } else {
        t7 = $[24];
    }
    let t8;
    if ($[25] !== isOpen || $[26] !== onClose || $[27] !== t5 || $[28] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
            isOpen: isOpen,
            onClose: onClose,
            title: "Add Project Media",
            size: "xl",
            showCloseButton: false,
            footer: t5,
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/components/modals/projects/AddProjectMediaModal/index.tsx",
            lineNumber: 103,
            columnNumber: 10
        }, this);
        $[25] = isOpen;
        $[26] = onClose;
        $[27] = t5;
        $[28] = t7;
        $[29] = t8;
    } else {
        t8 = $[29];
    }
    return t8;
}
_s(AddProjectMediaModal, "a5M1vpmnjFNnm4dziuXA7SnHN64=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$projects$2f$AddProjectMediaModal$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAddProjectMediaLogic"]
    ];
});
_c = AddProjectMediaModal;
var _c;
__turbopack_context__.k.register(_c, "AddProjectMediaModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/modals/projects/AddProjectMediaModal/index.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/modals/projects/AddProjectMediaModal/index.tsx [app-client] (ecmascript)"));
}),
"[project]/node_modules/@tanstack/query-core/build/modern/mutationObserver.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MutationObserver",
    ()=>MutationObserver
]);
// src/mutationObserver.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/mutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
;
;
;
;
var MutationObserver = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Subscribable"] {
    #client;
    #currentResult = void 0;
    #currentMutation;
    #mutateOptions;
    constructor(client, options){
        super();
        this.#client = client;
        this.setOptions(options);
        this.bindMethods();
        this.#updateResult();
    }
    bindMethods() {
        this.mutate = this.mutate.bind(this);
        this.reset = this.reset.bind(this);
    }
    setOptions(options) {
        const prevOptions = this.options;
        this.options = this.#client.defaultMutationOptions(options);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowEqualObjects"])(this.options, prevOptions)) {
            this.#client.getMutationCache().notify({
                type: "observerOptionsUpdated",
                mutation: this.#currentMutation,
                observer: this
            });
        }
        if (prevOptions?.mutationKey && this.options.mutationKey && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashKey"])(prevOptions.mutationKey) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashKey"])(this.options.mutationKey)) {
            this.reset();
        } else if (this.#currentMutation?.state.status === "pending") {
            this.#currentMutation.setOptions(this.options);
        }
    }
    onUnsubscribe() {
        if (!this.hasListeners()) {
            this.#currentMutation?.removeObserver(this);
        }
    }
    onMutationUpdate(action) {
        this.#updateResult();
        this.#notify(action);
    }
    getCurrentResult() {
        return this.#currentResult;
    }
    reset() {
        this.#currentMutation?.removeObserver(this);
        this.#currentMutation = void 0;
        this.#updateResult();
        this.#notify();
    }
    mutate(variables, options) {
        this.#mutateOptions = options;
        this.#currentMutation?.removeObserver(this);
        this.#currentMutation = this.#client.getMutationCache().build(this.#client, this.options);
        this.#currentMutation.addObserver(this);
        return this.#currentMutation.execute(variables);
    }
    #updateResult() {
        const state = this.#currentMutation?.state ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultState"])();
        this.#currentResult = {
            ...state,
            isPending: state.status === "pending",
            isSuccess: state.status === "success",
            isError: state.status === "error",
            isIdle: state.status === "idle",
            mutate: this.mutate,
            reset: this.reset
        };
    }
    #notify(action) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            if (this.#mutateOptions && this.hasListeners()) {
                const variables = this.#currentResult.variables;
                const onMutateResult = this.#currentResult.context;
                const context = {
                    client: this.#client,
                    meta: this.options.meta,
                    mutationKey: this.options.mutationKey
                };
                if (action?.type === "success") {
                    try {
                        this.#mutateOptions.onSuccess?.(action.data, variables, onMutateResult, context);
                    } catch (e) {
                        void Promise.reject(e);
                    }
                    try {
                        this.#mutateOptions.onSettled?.(action.data, null, variables, onMutateResult, context);
                    } catch (e) {
                        void Promise.reject(e);
                    }
                } else if (action?.type === "error") {
                    try {
                        this.#mutateOptions.onError?.(action.error, variables, onMutateResult, context);
                    } catch (e) {
                        void Promise.reject(e);
                    }
                    try {
                        this.#mutateOptions.onSettled?.(void 0, action.error, variables, onMutateResult, context);
                    } catch (e) {
                        void Promise.reject(e);
                    }
                }
            }
            this.listeners.forEach((listener)=>{
                listener(this.#currentResult);
            });
        });
    }
};
;
 //# sourceMappingURL=mutationObserver.js.map
}),
"[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMutation",
    ()=>useMutation
]);
// src/useMutation.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutationObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/mutationObserver.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
"use client";
;
;
;
function useMutation(options, queryClient) {
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])(queryClient);
    const [observer] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "useMutation.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutationObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MutationObserver"](client, options)
    }["useMutation.useState"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useMutation.useEffect": ()=>{
            observer.setOptions(options);
        }
    }["useMutation.useEffect"], [
        observer,
        options
    ]);
    const result = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useMutation.useSyncExternalStore[result]": (onStoreChange)=>observer.subscribe(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batchCalls(onStoreChange))
    }["useMutation.useSyncExternalStore[result]"], [
        observer
    ]), {
        "useMutation.useSyncExternalStore[result]": ()=>observer.getCurrentResult()
    }["useMutation.useSyncExternalStore[result]"], {
        "useMutation.useSyncExternalStore[result]": ()=>observer.getCurrentResult()
    }["useMutation.useSyncExternalStore[result]"]);
    const mutate = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useMutation.useCallback[mutate]": (variables, mutateOptions)=>{
            observer.mutate(variables, mutateOptions).catch(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]);
        }
    }["useMutation.useCallback[mutate]"], [
        observer
    ]);
    if (result.error && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldThrowError"])(observer.options.throwOnError, [
        result.error
    ])) {
        throw result.error;
    }
    return {
        ...result,
        mutate,
        mutateAsync: result.mutate
    };
}
;
 //# sourceMappingURL=useMutation.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Upload
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
            d: "M12 3v12",
            key: "1x0j5s"
        }
    ],
    [
        "path",
        {
            d: "m17 8-5-5-5 5",
            key: "7q97r8"
        }
    ],
    [
        "path",
        {
            d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
            key: "ih7n3h"
        }
    ]
];
const Upload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("upload", __iconNode);
;
 //# sourceMappingURL=upload.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Upload",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Video
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
            d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
            key: "ftymec"
        }
    ],
    [
        "rect",
        {
            x: "2",
            y: "6",
            width: "14",
            height: "12",
            rx: "2",
            key: "158x01"
        }
    ]
];
const Video = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("video", __iconNode);
;
 //# sourceMappingURL=video.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Video",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/link.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Link
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
            d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
            key: "1cjeqo"
        }
    ],
    [
        "path",
        {
            d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
            key: "19qd67"
        }
    ]
];
const Link = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("link", __iconNode);
;
 //# sourceMappingURL=link.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/link.js [app-client] (ecmascript) <export default as Link>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Link",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/link.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_b0f7e247._.js.map