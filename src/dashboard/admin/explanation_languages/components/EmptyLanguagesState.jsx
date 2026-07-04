import { memo } from 'react';
import { Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function EmptyLanguagesState() {
    const { i18n } = useTranslation();
    const isRtl = i18n.language.startsWith('ar');

    return (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-12 sm:p-16 flex flex-col items-center justify-center text-center gap-4">
            <div className="w-16 h-16 rounded-full bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center">
                <Globe size={28} className="text-slate-300 dark:text-slate-600" />
            </div>
            <div>
                <p className="text-sm font-bold text-slate-500 dark:text-slate-400">
                    {isRtl ? 'لا توجد لغات شرح حالياً' : 'No explanation languages yet'}
                </p>
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
                    {isRtl ? 'اضغط على "إضافة لغة" لبدء الإضافة' : 'Click "Add Language" to get started'}
                </p>
            </div>
        </div>
    );
}

export default memo(EmptyLanguagesState);
