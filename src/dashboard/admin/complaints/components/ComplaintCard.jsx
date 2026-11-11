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
  Clock,
  Layers,
  BookOpen,
  CalendarDays,
  GraduationCap,
  Users,
  User,
  ShieldCheck,
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

const isHexId = (val) => typeof val === 'string' && /^[0-9a-fA-F]{24}$/.test(val)
const getAttachmentUrl = (attachment) => (typeof attachment === 'string' ? attachment : attachment?.url || '')

function extractSafeString(val, isRtl = true) {
  if (val === null || val === undefined) return ''
  if (typeof val === 'string') {
    const trimmed = val.trim()
    return isHexId(trimmed) ? '' : trimmed
  }
  if (typeof val === 'number') return String(val)
  if (typeof val === 'object') {
    const loc = isRtl ? (val.ar || val.en) : (val.en || val.ar)
    if (typeof loc === 'string') {
      const trimmed = loc.trim()
      return isHexId(trimmed) ? '' : trimmed
    }
    const nameCandidates = [val.name, val.fullName, val.displayName, val.title, val.username]
    for (const cand of nameCandidates) {
      if (typeof cand === 'string' && cand.trim() && !isHexId(cand.trim())) {
        return cand.trim()
      }
    }
    return ''
  }
  return ''
}

function extractSubmitterInfo(full, isRtl = true) {
  const rawRole = (
    full.userRole ||
    full.userType ||
    full.role ||
    full.senderRole ||
    full.senderType ||
    full.submitterType ||
    full.creatorType ||
    full.user?.role ||
    full.user?.type ||
    full.sender?.role ||
    full.sender?.type ||
    full.author?.role ||
    full.author?.type ||
    full.submittedBy?.role ||
    full.submittedBy?.type ||
    full.creator?.role ||
    ''
  ).toLowerCase().trim()
  let roleKey = 'other'
  if (
    rawRole === 'teacher' ||
    rawRole === 'معلم' ||
    rawRole === 'مدرس'
  ) {
    roleKey = 'teacher'
  } else if (
    rawRole === 'parent' ||
    rawRole === 'guardian' ||
    rawRole === 'ولي أمر' ||
    rawRole === 'ولي امر'
  ) {
    roleKey = 'parent'
  } else if (
    rawRole === 'student' ||
    rawRole === 'طالب'
  ) {
    roleKey = 'student'
  } else if (
    full.type === 'postpone' ||
    full.type === 'postponement' ||
    full.type === 'reschedule' ||
    full.type === 'reschedule_request' ||
    full.type === 'delay'
  ) {
    roleKey = 'teacher'
  } else if (full.parent || full.parentName || full.parentId) {
    roleKey = 'parent'
  } else if (full.teacher || full.teacherName || full.teacherId) {
    roleKey = 'teacher'
  } else if (full.student || full.studentName || full.studentId) {
    roleKey = 'student'
  }
  let name;
  if (roleKey === 'parent') {
    name =
      extractSafeString(full.parent?.name, isRtl) ||
      extractSafeString(full.parent?.displayName, isRtl) ||
      extractSafeString(full.parentName, isRtl) ||
      extractSafeString(full.user?.name, isRtl) ||
      extractSafeString(full.user?.fullName, isRtl) ||
      extractSafeString(full.sender?.name, isRtl) ||
      extractSafeString(full.author?.name, isRtl) ||
      extractSafeString(full.submittedBy?.name, isRtl) ||
      extractSafeString(full.submitter?.name, isRtl) ||
      extractSafeString(full.userName, isRtl) ||
      extractSafeString(full.name, isRtl)
  } else if (roleKey === 'teacher') {
    name =
      extractSafeString(full.teacher?.name, isRtl) ||
      extractSafeString(full.teacher?.displayName, isRtl) ||
      extractSafeString(full.teacherName, isRtl) ||
      extractSafeString(full.user?.name, isRtl) ||
      extractSafeString(full.user?.fullName, isRtl) ||
      extractSafeString(full.sender?.name, isRtl) ||
      extractSafeString(full.author?.name, isRtl) ||
      extractSafeString(full.submittedBy?.name, isRtl) ||
      extractSafeString(full.submitter?.name, isRtl) ||
      extractSafeString(full.userName, isRtl) ||
      extractSafeString(full.name, isRtl)
  } else {
    name =
      extractSafeString(full.user?.name, isRtl) ||
      extractSafeString(full.user?.fullName, isRtl) ||
      extractSafeString(full.user?.displayName, isRtl) ||
      extractSafeString(full.sender?.name, isRtl) ||
      extractSafeString(full.author?.name, isRtl) ||
      extractSafeString(full.submittedBy?.name, isRtl) ||
      extractSafeString(full.submitter?.name, isRtl) ||
      extractSafeString(full.teacher?.name, isRtl) ||
      extractSafeString(full.parent?.name, isRtl) ||
      extractSafeString(full.userName, isRtl) ||
      extractSafeString(full.name, isRtl)
  }
  const finalName = name || (
    roleKey === 'teacher'
      ? (isRtl ? 'معلم' : 'Teacher')
      : roleKey === 'parent'
      ? (isRtl ? 'ولي أمر' : 'Parent')
      : (isRtl ? 'مستخدم' : 'User')
  )
  return { submitterName: finalName, roleKey }
}

