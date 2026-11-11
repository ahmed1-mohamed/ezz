import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import {
  X,
  User,
  BookOpen,
  Calendar,
  Clock,
  Phone,
  Mail,
  MessageCircle,
  CheckCircle2,
  XCircle,
  UserCheck,
  Ban,
  Loader2,
} from 'lucide-react'
import { adminTrialSessionsApi } from '@/shared/services/api/adminTrialSessionsApi'

const DAY_LABELS = {
  any: { ar: 'أي يوم متاح ومناسب', en: 'Any Available Day' },
  saturday: { ar: 'السبت', en: 'Saturday' },
  sunday: { ar: 'الأحد', en: 'Sunday' },
  monday: { ar: 'الإثنين', en: 'Monday' },
  tuesday: { ar: 'الثلاثاء', en: 'Tuesday' },
  wednesday: { ar: 'الأربعاء', en: 'Wednesday' },
  thursday: { ar: 'الخميس', en: 'Thursday' },
  friday: { ar: 'الجمعة', en: 'Friday' },
}

const TIME_LABELS = {
  morning: { ar: 'الفترة الصباحية (09:00 ص - 12:00 م)', en: 'Morning (09:00 AM - 12:00 PM)' },
  afternoon: { ar: 'فترة الظهيرة (12:00 م - 04:00 م)', en: 'Afternoon (12:00 PM - 04:00 PM)' },
  evening: { ar: 'الفترة المسائية (04:00 م - 08:00 م)', en: 'Evening (04:00 PM - 08:00 PM)' },
  night: { ar: 'الفترة الليلية (08:00 م - 11:00 م)', en: 'Night (08:00 PM - 11:00 PM)' },
}

function resolveText(val, isRtl = true) {
  if (!val) return ''
  if (typeof val === 'string') return val.trim()
  if (typeof val === 'object') {
    return (isRtl ? (val.ar || val.en) : (val.en || val.ar)) || val.name || val.title || ''
  }
  return String(val)
}

function formatDate(dateStr, isRtl = true) {
  if (!dateStr) return '-'
  try {
    const d = new Date(dateStr)
    if (!isNaN(d.getTime())) {
      return new Intl.DateTimeFormat(isRtl ? 'ar-EG' : 'en-GB', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }).format(d)
    }
  } catch {
    return String(dateStr)
  }
  return String(dateStr)
}

