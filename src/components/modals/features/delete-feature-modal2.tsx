"use client";

import { ConfirmModal } from "@/components/ui/modal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { deleteFeature } from "@/data/api-client";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { getApiErrorMessage } from "@/lib/api-errors";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";

interface Feature {
  id: number;
  featureName: string;
  isAmenity: boolean;
  icon: string;
}

interface DeleteFeatureModal2Props {
  isOpen: boolean;
  onClose: () => void;
  feature: Feature | null;
}

export function DeleteFeatureModal2({
  isOpen,
  onClose,
  feature,
}: DeleteFeatureModal2Props) {
  const { t } = useLanguage();
  const queryClient = useQueryClient();
  const { data: session } = useSession();
  const token = session?.user?.accessToken;

  const mutation = useMutation({
    mutationFn: async () => {
      if (!feature || !token) throw new Error("Missing feature or token");
      return deleteFeature(feature.id, token);
    },
    onSuccess: () => {
      toast.success(t("features.messages.deleteSuccess"));
      queryClient.invalidateQueries({ queryKey: ["features"] });
      onClose();
    },
    onError: (error) => {
      toast.error(getApiErrorMessage(error, t, t("features.messages.deleteFailed")), { id: API_ERROR_TOAST_ID });
    },
  });

  const handleClose = () => {
    if (mutation.isPending) return;
    onClose();
  };

  const handleConfirm = () => {
    mutation.mutate();
  };

  return (
    <ConfirmModal
      isOpen={isOpen}
      onClose={handleClose}
      onConfirm={handleConfirm}
      title={t("features.deleteModal.title")}
      description={
        feature
          ? t("features.deleteModal.confirmNamed", { name: feature.featureName })
          : t("features.deleteModal.confirm")
      }
      confirmText={mutation.isPending ? t("common.deleting") : t("common.delete")}
      cancelText={t("common.cancel")}
      variant="destructive"
      isLoading={mutation.isPending}
    />
  );
}