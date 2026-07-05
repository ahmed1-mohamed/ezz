import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useQueryClient } from '@tanstack/react-query'
import { managersApi } from '@/shared/services/api/managersApi'
import { showDeleteConfirm, showSuccessToast } from '@/shared/utils/sweetAlert'
import ManagersList from './components/ManagersList'
import RolesPermissionsScreen from './components/RolesPermissionsScreen'
import AddSupervisorScreen from './components/AddSupervisorScreen'
import EditSupervisorScreen from './components/EditSupervisorScreen'
import Spinner from '@/shared/components/Spinner'
import { useManagers } from './hooks/useManagers'
import { useManagersMutations } from './hooks/useManagersMutations'

export default function AdminManagers() {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')
  const queryClient = useQueryClient()

  const [viewMode, setViewMode] = useState('list')
  const [selectedRole, setSelectedRole] = useState('مشرف عام')
  const [selectedSupervisor, setSelectedSupervisor] = useState(null)
  const [isLoadingDetails, setIsLoadingDetails] = useState(false)

  const {
    currentPage,
    setCurrentPage,
    searchVal,
    setSearchVal,
    statusFilter,
    setStatusFilter,
    supervisorsData,
    supervisors,
    isLoadingSupervisors,
    permissionsList,
    isLoadingPermissions,
    countries
  } = useManagers()

  const {
    updateMutation,
    createMutation,
    deleteMutation,
    toggleStatusMutation
  } = useManagersMutations(isRtl)

  const handleToggleStatus = (supervisor) => {
    const targetUserId = supervisor.user_id || supervisor.user?.id || supervisor.user?._id
    if (!targetUserId) {
      console.error('UserId is missing for toggle status operation!')
      return
    }
    toggleStatusMutation.mutate({ userId: targetUserId })
  }

  const handleDelete = async (supervisor) => {
    const supervisorName = typeof supervisor.name === 'object' && supervisor.name !== null
      ? (isRtl ? supervisor.name.ar || supervisor.name.en : supervisor.name.en || supervisor.name.ar)
      : (supervisor.name || '');

    const isConfirmed = await showDeleteConfirm(isRtl, supervisorName)
    if (!isConfirmed) return;

    try {
      const adminId = supervisor.admin_id || supervisor.id || supervisor._id;
      await deleteMutation.mutateAsync(adminId)
    } catch (err) {
      console.error('Failed to delete supervisor:', err)
    }
  }

  const handleOpenEditScreen = async (supervisor) => {
    setIsLoadingDetails(true)
    try {
      const adminId = supervisor.admin_id || supervisor.id || supervisor._id
      const rawAdminRes = await managersApi.fetchRawAdminById(adminId)
      const rawAdmin = rawAdminRes?.data || rawAdminRes || supervisor

      const arName = rawAdmin.name?.ar || rawAdmin.nameAr || rawAdmin.name_ar || (typeof rawAdmin.name === 'string' ? rawAdmin.name : '');
      const enName = rawAdmin.name?.en || rawAdmin.nameEn || rawAdmin.name_en || (typeof rawAdmin.name === 'string' ? rawAdmin.name : '');

      const preparedAdmin = {
        ...rawAdmin,
        name: arName,
        nameEn: enName
      }

      setSelectedSupervisor(preparedAdmin)
      setSelectedRole(rawAdmin.role || 'مشرف عام')
      setViewMode('edit-supervisor')
    } catch (err) {
      console.error('Failed to fetch raw admin details:', err)
      setSelectedSupervisor(supervisor)
      setViewMode('edit-supervisor')
    } finally {
      setIsLoadingDetails(false)
    }
  }

  if (isLoadingSupervisors || isLoadingPermissions || isLoadingDetails) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <Spinner />
      </div>
    )
  }

  return (
    <div className="p-1 md:p-6" dir={isRtl ? 'rtl' : 'ltr'}>
      {viewMode === 'list' && (
        <ManagersList
          supervisors={supervisors}
          statistics={supervisorsData?.statistics}
          searchVal={searchVal}
          onSearchChange={setSearchVal}
          statusFilter={statusFilter}
          onStatusFilterChange={setStatusFilter}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          totalPages={supervisorsData?.pagination?.numberOfPages || supervisorsData?.pagination?.pages || supervisorsData?.pagination?.totalPages || 1}
          isRtl={isRtl}
          t={t}
          onToggleStatus={handleToggleStatus}
          onDelete={handleDelete}
          onOpenAddScreen={() => setViewMode('add-supervisor')}
          onOpenEditScreen={handleOpenEditScreen}
          onOpenRolePermissions={(supervisorOrRoleName) => {
            if (supervisorOrRoleName && typeof supervisorOrRoleName === 'object') {
              setSelectedSupervisor(supervisorOrRoleName)
              setViewMode('assign-role')
            } else {
              setSelectedRole(supervisorOrRoleName || 'مشرف عام')
              setViewMode('permissions')
            }
          }}
        />
      )}

      {(viewMode === 'permissions' || (viewMode === 'assign-role' && selectedSupervisor)) && (
        <RolesPermissionsScreen
          permissionsList={permissionsList}
          isRtl={isRtl}
          t={t}
          isAdminAssignment={viewMode === 'assign-role'}
          adminSupervisor={selectedSupervisor}
          onSaveAdminRole={async (adminId, permissionId, actionType) => {
            try {
              if (actionType === 'assign') {
                await managersApi.assignAdminPermission(adminId, permissionId)
              } else {
                await managersApi.updateAdminPermission(adminId, permissionId)
              }
              queryClient.invalidateQueries({ queryKey: ['admins'] })
              showSuccessToast(isRtl ? 'تم حفظ الدور بنجاح!' : 'Role saved successfully!', isRtl)
              setViewMode('list')
              setSelectedSupervisor(null)
            } catch (err) {
              console.error('Failed to save admin role:', err)
            }
          }}
          onDeleteAdminRole={async (adminId) => {
            try {
              await managersApi.deleteAdminPermission(adminId)
              queryClient.invalidateQueries({ queryKey: ['admins'] })
              showSuccessToast(isRtl ? 'تم حذف الصلاحيات بنجاح!' : 'Permissions deleted successfully!', isRtl)
              setViewMode('list')
              setSelectedSupervisor(null)
            } catch (err) {
              console.error('Failed to delete admin role:', err)
            }
          }}
          onCancel={() => {
            setSelectedSupervisor(null)
            setViewMode('list')
          }}
        />
      )}

      {viewMode === 'add-supervisor' && (
        <AddSupervisorScreen
          roles={permissionsList}
          isRtl={isRtl}
          t={t}
          countries={countries}
          onSave={async (data) => {
            try {
              const res = await createMutation.mutateAsync(data.adminData)
              const newAdmin = res?.data || res;
              const newAdminId = newAdmin?.admin_id || newAdmin?.id || newAdmin?._id;
              if (newAdminId && data.permissionId) {
                await managersApi.assignAdminPermission(newAdminId, data.permissionId);
                queryClient.invalidateQueries({ queryKey: ['admins'] });
              }
              setViewMode('list')
            } catch (err) {
              console.error('Failed to add supervisor:', err)
            }
          }}
          onCancel={() => setViewMode('list')}
        />
      )}

      {viewMode === 'edit-supervisor' && selectedSupervisor && (
        <EditSupervisorScreen
          supervisor={selectedSupervisor}
          roles={permissionsList}
          countries={countries}
          isRtl={isRtl}
          t={t}
          onToggleStatus={handleToggleStatus}
          onSave={async (data) => {
            try {
              await updateMutation.mutateAsync({ id: selectedSupervisor.admin_id || selectedSupervisor.id || selectedSupervisor._id, adminData: data.adminData })
              setViewMode('list')
            } catch (err) {
              console.error('Failed to update supervisor:', err)
            }
          }}
          onUpdatePassword={async (newPassword) => {
            try {
              const targetUserId = selectedSupervisor.user_id || selectedSupervisor.user?.id || selectedSupervisor.user?._id;
              await managersApi.changeUserPassword(targetUserId, { password: newPassword });
              showSuccessToast(isRtl ? 'تم تحديث كلمة المرور بنجاح!' : 'Password updated successfully!', isRtl);
            } catch (err) {
              console.error('Failed to update password:', err);
            }
          }}
          onCancel={() => {
            setSelectedSupervisor(null)
            setViewMode('list')
          }}
        />
      )}
    </div>
  )
}
