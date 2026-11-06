import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery, useMutation } from '@tanstack/react-query';
import { X, Award, AlertCircle, Check } from 'lucide-react';
import toast from 'react-hot-toast';
import { teacherRewardsApi } from '@/shared/services/api/teacherRewardsApi';

function resolveStudentName(student, isRtl) {
  if (!student) return '-';
  if (typeof student === 'string') return student;
  if (typeof student.name === 'object' && student.name !== null) {
    return isRtl ? (student.name.ar || student.name.en) : (student.name.en || student.name.ar);
  }
  return student.name || student.studentName || '-';
}

export default function InSessionRewardModal({ isOpen, onClose, session }) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const [selectedStudentId, setSelectedStudentId] = useState('');
  const [selectedRewardId, setSelectedRewardId] = useState('');
  const [validationError, setValidationError] = useState('');
  const { data: rewardsData, isLoading: isLoadingRewards } = useQuery({
    queryKey: ['teacher-live-rewards-list'],
    queryFn: () => teacherRewardsApi.fetchRewards(),
    enabled: isOpen,
  });
  const rewardsList = useMemo(() => {
    if (!rewardsData?.data) return [];
    return Array.isArray(rewardsData.data) ? rewardsData.data : [];
  }, [rewardsData]);
  const studentsList = useMemo(() => {
    if (!session) return [];
    const raw = Array.isArray(session.attendance)
      ? session.attendance
      : Array.isArray(session.students)
      ? session.students
      : Array.isArray(session.group?.students)
      ? session.group.students
      : [];
    return raw.map((item, index) => {
      const studentObj = item.student || item.user || item;
      const id = studentObj._id || studentObj.student_id || studentObj.id || `student-${index}`;
      const name = resolveStudentName(studentObj, isRtl);
      return { id, name, avatar: studentObj.avatar || null };
    });
  }, [session, isRtl]);
  const handleClose = () => {
    setSelectedStudentId('');
    setSelectedRewardId('');
    setValidationError('');
    onClose();
  };
  const mutation = useMutation({
    mutationFn: async () => {
      return teacherRewardsApi.awardRewardToStudent(selectedStudentId, selectedRewardId);
    },
    onSuccess: (res) => {
      if (res.success) {
        toast.success(res.message || t('teacherLive.rewardSuccess', 'تم منح المكافأة للطالب بنجاح'));
        handleClose();
      } else {
        toast.error(res.message || t('teacherLive.rewardError', 'تعذر منح المكافأة'));
      }
    },
    onError: (err) => {
      const serverMsg = err.response?.data?.message || err.message;
      toast.error(serverMsg || t('teacherLive.rewardError', 'تعذر منح المكافأة'));
    },
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!selectedStudentId || !selectedRewardId) {
      setValidationError(t('teacherLive.selectStudentAndReward', 'يرجى اختيار الطالب والمكافأة'));
      return;
    }
    setValidationError('');
    mutation.mutate();
  };
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
      <div
        className="bg-white dark:bg-slate-900 rounded-3xl max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-slate-100 dark:border-slate-800"
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        <div className="flex items-center justify-between p-5 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-800 dark:text-slate-100">
                {t('teacherLive.inSessionRewardTitle', 'منح مكافأة لطالب في الحصة')}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {t('teacherLive.inSessionRewardSubtitle', 'تشجيع فوري للطالب دون الخروج من البث')}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          {validationError && (
            <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-xs font-semibold">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{validationError}</span>
            </div>
          )}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-200 block">
              {t('teacherLive.chooseStudentLabel', 'اختر الطالب')} *
            </label>
            <select
              value={selectedStudentId}
              onChange={(e) => setSelectedStudentId(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]"
              required
            >
              <option value="">{t('teacherLive.selectStudentPlaceholder', '-- اختر طالباً --')}</option>
              {studentsList.map((stu) => (
                <option key={stu.id} value={stu.id}>
                  {stu.name}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-200 block">
              {t('teacherLive.chooseRewardLabel', 'اختر المكافأة')} *
            </label>
            {isLoadingRewards ? (
              <div className="py-4 text-center text-xs text-slate-400">
                {t('common.loading', 'جاري التحميل...')}
              </div>
            ) : rewardsList.length === 0 ? (
              <p className="text-xs text-slate-500 dark:text-slate-400 py-2">
                {t('teacherLive.noRewardsAvailable', 'لا توجد مكافآت متاحة حالياً')}
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-48 overflow-y-auto p-1">
                {rewardsList.map((reward) => {
                  const rewardId = reward._id || reward.id;
                  const isSelected = selectedRewardId === rewardId;
                  const rewardTitle = typeof reward.title === 'object' && reward.title !== null
                    ? (isRtl ? reward.title.ar : reward.title.en)
                    : (reward.title || reward.name || t('teacherLive.reward', 'مكافأة'));
                  const points = reward.points || reward.cost || null;
                  return (
                    <button
                      type="button"
                      key={rewardId}
                      onClick={() => setSelectedRewardId(rewardId)}
                      className={`flex items-center justify-between p-3 rounded-xl border text-start transition-all ${
                        isSelected
                          ? 'border-[#0f7a6c] bg-[#0f7a6c]/10 dark:bg-[#0f7a6c]/20 ring-1 ring-[#0f7a6c]'
                          : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <div className="min-w-0">
                        <span className="text-xs font-bold text-slate-800 dark:text-slate-100 block truncate">
                          {rewardTitle}
                        </span>
                        {points && (
                          <span className="text-[10px] text-amber-600 dark:text-amber-400 font-semibold">
                            {points} {t('teacherLive.points', 'نقطة')}
                          </span>
                        )}
                      </div>
                      {isSelected && (
                        <div className="w-5 h-5 rounded-full bg-[#0f7a6c] text-white flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
          <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
            <button
              type="button"
              onClick={handleClose}
              disabled={mutation.isPending}
              className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-bold transition-colors"
            >
              {t('common.cancel', 'إلغاء')}
            </button>
            <button
              type="submit"
              disabled={mutation.isPending || !selectedStudentId || !selectedRewardId}
              className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold shadow-md transition-all flex items-center gap-1.5 disabled:opacity-50"
            >
              {mutation.isPending && (
                <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              )}
              <span>{t('teacherLive.awardButton', 'منح المكافأة')}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
