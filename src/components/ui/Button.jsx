import React from 'react'

export default React.memo(function Button({ children, type = 'button', variant = 'primary', className = '', ...props }) {
    const styles = {
        primary: 'bg-gradient-to-r from-brand-600 to-brand-700 text-white shadow-md hover:shadow-lg hover:from-brand-700 hover:to-brand-800 focus:ring-brand-500/50',
        secondary: 'bg-white border-2 border-brand-600 text-brand-600 shadow-sm hover:bg-brand-50 hover:shadow-md focus:ring-brand-500/50',
        ghost: 'bg-transparent text-slate-700 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-800',
    }

    return (
        <button
            type={type}
            className={`inline-flex items-center justify-center rounded-xl sm:rounded-2xl px-5 sm:px-6 py-3 sm:py-3.5 text-sm sm:text-base font-bold cursor-pointer transition-all duration-300 ease-out hover:-translate-y-[2px] active:scale-[0.97] active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-slate-50 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:active:scale-100 ${styles[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    )
})
