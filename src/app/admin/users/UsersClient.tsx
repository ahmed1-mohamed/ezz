"use client";

import React, { Suspense } from "react";
import { Pagination } from "@/components/shared/Pagination";
import dynamic from "next/dynamic";

import { useUsers } from "@/features/users/hooks/useUsers";
import { useServerPagination } from "@/hooks/useServerPagination";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTableSettings } from "@/hooks/use-table-settings";
import { useExportUsers } from "@/features/users/hooks/useExportUsers";
import { useUsersModals } from "@/features/users/hooks/useUsersModals";

import { UsersLoadingState } from "@/features/users/components/UsersLoadingState";
import { UsersFilters } from "@/features/users/components/UsersFilters";
import { UsersPageHeader } from "@/features/users/components/UsersPageHeader";

const UsersTable = dynamic(
  () => import("@/features/users/components/UsersTable").then((mod) => mod.UsersTable),
  { ssr: false },
);

const UsersModals = dynamic(
  () => import("@/features/users/components/UsersModals").then((mod) => mod.UsersModals),
  { ssr: false }
);

const UsersDeleteDialog = dynamic(
  () => import("@/features/users/components/UsersDeleteDialog").then((mod) => mod.UsersDeleteDialog),
  { ssr: false }
);

const INITIAL_FILTERS = { status: "all", user_type: "all" };

export function UsersClient() {
  const { t } = useLanguage();
  return (
    <Suspense fallback={<div className="p-8 text-center text-gray-500">{t("common.loading")}</div>}>
      <UsersPageContent />
    </Suspense>
  );
}

function UsersPageContent() {
  const { t } = useLanguage();

  const DEFAULT_COLUMNS = React.useMemo(
    () => [
      { id: "users", label: t("users.columns.user"), visible: true },
      { id: "role", label: t("users.columns.role"), visible: true },
      { id: "email", label: t("users.columns.email"), visible: true },
      { id: "lastLogin", label: t("users.columns.lastLogin"), visible: true },
      { id: "status", label: t("users.columns.status"), visible: true },
      { id: "actions", label: t("users.columns.actions"), visible: true },
    ],
    [t]
  );

  const tableSettings = useTableSettings("users", DEFAULT_COLUMNS);

  const {
    page,
    perPage,
    searchQuery,
    debouncedSearch,
    filters,
    setPage,
    setPerPage,
    setSearchQuery,
    setFilter,
  } = useServerPagination({
    initialPage: 1,
    initialPerPage: tableSettings.settings.itemsPerPage,
    initialFilters: INITIAL_FILTERS,
  });

  React.useEffect(() => {
    setPerPage(String(tableSettings.settings.itemsPerPage));
  }, [tableSettings.settings.itemsPerPage, setPerPage]);

  const {
    usersData,
    users,
    totalUsers,
    deleteUserMutation,
    addUserMutation,
  } = useUsers(
    page,
    perPage,
    debouncedSearch || undefined,
    filters.status !== "all" ? filters.status : undefined,
    filters.user_type !== "all" ? filters.user_type : undefined,
    tableSettings.isInitialized,
  );

  const { isLoading: isQueryLoading, isError, error, refetch } = usersData;
  // Wait for the saved page size so the list is requested once with the right per_page.
  const isLoading = isQueryLoading || !tableSettings.isInitialized;
  const isDeleting = deleteUserMutation.isPending;

  const {
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
  } = useUsersModals(addUserMutation, deleteUserMutation, t);

  const {
    isExporting,
    handleExportExcel,
    handleExportCsv,
    handleExportPdf,
  } = useExportUsers(debouncedSearch || undefined, filters);

  const totalPages = Math.max(1, Math.ceil(totalUsers / perPage));

  return (
    <div className="p-3 sm:p-4 space-y-4 max-w-full overflow-hidden">
      <UsersPageHeader
        totalUsers={totalUsers}
        isExporting={isExporting}
        onExportExcel={handleExportExcel}
        onExportCsv={handleExportCsv}
        onExportPdf={handleExportPdf}
        onAddUserClick={() => setIsAddUserModalOpen(true)}
        tableSettings={tableSettings}
      />

      <UsersLoadingState
        isLoading={isLoading}
        isError={isError}
        error={error as Error | null}
        onRetry={refetch}
      />

      {!isLoading && !isError && (
        <>
          <div className="w-full">
            <UsersFilters
              searchQuery={searchQuery}
              statusFilter={filters.status}
              userTypeFilter={filters.user_type}
              onSearchChange={setSearchQuery}
              onStatusChange={(val) => setFilter("status", val)}
              onUserTypeChange={(val) => setFilter("user_type", val)}
            />
          </div>

          <UsersTable
            settings={tableSettings}
            users={users}
            onView={handleViewUser}
            onEdit={handleEditUser}
            onDelete={handleDeleteClick}
          />

          <Pagination
            page={page}
            totalPages={totalPages}
            perPage={perPage}
            totalItems={totalUsers}
            currentItemsCount={users.length}
            onPageChange={setPage}
            onPerPageChange={(val) => {
              setPerPage(val);
              tableSettings.setItemsPerPage(Number(val));
            }}
          />
        </>
      )}

      <UsersModals
        addUserModalOpen={isAddUserModalOpen}
        viewUserModalOpen={viewUserModalOpen}
        editUserModalOpen={editUserModalOpen}
        userIdToView={userIdToView}
        userToEdit={userToEdit}
        isAddPending={addUserMutation.isPending}
        onAddClose={() => setIsAddUserModalOpen(false)}
        onAddSubmit={handleAddUser}
        onViewClose={() => {
          setViewUserModalOpen(false);
          setUserIdToView(null);
        }}
        onViewEdit={handleViewEditTransition}
        onViewDelete={handleViewDeleteTransition}
        onEditClose={() => {
          setEditUserModalOpen(false);
          setUserToEdit(null);
        }}
      />

      <UsersDeleteDialog
        isOpen={deleteDialogOpen}
        isPending={isDeleting}
        onClose={() => setDeleteDialogOpen(false)}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
}