import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  History,
  Calendar,
  Clock,
  ArrowUpRight,
  ArrowDownLeft,
  PlusCircle,
  MinusCircle,
  ShoppingCart,
  CheckCircle2,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

function formatTransactionDate(dateStr, isRtl) {
  if (!dateStr) return '-';
  try {
    const d = new Date(dateStr);
    if (!isNaN(d.getTime())) {
      return new Intl.DateTimeFormat(isRtl ? 'ar-EG' : 'en-GB', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }).format(d);
    }
  } catch {
    return String(dateStr);
  }
  return String(dateStr);
}

function getTransactionBadge(type, amount) {
  const norm = String(type || '').trim();
  const num = Number(amount || 0);
  if (norm.includes('شراء') || norm.includes('باقة') || num > 0) {
    return {
      icon: <ArrowUpRight className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
      bg: 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200/60 dark:border-emerald-800/60',
      pill: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
    };
  }
  if (norm.includes('غياب')) {
    return {
      icon: <AlertTriangle className="w-4 h-4 text-rose-600 dark:text-rose-400" />,
      bg: 'bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border-rose-200/60 dark:border-rose-900/40',
      pill: 'bg-rose-500/10 text-rose-600 dark:text-rose-400',
    };
  }
  return {
    icon: <ArrowDownLeft className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
    bg: 'bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border-blue-200/60 dark:border-blue-800/60',
    pill: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
  };
}

export default function ChildTransactionsLog({ transactions = [] }) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const [isExpanded, setIsExpanded] = useState(false);
  const list = Array.isArray(transactions) ? transactions : [];
  if (list.length === 0) {
    return null;
  }
  const displayedList = isExpanded ? list : list.slice(0, 5);
  const hasMore = list.length > 5;
  return (
    <div
      className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-100 dark:border-slate-800 shadow-sm space-y-5"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
            <History className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-black text-slate-800 dark:text-white">
              {t('parent.childrenList.transactionsTitle', 'سجل حركة واستهلاك الحصص')}
            </h2>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
              {t('parent.childrenList.transactionsSubtitle', 'تتبع تفصيلي لعمليات الشراء، الخصم عند الحضور، والإضافات اليدوية')}
            </p>
          </div>
        </div>
        <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
          {list.length} {t('parent.childrenList.transactionsCount', 'حركات مسجلة')}
        </span>
      </div>
      <div className="space-y-3">
        {displayedList.map((item, idx) => {
          const itemId = item.id || idx;
          const type = item.type || t('parent.childrenList.transactionDefaultType', 'حركة رصيد');
          const amount = Number(item.amount || 0);
          const balanceAfter = item.balanceAfter !== undefined ? Number(item.balanceAfter) : '-';
          const reason = item.reason || '-';
          const dateStr = formatTransactionDate(item.date, isRtl);
          const badgeMeta = getTransactionBadge(type, amount);
          return (
            <div
              key={itemId}
              className="p-4 rounded-2xl bg-slate-50/70 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-blue-500/30 transition-colors"
            >
              <div className="flex items-start gap-3.5 min-w-0">
                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 mt-0.5 border ${badgeMeta.bg}`}>
                  {badgeMeta.icon}
                </div>
                <div className="min-w-0 space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-extrabold text-sm text-slate-900 dark:text-white">
                      {type}
                    </span>
                    <span className="text-[11px] text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{dateStr}</span>
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                    {reason}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
                <div className="text-end">
                  <span
                    className={`inline-block font-black text-sm px-2.5 py-0.5 rounded-lg ${
                      amount > 0
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400'
                        : 'bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400'
                    }`}
                  >
                    {amount > 0 ? `+${amount}` : amount} {t('parent.childrenList.classes', 'حصة')}
                  </span>
                  <div className="text-[11px] text-slate-400 font-semibold mt-0.5">
                    {t('parent.childrenList.balanceAfter', 'الرصيد بعد الحركة')}: <strong className="text-slate-700 dark:text-slate-200">{balanceAfter}</strong>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {hasMore && (
        <div className="text-center pt-2">
          <button
            type="button"
            onClick={() => setIsExpanded((prev) => !prev)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0f7a6c] dark:text-emerald-400 hover:underline cursor-pointer"
          >
            <span>{isExpanded ? t('common.showLess', 'عرض أقل') : t('common.showMore', 'عرض كافة الحركات السابقة')} ({list.length})</span>
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      )}
    </div>
  );
}

