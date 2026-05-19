export default function Badge({ children, variant = 'primary', className = '' }) {
    const styles = {
        primary: 'bg-brand-100 text-brand-800 dark:bg-brand-500/10 dark:text-brand-200',
        secondary: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200',
        success: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-200',
    }

    return (
        <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${styles[variant]} ${className}`}>
            {children}
        </span>
    )
}