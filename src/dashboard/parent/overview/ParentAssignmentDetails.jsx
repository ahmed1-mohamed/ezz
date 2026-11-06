import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, FileText, User, GraduationCap, Users, Calendar, Clock, MessageSquare, HelpCircle } from 'lucide-react';
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
                {submission.questions.map((q, qIdx) => (
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
                      {q.points && (
                        <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400 shrink-0">
                          {q.points} {t('parent.assignments.points', 'درجات')}
                        </span>
                      )}
                    </div>
                    {Array.isArray(q.options) && q.options.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                        {q.options.map((opt, optIdx) => (
                          <div
                            key={optIdx}
                            className="bg-white dark:bg-slate-800 p-3 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2"
                          >
                            <span className="w-4 h-4 rounded-full border border-slate-300 dark:border-slate-600 shrink-0" />
                            <span>{opt}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
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
          {(submission.document || submission.media || (Array.isArray(submission.attachments) && submission.attachments.length > 0)) && (
            <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-8 shadow-xs border border-slate-100 dark:border-slate-800">
              <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4">
                {t('parent.assignments.attachments', 'المرفقات والملفات')}
              </h2>
              <div className="flex flex-col gap-3">
                {submission.document && (
                  <div className="flex flex-col sm:flex-row justify-between items-center bg-slate-50 dark:bg-slate-900/60 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 gap-4">
                    <div className="flex items-center gap-3">
                      <FileText className="w-6 h-6 text-[#0f7a6c]" />
                      <span className="font-bold text-sm text-slate-700 dark:text-slate-200">
                        {t('parent.assignments.documentFile', 'ملف الواجب المرفق')}
                      </span>
                    </div>
                    <a
                      href={submission.document}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-[#0f7a6c] hover:bg-[#0c6358] text-white rounded-xl text-xs font-bold transition-colors"
                    >
                      {t('parent.assignments.download', 'تحميل / فتح')}
                    </a>
                  </div>
                )}
                {submission.media && (
                  <div className="flex flex-col sm:flex-row justify-between items-center bg-slate-50 dark:bg-slate-900/60 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 gap-4">
                    <div className="flex items-center gap-3">
                      <FileText className="w-6 h-6 text-[#0f7a6c]" />
                      <span className="font-bold text-sm text-slate-700 dark:text-slate-200">
                        {t('parent.assignments.mediaFile', 'الملف الصوتي / المرئي')}
                      </span>
                    </div>
                    <a
                      href={submission.media}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-[#0f7a6c] hover:bg-[#0c6358] text-white rounded-xl text-xs font-bold transition-colors"
                    >
                      {t('parent.assignments.download', 'تحميل / فتح')}
                    </a>
                  </div>
                )}
              </div>
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
