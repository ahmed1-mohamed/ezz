import { useMemo } from 'react'
import { Calendar, Phone, Mail } from 'lucide-react'

export default function EditProfileCard({
  formData,
  mockJoinDate,
  isRtl,
}) {
  const avatarLetter = useMemo(() => {
    return formData.name ? formData.name.trim().charAt(0) : 'ن'
  }, [formData.name])

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6">

        {/* Avatar and Name */}
        <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-start w-full lg:w-auto">
          <div className="w-20 h-20 shrink-0 rounded-2xl bg-brand-500/10 text-brand-700 dark:bg-brand-500/20 dark:text-brand-300 flex items-center justify-center text-3xl font-black">
            {avatarLetter}
          </div>

          <div className="space-y-2">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
              <h2 className="text-xl font-bold text-slate-800 dark:text-white">
                {formData.name}
              </h2>
              <span className="px-3 py-1 bg-brand-50 text-brand-700 dark:bg-brand-950/30 dark:text-brand-300 rounded-full text-xs font-bold">
                {formData.role}
              </span>
            </div>
            <p className="text-sm font-semibold text-slate-400 dark:text-slate-500">
              {formData.nameEn || 'Noura Al-Mushrifa'}
            </p>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full lg:w-auto flex-1 max-w-3xl">

          {/* Join Date */}
          <div className="p-4 bg-slate-50/50 dark:bg-slate-950/30 border border-slate-100/50 dark:border-slate-850 rounded-2xl flex items-center gap-3">
            <div className="p-2.5 bg-white dark:bg-slate-900 rounded-xl text-slate-400 dark:text-slate-500 border border-slate-100 dark:border-slate-800">
              <Calendar size={18} />
            </div>
            <div className="text-start">
              <p className="text-xs text-slate-400 dark:text-slate-500 font-bold">
                {isRtl ? 'تاريخ الانضمام' : 'Join Date'}
              </p>
              <p className="text-sm font-bold text-slate-800 dark:text-white mt-0.5">
                {mockJoinDate}
              </p>
            </div>
          </div>

          {/* Mobile Number */}
          <div className="p-4 bg-slate-50/50 dark:bg-slate-950/30 border border-slate-100/50 dark:border-slate-850 rounded-2xl flex items-center gap-3">
            <div className="p-2.5 bg-white dark:bg-slate-900 rounded-xl text-emerald-500 dark:text-emerald-400 border border-slate-100 dark:border-slate-800">
              <Phone size={18} />
            </div>
            <div className="text-start">
              <p className="text-xs text-slate-400 dark:text-slate-500 font-bold">
                {isRtl ? 'رقم الجوال' : 'Mobile Number'}
              </p>
              <p className="text-sm font-bold text-slate-800 dark:text-white mt-0.5" dir="ltr">
                {formData.phonePrefix} {formData.phone}
              </p>
            </div>
          </div>

          {/* Email Address */}
          <div className="p-4 bg-slate-50/50 dark:bg-slate-950/30 border border-slate-100/50 dark:border-slate-850 rounded-2xl flex items-center gap-3">
            <div className="p-2.5 bg-white dark:bg-slate-900 rounded-xl text-blue-500 dark:text-blue-405 border border-slate-100 dark:border-slate-800">
              <Mail size={18} />
            </div>
            <div className="text-start overflow-hidden">
              <p className="text-xs text-slate-400 dark:text-slate-500 font-bold">
                {isRtl ? 'البريد الإلكتروني' : 'Email Address'}
              </p>
              <p className="text-sm font-bold text-slate-800 dark:text-white mt-0.5 truncate max-w-[150px] sm:max-w-none" title={formData.email}>
                {formData.email}
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
