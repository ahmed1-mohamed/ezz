import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft, Star, Calendar, ArrowRight, ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { studentPortalApi } from '@/shared/services/api/studentPortalApi';
import TeacherAbout from '@/pages/public/components/TeacherProfile/TeacherAbout.jsx';
import TeacherSubjects from '@/pages/public/components/TeacherProfile/TeacherSubjects.jsx';
import TeacherStats from '@/pages/public/components/TeacherProfile/TeacherStats.jsx';
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

function StudentTeacherSideCard({ teacher, t, isRtl, onScheduleClick, onBackClick }) {
  const [hasImgError, setHasImgError] = useState(false);
  const imgUrl = hasImgError ? null : getImageUrl(teacher?.image);
  const teacherInitial = teacher?.name ? teacher.name.trim().charAt(0) : 'م';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full flex flex-col items-center bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 dark:border-slate-800"
    >
      <div className="relative w-full max-w-[250px] sm:max-w-[340px] aspect-[4/5] mb-6">
        <div className={`absolute inset-0 bg-[#FECD31] rounded-[32px] translate-y-3 sm:translate-y-4 ${isRtl ? '-translate-x-3 sm:-translate-x-4' : 'translate-x-3 sm:translate-x-4'}`} />
        {imgUrl ? (
          <img
            src={imgUrl}
            alt={teacher?.name || ''}
            onError={() => setHasImgError(true)}
            className="relative w-full h-full object-cover rounded-[32px] shadow-sm z-10 transition-all duration-500"
          />
        ) : (
          <div className="relative w-full h-full rounded-[32px] bg-gradient-to-br from-[#00695C] via-[#00594C] to-[#0A4038] flex flex-col items-center justify-center text-white shadow-sm z-10 p-6 text-center select-none">
            <div className="w-24 h-24 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center text-4xl font-extrabold text-white mb-3 shadow-md">
              {teacherInitial}
            </div>
            <span className="text-base font-bold text-white/90">{teacher?.name}</span>
            <span className="text-xs font-semibold text-emerald-200/90 mt-1">{teacher?.title || t('teacher.certified', 'معلم معتمد')}</span>
          </div>
        )}
      </div>

      <h1 className="text-2xl sm:text-[28px] font-extrabold text-[#00695C] dark:text-emerald-400 text-center mb-1">
        {teacher?.name}
      </h1>
      <p className="text-slate-600 dark:text-slate-300 font-semibold text-center mb-6 text-sm sm:text-base">
        {teacher?.title}
      </p>

      <div className="flex items-center gap-4 mb-8 w-full">
        <div className="flex items-center gap-1 text-[#9B7B16] dark:text-amber-400 font-bold shrink-0">
          <span className="text-lg">{teacher?.rating || '5.0'}</span>
          <Star className="w-5 h-5 fill-[#9B7B16] dark:fill-amber-400" />
        </div>

        <div className="flex-1 flex gap-2 overflow-x-auto pb-2 scrollbar-hide flex-nowrap">
          {(teacher?.tags || []).map((tag, i) => (
            <span key={i} className="whitespace-nowrap bg-[#F2F2F2] dark:bg-slate-800 text-slate-700 dark:text-slate-200 px-4 py-2 rounded-full text-xs sm:text-sm font-bold">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="w-full space-y-3">
        <button
          type="button"
          onClick={onScheduleClick}
          className="w-full flex items-center justify-center gap-2 bg-[#00695C] hover:bg-[#004D40] dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-2xl transition-all shadow-md active:scale-95 text-base cursor-pointer"
        >
          <Calendar size={18} />
          <span>{t('studentDashboard.teachers.viewSchedule', 'عرض جدول الحصص')}</span>
        </button>
        <button
          type="button"
          onClick={onBackClick}
          className="w-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold py-3.5 px-6 rounded-2xl transition-all active:scale-95 text-base cursor-pointer"
        >
          {t('studentDashboard.teachers.backToList', 'العودة لقائمة المعلمين')}
        </button>
      </div>
    </motion.div>
  );
}

export default function StudentTeacherProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const ArrowBack = isRtl ? ChevronRight : ChevronLeft;

  const [teacher, setTeacher] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchTeacher = async () => {
      try {
        setLoading(true);
        const res = await studentPortalApi.fetchTeacherById(id);
        const realData = res?.data || res;

        const teacherData = {
          id: realData?.teacher_id || realData?.id || id,
          name: typeof realData?.name === 'object' && realData?.name !== null
            ? (isRtl ? realData.name.ar || realData.name.en : realData.name.en || realData.name.ar)
            : (realData?.name || ''),
          title: realData?.degree || realData?.title || realData?.jobTitle || t('teacher.certified', 'معلم معتمد'),
          image: realData?.image || realData?.imageUrl || realData?.avatar || realData?.photo || realData?.photoUrl || realData?.profileImage || realData?.user?.photoUrl || realData?.user?.image || null,
          rating: realData?.rating && Number(realData.rating) > 0 ? Number(realData.rating).toFixed(1) : '5.0',
          reviewsCount: realData?.reviewsCount || realData?.ratingsCount || 0,
          experience: realData?.yearsOfExperience !== undefined ? `${realData.yearsOfExperience} ${t('teacher.yearsExperience', 'سنوات خبرة')}` : (realData?.experienceYears ? `${realData.experienceYears} ${t('teacher.yearsExperience', 'سنوات خبرة')}` : ''),
          location: realData?.country || '',
          sessionsCount: realData?.totalLessons ? `+${realData.totalLessons}` : '0',
          tags: Array.isArray(realData?.specializations) && realData.specializations.length > 0
            ? realData.specializations.map((s) => typeof s === 'object' ? s.name : s).concat(realData.country ? [realData.country] : [])
            : (realData?.country ? [realData.country] : []),
          about: realData?.bio || realData?.aboutAr || realData?.aboutEn || realData?.about || '',
          philosophy: realData?.philosophy || '',
          credentials: Array.isArray(realData?.achievements) ? realData.achievements : (realData?.degree ? [realData.degree] : []),
          stats: {
            studentsCount: realData?.totalStudents ? `${realData.totalStudents}+` : '0',
            sessionsCount: realData?.totalLessons ? `${realData.totalLessons}+` : '0',
            experience: realData?.yearsOfExperience !== undefined ? `${realData.yearsOfExperience} ${t('teacher.yearsExperience', 'سنوات خبرة')}` : (realData?.experienceYears ? `${realData.experienceYears} ${t('teacher.yearsExperience', 'سنوات خبرة')}` : '')
          },
          subjects: Array.isArray(realData?.specializations) && realData.specializations.length > 0
            ? realData.specializations.map((s, idx) => ({
                id: s.id || idx + 1,
                name: typeof s === 'object' ? s.name : s,
                description: typeof s === 'object' && s.description ? s.description : ''
              }))
            : [],
          levels: Array.isArray(realData?.levels) ? realData.levels : [],
          schedule: Array.isArray(realData?.schedule) ? realData.schedule : []
        };

        setTeacher(teacherData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTeacher();
  }, [id, t, isRtl]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f3f7f6] dark:bg-slate-900 p-4 sm:p-6 flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (error || !teacher) {
    return (
      <div className="min-h-screen bg-[#f3f7f6] dark:bg-slate-900 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 text-center max-w-md shadow-sm border border-slate-100 dark:border-slate-700 space-y-4">
          <p className="text-slate-600 dark:text-slate-300 font-bold">
            {t('studentDashboard.teachers.teacherNotFound', 'لم يتم العثور على بيانات هذا المعلم')}
          </p>
          <button
            onClick={() => navigate('/dashboard/student/teachers')}
            className="px-5 py-2.5 rounded-xl bg-[#00695C] text-white font-bold text-xs cursor-pointer shadow-md"
          >
            {t('studentDashboard.teachers.backToList', 'العودة لقائمة المعلمين')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#EEF2F0]/80 dark:bg-slate-950 p-4 sm:p-6 lg:p-8 font-sans pb-12" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto mb-6 text-start">
        <button
          onClick={() => navigate('/dashboard/student/teachers')}
          className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-[#00695C] dark:hover:text-emerald-400 transition-colors font-bold cursor-pointer"
        >
          <ArrowBack className="w-5 h-5" />
          <span>{t('teacherProfile.back', 'العودة للمعلمين')}</span>
        </button>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 order-2 lg:order-1 space-y-6 text-start">
            <TeacherAbout teacher={teacher} t={t} />
            <TeacherSubjects subjects={teacher.subjects} t={t} />
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2">
            <StudentTeacherSideCard
              teacher={teacher}
              t={t}
              isRtl={isRtl}
              onScheduleClick={() => navigate('/dashboard/student/schedule')}
              onBackClick={() => navigate('/dashboard/student/teachers')}
            />
          </div>
        </div>

        <div className="mt-8 space-y-6">
          <TeacherStats stats={teacher.stats} t={t} />
        </div>
      </div>
    </div>
  );
}
