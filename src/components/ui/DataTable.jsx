export default function DataTable({ headers, rows }) {
    return (
        <div className="overflow-x-auto rounded-3xl border border-slate-200/80 bg-white/90 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80">
            <table className="min-w-full border-separate border-spacing-0 text-left text-sm">
                <thead className="bg-slate-50 text-slate-500 dark:bg-slate-900/70 dark:text-slate-300">
                    <tr>
                        {headers.map((header) => (
                            <th key={header} className="px-6 py-4 font-medium uppercase tracking-[0.12em]">{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white dark:bg-slate-950/80' : 'bg-slate-50 dark:bg-slate-900'}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex} className="whitespace-nowrap px-6 py-4 text-sm text-slate-700 dark:text-slate-200">{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
