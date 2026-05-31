import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const badges = [
  { id: 1, emoji: '✨', titleAr: 'نجم الأسبوع', titleEn: 'Star of the Week', descAr: 'أفضل أداء في الأسبوع الثاني على حارس', descEn: 'Best performance in the second week', student: 'سالم العبدلي', date: '22 نوفمبر 2025', bg: 'from-orange-400 to-orange-600' },
  { id: 2, emoji: '📖', titleAr: 'طالب مجتهد', titleEn: 'Diligent Student', descAr: 'حضور 30 حصة متتالية بدون غياب', descEn: '30 consecutive sessions without absence', student: 'عبد الله محمد', date: '10 أغسطس 2024', bg: 'from-slate-500 to-slate-700' },
  { id: 3, emoji: '⭐', titleAr: 'حافظ مميز', titleEn: 'Distinguished Memorizer', descAr: 'حفظ 5 سور بدون أخطاء', descEn: 'Memorized 5 Surahs without mistakes', student: 'عبد الله محمد', date: '5 ديسمبر 2025', bg: 'from-slate-400 to-slate-600' },
  { id: 4, emoji: '🏆', titleAr: 'متقن التجويد', titleEn: 'Tajweed Master', descAr: 'إتمام 20 حصة تجويد بتقييم ممتاز', descEn: '20 Tajweed sessions with excellent rating', student: 'عمر السعيد', date: '10 أبريل 2024', bg: 'from-yellow-400 to-yellow-600' },
  { id: 5, emoji: '📚', titleAr: 'محب العلم', titleEn: 'Knowledge Lover', descAr: 'المشاركة الفعّالة في جميع الحصص', descEn: 'Active participation in all sessions', student: 'يزيد البر', date: '2 يونيو 2026', bg: 'from-pink-500 to-rose-600' },
  { id: 6, emoji: '🌟', titleAr: 'الطالب المثالي', titleEn: 'Ideal Student', descAr: 'التزام وأدب وحسن خلق', descEn: 'Commitment, discipline, and good character', student: 'سعود الهاشم', date: '13 مارس 2025', bg: 'from-teal-500 to-teal-700' },
  { id: 7, emoji: '💎', titleAr: 'قارئ مميز', titleEn: 'Distinguished Reader', descAr: 'قراءة مشتبة بأحكام التجويد الصحيحة', descEn: 'Reading with correct Tajweed rules', student: 'عمر الغالبي', date: '14 يونيو 2026', bg: 'from-blue-500 to-blue-700' },
  { id: 8, emoji: '🎯', titleAr: 'منجز الواجبات', titleEn: 'Assignment Achiever', descAr: 'إكمال 50 واجب بتقييم ممتاز', descEn: 'Completed 50 assignments with excellent rating', student: 'أحمد الناصر', date: '30 سبتمبر 2026', bg: 'from-purple-500 to-purple-700' },
  { id: 9, emoji: '🌟', titleAr: 'الطالب المثالي', titleEn: 'Ideal Student', descAr: 'التزام وأدب وحسن خلق', descEn: 'Commitment and good character', student: 'ماجد عبد الله', date: '12 مارس 2025', bg: 'from-yellow-500 to-amber-600' },
  { id: 10, emoji: '🏆', titleAr: 'متقن التجويد', titleEn: 'Tajweed Master', descAr: 'إتمام 20 حصة تجويد بتقييم ممتاز', descEn: '20 Tajweed sessions with excellent rating', student: 'عبد الرحمن إبراهيم', date: '7 مارس 2025', bg: 'from-emerald-500 to-emerald-700' },
  { id: 11, emoji: '🎯', titleAr: 'منجز الواجبات', titleEn: 'Assignment Achiever', descAr: 'إكمال 50 واجب بتقييم ممتاز', descEn: 'Completed 50 assignments with excellent rating', student: 'عبد العزيز صالح', date: '25 يونيو 2026', bg: 'from-violet-500 to-violet-700' },
  { id: 12, emoji: '🏆', titleAr: 'متقن التجويد', titleEn: 'Tajweed Master', descAr: 'إتمام 20 حصة تجويد بتقييم ممتاز', descEn: '20 Tajweed sessions with excellent rating', student: 'طلال منصور', date: '1 ديسمبر 2024', bg: 'from-cyan-500 to-cyan-700' },
];

function BadgeCard({ badge, isRtl, index }) {
  return (
    <motion.div
      variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { delay: index * 0.05, duration: 0.35, ease: 'easeOut' } } }}
      whileHover={{ y: -3, scale: 1.02 }}
      className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col"
    >
      <div className={`h-28 bg-gradient-to-br ${badge.bg} flex items-center justify-center`}>
        <span className="text-5xl drop-shadow-md">{badge.emoji}</span>
      </div>

      <div className="p-3.5 flex flex-col flex-1" dir={isRtl ? 'rtl' : 'ltr'}>
        <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 text-end mb-1">
          {isRtl ? badge.titleAr : badge.titleEn}
        </h3>
        <p className="text-[10px] text-slate-500 dark:text-slate-400 text-end leading-snug mb-3">
          {isRtl ? badge.descAr : badge.descEn}
        </p>
        <div className="mt-auto flex items-center justify-end gap-1.5 text-[10px] text-slate-400 dark:text-slate-500">
          <span>{badge.date}</span>
          <span>·</span>
          <span className="font-medium text-slate-600 dark:text-slate-300">{badge.student}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function StudentAchievements() {
  const { i18n } = useTranslation();
  const isRtl = i18n.language.startsWith('ar');

  return (
    <div className="min-h-screen bg-[#f3f7f6] dark:bg-slate-900 p-4 sm:p-6 max-w-7xl mx-auto" dir={isRtl ? 'rtl' : 'ltr'}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className=" space-y-5">

        <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-700 px-3 py-1.5 rounded-xl">
            <span className="text-xs text-slate-500 dark:text-slate-400">{isRtl ? 'إجمالي الأوسمة' : 'Total Badges'}</span>
            <span className="text-lg font-extrabold text-slate-800 dark:text-slate-100">{badges.length}</span>
          </div>
          <div className="flex items-center gap-3">
            <div>
              <h1 className="text-xl font-bold text-slate-800 dark:text-slate-100 text-end">{isRtl ? 'الانجازات والأوسمة' : 'Achievements & Badges'}</h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 text-end mt-0.5">{isRtl ? 'بطاقات الأكاديمية بانجاز و إنجازاتك' : 'Your academy achievements and badges'}</p>
            </div>
            <div className="w-10 h-10 bg-amber-50 dark:bg-amber-900/20 rounded-xl flex items-center justify-center shrink-0">
              <Award size={20} className="text-amber-500" />
            </div>
          </div>
        </div>

        <motion.div
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.04 } } }}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
        >
          {badges.map((b, i) => (
            <BadgeCard key={b.id} badge={b} isRtl={isRtl} index={i} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
