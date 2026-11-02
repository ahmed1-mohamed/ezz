import React from 'react';
import { UserCheck, Phone, Mail, ShieldAlert } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function resolveName(nameField, isRtl) {
  if (typeof nameField === 'object' && nameField !== null) {
    return (isRtl ? nameField.ar || nameField.en : nameField.en || nameField.ar) || '';
  }
  return String(nameField || '');
}

export default React.memo(function StudentParentCard({ parent }) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  if (!parent) {
    return (
      <div
        className="bg-white dark:bg-slate-900 rounded-[28px] border border-slate-100 dark:border-slate-800 p-6 sm:p-7 shadow-xs text-start space-y-4"
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100 dark:border-slate-800 text-slate-800 dark:text-white">
          <div className="w-8 h-8 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-300 flex items-center justify-center shrink-0">
            <UserCheck size={17} />
          </div>
          <h3 className="text-base font-black">
            {t('studentDashboard.profile.parentInfoTitle', 'معلومات ولي الأمر')}
          </h3>
        </div>
        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 flex flex-col items-center justify-center text-center space-y-2">
          <ShieldAlert size={28} className="text-slate-300 dark:text-slate-600" />
          <p className="text-xs font-bold text-slate-400">
            {t('studentDashboard.profile.noParentData', 'لا تتوفر بيانات ولي أمر مسجلة')}
          </p>
        </div>
      </div>
    );
  }
  const parentName = resolveName(parent.name, isRtl) || parent.fullName || '-';
  const initial = (parentName === '-' ? 'و' : parentName).trim().charAt(0);
  const phone = parent.phone || parent.phoneNumber || '-';
  const email = parent.email || '-';
  return (
    <div
      className="bg-white dark:bg-slate-900 rounded-[28px] border border-slate-100 dark:border-slate-800 p-6 sm:p-7 shadow-xs text-start space-y-5"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100 dark:border-slate-800 text-slate-800 dark:text-white">
        <div className="w-8 h-8 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-300 flex items-center justify-center shrink-0">
          <UserCheck size={17} />
        </div>
        <h3 className="text-base font-black">
          {t('studentDashboard.profile.parentInfoTitle', 'معلومات ولي الأمر')}
        </h3>
      </div>
      <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl flex items-center gap-3.5">
        <div className="w-11 h-11 rounded-2xl bg-amber-500 text-white flex items-center justify-center text-base font-black shadow-xs shrink-0">
          {initial}
        </div>
        <div className="min-w-0">
          <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 block">
            {t('studentDashboard.profile.parentName', 'اسم ولي الأمر')}
          </span>
          <span className="text-sm font-black text-slate-800 dark:text-white block truncate">
            {parentName}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        <div className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 text-start">
          <Phone size={15} className="text-[#005953] shrink-0" />
          <div className="min-w-0">
            <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 block">
              {t('studentDashboard.profile.parentPhone', 'رقم هاتف ولي الأمر')}
            </span>
            <span className="font-bold text-slate-700 dark:text-slate-200 block truncate" dir="ltr">
              {phone}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 text-start truncate">
          <Mail size={15} className="text-[#005953] shrink-0" />
          <div className="min-w-0 truncate">
            <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 block">
              {t('studentDashboard.profile.parentEmail', 'بريد ولي الأمر')}
            </span>
            <span className="font-bold text-slate-700 dark:text-slate-200 block truncate" dir="ltr">
              {email}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});

