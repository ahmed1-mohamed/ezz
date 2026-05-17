import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Mail, Lock, User, Phone, Users, Smile, ArrowRight, ArrowLeft } from 'lucide-react'
import { useAuth } from '../context/useAuth.jsx'
import { getRedirectPath } from '../services/authService.js'
import LanguageSwitcher from '../components/layout/LanguageSwitcher.jsx'

const initialState = { 
    accountType: 'student', 
    fullName: '', 
    email: '', 
    phone: '', 
    password: '', 
    confirmPassword: '' 
}

export default function Register() {
    const { t, i18n } = useTranslation()
    const isRtl = i18n.language === 'ar'
    const ArrowIcon = isRtl ? ArrowRight : ArrowLeft

    const [formValues, setFormValues] = useState(initialState)
    const [errors, setErrors] = useState({})
    const [serverError, setServerError] = useState('')
    const { register, loading } = useAuth()
    const navigate = useNavigate()

    const validate = () => {
        const nextErrors = {}
        if (!formValues.fullName) nextErrors.fullName = t('register.nameRequired', 'الاسم الكامل مطلوب.')
        if (!formValues.email) nextErrors.email = t('register.emailRequired', 'البريد الإلكتروني مطلوب.')
        if (!formValues.phone) nextErrors.phone = t('register.phoneRequired', 'رقم الهاتف مطلوب.')
        
        if (!formValues.password) {
            nextErrors.password = t('register.passwordRequired', 'كلمة المرور مطلوبة.')
        } else if (formValues.password.length < 6) {
            nextErrors.password = t('register.passwordLength', 'كلمة المرور يجب أن تكون 6 أحرف على الأقل.')
        }

        if (formValues.password !== formValues.confirmPassword) {
            nextErrors.confirmPassword = t('register.passwordMismatch', 'كلمات المرور غير متطابقة.')
        }

        setErrors(nextErrors)
        return Object.keys(nextErrors).length === 0
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setServerError('')
        if (!validate()) return

        try {
             if(register) {
                const user = await register(formValues.email, formValues.password, formValues.fullName, formValues.accountType)
                navigate(getRedirectPath(user?.role || 'Student'))
            } else {
                 navigate('/login')
            }
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

            <div className="flex-1 flex flex-col justify-center items-center px-4 sm:px-6 py-12 lg:py-20">
                
                 <div className="bg-white w-full max-w-2xl rounded-[2rem] shadow-sm p-8 sm:p-12 border border-slate-100">
                    
                     <div className="text-center mb-10">
                        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#00695C] mb-3">
                            {t('register.title', 'إنشاء حساب جديد')}
                        </h1>
                        <p className="text-slate-500 font-medium">
                            {t('register.subtitle', 'انضم إلى مجتمعنا التعليمي المتميز وابدأ رحلة المعرفة')}
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                        
                         <div className="space-y-3">
                            <label className="block text-sm font-bold text-[#00695C] px-1 text-end">
                                {t('register.accountType', 'نوع الحساب')}
                            </label>
                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    type="button"
                                    onClick={() => setFormValues({...formValues, accountType: 'parent'})}
                                    className={`flex flex-col items-center justify-center py-4 rounded-xl border-2 transition-all ${
                                        formValues.accountType === 'parent' 
                                        ? 'border-[#735C00] bg-[#FEF6E0]/50 text-[#735C00]' 
                                        : 'border-transparent bg-[#F5F8F7] text-slate-500 hover:bg-slate-100'
                                    }`}
                                >
                                    <Users className="w-6 h-6 mb-2" />
                                    <span className="font-bold text-sm">{t('register.roleParent', 'ولي أمر')}</span>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setFormValues({...formValues, accountType: 'student'})}
                                    className={`flex flex-col items-center justify-center py-4 rounded-xl border-2 transition-all ${
                                        formValues.accountType === 'student' 
                                        ? 'border-[#735C00] bg-[#FEF6E0]/50 text-[#735C00]' 
                                        : 'border-transparent bg-[#F5F8F7] text-slate-500 hover:bg-slate-100'
                                    }`}
                                >
                                    <Smile className="w-6 h-6 mb-2" />
                                    <span className="font-bold text-sm">{t('register.roleStudent', 'طالب')}</span>
                                </button>
                            </div>
                        </div>

                         <div className="space-y-2 text-end">
                            <label className="block text-sm font-bold text-slate-500 px-1">
                                {t('register.name', 'الاسم الكامل')}
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 end-0 flex items-center pe-4 pointer-events-none">
                                    <User className="w-5 h-5 text-slate-400" />
                                </div>
                                <input
                                    type="text"
                                    value={formValues.fullName}
                                    onChange={(e) => setFormValues({ ...formValues, fullName: e.target.value })}
                                    placeholder={t('register.namePlaceholder', 'أدخل اسمك الثلاثي')}
                                    className={`w-full bg-[#F5F8F7] border ${errors.fullName ? 'border-red-500' : 'border-transparent focus:border-[#00695C]'} text-slate-800 rounded-xl py-3.5 pe-11 ps-4 outline-none transition-all placeholder-slate-400`}
                                />
                            </div>
                            {errors.fullName && <p className="text-xs text-red-500 px-1 text-end">{errors.fullName}</p>}
                        </div>

                         <div className="space-y-2 text-end">
                            <label className="block text-sm font-bold text-slate-500 px-1">
                                {t('register.email', 'البريد الإلكتروني')}
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 end-0 flex items-center pe-4 pointer-events-none">
                                    <Mail className="w-5 h-5 text-slate-400" />
                                </div>
                                <input
                                    type="email"
                                    value={formValues.email}
                                    onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
                                    placeholder={t('register.emailPlaceholder', 'example@domain.com')}
                                    className={`w-full bg-[#F5F8F7] border ${errors.email ? 'border-red-500' : 'border-transparent focus:border-[#00695C]'} text-slate-800 rounded-xl py-3.5 pe-11 ps-4 outline-none transition-all placeholder-slate-400 text-left dir-ltr`}
                                    dir="ltr"
                                />
                            </div>
                            {errors.email && <p className="text-xs text-red-500 px-1 text-end">{errors.email}</p>}
                        </div>

                         <div className="space-y-2 text-end">
                            <label className="block text-sm font-bold text-slate-500 px-1">
                                {t('register.phone', 'رقم الهاتف')}
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 end-0 flex items-center pe-4 pointer-events-none">
                                    <Phone className="w-5 h-5 text-slate-400" />
                                </div>
                                <input
                                    type="tel"
                                    value={formValues.phone}
                                    onChange={(e) => setFormValues({ ...formValues, phone: e.target.value })}
                                    placeholder={t('register.phonePlaceholder', '01012345678')}
                                    className={`w-full bg-[#F5F8F7] border ${errors.phone ? 'border-red-500' : 'border-transparent focus:border-[#00695C]'} text-slate-800 rounded-xl py-3.5 pe-11 ps-4 outline-none transition-all placeholder-slate-400 text-left dir-ltr`}
                                    dir="ltr"
                                />
                            </div>
                            {errors.phone && <p className="text-xs text-red-500 px-1 text-end">{errors.phone}</p>}
                        </div>

                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                             <div className="space-y-2 text-end order-2 sm:order-1">
                                <label className="block text-sm font-bold text-slate-500 px-1">
                                    {t('register.password', 'كلمة المرور')}
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 end-0 flex items-center pe-4 pointer-events-none">
                                        <Lock className="w-5 h-5 text-slate-400" />
                                    </div>
                                    <input
                                        type="password"
                                        value={formValues.password}
                                        onChange={(e) => setFormValues({ ...formValues, password: e.target.value })}
                                        placeholder="••••••••"
                                        className={`w-full bg-[#F5F8F7] border ${errors.password ? 'border-red-500' : 'border-transparent focus:border-[#00695C]'} text-slate-800 rounded-xl py-3.5 pe-11 ps-4 outline-none transition-all placeholder-slate-400`}
                                        dir="ltr"
                                    />
                                </div>
                                {errors.password && <p className="text-xs text-red-500 px-1 text-end">{errors.password}</p>}
                            </div>

                             <div className="space-y-2 text-end order-1 sm:order-2">
                                <label className="block text-sm font-bold text-slate-500 px-1">
                                    {t('register.confirmPassword', 'تأكيد كلمة المرور')}
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 end-0 flex items-center pe-4 pointer-events-none">
                                        <Lock className="w-5 h-5 text-slate-400" />
                                    </div>
                                    <input
                                        type="password"
                                        value={formValues.confirmPassword}
                                        onChange={(e) => setFormValues({ ...formValues, confirmPassword: e.target.value })}
                                        placeholder="••••••••"
                                        className={`w-full bg-[#F5F8F7] border ${errors.confirmPassword ? 'border-red-500' : 'border-transparent focus:border-[#00695C]'} text-slate-800 rounded-xl py-3.5 pe-11 ps-4 outline-none transition-all placeholder-slate-400`}
                                        dir="ltr"
                                    />
                                </div>
                                {errors.confirmPassword && <p className="text-xs text-red-500 px-1 text-end">{errors.confirmPassword}</p>}
                            </div>
                        </div>

                        {serverError && <p className="text-sm text-center text-red-500 mt-2">{serverError}</p>}

                         <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#00695C] hover:bg-[#005247] text-white font-bold rounded-xl py-4 transition-all shadow-md active:scale-[0.98] mt-4"
                        >
                            {loading ? t('register.submitting', 'جاري التسجيل...') : t('register.submit', 'إنشاء الحساب')}
                        </button>

                         <div className="relative py-4 flex items-center">
                            <div className="flex-grow border-t border-slate-100"></div>
                            <span className="shrink-0 px-4 text-xs font-bold text-slate-400">
                                {t('register.orRegisterWith', 'أو التسجيل عبر')}
                            </span>
                            <div className="flex-grow border-t border-slate-100"></div>
                        </div>

                         <button
                            type="button"
                            className="w-full bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold rounded-xl py-3.5 flex items-center justify-center gap-3 transition-all"
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
                            <span className="text-sm">{t('register.googleBtn', 'سجل بواسطة Google')}</span>
                        </button>
                    </form>
                </div>

                 <div className="mt-8 text-center flex items-center justify-center gap-1">
                    <span className="text-slate-500 font-medium">{t('register.haveAccount', 'لديك حساب بالفعل؟')}</span>
                    <Link to="/login" className="font-bold text-[#735C00] hover:text-[#5c4a00] transition-colors">
                        {t('register.login', 'تسجيل الدخول')}
                    </Link>
                </div>
            </div>
        </div>
    )
}
