import { useTranslation } from 'react-i18next'

export default function AssignmentsStats({ stats }) {
  const { t } = useTranslation()
  const p = (key) => t(`adminDashboard.assignments.${key}`, key)

  const items = [
    {
      title: p('totalAssignments', 'إجمالي الواجبات'),
      value: stats.totalAssignments || 0,
      textColor: 'text-slate-700 dark:text-slate-300',
    },
    {
      title: p('activeAssignments', 'نشطة'),
      value: stats.activeCount || 0,
      textColor: 'text-blue-600 dark:text-blue-400',
    },
    {
      title: p('completedAssignments', 'مكتملة'),
      value: stats.completedCount || 0,
      textColor: 'text-emerald-600 dark:text-emerald-400',
    },
    {
      title: p('lateAssignments', 'متأخرة'),
      value: stats.lateCount || 0,
      textColor: 'text-red-600 dark:text-red-400',
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-100 dark:border-slate-800/60 shadow-sm flex flex-col items-center justify-center text-center transition-all hover:shadow-md"
        >
          <span className="text-slate-400 dark:text-slate-500 text-xs font-semibold">
            {item.title}
          </span>
          <span className={`text-3xl font-extrabold mt-2 ${item.textColor}`}>
            {item.value}
          </span>
        </div>
      ))}
    </div>
  )
}
