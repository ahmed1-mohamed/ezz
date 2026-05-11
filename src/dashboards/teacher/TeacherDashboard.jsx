import { useTranslation } from 'react-i18next'
import DashboardLayout from '../../layouts/DashboardLayout.jsx'
import StatsCard from '../../components/ui/StatsCard.jsx'
import { roleNavigation } from '../../constants/navigation.js'

const stats = [
  { title: 'dashboard.cards.activeSessions', value: '3', change: '+1 today', icon: '📚' },
  { title: 'dashboard.cards.participants', value: '85', change: '+5 this week', icon: '👥' },
  { title: 'dashboard.cards.courses', value: '5', change: 'All active', icon: '📖' },
  { title: 'dashboard.cards.performance', value: '92%', change: '+3% this month', icon: '📊' },
]

export default function TeacherDashboard() {
  const { t } = useTranslation()

  return (
    <DashboardLayout title={t('dashboard.overview')} role={t('auth.teacher')} links={roleNavigation.Teacher}>
      <section className="grid gap-6 xl:grid-cols-2">
        {stats.map((stat) => (
          <StatsCard key={stat.title} title={t(stat.title)} value={stat.value} change={stat.change} icon={stat.icon} />
        ))}
      </section>
      <div className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{t('teacher.welcomeCardTitle')}</h2>
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{t('teacher.welcomeCardDescription')}</p>
          </div>
          <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{t('teacher.classroomCardTitle')}</h2>
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{t('teacher.classroomCardDescription')}</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
