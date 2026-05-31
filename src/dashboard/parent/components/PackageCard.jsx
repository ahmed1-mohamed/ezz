import { memo } from 'react';

const PackageCard = memo(({ title, priceDisplay, features, buttonText }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center gap-4 transition-all hover:shadow-md hover:-translate-y-1">
      <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-900/50 text-[#0f7a6c] dark:text-[#3ab795] flex items-center justify-center shrink-0 border border-slate-100 dark:border-slate-800 text-xl">
        💎
      </div>
      <div>
        {title && (
          <h4 className="font-bold text-slate-800 dark:text-slate-100 text-base">
            {title}
          </h4>
        )}
        <div className="flex items-baseline justify-center gap-1 mt-2">
          <span className="text-2xl font-extrabold text-[#0f7a6c] dark:text-[#3ab795]">
            {priceDisplay}
          </span>
        </div>
      </div>

      <div className="w-full h-px bg-slate-100 dark:bg-slate-700" />

      <div className="w-full space-y-2.5 my-2 text-start">
        {features.map((feat, idx) => (
          <div key={idx} className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
            <span className="w-4 h-4 rounded-full bg-emerald-50 dark:bg-emerald-950/20 text-emerald-500 flex items-center justify-center shrink-0 text-[10px]">
              ✓
            </span>
            <span>{feat}</span>
          </div>
        ))}
      </div>

      <button className="w-full py-3 bg-[#0f7a6c] hover:bg-[#0c6256] text-white rounded-xl font-bold transition-all shadow-sm text-sm active:translate-y-0.5 mt-auto">
        {buttonText}
      </button>
    </div>
  );
});

PackageCard.displayName = 'PackageCard';
export default PackageCard;
