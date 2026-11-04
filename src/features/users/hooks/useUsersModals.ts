import { useState, useCallback } from "react";
import { toast } from "sonner";
import { User } from "@/features/users/types";
import { CreateNewUserInput } from "@/validators/create-new-user.schema";
import { getApiErrorMessage } from "@/lib/api-errors";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";

export function useUsersModals(addUserMutation: any, deleteUserMutation: any, t: any) {
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [viewUserModalOpen, setViewUserModalOpen] = useState(false);
  const [userIdToView, setUserIdToView] = useState<number | null>(null);
  const [editUserModalOpen, setEditUserModalOpen] = useState(false);
  const [userToEdit, setUserToEdit] = useState<number | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState<number | null>(null);

  const handleAddUser = useCallback(
    async (userData: CreateNewUserInput): Promise<void> => {
      const formData = new FormData();
      formData.append("first_name", userData.first_name);
      formData.append("last_name", userData.last_name);
      formData.append("email", userData.email);
      formData.append("phone_number", userData.phone_number);
      formData.append("password", userData.password);
      formData.append("password_confirmation", userData.password_confirmation);
      if (userData.role_id) {
        formData.append("role_id", String(userData.role_id));
      }
      if (userData.user_type) {
        formData.append("user_type", userData.user_type);
      }
      formData.append("status", userData.status || "active");

      if (userData.developer_id) {
        formData.append("developer_id", String(userData.developer_id));
      }
      if (userData.developer_role) {
        formData.append("developer_role", userData.developer_role);
      }
      if (userData.description) {
        formData.append("description", userData.description);
      }

      let file: Blob | File | null = null;
      const p = userData.profile_picture;

      if (p) {
        if (p instanceof File || p instanceof Blob) {
          file = p;
        } else if (typeof p === "object" && "size" in p && "type" in p) {
          file = p as unknown as Blob;
        } else if (p instanceof FileList && p.length > 0) {
          file = p[0];
        } else if (Array.isArray(p) && p.length > 0 && (p[0] instanceof File || p[0] instanceof Blob)) {
          file = p[0];
        }
      }

      if (file && (file instanceof File || file instanceof Blob)) {
        formData.append("profile_picture", file);
      }

      // Errors propagate to AddUserModal, which maps them to fields and toasts the message.
      await addUserMutation.mutateAsync(formData);
      toast.success(t("users.messages.addedSuccess"));
      setIsAddUserModalOpen(false);
    },
    [addUserMutation, t],
  );

  const handleViewUser = useCallback((user: User) => {
    setUserIdToView(user.user_id);
    setViewUserModalOpen(true);
  }, []);

  const handleEditUser = useCallback((userId: number) => {
    setUserToEdit(userId);
    setEditUserModalOpen(true);
  }, []);

  const handleDeleteClick = useCallback((userId: number) => {
    setUserToDelete(userId);
    setDeleteDialogOpen(true);
  }, []);

  const handleConfirmDelete = useCallback(() => {
    if (!userToDelete) return;
    deleteUserMutation.mutate(userToDelete, {
      onSuccess: () => {
        toast.success(t("users.messages.deletedSuccess"));
        setDeleteDialogOpen(false);
        setUserToDelete(null);
      },
      onError: (error: unknown) =>
        toast.error(getApiErrorMessage(error, t, t("users.messages.deleteFailed")), {
          id: API_ERROR_TOAST_ID,
        }),
    });
  }, [userToDelete, deleteUserMutation, t]);

  const handleViewEditTransition = useCallback((): void => {
    setViewUserModalOpen(false);
    if (userIdToView) {
      setUserToEdit(userIdToView);
      setEditUserModalOpen(true);
    }
    setUserIdToView(null);
  }, [userIdToView]);

  const handleViewDeleteTransition = useCallback((): void => {
    setViewUserModalOpen(false);
    if (userIdToView) handleDeleteClick(userIdToView);
  }, [userIdToView, handleDeleteClick]);

  return {
    isAddUserModalOpen,
    setIsAddUserModalOpen,
    viewUserModalOpen,
    setViewUserModalOpen,
    userIdToView,
    setUserIdToView,
    editUserModalOpen,
    setEditUserModalOpen,
    userToEdit,
    setUserToEdit,
    deleteDialogOpen,
    setDeleteDialogOpen,
    handleAddUser,
    handleViewUser,
    handleEditUser,
    handleDeleteClick,
    handleConfirmDelete,
    handleViewEditTransition,
    handleViewDeleteTransition,
  };
}
