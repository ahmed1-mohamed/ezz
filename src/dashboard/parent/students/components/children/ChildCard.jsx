import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import {
  Star,
  TrendingUp,
  BookOpen,
  Calendar,
  Layers,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  ArrowLeft,
  Sparkles,
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
  if (norm.includes('kindergarten') || norm.includes('روض')) {
    return isRtl ? 'رياض الأطفال' : 'Kindergarten';
  }
  return String(level || (isRtl ? 'مرحلة دراسية' : 'Student Level'));
}

export default function ChildCard({ child, onViewDetails, onRenewPackage, onBookTrial }) {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const [isGroupsExpanded, setIsGroupsExpanded] = useState(false);
  const studentId = child?.student_id || child?.id || child?.user_id || '';
  const studentName = child?.name || '-';
  const avatarChar = studentName.trim().charAt(0) || 'ط';
  const studentLevelText = resolveStudentLevel(child?.studentLevel, isRtl);
  const groupsList = Array.isArray(child?.groups) ? child.groups : [];
  const attendanceRate = Number(child?.attendanceRate ?? 0);
  const averageRating = Number(child?.averageRating ?? 0).toFixed(1);
  const totalEvaluations = Number(child?.totalEvaluations ?? 0);
  const totalClasses = Number(child?.sessionsBalance?.total || child?.totalClasses || 1);
  const usedClasses = Number(child?.sessionsBalance?.used || child?.usedClasses || 0);
  const remainingClasses = Number(child?.sessionsBalance?.remaining ?? Math.max(0, totalClasses - usedClasses));
  const progressPercent = Math.min(100, Math.max(0, Math.round((remainingClasses / (totalClasses || 1)) * 100)));
  const displayedGroups = isGroupsExpanded ? groupsList : groupsList.slice(0, 3);
  const hasExtraGroups = groupsList.length > 3;
  const handleDetailsClick = () => {
    if (onViewDetails) {
      onViewDetails(child);
    } else {
      navigate(`/dashboard/parent/children/${studentId}`);
    }
  };
  const handleAttendanceClick = () => {
    navigate(`/dashboard/parent/attendance?studentId=${studentId}`);
  };
  const handleRatingsClick = () => {
    navigate(`/dashboard/parent/ratings?studentId=${studentId}`);
  };
  const handlePackageClick = () => {
    if (onRenewPackage) {
      onRenewPackage(child);
    } else {
      navigate('/dashboard/parent/packages');
    }
  };
  return (
    <div
      className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between gap-6"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="space-y-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3.5 min-w-0">
            {child?.image ? (
              <img
                src={child.image}
                alt={studentName}
                className="w-14 h-14 rounded-2xl object-cover shrink-0 border-2 border-emerald-500/20 shadow-xs"
              />
            ) : (
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0f7a6c] to-[#0c6156] text-white flex items-center justify-center text-xl font-black shrink-0 shadow-sm">
                {avatarChar}
              </div>
            )}
            <div className="min-w-0">
              <h3 className="font-black text-lg text-slate-800 dark:text-white truncate">
                {studentName}
              </h3>
              <div className="flex flex-wrap items-center gap-2 mt-1">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#0f7a6c]/10 text-[#0f7a6c] dark:text-emerald-400">
                  {studentLevelText}
                </span>
                {studentId && (
                  <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                    ID: {studentId.slice(0, 8)}...
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="shrink-0 flex flex-col items-end">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 border border-amber-200/50 dark:border-amber-900/30 font-black text-xs">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>{averageRating}</span>
            </div>
            <span className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5 font-medium">
              {t('parent.childrenList.evaluationsCount', { count: totalEvaluations })}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
            <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-semibold mb-1">
              <span>{t('parentDashboard.childrenDetails.attendanceRate', 'نسبة الحضور')}</span>
              <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className={`text-xl font-black ${
                attendanceRate >= 80 ? 'text-emerald-600 dark:text-emerald-400' : attendanceRate >= 50 ? 'text-amber-600 dark:text-amber-400' : 'text-rose-500'
              }`}>
                {attendanceRate}%
              </span>
            </div>
          </div>
          <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
            <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-semibold mb-1">
              <span>{t('parent.childrenList.classes', 'رصيد الحصص')}</span>
              <BookOpen className="w-3.5 h-3.5 text-[#0f7a6c]" />
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-black text-slate-800 dark:text-white">
                {remainingClasses}
              </span>
              <span className="text-xs text-slate-400">
                / {totalClasses} {t('parent.childrenList.remaining', 'متبقية')}
              </span>
            </div>
          </div>
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400 dark:text-slate-500">
            <span>
              {usedClasses} {t('parent.childrenList.used', 'مستخدمة')}
            </span>
            <span className={remainingClasses > 5 ? 'text-emerald-600 font-bold' : remainingClasses > 0 ? 'text-amber-500 font-bold' : 'text-rose-500 font-bold'}>
              {t('parent.childrenList.balanceStatus', { remaining: remainingClasses, total: totalClasses })}
            </span>
          </div>
          <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-700 ease-out ${
                remainingClasses > 5 ? 'bg-[#0f7a6c]' : remainingClasses > 0 ? 'bg-amber-500' : 'bg-rose-500'
              }`}
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-slate-600 dark:text-slate-300">
            <span className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#0f7a6c]" />
              <span>{t('parent.childrenList.groupsTitle', 'المجموعات الدراسية')} ({groupsList.length})</span>
            </span>
            {hasExtraGroups && (
              <button
                type="button"
                onClick={() => setIsGroupsExpanded((prev) => !prev)}
                className="text-xs text-[#0f7a6c] dark:text-emerald-400 hover:underline flex items-center gap-0.5 cursor-pointer"
              >
                <span>{isGroupsExpanded ? t('common.showLess', 'عرض أقل') : `+${groupsList.length - 3} ${t('common.more', 'أخرى')}`}</span>
                {isGroupsExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
              </button>
            )}
          </div>
          {groupsList.length === 0 ? (
            <p className="text-xs text-slate-400 italic">
              {t('parent.childrenList.noGroups', 'لا توجد مجموعات دراسية مسجلة حالياً')}
            </p>
          ) : (
            <div className="flex flex-wrap gap-1.5">
              {displayedGroups.map((groupItem, gIdx) => {
                const groupName = typeof groupItem === 'object' && groupItem !== null
                  ? (groupItem.name || groupItem.title || '-')
                  : String(groupItem || '-');
                return (
                  <span
                    key={gIdx}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 truncate max-w-full"
                    title={groupName}
                  >
                    <BookOpen className="w-3 h-3 text-[#0f7a6c] shrink-0" />
                    <span className="truncate">{groupName}</span>
                  </span>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={handleAttendanceClick}
            className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer"
            title={t('parent.childrenList.attendanceRecord', 'سجل الحضور')}
          >
            <Calendar className="w-3.5 h-3.5 text-emerald-500" />
            <span className="hidden sm:inline">{t('parent.childrenList.attendanceRecord', 'الحضور')}</span>
          </button>
          <button
            type="button"
            onClick={handleRatingsClick}
            className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer"
            title={t('parent.childrenList.teacherRatings', 'التقييمات')}
          >
            <Star className="w-3.5 h-3.5 text-amber-500" />
            <span className="hidden sm:inline">{t('parent.childrenList.teacherRatings', 'التقييمات')}</span>
          </button>
          <button
            type="button"
            onClick={handlePackageClick}
            className="px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer border border-amber-200/60 dark:border-amber-900/40"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{t('parent.childrenList.package', 'الباقة')}</span>
          </button>
          {onBookTrial && (
            <button
              type="button"
              onClick={() => onBookTrial(child)}
              className="px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/40 text-[#0f7a6c] dark:text-emerald-300 text-xs font-black transition-colors flex items-center gap-1 cursor-pointer border border-emerald-200/60 dark:border-emerald-800/40"
              title={isRtl ? 'حجز حصة تجريبية مجانية' : 'Book Free Trial'}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>{isRtl ? 'حصة تجريبية' : 'Trial'}</span>
            </button>
          )}
        </div>
        <button
          type="button"
          onClick={handleDetailsClick}
          className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-[#0f7a6c] hover:bg-[#0c6156] text-white text-xs font-bold shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <span>{t('parent.childrenList.viewDetails', 'عرض التفاصيل')}</span>
          {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
        </button>
      </div>
    </div>
  );
}