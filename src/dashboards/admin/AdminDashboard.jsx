import { useTranslation } from 'react-i18next'
import DashboardLayout from '../../layouts/DashboardLayout.jsx'
import StatsCard from '../../components/ui/StatsCard.jsx'
import DataTable from '../../components/ui/DataTable.jsx'
import { roleNavigation } from '../../constants/navigation.js'

const stats = [
    { title: 'dashboard.cards.performance', value: '$128k', change: '+16% from last week', icon: '📊' },
    { title: 'dashboard.cards.participants', value: '5.2k', change: '+14% this month', icon: '👥' },
    { title: 'dashboard.cards.courses', value: '48', change: '+6 new courses', icon: '📚' },
    { title: 'dashboard.cards.activeSessions', value: '14', change: '+2 active streams', icon: '🎥' },
]

const rows = [
    ['Amina Hassan', 'Admin', 'admin@eduplatform.com', 'Active'],
    ['Malik Omar', 'Manager', 'manager@eduplatform.com', 'Active'],
    ['Layla Nasser', 'Teacher', 'teacher@eduplatform.com', 'Pending'],
    ['Sara Khaled', 'Student', 'student@eduplatform.com', 'Active'],
]

export default function AdminDashboard() {
    const { t } = useTranslation()

    return (
        <DashboardLayout title={t('dashboard.overview')} role={t('auth.admin')} links={roleNavigation.Admin}>
            <section className="grid gap-6 xl:grid-cols-2">
                {stats.map((stat) => (
                    <StatsCard key={stat.title} title={t(stat.title)} value={stat.value} change={stat.change} icon={stat.icon} />
                ))}
            </section>
            <div className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80">
                        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{t('admin.performanceTitle')}</h2>
                        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{t('admin.performanceDescription')}</p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            {['dashboard.kpi.conversion', 'dashboard.kpi.engagement', 'dashboard.kpi.impact'].map((item) => (
                                <span key={item} className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200">{t(item)}</span>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80">
                        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{t('admin.activityTitle')}</h2>
                        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{t('admin.activityDescription')}</p>
                        <ul className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                            <li>{t('admin.activityItem1')}</li>
                            <li>{t('admin.activityItem2')}</li>
                            <li>{t('admin.activityItem3')}</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h2 className="mb-4 text-xl font-semibold text-slate-900 dark:text-slate-100">{t('admin.userDirectoryTitle')}</h2>
                    <DataTable headers={[t('table.name'), t('table.role'), t('table.email'), t('table.status')]} rows={rows} />
                </div>
            </div>
        </DashboardLayout>
    )
}
