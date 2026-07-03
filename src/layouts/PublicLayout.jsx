import { Outlet } from 'react-router-dom'
import AppNavbar from '@/shared/components/AppNavbar.jsx'
import Container from '@/shared/components/Container.jsx'
import Footer from '@/shared/components/Footer.jsx'

export default function PublicLayout() {

    return (
        <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
            <AppNavbar />

            <main>
                <Container className="py-6 sm:py-8 lg:py-10">
                    <Outlet />
                </Container>
            </main>

            <Footer className="border-t border-slate-200/80 bg-white/90 py-6 sm:py-8 lg:py-10 text-xs sm:text-sm text-slate-600 dark:border-slate-800/80 dark:bg-slate-950/95 dark:text-slate-300"></Footer>
        </div>
    )
}
