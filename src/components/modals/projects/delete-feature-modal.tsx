"use client";

import { ConfirmModal } from "@/components/ui/modal";
import { useLanguage } from "@/contexts/LanguageContext";

interface DeleteFeatureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  feature: {
    feature_id: number;
    feature_name: string;
    value?: string | null;
    description?: string | null;
    is_amenity?: number;
    icons?: string | null;
  } | null;
  isDeleting?: boolean;
}

export function DeleteFeatureModal({
  isOpen,
  onClose,
  onConfirm,
  feature,
  isDeleting = false,
}: DeleteFeatureModalProps) {
  const { t } = useLanguage();
  // Keep the dialog open (Esc / outside click included) while the delete is in flight.
  const handleClose = () => {
    if (isDeleting) return;
    onClose();
  };
  return (
    <ConfirmModal
      isOpen={isOpen}
      onClose={handleClose}
      onConfirm={onConfirm}
      title={t("projects.features.deleteTitle")}
      description={
        feature
          ? t("projects.features.deleteConfirmNamed", { name: feature.feature_name })
          : t("projects.features.deleteConfirm")
      }
      confirmText={isDeleting ? t("common.deleting") : t("common.delete")}
      cancelText={t("common.cancel")}
      variant="destructive"
      isLoading={isDeleting}
    />
  );
}
