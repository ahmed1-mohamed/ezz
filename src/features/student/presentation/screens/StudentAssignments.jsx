import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Calendar, Clock, ChevronRight, X, User, FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const TABS = [
  { key: 'late', labelAr: 'متأخرة', labelEn: 'Late' },
  { key: 'current', labelAr: 'جارية', labelEn: 'Current' },
  { key: 'done', labelAr: 'مكتملة', labelEn: 'Completed' },
];

const assignments = [
  { id: 1, status: 'late', titleAr: 'واجب أحكام النون الساكنة والتنوين', titleEn: 'Noon Sakinah & Tanween Assignment', subject: 'القرآن الكريم', subjectEn: 'Holy Quran', teacher: 'الشيخ أحمد السيد', teacherEn: 'Sheikh Ahmed Al-Sayed', session: 'حصة التجويد - سورة البقرة', sessionEn: 'Tajweed - Surah Al-Baqarah', dueDate: '2026-04-17', lateDays: 5, desc: 'حفظ أحكام النون الساكنة والتنوين مع التطبيق على سورة البقرة من الآية 1 إلى 10', descEn: 'Memorize the rules of Noon Sakinah & Tanween applied to Surah Al-Baqarah, Ayahs 1-10' },
  { id: 2, status: 'current', titleAr: 'تمرين البلاغة - الاستعارة', titleEn: 'Rhetoric Exercise - Metaphor', subject: 'اللغة العربية', subjectEn: 'Arabic Language', teacher: 'الدكتور محمد الأمين', teacherEn: 'Dr. Mohammed Al-Amin', session: 'البلاغة والأدب', sessionEn: 'Rhetoric & Literature', dueDate: '2026-05-01', lateDays: 0, desc: 'كتابة فقرة تحتوي على أمثلة من الاستعارة المكنية والتصريحية', descEn: 'Write a paragraph containing examples of explicit and implicit metaphor' },
  { id: 3, status: 'current', titleAr: 'حفظ آيات من سورة آل عمران', titleEn: 'Memorize Verses from Surah Aal-Imran', subject: 'القرآن الكريم', subjectEn: 'Holy Quran', teacher: 'الشيخ أحمد السيد', teacherEn: 'Sheikh Ahmed Al-Sayed', session: 'حصة التجويد', sessionEn: 'Tajweed Session', dueDate: '2026-04-29', lateDays: 0, desc: 'حفظ الآيات من 1 إلى 20 من سورة آل عمران', descEn: 'Memorize Ayahs 1-20 from Surah Aal-Imran' },
  { id: 4, status: 'done', titleAr: 'قراءة درس النحو والإجابة', titleEn: 'Grammar Lesson Reading & Answers', subject: 'اللغة العربية', subjectEn: 'Arabic Language', teacher: 'الدكتور محمد الأمين', teacherEn: 'Dr. Mohammed Al-Amin', session: 'النحو والصرف', sessionEn: 'Grammar & Morphology', dueDate: '2026-04-10', lateDays: 0, desc: '', descEn: '' },
  { id: 5, status: 'done', titleAr: 'حفظ سورة الفاتحة مع التجويد', titleEn: 'Memorize Surah Al-Fatiha with Tajweed', subject: 'القرآن الكريم', subjectEn: 'Holy Quran', teacher: 'الشيخ أحمد السيد', teacherEn: 'Sheikh Ahmed Al-Sayed', session: 'حصة التجويد', sessionEn: 'Tajweed Session', dueDate: '2026-04-05', lateDays: 0, desc: '', descEn: '' },
  { id: 6, status: 'done', titleAr: 'مراجعة أحكام المد', titleEn: 'Review Madd Rules', subject: 'القرآن الكريم', subjectEn: 'Holy Quran', teacher: 'الشيخ أحمد السيد', teacherEn: 'Sheikh Ahmed Al-Sayed', session: 'حصة التجويد', sessionEn: 'Tajweed Session', dueDate: '2026-04-01', lateDays: 0, desc: '', descEn: '' },
];