function extractReplyInfo(full, isRtl = true) {
  const isResolvedOrReplied =
    full.status === 'resolved' ||
    full.status === 'rejected' ||
    full.status === 'accepted' ||
    Boolean(full.notes) ||
    Boolean(full.resolutionNotes) ||
    Boolean(full.response) ||
    Boolean(full.adminNotes) ||
    Boolean(full.reply) ||
    Boolean(full.resolvedBy) ||
    Boolean(full.handledBy)
  if (!isResolvedOrReplied) {
    return { hasReply: false, adminName: '', repliedAt: '' }
  }
  const adminName =
    extractSafeString(full.resolvedBy?.name, isRtl) ||
    extractSafeString(full.resolvedBy?.fullName, isRtl) ||
    extractSafeString(full.resolvedBy?.displayName, isRtl) ||
    extractSafeString(full.resolvedBy, isRtl) ||
    extractSafeString(full.handledBy?.name, isRtl) ||
    extractSafeString(full.handledBy?.fullName, isRtl) ||
    extractSafeString(full.handledBy, isRtl) ||
    extractSafeString(full.admin?.name, isRtl) ||
    extractSafeString(full.admin?.fullName, isRtl) ||
    extractSafeString(full.adminName, isRtl) ||
    extractSafeString(full.resolvedByName, isRtl) ||
    extractSafeString(full.answeredBy?.name, isRtl) ||
    extractSafeString(full.repliedBy?.name, isRtl) ||
    (isRtl ? 'الإدارة' : 'Admin')
  const repliedAt =
    full.resolvedAt ||
    full.handledAt ||
    full.answeredAt ||
    full.repliedAt ||
    full.closedAt ||
    (full.status !== 'pending' ? full.updatedAt : '') ||
    ''
  return {
    hasReply: true,
    adminName,
    repliedAt,
  }
}

function getSubmitterRoleMeta(roleKey, t) {
  if (roleKey === 'teacher') {
    return {
      label: t('adminDashboard.complaints.submitterRoleTeacher', 'معلم'),
      icon: GraduationCap,
      iconColor: 'text-emerald-600 dark:text-emerald-400',
      badgeClass: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-800/40',
    }
  }
  if (roleKey === 'parent') {
    return {
      label: t('adminDashboard.complaints.submitterRoleParent', 'ولي أمر'),
      icon: Users,
      iconColor: 'text-blue-600 dark:text-blue-400',
      badgeClass: 'bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300 border border-blue-200/80 dark:border-blue-800/40',
    }
  }
  if (roleKey === 'student') {
    return {
      label: t('adminDashboard.complaints.submitterRoleStudent', 'طالب'),
      icon: GraduationCap,
      iconColor: 'text-purple-600 dark:text-purple-400',
      badgeClass: 'bg-purple-50 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300 border border-purple-200/80 dark:border-purple-800/40',
    }
  }
  return {
    label: t('adminDashboard.complaints.submitterRoleUser', 'مستخدم'),
    icon: User,
    iconColor: 'text-slate-500 dark:text-slate-400',
    badgeClass: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60',
  }
}

