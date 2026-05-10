import DashboardLayout from '../../layouts/DashboardLayout.jsx'
import StatsCard from '../../components/ui/StatsCard.jsx'
import DataTable from '../../components/ui/DataTable.jsx'
import { ROLE_NAVIGATION } from '../../utils/constants.js'

const stats = [
    { title: 'Orders placed', value: '27', change: '+15% month over month', icon: '🛒' },
    { title: 'Spend', value: '$4.8k', change: '+9% this quarter', icon: '💳' },
    { title: 'Support tickets', value: '3', change: '-33% week over week', icon: '📩' },
    { title: 'Saved items', value: '12', change: '+2 favourites', icon: '💙' },
]

const rows = [
    ['Order #9421', 'Delivered', '$120.00', 'Completed'],
    ['Order #9419', 'Processing', '$278.00', 'Ongoing'],
    ['Order #9404', 'Shipped', '$52.00', 'In transit'],
    ['Order #9387', 'Cancelled', '$0.00', 'Refunded'],
]

export default function CustomerDashboard() {
    return (
        <DashboardLayout title="Customer dashboard" role="Customer" links={ROLE_NAVIGATION.Customer}>
            <section className="grid gap-6 xl:grid-cols-2">
                {stats.map((stat) => (
                    <StatsCard key={stat.title} {...stat} />
                ))}
            </section>
            <div className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80">
                        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Recent activity</h2>
                        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">Keep track of orders, support requests, and offers tailored to your preferences.</p>
                        <ul className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                            <li>• Personalized recommendations available</li>
                            <li>• Your loyalty status is Gold</li>
                            <li>• Free shipping on next order</li>
                        </ul>
                    </div>
                    <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80">
                        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Account summary</h2>
                        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">Your profile and order preferences are secure and easy to manage from the dashboard.</p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            {['Saved methods', 'Order history', 'Rewards'].map((item) => (
                                <span key={item} className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200">{item}</span>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="mb-4 text-xl font-semibold text-slate-900 dark:text-slate-100">Recent orders</h2>
                    <DataTable headers={['Order', 'Status', 'Amount', 'Notes']} rows={rows} />
                </div>
            </div>
        </DashboardLayout>
    )
}
