import { useState, useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import {
  Calendar,
  ArrowRight,
  Clock,
  User,
  BookOpen,
  FileText,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Mic,
  Play,
  Pause,
  Download,
  Star,
  Loader2,
  Hash,
  Paperclip,
  GraduationCap,
  ExternalLink,
} from 'lucide-react';
import toast from 'react-hot-toast';
import { teacherHomeworkApi } from '@/shared/services/api/teacherHomeworkApi.js';

function normalizeFile(rawItem, index, defaultPrefix = 'ملف') {
  if (!rawItem) return null;
  if (typeof rawItem === 'string') {
    const rawName = decodeURIComponent(rawItem.split('/').pop()?.split('?')[0] || `${defaultPrefix}_${index + 1}`);
    return {
      id: `${defaultPrefix}-${index}`,
      name: rawName,
      url: rawItem,
      size: 'ملف مرفق',
      type: rawName.toLowerCase().endsWith('.pdf') ? 'pdf' : 'file',
      isPdf: rawName.toLowerCase().endsWith('.pdf'),
    };
  }
  const rawUrl = rawItem.url || rawItem.fileUrl || rawItem.path || rawItem.downloadUrl || rawItem.link || '#';
  const rawName = decodeURIComponent(
    rawItem.name ||
    rawItem.fileName ||
    rawItem.originalName ||
    (typeof rawUrl === 'string' && rawUrl !== '#' ? rawUrl.split('/').pop()?.split('?')[0] : '') ||
    `${defaultPrefix}_${index + 1}`
  );
  const isPdf = rawName.toLowerCase().endsWith('.pdf') || rawItem.type === 'pdf';
  return {
    id: rawItem.id || rawItem._id || `${defaultPrefix}-${index}`,
    name: rawName,
    url: rawUrl,
    size: rawItem.size || rawItem.fileSize || 'ملف مرفق',
    type: isPdf ? 'pdf' : 'file',
    isPdf,
  };
}

function FileItemCard({ doc, roleLabel, roleBadgeClass, onSelect, onOpen }) {
  return (
    <div
      onClick={() => onSelect(doc)}
      className="bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100/70 dark:hover:bg-slate-800 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border border-slate-100 dark:border-slate-700/60 transition cursor-pointer"
    >
      <div className="flex items-center gap-3.5 min-w-0">
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
            doc.isPdf
              ? 'bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400'
              : 'bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400'
          }`}
        >
          <FileText size={20} />
        </div>
        <div className="text-start min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h5 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white truncate">
              {doc.name}
            </h5>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${roleBadgeClass}`}>
              {roleLabel}
            </span>
          </div>
          <p className="text-[11px] text-slate-400 font-semibold mt-0.5">
            {doc.size}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onOpen(doc.url);
          }}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 hover:border-[#00594C] hover:text-[#00594C] transition shadow-xs cursor-pointer"
        >
          <ExternalLink size={13} />
          <span>معاينة / فتح</span>
        </button>
        {doc.url && doc.url !== '#' && (
          <a
            href={doc.url}
            download={doc.name}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-2 rounded-xl bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600 hover:text-[#00594C] hover:border-[#00594C] transition shadow-xs"
            title="تنزيل الملف"
          >
            <Download size={14} />
          </a>
        )}
      </div>
    </div>
  );
}

