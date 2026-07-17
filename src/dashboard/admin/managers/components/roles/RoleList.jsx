import { Plus, Shield, Trash2 } from 'lucide-react'
import { showDeleteConfirm } from '@/shared/utils/sweetAlert'

export default function RoleList({
  permissionsList,
  selectedPermissionId,
  setSelectedPermissionId,
  isRtl,
  t,
  isAdminAssignment,
  setIsAddRoleModalOpen,
  onDeleteRole,
  isDeletingRole
}) {
  return (
    <div className="w-full lg:w-80 shrink-0 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft">
      <h3 className="text-base font-bold text-slate-800 dark:text-white mb-4">
        {t('adminDashboard.managers.permissionsScreen.rolesTitle', 'الأدوار')}
      </h3>

      <div className="space-y-1.5 mb-6">
        {permissionsList.map((perm) => {
          const isActive = selectedPermissionId === perm.id
          const permName = typeof perm.name === 'object' ? (isRtl ? perm.name.ar || perm.name.en : perm.name.en || perm.name.ar) : perm.name
          return (
            <div key={perm.id} className="group flex items-center gap-1">
              <button
                type="button"
                onClick={() => setSelectedPermissionId(perm.id)}
                className={`flex items-center justify-between p-3.5 rounded-2xl flex-1 text-start transition-all cursor-pointer ${isActive
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

              {!isAdminAssignment && onDeleteRole && (
                <button
                  type="button"
                  title={isRtl ? 'حذف الدور' : 'Delete role'}
                  disabled={isDeletingRole}
                  onClick={async () => {
                    const confirmed = await showDeleteConfirm(isRtl, permName)
                    if (confirmed) onDeleteRole(perm.id)
                  }}
                  className="opacity-0 group-hover:opacity-100 p-2 rounded-xl text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-900/20 hover:text-rose-600 transition-all cursor-pointer disabled:opacity-30 shrink-0"
                >
                  <Trash2 size={15} />
                </button>
              )}
            </div>
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
  )
}
