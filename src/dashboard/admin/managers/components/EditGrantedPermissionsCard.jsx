import { useMemo } from 'react'
import { Shield } from 'lucide-react'
import { SYSTEM_PERMISSIONS } from '../constants'

export default function EditGrantedPermissionsCard({
  selectedPermissionId,
  permissionsList = [],
  isRtl
}) {
  
  const categories = useMemo(() => {
    const items = []
    const selected = permissionsList.find(p => p.id === selectedPermissionId)
    const activeKeys = selected?.actions?.map(a => a.key) || []

    SYSTEM_PERMISSIONS.forEach(module => {
      const activeTags = []
      
      module.actions.forEach(action => {
        if (activeKeys.includes(action.key)) {
           activeTags.push(isRtl ? action.labelAr : action.labelEn)
        }
      })

      if (activeTags.length > 0) {
         items.push({
            title: isRtl ? module.titleAr : module.titleEn,
            tags: activeTags
         })
      }
    })

    return items
  }, [selectedPermissionId, permissionsList, isRtl])

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6">
      
      {/* Title */}
      <h3 className="text-base font-bold text-slate-800 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800/60 pb-3">
        <Shield size={18} className="text-[#0f7a6c]" />
        <span>{isRtl ? 'الصلاحيات الممنوحة' : 'Granted Permissions'}</span>
      </h3>

      {/* Permissions tags grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-slate-50/50 dark:bg-slate-950/20 border border-slate-100/50 dark:border-slate-850 space-y-3.5 text-start"
          >
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0f7a6c]" />
              <p className="text-sm font-bold text-slate-700 dark:text-slate-350">
                {cat.title}
              </p>
            </div>
            
            {/* Tag Badges list flex */}
            <div className="flex flex-wrap gap-2">
              {cat.tags.map((tag, tagIdx) => (
                <span
                  key={tagIdx}
                  className="inline-flex items-center px-3 py-1 bg-[#0f7a6c]/10 text-[#0f7a6c] dark:bg-[#0f7a6c]/20 dark:text-[#14a693] text-xs font-bold rounded-full border border-[#0f7a6c]/20"
                >
                  <span className="me-1 font-bold text-[10px]">✓</span>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}

        {categories.length === 0 && (
          <div className="col-span-2 text-center text-slate-400 dark:text-slate-500 py-4 font-semibold text-sm">
            {isRtl ? 'لا توجد صلاحيات ممنوحة لهذا الدور حالياً.' : 'No permissions granted for this role currently.'}
          </div>
        )}
      </div>

    </div>
  )
}
