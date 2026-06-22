import { useMemo } from 'react'

export default function PermissionsPreviewCard({
  selectedRole,
  rolesPermissions,
  isRtl,
  t
}) {
  
  // Calculate dynamic stats for the "معاينة نطاق الأذونات" (Preview Scope) box
  const previewStats = useMemo(() => {
    const rolePerms = rolesPermissions[selectedRole] || {}
    const activePermissions = {
      userManagement: rolePerms.userManagement || { viewUsers: false, createUsers: false, editUsers: false, deleteUsers: false },
      groupManagement: rolePerms.groupManagement || { viewGroups: false, createGroups: false, editGroups: false, deleteGroups: false },
      courseManagement: rolePerms.courseManagement || { viewCourses: false, createCourses: false, editCourses: false, deleteCourses: false },
      reportsManagement: rolePerms.reportsManagement || { viewReports: false, createReports: false, editReports: false, deleteReports: false },
      fundsManagement: rolePerms.fundsManagement || { viewFinancials: false, createFinancials: false, editFinancials: false, deleteFinancials: false },
      systemSettings: rolePerms.systemSettings || { viewSettings: false, editSettings: false, manageIntegrations: false, configureSystem: false },
      scheduleSettings: rolePerms.scheduleSettings || { viewSchedule: false, editSchedule: false, manageSchedules: false, configureSchedule: false },
    }

    let granted = 0
    const totalOptions = 28 // 7 sections * 4 options each
    
    // Count all active 'true' entries
    Object.keys(activePermissions).forEach(sectionKey => {
      Object.keys(activePermissions[sectionKey]).forEach(optionKey => {
        if (activePermissions[sectionKey][optionKey]) {
          granted++
        }
      })
    })

    const denied = totalOptions - granted
    const accessLevel = Math.round((granted / totalOptions) * 100)

    return { granted, denied, accessLevel }
  }, [rolesPermissions, selectedRole])

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6">
      
      {/* Title */}
      <h3 className="text-base font-bold text-slate-800 dark:text-white mb-2">
        {isRtl ? 'معاينة نطاق الأذونات' : 'Preview of Permissions Scope'}
      </h3>

      {/* Dynamic metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Access Level Card (Blue) */}
        <div className="p-5 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100/50 dark:border-blue-900/30 text-center">
          <p className="text-3xl font-extrabold text-blue-700 dark:text-blue-400 mb-1">{previewStats.accessLevel}%</p>
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            {isRtl ? 'مستوى الوصول' : 'Access Level'}
          </p>
        </div>

        {/* Denied Permissions Card (Pink) */}
        <div className="p-5 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-100/50 dark:border-rose-900/30 text-center">
          <p className="text-3xl font-extrabold text-rose-600 dark:text-rose-400 mb-1">{previewStats.denied}</p>
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            {isRtl ? 'الأذونات المرفوضة' : 'Denied Permissions'}
          </p>
        </div>

        {/* Granted Permissions Card (Green) */}
        <div className="p-5 rounded-2xl bg-emerald-50/50 dark:bg-[#e9f6f3]/30 border border-emerald-100/50 dark:border-[#d3eee7]/30 text-center">
          <p className="text-3xl font-extrabold text-brand-600 dark:text-brand-400 mb-1">{previewStats.granted}</p>
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            {isRtl ? 'الأذونات الممنوحة' : 'Granted Permissions'}
          </p>
        </div>

      </div>

      {/* Warning Alert Banner */}
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
  )
}
