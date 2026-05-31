import { motion } from 'framer-motion';
import { ClipboardList, Calendar, User, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const records = [
  { id: 1, dateAr: '14 أبريل 2026', dateEn: 'Apr 14, 2026', dayAr: 'الاثنين', dayEn: 'Monday', subjectAr: 'القرآن الكريم - التجويد', subjectEn: 'Holy Quran - Tajweed', teacher: 'الشيخ أحمد السيد', teacherEn: 'Sheikh Ahmed Al-Sayed', time: '4:00 م - 5:00 م', timeEn: '4:00 PM - 5:00 PM', status: 'present' },
  { id: 2, dateAr: '15 أبريل 2026', dateEn: 'Apr 15, 2026', dayAr: 'الثلاثاء', dayEn: 'Tuesday', subjectAr: 'الأحاديث النبوية', subjectEn: 'Prophetic Hadith', teacher: 'السيدة فاطمة الزهراء', teacherEn: 'Fatima Al-Zahraa', time: '5:30 م - 6:30 م', timeEn: '5:30 PM - 6:30 PM', status: 'present' },
  { id: 3, dateAr: '16 أبريل 2026', dateEn: 'Apr 16, 2026', dayAr: 'الأربعاء', dayEn: 'Wednesday', subjectAr: 'فقه الأسرة', subjectEn: 'Family Jurisprudence', teacher: 'الأستاذ علي يوسف', teacherEn: 'Prof. Ali Yusuf', time: '7:00 م - 8:00 م', timeEn: '7:00 PM - 8:00 PM', status: 'absent' },
  { id: 4, dateAr: '17 أبريل 2026', dateEn: 'Apr 17, 2026', dayAr: 'الخميس', dayEn: 'Thursday', subjectAr: 'التفسير العميق', subjectEn: 'Deep Tafsir', teacher: 'الدكتور سامي حسن', teacherEn: 'Dr. Sami Hassan', time: '8:30 م - 9:30 م', timeEn: '8:30 PM - 9:30 PM', status: 'present' },
  { id: 5, dateAr: '20 أبريل 2026', dateEn: 'Apr 20, 2026', dayAr: 'الأحد', dayEn: 'Sunday', subjectAr: 'القرآن الكريم - التجويد', subjectEn: 'Holy Quran - Tajweed', teacher: 'الشيخ أحمد السيد', teacherEn: 'Sheikh Ahmed Al-Sayed', time: '4:00 م - 5:00 م', timeEn: '4:00 PM - 5:00 PM', status: 'present' },
  { id: 6, dateAr: '21 أبريل 2026', dateEn: 'Apr 21, 2026', dayAr: 'الاثنين', dayEn: 'Monday', subjectAr: 'اللغة العربية', subjectEn: 'Arabic Language', teacher: 'الدكتور محمد الأمين', teacherEn: 'Dr. Mohammed Al-Amin', time: '6:00 م - 7:00 م', timeEn: '6:00 PM - 7:00 PM', status: 'absent' },
];

const totalPresent = records.filter((r) => r.status === 'present').length;
const totalAbsent = records.filter((r) => r.status === 'absent').length;
const attendanceRate = Math.round((totalPresent / records.length) * 100);

export default function StudentAttendance() {
  const { i18n } = useTranslation();
  const isRtl = i18n.language.startsWith('ar');

  return (
    <div className="min-h-screen bg-[#f3f7f6] dark:bg-slate-900 p-4 sm:p-6" dir={isRtl ? 'rtl' : 'ltr'}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto space-y-5"
      >
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl flex items-center justify-center shrink-0">
              <ClipboardList size={20} className="text-[#0f7a6c] dark:text-emerald-400" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800 dark:text-slate-100">{isRtl ? 'سجل الحضور' : 'Attendance Record'}</h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{isRtl ? 'سجّل حضورك في الحصص' : 'Your session attendance log'}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {[
            { value: `${attendanceRate}%`, labelAr: 'معدل الحضور', labelEn: 'Attendance Rate', bg: 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-100 dark:border-emerald-800/40', textCls: 'text-emerald-700 dark:text-emerald-400' },
            { value: totalPresent, labelAr: 'حصص حضرت', labelEn: 'Sessions Attended', bg: 'bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800/40', textCls: 'text-blue-700 dark:text-blue-400' },
            { value: totalAbsent, labelAr: 'حصص غياب', labelEn: 'Absences', bg: 'bg-red-50 dark:bg-red-900/20 border-red-100 dark:border-red-800/40', textCls: 'text-red-600 dark:text-red-400' },
          ].map(({ value, labelAr, labelEn, bg, textCls }) => (
            <div key={labelAr} className={`rounded-2xl p-4 text-center border shadow-sm ${bg}`}>
              <p className={`text-2xl font-extrabold ${textCls}`}>{value}</p>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">{isRtl ? labelAr : labelEn}</p>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
          <div className="px-5 pt-5 pb-3 border-b border-slate-100 dark:border-slate-700">
            <h2 className="text-sm font-bold text-slate-700 dark:text-slate-200">
              {isRtl ? 'سجل الحضور التفصيلي' : 'Detailed Attendance Log'}
            </h2>
          </div>

          <div className="hidden sm:grid grid-cols-[1.2fr_0.6fr_1.8fr_1.5fr_1fr_0.7fr] gap-3 px-5 py-3 bg-slate-50 dark:bg-slate-700/50 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
            <span>{isRtl ? 'التاريخ' : 'Date'}</span>
            <span>{isRtl ? 'اليوم' : 'Day'}</span>
            <span>{isRtl ? 'المادة' : 'Subject'}</span>
            <span>{isRtl ? 'المعلم' : 'Teacher'}</span>
            <span>{isRtl ? 'الوقت' : 'Time'}</span>
            <span>{isRtl ? 'الحالة' : 'Status'}</span>
          </div>

          <div className="divide-y divide-slate-100 dark:divide-slate-700">
            {records.map((r, i) => (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="grid grid-cols-1 sm:grid-cols-[1.2fr_0.6fr_1.8fr_1.5fr_1fr_0.7fr] gap-3 items-center px-5 py-4"
              >
                <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-300 font-medium">
                  <Calendar size={12} className="text-slate-400 shrink-0" />
                  {isRtl ? r.dateAr : r.dateEn}
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400">{isRtl ? r.dayAr : r.dayEn}</span>
                <span className="text-sm font-bold text-slate-800 dark:text-slate-100">{isRtl ? r.subjectAr : r.subjectEn}</span>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                  <User size={12} className="shrink-0" />
                  {isRtl ? r.teacher : r.teacherEn}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                  <Clock size={12} className="shrink-0" />
                  {isRtl ? r.time : r.timeEn}
                </div>
                <span className={`inline-flex items-center justify-center px-3 py-1.5 rounded-xl text-xs font-bold w-fit ${r.status === 'present'
                  ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
                  : 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400'
                  }`}>
                  {r.status === 'present' ? (isRtl ? 'حضور' : 'Present') : (isRtl ? 'غياب' : 'Absent')}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
