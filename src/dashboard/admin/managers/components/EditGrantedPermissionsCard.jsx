import { useMemo } from 'react'
import { Shield } from 'lucide-react'

export default function EditGrantedPermissionsCard({
  selectedRole,
  rolesPermissions,
  realPermissionsList = [],
  isRtl
}) {
  
  const categories = useMemo(() => {
    const rolePerms = rolesPermissions[selectedRole] || {}
    const items = []

    realPermissionsList?.forEach(module => {
      const activeTags = []
      
      module.actions.forEach(action => {
        if (rolePerms[module.id]?.[action.key]) {
           activeTags.push(action.label)
        }
      })

      if (activeTags.length > 0) {
         items.push({
            title: module.name,
            tags: activeTags
         })
      }
    })

    return items
  }, [rolesPermissions, selectedRole, realPermissionsList])

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6">
      
      {/* Title */}
      <h3 className="text-base font-bold text-slate-800 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800/60 pb-3">
        <Shield size={18} className="text-brand-500" />
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
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              <p className="text-sm font-bold text-slate-700 dark:text-slate-350">
                {cat.title}
              </p>
            </div>
            
            {/* Tag Badges list flex */}
            <div className="flex flex-wrap gap-2">
              {cat.tags.map((tag, tagIdx) => (
                <span
                  key={tagIdx}
                  className="inline-flex items-center px-3 py-1 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400 text-xs font-bold rounded-full border border-emerald-100/30"
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
