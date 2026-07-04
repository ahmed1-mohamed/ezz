import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import useDebounce from '@/shared/hooks/useDebounce'
import { managersApi } from '@/shared/services/api/managersApi'
import { landingApi } from '@/shared/services/api/landingApi'
import { showDeleteConfirm, showSuccessToast } from '@/shared/utils/sweetAlert'
import ManagersList from './components/ManagersList'
import RolesPermissionsScreen from './components/RolesPermissionsScreen'
import AddSupervisorScreen from './components/AddSupervisorScreen'
import EditSupervisorScreen from './components/EditSupervisorScreen'
import Spinner from '@/shared/components/Spinner'

export default function AdminManagers() {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')
  const queryClient = useQueryClient()

  const [viewMode, setViewMode] = useState('list')
  const [selectedRole, setSelectedRole] = useState('مشرف عام')
  const [selectedSupervisor, setSelectedSupervisor] = useState(null)
  const [isLoadingDetails, setIsLoadingDetails] = useState(false)

  const [currentPage, setCurrentPage] = useState(1)
  const [searchVal, setSearchVal] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  const debouncedSearch = useDebounce(searchVal, 300)

  useEffect(() => {
    setCurrentPage(1)
  }, [statusFilter, debouncedSearch])

  const { data: supervisorsData, isLoading: isLoadingSupervisors } = useQuery({
    queryKey: ['admins', statusFilter, currentPage, debouncedSearch],
    queryFn: () => {
      const params = {
        page: currentPage,
        limit: 5,
        search: debouncedSearch
      }
      if (statusFilter === 'active') {
        return managersApi.fetchActiveSupervisors(params)
      } else if (statusFilter === 'stopped') {
        return managersApi.fetchStoppedSupervisors(params)
      } else {
        return managersApi.fetchSupervisors(params)
      }
    },
    staleTime: 5 * 60 * 1000,
  })

  const supervisors = supervisorsData?.data || []

  const { data: realPermissionsData, isLoading: isLoadingPermissions } = useQuery({
    queryKey: ['permissions'],
    queryFn: () => managersApi.fetchPermissions(),
    staleTime: 5 * 60 * 1000,
  })
  const realPermissionsList = realPermissionsData?.data || []

  const { data: countriesData } = useQuery({
    queryKey: ['countries'],
    queryFn: () => landingApi.fetchCountries(),
    staleTime: 5 * 60 * 1000,
  })
  const countries = countriesData?.data || []

  const { data: rolesRes, isLoading: isLoadingRoles } = useQuery({
    queryKey: ['admin-roles'],
    queryFn: () => managersApi.fetchRoles(),
    staleTime: 5 * 60 * 1000,
  })
  const roles = rolesRes?.data || []

  const { data: permissionsRes } = useQuery({
    queryKey: ['admin-role-permissions'],
    queryFn: () => managersApi.fetchRolesPermissions(),
    staleTime: 5 * 60 * 1000,
  })
  const rolesPermissions = permissionsRes?.data || {}

  const updateMutation = useMutation({
    mutationFn: ({ id, adminData }) => managersApi.updateSupervisor(id, adminData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admins'] })
      showSuccessToast(isRtl ? 'تم تحديث بيانات المشرف بنجاح!' : 'Supervisor updated successfully!', isRtl)
      setViewMode('list')
    }
  })

  const createMutation = useMutation({
    mutationFn: (supervisorData) => managersApi.createSupervisor(supervisorData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admins'] })
      showSuccessToast(isRtl ? 'تم إضافة المشرف بنجاح!' : 'Supervisor added successfully!', isRtl)
      setViewMode('list')
    }
  })

  const deleteMutation = useMutation({
    mutationFn: (id) => managersApi.deleteSupervisor(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admins'] })
      showSuccessToast(isRtl ? 'تم حذف المشرف بنجاح!' : 'Supervisor deleted successfully!', isRtl)
      setViewMode('list')
    }
  })

  const toggleStatusMutation = useMutation({
    mutationFn: ({ userId }) => managersApi.toggleUserActive(userId),
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ['admins'] })
      const statusText = res?.data?.active ? (isRtl ? 'تفعيل' : 'activated') : (isRtl ? 'تعليق' : 'suspended')
      showSuccessToast(isRtl ? `تم ${statusText} المشرف بنجاح!` : `Supervisor account ${statusText} successfully!`, isRtl)
    }
  })

  const handleToggleStatus = (supervisor) => {
    const targetUserId = supervisor.user_id || supervisor.user?.id || supervisor.user?._id
    if (!targetUserId) {
      console.error('UserId is missing for toggle status operation!')
      return
    }
    toggleStatusMutation.mutate({ userId: targetUserId })
  }

  const handleDelete = async (supervisor) => {
    const isConfirmed = await showDeleteConfirm(
      isRtl ? 'هل أنت متأكد من حذف هذا المشرف؟' : 'Are you sure you want to delete this supervisor?',
      isRtl
    )
    if (!isConfirmed) return;

    try {
      await deleteMutation.mutateAsync(supervisor.id)
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

  if (isLoadingSupervisors || isLoadingRoles || isLoadingPermissions || isLoadingDetails) {
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
          permissionsList={realPermissionsList}
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
          roles={realPermissionsList}
          isRtl={isRtl}
          t={t}
          countries={countries}
          onSave={async (data) => {
            try {
              await createMutation.mutateAsync(data)
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
          roles={realPermissionsList}
          countries={countries}
          isRtl={isRtl}
          t={t}
          onSave={async (data) => {
            try {
              await updateMutation.mutateAsync({ id: selectedSupervisor.id || selectedSupervisor._id, adminData: data.adminData })
            } catch (err) {
              console.error('Failed to update supervisor:', err)
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