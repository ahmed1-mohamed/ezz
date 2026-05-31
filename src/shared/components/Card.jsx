export default function Card({ title, description, children, className = '' }) {
    return (
        <section className={`rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80 ${className}`}>
            {(title || description) && (
                <div className="mb-5 space-y-1">
                    {title && <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{title}</h3>}
                    {description && <p className="text-sm text-slate-500 dark:text-slate-400">{description}</p>}
                </div>
            )}
            {children}
        </section>
    )
}
