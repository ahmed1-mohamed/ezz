import { useState, useEffect, useMemo, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import useDebounce from '@/shared/hooks/useDebounce';
import {
  Calendar,
  Search,
  Eye,
  Clock,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
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
          isRtl ? 'ar-EG-u-ca-gregory' : 'en-GB-u-ca-gregory',
          {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          }
        ).format(now);
        setCurrentDateStr(dateFormatted);
      } catch {
        setCurrentDateStr(now.toLocaleDateString(isRtl ? 'ar-EG' : 'en-GB'));
      }
    };
    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, [isRtl]);
  const { id: paramId } = useParams();
  const navigate = useNavigate();
  const [statusFilter, setStatusFilter] = useState('all');
  const [evaluationFilter, setEvaluationFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 350);
  const [selectedSubmission, setSelectedSubmission] = useState(null);

  const {
    data: submissionsRes,
    isLoading,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ['teacher-homework-submissions'],
    queryFn: () => teacherHomeworkApi.fetchSubmissions({ limit: 100 }),
    staleTime: 30 * 1000,
  });

  const formatSubmissionTime = useCallback((rawDate) => {
    if (!rawDate) return t('teacherHomework.notSubmitted', 'لم يتم التسليم');
    const date = new Date(rawDate);
    if (isNaN(date.getTime())) {
      return String(rawDate);
    }
    try {
      const datePart = new Intl.DateTimeFormat(isRtl ? 'ar-EG' : 'en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }).format(date);
      const timePart = new Intl.DateTimeFormat(isRtl ? 'ar-EG' : 'en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }).format(date);
      return `${datePart} - ${timePart}`;
    } catch {
      return date.toLocaleDateString();
    }
  }, [isRtl, t]);

  const normalizeSubmissionStatus = useCallback((item) => {
    if (!item) return 'pending';
    const rawStatus = (
      item.submissionStatus ||
      item.status ||
      item.rawStatus ||
      item.state ||
      item.homeworkStatus ||
      item.deliveryStatus ||
      item.submission?.submissionStatus ||
      item.submission?.status ||
      ''
    ).toString().toLowerCase().trim();
    const rawStatusLabel = (
      item.statusLabel ||
      item.label ||
      item.submission?.statusLabel ||
      ''
    ).toString().toLowerCase().trim();
    const isExplicitlyOverdue = Boolean(
      item.isOverdue === true ||
      item.submission?.isOverdue === true ||
      rawStatus === 'overdue' ||
      rawStatus === 'late_not_submitted' ||
      rawStatus === 'late-not-submitted' ||
      rawStatus === 'missed' ||
      rawStatus.includes('overdue') ||
      rawStatus.includes('متأخر عن الموعد') ||
      rawStatusLabel.includes('متأخر عن الموعد') ||
      rawStatusLabel.includes('فائت') ||
      rawStatus.includes('فائت')
    );
    if (isExplicitlyOverdue) {
      return 'overdue';
    }
    const isExplicitlyLate = Boolean(
      item.isLate === true ||
      item.submittedLate === true ||
      item.isSubmittedLate === true ||
      item.submission?.isLate === true ||
      item.submission?.submittedLate === true ||
      rawStatus === 'submitted_late' ||
      rawStatus === 'submitted-late' ||
      rawStatus === 'submittedlate' ||
      rawStatus === 'late' ||
      rawStatus === 'late_submitted' ||
      rawStatus.includes('تسليم متأخر') ||
      rawStatus.includes('متسلم متأخر') ||
      rawStatusLabel.includes('تسليم متأخر') ||
      rawStatusLabel.includes('متسلم متأخر')
    );
    if (isExplicitlyLate) {
      return 'submitted_late';
    }
    const subDate =
      item.submittedAt ||
      item.submissionDate ||
      item.submittedDate ||
      item.submission?.submittedAt ||
      item.submission?.submissionDate;
    const hasSubmittedAt = Boolean(subDate);
    const deadlineDate =
      item.deadline ||
      item.dueDate ||
      item.homework?.deadline ||
      item.homework?.dueDate ||
      item.submission?.deadline ||
      item.submission?.dueDate;
    const isPastDeadline = Boolean(
      deadlineDate &&
      !isNaN(new Date(deadlineDate).getTime()) &&
      Date.now() > new Date(deadlineDate).getTime()
    );
    const isSubmittedAfterDeadline = Boolean(
      hasSubmittedAt &&
      deadlineDate &&
      !isNaN(new Date(subDate).getTime()) &&
      !isNaN(new Date(deadlineDate).getTime()) &&
      new Date(subDate).getTime() > new Date(deadlineDate).getTime()
    );
    const isTurnedIn = Boolean(
      hasSubmittedAt ||
      rawStatus === 'submitted' ||
      rawStatus === 'completed' ||
      rawStatus === 'graded' ||
      rawStatus === 'evaluated' ||
      rawStatus.includes('تم التسليم') ||
      rawStatusLabel.includes('تم التسليم')
    );
    if (isTurnedIn) {
      if (isSubmittedAfterDeadline) {
        return 'submitted_late';
      }
      return 'submitted';
    }
    if (isPastDeadline) {
      return 'overdue';
    }
    return 'pending';
  }, []);

  const normalizeEvaluationStatus = useCallback((item, normStatus) => {
    if (!item) return 'not_evaluated';

    // 1. If not submitted by student, it CANNOT be evaluated
    if (normStatus === 'pending' || normStatus === 'overdue') {
      return 'not_evaluated';
    }

    // 2. Check explicit boolean flags
    const explicitEval = item.isEvaluated ?? item.evaluated ?? null;
    if (explicitEval === false) {
      return 'not_evaluated';
    }

    // 3. Check evaluation status string
    const rawEval = (
      item.evaluationStatus ||
      item.rawEvaluationStatus ||
      item.evalStatus ||
      ''
    ).toString().toLowerCase().trim();

    if (
      rawEval === 'not_evaluated' ||
      rawEval === 'not-evaluated' ||
      rawEval === 'unevaluated' ||
      rawEval.includes('غير مقيم') ||
      rawEval.includes('لم يتم') ||
      rawEval === 'pending' ||
      rawEval === 'waiting'
    ) {
      return 'not_evaluated';
    }

    if (
      explicitEval === true ||
      rawEval === 'evaluated' ||
      rawEval === 'graded' ||
      rawEval === 'تم التقييم' ||
      rawEval === 'مقيم' ||
      rawEval === 'done' ||
      Boolean(item.evaluatedAt)
    ) {
      return 'evaluated';
    }

    // 4. Only if grade exists and there is proof of grading (teacherNotes or feedback)
    if (
      item.grade !== null &&
      item.grade !== undefined &&
      item.grade !== '' &&
      Number(item.grade) > 0 &&
      (item.teacherNotes || item.feedback)
    ) {
      return 'evaluated';
    }

    return 'not_evaluated';
  }, []);

  const rawSubmissions = useMemo(() => {
    const apiList = submissionsRes?.data;
    if (Array.isArray(apiList)) {
      return apiList.map((item, idx) => {
        const normStatus = normalizeSubmissionStatus(item);
        const normEval = normalizeEvaluationStatus(item, normStatus);
        const isEval = normEval === 'evaluated';
        const subDate = item.submittedAt || item.submissionDate || item.submittedDate || null;
        const validGrade = isEval && item.grade !== null && item.grade !== undefined && item.grade !== ''
          ? Number(item.grade)
          : null;
        const hwId =
          item.homework?._id ||
          item.homework?.id ||
          (typeof item.homework === 'string' ? item.homework : null) ||
          item.homeworkId ||
          null;

        const studentName =
          typeof item.student === 'object'
            ? item.student?.name || item.student?.fullName || item.studentName || 'طالب'
            : item.student || item.studentName || 'طالب';

        const groupName =
          typeof item.group === 'object'
            ? item.group?.name || item.group?.title || item.groupName || 'مجموعة دراسية'
            : item.group || item.groupName || 'مجموعة دراسية';

        const homeworkTitle =
          typeof item.homework === 'object'
            ? item.homework?.title || item.homework?.name || item.homeworkTitle || 'واجب مدرسي'
            : item.homework || item.homeworkTitle || 'واجب مدرسي';

        return {
          id: item.id || item._id || `submission-${idx + 1}`,
          homeworkId: hwId,
          studentName,
          groupName,
          homeworkTitle,
          submittedAt: subDate,
          timeText: formatSubmissionTime(subDate),
          rawStatus: normStatus,
          rawEvaluationStatus: normEval,
          grade: validGrade,
          documents: item.documents || (item.document ? [item.document] : []),
          audioRecordings: item.audioRecordings || [],
          questions: item.questions || [],
          originalItem: item,
        };
      });
    }
    return [];
  }, [submissionsRes, formatSubmissionTime, normalizeSubmissionStatus, normalizeEvaluationStatus]);

  const activeSubmission = useMemo(() => {
    if (selectedSubmission) return selectedSubmission;
    if (paramId && rawSubmissions.length > 0) {
      const found = rawSubmissions.find((s) => s.id === paramId || s.homeworkId === paramId);
      return found || { id: paramId, homeworkId: paramId };
    }
    if (paramId) {
      return { id: paramId, homeworkId: paramId };
    }
    return null;
  }, [selectedSubmission, paramId, rawSubmissions]);

  const stats = useMemo(() => {
    const apiStats =
      submissionsRes?.statistics ||
      submissionsRes?.stats ||
      submissionsRes?.data?.statistics ||
      submissionsRes?.data?.stats;

    let localPending = 0;
    let localSubmitted = 0;
    let localSubmittedLate = 0;
    let localOverdue = 0;
    let localEvaluated = 0;
    let localNotEvaluated = 0;

    rawSubmissions.forEach((s) => {
      if (s.rawStatus === 'pending') localPending += 1;
      else if (s.rawStatus === 'submitted') localSubmitted += 1;
      else if (s.rawStatus === 'submitted_late') localSubmittedLate += 1;
      else if (s.rawStatus === 'overdue') localOverdue += 1;

      if (s.rawEvaluationStatus === 'evaluated') localEvaluated += 1;
      else localNotEvaluated += 1;
    });

    if (apiStats && typeof apiStats === 'object') {
      return {
        all: Number(apiStats.total ?? apiStats.all ?? apiStats.totalCount ?? rawSubmissions.length),
        pending: Number(apiStats.pending ?? apiStats.waiting ?? localPending),
        submitted: Number(apiStats.submitted ?? apiStats.completed ?? localSubmitted),
        submitted_late: Number(apiStats.submitted_late ?? apiStats.submittedLate ?? apiStats['submitted-late'] ?? localSubmittedLate),
        overdue: Number(apiStats.overdue ?? apiStats.late ?? localOverdue),
        evaluated: Number(apiStats.evaluated ?? localEvaluated),
        not_evaluated: Number(apiStats.not_evaluated ?? apiStats.notEvaluated ?? localNotEvaluated),
      };
    }

    return {
      all: rawSubmissions.length,
      pending: localPending,
      submitted: localSubmitted,
      submitted_late: localSubmittedLate,
      overdue: localOverdue,
      evaluated: localEvaluated,
      not_evaluated: localNotEvaluated,
    };
  }, [submissionsRes, rawSubmissions]);

  const filteredSubmissions = useMemo(() => {
    return rawSubmissions.filter((item) => {
      if (statusFilter !== 'all') {
        if (statusFilter === 'submitted_late') {
          const isLateMatch =
            item.rawStatus === 'submitted_late' ||
            item.rawStatus === 'late' ||
            item.rawStatus === 'submitted-late' ||
            Boolean(item.originalItem?.isLate || item.originalItem?.submittedLate);
          if (!isLateMatch) return false;
        } else if (statusFilter === 'overdue') {
          const isOverdueMatch =
            item.rawStatus === 'overdue' ||
            item.rawStatus === 'late_not_submitted' ||
            item.rawStatus === 'missed' ||
            Boolean(item.originalItem?.isOverdue);
          if (!isOverdueMatch) return false;
        } else if (item.rawStatus !== statusFilter) {
          return false;
        }
      }
      if (evaluationFilter === 'evaluated' && item.rawEvaluationStatus !== 'evaluated') {
        return false;
      }
      if (evaluationFilter === 'not_evaluated' && item.rawEvaluationStatus === 'evaluated') {
        return false;
      }
      if (debouncedSearch && debouncedSearch.trim()) {
        const query = debouncedSearch.trim().toLowerCase();
        const studentMatch = (item.studentName || '').toLowerCase().includes(query);
        const groupMatch = (item.groupName || '').toLowerCase().includes(query);
        const hwMatch = (item.homeworkTitle || '').toLowerCase().includes(query);
        if (!studentMatch && !groupMatch && !hwMatch) {
          return false;
        }
      }
      return true;
    });
  }, [rawSubmissions, statusFilter, evaluationFilter, debouncedSearch]);
  if (activeSubmission) {
    return (
      <SubmissionDetailsView
        submission={selectedSubmission}
        onBack={() => {
          setSelectedSubmission(null);
          if (paramId) {
            navigate('/dashboard/teacher/assignments/submissions');
          }
        }}
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
          <button
            type="button"
            onClick={() => refetch()}
            disabled={isFetching}
            className="p-2 rounded-2xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition cursor-pointer shadow-xs disabled:opacity-50"
            title={t('common.refresh', 'تحديث البيانات')}
          >
            <RefreshCw size={14} className={isFetching ? 'animate-spin text-[#00594C]' : ''} />
          </button>
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
          <div className="text-xs font-bold text-slate-400">{t('teacherHomework.pendingReview', 'بانتظار المراجعة')}</div>
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
          <div className="text-xs font-bold text-slate-400">{t('teacherHomework.submittedOnTime', 'تم التسليم')}</div>
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
          <div className="text-xs font-bold text-slate-400">{t('teacherHomework.overdue', 'متأخر عن الموعد')}</div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto">
          {[
            { id: 'all', label: t('teacherHomework.allSubmissions', 'الكل') },
            { id: 'evaluated', label: t('teacherHomework.evaluated', 'تم التقييم') },
            { id: 'not_evaluated', label: t('teacherHomework.notEvaluated', 'غير مقيم') },
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
                <th className="py-4 px-4 text-center">{t('teacherHomework.evaluationStatus', 'حالة التقييم')}</th>
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
                            <span>{t('teacherHomework.submittedOnTime', 'تم التسليم')}</span>
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
                            <span>{t('teacherHomework.overdue', 'متأخر عن الموعد')}</span>
                          </span>
                        )}
                        {sub.rawStatus === 'pending' && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-950/40 dark:text-amber-300">
                            <Clock size={13} />
                            <span>{t('teacherHomework.pendingReview', 'بانتظار المراجعة')}</span>
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
                            <span>{t('teacherHomework.notEvaluated', 'غير مقيم')}</span>
                          </span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        <button
                          type="button"
                          onClick={() => {
                            if (sub.id) {
                              navigate(`/dashboard/teacher/homework/submissions/${sub.id}`);
                            } else {
                              setSelectedSubmission(sub);
                            }
                          }}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#d2ede6] hover:bg-[#bce4da] text-[#00594C] dark:bg-emerald-950/60 dark:text-emerald-300 dark:hover:bg-emerald-900 transition-all cursor-pointer shadow-xs"
                          title={t('teacherHomework.viewSubmission', 'عرض تفاصيل الواجب والتسليم')}
                        >
                          <Eye size={14} />
                          <span>{t('teacherHomework.viewSubmission', 'عرض التسليم')}</span>
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
