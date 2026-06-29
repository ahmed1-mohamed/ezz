import { useState } from 'react'
import { Trash2, FileText, Eye, Edit3, Plus, Upload } from 'lucide-react'

export default function TeacherCertificatesCard({
  formData,
  onChange,
  isRtl,
  t
}) {
  const [newCertificate, setNewCertificate] = useState('')
  const [showAddDocModal, setShowAddDocModal] = useState(false)
  const [newDocName, setNewDocName] = useState('')

  const certificates = formData.certificates || []

  const handleAddCertificate = () => {
    if (!newCertificate.trim()) return
    const updated = [...certificates, newCertificate.trim()]
    onChange('certificates', updated)
    setNewCertificate('')
  }

  const handleRemoveCertificate = (index) => {
    const updated = certificates.filter((_, i) => i !== index)
    onChange('certificates', updated)
  }

  const documents = formData.documents || []

  const handleAddDocument = () => {
    if (!newDocName.trim()) return
    const newDoc = {
      id: Date.now(),
      nameAr: newDocName.trim(),
      nameEn: newDocName.trim(),
      size: `${(Math.random() * 2 + 1).toFixed(1)} MB`
    }
    const updated = [...documents, newDoc]
    onChange('documents', updated)
    setNewDocName('')
    setShowAddDocModal(false)
  }

  const handleRemoveDocument = (id) => {
    const updated = documents.filter((doc) => doc.id !== id)
    onChange('documents', updated)
  }

  return (
    <div className="space-y-8">

      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 overflow-hidden shadow-soft text-start">

        <div className="bg-[#005953] px-6 py-4 flex items-center justify-between">
          <h3 className="text-sm font-bold text-white">
            {t('adminDashboard.teachers.licenses', 'الإجازات والشهادات')}
          </h3>
        </div>

        <div className="p-6 space-y-4">
          {certificates.length === 0 ? (
            <p className="text-xs text-slate-400 dark:text-slate-500 py-2">
              {t('adminDashboard.teachers.noLicensesYet', 'لا توجد إجازات أو شهادات مضافة بعد.')}
            </p>
          ) : (
            <div className="divide-y divide-slate-100 dark:divide-slate-800/60">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="py-3 flex items-center justify-between first:pt-0 last:pb-0"
                >
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-205">
                    {cert}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleRemoveCertificate(index)}
                    className="p-1.5 bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/30 dark:hover:bg-rose-900/40 text-rose-500 rounded-lg transition-colors cursor-pointer"
                    title={t('adminDashboard.teachers.deleteCertificate', 'حذف الإجازة')}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="flex gap-2 pt-3 border-t border-slate-100 dark:border-slate-800/60">
            <input
              type="text"
              value={newCertificate}
              onChange={(e) => setNewCertificate(e.target.value)}
              className="flex-1 bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-2.5 px-4 outline-none transition-all text-sm"
              placeholder={t('adminDashboard.teachers.enterCertificateName', 'أدخل اسم الإجازة أو الشهادة...')}
            />
            <button
              type="button"
              onClick={handleAddCertificate}
              className="p-2.5 bg-[#005953] hover:bg-[#004742] text-white rounded-2xl transition-all cursor-pointer hover:scale-105 active:scale-95"
            >
              <Plus size={18} />
            </button>
          </div>
        </div>

      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft text-start space-y-6">

        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/60 pb-3">
          <h3 className="text-base font-bold text-slate-800 dark:text-white">
            {t('adminDashboard.teachers.documents', 'الشهادات والاوراق')}
          </h3>
          <button
            type="button"
            onClick={() => setShowAddDocModal(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-50 hover:bg-brand-100 text-brand-600 rounded-xl text-xs font-bold transition-all dark:bg-brand-950/20 dark:text-brand-400 cursor-pointer"
          >
            <Upload size={14} />
            <span>{t('adminDashboard.teachers.addDocument', 'إضافة مستند')}</span>
          </button>
        </div>

        <div className="space-y-4">
          {documents.length === 0 ? (
            <p className="text-xs text-slate-400 dark:text-slate-500 py-2">
              {t('adminDashboard.teachers.noDocuments', 'لا توجد مستندات مضافة.')}
            </p>
          ) : (
            documents.map((doc) => (
              <div
                key={doc.id}
                className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-950/40 rounded-2xl border border-slate-100/60 dark:border-slate-850/40"
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-red-50 dark:bg-red-950/20 rounded-2xl text-red-500 shrink-0">
                    <FileText size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-850 dark:text-slate-100">
                      {isRtl ? doc.nameAr : doc.nameEn}
                    </h4>
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                      {t('adminDashboard.teachers.size', 'الحجم')}: {doc.size}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="p-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-600 dark:bg-emerald-950/20 dark:text-emerald-400 rounded-xl transition-all cursor-pointer"
                    title={t('common.edit', 'تعديل')}
                  >
                    <Edit3 size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => alert(t('adminDashboard.teachers.viewAvailableLive', 'عرض المستند متاح في النسخة الحية.'))}
                    className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-300 rounded-xl transition-all cursor-pointer"
                    title={t('common.view', 'عرض')}
                  >
                    <Eye size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRemoveDocument(doc.id)}
                    className="p-2 bg-rose-50 hover:bg-rose-100 text-rose-500 dark:bg-rose-950/20 dark:text-rose-400 rounded-xl transition-all cursor-pointer"
                    title={t('common.delete', 'حذف')}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {showAddDocModal && (
          <div className="p-4 bg-brand-50/50 dark:bg-slate-950/60 rounded-2xl border border-brand-100/60 dark:border-brand-900/20 space-y-3">
            <h4 className="text-xs font-bold text-brand-700 dark:text-brand-400">
              {t('adminDashboard.teachers.newDocumentName', 'اسم المستند الجديد')}
            </h4>
            <div className="flex gap-2">
              <input
                type="text"
                value={newDocName}
                onChange={(e) => setNewDocName(e.target.value)}
                className="flex-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-brand-500/20 text-slate-850 dark:text-slate-100 rounded-xl py-2 px-3 outline-none text-xs"
                placeholder={t('adminDashboard.teachers.newDocumentPlaceholder', 'مثال: شهادة التخرج')}
                autoFocus
              />
              <button
                type="button"
                onClick={handleAddDocument}
                className="px-4 py-2 bg-brand-500 hover:bg-brand-600 text-white rounded-xl text-xs font-bold transition-all"
              >
                {t('common.add', 'إضافة')}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowAddDocModal(false)
                  setNewDocName('')
                }}
                className="px-3 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 dark:bg-slate-800 dark:text-slate-300 rounded-xl text-xs font-semibold transition-all"
              >
                {t('common.cancel', 'إلغاء')}
              </button>
            </div>
          </div>
        )}

      </div>

    </div>
  )
}