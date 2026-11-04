"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { X, AlertTriangle, Loader2 } from "lucide-react";
import { deleteProjectMedia } from "@/data/api-client";
import { useLanguage } from "@/contexts/LanguageContext";
import { getApiErrorMessage } from "@/lib/api-errors";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";

interface Media {
  media_id: number;
  media_url: string;
  media_type?: string;
}

interface DeleteProjectMediaModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectId: number;
  media: Media | null;
}

export function DeleteProjectMediaModal({
  isOpen,
  onClose,
  projectId,
  media,
}: DeleteProjectMediaModalProps) {
  const { t } = useLanguage();
  const queryClient = useQueryClient();
  const { data: session } = useSession();
  const token = session?.user?.accessToken;

  const mutation = useMutation({
    mutationFn: () => deleteProjectMedia((media! as any).id || media!.media_id, token!),
    onSuccess: () => {
      toast.success(t("projects.media.deleteSuccess"));
      queryClient.invalidateQueries({
        queryKey: ["projectDetails", String(projectId)],
      });
      onClose();
    },
    onError: (error: unknown) => {
      console.error("Failed to delete media:", error);
      toast.error(getApiErrorMessage(error, t, t("projects.media.deleteFailed")), { id: API_ERROR_TOAST_ID });
    },
  });

  const handleClose = () => {
    if (mutation.isPending) return;
    onClose();
  };

  const handleConfirm = () => {
    if (mutation.isPending) return;
    mutation.mutate();
  };

  if (!isOpen || !media) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md rounded-lg bg-white p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            {t("projects.form.media.deleteTitle")}
          </h2>
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

        <div className="mb-6">
          <div className="mb-4 flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100">
              <AlertTriangle className="h-5 w-5 text-red-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">
                {t("projects.form.media.deleteConfirm")}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {t("projects.form.media.deleteWarning")}
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-gray-50 p-3">
            <div className="aspect-video overflow-hidden rounded bg-gray-200">
              <img
                src={media.media_url}
                alt={t("projects.media.mediaToDelete")}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <Button type="button" variant="outline" onClick={handleClose} disabled={mutation.isPending}>
            {t("common.cancel")}
          </Button>
          <Button
            onClick={handleConfirm}
            disabled={mutation.isPending}
            className="bg-red-600 hover:bg-red-700"
          >
            {mutation.isPending && <Loader2 className="me-2 h-4 w-4 animate-spin" />}
            {mutation.isPending ? (t("common.deleting")) : (t("common.delete"))}
          </Button>
        </div>
      </div>
    </div>
  );
}
