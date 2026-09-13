import { Globe, Award, MapPin, Calendar, Mail, Phone } from 'lucide-react'

export default function TeacherDetailsProfile({ teacher, isRtl }) {
  const isSuspended = !teacher?.active
  const initial = teacher?.name?.trim()?.charAt(0) || 'م'

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 sm:p-8 shadow-soft space-y-6 text-start">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Avatar */}
        <div className="relative shrink-0">
          {teacher?.image ? (
            <img
              src={teacher.image}
              alt={teacher.name}
              className="w-24 h-24 rounded-3xl object-cover border-2 border-slate-100 dark:border-slate-800 shadow-md"
              onError={(e) => {
                e.target.style.display = 'none'
                if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex'
              }}
            />
          ) : null}
          <div
            style={{ display: teacher?.image ? 'none' : 'flex' }}
            className="w-24 h-24 rounded-3xl bg-[#005953]/10 text-[#005953] dark:bg-[#005953]/20 dark:text-emerald-400 items-center justify-center text-3xl font-black shrink-0 border-2 border-[#005953]/20 shadow-md"
          >
            {initial}
          </div>
          {teacher?.showOnWebsite && (
            <span
              className="absolute -top-2 -end-2 px-2.5 py-0.5 bg-sky-500 rounded-full border-2 border-white dark:border-slate-900 flex items-center gap-1 text-[10px] font-bold text-white shadow-sm"
              title={isRtl ? 'معروض في الموقع' : 'Shown on website'}
            >
              <Globe size={11} />
              <span>{isRtl ? 'الموقع' : 'Web'}</span>
            </span>
          )}
        </div>

        {/* Identity & Main Info */}
        <div className="space-y-3 text-center md:text-start flex-1 min-w-0">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
                <h2 className="text-2xl font-extrabold text-slate-850 dark:text-white">
                  {teacher?.name}
                </h2>
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${
                    isSuspended
                      ? 'bg-rose-50 text-rose-700 dark:bg-rose-950/30 dark:text-rose-400'
                      : 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full me-1.5 ${isSuspended ? 'bg-rose-600' : 'bg-emerald-600'}`} />
                  {isSuspended ? (isRtl ? 'موقوف' : 'Suspended') : (isRtl ? 'نشط' : 'Active')}
                </span>

                {teacher?.profitPercentage > 0 && (
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400">
                    {isRtl ? `نسبة الأرباح: ${teacher.profitPercentage}%` : `Profit Share: ${teacher.profitPercentage}%`}
                  </span>
                )}
              </div>

              <p className="text-sm font-bold text-slate-500 dark:text-slate-400 mt-1">
                {teacher?.degree || teacher?.qualification || (isRtl ? 'معلم متخصص' : 'Specialized Teacher')}
                {teacher?.yearsOfExperience > 0 && ` · ${teacher.yearsOfExperience} ${isRtl ? 'سنوات خبرة' : 'years of experience'}`}
              </p>
            </div>
          </div>

          {/* Contact and Meta Details */}
          <div className="flex flex-wrap justify-center md:justify-start gap-y-2 gap-x-5 text-xs font-semibold text-slate-500 dark:text-slate-400 pt-1">
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-[#005953] dark:text-emerald-400" />
              <span>{teacher?.country || 'مصر'}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Mail size={14} className="text-[#005953] dark:text-emerald-400" />
              <span dir="ltr">{teacher?.email || '-'}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Phone size={14} className="text-[#005953] dark:text-emerald-400" />
              <span dir="ltr">{teacher?.phone || '-'}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} className="text-[#005953] dark:text-emerald-400" />
              <span>{isRtl ? 'تاريخ الانضمام:' : 'Joined:'} {teacher?.joinDate || '-'}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Bio / About */}
      {teacher?.bio && (
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800/60 space-y-1.5">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            {isRtl ? 'نبذة عن المعلم:' : 'Biography:'}
          </h4>
          <p className="text-sm font-medium text-slate-700 dark:text-slate-200 leading-relaxed bg-[#f3f7f6]/60 dark:bg-slate-950/30 p-4 rounded-2xl border border-slate-100 dark:border-slate-850">
            {teacher.bio}
          </p>
        </div>
      )}

      {/* Achievements */}
      {teacher?.achievements && teacher.achievements.length > 0 && (
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800/60 space-y-2.5">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
            <Award size={14} className="text-amber-500" />
            <span>{isRtl ? 'الإنجازات والشهادات التقديرية:' : 'Achievements & Honors:'}</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {teacher.achievements.map((ach, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-50 dark:bg-amber-950/20 text-amber-800 dark:text-amber-300 border border-amber-200/60 dark:border-amber-900/30"
              >
                <span>⭐</span>
                <span>{ach}</span>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}