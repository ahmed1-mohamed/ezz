import AppHeader from '../components/layout/AppHeader.jsx'
import AppSidebar from '../components/layout/AppSidebar.jsx'

export default function DashboardLayout({ title, role, links, children }) {
    return (
        <div className="min-h-screen bg-slate-100/80 px-4 py-6 dark:bg-slate-950/90 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-[1600px] gap-6 xl:grid-cols-[280px_minmax(1fr,1fr)]">
                <AppSidebar role={role} links={links} />
                <main className="space-y-6">
                    <AppHeader title={title} />
                    {children}
                </main>
            </div>
        </div>
    )
}
