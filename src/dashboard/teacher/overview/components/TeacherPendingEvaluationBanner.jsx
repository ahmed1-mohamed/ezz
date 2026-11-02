import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function resolveText(val, isRtl) {
  if (!val) return '';
  if (typeof val === 'string') return val.trim();
  if (typeof val === 'object') {
    if (val.name) return resolveText(val.name, isRtl);
    if (val.title) return resolveText(val.title, isRtl);
    if (val.ar || val.en) return isRtl ? (val.ar || val.en) : (val.en || val.ar);
  }
  return String(val);
}

export default React.memo(function TeacherPendingEvaluationBanner({ pendingSession, pendingStudents }) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  if (!pendingSession) return null;
  const sessionTitle = resolveText(pendingSession.title, isRtl);
  const groupName = resolveText(pendingSession.group, isRtl);
  return (
    <div className="bg-gradient-to-r from-amber-50 to-orange-50/60 dark:from-amber-950/40 dark:to-orange-950/20 border border-amber-200 dark:border-amber-800/60 rounded-3xl p-5 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="flex items-start gap-3.5">
        <div className="w-10 h-10 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
          <Star size={20} className="fill-white" />
        </div>
        <div className="space-y-1 text-start">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-200 text-amber-900 dark:bg-amber-900 dark:text-amber-200">
              {t('teacherDashboard.pendingEvaluation', 'حصة مكتملة بانتظار التقييم')}
            </span>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              {pendingSession.day ? `${pendingSession.day} - ` : ''}
              {pendingSession.date}
            </span>
          </div>
          <h3 className="text-sm sm:text-base font-black text-slate-900 dark:text-white">
            {sessionTitle}{' '}
            {pendingSession.sessionNumber ? `(${t('teacherDashboard.sessionNumberLabel', 'الحصة رقم {{number}}', { number: pendingSession.sessionNumber })})` : ''}
            {groupName ? ` - ${groupName}` : ''}
          </h3>
          {Array.isArray(pendingStudents) && pendingStudents.length > 0 && (
            <p className="text-xs text-amber-800 dark:text-amber-300 font-semibold">
              {t('teacherDashboard.studentsPending', 'الطلاب بانتظار التقييم: ')}
              {pendingStudents
                .map((s) => {
                  if (!s) return '';
                  if (typeof s === 'string') return s;
                  if (typeof s.name === 'object' && s.name !== null) {
                    return (isRtl ? s.name.ar || s.name.en : s.name.en || s.name.ar) || '';
                  }
                  return s.name || '';
                })
                .filter(Boolean)
                .join(isRtl ? '، ' : ', ')}
            </p>
          )}
        </div>
      </div>

      <Link
        to="/dashboard/teacher/evaluations"
        className="self-start md:self-center px-5 py-2.5 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5"
      >
        <span>{t('teacherDashboard.addEvaluations', 'إضافة التقييمات')}</span>
        <span>{isRtl ? '←' : '→'}</span>
      </Link>
    </div>
  );
});
