import { useMemo } from 'react'
import { Shield } from 'lucide-react'

export default function EditGrantedPermissionsCard({
  selectedRole,
  rolesPermissions,
  isRtl
}) {
  
  const categories = useMemo(() => {
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

    const items = []

    // 1. User Management -> "إدارة الطلاب" (Students) & "إدارة المدرسين" (Teachers)
    if (activePermissions.userManagement) {
      const userManagementTags = []
      if (activePermissions.userManagement.createUsers) userManagementTags.push(isRtl ? 'إنشاء' : 'Create')
      if (activePermissions.userManagement.editUsers) userManagementTags.push(isRtl ? 'تحديث' : 'Update')
      if (activePermissions.userManagement.deleteUsers) userManagementTags.push(isRtl ? 'إزالة' : 'Remove')
      if (activePermissions.userManagement.viewUsers) userManagementTags.push(isRtl ? 'استعراض' : 'View')

      if (userManagementTags.length > 0) {
        items.push({
          title: isRtl ? 'إدارة الطلاب' : 'Student Management',
          tags: userManagementTags
        })
        items.push({
          title: isRtl ? 'إدارة المدرسين' : 'Teacher Management',
          // Give teachers management an extra tag to match screenshot ('✓ تفعيل')
          tags: [...userManagementTags, isRtl ? 'تفعيل' : 'Activate']
        })
      }
    }

    // 2. Group Management -> "إدارة المجموعات"
    if (activePermissions.groupManagement) {
      const groupTags = []
      if (activePermissions.groupManagement.createGroups) groupTags.push(isRtl ? 'إنشاء' : 'Create')
      if (activePermissions.groupManagement.editGroups) groupTags.push(isRtl ? 'تحديث' : 'Update')
      if (activePermissions.groupManagement.deleteGroups) groupTags.push(isRtl ? 'إزالة' : 'Remove')
      if (activePermissions.groupManagement.viewGroups) groupTags.push(isRtl ? 'استعراض' : 'View')

      if (groupTags.length > 0) {
        items.push({
          title: isRtl ? 'إدارة المجموعات' : 'Group Management',
          tags: groupTags
        })
      }
    }

    // 3. Course Management -> "إدارة الكورسات"
    if (activePermissions.courseManagement) {
      const courseTags = []
      if (activePermissions.courseManagement.createCourses) courseTags.push(isRtl ? 'إنشاء' : 'Create')
      if (activePermissions.courseManagement.editCourses) courseTags.push(isRtl ? 'تحديث' : 'Update')
      if (activePermissions.courseManagement.deleteCourses) courseTags.push(isRtl ? 'إزالة' : 'Remove')
      if (activePermissions.courseManagement.viewCourses) courseTags.push(isRtl ? 'استعراض' : 'View')

      if (courseTags.length > 0) {
        items.push({
          title: isRtl ? 'إدارة الكورسات' : 'Course Management',
          tags: courseTags
        })
      }
    }

    // 4. Reports Management -> "إدارة التقارير والتحليلات"
    if (activePermissions.reportsManagement) {
      const reportsTags = []
      if (activePermissions.reportsManagement.createReports) reportsTags.push(isRtl ? 'إنشاء' : 'Create')
      if (activePermissions.reportsManagement.editReports) reportsTags.push(isRtl ? 'تحديث' : 'Update')
      if (activePermissions.reportsManagement.deleteReports) reportsTags.push(isRtl ? 'إزالة' : 'Remove')
      if (activePermissions.reportsManagement.viewReports) reportsTags.push(isRtl ? 'استعراض' : 'View')

      if (reportsTags.length > 0) {
        items.push({
          title: isRtl ? 'إدارة التقارير' : 'Reports Management',
          tags: reportsTags
        })
      }
    }

    return items
  }, [rolesPermissions, selectedRole, isRtl])

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
