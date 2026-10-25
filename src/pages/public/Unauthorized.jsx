import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Button from '@/shared/components/Button.jsx'
import { Home, LogIn } from 'lucide-react'
import { useAuth } from '@/shared/context/useAuth.jsx'
import { getRedirectPath } from '@/shared/services/authService.js'

export default function Unauthorized() {
    const { t } = useTranslation()
    const { user } = useAuth()
    const location = useLocation()

    const searchParams = new URLSearchParams(location.search)
    const status = searchParams.get('status') || location.state?.status || '403'
    const is401 = status === '401'

    const redirectPath = user ? getRedirectPath(user.role) : '/'

    return (
        <div className="flex min-h-screen items-center justify-center bg-[#EEF4F2] dark:bg-slate-950 transition-colors duration-300 px-6 py-16 text-slate-900 dark:text-white font-sans">
            <div className="w-full max-w-2xl rounded-[2.5rem] border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-12 text-center shadow-sm">
                <div className="space-y-6">
                    {is401 ? (
                        <>
                            <p className="text-sm font-bold tracking-widest text-[#00695C] dark:text-emerald-400 uppercase">
                                {t('errors.unauthenticatedTitle', 'تحتاج لتسجيل الدخول')}
                            </p>
                            <h1 className="text-7xl sm:text-8xl font-black text-slate-200 dark:text-slate-800">401</h1>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 dark:text-white">
                                {t('errors.unauthenticatedMsg', 'عذراً، يرجى تسجيل الدخول أولاً للوصول إلى هذه الصفحة')}
                            </h2>
                            <p className="max-w-md mx-auto text-base sm:text-lg leading-relaxed text-slate-500 dark:text-slate-400 font-medium pb-4">
                                {t('errors.unauthenticatedDesc', 'الرمز المميز (Token) غير متوفر أو انتهت صلاحيته. يرجى تسجيل الدخول للتعرف على هويتك.')}
                            </p>
                            <div className="flex justify-center">
                                <Link to="/login">
                                    <Button variant="primary" className="flex items-center gap-2 px-8 py-4 text-lg">
                                        <LogIn className="w-5 h-5" />
                                        <span>{t('auth.login', 'تسجيل الدخول')}</span>
                                    </Button>
                                </Link>
                            </div>
                        </>
                    ) : (
                        <>
                            <p className="text-sm font-bold tracking-widest text-red-600 dark:text-red-400 uppercase">
                                {t('errors.unauthorizedTitle', 'غير مصرح')}
                            </p>
                            <h1 className="text-7xl sm:text-8xl font-black text-slate-200 dark:text-slate-800">403</h1>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 dark:text-white">
                                {t('errors.unauthorizedMsg', 'عذراً، ليس لديك صلاحية للوصول إلى هذه الصفحة')}
                            </h2>
                            <p className="max-w-md mx-auto text-base sm:text-lg leading-relaxed text-slate-500 dark:text-slate-400 font-medium pb-4">
                                {t('errors.unauthorizedDesc', 'يرجى تسجيل الدخول بحساب يمتلك الصلاحيات المناسبة لعرض هذا المحتوى.')}
                            </p>
                            <div className="flex justify-center">
                                <Link to={redirectPath}>
                                    <Button variant="primary" className="flex items-center gap-2 px-8 py-4 text-lg">
                                        <Home className="w-5 h-5" />
                                        <span>{t('errors.goHome', 'العودة للرئيسية')}</span>
                                    </Button>
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
