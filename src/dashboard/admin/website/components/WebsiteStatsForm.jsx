import { useTranslation } from 'react-i18next';
import { Save } from 'lucide-react';
import Button from '@/shared/components/Button.jsx';

export default function WebsiteStatsForm({
  stats,
  handleStatChange,
  handleSaveStats,
  handleCancelStats
}) {
  const { t } = useTranslation();

  return (
    <div className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800/60 shadow-soft p-8">
      <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-6 text-start">
        {t('adminDashboard.website.statsTitle', 'إضافة الأرقام الاحصائيه للموقع الإلكتروني')}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
        <div className="space-y-2 text-start">
          <label className="text-sm font-semibold text-slate-600 dark:text-slate-400 block">
            {t('adminDashboard.website.classesLabel', 'عدد الحلقات')}
          </label>
          <input
            type="number"
            value={stats.classes}
            onChange={(e) => handleStatChange('classes', e.target.value)}
            placeholder={t('adminDashboard.website.classesPlaceholder', 'عدد الحلقات')}
            className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl focus:border-[#0f7a6c] focus:bg-white focus:ring-1 focus:ring-[#0f7a6c] outline-none text-slate-800 dark:text-slate-200 text-sm font-medium transition-all"
          />
        </div>

        {/* Teachers Count */}
        <div className="space-y-2 text-start">
          <label className="text-sm font-semibold text-slate-600 dark:text-slate-400 block">
            {t('adminDashboard.website.teachersLabel', 'عدد المعلمين')}
          </label>
          <input
            type="number"
            value={stats.teachers}
            onChange={(e) => handleStatChange('teachers', e.target.value)}
            placeholder={t('adminDashboard.website.teachersPlaceholder', 'عدد المعلمين')}
            className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl focus:border-[#0f7a6c] focus:bg-white focus:ring-1 focus:ring-[#0f7a6c] outline-none text-slate-800 dark:text-slate-200 text-sm font-medium transition-all"
          />
        </div>

        {/* Students Count */}
        <div className="space-y-2 text-start">
          <label className="text-sm font-semibold text-slate-600 dark:text-slate-400 block">
            {t('adminDashboard.website.studentsLabel', 'عدد الطلاب')}
          </label>
          <input
            type="number"
            value={stats.students}
            onChange={(e) => handleStatChange('students', e.target.value)}
            placeholder={t('adminDashboard.website.studentsPlaceholder', 'عدد الطلاب')}
            className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl focus:border-[#0f7a6c] focus:bg-white focus:ring-1 focus:ring-[#0f7a6c] outline-none text-slate-800 dark:text-slate-200 text-sm font-medium transition-all"
          />
        </div>
      </div>

      <div className="flex items-center justify-start gap-3 border-t border-slate-100 dark:border-slate-800/80 pt-6">
        <Button
          onClick={handleSaveStats}
          className="px-6 py-2.5 bg-[#0f7a6c] hover:bg-[#0c6256] text-white rounded-xl text-sm font-semibold flex items-center gap-1.5 shadow-sm"
        >
          <Save size={16} />
          <span>{t('common.save', 'حفظ')}</span>
        </Button>
        <Button
          variant="secondary"
          onClick={handleCancelStats}
          className="px-6 py-2.5 rounded-xl text-sm text-slate-600 dark:text-slate-300 font-semibold"
        >
          {t('common.cancel', 'إلغاء')}
        </Button>
      </div>
    </div>
  );
}
