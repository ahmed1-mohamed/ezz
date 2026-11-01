import { memo, Suspense } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import AppNavbar from '@/shared/components/AppNavbar.jsx'
import Container from '@/shared/components/Container.jsx'
import Footer from '@/shared/components/Footer.jsx'

export default memo(function PublicLayout() {
    const location = useLocation()
    const isSchedule = location.pathname === '/schedule'
    return (
        <div className={`min-h-screen flex flex-col text-slate-900 dark:text-slate-100 ${
            isSchedule ? 'bg-[#EEF2F0]/80 dark:bg-slate-950' : 'bg-white dark:bg-slate-950'
        }`}>
            <AppNavbar />
            <main className="flex-1">
                {isSchedule ? (
                    <Suspense
                        fallback={
                            <div className="flex items-center justify-center py-28 min-h-[400px]">
                                <div className="w-9 h-9 rounded-full border-3 border-[#00695C] border-t-transparent animate-spin" />
                            </div>
                        }
                    >
                        <Outlet />
                    </Suspense>
                ) : (
                    <Container className="py-6 sm:py-8 lg:py-10">
                        <Suspense
                            fallback={
                                <div className="flex items-center justify-center py-28 min-h-[400px]">
                                    <div className="w-9 h-9 rounded-full border-3 border-[#00695C] border-t-transparent animate-spin" />
                                </div>
                            }
                        >
                            <Outlet />
                        </Suspense>
                    </Container>
                )}
            </main>
            <Footer className="border-t border-slate-200/80 bg-white/90 py-6 sm:py-8 lg:py-10 text-xs sm:text-sm text-slate-600 dark:border-slate-800/80 dark:bg-slate-950/95 dark:text-slate-300" />
        </div>
    )
})
