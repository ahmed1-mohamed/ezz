import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { CheckCircle2, Home, Calendar } from 'lucide-react'
import { trackTrialSessionConversion, trackWhatsAppConversion } from '@/shared/utils/analytics'
import PlatformLogoIcon from '@/shared/components/PlatformLogoIcon.jsx'

const WHATSAPP_CONFIRM_PHONE = '971503417838'

export default function ThankYou() {
  const { t, i18n } = useTranslation()
  const currentLang = i18n.language?.startsWith('en') ? 'en' : 'ar'
  const isRtl = currentLang === 'ar'
  useEffect(() => {
    trackTrialSessionConversion()
  }, [])
  const whatsappMessage = isRtl
    ? 'السلام عليكم، أتممت حجز الحصة التجريبية المجانية وأرغب في تأكيد الموعد واختيار المعلم المناسب.'
    : 'Hi! I have submitted my free trial booking and would like to confirm the schedule and teacher selection.'
  const whatsappUrl = `https://wa.me/${WHATSAPP_CONFIRM_PHONE}?text=${encodeURIComponent(whatsappMessage)}`
  const handleWhatsAppClick = (e) => {
    e.preventDefault()
    trackWhatsAppConversion(whatsappUrl)
  }
  return (
    <div className="py-12 sm:py-16 lg:py-24 max-w-2xl mx-auto px-4 text-center space-y-8 font-sans">
      <div className="relative inline-flex items-center justify-center">
        <span className="animate-ping absolute inline-flex h-24 w-24 rounded-full bg-emerald-400 opacity-25" />
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-emerald-50 dark:bg-emerald-950/70 border-2 border-emerald-500/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center relative shadow-xl">
          <CheckCircle2 size={56} className="stroke-[2.5]" />
        </div>
      </div>
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm font-black">
          <PlatformLogoIcon size={18} />
          <span>{isRtl ? 'تم تأكيد استلام طلبك بنجاح' : 'Booking Request Confirmed'}</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white leading-tight">
          {t('trialSessionLanding.form.successTitle', isRtl ? 'شكراً لك! تم إرسال طلبك بنجاح!' : 'Thank You! Request Submitted Successfully!')}
        </h1>
        <p className="text-sm sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium max-w-xl mx-auto">
          {t(
            'trialSessionLanding.form.successMessage',
            isRtl
              ? 'شكراً لاهتمامك بأكاديمية منارة العز. سنتواصل معك عبر الواتساب أو الهاتف لتنسيق موعد حصتك التجريبية وتحديد المعلم المعتمد الأنسب لطفلك.'
              : 'Thank you for choosing Manarat Al-Ezz Academy. Our team will contact you via WhatsApp or phone to coordinate your trial session and match the best teacher for your child.'
          )}
        </p>
      </div>
      <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-amber-500/10 dark:from-amber-950/30 dark:via-emerald-950/30 dark:to-amber-950/30 border border-amber-300/60 dark:border-amber-700/50 max-w-lg mx-auto flex items-center gap-4 text-start shadow-xs">
        <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-black text-sm shrink-0 shadow-xs">
          %20
        </div>
        <div>
          <h3 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white">
            {isRtl ? 'تم تفعيل خصم 20% للشهر الأول' : '20% First Month Discount Activated'}
          </h3>
          <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed font-medium">
            {isRtl
              ? 'يُطبّق الخصم تلقائياً عند تأكيد الاشتراك بعد الحصة التجريبية على جميع برامجنا التعليمية.'
              : 'Discount is automatically applied upon subscribing after your free trial on all programs.'}
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 max-w-lg mx-auto">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
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
          <span>{isRtl ? 'تأكيد الموعد عبر واتساب' : 'Confirm via WhatsApp'}</span>
        </a>
        <Link
          to={`/${currentLang}/trial-session`}
          className="w-full sm:w-auto px-5 py-4 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2"
        >
          <Calendar size={16} />
          <span>{isRtl ? 'حجز حصة أخرى' : 'Book Another Session'}</span>
        </Link>
        <Link
          to={`/${currentLang}`}
          className="w-full sm:w-auto px-5 py-4 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2"
        >
          <Home size={16} />
          <span>{isRtl ? 'الرئيسية' : 'Home'}</span>
        </Link>
      </div>
    </div>
  )
}
