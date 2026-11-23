import { BookOpen, Calendar, User, Layers } from 'lucide-react'

export default function StudentGroupCard({ student, isRtl }) {
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
      </div>
      {groups.length === 0 ? (
        <div className="p-8 text-center bg-slate-50/50 dark:bg-slate-950/20 rounded-3xl border border-slate-100/60 dark:border-slate-800/40 space-y-2">
          <Layers size={32} className="mx-auto text-slate-300 dark:text-slate-600" />
          <p className="text-sm font-bold text-slate-500 dark:text-slate-400">
            {isRtl ? 'لا توجد مجموعات تعليمية مسجلة للطالب حالياً' : 'No educational groups currently enrolled'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {groups.map((grp, idx) => {
            const groupId = grp.id || grp._id || `group-${idx}`
            const groupName = typeof grp === 'string'
              ? grp
              : (typeof grp.name === 'object' && grp.name !== null
                  ? ((isRtl ? grp.name.ar || grp.name.en : grp.name.en || grp.name.ar) || '')
                  : (grp.name || grp.title || `مجموعة ${idx + 1}`))
            const teacherName = typeof grp.teacher === 'object' && grp.teacher !== null
              ? ((typeof grp.teacher.name === 'object' ? (isRtl ? grp.teacher.name.ar || grp.teacher.name.en : grp.teacher.name.en || grp.teacher.name.ar) : grp.teacher.name) || '')
              : (grp.teacherName || grp.teacher || '')
            const levelName = typeof grp.level === 'object' && grp.level !== null
              ? (typeof grp.level.name === 'object' ? ((isRtl ? grp.level.name.ar || grp.level.name.en : grp.level.name.en || grp.level.name.ar) || '') : (grp.level.name || ''))
              : (grp.level || '')
            const studentsCount = grp.studentsCount || (Array.isArray(grp.students) ? grp.students.length : null)
            const maxStudents = grp.maxStudents || grp.capacity || null
            const schedule = grp.schedule || grp.days || grp.time || ''
            const groupStatus = grp.status || (isRtl ? 'غير متاح' : 'Unavailable')
            const normalizedStatus = String(grp.status || '').trim().toLowerCase()
            const isActive = ['active', 'نشطة', 'نشط'].includes(normalizedStatus)
            const isPending = ['pending', 'قيد الانتظار'].includes(normalizedStatus)
            const isStopped = ['stopped', 'متوقفة', 'متوقف'].includes(normalizedStatus)
            const statusStyle = isActive
              ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/20 dark:text-emerald-400'
              : isPending
                ? 'bg-amber-50 text-amber-700 dark:bg-amber-950/20 dark:text-amber-400'
                : isStopped
                  ? 'bg-rose-50 text-rose-700 dark:bg-rose-950/20 dark:text-rose-400'
                  : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'
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
                  <div className="flex items-center gap-2 self-start sm:self-center">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${statusStyle}`}>
                      <span className={`w-1.5 h-1.5 rounded-full me-1.5 ${isActive ? 'bg-emerald-600 animate-pulse' : 'bg-current'}`} />
                      {groupStatus}
                    </span>
                  </div>
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
                      {grp.type || '-'}
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-400 dark:text-slate-500">
                      {isRtl ? 'اللغة' : 'Language'}
                    </span>
                    <span className="text-sm font-extrabold text-slate-700 dark:text-slate-205 mt-0.5 block">
                      {grp.language || '-'}
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
