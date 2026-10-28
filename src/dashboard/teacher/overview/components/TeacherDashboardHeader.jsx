import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Bell } from 'lucide-react';

export default React.memo(function TeacherDashboardHeader({ teacherName }) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;

  const [currentTimeStr, setCurrentTimeStr] = useState('');
  const [currentDateStr, setCurrentDateStr] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      try {
        const timeFormatted = new Intl.DateTimeFormat('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(now);
        setCurrentTimeStr(timeFormatted);
      } catch {
        setCurrentTimeStr(now.toTimeString().slice(0, 8));
      }

      try {
        const dateFormatted = new Intl.DateTimeFormat(
          isRtl ? 'ar-SA-u-ca-islamic-umalqura' : 'en-US-u-ca-islamic-umalqura',
          {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          }
        ).format(now);
        setCurrentDateStr(dateFormatted);
      } catch {
        setCurrentDateStr(isRtl ? 'الأربعاء، ٥ ذو القعدة ١٤٤٧ هـ' : "Wednesday, 5 Dhu al-Qi'dah 1447 AH");
      }
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, [isRtl]);

  const teacherInitial = (teacherName && typeof teacherName === 'string')
    ? teacherName.replace(/^أ\.\s*|^Mr\.\s*|^Ms\.\s*|^Mrs\.\s*/i, '').trim().charAt(0) || (isRtl ? 'أ' : 'T')
    : (isRtl ? 'أ' : 'T');

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 shadow-xs border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
      {/* Right in RTL: Title & Greeting Subtitle */}
      <div className="text-start">
        <h1 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white leading-tight">
          {t('teacherDashboard.title', 'لوحة التحكم')}
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 font-semibold mt-0.5">
          {t('teacherDashboard.welcome', { name: teacherName, defaultValue: `مرحباً بك، ${teacherName}` })}
        </p>
      </div>

      {/* Left in RTL: Ticking ISO Time, Hijri Date, Bell, Avatar */}
      <div className="flex items-center gap-3 self-end md:self-center flex-wrap">
        {/* Ticking Time Pill (ISO Format HH:mm:ss) */}
        {currentTimeStr && (
          <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-[#d2ede6] text-[#00594C] dark:bg-emerald-950/70 dark:text-emerald-300">
            {currentTimeStr}
          </span>
        )}

        {/* Hijri Date with Calendar Icon */}
        {currentDateStr && (
          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-semibold">
            <Calendar size={14} className="text-slate-400" />
            <span>{currentDateStr}</span>
          </div>
        )}

        {/* Bell with Badge 3 */}
        <div className="relative p-2 rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
          <Bell size={16} />
          <span className="absolute -top-1 -end-1 w-4 h-4 rounded-full bg-[#00594C] text-white text-[10px] font-bold flex items-center justify-center">
            3
          </span>
        </div>

        {/* Mustard / Yellow Avatar Circle */}
        <div className="w-8 h-8 rounded-full bg-[#cca332] text-white flex items-center justify-center font-black text-xs shadow-xs shrink-0">
          {teacherInitial}
        </div>
      </div>
    </div>
  );
});
