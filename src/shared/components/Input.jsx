export default function Input({ label, error, className = '', ...props }) {
    return (
        <label className={`block text-sm font-medium text-slate-700 dark:text-slate-200 ${className}`}>
            {label && <span className="mb-2 block">{label}</span>}
            <input
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-600 focus:ring-2 focus:ring-brand-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-brand-600 dark:focus:ring-brand-500/20"
                {...props}
            />
            {error && <span className="mt-2 block text-xs font-medium text-rose-500">{error}</span>}
        </label>
    )
}
