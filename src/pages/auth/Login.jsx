import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Mail, Lock, BookOpen, ArrowRight, ArrowLeft } from 'lucide-react'
import { useAuth } from '@/shared/context/useAuth.jsx'
import { getRedirectPath } from '@/shared/services/authService.js'
import LanguageSwitcher from '@/shared/components/LanguageSwitcher.jsx'

const initialState = { email: '', password: '' }

export default function Login() {
    const { t, i18n } = useTranslation()
    const isRtl = i18n.language === 'ar'
    const ArrowIcon = isRtl ? ArrowRight : ArrowLeft

    const [formValues, setFormValues] = useState(initialState)
    const [errors, setErrors] = useState({})
    const [serverError, setServerError] = useState('')
    const { login, loading } = useAuth()
    const navigate = useNavigate()

    const validate = () => {
        const nextErrors = {}
        if (!formValues.email) nextErrors.email = t('login.emailRequired', 'البريد الإلكتروني مطلوب.')
        if (!formValues.password) nextErrors.password = t('login.passwordRequired', 'كلمة المرور مطلوبة.')
        setErrors(nextErrors)
        return Object.keys(nextErrors).length === 0
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setServerError('')
        if (!validate()) return
        try {
            const user = await login(formValues.email, formValues.password, true)
            navigate(getRedirectPath(user.role))
        } catch (error) {
            setServerError(error.message)
        }
    }

    return (
        <div className="min-h-screen bg-[#EEF4F2] flex flex-col relative font-sans">
            <div className="absolute top-6 start-6 z-10">
                <Link to="/" className="flex items-center gap-2 text-[#00695C] hover:text-[#004D40] font-bold transition-colors bg-white/50 hover:bg-white px-4 py-2 rounded-full shadow-sm">
                    <ArrowIcon className="w-5 h-5" />
                    <span>{t('login.backToHome', 'العودة للرئيسية')}</span>
                </Link>
            </div>

            <div className="absolute top-6 end-6 z-10">
                <LanguageSwitcher />
            </div>

            <div className="flex-1 flex flex-col justify-center items-center px-4 sm:px-6 py-12">
                <div className="text-center mb-8">
                    <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-sm mb-4">
                        <BookOpen className="w-10 h-10 text-[#00695C]" />
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-[#00695C] mb-2">
                        {t('login.academyName', 'أكاديمية منارة العز')}
                    </h1>
                    <p className="text-slate-500 font-medium">
                        {t('login.academySubtitle', 'أكاديمية تعليمية روحية ومعاصرة')}
                    </p>
                </div>

                <div className="bg-white w-full max-w-md rounded-[2rem] shadow-sm p-8 sm:p-10 border border-slate-100">
                    <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center sm:text-start">
                        {t('login.formTitle', 'تسجيل الدخول')}
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-5" noValidate>

                        <div className="bg-emerald-50 border border-emerald-100 text-emerald-700 p-3 rounded-xl text-sm text-center shadow-sm">
                            <p className="font-semibold mb-1">{isRtl ? 'بيانات دخول لوحة ولي الأمر (للتجربة):' : 'Parent Dashboard Demo Credentials:'}</p>
                            <p dir="ltr" className="font-mono bg-white inline-block px-2 py-1 rounded text-xs border border-emerald-100">
                                parent@eduplatform.com / Parent@123
                            </p>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-slate-600 px-1">
                                {t('login.emailLabel', 'البريد الإلكتروني')}
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                                    <Mail className="w-5 h-5 text-slate-400" />
                                </div>
                                <input
                                    type="email"
                                    value={formValues.email}
                                    onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
                                    placeholder="example@mail.com"
                                    className={`w-full bg-[#F5F8F7] border ${errors.email ? 'border-red-500' : 'border-transparent focus:border-[#00695C]'} text-slate-800 rounded-2xl py-3.5 ps-11 pe-4 outline-none transition-all placeholder-slate-400`}
                                />
                            </div>
                            {errors.email && <p className="text-xs text-red-500 px-1">{errors.email}</p>}
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-slate-600 px-1">
                                {t('login.passwordLabel', 'كلمة المرور')}
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                                    <Lock className="w-5 h-5 text-slate-400" />
                                </div>
                                <input
                                    type="password"
                                    value={formValues.password}
                                    onChange={(e) => setFormValues({ ...formValues, password: e.target.value })}
                                    placeholder="••••••••"
                                    className={`w-full bg-[#F5F8F7] border ${errors.password ? 'border-red-500' : 'border-transparent focus:border-[#00695C]'} text-slate-800 rounded-2xl py-3.5 ps-11 pe-4 outline-none transition-all placeholder-slate-400`}
                                />
                            </div>
                            {errors.password && <p className="text-xs text-red-500 px-1">{errors.password}</p>}
                        </div>
                        <div className="flex justify-end pt-1">
                            <Link to="/forgot-password" className="text-sm font-bold text-[#735C00] hover:text-[#5c4a00] transition-colors">
                                {t('login.forgotPassword', 'نسيت كلمة المرور؟')}
                            </Link>
                        </div>

                        {serverError && <p className="text-sm text-center text-red-500 mt-2">{serverError}</p>}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#00695C] hover:bg-[#005247] text-white font-bold rounded-2xl py-4 transition-all shadow-md active:scale-[0.98] mt-4"
                        >
                            {loading ? t('login.signingIn', 'جاري الدخول...') : t('login.submitBtn', 'دخول للمنارة')}
                        </button>

                        <div className="relative py-6 flex items-center">
                            <div className="flex-grow border-t border-slate-100"></div>
                            <span className="shrink-0 px-4 text-xs font-medium text-slate-400">
                                {t('login.orLoginWith', 'أو سجل الدخول عبر حساب جوجل')}
                            </span>
                            <div className="flex-grow border-t border-slate-100"></div>
                        </div>

                        <button
                            type="button"
                            className="w-full bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold rounded-2xl py-3.5 flex items-center justify-center gap-3 transition-all"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    fill="#4285F4"
                                />
                                <path
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    fill="#34A853"
                                />
                                <path
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                    fill="#FBBC05"
                                />
                                <path
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    fill="#EA4335"
                                />
                            </svg>
                        </button>
                    </form>
                </div>


            </div>
        </div>
    )
}
