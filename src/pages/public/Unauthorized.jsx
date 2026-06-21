import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Button from '@/shared/components/Button.jsx'
import { Home } from 'lucide-react'
import { useAuth } from '@/shared/context/useAuth.jsx'
import { getRedirectPath } from '@/shared/services/authService.js'

export default function Unauthorized() {
    const { t } = useTranslation()
    const { user } = useAuth()
    const redirectPath = user ? getRedirectPath(user.role) : '/'

    return (
        <div className="flex min-h-screen items-center justify-center bg-[#EEF4F2] px-6 py-16 text-slate-900 font-sans">
            <div className="w-full max-w-2xl rounded-[2.5rem] border border-slate-100 bg-white p-12 text-center shadow-sm">
                <div className="space-y-6">
                    <p className="text-sm font-bold tracking-widest text-red-600 uppercase">{t('errors.unauthorizedTitle', 'غير مصرح')}</p>
                    <h1 className="text-7xl sm:text-8xl font-black text-slate-200">401</h1>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">
                        {t('errors.unauthorizedMsg', 'عذراً، ليس لديك صلاحية للوصول إلى هذه الصفحة')}
                    </h2>
                    <p className="max-w-md mx-auto text-base sm:text-lg leading-relaxed text-slate-500 font-medium pb-4">
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
                </div>
            </div>
        </div>
    )
}
