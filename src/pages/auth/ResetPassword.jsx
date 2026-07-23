import { useState } from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Lock, BookOpen, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react'
import LanguageSwitcher from '@/shared/components/LanguageSwitcher.jsx'
import api from '@/shared/services/api/axiosConfig'
import { setCookie, getCookie, deleteCookie } from '@/shared/utils/cookieUtils.js'

export default function ResetPassword() {
    const { t, i18n } = useTranslation()
    const isRtl = i18n.language === 'ar'
    const ArrowIcon = isRtl ? ArrowRight : ArrowLeft
    const location = useLocation()
    const [searchParams] = useSearchParams()

    const initialToken = location.state?.token || searchParams.get('token') || searchParams.get('resetToken') || sessionStorage.getItem('reset_token') || getCookie('access_token') || ''

    const [step, setStep] = useState(1)
    const [resetCode, setResetCode] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)
    const [token, setToken] = useState(initialToken)

    const handleVerifyCode = async (e) => {
        e.preventDefault()
        setErrors({})

        if (!resetCode.trim()) {
            setErrors({ resetCode: t('resetPassword.codeRequired', 'رمز التحقق مطلوب.') })
            return
        }

        try {
            setLoading(true)
            const currentToken = token || sessionStorage.getItem('reset_token') || getCookie('access_token') || ''
            const payload = {
                resetCode: resetCode.trim()
            }
            const config = currentToken ? { headers: { Authorization: `Bearer ${currentToken}` } } : {}

            const verifyRes = await api.post('/api/v1/auth/verify-code', payload, config)
            const tempToken = verifyRes.data?.token || verifyRes.data?.accessToken || verifyRes.data?.data?.token || verifyRes.data?.resetToken || verifyRes.data?.data?.resetToken || currentToken

            if (tempToken) {
                setToken(tempToken)
                sessionStorage.setItem('reset_token', tempToken)
                setCookie('access_token', tempToken)
                api.defaults.headers.common['Authorization'] = `Bearer ${tempToken}`
            }

            setStep(2)
        } catch (err) {
            const data = err.response?.data
            const msg = (Array.isArray(data?.message) ? data.message.join(', ') : data?.message) || err.message || t('resetPassword.error', 'حدث خطأ ما. حاول مرة أخرى.')
            setErrors({ submit: msg })
        } finally {
            setLoading(false)
        }
    }

    const handleResetPassword = async (e) => {
        e.preventDefault()
        setErrors({})

        const nextErrors = {}
        if (!password) {
            nextErrors.password = t('resetPassword.passwordRequired', 'كلمة المرور مطلوبة.')
        } else if (password.length < 6) {
            nextErrors.password = t('resetPassword.passwordShort', 'كلمة المرور يجب أن تكون 6 أحرف على الأقل.')
        }

        if (password !== confirmPassword) {
            nextErrors.confirmPassword = t('resetPassword.passwordMismatch', 'كلمتا المرور غير متطابقتين.')
        }

        if (Object.keys(nextErrors).length > 0) {
            setErrors(nextErrors)
            return
        }

        try {
            setLoading(true)
            const currentToken = token || sessionStorage.getItem('reset_token') || getCookie('access_token') || ''
            const payload = {
                password: password,
                confirmPassword: confirmPassword
            }
            const config = currentToken ? { headers: { Authorization: `Bearer ${currentToken}` } } : {}

            await api.patch('/api/v1/auth/reset-password', payload, config)
            sessionStorage.removeItem('reset_token')
            deleteCookie('access_token')
            setStep(3)
        } catch (err) {
            const data = err.response?.data
            const msg = (Array.isArray(data?.message) ? data.message.join(', ') : data?.message) || err.message || t('resetPassword.error', 'حدث خطأ ما. حاول مرة أخرى.')
            setErrors({ submit: msg })
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
                    {step === 1 && (
                        <>
                            <h2 className="text-2xl font-bold text-slate-800 mb-2 text-center sm:text-start">
                                {t('resetPassword.verifyCodeTitle', 'التحقق من الرمز')}
                            </h2>
                            <p className="text-slate-500 mb-8 text-center sm:text-start text-sm leading-relaxed">
                                {t('resetPassword.verifyCodeSubtitle', 'يرجى إدخال رمز التحقق الذي تم إرساله إلى بريدك الإلكتروني.')}
                            </p>

                            <form onSubmit={handleVerifyCode} className="space-y-5" noValidate>
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-slate-600 px-1">
                                        {t('resetPassword.verificationCode', 'رمز التحقق')}
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                                            <span className="text-slate-400 font-bold">#</span>
                                        </div>
                                        <input
                                            type="text"
                                            name="resetCode"
                                            value={resetCode}
                                            onChange={(e) => setResetCode(e.target.value)}
                                            placeholder={t('resetPassword.codePlaceholder', 'أدخل رمز التحقق')}
                                            className={`w-full bg-[#F5F8F7] border ${errors.resetCode ? 'border-red-500' : 'border-transparent focus:border-[#00695C]'} text-slate-800 rounded-2xl py-3.5 ps-11 pe-4 outline-none transition-all placeholder-slate-400`}
                                        />
                                    </div>
                                    {errors.resetCode && <p className="text-xs text-red-500 px-1">{errors.resetCode}</p>}
                                </div>

                                {errors.submit && <p className="text-xs text-red-500 px-1">{errors.submit}</p>}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-[#00695C] hover:bg-[#005247] text-white font-bold rounded-2xl py-4 transition-all shadow-md active:scale-[0.98] mt-4"
                                >
                                    {loading ? t('resetPassword.verifying', 'جاري التحقق...') : t('resetPassword.verifyBtn', 'التحقق من الرمز')}
                                </button>
                            </form>
                        </>
                    )}

                    {step === 2 && (
                        <>
                            <h2 className="text-2xl font-bold text-slate-800 mb-2 text-center sm:text-start">
                                {t('resetPassword.title', 'إعادة تعيين كلمة المرور')}
                            </h2>
                            <p className="text-slate-500 mb-8 text-center sm:text-start text-sm leading-relaxed">
                                {t('resetPassword.subtitle', 'يرجى إدخال كلمة المرور الجديدة الخاصة بك وتأكيدها.')}
                            </p>

                            <form onSubmit={handleResetPassword} className="space-y-5" noValidate>
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
                    )}

                    {step === 3 && (
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
