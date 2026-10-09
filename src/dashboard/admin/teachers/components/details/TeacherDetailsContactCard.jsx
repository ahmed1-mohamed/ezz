import { Users, Calendar, Phone, Mail } from 'lucide-react'

export default function TeacherDetailsContactCard({ teacher, isRtl = true }) {
  const joinDate = teacher?.joinDate || '2023-01-15'
  const phone = teacher?.phone || '+966501234567'
  const email = teacher?.email || 'teacher@manarat.com'

  return (
    <div className="bg-white dark:bg-slate-900 rounded-[28px] p-6 sm:p-8 shadow-sm border border-slate-100/80 dark:border-slate-800/60 space-y-5 text-start">
      <div className="flex items-center gap-2">
        <h2 className="text-xl font-bold text-slate-800 dark:text-white">
          {isRtl ? 'المعلومات الشخصية' : 'Personal Contact Info'}
        </h2>
        <Users size={20} className="text-[#005953]" />
      </div>

      <div className="space-y-3.5">
         <div className="bg-[#f4f7f6] dark:bg-slate-950 rounded-2xl p-4 flex items-center justify-between">
          <div className="p-2.5 bg-[#e0eee9] dark:bg-slate-800 text-[#005953] dark:text-emerald-400 rounded-xl flex items-center justify-center">
            <Calendar size={18} />
          </div>
          <div className="text-end">
            <span className="text-[11px] font-bold text-slate-400 block">
              {isRtl ? 'تاريخ الانضمام' : 'Join Date'}
            </span>
            <span className="text-sm font-bold text-slate-700 dark:text-slate-200 block mt-0.5" dir="ltr">
              {joinDate}
            </span>
          </div>
        </div>

         <div className="bg-[#f4f7f6] dark:bg-slate-950 rounded-2xl p-4 flex items-center justify-between">
          <div className="p-2.5 bg-[#e0eee9] dark:bg-slate-800 text-[#005953] dark:text-emerald-400 rounded-xl flex items-center justify-center">
            <Phone size={18} />
          </div>
          <div className="text-end">
            <span className="text-[11px] font-bold text-slate-400 block">
              {isRtl ? 'رقم الجوال' : 'Phone Number'}
            </span>
            <span className="text-sm font-bold text-slate-700 dark:text-slate-200 block mt-0.5" dir="ltr">
              {phone}
            </span>
          </div>
        </div>

         <div className="bg-[#f4f7f6] dark:bg-slate-950 rounded-2xl p-4 flex items-center justify-between">
          <div className="p-2.5 bg-[#e0eee9] dark:bg-slate-800 text-[#005953] dark:text-emerald-400 rounded-xl flex items-center justify-center">
            <Mail size={18} />
          </div>
          <div className="text-end">
            <span className="text-[11px] font-bold text-slate-400 block">
              {isRtl ? 'البريد الإلكتروني' : 'Email Address'}
            </span>
            <span className="text-sm font-bold text-slate-700 dark:text-slate-200 block mt-0.5" dir="ltr">
              {email}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
