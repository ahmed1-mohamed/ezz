export default function StatsCard({ title, value, change, icon, accent = 'bg-brand-500/10 text-brand-700 dark:text-brand-300' }) {
    return (
        <div className="rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white/90 p-4 sm:p-5 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80">
            <div className="flex items-center justify-between gap-3 sm:gap-4">
                <div className="min-w-0 flex-1">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500 truncate">{title}</p>
                    <p className="mt-2 sm:mt-3 text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-slate-100">{value}</p>
                </div>
                <div className={`inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl sm:rounded-2xl flex-shrink-0 ${accent}`}>
                    <span className="text-xl sm:text-2xl">{icon}</span>
                </div>
            </div>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 truncate">{change}</p>
        </div>
    )
}
