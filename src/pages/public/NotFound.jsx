import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Button from '@/shared/components/Button.jsx'
import { Home } from 'lucide-react'
import { useAuth } from '@/shared/context/useAuth.jsx'
import { getRedirectPath } from '@/shared/services/authService.js'

export default function NotFound() {
    const { t } = useTranslation()
    const { user } = useAuth()
    const redirectPath = user ? getRedirectPath(user.role) : '/'

    return (
        <div className="flex min-h-screen items-center justify-center bg-[#EEF4F2] dark:bg-slate-950 transition-colors duration-300 px-6 py-16 text-slate-900 dark:text-white font-sans">
            <div className="w-full max-w-2xl rounded-[2.5rem] border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-12 text-center shadow-sm">
                <div className="space-y-6">
                    <p className="text-sm font-bold tracking-widest text-[#00695C] dark:text-emerald-400 uppercase">{t('errors.notFoundTitle', 'خطأ 404')}</p>
                    <h1 className="text-7xl sm:text-8xl font-black text-slate-200 dark:text-slate-800">404</h1>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 dark:text-white">
                        {t('errors.notFoundMsg', 'عذراً، الصفحة التي تبحث عنها غير موجودة')}
                    </h2>
                    <p className="max-w-md mx-auto text-base sm:text-lg leading-relaxed text-slate-500 dark:text-slate-400 font-medium pb-4">
                        {t('errors.notFoundDesc', 'قد تكون الصفحة التي تبحث عنها قد أزيلت، أو تم تغيير اسمها، أو غير متاحة مؤقتاً.')}
                    </p>
                    <div className="flex justify-center">
                        <Link to={redirectPath}>
                            <Button variant="primary" className="flex items-center gap-2 px-8 py-4 text-lg">
                                <Home className="w-5 h-5" />
                                <span>{t('errors.goHome', 'العودة للرئيسية')}</span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
