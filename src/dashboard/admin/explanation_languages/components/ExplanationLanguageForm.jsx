import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Loader2 } from 'lucide-react';
import { useAvailableLanguages } from '../hooks/useAvailableLanguages';

function ExplanationLanguageForm({
    selectedLanguageId,
    setSelectedLanguageId,
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
    const { languages, isLoading } = useAvailableLanguages();

    const handleLanguageSelect = useCallback((e) => {
        const id = e.target.value;
        setSelectedLanguageId(id);
        if (!id) {
            setLangNameAr('');
            setLangNameEn('');
            return;
        }
        const found = languages.find((l) => (l.id || l._id) === id);
        if (found) {
            const n = found.name;
            const isObj = typeof n === 'object' && n !== null;
            setLangNameAr(isObj ? n.ar || '' : n || '');
            setLangNameEn(isObj ? n.en || '' : n || '');
        }
    }, [languages, setSelectedLanguageId, setLangNameAr, setLangNameEn]);

    const hasPreview = langNameAr || langNameEn;

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

            {/* Language Select */}
            <div className="text-start space-y-1.5">
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400">
                    {isRtl ? 'اختر اللغة' : 'Select Language'}
                    <span className="text-red-500 ms-0.5">*</span>
                </label>

                {isLoading ? (
                    <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-950 rounded-2xl py-3 px-4 text-slate-400 text-sm">
                        <Loader2 size={15} className="animate-spin shrink-0" />
                        <span>{isRtl ? 'جارٍ تحميل اللغات...' : 'Loading languages...'}</span>
                    </div>
                ) : (
                    <div className="relative">
                        <select
                            required
                            value={selectedLanguageId || ''}
                            onChange={handleLanguageSelect}
                            disabled={isSaving}
                            className="w-full appearance-none bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-[#005953]/30 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            <option value="">
                                {isRtl ? '-- اختر لغة --' : '-- Select a language --'}
                            </option>
                            {languages.map((lang) => {
                                const id = lang.id || lang._id;
                                const n = lang.name;
                                const label = typeof n === 'object' && n !== null
                                    ? (isRtl ? n.ar || n.en : n.en || n.ar)
                                    : (n || id);
                                return (
                                    <option key={id} value={id}>{label}</option>
                                );
                            })}
                        </select>
                        <ChevronDown
                            size={15}
                            className={`pointer-events-none absolute inset-y-0 my-auto ${isRtl ? 'left-3' : 'right-3'} text-slate-400`}
                        />
                    </div>
                )}

                {/* Preview */}
                {hasPreview && (
                    <div className="grid grid-cols-2 gap-3 pt-1">
                        <div className="bg-slate-50 dark:bg-slate-950/60 rounded-xl px-3 py-2 text-start">
                            <span className="block text-[10px] font-bold text-slate-400 mb-0.5">
                                {isRtl ? 'الاسم بالعربية' : 'Arabic Name'}
                            </span>
                            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 break-all">
                                {langNameAr || '—'}
                            </span>
                        </div>
                        <div className="bg-slate-50 dark:bg-slate-950/60 rounded-xl px-3 py-2 text-start">
                            <span className="block text-[10px] font-bold text-slate-400 mb-0.5">
                                {isRtl ? 'الاسم بالإنجليزية' : 'English Name'}
                            </span>
                            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 break-all" dir="ltr">
                                {langNameEn || '—'}
                            </span>
                        </div>
                    </div>
                )}
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
                    disabled={!selectedLanguageId || isSaving}
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
