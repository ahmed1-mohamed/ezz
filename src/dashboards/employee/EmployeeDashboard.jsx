import DashboardLayout from '../../layouts/DashboardLayout.jsx'
import StatsCard from '../../components/ui/StatsCard.jsx'
import DataTable from '../../components/ui/DataTable.jsx'
import { ROLE_NAVIGATION } from '../../utils/constants.js'

const stats = [
    { title: 'Open tasks', value: '18', change: '-9% from yesterday', icon: '📋' },
    { title: 'Completed', value: '42', change: '+11% this week', icon: '✅' },
    { title: 'Hours logged', value: '36h', change: '+5h today', icon: '⏱️' },
    { title: 'Feedback score', value: '4.9/5', change: '+0.2 points', icon: '⭐' },
]

const rows = [
    ['Design system', 'Complete', 'Today', 'High'],
    ['Mobile flow', 'In progress', 'Tomorrow', 'Medium'],
    ['Weekly report', 'Review', 'Wednesday', 'Low'],
    ['Client update', 'Planned', 'Friday', 'Medium'],
]

export default function EmployeeDashboard() {
    return (
        <DashboardLayout title="Employee dashboard" role="Employee" links={ROLE_NAVIGATION.Employee}>
            <section className="grid gap-6 xl:grid-cols-2">
                {stats.map((stat) => (
                    <StatsCard key={stat.title} {...stat} />
                ))}
            </section>
            <div className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80">
                        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Daily focus</h2>
                        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">Review your priorities for the day and stay focused on high-impact work.</p>
                        <div className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                            <p>• Finish the design handoff</p>
                            <p>• Validate client feedback</p>
                            <p>• Prepare notes for sprint review</p>
                        </div>
                    </div>
                    <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80">
                        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Performance highlights</h2>
                        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">Your productivity is trending upward and feedback is looking strong this week.</p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            {['Sprint health', 'Task accuracy', 'Peer reviews'].map((item) => (
                                <span key={item} className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200">{item}</span>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="mb-4 text-xl font-semibold text-slate-900 dark:text-slate-100">Task tracker</h2>
                    <DataTable headers={['Task', 'Status', 'Due date', 'Priority']} rows={rows} />
                </div>
            </div>
        </DashboardLayout>
    )
}
