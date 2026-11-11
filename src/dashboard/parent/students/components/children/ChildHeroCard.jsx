import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import {
  Star,
  Calendar,
  Layers,
  ArrowRight,
  ArrowLeft,
  BookOpen,
  Globe,
  CheckCircle2,
  XCircle,
  } from 'lucide-react';

function resolveStudentLevel(level, isRtl) {
  const norm = String(level || '').toLowerCase();
  if (norm.includes('middle') || norm.includes('إعداد')) {
    return isRtl ? 'المرحلة الإعدادية' : 'Middle School';
  }
  if (norm.includes('primary') || norm.includes('ابتدائ')) {
    return isRtl ? 'المرحلة الابتدائية' : 'Primary School';
  }
  if (norm.includes('high') || norm.includes('ثانو')) {
    return isRtl ? 'المرحلة الثانوية' : 'High School';
  }
  return String(level || (isRtl ? 'مرحلة دراسية' : 'Student Level'));
}

function formatBirthDate(dateStr, isRtl) {
  if (!dateStr) return '-';
  try {
    const d = new Date(dateStr);
    if (!isNaN(d.getTime())) {
      return new Intl.DateTimeFormat(isRtl ? 'ar-EG' : 'en-GB', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }).format(d);
    }
  } catch {
    return String(dateStr);
  }
  return String(dateStr);
}

export default function ChildHeroCard({
  child,
  allChildren = [],
  onSelectChild,
  onBack,
}) {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const studentId = child?.student_id || child?.id || child?.user_id || '';
  const studentCode = studentId ? String(studentId).slice(-8) : '';
  const studentName = child?.name || '-';
  const avatarChar = studentName.trim().charAt(0) || 'ط';
  const studentLevelText = resolveStudentLevel(child?.studentLevel, isRtl);
  const country = child?.country || '';
  const age = child?.age !== undefined && child?.age !== null ? Number(child.age) : null;
  const birthDateFormatted = child?.birthDate ? formatBirthDate(child.birthDate, isRtl) : null;
  const isActive = child?.active !== false;
  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate('/dashboard/parent/children');
    }
  };
  const handleSelectChange = (e) => {
    const selectedId = e.target.value;
    if (onSelectChild) {
      onSelectChild(selectedId);
    } else {
      navigate(`/dashboard/parent/children/${selectedId}`);
    }
  };
  return (
    <div
      className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-100 dark:border-slate-800 shadow-sm space-y-6"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
        <button
          type="button"
          onClick={handleBack}
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer"
        >
          {isRtl ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
          <span>{t('parent.childrenList.backToList', 'العودة لقائمة الأبناء')}</span>
        </button>
        {allChildren.length > 1 && (
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 font-semibold hidden sm:inline">
              {t('parent.childrenList.switchChild', 'تبديل الابن')}:
            </span>
            <select
              value={studentId}
              onChange={handleSelectChange}
              className="px-3.5 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-white cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-[#0f7a6c]"
            >
              {allChildren.map((c) => {
                const cId = c?.student_id || c?.id || c?.user_id;
                return (
                  <option key={cId} value={cId}>
                    {c.name}
                  </option>
                );
              })}
            </select>
          </div>
        )}
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-start min-w-0">
          <div className="relative">
            {child?.image ? (
              <img
                src={child.image}
                alt={studentName}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl object-cover shrink-0 border-2 border-emerald-500/20 shadow-md"
              />
            ) : (
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-br from-[#0f7a6c] to-[#0a4d44] text-white flex items-center justify-center text-3xl sm:text-4xl font-black shrink-0 shadow-md">
                {avatarChar}
              </div>
            )}
            <span
              className={`absolute bottom-0 end-0 w-4 h-4 rounded-full border-2 border-white dark:border-slate-900 ${
                isActive ? 'bg-emerald-500' : 'bg-slate-400'
              }`}
              title={isActive ? 'حساب نشط' : 'حساب غير نشط'}
            />
          </div>
          <div className="space-y-2 min-w-0">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <h1 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white truncate">
                {studentName}
              </h1>
              <span
                className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-black ${
                  isActive
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                }`}
              >
                {isActive ? <CheckCircle2 className="w-3 h-3 text-emerald-600" /> : <XCircle className="w-3 h-3" />}
                <span>{isActive ? 'حساب نشط' : 'حساب غير نشط'}</span>
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-[#0f7a6c]/10 text-[#0f7a6c] dark:text-emerald-400 border border-[#0f7a6c]/20">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{studentLevelText}</span>
              </span>
              {country && (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  <Globe className="w-3.5 h-3.5 text-blue-500" />
                  <span>{country}</span>
                </span>
              )}
              {age !== null && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  <span>{age} {t('parent.childrenList.yearsOld', 'سنوات')}</span>
                </span>
              )}
              {birthDateFormatted && (
                <span className="inline-flex items-center gap-1 text-xs text-slate-400 dark:text-slate-500 px-2.5 py-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{birthDateFormatted}</span>
                </span>
              )}
            </div>
            {studentCode && (
              <div className="pt-0.5">
                <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 px-2.5 py-0.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50">
                  {t('parent.childrenList.studentIdLabel', 'كود الطالب')}: {studentCode}
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-2.5 w-full md:w-auto shrink-0">
          <button
            type="button"
            onClick={() => navigate('/dashboard/parent/packages')}
            className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Layers className="w-4 h-4" />
            <span>{t('parent.childrenList.renewPackage', 'تجديد / شراء باقة')}</span>
          </button>
          <button
            type="button"
            onClick={() => navigate(`/dashboard/parent/attendance?studentId=${studentId}`)}
            className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-emerald-500" />
            <span>{t('parent.childrenList.attendanceRecord', 'سجل الحضور')}</span>
          </button>
          <button
            type="button"
            onClick={() => navigate(`/dashboard/parent/ratings?studentId=${studentId}`)}
            className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span>{t('parent.childrenList.teacherRatings', 'تقييم المعلمين')}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
