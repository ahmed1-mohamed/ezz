import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useSearchParams } from 'react-router-dom';
import StatCard from '../components/StatCard';
import SubscriptionRenewal from '../components/SubscriptionRenewal';
import {
  BookOpen,
  TrendingUp,
  Trophy,
  Clock,
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function ParentChildren() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const isRtl = i18n.language.startsWith('ar');
  const currentChildId = searchParams.get('id') || 'c1';

  // Handler to switch child
  const handleChildSelect = (childId) => {
    setSearchParams({ id: childId });
  };

  const childrenData = useMemo(() => ({
    c1: {
      id: 'c1',
      name: t('parentDashboard.home.children.mohamed'),
      subject: t('parentDashboard.home.children.subject1'),
      joinDate: '15-01-2025',
      avatarInitial: 'م',
      totalClasses: 24,
      attendanceRate: '96%',
      averageRating: '92',
      badges: [
        { name: isRtl ? 'متميز في الحفظ' : 'Excellent in Memorization', color: 'bg-[#fdf8ee] text-[#c49d3f] border border-[#f8e6c7] dark:bg-amber-950/20 dark:text-amber-400 dark:border-amber-900/20', icon: '🏆' },
        { name: isRtl ? 'حضور منتظم' : 'Regular Attendance', color: 'bg-[#e8f5f3] text-[#1b8876] border border-[#cbebe7] dark:bg-emerald-950/20 dark:text-emerald-400 dark:border-emerald-900/20', icon: '⭐' },
        { name: isRtl ? 'أفضل طالب الشهر' : 'Best Student of Month', color: 'bg-[#fdeeed] text-[#e05353] border border-[#fbd3d2] dark:bg-rose-950/20 dark:text-rose-400 dark:border-rose-900/20', icon: '🌟' }
      ],
      evaluations: [
        { id: 1, title: isRtl ? 'حفظ سورة البقرة' : 'Memorizing Surah Al-Baqarah', teacher: isRtl ? 'المعلم الشيخ أحمد منصور' : 'Teacher Sheikh Ahmed Mansour', date: '2026-04-08', score: 95 },
        { id: 2, title: isRtl ? 'حفظ سورة البقرة' : 'Memorizing Surah Al-Baqarah', teacher: isRtl ? 'المعلم الشيخ أحمد منصور' : 'Teacher Sheikh Ahmed Mansour', date: '2026-04-08', score: 95 },
        { id: 3, title: isRtl ? 'حفظ سورة البقرة' : 'Memorizing Surah Al-Baqarah', teacher: isRtl ? 'المعلم الشيخ أحمد منصور' : 'Teacher Sheikh Ahmed Mansour', date: '2026-04-08', score: 95 }
      ],
      timeline: [
        { id: 1, text: isRtl ? 'حضر حصة حفظ سورة البقرة' : 'Attended class of Memorizing Surah Al-Baqarah', teacher: isRtl ? 'المعلم الشيخ أحمد منصور' : 'Teacher Sheikh Ahmed Mansour', time: isRtl ? '2026-04-09 | 09:00 صباحاً' : '2026-04-09 | 09:00 AM', color: 'bg-emerald-500' },
        { id: 2, text: isRtl ? 'حصل على شارة متميز في علوم القرآن' : 'Got badge "Excellent in Quran Sciences"', teacher: isRtl ? 'المعلم الشيخ سامي العلي' : 'Teacher Sheikh Sami Al-Ali', time: isRtl ? '2026-04-10 | 10:30 صباحاً' : '2026-04-10 | 10:30 AM', color: 'bg-amber-500' },
        { id: 3, text: isRtl ? 'حضر حصة قواعد اللغة العربية' : 'Attended Arabic Grammar class', teacher: isRtl ? 'المعلم الأستاذة ليلى العسيري' : 'Teacher Ms. Layla Al-Assiri', time: isRtl ? '2026-04-11 | 11:15 صباحاً' : '2026-04-11 | 11:15 AM', color: 'bg-emerald-500' },
        { id: 4, text: isRtl ? 'تغيب عن حصة تاريخ الحضارة الإسلامية' : 'Absent from Islamic History class', teacher: isRtl ? 'المعلم الدكتور يوسف القحطاني' : 'Teacher Dr. Yousef Al-Qahtani', time: isRtl ? '2026-04-12 | 01:00 مساءً' : '2026-04-12 | 01:00 PM', color: 'bg-red-500' }
      ],
      package: t('parentDashboard.home.advancedPackage'),
      remainingClasses: 29
    },
    c2: {
      id: 'c2',
      name: t('parentDashboard.home.children.aisha'),
      subject: t('parentDashboard.home.children.subject2'),
      joinDate: '10-02-2025',
      avatarInitial: 'ع',
      totalClasses: 18,
      attendanceRate: '92%',
      averageRating: '88',
      badges: [
        { name: isRtl ? 'حضور منتظم' : 'Regular Attendance', color: 'bg-[#e8f5f3] text-[#1b8876] border border-[#cbebe7] dark:bg-emerald-950/20 dark:text-emerald-400 dark:border-emerald-900/20', icon: '⭐' },
        { name: isRtl ? 'متميز في القراءة' : 'Excellent in Reading', color: 'bg-[#fdf8ee] text-[#c49d3f] border border-[#f8e6c7] dark:bg-amber-950/20 dark:text-amber-400 dark:border-amber-900/20', icon: '📖' },
        { name: isRtl ? 'سريعة التعلم' : 'Fast Learner', color: 'bg-[#fdeeed] text-[#e05353] border border-[#fbd3d2] dark:bg-rose-950/20 dark:text-rose-400 dark:border-rose-900/20', icon: '⚡' }
      ],
      evaluations: [
        { id: 1, title: isRtl ? 'دروس النحو والصرف' : 'Grammar Lessons', teacher: isRtl ? 'الأستاذة ليلى العسيري' : 'Ms. Layla Al-Assiri', date: '2026-04-07', score: 90 },
        { id: 2, title: isRtl ? 'قراءة النصوص' : 'Text Reading', teacher: isRtl ? 'الأستاذة ليلى العسيري' : 'Ms. Layla Al-Assiri', date: '2026-04-05', score: 85 }
      ],
      timeline: [
        { id: 1, text: isRtl ? 'حضر حصة اللغة العربية' : 'Attended Arabic class', teacher: isRtl ? 'المعلم الأستاذة ليلى العسيري' : 'Teacher Ms. Layla Al-Assiri', time: isRtl ? '2026-04-09 | 11:00 صباحاً' : '2026-04-09 | 11:00 AM', color: 'bg-emerald-500' },
        { id: 2, text: isRtl ? 'حصل على شارة متميزة في الخط العربي' : 'Got badge "Excellent in Arabic Calligraphy"', teacher: isRtl ? 'المعلم الشيخ سامي العلي' : 'Teacher Sheikh Sami Al-Ali', time: isRtl ? '2026-04-10 | 09:30 صباحاً' : '2026-04-10 | 09:30 AM', color: 'bg-amber-500' }
      ],
      package: t('parentDashboard.home.advancedPackage'),
      remainingClasses: 15
    },
    c3: {
      id: 'c3',
      name: t('parentDashboard.home.children.fatima'),
      subject: t('parentDashboard.home.children.subject1'),
      joinDate: '01-01-2025',
      avatarInitial: 'ف',
      totalClasses: 30,
      attendanceRate: '98%',
      averageRating: '95',
      badges: [
        { name: isRtl ? 'متميز في الحفظ' : 'Excellent in Memorization', color: 'bg-[#fdf8ee] text-[#c49d3f] border border-[#f8e6c7] dark:bg-amber-950/20 dark:text-amber-400 dark:border-amber-900/20', icon: '🏆' },
        { name: isRtl ? 'حضور منتظم' : 'Regular Attendance', color: 'bg-[#e8f5f3] text-[#1b8876] border border-[#cbebe7] dark:bg-emerald-950/20 dark:text-emerald-400 dark:border-emerald-900/20', icon: '⭐' },
        { name: isRtl ? 'أفضل طالب الشهر' : 'Best Student of Month', color: 'bg-[#fdeeed] text-[#e05353] border border-[#fbd3d2] dark:bg-rose-950/20 dark:text-rose-400 dark:border-rose-900/20', icon: '🌟' }
      ],
      evaluations: [
        { id: 1, title: isRtl ? 'حفظ سورة آل عمران' : 'Memorizing Surah Al-Imran', teacher: isRtl ? 'الشيخ أحمد منصور' : 'Sheikh Ahmed Mansour', date: '2026-04-06', score: 98 }
      ],
      timeline: [
        { id: 1, text: isRtl ? 'حضر حصة حفظ القرآن' : 'Attended Quran Memorization class', teacher: isRtl ? 'المعلم الشيخ أحمد منصور' : 'Teacher Sheikh Ahmed Mansour', time: isRtl ? '2026-04-09 | 10:00 صباحاً' : '2026-04-09 | 10:00 AM', color: 'bg-emerald-500' }
      ],
      package: t('parentDashboard.home.advancedPackage'),
      remainingClasses: 20
    }
  }), [t, isRtl]);

  const child = childrenData[currentChildId] || childrenData.c1;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show" viewport={{ once: true, amount: 0.1 }}
      className="p-4 md:p-8 max-w-7xl mx-auto space-y-6 font-sans"
    >

      <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6">

        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-start w-full md:w-auto">
          <div className="w-16 h-16 rounded-full bg-[#0f7a6c] flex items-center justify-center text-white text-3xl font-bold shrink-0 shadow-sm">
            {child.avatarInitial}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center justify-center sm:justify-start gap-2">
              {child.name}
            </h1>
            <p className="text-slate-500 dark:text-slate-400 font-medium text-sm mt-0.5">
              {child.subject}
            </p>
            <p className="text-slate-400 dark:text-slate-500 text-xs mt-1">
              {t('parentDashboard.childrenDetails.joinDate', { date: child.joinDate })}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto justify-end">
          <div className="w-full sm:w-40 relative">
            <select
              value={currentChildId}
              onChange={(e) => handleChildSelect(e.target.value)}
              className="w-full appearance-none bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 rounded-xl py-2 px-3 pe-8 focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]/50 transition-shadow cursor-pointer text-sm font-bold"
            >
              <option value="c1">{t('parentDashboard.home.children.mohamed')}</option>
              <option value="c2">{t('parentDashboard.home.children.aisha')}</option>
              <option value="c3">{t('parentDashboard.home.children.fatima')}</option>
            </select>
            <div className="absolute top-1/2 -translate-y-1/2 end-3 text-slate-400 pointer-events-none">
              ▼
            </div>
          </div>

          <button
            onClick={() => navigate('/dashboard/parent/ratings')}
            className="w-full sm:w-auto px-6 py-2.5 bg-[#d4a373] hover:bg-[#c39262] text-white rounded-xl font-bold transition-all shadow-sm text-sm active:translate-y-0.5"
          >
            {t('parentDashboard.childrenDetails.teacherEvaluation')}
          </button>
        </div>

      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <motion.div variants={itemVariants} className="h-full">
          <StatCard
            label={t('parentDashboard.childrenDetails.totalClasses')}
            value={child.totalClasses}
            icon={BookOpen}
            color="text-[#0f7a6c] dark:text-[#3ab795]"
            bgColor="bg-emerald-50 dark:bg-emerald-950/20"
            layout="children"
          />
        </motion.div>

        <motion.div variants={itemVariants} className="h-full">
          <StatCard
            label={t('parentDashboard.childrenDetails.attendanceRate')}
            value={child.attendanceRate}
            icon={TrendingUp}
            color="text-emerald-500"
            bgColor="bg-emerald-50 dark:bg-emerald-950/20"
            layout="children"
          />
        </motion.div>

        <motion.div variants={itemVariants} className="h-full">
          <StatCard
            label={t('parentDashboard.childrenDetails.averageRating')}
            value={child.averageRating}
            icon={Trophy}
            color="text-amber-500"
            bgColor="bg-amber-50 dark:bg-amber-950/20"
            layout="children"
          />
        </motion.div>
      </div>

      <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 text-start space-y-4">
        <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">
          {t('parentDashboard.childrenDetails.badgesTitle')}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {child.badges.map((badge, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center gap-3 p-6 rounded-2xl ${badge.color} transition-all hover:shadow-md hover:-translate-y-0.5`}
            >
              <span className="text-3xl select-none filter drop-shadow-sm">{badge.icon}</span>
              <span className="font-bold text-sm text-center">{badge.name}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-1.5 mt-2">
          <span className="w-2 h-2 rounded-full bg-red-500" />
          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600" />
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="space-y-4 text-start">
        <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">
          {t('parentDashboard.childrenDetails.recentEvaluationsTitle')}
        </h2>

        <div className="space-y-3">
          {child.evaluations.map((evalItem) => (
            <div
              key={evalItem.id}
              className="bg-white dark:bg-slate-800 rounded-3xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-between gap-4 transition-all hover:shadow-md"
            >
              <div className="space-y-1">
                <h3 className="font-bold text-slate-800 dark:text-slate-100 text-base">{evalItem.title}</h3>
                <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                  {evalItem.teacher}
                </p>
                <p className="text-[10px] text-slate-400 dark:text-slate-500">
                  {evalItem.date}
                </p>
              </div>

              <div className="text-2xl font-bold text-emerald-500">
                {evalItem.score}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="space-y-4 text-start">
        <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">
          {t('parentDashboard.childrenDetails.timelineTitle')}
        </h2>

        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 space-y-6 relative">
          <div className="absolute top-8 bottom-8 start-9 w-0.5 bg-slate-100 dark:bg-slate-700" />

          {child.timeline.map((item) => (
            <div key={item.id} className="flex items-start gap-4 relative z-10">
              <div className={`w-3.5 h-3.5 rounded-full shrink-0 mt-1.5 border-2 border-white dark:border-slate-800 ${item.color} shadow-sm`} />

              <div className="space-y-0.5 flex-1">
                <h3 className="font-bold text-slate-800 dark:text-slate-100 text-sm">{item.text}</h3>
                <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">{item.teacher}</p>
                <p className="text-[10px] text-slate-400 dark:text-slate-500 flex items-center gap-1">
                  <Clock size={10} />
                  <span>{item.time}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="space-y-4 text-start">
        <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">
          {t('parentDashboard.childrenDetails.subscriptionSummaryTitle')}
        </h2>

        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-start">

            <div className="space-y-1">
              <span className="text-xs text-slate-400 dark:text-slate-500 block font-semibold">
                {t('parentDashboard.childrenDetails.currentPackage')}
              </span>
              <span className="text-lg font-bold text-slate-800 dark:text-slate-100">
                {child.package}
              </span>
            </div>

            <div className="h-px w-full sm:h-12 sm:w-px bg-slate-100 dark:bg-slate-700" />

            <div className="space-y-1">
              <span className="text-xs text-slate-400 dark:text-slate-500 block font-semibold">
                {t('parentDashboard.childrenDetails.totalRemainingClasses')}
              </span>
              <span className="text-xl font-bold text-[#0f7a6c] dark:text-[#3ab795]">
                {child.remainingClasses} {t('parentDashboard.home.classes')}
              </span>
            </div>

            <button className="w-full sm:w-auto px-6 py-3 bg-[#d4a373] hover:bg-[#c39262] text-white rounded-xl font-bold transition-all shadow-sm text-sm active:translate-y-0.5">
              {t('parentDashboard.childrenDetails.renewSubscription')}
            </button>

          </div>
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <SubscriptionRenewal currentPackageName={child.package} remainingClasses={child.remainingClasses} />
      </motion.div>

    </motion.div>
  );
}