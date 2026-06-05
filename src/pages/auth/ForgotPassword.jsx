import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Mail, BookOpen, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react'
import LanguageSwitcher from '@/shared/components/LanguageSwitcher.jsx'

export default function ForgotPassword() {
    const { t, i18n } = useTranslation()
    const isRtl = i18n.language === 'ar'
    const ArrowIcon = isRtl ? ArrowRight : ArrowLeft

    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault()
        setError('')
        
        if (!email) {
            setError(t('forgotPassword.emailRequired', 'البريد الإلكتروني مطلوب.'))
            return
        }

        try {
            setLoading(true)
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000))
            setIsSubmitted(true)
        } catch (err) {
            setError(t('forgotPassword.error', 'حدث خطأ ما. حاول مرة أخرى.'))
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
                                {t('forgotPassword.title', 'نسيت كلمة المرور؟')}
                            </h2>
                            <p className="text-slate-500 mb-8 text-center sm:text-start text-sm leading-relaxed">
                                {t('forgotPassword.subtitle', 'أدخل بريدك الإلكتروني أدناه وسنرسل لك رابطاً لإعادة تعيين كلمة المرور الخاصة بك.')}
                            </p>

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
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="example@mail.com"
                                            className={`w-full bg-[#F5F8F7] border ${error ? 'border-red-500' : 'border-transparent focus:border-[#00695C]'} text-slate-800 rounded-2xl py-3.5 ps-11 pe-4 outline-none transition-all placeholder-slate-400`}
                                        />
                                    </div>
                                    {error && <p className="text-xs text-red-500 px-1">{error}</p>}
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-[#00695C] hover:bg-[#005247] text-white font-bold rounded-2xl py-4 transition-all shadow-md active:scale-[0.98] mt-4"
                                >
                                    {loading ? t('forgotPassword.sending', 'جاري الإرسال...') : t('forgotPassword.submitBtn', 'إرسال رابط الاستعادة')}
                                </button>
                            </form>
                        </>
                    ) : (
                        <div className="text-center space-y-6">
                            <div className="bg-emerald-100 text-emerald-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle2 className="w-10 h-10" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-800">
                                {t('forgotPassword.successTitle', 'تم الإرسال بنجاح')}
                            </h2>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                {t('forgotPassword.successMessage', 'لقد أرسلنا رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني. يرجى التحقق من صندوق الوارد الخاص بك.')}
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
