import AppHeader from '../components/layout/AppHeader.jsx'
import AppSidebar from '../components/layout/AppSidebar.jsx'

export default function DashboardLayout({ title, role, links, children }) {
    return (
        <div className="min-h-screen bg-slate-100/80 px-3 py-4 sm:px-4 sm:py-6 lg:px-6 lg:py-8 dark:bg-slate-950/90">
            <div className="mx-auto grid max-w-[1600px] gap-4 sm:gap-6 lg:grid-cols-[280px_minmax(1fr,1fr)] xl:grid-cols-[320px_minmax(1fr,1fr)]">
                <AppSidebar role={role} links={links} />
                <main className="space-y-4 sm:space-y-6">
                    <AppHeader title={title} />
                    {children}
                </main>
            </div>
        </div>
    )
}
