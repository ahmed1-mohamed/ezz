import { useState, useMemo, useEffect } from 'react'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { managersApi } from '@/shared/services/api/managersApi'
import { SYSTEM_PERMISSIONS } from '../constants'
import { showSuccessToast } from '@/shared/utils/sweetAlert'

import RoleList from './roles/RoleList'
import PermissionsMatrix from './roles/PermissionsMatrix'
import AddRoleModal from './roles/AddRoleModal'

export default function RolesPermissionsScreen({
  permissionsList = [],
  isRtl,
  t,
  onCancel,
  isAdminAssignment = false,
  adminSupervisor = null,
  onSaveAdminRole,
  onDeleteAdminRole
}) {
  const BackArrow = isRtl ? ArrowRight : ArrowLeft
  const queryClient = useQueryClient()

  const initialPermissionId = useMemo(() => {
    if (!adminSupervisor) return null
    return adminSupervisor.permissionId || adminSupervisor.permission?._id || adminSupervisor.permission?.id || (adminSupervisor.permission && typeof adminSupervisor.permission === 'object' ? (adminSupervisor.permission._id || adminSupervisor.permission.id) : adminSupervisor.permission) || null
  }, [adminSupervisor])

  const [selectedPermissionId, setSelectedPermissionId] = useState(() => {
    if (isAdminAssignment && adminSupervisor) {
      const initialId = adminSupervisor.permissionId || adminSupervisor.permission?._id || adminSupervisor.permission?.id || (adminSupervisor.permission && typeof adminSupervisor.permission === 'object' ? (adminSupervisor.permission._id || adminSupervisor.permission.id) : adminSupervisor.permission);
      if (initialId) return initialId;
    }
    return permissionsList[0]?.id || permissionsList[0]?._id || null;
  })

  useEffect(() => {
    if (isAdminAssignment && initialPermissionId) {
      setSelectedPermissionId(initialPermissionId)
    } else if (!selectedPermissionId && permissionsList.length > 0) {
      setSelectedPermissionId(permissionsList[0].id)
    }
  }, [initialPermissionId, isAdminAssignment, permissionsList])

  const [activeKeys, setActiveKeys] = useState([])

  const [isAddRoleModalOpen, setIsAddRoleModalOpen] = useState(false)
  const [newRoleNameAr, setNewRoleNameAr] = useState('')
  const [newRoleNameEn, setNewRoleNameEn] = useState('')

  const createMutation = useMutation({
    mutationFn: managersApi.createPermission,
    onSuccess: (data) => {
      queryClient.invalidateQueries(['permissions'])
      setIsAddRoleModalOpen(false)
      setNewRoleNameAr('')
      setNewRoleNameEn('')
      if (data?.data?._id || data?.data?.id) {
        setSelectedPermissionId(data.data._id || data.data.id)
      }
    }
  })

  const updateMutation = useMutation({
    mutationFn: ({ id, payload }) => managersApi.updatePermission(id, payload),
    onSuccess: () => {
      queryClient.invalidateQueries(['permissions'])
      showSuccessToast(isRtl ? 'تم الحفظ بنجاح!' : 'Saved successfully!', isRtl)
    }
  })

  const deleteRoleMutation = useMutation({
    mutationFn: (id) => managersApi.deletePermission(id),
    onSuccess: () => {
      queryClient.invalidateQueries(['permissions'])
      showSuccessToast(isRtl ? 'تم حذف الدور بنجاح!' : 'Role deleted successfully!', isRtl)
      if (permissionsList.length > 0) {
        const remaining = permissionsList.filter(p => p.id !== selectedPermissionId)
        setSelectedPermissionId(remaining[0]?.id || null)
      }
    }
  })

  useEffect(() => {
    if (selectedPermissionId) {
      const selected = permissionsList.find(p => p.id === selectedPermissionId)
      if (selected) {
        if (Array.isArray(selected.keys)) {
          setActiveKeys(selected.keys)
        } else if (Array.isArray(selected.actions)) {
          setActiveKeys(selected.actions.map(a => typeof a === 'object' ? a.key || a.name || a : a))
        } else {
          setActiveKeys([])
        }
      } else {
        setActiveKeys([])
      }
    }
  }, [selectedPermissionId, permissionsList])

  const selectedPermission = useMemo(() =>
    permissionsList.find(p => p.id === selectedPermissionId)
    , [selectedPermissionId, permissionsList])

  const handleToggleKey = (key) => {
    setActiveKeys(prev =>
      prev.includes(key)
        ? prev.filter(k => k !== key)
        : [...prev, key]
    )
  }

  const handleSave = () => {
    if (!selectedPermissionId) return

    updateMutation.mutate({
      id: selectedPermissionId,
      payload: {
        keys: activeKeys
      }
    })
  }

  const handleCreateRole = (e) => {
    e.preventDefault()
    if (!newRoleNameAr.trim() || !newRoleNameEn.trim()) return

    createMutation.mutate({
      name: {
        ar: newRoleNameAr.trim(),
        en: newRoleNameEn.trim()
      },
      keys: []
    })
  }

  const previewStats = useMemo(() => {
    let granted = activeKeys.length
    let totalOptions = 0

    SYSTEM_PERMISSIONS.forEach(m => {
      totalOptions += m.actions.length
    })

    const denied = totalOptions - granted
    const accessLevel = totalOptions > 0 ? Math.round((granted / totalOptions) * 100) : 0

    return { granted, denied, accessLevel }
  }, [activeKeys])

  const selectedRoleName = selectedPermission
    ? (typeof selectedPermission.name === 'object' ? (isRtl ? selectedPermission.name.ar || selectedPermission.name.en : selectedPermission.name.en || selectedPermission.name.ar) : selectedPermission.name)
    : ''

  const supervisorName = adminSupervisor ? (typeof adminSupervisor.name === 'object' ? (isRtl ? adminSupervisor.name.ar || adminSupervisor.name.en : adminSupervisor.name.en || adminSupervisor.name.ar) : adminSupervisor.name) : '';
  const pageTitle = isAdminAssignment
    ? (isRtl ? `صلاحيات المشرف: ${supervisorName}` : `Permissions for supervisor: ${supervisorName}`)
    : (selectedPermission
      ? t('adminDashboard.managers.permissionsScreen.title', { roleName: selectedRoleName }, `أذونات ${selectedRoleName}`)
      : t('adminDashboard.managers.permissionsScreen.rolesTitle', 'الأدوار'));

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="p-2.5 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full border border-slate-100 dark:border-slate-800 transition-all cursor-pointer hover:scale-105"
            title={t('adminDashboard.managers.permissionsScreen.backToList', 'العودة لقائمة المشرفين')}
            aria-label={t('adminDashboard.managers.permissionsScreen.backToList', 'العودة لقائمة المشرفين')}
          >
            <BackArrow size={20} />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
              <span>{pageTitle}</span>
            </h1>
            <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">
              {isAdminAssignment
                ? (isRtl ? 'اختر الدور الوظيفي للمشرف لمشاهدة وحفظ الصلاحيات الخاصة به.' : 'Select job role for the supervisor to view and assign permissions.')
                : (isRtl
                  ? `تكوين ما يمكن لمستخدمي "${selectedRoleName}" الوصول إليه وفعله.`
                  : `Configure what "${selectedRoleName}" users can access and do.`)}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onCancel}
          className="px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-2xl text-sm font-semibold transition-all dark:bg-slate-900 dark:text-slate-300 dark:border-slate-800 cursor-pointer"
        >
          {t('adminDashboard.managers.permissionsScreen.backToList', 'العودة لقائمة المشرفين')}
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <RoleList
          permissionsList={permissionsList}
          selectedPermissionId={selectedPermissionId}
          setSelectedPermissionId={setSelectedPermissionId}
          isRtl={isRtl}
          t={t}
          isAdminAssignment={isAdminAssignment}
          setIsAddRoleModalOpen={setIsAddRoleModalOpen}
          onDeleteRole={(id) => deleteRoleMutation.mutate(id)}
          isDeletingRole={deleteRoleMutation.isPending}
        />

        <PermissionsMatrix
          SYSTEM_PERMISSIONS={SYSTEM_PERMISSIONS}
          isRtl={isRtl}
          t={t}
          isAdminAssignment={isAdminAssignment}
          activeKeys={activeKeys}
          handleToggleKey={handleToggleKey}
          previewStats={previewStats}
          selectedPermissionId={selectedPermissionId}
          updateMutation={updateMutation}
          handleSave={handleSave}
          onCancel={onCancel}
          adminSupervisor={adminSupervisor}
          onSaveAdminRole={onSaveAdminRole}
          onDeleteAdminRole={onDeleteAdminRole}
        />
      </div>

      <AddRoleModal
        isOpen={isAddRoleModalOpen}
        onClose={() => setIsAddRoleModalOpen(false)}
        isRtl={isRtl}
        t={t}
        newRoleNameAr={newRoleNameAr}
        setNewRoleNameAr={setNewRoleNameAr}
        newRoleNameEn={newRoleNameEn}
        setNewRoleNameEn={setNewRoleNameEn}
        onSubmit={handleCreateRole}
        isPending={createMutation.isPending}
      />
    </div>
  )
}
