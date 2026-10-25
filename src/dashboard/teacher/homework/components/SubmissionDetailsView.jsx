import { useState, useMemo } from 'react';
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
 } from 'lucide-react';
import toast from 'react-hot-toast';
import { teacherHomeworkApi } from '@/shared/services/api/teacherHomeworkApi.js';

export default function SubmissionDetailsView({
  submission,
  onBack,
  currentTimeStr,
  currentDateStr,
}) {
  const { i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const queryClient = useQueryClient();

  const submissionId = submission?.id;

  const { data: detailsRes, isLoading } = useQuery({
    queryKey: ['teacher-submission-details', submissionId],
    queryFn: () => teacherHomeworkApi.fetchSubmissionDetails(submissionId),
    enabled: Boolean(submissionId),
    staleTime: 60 * 1000,
  });

  const liveData = detailsRes?.data || submission || {};

  const studentName =
    typeof liveData.student === 'object'
      ? liveData.student?.name || 'أحمد محمد علي'
      : liveData.student || 'أحمد محمد علي';

  const homeworkTitle =
    typeof liveData.homework === 'object'
      ? liveData.homework?.title || 'واجب أحكام المد والقصر'
      : liveData.homework || 'واجب أحكام المد والقصر';

  const groupName =
    typeof liveData.group === 'object'
      ? liveData.group?.name || 'مجموعة التجويد الأولى'
      : liveData.group || 'مجموعة التجويد الأولى';

  const rawStatus = (liveData.rawSubmissionStatus || submission?.rawSubmissionStatus || 'pending').toLowerCase();
  const rawEval = (liveData.rawEvaluationStatus || submission?.rawEvaluationStatus || 'pending').toLowerCase();
  const isEvaluated = rawEval === 'evaluated' || (liveData.grade !== null && liveData.grade !== undefined);

  const statusBadge = useMemo(() => {
    if (isEvaluated) {
      return {
        label: `تم التقييم ${liveData.grade || 88}%`,
        className: 'bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300',
        icon: CheckCircle2,
      };
    }
    if (rawStatus === 'overdue') {
      return {
        label: 'متأخر',
        className: 'bg-rose-50 text-rose-700 border border-rose-200 dark:bg-rose-950/40 dark:text-rose-300',
        icon: AlertCircle,
      };
    }
    return {
      label: 'في الانتظار',
      className: 'bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-950/40 dark:text-amber-300',
      icon: Clock,
    };
  }, [isEvaluated, rawStatus, liveData.grade]);

  const attachedDocuments = useMemo(() => {
    if (Array.isArray(liveData.documents) && liveData.documents.length > 0) {
      return liveData.documents;
    }
    return [
      {
        id: 'doc-1',
        name: 'أحكام_المد_والقصر.pdf',
        size: '1.2 MB',
        pages: '4 صفحات',
        type: 'pdf',
        url: '#',
      },
      {
        id: 'doc-2',
        name: 'جدول_المراجعة.docx',
        size: '340 KB',
        pages: '',
        type: 'docx',
        url: '#',
      },
    ];
  }, [liveData.documents]);

  const [selectedPreviewDoc, setSelectedPreviewDoc] = useState(attachedDocuments[0]);

  const audioRecordings = useMemo(() => {
    if (Array.isArray(liveData.audioRecordings) && liveData.audioRecordings.length > 0) {
      return liveData.audioRecordings;
    }
    return [
      {
        id: 'aud-1',
        title: 'تلاوة_سورة_البقرة_الآيات_1-5.mp3',
        duration: '2:34',
        size: '3.1 MB',
        url: '',
      },
      {
        id: 'aud-2',
        title: 'تلاوة_سورة_البقرة_الآيات_1-5.mp3',
        duration: '2:34',
        size: '3.1 MB',
        url: '',
      },
    ];
  }, [liveData.audioRecordings]);

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
      liveData.homework?.questions;
    if (Array.isArray(list) && list.length > 0) {
      return list;
    }
    return [
      {
        id: 'q-1',
        question: 'ما هو حكم النون الساكنة إذا جاء بعدها حرف الياء؟',
        type: 'multiple_choice',
        points: 5,
        studentAnswer: 'إدغام بغنة',
        isCorrect: true,
      },
      {
        id: 'q-2',
        question: 'اشرح باختصار الفرق بين المد الطبيعي والمد الفرعي مع ذكر مثال.',
        type: 'essay',
        points: 10,
        studentAnswer:
          'المد الطبيعي هو الذي لا تقوم ذات الحرف إلا به، أما الفرعي فيتوقف على سبب همز أو سكون.',
        isCorrect: true,
      },
    ];
  }, [liveData]);

  const [questionResults, setQuestionResults] = useState(() => {
    const init = {};
    quizQuestions.forEach((q) => {
      init[q.id] = q.isCorrect !== false;
    });
    return init;
  });

  const toggleQuestionCorrect = (qId) => {
    setQuestionResults((prev) => ({
      ...prev,
      [qId]: !prev[qId],
    }));
  };

  const [grade, setGrade] = useState(liveData.grade ?? 85);
  const [teacherNotes, setTeacherNotes] = useState(
    liveData.teacherNotes || ''
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const quickGrades = [
    [70, 65, 60],
    [85, 80, 75],
    [100, 95, 90],
  ];

  const handleSaveEvaluation = async () => {
    if (grade === '' || isNaN(Number(grade))) {
      toast.error('يرجى تحديد درجة صحيحة للطالب');
      return;
    }

    setIsSubmitting(true);

    try {
      const evaluatedQuestions = quizQuestions.map((q) => ({
        questionId: q.id,
        isCorrect: Boolean(questionResults[q.id]),
        earnedPoints: questionResults[q.id] ? q.points || 5 : 0,
        teacherFeedback: '',
      }));

      const payload = {
        grade: Number(grade),
        teacherNotes: teacherNotes.trim(),
        questions: evaluatedQuestions,
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
    <div className="space-y-6 max-w-7xl mx-auto pb-16" dir="rtl">
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
            {currentTimeStr}
          </span>

          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-semibold">
            <Calendar size={14} className="text-slate-400" />
            <span>{currentDateStr}</span>
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
                منذ ساعتين
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

        <div className="rounded-2xl p-4 bg-[#fffbeb] border border-[#fef3c7] dark:bg-amber-950/20 dark:border-amber-900/30 text-start space-y-1">
          <div className="text-xs font-bold text-[#b45309] dark:text-amber-400 flex items-center gap-1.5">
            <span>ملاحظة من الطالب</span>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-[#92400e] dark:text-amber-300">
            أرجو مراجعة التلاوة والتأكد من صحة تطبيق أحكام المد
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-100 dark:border-slate-800 space-y-5 text-start">
        <div className="flex items-center gap-2">
          <FileText size={18} className="text-[#00594C]" />
          <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white">
            الملفات المرفقة ({attachedDocuments.length} ملفات)
          </h3>
        </div>

        <div className="space-y-3">
          {attachedDocuments.map((doc) => {
            const isPdf = doc.name.endsWith('.pdf');
            return (
              <div
                key={doc.id}
                onClick={() => setSelectedPreviewDoc(doc)}
                className="bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100/70 dark:hover:bg-slate-800 rounded-2xl p-4 flex items-center justify-between gap-4 border border-slate-100 dark:border-slate-700/60 transition cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isPdf
                        ? 'bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400'
                        : 'bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400'
                    }`}
                  >
                    <FileText size={20} />
                  </div>

                  <div className="text-start">
                    <h5 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white">
                      {doc.name}
                    </h5>
                    <p className="text-[11px] text-slate-400 font-semibold">
                      {doc.size} {doc.pages ? `• ${doc.pages}` : ''}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-700 text-xs font-bold text-slate-600 dark:text-slate-200 border border-slate-200 dark:border-slate-600 hover:border-[#00594C] transition"
                >
                  معاينة
                </button>
              </div>
            );
          })}
        </div>

        <div className="rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700 p-8 text-center space-y-2 bg-slate-50/40 dark:bg-slate-800/20">
          <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center mx-auto">
            <FileText size={24} />
          </div>
          <div className="text-sm font-bold text-slate-700 dark:text-slate-300">
            معاينة الملف: {selectedPreviewDoc?.name}
          </div>
          <p className="text-xs text-slate-400">
            اضغط على &quot;معاينة&quot; لعرض محتوى الملف كاملاً أو تنزيله
          </p>
        </div>
      </div>

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
              const isCorrect = Boolean(questionResults[q.id]);
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
                      <button
                        type="button"
                        onClick={() => toggleQuestionCorrect(q.id)}
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
                        onClick={() => toggleQuestionCorrect(q.id)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1 ${
                          !isCorrect
                            ? 'bg-rose-600 text-white shadow-xs'
                            : 'bg-slate-200 dark:bg-slate-700 text-slate-600'
                        }`}
                      >
                        <XCircle size={13} />
                        <span>خطأ</span>
                      </button>
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
    </div>
  );
}
