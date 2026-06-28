import { Check, X, Eye, AlertTriangle } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function PaymentsTable({ payments, onApprove, onReject, onReviewAll }) {
  const { t } = useTranslation()
  const p = (key) => t(`adminDashboard.payments.${key}`, key)

  const pendingPaymentsCount = payments.filter((p) => p.status === 'pending').length

  return (
    <div className="space-y-5">
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-sm overflow-hidden">
        <div className="grid grid-cols-[100px_1.2fr_1.2fr_1fr_1fr_1fr_1fr_1fr] gap-4 px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800 text-xs font-bold text-slate-500 dark:text-slate-400 text-start">
          <div>{p('colTransactionId')}</div>
          <div>{p('colParent')}</div>
          <div>{p('colPlan')}</div>
          <div>{p('colAmount')}</div>
          <div>{p('colDate')}</div>
          <div>{p('colPaymentMethod')}</div>
          <div>{p('colStatus')}</div>
          <div className="text-end">{p('colActions')}</div>
        </div>

        {payments.length === 0 ? (
          <div className="py-12 text-center text-slate-400">
            {p('noTransactions')}
          </div>
        ) : (
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {payments.map((pay) => (
              <div
                key={pay.id}
                className="grid grid-cols-[100px_1.2fr_1.2fr_1fr_1fr_1fr_1fr_1fr] gap-4 px-6 py-5 items-center text-start text-sm"
              >
                <div className="w-[100px] bg-slate-50 dark:bg-slate-800/80 rounded-lg py-1 px-2.5 font-semibold text-slate-600 dark:text-slate-300 text-xs font-mono text-center shrink-0">
                  {pay.id}
                </div>

                <div className="font-bold text-slate-800 dark:text-white">
                  {pay.parentName}
                </div>

                <div className="text-slate-600 dark:text-slate-300 text-xs">
                  {pay.planName}
                </div>

                <div className="font-extrabold text-[#0f7a6c] dark:text-emerald-400">
                  {pay.amount} {p('currencySymbol')}
                </div>

                <div className="text-slate-500 dark:text-slate-400 text-xs">
                  {pay.date}
                </div>

                <div className="text-slate-600 dark:text-slate-300 text-xs">
                  {pay.paymentMethod}
                </div>

                <div>
                  {pay.status === 'paid' ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 rounded-full text-xs font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {p('statusPaid')}
                    </span>
                  ) : pay.status === 'pending' ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 dark:bg-amber-950/20 text-amber-600 dark:text-amber-400 rounded-full text-xs font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      {p('statusPending')}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400 rounded-full text-xs font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      {p('statusFailed')}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-end gap-2">
                  {pay.status === 'pending' ? (
                    <>
                      <button
                        onClick={() => onApprove(pay.id)}
                        className="p-1.5 rounded-full text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition-all border border-emerald-100 dark:border-emerald-950"
                        title={p('approve')}
                      >
                        <Check size={14} />
                      </button>
                      <button
                        onClick={() => onReject(pay.id)}
                        className="p-1.5 rounded-full text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 transition-all border border-red-100 dark:border-red-900/30"
                        title={p('reject')}
                      >
                        <X size={14} />
                      </button>
                      <button
                        className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 transition-all border border-slate-100"
                        title={p('viewDetails')}
                      >
                        <Eye size={14} />
                      </button>
                    </>
                  ) : (
                    <button
                      className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 transition-all border border-slate-100"
                      title={p('viewDetails')}
                    >
                      <Eye size={14} />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {pendingPaymentsCount > 0 && (

        <div className="bg-amber-50/50 dark:bg-amber-950/10 border border-amber-200/60 dark:border-amber-900/30 rounded-3xl p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div>
              <p className="text-sm font-bold text-amber-800 dark:text-amber-400">
                {p('manualApprovalNotice').replace('{count}', pendingPaymentsCount)}
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-amber-100/80 dark:bg-amber-950/40 flex items-center justify-center text-amber-600">
              <AlertTriangle size={20} />
            </div>
          </div>
          <button
            onClick={onReviewAll}
            className="px-6 py-2 bg-white dark:bg-slate-900 text-amber-800 dark:text-amber-400 border border-amber-200/80 dark:border-amber-800/60 rounded-xl text-xs font-bold hover:bg-amber-50/20 transition-all active:scale-95 animate-pulse"
          >
            {p('reviewAll')}
          </button>

        </div>
      )}
    </div>
  )
}