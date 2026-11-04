"use client";

import dynamic from "next/dynamic";

const CreateAdModal = dynamic(
  () =>
    import("@/components/modals/ads/create-ad-modal").then(
      (mod) => mod.CreateAdModal,
    ),
  { ssr: false },
);

const EditAdModal = dynamic(
  () =>
    import("@/components/modals/ads/edit-ad-modal").then(
      (mod) => mod.EditAdModal,
    ),
  { ssr: false },
);

const DeleteAdDialog = dynamic(
  () =>
    import("@/components/modals/ads/delete-ad-dialog").then(
      (mod) => mod.DeleteAdDialog,
    ),
  { ssr: false },
);

interface AdsModalsProps {
  selectedAd: any | null;
  createAdModalOpen: boolean;
  editAdModalOpen: boolean;
  deleteAdDialogOpen: boolean;
  onCreateClose: () => void;
  onEditClose: () => void;
  onDeleteClose: () => void;
  onSuccess: () => void;
}

export function AdsModals({
  selectedAd,
  createAdModalOpen,
  editAdModalOpen,
  deleteAdDialogOpen,
  onCreateClose,
  onEditClose,
  onDeleteClose,
  onSuccess,
}: AdsModalsProps) {
  return (
    <>
      {createAdModalOpen && (
        <CreateAdModal
          isOpen={createAdModalOpen}
          onClose={onCreateClose}
          onSuccess={onSuccess}
        />
      )}
      {editAdModalOpen && selectedAd && (
        <EditAdModal
          ad={selectedAd}
          isOpen={editAdModalOpen}
          onClose={onEditClose}
          onSuccess={onSuccess}
        />
      )}
      {deleteAdDialogOpen && selectedAd && (
        <DeleteAdDialog
          isOpen={deleteAdDialogOpen}
          onClose={onDeleteClose}
          ad={selectedAd}
          onSuccess={onSuccess}
        />
      )}
    </>
  );
}
