import { TrendingUp, GraduationCap, Landmark, Coins } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function EarningsStats({ stats }) {
  const { t } = useTranslation()
  const p = (key) => t(`adminDashboard.earnings.${key}`, key)

  const items = [
    {
      title: p('totalRevenue'),
      value: `${stats.totalRevenue || '0'} ر.س`,
      icon: Coins,
      bgColor: 'bg-emerald-50 dark:bg-emerald-950/20',
      iconColor: 'text-emerald-600 dark:text-emerald-400',
    },
    {
      title: p('netProfit'),
      value: `${stats.netProfit || '0'} ر.س`,
      icon: TrendingUp,
      bgColor: 'bg-teal-50 dark:bg-teal-950/20',
      iconColor: 'text-[#0f7a6c] dark:text-emerald-400',
    },
    {
      title: p('teacherPayments'),
      value: `${stats.teacherPayments || '0'} ر.س`,
      icon: GraduationCap,
      bgColor: 'bg-amber-50/50 dark:bg-amber-950/10',
      iconColor: 'text-amber-600 dark:text-amber-400',
    },
    {
      title: p('platformEarnings'),
      value: `${stats.platformEarnings || '0'} ر.س`,
      icon: Landmark,
      bgColor: 'bg-blue-50 dark:bg-blue-950/10',
      iconColor: 'text-blue-600 dark:text-blue-400',
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-100 dark:border-slate-800/60 shadow-sm flex items-center justify-between transition-all hover:shadow-md"
        >
          <div className="text-start flex-1">
            <p className="text-slate-400 dark:text-slate-500 text-xs font-medium">
              {item.title}
            </p>
            <h3 className={`text-2xl font-extrabold mt-1.5 ${item.iconColor}`}>
              {item.value}
            </h3>
          </div>
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.bgColor} ms-4 shrink-0`}>
            <item.icon size={22} className={item.iconColor} />
          </div>
        </div>
      ))}
    </div>
  )
}