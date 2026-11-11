import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, FileText, User, GraduationCap, Users, Calendar, Clock, MessageSquare, HelpCircle, CheckCircle, AlertCircle } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { parentApi } from '@/shared/services/api/parentApi';

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 320, damping: 26 } }
};

function formatDate(dateStr, isRtl) {
  if (!dateStr) return '-';
  try {
    const d = new Date(dateStr);
    if (!isNaN(d.getTime())) {
      return new Intl.DateTimeFormat(isRtl ? 'ar-EG-u-ca-gregory' : 'en-GB-u-ca-gregory', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }).format(d);
    }
  } catch {
    return dateStr;
  }
  return dateStr;
}

export default function ParentAssignmentDetails() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const navigate = useNavigate();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [submission, setSubmission] = useState(null);
  const answersMap = useMemo(() => {
    const map = {};
    const rawList = Array.isArray(submission?.answers)
      ? submission.answers
      : (Array.isArray(submission?.submission?.answers)
        ? submission.submission.answers
        : (Array.isArray(submission?.solution?.answers) ? submission.solution.answers : []));
    rawList.forEach((ans) => {
      if (ans && typeof ans === 'object') {
        const qId = String(ans.questionId || ans.id || ans.question || ans._id || '').trim();
        if (qId) {
          map[qId] = {
            selectedOptionIndex: ans.selectedOptionIndex !== undefined && ans.selectedOptionIndex !== null
              ? Number(ans.selectedOptionIndex)
              : (ans.selectedOption !== undefined && ans.selectedOption !== null ? Number(ans.selectedOption) : null),
            answerText: ans.answerText || ans.textAnswer || ans.text || (ans.selectedOptionIndex === null && ans.selectedOption === null ? ans.answer : null),
            isCorrect: ans.isCorrect !== undefined ? ans.isCorrect : null,
            earnedPoints: ans.earnedPoints !== undefined && ans.earnedPoints !== null ? Number(ans.earnedPoints) : null,
            teacherFeedback: ans.teacherFeedback || ans.feedback || null
          };
        }
      }
    });
    return map;
  }, [submission]);
  const studentTextAnswer = useMemo(() => {
    return (
      submission?.textAnswer ||
      submission?.answerText ||
      submission?.submission?.textAnswer ||
      submission?.submission?.answerText ||
      submission?.solution?.textAnswer ||
      submission?.solution?.answerText ||
      ''
    ).trim();
  }, [submission]);
  const studentAttachments = useMemo(() => {
    const rawList = [];
    const directList = (Array.isArray(submission?.attachments) && submission.attachments) ||
      (Array.isArray(submission?.submission?.attachments) && submission.submission.attachments) ||
      (Array.isArray(submission?.solution?.attachments) && submission.solution.attachments) ||
      (Array.isArray(submission?.studentAttachments) && submission.studentAttachments) ||
      (Array.isArray(submission?.submittedAttachments) && submission.submittedAttachments) ||
      [];
    rawList.push(...directList);
    if (Array.isArray(submission?.submittedFiles)) {
      rawList.push(...submission.submittedFiles);
    }
    if (submission?.submittedFile) {
      rawList.push(submission.submittedFile);
    }
    if (submission?.submission?.submittedFile) {
      rawList.push(submission.submission.submittedFile);
    }
    if (Array.isArray(submission?.answers)) {
      submission.answers.forEach((ans) => {
        if (Array.isArray(ans?.attachments) && ans.attachments.length > 0) {
          rawList.push(...ans.attachments);
        }
      });
    }
    return rawList.map((att, idx) => {
      if (!att) return null;
      if (typeof att === 'string') {
        const rawName = decodeURIComponent(att.split('/').pop()?.split('?')[0] || `ملف_مرفق_${idx + 1}`);
        const isPdf = rawName.endsWith('.pdf');
        return {
          id: `student-att-${idx}`,
          name: rawName,
          url: att,
          size: t('parent.assignments.attachedFile', 'ملف مرفق'),
          isPdf,
        };
      }
      if (typeof att === 'object') {
        const rawUrl = att.url || att.fileUrl || att.path || '#';
        const rawName = decodeURIComponent(att.name || att.fileName || (typeof rawUrl === 'string' ? rawUrl.split('/').pop()?.split('?')[0] : '') || `ملف_مرفق_${idx + 1}`);
        const isPdf = rawName.endsWith('.pdf') || att.type === 'pdf';
        return {
          id: att.id || att._id || `student-att-${idx}`,
          name: rawName,
          url: rawUrl,
          size: att.size || att.fileSize || t('parent.assignments.attachedFile', 'ملف مرفق'),
          isPdf,
        };
      }
      return null;
    }).filter(Boolean);
  }, [submission, t]);
  const teacherAttachmentsList = useMemo(() => {
    const list = [];
    const docUrl = submission?.document || submission?.homework?.document || null;
    const mediaUrl = submission?.media || submission?.homework?.media || null;
    if (docUrl) {
      const docName = decodeURIComponent(docUrl.split('/').pop()?.split('?')[0] || t('parent.assignments.documentFile', 'ملف الواجب المرفق'));
      list.push({
        id: 'teacher-doc',
        name: `${t('parent.assignments.documentFile', 'ملف الواجب المرفق')}: ${docName}`,
        url: docUrl,
        isPdf: docUrl.endsWith('.pdf'),
      });
    }
    if (mediaUrl) {
      const mediaName = decodeURIComponent(mediaUrl.split('/').pop()?.split('?')[0] || t('parent.assignments.mediaFile', 'الملف الصوتي / المرئي'));
      list.push({
        id: 'teacher-media',
        name: `${t('parent.assignments.mediaFile', 'الملف الصوتي / المرئي')}: ${mediaName}`,
        url: mediaUrl,
        isPdf: false,
      });
    }
    const extraTeacher = (Array.isArray(submission?.homework?.attachments) && submission.homework.attachments) ||
      (Array.isArray(submission?.teacherAttachments) && submission.teacherAttachments) ||
      [];
    extraTeacher.forEach((att, idx) => {
      if (!att) return;
      if (typeof att === 'string') {
        const rawName = decodeURIComponent(att.split('/').pop()?.split('?')[0] || `ملف_واجب_${idx + 1}`);
        list.push({
          id: `hw-att-${idx}`,
          name: rawName,
          url: att,
          isPdf: rawName.endsWith('.pdf'),
        });
      } else if (typeof att === 'object') {
        const rawUrl = att.url || att.fileUrl || att.path || '#';
        const rawName = decodeURIComponent(att.name || att.fileName || (typeof rawUrl === 'string' ? rawUrl.split('/').pop()?.split('?')[0] : '') || `ملف_واجب_${idx + 1}`);
        list.push({
          id: att.id || att._id || `hw-att-${idx}`,
          name: rawName,
          url: rawUrl,
          isPdf: rawName.endsWith('.pdf') || att.type === 'pdf',
        });
      }
    });
    return list;
  }, [submission, t]);
  useEffect(() => {
    let isMounted = true;
    const loadSubmission = async () => {
      setIsLoading(true);
      try {
        const res = await parentApi.fetchHomeworkSubmission(id);
        if (isMounted && res?.success && res.data) {
          setSubmission(res.data);
        }
      } catch (err) {
        console.error('Failed to load homework submission', err);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };
    if (id) {
      loadSubmission();
    }
    return () => { isMounted = false; };
  }, [id]);
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="p-4 md:p-8 max-w-7xl mx-auto space-y-6 font-sans min-h-screen relative"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <motion.div variants={itemVariants} className="flex justify-between items-center mb-2">
        <button
          type="button"
          onClick={() => navigate('/dashboard/parent/assignments')}
          className="flex items-center gap-2 text-[#0f7a6c] hover:text-[#0c6358] font-bold text-sm bg-white dark:bg-slate-800 px-4 py-2.5 rounded-2xl shadow-xs border border-slate-100 dark:border-slate-800 transition-colors"
        >
          <ArrowRight className={`w-4 h-4 ${isRtl ? '' : 'rotate-180'}`} />
          <span>{t('parent.assignments.back', 'الرجوع إلى الواجبات')}</span>
        </button>
      </motion.div>
      {isLoading ? (
        <div className="flex justify-center items-center py-24">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#0f7a6c]" />
        </div>
      ) : submission ? (
        <>
          <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-8 shadow-xs border border-slate-100 dark:border-slate-800 transition-colors">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3 flex-wrap">
                  <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                    {submission.homework}
                  </h1>
                  {submission.submissionStatus && (
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                      {submission.submissionStatus}
                    </span>
                  )}
                  {submission.evaluationStatus && (
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300">
                      {submission.evaluationStatus}
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-[#0f7a6c] shrink-0" />
                    <span>{t('parent.assignments.group', 'المجموعة')}: <strong className="text-slate-700 dark:text-slate-200">{submission.group}</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <User className="w-4 h-4 text-[#0f7a6c] shrink-0" />
                    <span>{t('parent.assignments.student', 'الطالب')}: <strong className="text-slate-700 dark:text-slate-200">{submission.student}</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-[#0f7a6c] shrink-0" />
                    <span>{t('parent.assignments.teacher', 'المعلم')}: <strong className="text-slate-700 dark:text-slate-200">{submission.teacher}</strong></span>
                  </div>
                </div>
              </div>
              {submission.grade !== null && submission.grade !== undefined && (
                <div className="flex flex-col items-center bg-emerald-50 dark:bg-emerald-950/40 px-6 py-4 rounded-3xl border border-emerald-100 dark:border-emerald-800/40 shrink-0">
                  <div className="flex items-center gap-1.5 mb-1 text-emerald-600">
                    <Star className="w-4 h-4 fill-emerald-600" />
                    <span className="text-xs font-bold">{t('parent.assignments.grade', 'الدرجة')}</span>
                  </div>
                  <div className="text-3xl font-extrabold text-emerald-600 flex items-baseline">
                    {submission.grade}<span className="text-sm text-emerald-500 font-medium"> / 100</span>
                  </div>
                </div>
              )}
            </div>
            <div className="border-t border-slate-100 dark:border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-900/60 px-6 py-3 rounded-2xl w-full sm:w-auto">
                <Calendar className="w-4 h-4 text-emerald-500" />
                <div className="text-start">
                  <span className="text-[10px] font-bold text-slate-400 block">{t('parent.assignments.submittedAt', 'تاريخ التسليم')}</span>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">{formatDate(submission.submittedAt, isRtl)}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-900/60 px-6 py-3 rounded-2xl w-full sm:w-auto">
                <Clock className="w-4 h-4 text-amber-500" />
                <div className="text-start">
                  <span className="text-[10px] font-bold text-slate-400 block">{t('parent.assignments.deadline', 'الموعد النهائي')}</span>
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-200">{formatDate(submission.deadline, isRtl)}</span>
                </div>
              </div>
            </div>
          </motion.div>
          {submission.description && (
            <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-8 shadow-xs border border-slate-100 dark:border-slate-800">
              <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-3">
                {t('parent.assignments.description', 'وصف الواجب')}
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                {submission.description}
              </p>
            </motion.div>
          )}
          {Boolean(studentTextAnswer || studentAttachments.length > 0) && (
            <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-8 shadow-xs border border-slate-100 dark:border-slate-800 space-y-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#0f7a6c]" />
                <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                  {t('parent.assignments.studentSubmission', 'إجابة الطالب والحل المسلم')}
                </h2>
              </div>
              {studentTextAnswer && (
                <div className="bg-slate-50 dark:bg-slate-900/60 p-4 sm:p-5 rounded-2xl border border-slate-100 dark:border-slate-800/80 space-y-1">
                  <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 block mb-1">
                    {t('parent.assignments.textAnswerLabel', 'الإجابة النصية:')}
                  </span>
                  <p className="text-sm text-slate-800 dark:text-slate-200 font-medium leading-relaxed whitespace-pre-wrap">
                    {studentTextAnswer}
                  </p>
                </div>
              )}
              {studentAttachments.length > 0 && (
                <div className="space-y-2 pt-1">
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 block">
                    {t('parent.assignments.uploadedAttachments', 'الملفات والمرفقات التي رفعها الطالب:')}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {studentAttachments.map((att) => (
                      <div
                        key={att.id}
                        className="bg-slate-50 dark:bg-slate-900/60 p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                            att.isPdf
                              ? 'bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400'
                              : 'bg-emerald-50 text-[#0f7a6c] dark:bg-emerald-950/40 dark:text-emerald-400'
                          }`}>
                            <FileText className="w-4 h-4" />
                          </div>
                          <div className="min-w-0 text-start">
                            <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block truncate">
                              {att.name}
                            </span>
                            <span className="text-[10px] text-slate-400">
                              {att.size}
                            </span>
                          </div>
                        </div>
                        {att.url && att.url !== '#' && (
                          <a
                            href={att.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 bg-[#0f7a6c] hover:bg-[#0c6358] text-white rounded-xl text-xs font-bold transition-colors shrink-0 cursor-pointer"
                          >
                            {t('parent.assignments.download', 'تحميل / فتح')}
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}
          {Array.isArray(submission.questions) && submission.questions.length > 0 && (
            <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-8 shadow-xs border border-slate-100 dark:border-slate-800 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#0f7a6c]" />
                  <span>{t('parent.assignments.questions', 'أسئلة الواجب')}</span>
                </h2>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300">
                  {submission.questions.length} {t('parent.assignments.questionsCount', 'أسئلة')}
                </span>
              </div>
              <div className="space-y-4">
                {submission.questions.map((q, qIdx) => {
                  const qId = String(q.id || q._id || q.questionId || `q-${qIdx}`).trim();
                  const ans = answersMap[qId] || null;
                  const isMcq = (Array.isArray(q.options) && q.options.length > 0) || q.type === 'multiple_choice';
                  return (
                    <div key={q.id || qIdx} className="bg-slate-50 dark:bg-slate-900/60 rounded-2xl p-5 border border-slate-100 dark:border-slate-800/80 space-y-3">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-2.5">
                          <span className="w-6 h-6 rounded-full bg-[#0f7a6c] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                            {qIdx + 1}
                          </span>
                          <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 leading-relaxed">
                            {q.questionText}
                          </h4>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          {ans?.isCorrect === true && (
                            <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 flex items-center gap-1">
                              <CheckCircle size={12} />
                              <span>{t('parent.assignments.correctAnswer', 'إجابة صحيحة')}</span>
                            </span>
                          )}
                          {ans?.isCorrect === false && (
                            <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300 flex items-center gap-1">
                              <AlertCircle size={12} />
                              <span>{t('parent.assignments.incorrectAnswer', 'إجابة خاطئة')}</span>
                            </span>
                          )}
                          {q.points && (
                            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400">
                              {ans?.earnedPoints !== null && ans?.earnedPoints !== undefined
                                ? `${ans.earnedPoints} / ${q.points} ${t('parent.assignments.points', 'درجات')}`
                                : `${q.points} ${t('parent.assignments.points', 'درجات')}`}
                            </span>
                          )}
                        </div>
                      </div>
                      {isMcq && Array.isArray(q.options) && q.options.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                          {q.options.map((opt, optIdx) => {
                            const isSelected = ans && ans.selectedOptionIndex !== null && ans.selectedOptionIndex === optIdx;
                            return (
                              <div
                                key={optIdx}
                                className={`p-3 rounded-xl border text-xs font-medium flex items-center justify-between gap-2 transition ${
                                  isSelected
                                    ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-700 text-emerald-800 dark:text-emerald-200 ring-2 ring-emerald-500 font-bold'
                                    : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                                }`}
                              >
                                <div className="flex items-center gap-2">
                                  <span className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 text-[10px] ${
                                    isSelected
                                      ? 'border-[#0f7a6c] bg-[#0f7a6c] text-white font-bold'
                                      : 'border-slate-300 dark:border-slate-600'
                                  }`}>
                                    {isSelected ? '✓' : ''}
                                  </span>
                                  <span>{opt}</span>
                                </div>
                                {isSelected && (
                                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300">
                                    {t('parent.assignments.studentAnswer', 'إجابة الطالب')}
                                  </span>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}
                      {!isMcq && (
                        <div className="pt-2 space-y-2">
                          <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium space-y-1">
                            <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 block mb-1">
                              {t('parent.assignments.studentAnswer', 'إجابة الطالب المسلمة')}:
                            </span>
                            <p className="font-semibold text-slate-800 dark:text-slate-100 whitespace-pre-wrap">
                              {ans?.answerText || t('parent.assignments.noAnswerProvided', 'لم يتم تقديم إجابة نصية.')}
                            </p>
                          </div>
                          {ans?.teacherFeedback && (
                            <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 text-xs">
                              <span className="font-bold text-amber-800 dark:text-amber-300 block mb-0.5">
                                {t('parent.assignments.teacherFeedback', 'ملاحظات المعلم على السؤال')}:
                              </span>
                              <p className="text-amber-900 dark:text-amber-200 font-medium">
                                {ans.teacherFeedback}
                              </p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
          {submission.teacherNotes && (
            <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-8 shadow-xs border border-slate-100 dark:border-slate-800">
              <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#0f7a6c]" />
                <span>{t('parent.assignments.teacherNotes', 'ملاحظات المعلم')}</span>
              </h2>
              <div className="bg-slate-50 dark:bg-slate-900/60 p-5 rounded-2xl border border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-[#0f7a6c] text-white flex items-center justify-center text-lg font-bold shrink-0">
                  {submission.teacher?.charAt(0) || 'م'}
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-800 dark:text-slate-200 text-sm">{submission.teacher}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                    {submission.teacherNotes}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
          {(teacherAttachmentsList.length > 0 || studentAttachments.length > 0) && (
            <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-8 shadow-xs border border-slate-100 dark:border-slate-800 space-y-6">
              <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#0f7a6c]" />
                <span>{t('parent.assignments.attachments', 'المرفقات والملفات')}</span>
              </h2>
              {studentAttachments.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 dark:text-emerald-400">
                    <CheckCircle className="w-4 h-4" />
                    <span>{t('parent.assignments.studentAttachmentsSection', 'مرفقات وحل الطالب (المرفوعة من الطالب):')}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {studentAttachments.map((att) => (
                      <div
                        key={att.id}
                        className="bg-slate-50 dark:bg-slate-900/60 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                            att.isPdf
                              ? 'bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400'
                              : 'bg-emerald-50 text-[#0f7a6c] dark:bg-emerald-950/40 dark:text-emerald-400'
                          }`}>
                            <FileText className="w-4 h-4" />
                          </div>
                          <div className="min-w-0 text-start">
                            <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block truncate">
                              {att.name}
                            </span>
                            <span className="text-[10px] text-slate-400">
                              {att.size}
                            </span>
                          </div>
                        </div>
                        {att.url && att.url !== '#' && (
                          <a
                            href={att.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3.5 py-1.5 bg-[#0f7a6c] hover:bg-[#0c6358] text-white rounded-xl text-xs font-bold transition-colors shrink-0 cursor-pointer"
                          >
                            {t('parent.assignments.download', 'تحميل المرفق')}
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {teacherAttachmentsList.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-300">
                    <GraduationCap className="w-4 h-4 text-[#0f7a6c]" />
                    <span>{t('parent.assignments.teacherAttachmentsSection', 'ملفات ومرفقات الواجب (المرسلة من المعلم):')}</span>
                  </div>
                  <div className="flex flex-col gap-3">
                    {teacherAttachmentsList.map((doc) => (
                      <div
                        key={doc.id}
                        className="flex flex-col sm:flex-row justify-between items-center bg-slate-50 dark:bg-slate-900/60 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 gap-4"
                      >
                        <div className="flex items-center gap-3">
                          <FileText className="w-6 h-6 text-[#0f7a6c]" />
                          <span className="font-bold text-sm text-slate-700 dark:text-slate-200">
                            {doc.name}
                          </span>
                        </div>
                        {doc.url && doc.url !== '#' && (
                          <a
                            href={doc.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2.5 bg-[#0f7a6c] hover:bg-[#0c6358] text-white rounded-xl text-xs font-bold transition-colors"
                          >
                            {t('parent.assignments.download', 'تحميل المرفق')}
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </>
      ) : (
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-12 text-center border border-slate-100 dark:border-slate-800 shadow-xs">
          <p className="text-slate-400 text-sm">
            {t('parent.assignments.notFound', 'لم يتم العثور على تفاصيل هذا الواجب.')}
          </p>
        </div>
      )}
    </motion.div>
  );
}
