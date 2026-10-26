import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  X,
  AlertTriangle,
  Lightbulb,
  CalendarClock,
  Send,
  Loader2,
  Paperclip,
  Plus,
} from 'lucide-react';
import { teacherComplaintsApi } from '@/shared/services/api/teacherComplaintsApi.js';
import { teacherGroupsApi } from '@/shared/services/api/teacherGroupsApi.js';
import { showSuccessToast, showErrorToast } from '@/shared/utils/sweetAlert.js';

export default function TeacherNewComplaintModal({ onClose }) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language.startsWith('ar');
  const queryClient = useQueryClient();

  const [submissionType, setSubmissionType] = useState('complaint');

  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [attachments, setAttachments] = useState([]);
  const [newAttachmentUrl, setNewAttachmentUrl] = useState('');
  const [showAddUrlInput, setShowAddUrlInput] = useState(false);

  const [teacherGroups, setTeacherGroups] = useState([]);
  const [isLoadingGroups, setIsLoadingGroups] = useState(false);
  const [selectedGroupId, setSelectedGroupId] = useState('');
  const [availableSessions, setAvailableSessions] = useState([]);
  const [isLoadingSessions, setIsLoadingSessions] = useState(false);
  const [selectedSessionId, setSelectedSessionId] = useState('');
  const [proposedNewDate, setProposedNewDate] = useState('');
  const [proposedStartTime, setProposedStartTime] = useState('');
  const [proposedEndTime, setProposedEndTime] = useState('');

  const [prevSelectedGroupId, setPrevSelectedGroupId] = useState(selectedGroupId);
  if (prevSelectedGroupId !== selectedGroupId) {
    setPrevSelectedGroupId(selectedGroupId);
    if (!selectedGroupId) {
      setAvailableSessions([]);
      setSelectedSessionId('');
    }
  }

  useEffect(() => {
    let isMounted = true;
    if (submissionType === 'reschedule_request' && teacherGroups.length === 0) {
      Promise.resolve().then(() => {
        if (!isMounted) return;
        setIsLoadingGroups(true);
        return teacherGroupsApi.fetchGroupsByStatus('all');
      })
      .then((res) => {
        if (!isMounted || !res) return;
        const groups = res?.data || [];
        setTeacherGroups(Array.isArray(groups) ? groups : []);
      })
      .catch((err) => {
        console.warn('Could not load teacher groups:', err);
      })
      .finally(() => {
        if (isMounted) setIsLoadingGroups(false);
      });
    }
    return () => {
      isMounted = false;
    };
  }, [submissionType, teacherGroups.length]);

  useEffect(() => {
    let isMounted = true;
    if (!selectedGroupId) {
      return;
    }

    Promise.resolve().then(() => {
      if (!isMounted) return;
      setIsLoadingSessions(true);
      return teacherGroupsApi.fetchGroupDetails(selectedGroupId);
    })
    .then((res) => {
      if (!isMounted || !res) return;
      const groupData = res?.data || res || {};
      const sessions = groupData.sessionsHistory || [];
      setAvailableSessions(Array.isArray(sessions) ? sessions : []);
    })
    .catch((err) => {
      console.warn('Could not load group sessions:', err);
      if (isMounted) setAvailableSessions([]);
    })
    .finally(() => {
      if (isMounted) setIsLoadingSessions(false);
    });

    return () => {
      isMounted = false;
    };
  }, [selectedGroupId]);

  const handleAddAttachment = () => {
    if (newAttachmentUrl.trim()) {
      setAttachments([...attachments, newAttachmentUrl.trim()]);
      setNewAttachmentUrl('');
      setShowAddUrlInput(false);
    }
  };

  const handleRemoveAttachment = (idx) => {
    setAttachments(attachments.filter((_, i) => i !== idx));
  };

  const mutation = useMutation({
    mutationFn: async () => {
      if (submissionType === 'reschedule_request') {
        const payload = {
          title: title.trim(),
          details: details.trim(),
          groupId: selectedGroupId,
          sessionId: selectedSessionId,
          proposedNewDate,
          proposedStartTime,
          proposedEndTime,
          attachments,
        };
        return teacherComplaintsApi.requestRescheduleSession(payload);
      } else {
        const payload = {
          type: submissionType,
          title: title.trim(),
          details: details.trim(),
          attachments,
        };
        return teacherComplaintsApi.createComplaintOrSuggestion(payload);
      }
    },
    onSuccess: () => {
      showSuccessToast(t('common.successMessage', 'تم إرسال الطلب بنجاح!'));
      queryClient.invalidateQueries({ queryKey: ['teacherComplaints'] });
      onClose();
    },
    onError: (err) => {
      const errorMsg =
        err?.response?.data?.message ||
        err?.message ||
        t('common.errorMessage', 'حدث خطأ أثناء إرسال الطلب، يرجى المحاولة لاحقاً');
      showErrorToast(errorMsg);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      showErrorToast('يرجى كتابة عنوان الطلب');
      return;
    }
    if (!details.trim()) {
      showErrorToast('يرجى كتابة تفاصيل الطلب');
      return;
    }
    if (submissionType === 'reschedule_request') {
      if (!selectedGroupId) {
        showErrorToast('يرجى اختيار المجموعة');
        return;
      }
      if (!selectedSessionId) {
        showErrorToast('يرجى اختيار الحصة المراد تأجيلها');
        return;
      }
      if (!proposedNewDate) {
        showErrorToast('يرجى تحديد التاريخ الجديد المقترح');
        return;
      }
      if (!proposedStartTime || !proposedEndTime) {
        showErrorToast('يرجى تحديد وقت البداية ووقت النهاية المقترحين');
        return;
      }
    }

    mutation.mutate();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
      <div
        className="w-full max-w-xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[92vh] animate-in fade-in zoom-in-95 duration-200"
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-800">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {t('teacher.newSubmission', 'تقديم طلب جديد')}
            </h3>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              اختر نوع الطلب واملأ البيانات المطلوبة لإرسالها للإدارة.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-5">
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-600 dark:text-slate-300">
              نوع التقديم
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setSubmissionType('complaint')}
                className={`flex flex-col items-center justify-center gap-1.5 p-3 rounded-2xl border text-xs font-bold transition-all cursor-pointer ${
                  submissionType === 'complaint'
                    ? 'border-rose-500 bg-rose-50/70 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300 ring-2 ring-rose-500/20'
                    : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                <AlertTriangle size={18} className={submissionType === 'complaint' ? 'text-rose-600' : ''} />
                <span>{t('teacher.typeComplaint', 'شكوى')}</span>
              </button>

              <button
                type="button"
                onClick={() => setSubmissionType('suggestion')}
                className={`flex flex-col items-center justify-center gap-1.5 p-3 rounded-2xl border text-xs font-bold transition-all cursor-pointer ${
                  submissionType === 'suggestion'
                    ? 'border-sky-500 bg-sky-50/70 text-sky-700 dark:bg-sky-950/40 dark:text-sky-300 ring-2 ring-sky-500/20'
                    : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                <Lightbulb size={18} className={submissionType === 'suggestion' ? 'text-sky-600' : ''} />
                <span>{t('teacher.typeSuggestion', 'مقترح')}</span>
              </button>

              <button
                type="button"
                onClick={() => setSubmissionType('reschedule_request')}
                className={`flex flex-col items-center justify-center gap-1.5 p-3 rounded-2xl border text-xs font-bold transition-all cursor-pointer ${
                  submissionType === 'reschedule_request'
                    ? 'border-amber-500 bg-amber-50/70 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300 ring-2 ring-amber-500/20'
                    : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                <CalendarClock size={18} className={submissionType === 'reschedule_request' ? 'text-amber-600' : ''} />
                <span>{t('teacher.typeReschedule', 'طلب تأجيل')}</span>
              </button>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
              {t('teacher.complaintTitle', 'عنوان الطلب')} <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={t('teacher.complaintTitlePlaceholder', 'اكتب عنواناً واضحاً وموجزاً...')}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
              {t('teacher.complaintDetails', 'التفاصيل')} <span className="text-rose-500">*</span>
            </label>
            <textarea
              required
              rows={4}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder={t('teacher.complaintDetailsPlaceholder', 'اكتب التفاصيل الكاملة هنا...')}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all resize-none"
            />
          </div>

          {submissionType === 'reschedule_request' && (
            <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 space-y-4">
              <div className="text-xs font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
                <CalendarClock size={15} />
                <span>{t('teacher.rescheduleDetails', 'بيانات الحصة والموعد المقترح')}</span>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                  {t('teacher.selectGroup', 'اختر المجموعة')} <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <select
                    required
                    value={selectedGroupId}
                    onChange={(e) => setSelectedGroupId(e.target.value)}
                    disabled={isLoadingGroups}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all"
                  >
                    <option value="">{isLoadingGroups ? 'جاري تحميل المجموعات...' : '-- اختر المجموعة --'}</option>
                    {teacherGroups.map((grp) => (
                      <option key={grp.id} value={grp.id}>
                        {grp.name} ({grp.type || 'عامة'})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                  {t('teacher.selectSession', 'اختر الحصة المراد تأجيلها')} <span className="text-rose-500">*</span>
                </label>
                <select
                  required
                  value={selectedSessionId}
                  onChange={(e) => setSelectedSessionId(e.target.value)}
                  disabled={!selectedGroupId || isLoadingSessions}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all disabled:opacity-50"
                >
                  <option value="">
                    {!selectedGroupId
                      ? 'اختر المجموعة أولاً'
                      : isLoadingSessions
                      ? 'جاري تحميل الحصص...'
                      : availableSessions.length === 0
                      ? 'لا توجد حصص مسجلة لهذه المجموعة'
                      : '-- اختر الحصة --'}
                  </option>
                  {availableSessions.map((sess) => (
                    <option key={sess.id} value={sess.id}>
                      {sess.title || `حصة ${sess.sessionNumber || ''}`} ({sess.date || '—'})
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                  {t('teacher.proposedDate', 'التاريخ الجديد المقترح')} <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="date"
                    required
                    value={proposedNewDate}
                    onChange={(e) => setProposedNewDate(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                    {t('teacher.proposedStartTime', 'وقت البداية')} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="time"
                    required
                    value={proposedStartTime}
                    onChange={(e) => setProposedStartTime(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                    {t('teacher.proposedEndTime', 'وقت النهاية')} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="time"
                    required
                    value={proposedEndTime}
                    onChange={(e) => setProposedEndTime(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all"
                  />
                </div>
              </div>
            </div>
          )}

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                {t('teacher.attachments', 'المرفقات (اختياري)')}
              </label>
              {!showAddUrlInput && (
                <button
                  type="button"
                  onClick={() => setShowAddUrlInput(true)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer"
                >
                  <Plus size={14} />
                  <span>إضافة رابط مرفق</span>
                </button>
              )}
            </div>

            {showAddUrlInput && (
              <div className="flex items-center gap-2">
                <input
                  type="url"
                  value={newAttachmentUrl}
                  onChange={(e) => setNewAttachmentUrl(e.target.value)}
                  placeholder="https://example.com/file.pdf"
                  className="flex-1 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
                />
                <button
                  type="button"
                  onClick={handleAddAttachment}
                  className="px-3 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold cursor-pointer"
                >
                  إضافة
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddUrlInput(false)}
                  className="px-2 py-2 text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>
            )}

            {attachments.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {attachments.map((att, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                  >
                    <Paperclip size={12} className="text-slate-400" />
                    <span className="truncate max-w-[200px]">{att}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveAttachment(idx)}
                      className="text-red-400 hover:text-red-600 cursor-pointer"
                    >
                      <X size={12} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              disabled={mutation.isPending}
              className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              {t('teacher.close', 'إلغاء')}
            </button>

            <button
              type="submit"
              disabled={mutation.isPending}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer disabled:opacity-50"
            >
              {mutation.isPending ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  <span>{t('teacher.submitting', 'جاري الإرسال...')}</span>
                </>
              ) : (
                <>
                  <Send size={16} className={isRtl ? 'rotate-180' : ''} />
                  <span>{t('teacher.sendSubmission', 'إرسال الطلب')}</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
