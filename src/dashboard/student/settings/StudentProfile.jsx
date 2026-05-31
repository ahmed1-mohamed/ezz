import { motion } from 'framer-motion';
import { BookOpen, Clock, Star, CheckCircle, Award, Mail, Phone, Calendar, Hash, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ProfileAccountSection } from '../widgets/ProfileAccountSection.jsx';

const profileData = {
  nameAr: 'محمد أحمد علي',
  nameEn: 'Mohammed Ahmed Ali',
  studentId: 'STD-2024-00123',
  joinDate: '5 يناير 2015',
  joinDateEn: 'January 5, 2015',
  email: 'mohamed.ahmed@example.com',
  phone: '+0201012345678',
  stats: [
    { value: 45, labelAr: 'ساعة تعليمية', labelEn: 'Learning Hours', icon: Clock, iconCls: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-900/20' },
    { value: '4.8', labelAr: 'متوسط التقييم', labelEn: 'Avg. Rating', icon: Star, iconCls: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-900/20' },
    { value: '96%', labelAr: 'معدل الحضور', labelEn: 'Attendance', icon: CheckCircle, iconCls: 'text-emerald-600', bg: 'bg-emerald-50 dark:bg-emerald-900/20' },
    { value: 30, labelAr: 'حصة مكتملة', labelEn: 'Sessions Done', icon: BookOpen, iconCls: 'text-[#0f7a6c]', bg: 'bg-teal-50 dark:bg-teal-900/20' },
  ],
  courses: [
    { subjectAr: 'القرآن الكريم - التجويد', subjectEn: 'Holy Quran - Tajweed', teacher: 'الشيخ أحمد السيد', teacherEn: 'Sheikh Ahmed Al-Sayed', done: 18, total: 34, color: 'bg-[#0f7a6c]' },
    { subjectAr: 'اللغة العربية - النحو والصرف', subjectEn: 'Arabic Language - Grammar', teacher: 'الأستاذ خالد حسن', teacherEn: 'Prof. Khaled Hassan', done: 12, total: 24, color: 'bg-blue-500' },
  ],
};

export default function StudentProfile() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language.startsWith('ar');

  return (
    <div className="min-h-screen bg-[#f3f7f6] dark:bg-slate-900 p-4 sm:p-6" dir={isRtl ? 'rtl' : 'ltr'}>
      <motion.div
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto space-y-5"
      >

        <motion.div variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }} className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl flex items-center justify-center shrink-0">
              <BookOpen size={20} className="text-[#0f7a6c] dark:text-emerald-400" />
            </div>
            <h1 className="text-xl font-bold text-slate-800 dark:text-slate-100">
              {isRtl ? profileData.nameAr : profileData.nameEn}
            </h1>
          </div>
          <div className="flex flex-wrap gap-2 justify-end">
            {[
              { icon: Calendar, text: isRtl ? profileData.joinDate : profileData.joinDateEn },
              { icon: Phone, text: profileData.phone },
              { icon: Mail, text: profileData.email },
              { icon: Hash, text: `${t('studentDashboard.profile.studentId')}: ${profileData.studentId}` },
            ].map(({ icon: Icon, text }) => (
              <span key={text} className="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 px-3 py-1.5 rounded-xl">
                <Icon size={11} className="text-slate-400 shrink-0" />
                {text}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ── Stats ── */}
        <motion.div variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }} className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { value: 45, transKey: 'learningHours', icon: Clock, iconCls: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-900/20' },
            { value: '4.8', transKey: 'avgRating', icon: Star, iconCls: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-900/20' },
            { value: '96%', transKey: 'attendance', icon: CheckCircle, iconCls: 'text-emerald-600', bg: 'bg-emerald-50 dark:bg-emerald-900/20' },
            { value: 30, transKey: 'sessionsDone', icon: BookOpen, iconCls: 'text-[#0f7a6c]', bg: 'bg-teal-50 dark:bg-teal-900/20' },
          ].map(({ value, transKey, icon: Icon, iconCls, bg }) => (
            <div key={transKey} className={`rounded-2xl p-4 text-center border border-transparent shadow-sm ${bg}`}>
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <Icon size={16} className={iconCls} />
              </div>
              <p className="text-2xl font-extrabold text-slate-800 dark:text-slate-100">{value}</p>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">{t(`studentDashboard.profile.${transKey}`)}</p>
            </div>
          ))}
        </motion.div>

        {/* ── Enrolled Courses ── */}
        <motion.div variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }} className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-700 px-2.5 py-1 rounded-full font-bold">
              {profileData.courses.length} {t('studentDashboard.profile.courses')}
            </span>
            <h2 className="text-sm font-bold text-slate-700 dark:text-slate-200">
              {t('studentDashboard.profile.enrolledCourses')}
            </h2>
          </div>
          <div className="space-y-4">
            {profileData.courses.map((c) => {
              const pct = Math.round((c.done / c.total) * 100);
              return (
                <div key={c.subjectAr} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl flex items-center justify-center shrink-0">
                    <BookOpen size={16} className="text-[#0f7a6c] dark:text-emerald-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                        {c.done} {t('studentDashboard.profile.of')} {c.total}
                      </span>
                      <p className="text-sm font-bold text-slate-800 dark:text-slate-100 truncate text-end">
                        {isRtl ? c.subjectAr : c.subjectEn}
                      </p>
                    </div>
                    <p className="text-[10px] text-slate-400 dark:text-slate-500 text-end mb-2">
                      {isRtl ? c.teacher : c.teacherEn}
                    </p>
                    <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${pct}%` }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
                        className={`h-full rounded-full ${c.color}`}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* ── Account & Subscription (extracted widget) ── */}
        <ProfileAccountSection isRtl={isRtl} />
      </motion.div>
    </div>
  );
}
