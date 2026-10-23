import { useTranslation } from 'react-i18next';
import {
  X,
  Calendar,
  Clock,
  Layers,
   AlertTriangle,
  Lightbulb,
  CalendarClock,
  Paperclip,
  CheckCircle2,
  Clock3,
  XCircle,
  MessageSquare,
} from 'lucide-react';


function formatDate(isoString, isRtl) {
  if (!isoString) return '—';
  const d = new Date(isoString);
  if (isNaN(d.getTime())) return isoString;
  return d.toLocaleDateString(isRtl ? 'ar-EG' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function formatTime(val) {
  if (!val) return '—';
  if (typeof val === 'string') {
    if (val.includes('T')) {
      const d = new Date(val);
      if (!isNaN(d.getTime())) {
        return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      }
    }
    return val.length > 5 ? val.substring(0, 5) : val;
  }
  return String(val);
}

export default function TeacherComplaintDetailsModal({ item, onClose }) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language.startsWith('ar');

  if (!item) return null;

  const isReschedule =
    item.type === 'reschedule_request' ||
    item.type === 'reschedule' ||
    item.type === 'postpone';
  const isSuggestion = item.type === 'suggestion';
  const isComplaint = item.type === 'complaint';

  const getTypeMeta = () => {
    if (isReschedule) {
      return {
        label: t('teacher.typeReschedule', 'طلب تأجيل حصة'),
        icon: CalendarClock,
        color: 'text-amber-600 dark:text-amber-400',
        bg: 'bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-900/40',
      };
    }
    if (isSuggestion) {
      return {
        label: t('teacher.typeSuggestion', 'مقترح'),
        icon: Lightbulb,
        color: 'text-sky-600 dark:text-sky-400',
        bg: 'bg-sky-50 dark:bg-sky-950/40 border-sky-200 dark:border-sky-900/40',
      };
    }
    return {
      label: t('teacher.typeComplaint', 'شكوى'),
      icon: AlertTriangle,
      color: 'text-rose-600 dark:text-rose-400',
      bg: 'bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-900/40',
    };
  };

  const getStatusMeta = () => {
    switch (item.status) {
      case 'resolved':
      case 'محلولة':
      case 'تم الحل':
        return {
          label: t('teacher.statusResolved', 'محلولة'),
          icon: CheckCircle2,
          color: 'text-emerald-700 dark:text-emerald-300',
          bg: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 border-emerald-200/60 dark:border-emerald-900/40',
        };
      case 'rejected':
      case 'مرفوضة':
        return {
          label: t('teacher.statusRejected', 'مرفوضة'),
          icon: XCircle,
          color: 'text-rose-700 dark:text-rose-300',
          bg: 'bg-rose-50 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300 border-rose-200/60 dark:border-rose-900/40',
        };
      default:
        return {
          label: t('teacher.statusPending', 'قيد المراجعة'),
          icon: Clock3,
          color: 'text-amber-700 dark:text-amber-300',
          bg: 'bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300 border-amber-200/60 dark:border-amber-900/40',
        };
    }
  };

  const typeMeta = getTypeMeta();
  const statusMeta = getStatusMeta();
  const TypeIcon = typeMeta.icon;
  const StatusIcon = statusMeta.icon;

  const groupInfo = item.group;
  const sessionInfo = item.session;
  const attachments = Array.isArray(item.attachments) ? item.attachments : [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
      <div
        className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200"
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className={`p-2.5 rounded-2xl border ${typeMeta.bg} ${typeMeta.color}`}>
              <TypeIcon size={22} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${typeMeta.bg} ${typeMeta.color}`}>
                  {typeMeta.label}
                </span>
                <span className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 py-0.5 rounded-full border ${statusMeta.bg}`}>
                  <StatusIcon size={12} />
                  {statusMeta.label}
                </span>
              </div>
              <h3 className="mt-1 text-lg font-bold text-slate-900 dark:text-white">
                {t('teacher.viewComplaintDetails', 'تفاصيل الطلب')}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Title & Created At */}
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              {item.title}
            </h2>
            {item.createdAt && (
              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                <Calendar size={13} />
                <span>{formatDate(item.createdAt, isRtl)}</span>
              </div>
            )}
          </div>

          {/* Details Content */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-800 space-y-2">
            <div className="text-xs font-bold text-slate-500 dark:text-slate-400">
              {t('teacher.complaintDetails', 'التفاصيل')}:
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-200 whitespace-pre-wrap leading-relaxed">
              {item.details || '—'}
            </p>
          </div>

          {/* Reschedule Details Card */}
          {isReschedule && (
            <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/70 dark:border-amber-900/40 space-y-3">
              <div className="text-xs font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
                <CalendarClock size={15} />
                <span>{t('teacher.rescheduleDetails', 'بيانات إعادة الجدولة')}:</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {groupInfo && (
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-amber-200/50 dark:border-amber-900/30">
                    <Layers size={15} className="text-amber-600 dark:text-amber-400 shrink-0" />
                    <div>
                      <span className="text-slate-400 block">{t('teacher.selectGroup', 'المجموعة')}:</span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">
                        {groupInfo.name || groupInfo}
                      </span>
                    </div>
                  </div>
                )}

                {sessionInfo && (
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-amber-200/50 dark:border-amber-900/30">
                    <Calendar size={15} className="text-amber-600 dark:text-amber-400 shrink-0" />
                    <div>
                      <span className="text-slate-400 block">{t('teacher.selectSession', 'الحصة الأصلية')}:</span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">
                        {sessionInfo.title || `حصة ${sessionInfo.sessionNumber || ''}`} ({sessionInfo.date || '—'})
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Proposed Timing */}
              <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-800 space-y-1 text-xs">
                <div className="font-bold text-amber-900 dark:text-amber-200">
                  الموعد الجديد المقترح:
                </div>
                <div className="flex flex-wrap items-center gap-3 font-semibold text-slate-700 dark:text-slate-300">
                  {item.proposedNewDate && (
                    <span className="flex items-center gap-1">
                      <Calendar size={13} className="text-amber-600" />
                      {item.proposedNewDate}
                    </span>
                  )}
                  {(item.proposedStartTime || item.proposedEndTime) && (
                    <span className="flex items-center gap-1 font-mono">
                      <Clock size={13} className="text-amber-600" />
                      {formatTime(item.proposedStartTime)} - {formatTime(item.proposedEndTime)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Admin Response / Notes */}
          {item.notes && (
            <div className="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/20 border border-indigo-200/70 dark:border-indigo-900/40 space-y-2">
              <div className="text-xs font-bold text-indigo-800 dark:text-indigo-300 flex items-center gap-1.5">
                <MessageSquare size={14} />
                <span>{t('teacher.adminNotes', 'ملاحظات الإدارة والرد')}:</span>
              </div>
              <p className="text-sm font-medium text-indigo-950 dark:text-indigo-200">
                {item.notes}
              </p>
            </div>
          )}

          {/* Attachments */}
          {attachments.length > 0 && (
            <div className="space-y-2">
              <div className="text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <Paperclip size={14} />
                <span>{t('teacher.attachments', 'المرفقات')} ({attachments.length}):</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {attachments.map((att, idx) => {
                  const url = typeof att === 'string' ? att : att?.url;
                  return (
                    <a
                      key={idx}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 transition-colors"
                    >
                      <Paperclip size={12} />
                      <span>مرفق {idx + 1}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 border-t border-slate-100 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-800 dark:hover:bg-slate-700 text-sm font-semibold transition-all cursor-pointer"
          >
            {t('teacher.close', 'إغلاق')}
          </button>
        </div>
      </div>
    </div>
  );
}
