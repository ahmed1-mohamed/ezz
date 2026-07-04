import { useState, useEffect, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { adminCouponsApi } from '@/shared/services/api/adminCouponsApi';
import { showDeleteConfirm } from '@/shared/utils/sweetAlert';

export function useCoupons() {
    const { i18n } = useTranslation();

    const [coupons, setCoupons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    const [isFormOpen, setIsFormOpen] = useState(false);
    const [selectedCoupon, setSelectedCoupon] = useState(null);
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);

    const loadAll = useCallback(async (searchVal = '') => {
        setLoading(true);
        const res = await adminCouponsApi.fetchCoupons({ search: searchVal });
        if (res?.success) setCoupons(res.data);
        setLoading(false);
    }, []);

    useEffect(() => {
        loadAll();
    }, [loadAll]);

    const handleSearch = useCallback((val) => {
        setSearchQuery(val);
        loadAll(val);
    }, [loadAll]);

    const handleSaveCoupon = useCallback(async (data) => {
        const res = await adminCouponsApi.createCoupon(data);
        if (res?.success) {
            setCoupons((prev) => [...prev, res.data]);
            setIsFormOpen(false);
        }
    }, []);

    const handleDeleteCoupon = useCallback(async (id, code) => {
        const isRtl = i18n.language.startsWith('ar');
        const isConfirmed = await showDeleteConfirm(isRtl, code);
        if (!isConfirmed) return;

        const res = await adminCouponsApi.deleteCoupon(id);
        if (res?.success) {
            setCoupons((prev) => prev.filter((c) => c.id !== id));
            setIsDetailsOpen((open) => {
                if (open && selectedCoupon?.id === id) {
                    setSelectedCoupon(null);
                    return false;
                }
                return open;
            });
        }
    }, [i18n.language, selectedCoupon]);

    const handleViewCoupon = useCallback((coupon) => {
        setSelectedCoupon(coupon);
        setIsDetailsOpen(true);
    }, []);

    const handleOpenForm = useCallback(() => setIsFormOpen(true), []);
    const handleCloseForm = useCallback(() => setIsFormOpen(false), []);
    const handleCloseDetails = useCallback(() => {
        setIsDetailsOpen(false);
        setSelectedCoupon(null);
    }, []);

    const activeCoupons = useMemo(
        () => coupons.filter((c) => c.status === 'active' || new Date(c.expirationDate) >= new Date()).length,
        [coupons]
    );

    const expiredCoupons = useMemo(() => coupons.length - activeCoupons, [coupons.length, activeCoupons]);

    const usedCoupons = useMemo(
        () => coupons.filter((c) => c.savedAmount && Number(c.savedAmount) > 0).length,
        [coupons]
    );

    return {
        loading,
        coupons,
        filteredCoupons: coupons,
        activeCoupons,
        expiredCoupons,
        usedCoupons,
        searchQuery,
        setSearchQuery,
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
    };
}
