import { useState, useEffect, useRef } from 'react'
import { X, Send, MessageSquare } from 'lucide-react'

export default function SendMessageModal({ parent, isRtl, t, onClose, onSend }) {
  const [message, setMessage] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [sent, setSent] = useState(false)
  const overlayRef = useRef(null)

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose()
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  const handleSend = async () => {
    if (!message.trim()) return
    setIsSending(true)
    try {
      await onSend(parent.id, message)
      setSent(true)
      setTimeout(() => {
        setSent(false)
        onClose()
      }, 1500)
    } catch (err) {
      console.error('Failed to send message:', err)
    } finally {
      setIsSending(false)
    }
  }

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">

        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-brand-50 dark:bg-brand-950/30 text-brand-600 dark:text-brand-400">
              <MessageSquare size={18} />
            </div>
            <h2 className="text-base font-bold text-slate-800 dark:text-white">
              {t('adminDashboard.parents.sendMessage', 'إرسال رسالة')}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6 space-y-4">

          <div className="space-y-1.5">
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 text-end">
              {t('adminDashboard.parents.name', 'الاسم')}
            </label>
            <input
              type="text"
              readOnly
              value={parent?.name || ''}
              className="w-full rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-4 py-3 text-sm text-slate-600 dark:text-slate-300 text-end outline-none cursor-default"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 text-end">
                {t('adminDashboard.parents.phone', 'رقم الهاتف')}
              </label>
              <input
                type="text"
                readOnly
                value={parent?.phone || ''}
                className="w-full rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-4 py-3 text-sm text-slate-600 dark:text-slate-300 text-end outline-none cursor-default"
              />
            </div>
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 text-end">
                {t('adminDashboard.parents.email', 'البريد الإلكتروني')}
              </label>
              <input
                type="text"
                readOnly
                value={parent?.email || ''}
                className="w-full rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-4 py-3 text-sm text-slate-500 dark:text-slate-400 text-end outline-none cursor-default"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 text-end">
              {t('adminDashboard.parents.message', 'الرسالة')}
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={isRtl ? 'اكتب الرسالة ............' : 'Write your message...'}
              rows={5}
              className="w-full rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/40 px-4 py-3 text-sm text-slate-800 dark:text-slate-200 text-end placeholder-slate-400 outline-none resize-none focus:border-brand-400 focus:bg-white dark:focus:bg-slate-800 transition-all"
            />
          </div>
        </div>

        <div className="px-6 pb-6">
          <button
            onClick={handleSend}
            disabled={isSending || !message.trim() || sent}
            className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl text-sm font-bold transition-all active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed ${sent
                ? 'bg-emerald-500 text-white'
                : 'bg-brand-600 hover:bg-brand-700 text-white shadow-lg shadow-brand-500/20'
              }`}
          >
            {sent ? (
              <>
                <span>✓</span>
                <span>{isRtl ? 'تم الإرسال!' : 'Sent!'}</span>
              </>
            ) : isSending ? (
              <span className="h-5 w-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
            ) : (
              <>
                <Send size={16} />
                <span>{t('adminDashboard.parents.send', 'إرسال')}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}