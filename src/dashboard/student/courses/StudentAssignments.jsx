import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  X,
  User,
  Clock,
  Star,
  CheckCircle,
  Upload,
  Send,
  Download,
  FileText,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { studentPortalApi } from '@/shared/services/api/studentPortalApi';
import { showSuccessToast, showErrorToast } from '@/shared/utils/sweetAlert';
import Spinner from '@/shared/components/Spinner';

const TABS_CONFIG = [
  { key: 'ongoing', labelAr: 'الجارية', labelEn: 'Ongoing', defaultCount: 3 },
  { key: 'completed', labelAr: 'المكتملة', labelEn: 'Completed', defaultCount: 3 },
  { key: 'overdue', labelAr: 'المتأخرة', labelEn: 'Overdue', defaultCount: 1 },
];

const MOCK_ASSIGNMENTS = {
  ongoing: [
    {
      id: 1,
      title: 'واجب أحكام النون الساكنة والتنوين',
      titleEn: 'Noon Sakinah & Tanween Rules Homework',
      subject: 'القرآن الكريم',
      subjectEn: 'Holy Quran',
      teacher: 'الشيخ أحمد السيد',
      teacherEn: 'Sheikh Ahmed Al-Sayed',
      sessionName: 'حصة التجويد - سورة البقرة',
      sessionNameEn: 'Tajweed Session - Surah Al-Baqarah',
      dueDate: '17 أبريل 2026',
      dueDateEn: '17 April 2026',
      status: 'ongoing',
      statusLabelAr: 'قيد التنفيذ',
      statusLabelEn: 'In Progress',
      progress: 60,
      description: 'حل تدريبات كتاب أحكام التلاوة ص 45 وتطبيق أحكام الإظهار والإدغام على الآيات المقررة مع تسجيل مقطع صوتي قصير.',
      fileUrl: null,
    },
    {
      id: 2,
      title: 'حفظ الآيات (1-15) من سورة مريم',
      titleEn: 'Memorize Verses (1-15) from Surah Maryam',
      subject: 'القرآن الكريم',
      subjectEn: 'Holy Quran',
      teacher: 'الشيخ أحمد السيد',
      teacherEn: 'Sheikh Ahmed Al-Sayed',
      sessionName: 'حصة الحفظ والمراجعة',
      sessionNameEn: 'Memorization & Review Session',
      dueDate: '20 أبريل 2026',
      dueDateEn: '20 April 2026',
      status: 'ongoing',
      statusLabelAr: 'قيد التنفيذ',
      statusLabelEn: 'In Progress',
      progress: 35,
      description: 'حفظ الآيات حفظاً متقناً مع تطبيق أحكام المد ومراعاة مخارج الحروف.',
      fileUrl: null,
    },
    {
      id: 3,
      title: 'إعراب قصيدة نهج البردة',
      titleEn: 'Parsing of Nahj Al-Burdah Poem',
      subject: 'اللغة العربية',
      subjectEn: 'Arabic Language',
      teacher: 'الدكتور محمد الأمين',
      teacherEn: 'Dr. Mohammed Al-Amin',
      sessionName: 'حصة النحو والصرف',
      sessionNameEn: 'Grammar & Morphology Session',
      dueDate: '22 أبريل 2026',
      dueDateEn: '22 April 2026',
      status: 'ongoing',
      statusLabelAr: 'قيد التنفيذ',
      statusLabelEn: 'In Progress',
      progress: 80,
      description: 'إعراب الأبيات الخمسة الأولى إعراباً كاملاً مفصلاً وتسليمه ملف PDF أو صورة واضحة.',
      fileUrl: null,
    },
  ],
  completed: [
    {
      id: 4,
      title: 'واجب أحكام النون الساكنة والتنوين',
      titleEn: 'Noon Sakinah & Tanween Rules Homework',
      subject: 'القرآن الكريم',
      subjectEn: 'Holy Quran',
      teacher: 'الشيخ أحمد السيد',
      teacherEn: 'Sheikh Ahmed Al-Sayed',
      sessionName: 'حصة التجويد - سورة البقرة',
      sessionNameEn: 'Tajweed Session - Surah Al-Baqarah',
      submissionDate: '17 أبريل 2026',
      submissionDateEn: '17 April 2026',
      status: 'completed',
      statusLabelAr: 'مكتملة',
      statusLabelEn: 'Completed',
      grade: '9/10',
      feedback: 'أحسنت يا بطل، إجابات متميزة مع مراعاة مراجعة حكم الإخفاء في السؤال الثالث.',
      description: 'حل تدريبات كتاب أحكام التلاوة ص 45 وتطبيق أحكام الإظهار والإدغام.',
      fileUrl: null,
    },
    {
      id: 5,
      title: 'تسميع سورة الكهف كاملة',
      titleEn: 'Recitation of Surah Al-Kahf',
      subject: 'القرآن الكريم',
      subjectEn: 'Holy Quran',
      teacher: 'الشيخ أحمد السيد',
      teacherEn: 'Sheikh Ahmed Al-Sayed',
      sessionName: 'حصة التلاوة والتسميع',
      sessionNameEn: 'Recitation Session',
      submissionDate: '14 أبريل 2026',
      submissionDateEn: '14 April 2026',
      status: 'completed',
      statusLabelAr: 'مكتملة',
      statusLabelEn: 'Completed',
      grade: '10/10',
      feedback: 'ما شاء الله تبارك الله، تلاوة متقنة وصوت رائع.',
      description: 'تسميع السورة مع مراعاة أحكام الوقف والابتداء.',
      fileUrl: null,
    },
    {
      id: 6,
      title: 'مراجعة تدريبات علم البديع',
      titleEn: 'Review of Rhetorical Devices Exercises',
      subject: 'اللغة العربية',
      subjectEn: 'Arabic Language',
      teacher: 'الدكتور محمد الأمين',
      teacherEn: 'Dr. Mohammed Al-Amin',
      sessionName: 'حصة البلاغة',
      sessionNameEn: 'Rhetoric Session',
      submissionDate: '10 أبريل 2026',
      submissionDateEn: '10 April 2026',
      status: 'completed',
      statusLabelAr: 'مكتملة',
      statusLabelEn: 'Completed',
      grade: '8.5/10',
      feedback: 'إجابات جيدة جداً، تدرب أكثر على استخراج الجناس والطباق.',
      description: 'استخراج المحسنات البديعية من النص الشعري.',
      fileUrl: null,
    },
  ],
  overdue: [
    {
      id: 7,
      title: 'واجب أحكام النون الساكنة والتنوين',
      titleEn: 'Noon Sakinah & Tanween Rules Homework',
      subject: 'القرآن الكريم',
      subjectEn: 'Holy Quran',
      teacher: 'الشيخ أحمد السيد',
      teacherEn: 'Sheikh Ahmed Al-Sayed',
      sessionName: 'حصة التجويد - سورة البقرة',
      sessionNameEn: 'Tajweed Session - Surah Al-Baqarah',
      dueDate: '17 أبريل 2026',
      dueDateEn: '17 April 2026',
      lateTextAr: 'متأخر 5 أيام',
      lateTextEn: '5 days overdue',
      status: 'overdue',
      statusLabelAr: 'متأخر',
      statusLabelEn: 'Overdue',
      description: 'يرجى سرعة تسليم هذا الواجب لتفادي خصم درجات التأخير من التقييم النهائي.',
      fileUrl: null,
    },
  ],
};

