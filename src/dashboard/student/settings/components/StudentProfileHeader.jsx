import React from 'react';
import { Camera, MapPin, Calendar, Mail, Hash, User } from 'lucide-react';
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
  joinDateFormatted,
  onImageChange,
}) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const studentName = resolveName(student?.name, isRtl) || (isRtl ? student?.nameAr : student?.nameEn) || '-';
  const initial = (studentName === '-' ? 'ط' : studentName).trim().charAt(0);
  const imageUrl = student?.image || student?.photoUrl || student?.avatar;
  const studentId = student?.student_id || student?.id || student?.studentId || '-';
  const email = student?.email || '-';
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
          <div className="flex items-center justify-center sm:justify-start gap-4 text-xs text-slate-400 dark:text-slate-500 font-semibold flex-wrap">
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
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
        <div className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 text-start">
          <Calendar size={16} className="text-[#005953] shrink-0" />
          <div>
            <p className="text-[11px] text-slate-400 font-bold">{t('studentDashboard.profile.joinDate', 'تاريخ الانضمام')}</p>
            <p className="font-bold text-slate-700 dark:text-slate-200">{joinDateFormatted}</p>
          </div>
        </div>
        <div className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 truncate text-start">
          <Mail size={16} className="text-[#005953] shrink-0" />
          <div className="truncate">
            <p className="text-[11px] text-slate-400 font-bold">{t('studentDashboard.profile.email', 'البريد الإلكتروني')}</p>
            <p className="font-bold text-slate-700 dark:text-slate-200 truncate" dir="ltr">{email}</p>
          </div>
        </div>
        <div className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 text-start">
          <Hash size={16} className="text-[#005953] shrink-0" />
          <div>
            <p className="text-[11px] text-slate-400 font-bold">{t('studentDashboard.profile.studentId', 'رقم الطالب')}</p>
            <p className="font-bold text-slate-700 dark:text-slate-200 truncate" dir="ltr">{studentId}</p>
          </div>
        </div>
        <div className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 text-start">
          <User size={16} className="text-[#005953] shrink-0" />
          <div>
            <p className="text-[11px] text-slate-400 font-bold">{t('studentDashboard.profile.academicLevel', 'المستوى الدراسي')}</p>
            <p className="font-bold text-slate-700 dark:text-slate-200">{student?.level || student?.grade || t('teacherCurricula.intermediate', 'متوسط')}</p>
          </div>
        </div>
      </div>
    </div>
  );
});

