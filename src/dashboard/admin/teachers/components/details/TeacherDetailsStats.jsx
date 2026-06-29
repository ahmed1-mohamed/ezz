import { Award, CheckSquare, Percent, Clock } from 'lucide-react'

export default function TeacherDetailsStats({ teacher, isRtl }) {
  const metrics = [
    {
      label: isRtl ? 'معدل الحضور' : 'Attendance Rate',
      value: teacher?.attendanceRate || '-',
      colorClass: 'text-emerald-600 dark:text-emerald-400',
      icon: CheckSquare
    },
    {
      label: isRtl ? 'رضا الطلاب' : 'Student Satisfaction',
      value: teacher?.satisfactionRate || '-',
      colorClass: 'text-emerald-600 dark:text-emerald-400',
      icon: Percent
    },
    {
      label: isRtl ? 'معدل التقييم' : 'Rating Rate',
      value: teacher?.rating || '0.0',
      colorClass: 'text-amber-500',
      icon: Award
    },
    {
      label: isRtl ? 'الحصص المكتملة' : 'Completed Sessions',
      value: teacher?.totalSessions || '0',
      colorClass: 'text-sky-600 dark:text-sky-400',
      icon: Clock
    }
  ]

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6">
      <h3 className="text-base font-bold text-slate-850 dark:text-white border-b border-slate-105 dark:border-slate-800/60 pb-3 flex items-center gap-2">
        <Award className="text-amber-500" size={18} />
        {isRtl ? 'إحصائيات الأداء' : 'Performance Statistics'}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {metrics.map((item, index) => {
          const Icon = item.icon
          return (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-[#f3f7f6] dark:bg-slate-950/40 rounded-2xl border border-slate-100/50 dark:border-slate-850/40"
            >
              <div>
                <span className="block text-xs font-bold text-slate-450 dark:text-slate-500">
                  {item.label}
                </span>
                <span className={`text-xl font-black ${item.colorClass} mt-1 block`}>
                  {item.value}
                </span>
              </div>
              <div className="p-3 bg-white dark:bg-slate-900 rounded-xl text-slate-400 dark:text-slate-500 shadow-sm shrink-0">
                <Icon size={18} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}