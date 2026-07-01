import { Shield } from 'lucide-react'

export default function PermissionsCard({
  permissionsList = [],
  selectedPermissionId,
  onSelectPermission,
  onSkipPermissions,
  isRtl,
  t
}) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6">
      <h3 className="text-base font-bold text-slate-800 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800/60 pb-3">
        <span>{t('adminDashboard.managers.addSupervisorScreen.permissionsTitle', 'الأدوار (الأذونات)')}</span>
      </h3>

      <div className="space-y-3">
        {permissionsList.map((perm) => {
          const isActive = selectedPermissionId === perm.id
          return (
            <button
              key={perm.id}
              type="button"
              onClick={() => onSelectPermission(perm.id)}
              className={`flex items-center justify-between p-4 rounded-2xl w-full text-start transition-all cursor-pointer border ${
                isActive
                  ? 'bg-[#e9f6f3]/50 border-[#0f7a6c]/30 text-[#0f7a6c] dark:bg-[#0f7a6c]/10 dark:text-[#14a693] dark:border-[#0f7a6c]/20 font-bold'
                  : 'bg-[#fcfdfd] border-slate-100 dark:bg-slate-950/20 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-950/40 hover:border-slate-200 dark:hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={isActive ? 'text-[#0f7a6c] dark:text-[#14a693]' : 'text-slate-400'}>
                  <Shield size={20} />
                </div>
                <span className="text-sm font-semibold">
                  {perm.name}
                </span>
              </div>
            </button>
          )
        })}
        {permissionsList.length === 0 && (
          <p className="text-sm text-slate-400 text-center py-2">
            {isRtl ? 'لا توجد أدوار متوفرة' : 'No roles available'}
          </p>
        )}
      </div>

      <div className="pt-2 text-center">
        <button
          type="button"
          onClick={onSkipPermissions}
          className="text-sm font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors inline-block active:scale-95 cursor-pointer"
        >
          {t('adminDashboard.managers.addSupervisorScreen.skipForNow', 'التخطي و تحديد لاحقا')}
        </button>
      </div>
    </div>
  )
}
