"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { UseFormReturn } from "react-hook-form";
import { Upload, Trash2, Star, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { CreateProjectInput } from "@/validators/create-project.schema";
import { SeoFieldsSection } from "@/components/shared/SeoFieldsSection";
import { MediaItem, ProcessingConfig } from "../types";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProjectMediaFormProps {
  form: UseFormReturn<CreateProjectInput>;
  mediaItems: MediaItem[];
  setMediaItems: React.Dispatch<React.SetStateAction<MediaItem[]>>;
}

export function ProjectMediaForm({
  form,
  mediaItems,
  setMediaItems,
}: ProjectMediaFormProps) {
  const { register, watch, setValue } = form;
  const { language, t } = useLanguage();
  const isAr = language === "ar";

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [watermarkImage, setWatermarkImage] = useState<HTMLImageElement | null>(null);
  const [watermarkLoaded, setWatermarkLoaded] = useState(false);

  const [config] = useState<ProcessingConfig>({
    enabled: true,
    imageSize: { width: 1200, height: 800 },
    maxSizeMB: 1,
    quality: 85,
    watermarkEnabled: false,
    watermarkOpacity: 90,
    watermarkPosition: "bottom-right",
    maintainAspectRatio: true,
    watermarkSize: 25,
  });

  useEffect(() => {
    if (!config.watermarkEnabled) return;
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
  }, [config.watermarkEnabled]);

  const processImage = useCallback(
    async (file: File): Promise<File> => {
      try {
        const originalImage = await new Promise<HTMLImageElement>((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve(img);
          img.onerror = reject;
          img.src = URL.createObjectURL(file);
        });

        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) return file;

        let width = originalImage.width;
        let height = originalImage.height;
        const maxDim = 1600;

        if (width > maxDim || height > maxDim) {
          if (width > height) {
            height = Math.round((height * maxDim) / width);
            width = maxDim;
          } else {
            width = Math.round((width * maxDim) / height);
            height = maxDim;
          }
        }

        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(originalImage, 0, 0, width, height);

        if (config.watermarkEnabled && watermarkImage && watermarkLoaded) {
          ctx.globalAlpha = config.watermarkOpacity / 100;
          const wmWidth = Math.round(width * 0.2);
          const wmHeight = Math.round((wmWidth * watermarkImage.height) / watermarkImage.width);
          ctx.drawImage(watermarkImage, width - wmWidth - 15, height - wmHeight - 15, wmWidth, wmHeight);
          ctx.globalAlpha = 1.0;
        }

        const blob = await new Promise<Blob | null>((resolve) =>
          canvas.toBlob(resolve, file.type.includes("png") ? "image/png" : "image/jpeg", 0.85)
        );

        URL.revokeObjectURL(originalImage.src);

        if (blob) {
          return new File([blob], file.name, {
            type: blob.type,
            lastModified: Date.now(),
          });
        }
        return file;
      } catch {
        return file;
      }
    },
    [config, watermarkImage, watermarkLoaded]
  );

  const handleFiles = useCallback(
    async (files: FileList | File[]) => {
      const fileArray = Array.from(files).filter((file) =>
        file.type.startsWith("image/")
      );

      if (fileArray.length === 0) {
        toast.error(t("projects.form.media.onlyImagesAllowed"));
        return;
      }

      if (mediaItems.length + fileArray.length > 8) {
        toast.warning(t("projects.form.media.maxImagesWarning"));
      }

      const availableSlots = Math.max(0, 8 - mediaItems.length);
      const filesToProcess = fileArray.slice(0, availableSlots);

      if (filesToProcess.length === 0) return;

      setIsProcessing(true);
      try {
        const newItems: MediaItem[] = [];

        for (const file of filesToProcess) {
          const processedFile = config.enabled ? await processImage(file) : file;
          const preview = await new Promise<string>((resolve) => {
            const reader = new FileReader();
            reader.onload = (e) => resolve(e.target?.result as string);
            reader.readAsDataURL(processedFile);
          });

          newItems.push({
            file: processedFile,
            originalFile: file,
            description: "",
            is_primary: mediaItems.length === 0 && newItems.length === 0,
            my_order: false,
            preview,
            isProcessed: config.enabled,
            media_type: "image",
            originalSize: file.size,
            compressedSize: processedFile.size,
          });
        }

        setMediaItems((prev) => [...prev, ...newItems]);
        toast.success(t("projects.form.media.imagesUploadedSuccess", { count: newItems.length }));
      } catch (error) {
        console.error("Error processing images:", error);
        toast.error(t("projects.form.media.messages.failedProcessAll"));
      } finally {
        setIsProcessing(false);
      }
    },
    [config.enabled, mediaItems.length, processImage, setMediaItems, t]
  );

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const removeMediaItem = (index: number) => {
    setMediaItems((prev) => {
      const updated = prev.filter((_, i) => i !== index);
      // If primary was removed, assign first remaining item as primary
      if (prev[index]?.is_primary && updated.length > 0) {
        updated[0].is_primary = true;
      }
      return updated;
    });
  };

  const setPrimaryItem = (index: number) => {
    setMediaItems((prev) =>
      prev.map((item, i) => ({
        ...item,
        is_primary: i === index,
      }))
    );
  };

  return (
    <div className="space-y-4">
      {/* ── Project Images Card ─────────────────────────────────────────── */}
      <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-4 shadow-2xs">
        <div>
          <h2 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100">
            {isAr ? "صور المشروع" : "Project Images"}
          </h2>
        </div>

        {/* ── Upload Dropzone ───────────────────────────────────────────── */}
        <div
          onClick={() => fileInputRef.current?.click()}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`relative border border-dashed rounded-xl py-12 px-6 text-center cursor-pointer select-none transition-colors flex flex-col items-center justify-center ${
            isDragging
              ? "border-[#008081] bg-teal-50/50 dark:bg-teal-950/20"
              : "border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 hover:border-gray-400 dark:hover:border-neutral-600"
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/png,image/jpeg,image/jpg,image/gif,image/webp"
            multiple
            disabled={isProcessing || mediaItems.length >= 8}
            onChange={(e) => {
              if (e.target.files) handleFiles(e.target.files);
              e.target.value = "";
            }}
            className="sr-only"
          />

          {/* Upload icon aligned to the inline start */}
          <div className="absolute start-6 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 pointer-events-none">
            {isProcessing ? (
              <Loader2 className="h-7 w-7 animate-spin text-[#008081]" />
            ) : (
              <Upload className="h-7 w-7 stroke-[1.5]" />
            )}
          </div>

          {/* Centered Instructions */}
          <p className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-gray-100">
            {isAr ? "اضغط للرفع أو اسحب الملفات وأفلتها هنا" : "Click to upload or drag & drop"}
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
            {isAr
              ? "JPG, PNG, GIF — حتى 8 صور"
              : "JPG, PNG, GIF — up to 8 images"}
          </p>
        </div>

        {/* ── Uploaded Images Grid ──────────────────────────────────────── */}
        {mediaItems.length > 0 && (
          <div className="space-y-2 pt-2">
            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 font-medium">
              <span>
                {isAr
                  ? `الصور المرفوعة (${mediaItems.length}/8)`
                  : `Uploaded Images (${mediaItems.length}/8)`}
              </span>
              <span className="text-teal-600 dark:text-teal-400 text-[11px]">
                {isAr
                  ? "الصورة المميزة ستكون الغلاف الأساسي للمشروع"
                  : "Primary image will be used as project cover"}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-3">
              {mediaItems.map((item, index) => (
                <div
                  key={index}
                  className="relative group rounded-lg overflow-hidden border border-gray-200 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-950 aspect-video shadow-2xs"
                >
                  <img
                    src={item.preview}
                    alt={`Media ${index + 1}`}
                    className="w-full h-full object-cover"
                  />

                  {/* Primary Badge or Set Primary Button */}
                  {item.is_primary ? (
                    <span className="absolute bottom-1.5 start-1.5 bg-[#008081] text-white text-[10px] font-medium px-2 py-0.5 rounded shadow-xs flex items-center gap-1">
                      <Star className="h-3 w-3 fill-current" />
                      {isAr ? "الرئيسية" : "Primary"}
                    </span>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setPrimaryItem(index)}
                      className="absolute bottom-1.5 start-1.5 bg-black/60 hover:bg-black/80 text-white text-[10px] font-medium px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      {isAr ? "تعيين كرئيسية" : "Set Primary"}
                    </button>
                  )}

                  {/* Remove Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeMediaItem(index);
                    }}
                    className="absolute top-1.5 end-1.5 bg-red-600/90 hover:bg-red-700 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm"
                    title={isAr ? "حذف الصورة" : "Remove Image"}
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ── Search Engine Optimization (SEO) Card ────────────────────────── */}
      <SeoFieldsSection
        register={register}
        setValue={setValue}
        watch={watch}
        nameFieldName="project_name"
        slugPlaceholder="my-property"
        compact={true}
      />
    </div>
  );
}
