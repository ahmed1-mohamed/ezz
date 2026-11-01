import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Users, Search, BookOpen, Award, ArrowLeft, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { studentPortalApi } from '@/shared/services/api/studentPortalApi';
import Spinner from '@/shared/components/Spinner';

const getImageUrl = (imagePath) => {
  if (!imagePath || typeof imagePath !== 'string' || !imagePath.trim()) return null;
  const trimmed = imagePath.trim();
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://') || trimmed.startsWith('data:') || trimmed.startsWith('blob:')) {
    return trimmed;
  }
  const cleanPath = trimmed.startsWith('/') ? trimmed.slice(1) : trimmed;
  return `https://manaret-ezz.dramcode.top/${cleanPath}`;
};

function TeacherCard({ teacher, onView, isRtl }) {
  const { t } = useTranslation();
  const [hasImgError, setHasImgError] = useState(false);

  const teacherName = typeof teacher.name === 'object' && teacher.name !== null
    ? (isRtl ? teacher.name.ar || teacher.name.en : teacher.name.en || teacher.name.ar)
    : (teacher.name || '');

  const teacherTitle = teacher.degree || teacher.title || teacher.jobTitle || t('studentDashboard.teachers.certifiedTeacher', 'معلم معتمد');
  const teacherBio = teacher.bio || teacher.about || teacher.aboutAr || teacher.bioAr || '';

  const rawImg = teacher.image || teacher.imageUrl || teacher.photo || teacher.avatar || null;
  const imgUrl = hasImgError ? null : getImageUrl(rawImg);

  const tags = Array.isArray(teacher.specializations)
    ? teacher.specializations.map((s) => (typeof s === 'object' && s !== null ? s.name : String(s)))
    : Array.isArray(teacher.subjects)
    ? teacher.subjects
    : (teacher.subject ? [teacher.subject] : []);

  const experienceYears = teacher.yearsOfExperience ?? teacher.experienceYears ?? teacher.experience ?? null;
  const rating = teacher.rating && Number(teacher.rating) > 0 ? Number(teacher.rating).toFixed(1) : '5.0';
  const teacherInitial = teacherName ? teacherName.trim().charAt(0) : 'م';

  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
      whileHover={{ y: -4 }}
      className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-slate-100 dark:border-slate-700 flex flex-col text-start"
    >
      <div className="relative h-52 bg-slate-100 dark:bg-slate-700/40 overflow-hidden flex items-center justify-center">
        {imgUrl ? (
          <img
            src={imgUrl}
            alt={teacherName}
            onError={() => setHasImgError(true)}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#00695C] via-[#00594C] to-[#0A4038] flex flex-col items-center justify-center text-white select-none p-4">
            <div className="w-20 h-20 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center text-4xl font-extrabold text-white mb-2 shadow-md">
              {teacherInitial}
            </div>
            <span className="text-xs font-semibold text-emerald-200/90">{teacherTitle}</span>
          </div>
        )}

        <div className="absolute top-3 end-3 flex items-center gap-1 bg-black/50 backdrop-blur-md text-amber-400 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
          <Star size={12} fill="currentColor" />
          <span>{rating}</span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1" dir={isRtl ? 'rtl' : 'ltr'}>
        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-1">
          {teacherName}
        </h3>
        <p className="text-xs font-semibold text-[#0f7a6c] dark:text-emerald-400 mb-2">
          {teacherTitle}
        </p>

        {teacherBio && (
          <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed mb-4">
            {teacherBio}
          </p>
        )}

        <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
          {tags.slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
              className="bg-emerald-50 dark:bg-emerald-900/20 text-[#0f7a6c] dark:text-emerald-400 text-[11px] font-bold px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
          {experienceYears !== null && (
            <span className="bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 text-[11px] font-bold px-2.5 py-1 rounded-full">
              {experienceYears} {t('studentDashboard.teachers.yearsExp', 'سنوات خبرة')}
            </span>
          )}
        </div>

        <button
          onClick={() => onView(teacher.id || teacher.teacher_id || teacher._id)}
          className="w-full bg-[#0f7a6c] hover:bg-[#0c6156] active:scale-[0.98] text-white text-xs sm:text-sm font-bold py-3 rounded-2xl transition-all shadow-sm shadow-emerald-200/50 cursor-pointer"
        >
          {t('studentDashboard.teachers.viewProfile', 'عرض الملف الشخصي')}
        </button>
      </div>
    </motion.div>
  );
}

export default function StudentTeachers() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const navigate = useNavigate();

  const [teachersList, setTeachersList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function loadTeachers() {
      setIsLoading(true);
      try {
        const res = await studentPortalApi.fetchTeachers();
        const raw = res?.data || res || [];
        setTeachersList(Array.isArray(raw) ? raw : []);
      } catch (err) {
        console.error('Failed to load student teachers:', err);
      } finally {
        setIsLoading(false);
      }
    }
    loadTeachers();
  }, []);

  const filteredTeachers = useMemo(() => {
    if (!searchTerm.trim()) return teachersList;
    const term = searchTerm.toLowerCase().trim();
    return teachersList.filter((teacher) => {
      const name = typeof teacher.name === 'object' && teacher.name !== null
        ? `${teacher.name.ar || ''} ${teacher.name.en || ''}`
        : String(teacher.name || '');
      return name.toLowerCase().includes(term);
    });
  }, [teachersList, searchTerm]);

  return (
    <div className="min-h-screen bg-[#f3f7f6] dark:bg-slate-900 p-4 sm:p-6" dir={isRtl ? 'rtl' : 'ltr'}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto space-y-6"
      >
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-start">
            <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl flex items-center justify-center text-[#0f7a6c] dark:text-emerald-400">
              <Users size={28} />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100">
                {t('studentDashboard.teachers.title', 'قائمة المعلمين')}
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                {t('studentDashboard.teachers.subtitle', 'تعرف على نخبة المعلمين وتفاصيل ملفاتهم الشخصية ومناهجهم')}
              </p>
            </div>
          </div>

          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={t('studentDashboard.teachers.searchPlaceholder', 'بحث باسم المعلم...')}
              className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl py-3 ps-10 pe-4 text-xs sm:text-sm text-slate-800 dark:text-white outline-none focus:border-[#0f7a6c] transition-colors"
            />
            <Search size={16} className="absolute top-1/2 -translate-y-1/2 start-3.5 text-slate-400" />
          </div>
        </div>

        {isLoading ? (
          <div className="flex h-64 items-center justify-center">
            <Spinner />
          </div>
        ) : filteredTeachers.length === 0 ? (
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-12 text-center border border-slate-100 dark:border-slate-700 space-y-3">
            <Users size={36} className="text-slate-300 dark:text-slate-600 mx-auto" />
            <h3 className="text-lg font-bold text-slate-700 dark:text-slate-200">
              {t('studentDashboard.teachers.noTeachers', 'لا يوجد معلمون متاحون حالياً')}
            </h3>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTeachers.map((teacher) => (
              <TeacherCard
                key={teacher.id || teacher.teacher_id || teacher._id}
                teacher={teacher}
                onView={(id) => navigate(`/dashboard/student/teachers/${id}`)}
                isRtl={isRtl}
              />
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}
