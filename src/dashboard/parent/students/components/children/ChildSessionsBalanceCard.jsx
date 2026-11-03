import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Layers, CheckCircle2, Clock } from 'lucide-react';

export default function ChildSessionsBalanceCard({ sessionsBalance }) {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const total = Number(sessionsBalance?.total ?? 0);
  const used = Number(sessionsBalance?.used ?? 0);
  const remaining = Number(sessionsBalance?.remaining ?? Math.max(0, total - used));
  const progressPercent = total > 0 ? Math.min(100, Math.round((remaining / total) * 100)) : 0;
  return (
    <div
      className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm space-y-5"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-black text-slate-800 dark:text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#0f7a6c]" />
            <span>{t('parent.childrenList.balanceCardTitle', 'تفاصيل رصيد الحصص والاشتراك')}</span>
          </h2>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
            {t('parent.childrenList.balanceStatus', { remaining, total })}
          </p>
        </div>
        <button
          type="button"
          onClick={() => navigate('/dashboard/parent/packages')}
          className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
        >
          <Layers className="w-4 h-4" />
          <span>{t('parent.childrenList.renewPackage', 'تجديد / ترقية الباقة')}</span>
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-400 mb-0.5">{t('parent.childrenList.totalClassesLabel', 'إجمالي الحصص')}</p>
            <p className="text-2xl font-black text-slate-800 dark:text-white">{total}</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
            <Layers className="w-5 h-5" />
          </div>
        </div>
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-400 mb-0.5">{t('parent.childrenList.usedClassesLabel', 'الحصص المستهلكة')}</p>
            <p className="text-2xl font-black text-slate-600 dark:text-slate-300">{used}</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-slate-500/10 text-slate-500 flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5" />
          </div>
        </div>
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-400 mb-0.5">{t('parent.childrenList.remainingClassesLabel', 'الحصص المتبقية')}</p>
            <p className={`text-2xl font-black ${remaining > 5 ? 'text-emerald-500' : remaining > 0 ? 'text-amber-500' : 'text-rose-500'}`}>
              {remaining}
            </p>
          </div>
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${remaining > 5 ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'}`}>
            <Clock className="w-5 h-5" />
          </div>
        </div>
      </div>
      <div className="space-y-1.5">
        <div className="flex justify-between text-xs font-semibold text-slate-400">
          <span>{used} {t('parent.childrenList.used', 'مستخدمة')}</span>
          <span className="font-bold text-[#0f7a6c] dark:text-emerald-400">{progressPercent}% {t('parent.childrenList.remaining', 'متبقية')}</span>
        </div>
        <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-700 ease-out ${remaining > 5 ? 'bg-[#0f7a6c]' : remaining > 0 ? 'bg-amber-500' : 'bg-rose-500'}`}
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    </div>
  );
}