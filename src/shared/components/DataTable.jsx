export default function DataTable({ headers, rows = [], isLoading = false, emptyMessage = 'لا توجد بيانات متاحة' }) {
    return (
        <div className="overflow-x-auto rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white/90 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80">
            <table className="min-w-full border-separate border-spacing-0 text-start text-sm">
                <thead className="bg-slate-50 text-slate-500 dark:bg-slate-900/70 dark:text-slate-300">
                    <tr>
                        {headers.map((header) => (
                            <th key={header} className="px-4 sm:px-6 py-3 sm:py-4 font-medium uppercase tracking-[0.12em] text-xs sm:text-sm">{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {isLoading ? (
                        <tr>
                            <td colSpan={headers.length} className="text-center py-8">
                                <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
                                    <div className="w-5 h-5 rounded-full border-2 border-[#00796B] border-t-transparent animate-spin" />
                                    <span>جاري التحميل...</span>
                                </div>
                            </td>
                        </tr>
                    ) : rows.length === 0 ? (
                        <tr>
                            <td colSpan={headers.length} className="text-center py-8 text-slate-400 dark:text-slate-500 text-sm">
                                {emptyMessage}
                            </td>
                        </tr>
                    ) : (
                        rows.map((row, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-white dark:bg-slate-950/80' : 'bg-slate-50 dark:bg-slate-900'}>
                                {row.map((cell, cellIndex) => (
                                    <td key={cellIndex} className="whitespace-nowrap px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-slate-700 dark:text-slate-200 max-w-[120px] sm:max-w-none truncate">{cell}</td>
                                ))}
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    )
}

