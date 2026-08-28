import { memo } from 'react';
import { Plus, Ticket } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Spinner from '@/shared/components/Spinner';
import { useCoupons } from './hooks/useCoupons';
import CouponStatsBar from './components/CouponStatsBar';
import CouponSearchBar from './components/CouponSearchBar';
import CouponListTable from './components/CouponListTable';
import CouponFormPanel from './components/CouponFormPanel';
import CouponDetailsModal from './components/CouponDetailsModal';

function AdminCoupons() {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language.startsWith('ar');
    const {
        loading,
        filteredCoupons,
        activeCoupons,
        expiredCoupons,
        usedCoupons,
        coupons,
        searchQuery,
        handleSearch,
        isFormOpen,
        isDetailsOpen,
        selectedCoupon,
        handleSaveCoupon,
        handleDeleteCoupon,
        handleViewCoupon,
        handleOpenForm,
        handleCloseForm,
        handleCloseDetails,
        selectedStatus,
        setSelectedStatus,
    } = useCoupons();

    if (loading) {
        return (
            <div className="flex items-center justify-center h-60">
                <Spinner />
            </div>
        );
    }

    return (
        <div className="space-y-6 p-1 md:p-6" dir={isRtl ? 'rtl' : 'ltr'}>
            <div className="text-start">
                <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
                    {t('adminDashboard.coupons.pageTitle', 'إدارة كوبونات الخصم')}
                </h1>
                <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">
                    {t('adminDashboard.coupons.subtitle', 'منارة العز أكاديمي · لوحة الإدارة')}
                </p>
            </div>

            <CouponStatsBar
                total={coupons.length}
                active={activeCoupons}
                expired={expiredCoupons}
                used={usedCoupons}
                selectedStatus={selectedStatus}
                onSelectStatus={setSelectedStatus}
            />

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                    onClick={handleOpenForm}
                    className="flex items-center justify-center gap-2 px-5 py-2.5 bg-[#0f7a6c] text-white rounded-xl text-sm font-semibold hover:bg-[#0d6b5e] transition-colors shadow-sm shadow-[#0f7a6c]/20 w-full sm:w-auto cursor-pointer"
                >
                    <Plus size={18} />
                    {t('adminDashboard.coupons.createCoupon', 'إنشاء كود خصم')}
                </button>

                <CouponSearchBar value={searchQuery} onSearch={handleSearch} />
            </div>

            <section className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-soft">
                <div className="p-6 border-b border-slate-100 dark:border-slate-800 text-start">
                    <h2 className="text-lg font-bold text-slate-800 dark:text-white">
                        {t('adminDashboard.coupons.currentCoupons', 'الكوبونات الحالية')}
                    </h2>
                </div>

                {filteredCoupons.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                        <div className="w-16 h-16 rounded-full bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center mb-4">
                            <Ticket size={28} className="text-slate-300 dark:text-slate-600" />
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 font-medium">
                            {t('adminDashboard.coupons.noCouponsFound', 'لا توجد كوبونات')}
                        </p>
                    </div>
                ) : (
                    <CouponListTable
                        coupons={filteredCoupons}
                        onDelete={handleDeleteCoupon}
                        onView={handleViewCoupon}
                    />
                )}
            </section>

            <CouponFormPanel
                isOpen={isFormOpen}
                onClose={handleCloseForm}
                onSave={handleSaveCoupon}
            />

            <CouponDetailsModal
                isOpen={isDetailsOpen}
                onClose={handleCloseDetails}
                coupon={selectedCoupon}
                onDelete={handleDeleteCoupon}
            />
        </div>
    );
}

export default memo(AdminCoupons);