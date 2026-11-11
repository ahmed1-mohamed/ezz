import React from 'react';
import { Camera, MapPin, Calendar, Mail, CheckCircle2, Star, Award, GraduationCap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function resolveName(nameField, isRtl) {
  if (typeof nameField === 'object' && nameField !== null) {
    return (isRtl ? nameField.ar || nameField.en : nameField.en || nameField.ar) || '';
  }
  return String(nameField || '');
}

export default React.memo(function StudentProfileHeader({
  student,
  age,
  countryName,
  birthDateFormatted,
  attendanceRate = '0%',
  averageRating = '5.0',
  totalEvaluations = 0,
  academicLevel = '-',
  onImageChange,
}) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const studentName = resolveName(student?.name, isRtl) || (isRtl ? student?.nameAr : student?.nameEn) || '-';
  const initial = (studentName === '-' ? 'ط' : studentName).trim().charAt(0);
  const imageUrl = student?.image || student?.photoUrl || student?.avatar;
  const email = student?.email || '-';
  const resolvedLevel = academicLevel && academicLevel !== '-'
    ? academicLevel
    : (student?.level || student?.grade || t('teacherCurricula.intermediate', 'متوسط'));
  const statItems = [
    {
      id: 'attendanceRate',
      label: t('studentDashboard.profile.attendanceRate', 'معدل الحضور'),
      value: attendanceRate,
      icon: CheckCircle2,
      colorClass: 'text-emerald-600 dark:text-emerald-400',
      bgClass: 'bg-emerald-50/70 dark:bg-emerald-950/20 border-emerald-100/60 dark:border-emerald-900/30',
      iconBg: 'bg-emerald-100/70 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-300',
    },
    {
      id: 'averageRating',
      label: t('studentDashboard.profile.averageRating', 'متوسط التقييم'),
      value: `${averageRating} / 5`,
      icon: Star,
      colorClass: 'text-amber-500 dark:text-amber-400',
      bgClass: 'bg-amber-50/70 dark:bg-amber-950/20 border-amber-100/60 dark:border-amber-900/30',
      iconBg: 'bg-amber-100/70 dark:bg-amber-900/40 text-amber-500 dark:text-amber-300',
    },
    {
      id: 'totalEvaluations',
      label: t('studentDashboard.profile.totalEvaluations', 'إجمالي التقييمات'),
      value: totalEvaluations,
      icon: Award,
      colorClass: 'text-purple-600 dark:text-purple-400',
      bgClass: 'bg-purple-50/70 dark:bg-purple-950/20 border-purple-100/60 dark:border-purple-900/30',
      iconBg: 'bg-purple-100/70 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300',
    },
    {
      id: 'academicLevel',
      label: t('studentDashboard.profile.academicLevel', 'المستوى الدراسي'),
      value: resolvedLevel,
      icon: GraduationCap,
      colorClass: 'text-[#005953] dark:text-teal-400',
      bgClass: 'bg-teal-50/70 dark:bg-teal-950/20 border-teal-100/60 dark:border-teal-900/30',
      iconBg: 'bg-teal-100/70 dark:bg-teal-900/40 text-[#005953] dark:text-teal-300',
    },
  ];
  return (
    <div
      className="bg-white dark:bg-slate-900 rounded-[28px] p-6 sm:p-8 shadow-xs border border-slate-100 dark:border-slate-800 space-y-6"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="flex flex-col sm:flex-row items-center gap-5 pb-6 border-b border-slate-100 dark:border-slate-800 text-center sm:text-start">
        <div className="relative group shrink-0">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={studentName}
              className="w-20 h-20 rounded-3xl object-cover shadow-xs border border-slate-100 dark:border-slate-800"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          ) : (
            <div className="w-20 h-20 rounded-3xl bg-[#005953] text-white flex items-center justify-center font-black text-2xl shadow-xs">
              {initial}
            </div>
          )}
          <label
            htmlFor="headerProfilePhotoInput"
            className="absolute bottom-0 end-0 w-7 h-7 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full flex items-center justify-center shadow-xs cursor-pointer hover:bg-slate-50 transition-colors"
            title={t('studentDashboard.profile.changePhoto', 'تغيير الصورة')}
          >
            <Camera size={13} className="text-slate-600 dark:text-slate-300" />
            <input
              id="headerProfilePhotoInput"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={onImageChange}
            />
          </label>
        </div>
        <div className="flex-1 min-w-0 space-y-1.5">
          <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
            <span className="text-xs font-bold text-[#005953] dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-0.5 rounded-full">
              {t('studentDashboard.profile.studentRole', 'حساب طالب')}
            </span>
            {age !== null && age !== undefined && (
              <span className="text-xs font-bold text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 px-3 py-0.5 rounded-full">
                {t('studentDashboard.profile.age', 'العمر')}: {age} {t('studentDashboard.profile.yearsOld', 'سنة')}
              </span>
            )}
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-slate-800 dark:text-white truncate">
            {studentName}
          </h1>
          <div className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4 text-xs text-slate-400 dark:text-slate-500 font-semibold flex-wrap">
            {countryName && (
              <span className="flex items-center gap-1">
                <MapPin size={13} className="text-[#005953]" />
                <span>{countryName}</span>
              </span>
            )}
            {birthDateFormatted && (
              <span className="flex items-center gap-1">
                <Calendar size={13} className="text-[#005953]" />
                <span>{birthDateFormatted}</span>
              </span>
            )}
            {email && email !== '-' && (
              <span className="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-800/80 px-2.5 py-1 rounded-xl border border-slate-200/50 dark:border-slate-700/50 text-slate-600 dark:text-slate-300">
                <Mail size={13} className="text-[#005953]" />
                <span dir="ltr" className="font-mono text-xs">{email}</span>
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-1">
        {statItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className={`rounded-[22px] p-4 sm:p-5 border shadow-xs flex items-center justify-between text-start transition-shadow hover:shadow-sm ${item.bgClass}`}
            >
              <div>
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 block mb-1">
                  {item.label}
                </span>
                <span className={`text-xl sm:text-2xl font-black block leading-none ${item.colorClass}`}>
                  {item.value}
                </span>
              </div>
              <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-2xl flex items-center justify-center shrink-0 ${item.iconBg}`}>
                <Icon size={19} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});