function getBadge(status, isRtl) {
  if (status === 'late') return { label: isRtl ? 'متأخر' : 'Late', cls: 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' };
  if (status === 'current') return { label: isRtl ? 'جارية' : 'Current', cls: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' };
  return { label: isRtl ? 'مكتملة' : 'Done', cls: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' };
}

function AssignmentModal({ assignment, isRtl, onClose }) {
  const { t } = useTranslation();
  const badge = getBadge(assignment.status, isRtl);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        className="w-full max-w-7xl bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-700"
        dir={isRtl ? 'rtl' : 'ltr'}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-700">
          <span className={`text-xs font-bold px-3 py-1 rounded-full ${badge.cls}`}>{badge.label}</span>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
            <X size={15} className="text-slate-600 dark:text-slate-300" />
          </button>
        </div>
        <div className="p-6 space-y-4">
          <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 text-end">
            {isRtl ? assignment.titleAr : assignment.titleEn}
          </h2>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-3">
              <p className="text-[10px] text-slate-400 mb-1">{t('studentDashboard.attendance.teacher')}</p>
              <p className="font-bold text-slate-700 dark:text-slate-200 text-xs">{isRtl ? assignment.teacher : assignment.teacherEn}</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-3">
              <p className="text-[10px] text-slate-400 mb-1">{t('studentDashboard.assignments.dueDate')}</p>
              <p className="font-bold text-slate-700 dark:text-slate-200 text-xs">{assignment.dueDate}</p>
            </div>
          </div>
          {(isRtl ? assignment.desc : assignment.descEn) && (
            <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-4">
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {isRtl ? assignment.desc : assignment.descEn}
              </p>
            </div>
          )}
          {assignment.status !== 'done' && (
            <button className="w-full bg-[#0f7a6c] hover:bg-[#0c6156] text-white font-bold py-3 rounded-xl transition-all text-sm shadow-md shadow-emerald-200/40">
              {t('studentDashboard.assignments.submitTitle')}
            </button>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function AssignmentCard({ assignment, isRtl, onOpen }) {
  const { t } = useTranslation();
  const badge = getBadge(assignment.status, isRtl);
  const isLate = assignment.status === 'late';
  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
      className={`bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-sm border ${isLate ? 'border-red-200 dark:border-red-800/40' : 'border-slate-100 dark:border-slate-700'}`}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <span className={`text-xs font-bold px-3 py-1 rounded-full shrink-0 ${badge.cls}`}>{badge.label}</span>
        <h3 className="text-base font-bold text-slate-800 dark:text-slate-100 text-end">
          {isRtl ? assignment.titleAr : assignment.titleEn}
        </h3>
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-2 justify-end mb-4 text-xs text-slate-500 dark:text-slate-400">
        <span className="flex items-center gap-1.5">
          <User size={12} />
          {isRtl ? assignment.teacher : assignment.teacherEn}
        </span>
        <span className="inline-block bg-emerald-50 dark:bg-emerald-900/20 text-[#0f7a6c] dark:text-emerald-400 font-bold px-2.5 py-0.5 rounded-full">
          {isRtl ? assignment.subject : assignment.subjectEn}
        </span>
      </div>
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-4">
        <span className="flex items-center gap-1.5 text-slate-400">
          <BookOpen size={12} />
          {isRtl ? assignment.session : assignment.sessionEn}
        </span>
        <div className="flex items-center gap-3">
          {isLate && (
            <span className="text-red-500 font-bold">
              {isRtl ? `متأخر ${assignment.lateDays} أيام` : `${assignment.lateDays}d late`}
            </span>
          )}
          <span className="flex items-center gap-1">
            <Calendar size={11} />
            {t('studentDashboard.assignments.dueDate')} {assignment.dueDate}
          </span>
        </div>
      </div>
      <button
        onClick={() => onOpen(assignment)}
        className={`w-full font-bold py-3 rounded-xl transition-all text-sm ${isLate
          ? 'bg-red-500 hover:bg-red-600 text-white shadow-sm shadow-red-200/50'
          : assignment.status === 'done'
            ? 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
            : 'bg-[#0f7a6c] hover:bg-[#0c6156] text-white shadow-sm shadow-emerald-200/50'
          }`}
      >
        {t('studentDashboard.assignments.viewSubmit')}
      </button>
    </motion.div>
  );
}

export default function StudentAssignments() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language.startsWith('ar');
  const [activeTab, setActiveTab] = useState('late');
  const [selected, setSelected] = useState(null);

  const filtered = assignments.filter((a) => a.status === activeTab);
  const counts = { late: assignments.filter((a) => a.status === 'late').length, current: assignments.filter((a) => a.status === 'current').length, done: assignments.filter((a) => a.status === 'done').length };

  return (
    <>
      <div className="min-h-screen bg-[#f3f7f6] dark:bg-slate-900 p-4 sm:p-6" dir={isRtl ? 'rtl' : 'ltr'}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-7xl mx-auto space-y-5">

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl flex items-center justify-center shrink-0">
                <FileText size={20} className="text-[#0f7a6c] dark:text-emerald-400" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800 dark:text-slate-100">{t('studentDashboard.assignments.title')}</h1>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{t('studentDashboard.assignments.subtitle')}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTab === tab.key
                  ? tab.key === 'late'
                    ? 'bg-red-500 text-white shadow-md'
                    : 'bg-[#0f7a6c] text-white shadow-md'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-[#0f7a6c]/50'
                  }`}
              >
                {counts[tab.key] > 0 && (
                  <span className={`w-5 h-5 rounded-full text-xs flex items-center justify-center font-bold ${activeTab === tab.key ? 'bg-white/20' : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}`}>
                    {counts[tab.key]}
                  </span>
                )}
                {isRtl ? tab.labelAr : tab.labelEn}
              </button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.07 } } }}
            initial="hidden"
            animate="visible"
            className="space-y-3"
          >
            {filtered.length === 0 ? (
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-12 text-center border border-slate-100 dark:border-slate-700">
                <p className="text-slate-500 dark:text-slate-400 text-sm">{isRtl ? 'لا توجد واجبات' : 'No assignments'}</p>
              </div>
            ) : (
              filtered.map((a) => (
                <AssignmentCard key={a.id} assignment={a} isRtl={isRtl} onOpen={setSelected} />
              ))
            )}
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && <AssignmentModal assignment={selected} isRtl={isRtl} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </>
  );
}
