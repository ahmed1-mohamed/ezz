"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { ConfirmModal } from "@/components/ui/modal";
import { deleteCity } from "@/data/api-client";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { getApiErrorMessage } from "@/lib/api-errors";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";

interface City {
  id: number;
  name: string;
  areaName: string;
  countryName: string;
  locationsCount: number;
  projectsCount: number;
  createdAt: string;
  updatedAt: string;
  status: boolean;
}

interface DeleteCityModalProps {
  city: City | null;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export function DeleteCityModal({
  city,
  isOpen,
  onClose,
  onSuccess,
}: DeleteCityModalProps) {
  const { t } = useLanguage();
  const { data: session } = useSession();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleConfirm = async () => {
    if (!session?.user?.accessToken || !city) return;

    try {
      setIsDeleting(true);
      await deleteCity(city.id, session.user?.accessToken);
      toast.success(t("cities.messages.deleteSuccess"));
      onSuccess();
      onClose();
    } catch (error) {
      console.error("Error deleting city:", error);
      toast.error(getApiErrorMessage(error, t, t("cities.messages.deleteFailed")), { id: API_ERROR_TOAST_ID });
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <ConfirmModal
      isOpen={isOpen}
      onClose={() => !isDeleting && onClose()}
      onConfirm={handleConfirm}
      title={t("cities.deleteTitle")}
      description={city ? t("cities.deleteConfirmNamed", { name: city.name }) : t("cities.deleteConfirm")}
      confirmText={isDeleting ? t("cities.deletingBtn") : t("cities.deleteBtn")}
      cancelText={t("cities.cancelBtn")}
      variant="destructive"
      isLoading={isDeleting}
    />
  );
}
