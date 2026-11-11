import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import {
  Star,
  Calendar,
  Clock,
  HelpCircle,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  History,
} from 'lucide-react';
import { parentTeacherEvaluationsApi } from '@/shared/services/api/parentTeacherEvaluationsApi.js';

function extractText(val, isRtl) {
  if (val === null || val === undefined) return '';
  if (typeof val === 'string') return val.trim();
  if (typeof val === 'number') return String(val);
  if (typeof val === 'object') {
    const localized = isRtl ? (val.ar || val.en) : (val.en || val.ar);
    if (localized && typeof localized === 'string') return localized.trim();
    if (val.name && typeof val.name === 'string') return val.name.trim();
    return '';
  }
  return '';
}

function renderStarIcons(ratingValue) {
  const stars = [];
  const count = Math.min(5, Math.max(1, Math.round(Number(ratingValue) || 5)));
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Star
        key={i}
        className={`w-3.5 h-3.5 ${
          i <= count
            ? 'text-amber-400 fill-amber-400'
            : 'text-slate-200 dark:text-slate-700'
        }`}
      />
    );
  }
  return stars;
}

function formatEvaluationDate(dateString, isRtl) {
  if (!dateString) return '-';
  try {
    const d = new Date(dateString);
    if (!isNaN(d.getTime())) {
      return new Intl.DateTimeFormat(isRtl ? 'ar-EG' : 'en-GB', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }).format(d);
    }
  } catch {
    return String(dateString);
  }
  return String(dateString);
}

function formatWeekStartDate(dateString, isRtl) {
  if (!dateString) return '-';
  try {
    const d = new Date(dateString);
    if (!isNaN(d.getTime())) {
      return new Intl.DateTimeFormat(isRtl ? 'ar-EG' : 'en-GB', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }).format(d);
    }
  } catch {
    return String(dateString);
  }
  return String(dateString);
}

