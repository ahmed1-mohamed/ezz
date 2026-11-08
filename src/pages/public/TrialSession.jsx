import { useState, useEffect, useMemo, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import {
  Sparkles,
  User,
  Mail,
  Globe,
  BookOpen,
  Calendar,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  GraduationCap,
  Award,
  ShieldCheck,
  HeartHandshake,
} from 'lucide-react'
import api from '@/shared/services/api/axiosConfig'
import { fetchCountries, sortCountries, getCountryName } from '@/shared/utils/countryUtils'
import CountryPhoneInput from '@/shared/components/CountryPhoneInput.jsx'
import TestimonialsSection from '@/shared/components/TestimonialsSection.jsx'
import logoImg from '@/images/programs/NewLogo.webp'

const DEFAULT_DAYS = [
  { key: 'any', labelAr: 'أي يوم متاح ومناسب', labelEn: 'Any Available Day' },
  { key: 'saturday', labelAr: 'السبت', labelEn: 'Saturday' },
  { key: 'sunday', labelAr: 'الأحد', labelEn: 'Sunday' },
  { key: 'monday', labelAr: 'الإثنين', labelEn: 'Monday' },
  { key: 'tuesday', labelAr: 'الثلاثاء', labelEn: 'Tuesday' },
  { key: 'wednesday', labelAr: 'الأربعاء', labelEn: 'Wednesday' },
  { key: 'thursday', labelAr: 'الخميس', labelEn: 'Thursday' },
  { key: 'friday', labelAr: 'الجمعة', labelEn: 'Friday' },
]

const DEFAULT_TIMES = [
  { key: 'morning', labelAr: 'الفترة الصباحية (09:00 ص - 12:00 م)', labelEn: 'Morning (09:00 AM - 12:00 PM)' },
  { key: 'afternoon', labelAr: 'فترة الظهيرة (12:00 م - 04:00 م)', labelEn: 'Afternoon (12:00 PM - 04:00 PM)' },
  { key: 'evening', labelAr: 'الفترة المسائية (04:00 م - 08:00 م)', labelEn: 'Evening (04:00 PM - 08:00 PM)' },
  { key: 'night', labelAr: 'الفترة الليلية (08:00 م - 11:00 م)', labelEn: 'Night (08:00 PM - 11:00 PM)' },
]

const DEFAULT_CURRICULA = [
  { id: 'quran', titleAr: 'القرآن الكريم وأحكام التجويد', titleEn: 'Holy Quran & Tajweed' },
  { id: 'noor-bayan', titleAr: 'نور البيان والقراءة العربية للأطفال', titleEn: 'Noor Al-Bayan & Arabic Reading' },
  { id: 'arabic-non-native', titleAr: 'اللغة العربية للناطقين بغيرها', titleEn: 'Arabic for Non-Native Speakers' },
  { id: 'islamic-studies', titleAr: 'التربية الإسلامية والفقه والآداب', titleEn: 'Islamic Studies & Ethics' },
  { id: 'school-curricula', titleAr: 'دعم المناهج المدرسية والدولية', titleEn: 'School & International Curricula' },
]

const AGE_OPTIONS = [
  '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18+'
]

export default function TrialSession() {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')
  const ArrowIcon = isRtl ? ArrowRight : ArrowLeft
  const [countriesList, setCountriesList] = useState([])
  const [curriculaList, setCurriculaList] = useState(DEFAULT_CURRICULA)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: 'AE',
    phone: '',
    curriculum: '',
    studentAge: '',
    preferredDay: '',
    preferredTime: '',
    notes: '',
  })
  const [errors, setErrors] = useState({})
  useEffect(() => {
    let isMounted = true
    fetchCountries({ sort: 'name' })
      .then((data) => {
        if (!isMounted) return
        const sorted = sortCountries(data, isRtl)
        setCountriesList(sorted)
      })
      .catch((err) => {
        console.warn('Failed to load countries list:', err)
      })
    api.get('/api/v1/curricula/public')
      .then((res) => {
        if (!isMounted) return
        const raw = res.data?.data || res.data || []
        const list = Array.isArray(raw) ? raw : []
        if (list.length > 0) {
          const formatted = list.map((c) => ({
            id: c.id || c._id,
            titleAr: typeof c.name === 'object' ? (c.name.ar || c.name.en) : (c.name || c.title || ''),
            titleEn: typeof c.name === 'object' ? (c.name.en || c.name.ar) : (c.name || c.title || ''),
          }))
          setCurriculaList(formatted)
        }
      })
      .catch((err) => {
        console.warn('Using default curricula list:', err)
      })
    return () => {
      isMounted = false
    }
  }, [isRtl])
  const handleInputChange = useCallback((field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => {
      if (prev[field]) {
        const copy = { ...prev }
        delete copy[field]
        return copy
      }
      return prev
    })
  }, [])
  const handlePhoneChange = useCallback((newPhone) => {
    handleInputChange('phone', newPhone)
  }, [handleInputChange])
  const validateForm = useCallback(() => {
    const nextErrors = {}
    if (!formData.name.trim() || formData.name.trim().length < 3) {
      nextErrors.name = t('trialSessionLanding.form.errors.nameRequired', 'الاسم الكامل مطلوب (3 أحرف على الأقل)')
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      nextErrors.email = t('trialSessionLanding.form.errors.emailInvalid', 'يرجى إدخال بريد إلكتروني صحيح')
    }
    if (!formData.country) {
      nextErrors.country = t('trialSessionLanding.form.errors.countryRequired', 'يرجى اختيار الدولة')
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 6) {
      nextErrors.phone = t('trialSessionLanding.form.errors.phoneRequired', 'رقم الهاتف / الواتساب مطلوب')
    }
    if (!formData.curriculum) {
      nextErrors.curriculum = t('trialSessionLanding.form.errors.curriculumRequired', 'يرجى اختيار المنهج الدراسي المراد تجربته')
    }
    if (!formData.studentAge) {
      nextErrors.studentAge = t('trialSessionLanding.form.errors.ageRequired', 'يرجى تحديد عمر الطالب')
    }
    if (!formData.preferredDay) {
      nextErrors.preferredDay = t('trialSessionLanding.form.errors.dayRequired', 'يرجى اختيار اليوم المفضل للحصة')
    }
    if (!formData.preferredTime) {
      nextErrors.preferredTime = t('trialSessionLanding.form.errors.timeRequired', 'يرجى اختيار الوقت المفضل للحصة')
    }
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }, [formData, t])
  const executeFormSubmit = useCallback(async (e) => {
    e.preventDefault()
    setSubmitError('')
    if (!validateForm()) return
    setIsSubmitting(true)
    const selectedCurr = curriculaList.find((c) => String(c.id) === String(formData.curriculum))
    const currLabel = isRtl ? (selectedCurr?.titleAr || formData.curriculum) : (selectedCurr?.titleEn || formData.curriculum)
    const selectedDayObj = DEFAULT_DAYS.find((d) => d.key === formData.preferredDay)
    const dayLabel = isRtl ? (selectedDayObj?.labelAr || formData.preferredDay) : (selectedDayObj?.labelEn || formData.preferredDay)
    const selectedTimeObj = DEFAULT_TIMES.find((t) => t.key === formData.preferredTime)
    const timeLabel = isRtl ? (selectedTimeObj?.labelAr || formData.preferredTime) : (selectedTimeObj?.labelEn || formData.preferredTime)
    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      country: formData.country,
      phone: formData.phone.trim(),
      curriculumId: formData.curriculum,
      curriculumName: currLabel,
      studentAge: formData.studentAge,
      preferredDay: dayLabel,
      preferredTime: timeLabel,
      notes: formData.notes.trim(),
      source: 'trial-session-landing',
    }
    try {
      try {
        await api.post('/api/v1/trial-sessions/public', payload)
      } catch {
        const structuredMessage = [
          `طلب حصة تجريبية مجانية من صفحة الحصة التجريبية:`,
          `• الاسم الكامل: ${payload.name}`,
          `• البريد الإلكتروني: ${payload.email}`,
          `• الدولة: ${payload.country}`,
          `• رقم الهاتف / الواتساب: ${payload.phone}`,
          `• المنهج الدراسي المراد تجربته: ${payload.curriculumName}`,
          `• عمر الطالب: ${payload.studentAge} سنة`,
          `• اليوم المفضل: ${payload.preferredDay}`,
          `• الوقت المفضل: ${payload.preferredTime}`,
          payload.notes ? `• ملاحظات إضافية: ${payload.notes}` : '',
        ].filter(Boolean).join('\n')
        await api.post('/api/v1/messages/public', {
          name: payload.name,
          email: payload.email,
          phone: payload.phone,
          title: `طلب حصة تجريبية مجانية - ${payload.curriculumName}`,
          message: structuredMessage,
        })
      }
      setIsSuccess(true)
      setFormData({
        name: '',
        email: '',
        country: 'AE',
        phone: '',
        curriculum: '',
        studentAge: '',
        preferredDay: '',
        preferredTime: '',
        notes: '',
      })
    } catch (err) {
      const msg = err.response?.data?.message || err.message || (isRtl ? 'حدث خطأ أثناء إرسال الطلب، يرجى المحاولة لاحقاً' : 'Failed to submit trial session request')
      setSubmitError(Array.isArray(msg) ? msg.join(', ') : msg)
    } finally {
      setIsSubmitting(false)
    }
  }, [formData, curriculaList, validateForm, isRtl])
  const perksList = useMemo(() => [
    {
      icon: GraduationCap,
      title: t('trialSessionLanding.perks.oneOnOne', 'حصة فردية مباشرة 100%'),
      desc: isRtl ? 'تركيز كامل مع طفلك لتقييم مستواه واحتياجاته بدقة' : 'Full 1-on-1 focus to assess student level accurately',
    },
    {
      icon: Award,
      title: t('trialSessionLanding.perks.certifiedTeachers', 'معلمون ومعلمات معتمدون'),
      desc: isRtl ? 'نخبة من خريجي الأزهر والجامعات الإسلامية المتخصصة' : 'Top graduates from Al-Azhar and Islamic universities',
    },
    {
      icon: ShieldCheck,
      title: t('trialSessionLanding.perks.freeNoCommitment', 'مجانية تماماً بدون أي التزام'),
      desc: isRtl ? 'فرصة حقيقية للتعرف إلى طريقة الشرح والمنصة بدون أي رسوم' : 'Genuine opportunity to experience our platform at zero cost',
    },
  ], [t, isRtl])
  return (
    <div className="space-y-12 sm:space-y-16 lg:space-y-20 pb-16 font-sans">
      <div className="pt-2">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-500 hover:text-[#00695C] dark:text-slate-400 dark:hover:text-emerald-400 transition-colors"
        >
          <ArrowIcon size={16} />
          <span>{isRtl ? 'العودة للصفحة الرئيسية' : 'Back to Home'}</span>
        </Link>
      </div>
      <section className="relative overflow-hidden rounded-3xl sm:rounded-[36px] bg-gradient-to-br from-[#004D40] via-[#00695C] to-[#0A3D36] text-white p-6 sm:p-10 lg:p-14 shadow-2xl border border-emerald-600/30">
        <div className="absolute top-0 end-0 -mt-16 -me-16 w-80 h-80 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 start-0 -mb-16 -ms-16 w-80 h-80 rounded-full bg-emerald-400/10 blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <img src={logoImg} alt={t('appName', 'أكاديمية منارة العز')} className="w-11 h-11 sm:w-14 sm:h-14 object-contain drop-shadow-md" width="56" height="56" />
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-bold text-amber-300 shadow-sm">
              <Sparkles size={16} className="text-amber-300 animate-pulse" />
              <span>{t('trialSessionLanding.badge', 'حصة تجريبية مجانية 100%')}</span>
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight sm:leading-snug">
              <span className="block text-white">
                {t('trialSessionLanding.titleEn', 'Book your free trial session')}
              </span>
              <span className="block text-amber-300 mt-2 sm:mt-3 text-xl sm:text-3xl lg:text-4xl">
                {t('trialSessionLanding.title', 'احجز حصتك التجريبية المجانية')}
              </span>
            </h1>
          </div>
          <div className="pt-4 border-t border-white/15 max-w-2xl mx-auto space-y-2 text-emerald-50/90 text-sm sm:text-base leading-relaxed">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-extrabold text-amber-300/90">
              <HeartHandshake size={15} />
              <span>{t('trialSessionLanding.aboutSectionTitle', 'من نحن')} — About Us</span>
            </div>
            <p className="text-slate-100/95 font-medium">
              {t('trialSessionLanding.aboutBriefLine1', 'منارة العز ليست مجرد أكاديمية، بل هي رحلة في أعماق المعرفة، صُممت لتكون ملاذاً رقمياً يجمع بين أصالة التراث وحداثة التكنولوجيا لنشر نور الوحي.')}
            </p>
            <p className="text-emerald-100/85 text-xs sm:text-sm">
              {t('trialSessionLanding.aboutBriefLine2', 'نرافق أطفالكم خطوة بخطوة في رحلتهم التعليمية مع معلمين متخصصين يراعون مستوى كل متعلم وأهدافه التعليمية والتربوية.')}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-4 text-start">
            {perksList.map((perk) => {
              const IconComp = perk.icon
              return (
                <div
                  key={perk.title}
                  className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-start gap-3 shadow-xs"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0">
                    <IconComp size={20} />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-black text-white">{perk.title}</h3>
                    <p className="text-[11px] sm:text-xs text-emerald-100/80 mt-0.5 leading-snug">{perk.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <section className="max-w-3xl mx-auto w-full">
        <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl sm:rounded-[32px] p-6 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="flex items-center gap-3 pb-6 border-b border-slate-100 dark:border-slate-800 text-start">
            <div className="w-12 h-12 rounded-2xl bg-[#00695C]/10 text-[#00695C] dark:bg-emerald-950/40 dark:text-emerald-400 flex items-center justify-center shrink-0">
              <Calendar size={24} />
            </div>
            <div>
              <h2 className="text-lg sm:text-2xl font-black text-slate-800 dark:text-white">
                {t('trialSessionLanding.form.title', 'طلب حجز الحصة التجريبية')}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                {t('trialSessionLanding.form.subtitle', 'املأ البيانات التالية وسيتواصل معك فريقنا لتأكيد الموعد المناسب لك')}
              </p>
            </div>
          </div>
          <AnimatePresence>
            {isSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-6 p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 flex items-start gap-3 text-start"
              >
                <CheckCircle2 size={24} className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h3 className="font-extrabold text-sm sm:text-base text-emerald-800 dark:text-emerald-200">
                    {t('trialSessionLanding.form.successTitle', 'تم إرسال طلبك بنجاح!')}
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-700 dark:text-emerald-300 leading-relaxed">
                    {t('trialSessionLanding.form.successMessage', 'شكراً لاهتمامك بأكاديمية منارة العز. سنتواصل معك عبر الواتساب أو الهاتف لتنسيق موعد حصتك التجريبية.')}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {submitError && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-6 p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 flex items-center gap-3 text-start text-xs sm:text-sm text-rose-700 dark:text-rose-300 font-bold"
              >
                <AlertCircle size={20} className="shrink-0" />
                <span>{submitError}</span>
              </motion.div>
            )}
          </AnimatePresence>
          <form onSubmit={executeFormSubmit} className="mt-8 space-y-6 text-start" noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                  {t('trialSessionLanding.form.fullName', 'الاسم الكامل')} *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                    placeholder={t('trialSessionLanding.form.fullNamePlaceholder', 'مثال: عبد الرحمن محمد')}
                    className={`w-full px-4 py-3 ps-11 rounded-2xl border text-xs sm:text-sm font-medium bg-slate-50/50 dark:bg-slate-800 text-slate-900 dark:text-white transition-all focus:ring-2 focus:ring-[#00695C] focus:outline-hidden ${
                      errors.name ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 dark:border-slate-700'
                    }`}
                  />
                  <div className="absolute inset-y-0 start-3.5 flex items-center pointer-events-none text-slate-400">
                    <User size={18} />
                  </div>
                </div>
                {errors.name && <p className="text-[11px] font-bold text-rose-500 mt-1">{errors.name}</p>}
              </div>
              <div className="space-y-1.5">
                <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                  {t('trialSessionLanding.form.email', 'البريد الإلكتروني')} *
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    dir="ltr"
                    placeholder={t('trialSessionLanding.form.emailPlaceholder', 'example@email.com')}
                    className={`w-full px-4 py-3 ps-11 rounded-2xl border text-xs sm:text-sm font-medium bg-slate-50/50 dark:bg-slate-800 text-slate-900 dark:text-white transition-all focus:ring-2 focus:ring-[#00695C] focus:outline-hidden ${
                      errors.email ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 dark:border-slate-700'
                    }`}
                  />
                  <div className="absolute inset-y-0 start-3.5 flex items-center pointer-events-none text-slate-400">
                    <Mail size={18} />
                  </div>
                </div>
                {errors.email && <p className="text-[11px] font-bold text-rose-500 mt-1">{errors.email}</p>}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                  {t('trialSessionLanding.form.country', 'الدولة')} *
                </label>
                <div className="relative">
                  <select
                    value={formData.country}
                    onChange={(e) => handleInputChange('country', e.target.value)}
                    required
                    className={`w-full px-4 py-3 ps-11 rounded-2xl border text-xs sm:text-sm font-medium bg-slate-50/50 dark:bg-slate-800 text-slate-900 dark:text-white transition-all focus:ring-2 focus:ring-[#00695C] focus:outline-hidden ${
                      errors.country ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    <option value="">{t('trialSessionLanding.form.selectCountry', '-- اختر الدولة --')}</option>
                    {countriesList.map((c) => {
                      const codeVal = c.code || c.id
                      const nameDisplay = getCountryName(c, isRtl)
                      return (
                        <option key={codeVal} value={codeVal}>
                          {c.flag ? `${c.flag} ` : ''}{nameDisplay}
                        </option>
                      )
                    })}
                  </select>
                  <div className="absolute inset-y-0 start-3.5 flex items-center pointer-events-none text-slate-400">
                    <Globe size={18} />
                  </div>
                </div>
                {errors.country && <p className="text-[11px] font-bold text-rose-500 mt-1">{errors.country}</p>}
              </div>
              <div className="space-y-1.5">
                <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                  {t('trialSessionLanding.form.phone', 'رقم الهاتف / الواتساب')} *
                </label>
                <CountryPhoneInput
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  error={errors.phone}
                  defaultCountry={formData.country || 'AE'}
                  placeholder={t('trialSessionLanding.form.phonePlaceholder', '50 123 4567')}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                  {t('trialSessionLanding.form.curriculum', 'المنهج الدراسي المراد تجربته')} *
                </label>
                <div className="relative">
                  <select
                    value={formData.curriculum}
                    onChange={(e) => handleInputChange('curriculum', e.target.value)}
                    required
                    className={`w-full px-4 py-3 ps-11 rounded-2xl border text-xs sm:text-sm font-medium bg-slate-50/50 dark:bg-slate-800 text-slate-900 dark:text-white transition-all focus:ring-2 focus:ring-[#00695C] focus:outline-hidden ${
                      errors.curriculum ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    <option value="">{t('trialSessionLanding.form.selectCurriculum', '-- اختر المنهج --')}</option>
                    {curriculaList.map((curr) => (
                      <option key={curr.id} value={curr.id}>
                        {isRtl ? curr.titleAr : curr.titleEn}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 start-3.5 flex items-center pointer-events-none text-slate-400">
                    <BookOpen size={18} />
                  </div>
                </div>
                {errors.curriculum && <p className="text-[11px] font-bold text-rose-500 mt-1">{errors.curriculum}</p>}
              </div>
              <div className="space-y-1.5">
                <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                  {t('trialSessionLanding.form.studentAge', 'عمر الطالب')} *
                </label>
                <div className="relative">
                  <select
                    value={formData.studentAge}
                    onChange={(e) => handleInputChange('studentAge', e.target.value)}
                    required
                    className={`w-full px-4 py-3 ps-11 rounded-2xl border text-xs sm:text-sm font-medium bg-slate-50/50 dark:bg-slate-800 text-slate-900 dark:text-white transition-all focus:ring-2 focus:ring-[#00695C] focus:outline-hidden ${
                      errors.studentAge ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    <option value="">{t('trialSessionLanding.form.selectAge', '-- اختر عمر الطالب --')}</option>
                    {AGE_OPTIONS.map((age) => (
                      <option key={age} value={age}>
                        {age} {t('trialSessionLanding.form.yearsOld', 'سنوات')}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 start-3.5 flex items-center pointer-events-none text-slate-400">
                    <Sparkles size={18} />
                  </div>
                </div>
                {errors.studentAge && <p className="text-[11px] font-bold text-rose-500 mt-1">{errors.studentAge}</p>}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                  {t('trialSessionLanding.form.preferredDay', 'اليوم المفضل للحصة')} *
                </label>
                <div className="relative">
                  <select
                    value={formData.preferredDay}
                    onChange={(e) => handleInputChange('preferredDay', e.target.value)}
                    required
                    className={`w-full px-4 py-3 ps-11 rounded-2xl border text-xs sm:text-sm font-medium bg-slate-50/50 dark:bg-slate-800 text-slate-900 dark:text-white transition-all focus:ring-2 focus:ring-[#00695C] focus:outline-hidden ${
                      errors.preferredDay ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    <option value="">{t('trialSessionLanding.form.selectDay', '-- اختر اليوم المفضل --')}</option>
                    {DEFAULT_DAYS.map((day) => (
                      <option key={day.key} value={day.key}>
                        {isRtl ? day.labelAr : day.labelEn}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 start-3.5 flex items-center pointer-events-none text-slate-400">
                    <Calendar size={18} />
                  </div>
                </div>
                {errors.preferredDay && <p className="text-[11px] font-bold text-rose-500 mt-1">{errors.preferredDay}</p>}
              </div>
              <div className="space-y-1.5">
                <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                  {t('trialSessionLanding.form.preferredTime', 'الوقت المفضل للحصة')} *
                </label>
                <div className="relative">
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                    required
                    className={`w-full px-4 py-3 ps-11 rounded-2xl border text-xs sm:text-sm font-medium bg-slate-50/50 dark:bg-slate-800 text-slate-900 dark:text-white transition-all focus:ring-2 focus:ring-[#00695C] focus:outline-hidden ${
                      errors.preferredTime ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    <option value="">{t('trialSessionLanding.form.selectTime', '-- اختر الفترة المناسبة --')}</option>
                    {DEFAULT_TIMES.map((time) => (
                      <option key={time.key} value={time.key}>
                        {isRtl ? time.labelAr : time.labelEn}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 start-3.5 flex items-center pointer-events-none text-slate-400">
                    <Clock size={18} />
                  </div>
                </div>
                {errors.preferredTime && <p className="text-[11px] font-bold text-rose-500 mt-1">{errors.preferredTime}</p>}
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                {t('trialSessionLanding.form.notes', 'ملاحظات إضافية (اختياري)')}
              </label>
              <textarea
                value={formData.notes}
                onChange={(e) => handleInputChange('notes', e.target.value)}
                rows={3}
                placeholder={t('trialSessionLanding.form.notesPlaceholder', 'أي معلومات ترغب في مشاركتها معنا بخصوص مستوى الطالب أو متطلبات خاصة...')}
                className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-medium bg-slate-50/50 dark:bg-slate-800 text-slate-900 dark:text-white transition-all focus:ring-2 focus:ring-[#00695C] focus:outline-hidden resize-none"
              />
            </div>
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-8 rounded-2xl bg-gradient-to-r from-[#00695C] via-[#005B4F] to-[#004D40] hover:from-[#005B4F] hover:to-[#00382E] text-white font-extrabold text-base sm:text-lg shadow-[0_8px_30px_rgba(0,105,92,0.35)] hover:shadow-[0_12px_40px_rgba(0,105,92,0.45)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-2.5"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    <span>{t('trialSessionLanding.form.submitting', 'جاري إرسال طلب الحجز...')}</span>
                  </>
                ) : (
                  <>
                    <Send size={18} className={isRtl ? 'rotate-180' : ''} />
                    <span>{t('trialSessionLanding.form.submit', 'تأكيد حجز الحصة التجريبية المجانية')}</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#0F7A6C]/10 dark:bg-[#0F7A6C]/25 text-[#0F7A6C] dark:text-emerald-400 text-xs sm:text-sm font-bold">
            {t('trialSessionLanding.testimonials.badge', 'تجارب حقيقية')}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white">
            {t('trialSessionLanding.testimonials.title', 'آراء أولياء الأمور')}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            {t('trialSessionLanding.testimonials.subtitle', 'ماذا يقول أولياء الأمور عن تجربتهم التعليمية معنا في أكاديمية منارة العز')}
          </p>
        </div>
        <TestimonialsSection />
      </section>
    </div>
  )
}
