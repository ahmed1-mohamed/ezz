import { useTranslation } from 'react-i18next'
import DashboardLayout from '../../../layouts/DashboardLayout.jsx'
import StatsCard from '../../../components/ui/StatsCard.jsx'
import { roleNavigation } from '../../../constants/navigation.js'

const stats = [
  { title: 'dashboard.cards.courses', value: '6', change: 'Enrolled', icon: '📚' },
  { title: 'dashboard.cards.performance', value: '87%', change: '+5% this semester', icon: '📊' },
  { title: 'dashboard.cards.activeSessions', value: '12', change: 'This week', icon: '📅' },
  { title: 'dashboard.cards.participants', value: '4.8', change: 'Average grade', icon: '⭐' },
]

export default function StudentDashboard() {
  const { t } = useTranslation()

  return (
    <DashboardLayout title={t('dashboard.overview')} role={t('auth.student')} links={roleNavigation.Student}>
      <section className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatsCard key={stat.title} title={t(stat.title)} value={stat.value} change={stat.change} icon={stat.icon} />
        ))}
      </section>
      <div className="space-y-4 sm:space-y-6">
        <div className="grid gap-4 sm:gap-6 grid-cols-1 lg:grid-cols-2">
          <div className="rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white/90 p-4 sm:p-6 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80">
            <h2 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-slate-100">{t('student.progressCardTitle')}</h2>
            <p className="mt-2 sm:mt-3 text-sm text-slate-500 dark:text-slate-400">{t('student.progressCardDescription')}</p>
          </div>
          <div className="rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white/90 p-4 sm:p-6 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80">
            <h2 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-slate-100">{t('student.assignmentsCardTitle')}</h2>
            <p className="mt-2 sm:mt-3 text-sm text-slate-500 dark:text-slate-400">{t('student.assignmentsCardDescription')}</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
