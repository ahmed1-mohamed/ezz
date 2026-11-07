import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Users, Search, MapPin, BookOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { studentPortalApi } from '@/shared/services/api/studentPortalApi';
import Spinner from '@/shared/components/Spinner';
import useDebounce from '@/shared/hooks/useDebounce';

const getImageUrl = (imagePath) => {
  if (!imagePath || typeof imagePath !== 'string' || !imagePath.trim()) return null;
  const trimmed = imagePath.trim();
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://') || trimmed.startsWith('data:') || trimmed.startsWith('blob:')) {
    return trimmed;
  }
  const cleanPath = trimmed.startsWith('/') ? trimmed.slice(1) : trimmed;
  return `https://manaret-ezz.dramcode.top/${cleanPath}`;
};

function WebsiteStyleTeacherCard({ teacher, onView, isRtl, t, index = 0 }) {
  const [hasImgError, setHasImgError] = useState(false);
  const teacherName = typeof teacher.name === 'object' && teacher.name !== null
    ? (isRtl ? teacher.name.ar || teacher.name.en : teacher.name.en || teacher.name.ar)
    : (teacher.name || '');
  const teacherTitle = teacher.degree || teacher.title || teacher.jobTitle || t('teacher.certified', 'معلم معتمد');
  const rawImg = teacher.image || teacher.imageUrl || teacher.photo || teacher.avatar || null;
  const imgSrc = hasImgError ? null : getImageUrl(rawImg);
  const teacherId = teacher.id || teacher.teacher_id || teacher._id;
  const teacherInitial = teacherName ? teacherName.trim().charAt(0) : 'م';
  const ratingDisplay = teacher.rating && Number(teacher.rating) > 0
    ? Number(teacher.rating).toFixed(1)
    : '5.0';
  const countryName = useMemo(() => {
    if (!teacher.country) return null;
    if (typeof teacher.country === 'object' && teacher.country !== null) {
      return teacher.country.name || teacher.country.ar || teacher.country.en || null;
    }
    const str = String(teacher.country).trim();
    return str || null;
  }, [teacher.country]);
  const specializations = useMemo(() => {
    const list = [];
    if (Array.isArray(teacher.specializations)) {
      teacher.specializations.forEach((s) => {
        const name = typeof s === 'object' && s !== null ? s.name : s;
        if (name && name !== teacher.subject && !list.includes(name)) {
          list.push(name);
        }
      });
    } else if (Array.isArray(teacher.subjects)) {
      teacher.subjects.forEach((s) => {
        const name = typeof s === 'object' && s !== null ? s.name : s;
        if (name && !list.includes(name)) list.push(name);
      });
    }
    return list.slice(0, 2);
  }, [teacher.specializations, teacher.subjects, teacher.subject]);
  const experienceYears = teacher.yearsOfExperience ?? teacher.experienceYears ?? teacher.experience ?? null;
  const handleCardClick = () => {
    if (teacherId) onView(teacherId);
  };
  return (
    <motion.article
      layout="position"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="group w-full max-w-[320px] mx-auto overflow-hidden rounded-[28px] bg-[#F5F5F2] dark:bg-slate-900 border border-transparent dark:border-slate-800 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl flex flex-col justify-between"
    >
      <div
        onClick={handleCardClick}
        className="relative overflow-hidden rounded-[28px] p-3 pb-0 cursor-pointer"
      >
        {imgSrc ? (
          <img
            src={imgSrc}
            onError={() => setHasImgError(true)}
            alt={teacherName}
            className="aspect-[4/5] w-full rounded-[24px] object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="aspect-[4/5] w-full rounded-[24px] bg-gradient-to-br from-[#00695C] via-[#00594C] to-[#0A4038] flex flex-col items-center justify-center text-white shadow-inner select-none transition-transform duration-700 group-hover:scale-105 p-6 text-center">
            <div className="w-24 h-24 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center text-4xl font-extrabold text-white mb-3 shadow-md">
              {teacherInitial}
            </div>
            <span className="text-sm font-bold text-white/90 line-clamp-1">{teacherName}</span>
            <span className="text-xs font-semibold text-emerald-200/90 mt-1">{teacher.subject || teacherTitle}</span>
          </div>
        )}
      </div>
      <div className="space-y-4 p-5 text-start flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-2">
            <div className="flex flex-col flex-1 min-w-0">
              <h3
                onClick={handleCardClick}
                className="text-lg lg:text-xl font-extrabold leading-tight text-[#00695C] dark:text-emerald-400 truncate cursor-pointer hover:underline"
                title={teacherName}
              >
                {teacherName}
              </h3>
              <p className="mt-1 text-xs sm:text-sm font-semibold text-[#8B6B15] dark:text-amber-400 line-clamp-1" title={teacherTitle}>
                {teacherTitle}
              </p>
            </div>
            <div className="flex items-center gap-1 text-[#9B7B16] dark:text-amber-400 shrink-0 mt-0.5 bg-[#F9F5E8] dark:bg-amber-950/40 px-2.5 py-1 rounded-full border border-[#9B7B16]/20 dark:border-amber-900/40">
              <Star className="h-3.5 w-3.5 fill-[#9B7B16] dark:fill-amber-400 text-[#9B7B16] dark:text-amber-400" />
              <span className="text-xs font-bold">{ratingDisplay}</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-start gap-1.5 pt-1">
            {countryName && (
              <span className="rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-900/40 px-2.5 py-1 text-xs font-semibold text-[#8B6B15] dark:text-amber-400 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#8B6B15] dark:text-amber-400 shrink-0" />
                <span>{countryName}</span>
              </span>
            )}
            {experienceYears !== null && (
              <span className="rounded-full bg-[#E7E7E4] dark:bg-slate-800 px-2.5 py-1 text-xs font-semibold text-[#555] dark:text-slate-300">
                {experienceYears} {t('teacher.yearsExperience', 'سنوات خبرة')}
              </span>
            )}
            {teacher.subject && (
              <span className="rounded-full bg-[#00695C]/10 dark:bg-[#00695C]/20 px-2.5 py-1 text-xs font-bold text-[#00695C] dark:text-emerald-400">
                {teacher.subject}
              </span>
            )}
            {specializations.map((spec, i) => (
              <span key={i} className="rounded-full bg-[#E7E7E4] dark:bg-slate-800 px-2.5 py-1 text-xs font-semibold text-[#7B7B7B] dark:text-slate-400">
                {spec}
              </span>
            ))}
          </div>
        </div>
        <button
          type="button"
          onClick={handleCardClick}
          className="w-full rounded-2xl bg-[#00695C] hover:bg-[#005247] dark:bg-emerald-600 dark:hover:bg-emerald-700 py-3 text-sm font-bold text-white transition-all duration-300 ease-out hover:shadow-md active:scale-95 cursor-pointer mt-2"
        >
          {t('teacher.viewProfile', 'عرض الملف الشخصي')}
        </button>
      </div>
    </motion.article>
  );
}

export default function StudentTeachers() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const navigate = useNavigate();
  const [teachersList, setTeachersList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 350);
  const [selectedSubject, setSelectedSubject] = useState('');
  useEffect(() => {
    let isMounted = true;
    async function loadTeachers() {
      setIsLoading(true);
      try {
        const params = {};
        if (debouncedSearch.trim()) params.search = debouncedSearch.trim();
        const res = await studentPortalApi.fetchTeachers(params);
        if (!isMounted) return;
        const raw = res?.data || res || [];
        setTeachersList(Array.isArray(raw) ? raw : []);
      } catch (err) {
        console.warn('Failed to load student teachers:', err);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }
    loadTeachers();
    return () => {
      isMounted = false;
    };
  }, [debouncedSearch]);
  const availableSubjects = useMemo(() => {
    const subjectsSet = new Set();
    teachersList.forEach((teacher) => {
      if (teacher.subject) subjectsSet.add(teacher.subject);
      if (Array.isArray(teacher.specializations)) {
        teacher.specializations.forEach((s) => {
          const name = typeof s === 'object' && s !== null ? s.name : s;
          if (name) subjectsSet.add(name);
        });
      }
    });
    return Array.from(subjectsSet);
  }, [teachersList]);
  const filteredTeachers = useMemo(() => {
    return teachersList.filter((teacher) => {
      const teacherSubjects = [teacher.subject].concat(
        Array.isArray(teacher.specializations)
          ? teacher.specializations.map((s) => (typeof s === 'object' && s !== null ? s.name : s))
          : []
      );
      return !selectedSubject || teacherSubjects.includes(selectedSubject);
    });
  }, [teachersList, selectedSubject]);
  return (
    <div className="min-h-screen bg-[#EEF2F0]/80 dark:bg-slate-950 p-4 sm:p-6 lg:p-8" dir={isRtl ? 'rtl' : 'ltr'}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto space-y-6"
      >
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-start">
            <div className="w-14 h-14 bg-[#00695C]/10 text-[#00695C] dark:bg-emerald-950/40 dark:text-emerald-400 rounded-2xl flex items-center justify-center shrink-0">
              <Users size={28} />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white">
                {t('studentDashboard.teachers.title', 'قائمة المعلمين')}
              </h1>
              <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-500 font-semibold mt-1">
                {t('studentDashboard.teachers.subtitle', 'تعرف على نخبة المعلمين وتفاصيل ملفاتهم الشخصية ومناهجهم')}
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={t('studentDashboard.teachers.searchPlaceholder', 'بحث باسم المعلم...')}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl py-3 ps-10 pe-4 text-xs sm:text-sm text-slate-800 dark:text-white outline-none focus:border-[#00695C] transition-colors"
              />
              <Search size={16} className="absolute top-1/2 -translate-y-1/2 start-3.5 text-slate-400" />
            </div>
            {availableSubjects.length > 0 && (
              <div className="relative w-full sm:w-48">
                <select
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl py-3 px-4 pe-9 text-xs sm:text-sm text-slate-800 dark:text-white outline-none appearance-none cursor-pointer focus:border-[#00695C]"
                >
                  <option value="">{t('teacher.allSubjects', 'جميع التخصصات')}</option>
                  {availableSubjects.map((subj) => (
                    <option key={subj} value={subj}>
                      {subj}
                    </option>
                  ))}
                </select>
                <BookOpen size={16} className="absolute top-1/2 -translate-y-1/2 end-3.5 text-slate-400 pointer-events-none" />
              </div>
            )}
          </div>
        </div>
        {isLoading ? (
          <div className="flex h-64 items-center justify-center">
            <Spinner />
          </div>
        ) : filteredTeachers.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-12 text-center border border-slate-100 dark:border-slate-800 space-y-3">
            <Users size={36} className="text-slate-300 dark:text-slate-600 mx-auto" />
            <h3 className="text-lg font-bold text-slate-700 dark:text-slate-200">
              {t('studentDashboard.teachers.noTeachers', 'لم يتم العثور على معلمين يطابقون بحثك')}
            </h3>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTeachers.map((teacher, index) => (
              <WebsiteStyleTeacherCard
                key={teacher.id || teacher.teacher_id || teacher._id || index}
                teacher={teacher}
                index={index}
                isRtl={isRtl}
                t={t}
                onView={(id) => navigate(`/dashboard/student/teachers/${id}`)}
              />
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}
