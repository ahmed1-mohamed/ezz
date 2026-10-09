import { Award, BookOpen, Users, DollarSign, Percent, Clock, Pencil } from 'lucide-react'

export default function TeacherDetailsStats({ teacher, isRtl, onOpenHourlyRateModal }) {
  const metrics = [
    {
      key: 'totalLessons',
      label: isRtl ? 'إجمالي الحصص' : 'Total Lessons',
      value: teacher?.totalLessons ?? teacher?.totalSessions ?? 0,
      colorClass: 'text-[#005953] dark:text-emerald-400',
      icon: Clock
    },
    {
      key: 'totalGroups',
      label: isRtl ? 'عدد المجموعات' : 'Total Groups',
      value: teacher?.totalGroups ?? teacher?.groupsCount ?? 0,
      colorClass: 'text-indigo-600 dark:text-indigo-400',
      icon: Users
    },
    {
      key: 'totalStudents',
      label: isRtl ? 'عدد الطلاب' : 'Total Students',
      value: teacher?.totalStudents ?? teacher?.studentsCount ?? 0,
      colorClass: 'text-sky-600 dark:text-sky-400',
      icon: BookOpen
    },
    {
      key: 'rating',
      label: isRtl ? 'معدل التقييم' : 'Rating',
      value: `${teacher?.rating ?? 0} / 5`,
      colorClass: 'text-amber-500',
      icon: Award
    },
    {
      key: 'hourlyRate',
      label: isRtl ? 'سعر الساعة' : 'Hourly Rate',
      value: `${teacher?.hourlyRate ?? 0} ${isRtl ? 'ر.س' : 'SAR'}`,
      colorClass: 'text-teal-600 dark:text-teal-400',
      icon: DollarSign,
      action: onOpenHourlyRateModal ? {
        title: isRtl ? 'تعديل سعر الساعة' : 'Edit hourly rate',
        onClick: onOpenHourlyRateModal
      } : null
    },
    {
      key: 'totalEarnings',
      label: isRtl ? 'إجمالي الأرباح' : 'Total Earnings',
      value: `${teacher?.totalEarnings ?? 0} ${isRtl ? 'ر.س' : 'SAR'}`,
      colorClass: 'text-emerald-600 dark:text-emerald-400',
      icon: DollarSign
    },
    {
      key: 'dueEarnings',
      label: isRtl ? 'الأرباح المستحقة' : 'Due Earnings',
      value: `${teacher?.dueEarnings ?? 0} ${isRtl ? 'ر.س' : 'SAR'}`,
      colorClass: 'text-blue-600 dark:text-blue-400',
      icon: DollarSign
    },
    {
      key: 'profitPercentage',
      label: isRtl ? 'نسبة الربح' : 'Profit Share',
      value: `${teacher?.profitPercentage ?? 0}%`,
      colorClass: 'text-purple-600 dark:text-purple-400',
      icon: Percent
    }
  ]

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6">
      <h3 className="text-base font-bold text-slate-850 dark:text-white border-b border-slate-105 dark:border-slate-800/60 pb-3 flex items-center gap-2">
        <Award className="text-amber-500" size={18} />
        <span>{isRtl ? 'إحصائيات الأداء والأرباح' : 'Performance & Financial Statistics'}</span>
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {metrics.map((item, index) => {
          const Icon = item.icon
          return (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-[#f3f7f6] dark:bg-slate-950/40 rounded-2xl border border-slate-100/50 dark:border-slate-850/40 relative group"
            >
              <div>
                <span className="block text-xs font-bold text-slate-450 dark:text-slate-500">
                  {item.label}
                </span>
                <span className={`text-lg font-black ${item.colorClass} mt-1 block`}>
                  {item.value}
                </span>
              </div>
              <div className="flex items-center gap-1">
                {item.action && (
                  <button
                    type="button"
                    onClick={item.action.onClick}
                    title={item.action.title}
                    className="p-2 bg-[#005953]/10 hover:bg-[#005953] text-[#005953] hover:text-white dark:bg-emerald-950/40 dark:text-emerald-400 dark:hover:bg-emerald-600 dark:hover:text-white rounded-xl transition-all cursor-pointer"
                  >
                    <Pencil size={14} />
                  </button>
                )}
                <div className="p-2.5 bg-white dark:bg-slate-900 rounded-xl text-slate-400 dark:text-slate-500 shadow-sm shrink-0">
                  <Icon size={18} />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}