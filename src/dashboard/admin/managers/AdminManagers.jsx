import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { managersApi } from '@/shared/services/api/managersApi'
import { landingApi } from '@/shared/services/api/landingApi'
import { showDeleteConfirm } from '@/shared/utils/sweetAlert'
import ManagersList from './components/ManagersList'
import RolesPermissionsScreen from './components/RolesPermissionsScreen'
import AddSupervisorScreen from './components/AddSupervisorScreen'
import EditSupervisorScreen from './components/EditSupervisorScreen'
import Spinner from '@/shared/components/Spinner'

export default function AdminManagers() {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')
  const queryClient = useQueryClient()

  // View state: 'list' | 'permissions' | 'add-supervisor' | 'edit-supervisor'
  const [viewMode, setViewMode] = useState('list')
  const [selectedRole, setSelectedRole] = useState('مشرف عام')
  const [selectedSupervisor, setSelectedSupervisor] = useState(null)

  // Fetch Admins
  const { data: supervisorsData, isLoading: isLoadingSupervisors } = useQuery({
    queryKey: ['admins', 'all'],
    queryFn: () => managersApi.fetchSupervisors(),
    staleTime: 5 * 60 * 1000,
  })

  const supervisors = supervisorsData?.data || []

  // Fetch real permissions from backend
  const { data: realPermissionsData, isLoading: isLoadingPermissions } = useQuery({
    queryKey: ['permissions'],
    queryFn: () => managersApi.fetchPermissions(),
    staleTime: 5 * 60 * 1000,
  })
  const realPermissionsList = realPermissionsData?.data || []

  // Fetch countries
  const { data: countriesData } = useQuery({
    queryKey: ['countries'],
    queryFn: () => landingApi.fetchCountries(),
    staleTime: 5 * 60 * 1000,
  })
  const countries = countriesData?.data || []

  // Mock roles and role permissions for UI (until Roles API is fully clarified)
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

  // Delete Mutation
  const deleteMutation = useMutation({
    mutationFn: managersApi.deleteSupervisor,
    onSuccess: () => {
      queryClient.invalidateQueries(['admins'])
    }
  })

  // Toggle Status Mutation
  const toggleStatusMutation = useMutation({
    mutationFn: ({ id, payload }) => managersApi.updateSupervisor(id, payload),
    onSuccess: () => {
      queryClient.invalidateQueries(['admins'])
    }
  })

  // Add Mutation
  const addMutation = useMutation({
    mutationFn: managersApi.createSupervisor,
    onSuccess: () => {
      queryClient.invalidateQueries(['admins'])
      setViewMode('list')
    }
  })

  // Edit Mutation
  const editMutation = useMutation({
    mutationFn: ({ id, payload }) => managersApi.updateSupervisor(id, payload),
    onSuccess: () => {
      queryClient.invalidateQueries(['admins'])
      setViewMode('list')
    }
  })

  // Action: Toggle Status
  const handleToggleStatus = async (id) => {
    const supervisor = supervisors.find((s) => s.id === id)
    if (!supervisor) return

    const updatedStatus = supervisor.status === 'Active' ? 'Suspended' : 'Active'
    try {
      await toggleStatusMutation.mutateAsync({
        id,
        payload: { status: updatedStatus }
      })
    } catch (err) {
      console.error('Failed to toggle supervisor status:', err)
    }
  }

  // Action: Delete Supervisor
  const handleDeleteSupervisor = async (supervisor) => {
    const isConfirmed = await showDeleteConfirm(isRtl, supervisor.name);
    if (!isConfirmed) return;
    
    try {
      await deleteMutation.mutateAsync(supervisor.id)
    } catch (err) {
      console.error('Failed to delete supervisor:', err)
    }
  }

  // Action: Open Edit Screen
  const handleOpenEditScreen = (supervisor) => {
    setSelectedSupervisor(supervisor)
    setSelectedRole(supervisor.role || 'مشرف عام')
    setViewMode('edit-supervisor')
  }

  // Loading indicator
  if (isLoadingSupervisors || isLoadingRoles || isLoadingPermissions) {
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
          isRtl={isRtl}
          t={t}
          onToggleStatus={handleToggleStatus}
          onDelete={handleDeleteSupervisor}
          onOpenAddScreen={() => setViewMode('add-supervisor')}
          onOpenEditScreen={handleOpenEditScreen}
          onOpenRolePermissions={(roleName) => {
            setSelectedRole(roleName)
            setViewMode('permissions')
          }}
        />
      )}

      {viewMode === 'permissions' && (
        <RolesPermissionsScreen
          roles={roles}
          selectedRole={selectedRole}
          rolesPermissions={rolesPermissions}
          realPermissionsList={realPermissionsList}
          isRtl={isRtl}
          t={t}
          onSelectRole={setSelectedRole}
          onTogglePermission={() => {}} // Disabled real implementation for now
          onSavePermissions={() => setViewMode('list')} // Disabled real implementation for now
          onCancel={() => setViewMode('list')}
          onAddNewRole={() => {}} // Disabled real implementation for now
        />
      )}

      {viewMode === 'add-supervisor' && (
        <AddSupervisorScreen
          roles={roles}
          rolesPermissions={rolesPermissions}
          realPermissionsList={realPermissionsList}
          countries={countries}
          isRtl={isRtl}
          t={t}
          onSave={async (data) => {
            try {
              await addMutation.mutateAsync(data)
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
          roles={roles}
          rolesPermissions={rolesPermissions}
          realPermissionsList={realPermissionsList}
          countries={countries}
          isRtl={isRtl}
          t={t}
          onSave={async (data) => {
            try {
              await editMutation.mutateAsync({ id: selectedSupervisor.id, payload: data })
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