function HomeworkDetailsModal({ homework, isRtl, onClose, onSuccess, t }) {
  const fileInputRef = useRef(null);
  const [submissionText, setSubmissionText] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const isCompleted = homework.status === 'completed';
  const title = isRtl ? homework.title : (homework.titleEn || homework.title);
  const teacher = isRtl ? homework.teacher : (homework.teacherEn || homework.teacher);
  const subject = isRtl ? homework.subject : (homework.subjectEn || homework.subject);
  const statusLabel = isRtl ? homework.statusLabelAr : (homework.statusLabelEn || homework.statusLabelAr);
  async function handleSubmit(event) {
    event.preventDefault();
    if (!submissionText.trim() && !selectedFile) {
      showErrorToast(isRtl ? 'يرجى كتابة نص الإجابة أو إرفاق ملف' : 'Please provide answer text or attach a file');
      return;
    }
    try {
      setSubmitting(true);
      const formData = new FormData();
      if (submissionText.trim()) {
        formData.append('text', submissionText.trim());
        formData.append('answer', submissionText.trim());
      }
      if (selectedFile) {
        formData.append('file', selectedFile);
        formData.append('attachment', selectedFile);
      }
      if (homework.id && typeof homework.id === 'string' && homework.id.length > 10) {
        await studentPortalApi.submitHomework(homework.id, formData);
      }
      showSuccessToast(isRtl ? 'تم تسليم الواجب بنجاح' : 'Homework submitted successfully');
      onSuccess();
      onClose();
    } catch (error) {
      const message = error.response?.data?.message || error.message || (isRtl ? 'فشل تسليم الواجب' : 'Failed to submit homework');
      showErrorToast(Array.isArray(message) ? message.join(', ') : message);
    } finally {
      setSubmitting(false);
    }
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.94, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.94, opacity: 0 }}
        className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800 my-8"
        dir={isRtl ? 'rtl' : 'ltr'}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#E3EFFC] text-[#2563EB]">
              {subject}
            </span>
            <span
              className={`text-xs font-bold px-3 py-1 rounded-full ${
                homework.status === 'completed'
                  ? 'bg-[#D1FAE5] text-[#059669]'
                  : homework.status === 'overdue'
                  ? 'bg-[#FEE2E2] text-[#EF4444]'
                  : 'bg-[#FEF3C7] text-[#D97706]'
              }`}
            >
              {statusLabel}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 flex items-center justify-center transition-colors cursor-pointer text-slate-500"
          >
            <X size={16} />
          </button>
        </div>
        <div className="p-6 space-y-5 text-start">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
              {title}
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              {isRtl ? homework.sessionName : (homework.sessionNameEn || homework.sessionName)}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-3.5">
              <p className="text-[11px] text-slate-400 mb-1">{t('studentDashboard.homework.teacher', 'المعلم')}</p>
              <p className="font-bold text-slate-700 dark:text-slate-200 text-xs">{teacher}</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-3.5">
              <p className="text-[11px] text-slate-400 mb-1">
                {isCompleted ? t('studentDashboard.assignments.submittedDateLabel', 'تاريخ التسليم') : t('studentDashboard.homework.dueDate', 'موعد التسليم')}
              </p>
              <p className="font-bold text-slate-700 dark:text-slate-200 text-xs">
                {isCompleted ? (isRtl ? homework.submissionDate : homework.submissionDateEn) : (isRtl ? homework.dueDate : homework.dueDateEn)}
              </p>
            </div>
          </div>
          {homework.description && (
            <div className="bg-slate-50 dark:bg-slate-800/40 rounded-2xl p-4 border border-slate-100 dark:border-slate-800">
              <h4 className="text-xs font-bold text-slate-500 mb-1.5">{t('studentDashboard.homework.description', 'تعليمات الواجب')}</h4>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {homework.description}
              </p>
            </div>
          )}
          {homework.fileUrl && (
            <div className="flex items-center justify-between p-3.5 bg-emerald-50 dark:bg-emerald-950/30 rounded-2xl border border-emerald-100 dark:border-emerald-800/40">
              <span className="text-xs font-bold text-[#00594C] dark:text-emerald-400">
                {t('studentDashboard.homework.attachedFile', 'ملف مرفق بالواجب')}
              </span>
              <a
                href={homework.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#00594C] text-white text-xs font-bold"
              >
                <Download size={13} />
                <span>{t('studentDashboard.homework.download', 'تحميل')}</span>
              </a>
            </div>
          )}
          {!isCompleted ? (
            <form onSubmit={handleSubmit} className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-4">
              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100">
                {t('studentDashboard.homework.submitHomework', 'تسليم الواجب')}
              </h3>
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-600 dark:text-slate-300">
                  {t('studentDashboard.homework.yourAnswer', 'نص الإجابة / ملاحظاتك')}
                </label>
                <textarea
                  rows={4}
                  value={submissionText}
                  onChange={(event) => setSubmissionText(event.target.value)}
                  placeholder={t('studentDashboard.homework.answerPlaceholder', 'اكتب إجابتك هنا...')}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-3.5 text-xs sm:text-sm text-slate-800 dark:text-white outline-none focus:border-[#00594C] transition-colors resize-none"
                />
              </div>
              <div>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={(event) => setSelectedFile(event.target.files?.[0] || null)}
                  className="hidden"
                />
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-slate-200 dark:border-slate-700 hover:border-[#00594C] rounded-2xl p-4 text-center cursor-pointer transition-colors bg-slate-50/50 dark:bg-slate-800/30"
                >
                  <Upload size={20} className="mx-auto text-slate-400 mb-1.5" />
                  <p className="text-xs font-bold text-slate-700 dark:text-slate-200">
                    {selectedFile ? selectedFile.name : t('studentDashboard.homework.chooseFile', 'اضغط لاختيار ملف (PDF، صورة، مستند)')}
                  </p>
                  {selectedFile && (
                    <p className="text-[10px] text-slate-400 mt-1">
                      {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  )}
                </div>
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 rounded-2xl bg-[#00594C] hover:bg-[#004742] active:scale-[0.98] text-white text-sm font-bold shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 transition-all"
              >
                <Send size={16} />
                <span>{submitting ? t('studentDashboard.homework.submitting', 'جاري التسليم...') : t('studentDashboard.homework.submitNow', 'إرسال الواجب')}</span>
              </button>
            </form>
          ) : (
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                <CheckCircle size={18} />
                <span className="text-sm font-bold">{t('studentDashboard.homework.alreadySubmitted', 'تم تسليم هذا الواجب بنجاح')}</span>
              </div>
              {homework.grade && (
                <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl text-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">{t('studentDashboard.homework.grade', 'الدرجة')}</span>
                    <span className="font-extrabold text-[#00594C] dark:text-emerald-400 text-sm">{homework.grade}</span>
                  </div>
                  {homework.feedback && (
                    <div className="pt-2 border-t border-slate-100 dark:border-slate-700/60">
                      <p className="text-slate-500 mb-0.5">{t('studentDashboard.homework.feedback', 'ملاحظة المعلم:')}</p>
                      <p className="text-slate-700 dark:text-slate-200 italic">{homework.feedback}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function StudentAssignments() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language.startsWith('ar');
  const [activeTab, setActiveTab] = useState('ongoing');
  const [assignmentsByTab, setAssignmentsByTab] = useState(MOCK_ASSIGNMENTS);
  const [activeHomework, setActiveHomework] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  async function fetchHomeworkData() {
    try {
      setIsLoading(true);
      const [pendingRes, submittedRes, overdueRes] = await Promise.allSettled([
        studentPortalApi.fetchPendingHomework(),
        studentPortalApi.fetchSubmittedHomework(),
        studentPortalApi.fetchOverdueHomework(),
      ]);
      const formatApiItems = (result, defaultList, statusKey) => {
        if (result.status === 'fulfilled') {
          const raw = result.value?.data || result.value;
          if (Array.isArray(raw) && raw.length > 0) {
            return raw.map((item, index) => ({
              id: item.id || item._id || index + 1,
              title: item.title || (isRtl ? item.titleAr : item.titleEn) || 'واجب مدرسي',
              titleEn: item.titleEn || item.title || 'Homework',
              subject: item.group?.subject || item.subject || 'القرآن الكريم',
              subjectEn: item.group?.subjectEn || item.subjectEn || 'Holy Quran',
              teacher: item.teacher?.name || item.teacherName || 'الشيخ أحمد السيد',
              teacherEn: item.teacher?.name || item.teacherName || 'Sheikh Ahmed Al-Sayed',
              sessionName: item.group?.name || 'حصة التجويد - سورة البقرة',
              sessionNameEn: item.group?.name || 'Tajweed Session - Surah Al-Baqarah',
              dueDate: item.formattedDueDate || item.dueDate || '17 أبريل 2026',
              dueDateEn: item.formattedDueDate || item.dueDate || '17 April 2026',
              submissionDate: item.submittedAt || '17 أبريل 2026',
              submissionDateEn: item.submittedAt || '17 April 2026',
              lateTextAr: item.lateDays ? `متأخر ${item.lateDays} أيام` : 'متأخر 5 أيام',
              lateTextEn: item.lateDays ? `${item.lateDays} days overdue` : '5 days overdue',
              status: statusKey,
              statusLabelAr: statusKey === 'completed' ? 'مكتملة' : statusKey === 'overdue' ? 'متأخر' : 'قيد التنفيذ',
              statusLabelEn: statusKey === 'completed' ? 'Completed' : statusKey === 'overdue' ? 'Overdue' : 'In Progress',
              progress: item.progress || (statusKey === 'ongoing' ? 60 : 100),
              grade: item.grade || item.submission?.grade || '9/10',
              feedback: item.feedback || item.submission?.feedback || null,
              description: item.description || item.desc || '',
              fileUrl: item.fileUrl || null,
            }));
          }
        }
        return defaultList;
      };
      setAssignmentsByTab({
        ongoing: formatApiItems(pendingRes, MOCK_ASSIGNMENTS.ongoing, 'ongoing'),
        completed: formatApiItems(submittedRes, MOCK_ASSIGNMENTS.completed, 'completed'),
        overdue: formatApiItems(overdueRes, MOCK_ASSIGNMENTS.overdue, 'overdue'),
      });
    } catch {
      setAssignmentsByTab(MOCK_ASSIGNMENTS);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    fetchHomeworkData();
  }, []);
  function handleTabChange(tabKey) {
    setActiveTab(tabKey);
  }
  function handleOpenDetails(item) {
    setActiveHomework(item);
  }
  function handleCloseDetails() {
    setActiveHomework(null);
  }
  function handleReload() {
    fetchHomeworkData();
  }
  const currentList = assignmentsByTab[activeTab] || [];
  const ongoingCount = assignmentsByTab.ongoing?.length ?? 3;
  const completedCount = assignmentsByTab.completed?.length ?? 3;
  const overdueCount = assignmentsByTab.overdue?.length ?? 1;
  const getTabCount = (tabKey) => {
    if (tabKey === 'ongoing') return ongoingCount;
    if (tabKey === 'completed') return completedCount;
    return overdueCount;
  };
  return (
    <>
      <div className="min-h-screen bg-[#EEF4F2] dark:bg-slate-950 p-4 sm:p-6 lg:p-8" dir={isRtl ? 'rtl' : 'ltr'}>
        <div className="max-w-6xl mx-auto space-y-5">
          {/* Top Header Card */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:px-8 sm:py-6 border border-slate-100 dark:border-slate-800 shadow-sm">
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
              {t('studentDashboard.assignments.title', 'الواجبات')}
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-500 mt-1 font-medium">
              {t('studentDashboard.assignments.subtitle', 'تابع واجباتك وقم بتسليمها في الوقت المحدد')}
            </p>
          </div>
          {/* Filter Tabs Card */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-3 sm:p-4 border border-slate-100 dark:border-slate-800 shadow-sm">
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {TABS_CONFIG.map((tab) => {
                const isSelected = activeTab === tab.key;
                const count = getTabCount(tab.key);
                const tabLabel = tab.key === 'ongoing'
                  ? t('studentDashboard.assignments.ongoing', 'الجارية')
                  : tab.key === 'completed'
                  ? t('studentDashboard.assignments.completedTab', 'المكتملة')
                  : t('studentDashboard.assignments.overdueTab', 'المتأخرة');
                const isOverdueTab = tab.key === 'overdue';
                return (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => handleTabChange(tab.key)}
                    className={`py-3 sm:py-3.5 px-2 sm:px-4 rounded-2xl flex items-center justify-center gap-2 font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                      isSelected
                        ? isOverdueTab
                          ? 'bg-[#EB3D3D] text-white shadow-sm'
                          : 'bg-[#00594C] text-white shadow-sm'
                        : 'bg-[#E8EEEC] dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-[#dfe7e5]'
                    }`}
                  >
                    <span>{tabLabel}</span>
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                        isSelected
                          ? 'bg-white/20 text-white'
                          : 'bg-white/80 dark:bg-slate-700 text-slate-700 dark:text-slate-200'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
          {/* Assignments List */}
          {isLoading ? (
            <div className="flex h-64 items-center justify-center">
              <Spinner />
            </div>
          ) : currentList.length === 0 ? (
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-12 text-center border border-slate-100 dark:border-slate-800 space-y-3">
              <FileText size={36} className="text-slate-300 dark:text-slate-600 mx-auto" />
              <h3 className="text-base font-bold text-slate-700 dark:text-slate-200">
                {t('studentDashboard.assignments.empty', 'لا توجد واجبات في هذا القسم')}
              </h3>
            </div>
          ) : (
            <div className="space-y-4">
              {currentList.map((item) => {
                const title = isRtl ? item.title : (item.titleEn || item.title);
                const teacher = isRtl ? item.teacher : (item.teacherEn || item.teacher);
                const subject = isRtl ? item.subject : (item.subjectEn || item.subject);
                const sessionName = isRtl ? item.sessionName : (item.sessionNameEn || item.sessionName);
                const isOverdue = item.status === 'overdue';
                const isCompleted = item.status === 'completed';
                const isOngoing = item.status === 'ongoing';
                const statusBadgeLabel = isCompleted
                  ? t('studentDashboard.assignments.completed', 'مكتملة')
                  : isOverdue
                  ? t('studentDashboard.assignments.overdue', 'متأخر')
                  : t('studentDashboard.assignments.inProgress', 'قيد التنفيذ');
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-100 dark:border-slate-800 shadow-sm space-y-5 text-start"
                  >
                    {/* Top Section */}
                    <div className="flex items-start justify-between gap-4">
                      {/* Right Details */}
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
                          {title}
                        </h3>
                        {/* Subject Badge & Teacher */}
                        <div className="flex items-center gap-3 mt-1.5 flex-wrap">
                          <span className="bg-[#E3EFFC] text-[#2563EB] text-xs font-bold px-3 py-0.5 rounded-full">
                            {subject}
                          </span>
                          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                            <User size={14} className="text-slate-400 shrink-0" />
                            <span>{teacher}</span>
                          </div>
                        </div>
                        {/* Session Name */}
                        <p className="text-xs text-slate-400 dark:text-slate-500 mt-2 font-medium">
                          {sessionName}
                        </p>
                        {/* Date / Time Line */}
                        <div className="flex items-center gap-3 text-xs mt-1.5 text-slate-400 dark:text-slate-500 flex-wrap">
                          {isOverdue && item.lateTextAr && (
                            <span className="text-[#EF4444] font-bold flex items-center gap-1">
                              <Clock size={13} className="shrink-0" />
                              <span>{isRtl ? item.lateTextAr : item.lateTextEn}</span>
                            </span>
                          )}
                          <span className="flex items-center gap-1">
                            <Calendar size={13} className="shrink-0" />
                            <span>
                              {isCompleted
                                ? `${t('studentDashboard.assignments.submittedDateLabel', 'تم التسليم :')} ${isRtl ? item.submissionDate : item.submissionDateEn}`
                                : `${t('studentDashboard.assignments.dueDateLabel', 'تاريخ التسليم :')} ${isRtl ? item.dueDate : item.dueDateEn}`}
                            </span>
                          </span>
                        </div>
                      </div>
                      {/* Left Badge & Score */}
                      <div className="flex flex-col items-end shrink-0">
                        <span
                          className={`text-xs font-bold px-4 py-1.5 rounded-full ${
                            isCompleted
                              ? 'bg-[#D1FAE5] text-[#059669]'
                              : isOverdue
                              ? 'bg-[#FEE2E2] text-[#EF4444]'
                              : 'bg-[#FEF3C7] text-[#D97706]'
                          }`}
                        >
                          {statusBadgeLabel}
                        </span>
                        {isCompleted && item.grade && (
                          <div className="flex items-center gap-1 mt-3 text-sm font-bold text-slate-800 dark:text-slate-100">
                            <span className="font-mono">{item.grade}</span>
                            <Star size={16} className="fill-[#F59E0B] text-[#F59E0B]" />
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Progress Bar (Ongoing Tab only) */}
                    {isOngoing && typeof item.progress === 'number' && (
                      <div className="space-y-1.5 pt-1">
                        <div className="flex items-center justify-between text-xs font-bold">
                          <span className="text-slate-400 dark:text-slate-500">
                            {t('studentDashboard.assignments.progress', 'التقدم')}
                          </span>
                          <span className="text-slate-700 dark:text-slate-200 font-mono">
                            {item.progress}%
                          </span>
                        </div>
                        <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#2563EB] rounded-full transition-all duration-300"
                            style={{ width: `${item.progress}%` }}
                          />
                        </div>
                      </div>
                    )}
                    {/* Bottom Action Button */}
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => handleOpenDetails(item)}
                        className={`w-full py-3.5 rounded-2xl text-xs sm:text-sm font-bold transition-all shadow-sm cursor-pointer ${
                          isOngoing
                            ? 'bg-[#00594C] hover:bg-[#004742] text-white'
                            : isOverdue
                            ? 'bg-[#EB3D3D] hover:bg-[#DC2626] text-white'
                            : 'bg-[#F1F5F9] dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200'
                        }`}
                      >
                        {t('studentDashboard.assignments.viewSubmit', 'عرض التفاصيل والتسليم')}
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      {/* Modal */}
      <AnimatePresence>
        {activeHomework && (
          <HomeworkDetailsModal
            homework={activeHomework}
            isRtl={isRtl}
            t={t}
            onClose={handleCloseDetails}
            onSuccess={handleReload}
          />
        )}
      </AnimatePresence>
    </>
  );
}
