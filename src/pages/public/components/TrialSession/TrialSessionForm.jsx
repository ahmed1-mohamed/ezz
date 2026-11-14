import { memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Calendar,
  CheckCircle2,
  AlertCircle,
  User,
  Mail,
  Globe,
  ChevronDown,
  BookOpen,
  Sparkles,
  Clock,
  Send,
  RotateCcw,
} from 'lucide-react'
import CountryPhoneInput from '@/shared/components/CountryPhoneInput.jsx'
import ContactInfoCards from '@/shared/components/ContactInfoCards.jsx'
import { getCountryName } from '@/shared/utils/countryUtils'
import { trackWhatsAppConversion } from '@/shared/utils/analytics'
import { DEFAULT_DAYS, DEFAULT_TIMES } from './trialSessionConstants'

const WHATSAPP_CONFIRM_PHONE = '971503417838'

function TrialSessionForm({
  formData,
  errors,
  isSubmitting,
  isSuccess,
  submitError,
  countriesList,
  curriculaList,
  selectedCountryCode,
  contactInfo,
  onInputChange,
  onPhoneChange,
  onSubmit,
  onResetSuccess,
  t,
  isRtl,
}) {
  const instantWhatsappMessage = isRtl
    ? `السلام عليكم، تم تقديم طلب حجز حصة تجريبية مجانية للطالب (${formData.name || 'طالب جديد'}) وأرغب في تأكيد الموعد بأسرع وقت.`
    : `Hi! I just submitted a trial session request for student (${formData.name || 'New Student'}) and would like to confirm the schedule as soon as possible.`
  const instantWhatsappUrl = `https://wa.me/${WHATSAPP_CONFIRM_PHONE}?text=${encodeURIComponent(instantWhatsappMessage)}`
  const handleInstantWhatsAppClick = (e) => {
    e.preventDefault()
    trackWhatsAppConversion(instantWhatsappUrl)
  }
  return (
    <section id="trial-session-form" className="max-w-3xl mx-auto w-full scroll-mt-24">
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
              {t(
                'trialSessionLanding.form.subtitle',
                'املأ البيانات التالية وسيتواصل معك فريقنا لتأكيد الموعد المناسب لك'
              )}
            </p>
          </div>
        </div>
        <div className="mt-6 p-4 sm:p-4.5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-amber-500/10 dark:from-amber-950/30 dark:via-emerald-950/30 dark:to-amber-950/30 border border-amber-300/60 dark:border-amber-700/50 flex items-center gap-3.5 text-start shadow-xs">
          <div className="w-11 h-11 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-black text-sm shrink-0 shadow-xs">
            %20
          </div>
          <div className="space-y-0.5 flex-1 min-w-0">
            <h3 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white">
              {t('trialSessionLanding.form.discountOfferTitle', isRtl ? 'عرض خاص: خصم 20% على الشهر الأول' : 'Special Offer: 20% Off First Month')}
            </h3>
            <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              {t(
                'trialSessionLanding.form.discountOfferDesc',
                isRtl
                  ? 'بمجرد حجز الحصة التجريبية، يحصل الطالب تلقائياً على خصم 20% على اشتراك الشهر الأول في أي برنامج تعليمي.'
                  : 'Upon booking your trial session, the student automatically receives a 20% discount on the first month subscription for any program.'
              )}
            </p>
          </div>
        </div>
        <AnimatePresence>
          {submitError && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-6 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-red-200 dark:border-red-900/60 border-s-4 border-s-red-500 shadow-xs flex items-center gap-3 text-start text-xs sm:text-sm text-red-600 dark:text-red-400 font-bold"
            >
              <AlertCircle size={20} className="shrink-0 text-red-500" />
              <span>{submitError}</span>
            </motion.div>
          )}
        </AnimatePresence>
        {isSuccess ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="mt-8 text-center py-6 sm:py-10 space-y-6"
          >
            <div className="relative inline-flex items-center justify-center">
              <span className="animate-ping absolute inline-flex h-20 w-20 rounded-full bg-emerald-400 opacity-30" />
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-emerald-50 dark:bg-emerald-950/70 border-2 border-emerald-500/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center relative shadow-lg">
                <CheckCircle2 size={52} className="stroke-[2.5]" />
              </div>
            </div>
            <div className="space-y-3 max-w-xl mx-auto">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm font-black">
                {isRtl ? 'تم تأكيد استلام طلبك بنجاح' : 'Request Confirmed Successfully'}
              </span>
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 dark:text-white leading-tight">
                {t('trialSessionLanding.form.successTitle', isRtl ? 'تم إرسال طلبك بنجاح!' : 'Request Submitted Successfully!')}
              </h2>
              <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                {t(
                  'trialSessionLanding.form.successMessage',
                  isRtl
                    ? 'شكراً لاهتمامك بأكاديمية منارة العز. سنتواصل معك عبر الواتساب أو الهاتف لتنسيق موعد حصتك التجريبية وتحديد المعلم الأنسب لطفلك.'
                    : 'Thank you for choosing Manarat Al-Ezz Academy. Our team will contact you via WhatsApp or phone to coordinate your trial session and match the best teacher for your child.'
                )}
              </p>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-300/60 dark:border-amber-700/50 max-w-lg mx-auto flex items-center gap-3.5 text-start">
              <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-black text-xs shrink-0">
                %20
              </div>
              <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-bold leading-snug">
                {isRtl
                  ? 'تم تفعيل خصم 20% على اشتراك الشهر الأول لطالبك تلقائياً عند التسجيل بعد الحصة التجريبية!'
                  : 'Your 20% discount on the first month subscription is automatically activated upon completing the trial session!'}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 max-w-lg mx-auto">
              <a
                href={instantWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleInstantWhatsAppClick}
                className="w-full sm:flex-1 px-6 py-4 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-black text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 shrink-0"
                  aria-hidden="true"
                >
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z" />
                </svg>
                <span>{isRtl ? 'تأكيد فوري عبر واتساب' : 'Instant Confirmation on WhatsApp'}</span>
              </a>
              {onResetSuccess && (
                <button
                  type="button"
                  onClick={onResetSuccess}
                  className="w-full sm:w-auto px-5 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <RotateCcw size={16} />
                  <span>{isRtl ? 'حجز حصة لطالب آخر' : 'Book for Another Student'}</span>
                </button>
              )}
            </div>
          </motion.div>
        ) : (
          <form onSubmit={onSubmit} className="mt-8 space-y-6 text-start" noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                  {t('trialSessionLanding.form.studentName', 'اسم الطالب بالكامل')} *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => onInputChange('name', e.target.value)}
                    required
                    placeholder={t('trialSessionLanding.form.fullNamePlaceholder', 'مثال: عبد الرحمن محمد')}
                    className={`w-full px-4 py-3 sm:py-3.5 ps-11 rounded-2xl border text-xs sm:text-sm font-medium bg-slate-50/50 dark:bg-slate-800 text-slate-900 dark:text-white transition-all focus:ring-2 focus:ring-[#00695C] focus:outline-hidden ${
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
                  {t('trialSessionLanding.form.studentEmail', 'البريد الإلكتروني للطالب')} *
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => onInputChange('email', e.target.value)}
                    required
                    dir="ltr"
                    placeholder={t('trialSessionLanding.form.studentEmailPlaceholder', 'student@example.com')}
                    className={`w-full px-4 py-3 sm:py-3.5 ps-11 rounded-2xl border text-xs sm:text-sm font-medium bg-slate-50/50 dark:bg-slate-800 text-slate-900 dark:text-white transition-all focus:ring-2 focus:ring-[#00695C] focus:outline-hidden ${
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
                  {t('trialSessionLanding.form.parentEmail', 'البريد الإلكتروني لولي الأمر')} *
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={formData.parentEmail || ''}
                    onChange={(e) => onInputChange('parentEmail', e.target.value)}
                    required
                    dir="ltr"
                    placeholder={t('trialSessionLanding.form.parentEmailPlaceholder', 'parent@example.com')}
                    className={`w-full px-4 py-3 sm:py-3.5 ps-11 rounded-2xl border text-xs sm:text-sm font-medium bg-slate-50/50 dark:bg-slate-800 text-slate-900 dark:text-white transition-all focus:ring-2 focus:ring-[#00695C] focus:outline-hidden ${
                      errors.parentEmail ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 dark:border-slate-700'
                    }`}
                  />
                  <div className="absolute inset-y-0 start-3.5 flex items-center pointer-events-none text-slate-400">
                    <Mail size={18} />
                  </div>
                </div>
                {errors.parentEmail && <p className="text-[11px] font-bold text-rose-500 mt-1">{errors.parentEmail}</p>}
              </div>
              <div className="space-y-1.5">
                <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                  {t('trialSessionLanding.form.phone', 'رقم هاتف ولي الأمر')} *
                </label>
                <CountryPhoneInput
                  hideLabel
                  value={formData.phone}
                  onChange={onPhoneChange}
                  error={errors.phone}
                  defaultCountry={selectedCountryCode}
                  placeholder={t('trialSessionLanding.form.phonePlaceholder', '50 123 4567')}
                />
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
                    onChange={(e) => onInputChange('country', e.target.value)}
                    required
                    className={`w-full px-4 py-3 sm:py-3.5 ps-11 pe-10 rounded-2xl border text-xs sm:text-sm font-medium bg-slate-50/50 dark:bg-slate-800 text-slate-900 dark:text-white transition-all appearance-none cursor-pointer focus:ring-2 focus:ring-[#00695C] focus:outline-hidden ${
                      errors.country ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    <option value="">{t('trialSessionLanding.form.selectCountry', '-- اختر الدولة --')}</option>
                    {countriesList.map((c) => {
                      const countryId = c.id || c._id || c.code
                      const nameDisplay = getCountryName(c, isRtl)
                      return (
                        <option key={countryId} value={countryId}>
                          {c.flag ? `${c.flag} ` : ''}{nameDisplay}
                        </option>
                      )
                    })}
                  </select>
                  <div className="absolute inset-y-0 start-3.5 flex items-center pointer-events-none text-slate-400">
                    <Globe size={18} />
                  </div>
                  <div className="absolute inset-y-0 end-3.5 flex items-center pointer-events-none text-slate-400">
                    <ChevronDown size={18} />
                  </div>
                </div>
                {errors.country && <p className="text-[11px] font-bold text-rose-500 mt-1">{errors.country}</p>}
              </div>
              <div className="space-y-1.5">
                <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                  {t('trialSessionLanding.form.studentAge', 'عمر الطالب')} *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={formData.studentAge}
                    onChange={(e) => onInputChange('studentAge', e.target.value.replace(/\D/g, ''))}
                    required
                    placeholder={t('trialSessionLanding.form.agePlaceholder', 'مثال: 8')}
                    className={`w-full px-4 py-3 sm:py-3.5 ps-11 rounded-2xl border text-xs sm:text-sm font-medium bg-slate-50/50 dark:bg-slate-800 text-slate-900 dark:text-white transition-all focus:ring-2 focus:ring-[#00695C] focus:outline-hidden ${
                      errors.studentAge ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 dark:border-slate-700'
                    }`}
                  />
                  <div className="absolute inset-y-0 start-3.5 flex items-center pointer-events-none text-slate-400">
                    <Sparkles size={18} />
                  </div>
                </div>
                {errors.studentAge && <p className="text-[11px] font-bold text-rose-500 mt-1">{errors.studentAge}</p>}
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                {t('trialSessionLanding.form.curriculum', 'المنهج الدراسي المراد تجربته')} *
              </label>
              <div className="relative">
                <select
                  value={formData.curriculum}
                  onChange={(e) => onInputChange('curriculum', e.target.value)}
                  required
                  className={`w-full px-4 py-3 sm:py-3.5 ps-11 pe-10 rounded-2xl border text-xs sm:text-sm font-medium bg-slate-50/50 dark:bg-slate-800 text-slate-900 dark:text-white transition-all appearance-none cursor-pointer focus:ring-2 focus:ring-[#00695C] focus:outline-hidden ${
                    errors.curriculum ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <option value="">{t('trialSessionLanding.form.selectCurriculum', '-- اختر المنهج --')}</option>
                  {curriculaList.map((curr) => {
                    const displayName = isRtl
                      ? (curr.titleAr || curr.name || curr.titleEn || '')
                      : (curr.titleEn || curr.name || curr.titleAr || '')
                    return (
                      <option key={curr.id} value={curr.id}>
                        {displayName}
                      </option>
                    )
                  })}
                </select>
                <div className="absolute inset-y-0 start-3.5 flex items-center pointer-events-none text-slate-400">
                  <BookOpen size={18} />
                </div>
                <div className="absolute inset-y-0 end-3.5 flex items-center pointer-events-none text-slate-400">
                  <ChevronDown size={18} />
                </div>
              </div>
              {errors.curriculum && <p className="text-[11px] font-bold text-rose-500 mt-1">{errors.curriculum}</p>}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                  {t('trialSessionLanding.form.preferredDay', 'اليوم المفضل للحصة')} *
                </label>
                <div className="relative">
                  <select
                    value={formData.preferredDay}
                    onChange={(e) => onInputChange('preferredDay', e.target.value)}
                    required
                    className={`w-full px-4 py-3 sm:py-3.5 ps-11 pe-10 rounded-2xl border text-xs sm:text-sm font-medium bg-slate-50/50 dark:bg-slate-800 text-slate-900 dark:text-white transition-all appearance-none cursor-pointer focus:ring-2 focus:ring-[#00695C] focus:outline-hidden ${
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
                  <div className="absolute inset-y-0 end-3.5 flex items-center pointer-events-none text-slate-400">
                    <ChevronDown size={18} />
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
                    onChange={(e) => onInputChange('preferredTime', e.target.value)}
                    required
                    className={`w-full px-4 py-3 sm:py-3.5 ps-11 pe-10 rounded-2xl border text-xs sm:text-sm font-medium bg-slate-50/50 dark:bg-slate-800 text-slate-900 dark:text-white transition-all appearance-none cursor-pointer focus:ring-2 focus:ring-[#00695C] focus:outline-hidden ${
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
                  <div className="absolute inset-y-0 end-3.5 flex items-center pointer-events-none text-slate-400">
                    <ChevronDown size={18} />
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
                onChange={(e) => onInputChange('notes', e.target.value)}
                rows={3}
                placeholder={t(
                  'trialSessionLanding.form.notesPlaceholder',
                  'أي معلومات ترغب في مشاركتها معنا بخصوص مستوى الطالب أو متطلبات خاصة...'
                )}
                className="w-full px-4 py-3 sm:py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-medium bg-slate-50/50 dark:bg-slate-800 text-slate-900 dark:text-white transition-all focus:ring-2 focus:ring-[#00695C] focus:outline-hidden resize-none"
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
        )}
        <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <h3 className="text-sm sm:text-base font-black text-slate-800 dark:text-white">
              {t(
                'trialSessionLanding.contactSupportTitle',
                isRtl ? 'هل لديك أي استفسار قبل الحجز؟' : 'Have questions before booking?'
              )}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              {t(
                'trialSessionLanding.contactSupportSubtitle',
                isRtl
                  ? 'فريقنا متاح دائماً لمساعدتك والإجابة على استفساراتك عبر القنوات التالية'
                  : 'Our team is always here to assist and answer your questions'
              )}
            </p>
          </div>
          <ContactInfoCards contactInfo={contactInfo} className="mt-6 pt-6" />
        </div>
      </div>
    </section>
  )
}

export default memo(TrialSessionForm)
