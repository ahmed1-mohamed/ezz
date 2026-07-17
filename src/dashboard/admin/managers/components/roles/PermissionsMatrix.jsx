import { CheckCircle2 } from 'lucide-react'
import Spinner from '@/shared/components/Spinner'

export default function PermissionsMatrix({
  SYSTEM_PERMISSIONS,
  isRtl,
  t,
  isAdminAssignment,
  activeKeys,
  handleToggleKey,
  previewStats,
  selectedPermissionId,
  updateMutation,
  handleSave,
  onCancel,
  adminSupervisor,
  onSaveAdminRole,
  onDeleteAdminRole
}) {
  return (
    <div className="flex-1 w-full space-y-6">
      {SYSTEM_PERMISSIONS.map((module) => (
        <div key={module.module} className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft">
          <h2 className="text-base font-bold text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-800/60 pb-3">
            {isRtl ? module.titleAr : module.titleEn}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
            {module.actions.map((action) => {
              const isActive = activeKeys.includes(action.key)
              return (
                <button
                  key={action.key}
                  type="button"
                  disabled={isAdminAssignment}
                  aria-pressed={isActive}
                  onClick={isAdminAssignment ? undefined : () => handleToggleKey(action.key)}
                  className={`w-full flex items-center justify-between p-4 rounded-2xl border select-none transition-all duration-200 ${isAdminAssignment ? 'cursor-default opacity-80' : 'cursor-pointer'
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
                </button>
              )
            })}
          </div>
        </div>
      ))}

      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft">
        <h2 className="text-base font-bold text-slate-800 dark:text-white mb-5">
          {isRtl ? 'معاينة نطاق الأذونات' : 'Preview of Permissions Scope'}
        </h2>

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
              {t('adminDashboard.managers.permissionsScreen.importantNoteTitle', 'ملاحظة مهمة')}
            </p>
            <p className="text-xs text-amber-700/90 dark:text-amber-500/90 mt-1 leading-relaxed">
              {t('adminDashboard.managers.permissionsScreen.importantNoteDescription', 'ستؤثر التغييرات في الأذونات على جميع المستخدمين بهذا الدور على الفور. تأكد من المراجعة بعناية قبل الحفظ.')}
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
              onSaveAdminRole(adminSupervisor.admin_id || adminSupervisor.id || adminSupervisor._id, selectedPermissionId, actionType);
            }}
            disabled={!selectedPermissionId}
            className="flex-1 py-4 bg-[#0f7a6c] hover:bg-[#0d6b5e] text-white font-bold rounded-2xl transition-all shadow-md shadow-[#0f7a6c]/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {isRtl ? 'حفظ الصلاحية للمشرف' : 'Save Permission to Supervisor'}
          </button>

          {!!(adminSupervisor?.permissionId || adminSupervisor?.permission?.id || adminSupervisor?.permission) && (
            <button
              type="button"
              onClick={() => onDeleteAdminRole(adminSupervisor.admin_id || adminSupervisor.id || adminSupervisor._id)}
              className="px-6 py-4 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-2xl transition-all shadow-md shadow-rose-600/20 cursor-pointer"
            >
              {isRtl ? 'حذف الصلاحيات' : 'Delete Permissions'}
            </button>
          )}

          <button
            type="button"
            onClick={onCancel}
            className="flex-1 py-4 bg-white hover:bg-slate-50 text-slate-700 font-bold rounded-2xl border border-slate-200 transition-all dark:bg-slate-950 dark:text-slate-350 dark:border-slate-800 cursor-pointer"
          >
            {t('adminDashboard.managers.permissionsScreen.cancel', 'إلغاء')}
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
            className="flex-1 py-4 bg-white hover:bg-slate-50 text-slate-700 font-bold rounded-2xl border border-slate-200 transition-all dark:bg-slate-950 dark:text-slate-300 dark:border-slate-800 cursor-pointer"
          >
            {t('adminDashboard.managers.permissionsScreen.cancel', 'إلغاء')}
          </button>
        </div>
      )}
    </div>
  )
}
