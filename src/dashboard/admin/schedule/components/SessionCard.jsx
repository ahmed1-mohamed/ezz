import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Clock, User } from 'lucide-react'

function getLocalizedText(val, isRtl) {
  if (!val) return ''
  if (typeof val === 'object') {
    return isRtl ? (val.ar || val.en || '') : (val.en || val.ar || '')
  }
  return String(val)
}

function formatTimeRange(session, isRtl) {
  let range = session?.timeRange
  if (!range && session?.startTime) {
    range = session.endTime ? `${session.startTime} - ${session.endTime}` : session.startTime
  }
  if (!range) return ''
  if (isRtl) {
    return range.replace(/\bAM\b/gi, 'ص').replace(/\bPM\b/gi, 'م')
  }
  return range.replace(/ص/g, 'AM').replace(/م/g, 'PM')
}

const STATUS_FALLBACKS = {
  scheduled: { ar: 'مجدولة', en: 'Scheduled' },
  postponed: { ar: 'مؤجلة', en: 'Postponed' },
  conflict: { ar: 'تعارض', en: 'Conflict' },
  cancelled: { ar: 'ملغاة', en: 'Cancelled' },
  completed: { ar: 'مكتملة', en: 'Completed' },
  live: { ar: 'مباشرة الآن', en: 'Live Now' },
  in_progress: { ar: 'جارية', en: 'In Progress' },
  upcoming: { ar: 'قادمة', en: 'Upcoming' },
}

export default function SessionCard({ session }) {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')

  const teacherName = useMemo(() => {
    return (
      getLocalizedText(session.teacher?.name, isRtl) ||
      (isRtl ? session.teacher?.nameAr : session.teacher?.nameEn) ||
      session.teacher?.name ||
      ''
    )
  }, [session.teacher, isRtl])

  const groupName = useMemo(() => {
    return (
      getLocalizedText(session.group?.name, isRtl) ||
      (isRtl ? session.group?.nameAr : session.group?.nameEn) ||
      session.group?.name ||
      ''
    )
  }, [session.group, isRtl])

  const localizedTime = useMemo(() => formatTimeRange(session, isRtl), [session, isRtl])

  const localizedStatus = useMemo(() => {
    if (!session.status || session.status === 'scheduled') return null
    const fallback = STATUS_FALLBACKS[session.status]?.[isRtl ? 'ar' : 'en'] || session.statusText || session.status
    return t(`adminDashboard.schedule.status.${session.status}`, fallback)
  }, [session.status, session.statusText, isRtl, t])

  return (
    <div className="group relative rounded-2xl bg-gradient-to-br from-[#0f7a6c] to-[#0c6156] text-white p-3 text-xs space-y-1.5 shadow-sm shadow-[#0f7a6c]/20 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
      <p className="font-bold text-[13px] leading-snug line-clamp-2" title={groupName}>
        {groupName}
      </p>

      {teacherName && (
        <div className="flex items-center gap-1.5 min-w-0 opacity-95">
          <User size={12} className="shrink-0 opacity-80" />
          <span className="truncate font-medium text-[11px]" title={teacherName}>
            {teacherName}
          </span>
        </div>
      )}

      {localizedTime && (
        <div className="flex items-center gap-1.5 opacity-90">
          <Clock size={12} className="shrink-0" />
          <span className="truncate text-[11px]" dir="auto">{localizedTime}</span>
        </div>
      )}

      {localizedStatus && (
        <span className="inline-block px-2 py-0.5 rounded-full bg-white/20 text-[10px] font-bold">
          {localizedStatus}
        </span>
      )}
    </div>
  )
}
