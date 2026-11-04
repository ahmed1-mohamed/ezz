"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { SafeImage } from "@/components/ui/safe-image";
import { Button } from "@/components/ui/button";
import { FieldError, FormErrorAlert } from "@/components/ui/form-message";
import { X, Image as ImageIcon, Video, Loader2 } from "lucide-react";
import { editProjectMedia } from "@/data/api-client";
import { useLanguage } from "@/contexts/LanguageContext";
import { parseApiError } from "@/lib/api-errors";
import { scrollToFirstInvalidField } from "@/lib/form-utils";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import { cn } from "@/lib/utils";

const DESCRIPTION_MAX_LENGTH = 2000;
const EDIT_MEDIA_FIELDS = ["description", "is_primary", "my_order"];

interface Media {
  media_id: number;
  media_url: string;
  media_type: string;
  description?: string;
  is_primary?: number | boolean;
  my_order?: number | boolean;
}

interface EditProjectMediaModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectId: number;
  media: Media | null;
}

export function EditProjectMediaModal({
  isOpen,
  onClose,
  projectId,
  media,
}: EditProjectMediaModalProps) {
  const queryClient = useQueryClient();
  const { data: session } = useSession();
  const token = session?.user?.accessToken;
  const { t } = useLanguage();

  const [description, setDescription] = useState("");
  const [isPrimary, setIsPrimary] = useState(false);
  const [myOrder, setMyOrder] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [generalError, setGeneralError] = useState<string | undefined>();

  useEffect(() => {
    if (media) {
      setDescription(media.description || "");
      setIsPrimary(Boolean(media.is_primary));
      setMyOrder(Boolean(media.my_order));
      setErrors({});
      setGeneralError(undefined);
    }
  }, [media]);

  const mutation = useMutation({
    mutationFn: (data: any) => editProjectMedia(media!.media_id, data, token!),
    onSuccess: () => {
      toast.success(t("projects.form.media.updateSuccess"));
      queryClient.invalidateQueries({
        queryKey: ["projectDetails", String(projectId)],
      });
      onClose();
    },
    onError: (error: unknown) => {
      console.error("Update error:", error);
      const { fieldErrors, generalMessage, summary } = parseApiError(error, {
        t,
        fallbackMessage: t("projects.form.media.updateFailed"),
        fields: EDIT_MEDIA_FIELDS,
      });
      setErrors(fieldErrors);
      setGeneralError(generalMessage);
      if (Object.keys(fieldErrors).length > 0 || generalMessage) scrollToFirstInvalidField();
      toast.error(summary, { id: API_ERROR_TOAST_ID });
    },
  });

  const handleClose = () => {
    if (mutation.isPending) return;
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mutation.isPending) return;
    setGeneralError(undefined);
    if (description.trim().length > DESCRIPTION_MAX_LENGTH) {
      setErrors({ description: t("validation.max_length", { max: DESCRIPTION_MAX_LENGTH }) });
      scrollToFirstInvalidField(e.currentTarget);
      return;
    }
    setErrors({});
    const payload = {
      description: description.trim(),
      is_primary: isPrimary,
      my_order: myOrder,
    };
    mutation.mutate(payload);
  };

  if (!isOpen || !media) return null;
  const isVideo = media.media_type === "video";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md rounded-lg bg-white p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">{t("projects.media.editTitle")}</h2>
          <button
            type="button"
            onClick={handleClose}
            disabled={mutation.isPending}
            aria-label={t("common.close")}
            className="rounded-full p-1 hover:bg-gray-100 disabled:opacity-50"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <form onSubmit={handleSubmit} noValidate>
          <FormErrorAlert message={generalError} className="mb-4" />
          <div className="mb-4">
            <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
              {isVideo ? (
                <video
                  src={media.media_url}
                  className="h-full w-full object-cover"
                  controls
                />
              ) : (
                <SafeImage
                  src={media.media_url}
                  alt={t("projects.media.preview")}
                  fill
                  sizes="448px"
                  fallbackSrc="/images/default-logo.svg"
                  className="object-cover"
                />
              )}
            </div>
            <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
              {isVideo ? (
                <Video className="h-4 w-4" />
              ) : (
                <ImageIcon className="h-4 w-4" />
              )}
              <span className="capitalize">{media.media_type}</span>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="edit-media-description" className="mb-2 block text-sm font-medium">
              {t("projects.form.media.description")}
            </label>
            <textarea
              id="edit-media-description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
                if (errors.description) {
                  setErrors((prev) => {
                    const next = { ...prev };
                    delete next.description;
                    return next;
                  });
                }
              }}
              placeholder={t("projects.media.enterDescription")}
              rows={3}
              aria-invalid={!!errors.description}
              aria-describedby={errors.description ? "edit-media-description-error" : undefined}
              className={cn(
                "w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2",
                errors.description ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-teal-500"
              )}
            />
            <FieldError id="edit-media-description-error" message={errors.description} />
          </div>
          <div className="mb-4 space-y-3">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={isPrimary}
                onChange={(e) => setIsPrimary(e.target.checked)}
                aria-invalid={!!errors.is_primary || undefined}
                className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
              />
              <span className="text-sm">{t("projects.media.setAsPrimary")}</span>
            </label>
            <FieldError message={errors.is_primary} />
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={myOrder}
                onChange={(e) => setMyOrder(e.target.checked)}
                aria-invalid={!!errors.my_order || undefined}
                className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
              />
              <span className="text-sm">{t("projects.media.includeInOrder")}</span>
            </label>
            <FieldError message={errors.my_order} />
          </div>
          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={handleClose} disabled={mutation.isPending}>
              {t("common.cancel")}
            </Button>
            <Button
              type="submit"
              disabled={mutation.isPending}
              className="bg-teal-600 hover:bg-teal-700"
            >
              {mutation.isPending && <Loader2 className="me-2 h-4 w-4 animate-spin" />}
              {mutation.isPending ? t("common.saving") : t("common.saveChanges")}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}