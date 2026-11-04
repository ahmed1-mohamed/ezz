"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Loader2, AlertTriangle } from "lucide-react";
import { EmptyState } from "@/components/ui/empty-state";
import dynamic from "next/dynamic";

const AddRoleModal = dynamic(() => import("@/components/modals/roles/add-role-modal"));
const ViewRoleModal = dynamic(() =>
  import("@/components/modals/roles/view-role-modal").then((mod) => mod.ViewRoleModal),
);
const EditRoleModal = dynamic(() =>
  import("@/components/modals/roles/edit-role-modal").then((mod) => mod.EditRoleModal),
);
import useDashboardAdminRolesData from "@/hooks/use-dashboardAdminRoles";
import { toast } from "sonner";
import { getApiErrorMessage } from "@/lib/api-errors";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { RoleCard } from "./components/role-card";
import { useLanguage } from "@/contexts/LanguageContext";

export interface Role {
  role_id: number;
  role_name: string;
  description: string[] | string | null;
  users_count: number;
  is_active: boolean;
  is_default?: number | boolean;
  role_type?: string;
  default_permissions?: any;
  created_at?: string;
  deleted_at?: string | null;
  updated_at?: string;
  permissions?: Record<string, Record<string, boolean>> | null;
  raw_permissions?: any[];
  permissions_count?: number;
}

export default function RolesPage() {
  const { t } = useLanguage();
  const [isAddRoleModalOpen, setIsAddRoleModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const { rolesData, roles, deleteRoleMutation } = useDashboardAdminRolesData();
  const isDeleting = deleteRoleMutation.isPending;

  const handleViewRole = (role: Role) => {
    setSelectedRole(role);
    setIsViewModalOpen(true);
  };

  const handleEditRole = (role: Role) => {
    setSelectedRole(role);
    setIsEditModalOpen(true);
  };

  const handleDeleteRole = () => {
    if (!selectedRole) return;

    deleteRoleMutation.mutate(selectedRole.role_id, {
      onSuccess: () => {
        toast.success(t("roles.messages.deletedSuccess"));
        setDeleteDialogOpen(false);
        setSelectedRole(null);
      },
      onError: (error) => {
        console.error(error);
        toast.error(getApiErrorMessage(error, t, t("roles.messages.deleteFailed")), { id: API_ERROR_TOAST_ID });
      },
    });
  };

  if (rolesData.isLoading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-teal-600" />
      </div>
    );
  }

  if (rolesData.isError) {
    return (
      <div className="flex min-h-[400px] items-center justify-center flex-col p-6">
        <EmptyState
          type="error"
          title={t("roles.messages.errorLoading")}
          message={getApiErrorMessage(rolesData.error, t, t("common.failedToLoad"))}
        />
        <Button
          variant="outline"
          onClick={() => rolesData.refetch()}
          className="mt-4 border-gray-200 text-gray-700 hover:bg-gray-50"
        >
          {t("roles.messages.tryAgain")}
        </Button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-full overflow-hidden space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {t("roles.titleWithPermissions")}
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
            {t("roles.subtitle")}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            className="bg-teal-700 hover:bg-teal-800 text-white gap-2 font-medium px-4 py-2 text-sm shadow-xs rounded-md"
            onClick={() => setIsAddRoleModalOpen(true)}
          >
            <Plus className="h-4 w-4" />
            {t("roles.newCustomRole")}
          </Button>
        </div>
      </div>

      {/* Grid of Role Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {roles.map((role: Role) => (
          <RoleCard
            key={role.role_id}
            role={role}
            onView={handleViewRole}
            onEdit={handleEditRole}
            onDelete={(r) => {
              setSelectedRole(r);
              setDeleteDialogOpen(true);
            }}
          />
        ))}
      </div>

      {isAddRoleModalOpen && (
        <AddRoleModal
          isOpen={isAddRoleModalOpen}
          onClose={() => setIsAddRoleModalOpen(false)}
        />
      )}

      <Dialog
        open={deleteDialogOpen}
        onOpenChange={(open) => {
          if (isDeleting) return;
          setDeleteDialogOpen(open);
          if (!open) setSelectedRole(null);
        }}
      >
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-red-600">
              <AlertTriangle className="h-5 w-5" />
              {t("roles.deleteTitle")}
            </DialogTitle>
            <DialogDescription>
              {t("roles.deleteConfirm")}
            </DialogDescription>
          </DialogHeader>
          {selectedRole && (
            <div className="py-4">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 space-y-2 border border-gray-100 dark:border-gray-700">
                <p className="font-medium text-gray-900 dark:text-white">
                  {selectedRole.role_name}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {selectedRole.users_count} {t("roles.usersCount")}
                </p>
              </div>
            </div>
          )}
          <DialogFooter className="sm:justify-end gap-2">
            <Button
              variant="outline"
              onClick={() => {
                setDeleteDialogOpen(false);
                setSelectedRole(null);
              }}
              disabled={isDeleting}
            >
              {t("roles.cancelBtn")}
            </Button>
            <Button
              variant="destructive"
              onClick={handleDeleteRole}
              disabled={isDeleting}
              className="bg-red-600 hover:bg-red-700"
            >
              {isDeleting ? t("roles.deletingBtn") : t("roles.deleteBtn")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {isViewModalOpen && selectedRole && (
        <ViewRoleModal
          roleId={selectedRole.role_id!}
          roleName={selectedRole.role_name}
          roleType={selectedRole.role_type}
          description={selectedRole.description || []}
          usersCount={selectedRole.users_count || 0}
          isActive={selectedRole.is_active}
          isDefault={selectedRole.is_default}
          createdAt={selectedRole.created_at}
          updatedAt={selectedRole.updated_at}
          permissions={selectedRole.permissions}
          rawPermissions={selectedRole.raw_permissions}
          isOpen={isViewModalOpen}
          onClose={() => setIsViewModalOpen(false)}
          onEdit={() => {
            setIsViewModalOpen(false);
            setIsEditModalOpen(true);
          }}
          onDelete={() => {
            setIsViewModalOpen(false);
            setDeleteDialogOpen(true);
          }}
        />
      )}

      {isEditModalOpen && selectedRole && (
        <EditRoleModal
          roleId={selectedRole.role_id!}
          roleName={selectedRole.role_name}
          description={selectedRole.description || []}
          permissions={selectedRole.permissions}
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          onSuccess={() => {
            setIsEditModalOpen(false);
          }}
        />
      )}
    </div>
  );
}