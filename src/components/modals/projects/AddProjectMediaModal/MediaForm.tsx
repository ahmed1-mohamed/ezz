import { useRef } from "react";
import { Upload, Video, Image as ImageIcon, Link as LinkIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FieldError, FormErrorAlert } from "@/components/ui/form-message";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { MediaFormErrors, MediaItem, MEDIA_MAX_FILE_SIZE_MB } from "./types";

interface MediaFormProps {
  selectedMediaType: string;
  setSelectedMediaType: (type: string) => void;
  videoLink: string;
  setVideoLink: (link: string) => void;
  isProcessing: boolean;
  isSubmitting?: boolean;
  mediaItems: MediaItem[];
  errors: MediaFormErrors;
  handleFileSelect: (files: FileList | null) => void;
  handleAddVideoLink: () => void;
  updateMediaItem: (index: number, field: keyof MediaItem, value: any) => void;
  removeMediaItem: (index: number) => void;
}

export function MediaForm({
  selectedMediaType,
  setSelectedMediaType,
  videoLink,
  setVideoLink,
  isProcessing,
  isSubmitting = false,
  mediaItems,
  errors,
  handleFileSelect,
  handleAddVideoLink,
  updateMediaItem,
  removeMediaItem,
}: MediaFormProps) {
  const { t } = useLanguage();
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <FormErrorAlert message={errors.general} className="mb-4" />

      <div className="mb-4">
        <label className="mb-2 block text-sm font-medium">{t("projects.form.media.mediaType")}</label>
        <div className="flex gap-2 flex-wrap">
          {[
            { value: "image", labelKey: "projects.media.types.image", icon: ImageIcon },
            { value: "floor_plan", labelKey: "projects.media.types.floorPlan", icon: ImageIcon },
            { value: "3D_tour", labelKey: "projects.media.types.threeDTour", icon: ImageIcon },
            { value: "video", labelKey: "projects.media.types.video", icon: Video },
          ].map((type) => (
            <button
              key={type.value}
              type="button"
              onClick={() => setSelectedMediaType(type.value)}
              className={`flex items-center gap-2 rounded-lg border px-4 py-2 ${
                selectedMediaType === type.value
                  ? "border-teal-600 bg-teal-50 text-teal-600"
                  : "border-gray-300 hover:bg-gray-50"
              }`}
            >
              <type.icon className="h-4 w-4" />
              {t(type.labelKey)}
            </button>
          ))}
        </div>
      </div>

      {selectedMediaType !== "video" && (
        <div className="mb-4">
          <label htmlFor="file-upload" className="hidden">{t("projects.media.uploadImages")}</label>
          <input
            id="file-upload"
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => handleFileSelect(e.target.files)}
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            disabled={isProcessing || isSubmitting}
            aria-invalid={!!errors.files}
            aria-describedby={errors.files ? "media-files-error" : "media-files-hint"}
            className={cn(
              "flex w-full items-center justify-center gap-2 rounded-lg border-2 border-dashed py-8 hover:border-teal-500 hover:bg-gray-50 disabled:opacity-50",
              errors.files ? "border-red-500" : "border-gray-300"
            )}
          >
            <Upload className="h-5 w-5 text-gray-400" />
            <span className="text-gray-600">
              {isProcessing ? t("projects.media.processing") : t("projects.media.clickToUpload")}
            </span>
          </button>
          <p id="media-files-hint" className="mt-1 text-xs text-gray-500 text-start">
            {t("projects.form.media.validation.fileHint", { max: MEDIA_MAX_FILE_SIZE_MB })}
          </p>
          <FieldError id="media-files-error" message={errors.files} />
        </div>
      )}

      {selectedMediaType === "video" && (
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium">{t("projects.form.media.videoUrl")}</label>
          <div className="flex gap-2">
            <input
              type="url"
              dir="ltr"
              value={videoLink}
              onChange={(e) => setVideoLink(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleAddVideoLink();
                }
              }}
              placeholder={t("projects.media.enterVideoUrl")}
              aria-invalid={!!errors.videoLink}
              aria-describedby={errors.videoLink ? "media-video-link-error" : undefined}
              className={cn(
                "flex-1 rounded-md border px-3 py-2 focus:outline-none focus:ring-2",
                errors.videoLink ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-teal-500"
              )}
            />
            <Button
              type="button"
              onClick={handleAddVideoLink}
              disabled={!videoLink.trim() || isSubmitting}
            >
              <LinkIcon className="me-2 h-4 w-4" />
              {t("projects.form.media.addVideo")}
            </Button>
          </div>
          <FieldError id="media-video-link-error" message={errors.videoLink} />
        </div>
      )}

      {mediaItems.length > 0 && (
        <div className="mb-4">
          <h3 className="mb-2 text-sm font-medium">
            {t("projects.media.selectedMedia", { count: mediaItems.length })}
          </h3>
          <div className="max-h-60 space-y-3 overflow-y-auto">
            {mediaItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center gap-3 rounded-lg border p-3"
              >
                <div className="h-16 w-24 flex-shrink-0 overflow-hidden rounded bg-gray-100">
                  <img
                    src={item.preview}
                    alt={t("projects.media.previewAlt")}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <input
                    type="text"
                    placeholder={t("projects.form.media.description")}
                    value={item.description}
                    onChange={(e) =>
                      updateMediaItem(index, "description", e.target.value)
                    }
                    aria-invalid={!!errors.descriptions?.[index]}
                    aria-describedby={errors.descriptions?.[index] ? `media-description-error-${index}` : undefined}
                    className={cn(
                      "w-full rounded border px-2 py-1 text-sm focus:outline-none focus:ring-1",
                      errors.descriptions?.[index]
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-teal-500"
                    )}
                  />
                  <FieldError
                    id={`media-description-error-${index}`}
                    message={errors.descriptions?.[index]}
                  />
                  <div className="flex gap-4">
                    <label className="flex items-center gap-1 text-xs cursor-pointer">
                      <input
                        type="checkbox"
                        checked={item.is_primary}
                        onChange={(e) =>
                          updateMediaItem(index, "is_primary", e.target.checked)
                        }
                        className="rounded text-teal-600 focus:ring-teal-500"
                      />
                      {t("projects.media.primary")}
                    </label>
                    <label className="flex items-center gap-1 text-xs cursor-pointer">
                      <input
                        type="checkbox"
                        checked={item.my_order}
                        onChange={(e) =>
                          updateMediaItem(index, "my_order", e.target.checked)
                        }
                        className="rounded text-teal-600 focus:ring-teal-500"
                      />
                      {t("projects.media.order")}
                    </label>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => removeMediaItem(index)}
                  disabled={isSubmitting}
                  className="text-red-500 hover:text-red-700 self-end sm:self-center p-1"
                  aria-label={t("projects.media.removeItem")}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