export default function SubmissionDetailsView({
  submission,
  onBack,
  currentTimeStr,
  currentDateStr,
}) {
  const { i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const queryClient = useQueryClient();
  const [internalTimeStr, setInternalTimeStr] = useState('');
  const [internalDateStr, setInternalDateStr] = useState('');
  const [currentTimestamp] = useState(() => Date.now());
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      try {
        setInternalTimeStr(new Intl.DateTimeFormat('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(now));
      } catch {
        setInternalTimeStr(now.toTimeString().slice(0, 8));
      }
      try {
        setInternalDateStr(new Intl.DateTimeFormat(isRtl ? 'ar-EG-u-ca-gregory' : 'en-GB-u-ca-gregory', {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }).format(now));
      } catch {
        setInternalDateStr(now.toLocaleDateString(isRtl ? 'ar-EG' : 'en-GB'));
      }
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, [isRtl]);
  const activeTimeStr = currentTimeStr || internalTimeStr;
  const activeDateStr = currentDateStr || internalDateStr;
  const submissionId = submission?.id || submission?._id;
  const homeworkId = submission?.homeworkId || submission?.homework?._id || submission?.homework?.id || (typeof submission?.homework === 'string' ? submission?.homework : null);
  const { data: detailsRes } = useQuery({
    queryKey: ['teacher-submission-details', submissionId, homeworkId],
    queryFn: () => teacherHomeworkApi.fetchSubmissionDetails(submissionId, homeworkId),
    enabled: Boolean(submissionId || homeworkId),
    staleTime: 60 * 1000,
    retry: false,
  });
  const liveData = useMemo(() => detailsRes?.data || submission || {}, [detailsRes?.data, submission]);
  const studentName =
    typeof liveData.student === 'object'
      ? liveData.student?.name || 'طالب'
      : liveData.student || 'طالب';
  const homeworkTitle =
    typeof liveData.homework === 'object'
      ? liveData.homework?.title || 'واجب مدرسي'
      : liveData.homework || 'واجب مدرسي';
  const groupName =
    typeof liveData.group === 'object'
      ? liveData.group?.name || 'مجموعة دراسية'
      : liveData.group || 'مجموعة دراسية';
  const rawStatus = (() => {
    const st = (
      liveData.submissionStatus ||
      liveData.rawSubmissionStatus ||
      liveData.status ||
      liveData.homeworkStatus ||
      liveData.deliveryStatus ||
      submission?.submissionStatus ||
      submission?.rawSubmissionStatus ||
      submission?.status ||
      submission?.homeworkStatus ||
      submission?.deliveryStatus ||
      liveData.submission?.submissionStatus ||
      liveData.submission?.status ||
      ''
    ).toString().toLowerCase().trim();
    const stLabel = (
      liveData.statusLabel ||
      submission?.statusLabel ||
      liveData.submission?.statusLabel ||
      ''
    ).toString().toLowerCase().trim();
    const isExplicitlyOverdue = Boolean(
      liveData.isOverdue === true ||
      submission?.isOverdue === true ||
      liveData.submission?.isOverdue === true ||
      st === 'overdue' ||
      st === 'late_not_submitted' ||
      st === 'late-not-submitted' ||
      st === 'missed' ||
      st.includes('overdue') ||
      st.includes('متأخر عن الموعد') ||
      stLabel.includes('متأخر عن الموعد') ||
      stLabel.includes('فائت') ||
      st.includes('فائت')
    );
    if (isExplicitlyOverdue) {
      return 'overdue';
    }
    const subDate = liveData.submittedAt || liveData.submission?.submittedAt || submission?.submittedAt;
    const deadlineDate = liveData.deadline || liveData.dueDate || liveData.homework?.deadline || liveData.homework?.dueDate || submission?.deadline || submission?.dueDate;
    const isDateLate = Boolean(
      subDate && deadlineDate &&
      !isNaN(new Date(subDate).getTime()) &&
      !isNaN(new Date(deadlineDate).getTime()) &&
      new Date(subDate).getTime() > new Date(deadlineDate).getTime()
    );
    const isExplicitlyLate = Boolean(
      liveData.isLate === true ||
      liveData.submittedLate === true ||
      liveData.isSubmittedLate === true ||
      submission?.isLate === true ||
      submission?.submittedLate === true ||
      submission?.isSubmittedLate === true ||
      liveData.submission?.isLate === true ||
      st === 'submitted_late' ||
      st === 'submitted-late' ||
      st === 'submittedlate' ||
      st === 'late' ||
      st === 'late_submitted' ||
      st.includes('تسليم متأخر') ||
      st.includes('متسلم متأخر') ||
      stLabel.includes('تسليم متأخر') ||
      stLabel.includes('متسلم متأخر') ||
      isDateLate
    );
    if (isExplicitlyLate) {
      return 'submitted_late';
    }
    const hasSubmitted = Boolean(
      subDate ||
      st === 'submitted' ||
      st === 'completed' ||
      st.includes('تم التسليم') ||
      stLabel.includes('تم التسليم')
    );
    if (hasSubmitted) {
      return 'submitted';
    }
    const isPastDeadline = Boolean(
      deadlineDate &&
      !isNaN(new Date(deadlineDate).getTime()) &&
      currentTimestamp > new Date(deadlineDate).getTime()
    );
    if (isPastDeadline) {
      return 'overdue';
    }
    return 'pending';
  })();

  const isSubmissionTurnedIn = rawStatus === 'submitted' || rawStatus === 'submitted_late';

  const isEvaluated = Boolean(
    isSubmissionTurnedIn &&
    liveData.isEvaluated !== false &&
    submission?.isEvaluated !== false &&
    liveData.evaluated !== false &&
    submission?.evaluated !== false &&
    (() => {
      const explicitEval =
        liveData.isEvaluated ??
        liveData.evaluated ??
        submission?.isEvaluated ??
        submission?.evaluated ??
        liveData.submission?.isEvaluated ??
        null;

      if (explicitEval === true) return true;
      if (explicitEval === false) return false;

      const rawEval = (
        liveData.evaluationStatus ||
        liveData.rawEvaluationStatus ||
        submission?.evaluationStatus ||
        submission?.rawEvaluationStatus ||
        liveData.submission?.evaluationStatus ||
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
        return false;
      }

      if (
        rawEval === 'evaluated' ||
        rawEval === 'graded' ||
        rawEval === 'تم التقييم' ||
        rawEval === 'مقيم' ||
        rawEval === 'done' ||
        Boolean(liveData.evaluatedAt || submission?.evaluatedAt)
      ) {
        return true;
      }

      const hasGrade =
        (liveData.grade !== null && liveData.grade !== undefined && liveData.grade !== '') ||
        (submission?.grade !== null && submission?.grade !== undefined && submission?.grade !== '');

      const hasNotes = Boolean(liveData.teacherNotes || submission?.teacherNotes);

      if (hasGrade && hasNotes && Number(liveData.grade ?? submission?.grade) > 0) {
        return true;
      }

      return false;
    })()
  );
  const formattedSubmissionTime = useMemo(() => {
    const rawDate =
      liveData.submittedAt ||
      liveData.submission?.submittedAt ||
      submission?.submittedAt ||
      liveData.submissionDate ||
      submission?.submissionDate ||
      liveData.date ||
      submission?.date ||
      (rawStatus !== 'overdue' && rawStatus !== 'pending' ? (liveData.createdAt || submission?.createdAt) : null) ||
      (rawStatus !== 'overdue' && rawStatus !== 'pending' ? submission?.timeText : null) ||
      null;
    if (!rawDate) {
      if (rawStatus === 'pending') {
        return isRtl ? 'لم يتم التسليم بعد (في الانتظار)' : 'Pending submission';
      }
      if (rawStatus === 'overdue') {
        return isRtl ? 'لم يتم التسليم (متأخر عن الموعد)' : 'Overdue';
      }
      return isRtl ? 'غير محدد' : 'Not specified';
    }
    const d = new Date(rawDate);
    if (isNaN(d.getTime())) {
      return String(rawDate);
    }
    try {
      const datePart = new Intl.DateTimeFormat(isRtl ? 'ar-EG' : 'en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }).format(d);
      const timePart = new Intl.DateTimeFormat(isRtl ? 'ar-EG' : 'en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }).format(d);
      return `${datePart} - ${timePart}`;
    } catch {
      return d.toLocaleDateString(isRtl ? 'ar-EG' : 'en-GB');
    }
  }, [liveData, submission, rawStatus, isRtl]);
  const canEvaluate = !isEvaluated && (rawStatus === 'submitted' || rawStatus === 'submitted_late');
  const statusBadge = useMemo(() => {
    if (isEvaluated) {
      const displayScore = liveData.grade ?? submission?.grade;
      const g = (displayScore !== null && displayScore !== undefined && displayScore !== '') ? `${displayScore}%` : '';
      return {
        label: g ? `تم التقييم (${g})` : 'تم التقييم',
        className: 'bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300',
        icon: CheckCircle2,
      };
    }
    if (rawStatus === 'submitted_late') {
      return {
        label: 'تم التسليم متأخراً',
        className: 'bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-950/40 dark:text-amber-300',
        icon: Clock,
      };
    }
    if (rawStatus === 'submitted') {
      return {
        label: 'تم التسليم',
        className: 'bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-950/40 dark:text-blue-300',
        icon: CheckCircle2,
      };
    }
    if (rawStatus === 'overdue') {
      return {
        label: 'متأخر (لم يسلّم)',
        className: 'bg-rose-50 text-rose-700 border border-rose-200 dark:bg-rose-950/40 dark:text-rose-300',
        icon: AlertCircle,
      };
    }
    return {
      label: 'في الانتظار',
      className: 'bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-950/40 dark:text-amber-300',
      icon: Clock,
    };
  }, [isEvaluated, rawStatus, liveData.grade, submission?.grade]);
  const studentTextAnswer = useMemo(() => {
    return (
      liveData.textAnswer ||
      liveData.answerText ||
      liveData.submission?.textAnswer ||
      liveData.submission?.answerText ||
      submission?.textAnswer ||
      submission?.answerText ||
      liveData.notes ||
      submission?.notes ||
      ''
    ).trim();
  }, [liveData, submission]);
  const studentAttachments = useMemo(() => {
    const rawAtts =
      (Array.isArray(liveData.attachments) && liveData.attachments) ||
      (Array.isArray(liveData.submission?.attachments) && liveData.submission.attachments) ||
      (Array.isArray(submission?.attachments) && submission.attachments) ||
      (Array.isArray(liveData.solution?.attachments) && liveData.solution.attachments) ||
      [];
    return rawAtts.map((att, idx) => normalizeFile(att, idx, 'مرفق_طالب')).filter(Boolean);
  }, [liveData, submission]);
  const teacherDocuments = useMemo(() => {
    const hw = liveData.homework || submission?.homework || liveData.homeworkData || {};
    let rawDocs = [];
    if (Array.isArray(hw.documents) && hw.documents.length > 0) {
      rawDocs = hw.documents;
    } else if (hw.document) {
      rawDocs = Array.isArray(hw.document) ? hw.document : [hw.document];
    } else if (Array.isArray(liveData.documents) && liveData.documents.length > 0) {
      rawDocs = liveData.documents;
    } else if (liveData.document) {
      rawDocs = Array.isArray(liveData.document) ? liveData.document : [liveData.document];
    } else if (Array.isArray(submission?.documents) && submission.documents.length > 0) {
      rawDocs = submission.documents;
    } else if (submission?.document) {
      rawDocs = Array.isArray(submission.document) ? submission.document : [submission.document];
    }
    return rawDocs.map((doc, idx) => normalizeFile(doc, idx, 'ملف_الواجب')).filter(Boolean);
  }, [liveData, submission]);
  const [selectedPreviewDoc, setSelectedPreviewDoc] = useState(null);
  const activePreviewDoc = selectedPreviewDoc || studentAttachments[0] || teacherDocuments[0] || null;
  const handleOpenFile = (fileUrl) => {
    if (fileUrl && fileUrl !== '#') {
      window.open(fileUrl, '_blank', 'noopener,noreferrer');
      return;
    }
    toast.error(isRtl ? 'رابط الملف غير متوفر حالياً' : 'File URL is not available');
  };
  const audioRecordings = useMemo(() => {
    if (Array.isArray(liveData.audioRecordings) && liveData.audioRecordings.length > 0) {
      return liveData.audioRecordings;
    }
    if (Array.isArray(liveData.submission?.audioRecordings) && liveData.submission.audioRecordings.length > 0) {
      return liveData.submission.audioRecordings;
    }
    return [];
  }, [liveData]);
  const [playingAudioId, setPlayingAudioId] = useState(null);
  const togglePlayAudio = (id) => {
    if (playingAudioId === id) {
      setPlayingAudioId(null);
    } else {
      setPlayingAudioId(id);
    }
  };
  const quizQuestions = useMemo(() => {
    const list =
      liveData.questions ||
      liveData.homeworkData?.questions ||
      liveData.homework?.questions ||
      submission?.questions ||
      submission?.homework?.questions;
    if (Array.isArray(list) && list.length > 0) {
      const answersList = Array.isArray(liveData.answers)
        ? liveData.answers
        : (Array.isArray(liveData.submission?.answers)
          ? liveData.submission.answers
          : (Array.isArray(submission?.answers) ? submission.answers : []));
      const answersMap = {};
      answersList.forEach((a) => {
        if (a && typeof a === 'object') {
          const qId = String(a.questionId || a.id || a.question || a._id || '').trim();
          if (qId) {
            answersMap[qId] = a;
          }
        }
      });
      return list.map((q, idx) => {
        const qId = String(q.id || q._id || q.questionId || `q-${idx}`).trim();
        const ans = answersMap[qId] || null;
        let studentAnsText = '';
        if (ans) {
          if (ans.selectedOptionIndex !== undefined && ans.selectedOptionIndex !== null) {
            const optIdx = Number(ans.selectedOptionIndex);
            if (Array.isArray(q.options) && q.options[optIdx] !== undefined) {
              studentAnsText = `الخيار (${optIdx + 1}): ${q.options[optIdx]}`;
            } else {
              studentAnsText = `الخيار رقم ${optIdx + 1}`;
            }
          } else if (ans.selectedOption !== undefined && ans.selectedOption !== null) {
            const optIdx = Number(ans.selectedOption);
            if (Array.isArray(q.options) && q.options[optIdx] !== undefined) {
              studentAnsText = `الخيار (${optIdx + 1}): ${q.options[optIdx]}`;
            } else {
              studentAnsText = `الخيار رقم ${optIdx + 1}`;
            }
          } else if (ans.answerText) {
            studentAnsText = String(ans.answerText);
          } else if (ans.textAnswer) {
            studentAnsText = String(ans.textAnswer);
          } else if (ans.text) {
            studentAnsText = String(ans.text);
          } else if (ans.answer) {
            studentAnsText = String(ans.answer);
          }
        }
        return {
          ...q,
          id: qId,
          question: q.questionText || q.question || `السؤال ${idx + 1}`,
          points: Number(q.points) || 5,
          studentAnswer: studentAnsText || q.studentAnswer || '',
          isCorrect: ans?.isCorrect !== undefined ? ans.isCorrect : (q.isCorrect !== undefined ? q.isCorrect : null),
        };
      });
    }
    return [];
  }, [liveData, submission]);
  const [questionResults, setQuestionResults] = useState({});
  const isQuestionResultCorrect = (q) => {
    if (questionResults[q.id] !== undefined) {
      return Boolean(questionResults[q.id]);
    }
    return q.isCorrect !== false;
  };
  const toggleQuestionCorrect = (qId, defaultVal) => {
    setQuestionResults((prev) => ({
      ...prev,
      [qId]: prev[qId] !== undefined ? !prev[qId] : !defaultVal,
    }));
  };
  const [userGrade, setUserGrade] = useState(null);
  const [userTeacherNotes, setUserTeacherNotes] = useState(null);
  const grade = userGrade !== null
    ? userGrade
    : (isEvaluated && liveData.grade !== null && liveData.grade !== undefined && liveData.grade !== ''
        ? String(liveData.grade)
        : (isEvaluated && submission?.grade !== null && submission?.grade !== undefined && submission?.grade !== ''
            ? String(submission.grade)
            : ''));
  const teacherNotes = userTeacherNotes !== null
    ? userTeacherNotes
    : (isEvaluated ? (liveData.teacherNotes || submission?.teacherNotes || '') : '');
  const setGrade = setUserGrade;
  const setTeacherNotes = setUserTeacherNotes;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const quickGrades = [
    [70, 65, 60],
    [85, 80, 75],
    [100, 95, 90],
  ];
  const handleSaveEvaluation = async () => {
    if (!canEvaluate) {
      if (isEvaluated) {
        toast.error('تم تقييم هذا الواجب بالفعل ولا يمكن إعادة تقييمه');
      } else {
        toast.error('لا يمكن تقييم الواجب إلا بعد تسليمه من قِبل الطالب');
      }
      return;
    }
    if (grade === '' || isNaN(Number(grade))) {
      toast.error('يرجى تحديد درجة صحيحة للطالب');
      return;
    }
    setIsSubmitting(true);
    try {
      const payload = {
        grade: Number(grade),
        ...(teacherNotes && teacherNotes.trim() ? { teacherNotes: teacherNotes.trim() } : {}),
      };
      const res = await teacherHomeworkApi.evaluateSubmission(
        submissionId || liveData.id,
        payload
      );
      setIsSubmitting(false);
      if (res.success) {
        toast.success(`تم حفظ تقييم الطالب ${studentName} بنجاح (${grade}/100)`);
        queryClient.invalidateQueries({ queryKey: ['teacher-homework-submissions'] });
        queryClient.invalidateQueries({ queryKey: ['teacher-submission-details', submissionId] });
      } else {
        toast.error(res.message || 'تعذر حفظ التقييم');
      }
    } catch {
      setIsSubmitting(false);
      toast.error('حدث خطأ أثناء حفظ التقييم');
    }
  };
  const StatusIcon = statusBadge.icon;
  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-16" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 shadow-xs border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="text-start">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white leading-tight">
            تسليم: {studentName}
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 font-semibold mt-0.5">
            {homeworkTitle}
          </p>
        </div>
        <div className="flex items-center gap-3 self-end md:self-center flex-wrap">
          <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-[#d2ede6] text-[#00594C] dark:bg-emerald-950/70 dark:text-emerald-300">
            {activeTimeStr}
          </span>
          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-semibold">
            <Calendar size={14} className="text-slate-400" />
            <span>{activeDateStr}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 px-1">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-500 hover:text-[#00594C] dark:text-slate-400 dark:hover:text-emerald-400 transition cursor-pointer"
        >
          <ArrowRight size={16} />
          <span>العودة إلى قائمة التسليمات</span>
        </button>
        <span
          className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold ${statusBadge.className}`}
        >
          <StatusIcon size={14} />
          <span>{statusBadge.label}</span>
        </span>
      </div>
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-100 dark:border-slate-800 space-y-6 text-start">
        <h2 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white">
          معلومات التسليم
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-2 border-b border-slate-100 dark:border-slate-800/80 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-[#00594C] dark:text-emerald-300 flex items-center justify-center shrink-0">
              <Hash size={18} />
            </div>
            <div className="text-start">
              <span className="text-[11px] font-semibold text-slate-400 block">الواجب</span>
              <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white">
                {homeworkTitle}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-300 flex items-center justify-center shrink-0">
              <Calendar size={18} />
            </div>
            <div className="text-start">
              <span className="text-[11px] font-semibold text-slate-400 block">وقت التسليم</span>
              <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white">
                {formattedSubmissionTime}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-300 flex items-center justify-center shrink-0">
              <User size={18} />
            </div>
            <div className="text-start">
              <span className="text-[11px] font-semibold text-slate-400 block">اسم الطالب</span>
              <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white">
                {studentName}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-300 flex items-center justify-center shrink-0">
              <BookOpen size={18} />
            </div>
            <div className="text-start">
              <span className="text-[11px] font-semibold text-slate-400 block">المجموعة</span>
              <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white">
                {groupName}
              </span>
            </div>
          </div>
        </div>
        {studentTextAnswer && (
          <div className="rounded-2xl p-4 bg-[#fffbeb] border border-[#fef3c7] dark:bg-amber-950/20 dark:border-amber-900/30 text-start space-y-1">
            <div className="text-xs font-bold text-[#b45309] dark:text-amber-400 flex items-center gap-1.5">
              <span>إجابة الطالب / ملاحظات الحل</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-[#92400e] dark:text-amber-300 whitespace-pre-wrap">
              {studentTextAnswer}
            </p>
          </div>
        )}
      </div>

      {/* قسم مرفقات إجابة الطالب (attachments) */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-100 dark:border-slate-800 space-y-5 text-start">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <Paperclip size={18} className="text-[#00594C]" />
            <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white">
              مرفقات إجابة الطالب ({studentAttachments.length} ملفات)
            </h3>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
            <GraduationCap size={13} />
            <span>ملفات الطالب (attachments)</span>
          </span>
        </div>
        {studentAttachments.length === 0 ? (
          <div className="rounded-2xl p-6 bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-700/60 text-center text-xs text-slate-400 font-semibold">
            لم يقم الطالب بإرفاق أي ملفات في هذا التسليم
          </div>
        ) : (
          <div className="space-y-3">
            {studentAttachments.map((doc) => (
              <FileItemCard
                key={doc.id}
                doc={doc}
                roleLabel="مرفق من الطالب"
                roleBadgeClass="bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-200/80"
                onSelect={(d) => setSelectedPreviewDoc(d)}
                onOpen={handleOpenFile}
              />
            ))}
          </div>
        )}
      </div>

      {/* قسم ملفات الواجب المرفقة من المعلم (documents) */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-100 dark:border-slate-800 space-y-5 text-start">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <BookOpen size={18} className="text-blue-600" />
            <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white">
              ملفات الواجب المرفقة من المعلم ({teacherDocuments.length} ملفات)
            </h3>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
            <FileText size={13} />
            <span>ملفات المعلم (documents)</span>
          </span>
        </div>
        {teacherDocuments.length === 0 ? (
          <div className="rounded-2xl p-6 bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-700/60 text-center text-xs text-slate-400 font-semibold">
            لا توجد ملفات مرفقة مع هذا الواجب من قِبل المعلم
          </div>
        ) : (
          <div className="space-y-3">
            {teacherDocuments.map((doc) => (
              <FileItemCard
                key={doc.id}
                doc={doc}
                roleLabel="ملف الواجب (المعلم)"
                roleBadgeClass="bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300 border border-blue-200/80"
                onSelect={(d) => setSelectedPreviewDoc(d)}
                onOpen={handleOpenFile}
              />
            ))}
          </div>
        )}
      </div>

      {/* صندوق المعاينة السريعة */}
      {activePreviewDoc && (
        <div className="rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700 p-6 text-center space-y-3 bg-slate-50/50 dark:bg-slate-850/30 text-start">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center shrink-0">
                <FileText size={20} />
              </div>
              <div>
                <h5 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white">
                  معاينة الملف: {activePreviewDoc.name}
                </h5>
                <p className="text-[11px] text-slate-400">
                  {activePreviewDoc.size}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => handleOpenFile(activePreviewDoc.url)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#00594C] hover:bg-[#00473c] text-white text-xs font-bold transition shadow-xs cursor-pointer self-start sm:self-auto"
            >
              <ExternalLink size={14} />
              <span>فتح الملف في نافذة جديدة</span>
            </button>
          </div>
        </div>
      )}

      {audioRecordings.length > 0 && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-100 dark:border-slate-800 space-y-5 text-start">
          <div className="flex items-center gap-2">
            <Mic size={18} className="text-[#00594C]" />
            <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white">
              التسجيلات الصوتية ({audioRecordings.length} تسجيلات)
            </h3>
          </div>
          <div className="space-y-3">
            {audioRecordings.map((audio) => {
            const isPlaying = playingAudioId === audio.id;
            return (
              <div
                key={audio.id}
                className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-slate-100 dark:border-slate-700/60"
              >
                <div className="flex items-center gap-3.5 flex-1">
                  <button
                    type="button"
                    onClick={() => togglePlayAudio(audio.id)}
                    className="w-10 h-10 rounded-full bg-[#d2ede6] hover:bg-[#bce4da] text-[#00594C] flex items-center justify-center transition shrink-0 cursor-pointer shadow-xs"
                  >
                    {isPlaying ? <Pause size={18} /> : <Play size={18} className="ms-0.5" />}
                  </button>
                  <div className="space-y-1 text-start flex-1 min-w-0">
                    <h5 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white truncate">
                      {audio.title}
                    </h5>
                    <div className="flex items-center gap-1 h-4 pt-1" dir="ltr">
                      {[12, 18, 24, 16, 28, 32, 20, 14, 26, 30, 22, 16, 24, 18, 12].map(
                        (h, idx) => (
                          <div
                            key={idx}
                            style={{ height: `${h}px` }}
                            className={`w-1 rounded-full transition-all ${
                              isPlaying
                                ? 'bg-[#00594C] animate-pulse'
                                : 'bg-teal-200 dark:bg-teal-800'
                            }`}
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 self-end sm:self-center text-xs text-slate-400 font-semibold">
                  <div className="text-end">
                    <span className="font-mono block">{audio.duration}</span>
                    <span className="text-[10px] text-slate-400">{audio.size}</span>
                  </div>
                  <button
                    type="button"
                    className="p-2 rounded-xl text-slate-400 hover:text-[#00594C] hover:bg-slate-100 dark:hover:bg-slate-700 transition"
                    title="تنزيل التسجيل الصوتي"
                  >
                    <Download size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      )}
      {quizQuestions.length > 0 && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-100 dark:border-slate-800 space-y-5 text-start">
          <div className="flex items-center justify-between">
            <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white">
              أسئلة الاختبار القصير وإجابات الطالب
            </h3>
            <span className="text-xs text-slate-400 font-semibold">
              حدد صحة أو خطأ كل إجابة
            </span>
          </div>
          <div className="space-y-4">
            {quizQuestions.map((q, idx) => {
              const isCorrect = isQuestionResultCorrect(q);
              return (
                <div
                  key={q.id}
                  className="rounded-2xl p-4 bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 space-y-3"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-[#00594C]">
                        السؤال {idx + 1} ({q.points || 5} درجات)
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white">
                        {q.question}
                      </h4>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      {canEvaluate ? (
                        <>
                          <button
                            type="button"
                            onClick={() => toggleQuestionCorrect(q.id, q.isCorrect !== false)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1 ${
                              isCorrect
                                ? 'bg-emerald-600 text-white shadow-xs'
                                : 'bg-slate-200 dark:bg-slate-700 text-slate-600'
                            }`}
                          >
                            <CheckCircle2 size={13} />
                            <span>صح</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => toggleQuestionCorrect(q.id, q.isCorrect !== false)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1 ${
                              !isCorrect
                                ? 'bg-rose-600 text-white shadow-xs'
                                : 'bg-slate-200 dark:bg-slate-700 text-slate-600'
                            }`}
                          >
                            <XCircle size={13} />
                            <span>خطأ</span>
                          </button>
                        </>
                      ) : (
                        <span
                          className={`px-3 py-1 rounded-xl text-xs font-bold flex items-center gap-1.5 border ${
                            isCorrect
                              ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
                              : 'bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800'
                          }`}
                        >
                          {isCorrect ? <CheckCircle2 size={13} /> : <XCircle size={13} />}
                          <span>{isCorrect ? 'إجابة صحيحة' : 'إجابة خاطئة'}</span>
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="rounded-xl p-3 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700/80 text-xs">
                    <span className="font-bold text-slate-500 block mb-1">
                      إجابة الطالب:
                    </span>
                    <p className="font-semibold text-slate-800 dark:text-slate-100">
                      {q.studentAnswer || 'لم يتم تقديم إجابة'}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {isEvaluated ? (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-100 dark:border-slate-800 space-y-6 text-start">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div className="flex items-center gap-2">
              <Star size={20} className="text-amber-500 fill-amber-500" />
              <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white">
                تقييم الواجب (معتمد)
              </h3>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300">
              <CheckCircle2 size={14} />
              <span>تم التقييم بنجاح</span>
            </span>
          </div>
          <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-800/40 flex items-center gap-3 text-xs font-semibold text-emerald-900 dark:text-emerald-200">
            <CheckCircle2 size={18} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>تم تقييم هذا الواجب واعتماده مسبقاً من قِبل المعلم، ولا يمكن إعادة تعديل التقييم.</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center text-center space-y-2">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                الدرجة المعتمدة
              </span>
              <div className="text-4xl sm:text-5xl font-black text-[#00594C] dark:text-emerald-400 tracking-tight">
                {liveData.grade ?? submission?.grade ?? (grade !== '' ? grade : 0)}
                <span className="text-lg font-bold text-slate-400 dark:text-slate-500 mr-1.5">/ 100</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-400">
                النسبة المئوية: {liveData.grade ?? submission?.grade ?? (grade !== '' ? grade : 0)}%
              </span>
            </div>
            <div className="lg:col-span-2 p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 flex flex-col justify-between space-y-3">
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 block">
                  ملاحظات وتغذية راجعة من المعلم
                </span>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-relaxed whitespace-pre-line">
                  {teacherNotes || liveData.teacherNotes || submission?.teacherNotes || 'تم رصد الدرجة بنجاح دون إضافة ملاحظات نصية إضافية.'}
                </p>
              </div>
              {(liveData.evaluatedAt || submission?.evaluatedAt) && (
                <span className="text-[11px] text-slate-400 block pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
                  تاريخ التقييم: {new Date(liveData.evaluatedAt || submission?.evaluatedAt).toLocaleDateString(isRtl ? 'ar-EG' : 'en-US')}
                </span>
              )}
            </div>
          </div>
        </div>
      ) : !canEvaluate ? (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-100 dark:border-slate-800 space-y-4 text-start">
          <div className="flex items-center gap-2">
            <Star size={20} className="text-slate-400" />
            <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white">
              التقييم
            </h3>
          </div>
          <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40 flex items-center gap-3 text-xs font-semibold text-amber-900 dark:text-amber-200">
            <AlertCircle size={18} className="text-amber-600 dark:text-amber-400 shrink-0" />
            <span>
              لا يمكن تقييم هذا الواجب حالياً لأن الطالب لم يقم بالتسليم بعد (حالة التسليم: {statusBadge.label}). يمكن التقييم فقط بعد قيام الطالب بتسليم الواجب (submitted أو submitted_late).
            </span>
          </div>
        </div>
      ) : (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-100 dark:border-slate-800 space-y-6 text-start">
          <div className="flex items-center gap-2">
            <Star size={20} className="text-amber-500 fill-amber-500" />
            <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white">
              التقييم
            </h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="block text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300">
                  الدرجة (من 100)
                </label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  placeholder="---"
                  className="w-full text-center py-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-2xl font-black text-slate-800 dark:text-white focus:outline-none focus:border-[#00594C] transition"
                />
              </div>
              <div className="space-y-2 pt-1">
                {quickGrades.map((row, rIdx) => (
                  <div key={rIdx} className="grid grid-cols-3 gap-2.5">
                    {row.map((score) => {
                      const isSelected = Number(grade) === score;
                      return (
                        <button
                          type="button"
                          key={score}
                          onClick={() => setGrade(score)}
                          className={`py-3 rounded-2xl text-xs sm:text-sm font-bold transition cursor-pointer border ${
                            isSelected
                              ? 'bg-[#00594C] text-white border-[#00594C] shadow-xs'
                              : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          {score}
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={handleSaveEvaluation}
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-2xl bg-[#00594C] hover:bg-[#00473c] text-white text-sm sm:text-base font-bold transition flex items-center justify-center gap-2 shadow-xs disabled:opacity-70 cursor-pointer mt-3"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>جاري حفظ التقييم...</span>
                  </>
                ) : (
                  <>
                    <Star size={18} className="fill-white" />
                    <span>حفظ التقييم</span>
                  </>
                )}
              </button>
            </div>
            <div className="space-y-1.5 h-full flex flex-col">
              <label className="block text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300">
                الملاحظات
              </label>
              <textarea
                value={teacherNotes}
                onChange={(e) => setTeacherNotes(e.target.value)}
                rows={10}
                placeholder="اكتب تغذية راجعة للطالب..."
                className="w-full flex-1 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-[#00594C] transition resize-none min-h-[220px]"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
