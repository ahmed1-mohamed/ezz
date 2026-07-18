import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Spinner from '@/shared/components/Spinner'
import { EMPTY_FAQ } from './packages_constants'

export default function FaqInlineForm({ onSave, editingFaq, onCancelEdit }) {
  const { t } = useTranslation()
  const p = (key) => t(`adminDashboard.packages.${key}`)

  const [form, setForm] = useState(EMPTY_FAQ)
  const [saving, setSaving] = useState(false)
  useEffect(() => {
    setForm(editingFaq ? { ...EMPTY_FAQ, ...editingFaq } : EMPTY_FAQ)
  }, [editingFaq])

  const setField = (k, v) => setForm((prev) => ({ ...prev, [k]: v }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.question.trim()) return
    setSaving(true)
    await onSave(form)
    setForm(EMPTY_FAQ)
    setSaving(false)
  }

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <h3 className="font-bold text-slate-800 dark:text-white text-sm">
          {editingFaq ? p('faqEditTitle') : p('faqFormTitle')}
        </h3>
        {editingFaq && (
          <button
            onClick={onCancelEdit}
            className="text-xs text-slate-400 hover:text-slate-600 transition-colors flex items-center gap-1"
          >
            <X size={13} />
            {p('cancelEdit')}
          </button>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 text-start">
            {p('questionAr')}
          </label>
          <input
            value={form.question}
            onChange={(e) => setField('question', e.target.value)}
            placeholder={p('questionArPlaceholder')}
            required
            className="w-full bg-[#f3f7f6] dark:bg-slate-900/60 rounded-xl px-4 py-2.5 text-sm outline-none placeholder-slate-400 text-start text-slate-800 dark:text-slate-100 border border-slate-100 dark:border-slate-800"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 text-start">
            {p('answerAr')}
          </label>
          <textarea
            value={form.answer}
            onChange={(e) => setField('answer', e.target.value)}
            rows={4}
            placeholder={p('answerArPlaceholder')}
            className="w-full bg-[#f3f7f6] dark:bg-slate-900/60 rounded-xl px-4 py-3 text-sm outline-none resize-none placeholder-slate-400 text-start text-slate-800 dark:text-slate-100 border border-slate-100 dark:border-slate-800"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">
            {p('questionEn')}
          </label>
          <input
            value={form.question_en}
            onChange={(e) => setField('question_en', e.target.value)}
            placeholder={p('questionEnPlaceholder')}
            className="w-full bg-[#f3f7f6] dark:bg-slate-900/60 rounded-xl px-4 py-2.5 text-sm outline-none placeholder-slate-400 text-slate-800 dark:text-slate-100 border border-slate-100 dark:border-slate-800"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">
            {p('answerEn')}
          </label>
          <textarea
            value={form.answer_en}
            onChange={(e) => setField('answer_en', e.target.value)}
            rows={4}
            placeholder={p('answerEnPlaceholder')}
            className="w-full bg-[#f3f7f6] dark:bg-slate-900/60 rounded-xl px-4 py-3 text-sm outline-none resize-none placeholder-slate-400 text-slate-800 dark:text-slate-100 border border-slate-100 dark:border-slate-800"
          />
        </div>

        <div className="flex justify-start pt-1">
          <button
            type="submit"
            disabled={saving}
            className="px-8 py-2.5 rounded-xl bg-[#0f7a6c] text-white text-sm font-semibold hover:bg-[#0d6b5e] transition-colors disabled:opacity-60 flex items-center gap-2 min-w-[140px] justify-center"
          >
            {saving && <Spinner />}
            {editingFaq ? p('update') : p('add')}
          </button>
        </div>
      </form>
    </div>
  )
}