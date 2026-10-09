import { Users, Calendar } from 'lucide-react'

export default function TeacherDetailsGroupsCard({ teacher, isRtl = true }) {
  const rawGroups = Array.isArray(teacher?.groups) && teacher.groups.length > 0
    ? teacher.groups
    : [
        {
          id: '1',
          name: 'مجموعة القرآن أ',
          level: 'متوسط',
          status: 'Active',
          studentsCount: 4,
          maxStudents: 5,
          type: 'مجموعة',
          schedule: 'السبت, الاثنين, الأربعاء - 10:00'
        }
      ]

  return (
    <div className="bg-white dark:bg-slate-900 rounded-[28px] p-6 sm:p-8 shadow-sm border border-slate-100/80 dark:border-slate-800/60 space-y-5 text-start">
      <div className="flex items-center gap-2">
        <h2 className="text-xl font-bold text-slate-800 dark:text-white">
          {isRtl ? `المجموعات التابعة (${rawGroups.length})` : `Assigned Groups (${rawGroups.length})`}
        </h2>
        <Users size={20} className="text-[#005953]" />
      </div>

      <div className="space-y-4">
        {rawGroups.map((group, index) => {
          const groupName = group.name || (isRtl ? `مجموعة #${index + 1}` : `Group #${index + 1}`)
          const levelName = group.level || (isRtl ? 'متوسط' : 'Intermediate')
          const count = group.studentsCount ?? 4
          const max = group.maxStudents ?? 5
          const type = group.type || (isRtl ? 'مجموعة' : 'Group')
          const schedule = group.schedule || 'السبت, الاثنين, الأربعاء - 10:00'

          return (
            <div
              key={group.id || index}
              className="bg-[#fcfdfd] dark:bg-slate-950/40 rounded-2xl p-5 border border-slate-100 dark:border-slate-800/60 space-y-4"
            >
               <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-base font-bold text-slate-800 dark:text-slate-100">
                    {groupName}
                  </h4>
                  <span className="text-xs text-slate-400 block mt-0.5">
                    {levelName}
                  </span>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-600 border border-emerald-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>{isRtl ? 'نشط' : 'Active'}</span>
                </span>
              </div>

               <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#f3f7f6] dark:bg-slate-900 rounded-xl p-3 text-center">
                  <span className="text-[11px] font-bold text-slate-400 block">
                    {isRtl ? 'الطلاب' : 'Students'}
                  </span>
                  <span className="text-sm font-extrabold text-slate-700 dark:text-slate-200 block mt-0.5">
                    {count}/{max}
                  </span>
                </div>

                <div className="bg-[#f3f7f6] dark:bg-slate-900 rounded-xl p-3 text-center">
                  <span className="text-[11px] font-bold text-slate-400 block">
                    {isRtl ? 'النوع' : 'Type'}
                  </span>
                  <span className="text-sm font-extrabold text-slate-700 dark:text-slate-200 block mt-0.5">
                    {type}
                  </span>
                </div>
              </div>

               <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 pt-1 border-t border-slate-100/60 dark:border-slate-850">
                <Calendar size={14} className="text-slate-400" />
                <span>{schedule}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
