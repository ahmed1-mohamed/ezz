import { useState } from 'react'
import { Image as ImageIcon } from 'lucide-react'
import { getImageUrl } from '@/shared/services/api/teachersApi'

export default function PackageImageUpload({
  imagePreview,
  onImageChange,
  label,
  hint,
  packageName = '',
  isRtl = true,
}) {
  const [failedImage, setFailedImage] = useState('')
  const imageValue = typeof imagePreview === 'string' ? imagePreview.trim() : ''
  const imageSrc = imageValue && /^(https?:|data:|blob:)/i.test(imageValue)
    ? imageValue
    : imageValue
      ? getImageUrl(imageValue)
      : ''
  const rawInitial = String(packageName || '').trim().charAt(0)
  const firstLetter = rawInitial && (isRtl || !/[\u0600-\u06FF]/.test(rawInitial))
    ? rawInitial.toLocaleUpperCase(isRtl ? 'ar' : 'en')
    : (isRtl ? 'ب' : 'P')
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 text-start">
        {label}
      </label>
      <label className="block cursor-pointer">
        <div className="w-full h-36 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center gap-2 hover:border-[#0f7a6c]/50 bg-slate-50 dark:bg-slate-900 overflow-hidden transition-colors">
          {imageSrc && failedImage !== imageValue ? (
            <img
              src={imageSrc}
              alt="preview"
              className="w-full h-full object-cover"
              onError={() => setFailedImage(imageValue)}
            />
          ) : firstLetter ? (
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="w-16 h-16 rounded-2xl bg-[#0f7a6c] text-white font-bold text-3xl flex items-center justify-center shadow-md">
                {firstLetter}
              </div>
              <span className="text-xs text-slate-400">{hint}</span>
            </div>
          ) : (
            <>
              <ImageIcon size={28} className="text-slate-300 dark:text-slate-600" />
              <span className="text-xs text-slate-400">{hint}</span>
            </>
          )}
        </div>
        <input type="file" accept="image/*" className="hidden" onChange={onImageChange} />
      </label>
    </div>
  )
}
