"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useSession } from "next-auth/react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { AddProjectMediaModalProps } from "./types";
import { useAddProjectMediaLogic } from "./hooks";
import { MediaForm } from "./MediaForm";

export function AddProjectMediaModal({
  isOpen,
  onClose,
  projectId,
}: AddProjectMediaModalProps) {
  const { data: session } = useSession();
  const token = session?.user?.accessToken;
  const { t } = useLanguage();

  const {
    mediaItems,
    isProcessing,
    videoLink,
    setVideoLink,
    selectedMediaType,
    setSelectedMediaType,
    errors,
    mutation,
    handleFileSelect,
    handleAddVideoLink,
    updateMediaItem,
    removeMediaItem,
    handleSubmit
  } = useAddProjectMediaLogic(projectId, token, isOpen, onClose, t);

  const handleClose = () => {
    if (mutation.isPending) return;
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={t("projects.media.addTitle")}
      size="xl"
      showCloseButton={false}
      footer={
        <div className="flex w-full justify-end gap-3">
          <Button variant="outline" onClick={handleClose} disabled={mutation.isPending}>
            {t("common.cancel")}
          </Button>
          <Button
            className="bg-teal-600 text-white hover:bg-teal-700"
            onClick={handleSubmit}
            disabled={mutation.isPending || isProcessing || mediaItems.length === 0}
          >
            {mutation.isPending && <Loader2 className="me-2 h-4 w-4 animate-spin" />}
            {mutation.isPending ? t("common.uploading") : t("projects.media.uploadMedia")}
          </Button>
        </div>
      }
    >
      <form onSubmit={handleSubmit} noValidate>
        <MediaForm
          selectedMediaType={selectedMediaType}
          setSelectedMediaType={setSelectedMediaType}
          videoLink={videoLink}
          setVideoLink={setVideoLink}
          isProcessing={isProcessing}
          isSubmitting={mutation.isPending}
          mediaItems={mediaItems}
          errors={errors}
          handleFileSelect={handleFileSelect}
          handleAddVideoLink={handleAddVideoLink}
          updateMediaItem={updateMediaItem}
          removeMediaItem={removeMediaItem}
        />
      </form>
    </Modal>
  );
}
