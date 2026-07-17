import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Save } from 'lucide-react';
import Button from '@/shared/components/Button.jsx';
import { z } from 'zod';

const statsSchema = z.object({
  classes: z.union([z.string(), z.number()]).refine(val => Number(val) >= 0 && val !== '', 'يجب أن يكون رقم صحيح'),
  teachers: z.union([z.string(), z.number()]).refine(val => Number(val) >= 0 && val !== '', 'يجب أن يكون رقم صحيح'),
  students: z.union([z.string(), z.number()]).refine(val => Number(val) >= 0 && val !== '', 'يجب أن يكون رقم صحيح')
});

export default function WebsiteStatsForm({
  stats,
  handleStatChange,
  handleSaveStats,
  handleCancelStats
}) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language.startsWith('ar');
  const [errors, setErrors] = useState({});

  const onSave = () => {
    const result = statsSchema.safeParse(stats);
    if (!result.success) {
      const formatted = {};
      result.error.issues.forEach(issue => {
        formatted[issue.path[0]] = isRtl ? issue.message : 'Must be a valid number';
      });
      setErrors(formatted);
      return;
    }
    setErrors({});
    handleSaveStats();
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800/60 shadow-soft p-5 lg:p-8">
      <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-6 text-start">
        {t('adminDashboard.website.statsTitle', isRtl ? 'إضافة الأرقام الاحصائيه للموقع الإلكتروني' : 'Website Statistics')}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-6">
        <div className="space-y-2 text-start">
          <label className="text-sm font-semibold text-slate-600 dark:text-slate-400 block px-1">
            {t('adminDashboard.website.classesLabel', isRtl ? 'عدد الحلقات' : 'Classes Count')}
          </label>
          <input
            type="number"
            min="0"
            value={stats.classes}
            onChange={(e) => {
              handleStatChange('classes', e.target.value);
              if (errors.classes) setErrors({ ...errors, classes: null });
            }}
            placeholder={t('adminDashboard.website.classesPlaceholder', isRtl ? 'عدد الحلقات' : 'Classes Count')}
            className={`w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-950 border rounded-2xl focus:bg-white focus:ring-1 outline-none text-slate-800 dark:text-slate-200 text-sm font-medium transition-all ${errors.classes ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-800 focus:border-[#0f7a6c] focus:ring-[#0f7a6c]'}`}
          />
          {errors.classes && <p className="text-xs text-red-500 font-medium">{errors.classes}</p>}
        </div>

        <div className="space-y-2 text-start">
          <label className="text-sm font-semibold text-slate-600 dark:text-slate-400 block px-1">
            {t('adminDashboard.website.teachersLabel', isRtl ? 'عدد المعلمين' : 'Teachers Count')}
          </label>
          <input
            type="number"
            min="0"
            value={stats.teachers}
            onChange={(e) => {
              handleStatChange('teachers', e.target.value);
              if (errors.teachers) setErrors({ ...errors, teachers: null });
            }}
            placeholder={t('adminDashboard.website.teachersPlaceholder', isRtl ? 'عدد المعلمين' : 'Teachers Count')}
            className={`w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-950 border rounded-2xl focus:bg-white focus:ring-1 outline-none text-slate-800 dark:text-slate-200 text-sm font-medium transition-all ${errors.teachers ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-800 focus:border-[#0f7a6c] focus:ring-[#0f7a6c]'}`}
          />
          {errors.teachers && <p className="text-xs text-red-500 font-medium">{errors.teachers}</p>}
        </div>

        <div className="space-y-2 text-start">
          <label className="text-sm font-semibold text-slate-600 dark:text-slate-400 block px-1">
            {t('adminDashboard.website.studentsLabel', isRtl ? 'عدد الطلاب' : 'Students Count')}
          </label>
          <input
            type="number"
            min="0"
            value={stats.students}
            onChange={(e) => {
              handleStatChange('students', e.target.value);
              if (errors.students) setErrors({ ...errors, students: null });
            }}
            placeholder={t('adminDashboard.website.studentsPlaceholder', isRtl ? 'عدد الطلاب' : 'Students Count')}
            className={`w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-950 border rounded-2xl focus:bg-white focus:ring-1 outline-none text-slate-800 dark:text-slate-200 text-sm font-medium transition-all ${errors.students ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-800 focus:border-[#0f7a6c] focus:ring-[#0f7a6c]'}`}
          />
          {errors.students && <p className="text-xs text-red-500 font-medium">{errors.students}</p>}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-start gap-3 border-t border-slate-100 dark:border-slate-800/80 pt-6 mt-6">
        <Button
          onClick={onSave}
          className="w-full sm:w-auto px-6 py-2.5 bg-[#0f7a6c] hover:bg-[#0c6256] text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-1.5 shadow-sm"
        >
          <Save size={16} />
          <span>{t('common.save', isRtl ? 'حفظ' : 'Save')}</span>
        </Button>
        <Button
          variant="secondary"
          onClick={handleCancelStats}
          className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-sm text-slate-600 dark:text-slate-300 font-semibold"
        >
          {t('common.cancel', isRtl ? 'إلغاء' : 'Cancel')}
        </Button>
      </div>
    </div>
  );
}