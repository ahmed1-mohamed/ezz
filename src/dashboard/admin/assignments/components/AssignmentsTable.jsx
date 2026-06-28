import { Eye, Trash2, Clock, AlertCircle, CheckCircle2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function AssignmentsTable({ assignments, onDelete }) {
  const { t } = useTranslation()
  const p = (key) => t(`adminDashboard.assignments.${key}`, key)

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-sm overflow-hidden">
      {/* Table Header */}
      <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr_1fr_auto] gap-4 px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800 text-xs font-bold text-slate-500 dark:text-slate-400 text-start">
        <div>{p('colTitle', 'عنوان الواجب')}</div>
        <div>{p('colGroup', 'المجموعة')}</div>
        <div>{p('colTeacher', 'المعلم')}</div>
        <div>{p('colDeadline', 'الموعد النهائي')}</div>
        <div>{p('colSubmissions', 'التسليمات')}</div>
        <div>{p('colStatus', 'الحالة')}</div>
        <div className="text-end w-20">{p('colActions', 'الإجراءات')}</div>
      </div>

      {/* Rows */}
      {assignments.length === 0 ? (
        <div className="py-12 text-center text-slate-400">
          {p('noAssignments', 'لا توجد واجبات حالياً')}
        </div>
      ) : (
        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {assignments.map((item) => {
            const isCompleted = item.status === 'completed'
            const isLate = item.status === 'late'
            const progressPercentage = (item.submittedCount / item.totalCount) * 100

            return (
              <div
                key={item.id}
                className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr_1fr_auto] gap-4 px-6 py-5 items-center text-start text-sm"
              >
                {/* Title */}
                <div className="flex items-center gap-2.5 font-bold text-slate-800 dark:text-white">
                  {isLate ? (
                    <AlertCircle size={16} className="text-red-500 shrink-0" />
                  ) : isCompleted ? (
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                  ) : (
                    <Clock size={16} className="text-blue-500 shrink-0" />
                  )}
                  <span className="truncate">{item.title}</span>
                </div>

                {/* Group */}
                <div className="text-slate-700 dark:text-slate-300">
                  {item.groupName}
                </div>

                {/* Teacher */}
                <div className="text-slate-700 dark:text-slate-300 font-medium">
                  {item.teacher}
                </div>

                {/* Deadline */}
                <div className="text-slate-500 dark:text-slate-400 text-xs">
                  {item.deadline}
                </div>

                {/* Submissions (progress bar) */}
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-slate-600 dark:text-slate-400 min-w-[32px] text-end">
                    {item.submittedCount}/{item.totalCount}
                  </span>
                  <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden relative">
                    <div
                      className={`absolute top-0 bottom-0 start-0 rounded-full transition-all duration-500 ${
                        isCompleted ? 'bg-emerald-500' : 'bg-[#0f7a6c]'
                      }`}
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>
                </div>

                {/* Status Badge */}
                <div>
                  {isCompleted ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 rounded-full text-xs font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {p('statusCompleted', 'مكتمل')}
                    </span>
                  ) : isLate ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400 rounded-full text-xs font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      {p('statusLate', 'متأخر')}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400 rounded-full text-xs font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      {p('statusActive', 'نشط')}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-end gap-2 w-20">
                  <button
                    onClick={() => onDelete(item.id)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all"
                    title={p('delete', 'حذف')}
                  >
                    <Trash2 size={15} />
                  </button>
                  <button
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 transition-all border border-slate-100"
                    title={p('viewDetails', 'عرض')}
                  >
                    <Eye size={15} />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
