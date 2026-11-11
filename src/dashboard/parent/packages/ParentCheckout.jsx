import { useState, useMemo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation, useSearchParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Users,
  User,
  Ticket,
  ShieldCheck,
  CreditCard,
  AlertCircle,
  Loader2,
  Sparkles,
  Layers,
} from 'lucide-react';
import { parentPackagesApi } from '@/shared/services/api/parentPackagesApi';
import { parentApi } from '@/shared/services/api/parentApi';
import { currenciesApi, parseExchangeRateData, resolvePackagePrice } from '@/shared/services/api/currenciesApi';
import { showErrorToast, showSuccessToast } from '@/shared/utils/sweetAlert';

function formatCurrency(amount, currency = 'ج.م') {
  const num = Number(amount || 0);
  return `${num.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 })} ${currency}`;
}

export default function ParentCheckout() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language.startsWith('ar');
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const initialPackage = location.state?.package || null;
  const packageIdParam = searchParams.get('packageId') || initialPackage?.id || '';

  const {
    data: fetchedPackage,
    isLoading: isSinglePackageLoading,
    isError: isPackageError,
  } = useQuery({
    queryKey: ['parentCheckoutPackage', packageIdParam],
    queryFn: () => parentPackagesApi.fetchPackageDetails(packageIdParam),
    enabled: !initialPackage && Boolean(packageIdParam),
  });

  const {
    data: allPackagesRes,
    isLoading: isAllPackagesLoading,
  } = useQuery({
    queryKey: ['parentCheckoutAllPackages'],
    queryFn: parentPackagesApi.fetchPackages,
    enabled: !initialPackage && !packageIdParam,
  });

  const availablePackagesList = useMemo(() => {
    if (!allPackagesRes) return [];
    if (Array.isArray(allPackagesRes.data)) return allPackagesRes.data;
    if (Array.isArray(allPackagesRes)) return allPackagesRes;
    return [];
  }, [allPackagesRes]);

  const [selectedPackageOverride, setSelectedPackageOverride] = useState(null);
  const initialCurrencyInfo = location.state?.currencyInfo || null;
  const { data: exchangeRateRes } = useQuery({
    queryKey: ['currenciesExchangeRate'],
    queryFn: currenciesApi.fetchExchangeRate,
    staleTime: 1000 * 60 * 10,
    enabled: !initialCurrencyInfo,
  });
  const currencyInfo = useMemo(() => {
    if (initialCurrencyInfo) return initialCurrencyInfo;
    if (exchangeRateRes) return parseExchangeRateData(exchangeRateRes);
    return { symbol: 'ج.م', exchangeRate: 1 };
  }, [initialCurrencyInfo, exchangeRateRes]);
  const selectedPackage = selectedPackageOverride || initialPackage || fetchedPackage || (availablePackagesList.length > 0 ? availablePackagesList[0] : null);
  const currencySymbol = currencyInfo?.symbol || 'ج.م';
  const packageDisplayPrice = useMemo(() => {
    if (!selectedPackage) return 0;
    const rawPrice = Number(selectedPackage.price ?? 0);
    return resolvePackagePrice(rawPrice, currencyInfo, selectedPackage);
  }, [selectedPackage, currencyInfo]);
  const isPackageLoading = (!initialPackage && Boolean(packageIdParam) && isSinglePackageLoading) || (!initialPackage && !packageIdParam && isAllPackagesLoading);

  const {
    data: childrenRes,
    isLoading: isChildrenLoading,
  } = useQuery({
    queryKey: ['parentCheckoutChildren'],
    queryFn: parentApi.fetchChildren,
  });

  const childrenList = useMemo(() => {
    if (!childrenRes) return [];
    if (Array.isArray(childrenRes.data)) return childrenRes.data;
    if (Array.isArray(childrenRes)) return childrenRes;
    return [];
  }, [childrenRes]);

  const isFamilyPackage = useMemo(() => {
    if (!selectedPackage) return false;
    const typeStr = String(selectedPackage.type || '').toLowerCase();
    const typeText = String(selectedPackage.typeText || '').toLowerCase();
    return typeStr === 'family' || typeText.includes('عائل');
  }, [selectedPackage]);

  const maxStudentsAllowed = useMemo(() => {
    if (!isFamilyPackage) return 1;
    const directMax = Number(
      selectedPackage?.maxMembers ??
      selectedPackage?.maxStudents ??
      selectedPackage?.max_members ??
      selectedPackage?.maxChildren ??
      0
    );
    if (directMax > 0) return directMax;
    if (Array.isArray(selectedPackage?.familyTiers) && selectedPackage.familyTiers.length > 0) {
      const tierCounts = selectedPackage.familyTiers
        .map((t) => Number(t?.membersCount ?? t?.members ?? t?.count ?? 0))
        .filter((n) => n > 0);
      if (tierCounts.length > 0) return Math.max(...tierCounts);
    }
    return 5;
  }, [isFamilyPackage, selectedPackage]);

  const [selectedStudentIds, setSelectedStudentIds] = useState(() => []);

  const effectiveStudentIds = useMemo(() => {
    if (selectedStudentIds.length > 0) return selectedStudentIds;
    if (childrenList.length > 0) {
      if (isFamilyPackage && childrenList.length >= 2) {
        return childrenList.slice(0, 2).map((c) => String(c.id || c.student_id || c._id));
      }
      const firstId = childrenList[0].id || childrenList[0].student_id || childrenList[0]._id;
      return firstId ? [String(firstId)] : [];
    }
    return [];
  }, [selectedStudentIds, childrenList, isFamilyPackage]);

  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState('');
  const [couponError, setCouponError] = useState('');

  const pkgId = selectedPackage?.id || selectedPackage?._id || packageIdParam;

  const {
    data: previewData,
    isFetching: isPreviewLoading,
  } = useQuery({
    queryKey: ['parentCheckoutPreview', pkgId, effectiveStudentIds, appliedCoupon],
    queryFn: () => parentPackagesApi.previewCheckout({
      packageId: pkgId,
      studentIds: effectiveStudentIds,
      couponCode: appliedCoupon || undefined,
    }),
    enabled: Boolean(pkgId && effectiveStudentIds.length > 0),
    staleTime: 30000,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [checkoutError, setCheckoutError] = useState('');

  const toggleStudent = useCallback((studentId) => {
    const idStr = String(studentId);
    if (!isFamilyPackage) {
      setSelectedStudentIds([idStr]);
      return;
    }
    const current = effectiveStudentIds;
    if (current.includes(idStr)) {
      if (current.length === 1) {
        showErrorToast(t('parentPackages.atLeastOneStudent', 'يجب اختيار طالب واحد على الأقل'), isRtl);
        return;
      }
      setSelectedStudentIds(current.filter((id) => id !== idStr));
      return;
    }
    if (current.length >= maxStudentsAllowed) {
      showErrorToast(
        t('parentPackages.maxStudentsReached', `الحد الأقصى المسموح به للباقة العائلية هو ${maxStudentsAllowed} طلاب`),
        isRtl
      );
      return;
    }
    setSelectedStudentIds([...current, idStr]);
  }, [isFamilyPackage, effectiveStudentIds, maxStudentsAllowed, isRtl, t]);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    const cleanCoupon = couponCode.trim();
    if (!cleanCoupon) {
      setAppliedCoupon('');
      setCouponError('');
      return;
    }
    if (!pkgId || effectiveStudentIds.length === 0) {
      setCouponError(t('parentPackages.selectStudentFirst', 'يرجى اختيار طالب أولاً'));
      return;
    }
    setCouponError('');
    setAppliedCoupon(cleanCoupon);
    showSuccessToast(t('parentPackages.couponApplied', 'تم تطبيق كود الخصم'), isRtl);
  };

  const handleRemoveCoupon = () => {
    setCouponCode('');
    setAppliedCoupon('');
    setCouponError('');
  };

  const handleCheckout = async () => {
    if (!pkgId) {
      setCheckoutError(t('parentPackages.noPackageSelected', 'لم يتم تحديد باقة'));
      return;
    }
    if (effectiveStudentIds.length === 0) {
      setCheckoutError(t('parentPackages.selectAtLeastOneStudent', 'يرجى اختيار طالب واحد على الأقل للاشتراك'));
      return;
    }
    setIsSubmitting(true);
    setCheckoutError('');
    try {
      const result = await parentPackagesApi.createCheckout({
        packageId: pkgId,
        studentIds: effectiveStudentIds,
        couponCode: appliedCoupon || undefined,
      });
      const subId = result?.id || result?.subscriptionId || result?.subscription?._id || result?.data?.id;
      if (subId) {
        localStorage.setItem('last_checkout_sub_id', String(subId));
      }
      const stripeUrl = result?.url || result?.sessionUrl || result?.checkoutUrl || result?.data?.url || result?.data?.sessionUrl;
      if (stripeUrl) {
        window.location.assign(stripeUrl);
      } else {
        navigate('/dashboard/parent/checkout/status', {
          state: { subscriptionId: subId, previewData: result },
        });
      }
    } catch (err) {
      setIsSubmitting(false);
      const msg = err?.response?.data?.message || t('parentPackages.checkoutFailed', 'فشلت عملية إنشاء جلسة الدفع، يرجى المحاولة مرة أخرى');
      setCheckoutError(msg);
      showErrorToast(msg, isRtl);
    }
  };

  const fallbackFinancials = useMemo(() => {
    const currency = currencySymbol;
    const basePrice = Number(packageDisplayPrice || 0);
    const count = Math.max(1, effectiveStudentIds.length);
    let tierPrice = null;
    if (isFamilyPackage && Array.isArray(selectedPackage?.familyTiers) && selectedPackage.familyTiers.length > 0) {
      const matchedTier = selectedPackage.familyTiers.find(
        (t) => Number(t?.membersCount ?? t?.members ?? 0) === count
      );
      if (matchedTier && Number(matchedTier.price) > 0) {
        tierPrice = resolvePackagePrice(matchedTier.price, currencyInfo, selectedPackage);
      }
    }
    const subtotal = tierPrice !== null ? tierPrice : (basePrice * (isFamilyPackage ? count : 1));
    const tax = Number((subtotal * 0.05).toFixed(2));
    const total = Number((subtotal + tax).toFixed(2));
    return {
      subtotal,
      discount: 0,
      tax,
      total,
      currency,
    };
  }, [packageDisplayPrice, effectiveStudentIds.length, isFamilyPackage, selectedPackage, currencyInfo, currencySymbol]);

  const summary = useMemo(() => {
    if (!previewData) return fallbackFinancials;
    const rawSubtotal = Number(
      previewData.subtotalAmount ??
      previewData.baseAmount ??
      previewData.subtotal ??
      previewData.originalPrice ??
      fallbackFinancials.subtotal
    );
    const rawDiscount = Number(previewData.discountAmount ?? previewData.discount ?? 0);
    const rawTax = Number(previewData.taxAmount ?? previewData.tax ?? previewData.vat ?? fallbackFinancials.tax);
    const rawTotal = Number(previewData.finalAmount ?? previewData.total ?? fallbackFinancials.total);
    const rate = Number(currencyInfo?.exchangeRate || 1);
    const isUsdScale = rate > 1 && rawSubtotal > 0 && rawSubtotal < 150 && fallbackFinancials.subtotal >= 150;
    const subtotal = isUsdScale ? Math.round(rawSubtotal * rate) : rawSubtotal;
    const discount = isUsdScale ? Math.round(rawDiscount * rate) : rawDiscount;
    const tax = isUsdScale ? Number((rawTax * rate).toFixed(2)) : rawTax;
    const total = isUsdScale ? Math.round(rawTotal * rate) : rawTotal;
    const currency = currencySymbol;
    return { subtotal, discount, tax, total, currency };
  }, [previewData, fallbackFinancials, currencyInfo, currencySymbol]);

  if (isPackageLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-[#ecf0f1] dark:bg-slate-950 font-sans">
        <div className="flex flex-col items-center gap-3 text-slate-500">
          <Loader2 className="w-8 h-8 animate-spin text-[#0f7a6c]" />
          <p className="text-sm font-bold">{t('parentPackages.loadingPackage', 'جارٍ تحميل بيانات الباقة...')}</p>
        </div>
      </div>
    );
  }

  if (!selectedPackage || isPackageError) {
    return (
      <div className="min-h-screen p-6 sm:p-12 flex items-center justify-center bg-[#ecf0f1] dark:bg-slate-950 font-sans" dir={isRtl ? 'rtl' : 'ltr'}>
        <div className="max-w-md w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 text-center space-y-5 shadow-sm">
          <div className="w-16 h-16 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-600 flex items-center justify-center mx-auto">
            <AlertCircle className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-black text-slate-800 dark:text-white">
            {t('parentPackages.packageNotFound', 'لم يتم اختيار باقة')}
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {t('parentPackages.selectPackageHint', 'يرجى الانتقال إلى صفحة الباقات لاختيار الباقة التي ترغب في الاشتراك بها.')}
          </p>
          <Link
            to="/dashboard/parent/packages"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0f7a6c] hover:bg-[#0c6559] text-white font-bold text-sm transition-all"
          >
            <Layers className="w-4 h-4" />
            <span>{t('parentPackages.browsePackages', 'استعراض الباقات')}</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#ecf0f1] dark:bg-slate-950 p-4 sm:p-8 font-sans transition-colors" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => navigate('/dashboard/parent/packages')}
            className="p-2.5 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-2xl transition-colors cursor-pointer bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800"
            title={t('parentPackages.back', isRtl ? 'رجوع' : 'Back')}
          >
            {isRtl ? <ArrowRight className="w-5 h-5 text-slate-700 dark:text-slate-200" /> : <ArrowLeft className="w-5 h-5 text-slate-700 dark:text-slate-200" />}
          </button>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 dark:text-white">
              {t('parentPackages.checkoutTitle', 'إتمام الاشتراك والدفع')}
            </h1>
            <p className="text-slate-500 dark:text-slate-400 mt-0.5 text-xs sm:text-sm font-medium">
              {t('parentPackages.checkoutSubtitle', 'اختر الأبناء المراد إشراكهم واستكمل الدفع الآمن')}
            </p>
          </div>
        </div>

        {checkoutError && (
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-red-200 dark:border-red-900/60 border-s-4 border-s-red-500 text-red-600 dark:text-red-400 text-sm font-bold flex items-center gap-3 shadow-xs">
            <AlertCircle className="w-5 h-5 shrink-0 text-red-500" />
            <span>{checkoutError}</span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-200/80 dark:border-slate-800 space-y-6">
              <div className="flex items-start justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#0f7a6c]/10 text-[#0f7a6c] dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <Layers className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border flex items-center gap-1.5 ${
                        isFamilyPackage
                          ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border-amber-200/60'
                          : 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200/40'
                      }`}>
                        {isFamilyPackage ? <Users className="w-3 h-3 text-amber-600 dark:text-amber-400" /> : <User className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />}
                        <span>{isFamilyPackage ? t('parentPackages.familyType', 'باقة عائلية') : t('parentPackages.individualType', 'باقة فردية')}</span>
                        {isFamilyPackage && (
                          <span className="font-extrabold text-[11px] text-amber-800 dark:text-amber-200 font-mono">
                            ({t('parentPackages.maxAllowedHint', 'أقصى عدد:')} {maxStudentsAllowed} {t('parentPackages.studentsCountUnit', 'أبناء')})
                          </span>
                        )}
                      </span>
                      {availablePackagesList.length > 1 && (
                        <select
                          value={selectedPackage?.id || selectedPackage?._id || ''}
                          onChange={(e) => {
                            const found = availablePackagesList.find((p) => (p.id || p._id) === e.target.value);
                            if (found) setSelectedPackageOverride(found);
                          }}
                          className="text-xs py-0.5 px-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold focus:outline-hidden cursor-pointer"
                        >
                          {availablePackagesList.map((p) => (
                            <option key={p.id || p._id} value={p.id || p._id}>
                              {p.name}
                            </option>
                          ))}
                        </select>
                      )}
                    </div>
                    <h2 className="text-xl font-black text-slate-800 dark:text-white mt-1">
                      {selectedPackage.name}
                    </h2>
                  </div>
                </div>
                <div className="text-end">
                  <span className="text-xs text-slate-400 block font-bold">{t('parentPackages.packageBasePrice', 'السعر')}</span>
                  <span className="text-xl font-black text-[#0f7a6c] dark:text-emerald-400 font-mono">
                    {formatCurrency(packageDisplayPrice, currencySymbol)}
                  </span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-black text-slate-800 dark:text-white flex items-center gap-2">
                    {isFamilyPackage ? <Users className="w-4 h-4 text-[#0f7a6c]" /> : <User className="w-4 h-4 text-[#0f7a6c]" />}
                    <span>
                      {isFamilyPackage
                        ? t('parentPackages.selectStudentsFamilyDynamic', `اختر الأبناء (1 إلى ${maxStudentsAllowed} طلاب)`)
                        : t('parentPackages.selectStudentSingle', 'اختر الابن المستفيد')}
                    </span>
                  </label>
                  {isFamilyPackage && (
                    <span className="text-xs font-bold text-slate-400">
                      {effectiveStudentIds.length} / {maxStudentsAllowed} {t('parentPackages.studentsCountUnit', 'أبناء')}
                    </span>
                  )}
                </div>

                {isChildrenLoading ? (
                  <div className="p-8 flex items-center justify-center gap-2 text-slate-400 text-sm">
                    <Loader2 className="w-5 h-5 animate-spin text-[#0f7a6c]" />
                    <span>{t('parentPackages.loadingStudents', 'جارٍ تحميل قائمة الأبناء...')}</span>
                  </div>
                ) : childrenList.length === 0 ? (
                  <div className="p-6 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/30 text-amber-700 dark:text-amber-300 text-xs sm:text-sm">
                    <p className="font-bold mb-2">{t('parentPackages.noStudentsFound', 'لا يوجد أبناء مسجلين بحسابك حالياً.')}</p>
                    <Link to="/dashboard/parent/children" className="text-[#0f7a6c] underline font-bold">
                      {t('parentPackages.addNewChild', 'أضف بيانات ابن جديد')}
                    </Link>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {childrenList.map((child, idx) => {
                      const childId = String(child.id || child.student_id || child.user_id || child._id || `child-${idx}`);
                      const isSelected = effectiveStudentIds.includes(childId);
                      const childName = typeof child.name === 'object' ? (child.name.ar || child.name.en) : (child.name || child.studentName || `طالب ${idx + 1}`);
                      return (
                        <div
                          key={childId}
                          onClick={() => toggleStudent(childId)}
                          className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between gap-3 ${
                            isSelected
                              ? 'border-[#0f7a6c] bg-[#0f7a6c]/5 dark:bg-[#0f7a6c]/10 shadow-xs'
                              : 'border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700 bg-slate-50/50 dark:bg-slate-900/60'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black ${
                              isSelected
                                ? 'bg-[#0f7a6c] text-white'
                                : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                            }`}>
                              {childName.charAt(0)}
                            </div>
                            <div>
                              <div className="font-extrabold text-sm text-slate-800 dark:text-white">
                                {childName}
                              </div>
                              <div className="text-xs text-slate-400">
                                {child.studentLevel || t('parentPackages.registeredStudent', 'طالب مسجل')}
                              </div>
                            </div>
                          </div>
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                            isSelected
                              ? 'border-[#0f7a6c] bg-[#0f7a6c] text-white'
                              : 'border-slate-300 dark:border-slate-600'
                          }`}>
                            {isSelected && <CheckCircle2 className="w-4 h-4" />}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <label className="text-sm font-black text-slate-800 dark:text-white block mb-2 flex items-center gap-2">
                  <Ticket className="w-4 h-4 text-[#0f7a6c]" />
                  <span>{t('parentPackages.couponCodeLabel', 'هل لديك كود خصم؟')}</span>
                </label>
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                      placeholder={t('parentPackages.enterCouponPlaceholder', 'مثال: SAVE10')}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white font-mono uppercase text-sm focus:outline-hidden focus:ring-2 focus:ring-[#0f7a6c]"
                    />
                  </div>
                  {appliedCoupon ? (
                    <button
                      type="button"
                      onClick={handleRemoveCoupon}
                      className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs transition-colors cursor-pointer"
                    >
                      {t('parentPackages.removeCoupon', 'إلغاء')}
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={!couponCode.trim()}
                      className="px-6 py-3 rounded-xl bg-[#0f7a6c] hover:bg-[#0c6559] text-white font-bold text-xs transition-colors disabled:opacity-50 cursor-pointer flex items-center gap-2"
                    >
                      <span>{t('parentPackages.applyCoupon', 'تطبيق')}</span>
                    </button>
                  )}
                </form>
                {couponError && (
                  <p className="text-xs text-red-500 font-semibold mt-2">{couponError}</p>
                )}
                {appliedCoupon && !couponError && (
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-2 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{t('parentPackages.couponActiveMsg', 'كود الخصم مفعّل:')} {appliedCoupon}</span>
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-200/80 dark:border-slate-800 sticky top-6 space-y-6">
              <h2 className="text-lg font-black text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-4">
                {t('parentPackages.orderSummary', 'ملخص الطلب')}
              </h2>

              <div className="space-y-4 text-xs sm:text-sm">
                <div>
                  <div className="text-xs text-slate-400 font-bold mb-1">{t('parentPackages.package', 'الباقة')}</div>
                  <div className="font-extrabold text-slate-800 dark:text-white">{selectedPackage.name}</div>
                </div>

                <div>
                  <div className="text-xs text-slate-400 font-bold mb-1">{t('parentPackages.studentsCovered', 'الطلاب المستفيدين')}</div>
                  <div className="font-bold text-slate-800 dark:text-white">
                    {effectiveStudentIds.length}
                    {isFamilyPackage && ` / ${maxStudentsAllowed}`} {t('parentPackages.studentsCountUnit', 'أبناء')}
                  </div>
                </div>

                {selectedPackage.sessionsCount && (
                  <div>
                    <div className="text-xs text-slate-400 font-bold mb-1">{t('parentPackages.sessionsCount', 'عدد الحصص')}</div>
                    <div className="font-bold text-slate-800 dark:text-white">
                      {selectedPackage.sessionsCount} {t('parentPackages.sessionsUnit', 'حصة شهرياً')}
                    </div>
                  </div>
                )}

                <div className="border-t border-slate-100 dark:border-slate-800 pt-4 space-y-2.5">
                  <div className="flex justify-between items-center text-slate-600 dark:text-slate-400">
                    <span>{t('parentPackages.subtotal', 'المبلغ')}</span>
                    <span className="font-mono font-bold text-slate-800 dark:text-white">
                      {formatCurrency(summary.subtotal, summary.currency)}
                    </span>
                  </div>

                  {summary.discount > 0 && (
                    <div className="flex justify-between items-center text-emerald-600 dark:text-emerald-400 font-bold">
                      <span>{t('parentPackages.discount', 'الخصم')}</span>
                      <span className="font-mono">
                        -{formatCurrency(summary.discount, summary.currency)}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between items-center text-slate-600 dark:text-slate-400">
                    <span>{t('parentPackages.tax', 'الضريبة')}</span>
                    <span className="font-mono font-bold text-slate-800 dark:text-white">
                      {formatCurrency(summary.tax, summary.currency)}
                    </span>
                  </div>
                </div>

                <div className="border-t border-slate-100 dark:border-slate-800 pt-4 flex justify-between items-center">
                  <span className="font-black text-slate-800 dark:text-white text-base">
                    {t('parentPackages.total', 'الإجمالي المستحق')}
                  </span>
                  <span className="font-black text-[#0f7a6c] dark:text-emerald-400 text-xl font-mono">
                    {formatCurrency(summary.total, summary.currency)}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCheckout}
                disabled={isSubmitting || effectiveStudentIds.length === 0 || isPreviewLoading}
                className="w-full bg-[#0f7a6c] hover:bg-[#0c6559] text-white font-extrabold py-4 px-6 rounded-2xl transition-all shadow-md shadow-[#0f7a6c]/20 flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50 hover:scale-[1.01] active:scale-95"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>{t('parentPackages.completingPayment', 'جارٍ إتمام عملية الدفع...')}</span>
                  </>
                ) : (
                  <>
                    <CreditCard className="w-5 h-5" />
                    <span>{t('parentPackages.completePayment', 'إتمام عملية الدفع')}</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-slate-400 text-[11px] pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0f7a6c]" />
                <span>{t('parentPackages.stripeGuaranteed', 'معاملات بنكية مؤمنة بنسبة 100%')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
