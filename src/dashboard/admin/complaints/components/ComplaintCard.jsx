import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import {
  Eye,
  EyeOff,
  Calendar,
  Trash2,
  CheckCircle2,
  XCircle,
  Paperclip,
  StickyNote,
  Clock,
  Layers,
  BookOpen,
  CalendarDays,
  GraduationCap
} from 'lucide-react'
import { complaintsApi } from '@/shared/services/api/complaintsApi'
import { COMPLAINT_TYPES } from './complaintTypes'

const STATUS_STYLES = {
  pending: {
    labelKey: 'adminDashboard.complaints.statusPending',
    defaultLabel: 'قيد المراجعة',
    className: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400',
  },
  resolved: {
    labelKey: 'adminDashboard.complaints.statusResolved',
    defaultLabel: 'محلولة',
    className: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400',
  },
  rejected: {
    labelKey: 'adminDashboard.complaints.statusRejected',
    defaultLabel: 'مرفوضة',
    className: 'bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400',
  },
}

const getAttachmentUrl = (attachment) => (typeof attachment === 'string' ? attachment : attachment?.url || '')

export default function ComplaintCard({ item, isRtl, t, onDelete, onResolve, onReject }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const itemId = item.id || item._id
  const isPostpone = item.type === 'postpone' || item.type === 'postponement' || item.type === 'reschedule' || item.type === 'delay'
  const isSuggestion = item.type === 'suggestion'
  const isPending = item.status === 'pending'
  const typeMeta = COMPLAINT_TYPES[item.type] || (isPostpone ? COMPLAINT_TYPES.postpone : COMPLAINT_TYPES.complaint)
  const statusMeta = STATUS_STYLES[item.status] || STATUS_STYLES.pending
  const TypeIcon = typeMeta.icon

  const { data: details, isLoading: isDetailsLoading } = useQuery({
    queryKey: ['complaintDetails', itemId],
    queryFn: () => complaintsApi.fetchComplaintById(itemId),
    enabled: isExpanded,
    staleTime: 60 * 1000,
  })

  const full = details || item
  const attachments = (full.attachments || []).map(getAttachmentUrl).filter(Boolean)
  const notes = full.notes || full.resolutionNotes || ''

  const groupName =
    full.groupName ||
    (typeof full.group === 'object' ? (full.group?.name || full.group?.title) : full.group) ||
    ''
  const sessionName =
    full.sessionName ||
    full.sessionTitle ||
    (typeof full.session === 'object' ? (full.session?.title || full.session?.name) : full.session) ||
    (full.sessionNumber ? `حصة ${full.sessionNumber}` : '') ||
    ''
  const proposedDate = full.proposedDate || full.suggestedDate || full.rescheduleDate || full.newDate || full.date || ''
  const proposedStartTime = full.proposedStartTime || full.suggestedStartTime || full.newStartTime || full.startTime || ''
  const proposedEndTime = full.proposedEndTime || full.suggestedEndTime || full.newEndTime || full.endTime || ''
  const teacherName =
    full.teacherName ||
    (typeof full.teacher === 'object' ? (full.teacher?.name || full.teacher?.displayName) : full.teacher) ||
    (typeof full.sender === 'object' ? full.sender?.name : full.sender) ||
    ''

  const formatDate = (isoString) => {
    if (!isoString) return ''
    const date = new Date(isoString)
    if (Number.isNaN(date.getTime())) return ''
    return date.toLocaleDateString(isRtl ? 'ar-EG' : 'en-US', {
      year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit',
    })
  }

  const resolveLabel = isPostpone
    ? t('adminDashboard.complaints.approveReschedule', 'قبول وإعادة الجدولة')
    : isSuggestion
    ? t('adminDashboard.complaints.accept', 'قبول المقترح')
    : t('adminDashboard.complaints.markResolved', 'تحديد كمحلولة')

  const statusLabel = (item.status === 'resolved' && isPostpone)
    ? t('adminDashboard.complaints.rescheduled', 'تمت إعادة الجدولة')
    : t(statusMeta.labelKey, statusMeta.defaultLabel)

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-soft overflow-hidden transition-all duration-300 hover:shadow-md text-start">
      <div className="p-4 sm:p-6 lg:p-8 flex flex-col sm:flex-row gap-6">
        <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shrink-0 sm:order-last ${typeMeta.bg} ${typeMeta.color}`}>
          <TypeIcon size={28} />
        </div>

        <div className="flex-1 space-y-4 min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white break-words">{item.title}</h3>
            <span className={`px-3 py-1 text-xs font-bold rounded-lg ${typeMeta.bg} ${typeMeta.color}`}>
              {t(typeMeta.labelKey, typeMeta.defaultLabel)}
            </span>
            <span className={`px-3 py-1 text-xs font-bold rounded-lg ${statusMeta.className}`}>
              {statusLabel}
            </span>
          </div>

          {item.createdAt && (
            <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-500 dark:text-slate-400">
              <Calendar size={14} className="shrink-0" />
              <span dir="ltr">{formatDate(item.createdAt)}</span>
            </div>
          )}

          {isPostpone && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 p-3.5 bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/70 dark:border-amber-800/40 rounded-2xl text-xs">
              {teacherName && (
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                  <GraduationCap size={15} className="text-amber-600 dark:text-amber-400 shrink-0" />
                  <span className="font-semibold text-slate-500 dark:text-slate-400">{t('adminDashboard.complaints.teacher', 'المعلم')}:</span>
                  <span className="font-bold">{teacherName}</span>
                </div>
              )}
              {groupName && (
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                  <Layers size={15} className="text-amber-600 dark:text-amber-400 shrink-0" />
                  <span className="font-semibold text-slate-500 dark:text-slate-400">{t('adminDashboard.complaints.group', 'المجموعة')}:</span>
                  <span className="font-bold">{groupName}</span>
                </div>
              )}
              {sessionName && (
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                  <BookOpen size={15} className="text-amber-600 dark:text-amber-400 shrink-0" />
                  <span className="font-semibold text-slate-500 dark:text-slate-400">{t('adminDashboard.complaints.session', 'الحصة')}:</span>
                  <span className="font-bold">{sessionName}</span>
                </div>
              )}
              {proposedDate && (
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                  <CalendarDays size={15} className="text-amber-600 dark:text-amber-400 shrink-0" />
                  <span className="font-semibold text-slate-500 dark:text-slate-400">{t('adminDashboard.complaints.proposedDate', 'اليوم المقترح')}:</span>
                  <span className="font-bold font-mono" dir="ltr">{proposedDate}</span>
                </div>
              )}
              {(proposedStartTime || proposedEndTime) && (
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200 sm:col-span-2 lg:col-span-1">
                  <Clock size={15} className="text-amber-600 dark:text-amber-400 shrink-0" />
                  <span className="font-semibold text-slate-500 dark:text-slate-400">{t('adminDashboard.complaints.proposedTime', 'الوقت المقترح')}:</span>
                  <span className="font-bold font-mono" dir="ltr">
                    {proposedStartTime}{proposedEndTime ? ` - ${proposedEndTime}` : ''}
                  </span>
                </div>
              )}
            </div>
          )}

          <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed line-clamp-2">{item.details}</p>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-2">
            <button
              type="button"
              onClick={() => setIsExpanded((prev) => !prev)}
              className={`flex items-center gap-2 px-4 py-2 sm:py-2.5 rounded-xl text-sm font-bold border transition-colors cursor-pointer ${isExpanded
                ? 'border-[#005953] text-[#005953] dark:text-brand-400 dark:border-brand-400/50 bg-[#005953]/5 dark:bg-[#005953]/20'
                : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
            >
              {isExpanded ? <EyeOff size={16} /> : <Eye size={16} />}
              {isExpanded ? t('adminDashboard.complaints.hideDetails', 'إخفاء التفاصيل') : t('adminDashboard.complaints.showDetails', 'عرض التفاصيل')}
            </button>

            {isPending && (
              <>
                <button
                  type="button"
                  onClick={() => onResolve(item)}
                  className="flex items-center gap-2 px-4 py-2 sm:py-2.5 rounded-xl text-sm font-bold bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 transition-colors cursor-pointer"
                >
                  <CheckCircle2 size={16} />
                  {resolveLabel}
                </button>
                <button
                  type="button"
                  onClick={() => onReject(item)}
                  className="flex items-center gap-2 px-4 py-2 sm:py-2.5 rounded-xl text-sm font-bold bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-400 hover:bg-rose-100 dark:hover:bg-rose-900/40 transition-colors cursor-pointer"
                >
                  <XCircle size={16} />
                  {t('adminDashboard.complaints.reject', 'رفض')}
                </button>
              </>
            )}

            <div className="flex-1 min-w-[20px]" />

            <button
              type="button"
              onClick={() => onDelete(item)}
              className="flex items-center justify-center p-2 sm:p-2.5 rounded-xl text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-colors cursor-pointer"
              title={t('adminDashboard.complaints.deleteTooltip', 'حذف')}
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="px-4 sm:px-6 lg:px-8 pb-6 lg:pb-8 pt-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20 space-y-5">
          {isDetailsLoading ? (
            <div className="h-24 rounded-2xl bg-slate-100 dark:bg-slate-800 animate-pulse" />
          ) : (
            <>
              <div className="space-y-1.5">
                <span className="text-sm font-bold text-slate-500 dark:text-slate-400">
                  {t('adminDashboard.complaints.detailsLabel', 'التفاصيل')}
                </span>
                <div className="w-full bg-slate-100 dark:bg-slate-800 px-4 py-4 rounded-xl text-slate-700 dark:text-slate-200 font-semibold min-h-[80px] whitespace-pre-wrap break-words">
                  {full.details || '-'}
                </div>
              </div>

              {attachments.length > 0 && (
                <div className="space-y-1.5">
                  <span className="text-sm font-bold text-slate-500 dark:text-slate-400">
                    {t('adminDashboard.complaints.attachments', 'المرفقات')}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {attachments.map((url, index) => (
                      <a
                        key={url}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm font-semibold text-[#005953] dark:text-brand-400 hover:underline"
                      >
                        <Paperclip size={14} />
                        {t('adminDashboard.complaints.attachment', 'مرفق')} {index + 1}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {notes && (
                <div className="space-y-1.5">
                  <span className="flex items-center gap-1.5 text-sm font-bold text-slate-500 dark:text-slate-400">
                    <StickyNote size={14} />
                    {t('adminDashboard.complaints.adminNotes', 'ملاحظات الإدارة')}
                  </span>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 px-4 py-4 rounded-xl text-slate-700 dark:text-slate-200 font-semibold whitespace-pre-wrap break-words">
                    {notes}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  )
}
