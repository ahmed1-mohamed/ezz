import {
  Eye,
  UserCheck,
  Ban,
  Clock,
  CheckCircle2,
  XCircle,
  MessageCircle,
  Calendar,
} from 'lucide-react'

const DAY_LABELS = {
  any: { ar: 'أي يوم', en: 'Any day' },
  saturday: { ar: 'السبت', en: 'Sat' },
  sunday: { ar: 'الأحد', en: 'Sun' },
  monday: { ar: 'الإثنين', en: 'Mon' },
  tuesday: { ar: 'الثلاثاء', en: 'Tue' },
  wednesday: { ar: 'الأربعاء', en: 'Wed' },
  thursday: { ar: 'الخميس', en: 'Thu' },
  friday: { ar: 'الجمعة', en: 'Fri' },
}

const TIME_LABELS = {
  morning: { ar: 'صباحاً', en: 'Morning' },
  afternoon: { ar: 'ظهراً', en: 'Afternoon' },
  evening: { ar: 'مساءً', en: 'Evening' },
  night: { ar: 'ليلاً', en: 'Night' },
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
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }).format(d)
    }
  } catch {
    return String(dateStr)
  }
  return String(dateStr)
}

export default function WebsiteTrialSessionsTable({
  trialSessions = [],
  onViewDetails,
  onAccept,
  onReject,
  isRtl = true,
}) {
  const renderStatus = (status) => {
    const s = String(status || '').toLowerCase()
    if (s === 'accepted') {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/40">
          <CheckCircle2 size={13} />
          <span>{isRtl ? 'مقبول وتم الربط' : 'Accepted'}</span>
        </span>
      )
    }
    if (s === 'rejected') {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-400 border border-rose-200/60 dark:border-rose-800/40">
          <XCircle size={13} />
          <span>{isRtl ? 'مرفوض' : 'Rejected'}</span>
        </span>
      )
    }
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 border border-amber-200/60 dark:border-amber-800/40">
        <Clock size={13} />
        <span>{isRtl ? 'بانتظار الإجراء' : 'Pending'}</span>
      </span>
    )
  }
  if (trialSessions.length === 0) {
    return (
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-12 text-center space-y-3" dir={isRtl ? 'rtl' : 'ltr'}>
        <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center mx-auto">
          <Calendar size={24} />
        </div>
        <h4 className="text-base font-extrabold text-slate-700 dark:text-slate-200">
          {isRtl ? 'لا توجد طلبات حصص تجريبية من الموقع' : 'No website trial sessions found'}
        </h4>
        <p className="text-xs text-slate-400 max-w-md mx-auto">
          {isRtl
            ? 'لم يتم العثور على أي طلبات واردة من صفحة الحصة التجريبية بالويب سايت تطابق الفلاتر الحالية.'
            : 'No incoming website trial session requests matching current filters.'}
        </p>
      </div>
    )
  }
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden text-start" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-100 dark:border-slate-800 text-slate-500 dark:text-slate-400 font-extrabold">
              <th className="py-4 px-4">{isRtl ? 'مقدم الطلب' : 'Applicant'}</th>
              <th className="py-4 px-4">{isRtl ? 'بيانات التواصل' : 'Contact'}</th>
              <th className="py-4 px-4">{isRtl ? 'المنهج الدراسي' : 'Curriculum'}</th>
              <th className="py-4 px-4">{isRtl ? 'الموعد المفضل' : 'Preferred Slot'}</th>
              <th className="py-4 px-4">{isRtl ? 'تاريخ الطلب' : 'Request Date'}</th>
              <th className="py-4 px-4">{isRtl ? 'الحالة' : 'Status'}</th>
              <th className="py-4 px-4">{isRtl ? 'الطالب المرتبط' : 'Linked Student'}</th>
              <th className="py-4 px-4 text-center">{isRtl ? 'الإجراءات' : 'Actions'}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {trialSessions.map((item) => {
              const reqId = item.id || item._id
              const applicantName = item.name || item.studentName || '-'
              const age = item.studentAge || item.age
              const countryObj = item.country || {}
              const flag = countryObj.flag || ''
              const countryName = resolveText(countryObj.name || item.countryName || item.country, isRtl)
              const phone = item.phone || '-'
              const whatsappDigits = phone.replace(/\D/g, '')
              const whatsappUrl = whatsappDigits ? `https://wa.me/${whatsappDigits}` : ''
              const email = item.email || '-'
              const currName = resolveText(item.curriculum?.name || item.curriculumName || item.curriculum, isRtl) || '-'
              const dayKey = String(item.preferredDay || '').toLowerCase()
              const dayStr = DAY_LABELS[dayKey] ? (isRtl ? DAY_LABELS[dayKey].ar : DAY_LABELS[dayKey].en) : (item.preferredDay || '-')
              const timeKey = String(item.preferredTime || '').toLowerCase()
              const timeStr = TIME_LABELS[timeKey] ? (isRtl ? TIME_LABELS[timeKey].ar : TIME_LABELS[timeKey].en) : (item.preferredTime || '-')
              const statusRaw = String(item.status || 'pending').toLowerCase()
              const isPending = statusRaw === 'pending'
              const linkedStu = item.student || item.studentId || null
              const linkedStuName = typeof linkedStu === 'object' ? resolveText(linkedStu?.name, isRtl) : null
              return (
                <tr key={reqId} className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-2xl bg-[#005953]/10 text-[#005953] dark:bg-emerald-950/40 dark:text-emerald-400 flex items-center justify-center font-black text-sm shrink-0">
                        {applicantName.trim().charAt(0) || 'ط'}
                      </div>
                      <div>
                        <span className="font-extrabold text-slate-800 dark:text-white block">
                          {applicantName}
                        </span>
                        <div className="flex items-center gap-2 text-[11px] text-slate-400 mt-0.5">
                          {age && <span>{age} {isRtl ? 'سنوات' : 'yrs'}</span>}
                          {countryName && countryName !== '-' && (
                            <span className="flex items-center gap-1">
                              {flag && <span>{flag}</span>}
                              <span>{countryName}</span>
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-slate-700 dark:text-slate-300" dir="ltr">{phone}</span>
                        {whatsappUrl && (
                          <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400 hover:bg-emerald-100 transition-colors"
                            title={isRtl ? 'محادثة واتساب' : 'WhatsApp'}
                          >
                            <MessageCircle size={13} />
                          </a>
                        )}
                      </div>
                      {email && email !== '-' && (
                        <div className="text-[11px] text-slate-400 font-mono truncate max-w-[160px]">
                          {email}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-4 font-bold text-[#005953] dark:text-emerald-400 max-w-[180px] truncate">
                    {currName}
                  </td>
                  <td className="py-4 px-4">
                    <div className="space-y-0.5">
                      <span className="font-bold text-slate-700 dark:text-slate-300 block">{dayStr}</span>
                      <span className="text-[11px] text-slate-400 block">{timeStr}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-slate-500 font-medium">
                    {formatDate(item.createdAt, isRtl)}
                  </td>
                  <td className="py-4 px-4">
                    {renderStatus(statusRaw)}
                  </td>
                  <td className="py-4 px-4">
                    {linkedStuName ? (
                      <span className="font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded-xl inline-block border border-emerald-200/50">
                        {linkedStuName}
                      </span>
                    ) : (
                      <span className="text-slate-400">-</span>
                    )}
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center justify-center gap-1.5">
                      {onViewDetails && (
                        <button
                          type="button"
                          onClick={() => onViewDetails(item)}
                          className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
                          title={isRtl ? 'عرض التفاصيل' : 'View Details'}
                        >
                          <Eye size={15} />
                        </button>
                      )}
                      {isPending && onAccept && (
                        <button
                          type="button"
                          onClick={() => onAccept(item)}
                          className="p-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 dark:hover:bg-emerald-900/60 transition-colors cursor-pointer border border-emerald-200/60 dark:border-emerald-800/40"
                          title={isRtl ? 'قبول وربط طالب' : 'Accept & Link Student'}
                        >
                          <UserCheck size={15} />
                        </button>
                      )}
                      {isPending && onReject && (
                        <button
                          type="button"
                          onClick={() => onReject(item)}
                          className="p-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 dark:bg-rose-950/40 dark:text-rose-400 dark:hover:bg-rose-900/60 transition-colors cursor-pointer border border-rose-200/60 dark:border-rose-800/40"
                          title={isRtl ? 'رفض الطلب' : 'Reject Request'}
                        >
                          <Ban size={15} />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
