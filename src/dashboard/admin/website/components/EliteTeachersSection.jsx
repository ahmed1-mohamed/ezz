import { useTranslation } from 'react-i18next';
import { Plus, Pencil, Trash2, BookOpen, Save } from 'lucide-react';
import Button from '@/shared/components/Button.jsx';

export default function EliteTeachersSection({
  teachers,
  handleOpenAddTeacher,
  handleOpenEditTeacher,
  handleDeleteTeacher,
  handleShowTeacherNotes
}) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language.startsWith('ar');

  return (
    <div className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800/60 shadow-soft p-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-bold text-slate-850 dark:text-slate-100">
          {t('adminDashboard.website.eliteTeachersTitle', 'افضل المعلمين')}
        </h2>
        <Button
          onClick={handleOpenAddTeacher}
          className="px-5 py-2.5 bg-[#0f7a6c] hover:bg-[#0c6256] text-white rounded-xl text-sm font-semibold flex items-center gap-1.5 shadow-sm"
        >
          <Plus size={16} />
          <span>{t('adminDashboard.website.addTeacher', 'إضافة معلم')}</span>
        </Button>
      </div>

      <div className="space-y-6">
        {teachers.length === 0 ? (
          <div className="py-12 text-center text-slate-400 dark:text-slate-500">
            {isRtl ? 'لا يوجد معلمون متميزون حالياً.' : 'No elite teachers found.'}
          </div>
        ) : (
          teachers.map((teacher) => {
            const userLetter = teacher.name ? teacher.name.trim().charAt(0) : 'ف';
            const imageUrl = teacher.image && (teacher.image.startsWith('http') || teacher.image.startsWith('data:'))
              ? teacher.image
              : teacher.image
                ? `https://manaret-ezz.dramcode.top/${teacher.image}`
                : null;

            return (
              <div
                key={teacher.id}
                className="relative bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-all duration-300"
              >

                <div className="flex items-center justify-between gap-1">

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    <div className="lg:col-span-5 flex items-center gap-4 text-start">
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
                      <div>
                        <h4 className="font-extrabold text-lg text-slate-800 dark:text-slate-200">
                          {teacher.name}
                        </h4>
                        <p className="text-sm font-medium text-slate-500 mt-0.5">
                          {teacher.review || t('teachers.defaultTitle', 'القرآن الكريم')}
                        </p>
                      </div>
                    </div>



                    <div className="lg:col-span-5 grid grid-cols-3 gap-4 text-center border-t lg:border-t-0 border-slate-50 lg:pt-0 pt-4">
                      <div className="space-y-1">
                        <p className="text-xl font-bold text-slate-800 dark:text-slate-100">
                          {teacher.groupsCount || 4}
                        </p>
                        <p className="text-xs font-semibold text-slate-450 dark:text-slate-500">
                          {isRtl ? 'المجموعات' : 'Groups'}
                        </p>
                      </div>

                      <div className="space-y-1">
                        <p className="text-xl font-bold text-slate-800 dark:text-slate-100">
                          {teacher.sessionsCount || 120}
                        </p>
                        <p className="text-xs font-semibold text-slate-450 dark:text-slate-500">
                          {isRtl ? 'الحصص' : 'Sessions'}
                        </p>
                      </div>

                    </div>
                  </div>
                  <div className=" flex items-center gap-1">
                    <button
                      onClick={() => handleOpenEditTeacher(teacher)}
                      className="p-2 text-slate-400 hover:text-[#0f7a6c] hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
                      title={isRtl ? 'تعديل' : 'Edit'}
                    >
                      <Pencil size={15} />
                    </button>
                    <button
                      onClick={() => handleShowTeacherNotes(teacher.id)}
                      className="p-2 text-slate-400 hover:text-blue-600 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
                      title={isRtl ? 'عرض الملاحظات' : 'View Notes'}
                    >
                      <BookOpen size={15} />
                    </button>
                    <button
                      onClick={() => handleDeleteTeacher(teacher.id)}
                      className="p-2 text-slate-400 hover:text-red-600 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
                      title={isRtl ? 'حذف' : 'Delete'}
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      <div className="flex items-center justify-start gap-3 border-t border-slate-100 dark:border-slate-800/80 pt-6 mt-8">
        <Button
          onClick={handleOpenAddTeacher}
          className="px-6 py-2.5 bg-[#0f7a6c] hover:bg-[#0c6256] text-white rounded-xl text-sm font-semibold flex items-center gap-1.5 shadow-sm"
        >
          <Save size={16} />
          <span>{t('common.save', 'حفظ')}</span>
        </Button>
        <Button
          variant="secondary"
          className="px-6 py-2.5 rounded-xl text-sm text-slate-600 dark:text-slate-300 font-semibold"
        >
          {t('common.cancel', 'إلغاء')}
        </Button>
      </div>
    </div>
  );
}
