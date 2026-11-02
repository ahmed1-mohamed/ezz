import React from 'react';
import { BookOpen, PlusCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default React.memo(function StudentSessionBalanceCard({ sessionBalance }) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const isObj = typeof sessionBalance === 'object' && sessionBalance !== null;
  const total = isObj ? Number(sessionBalance.total || 0) : Number(sessionBalance || 0);
  const used = isObj ? Number(sessionBalance.used || 0) : 0;
  const remaining = isObj
    ? (sessionBalance.remaining !== undefined ? Number(sessionBalance.remaining) : Math.max(0, total - used))
    : Number(sessionBalance || 0);
  const manualAdded = isObj ? Number(sessionBalance.manualAddedThisMonth || 0) : 0;
  const totalDisplay = total || (remaining + used);
  const unit = t('studentDashboard.profile.sessionsWord', 'حصة');
  return (
    <div
      className="bg-white dark:bg-slate-900 rounded-[28px] border border-slate-100 dark:border-slate-800 p-6 sm:p-7 shadow-xs space-y-5 text-start"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100 dark:border-slate-800 text-slate-800 dark:text-white">
        <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-[#005953] dark:text-emerald-300 flex items-center justify-center shrink-0">
          <BookOpen size={17} />
        </div>
        <h3 className="text-base font-black">
          {t('studentDashboard.profile.sessionBalanceTitle', 'ملخص رصيد الحصص')}
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        <div className="p-4 bg-emerald-50/60 dark:bg-emerald-950/20 rounded-2xl border border-emerald-100/60 dark:border-emerald-900/30 space-y-1">
          <span className="text-xs font-bold text-slate-400 dark:text-slate-400 block">
            {t('studentDashboard.profile.remainingSessions', 'الحصص المتبقية')}
          </span>
          <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400 block">
            {remaining} {unit}
          </span>
        </div>
        <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-1">
          <span className="text-xs font-bold text-slate-400 dark:text-slate-400 block">
            {t('studentDashboard.profile.usedSessions', 'الحصص المستخدمة')}
          </span>
          <span className="text-2xl font-black text-slate-700 dark:text-slate-200 block">
            {used} {unit}
          </span>
        </div>
        <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-1">
          <span className="text-xs font-bold text-slate-400 dark:text-slate-400 block">
            {t('studentDashboard.profile.totalSessions', 'إجمالي الحصص')}
          </span>
          <span className="text-2xl font-black text-slate-700 dark:text-slate-200 block">
            {totalDisplay} {unit}
          </span>
        </div>
      </div>
      {manualAdded > 0 && (
        <div className="flex items-center gap-2 p-3 bg-amber-50/70 dark:bg-amber-950/20 border border-amber-100/60 dark:border-amber-900/30 rounded-2xl text-xs font-bold text-amber-700 dark:text-amber-400">
          <PlusCircle size={15} className="shrink-0 text-amber-600" />
          <span>
            {t('studentDashboard.profile.manualSessionsNotice', {
              count: manualAdded,
              defaultValue: `تمت إضافة ${manualAdded} حصة يدوياً لهذا الشهر`,
            })}
          </span>
        </div>
      )}
    </div>
  );
});

