import { Users } from 'lucide-react'

export default function TeacherDetailsGroups({ teacher, isRtl, t }) {
  const groups = teacher?.groups || []

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6">
      <h3 className="text-base font-bold text-slate-855 dark:text-white border-b border-slate-105 dark:border-slate-800/60 pb-3 flex items-center gap-2">
        <Users className="text-[#005953]" size={18} />
        {isRtl ? `المجموعات التابعة (${groups.length})` : `Associated Groups (${groups.length})`}
      </h3>

      <div className="space-y-4">
        {groups.length === 0 ? (
          <div className="text-center py-6 text-slate-400 dark:text-slate-500 font-bold text-sm">
            {t('adminDashboard.teachers.noGroups', 'لا توجد مجموعات مرتبطة بهذا المعلم')}
          </div>
        ) : (
          groups.map((group) => (
            <div
              key={group.id}
              className="p-5 bg-slate-50/50 dark:bg-slate-950/20 rounded-3xl border border-slate-100 dark:border-slate-850/60 space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-slate-800 dark:text-white">
                    {group.name}
                  </h4>
                  <p className="text-xs text-slate-400 dark:text-slate-500 font-bold">
                    {group.level}
                  </p>
                </div>
                <span className="inline-flex items-center self-start sm:self-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/20 dark:text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 me-1.5" />
                  {isRtl ? 'نشط' : 'Active'}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-3 border-t border-slate-100 dark:border-slate-800/60 text-start">
                <div>
                  <span className="block text-xs font-bold text-slate-400 dark:text-slate-500">
                    {isRtl ? 'الطلاب' : 'Students'}
                  </span>
                  <span className="text-sm font-extrabold text-slate-700 dark:text-slate-205 mt-0.5 block">
                    {group.studentsCount}
                  </span>
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-400 dark:text-slate-500">
                    {isRtl ? 'النوع' : 'Type'}
                  </span>
                  <span className="text-sm font-extrabold text-slate-700 dark:text-slate-205 mt-0.5 block">
                    {group.type}
                  </span>
                </div>
                <div className="col-span-2">
                  <span className="block text-xs font-bold text-slate-400 dark:text-slate-500">
                    {isRtl ? 'المواعيد' : 'Schedule'}
                  </span>
                  <span className="text-sm font-extrabold text-slate-700 dark:text-slate-205 mt-0.5 block">
                    {group.schedule}
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}