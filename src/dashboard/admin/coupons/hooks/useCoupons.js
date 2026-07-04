import { useState, useEffect, useCallback } from 'react';
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

    const [activeCoupons, setActiveCoupons] = useState(0);
    const [expiredCoupons, setExpiredCoupons] = useState(0);
    const [usedCoupons, setUsedCoupons] = useState(0);

    const loadAll = useCallback(async (searchVal = '') => {
        setLoading(true);
        const [res, activeRes, usedRes, expiredRes] = await Promise.all([
            adminCouponsApi.fetchCoupons({ search: searchVal }),
            adminCouponsApi.fetchActiveCoupons({ search: searchVal }),
            adminCouponsApi.fetchUsedCoupons({ search: searchVal }),
            adminCouponsApi.fetchExpiredCoupons({ search: searchVal })
        ]);

        if (res?.success) setCoupons(res.data);
        if (activeRes?.success) setActiveCoupons(activeRes.data.length || 0);
        if (usedRes?.success) setUsedCoupons(usedRes.data.length || 0);
        if (expiredRes?.success) setExpiredCoupons(expiredRes.data.length || 0);

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
