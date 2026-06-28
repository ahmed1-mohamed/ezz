import { useState } from 'react'
import { Check, X, Upload, Eye, FileUp } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Spinner from '@/shared/components/Spinner'

export default function WithdrawalRequests({ requests, onApprove, onReject }) {
  const { t } = useTranslation()
  const p = (key) => t(`adminDashboard.earnings.${key}`, key)

  const [expandedId, setExpandedId] = useState(null)
  const [proofImage, setProofImage] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [uploadingId, setUploadingId] = useState(null)

  const pendingCount = requests.filter((r) => r.status === 'pending').length

  const handleFileChange = (e, id) => {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => {
      setImagePreview(ev.target.result)
      setProofImage(ev.target.result)
    }
    reader.readAsDataURL(file)
  }

  const handleUploadSubmit = async (id) => {
    if (!proofImage) return
    setUploadingId(id)
    await onApprove(id, proofImage)
    setUploadingId(null)
    setExpandedId(null)
    setProofImage(null)
    setImagePreview(null)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-slate-800 dark:text-white text-base">
          {p('withdrawalTitle')}
        </h3>
        {pendingCount > 0 && (
          <span className="px-3 py-1 bg-amber-50 dark:bg-amber-950/20 text-amber-600 dark:text-amber-400 rounded-full text-xs font-semibold">
            {pendingCount} {p('pendingRequestsBadge')}
          </span>
        )}
      </div>

      {/* Main Table Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-sm overflow-hidden">
        {/* Table Header Row (Teacher on right, Actions on left in RTL) */}
        <div className="grid grid-cols-[120px_1.2fr_1fr_1fr_1fr_1fr_1fr] gap-4 px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800 text-xs font-bold text-slate-500 dark:text-slate-400 text-start">
          <div className="w-[120px]">{p('colTeacher')}</div>
          <div>{p('colAmount')}</div>
          <div>{p('colBank')}</div>
          <div>{p('colAccountNumber')}</div>
          <div>{p('colDate')}</div>
          <div>{p('colStatus')}</div>
          <div className="text-end">{p('colActions')}</div>
        </div>

        {/* Rows */}
        {requests.length === 0 ? (
          <div className="py-12 text-center text-slate-400">
            {p('noWithdrawalRequests')}
          </div>
        ) : (
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {requests.map((req) => {
              const isExpanded = expandedId === req.id

              return (
                <div key={req.id} className="flex flex-col">
                  {/* Main Row Content */}
                  <div className="grid grid-cols-[120px_1.2fr_1fr_1fr_1fr_1fr_1fr] gap-4 px-6 py-5 items-center text-start text-sm">
                    {/* Teacher */}
                    <div className="w-[120px] font-bold text-slate-800 dark:text-white">
                      {req.teacher}
                    </div>

                    {/* Amount */}
                    <div className="font-extrabold text-[#0f7a6c] dark:text-emerald-400">
                      {req.amount} ر.س
                    </div>

                    {/* Bank */}
                    <div className="text-slate-700 dark:text-slate-300 font-medium">
                      {req.bank}
                    </div>

                    {/* Account Number */}
                    <div className="text-slate-500 dark:text-slate-400 text-xs font-mono">
                      {req.accountNumber}
                    </div>

                    {/* Date */}
                    <div className="text-slate-500 dark:text-slate-400 text-xs">
                      {req.date}
                    </div>

                    {/* Status */}
                    <div>
                      {req.status === 'pending' ? (
                        <span className="inline-flex px-3 py-1 bg-amber-50 dark:bg-amber-950/20 text-amber-600 dark:text-amber-400 rounded-full text-xs font-semibold">
                          {p('statusPending')}
                        </span>
                      ) : req.status === 'paid' ? (
                        <span className="inline-flex px-3 py-1 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 rounded-full text-xs font-semibold">
                          {p('statusPaid')}
                        </span>
                      ) : (
                        <span className="inline-flex px-3 py-1 bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400 rounded-full text-xs font-semibold">
                          {p('statusRejected')}
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-end gap-2">
                      {req.status === 'pending' ? (
                        <>
                          <button
                            onClick={() => {
                              setExpandedId(isExpanded ? null : req.id)
                              setImagePreview(null)
                              setProofImage(null)
                            }}
                            className="p-1.5 rounded-full text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all border border-blue-100 dark:border-blue-950"
                            title={p('uploadProof')}
                          >
                            <Upload size={14} />
                          </button>
                          <button
                            onClick={() => onReject(req.id)}
                            className="p-1.5 rounded-full text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition-all border border-red-100 dark:border-red-950"
                            title={p('reject')}
                          >
                            <X size={14} />
                          </button>
                          <button
                            onClick={() => onApprove(req.id, null)}
                            className="p-1.5 rounded-full text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition-all border border-emerald-100 dark:border-emerald-950"
                            title={p('approve')}
                          >
                            <Check size={14} />
                          </button>
                        </>
                      ) : (
                        req.proofImage && (
                          <a
                            href={req.proofImage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-full text-slate-400 hover:text-[#0f7a6c] hover:bg-slate-50 transition-all border border-slate-100"
                            title={p('viewProof')}
                          >
                            <Eye size={14} />
                          </a>
                        )
                      )}
                    </div>
                  </div>

                  {/* Expandable Upload Panel */}
                  {isExpanded && (
                    <div className="bg-[#f0f7f6] dark:bg-slate-900/60 p-6 border-t border-slate-100 dark:border-slate-800 transition-all flex flex-col items-center">
                      <div className="w-full max-w-lg space-y-4">
                        <h4 className="font-bold text-slate-800 dark:text-white text-sm text-end">
                          {p('uploadProofTitle')}
                        </h4>

                        {/* Dashed Box */}
                        <label className="block cursor-pointer">
                          <div className="w-full h-36 rounded-2xl border-2 border-dashed border-[#0f7a6c]/20 hover:border-[#0f7a6c]/50 bg-white dark:bg-slate-950 flex flex-col items-center justify-center gap-2 overflow-hidden transition-colors">
                            {imagePreview ? (
                              <img
                                src={imagePreview}
                                alt="proof"
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <>
                                <FileUp size={28} className="text-slate-300" />
                                <span className="text-xs text-slate-400">
                                  {p('uploadProofHint')}
                                </span>
                              </>
                            )}
                          </div>
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => handleFileChange(e, req.id)}
                          />
                        </label>

                        {/* Action buttons */}
                        <div className="flex gap-3 justify-end">
                          <button
                            onClick={() => setExpandedId(null)}
                            className="px-5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-sm font-semibold hover:bg-slate-50 transition-colors"
                          >
                            {p('cancel')}
                          </button>
                          <button
                            onClick={() => handleUploadSubmit(req.id)}
                            disabled={!proofImage || uploadingId === req.id}
                            className="px-6 py-2 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
                          >
                            {uploadingId === req.id && <Spinner />}
                            {p('btnUpload')}
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
