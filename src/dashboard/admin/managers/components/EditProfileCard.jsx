import { useMemo } from 'react'
import { Calendar, Phone, Mail } from 'lucide-react'

export default function EditProfileCard({
  formData,
  mockJoinDate,
  isRtl,
  countryFlag,
  roleName
}) {
  const avatarLetter = useMemo(() => {
    return formData.name ? formData.name.trim().charAt(0) : 'ن'
  }, [formData.name])

  const displayRole = useMemo(() => {
    if (!roleName) return ''
    return typeof roleName === 'object' ? (isRtl ? roleName.ar || roleName.en : roleName.en || roleName.ar) : roleName
  }, [roleName, isRtl])
  console.log("formdata", formData);

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6">

        <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-start w-full lg:w-auto">
          <div className="w-20 h-20 shrink-0 rounded-2xl bg-brand-500/10 text-brand-700 dark:bg-brand-500/20 dark:text-brand-300 flex items-center justify-center text-3xl font-black">
            {avatarLetter}
          </div>

          <div className="space-y-2">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
              <h2 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
                <span>{formData.name}</span>
              </h2>
              {displayRole && (
                <span className="px-3 py-1 bg-[#e9f6f3] text-[#0f7a6c] dark:bg-[#0f7a6c]/20 dark:text-[#14a693] rounded-full text-xs font-bold">
                  {displayRole}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full lg:w-auto flex-1 max-w-5xl">

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

          <div className="p-4 bg-slate-50/50 dark:bg-slate-950/30 border border-slate-100/50 dark:border-slate-850 rounded-2xl flex items-center gap-3">
            <div className="p-2.5 bg-white dark:bg-slate-900 rounded-xl text-emerald-500 dark:text-emerald-400 border border-slate-100 dark:border-slate-800">
              <Phone size={18} />
            </div>
            <div className="text-start">
              <p className="text-xs text-slate-400 dark:text-slate-500 font-bold">
                {isRtl ? 'رقم الجوال' : 'Mobile Number'}
              </p>
              <p className="text-sm font-bold text-slate-800 dark:text-white mt-0.5" dir="ltr">
                {formData.phonePrefix || formData.phoneCode} {formData.phone}
              </p>
            </div>
          </div>

          {/* Email Address */}
          <div className="p-4 bg-slate-50/50 dark:bg-slate-950/30 border border-slate-100/50 dark:border-slate-850 rounded-2xl flex items-center gap-3">
            <div className="p-2.5 bg-white dark:bg-slate-900 rounded-xl text-blue-500 dark:text-blue-405 border border-slate-100 dark:border-slate-800">
              <Mail size={18} />
            </div>
            <div className="text-start overflow-hidden flex-1">
              <p className="text-xs text-slate-400 dark:text-slate-500 font-bold">
                {isRtl ? 'البريد الإلكتروني' : 'Email Address'}
              </p>
              <p className="text-sm font-bold text-slate-800 dark:text-white mt-0.5 break-all" title={formData.email}>
                {formData.email}
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
