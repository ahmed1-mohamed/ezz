
export default function StatCard({ label, value, color }) {
  const colorMap = {
    red: 'bg-red-50 dark:bg-red-900/10 border-red-100 dark:border-red-800/30 text-red-600 dark:text-red-400',
    blue: 'bg-blue-50 dark:bg-blue-900/10 border-blue-100 dark:border-blue-800/30 text-blue-600 dark:text-blue-400',
    green: 'bg-brand-50 dark:bg-brand-900/10 border-brand-100 dark:border-brand-800/30 text-brand-600 dark:text-brand-400',
    amber: 'bg-amber-50 dark:bg-amber-900/10 border-amber-100 dark:border-amber-800/30 text-amber-600 dark:text-amber-400',
  }
  return (
    <div className={`flex flex-col items-center justify-center gap-1 p-5 rounded-3xl border ${colorMap[color]}`}>
      <span className="text-3xl font-extrabold">{value}</span>
      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 text-center">{label}</span>
    </div>
  )
}
