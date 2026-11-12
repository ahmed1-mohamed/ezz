import { useMemo } from 'react';
import { Info } from 'lucide-react';
import TeacherAvailabilityCard from '@/shared/components/TeacherAvailabilityCard.jsx';

export default function TeacherTeachingInfoCard({
  t,
  profileForm,
  isRtl,
  availability = [],
  specializations = [],
}) {
  const bioValue = (isRtl ? profileForm?.bioAr || profileForm?.bioEn : profileForm?.bioEn || profileForm?.bioAr) || profileForm?.bio || '';

  const parsedSpecializations = useMemo(() => {
    const rawList = Array.isArray(specializations) && specializations.length > 0
      ? specializations
      : (Array.isArray(profileForm?.specializations) && profileForm.specializations.length > 0
          ? profileForm.specializations
          : (Array.isArray(profileForm?.specialization) && profileForm.specialization.length > 0
              ? profileForm.specialization
              : []));

    if (rawList.length > 0) {
      return rawList.map((item) => {
        if (!item) return '';
        if (typeof item === 'string') return item.trim();
        if (typeof item === 'object') {
          if (typeof item.name === 'object' && item.name !== null) {
            return isRtl ? (item.name.ar || item.name.en || '') : (item.name.en || item.name.ar || '');
          }
          if (item.name && typeof item.name === 'string') return item.name.trim();
          if (typeof item.title === 'object' && item.title !== null) {
            return isRtl ? (item.title.ar || item.title.en || '') : (item.title.en || item.title.ar || '');
          }
          if (item.title && typeof item.title === 'string') return item.title.trim();
          if (item.curriculum && typeof item.curriculum === 'object') {
            const cName = item.curriculum.name;
            if (typeof cName === 'object' && cName !== null) {
              return isRtl ? (cName.ar || cName.en || '') : (cName.en || cName.ar || '');
            }
            return item.curriculum.name || item.curriculum.title || '';
          }
        }
        return String(item || '').trim();
      }).filter(Boolean);
    }

    if (typeof profileForm?.specialization === 'string' && profileForm.specialization.trim()) {
      return profileForm.specialization
        .split(/[,،·]/)
        .map((s) => s.trim())
        .filter(Boolean);
    }
    return [];
  }, [specializations, profileForm?.specializations, profileForm?.specialization, isRtl]);

  const rows = [
    { label: t('teacherProfilePage.bio', 'النبذة التعريفية'), value: bioValue, wide: true },
    { label: t('teacherProfilePage.experience', 'سنوات الخبرة'), value: profileForm?.experience },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-100 dark:border-slate-800 space-y-6 text-start">
        <p className="flex items-start gap-2 p-3 rounded-2xl bg-sky-50 dark:bg-sky-950/20 text-sky-700 dark:text-sky-300 text-xs font-semibold">
          <Info size={16} className="shrink-0 mt-0.5" />
          <span>
            {isRtl
              ? 'تتم إدارة النبذة وسنوات الخبرة والتخصص والأيام المتاحة من قبل إدارة المنصة. للتعديل تواصل مع الإدارة.'
              : 'Your bio, experience, specialization and availability are managed by the platform administration. Contact them to update these details.'}
          </span>
        </p>
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {rows.map((row) => (
            <div key={row.label} className={`space-y-1.5 ${row.wide ? 'md:col-span-2' : ''}`}>
              <dt className="text-xs font-bold text-slate-700 dark:text-slate-300">{row.label}</dt>
              <dd
                className="px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-700 dark:text-slate-200 whitespace-pre-line min-h-[2.75rem] text-start"
              >
                {row.value || '-'}
              </dd>
            </div>
          ))}

          <div className="space-y-2 md:col-span-2">
            <dt className="text-xs font-bold text-slate-700 dark:text-slate-300">
              {t('teacherProfilePage.specialization', 'التخصص')}
            </dt>
            <dd>
              {parsedSpecializations.length > 0 ? (
                <div className="flex flex-wrap gap-3">
                  {parsedSpecializations.map((specName, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center justify-center min-w-[7.5rem] px-5 py-2.5 rounded-2xl text-sm font-semibold border transition-colors bg-[#0f7a6c] border-[#0f7a6c] text-white shadow-sm"
                    >
                      {specName}
                    </span>
                  ))}
                </div>
              ) : (
                <div className="px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-700 dark:text-slate-200 min-h-[2.75rem] text-start">
                  -
                </div>
              )}
            </dd>
          </div>
        </dl>
      </div>

      <TeacherAvailabilityCard
        availability={availability}
        isRtl={isRtl}
        title={isRtl ? 'الأيام المتاحة للعمل' : 'Available Working Days'}
      />
    </div>
  );
}
