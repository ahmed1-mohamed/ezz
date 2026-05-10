import Button from './Button.jsx'

export default function EmptyState({ title, description, actionLabel, onAction }) {
    return (
        <div className="rounded-3xl border border-dashed border-slate-300/70 bg-white/80 p-10 text-center shadow-soft dark:border-slate-700/70 dark:bg-slate-950/80">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-600">{title}</p>
            <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">{description}</p>
            {actionLabel && onAction && (
                <div className="mt-6 flex justify-center">
                    <Button onClick={onAction}>{actionLabel}</Button>
                </div>
            )}
        </div>
    )
}
