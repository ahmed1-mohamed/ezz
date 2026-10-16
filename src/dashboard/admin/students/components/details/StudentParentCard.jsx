import { useNavigate } from 'react-router-dom'
import { UserCheck, Phone, Mail } from 'lucide-react'

export default function StudentParentCard({
  isRtl,
  parentInfo
}) {
  const navigate = useNavigate()

  const handleViewParent = () => {
    if (parentInfo?.id) {
      navigate(`/dashboard/admin/parents/${parentInfo.id}`)
    } else {
      navigate('/dashboard/admin/parents')
    }
  }

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6 text-start">
      <div className="flex items-center gap-2 text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-800/60 pb-3">
        <UserCheck className="text-[#005953]" size={20} />
        <h3 className="text-base font-bold">
          {isRtl ? 'ولي الأمر والاتصال' : 'Parent Contact Info'}
        </h3>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-[#f3f7f6] dark:bg-slate-950/20 rounded-2xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center font-black">
              {parentInfo.initial}
            </div>
            <span className="text-sm font-bold text-slate-700 dark:text-slate-200">
              {parentInfo.name}
            </span>
          </div>

          <button
            type="button"
            onClick={handleViewParent}
            className="text-xs font-bold text-[#005953] hover:text-[#004742] dark:text-emerald-400 hover:underline transition-colors cursor-pointer"
          >
            {isRtl ? 'عرض الملف' : 'View Profile'}
          </button>
        </div>

        <div className={`flex items-center gap-3 p-3.5 bg-[#f3f7f6] dark:bg-slate-950/20 border border-transparent rounded-2xl ${isRtl ? 'justify-end' : 'justify-start'}`}>
          {isRtl ? (
            <>
              <span className="text-sm font-semibold text-slate-650 dark:text-slate-300 font-mono" dir="ltr">
                {parentInfo.phone}
              </span>
              <Phone className="text-slate-450 shrink-0" size={16} />
            </>
          ) : (
            <>
              <Phone className="text-slate-450 shrink-0" size={16} />
              <span className="text-sm font-semibold text-slate-650 dark:text-slate-300 font-mono" dir="ltr">
                {parentInfo.phone}
              </span>
            </>
          )}
        </div>

        <div className={`flex items-center gap-3 p-3.5 bg-[#f3f7f6] dark:bg-slate-950/20 border border-transparent rounded-2xl ${isRtl ? 'justify-end' : 'justify-start'}`}>
          {isRtl ? (
            <>
              <span className="text-sm font-semibold text-slate-650 dark:text-slate-300">
                {parentInfo.email}
              </span>
              <Mail className="text-slate-455 shrink-0" size={16} />
            </>
          ) : (
            <>
              <Mail className="text-slate-455 shrink-0" size={16} />
              <span className="text-sm font-semibold text-slate-650 dark:text-slate-300">
                {parentInfo.email}
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
