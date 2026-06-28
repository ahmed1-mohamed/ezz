import { useTranslation } from 'react-i18next'

export default function TeacherEarningsList({ teachers }) {
  const { t } = useTranslation()

  const maxAmount = Math.max(...teachers.map(t => t.rawAmount), 1)

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-sm p-6">
      <h3 className="font-bold text-slate-800 dark:text-white text-base mb-6 text-start">
        {t('adminDashboard.earnings.teachersListTitle', 'أرباح المعلمين')}
      </h3>
      <div className="space-y-5">
        {teachers.map((item, idx) => {
          const widthPercentage = (item.rawAmount / maxAmount) * 100

          return (
            <div key={idx} className="flex  items-center justify-between gap-4">

              <div className="flex items-center gap-3 shrink-0">
                <div className="w-8 h-8 rounded-full bg-[#0f7a6c]/10 dark:bg-emerald-950/20 text-[#0f7a6c] dark:text-emerald-400 font-bold text-xs flex items-center justify-center">
                  {item.initial}
                </div>
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  {item.name}
                </span>
              </div>
              <div className="flex-1 h-2.5 bg-slate-50 dark:bg-slate-800 rounded-full overflow-hidden relative">

                <div
                  className="absolute right-0 top-0 bottom-0 bg-[#0f7a6c] dark:bg-emerald-500 rounded-full transition-all duration-500"
                  style={{ width: `${widthPercentage}%` }}
                />
              </div>


              <div className="text-start shrink-0 min-w-[80px]">
                <span className="text-sm font-bold text-[#0f7a6c] dark:text-emerald-400">
                  {item.amount} ر.س
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}