import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Star,
  Clock,
  BookOpen,
  Award,
  Calendar,
  Users,
  Video,
  MapPin,
  ShieldCheck,
} from 'lucide-react';
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

export default function StudentTeacherProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const BackIcon = isRtl ? ArrowRight : ArrowLeft;

  const [teacher, setTeacher] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hasImgError, setHasImgError] = useState(false);

  useEffect(() => {
    async function loadTeacher() {
      try {
        setLoading(true);
        const res = await studentPortalApi.fetchTeacherById(id);
        const data = res?.data || res;
        setTeacher(data);
      } catch (err) {
        console.error('Failed to load student teacher details:', err);
      } finally {
        setLoading(false);
      }
    }
    loadTeacher();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f3f7f6] dark:bg-slate-900 p-4 sm:p-6 flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (!teacher) {
    return (
      <div className="min-h-screen bg-[#f3f7f6] dark:bg-slate-900 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 text-center max-w-md shadow-sm border border-slate-100 dark:border-slate-700">
          <p className="text-slate-600 dark:text-slate-300 font-bold mb-4">
            {t('studentDashboard.teachers.teacherNotFound', 'لم يتم العثور على بيانات هذا المعلم')}
          </p>
          <button
            onClick={() => navigate('/dashboard/student/teachers')}
            className="px-5 py-2.5 rounded-xl bg-[#0f7a6c] text-white font-bold text-xs cursor-pointer shadow-md"
          >
            {t('studentDashboard.teachers.backToList', 'العودة لقائمة المعلمين')}
          </button>
        </div>
      </div>
    );
  }

  const teacherName = typeof teacher.name === 'object' && teacher.name !== null
    ? (isRtl ? teacher.name.ar || teacher.name.en : teacher.name.en || teacher.name.ar)
    : (teacher.name || '');

  const teacherTitle = teacher.degree || teacher.title || teacher.jobTitle || t('studentDashboard.teachers.certifiedTeacher', 'معلم معتمد');
  const teacherBio = teacher.bio || teacher.about || teacher.aboutAr || teacher.bioAr || '';
  const teacherPhilosophy = teacher.philosophy || '';
  const location = teacher.country || '';

  const rawImg = teacher.image || teacher.imageUrl || teacher.photo || teacher.avatar || null;
  const imgUrl = hasImgError ? null : getImageUrl(rawImg);
  const teacherInitial = teacherName ? teacherName.trim().charAt(0) : 'م';

  const tags = Array.isArray(teacher.specializations)
    ? teacher.specializations.map((s) => (typeof s === 'object' && s !== null ? s.name : String(s)))
    : Array.isArray(teacher.subjects)
    ? teacher.subjects
    : (teacher.subject ? [teacher.subject] : []);

  const rating = teacher.rating && Number(teacher.rating) > 0 ? Number(teacher.rating).toFixed(1) : '5.0';
  const totalStudents = teacher.totalStudents ? `${teacher.totalStudents}+` : '0';
  const totalLessons = teacher.totalLessons ? `${teacher.totalLessons}+` : '0';
  const yearsExp = teacher.yearsOfExperience !== undefined ? `${teacher.yearsOfExperience} سنوات خبرة` : (teacher.experienceYears ? `${teacher.experienceYears} سنوات خبرة` : '-');

  return (
    <div className="min-h-screen bg-[#f3f7f6] dark:bg-slate-900 p-4 sm:p-6" dir={isRtl ? 'rtl' : 'ltr'}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto space-y-6"
      >
        <button
          onClick={() => navigate('/dashboard/student/teachers')}
          className="flex items-center gap-2 text-[#0f7a6c] dark:text-emerald-400 font-bold text-sm hover:gap-3 transition-all cursor-pointer"
        >
          <BackIcon size={18} />
          <span>{t('studentDashboard.teachers.backToTeachers', 'العودة لقائمة المعلمين')}</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Info Card (Right on RTL) */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center">
              <div className="relative w-full max-w-[240px] aspect-[4/5] rounded-3xl overflow-hidden mb-5 shadow-sm bg-slate-100 dark:bg-slate-700">
                {imgUrl ? (
                  <img
                    src={imgUrl}
                    alt={teacherName}
                    onError={() => setHasImgError(true)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#00695C] via-[#00594C] to-[#0A4038] flex flex-col items-center justify-center text-white p-4 select-none">
                    <div className="w-24 h-24 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center text-4xl font-extrabold text-white mb-2 shadow-md">
                      {teacherInitial}
                    </div>
                    <span className="text-xs font-semibold text-emerald-200/90">{teacherTitle}</span>
                  </div>
                )}
                <div className="absolute top-3 end-3 flex items-center gap-1 bg-black/60 backdrop-blur-md text-amber-400 text-xs font-bold px-3 py-1 rounded-full">
                  <Star size={12} fill="currentColor" />
                  <span>{rating}</span>
                </div>
              </div>

              <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-1">
                {teacherName}
              </h1>
              <p className="text-sm font-semibold text-[#0f7a6c] dark:text-emerald-400 mb-4">
                {teacherTitle}
              </p>

              {location && (
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-4 bg-slate-50 dark:bg-slate-900 px-3 py-1.5 rounded-full">
                  <MapPin size={13} className="text-[#0f7a6c]" />
                  <span>{location}</span>
                </div>
              )}

              <div className="flex flex-wrap gap-1.5 justify-center">
                {tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-emerald-50 dark:bg-emerald-900/20 text-[#0f7a6c] dark:text-emerald-400 text-xs font-bold px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Details & About (Left on RTL) */}
          <div className="lg:col-span-7 order-2 lg:order-1 space-y-6 text-start">
            {/* About Card */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 dark:border-slate-700 space-y-4">
              <h2 className="text-lg font-bold text-[#0f7a6c] dark:text-emerald-400">
                {t('studentDashboard.teachers.aboutTeacher', 'نبذة عن المعلم')}
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                {teacherBio || t('studentDashboard.teachers.defaultBio', 'معلم معتمد في أكاديمية منارة العز، يمتلك خبرة تعليمية واسعة ويسعى لتقديم تجربة تعليمية تفاعلية وملهمة لأبنائنا الطلاب.')}
              </p>

              {teacherPhilosophy && (
                <div className="pt-4 border-t border-slate-100 dark:border-slate-700">
                  <h3 className="text-sm font-bold text-slate-700 dark:text-slate-200 mb-2">
                    {t('studentDashboard.teachers.philosophy', 'فلسفة التدريس')}
                  </h3>
                  <div className="border-r-4 border-amber-500 pr-3 py-1">
                    <p className="text-xs text-slate-600 dark:text-slate-300 font-semibold leading-relaxed italic">
                      "{teacherPhilosophy}"
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: t('studentDashboard.teachers.studentsCount', 'عدد الطلاب'), value: totalStudents, icon: Users, color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-900/20' },
                { label: t('studentDashboard.teachers.sessionsCount', 'إجمالي الحصص'), value: totalLessons, icon: Video, color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-900/20' },
                { label: t('studentDashboard.teachers.yearsExp', 'الخبرة'), value: yearsExp, icon: Award, color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-900/20' },
              ].map((s, idx) => {
                const Icon = s.icon;
                return (
                  <div key={idx} className="bg-white dark:bg-slate-800 rounded-3xl p-4 sm:p-5 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
                    <div className={`w-10 h-10 ${s.bg} ${s.color} rounded-2xl flex items-center justify-center mx-auto mb-2`}>
                      <Icon size={18} />
                    </div>
                    <p className="text-lg sm:text-xl font-extrabold text-slate-800 dark:text-slate-100" dir="ltr">{s.value}</p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{s.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
