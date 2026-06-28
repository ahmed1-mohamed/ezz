import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { Send } from 'lucide-react'
import { fetchContactInfo, sendMessage, resetMessageSubmitStatus } from '@/store/landingSlice'
import ContactBanner from './ContactBanner.jsx'
import ContactInfoCards from './ContactInfoCards.jsx'
import CountryPhoneInput from './CountryPhoneInput.jsx'

const getSafeErrorMessage = (err) => {
    if (!err) return '';
    if (typeof err === 'string') return err;
    if (typeof err === 'object') {
        if (err.message && typeof err.message === 'string') return err.message;
        if (err.error && typeof err.error === 'string') return err.error;
        if (err.errors) {
            if (Array.isArray(err.errors)) return err.errors.join(', ');
            if (typeof err.errors === 'object') {
                return Object.values(err.errors).flat().join(', ');
            }
        }
    }
    return String(err);
}

export default function ContactForm() {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const { contactInfo, messageSubmitStatus, error: submitError } = useSelector((state) => state.landing)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        title: '',
        phone: '+20 ',
        message: ''
    })
    const [errors, setErrors] = useState({})
    const [toast, setToast] = useState({ show: false, message: '', type: 'success' })

    useEffect(() => {
        dispatch(fetchContactInfo())
    }, [dispatch])

    useEffect(() => {
        if (messageSubmitStatus === 'success') {
            setTimeout(() => {
                setToast({
                    show: true,
                    message: t('contact.toast.success', 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.'),
                    type: 'success'
                })
                setFormData({
                    name: '',
                    email: '',
                    title: '',
                    phone: '+20 ',
                    message: ''
                })
                dispatch(resetMessageSubmitStatus())
            }, 0)
        } else if (messageSubmitStatus === 'failed') {
            setTimeout(() => {
                const errorMsg = getSafeErrorMessage(submitError) || t('contact.toast.error', 'عذراً، حدث خطأ ما أثناء إرسال الرسالة.');
                setToast({
                    show: true,
                    message: errorMsg,
                    type: 'error'
                })
                dispatch(resetMessageSubmitStatus())
            }, 0)
        }
    }, [messageSubmitStatus, submitError, dispatch, t])

    useEffect(() => {
        if (toast.show) {
            const timer = setTimeout(() => {
                setToast(prev => ({ ...prev, show: false }))
            }, 4000)
            return () => clearTimeout(timer)
        }
    }, [toast.show])

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }))
        }
    }

    const handlePhoneChange = (newPhone) => {
        setFormData(prev => ({ ...prev, phone: newPhone }))
        if (errors.phone) {
            setErrors(prev => ({ ...prev, phone: '' }))
        }
    }

    const validateForm = () => {
        const newErrors = {}
        if (!formData.name.trim()) {
            newErrors.name = t('contact.validation.nameRequired', 'الاسم الكامل مطلوب')
        } else if (formData.name.trim().length < 3) {
            newErrors.name = t('contact.validation.nameMin', 'الاسم يجب أن يكون 3 أحرف على الأقل')
        }

        if (!formData.email.trim()) {
            newErrors.email = t('contact.validation.emailRequired', 'البريد الإلكتروني مطلوب')
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = t('contact.validation.emailInvalid', 'البريد الإلكتروني غير صحيح')
        }

        if (!formData.title.trim()) {
            newErrors.title = t('contact.validation.titleRequired', 'موضوع الرسالة مطلوب')
        } else if (formData.title.trim().length < 5) {
            newErrors.title = t('contact.validation.titleMin', 'موضوع الرسالة يجب أن يكون 5 أحرف على الأقل')
        }

        const phoneVal = formData.phone.trim()
        if (!phoneVal) {
            newErrors.phone = t('contact.validation.phoneRequired', 'رقم الهاتف مطلوب')
        } else if (!phoneVal.startsWith('+')) {
            newErrors.phone = t('contact.validation.phoneInvalidCountry', 'يجب أن يبدأ رقم الهاتف برمز دولة صحيح (مثال: +20)')
        } else {
            const digits = phoneVal.substring(1).replace(/\D/g, '')
            if (digits.length < 8 || digits.length > 15) {
                newErrors.phone = t('contact.validation.phoneInvalidLength', 'رقم الهاتف غير صحيح')
            } else {
                const spaceIndex = phoneVal.indexOf(' ')
                if (spaceIndex !== -1) {
                    const rest = phoneVal.substring(spaceIndex + 1).replace(/\D/g, '')
                    if (rest.startsWith('0')) {
                        newErrors.phone = t('contact.validation.phoneNoZero', 'لا يجب كتابة الصفر بعد رمز الدولة')
                    }
                }
            }
        }

        if (!formData.message.trim()) {
            newErrors.message = t('contact.validation.messageRequired', 'محتوى الرسالة مطلوب')
        } else if (formData.message.trim().length < 10) {
            newErrors.message = t('contact.validation.messageMin', 'الرسالة يجب أن تكون 10 أحرف على الأقل')
        }

        setErrors(newErrors)

        if (Object.keys(newErrors).length > 0) {
            setToast({
                show: true,
                message: t('contact.validation.formError', 'خطأ في نموذج التواصل: يرجى تصحيح الحقول المحددة'),
                type: 'error'
            })

            const firstErrorField = Object.keys(newErrors)[0]
            setTimeout(() => {
                const element = document.getElementsByName(firstErrorField)[0]
                if (element) {
                    element.focus()
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' })
                }
            }, 100)

            return false
        }
        return true
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validateForm()) {
            const payload = {
                name: formData.name.trim(),
                email: formData.email.trim(),
                phone: formData.phone.trim(),
                title: formData.title.trim(),
                message: formData.message.trim()
            }
            dispatch(sendMessage(payload))
        }
    }

    return (
        <section className="max-w-5xl mx-auto mb-24 px-4 sm:px-6 lg:px-8">
            <ContactBanner />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-lg border border-slate-100/50"
            >
                <form className="space-y-6 sm:space-y-8" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        <div className="space-y-2 text-start">
                            <label className="block text-sm font-bold text-slate-700 px-1">
                                {t('contact.form.name', 'الاسم الكامل')}
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder={t('contact.form.namePlaceholder', 'أدخل اسمك هنا')}
                                className={`w-full bg-[#F5F5F2] border text-slate-900 text-base rounded-2xl focus:ring-2 focus:ring-[#00695C] block p-4 transition-all ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-transparent'}`}
                            />
                            {errors.name && <span className="text-xs text-red-500 font-bold px-1 block">{errors.name}</span>}
                        </div>

                        <div className="space-y-2 text-start">
                            <label className="block text-sm font-bold text-slate-700 px-1">
                                {t('contact.form.email', 'البريد الإلكتروني')}
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                dir="ltr"
                                placeholder={t('contact.form.emailPlaceholder', 'example@mail.com')}
                                className={`w-full bg-[#F5F5F2] border text-slate-900 text-base rounded-2xl focus:ring-2 focus:ring-[#00695C] block p-4 transition-all text-start ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-transparent'}`}
                            />
                            {errors.email && <span className="text-xs text-red-500 font-bold px-1 block">{errors.email}</span>}
                        </div>

                        <div className="space-y-2 text-start">
                            <label className="block text-sm font-bold text-slate-700 px-1">
                                {t('contact.form.subject', 'موضوع الرسالة')}
                            </label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                                placeholder={t('contact.form.subjectPlaceholder', 'أدخل الموضوع')}
                                className={`w-full bg-[#F5F5F2] border text-slate-900 text-base rounded-2xl focus:ring-2 focus:ring-[#00695C] block p-4 transition-all ${errors.title ? 'border-red-500 focus:ring-red-500' : 'border-transparent'}`}
                            />
                            {errors.title && <span className="text-xs text-red-500 font-bold px-1 block">{errors.title}</span>}
                        </div>

                        <CountryPhoneInput
                            value={formData.phone}
                            onChange={handlePhoneChange}
                            error={errors.phone}
                        />
                    </div>

                    <div className="space-y-2 text-start">
                        <label className="block text-sm font-bold text-slate-700 px-1">
                            {t('contact.form.message', 'رسالتك')}
                        </label>
                        <textarea
                            rows="6"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder={t('contact.form.messagePlaceholder', 'كيف يمكننا مساعدتك اليوم؟')}
                            className={`w-full bg-[#F5F5F2] border text-slate-900 text-base rounded-2xl focus:ring-2 focus:ring-[#00695C] block p-5 transition-all resize-none ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-transparent'}`}
                        ></textarea>
                        {errors.message && <span className="text-xs text-red-500 font-bold px-1 block">{errors.message}</span>}
                    </div>

                    <div className="flex justify-center pt-4">
                        <button
                            type="submit"
                            disabled={messageSubmitStatus === 'loading'}
                            className="bg-[#00695C] hover:bg-[#005247] disabled:bg-[#00695C]/50 text-white font-bold py-4 px-10 rounded-2xl transition-all duration-300 ease-out shadow-md hover:shadow-lg text-lg active:scale-95 hover:-translate-y-1 flex items-center gap-3 cursor-pointer"
                        >
                            <Send className="w-5 h-5 rtl:rotate-180" />
                            {messageSubmitStatus === 'loading' ? t('contact.form.submitting', 'جاري الإرسال...') : t('contact.form.submit', 'إرسال الرسالة')}
                        </button>
                    </div>
                </form>

                <ContactInfoCards contactInfo={contactInfo} />
            </motion.div>

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
        </section>
    )
}
