import { useState, useEffect, useCallback } from 'react'
import { Plus, Ticket, Search } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Spinner from '@/shared/components/Spinner'
import { adminCouponsApi } from '@/shared/services/api/adminCouponsApi'
import CouponListTable from './components/CouponListTable'
import UsageHistoryTable from './components/UsageHistoryTable'
import CouponFormPanel from './components/CouponFormPanel'
import CouponDetailsModal from './components/CouponDetailsModal'
import { showDeleteConfirm } from '@/shared/utils/sweetAlert'

export default function AdminCoupons() {
    const { t, i18n } = useTranslation()
    const tWithFallback = (key, fallback) => {
        const trans = t(`adminDashboard.coupons.${key}`);
        return trans === `adminDashboard.coupons.${key}` ? fallback : trans;
    }

    const [coupons, setCoupons] = useState([])
    const [usageHistory, setUsageHistory] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchQuery, setSearchQuery] = useState('')

    const [isFormOpen, setIsFormOpen] = useState(false)
    const [selectedCoupon, setSelectedCoupon] = useState(null)
    const [isDetailsOpen, setIsDetailsOpen] = useState(false)

    const loadAll = useCallback(async () => {
        setLoading(true)
        const res = await adminCouponsApi.fetchCoupons()
        if (res?.success) {
            setCoupons(res.data)
        }

        const historyRes = await adminCouponsApi.fetchCouponUsageHistory()
        if (historyRes?.success) {
            setUsageHistory(historyRes.data)
        }

        setLoading(false)
    }, [])

    useEffect(() => {
        loadAll()
    }, [loadAll])

    const handleSaveCoupon = async (data) => {
        const res = await adminCouponsApi.createCoupon(data)
        if (res?.success) {
            setCoupons((prev) => [...prev, res.data])
            setIsFormOpen(false)
        }
    }

    const handleDeleteCoupon = async (id, code) => {
        const isRtl = i18n.language === 'ar' || true;
        const isConfirmed = await showDeleteConfirm(isRtl, code);
        if (!isConfirmed) return;

        const res = await adminCouponsApi.deleteCoupon(id)
        if (res?.success) {
            setCoupons((prev) => prev.filter((c) => c.id !== id))
            if (selectedCoupon?.id === id) {
                setIsDetailsOpen(false)
                setSelectedCoupon(null)
            }
        }
    }

    const activeCoupons = coupons.filter(c => c.status === 'active' || new Date(c.expirationDate) >= new Date()).length;
    const expiredCoupons = coupons.length - activeCoupons;

    const filteredCoupons = coupons.filter(c => c.code?.toLowerCase().includes(searchQuery.toLowerCase()));

    if (loading) {
        return (
            <div className="flex items-center justify-center h-60">
                <Spinner />
            </div>
        )
    }

    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col justify-between">
                    <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">{tWithFallback('totalCodes', 'إجمالي الأكواد')}</span>
                    <span className="text-2xl font-bold text-[#0f7a6c] dark:text-[#14a693] mt-2">{coupons.length}</span>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col justify-between">
                    <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">{tWithFallback('activeCodes', 'أكواد نشطة')}</span>
                    <span className="text-2xl font-bold text-[#10b981] dark:text-[#34d399] mt-2">{activeCoupons}</span>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col justify-between">
                    <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">{tWithFallback('expiredCodes', 'أكواد منتهية')}</span>
                    <span className="text-2xl font-bold text-slate-400 dark:text-slate-500 mt-2">{expiredCoupons}</span>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                    onClick={() => setIsFormOpen(true)}
                    className="flex items-center justify-center gap-2 px-5 py-2.5 bg-[#0f7a6c] text-white rounded-xl text-sm font-semibold hover:bg-[#0d6b5e] transition-colors shadow-sm shadow-[#0f7a6c]/20 w-full sm:w-auto"
                >
                    <Plus size={18} />
                    {tWithFallback('createCoupon', 'إنشاء كود خصم')}
                </button>

                <div className="relative w-full sm:w-72">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <Search size={16} className="text-slate-400" />
                    </div>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm rounded-xl focus:ring-[#0f7a6c] focus:border-[#0f7a6c] block w-full ps-10 p-2.5"
                        placeholder={tWithFallback('searchByCode', 'بحث بكود الخصم...')}
                    />
                </div>
            </div>

            <section className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 overflow-hidden">
                <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <h2 className="text-lg font-bold text-slate-800 dark:text-white">{tWithFallback('currentCoupons', 'الكوبونات الحالية')}</h2>
                </div>

                {filteredCoupons.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                        <div className="w-16 h-16 rounded-full bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center mb-4">
                            <Ticket size={28} className="text-slate-300 dark:text-slate-600" />
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 font-medium">{tWithFallback('noCouponsFound', 'لا يوجد كوبونات')}</p>
                    </div>
                ) : (
                    <CouponListTable
                        coupons={filteredCoupons}
                        onDelete={handleDeleteCoupon}
                        onView={(coupon) => { setSelectedCoupon(coupon); setIsDetailsOpen(true) }}
                    />
                )}
            </section>

            <section className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 overflow-hidden">
                <div className="p-6 border-b border-slate-100 dark:border-slate-800">
                    <h2 className="text-lg font-bold text-slate-800 dark:text-white">{tWithFallback('usageHistory', 'سجل الاستخدام')}</h2>
                </div>
                <UsageHistoryTable history={usageHistory} />
            </section>

            <CouponFormPanel
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                onSave={handleSaveCoupon}
            />

            <CouponDetailsModal
                isOpen={isDetailsOpen}
                onClose={() => setIsDetailsOpen(false)}
                coupon={selectedCoupon}
                onDelete={(id, code) => handleDeleteCoupon(id, code)}
            />
        </div>
    )
}