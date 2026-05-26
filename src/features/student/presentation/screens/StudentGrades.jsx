import { motion } from 'framer-motion';
import { Star, Award, User, Calendar, TrendingUp, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const grades = [
  {
    id: 1,
    sessionAr: 'حصة التجويد - سورة البقرة',
    sessionEn: 'Tajweed - Surah Al-Baqarah',
    subject: 'القرآن الكريم',
    subjectEn: 'Holy Quran',
    teacher: 'الشيخ أحمد السيد',
    teacherEn: 'Sheikh Ahmed Al-Sayed',
    date: '14 أبريل 2026',
    dateEn: 'April 14, 2026',
    rating: 4.7,
    skills: [
      { labelAr: 'الحفظ', labelEn: 'Memorization', value: 95 },
      { labelAr: 'التلاوة', labelEn: 'Recitation', value: 90 },
      { labelAr: 'التجويد', labelEn: 'Tajweed', value: 92 },
      { labelAr: 'المشاركة', labelEn: 'Participation', value: 88 },
    ],
    noteAr: 'ما شاء الله، أداء متميز في تطبيق أحكام التجويد. القراءة واضحة ومخارج الحروف صحيحة. استمر على هذا النحو بارك الله فيك.',
    noteEn: 'MashaAllah, excellent performance in applying Tajweed rules. Recitation is clear with correct articulation points. Keep it up, may Allah bless you.',
    strengthsAr: ['إتقان أحكام النون الساكنة', 'وضوح المخارج', 'التفاعل الجيد'],
    strengthsEn: ['Mastery of Noon Sakinah', 'Clear articulation', 'Good engagement'],
    improvementsAr: ['مراجعة أحكام المد'],
    improvementsEn: ['Review Madd rules'],
  },
  {
    id: 2,
    sessionAr: 'البلاغة والأدب - الجلسة الأولى',
    sessionEn: 'Rhetoric & Literature - Session 1',
    subject: 'اللغة العربية',
    subjectEn: 'Arabic Language',
    teacher: 'الدكتور محمد الأمين',
    teacherEn: 'Dr. Mohammed Al-Amin',
    date: '10 أبريل 2026',
    dateEn: 'April 10, 2026',
    rating: 4.5,
    skills: [
      { labelAr: 'الفهم', labelEn: 'Comprehension', value: 88 },
      { labelAr: 'التعبير', labelEn: 'Expression', value: 85 },
      { labelAr: 'التحليل', labelEn: 'Analysis', value: 82 },
      { labelAr: 'المشاركة', labelEn: 'Participation', value: 90 },
    ],
    noteAr: 'أداء جيد في تحليل النصوص البلاغية. يحتاج المزيد من التركيز على التمييز بين الاستعارة والتشبيه.',
    noteEn: 'Good performance in rhetoric text analysis. Needs more focus on distinguishing between metaphor and simile.',
    strengthsAr: ['فهم جيد للمحتوى', 'مشاركة فعّالة'],
    strengthsEn: ['Good content comprehension', 'Active participation'],
    improvementsAr: ['التمييز بين الاستعارة والتشبيه', 'الكتابة التحليلية'],
    improvementsEn: ['Metaphor vs. simile distinction', 'Analytical writing'],
  },
  {
    id: 3,
    sessionAr: 'حصة التجويد - سورة آل عمران',
    sessionEn: 'Tajweed - Surah Aal-Imran',
    subject: 'القرآن الكريم',
    subjectEn: 'Holy Quran',
    teacher: 'الشيخ أحمد السيد',
    teacherEn: 'Sheikh Ahmed Al-Sayed',
    date: '7 أبريل 2026',
    dateEn: 'April 7, 2026',
    rating: 5.0,
    skills: [
      { labelAr: 'الحفظ', labelEn: 'Memorization', value: 100 },
      { labelAr: 'التلاوة', labelEn: 'Recitation', value: 98 },
      { labelAr: 'التجويد', labelEn: 'Tajweed', value: 97 },
      { labelAr: 'المشاركة', labelEn: 'Participation', value: 95 },
    ],
    noteAr: 'ممتاز جداً. حفظ رائع وأداء استثنائي. واصل هذا المستوى المتميز.',
    noteEn: 'Excellent! Outstanding memorization and exceptional performance. Keep up this distinguished level.',
    strengthsAr: ['حفظ استثنائي', 'إتقان كامل للتجويد', 'أداء متميز'],
    strengthsEn: ['Exceptional memorization', 'Full Tajweed mastery', 'Distinguished performance'],
    improvementsAr: [],
    improvementsEn: [],
  },
];

const avgRating = (grades.reduce((s, g) => s + g.rating, 0) / grades.length).toFixed(1);

function StarDisplay({ rating, size = 16 }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={size}
          className={i <= Math.round(rating) ? 'text-amber-400' : 'text-slate-300 dark:text-slate-600'}
          fill={i <= Math.round(rating) ? 'currentColor' : 'none'}
        />
      ))}
    </div>
  );
}

