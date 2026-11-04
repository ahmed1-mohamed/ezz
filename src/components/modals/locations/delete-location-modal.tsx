"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { ConfirmModal } from "@/components/ui/modal";
import { deleteLocation } from "@/data/api-client";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { getApiErrorMessage } from "@/lib/api-errors";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";

interface Location {
  location_id: number;
  location_landmark: string;
  city_name: string;
  country_name: string;
  area_name: string;
  created_at: string;
  projects_count: number;
}

interface DeleteLocationModalProps {
  location: Location | null;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export function DeleteLocationModal({
  location,
  isOpen,
  onClose,
  onSuccess,
}: DeleteLocationModalProps) {
  const { t } = useLanguage();
  const { data: session } = useSession();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleConfirm = async () => {
    if (!session?.user?.accessToken || !location) return;

    try {
      setIsDeleting(true);
      await deleteLocation(location.location_id, session.user?.accessToken);
      toast.success(t("locations.messages.deleteSuccess"));
      onSuccess();
      onClose();
    } catch (error) {
      console.error("Error deleting location:", error);
      toast.error(getApiErrorMessage(error, t, t("locations.messages.deleteFailed")), { id: API_ERROR_TOAST_ID });
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <ConfirmModal
      isOpen={isOpen}
      onClose={() => !isDeleting && onClose()}
      onConfirm={handleConfirm}
      title={t("locations.deleteModal.title")}
      description={
        location
          ? t("locations.deleteModal.confirmNamed", { name: location.location_landmark })
          : t("locations.deleteModal.confirm")
      }
      confirmText={isDeleting ? t("common.deleting") : t("common.delete")}
      cancelText={t("common.cancel")}
      variant="destructive"
      isLoading={isDeleting}
    />
  );
}
