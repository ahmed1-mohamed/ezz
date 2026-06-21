import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Mail, Lock, BookOpen, ArrowRight, ArrowLeft } from 'lucide-react'
import { useAuth } from '@/shared/context/useAuth.jsx'
import { getRedirectPath } from '@/shared/services/authService.js'
import LanguageSwitcher from '@/shared/components/LanguageSwitcher.jsx'
import { motion, AnimatePresence } from 'framer-motion'

const initialState = { email: '', password: '' }

export default function Login() {
    const { t, i18n } = useTranslation()
    const isRtl = i18n.language === 'ar'
    const ArrowIcon = isRtl ? ArrowRight : ArrowLeft

    const [formValues, setFormValues] = useState(initialState)
    const [errors, setErrors] = useState({})
    const [serverError, setServerError] = useState('')
    const [toast, setToast] = useState({ show: false, message: '', type: 'success' })
    const [showGoogleModal, setShowGoogleModal] = useState(false)
    const [googleUsername, setGoogleUsername] = useState('')
    const [googlePassword, setGooglePassword] = useState('')
    const [googleErrors, setGoogleErrors] = useState({})
    const { login, loginWithGoogle, loading } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (toast.show) {
            const timer = setTimeout(() => {
                setToast(prev => ({ ...prev, show: false }))
            }, 4000)
            return () => clearTimeout(timer)
        }
    }, [toast.show])

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
            setToast({
                show: true,
                message: t('login.successMessage', 'تم تسجيل الدخول بنجاح!'),
                type: 'success'
            })
            setTimeout(() => {
                navigate(getRedirectPath(user.role))
            }, 50)
        } catch (error) {
            setServerError(error.message)
            setToast({
                show: true,
                message: error.message || t('login.errorMessage', 'خطأ في البريد الإلكتروني أو كلمة المرور'),
                type: 'error'
            })
        }
    }

    const handleGoogleClick = () => {
        console.log('Google login clicked, opening credentials modal.')
        setServerError('')
        setGoogleUsername('')
        setGooglePassword('')
        setGoogleErrors({})
        setShowGoogleModal(true)
    }

    const handleGoogleModalSubmit = async (event) => {
        event.preventDefault()
        setServerError('')
        const nextErrors = {}
        if (!googleUsername.trim()) {
            nextErrors.username = t('login.usernameRequired', 'اسم المستخدم مطلوب.')
        }
        if (!googlePassword) {
            nextErrors.password = t('login.passwordRequired', 'كلمة المرور مطلوبة.')
        }
        if (Object.keys(nextErrors).length > 0) {
            setGoogleErrors(nextErrors)
            return
        }
        try {
            const user = await loginWithGoogle(googleUsername, googlePassword)
            setShowGoogleModal(false)
            setToast({
                show: true,
                message: t('login.successMessage', 'تم تسجيل الدخول بنجاح!'),
                type: 'success'
            })
            setTimeout(() => {
                navigate(getRedirectPath(user.role))
            }, 50)
        } catch (error) {
            setServerError(error.message)
            setToast({
                show: true,
                message: error.message || t('login.googleError', 'فشل تسجيل الدخول بجوجل'),
                type: 'error'
            })
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
                            onClick={handleGoogleClick}
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

            {/* Custom Toast Notification */}
            <AnimatePresence>
                {toast.show && (
                    <motion.div
                        initial={{ opacity: 0, y: -50, x: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, x: 50, scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className={`fixed top-5 right-5 z-[9999] flex items-center gap-3 px-6 py-4 rounded-2xl shadow-xl text-white font-bold border ${toast.type === 'success'
                            ? 'bg-[#00695C] border-[#004D40] text-white'
                            : 'bg-red-600 border-red-700 text-white'
                            }`}
                    >
                        {toast.type === 'success' ? (
                            <span className="flex items-center justify-center bg-white/20 rounded-full p-1 shrink-0">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </span>
                        ) : (
                            <span className="flex items-center justify-center bg-white/20 rounded-full p-1 shrink-0">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                                </svg>
                            </span>
                        )}
                        <span className="text-sm sm:text-base font-semibold">{toast.message}</span>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Google Login Credentials Modal */}
            <AnimatePresence>
                {showGoogleModal && (
                    <motion.div
                        key="google-login-modal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.95, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: 20 }}
                            transition={{ type: 'spring', duration: 0.5 }}
                            className="bg-white w-full max-w-md rounded-[2rem] shadow-2xl border border-slate-100 p-8 relative"
                        >
                            <h3 className="text-2xl font-bold text-[#00695C] mb-6 text-center sm:text-start">
                                {t('login.googleModalTitle', 'تسجيل الدخول بحساب جوجل')}
                            </h3>
                            <form onSubmit={handleGoogleModalSubmit} className="space-y-5" noValidate>
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-slate-600 px-1">
                                        {t('login.usernameLabel', 'البريد الإلكتروني أو رقم الهاتف')}
                                    </label>
                                    <input
                                        type="text"
                                        value={googleUsername}
                                        onChange={(e) => setGoogleUsername(e.target.value)}
                                        placeholder="example@mail.com"
                                        className={`w-full bg-[#F5F8F7] border ${googleErrors.username ? 'border-red-500' : 'border-transparent focus:border-[#00695C]'} text-slate-800 rounded-2xl py-3.5 px-4 outline-none transition-all placeholder-slate-400`}
                                    />
                                    {googleErrors.username && <p className="text-xs text-red-500 px-1">{googleErrors.username}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-slate-600 px-1">
                                        {t('login.passwordLabel', 'كلمة المرور')}
                                    </label>
                                    <input
                                        type="password"
                                        value={googlePassword}
                                        onChange={(e) => setGooglePassword(e.target.value)}
                                        placeholder="••••••••"
                                        className={`w-full bg-[#F5F8F7] border ${googleErrors.password ? 'border-red-500' : 'border-transparent focus:border-[#00695C]'} text-slate-800 rounded-2xl py-3.5 px-4 outline-none transition-all placeholder-slate-400`}
                                    />
                                    {googleErrors.password && <p className="text-xs text-red-500 px-1">{googleErrors.password}</p>}
                                </div>
                                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="flex-1 bg-[#00695C] hover:bg-[#005247] text-white font-bold rounded-2xl py-3.5 transition-all shadow-md active:scale-[0.98]"
                                    >
                                        {loading ? t('login.signingIn', 'جاري الدخول...') : t('login.submitBtn', 'دخول')}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setShowGoogleModal(false)}
                                        className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-2xl py-3.5 transition-all active:scale-[0.98]"
                                    >
                                        {t('login.cancelBtn', 'إلغاء')}
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
