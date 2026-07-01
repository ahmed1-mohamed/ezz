import { memo } from 'react';
import { Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function CouponSearchBar({ value, onChange }) {
    const { t } = useTranslation();

    return (
        <div className="relative w-full sm:w-72">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <Search size={16} className="text-slate-400" />
            </div>
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm rounded-xl focus:ring-[#0f7a6c] focus:border-[#0f7a6c] block w-full ps-10 p-2.5 outline-none transition-colors"
                placeholder={t('adminDashboard.coupons.searchByCode')}
            />
        </div>
    );
}

export default memo(CouponSearchBar);
