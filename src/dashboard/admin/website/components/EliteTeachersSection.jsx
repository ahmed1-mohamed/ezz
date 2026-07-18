import { useTranslation } from 'react-i18next';
import { Plus, Pencil, Trash2, Save } from 'lucide-react';
import Button from '@/shared/components/Button.jsx';

export default function EliteTeachersSection({
  teachers,
  handleOpenAddTeacher,
  handleOpenEditTeacher,
  handleDeleteTeacher,
}) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language.startsWith('ar');

  return (
    <div className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800/60 shadow-soft p-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-bold text-slate-850 dark:text-slate-100">
          {t('adminDashboard.website.eliteTeachersTitle', isRtl ? 'افضل المعلمين' : 'Elite Teachers')}
        </h2>
        <Button
          onClick={handleOpenAddTeacher}
          className="px-5 py-2.5 bg-[#0f7a6c] hover:bg-[#0c6256] text-white rounded-xl text-sm font-semibold flex items-center gap-1.5 shadow-sm"
        >
          <Plus size={16} />
          <span>{t('adminDashboard.website.addTeacher', isRtl ? 'إضافة معلم' : 'Add Teacher')}</span>
        </Button>
      </div>

      <div className="space-y-4 sm:space-y-6">
        {teachers.length === 0 ? (
          <div className="py-12 text-center text-slate-400 dark:text-slate-500">
            {t('adminDashboard.website.noEliteTeachers', isRtl ? 'لا يوجد معلمون متميزون حالياً.' : 'No elite teachers currently.')}
          </div>
        ) : (
          teachers.map((teacher) => {
            const userLetter = teacher.name ? teacher?.name?.trim().charAt(0) : 'ف';
            const imageUrl = teacher.image && (teacher.image.startsWith('http') || teacher.image.startsWith('data:'))
              ? teacher.image
              : teacher.image
                ? `https://manaret-ezz.dramcode.top/${teacher.image}`
                : null;

            return (
              <div
                key={teacher.id}
                className="relative bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-col xl:flex-row items-center justify-between gap-4">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center w-full">
                    <div className="lg:col-span-6 xl:col-span-7 flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-start">
                      {imageUrl ? (
                        <img
                          src={imageUrl}
                          alt={teacher.name}
                          className="w-16 h-16 rounded-full object-cover shadow-sm border border-slate-200"
                        />
                      ) : (
                        <div className="w-16 h-16 rounded-full bg-[#0f7a6c]/10 dark:bg-emerald-950/30 text-[#0f7a6c] dark:text-emerald-450 border border-[#0f7a6c]/20 flex items-center justify-center font-bold text-2xl shadow-sm shrink-0">
                          {userLetter}
                        </div>
                      )}
                      <div className="mt-1 sm:mt-0">
                        <h4 className="font-extrabold text-lg text-slate-800 dark:text-slate-200">
                          {teacher.name}
                        </h4>
                      </div>
                    </div>

                  </div>

                  <div className="flex items-center gap-2 mt-4 xl:mt-0 w-full xl:w-auto justify-center sm:justify-end border-t xl:border-t-0 border-slate-100 dark:border-slate-800 pt-4 xl:pt-0">
                    <button
                      onClick={() => handleOpenEditTeacher(teacher)}
                      className="p-2 text-slate-400 hover:text-[#0f7a6c] hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
                      title={t('common.edit', isRtl ? 'تعديل' : 'Edit')}
                    >
                      <Pencil size={18} />
                    </button>
                    <button
                      onClick={() => handleDeleteTeacher(teacher)}
                      className="p-2 text-slate-400 hover:text-red-600 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
                      title={t('common.delete', isRtl ? 'حذف' : 'Delete')}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-start gap-3 border-t border-slate-100 dark:border-slate-800/80 pt-6 mt-8">
        <Button
          onClick={handleOpenAddTeacher}
          className="w-full sm:w-auto px-6 py-2.5 bg-[#0f7a6c] hover:bg-[#0c6256] text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-1.5 shadow-sm"
        >
          <Save size={16} />
          <span>{t('common.save', isRtl ? 'حفظ' : 'Save')}</span>
        </Button>
        <Button
          variant="secondary"
          className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-sm text-slate-600 dark:text-slate-300 font-semibold"
        >
          {t('common.cancel', isRtl ? 'إلغاء' : 'Cancel')}
        </Button>
      </div>
    </div>
  );
}
