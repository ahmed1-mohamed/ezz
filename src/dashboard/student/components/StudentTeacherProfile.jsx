import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Star, Clock, BookOpen, Award, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const teachersData = {
  1: { nameAr: 'الشيخ أحمد السيد', nameEn: 'Sheikh Ahmed Al-Sayed', bioAr: 'حاصل على إجازة في القراءات العشر', bioEn: 'Certified in the Ten Quranic Recitations', rating: 4.9, experience: 15, students: 120, sessionsCount: 340, subjects: ['القرآن الكريم', 'التجويد', 'التفسير'], aboutAr: 'شيخ متخصص في علوم القرآن الكريم والتجويد، حاصل على إجازة بالقراءات العشر من كبار المشايخ. يتميز بأسلوب تعليمي متميز يجمع بين الأصالة والحداثة.', aboutEn: 'Specialist in Quranic sciences and Tajweed, certified in the Ten Readings from senior scholars. Known for a distinguished teaching style combining tradition and modernity.', upcomingAr: ['حصة التجويد - سورة البقرة', 'أحكام المد والقصر', 'سورة آل عمران'], upcomingEn: ['Tajweed - Surah Al-Baqarah', 'Madd Rules', 'Surah Aal-Imran'] },
  2: { nameAr: 'الشيخ أحمد منصور', nameEn: 'Sheikh Ahmed Mansour', bioAr: 'حاصل على إجازة في القراءات العشر', bioEn: 'Certified in the Ten Quranic Recitations', rating: 4.9, experience: 15, students: 95, sessionsCount: 280, subjects: ['القرآن الكريم', 'التجويد'], aboutAr: 'شيخ ذو خبرة واسعة في تعليم القرآن الكريم بأساليب مبتكرة.', aboutEn: 'Experienced teacher in Quran education using innovative methods.', upcomingAr: ['حصة حفظ القرآن'], upcomingEn: ['Quran Memorization Session'] },
  3: { nameAr: 'الدكتور محمد الأمين', nameEn: 'Dr. Mohammed Al-Amin', bioAr: 'دكتوراه في اللغة العربية وآدابها', bioEn: 'PhD in Arabic Language and Literature', rating: 4.8, experience: 12, students: 80, sessionsCount: 200, subjects: ['اللغة العربية', 'البلاغة', 'النحو'], aboutAr: 'دكتور في اللغة العربية وآدابها، متخصص في البلاغة والنحو العربي بأسلوب مبسط وشيق.', aboutEn: 'PhD in Arabic Language, specialist in rhetoric and Arabic grammar with a simplified and engaging approach.', upcomingAr: ['البلاغة والأدب', 'النحو والصرف'], upcomingEn: ['Rhetoric & Literature', 'Grammar & Morphology'] },
};

export default function StudentTeacherProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const isRtl = i18n.language.startsWith('ar');
  const BackIcon = isRtl ? ArrowRight : ArrowLeft;

  const teacher = teachersData[id];

  if (!teacher) {
    return (
      <div className="min-h-screen bg-[#f3f7f6] dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-500 dark:text-slate-400">{t('studentDashboard.teachers.teacherNotFound')}</p>
          <button onClick={() => navigate('/dashboard/student/teachers')} className="mt-4 text-[#0f7a6c] font-bold text-sm">
            {t('studentDashboard.teachers.backToList')}
          </button>
        </div>
      </div>
    );
  }

  const upcoming = isRtl ? teacher.upcomingAr : teacher.upcomingEn;

  return (
    <div className="min-h-screen bg-[#f3f7f6] dark:bg-slate-900 p-4 sm:p-6" dir={isRtl ? 'rtl' : 'ltr'}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto space-y-5"
      >
        <button
          onClick={() => navigate('/dashboard/student/teachers')}
          className="flex items-center gap-2 text-[#0f7a6c] dark:text-emerald-400 font-bold text-sm hover:gap-3 transition-all"
        >
          <BackIcon size={18} />
          {t('studentDashboard.teachers.backToTeachers')}
        </button>

        <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="h-32 bg-gradient-to-br from-slate-700 to-slate-900 relative">
            <div className="absolute -bottom-10 start-6">
              <div className="w-20 h-20 bg-[#0f7a6c] rounded-full border-4 border-white dark:border-slate-800 flex items-center justify-center shadow-lg">
                <span className="text-white text-3xl font-bold">{teacher.nameAr.slice(0, 1)}</span>
              </div>
            </div>
            <div className="absolute top-3 end-4 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm text-amber-400 text-xs font-bold px-3 py-1.5 rounded-full">
              <Star size={12} fill="currentColor" />
              {teacher.rating}
            </div>
          </div>
          <div className="pt-12 pb-5 px-6">
            <h1 className="text-xl font-bold text-slate-800 dark:text-slate-100">
              {isRtl ? teacher.nameAr : teacher.nameEn}
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">{isRtl ? teacher.bioAr : teacher.bioEn}</p>

            <div className="flex flex-wrap gap-1.5 mt-3">
              {teacher.subjects.map((s) => (
                <span key={s} className="bg-emerald-50 dark:bg-emerald-900/20 text-[#0f7a6c] dark:text-emerald-400 text-[10px] font-bold px-2.5 py-0.5 rounded-full">{s}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: Clock, transKey: 'years', value: teacher.experience },
            { icon: BookOpen, transKey: 'sessionsProvided', value: teacher.sessionsCount },
            { icon: Award, transKey: 'students', value: teacher.students },
          ].map(({ icon: Icon, transKey, value }) => (
            <div key={transKey} className="bg-white dark:bg-slate-800 rounded-2xl p-4 text-center shadow-sm border border-slate-100 dark:border-slate-700">
              <div className="w-8 h-8 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Icon size={16} className="text-[#0f7a6c] dark:text-emerald-400" />
              </div>
              <p className="text-xl font-extrabold text-slate-800 dark:text-slate-100">{value}</p>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">{t(`studentDashboard.teachers.${transKey}`)}</p>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
          <h2 className="text-sm font-bold text-slate-700 dark:text-slate-200 mb-3">{t('studentDashboard.teachers.about')}</h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{isRtl ? teacher.aboutAr : teacher.aboutEn}</p>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
          <h2 className="text-sm font-bold text-slate-700 dark:text-slate-200 mb-3 flex items-center gap-2">
            <Calendar size={15} className="text-[#0f7a6c]" />
            {t('studentDashboard.teachers.upcomingSessions')}
          </h2>
          <div className="space-y-2">
            {upcoming.map((s, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-900 rounded-xl">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0f7a6c] shrink-0" />
                <span className="text-sm text-slate-700 dark:text-slate-200 font-medium">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
