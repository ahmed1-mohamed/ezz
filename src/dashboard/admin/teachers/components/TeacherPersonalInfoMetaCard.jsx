import { Calendar, Phone, Mail, Users } from 'lucide-react'

export default function TeacherPersonalInfoMetaCard({
  formData,
  isRtl,
  t
}) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6 text-start">
      
      {/* Title Header */}
      <div className="flex items-center gap-2 text-slate-800 dark:text-white">
        <Users className="text-brand-500" size={20} />
        <h3 className="text-base font-bold">
          {isRtl ? 'المعلومات الشخصية' : 'Personal Details Summary'}
        </h3>
      </div>

      {/* Grid for details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* Join Date */}
        <div className="flex items-center gap-4 p-4 bg-[#f3f7f6] dark:bg-slate-950/40 rounded-2xl border border-slate-100/50 dark:border-slate-850/40">
          <div className="p-3 bg-white dark:bg-slate-900 rounded-xl text-[#005953] shadow-sm shrink-0">
            <Calendar size={18} />
          </div>
          <div>
            <span className="block text-[10px] font-bold text-slate-400 dark:text-slate-500">
              {isRtl ? 'تاريخ الانضمام' : 'Join Date'}
            </span>
            <span className="text-sm font-extrabold text-slate-700 dark:text-slate-200">
              {formData.joinDate || '2023-01-15'}
            </span>
          </div>
        </div>

        {/* Mobile Number */}
        <div className="flex items-center gap-4 p-4 bg-[#f3f7f6] dark:bg-slate-950/40 rounded-2xl border border-slate-100/50 dark:border-slate-850/40">
          <div className="p-3 bg-white dark:bg-slate-900 rounded-xl text-[#005953] shadow-sm shrink-0">
            <Phone size={18} />
          </div>
          <div>
            <span className="block text-[10px] font-bold text-slate-400 dark:text-slate-500">
              {isRtl ? 'رقم الجوال' : 'Mobile Number'}
            </span>
            <span className="text-sm font-extrabold text-slate-700 dark:text-slate-200" dir="ltr">
              {formData.phone || '+966501234567'}
            </span>
          </div>
        </div>

        {/* Email Address */}
        <div className="flex items-center gap-4 p-4 bg-[#f3f7f6] dark:bg-slate-950/40 rounded-2xl border border-slate-100/50 dark:border-slate-850/40">
          <div className="p-3 bg-white dark:bg-slate-900 rounded-xl text-[#005953] shadow-sm shrink-0">
            <Mail size={18} />
          </div>
          <div className="overflow-hidden">
            <span className="block text-[10px] font-bold text-slate-400 dark:text-slate-500">
              {isRtl ? 'البريد الإلكتروني' : 'Email Address'}
            </span>
            <span className="text-sm font-extrabold text-slate-700 dark:text-slate-200 block truncate" title={formData.email}>
              {formData.email || 'teacher@manarat.com'}
            </span>
          </div>
        </div>

      </div>

    </div>
  )
}
