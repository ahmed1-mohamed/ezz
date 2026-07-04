import { useState, useMemo, useEffect } from 'react'
import {
  ArrowRight,
  ArrowLeft,
  Plus,
  X,
  Shield,
  CheckCircle2
} from 'lucide-react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { managersApi } from '@/shared/services/api/managersApi'
import { SYSTEM_PERMISSIONS } from '../constants'
import Spinner from '@/shared/components/Spinner'
import { showSuccessToast } from '@/shared/utils/sweetAlert'

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
    return adminSupervisor.permissionId || adminSupervisor.permission?.id || (adminSupervisor.permission && typeof adminSupervisor.permission === 'object' ? adminSupervisor.permission.id : adminSupervisor.permission) || null
  }, [adminSupervisor])

  const [selectedPermissionId, setSelectedPermissionId] = useState(() => {
    if (isAdminAssignment && adminSupervisor) {
      const initialId = adminSupervisor.permissionId || adminSupervisor.permission?.id || (adminSupervisor.permission && typeof adminSupervisor.permission === 'object' ? adminSupervisor.permission.id : adminSupervisor.permission);
      if (initialId) return initialId;
    }
    return permissionsList[0]?.id || null;
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
                : t('adminDashboard.managers.permissionsScreen.subtitle', 'تكوين ما يمكن للمشرفين الوصول إليه وفعله.')}
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

        <div className="w-full lg:w-80 shrink-0 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft">
          <h3 className="text-base font-bold text-slate-800 dark:text-white mb-4">
            {t('adminDashboard.managers.permissionsScreen.rolesTitle', 'الأدوار')}
          </h3>

          <div className="space-y-1.5 mb-6">
            {permissionsList.map((perm) => {
              const isActive = selectedPermissionId === perm.id
              const permName = typeof perm.name === 'object' ? (isRtl ? perm.name.ar || perm.name.en : perm.name.en || perm.name.ar) : perm.name
              return (
                <button
                  key={perm.id}
                  type="button"
                  onClick={() => setSelectedPermissionId(perm.id)}
                  className={`flex items-center justify-between p-3.5 rounded-2xl w-full text-start transition-all cursor-pointer ${isActive
                    ? 'bg-[#e9f6f3] text-[#0f7a6c] dark:bg-[#0f7a6c]/20 dark:text-[#14a693] font-semibold border-s-4 border-[#0f7a6c] shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-950/40'
                    }`}
                  dir={isRtl ? 'rtl' : 'ltr'}
                >
                  <div className="flex items-center gap-3">
                    <div className={isActive ? 'text-[#0f7a6c] dark:text-[#14a693]' : 'text-slate-400'}>
                      <Shield size={18} />
                    </div>
                    <span className="text-sm font-medium">{permName}</span>
                  </div>
                </button>
              )
            })}

            {permissionsList.length === 0 && (
              <p className="text-sm text-slate-400 text-center py-4">
                {isRtl ? 'لا توجد أدوار' : 'No roles found'}
              </p>
            )}
          </div>

          {!isAdminAssignment && (
            <button
              type="button"
              onClick={() => setIsAddRoleModalOpen(true)}
              className="w-full py-3 rounded-2xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-800/50 text-[#0f7a6c] dark:text-[#14a693] text-sm font-bold transition-all text-center flex items-center justify-center gap-2 border border-transparent hover:border-[#0f7a6c]/20 cursor-pointer"
            >
              <Plus size={16} />
              <span>{t('adminDashboard.managers.permissionsScreen.addNewRole', '+ إضافة دور جديد')}</span>
            </button>
          )}
        </div>

        <div className="flex-1 w-full space-y-6">

          {SYSTEM_PERMISSIONS.map((module) => (
            <div key={module.module} className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft">
              <h3 className="text-base font-bold text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-800/60 pb-3">
                {isRtl ? module.titleAr : module.titleEn}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                {module.actions.map((action) => {
                  const isActive = activeKeys.includes(action.key)
                  return (
                    <div
                      key={action.key}
                      onClick={isAdminAssignment ? undefined : () => handleToggleKey(action.key)}
                      className={`flex items-center justify-between p-4 rounded-2xl border select-none transition-all duration-200 ${isAdminAssignment ? 'cursor-default opacity-80' : 'cursor-pointer'
                        } ${isActive
                          ? 'bg-[#eef4f2] border-[#0f7a6c]/20 text-[#0f7a6c] dark:bg-[#0f7a6c]/10 dark:text-[#14a693] dark:border-[#0f7a6c]/10 font-bold shadow-sm'
                          : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 text-slate-400 dark:text-slate-500 hover:border-slate-200 dark:hover:border-slate-700'
                        }`}
                    >
                      <span className="text-sm font-semibold">{isRtl ? action.labelAr : action.labelEn}</span>

                      <div className={`h-5 w-5 rounded flex items-center justify-center transition-all ${isActive
                        ? 'bg-[#0f7a6c] text-white'
                        : 'border-2 border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900'
                        }`}>
                        {isActive && <CheckCircle2 size={14} className="text-white" />}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}

          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft">
            <h3 className="text-base font-bold text-slate-800 dark:text-white mb-5">
              {isRtl ? 'معاينة نطاق الأذونات' : 'Preview of Permissions Scope'}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="p-5 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100/50 dark:border-blue-900/30 text-center">
                <p className="text-3xl font-extrabold text-blue-700 dark:text-blue-400 mb-1">{previewStats.accessLevel}%</p>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  {isRtl ? 'مستوى الوصول' : 'Access Level'}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-100/50 dark:border-rose-900/30 text-center">
                <p className="text-3xl font-extrabold text-rose-600 dark:text-rose-400 mb-1">{previewStats.denied}</p>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  {isRtl ? 'الأذونات المرفوضة' : 'Denied Permissions'}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#e9f6f3]/50 border border-[#d3eee7]/50 dark:bg-[#0f7a6c]/10 dark:border-[#0f7a6c]/20 text-center">
                <p className="text-3xl font-extrabold text-[#0f7a6c] dark:text-[#14a693] mb-1">{previewStats.granted}</p>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  {isRtl ? 'الأذونات الممنوحة' : 'Granted Permissions'}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#fffbeb] dark:bg-amber-950/20 border border-[#fef3c7] dark:border-amber-900/30 flex items-start gap-3">
              <span className="text-amber-600 text-lg sm:text-xl font-bold shrink-0">⚠️</span>
              <div className="text-start">
                <p className="text-sm font-bold text-amber-800 dark:text-amber-400">
                  {isRtl ? 'ملاحظة مهمة' : 'Important Note'}
                </p>
                <p className="text-xs text-amber-700/90 dark:text-amber-500/90 mt-1 leading-relaxed">
                  {isRtl
                    ? 'ستؤثر التغييرات في الأذونات على جميع المستخدمين بهذا الدور على الفور. تأكد من المراجعة بعناية قبل الحفظ.'
                    : 'Changes to permissions will affect all users with this role immediately. Make sure to review carefully before saving.'}
                </p>
              </div>
            </div>
          </div>

          {isAdminAssignment ? (
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="button"
                onClick={() => {
                  const hasInitial = !!(adminSupervisor?.permissionId || adminSupervisor?.permission?.id || adminSupervisor?.permission);
                  const actionType = hasInitial ? 'update' : 'assign';
                  onSaveAdminRole(adminSupervisor.id || adminSupervisor._id, selectedPermissionId, actionType);
                }}
                disabled={!selectedPermissionId}
                className="flex-1 py-4 bg-[#0f7a6c] hover:bg-[#0d6b5e] text-white font-bold rounded-2xl transition-all shadow-md shadow-[#0f7a6c]/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isRtl ? 'حفظ الصلاحية للمشرف' : 'Save Permission to Supervisor'}
              </button>

              {!!(adminSupervisor?.permissionId || adminSupervisor?.permission?.id || adminSupervisor?.permission) && (
                <button
                  type="button"
                  onClick={() => onDeleteAdminRole(adminSupervisor.id || adminSupervisor._id)}
                  className="px-6 py-4 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-2xl transition-all shadow-md shadow-rose-600/20 cursor-pointer"
                >
                  {isRtl ? 'حذف الصلاحيات' : 'Delete Permissions'}
                </button>
              )}

              <button
                type="button"
                onClick={onCancel}
                className="flex-1 py-4 bg-white hover:bg-slate-50 text-slate-700 font-bold rounded-2xl border border-slate-200 transition-all dark:bg-slate-900 dark:text-slate-350 dark:border-slate-800 cursor-pointer"
              >
                {isRtl ? 'إلغاء' : 'Cancel'}
              </button>
            </div>
          ) : (
            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={handleSave}
                disabled={updateMutation.isPending || !selectedPermissionId}
                className="flex-1 py-4 bg-[#0f7a6c] hover:bg-[#0d6b5e] text-white font-bold rounded-2xl transition-all shadow-md shadow-[#0f7a6c]/20 disabled:opacity-70 flex items-center justify-center gap-2 cursor-pointer"
              >
                {updateMutation.isPending && <Spinner />}
                {isRtl ? 'حفظ التغييرات' : 'Save Changes'}
              </button>
              <button
                type="button"
                onClick={onCancel}
                className="flex-1 py-4 bg-white hover:bg-slate-50 text-slate-700 font-bold rounded-2xl border border-slate-200 transition-all dark:bg-slate-900 dark:text-slate-300 dark:border-slate-800 cursor-pointer"
              >
                {isRtl ? 'إلغاء' : 'Cancel'}
              </button>
            </div>
          )}
        </div>

      </div>

      {isAddRoleModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 animate-fadeIn">
          <div className="w-full max-w-md overflow-hidden bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 animate-slideUp">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 p-6">
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                {t('adminDashboard.managers.permissionsScreen.addNewRoleModalTitle', 'إضافة دور جديد')}
              </h3>
              <button
                onClick={() => setIsAddRoleModalOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors bg-slate-50 dark:bg-slate-800 rounded-full cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleCreateRole} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 text-start">
                  {isRtl ? 'الاسم (بالعربية)' : 'Name (Arabic)'}
                </label>
                <input
                  type="text"
                  required
                  value={newRoleNameAr}
                  onChange={(e) => setNewRoleNameAr(e.target.value)}
                  className="w-full bg-[#f8fafc] dark:bg-slate-950 border border-transparent focus:border-[#0f7a6c] focus:bg-white text-slate-800 dark:text-slate-100 rounded-xl py-3 px-4 outline-none transition-all text-sm"
                  placeholder="مثال: مشرف معلمين"
                  dir="rtl"
                />
              </div>


              <div className="flex justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsAddRoleModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 transition-all font-semibold text-sm cursor-pointer"
                >
                  {t('adminDashboard.managers.permissionsScreen.cancel', 'إلغاء')}
                </button>
                <button
                  type="submit"
                  disabled={createMutation.isPending}
                  className="px-6 py-2.5 rounded-xl bg-[#0f7a6c] text-white hover:bg-[#0d6b5e] transition-all font-semibold text-sm shadow-md shadow-[#0f7a6c]/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {createMutation.isPending && <Spinner />}
                  {t('adminDashboard.managers.permissionsScreen.addRoleSubmit', 'إضافة دور')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  )
}