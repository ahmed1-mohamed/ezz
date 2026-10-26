export default function TeacherSkeleton() {
  return (
    <div className="w-full max-w-[320px] mx-auto overflow-hidden rounded-[28px] bg-[#F5F5F2] dark:bg-slate-900 shadow-sm border border-transparent dark:border-slate-800 p-4 animate-pulse space-y-4">
      <div className="aspect-[4/5] w-full rounded-[24px] bg-slate-200 dark:bg-slate-800" />
      <div className="space-y-2 p-2">
        <div className="h-6 bg-slate-300 dark:bg-slate-700 rounded-full w-3/4" />
        <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded-full w-1/2" />
        <div className="flex gap-2 pt-2">
          <div className="h-6 w-20 bg-slate-200 dark:bg-slate-800 rounded-full" />
          <div className="h-6 w-24 bg-slate-200 dark:bg-slate-800 rounded-full" />
        </div>
        <div className="h-11 bg-slate-300 dark:bg-slate-700 rounded-2xl w-full mt-4" />
      </div>
    </div>
  )
}
