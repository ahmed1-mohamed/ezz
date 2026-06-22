import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { managersApi } from '@/shared/services/api/managersApi'
import ManagersList from './components/ManagersList'
import RolesPermissionsScreen from './components/RolesPermissionsScreen'
import AddSupervisorScreen from './components/AddSupervisorScreen'
import EditSupervisorScreen from './components/EditSupervisorScreen'
import Spinner from '@/shared/components/Spinner'

export default function AdminManagers() {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')

  // View state: 'list' | 'permissions' | 'add-supervisor' | 'edit-supervisor'
  const [viewMode, setViewMode] = useState('list')
  const [supervisors, setSupervisors] = useState([])
  const [roles, setRoles] = useState([])
  const [rolesPermissions, setRolesPermissions] = useState({})
  
  const [selectedRole, setSelectedRole] = useState('مشرف عام')
  const [selectedSupervisor, setSelectedSupervisor] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  // Load all initial data from API service
  useEffect(() => {
    async function loadInitialData() {
      setIsLoading(true)
      try {
        const supervisorsRes = await managersApi.fetchSupervisors()
        const rolesRes = await managersApi.fetchRoles()
        const permissionsRes = await managersApi.fetchRolesPermissions()

        if (supervisorsRes.success) {
          setSupervisors(supervisorsRes.data)
        }
        if (rolesRes.success) {
          setRoles(rolesRes.data)
        }
        if (permissionsRes.success) {
          setRolesPermissions(permissionsRes.data)
        }
      } catch (err) {
        console.error('Failed to load initial managers data:', err)
      } finally {
        setIsLoading(false)
      }
    }
    loadInitialData()
  }, [])

  // Action: Toggle Status
  const handleToggleStatus = async (id) => {
    const supervisor = supervisors.find((s) => s.id === id)
    if (!supervisor) return

    const updatedStatus = supervisor.status === 'Active' ? 'Suspended' : 'Active'
    try {
      const res = await managersApi.updateSupervisor(id, {
        ...supervisor,
        status: updatedStatus,
      })
      if (res.success) {
        setSupervisors((prev) =>
          prev.map((s) => (s.id === id ? { ...s, status: updatedStatus } : s))
        )
      }
    } catch (err) {
      console.error('Failed to toggle supervisor status:', err)
    }
  }

  // Action: Delete Supervisor
  const handleDeleteSupervisor = async (id) => {
    const confirmationMsg = isRtl
      ? 'هل أنت متأكد من حذف هذا المشرف؟'
      : 'Are you sure you want to delete this supervisor?'
    
    if (window.confirm(confirmationMsg)) {
      try {
        const res = await managersApi.deleteSupervisor(id)
        if (res.success) {
          setSupervisors((prev) => prev.filter((s) => s.id !== id))
        }
      } catch (err) {
        console.error('Failed to delete supervisor:', err)
      }
    }
  }

  // Action: Save role permissions modifications
  const handleSavePermissions = async (roleName) => {
    const permissionsForRole = rolesPermissions[roleName]
    try {
      const res = await managersApi.updateRolePermissions(roleName, permissionsForRole)
      if (res.success) {
        alert(isRtl ? 'تم حفظ الأذونات بنجاح!' : 'Permissions saved successfully!')
        setViewMode('list')
      }
    } catch (err) {
      console.error('Failed to save permissions:', err)
    }
  }

  // Action: Add new role (from Permissions Sidebar)
  const handleAddNewRole = async (roleName) => {
    try {
      const res = await managersApi.createRole(roleName)
      if (res.success) {
        setRoles((prev) => [...prev, res.data])
        setRolesPermissions((prev) => ({
          ...prev,
          [roleName]: {
            userManagement: { viewUsers: true, createUsers: false, editUsers: false, deleteUsers: false },
            groupManagement: { viewGroups: true, createGroups: false, editGroups: false, deleteGroups: false },
            courseManagement: { viewCourses: true, createCourses: false, editCourses: false, deleteCourses: false },
            reportsManagement: { viewReports: true, createReports: false, editReports: false, deleteReports: false },
            fundsManagement: { viewFinancials: true, createFinancials: false, editFinancials: false, deleteFinancials: false },
            systemSettings: { viewSettings: true, editSettings: false, manageIntegrations: false, configureSystem: false },
            scheduleSettings: { viewSchedule: true, editSchedule: false, manageSchedules: false, configureSchedule: false },
          },
        }))
        setSelectedRole(roleName)
      }
    } catch (err) {
      console.error('Failed to create role:', err)
    }
  }

  // Action: Toggle individual permission checkboxes
  const handleTogglePermission = (sectionKey, optionKey) => {
    setRolesPermissions((prev) => {
      const rolePerms = prev[selectedRole] || {}
      const sectionPerms = rolePerms[sectionKey] || {}
      return {
        ...prev,
        [selectedRole]: {
          ...rolePerms,
          [sectionKey]: {
            ...sectionPerms,
            [optionKey]: !sectionPerms[optionKey],
          },
        },
      }
    })
  }

  // Action: Save or Update supervisor details
  const handleSaveSupervisor = async (formData) => {
    if (viewMode === 'edit-supervisor' && selectedSupervisor) {
      // Edit mode
      try {
        const res = await managersApi.updateSupervisor(selectedSupervisor.id, {
          ...selectedSupervisor,
          ...formData,
        })
        if (res.success) {
          setSupervisors((prev) =>
            prev.map((s) => (s.id === selectedSupervisor.id ? { ...s, ...res.data } : s))
          )
          setSelectedSupervisor(null)
          setViewMode('list')
        }
      } catch (err) {
        console.error('Failed to update supervisor details:', err)
      }
    } else {
      // Add mode
      try {
        const res = await managersApi.createSupervisor({
          name: formData.name,
          nameEn: formData.nameEn,
          email: formData.email,
          phone: formData.phone,
          role: formData.role,
          status: formData.status,
          photoUrl: formData.photoUrl,
          permissions: {
            manageTeachers: false,
            manageStudents: false,
            viewReports: false,
            managePayments: false,
            manageSettings: false,
          },
        })
        if (res.success) {
          setSupervisors((prev) => [res.data, ...prev])
          setViewMode('list')
        }
      } catch (err) {
        console.error('Failed to create supervisor:', err)
      }
    }
  }

  // Action: Open Edit Screen
  const handleOpenEditScreen = (supervisor) => {
    // Extract base number and prefix if any
    let phoneNum = supervisor.phone || ''
    let prefix = '+20'
    
    if (phoneNum.startsWith('+')) {
      const parts = phoneNum.split(' ')
      if (parts.length > 1) {
        prefix = parts[0]
        phoneNum = parts.slice(1).join(' ')
      }
    }

    setSelectedSupervisor(supervisor)
    setSelectedRole(supervisor.role || 'مشرف عام')
    setViewMode('edit-supervisor')
  }

  // Loading indicator for async fetch calls
  if (isLoading) {
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
          isRtl={isRtl}
          t={t}
          onSelectRole={setSelectedRole}
          onTogglePermission={handleTogglePermission}
          onSavePermissions={handleSavePermissions}
          onCancel={() => setViewMode('list')}
          onAddNewRole={handleAddNewRole}
        />
      )}
      {viewMode === 'add-supervisor' && (
        <AddSupervisorScreen
          roles={roles}
          rolesPermissions={rolesPermissions}
          isRtl={isRtl}
          t={t}
          onSave={handleSaveSupervisor}
          onCancel={() => {
            setViewMode('list')
          }}
        />
      )}

      {viewMode === 'edit-supervisor' && selectedSupervisor && (
        <EditSupervisorScreen
          roles={roles}
          rolesPermissions={rolesPermissions}
          supervisor={selectedSupervisor}
          isRtl={isRtl}
          t={t}
          onSave={handleSaveSupervisor}
          onToggleStatus={handleToggleStatus}
          onCancel={() => {
            setSelectedSupervisor(null)
            setViewMode('list')
          }}
        />
      )}
    </div>
  )
}