function SkillBar({ label, value }) {
  return (
    <div className="bg-white dark:bg-slate-700 rounded-xl p-3 text-center">
      <p className="text-xl font-extrabold text-slate-800 dark:text-slate-100">{value}%</p>
      <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">{label}</p>
    </div>
  );
}

function GradeCard({ grade, isRtl }) {
  const strengths = isRtl ? grade.strengthsAr : grade.strengthsEn;
  const improvements = isRtl ? grade.improvementsAr : grade.improvementsEn;

  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
      className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="p-5 border-b border-slate-100 dark:border-slate-700">
        <div className="flex items-start justify-between gap-3 mb-2">
          <StarDisplay rating={grade.rating} />
          <div className="text-end">
            <div className="flex items-center justify-end gap-2 mb-1">
              <h3 className="text-base font-bold text-slate-800 dark:text-slate-100">
                {isRtl ? grade.sessionAr : grade.sessionEn}
              </h3>
              <div className="w-9 h-9 bg-[#0f7a6c] rounded-full flex items-center justify-center shrink-0 shadow-sm">
                <span className="text-white font-bold text-sm">أ</span>
              </div>
            </div>
            <span className="inline-block bg-emerald-50 dark:bg-emerald-900/20 text-[#0f7a6c] dark:text-emerald-400 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
              {isRtl ? grade.subject : grade.subjectEn}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-end gap-4 text-xs text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1.5">
            <Calendar size={11} />
            {isRtl ? grade.date : grade.dateEn}
          </span>
          <span className="flex items-center gap-1.5">
            <User size={11} />
            {isRtl ? grade.teacher : grade.teacherEn}
          </span>
        </div>
      </div>

      <div className="p-5 space-y-4">
        <div className="grid grid-cols-4 gap-2">
          {grade.skills.map((s) => (
            <SkillBar key={s.labelAr} label={isRtl ? s.labelAr : s.labelEn} value={s.value} />
          ))}
        </div>

        <div>
          <p className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
            {t('studentDashboard.grades.teacherNotes')}
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed bg-slate-50 dark:bg-slate-900 rounded-xl p-3">
            {isRtl ? grade.noteAr : grade.noteEn}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {strengths.length > 0 && (
            <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-3">
              <p className="text-xs font-bold text-emerald-700 dark:text-emerald-400 mb-2 flex items-center gap-1.5">
                <TrendingUp size={12} />
                {t('studentDashboard.grades.strengths')}
              </p>
              <ul className="space-y-1">
                {strengths.map((s, i) => (
                  <li key={i} className="text-[11px] text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-emerald-500 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {improvements.length > 0 && (
            <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-3">
              <p className="text-xs font-bold text-amber-700 dark:text-amber-400 mb-2 flex items-center gap-1.5">
                <AlertCircle size={12} />
                {t('studentDashboard.grades.toImprove')}
              </p>
              <ul className="space-y-1">
                {improvements.map((s, i) => (
                  <li key={i} className="text-[11px] text-amber-700 dark:text-amber-400 flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-amber-500 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function StudentGrades() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language.startsWith('ar');

  return (
    <div className="min-h-screen bg-[#f3f7f6] dark:bg-slate-900 p-4 sm:p-6" dir={isRtl ? 'rtl' : 'ltr'}>
      <motion.div
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto space-y-5"
      >

        <motion.div variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }} className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl flex items-center justify-center shrink-0">
              <Award size={20} className="text-[#0f7a6c] dark:text-emerald-400" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800 dark:text-slate-100">{t('studentDashboard.grades.title')}</h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{t('studentDashboard.grades.subtitle')}</p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }} className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="flex items-center justify-between">
            <div className="text-center">
              <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wide mb-1">{t('studentDashboard.grades.totalEvaluations')}</p>
              <p className="text-3xl font-extrabold text-slate-800 dark:text-slate-100">{grades.length}</p>
            </div>
            <div className="w-px h-12 bg-slate-100 dark:bg-slate-700" />
            <div className="text-center">
              <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wide mb-1">{t('studentDashboard.grades.avgRating')}</p>
              <div className="flex items-center gap-2 justify-center">
                <p className="text-3xl font-extrabold text-slate-800 dark:text-slate-100">{avgRating}</p>
                <StarDisplay rating={parseFloat(avgRating)} size={18} />
              </div>
            </div>
          </div>
        </motion.div>

        {grades.map((g) => (
          <GradeCard key={g.id} grade={g} isRtl={isRtl} />
        ))}
      </motion.div>
    </div>
  );
}
