import { Info } from 'lucide-react';
import TeacherAvailabilityCard from '@/shared/components/TeacherAvailabilityCard.jsx';

export default function TeacherTeachingInfoCard({ t, profileForm, isRtl, availability = [] }) {
  const rows = [
    { label: t('teacherProfilePage.bioAr', 'نبذة عن المعلم (بالعربية)'), value: profileForm.bioAr, wide: true },
    { label: t('teacherProfilePage.bioEn', 'نبذة عن المعلم (بالإنجليزية)'), value: profileForm.bioEn, wide: true, ltr: true },
    { label: t('teacherProfilePage.experience', 'سنوات الخبرة'), value: profileForm.experience },
    { label: t('teacherProfilePage.specialization', 'التخصص والمواد'), value: profileForm.specialization },
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
                dir={row.ltr ? 'ltr' : undefined}
                className="px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-700 dark:text-slate-200 whitespace-pre-line min-h-[2.75rem] text-start"
              >
                {row.value || '-'}
              </dd>
            </div>
          ))}
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
