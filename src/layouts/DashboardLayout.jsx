import AppHeader from '@/shared/components/AppHeader.jsx'
import Container from '@/shared/components/Container.jsx'

export default function DashboardLayout({ title, children }) {
    return (
        <div className="min-h-screen bg-slate-100/80 px-3 py-4 sm:px-4 sm:py-6 lg:px-6 lg:py-8 dark:bg-slate-950/90">
            <Container className="grid gap-4 sm:gap-6 grid-cols-1 lg:grid-cols-[240px_minmax(1fr,1fr)] xl:grid-cols-[280px_minmax(1fr,1fr)]">
                <main className="space-y-4 sm:space-y-6">
                    <AppHeader title={title} />
                    {children}
                </main>
            </Container>
        </div>
    )
}
