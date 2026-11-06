import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@tanstack/react-query';
import { X, Calendar, Clock, Upload, Trash2, AlertCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import { teacherComplaintsApi } from '@/shared/services/api/teacherComplaintsApi';

const MAX_ATTACHMENT_SIZE = 10 * 1024 * 1024;

export default function RescheduleSessionModal({ isOpen, onClose, session }) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const [proposedNewDate, setProposedNewDate] = useState('');
  const [proposedStartTime, setProposedStartTime] = useState('');
  const [proposedEndTime, setProposedEndTime] = useState('');
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [attachments, setAttachments] = useState([]);
  const [validationError, setValidationError] = useState('');
  const resetFormState = () => {
    setProposedNewDate('');
    setProposedStartTime('');
    setProposedEndTime('');
    setTitle('');
    setDetails('');
    setAttachments([]);
    setValidationError('');
  };
  const handleCloseModal = () => {
    resetFormState();
    onClose();
  };
  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files || []);
    const validFiles = files.filter((f) => f.size <= MAX_ATTACHMENT_SIZE);
    if (validFiles.length < files.length) {
      toast.error(t('teacherLive.fileTooLarge', 'بعض الملفات تجاوزت الحد الأقصى (10 ميجابايت)'));
    }
    setAttachments((prev) => [...prev, ...validFiles]);
  };
  const handleRemoveFile = (indexToRemove) => {
    setAttachments((prev) => prev.filter((_, idx) => idx !== indexToRemove));
  };
  const mutation = useMutation({
    mutationFn: async () => {
      const groupId = session?.group?.id || session?.group?._id || session?.groupId || session?.group_id;
      const sessionId = session?.id || session?._id;
      const payload = {
        groupId,
        sessionId,
        proposedNewDate,
        proposedStartTime,
        proposedEndTime,
        title: title.trim(),
        details: details.trim(),
        attachments,
      };
      return teacherComplaintsApi.requestRescheduleSession(payload);
    },
    onSuccess: () => {
      toast.success(t('teacherLive.rescheduleSuccess', 'تم إرسال طلب تأجيل الحصة بنجاح'));
      handleCloseModal();
    },
    onError: (err) => {
      const serverMsg = err.response?.data?.message || err.message;
      toast.error(serverMsg || t('teacherLive.rescheduleError', 'تعذر إرسال طلب التأجيل'));
    },
  });
  const handleSubmitRequest = (event) => {
    event.preventDefault();
    if (!proposedNewDate || !proposedStartTime || !proposedEndTime || !title.trim()) {
      setValidationError(t('teacherLive.fillRequiredFields', 'يرجى ملء جميع الحقول المطلوبة'));
      return;
    }
    setValidationError('');
    mutation.mutate();
  };
  if (!isOpen) return null;
  const sessionTitle = typeof session?.title === 'object' && session?.title !== null
    ? (isRtl ? session.title.ar : session.title.en)
    : (session?.title || session?.subject || t('teacherLive.currentSession', 'الحصة الحالية'));
  const groupName = typeof session?.group === 'object' && session?.group !== null
    ? (isRtl ? session.group.name?.ar || session.group.name : session.group.name?.en || session.group.name)
    : (session?.groupName || session?.group || '-');
  const todayStr = new Date().toISOString().split('T')[0];
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in">
      <div
        className="bg-white dark:bg-slate-900 rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 dark:border-slate-800"
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-800">
          <div>
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">
              {t('teacherLive.requestRescheduleTitle', 'طلب تأجيل الحصة')}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {t('teacherLive.requestRescheduleSubtitle', 'سيتم إرسال الطلب للإدارة لمراجعته وإبلاغ الطلاب بالموعد الجديد')}
            </p>
          </div>
          <button
            type="button"
            onClick={handleCloseModal}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <form onSubmit={handleSubmitRequest} className="p-6 space-y-5">
          <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-4 border border-slate-200 dark:border-slate-700 space-y-2">
            <div className="text-xs font-semibold text-slate-400 dark:text-slate-500">
              {t('teacherLive.sessionAutoFilled', 'بيانات الحصة المسجلة تلقائياً')}
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <span className="text-xs text-slate-500 dark:text-slate-400 block">
                  {t('teacherLive.groupLabel', 'المجموعة')}
                </span>
                <span className="text-sm font-bold text-slate-800 dark:text-slate-100">
                  {groupName}
                </span>
              </div>
              <div>
                <span className="text-xs text-slate-500 dark:text-slate-400 block">
                  {t('teacherLive.sessionLabel', 'الحصة')}
                </span>
                <span className="text-sm font-bold text-slate-800 dark:text-slate-100">
                  {sessionTitle}
                </span>
              </div>
            </div>
          </div>
          {validationError && (
            <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-xs font-semibold">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{validationError}</span>
            </div>
          )}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#0f7a6c]" />
              <span>{t('teacherLive.proposedDate', 'التاريخ المقترح')} *</span>
            </label>
            <input
              type="date"
              min={todayStr}
              value={proposedNewDate}
              onChange={(e) => setProposedNewDate(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]"
              required
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#0f7a6c]" />
                <span>{t('teacherLive.proposedStartTime', 'وقت البدء المقترح')} *</span>
              </label>
              <input
                type="time"
                value={proposedStartTime}
                onChange={(e) => setProposedStartTime(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]"
                required
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#0f7a6c]" />
                <span>{t('teacherLive.proposedEndTime', 'وقت الانتهاء المقترح')} *</span>
              </label>
              <input
                type="time"
                value={proposedEndTime}
                onChange={(e) => setProposedEndTime(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]"
                required
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-200">
              {t('teacherLive.rescheduleReasonTitle', 'سبب أو عنوان طلب التأجيل')} *
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={t('teacherLive.rescheduleReasonPlaceholder', 'مثال: ظرف طارئ، عطل تقني...')}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]"
              required
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-200">
              {t('teacherLive.rescheduleDetails', 'تفاصيل وملاحظات إضافية')}
            </label>
            <textarea
              rows={3}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder={t('teacherLive.rescheduleDetailsPlaceholder', 'اكتب أي تفاصيل توضيحية للإدارة والطلاب...')}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
              <Upload className="w-4 h-4 text-[#0f7a6c]" />
              <span>{t('teacherLive.attachmentsOptional', 'مرفقات (اختياري)')}</span>
            </label>
            <input
              type="file"
              multiple
              onChange={handleFileUpload}
              className="w-full text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-[#0f7a6c]/10 file:text-[#0f7a6c] hover:file:bg-[#0f7a6c]/20 cursor-pointer"
            />
            {attachments.length > 0 && (
              <div className="space-y-1.5 mt-2">
                {attachments.map((file, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-800 text-xs text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                  >
                    <span className="truncate max-w-[80%]">{file.name}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveFile(idx)}
                      className="text-rose-500 hover:text-rose-700 p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
            <button
              type="button"
              onClick={handleCloseModal}
              disabled={mutation.isPending}
              className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-bold transition-colors"
            >
              {t('common.cancel', 'إلغاء')}
            </button>
            <button
              type="submit"
              disabled={mutation.isPending}
              className="px-6 py-2.5 rounded-xl bg-[#0f7a6c] hover:bg-[#0c6156] text-white text-sm font-bold shadow-md shadow-[#0f7a6c]/20 transition-all flex items-center gap-2"
            >
              {mutation.isPending && (
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              )}
              <span>{t('teacherLive.submitReschedule', 'إرسال طلب التأجيل')}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
