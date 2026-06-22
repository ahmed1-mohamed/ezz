import { Crown, Shield, Users, BookOpen } from 'lucide-react'

export default function PermissionsCard({
  roles,
  selectedRole,
  onSelectRole,
  onSkipPermissions,
  isRtl,
  t
}) {
  
  const renderRoleIcon = (iconName, size = 18) => {
    switch (iconName) {
      case 'crown':
        return <Crown size={size} />
      case 'shield':
        return <Shield size={size} />
      case 'users':
        return <Users size={size} />
      case 'book':
        return <BookOpen size={size} />
      default:
        return <Shield size={size} />
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6">
      
      {/* Title */}
      <h3 className="text-base font-bold text-slate-800 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800/60 pb-3">
        <span>{t('adminDashboard.managers.addSupervisorScreen.permissionsTitle', 'الأذونات')}</span>
      </h3>

      {/* Roles Select list aligned properly */}
      <div className="space-y-3">
        {roles.map((role) => {
          const isActive = selectedRole === role.name
          return (
            <button
              key={role.id}
              type="button"
              onClick={() => onSelectRole(role.name)}
              className={`flex items-center justify-between p-4 rounded-2xl w-full text-start transition-all cursor-pointer border ${
                isActive
                  ? 'bg-brand-50/50 border-brand-500/25 text-brand-700 dark:bg-brand-950/20 dark:text-brand-300 dark:border-brand-500/10 font-bold'
                  : 'bg-[#fcfdfd] border-slate-100 dark:bg-slate-950/20 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-950/40 hover:border-slate-200 dark:hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={isActive ? 'text-brand-600 dark:text-brand-400' : 'text-slate-450'}>
                  {renderRoleIcon(role.icon, 20)}
                </div>
                <span className="text-sm font-semibold">
                  {isRtl ? role.name : (role.nameEn || role.name)}
                </span>
              </div>
            </button>
          )
        })}
      </div>

      {/* Skip Button Option */}
      <div className="pt-2 text-center">
        <button
          type="button"
          onClick={onSkipPermissions}
          className="text-sm font-bold text-blue-600 hover:text-blue-700 dark:text-blue-450 dark:hover:text-blue-400 transition-colors inline-block active:scale-95"
        >
          {t('adminDashboard.managers.addSupervisorScreen.skipForNow', 'التخطي و تحديد لاحقا')}
        </button>
      </div>

    </div>
  )
}
