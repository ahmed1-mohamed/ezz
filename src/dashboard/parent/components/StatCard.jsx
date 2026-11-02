import { memo } from 'react';

const StatCard = memo(({ label, value, subtext, subtextColor, icon: Icon, color, bgColor, layout = 'dashboard' }) => {
  if (layout === 'children') {
    return (
      <div className="h-full bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-xs border border-slate-100 dark:border-slate-700 flex items-center justify-between transition-all hover:shadow-md">
        <div className="text-start">
          <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 block mb-1">
            {label}
          </span>
          <span className={`text-3xl font-bold ${color}`}>
            {value}
          </span>
        </div>
        <div className={`p-3 rounded-2xl ${bgColor} ${color}`}>
          {Icon && <Icon size={24} />}
        </div>
      </div>
    );
  }
  return (
    <div className="h-full bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-xs border border-slate-100 dark:border-slate-800 flex items-center justify-between transition-all hover:shadow-md">
      <div className="text-start flex flex-col items-start">
        <span className="text-xs font-medium text-slate-400 dark:text-slate-400 mb-1">
          {label}
        </span>
        <span className={`text-3xl sm:text-4xl font-bold ${color}`}>
          {value}
        </span>
        {subtext && (
          <span className={`text-[11px] font-medium mt-1 ${subtextColor || 'text-emerald-500'}`}>
            {subtext}
          </span>
        )}
      </div>
      <div className={`${color} shrink-0`}>
        {Icon && <Icon size={28} strokeWidth={1.75} />}
      </div>
    </div>
  );
});

StatCard.displayName = 'StatCard';
export default StatCard;
