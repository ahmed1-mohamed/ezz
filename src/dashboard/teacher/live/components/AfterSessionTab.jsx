import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import {
  CheckCircle2,
  Calendar,
  Clock,
  ChevronLeft,
  ChevronRight,
  Star,
  Users,
  Award,
  AlertCircle,
  RotateCcw,
} from 'lucide-react';
import toast from 'react-hot-toast';
import { teacherSessionsApi } from '@/shared/services/api/teacherSessionsApi';
import { teacherEvaluationsApi } from '@/shared/services/api/teacherEvaluationsApi';

const RATING_STARS = [1, 2, 3, 4, 5];

function resolveStudentName(student, isRtl) {
  if (!student) return '-';
  if (typeof student === 'string') return student;
  if (typeof student.name === 'object' && student.name !== null) {
    return isRtl ? (student.name.ar || student.name.en) : (student.name.en || student.name.ar);
  }
  return student.name || student.studentName || '-';
}

function formatSessionDate(dateValue, isRtl) {
  if (!dateValue) return '-';
  const dateObj = new Date(dateValue);
  if (isNaN(dateObj.getTime())) return String(dateValue);
  return dateObj.toLocaleDateString(isRtl ? 'ar-EG' : 'en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function StudentEvaluationCard({ student, sessionId, onEvaluatedSuccessfully }) {
  const { t } = useTranslation();
  const [rating, setRating] = useState(5);
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isEvaluated, setIsEvaluated] = useState(false);

  const handleSubmitEvaluation = async (event) => {
    event.preventDefault();
    if (!student.id || !sessionId) return;
    try {
      setIsSubmitting(true);
      const res = await teacherEvaluationsApi.createStudentEvaluation(sessionId, {
        student: student.id,
        rating: Number(rating),
        notes: notes.trim(),
      });
      if (res.success) {
        setIsEvaluated(true);
        toast.success(res.message || t('teacherLive.studentEvaluatedSuccess', 'تم تسجيل تقييم الطالب بنجاح'));
        onEvaluatedSuccessfully(student.id);
      } else {
        toast.error(res.message || t('teacherLive.evaluationError', 'تعذر تسجيل التقييم'));
      }
    } catch (err) {
      const serverMsg = err.response?.data?.message || err.message;
      toast.error(serverMsg || t('teacherLive.evaluationError', 'تعذر تسجيل التقييم'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const initial = student.name ? student.name.trim().charAt(0) : 'ط';

  if (isEvaluated) {
    return (
      <div className="p-5 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 flex items-center justify-between gap-3 animate-in fade-in">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-800 dark:text-slate-100">{student.name}</p>
            <p className="text-xs text-emerald-700 dark:text-emerald-300 font-semibold">
              {t('teacherLive.evaluationRecorded', 'تم تقييم هذا الطالب بنجاح')}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
          <span>{rating}</span>
          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmitEvaluation}
      className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          {student.avatar ? (
            <img
              src={student.avatar}
              alt={student.name}
              className="w-10 h-10 rounded-full object-cover shrink-0 border border-slate-200 dark:border-slate-700"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-[#0f7a6c]/10 text-[#0f7a6c] dark:text-emerald-400 font-bold flex items-center justify-center shrink-0">
              {initial}
            </div>
          )}
          <div className="min-w-0">
            <p className="text-sm font-bold text-slate-800 dark:text-slate-100 truncate">{student.name}</p>
            {student.code && (
              <p className="text-xs text-slate-400 font-mono truncate">{student.code}</p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-1 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700">
          {RATING_STARS.map((starVal) => {
            const isFilled = starVal <= rating;
            return (
              <button
                type="button"
                key={starVal}
                onClick={() => setRating(starVal)}
                className="p-0.5 hover:scale-110 transition-transform"
              >
                <Star
                  className={`w-4 h-4 ${
                    isFilled ? 'text-amber-400 fill-amber-400' : 'text-slate-300 dark:text-slate-600'
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-1">
        <textarea
          rows={2}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder={t('teacherLive.notesOptionalPlaceholder', 'ملاحظات التقييم والتجويد للطالب (اختياري)...')}
          className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-xs focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]"
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-5 py-2 rounded-xl bg-[#0f7a6c] hover:bg-[#0c6156] text-white text-xs font-bold shadow-sm transition-all flex items-center gap-1.5"
        >
          {isSubmitting && (
            <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          )}
          <span>{t('teacherLive.submitStudentEval', 'حفظ التقييم')}</span>
        </button>
      </div>
    </form>
  );
}

export default function AfterSessionTab() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;

  const [offset, setOffset] = useState(0);
  const [completedStudentIds, setCompletedStudentIds] = useState([]);

  const { data: pendingRes, isLoading, isError, refetch } = useQuery({
    queryKey: ['teacher-completed-pending-evals', offset],
    queryFn: () => teacherSessionsApi.fetchCompletedPendingEvaluations(offset),
  });

  const session = useMemo(() => {
    if (!pendingRes) return null;
    return pendingRes.data?.id ? pendingRes.data : pendingRes.session || pendingRes.data || pendingRes;
  }, [pendingRes]);

  const pendingStudentIds = useMemo(() => {
    if (Array.isArray(pendingRes?.pendingEvaluationStudentIds)) {
      return pendingRes.pendingEvaluationStudentIds;
    }
    return [];
  }, [pendingRes]);

  const studentsNeedingEval = useMemo(() => {
    if (!session) return [];
    const rawList = Array.isArray(session.attendance)
      ? session.attendance
      : Array.isArray(session.students)
      ? session.students
      : Array.isArray(session.group?.students)
      ? session.group.students
      : [];

    const mapped = rawList.map((item, index) => {
      const studentObj = item.student || item.user || item;
      const studentId = studentObj._id || studentObj.student_id || studentObj.id || `stu-${index}`;
      const name = resolveStudentName(studentObj, isRtl);
      const avatar = studentObj.avatar || null;
      const code = studentObj.code || null;
      return { id: studentId, name, avatar, code };
    });

    if (pendingStudentIds.length > 0) {
      return mapped.filter((stu) => pendingStudentIds.includes(stu.id));
    }
    return mapped;
  }, [session, pendingStudentIds, isRtl]);

  const remainingStudents = useMemo(() => {
    return studentsNeedingEval.filter((stu) => !completedStudentIds.includes(stu.id));
  }, [studentsNeedingEval, completedStudentIds]);

  const handleStudentEvaluated = (evaluatedId) => {
    setCompletedStudentIds((prev) => [...prev, evaluatedId]);
  };

  const handleOlderSession = () => {
    setCompletedStudentIds([]);
    setOffset((prev) => prev + 1);
  };

  const handleNewerSession = () => {
    if (offset > 0) {
      setCompletedStudentIds([]);
      setOffset((prev) => prev - 1);
    }
  };

  const handleResetToLatest = () => {
    setCompletedStudentIds([]);
    setOffset(0);
  };

  const sessionTitle = typeof session?.title === 'object' && session?.title !== null
    ? (isRtl ? session.title.ar : session.title.en)
    : (session?.title || session?.subject || t('teacherLive.completedSessionTitle', 'حصة مكتملة'));
  const groupName = typeof session?.group === 'object' && session?.group !== null
    ? (isRtl ? session.group.name?.ar || session.group.name : session.group.name?.en || session.group.name)
    : (session?.groupName || session?.group || '-');

  const hasSession = Boolean(session && (session.id || session._id || session.title));

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 text-[#0f7a6c]" />
          <span className="font-bold text-sm text-slate-800 dark:text-slate-100">
            {offset === 0
              ? t('teacherLive.latestCompletedSession', 'أحدث حصة مكتملة بحاجة لتقييم')
              : t('teacherLive.olderCompletedSession', 'حصة مكتملة سابقة ({{offset}})', { offset })}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleOlderSession}
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
          >
            {isRtl ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            <span>{t('teacherLive.olderSessionNav', 'حصة سابقة')}</span>
          </button>

          {offset > 0 && (
            <button
              type="button"
              onClick={handleResetToLatest}
              className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#0f7a6c]/10 text-[#0f7a6c] dark:text-emerald-400 text-xs font-bold hover:bg-[#0f7a6c]/20 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t('teacherLive.latestSessionReset', 'العودة للأحدث')}</span>
            </button>
          )}

          <button
            type="button"
            onClick={handleNewerSession}
            disabled={offset === 0}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-xl border text-xs font-bold transition-colors ${
              offset === 0
                ? 'border-slate-100 dark:border-slate-800 text-slate-300 dark:text-slate-600 cursor-not-allowed bg-slate-50 dark:bg-slate-900'
                : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700'
            }`}
          >
            <span>{t('teacherLive.newerSessionNav', 'حصة أحدث')}</span>
            {isRtl ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {isLoading ? (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-12 text-center shadow-sm">
          <div className="w-10 h-10 border-3 border-[#0f7a6c] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
            {t('teacherLive.loadingCompletedSession', 'جاري جلب الحصص المكتملة التي تتطلب تقييمات...')}
          </p>
        </div>
      ) : isError || !hasSession ? (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-12 text-center shadow-sm space-y-4">
          <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-950/40 text-[#0f7a6c] rounded-2xl flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
              {t('teacherLive.noPendingEvalsTitle', 'لا توجد حصص مكتملة بحاجة لتقييم حالياً')}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto">
              {t('teacherLive.noPendingEvalsSubtitle', 'تم تقييم جميع الطلاب في الحصص المكتملة بنجاح!')}
            </p>
          </div>
          {offset > 0 && (
            <button
              type="button"
              onClick={handleResetToLatest}
              className="px-5 py-2.5 rounded-xl bg-[#0f7a6c] hover:bg-[#0c6156] text-white text-xs font-bold shadow-md transition-colors inline-flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{t('teacherLive.latestSessionReset', 'العودة للأحدث')}</span>
            </button>
          )}
        </div>
      ) : (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#0f7a6c]/10 text-[#0f7a6c] dark:text-emerald-400">
                  {groupName}
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 text-xs font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>{t('teacherLive.statusCompleted', 'حصة مكتملة')}</span>
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#0f7a6c]" />
                  <span>{formatSessionDate(session.date || session.startTime, isRtl)}</span>
                </div>
                {session.startTime && (
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#0f7a6c]" />
                    <span>{session.startTime}</span>
                  </div>
                )}
              </div>
            </div>
            <h2 className="text-xl font-extrabold text-slate-900 dark:text-slate-100">
              {sessionTitle}
            </h2>
            <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 pt-1">
              <Users className="w-4 h-4 text-[#0f7a6c]" />
              <span>
                {t('teacherLive.studentsNeedingEvalCount', 'طلاب بحاجة للتقييم: {{count}} طالب', {
                  count: remainingStudents.length,
                })}
              </span>
            </div>
          </div>

          {remainingStudents.length === 0 ? (
            <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-3xl p-8 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
              <h3 className="font-bold text-base text-emerald-800 dark:text-emerald-200">
                {t('teacherLive.allStudentsEvaluatedDone', 'تم تقييم جميع طلاب هذه الحصة بنجاح!')}
              </h3>
              <p className="text-xs text-emerald-700 dark:text-emerald-300">
                {t('teacherLive.allStudentsEvaluatedHint', 'يمكنك الانتقال لحصة سابقة إن وجدت')}
              </p>
              <button
                type="button"
                onClick={handleOlderSession}
                className="px-5 py-2.5 rounded-xl bg-[#0f7a6c] hover:bg-[#0c6156] text-white text-xs font-bold shadow-md transition-colors inline-flex items-center gap-1.5"
              >
                <span>{t('teacherLive.checkOlderCompleted', 'فحص حصة سابقة')}</span>
                {isRtl ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <h3 className="font-bold text-base text-slate-800 dark:text-slate-100 flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-500 fill-current" />
                <span>{t('teacherLive.pendingStudentsListTitle', 'الطلاب المستحقون للتقييم في هذه الحصة')}</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {studentsNeedingEval.map((student) => (
                  <StudentEvaluationCard
                    key={student.id}
                    student={student}
                    sessionId={session.id || session._id}
                    onEvaluatedSuccessfully={handleStudentEvaluated}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
