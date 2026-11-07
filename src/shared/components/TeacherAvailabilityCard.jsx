const DAYS_OF_WEEK = [
  { key: 'sunday', ar: 'الأحد', en: 'Sunday' },
  { key: 'monday', ar: 'الإثنين', en: 'Monday' },
  { key: 'tuesday', ar: 'الثلاثاء', en: 'Tuesday' },
  { key: 'wednesday', ar: 'الأربعاء', en: 'Wednesday' },
  { key: 'thursday', ar: 'الخميس', en: 'Thursday' },
  { key: 'friday', ar: 'الجمعة', en: 'Friday' },
  { key: 'saturday', ar: 'السبت', en: 'Saturday' },
];

const normalizeDayKey = (raw) => {
  if (raw === undefined || raw === null) return '';
  const str = String(raw).trim().toLowerCase();
  if (str === '0' || str === 'sunday' || str === 'الأحد') return 'sunday';
  if (str === '1' || str === 'monday' || str === 'الإثنين' || str === 'الاثنين') return 'monday';
  if (str === '2' || str === 'tuesday' || str === 'الثلاثاء') return 'tuesday';
  if (str === '3' || str === 'wednesday' || str === 'الأربعاء' || str === 'الاربعاء') return 'wednesday';
  if (str === '4' || str === 'thursday' || str === 'الخميس') return 'thursday';
  if (str === '5' || str === 'friday' || str === 'الجمعة') return 'friday';
  if (str === '6' || str === 'saturday' || str === 'السبت') return 'saturday';
  return str;
};

const formatSlotTime = (slot) => {
  const start = slot.startTime || slot.start_time || slot.from || '';
  const end = slot.endTime || slot.end_time || slot.to || '';
  if (!start && !end) return '';
  return `${start} - ${end}`;
};

const getChipClass = (isActive) =>
  `inline-flex flex-col items-center justify-center min-w-[7.5rem] px-5 py-2.5 rounded-2xl text-sm font-semibold border transition-colors ${
    isActive
      ? 'bg-[#0f7a6c] border-[#0f7a6c] text-white shadow-sm'
      : 'bg-slate-50 dark:bg-slate-950/60 border-slate-100 dark:border-slate-800 text-slate-400 dark:text-slate-500'
  }`;

export default function TeacherAvailabilityCard({ teacher, availability = [], isRtl = true, title = null }) {
  const rawSlots = Array.isArray(teacher?.availability)
    ? teacher.availability
    : (Array.isArray(teacher?.schedule)
        ? teacher.schedule
        : (Array.isArray(availability) ? availability : []));
  const slotsByDay = rawSlots.reduce((acc, slot) => {
    const key = normalizeDayKey(slot.rawDay || slot.day || slot.dayOfWeek || '');
    if (key) acc[key] = [...(acc[key] || []), slot];
    return acc;
  }, {});
  const sectionTitle = title || (isRtl ? 'أيام التدريس المتاحة أسبوعياً' : 'Weekly Available Teaching Days');
  return (
    <section className="bg-white dark:bg-slate-900 rounded-[28px] p-6 sm:p-8 shadow-sm border border-slate-100/80 dark:border-slate-800/60 space-y-5 text-start">
      <h2 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white">
        {sectionTitle}
      </h2>
      <div className="flex flex-wrap gap-3">
        {DAYS_OF_WEEK.map((day) => {
          const slots = slotsByDay[day.key] || [];
          return (
            <span key={day.key} className={getChipClass(slots.length > 0)}>
              <span>{isRtl ? day.ar : day.en}</span>
              {slots.map((slot, idx) => {
                const timeText = formatSlotTime(slot);
                return timeText ? (
                  <span key={idx} className="text-[11px] font-medium opacity-90" dir="ltr">
                    {timeText}
                  </span>
                ) : null;
              })}
            </span>
          );
        })}
      </div>
    </section>
  );
}

