import { useMemo } from 'react'
import { SYSTEM_PERMISSIONS } from '../constants'

export default function PermissionsPreviewCard({
  selectedPermissionId,
  permissionsList = [],
  isRtl
}) {

  const previewStats = useMemo(() => {
    let granted = 0
    let totalOptions = 0

    const selected = permissionsList.find(p => p.id === selectedPermissionId)
    let activeKeys = []
    if (selected) {
      if (Array.isArray(selected.keys)) {
        activeKeys = selected.keys
      } else if (Array.isArray(selected.actions)) {
        activeKeys = selected.actions.map(a => typeof a === 'object' ? a.key || a.name || a : a)
      }
    }
    SYSTEM_PERMISSIONS.forEach(m => {
      totalOptions += m.actions.length
    })

    granted = activeKeys.length
    const denied = totalOptions - granted
    const accessLevel = totalOptions > 0 ? Math.round((granted / totalOptions) * 100) : 0

    return { granted, denied, accessLevel }
  }, [selectedPermissionId, permissionsList])

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6">
      <h3 className="text-base font-bold text-slate-800 dark:text-white mb-2">
        {isRtl ? 'معاينة نطاق الأذونات' : 'Preview of Permissions Scope'}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
    </div>
  )
}