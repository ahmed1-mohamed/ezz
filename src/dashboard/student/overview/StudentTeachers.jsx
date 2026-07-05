import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { teachersApi } from '@/shared/services/api/teachersApi';
import Spinner from '@/shared/components/Spinner';

function TeacherCard({ teacher, onView, isRtl }) {
  const { t } = useTranslation();

  const teacherName = typeof teacher.name === 'object' && teacher.name !== null
    ? (isRtl ? teacher.name.ar || teacher.name.en : teacher.name.en || teacher.name.ar)
    : (teacher.name || '');

  const teacherBio = isRtl
    ? teacher.aboutAr || teacher.bioAr || 'حاصل على إجازة في القراءات العشر'
    : teacher.aboutEn || teacher.bioEn || 'Certified in the Ten Quranic Recitations';

  const subjectsList = Array.isArray(teacher.subjects)
    ? teacher.subjects
    : (teacher.subject ? [teacher.subject] : []);

  const experienceYears = teacher.experienceYears || teacher.experience || 5;
  const initials = teacherName ? teacherName.slice(0, 1) : '';

  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
      whileHover={{ y: -3 }}
      className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col"
    >
      <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
        <div className="w-24 h-24 bg-[#0f7a6c] rounded-full flex items-center justify-center shadow-xl">
          <span className="text-white text-4xl font-bold">{initials}</span>
        </div>
        <div className="absolute top-3 end-3 flex items-center gap-1 bg-black/40 backdrop-blur-sm text-amber-400 text-xs font-bold px-2.5 py-1 rounded-full">
          <Star size={11} fill="currentColor" />
          <span>{teacher.rating || 5.0}</span>
        </div>
      </div>

      <div className="p-4 flex flex-col flex-1" dir={isRtl ? 'rtl' : 'ltr'}>
        <h3 className="text-base font-bold text-slate-800 dark:text-slate-100 text-end mb-0.5">
          {teacherName}
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 text-end mb-3">
          {teacherBio}
        </p>

        <div className="flex flex-wrap gap-1.5 justify-end mb-3">
          {subjectsList.map((s) => (
            <span key={s} className="bg-emerald-50 dark:bg-emerald-900/20 text-[#0f7a6c] dark:text-emerald-400 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
              {s}
            </span>
          ))}
          <span className="bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
            {experienceYears} {t('studentDashboard.teachers.years')} {t('studentDashboard.teachers.exp')}
          </span>
        </div>

        <button
          onClick={() => onView(teacher.id)}
          className="mt-auto w-full bg-[#0f7a6c] hover:bg-[#0c6156] active:scale-[0.98] text-white text-sm font-bold py-2.5 rounded-xl transition-all duration-200 shadow-sm shadow-emerald-200/50 cursor-pointer"
        >
          {t('studentDashboard.teachers.viewProfile')}
        </button>
      </div>
    </motion.div>
  );
}

export default function StudentTeachers() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language.startsWith('ar');
  const navigate = useNavigate();

  const [teachersList, setTeachersList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadTeachers() {
      setIsLoading(true);
      try {
        const res = await teachersApi.fetchLocalizedTeachersList();
        if (res.success && Array.isArray(res.data)) {
          setTeachersList(res.data);
        }
      } catch (err) {
        console.error('Failed to load system teachers:', err);
      } finally {
        setIsLoading(false);
      }
    }
    loadTeachers();
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f3f7f6] dark:bg-slate-900 p-4 sm:p-6 max-w-7xl mx-auto" dir={isRtl ? 'rtl' : 'ltr'}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className=" space-y-5">
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl flex items-center justify-center shrink-0">
              <Users size={20} className="text-[#0f7a6c] dark:text-emerald-400" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800 dark:text-slate-100">{t('studentDashboard.teachers.title')}</h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{t('studentDashboard.teachers.subtitle')}</p>
            </div>
          </div>
        </div>

        <motion.div
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {teachersList.map((tItem) => (
            <TeacherCard
              key={tItem.id}
              teacher={tItem}
              isRtl={isRtl}
              onView={(id) => navigate(`/dashboard/student/teachers/${id}`)}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
