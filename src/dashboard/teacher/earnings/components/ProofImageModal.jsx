import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { X, ExternalLink, Download } from 'lucide-react'

export default function ProofImageModal({ isOpen, onClose, imageUrl, title, t }) {
  const tr = typeof t === 'function' ? t : (_key, fallback) => fallback
  useEffect(() => {
    if (!isOpen) return
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [isOpen])
  if (!isOpen || !imageUrl || typeof document === 'undefined') return null
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = imageUrl
    link.download = 'payment-document'
    link.target = '_blank'
    link.rel = 'noopener noreferrer'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }
  return createPortal(
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 w-screen h-screen min-h-screen z-[99999] flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      dir="rtl"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-slate-500 w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90vh] relative z-10"
      >
        <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <h3 className="text-base font-bold text-slate-800 dark:text-white">
            {title || tr('teacher.earnings.payouts.proofModalTitle', 'إيصال التحويل المالي')}
          </h3>
          <div className="flex items-center gap-2">
            <a
              href={imageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title={tr('teacher.earnings.payouts.openInNewTab', 'فتح في نافذة جديدة')}
            >
              <ExternalLink size={18} />
            </a>
            <button
              type="button"
              onClick={handleDownload}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              title={tr('teacher.earnings.payouts.downloadProof', 'تحميل الإيصال')}
            >
              <Download size={18} />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>
        </div>
        <div className="p-6 overflow-y-auto flex items-center justify-center bg-slate-50/50 dark:bg-slate-950/40">
          <img
            src={imageUrl}
            alt="Payment Proof"
            className="max-h-[65vh] w-auto max-w-full rounded-2xl shadow-md object-contain border border-slate-200/60 dark:border-slate-800"
          />
        </div>
      </div>
    </div>,
    document.body
  )
}
