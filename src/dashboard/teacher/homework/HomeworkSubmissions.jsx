import { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import {
  Calendar,
  Search,
  Eye,
  Clock,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { teacherHomeworkApi } from '@/shared/services/api/teacherHomeworkApi.js';
import SubmissionDetailsView from './components/SubmissionDetailsView.jsx';


export default function HomeworkSubmissions() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;

  const [currentTimeStr, setCurrentTimeStr] = useState('');
  const [currentDateStr, setCurrentDateStr] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      try {
        const timeFormatted = new Intl.DateTimeFormat('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(now);
        setCurrentTimeStr(timeFormatted);
      } catch {
        setCurrentTimeStr(now.toTimeString().slice(0, 8));
      }

      try {
        const dateFormatted = new Intl.DateTimeFormat(
          isRtl ? 'ar-SA-u-ca-islamic-umalqura' : 'en-US-u-ca-islamic-umalqura',
          {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          }
        ).format(now);
        setCurrentDateStr(dateFormatted);
      } catch {
        setCurrentDateStr(isRtl ? 'الأربعاء، ٥ ذو القعدة ١٤٤٧ هـ' : 'Wednesday, 5 Dhu al-Qi\'dah 1447 AH');
      }
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, [isRtl]);

  const [statusFilter, setStatusFilter] = useState('all');
  const [evaluationFilter, setEvaluationFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubmission, setSelectedSubmission] = useState(null);

  const apiStatus = useMemo(() => {
    if (statusFilter === 'pending') return 'pending';
    if (statusFilter === 'submitted') return 'submitted';
    if (statusFilter === 'submitted_late') return 'submitted-late';
    if (statusFilter === 'overdue') return 'overdue';
    return 'all';
  }, [statusFilter]);

  const { data: submissionsRes, isLoading } = useQuery({
    queryKey: ['teacher-homework-submissions', apiStatus],
    queryFn: () => teacherHomeworkApi.fetchSubmissions(apiStatus),
    staleTime: 30 * 1000,
  });

  const formatSubmissionTime = (rawDate) => {
    if (!rawDate) return t('teacherHomework.notSubmitted', 'لم يتم التسليم');
    const date = new Date(rawDate);
    if (isNaN(date.getTime())) {
      return String(rawDate);
    }
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffMins < 5) return t('teacherHomework.justNow', 'الآن');
    if (diffMins < 60) return t('teacherHomework.minsAgo', { count: diffMins, defaultValue: `منذ ${diffMins} دقيقة` });
    if (diffHours < 24) return t('teacherHomework.hoursAgo', { count: diffHours, defaultValue: `منذ ${diffHours} ساعة` });
    if (diffDays === 1) return t('teacherHomework.yesterday', 'أمس');
    if (diffDays < 7) return t('teacherHomework.daysAgo', { count: diffDays, defaultValue: `منذ ${diffDays} أيام` });

    try {
      return new Intl.DateTimeFormat(isRtl ? 'ar-EG' : 'en-US', {
        day: 'numeric',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }).format(date);
    } catch {
      return date.toLocaleDateString();
    }
  };

  const normalizeSubmissionStatus = (item) => {
    const st = (
      item.submissionStatus ||
      item.status ||
      item.rawStatus ||
      ''
    ).toLowerCase();
    const isLate = Boolean(item.isLate || item.submittedLate || st.includes('late'));

    if (st === 'overdue' || st === 'late_not_submitted' || st.includes('متأخرة')) {
      return 'overdue';
    }
    if (st === 'submitted_late' || st === 'submitted-late' || (st === 'submitted' && isLate)) {
      return 'submitted_late';
    }
    if (st === 'submitted' || st === 'completed' || item.submittedAt) {
      return 'submitted';
    }
    if (st === 'pending' || st === 'waiting') {
      return 'pending';
    }
    return 'pending';
  };

  const rawSubmissions = useMemo(() => {
    const apiList = submissionsRes?.data;
    if (Array.isArray(apiList)) {
      return apiList.map((item, idx) => {
        const normStatus = normalizeSubmissionStatus(item);
        const isEval =
          item.isEvaluated ||
          item.rawEvaluationStatus === 'evaluated' ||
          (item.grade !== null && item.grade !== undefined);

        return {
          id: item.id || item._id || `submission-${idx + 1}`,
          studentName:
            typeof item.student === 'object'
              ? item.student?.name || 'طالب'
              : item.student || 'طالب',
          groupName:
            typeof item.group === 'object'
              ? item.group?.name || 'مجموعة دراسية'
              : item.group || 'مجموعة دراسية',
          homeworkTitle:
            typeof item.homework === 'object'
              ? item.homework?.title || 'واجب مدرسي'
              : item.homework || 'واجب مدرسي',
          submittedAt: item.submittedAt || item.createdAt || null,
          timeText: formatSubmissionTime(item.submittedAt || item.createdAt),
          rawStatus: normStatus,
          rawEvaluationStatus: isEval ? 'evaluated' : 'not_evaluated',
          grade: item.grade ?? null,
          documents: item.documents || (item.document ? [item.document] : []),
          audioRecordings: item.audioRecordings || [],
          questions: item.questions || [],
        };
      });
    }

    return [];
  }, [submissionsRes]);

  const stats = useMemo(() => {
    let all = rawSubmissions.length;
    let pending = 0;
    let submitted = 0;
    let submitted_late = 0;
    let overdue = 0;

    rawSubmissions.forEach((s) => {
      if (s.rawStatus === 'pending') pending += 1;
      else if (s.rawStatus === 'submitted') submitted += 1;
      else if (s.rawStatus === 'submitted_late') submitted_late += 1;
      else if (s.rawStatus === 'overdue') overdue += 1;
    });

    return { all, pending, submitted, submitted_late, overdue };
  }, [rawSubmissions]);

  const filteredSubmissions = useMemo(() => {
    return rawSubmissions.filter((item) => {
      if (statusFilter !== 'all' && item.rawStatus !== statusFilter) {
        return false;
      }

      if (evaluationFilter === 'evaluated' && item.rawEvaluationStatus !== 'evaluated') {
        return false;
      }
      if (evaluationFilter === 'not_evaluated' && item.rawEvaluationStatus === 'evaluated') {
        return false;
      }

      if (searchTerm.trim()) {
        const term = searchTerm.toLowerCase();
        const sName = (item.studentName || '').toLowerCase();
        const hTitle = (item.homeworkTitle || '').toLowerCase();
        const gName = (item.groupName || '').toLowerCase();
        return sName.includes(term) || hTitle.includes(term) || gName.includes(term);
      }

      return true;
    });
  }, [rawSubmissions, statusFilter, evaluationFilter, searchTerm]);

  if (selectedSubmission) {
    return (
      <SubmissionDetailsView
        submission={selectedSubmission}
        onBack={() => setSelectedSubmission(null)}
        currentTimeStr={currentTimeStr}
        currentDateStr={currentDateStr}
      />
    );
  }

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-16 font-sans" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 shadow-xs border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="text-start">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white leading-tight">
            {t('teacherHomework.submissionsTitle', 'تسليمات الواجبات')}
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 font-semibold mt-0.5">
            {t('teacherHomework.submissionsSubtitle', 'تابع تسليمات الواجبات وتصحيحها لطلاب المجموعات')}
          </p>
        </div>

        <div className="flex items-center gap-3 self-end md:self-center flex-wrap">
          <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-[#d2ede6] text-[#00594C] dark:bg-emerald-950/70 dark:text-emerald-300">
            {currentTimeStr}
          </span>

          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-semibold">
            <Calendar size={14} className="text-slate-400" />
            <span>{currentDateStr}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
        <div
          onClick={() => setStatusFilter('all')}
          className={`cursor-pointer bg-white dark:bg-slate-900 rounded-3xl p-5 border transition-all text-center space-y-1 shadow-xs hover:border-[#00594C] ${
            statusFilter === 'all'
              ? 'border-2 border-[#00594C] ring-2 ring-[#00594C]/10'
              : 'border-slate-100 dark:border-slate-800'
          }`}
        >
          <div className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white">
            {stats.all}
          </div>
          <div className="text-xs font-bold text-slate-400">{t('teacherHomework.allSubmissions', 'الكل')}</div>
        </div>

        <div
          onClick={() => setStatusFilter('pending')}
          className={`cursor-pointer bg-white dark:bg-slate-900 rounded-3xl p-5 border transition-all text-center space-y-1 shadow-xs hover:border-amber-500 ${
            statusFilter === 'pending'
              ? 'border-2 border-amber-500 ring-2 ring-amber-500/10'
              : 'border-slate-100 dark:border-slate-800'
          }`}
        >
          <div className="text-2xl sm:text-3xl font-black text-amber-500">
            {stats.pending}
          </div>
          <div className="text-xs font-bold text-slate-400">{t('teacherHomework.pendingReview', 'في الانتظار')}</div>
        </div>

        <div
          onClick={() => setStatusFilter('submitted')}
          className={`cursor-pointer bg-white dark:bg-slate-900 rounded-3xl p-5 border transition-all text-center space-y-1 shadow-xs hover:border-emerald-600 ${
            statusFilter === 'submitted'
              ? 'border-2 border-emerald-600 ring-2 ring-emerald-600/10'
              : 'border-slate-100 dark:border-slate-800'
          }`}
        >
          <div className="text-2xl sm:text-3xl font-black text-emerald-600">
            {stats.submitted}
          </div>
          <div className="text-xs font-bold text-slate-400">{t('teacherHomework.submittedOnTime', 'تم التسليم في الموعد')}</div>
        </div>

        <div
          onClick={() => setStatusFilter('submitted_late')}
          className={`cursor-pointer bg-white dark:bg-slate-900 rounded-3xl p-5 border transition-all text-center space-y-1 shadow-xs hover:border-orange-500 ${
            statusFilter === 'submitted_late'
              ? 'border-2 border-orange-500 ring-2 ring-orange-500/10'
              : 'border-slate-100 dark:border-slate-800'
          }`}
        >
          <div className="text-2xl sm:text-3xl font-black text-orange-500">
            {stats.submitted_late}
          </div>
          <div className="text-xs font-bold text-slate-400">{t('teacherHomework.submittedLate', 'تسليم متأخر')}</div>
        </div>

        <div
          onClick={() => setStatusFilter('overdue')}
          className={`cursor-pointer bg-white dark:bg-slate-900 rounded-3xl p-5 border transition-all text-center space-y-1 shadow-xs hover:border-rose-500 ${
            statusFilter === 'overdue'
              ? 'border-2 border-rose-500 ring-2 ring-rose-500/10'
              : 'border-slate-100 dark:border-slate-800'
          }`}
        >
          <div className="text-2xl sm:text-3xl font-black text-rose-500">
            {stats.overdue}
          </div>
          <div className="text-xs font-bold text-slate-400">{t('teacherHomework.overdue', 'متأخرة ولم يتم التسليم')}</div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto">
          {[
            { id: 'all', label: t('teacherHomework.allSubmissions', 'الكل') },
            { id: 'evaluated', label: t('teacherHomework.evaluated', 'تم التقييم') },
            { id: 'not_evaluated', label: t('teacherHomework.notEvaluated', 'لم يتم التقييم') },
          ].map((tab) => {
            const isActive = evaluationFilter === tab.id;
            return (
              <button
                type="button"
                key={tab.id}
                onClick={() => setEvaluationFilter(tab.id)}
                className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#00594C] text-white shadow-xs'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 hover:bg-slate-50'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="relative w-full sm:w-80">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={t('teacherHomework.searchStudentPlaceholder', 'ابحث عن طالب أو واجب...')}
            className="w-full ps-10 pe-4 py-2.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-[#00594C] transition"
          />
          <Search
            size={16}
            className="absolute start-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
          />
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-xs border border-slate-100 dark:border-slate-800">
        <div className="overflow-x-auto">
          <table className="w-full text-start border-collapse">
            <thead>
              <tr className="border-b border-slate-100 dark:border-slate-800/80 text-[11px] sm:text-xs font-semibold text-slate-400">
                <th className="py-4 px-6 text-start">{t('teacherHomework.student', 'الطالب')}</th>
                <th className="py-4 px-4 text-start">{t('teacherHomework.homework', 'الواجب')}</th>
                <th className="py-4 px-4 text-start">{t('teacherHomework.submissionDate', 'وقت التسليم')}</th>
                <th className="py-4 px-4 text-center">{t('teacherHomework.status', 'الحالة')}</th>
                <th className="py-4 px-4 text-center">{t('teacherHomework.grade', 'التقييم')}</th>
                <th className="py-4 px-6 text-center">{t('teacherHomework.actions', 'الإجراءات')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-xs sm:text-sm">
              {isLoading ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-slate-400 font-bold">
                    {t('common.loading', 'جاري تحميل التسليمات...')}
                  </td>
                </tr>
              ) : filteredSubmissions.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-slate-400 font-bold">
                    {t('teacherHomework.noSubmissionsFound', 'لا توجد تسليمات مطابقة للبحث أو الفلتر المحدد حالياً.')}
                  </td>
                </tr>
              ) : (
                filteredSubmissions.map((sub) => {
                  const isEval = sub.rawEvaluationStatus === 'evaluated';

                  return (
                    <tr
                      key={sub.id}
                      className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition"
                    >
                      <td className="py-4 px-6 text-start">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-[#00594C] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
                            {sub.studentName?.charAt(0) || 'ط'}
                          </div>
                          <div>
                            <div className="font-bold text-slate-800 dark:text-white">
                              {sub.studentName}
                            </div>
                            <div className="text-[11px] text-slate-400 font-semibold">
                              {sub.groupName}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="py-4 px-4 font-bold text-slate-700 dark:text-slate-200">
                        {sub.homeworkTitle}
                      </td>

                      <td className="py-4 px-4 text-slate-400 text-xs font-semibold whitespace-nowrap">
                        {sub.timeText}
                      </td>

                      <td className="py-4 px-4 text-center whitespace-nowrap">
                        {sub.rawStatus === 'submitted' && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300">
                            <CheckCircle2 size={13} />
                            <span>{t('teacherHomework.submittedOnTime', 'تم التسليم في الموعد')}</span>
                          </span>
                        )}
                        {sub.rawStatus === 'submitted_late' && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-orange-50 text-orange-700 border border-orange-200 dark:bg-orange-950/40 dark:text-orange-300">
                            <Clock size={13} />
                            <span>{t('teacherHomework.submittedLate', 'تسليم متأخر')}</span>
                          </span>
                        )}
                        {sub.rawStatus === 'overdue' && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-50 text-rose-700 border border-rose-200 dark:bg-rose-950/40 dark:text-rose-300">
                            <AlertCircle size={13} />
                            <span>{t('teacherHomework.overdue', 'متأخرة ولم يتم التسليم')}</span>
                          </span>
                        )}
                        {sub.rawStatus === 'pending' && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-950/40 dark:text-amber-300">
                            <Clock size={13} />
                            <span>{t('teacherHomework.pendingReview', 'في الانتظار')}</span>
                          </span>
                        )}
                      </td>

                      <td className="py-4 px-4 text-center whitespace-nowrap">
                        {isEval ? (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300">
                            <CheckCircle2 size={13} />
                            <span>
                              {t('teacherHomework.evaluated', 'تم التقييم')} {sub.grade !== null && sub.grade !== undefined ? `(${sub.grade}%)` : ''}
                            </span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-950/40 dark:text-amber-300">
                            <Clock size={13} />
                            <span>{t('teacherHomework.notEvaluated', 'في انتظار التقييم')}</span>
                          </span>
                        )}
                      </td>

                      <td className="py-4 px-6 text-center">
                        <button
                          type="button"
                          onClick={() => setSelectedSubmission(sub)}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#d2ede6] hover:bg-[#bce4da] text-[#00594C] dark:bg-emerald-950/60 dark:text-emerald-300 dark:hover:bg-emerald-900 transition-all cursor-pointer shadow-xs"
                          title={t('teacherHomework.viewSubmission', 'عرض تفاصيل الواجب والتسليم')}
                        >
                          <Eye size={14} />
                          <span>{t('teacherHomework.viewSubmission', 'عرض الواجب')}</span>
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
