import { useTranslation } from 'react-i18next';

export default function ChildHeader({ name, subject, joinDate, avatarChar, onEvaluateClick }) {
  const { t } = useTranslation();
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-auto">
        <div className="w-20 h-20 rounded-full bg-[#0f7a6c] text-white flex items-center justify-center text-3xl font-bold shrink-0">
          {avatarChar || name.charAt(0)}
        </div>
        <div className="text-center md:text-start">
          <h1 className="text-2xl font-extrabold text-slate-800 dark:text-slate-100">{name}</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{subject}</p>
          <p className="text-xs text-slate-400 mt-1">{t('parentDashboard.childrenDetails.joinDate', { date: joinDate })}</p>
        </div>
      </div>
      <button 
        onClick={onEvaluateClick}
        className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-colors w-full md:w-auto shrink-0 shadow-sm"
      >
        {t('parent.childDetails.evaluateTeachers')}
      </button>
    </div>
  );
}
