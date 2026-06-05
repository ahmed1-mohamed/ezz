import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Lock, BookOpen, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react'
import LanguageSwitcher from '@/shared/components/LanguageSwitcher.jsx'

export default function ResetPassword() {
    const { t, i18n } = useTranslation()
    const isRtl = i18n.language === 'ar'
    const ArrowIcon = isRtl ? ArrowRight : ArrowLeft

    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errors, setErrors] = useState({})
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    const validate = () => {
        const nextErrors = {}
        if (!password) {
            nextErrors.password = t('resetPassword.passwordRequired', 'كلمة المرور مطلوبة.')
        } else if (password.length < 6) {
            nextErrors.password = t('resetPassword.passwordShort', 'كلمة المرور يجب أن تكون 6 أحرف على الأقل.')
        }
        
        if (password !== confirmPassword) {
            nextErrors.confirmPassword = t('resetPassword.passwordMismatch', 'كلمتا المرور غير متطابقتين.')
        }
        
        setErrors(nextErrors)
        return Object.keys(nextErrors).length === 0
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setErrors({})
        
        if (!validate()) return

        try {
            setLoading(true)
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000))
            setIsSubmitted(true)
        } catch (err) {
            setErrors({ submit: t('resetPassword.error', 'حدث خطأ ما. حاول مرة أخرى.') })
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-[#EEF4F2] flex flex-col relative font-sans">
            <div className="absolute top-6 start-6 z-10">
                <Link to="/login" className="flex items-center gap-2 text-[#00695C] hover:text-[#004D40] font-bold transition-colors bg-white/50 hover:bg-white px-4 py-2 rounded-full shadow-sm">
                    <ArrowIcon className="w-5 h-5" />
                    <span>{t('forgotPassword.backToLogin', 'العودة لتسجيل الدخول')}</span>
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
                </div>

                <div className="bg-white w-full max-w-md rounded-[2rem] shadow-sm p-8 sm:p-10 border border-slate-100">
                    {!isSubmitted ? (
                        <>
                            <h2 className="text-2xl font-bold text-slate-800 mb-2 text-center sm:text-start">
                                {t('resetPassword.title', 'إعادة تعيين كلمة المرور')}
                            </h2>
                            <p className="text-slate-500 mb-8 text-center sm:text-start text-sm leading-relaxed">
                                {t('resetPassword.subtitle', 'يرجى إدخال كلمة المرور الجديدة الخاصة بك وتأكيدها.')}
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-slate-600 px-1">
                                        {t('resetPassword.newPassword', 'كلمة المرور الجديدة')}
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                                            <Lock className="w-5 h-5 text-slate-400" />
                                        </div>
                                        <input
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="••••••••"
                                            className={`w-full bg-[#F5F8F7] border ${errors.password ? 'border-red-500' : 'border-transparent focus:border-[#00695C]'} text-slate-800 rounded-2xl py-3.5 ps-11 pe-4 outline-none transition-all placeholder-slate-400`}
                                        />
                                    </div>
                                    {errors.password && <p className="text-xs text-red-500 px-1">{errors.password}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-slate-600 px-1">
                                        {t('resetPassword.confirmPassword', 'تأكيد كلمة المرور')}
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                                            <Lock className="w-5 h-5 text-slate-400" />
                                        </div>
                                        <input
                                            type="password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            placeholder="••••••••"
                                            className={`w-full bg-[#F5F8F7] border ${errors.confirmPassword ? 'border-red-500' : 'border-transparent focus:border-[#00695C]'} text-slate-800 rounded-2xl py-3.5 ps-11 pe-4 outline-none transition-all placeholder-slate-400`}
                                        />
                                    </div>
                                    {errors.confirmPassword && <p className="text-xs text-red-500 px-1">{errors.confirmPassword}</p>}
                                </div>

                                {errors.submit && <p className="text-xs text-red-500 px-1">{errors.submit}</p>}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-[#00695C] hover:bg-[#005247] text-white font-bold rounded-2xl py-4 transition-all shadow-md active:scale-[0.98] mt-4"
                                >
                                    {loading ? t('resetPassword.saving', 'جاري الحفظ...') : t('resetPassword.submitBtn', 'حفظ كلمة المرور')}
                                </button>
                            </form>
                        </>
                    ) : (
                        <div className="text-center space-y-6">
                            <div className="bg-emerald-100 text-emerald-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle2 className="w-10 h-10" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-800">
                                {t('resetPassword.successTitle', 'تم تغيير كلمة المرور')}
                            </h2>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                {t('resetPassword.successMessage', 'لقد تم إعادة تعيين كلمة المرور بنجاح. يمكنك الآن تسجيل الدخول باستخدام كلمة المرور الجديدة.')}
                            </p>
                            <Link
                                to="/login"
                                className="block w-full bg-[#00695C] hover:bg-[#005247] text-white font-bold rounded-2xl py-4 transition-all shadow-md active:scale-[0.98]"
                            >
                                {t('forgotPassword.backToLogin', 'العودة لتسجيل الدخول')}
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
