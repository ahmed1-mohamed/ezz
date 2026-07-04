import { memo } from 'react';
import { Plus, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function ExplanationLanguagesHeader({ showForm, onToggleForm }) {
    const { i18n } = useTranslation();
    const isRtl = i18n.language.startsWith('ar');

    return (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3 text-start">
                <div className="w-10 h-10 rounded-xl bg-[#005953]/10 dark:bg-emerald-950/30 flex items-center justify-center shrink-0">
                    <Globe size={20} className="text-[#005953] dark:text-emerald-400" />
                </div>
                <div>
                    <h1 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white leading-tight">
                        {isRtl ? 'لغات الشرح' : 'Explanation Languages'}
                    </h1>
                    <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-500 mt-0.5">
                        {isRtl ? 'إدارة اللغات المتاحة في المنصة' : 'Manage available explanation languages'}
                    </p>
                </div>
            </div>

            <button
                type="button"
                onClick={onToggleForm}
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 bg-[#005953] hover:bg-[#004742] text-white rounded-2xl text-sm font-semibold transition-all shadow-md shadow-[#005953]/10 active:scale-95 shrink-0 self-start sm:self-center"
                aria-expanded={showForm}
            >
                <Plus size={16} />
                <span>{isRtl ? 'إضافة لغة' : 'Add Language'}</span>
            </button>
        </div>
    );
}

export default memo(ExplanationLanguagesHeader);