export default function EvaluationsHistoryList() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const [currentPage, setCurrentPage] = useState(1);
  const queryParams = useMemo(() => ({ page: currentPage, limit: 10 }), [currentPage]);
  const {
    data: historyResponse,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['parent-teacher-evaluations-history', queryParams],
    queryFn: () => parentTeacherEvaluationsApi.fetchTeacherEvaluationsHistory(queryParams),
  });
  const evaluationsList = useMemo(() => {
    if (!historyResponse) return [];
    if (Array.isArray(historyResponse.data)) return historyResponse.data;
    if (Array.isArray(historyResponse)) return historyResponse;
    return [];
  }, [historyResponse]);
  const pagination = useMemo(() => {
    return {
      currentPage: historyResponse?.pagination?.currentPage || currentPage,
      totalPages: historyResponse?.pagination?.totalPages || 1,
      totalItems: historyResponse?.pagination?.totalItems || evaluationsList.length,
      limit: historyResponse?.pagination?.limit || 10,
    };
  }, [historyResponse, currentPage, evaluationsList.length]);
  return (
    <div className="space-y-6" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#0f7a6c]/10 text-[#0f7a6c] dark:text-emerald-400 flex items-center justify-center shrink-0">
            <History className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
              {t('parentTeacherEval.historyTitle', 'سجل تقييمات المعلمين')}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {t('parentTeacherEval.historySubtitle', 'استعراض كافة التقييمات الأسبوعية التي قدمتها لمعلمي أبنائك')}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
            {pagination.totalItems} {t('parentTeacherEval.evaluationsCountUnit', 'تقييم مُسجل')}
          </span>
          <button
            type="button"
            onClick={() => refetch()}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            title="تحديث"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>
      {isLoading ? (
        <div className="space-y-3.5">
          {[1, 2, 3].map((sk) => (
            <div
              key={sk}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 animate-pulse flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-200 dark:bg-slate-800 shrink-0" />
              <div className="space-y-2 flex-1">
                <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-1/4" />
                <div className="h-3 bg-slate-200 dark:bg-slate-800 rounded w-1/2" />
              </div>
            </div>
          ))}
        </div>
      ) : isError ? (
        <div className="bg-white dark:bg-slate-900 border border-red-200 dark:border-red-900/60 border-s-4 border-s-red-500 rounded-3xl p-12 text-center shadow-sm space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-rose-50 dark:bg-rose-950/30 text-rose-500 flex items-center justify-center mx-auto">
            <HelpCircle className="w-7 h-7" />
          </div>
          <div>
            <h4 className="text-base font-bold text-slate-800 dark:text-slate-100">
              {t('parentTeacherEval.historyErrorTitle', 'تعذر تحميل سجل التقييمات')}
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto">
              {t('parentTeacherEval.historyErrorSubtitle', 'يرجى التحقق من اتصال الإنترنت والمحاولة مرة أخرى')}
            </p>
          </div>
          <button
            type="button"
            onClick={() => refetch()}
            className="px-6 py-2.5 rounded-xl bg-[#0f7a6c] hover:bg-[#0c6156] text-white text-xs font-bold shadow-md transition-colors inline-flex items-center gap-2 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>{t('parentTeacherEval.retryBtn', 'إعادة المحاولة')}</span>
          </button>
        </div>
      ) : evaluationsList.length === 0 ? (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-12 text-center shadow-sm space-y-3">
          <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center mx-auto">
            <Star className="w-7 h-7" />
          </div>
          <h4 className="text-base font-bold text-slate-800 dark:text-slate-100">
            {t('parentTeacherEval.noHistoryFound', 'لم تقم بتقديم أي تقييمات للمعلمين حتى الآن')}
          </h4>
          <p className="text-xs text-slate-400 dark:text-slate-500 max-w-sm mx-auto">
            {t('parentTeacherEval.noHistoryHint', 'يمكنك التوجه لتبويب "معلمو الأبناء" وتقييم معلمي أبنائك أسبوعياً')}
          </p>
        </div>
      ) : (
        <div className="space-y-3.5">
          {evaluationsList.map((item) => {
            const evalId = item.id || item._id;
            const teacherObj = item.teacher || {};
            const teacherName = extractText(teacherObj.name, isRtl) || t('teacherLive.teacherDefaultName', 'المعلم');
            const teacherImage = typeof teacherObj.image === 'string' && teacherObj.image.trim() ? teacherObj.image : null;
            const ratingNumber = Number(item.rating || 5);
            const notesText = extractText(item.notes, isRtl);
            return (
              <div
                key={evalId}
                className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md transition-all space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0 font-bold text-sm text-[#0f7a6c] dark:text-emerald-400">
                      {teacherImage ? (
                        <img src={teacherImage} alt={teacherName} className="w-full h-full object-cover" />
                      ) : (
                        <span>{teacherName.charAt(0) || 'T'}</span>
                      )}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">
                        {teacherName}
                      </h4>
                      <div className="flex items-center gap-3 text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                        {item.weekStartDate && (
                          <span className="flex items-center gap-1 font-medium">
                            <Calendar className="w-3.5 h-3.5 text-[#0f7a6c]" />
                            <span>{t('parentTeacherEval.weekLabel', 'أسبوع')}: {formatWeekStartDate(item.weekStartDate, isRtl)}</span>
                          </span>
                        )}
                        <span className="flex items-center gap-1 font-medium">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{formatEvaluationDate(item.createdAt, isRtl)}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 self-start sm:self-center">
                    <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/60 text-xs font-black">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{ratingNumber} / 5</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-0.5">
                      {renderStarIcons(ratingNumber)}
                    </div>
                  </div>
                </div>
                {Boolean(notesText) && (
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed italic">
                    "{notesText}"
                  </div>
                )}
              </div>
            );
          })}
          {pagination.totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 pt-4">
              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage <= 1}
                className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 disabled:opacity-40 hover:bg-slate-50 transition-colors cursor-pointer"
              >
                {isRtl ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
              </button>
              <span className="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200">
                {currentPage} / {pagination.totalPages}
              </span>
              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.min(pagination.totalPages, p + 1))}
                disabled={currentPage >= pagination.totalPages}
                className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 disabled:opacity-40 hover:bg-slate-50 transition-colors cursor-pointer"
              >
                {isRtl ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
