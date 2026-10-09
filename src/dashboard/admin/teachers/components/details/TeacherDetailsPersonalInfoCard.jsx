export default function TeacherDetailsPersonalInfoCard({ teacher, isRtl = true }) {
  const nameAr = (typeof teacher?.name === 'object' ? teacher?.name?.ar : teacher?.name) || 'نورة أحمد'
  const nameEn = (typeof teacher?.name === 'object' ? teacher?.name?.en : teacher?.nameEn) || teacher?.nameEn || 'Nora ahmed'
  const email = teacher?.email || 'Nora_ahmed@yahoo.com'
  const phone = teacher?.phone || '+0201012345678'

  const phoneCode = phone.startsWith('+') ? phone.split(' ')[0] || '+02' : '+02'
  const phoneClean = phone.includes(' ') ? phone.split(' ').slice(1).join(' ') : phone

  return (
    <div className="bg-white dark:bg-slate-900 rounded-[28px] p-6 sm:p-8 shadow-sm border border-slate-100/80 dark:border-slate-800/60 space-y-6 text-start">
      <h2 className="text-xl font-bold text-slate-800 dark:text-white">
        {isRtl ? 'البيانات الشخصية' : 'Personal Information'}
      </h2>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
            {isRtl ? 'الإسم بالعربية' : 'Name in Arabic'}
          </label>
          <div className="w-full bg-[#f3f7f6] dark:bg-slate-950 text-slate-800 dark:text-slate-100 rounded-2xl py-3.5 px-4 text-sm font-medium border border-transparent">
            {nameAr}
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
            Full Name
          </label>
          <div className="w-full bg-[#f3f7f6] dark:bg-slate-950 text-slate-800 dark:text-slate-100 rounded-2xl py-3.5 px-4 text-sm font-medium border border-transparent" dir="ltr">
            {nameEn}
          </div>
        </div>
      </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
            {isRtl ? 'البريد الإلكتروني' : 'Email Address'}
          </label>
          <div className="w-full bg-[#f3f7f6] dark:bg-slate-950 text-slate-800 dark:text-slate-100 rounded-2xl py-3.5 px-4 text-sm font-medium border border-transparent" dir="ltr">
            {email}
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
            {isRtl ? 'رقم الهاتف' : 'Phone Number'}
          </label>
          <div className="flex gap-2.5" dir="ltr">
            <div className="h-12 flex items-center justify-center gap-1.5 px-3.5 bg-[#f3f7f6] dark:bg-slate-950 rounded-2xl text-sm font-bold text-slate-700 dark:text-slate-200 shrink-0">
              <span className="text-base">🇪🇬</span>
              <span className="text-xs">{phoneCode}</span>
            </div>
            <div className="flex-1 bg-[#f3f7f6] dark:bg-slate-950 text-slate-800 dark:text-slate-100 rounded-2xl py-3.5 px-4 text-sm font-medium flex items-center">
              {phoneClean}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
