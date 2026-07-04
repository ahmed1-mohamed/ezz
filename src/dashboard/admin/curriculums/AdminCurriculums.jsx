import { useTranslation } from 'react-i18next';
import { BookMarked } from 'lucide-react';

export default function AdminCurriculums() {
    const { i18n } = useTranslation();
    const isRtl = i18n.language.startsWith('ar');

    return (
        <div className="p-4 md:p-8 max-w-7xl mx-auto" dir={isRtl ? 'rtl' : 'ltr'}>
            <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-[#0f7a6c]/10 flex items-center justify-center">
                    <BookMarked className="w-6 h-6 text-[#0f7a6c]" />
                </div>
                <div className="text-start">
                    <h1 className="text-2xl font-extrabold text-slate-800 dark:text-slate-100">
                        {isRtl ? 'المناهج الدراسية' : 'Curricula'}
                    </h1>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                        {isRtl ? 'إدارة المناهج الدراسية للأكاديمية' : 'Manage academic curricula'}
                    </p>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-16 flex flex-col items-center justify-center text-center shadow-sm">
                <div className="w-20 h-20 rounded-full bg-[#0f7a6c]/10 flex items-center justify-center mb-6">
                    <BookMarked className="w-10 h-10 text-[#0f7a6c]/40" />
                </div>
                <h2 className="text-xl font-bold text-slate-700 dark:text-slate-300 mb-2">
                    {isRtl ? 'قريباً' : 'Coming Soon'}
                </h2>
                <p className="text-slate-400 dark:text-slate-500 text-sm max-w-md">
                    {isRtl
                        ? 'صفحة إدارة المناهج الدراسية قيد الإنشاء وستكون متاحة قريباً.'
                        : 'The curricula management page is under construction and will be available soon.'}
                </p>
            </div>
        </div>
    );
}
