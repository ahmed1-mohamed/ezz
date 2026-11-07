import { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { ArrowRight, ArrowLeft, Loader2, AlertCircle } from 'lucide-react';
import { teacherHomeworkApi } from '@/shared/services/api/teacherHomeworkApi.js';
import SubmissionDetailsView from './components/SubmissionDetailsView';

export default function TeacherSubmissionDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const BackArrow = isRtl ? ArrowRight : ArrowLeft;
  const {
    data: detailsRes,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['teacher-submission-details-dedicated-page', id],
    queryFn: () => teacherHomeworkApi.fetchSubmissionDetails(id),
    enabled: Boolean(id),
    staleTime: 60 * 1000,
    retry: 1,
  });
  const submissionData = useMemo(() => {
    const raw = detailsRes?.data || detailsRes || null;
    if (raw && typeof raw === 'object') {
      return {
        id,
        _id: id,
        ...raw,
      };
    }
    return {
      id,
      _id: id,
    };
  }, [detailsRes, id]);
  const handleBack = () => {
    navigate('/dashboard/teacher/homework/submissions');
  };
  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 space-y-4 text-center" dir={isRtl ? 'rtl' : 'ltr'}>
        <div className="w-12 h-12 rounded-2xl bg-[#00594C]/10 text-[#00594C] flex items-center justify-center">
          <Loader2 size={24} className="animate-spin" />
        </div>
        <p className="text-sm font-bold text-slate-500 dark:text-slate-400">
          {t('teacherHomework.loadingSubmissionDetails', 'جاري جلب تفاصيل الواجب والتسليم...')}
        </p>
      </div>
    );
  }
  if (isError && !detailsRes?.data) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center p-8 space-y-4 text-center" dir={isRtl ? 'rtl' : 'ltr'}>
        <div className="w-14 h-14 rounded-2xl bg-rose-50 dark:bg-rose-950/40 text-rose-600 flex items-center justify-center">
          <AlertCircle size={28} />
        </div>
        <div className="space-y-1">
          <h3 className="text-base font-black text-slate-800 dark:text-white">
            {t('teacherHomework.errorLoadingDetails', 'تعذر تحميل تفاصيل الواجب المسلم')}
          </h3>
          <p className="text-xs text-slate-400">
            {t('teacherHomework.errorLoadingDetailsDesc', 'يرجى التحقق من اتصالك بالإنترنت والمحاولة مجدداً')}
          </p>
        </div>
        <div className="flex items-center gap-3 pt-2">
          <button
            type="button"
            onClick={handleBack}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer"
          >
            <BackArrow size={14} />
            <span>{t('common.back', 'العودة للقائمة')}</span>
          </button>
          <button
            type="button"
            onClick={() => refetch()}
            className="px-4 py-2 rounded-xl bg-[#00594C] text-white text-xs font-bold hover:bg-[#00483d] transition-colors cursor-pointer"
          >
            {t('common.retry', 'إعادة المحاولة')}
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="animate-fadeIn pb-12" dir={isRtl ? 'rtl' : 'ltr'}>
      <SubmissionDetailsView
        submission={submissionData}
        onBack={handleBack}
      />
    </div>
  );
}

