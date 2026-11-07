import { useState, useEffect, useCallback, lazy, Suspense } from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useQueryClient } from '@tanstack/react-query'
import { managersApi } from '@/shared/services/api/managersApi'
import { showDeleteConfirm, showSuccessToast, showErrorToast } from '@/shared/utils/sweetAlert'
import ManagersList from './components/ManagersList'
import Spinner from '@/shared/components/Spinner'
import { useManagers } from './hooks/useManagers'
import { useManagersMutations } from './hooks/useManagersMutations'

const RolesPermissionsScreen = lazy(() => import('./components/RolesPermissionsScreen'))
const AddSupervisorScreen = lazy(() => import('./components/AddSupervisorScreen'))
const EditSupervisorScreen = lazy(() => import('./components/EditSupervisorScreen'))

export default function AdminManagers() {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const location = useLocation()
  const { id: routeAdminId } = useParams()
  const [viewMode, setViewMode] = useState('list')
  const [selectedSupervisor, setSelectedSupervisor] = useState(null)
  const [isLoadingDetails, setIsLoadingDetails] = useState(false)
  const {
    currentPage,
    setCurrentPage,
    searchVal,
    setSearchVal,
    commitSearch,
    statusFilter,
    setStatusFilter,
    enableExtraData,
    supervisorsData,
    supervisors,
    isLoadingSupervisors,
    permissionsList,
    countries
  } = useManagers()
  const {
    updateMutation,
    createMutation,
    deleteMutation,
    toggleStatusMutation
  } = useManagersMutations(isRtl)
  const loadSupervisorDetails = useCallback(async (adminId) => {
    enableExtraData()
    setIsLoadingDetails(true)
    try {
      const rawAdminRes = await managersApi.fetchRawAdminById(adminId)
      const rawAdmin = rawAdminRes?.data || rawAdminRes || {}
      const arName = rawAdmin.name?.ar || rawAdmin.nameAr || rawAdmin.name_ar || (typeof rawAdmin.name === 'string' ? rawAdmin.name : '')
      const enName = rawAdmin.name?.en || rawAdmin.nameEn || rawAdmin.name_en || (typeof rawAdmin.name === 'string' ? rawAdmin.name : '')
      const preparedAdmin = {
        ...rawAdmin,
        admin_id: rawAdmin.admin_id || rawAdmin.id || rawAdmin._id || adminId,
        id: rawAdmin.id || rawAdmin._id || rawAdmin.admin_id || adminId,
        _id: rawAdmin._id || rawAdmin.id || rawAdmin.admin_id || adminId,
        name: arName,
        nameEn: enName,
      }
      setSelectedSupervisor(preparedAdmin)
      return preparedAdmin
    } catch (err) {
      console.error('Failed to fetch raw admin details:', err)
      const fallback = { id: adminId, _id: adminId, admin_id: adminId }
      setSelectedSupervisor(fallback)
      return fallback
    } finally {
      setIsLoadingDetails(false)
    }
  }, [enableExtraData])
  useEffect(() => {
    const pathname = location.pathname
    if (pathname.endsWith('/managers/add')) {
      enableExtraData()
      setViewMode('add-supervisor')
    } else if (pathname.endsWith('/managers/permissions') || pathname.endsWith('/managers/roles')) {
      enableExtraData()
      setViewMode('permissions')
    } else if (routeAdminId && pathname.includes('/permissions')) {
      enableExtraData()
      setViewMode('assign-role')
      if (!selectedSupervisor || (String(selectedSupervisor.id) !== String(routeAdminId) && String(selectedSupervisor._id) !== String(routeAdminId))) {
        loadSupervisorDetails(routeAdminId)
      }
    } else if (routeAdminId) {
      enableExtraData()
      setViewMode('edit-supervisor')
      if (!selectedSupervisor || (String(selectedSupervisor.id) !== String(routeAdminId) && String(selectedSupervisor._id) !== String(routeAdminId))) {
        loadSupervisorDetails(routeAdminId)
      }
    } else {
      setViewMode('list')
      setSelectedSupervisor(null)
    }
  }, [location.pathname, routeAdminId, enableExtraData, loadSupervisorDetails, selectedSupervisor])
  const handleToggleStatus = (supervisor) => {
    const targetUserId = supervisor.user_id || supervisor.user?.id || supervisor.user?._id || (typeof supervisor.user === 'string' ? supervisor.user : null)
    if (!targetUserId) {
      console.error('UserId is missing for toggle status operation!')
      return
    }
    toggleStatusMutation.mutate(
      { userId: targetUserId },
      {
        onSuccess: () => {
          setSelectedSupervisor((prev) => {
            if (!prev) return prev
            const currentActive = prev.user?.active !== undefined ? prev.user.active : prev.active
            if (prev.user?.active !== undefined) {
              return { ...prev, user: { ...prev.user, active: !currentActive } }
            }
            return { ...prev, active: !currentActive }
          })
        }
      }
    )
  }
  const handleDelete = async (supervisor) => {
    const supervisorName = typeof supervisor.name === 'object' && supervisor.name !== null
      ? (isRtl ? supervisor.name.ar || supervisor.name.en : supervisor.name.en || supervisor.name.ar)
      : (supervisor.name || '')
    const isConfirmed = await showDeleteConfirm(isRtl, supervisorName)
    if (!isConfirmed) return
    try {
      const adminId = supervisor.admin_id || supervisor.id || supervisor._id
      await deleteMutation.mutateAsync(adminId)
    } catch (err) {
      console.error('Failed to delete supervisor:', err)
    }
  }
  const handleOpenEditScreen = async (supervisor) => {
    const adminId = supervisor.admin_id || supervisor.id || supervisor._id
    navigate(`/dashboard/admin/managers/${adminId}/edit`)
  }
  const handleOpenRolePermissions = (supervisorOrRoleName) => {
    enableExtraData()
    if (supervisorOrRoleName && typeof supervisorOrRoleName === 'object') {
      const adminId = supervisorOrRoleName.admin_id || supervisorOrRoleName.id || supervisorOrRoleName._id
      navigate(`/dashboard/admin/managers/${adminId}/permissions`)
    } else {
      navigate('/dashboard/admin/managers/permissions')
    }
  }
  if (isLoadingSupervisors && viewMode === 'list') {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <Spinner />
      </div>
    )
  }
  return (
    <div className="p-1 md:p-6 relative" dir={isRtl ? 'rtl' : 'ltr'}>
      {isLoadingDetails && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-3xl">
          <Spinner />
        </div>
      )}
      {viewMode === 'list' && (
        <ManagersList
          supervisors={supervisors}
          statistics={supervisorsData?.statistics}
          searchVal={searchVal}
          onSearchChange={setSearchVal}
          onSearch={commitSearch}
          statusFilter={statusFilter}
          onStatusFilterChange={setStatusFilter}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          totalPages={supervisorsData?.pagination?.numberOfPages || 1}
          isRtl={isRtl}
          t={t}
          onToggleStatus={handleToggleStatus}
          onDelete={handleDelete}
          onOpenAddScreen={() => {
            enableExtraData()
            navigate('/dashboard/admin/managers/add')
          }}
          onOpenEditScreen={handleOpenEditScreen}
          onOpenRolePermissions={handleOpenRolePermissions}
        />
      )}
      {(viewMode === 'permissions' || (viewMode === 'assign-role' && selectedSupervisor)) && (
        <Suspense fallback={<div className="p-12 flex justify-center"><Spinner /></div>}>
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
                queryClient.invalidateQueries({ queryKey: ['permissions'] })
                showSuccessToast(isRtl ? 'تم حفظ الدور بنجاح!' : 'Role saved successfully!', isRtl)
                navigate('/dashboard/admin/managers')
              } catch (err) {
                console.error('Failed to save admin role:', err)
                showErrorToast(err?.response?.data?.message || (isRtl ? 'فشل حفظ الصلاحية' : 'Failed to save permission'), isRtl)
              }
            }}
            onDeleteAdminRole={async (adminId) => {
              try {
                await managersApi.deleteAdminPermission(adminId)
                queryClient.invalidateQueries({ queryKey: ['admins'] })
                queryClient.invalidateQueries({ queryKey: ['permissions'] })
                showSuccessToast(isRtl ? 'تم حذف الصلاحيات بنجاح!' : 'Permissions deleted successfully!', isRtl)
                navigate('/dashboard/admin/managers')
              } catch (err) {
                console.error('Failed to delete admin role:', err)
                showErrorToast(err?.response?.data?.message || (isRtl ? 'فشل حذف الصلاحية' : 'Failed to delete permission'), isRtl)
              }
            }}
            onCancel={() => navigate('/dashboard/admin/managers')}
          />
        </Suspense>
      )}
      {viewMode === 'add-supervisor' && (
        <Suspense fallback={<div className="p-12 flex justify-center"><Spinner /></div>}>
          <AddSupervisorScreen
            roles={permissionsList}
            isRtl={isRtl}
            t={t}
            countries={countries}
            isSaving={createMutation.isPending}
            onSave={async (data) => {
              try {
                const res = await createMutation.mutateAsync(data.adminData)
                const newAdmin = res?.data || res
                const newAdminId = newAdmin?.admin_id || newAdmin?.id || newAdmin?._id
                if (newAdminId && data.permissionId) {
                  await managersApi.assignAdminPermission(newAdminId, data.permissionId)
                  queryClient.invalidateQueries({ queryKey: ['admins'] })
                }
                navigate('/dashboard/admin/managers')
              } catch (err) {
                console.error('Failed to add supervisor:', err)
              }
            }}
            onCancel={() => navigate('/dashboard/admin/managers')}
          />
        </Suspense>
      )}
      {viewMode === 'edit-supervisor' && selectedSupervisor && (
        <Suspense fallback={<div className="p-12 flex justify-center"><Spinner /></div>}>
          <EditSupervisorScreen
            supervisor={selectedSupervisor}
            roles={permissionsList}
            countries={countries}
            isRtl={isRtl}
            t={t}
            isSaving={updateMutation.isPending}
            onToggleStatus={handleToggleStatus}
            onSave={async (data) => {
              try {
                const targetAdminId = selectedSupervisor.admin_id || selectedSupervisor.id || selectedSupervisor._id
                await updateMutation.mutateAsync({ id: targetAdminId, adminData: data.adminData })
                if (data.permissionId && data.permissionId !== selectedSupervisor.permission?._id && data.permissionId !== selectedSupervisor.permissionId) {
                  try {
                    if (selectedSupervisor.permission?._id || selectedSupervisor.permissionId) {
                      await managersApi.updateAdminPermission(targetAdminId, data.permissionId)
                    } else {
                      await managersApi.assignAdminPermission(targetAdminId, data.permissionId)
                    }
                  } catch (permErr) {
                    console.error('Failed to update supervisor permission:', permErr)
                  }
                }
                queryClient.invalidateQueries({ queryKey: ['admins'] })
                navigate('/dashboard/admin/managers')
              } catch (err) {
                console.error('Failed to update supervisor:', err)
              }
            }}
            onUpdatePassword={async (newPassword) => {
              try {
                let targetUserId = selectedSupervisor.user_id ||
                  (typeof selectedSupervisor.user === 'string' ? selectedSupervisor.user : (selectedSupervisor.user?.id || selectedSupervisor.user?._id))
                if (!targetUserId) {
                  const adminId = selectedSupervisor.admin_id || selectedSupervisor.id || selectedSupervisor._id
                  const rawAdminRes = await managersApi.fetchRawAdminById(adminId)
                  const rawAdmin = rawAdminRes?.data || rawAdminRes
                  targetUserId = rawAdmin?.user_id || (typeof rawAdmin?.user === 'string' ? rawAdmin.user : (rawAdmin?.user?._id || rawAdmin?.user?.id)) || adminId
                }
                await managersApi.changeUserPassword(targetUserId, {
                  password: newPassword,
                  confirmPassword: newPassword,
                })
                showSuccessToast(isRtl ? 'تم تحديث كلمة المرور بنجاح!' : 'Password updated successfully!', isRtl)
              } catch (err) {
                console.error('Failed to update password:', err)
                showErrorToast(err?.response?.data?.message || (isRtl ? 'فشل تحديث كلمة المرور' : 'Failed to update password'), isRtl)
              }
            }}
            onCancel={() => navigate('/dashboard/admin/managers')}
          />
        </Suspense>
      )}
    </div>
  )
}
