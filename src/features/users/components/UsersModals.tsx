"use client";

import dynamic from "next/dynamic";
import { CreateNewUserInput } from "@/validators/create-new-user.schema";

const AddUserModal = dynamic(
  () =>
    import("@/components/modals/users/add-user-modal").then(
      (mod) => mod.AddUserModal,
    ),
  { ssr: false },
);

const ViewUserModal = dynamic(
  () =>
    import("@/components/modals/users/view-user-modal").then(
      (mod) => mod.ViewUserModal,
    ),
  { ssr: false },
);

const EditUserModal = dynamic(
  () =>
    import("@/components/modals/users/edit-user-modal").then(
      (mod) => mod.EditUserModal,
    ),
  { ssr: false },
);

interface UsersModalsProps {
  addUserModalOpen: boolean;
  viewUserModalOpen: boolean;
  editUserModalOpen: boolean;
  userIdToView: number | null;
  userToEdit: number | null;
  isAddPending: boolean;
  onAddClose: () => void;
  onAddSubmit: (userData: CreateNewUserInput) => Promise<void>;
  onViewClose: () => void;
  onViewEdit: () => void;
  onViewDelete: () => void;
  onEditClose: () => void;
  onEditSuccess?: () => void;
}

export function UsersModals({
  addUserModalOpen,
  viewUserModalOpen,
  editUserModalOpen,
  userIdToView,
  userToEdit,
  isAddPending,
  onAddClose,
  onAddSubmit,
  onViewClose,
  onViewEdit,
  onViewDelete,
  onEditClose,
  onEditSuccess,
}: UsersModalsProps) {
  return (
    <>
      {addUserModalOpen && (
        <AddUserModal
          isOpen={addUserModalOpen}
          onClose={onAddClose}
          onSubmit={onAddSubmit}
          isPending={isAddPending}
        />
      )}

      {viewUserModalOpen && (
        <ViewUserModal
          isOpen={viewUserModalOpen}
          onClose={onViewClose}
          userId={userIdToView || 0}
          onEdit={onViewEdit}
          onDelete={onViewDelete}
        />
      )}

      {editUserModalOpen && (
        <EditUserModal
          isOpen={editUserModalOpen}
          onClose={onEditClose}
          userId={userToEdit || 0}
          onSuccess={onEditSuccess}
        />
      )}
    </>
  );
}
