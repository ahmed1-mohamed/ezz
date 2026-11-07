export default function Card({ title, description, children, className = '' }) {
    return (
        <section className={`rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white/90 p-5 sm:p-6 shadow-soft backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/80 text-start ${className}`}>
            {(title || description) && (
                <div className="mb-4 sm:mb-5 space-y-1">
                    {title && <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">{title}</h3>}
                    {description && <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">{description}</p>}
                </div>
            )}
            {children}
        </section>
    )
}
