import { useTranslation } from 'react-i18next'

export default function DataTable({ headers, rows = [], isLoading = false, emptyMessage }) {
    const { t } = useTranslation()
    const resolvedEmptyMessage = emptyMessage || t('common.noData', 'لا توجد بيانات متاحة')
    return (
        <div className="overflow-x-auto rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white/90 shadow-soft backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/80 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:bg-slate-200 dark:[&::-webkit-scrollbar-thumb]:bg-slate-700 [&::-webkit-scrollbar-thumb]:rounded-full">
            <table className="min-w-full border-separate border-spacing-0 text-start text-sm">
                <thead className="bg-slate-50 text-slate-500 dark:bg-slate-900/70 dark:text-slate-300">
                    <tr>
                        {headers.map((header) => (
                            <th key={header} className="px-4 sm:px-6 py-3 sm:py-4 font-bold uppercase tracking-[0.08em] text-xs sm:text-sm text-start whitespace-nowrap">{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {isLoading ? (
                        <tr>
                            <td colSpan={headers.length} className="text-center py-8">
                                <div className="flex items-center justify-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
                                    <div className="w-5 h-5 rounded-full border-2 border-[#0f7a6c] border-t-transparent animate-spin" />
                                    <span>{t('common.loading', 'جاري التحميل...')}</span>
                                </div>
                            </td>
                        </tr>
                    ) : rows.length === 0 ? (
                        <tr>
                            <td colSpan={headers.length} className="text-center py-8 text-slate-400 dark:text-slate-500 text-sm">
                                {resolvedEmptyMessage}
                            </td>
                        </tr>
                    ) : (
                        rows.map((row, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-white dark:bg-slate-950/80 hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors' : 'bg-slate-50/70 dark:bg-slate-900/70 hover:bg-slate-100/50 dark:hover:bg-slate-800/60 transition-colors'}>
                                {row.map((cell, cellIndex) => (
                                    <td key={cellIndex} className="whitespace-nowrap px-4 sm:px-6 py-3.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200">{cell}</td>
                                ))}
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    )
}

