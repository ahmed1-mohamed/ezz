import { useState, useCallback, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { addProjectMedia } from "@/data/api-client";
import { parseApiError } from "@/lib/api-errors";
import { scrollToFirstInvalidField } from "@/lib/form-utils";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import {
  MediaFormErrors,
  MediaItem,
  ProcessingConfig,
  MEDIA_DESCRIPTION_MAX_LENGTH,
  MEDIA_MAX_FILE_SIZE_MB,
} from "./types";

/** Backend keys for the uploaded files → the upload area's error slot. */
const MEDIA_FIELD_MAP: Record<string, string> = { medias: "files", "medias[]": "files" };

function isHttpUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return (url.protocol === "http:" || url.protocol === "https:") && !!url.hostname;
  } catch {
    return false;
  }
}

export function useAddProjectMediaLogic(projectId: number, token: string | undefined, isOpen: boolean, onClose: () => void, t: any) {
  const queryClient = useQueryClient();
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [videoLink, setVideoLink] = useState("");
  const [watermarkLoaded, setWatermarkLoaded] = useState(false);
  const [watermarkImage, setWatermarkImage] = useState<HTMLImageElement | null>(null);
  const [selectedMediaType, setSelectedMediaType] = useState<string>("image");
  const [errors, setErrors] = useState<MediaFormErrors>({});

  const config: ProcessingConfig = {
    enabled: true,
    imageSize: { width: 1024, height: 768 },
    maxSizeMB: 0.5,
    quality: 85,
    watermarkEnabled: true,
    watermarkOpacity: 100,
    watermarkPosition: "bottom-right",
    maintainAspectRatio: false,
    watermarkSize: 30,
  };

  const mutation = useMutation({
    mutationFn: (data: any) => addProjectMedia(data, token!),
    onSuccess: () => {
      toast.success(t("projects.messages.mediaUploadSuccess"));
      queryClient.invalidateQueries({
        queryKey: ["projectDetails", String(projectId)],
      });
      setMediaItems([]);
      setErrors({});
      onClose();
    },
    onError: (error: unknown) => {
      console.error("Upload error:", error);
      const { fieldErrors, generalMessage, summary } = parseApiError(error, {
        t,
        fallbackMessage: t("projects.messages.mediaUploadFailed"),
        fields: ["files"],
        fieldMap: MEDIA_FIELD_MAP,
      });
      setErrors((prev) => ({ ...prev, files: fieldErrors.files, general: generalMessage }));
      if (fieldErrors.files || generalMessage) scrollToFirstInvalidField();
      toast.error(summary, { id: API_ERROR_TOAST_ID });
    },
  });

  useEffect(() => {
    if (!isOpen) return;
    const loadWatermarkImage = () => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        setWatermarkImage(img);
        setWatermarkLoaded(true);
      };
      img.onerror = () => {
        setWatermarkLoaded(false);
      };
      img.src = "/images/logo_media.png";
    };
    if (config.watermarkEnabled) {
      loadWatermarkImage();
    }
  }, [isOpen, config.watermarkEnabled]);

  function resizeImageDimensions(
    originalWidth: number,
    originalHeight: number,
    maxWidth = 1024,
    maxHeight = 768,
  ): { width: number; height: number } {
    const widthRatio = originalWidth / maxWidth;
    const heightRatio = originalHeight / maxHeight;
    const ratio = Math.min(widthRatio, heightRatio);

    if (Math.round(originalHeight + originalHeight * ratio) > 768 && Math.round(originalWidth + originalWidth * ratio) > 1024) {
      return { width: 1024, height: 768 };
    }
    if (Math.round(originalHeight + originalHeight * ratio) > 768) {
      return { width: Math.round(originalWidth + originalWidth * ratio), height: 768 };
    }
    if (Math.round(originalWidth + originalWidth * ratio) > 1024) {
      return { width: 1024, height: Math.round(originalHeight + originalHeight * ratio) };
    }
    return {
      width: Math.round(originalWidth + originalWidth * ratio),
      height: Math.round(originalHeight + originalHeight * ratio),
    };
  }

  const processImage = useCallback(
    async (file: File): Promise<{ file: File; width: number; height: number }> => {
      try {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) throw new Error("Could not get canvas context");

        const originalImage = await new Promise<HTMLImageElement>((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve(img);
          img.onerror = reject;
          img.src = URL.createObjectURL(file);
        });

        const { width: newWidth, height: newHeight } = resizeImageDimensions(
          originalImage.width,
          originalImage.height,
          config.imageSize.width,
          config.imageSize.height,
        );

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

          switch (config.watermarkPosition) {
            case "top-left": x = margin; y = margin; break;
            case "top-right": x = canvas.width - watermarkWidth - margin; y = margin; break;
            case "bottom-left": x = margin; y = canvas.height - watermarkHeight - margin; break;
            case "bottom-right": x = canvas.width - watermarkWidth - margin; y = canvas.height - watermarkHeight - margin; break;
            case "center": x = (canvas.width - watermarkWidth) / 2; y = (canvas.height - watermarkHeight) / 2; break;
          }
          ctx.drawImage(watermarkImage, x, y, watermarkWidth, watermarkHeight);
          ctx.globalAlpha = 1.0;
        }

        const processedBlob = await new Promise<Blob>((resolve, reject) => {
          canvas.toBlob(
            (blob) => blob ? resolve(blob) : reject(new Error("Failed to create blob")),
            "image/jpeg",
            config.quality / 100,
          );
        });

        let finalBlob = processedBlob;
        if (processedBlob.size > config.maxSizeMB * 1024 * 1024) {
          const tempFile = new File([processedBlob], file.name, { type: "image/jpeg" });
          const imageCompression = (await import("browser-image-compression")).default;
          const compressedFile = await imageCompression(tempFile, {
            maxSizeMB: config.maxSizeMB,
            maxWidthOrHeight: Math.max(config.imageSize.width, config.imageSize.height),
            useWebWorker: true,
            initialQuality: (config.quality - 10) / 100,
            fileType: "image/jpeg",
          });
          finalBlob = compressedFile;
        }

        const processedFile = new File([finalBlob], file.name, {
          type: "image/jpeg",
          lastModified: Date.now(),
        });

        URL.revokeObjectURL(originalImage.src);
        return { file: processedFile, width: newWidth, height: newHeight };
      } catch (error) {
        console.error("Image processing error:", error);
        toast.error(t("projects.form.media.messages.failedProcess"));
        return { file, width: 0, height: 0 };
      }
    },
    [config, watermarkImage, watermarkLoaded, t],
  );

  const handleFileSelect = useCallback(
    async (files: FileList | null) => {
      if (!files || !selectedMediaType) return;

      const rejected: string[] = [];
      const validFiles = Array.from(files).filter((file) => {
        if (!file.type.startsWith("image/")) {
          rejected.push(t("projects.form.media.validation.invalidFileType", { name: file.name }));
          return false;
        }
        if (file.size > MEDIA_MAX_FILE_SIZE_MB * 1024 * 1024) {
          rejected.push(
            t("projects.form.media.validation.fileTooLarge", { name: file.name, max: MEDIA_MAX_FILE_SIZE_MB })
          );
          return false;
        }
        return true;
      });
      setErrors((prev) => ({ ...prev, files: rejected.length > 0 ? rejected.join(" • ") : undefined }));

      if (validFiles.length === 0) return;
      if (config.watermarkEnabled && !watermarkLoaded && selectedMediaType === "image") {
        toast.error(t("projects.form.media.messages.watermarkNotLoaded"));
        return;
      }

      setIsProcessing(true);
      try {
        const processedItems: MediaItem[] = [];
        for (const file of validFiles) {
          const { file: processedFile, width, height } = config.enabled && selectedMediaType === "image"
            ? await processImage(file)
            : { file, width: 0, height: 0 };

          const preview = await new Promise<string>((resolve) => {
            const reader = new FileReader();
            reader.onload = (e) => resolve(e.target?.result as string);
            reader.readAsDataURL(processedFile);
          });

          processedItems.push({
            file: processedFile,
            originalFile: file,
            description: "",
            is_primary: mediaItems.length === 0 && processedItems.length === 0,
            my_order: false,
            preview,
            isProcessed: config.enabled && selectedMediaType === "image",
            media_type: selectedMediaType as any,
            originalSize: file.size,
            compressedSize: processedFile.size,
            resizedWidth: width,
            resizedHeight: height,
          });
        }

        setMediaItems((prev) => [...prev, ...processedItems]);
      } catch (error) {
        console.error("File processing error:", error);
        toast.error(t("projects.form.media.messages.failedProcessAll"));
      } finally {
        setIsProcessing(false);
      }
    },
    [selectedMediaType, config, watermarkLoaded, t, processImage, mediaItems.length],
  );

  const handleVideoLinkChange = (value: string) => {
    setVideoLink(value);
    if (errors.videoLink) setErrors((prev) => ({ ...prev, videoLink: undefined }));
  };

  const handleAddVideoLink = () => {
    if (!videoLink.trim()) return;
    if (!isHttpUrl(videoLink.trim())) {
      setErrors((prev) => ({ ...prev, videoLink: t("validation.url_invalid") }));
      return;
    }

    let embedUrl = videoLink;
    try {
      const url = new URL(videoLink);
      if (url.hostname.includes('youtube.com') || url.hostname.includes('youtu.be')) {
        const videoId = url.hostname.includes('youtu.be')
          ? url.pathname.slice(1)
          : url.searchParams.get('v');
        if (videoId) embedUrl = `https://www.youtube.com/embed/${videoId}`;
      } else if (url.hostname.includes('vimeo.com')) {
        const videoId = url.pathname.split('/').pop();
        if (videoId) embedUrl = `https://player.vimeo.com/video/${videoId}`;
      }
    } catch (e) {
    }

    setMediaItems(prev => [...prev, {
      description: "",
      is_primary: prev.length === 0,
      my_order: false,
      preview: embedUrl,
      isProcessed: true,
      media_type: "video",
      media_url: embedUrl
    }]);
    setVideoLink("");
    setErrors((prev) => ({ ...prev, videoLink: undefined }));
  };

  const updateMediaItem = (index: number, field: keyof MediaItem, value: any) => {
    setMediaItems((prev) => prev.map((item, i) => (i === index ? { ...item, [field]: value } : item)));
    if (
      field === "description" &&
      errors.descriptions?.[index] &&
      String(value ?? "").trim().length <= MEDIA_DESCRIPTION_MAX_LENGTH
    ) {
      setErrors((prev) => {
        const descriptions = { ...prev.descriptions };
        delete descriptions[index];
        return { ...prev, descriptions };
      });
    }
  };

  const removeMediaItem = (index: number) => {
    setMediaItems((prev) => prev.filter((_, i) => i !== index));
    // Keep description errors attached to the right items after the list shifts.
    setErrors((prev) => {
      if (!prev.descriptions) return prev;
      const descriptions: Record<number, string> = {};
      Object.entries(prev.descriptions).forEach(([key, message]) => {
        const i = Number(key);
        if (i < index) descriptions[i] = message;
        else if (i > index) descriptions[i - 1] = message;
      });
      return { ...prev, descriptions };
    });
  };

  const validateMediaItems = () => {
    const descriptions: Record<number, string> = {};
    mediaItems.forEach((item, index) => {
      if ((item.description ?? "").trim().length > MEDIA_DESCRIPTION_MAX_LENGTH) {
        descriptions[index] = t("validation.max_length", { max: MEDIA_DESCRIPTION_MAX_LENGTH });
      }
    });
    setErrors((prev) => ({ ...prev, descriptions, general: undefined }));
    return Object.keys(descriptions).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mutation.isPending || isProcessing) return;
    if (mediaItems.length === 0) {
      toast.error(t("projects.form.media.messages.selectMediaFirst"));
      return;
    }
    if (!validateMediaItems()) {
      toast.error(t("validation.api.fixFields"));
      scrollToFirstInvalidField(e.currentTarget);
      return;
    }

    const formData = new FormData();
    formData.append("project_id", projectId.toString());

    const imageItems = mediaItems.filter((item) => item.media_type === "image" || item.media_type === "floor_plan" || item.media_type === "3D_tour");
    const videoItems = mediaItems.filter((item) => item.media_type === "video");
    const orderedItems = [...imageItems, ...videoItems];

    imageItems.forEach((item) => {
      if (item.file) {
        formData.append("medias[]", item.file);
      }
    });

    const mediaMeta = orderedItems.map((item) => ({
      description: item.description,
      is_primary: item.is_primary ? 1 : 0,
      my_order: item.my_order ? 1 : 0,
      media_type: item.media_type,
      ...(item.media_type === "video" && { media_url: item.media_url }),
    }));
    formData.append("media_meta", JSON.stringify(mediaMeta));

    mutation.mutate(formData as any);
  };

  return {
    mediaItems,
    isProcessing,
    videoLink,
    setVideoLink: handleVideoLinkChange,
    selectedMediaType,
    setSelectedMediaType,
    errors,
    mutation,
    handleFileSelect,
    handleAddVideoLink,
    updateMediaItem,
    removeMediaItem,
    handleSubmit
  };
}
