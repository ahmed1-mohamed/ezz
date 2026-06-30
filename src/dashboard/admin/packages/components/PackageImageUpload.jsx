import { Image as ImageIcon } from 'lucide-react'

export default function PackageImageUpload({
  imagePreview,
  onImageChange,
  label,
  hint,
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 text-start">
        {label}
      </label>
      <label className="block cursor-pointer">
        <div className="w-full h-36 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center gap-2 hover:border-[#0f7a6c]/50 bg-slate-50 dark:bg-slate-900 overflow-hidden transition-colors">
          {imagePreview ? (
            <img src={imagePreview} alt="preview" className="w-full h-full object-cover" />
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