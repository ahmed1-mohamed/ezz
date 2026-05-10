import { useTranslation } from 'react-i18next'
import DashboardLayout from '../../layouts/DashboardLayout.jsx'
import StatsCard from '../../components/ui/StatsCard.jsx'
import DataTable from '../../components/ui/DataTable.jsx'
import { roleNavigation } from '../../constants/navigation.js'

const stats = [
    { title: 'manager.stats.projectsActive', value: '14', change: '+2 today', icon: '📁' },
    { title: 'manager.stats.pendingReviews', value: '6', change: '-11% from last week', icon: '📝' },
    { title: 'manager.stats.teamCapacity', value: '82%', change: '+4% this month', icon: '👥' },
    { title: 'manager.stats.weeklyGoals', value: '95%', change: '+7% achievement', icon: '🎯' },
]

const rows = [
    ['Product Launch', 'In progress', '12 days', 'High'],
    ['Client Onboarding', 'Review', '5 days', 'Medium'],
    ['Quarterly Budget', 'Approved', 'Completed', 'Low'],
    ['Marketing Audit', 'Planned', '18 days', 'Medium'],
]

export default function ManagerDashboard() {
    const { t } = useTranslation()

    return (
        <DashboardLayout title={t('dashboard.overview')} role={t('auth.manager')} links={roleNavigation.Manager}>
            <section className="grid gap-6 xl:grid-cols-2">
                {stats.map((stat) => (
                    <StatsCard key={stat.title} title={t(stat.title)} value={stat.value} change={stat.change} icon={stat.icon} />
                ))}
            </section>
            <div className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80">
                        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{t('manager.pipelineTitle')}</h2>
                        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{t('manager.pipelineDescription')}</p>
                        <ul className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                            <li>{t('manager.pipelineItem1')}</li>
                            <li>{t('manager.pipelineItem2')}</li>
                            <li>{t('manager.pipelineItem3')}</li>
                        </ul>
                    </div>
                    <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80">
                        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{t('manager.teamPulseTitle')}</h2>
                        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{t('manager.teamPulseDescription')}</p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            {['Backlog', 'Standups', 'Milestones'].map((item) => (
                                <span key={item} className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200">{item}</span>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="mb-4 text-xl font-semibold text-slate-900 dark:text-slate-100">{t('manager.projectStatusTitle')}</h2>
                    <DataTable headers={[t('table.project'), t('table.status'), t('table.deadline'), t('table.priority')]} rows={rows} />
                </div>
            </div>
        </DashboardLayout>
    )
}
