import { useState, useRef } from 'react'
import { Trash2, FileText, Upload, Plus, Award, ExternalLink } from 'lucide-react'

export default function TeacherCertificatesCard({
  formData,
  onChange,
  isRtl,
  t
}) {
  const fileInputRef = useRef(null)
  const certificates = Array.isArray(formData.certificates) ? formData.certificates : []
  const achievements = Array.isArray(formData.achievements) ? formData.achievements : []

  // Achievement inputs state
  const [newAchAr, setNewAchAr] = useState('')
  const [newAchEn, setNewAchEn] = useState('')

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files || [])
    if (files.length === 0) return

    const newCertEntries = files.map((file, idx) => ({
      id: `new-${Date.now()}-${idx}`,
      name: file.name,
      file: file,
      size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
      isNew: true
    }))

    onChange('certificates', [...certificates, ...newCertEntries])
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  const handleRemoveCertificate = (index) => {
    const updated = certificates.filter((_, i) => i !== index)
    onChange('certificates', updated)
  }

  const handleAddAchievement = () => {
    if (!newAchAr.trim() && !newAchEn.trim()) return

    const newAch = {
      ar: newAchAr.trim() || newAchEn.trim(),
      en: newAchEn.trim() || newAchAr.trim()
    }

    onChange('achievements', [...achievements, newAch])
    setNewAchAr('')
    setNewAchEn('')
  }

  const handleRemoveAchievement = (index) => {
    const updated = achievements.filter((_, i) => i !== index)
    onChange('achievements', updated)
  }

  return (
    <div className="space-y-8 text-start">
       <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 overflow-hidden shadow-soft">
        <div className="bg-[#005953] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText size={18} className="text-white" />
            <h3 className="text-sm font-bold text-white">
              {isRtl ? 'ملفات الشهادات والإجازات' : 'Certificates & Accreditations Files'} ({certificates.length})
            </h3>
          </div>
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-white/15 hover:bg-white/25 text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
          >
            <Upload size={14} />
            <span>{isRtl ? 'رفع شهادة جديدة' : 'Upload Certificate'}</span>
          </button>
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept=".pdf,.png,.jpg,.jpeg,.webp"
            className="hidden"
            onChange={handleFileUpload}
          />
        </div>

        <div className="p-6 space-y-3">
          {certificates.length === 0 ? (
            <div
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-slate-200 dark:border-slate-800 hover:border-[#005953] dark:hover:border-emerald-500 rounded-2xl p-6 text-center cursor-pointer transition-colors"
            >
              <Upload size={24} className="mx-auto text-slate-400 mb-2" />
              <p className="text-xs font-bold text-slate-600 dark:text-slate-300">
                {isRtl ? 'اضغط هنا لرفع ملفات الشهادات (PDF أو صور)' : 'Click here to upload certificates (PDF or images)'}
              </p>
              <p className="text-[11px] text-slate-400 mt-1">
                PDF, JPG, PNG, WEBP (Max 10MB)
              </p>
            </div>
          ) : (
            <div className="divide-y divide-slate-100 dark:divide-slate-800/60">
              {certificates.map((cert, index) => {
                const certName = typeof cert === 'string'
                  ? cert
                  : (cert?.name || (cert?.file instanceof File ? cert.file.name : `شهادة #${index + 1}`))
                const certFileUrl = cert?.file instanceof File
                  ? URL.createObjectURL(cert.file)
                  : (cert?.file || cert?.url || null)
                const isNew = cert?.isNew || cert instanceof File || cert?.file instanceof File

                return (
                  <div
                    key={cert?.id || index}
                    className="py-3 flex items-center justify-between gap-3 first:pt-0 last:pb-0"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="p-2.5 bg-emerald-50 dark:bg-emerald-950/30 text-[#005953] dark:text-emerald-400 rounded-xl shrink-0">
                        <FileText size={18} />
                      </div>
                      <div className="min-w-0">
                        <span className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 block truncate">
                          {certName}
                        </span>
                        {cert?.size && (
                          <span className="text-[10px] text-slate-400 block font-medium">
                            {cert.size} {isNew ? (isRtl ? '• جديد' : '• New') : ''}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {certFileUrl && typeof certFileUrl === 'string' && (
                        <a
                          href={certFileUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg transition-colors"
                          title={isRtl ? 'معاينة' : 'Preview'}
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                      <button
                        type="button"
                        onClick={() => handleRemoveCertificate(index)}
                        className="p-1.5 bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/30 text-rose-500 rounded-lg transition-colors cursor-pointer"
                        title={isRtl ? 'حذف' : 'Delete'}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>

       <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-5">
        <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800/60 pb-3">
          <Award size={18} className="text-amber-500" />
          <h3 className="text-sm font-bold text-slate-850 dark:text-white">
            {isRtl ? 'الإنجازات والشهادات التقديرية (achievements)' : 'Achievements & Honors'} ({achievements.length})
          </h3>
        </div>

         <div className="space-y-3 p-4 bg-[#f3f7f6] dark:bg-slate-950/40 rounded-2xl border border-slate-100 dark:border-slate-850">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1">
                {isRtl ? 'الإنجاز بالعربية' : 'Achievement (Arabic)'}
              </label>
              <input
                type="text"
                value={newAchAr}
                onChange={(e) => setNewAchAr(e.target.value)}
                placeholder={isRtl ? 'مثال: المركز الأول في مسابقة الملك سلمان' : 'e.g. 1st place in Quran contest'}
                className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2 text-xs outline-none text-slate-800 dark:text-slate-200 focus:border-[#005953]"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1">
                {isRtl ? 'الإنجاز بالإنجليزية' : 'Achievement (English)'}
              </label>
              <input
                type="text"
                value={newAchEn}
                onChange={(e) => setNewAchEn(e.target.value)}
                placeholder="e.g. 1st place in National Competition"
                dir="ltr"
                className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2 text-xs outline-none text-slate-800 dark:text-slate-200 focus:border-[#005953]"
              />
            </div>
          </div>
          <button
            type="button"
            onClick={handleAddAchievement}
            className="w-full sm:w-auto px-5 py-2 bg-[#005953] hover:bg-[#004742] text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Plus size={14} />
            <span>{isRtl ? 'إضافة إنجاز' : 'Add Achievement'}</span>
          </button>
        </div>

         <div className="space-y-2">
          {achievements.length === 0 ? (
            <p className="text-xs text-slate-400 dark:text-slate-500 py-1">
              {isRtl ? 'لا توجد إنجازات مضافة حالياً.' : 'No achievements added yet.'}
            </p>
          ) : (
            achievements.map((ach, idx) => {
              const arText = typeof ach === 'object' ? (ach?.ar || ach?.name || '') : ach
              const enText = typeof ach === 'object' ? ach?.en : null

              return (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 bg-white dark:bg-slate-950/60 rounded-xl border border-slate-100 dark:border-slate-800 gap-2"
                >
                  <div className="space-y-0.5 min-w-0">
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block truncate">
                      ⭐ {arText}
                    </span>
                    {enText && (
                      <span className="text-[11px] font-medium text-slate-400 block truncate" dir="ltr">
                        {enText}
                      </span>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveAchievement(idx)}
                    className="p-1 text-slate-400 hover:text-rose-500 transition-colors shrink-0 cursor-pointer"
                    title={isRtl ? 'حذف' : 'Delete'}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}