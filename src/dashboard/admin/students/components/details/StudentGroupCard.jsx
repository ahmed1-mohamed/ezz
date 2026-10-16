import { BookOpen, Calendar, User, Layers } from 'lucide-react'

export default function StudentGroupCard({ student, isRtl, onOpenChangeGroup }) {
  const rawGroups = student?.groups || student?.Groups || []
  const groups = Array.isArray(rawGroups) ? rawGroups : (rawGroups ? [rawGroups] : [])

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6 text-start">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/60 pb-3">
        <div className="flex items-center gap-2 text-slate-800 dark:text-white">
          <BookOpen className="text-[#005953]" size={20} />
          <h3 className="text-base font-bold">
            {isRtl ? 'المجموعات التعليمية' : 'Educational Groups'}
          </h3>
          <span className="text-xs font-bold text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 rounded-full">
            {groups.length}
          </span>
        </div>
        {onOpenChangeGroup && (
          <button
            type="button"
            onClick={onOpenChangeGroup}
            className="px-3.5 py-1.5 bg-[#005953]/10 hover:bg-[#005953]/20 text-[#005953] dark:text-emerald-400 dark:bg-emerald-500/10 dark:hover:bg-emerald-500/25 text-xs font-bold rounded-xl transition-all cursor-pointer hover:scale-102"
          >
            {isRtl ? 'تغيير المجموعة' : 'Change Group'}
          </button>
        )}
      </div>

      {groups.length === 0 ? (
        <div className="p-8 text-center bg-slate-50/50 dark:bg-slate-950/20 rounded-3xl border border-slate-100/60 dark:border-slate-800/40 space-y-2">
          <Layers size={32} className="mx-auto text-slate-300 dark:text-slate-600" />
          <p className="text-sm font-bold text-slate-500 dark:text-slate-400">
            {isRtl ? 'لا توجد مجموعات تعليمية مسجلة للطالب حالياً' : 'No educational groups currently enrolled'}
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500">
            {isRtl ? 'يمكنك تعيين الطالب إلى مجموعة تعليمية عبر الضغط على تغيير المجموعة' : 'You can assign the student to a group by clicking Change Group'}
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {groups.map((grp, idx) => {
            const groupId = grp.id || grp._id || `group-${idx}`
            const groupName = typeof grp === 'string'
              ? grp
              : (typeof grp.name === 'object' && grp.name !== null
                  ? (grp.name.ar || grp.name.en || '')
                  : (grp.name || grp.title || `مجموعة ${idx + 1}`))

            const teacherName = typeof grp.teacher === 'object' && grp.teacher !== null
              ? (grp.teacher.name?.ar || grp.teacher.name?.en || grp.teacher.name || '')
              : (grp.teacherName || grp.teacher || '')

            const levelName = typeof grp.level === 'object' && grp.level !== null
              ? (grp.level.name?.ar || grp.level.name?.en || grp.level.name || '')
              : (grp.level || '')

            const studentsCount = grp.studentsCount || (Array.isArray(grp.students) ? grp.students.length : null)
            const maxStudents = grp.maxStudents || grp.capacity || null
            const schedule = grp.schedule || grp.days || grp.time || ''

            return (
              <div
                key={groupId}
                className="p-5 bg-slate-50/50 dark:bg-slate-950/20 rounded-3xl border border-slate-100 dark:border-slate-850/60 space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-slate-800 dark:text-white">
                      {groupName}
                    </h4>
                    {(teacherName || levelName) && (
                      <p className="text-xs text-slate-450 dark:text-slate-500 font-bold flex items-center gap-2">
                        {teacherName && (
                          <span className="flex items-center gap-1">
                            <User size={13} className="text-brand-500" />
                            {isRtl ? `المعلم: ${teacherName}` : `Teacher: ${teacherName}`}
                          </span>
                        )}
                        {teacherName && levelName && <span>·</span>}
                        {levelName && (
                          <span>
                            {isRtl ? `المستوى: ${levelName}` : `Level: ${levelName}`}
                          </span>
                        )}
                      </p>
                    )}
                  </div>

                  <span className="inline-flex items-center self-start sm:self-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/20 dark:text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 me-1.5 animate-pulse" />
                    {isRtl ? 'نشط' : 'Active'}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-3 border-t border-slate-100 dark:border-slate-800/60 text-start">
                  {studentsCount !== null && (
                    <div>
                      <span className="block text-xs font-bold text-slate-400 dark:text-slate-500">
                        {isRtl ? 'عدد الطلاب' : 'Students Count'}
                      </span>
                      <span className="text-sm font-extrabold text-slate-700 dark:text-slate-205 mt-0.5 block">
                        {maxStudents ? `${studentsCount}/${maxStudents}` : studentsCount}
                      </span>
                    </div>
                  )}

                  <div>
                    <span className="block text-xs font-bold text-slate-400 dark:text-slate-500">
                      {isRtl ? 'النوع' : 'Type'}
                    </span>
                    <span className="text-sm font-extrabold text-slate-700 dark:text-slate-205 mt-0.5 block">
                      {grp.type || (isRtl ? 'مجموعة تعليمية' : 'Educational Group')}
                    </span>
                  </div>

                  <div>
                    <span className="block text-xs font-bold text-slate-400 dark:text-slate-500">
                      {isRtl ? 'اللغة' : 'Language'}
                    </span>
                    <span className="text-sm font-extrabold text-slate-700 dark:text-slate-205 mt-0.5 block">
                      {grp.language || (isRtl ? 'عربي' : 'Arabic')}
                    </span>
                  </div>
                </div>

                {schedule && (
                  <div className="flex items-center gap-2 p-3 bg-slate-100/50 dark:bg-slate-900 rounded-xl text-xs font-semibold text-slate-500 dark:text-slate-400">
                    <Calendar size={14} className="text-brand-500" />
                    <span>{schedule}</span>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
