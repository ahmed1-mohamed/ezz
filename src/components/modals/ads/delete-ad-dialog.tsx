"use client";

import { useState } from "react";
import { ConfirmModal } from "@/components/ui/modal";
import { useSession } from "next-auth/react";
import { deleteAd } from "@/data/api-client";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { getApiErrorMessage } from "@/lib/api-errors";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";

interface Ad {
  creative_id: string;
  creative_title: string;
  type: string;
  platform: "Web" | "Mobile" | "Both";
  country: string;
  location: string;
  views: number;
  clicks: number;
  ctr: string;
  status: string;
}

interface DeleteAdDialogProps {
  isOpen: boolean;
  onClose: () => void;
  ad: Ad | null;
  onSuccess?: () => void;
}

export function DeleteAdDialog({
  isOpen,
  onClose,
  ad,
  onSuccess,
}: DeleteAdDialogProps) {
  const { t } = useLanguage();
  const { data: session } = useSession();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!session?.user?.accessToken || !ad) return;

    setIsDeleting(true);
    try {
      await deleteAd(parseInt(ad.creative_id), session.user?.accessToken);
      toast.success(t("ads.messages.deleteSuccess"));
      onSuccess?.();
      onClose();
    } catch (error: any) {
      console.error("Error deleting ad:", error);
      toast.error(getApiErrorMessage(error, t, t("ads.messages.deleteFailed")), { id: API_ERROR_TOAST_ID });
    } finally {
      setIsDeleting(false);
    }
  };

  const handleClose = () => {
    if (isDeleting) return;
    onClose();
  };

  return (
    <ConfirmModal
      isOpen={isOpen}
      onClose={handleClose}
      onConfirm={handleDelete}
      title={t("ads.deleteDialog.title")}
      description={
        ad
          ? t("ads.deleteDialog.description", { name: ad.creative_title })
          : t("ads.deleteDialog.descriptionGeneric")
      }
      confirmText={isDeleting ? t("common.deleting") : t("common.delete")}
      cancelText={t("common.cancel")}
      variant="destructive"
      isLoading={isDeleting}
    />
  );
}