export default function WebsiteTrialDetailsModal({
  isOpen,
  onClose,
  trialSession,
  isRtl = true,
  onOpenAccept,
  onOpenReject,
}) {
  const [sessionData, setSessionData] = useState(trialSession)
  const [isLoading, setIsLoading] = useState(false)
  const trialId = trialSession?.id || trialSession?._id
  useEffect(() => {
    if (!isOpen || !trialId) return
    let isMounted = true
    const timer = setTimeout(() => {
      setIsLoading(true)
      adminTrialSessionsApi.fetchWebsiteTrialSessionById(trialId)
        .then((res) => {
          if (!isMounted) return
          const data = res?.data || res
          if (data && typeof data === 'object') {
            setSessionData(data)
          }
        })
        .catch((err) => {
          console.warn('Failed to fetch detailed website trial session:', err)
        })
        .finally(() => {
          if (isMounted) setIsLoading(false)
        })
    }, 0)
    return () => {
      isMounted = false
      clearTimeout(timer)
    }
  }, [isOpen, trialId])
  if (!isOpen || !trialSession || typeof document === 'undefined') return null
  const current = sessionData || trialSession
  const applicantName = current.name || current.studentName || '-'
  const applicantAge = current.studentAge || current.age
  const countryObj = current.country || {}
  const countryDisplay = resolveText(countryObj.name || current.countryName || current.country, isRtl) || '-'
  const countryFlag = countryObj.flag || ''
  const applicantCurriculum = resolveText(current.curriculum?.name || current.curriculumName || current.curriculum, isRtl) || '-'
  const applicantEmail = current.email || '-'
  const applicantPhone = current.phone || '-'
  const phoneClean = applicantPhone.replace(/\s+/g, '')
  const whatsappDigits = applicantPhone.replace(/\D/g, '')
  const whatsappUrl = whatsappDigits ? `https://wa.me/${whatsappDigits}` : ''
  const dayKey = String(current.preferredDay || '').toLowerCase()
  const dayText = DAY_LABELS[dayKey] ? (isRtl ? DAY_LABELS[dayKey].ar : DAY_LABELS[dayKey].en) : (current.preferredDay || '-')
  const timeKey = String(current.preferredTime || '').toLowerCase()
  const timeText = TIME_LABELS[timeKey] ? (isRtl ? TIME_LABELS[timeKey].ar : TIME_LABELS[timeKey].en) : (current.preferredTime || '-')
  const rawStatus = String(current.status || 'pending').toLowerCase()
  const isPending = rawStatus === 'pending'
  const isAccepted = rawStatus === 'accepted'
  const isRejected = rawStatus === 'rejected'
  const linkedStudent = current.student || current.studentId || null
  const linkedStudentName = typeof linkedStudent === 'object' ? resolveText(linkedStudent?.name, isRtl) : null
  const adminNotes = current.adminNotes || current.notes && isRejected ? current.notes : current.note
  return createPortal(
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      className="fixed inset-0 w-screen h-screen min-h-screen z-[99999] flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-fade-in overflow-y-auto"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-slate-900 w-full max-w-xl rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col my-auto animate-scaleUp text-start"
      >
        <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/60 dark:bg-slate-800/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-teal-50 dark:bg-teal-950/40 text-[#005953] dark:text-emerald-400 flex items-center justify-center font-bold">
              <BookOpen size={20} />
            </div>
            <div>
              <h3 className="font-black text-base sm:text-lg text-slate-800 dark:text-white">
                {isRtl ? 'تفاصيل طلب الحصة التجريبية (الموقع)' : 'Website Trial Session Details'}
              </h3>
              <p className="text-xs text-slate-400">
                {isRtl ? 'بيانات مقدم الطلب، التواصل، والموعد المفضل' : 'Applicant, contact, and preferred schedule'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>
        <div className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          {isLoading && (
            <div className="flex items-center justify-center py-2 text-xs font-bold text-slate-400 gap-2">
              <Loader2 size={16} className="animate-spin text-[#005953]" />
              <span>{isRtl ? 'جاري تحديث التفاصيل...' : 'Updating details...'}</span>
            </div>
          )}
          <div className="p-4 rounded-2xl bg-[#005953]/5 dark:bg-emerald-950/20 border border-[#005953]/15 dark:border-emerald-900/30 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#005953] dark:text-emerald-400 flex items-center gap-1.5">
                <User size={14} />
                <span>{isRtl ? 'بيانات مقدم الطلب' : 'Applicant Details'}</span>
              </span>
              <span className="text-xs font-black text-slate-800 dark:text-white">{applicantName}</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-[#005953]/10">
              {applicantAge && (
                <div>
                  <span className="text-slate-400 block">{isRtl ? 'العمر:' : 'Age:'}</span>
                  <span className="font-bold text-slate-700 dark:text-slate-300">{applicantAge} {isRtl ? 'سنوات' : 'years'}</span>
                </div>
              )}
              <div>
                <span className="text-slate-400 block">{isRtl ? 'الدولة:' : 'Country:'}</span>
                <span className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                  {countryFlag && <span>{countryFlag}</span>}
                  <span>{countryDisplay}</span>
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 space-y-2 text-xs">
            <span className="text-xs font-bold text-slate-700 dark:text-slate-200 block mb-1">
              {isRtl ? 'بيانات التواصل' : 'Contact Information'}
            </span>
            <div className="flex items-center justify-between">
              <span className="text-slate-400 flex items-center gap-1">
                <Phone size={13} />
                <span>{isRtl ? 'رقم الهاتف:' : 'Phone:'}</span>
              </span>
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-slate-700 dark:text-slate-300" dir="ltr">{applicantPhone}</span>
                {whatsappUrl && (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 hover:bg-emerald-200 transition-colors"
                    title={isRtl ? 'محادثة واتساب' : 'WhatsApp Chat'}
                  >
                    <MessageCircle size={13} />
                  </a>
                )}
                {phoneClean && (
                  <a
                    href={`tel:${phoneClean}`}
                    className="p-1 rounded-lg bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300 hover:bg-slate-300 transition-colors"
                    title={isRtl ? 'اتصال هاتفي' : 'Phone Call'}
                  >
                    <Phone size={13} />
                  </a>
                )}
              </div>
            </div>
            {applicantEmail && applicantEmail !== '-' && (
              <div className="flex items-center justify-between pt-1">
                <span className="text-slate-400 flex items-center gap-1">
                  <Mail size={13} />
                  <span>{isRtl ? 'البريد الإلكتروني:' : 'Email:'}</span>
                </span>
                <a href={`mailto:${applicantEmail}`} className="font-mono text-slate-700 dark:text-slate-300 hover:text-[#005953] transition-colors">
                  {applicantEmail}
                </a>
              </div>
            )}
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 space-y-2 text-xs">
            <span className="text-xs font-bold text-slate-700 dark:text-slate-200 block mb-1">
              {isRtl ? 'تفاصيل المنهج والموعد المطلوب' : 'Curriculum & Schedule Details'}
            </span>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">{isRtl ? 'المنهج الدراسي:' : 'Curriculum:'}</span>
              <span className="font-bold text-[#005953] dark:text-emerald-400">{applicantCurriculum}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400 flex items-center gap-1">
                <Calendar size={13} />
                <span>{isRtl ? 'اليوم المفضل:' : 'Preferred Day:'}</span>
              </span>
              <span className="font-bold text-slate-700 dark:text-slate-300">{dayText}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400 flex items-center gap-1">
                <Clock size={13} />
                <span>{isRtl ? 'الوقت المفضل:' : 'Preferred Time:'}</span>
              </span>
              <span className="font-bold text-slate-700 dark:text-slate-300">{timeText}</span>
            </div>
            <div className="flex items-center justify-between pt-1 border-t border-slate-200/60 dark:border-slate-700/60">
              <span className="text-slate-400">{isRtl ? 'تاريخ تقديم الطلب:' : 'Submission Date:'}</span>
              <span className="font-medium text-slate-700 dark:text-slate-300">{formatDate(current.createdAt, isRtl)}</span>
            </div>
            {current.notes && (
              <div className="pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
                <span className="text-slate-400 block mb-0.5">{isRtl ? 'ملاحظات مقدم الطلب:' : 'Applicant Notes:'}</span>
                <p className="font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800">
                  {current.notes}
                </p>
              </div>
            )}
          </div>
          <div className="p-4 rounded-2xl border text-xs space-y-2 bg-slate-50 dark:bg-slate-800/40 border-slate-100 dark:border-slate-800">
            <div className="flex items-center justify-between">
              <span className="text-slate-400">{isRtl ? 'حالة الطلب الحالية:' : 'Current Status:'}</span>
              {isAccepted ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-bold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200">
                  <CheckCircle2 size={13} />
                  <span>{isRtl ? 'مقبول وتم الربط' : 'Accepted & Linked'}</span>
                </span>
              ) : isRejected ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-bold bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-400 border border-rose-200">
                  <XCircle size={13} />
                  <span>{isRtl ? 'مرفوض' : 'Rejected'}</span>
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-bold bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 border border-amber-200">
                  <Clock size={13} />
                  <span>{isRtl ? 'بانتظار الإجراء' : 'Pending Action'}</span>
                </span>
              )}
            </div>
            {linkedStudentName && (
              <div className="flex items-center justify-between pt-1">
                <span className="text-slate-400">{isRtl ? 'الطالب المرتبط:' : 'Linked Student:'}</span>
                <span className="font-bold text-[#005953] dark:text-emerald-400">{linkedStudentName}</span>
              </div>
            )}
            {adminNotes && (
              <div className="pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
                <span className="text-slate-400 block mb-0.5">{isRtl ? 'ملاحظات الإدارة:' : 'Admin Notes:'}</span>
                <p className="font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800">
                  {adminNotes}
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="p-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {isPending && onOpenAccept && (
              <button
                type="button"
                onClick={() => {
                  onClose()
                  onOpenAccept(current)
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-[#005953] hover:bg-[#004742] text-white text-xs font-bold transition-all shadow-md cursor-pointer"
              >
                <UserCheck size={14} />
                <span>{isRtl ? 'قبول وربط طالب' : 'Accept & Link'}</span>
              </button>
            )}
            {isPending && onOpenReject && (
              <button
                type="button"
                onClick={() => {
                  onClose()
                  onOpenReject(current)
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-rose-50 hover:bg-rose-100 text-rose-700 dark:bg-rose-950/40 dark:text-rose-400 dark:hover:bg-rose-900/60 text-xs font-bold transition-all cursor-pointer border border-rose-200 dark:border-rose-900"
              >
                <Ban size={14} />
                <span>{isRtl ? 'رفض الطلب' : 'Reject'}</span>
              </button>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            {isRtl ? 'إغلاق' : 'Close'}
          </button>
        </div>
      </div>
    </div>,
    document.body
  )
}