export default function ComplaintCard({ item, isRtl, t, onDelete, onResolve, onReject }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const itemId = item.id || item._id
  const isPostpone = item.type === 'postpone' || item.type === 'postponement' || item.type === 'reschedule' || item.type === 'reschedule_request' || item.type === 'delay'
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
  const notes = full.notes || full.resolutionNotes || full.response || full.adminNotes || full.reply || ''
  const submitterInfo = extractSubmitterInfo(full, isRtl)
  const submitterRoleMeta = getSubmitterRoleMeta(submitterInfo.roleKey, t)
  const SubmitterIcon = submitterRoleMeta.icon
  const replyInfo = extractReplyInfo(full, isRtl)
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
    if (Number.isNaN(date.getTime())) return String(isoString)
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
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
            {item.createdAt && (
              <div className="flex items-center gap-1.5">
                <Calendar size={14} className="shrink-0 text-slate-400" />
                <span dir="ltr">{formatDate(item.createdAt)}</span>
              </div>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-2 pt-0.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-50 dark:bg-slate-800/80 text-xs text-slate-700 dark:text-slate-200 border border-slate-200/70 dark:border-slate-700/60">
              <SubmitterIcon size={14} className={submitterRoleMeta.iconColor} />
              <span className="text-slate-400 dark:text-slate-500 font-medium">
                {t('adminDashboard.complaints.submittedBy', 'مقدم الطلب')}:
              </span>
              <span className="font-extrabold text-slate-900 dark:text-white">
                {submitterInfo.submitterName}
              </span>
            </div>
            <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-bold ${submitterRoleMeta.badgeClass}`}>
              {submitterRoleMeta.label}
            </span>
          </div>
          {replyInfo.hasReply && (
            <div className="flex flex-wrap items-center gap-2 p-2.5 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40 text-xs">
              <div className="flex items-center gap-1.5 font-bold text-emerald-800 dark:text-emerald-300">
                <ShieldCheck size={15} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>{t('adminDashboard.complaints.repliedBy', 'تم الرد بواسطة')}:</span>
                <span className="font-extrabold text-emerald-900 dark:text-emerald-100">
                  {replyInfo.adminName}
                </span>
              </div>
              {replyInfo.repliedAt && (
                <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700/80 dark:text-emerald-400/80 ms-auto font-mono">
                  <Clock size={12} className="shrink-0" />
                  <span dir="ltr">{formatDate(replyInfo.repliedAt)}</span>
                </div>
              )}
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
              {(notes || replyInfo.hasReply) && (
                <div className="space-y-2 p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-900/50">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-emerald-200/60 dark:border-emerald-900/40 pb-2">
                    <div className="flex items-center gap-2 text-sm font-extrabold text-emerald-900 dark:text-emerald-200">
                      <ShieldCheck size={16} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>{t('adminDashboard.complaints.adminResponseHeader', 'رد وملاحظات الإدارة')}</span>
                      {replyInfo.adminName && (
                        <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 bg-white dark:bg-slate-900 px-2 py-0.5 rounded-lg border border-emerald-200 dark:border-emerald-800">
                          {replyInfo.adminName}
                        </span>
                      )}
                    </div>
                    {replyInfo.repliedAt && (
                      <div className="flex items-center gap-1 text-xs font-semibold text-emerald-700/80 dark:text-emerald-400/80 font-mono" dir="ltr">
                        <Clock size={13} />
                        <span>{formatDate(replyInfo.repliedAt)}</span>
                      </div>
                    )}
                  </div>
                  {notes ? (
                    <div className="w-full text-slate-800 dark:text-slate-200 font-semibold text-sm whitespace-pre-wrap break-words pt-1 leading-relaxed">
                      {notes}
                    </div>
                  ) : (
                    <div className="text-xs text-emerald-700/70 dark:text-emerald-400/70 italic pt-1">
                      {t('adminDashboard.complaints.resolvedWithoutNotes', 'تم اعتماد الطلب وتحديث حالته')}
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  )
}
