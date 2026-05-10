export default function StatsCard({ title, value, change, icon, accent = 'bg-brand-500/10 text-brand-700 dark:text-brand-300' }) {
    return (
        <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-5 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80">
            <div className="flex items-center justify-between gap-4">
                <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">{title}</p>
                    <p className="mt-3 text-3xl font-semibold text-slate-900 dark:text-slate-100">{value}</p>
                </div>
                <div className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl ${accent}`}>
                    <span className="text-2xl">{icon}</span>
                </div>
            </div>
            <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">{change}</p>
        </div>
    )
}
