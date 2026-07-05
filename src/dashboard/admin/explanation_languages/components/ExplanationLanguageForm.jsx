import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Loader2 } from 'lucide-react';

function ExplanationLanguageForm({
    langNameAr,
    setLangNameAr,
    langNameEn,
    setLangNameEn,
    onCancel,
    onSubmit,
    isEditing,
    isSaving,
}) {
    const { i18n } = useTranslation();
    const isRtl = i18n.language.startsWith('ar');

    return (
        <form
            onSubmit={onSubmit}
            className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-5 sm:p-6 shadow-soft space-y-5 max-w-2xl mx-auto"
            dir={isRtl ? 'rtl' : 'ltr'}
        >
            {/* Title */}
            <h3 className="text-base font-bold text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-800/60 pb-3 text-start">
                {isEditing
                    ? (isRtl ? 'تعديل لغة الشرح' : 'Edit Explanation Language')
                    : (isRtl ? 'إضافة لغة شرح جديدة' : 'Add New Explanation Language')}
            </h3>

            {/* Inputs Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Arabic Name Input */}
                <div className="text-start space-y-1.5">
                    <label className="block text-xs font-bold text-slate-500 dark:text-slate-400">
                        {isRtl ? 'الاسم بالعربية' : 'Arabic Name'}
                        <span className="text-red-500 ms-0.5">*</span>
                    </label>
                    <input
                        type="text"
                        required
                        disabled={isSaving}
                        value={langNameAr || ''}
                        onChange={(e) => setLangNameAr(e.target.value)}
                        className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-[#005953]/30 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm"
                        placeholder={isRtl ? 'مثال: الفرنسية' : 'e.g. French'}
                    />
                </div>

                {/* English Name Input */}
                <div className="text-start space-y-1.5">
                    <label className="block text-xs font-bold text-slate-500 dark:text-slate-400">
                        {isRtl ? 'الاسم بالإنجليزية' : 'English Name'}
                        <span className="text-red-500 ms-0.5">*</span>
                    </label>
                    <input
                        type="text"
                        required
                        disabled={isSaving}
                        value={langNameEn || ''}
                        onChange={(e) => setLangNameEn(e.target.value)}
                        className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-[#005953]/30 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm"
                        placeholder={isRtl ? 'مثال: French' : 'e.g. French'}
                    />
                </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 pt-1">
                <button
                    type="button"
                    onClick={onCancel}
                    disabled={isSaving}
                    className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 text-slate-700 font-bold text-xs rounded-xl transition-all cursor-pointer disabled:opacity-50"
                >
                    {isRtl ? 'إلغاء' : 'Cancel'}
                </button>
                <button
                    type="submit"
                    disabled={!langNameAr.trim() || !langNameEn.trim() || isSaving}
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#005953] hover:bg-[#004742] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-xs rounded-xl transition-all cursor-pointer shadow-sm active:scale-95"
                >
                    {isSaving && <Loader2 size={13} className="animate-spin" />}
                    {isEditing
                        ? (isRtl ? 'حفظ التغييرات' : 'Save Changes')
                        : (isRtl ? 'إضافة' : 'Add')}
                </button>
            </div>
        </form>
    );
}

export default memo(ExplanationLanguageForm);
