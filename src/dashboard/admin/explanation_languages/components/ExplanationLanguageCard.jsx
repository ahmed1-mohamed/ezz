import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Trash2, Pencil } from 'lucide-react';

function ExplanationLanguageCard({ langItem, onEdit, onDelete }) {
    const { i18n } = useTranslation();
    const isRtl = i18n.language.startsWith('ar');

    const nameObj = langItem.name;
    const arName = typeof nameObj === 'object' && nameObj !== null ? nameObj.ar : nameObj;
    const enName = typeof nameObj === 'object' && nameObj !== null ? nameObj.en : nameObj;
    const displayName = isRtl ? arName || enName : enName || arName;

    return (
        <div
            className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800/80 shadow-sm hover:shadow-md hover:border-[#005953]/20 transition-all duration-200"
            dir={isRtl ? 'rtl' : 'ltr'}
        >
            <div className="flex items-center justify-between gap-4 p-4 sm:p-5">
                <div className="flex items-center gap-3 min-w-0">
                    <div className="shrink-0 w-10 h-10 sm:w-11 sm:h-11 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl flex items-center justify-center text-[#005953] dark:text-emerald-400 border border-emerald-100/60 dark:border-emerald-900/40">
                        <Globe size={19} />
                    </div>
                    <div className="min-w-0 text-start">
                        <p className="text-sm sm:text-base font-bold text-slate-800 dark:text-white truncate">
                            {displayName || '—'}
                        </p>
                        {arName && enName && arName !== enName && (
                            <p className="text-xs text-slate-400 dark:text-slate-500 truncate mt-0.5" dir="ltr">
                                {isRtl ? enName : arName}
                            </p>
                        )}
                    </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                    <button
                        type="button"
                        onClick={() => onEdit(langItem)}
                        className="p-2 text-slate-400 hover:text-[#005953] dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-all cursor-pointer"
                        title={isRtl ? 'تعديل اللغة' : 'Edit language'}
                        aria-label={isRtl ? 'تعديل اللغة' : 'Edit language'}
                    >
                        <Pencil size={15} />
                    </button>
                    <button
                        type="button"
                        onClick={() => onDelete(langItem)}
                        className="p-2 text-slate-400 hover:text-rose-500 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/20 rounded-lg transition-all cursor-pointer"
                        title={isRtl ? 'حذف اللغة' : 'Delete language'}
                        aria-label={isRtl ? 'حذف اللغة' : 'Delete language'}
                    >
                        <Trash2 size={15} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default memo(ExplanationLanguageCard);
