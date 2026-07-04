import { useState, memo } from 'react';
import { Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function CouponSearchBar({ value, onSearch }) {
    const { t } = useTranslation();
    const [localValue, setLocalValue] = useState(value);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(localValue);
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 w-full sm:w-auto items-center">
            <div className="relative w-full sm:w-72">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <Search size={16} className="text-slate-400" />
                </div>
                <input
                    type="text"
                    value={localValue}
                    onChange={(e) => setLocalValue(e.target.value)}
                    className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm rounded-xl focus:ring-[#0f7a6c] focus:border-[#0f7a6c] block w-full ps-10 p-2.5 outline-none transition-colors"
                    placeholder={t('adminDashboard.coupons.searchByCode', 'بحث عن كود...')}
                />
            </div>
            <button
                type="submit"
                className="px-4 py-2.5 bg-[#0f7a6c] hover:bg-[#0d6b5e] text-white rounded-xl text-sm font-semibold transition-colors shadow-sm cursor-pointer whitespace-nowrap"
            >
                {t('common.search', 'بحث')}
            </button>
        </form>
    );
}

export default memo(CouponSearchBar);
