import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { Send, Mail, MessageCircle, Phone, ChevronDown } from 'lucide-react'
import { fetchContactInfo, sendMessage, resetMessageSubmitStatus } from '@/store/landingSlice'

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
    const { t, i18n } = useTranslation()
    const dispatch = useDispatch()
    const { contactInfo, messageSubmitStatus, error: submitError } = useSelector((state) => state.landing)

    const [countryCode, setCountryCode] = useState('+20')
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
            setCountryCode('+20')
            dispatch(resetMessageSubmitStatus())
        } else if (messageSubmitStatus === 'failed') {
            const errorMsg = getSafeErrorMessage(submitError) || t('contact.toast.error', 'عذراً، حدث خطأ ما أثناء إرسال الرسالة.');
            setToast({
                show: true,
                message: errorMsg,
                type: 'error'
            })
            dispatch(resetMessageSubmitStatus())
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

    const countries = [
        { code: '+20', nameAr: 'مصر', nameEn: 'Egypt' },
        { code: '+966', nameAr: 'السعودية', nameEn: 'KSA' },
        { code: '+971', nameAr: 'الإمارات', nameEn: 'UAE' },
        { code: '+965', nameAr: 'الكويت', nameEn: 'Kuwait' },
        { code: '+974', nameAr: 'قطر', nameEn: 'Qatar' },
        { code: '+973', nameAr: 'البحرين', nameEn: 'Bahrain' },
        { code: '+968', nameAr: 'عمان', nameEn: 'Oman' },
    ]

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        
        if (name === 'phone') {
            const matchedCountry = countries.find(c => value.trim().startsWith(c.code))
            if (matchedCountry) {
                setCountryCode(matchedCountry.code)
            }
        }

        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }))
        }
    }

    const handleCountryChange = (code) => {
        setCountryCode(code)
        setFormData(prev => {
            let currentPhone = prev.phone.trim()
            const existingCountry = countries.find(c => currentPhone.startsWith(c.code))
            if (existingCountry) {
                currentPhone = currentPhone.substring(existingCountry.code.length).trim()
            }
            const newPhone = `${code} ${currentPhone}`
            return { ...prev, phone: newPhone }
        })
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

        const cleanPhone = formData.phone.trim().replace(/\D/g, '')
        if (!formData.phone.trim()) {
            newErrors.phone = t('contact.validation.phoneRequired', 'رقم الهاتف مطلوب')
        } else if (cleanPhone.length < 7 || cleanPhone.length > 15) {
            newErrors.phone = t('contact.validation.phoneInvalid', 'رقم الهاتف غير صحيح')
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
            const phoneToSubmit = formData.phone.trim().startsWith('+')
                ? formData.phone.trim()
                : `${countryCode} ${formData.phone.trim()}`
            const payload = {
                name: formData.name.trim(),
                email: formData.email.trim(),
                phone: phoneToSubmit,
                title: formData.title.trim(),
                message: formData.message.trim()
            }
            dispatch(sendMessage(payload))
        }
    }

    return (
        <section className="max-w-5xl mx-auto mb-24 px-4 sm:px-6 lg:px-8">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[2rem] p-8 sm:p-10 mb-8 shadow-sm border border-slate-100 text-center space-y-3"
            >
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {t('contact.banner.title', 'تواصل معنا للتسجيل والاشتراك')}
                </h2>
                <p className="text-slate-500 font-medium text-base sm:text-lg">
                    {t('contact.banner.desc', 'امنح أطفالك فرصة للتعلم والتطور من خلال دوراتنا التعليمية المصممة لتنمية المهارات وبناء الثقة بطريقة ممتعة وآمنة.')}
                </p>
            </motion.div>

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
                                className={`w-full bg-[#F5F5F2] border text-slate-900 text-base rounded-2xl focus:ring-2 focus:ring-[#00695C] block p-4 transition-all ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-transparent'
                                    }`}
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
                                className={`w-full bg-[#F5F5F2] border text-slate-900 text-base rounded-2xl focus:ring-2 focus:ring-[#00695C] block p-4 transition-all text-start ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-transparent'
                                    }`}
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
                                className={`w-full bg-[#F5F5F2] border text-slate-900 text-base rounded-2xl focus:ring-2 focus:ring-[#00695C] block p-4 transition-all ${errors.title ? 'border-red-500 focus:ring-red-500' : 'border-transparent'
                                    }`}
                            />
                            {errors.title && <span className="text-xs text-red-500 font-bold px-1 block">{errors.title}</span>}
                        </div>

                        <div className="space-y-2 text-start">
                            <label className="block text-sm font-bold text-slate-700 px-1">
                                {t('contact.form.phone', 'رقم الهاتف')}
                            </label>
                            <div className="flex gap-3">
                                <div className="relative w-1/3 sm:w-1/4">
                                    <select
                                        value={countryCode}
                                        onChange={(e) => handleCountryChange(e.target.value)}
                                        className="w-full h-full bg-[#F5F5F2] border-none text-slate-600 text-sm sm:text-base rounded-2xl focus:ring-2 focus:ring-[#00695C] p-4 appearance-none ltr:pr-10 rtl:pl-10 ltr:pl-4 rtl:pr-4 cursor-pointer transition-shadow"
                                    >
                                        {countries.map((country) => (
                                            <option key={country.code} value={country.code}>
                                                {i18n.language === 'en' ? country.nameEn : country.nameAr}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="absolute inset-y-0 ltr:right-4 rtl:left-4 flex items-center pointer-events-none">
                                        <ChevronDown className="w-4 h-4 text-slate-400" />
                                    </div>
                                </div>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    dir="ltr"
                                    placeholder={t('contact.form.phonePlaceholder', '01012345678')}
                                    className={`flex-1 w-full bg-[#F5F5F2] border text-slate-900 text-base rounded-2xl focus:ring-2 focus:ring-[#00695C] block p-4 transition-all text-start ${errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-transparent'
                                        }`}
                                />
                            </div>
                            {errors.phone && <span className="text-xs text-red-500 font-bold px-1 block">{errors.phone}</span>}
                        </div>
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
                            className={`w-full bg-[#F5F5F2] border text-slate-900 text-base rounded-2xl focus:ring-2 focus:ring-[#00695C] block p-5 transition-all resize-none ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-transparent'
                                }`}
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-slate-100">
                    <a href={`mailto:${contactInfo?.email || 'info@manaratezz.edu.sa'}`} className="flex items-center justify-center gap-4 group cursor-pointer transition-transform hover:-translate-y-1">
                        <div className="bg-[#FECD31]/20 w-12 h-12 rounded-xl flex items-center justify-center transition-colors group-hover:bg-[#FECD31]/30">
                            <Mail className="w-5 h-5 text-[#735C00]" />
                        </div>
                        <div className="text-start">
                            <h4 className="font-bold text-slate-900">{t('contact.info.emailTitle', 'البريد الإلكتروني')}</h4>
                            <p className="text-sm text-slate-500 font-medium">{contactInfo?.email || 'info@manaratezz.edu.sa'}</p>
                        </div>
                    </a>

                    <a href={`https://wa.me/${(contactInfo?.whatsapp || '+0201012345678').replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-4 group cursor-pointer transition-transform hover:-translate-y-1 border-y md:border-y-0 md:border-x border-slate-100 py-6 md:py-0">
                        <div className="bg-[#E6F0ED] w-12 h-12 rounded-xl flex items-center justify-center transition-colors group-hover:bg-[#E6F0ED]/80">
                            <MessageCircle className="w-5 h-5 text-[#00695C]" />
                        </div>
                        <div className="text-start">
                            <h4 className="font-bold text-slate-900">{t('contact.info.whatsappTitle', 'واتساب')}</h4>
                            <p className="text-sm text-slate-500 font-medium">{contactInfo?.whatsapp || '+0201012345678'}</p>
                        </div>
                    </a>

                    <a href={`tel:${contactInfo?.phone || '+0201012345678'}`} className="flex items-center justify-center gap-4 group cursor-pointer transition-transform hover:-translate-y-1">
                        <div className="bg-slate-100 w-12 h-12 rounded-xl flex items-center justify-center transition-colors group-hover:bg-slate-200">
                            <Phone className="w-5 h-5 text-slate-600" />
                        </div>
                        <div className="text-start">
                            <h4 className="font-bold text-slate-900">{t('contact.info.phoneTitle', 'اتصل بنا')}</h4>
                            <p className="text-sm text-slate-500 font-medium">{contactInfo?.phone || '+0201012345678'}</p>
                        </div>
                    </a>
                </div>

            </motion.div>

            {/* Custom Toast Notification */}
            <AnimatePresence>
                {toast.show && (
                    <motion.div
                        initial={{ opacity: 0, y: -50, x: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, x: 50, scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className={`fixed top-5 right-5 z-[9999] flex items-center gap-3 px-6 py-4 rounded-2xl shadow-xl text-white font-bold border ${
                            toast.type === 'success' 
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
