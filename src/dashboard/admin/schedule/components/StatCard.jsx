export default function StatCard({ label, value, color, icon: Icon }) {
  const cls = {
    green: 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/10 border-brand-100 dark:border-brand-900/30',
    red: 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/10 border-red-100 dark:border-red-900/30',
    amber: 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/10 border-amber-100 dark:border-amber-900/30',
    slate: 'text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-slate-800',
  }
  return (
    <div className={`flex flex-col items-center gap-2 p-5 rounded-3xl border ${cls[color]}`}>
      {Icon && <Icon size={20} className="opacity-70" />}
      <span className="text-3xl font-extrabold">{value}</span>
      <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 text-center">{label}</span>
    </div>
  )
}
