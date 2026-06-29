import { useTranslation } from 'react-i18next';
import { Plus, Pencil, Trash2, BookOpen, Save } from 'lucide-react';
import Button from '@/shared/components/Button.jsx';

const LEVEL_CONFIG = {
  'مبتدئ': { bg: 'bg-amber-50 text-amber-600 border-amber-100', bgDark: 'dark:bg-amber-950/20 dark:text-amber-400 dark:border-amber-900/30' },
  'متوسط': { bg: 'bg-blue-50 text-blue-600 border-blue-100', bgDark: 'dark:bg-blue-950/20 dark:text-blue-400 dark:border-blue-900/30' },
  'متقدم': { bg: 'bg-emerald-50 text-emerald-600 border-emerald-100', bgDark: 'dark:bg-emerald-950/20 dark:text-emerald-400 dark:border-emerald-900/30' },
  'Beginner': { bg: 'bg-amber-50 text-amber-600 border-amber-100', bgDark: 'dark:bg-amber-950/20 dark:text-amber-400 dark:border-amber-900/30' },
  'Intermediate': { bg: 'bg-blue-50 text-blue-600 border-blue-100', bgDark: 'dark:bg-blue-950/20 dark:text-blue-400 dark:border-blue-900/30' },
  'Advanced': { bg: 'bg-emerald-50 text-emerald-600 border-emerald-100', bgDark: 'dark:bg-emerald-950/20 dark:text-emerald-400 dark:border-emerald-900/30' }
};

export default function ExcellenceStarsSection({
  stars,
  handleOpenAddModal,
  handleOpenEditModal,
  handleOpenViewModal,
  handleDeleteStar,
  handleCancelStarsList,
  handleSaveStarsList
}) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language.startsWith('ar');

  return (
    <div className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800/60 shadow-soft p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">
          {t('adminDashboard.website.starsTitle', 'نجوم التميّز الأكاديمي')}
        </h2>
        <Button
          onClick={handleOpenAddModal}
          className="px-5 py-2.5 bg-[#0f7a6c] hover:bg-[#0c6256] text-white rounded-xl text-sm font-semibold flex items-center gap-1.5 shadow-sm"
        >
          <Plus size={16} />
          <span>{t('adminDashboard.website.addStar', 'إضافة طالب')}</span>
        </Button>
      </div>

      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden space-y-4">
            {stars.length === 0 ? (
              <div className="py-12 text-center text-slate-400 dark:text-slate-500">
                {isRtl ? 'لا يوجد نجوم تميز حالياً. اضغط "إضافة طالب" للبدء.' : 'No excellence stars found. Click "Add Student" to start.'}
              </div>
            ) : (
              stars.map((star) => {
                const levelCfg = LEVEL_CONFIG[star.level] || LEVEL_CONFIG['متوسط'];
                const userLetter = star.name ? star.name.trim().charAt(0) : 'أ';

                return (
                  <div
                    key={star.id}
                    className="flex flex-col lg:flex-row items-start lg:items-center justify-between p-5 bg-slate-50/50 dark:bg-slate-950/20 hover:bg-slate-50 dark:hover:bg-slate-950/40 rounded-2xl border border-slate-100/60 dark:border-slate-800/40 gap-4 transition-all duration-200"
                  >
                    <div className="flex items-center gap-4 text-start">
                      <div className="w-12 h-12 rounded-full bg-[#0f7a6c]/10 dark:bg-emerald-950/30 text-[#0f7a6c] dark:text-emerald-400 border border-[#0f7a6c]/20 flex items-center justify-center font-bold text-lg shadow-sm shrink-0">
                        {userLetter}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 dark:text-slate-200">
                          {isRtl ? star.name : star.nameEn}
                        </h4>
                        <p className="text-xs text-slate-440 dark:text-slate-500 mt-0.5">
                          {isRtl ? `العمر: ${star.age} سنة` : `Age: ${star.age} years`}
                        </p>
                      </div>
                    </div>

                    <div className="text-start min-w-[90px]">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${levelCfg.bg} ${levelCfg.bgDark}`}>
                        {isRtl ? star.level : star.levelEn}
                      </span>
                    </div>

                    <div className="text-start min-w-[120px]">
                      <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                        {isRtl ? star.groupName : star.groupNameEn}
                      </p>
                    </div>

                    <div className="text-start min-w-[120px]">
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        {isRtl ? star.parentName : star.parentNameEn}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 self-end lg:self-auto">
                      <button
                        onClick={() => handleOpenEditModal(star)}
                        className="p-2 text-slate-400 hover:text-[#0f7a6c] hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                        title={isRtl ? 'تعديل' : 'Edit'}
                      >
                        <Pencil size={16} />
                      </button>

                      <button
                        onClick={() => handleOpenViewModal(star)}
                        className="p-2 text-slate-400 hover:text-blue-600 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                        title={isRtl ? 'عرض الملاحظات' : 'View Details'}
                      >
                        <BookOpen size={16} />
                      </button>

                      <button
                        onClick={() => handleDeleteStar(star.id)}
                        className="p-2 text-slate-400 hover:text-red-600 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                        title={isRtl ? 'إزالة' : 'Remove'}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-start gap-3 border-t border-slate-100 dark:border-slate-800/80 pt-6 mt-6">
        <Button
          onClick={handleSaveStarsList}
          className="px-6 py-2.5 bg-[#0f7a6c] hover:bg-[#0c6256] text-white rounded-xl text-sm font-semibold flex items-center gap-1.5 shadow-sm"
        >
          <Save size={16} />
          <span>{t('common.save', 'حفظ')}</span>
        </Button>
        <Button
          variant="secondary"
          onClick={handleCancelStarsList}
          className="px-6 py-2.5 rounded-xl text-sm text-slate-600 dark:text-slate-300 font-semibold"
        >
          {t('common.cancel', 'إلغاء')}
        </Button>
      </div>
    </div>
  );
}
