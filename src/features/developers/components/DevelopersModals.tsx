"use client";

import dynamic from "next/dynamic";

interface DeveloperData {
  developer_id: number;
  name: string;
  email: string;
  phone_number: string;
  website: string;
  logo: string;
  description: string;
  status: string;
  is_top: number;
}

const AddDeveloperModal = dynamic(() =>
  import(
    "@/components/modals/developers/add-developer-modal"
  ).then((mod) => mod.AddDeveloperModal),
);

const BulkImportDevelopersModal = dynamic(() =>
  import(
    "@/components/modals/developers/bulk-import-developers-modal"
  ).then((mod) => mod.BulkImportDevelopersModal),
);

const EditDeveloperModal = dynamic(() =>
  import(
    "@/components/modals/developers/edit-developer-modal"
  ).then((mod) => mod.EditDeveloperModal),
);

interface DevelopersModalsProps {
  addModalOpen: boolean;
  bulkImportModalOpen: boolean;
  editModalOpen: boolean;
  selectedDeveloperId: number | null;
  selectedDeveloperData: DeveloperData | undefined;
  onBulkImport: (file: File) => Promise<void>;
  onAddClose: () => void;
  onBulkImportClose: () => void;
  onEditClose: () => void;
  onEditSuccess: () => void;
}

export function DevelopersModals({
  addModalOpen,
  bulkImportModalOpen,
  editModalOpen,
  selectedDeveloperId,
  selectedDeveloperData,
  onBulkImport,
  onAddClose,
  onBulkImportClose,
  onEditClose,
  onEditSuccess,
}: DevelopersModalsProps) {
  return (
    <>
      {addModalOpen && (
        <AddDeveloperModal isOpen={addModalOpen} onClose={onAddClose} />
      )}
      {bulkImportModalOpen && (
        <BulkImportDevelopersModal
          isOpen={bulkImportModalOpen}
          onClose={onBulkImportClose}
          onSubmit={onBulkImport}
        />
      )}
      {editModalOpen && (
        <EditDeveloperModal
          isOpen={editModalOpen}
          onClose={onEditClose}
          developerId={selectedDeveloperId}
          onSuccess={onEditSuccess}
        />
      )}
    </>
  );
}
