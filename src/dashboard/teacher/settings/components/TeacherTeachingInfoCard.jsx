import { Save } from 'lucide-react';

export default function TeacherTeachingInfoCard({
  t,
  profileForm,
  setProfileForm,
  savingProfile,
  onSave,
}) {
  return (
    <form
      onSubmit={onSave}
      className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-100 dark:border-slate-800 space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-start">
        <div className="space-y-1.5 md:col-span-2">
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
            {t('teacherProfilePage.bioAr', 'نبذة عن المعلم (بالعربية)')}
          </label>
          <textarea
            rows={4}
            value={profileForm.bioAr}
            onChange={(e) => setProfileForm({ ...profileForm, bioAr: e.target.value })}
            placeholder="اكتب نبذة مختصرة عن مؤهلاتك وخبراتك وفلسفتك في التدريس..."
            className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-[#00594C]/20 focus:border-[#00594C] transition-all resize-none"
          />
        </div>

        <div className="space-y-1.5 md:col-span-2">
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
            {t('teacherProfilePage.bioEn', 'نبذة عن المعلم (بالإنجليزية)')}
          </label>
          <textarea
            rows={3}
            dir="ltr"
            value={profileForm.bioEn}
            onChange={(e) => setProfileForm({ ...profileForm, bioEn: e.target.value })}
            placeholder="Brief bio about your teaching experience and philosophy..."
            className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-[#00594C]/20 focus:border-[#00594C] transition-all resize-none text-start"
          />
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
            {t('teacherProfilePage.experience', 'سنوات الخبرة')}
          </label>
          <input
            type="number"
            min="0"
            value={profileForm.experience}
            onChange={(e) => setProfileForm({ ...profileForm, experience: e.target.value })}
            placeholder="5"
            className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-[#00594C]/20 focus:border-[#00594C] transition-all"
          />
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
            {t('teacherProfilePage.specialization', 'التخصص والمواد')}
          </label>
          <input
            type="text"
            value={profileForm.specialization}
            onChange={(e) => setProfileForm({ ...profileForm, specialization: e.target.value })}
            placeholder="القرآن الكريم، التجويد، القراءات"
            className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-[#00594C]/20 focus:border-[#00594C] transition-all"
          />
        </div>
      </div>

      <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
        <button
          type="submit"
          disabled={savingProfile}
          className="px-6 py-3 rounded-2xl bg-[#00594C] hover:bg-[#00473d] text-white text-sm font-bold shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center gap-2 disabled:opacity-50"
        >
          <Save size={16} />
          <span>
            {savingProfile
              ? t('teacherProfilePage.saving', 'جاري الحفظ...')
              : t('teacherProfilePage.saveChanges', 'حفظ التعديلات')}
          </span>
        </button>
      </div>
    </form>
  );
}


