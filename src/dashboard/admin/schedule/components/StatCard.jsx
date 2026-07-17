export default function StatCard({ label, value, color, icon: Icon, onClick, isActive }) {
  const cls = {
    green: isActive
      ? 'text-brand-700 dark:text-brand-300 bg-brand-100 dark:bg-brand-900/30 border-brand-400 dark:border-brand-600 ring-2 ring-brand-400/30 shadow-lg -translate-y-1'
      : 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/10 border-brand-100 dark:border-brand-900/30 hover:bg-brand-100 dark:hover:bg-brand-900/20',
    red: isActive
      ? 'text-red-700 dark:text-red-300 bg-red-100 dark:bg-red-900/30 border-red-400 dark:border-red-600 ring-2 ring-red-400/30 shadow-lg -translate-y-1'
      : 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/10 border-red-100 dark:border-red-900/30 hover:bg-red-100 dark:hover:bg-red-900/20',
    amber: isActive
      ? 'text-amber-700 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/30 border-amber-400 dark:border-amber-600 ring-2 ring-amber-400/30 shadow-lg -translate-y-1'
      : 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/10 border-amber-100 dark:border-amber-900/30 hover:bg-amber-100 dark:hover:bg-amber-900/20',
    slate: isActive
      ? 'text-slate-900 dark:text-white bg-slate-200 dark:bg-slate-700 border-slate-400 dark:border-slate-500 ring-2 ring-slate-400/30 shadow-lg -translate-y-1'
      : 'text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800',
    blue: isActive
      ? 'text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 border-blue-400 dark:border-blue-600 ring-2 ring-blue-400/30 shadow-lg -translate-y-1'
      : 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/10 border-blue-100 dark:border-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/20',
    purple: isActive
      ? 'text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/30 border-purple-400 dark:border-purple-600 ring-2 ring-purple-400/30 shadow-lg -translate-y-1'
      : 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/10 border-purple-100 dark:border-purple-900/30 hover:bg-purple-100 dark:hover:bg-purple-900/20',
  }
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex flex-col items-center gap-2 p-5 rounded-3xl border transition-all duration-200 w-full ${onClick ? 'cursor-pointer' : 'cursor-default'} ${cls[color] || cls.slate}`}
    >
      {Icon && <Icon size={20} className="opacity-70" />}
      <span className="text-3xl font-extrabold">{value}</span>
      <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 text-center">{label}</span>
    </button>
  )
}
