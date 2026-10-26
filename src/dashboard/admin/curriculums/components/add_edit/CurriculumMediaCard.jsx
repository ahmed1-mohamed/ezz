import { useRef } from 'react'
import { Image as ImageIcon, UploadCloud, Trash2, RefreshCw } from 'lucide-react'

export default function CurriculumMediaCard({
  previewImage = null,
  onImageChange,
  onImageRemove,
  isRtl = true
}) {
  const fileInputRef = useRef(null)

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-100 dark:border-slate-800 shadow-xs space-y-5 text-start">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-[#00594C]/10 text-[#00594C] dark:bg-emerald-950/40 dark:text-emerald-400 flex items-center justify-center shrink-0">
            <ImageIcon size={18} />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-800 dark:text-white">
              {isRtl ? 'صورة وغلاف المنهج' : 'Curriculum Cover Image'}
            </h3>
            <p className="text-xs text-slate-400 dark:text-slate-500">
              {isRtl ? 'تظهر على بطاقة المنهج وصفحة التفاصيل' : 'Appears on curriculum card and details'}
            </p>
          </div>
        </div>
      </div>

      <div
        onClick={() => fileInputRef.current?.click()}
        className={`relative w-full rounded-2xl border-2 border-dashed transition-all cursor-pointer overflow-hidden group flex flex-col items-center justify-center min-h-[220px] ${
          previewImage
            ? 'border-[#00594C]/40 bg-slate-950/5'
            : 'border-slate-200 dark:border-slate-700 bg-slate-50/70 dark:bg-slate-800/40 hover:border-[#00594C] hover:bg-[#00594C]/5'
        }`}
      >
        {previewImage ? (
          <div className="relative w-full h-[220px]">
            <img
              src={previewImage}
              alt="Curriculum cover"
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-xs flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="px-4 py-2 rounded-xl bg-white/90 text-slate-800 text-xs font-bold flex items-center gap-2 shadow-sm">
                <RefreshCw size={14} />
                {isRtl ? 'تغيير الصورة' : 'Change Image'}
              </span>
            </div>
          </div>
        ) : (
          <div className="p-8 text-center flex flex-col items-center space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 group-hover:text-[#00594C] group-hover:border-[#00594C]/40 shadow-xs transition-colors">
              <UploadCloud size={28} />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-700 dark:text-slate-200">
                {isRtl ? 'اضغط لاختيار صورة الغلاف' : 'Click to upload cover image'}
              </p>
              <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
                PNG, JPG, WebP ({isRtl ? 'حد أقصى 5 ميجابايت' : 'up to 5MB'})
              </p>
            </div>
          </div>
        )}
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={onImageChange}
        className="hidden"
      />

      {previewImage && (
        <div className="flex items-center justify-between pt-1">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="text-xs font-bold text-[#00594C] dark:text-emerald-400 hover:underline flex items-center gap-1.5 cursor-pointer"
          >
            <RefreshCw size={13} />
            {isRtl ? 'رفع صورة بديلة' : 'Upload replacement'}
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onImageRemove()
            }}
            className="text-xs font-bold text-red-500 hover:text-red-600 hover:underline flex items-center gap-1.5 cursor-pointer"
          >
            <Trash2 size={13} />
            {isRtl ? 'حذف الصورة' : 'Remove image'}
          </button>
        </div>
      )}
    </div>
  )
}
