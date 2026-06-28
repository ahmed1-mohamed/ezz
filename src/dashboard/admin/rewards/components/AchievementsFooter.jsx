import { useTranslation } from 'react-i18next'

export default function AchievementsFooter({ stats }) {
  const { t } = useTranslation()
  const p = (key) => t(`adminDashboard.rewards.${key}`, key)

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 p-6 flex items-center justify-between">
      {/* Total badges count card (Left) */}
      <div className="flex flex-col items-center">
        <span className="text-slate-400 dark:text-slate-500 text-xs font-semibold">
          {p('statTotalBadges')}
        </span>
        <span className="text-3xl font-extrabold text-slate-800 dark:text-white mt-1.5">
          {stats.totalAchievements || 12}
        </span>
      </div>

      {/* Heading (Right) */}
      <h3 className="font-extrabold text-slate-800 dark:text-white text-base">
        {p('footerTitle')}
      </h3>
    </div>
  )
}
