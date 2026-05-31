import { memo } from 'react';

const StatCard = memo(({ label, value, subtext, subtextColor, icon: Icon, color, bgColor, layout = 'dashboard' }) => {
  if (layout === 'children') {
    return (
      <div className="h-full bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-between transition-all hover:shadow-md">
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
    <div className="h-full bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col justify-center items-center text-center relative overflow-hidden transition-all hover:shadow-md hover:-translate-y-1">
      <div className={`absolute top-4 start-4 p-2 rounded-full ${bgColor}`}>
        {Icon && <Icon size={20} className={color} />}
      </div>

      <div className="mt-8 flex flex-col items-center">
        <span className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">
          {label}
        </span>
        <span className={`text-3xl font-bold ${color}`}>
          {value}
        </span>
        {subtext && (
          <span className={`text-xs mt-2 ${subtextColor}`}>
            {subtext}
          </span>
        )}
      </div>
    </div>
  );
});

StatCard.displayName = 'StatCard';
export default StatCard;
