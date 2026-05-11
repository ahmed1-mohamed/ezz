export default function Button({ children, type = 'button', variant = 'primary', className = '', ...props }) {
    const styles = {
        primary: 'bg-gradient-to-r from-brand-600 via-brand-700 to-brand-700 text-white shadow-sm hover:from-brand-700 hover:to-brand-800 focus:ring-brand-400',
        secondary: 'bg-white border border-brand-600 text-brand-600 hover:bg-brand-50 focus:ring-brand-400',
        ghost: 'bg-transparent text-slate-700 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-800',
    }

    return (
        <button
            type={type}
            className={`inline-flex items-center justify-center rounded-xl sm:rounded-2xl px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-50 disabled:cursor-not-allowed disabled:opacity-60 ${styles[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}
