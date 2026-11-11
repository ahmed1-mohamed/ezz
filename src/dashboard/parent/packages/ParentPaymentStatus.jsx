import { useState, useEffect, useRef, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams, useNavigate, useLocation, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import {
  CheckCircle2,
  XCircle,
  Info,
} from 'lucide-react';
import { parentPackagesApi } from '@/shared/services/api/parentPackagesApi';
import { currenciesApi, parseExchangeRateData, resolvePackagePrice, resolveCurrencySymbol, formatCurrencyDisplay } from '@/shared/services/api/currenciesApi';
import ParentInvoiceModal from './components/ParentInvoiceModal';

function formatCurrency(amount, currency = '$', isRtl = true) {
  return formatCurrencyDisplay(amount, currency, isRtl);
}

function formatDate(dateVal) {
  if (!dateVal) return '-';
  try {
    const d = new Date(dateVal);
    if (isNaN(d.getTime())) return '-';
    return d.toISOString().split('T')[0];
  } catch {
    return String(dateVal);
  }
}

export default function ParentPaymentStatus() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language.startsWith('ar');
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const { data: exchangeRateRes } = useQuery({
    queryKey: ['currenciesExchangeRate'],
    queryFn: currenciesApi.fetchExchangeRate,
    staleTime: 1000 * 60 * 10,
  });
  const currencyInfo = useMemo(() => {
    if (exchangeRateRes) return parseExchangeRateData(exchangeRateRes);
    return { symbol: '$', exchangeRate: 1 };
  }, [exchangeRateRes]);

  const sessionId = searchParams.get('session_id') || searchParams.get('sessionId') || '';
  const querySubId = searchParams.get('subscriptionId') || searchParams.get('id') || searchParams.get('sub_id') || '';
  const storedSubId = localStorage.getItem('last_checkout_sub_id') || '';
  const subscriptionId = querySubId || storedSubId || sessionId || '';

  const pathnameLower = (location.pathname || '').toLowerCase();
  const isPathSuccess = pathnameLower.includes('success');
  const isPathCancel = pathnameLower.includes('cancel') || pathnameLower.includes('failed');

  const paymentParam = (searchParams.get('payment') || '').toLowerCase();
  const rawExplicitStatus = (searchParams.get('status') || searchParams.get('state') || searchParams.get('preview') || paymentParam || '').toLowerCase();
  const explicitStatus = rawExplicitStatus || (isPathSuccess ? 'success' : (isPathCancel ? 'failed' : ''));

  const [statusState, setStatusState] = useState(() => {
    if (explicitStatus === 'success' || explicitStatus === 'paid') return 'success';
    if (explicitStatus === 'verifying' || explicitStatus === 'loading') return 'verifying';
    if (explicitStatus === 'failed' || explicitStatus === 'cancelled' || explicitStatus === 'canceled') return 'failed';
    return subscriptionId ? 'verifying' : (isPathSuccess ? 'success' : 'failed');
  });
  const [subscriptionData, setSubscriptionData] = useState(null);
  const [isInvoiceModalOpen, setIsInvoiceModalOpen] = useState(false);
  const pollCountRef = useRef(0);
  const pollTimerRef = useRef(null);

  useEffect(() => {
    let isCancelled = false;
    const executeCheck = async () => {
      try {
        let data = null;
        const realId = querySubId || storedSubId;
        if (realId && !realId.startsWith('cs_')) {
          try {
            data = await parentPackagesApi.fetchSubscriptionDetails(realId);
          } catch (e) {
            console.warn('Could not fetch details by subscriptionId:', e);
          }
        }
        if (!data) {
          try {
            const listRes = await parentPackagesApi.fetchSubscriptions({ limit: 1 });
            const list = Array.isArray(listRes?.data) ? listRes.data : (Array.isArray(listRes) ? listRes : (listRes?.subscriptions || []));
            if (list.length > 0) {
              data = list[0];
            }
          } catch (e) {
            console.warn('Could not fetch latest subscription from list:', e);
          }
        }
        if (!data && subscriptionId && !subscriptionId.startsWith('cs_')) {
          data = await parentPackagesApi.fetchSubscriptionDetails(subscriptionId);
        }
        if (isCancelled) return;
        if (data) {
          const pkgId = data.packageId || data.package?.id || data.package?._id;
          if (pkgId && (!data.package?.sessionsCount || !data.package?.name)) {
            try {
              const pkgDetails = await parentPackagesApi.fetchPackageDetails(pkgId);
              if (pkgDetails) {
                data.package = { ...(pkgDetails || {}), ...(data.package || {}) };
              }
            } catch (err) {
              console.warn('Could not fetch full package details:', err);
            }
          }
          setSubscriptionData(data);
          const s = String(data?.status || '').toLowerCase();
          if (s === 'paid' || s === 'active' || s === 'completed') {
            setStatusState('success');
            localStorage.removeItem('last_checkout_sub_id');
            return;
          }
          if (s === 'failed' || s === 'cancelled' || s === 'canceled') {
            setStatusState('failed');
            return;
          }
        }
        if (explicitStatus === 'success' || explicitStatus === 'paid') {
          setStatusState('success');
          return;
        }
        if (pollCountRef.current < 5) {
          pollCountRef.current += 1;
          pollTimerRef.current = setTimeout(executeCheck, 2500);
        } else {
          setStatusState(explicitStatus === 'success' ? 'success' : 'failed');
        }
      } catch {
        if (!isCancelled) {
          if (explicitStatus === 'success' || explicitStatus === 'paid') {
            setStatusState('success');
            return;
          }
          if (pollCountRef.current < 3) {
            pollCountRef.current += 1;
            pollTimerRef.current = setTimeout(executeCheck, 2500);
          } else {
            setStatusState('failed');
          }
        }
      }
    };
    executeCheck();
    return () => {
      isCancelled = true;
      if (pollTimerRef.current) {
        clearTimeout(pollTimerRef.current);
      }
    };
  }, [subscriptionId, querySubId, storedSubId, explicitStatus]);

  const sub = useMemo(() => subscriptionData || {}, [subscriptionData]);
  const orderNumber =
    sub.orderNumber ||
    sub.subscriptionNumber ||
    (subscriptionId ? `RN-${String(subscriptionId).slice(-8).toUpperCase()}` : 'RN-20261027-1048');
  const transactionRef =
    sub.transactionRef ||
    sub.referenceNumber ||
    sub.stripePaymentIntentId ||
    (subscriptionId ? `TX-${String(subscriptionId).slice(-8).toUpperCase()}` : 'TX-20261027-1048');
  const studentName = (() => {
    if (Array.isArray(sub.students) && sub.students.length > 0) {
      return sub.students.map((st) => {
        if (!st) return '';
        const n = typeof st === 'object' ? (st.name || st.studentName || st.student?.name) : st;
        if (typeof n === 'object' && n !== null) return isRtl ? (n.ar || n.en || '') : (n.en || n.ar || '');
        return String(n || '');
      }).filter(Boolean).join('، ');
    }
    const directStudent = sub.student || sub.studentName;
    if (directStudent) {
      const n = typeof directStudent === 'object' ? (directStudent.name || directStudent) : directStudent;
      if (typeof n === 'object' && n !== null) return isRtl ? (n.ar || n.en || '') : (n.en || n.ar || '');
      return String(n);
    }
    return isRtl ? 'الطالب المستفيد' : 'Subscribed Student';
  })();
  const studentInitial = typeof studentName === 'string' && studentName.trim() ? studentName.trim().charAt(0) : 'م';
  const packageName = (() => {
    const raw = sub.package?.name || sub.packageName || sub.name;
    if (typeof raw === 'object' && raw !== null) return isRtl ? (raw.ar || raw.en || '') : (raw.en || raw.ar || '');
    if (raw && typeof raw === 'string') return raw;
    return isRtl ? 'الباقة المعتمدة' : 'Subscribed Package';
  })();
  const currencyRate = Number(currencyInfo?.exchangeRate || 1);
  const rawCurrency = sub.currency || sub.package?.currency || sub.paymentCurrency;
  const resolvedSymbol = resolveCurrencySymbol(rawCurrency);
  const currency = resolvedSymbol || resolveCurrencySymbol(currencyInfo?.symbol) || '$';
  const rawTotal = Number(sub.total ?? sub.finalAmount ?? sub.totalAmount ?? sub.amountPaid ?? 0);
  const rawTax = Number(sub.tax ?? sub.taxAmount ?? sub.vat ?? 0);
  const rawDiscount = Number(
    sub.discountAmount ??
    sub.discount ??
    sub.coupon?.discountAmount ??
    sub.couponDiscount ??
    sub.package?.discountAmount ??
    0
  );
  const rawSubtotalCandidate = Number(
    sub.baseAmount ??
    sub.subtotalAmount ??
    sub.subtotal ??
    sub.priceAfterDiscount ??
    sub.originalPrice ??
    sub.packagePrice ??
    sub.package?.price ??
    sub.amount ??
    sub.price ??
    0
  );
  let total = rawTotal;
  let tax = rawTax;
  let discount = rawDiscount;
  let price = rawSubtotalCandidate;
  if (total <= 0 && price > 0) {
    if (tax <= 0) {
      tax = Number((price * 0.05).toFixed(2));
    }
    total = price + tax - discount;
  } else if (total > 0 && price <= 0) {
    price = Math.max(0, total - tax + discount);
  } else if (total > 0 && price > 0 && Math.abs((price + tax - discount) - total) > 1) {
    price = Math.max(0, total - tax + discount);
  }
  const isUsdScale = currencyRate > 1 && currency !== '$' && currency !== 'USD' && total > 0;
  if (isUsdScale) {
    const convertedTotal = resolvePackagePrice(total, currencyInfo, sub.package ?? sub);
    const convRatio = total > 0 ? convertedTotal / total : 1;
    price = Math.round(price * convRatio);
    tax = Number((tax * convRatio).toFixed(2));
    total = convertedTotal;
    if (discount > 0) {
      discount = Math.round(discount * convRatio);
    }
  }
  const sessionsCount = Number(
    sub.sessionsPerStudent ??
    sub.package?.sessionsPerStudent ??
    sub.package?.sessionsCount ??
    sub.package?.monthlySessions ??
    sub.package?.sessions ??
    sub.sessionsCount ??
    sub.totalSessions ??
    sub.sessionsBalance?.total ??
    sub.sessions ??
    (Array.isArray(sub.students) && sub.students[0]?.sessionsBalance?.total ? sub.students[0].sessionsBalance.total : 0) ??
    12
  );
  const paymentDate = useMemo(() => {
    return formatDate(sub.paidAt || sub.paymentDate || sub.createdAt || new Date());
  }, [sub.paidAt, sub.paymentDate, sub.createdAt]);
  const subscriptionDate = useMemo(() => {
    return formatDate(sub.startDate || sub.startsAt || sub.paidAt || sub.paymentDate || sub.createdAt || new Date());
  }, [sub.startDate, sub.startsAt, sub.paidAt, sub.paymentDate, sub.createdAt]);
  const resolvedSubscription = useMemo(() => ({
    ...sub,
    subtotal: price,
    baseAmount: price,
    amount: price,
    tax,
    total,
    discount,
    currency,
    sessionsCount,
  }), [sub, price, tax, total, discount, currency, sessionsCount]);

  const handleRetryPayment = () => {
    const stripeUrl = sub.stripeUrl || sub.sessionUrl || sub.url || sub.checkoutUrl;
    if (stripeUrl) {
      window.location.assign(stripeUrl);
      return;
    }
    navigate('/dashboard/parent/checkout', {
      state: { package: sub.package || { id: sub.packageId, name: packageName, price } },
    });
  };

  return (
    <div className="min-h-[85vh] p-3 sm:p-6 lg:p-8 animate-fadeIn max-w-4xl mx-auto space-y-6" dir={isRtl ? 'rtl' : 'ltr'}>
      {statusState === 'verifying' && (
        <div className="space-y-6 text-start">
          <div className="space-y-1">
            <h1 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white">
              {t('parentPackages.verifyingTitle', 'التحقق من الدفع')}
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-500">
              {t('parentPackages.verifyingSubtitle', 'عدت إلى منارة العز أكاديمي بعد زيارة مزود الدفع.')}
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-100 dark:border-slate-800 shadow-soft text-center space-y-6">
            <div className="w-18 h-18 rounded-full bg-[#0f7a6c]/10 text-[#0f7a6c] dark:text-emerald-400 flex items-center justify-center mx-auto">
              <div className="w-9 h-9 border-3 border-[#0f7a6c] border-t-transparent rounded-full animate-spin" />
            </div>

            <div className="max-w-md mx-auto space-y-2">
              <h2 className="text-xl sm:text-2xl font-black text-slate-800 dark:text-white">
                {t('parentPackages.verifyingHeader', 'جارٍ التحقق من الدفع')}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                {t('parentPackages.verifyingDesc1', 'ننتظر تأكيد نتيجة الدفع من مزود الخدمة.')}
              </p>
              <p className="text-xs text-slate-400 dark:text-slate-500">
                {t('parentPackages.verifyingDesc2', 'لم يتم تأكيد التجديد بعد. ستظهر النتيجة هنا عند وصول التأكيد.')}
              </p>
            </div>

            <div className="max-w-lg mx-auto p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between items-center text-slate-600 dark:text-slate-400">
                <span>{t('parentPackages.orderNumber', 'رقم الطلب')}</span>
                <span className="font-mono font-bold text-slate-800 dark:text-white" dir="ltr">{orderNumber}</span>
              </div>
              <div className="flex justify-between items-center text-slate-600 dark:text-slate-400">
                <span>{t('parentPackages.subscription', 'الاشتراك')}</span>
                <span className="font-bold text-slate-800 dark:text-white">{studentName} • {packageName}</span>
              </div>
              <div className="pt-2 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center font-bold">
                <span className="text-slate-700 dark:text-slate-300">{t('parentPackages.total', 'الإجمالي')}</span>
                <span className="font-mono font-black text-[#0f7a6c] dark:text-emerald-400 text-base">
                  {formatCurrency(total, currency, isRtl)}
                </span>
              </div>
            </div>

            <div className="max-w-lg mx-auto p-3.5 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 flex items-center gap-2.5 text-xs text-amber-900 dark:text-amber-200 font-semibold text-start">
              <Info size={16} className="text-amber-600 dark:text-amber-400 shrink-0" />
              <span>{t('parentPackages.verifyingAlert', 'يرجى الانتظار وعدم محاولة الدفع مرة ثانية إلى أن تظهر نتيجة العملية.')}</span>
            </div>

            <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-400 dark:text-slate-500 pt-2">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span>{t('parentPackages.waitingProvider', 'في انتظار تأكيد مزود الدفع')}</span>
            </div>
          </div>
        </div>
      )}

      {statusState === 'success' && (
        <div className="space-y-6 text-start">
          <div className="space-y-1">
            <h1 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white">
              {t('parentPackages.successTitle', 'تم الدفع بنجاح')}
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-500">
              {t('parentPackages.successSubtitle', 'تم استلام الدفع وتجديد اشتراك ابنك.')}
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-100 dark:border-slate-800 shadow-soft text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 size={32} />
            </div>
            <div className="space-y-1 max-w-lg mx-auto">
              <h2 className="text-xl sm:text-2xl font-black text-slate-800 dark:text-white">
                {t('parentPackages.renewSuccessHeader', 'تم تجديد الاشتراك بنجاح')}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                {t('parentPackages.renewSuccessDesc', 'يمكن لـ {{name}} متابعة رحلته التعليمية مع {{pkg}}.', {
                  name: studentName,
                  pkg: packageName,
                })}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-soft space-y-4">
              <h3 className="text-base font-black text-slate-800 dark:text-white">
                {t('parentPackages.operationSummary', 'ملخص العملية')}
              </h3>
              <div className="space-y-2.5 text-xs sm:text-sm">
                <div className="flex justify-between items-center text-slate-500 dark:text-slate-400">
                  <span>{t('parentPackages.orderNumber', 'رقم الطلب')}</span>
                  <span className="font-mono font-bold text-slate-800 dark:text-white" dir="ltr">{orderNumber}</span>
                </div>
                <div className="flex justify-between items-center text-slate-500 dark:text-slate-400">
                  <span>{t('parentPackages.transactionRef', 'مرجع العملية')}</span>
                  <span className="font-mono font-bold text-slate-800 dark:text-white" dir="ltr">{transactionRef}</span>
                </div>
                <div className="flex justify-between items-center text-slate-500 dark:text-slate-400">
                  <span>{t('parentPackages.paymentDate', 'تاريخ الدفع')}</span>
                  <span className="font-bold text-slate-700 dark:text-slate-200">{paymentDate}</span>
                </div>
                <div className="flex justify-between items-center text-slate-500 dark:text-slate-400">
                  <span>{t('parentPackages.student', 'الابن')}</span>
                  <span className="font-bold text-slate-800 dark:text-white">{studentName}</span>
                </div>
                <div className="flex justify-between items-center text-slate-500 dark:text-slate-400">
                  <span>{t('parentPackages.package', 'الباقة')}</span>
                  <span className="font-bold text-slate-800 dark:text-white">{packageName}</span>
                </div>
                <div className="flex justify-between items-center text-slate-500 dark:text-slate-400">
                  <span>{t('parentPackages.amount', 'المبلغ')}</span>
                  <span className="font-bold font-mono text-slate-800 dark:text-white">{formatCurrency(price, currency, isRtl)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between items-center text-emerald-600 dark:text-emerald-400">
                    <span>{t('parentPackages.discount', 'الخصم')}</span>
                    <span className="font-bold font-mono">-{formatCurrency(discount, currency, isRtl)}</span>
                  </div>
                )}
                <div className="flex justify-between items-center text-slate-500 dark:text-slate-400">
                  <span>{t('parentPackages.tax', 'الضريبة')}</span>
                  <span className="font-bold font-mono text-slate-800 dark:text-white">{formatCurrency(tax, currency, isRtl)}</span>
                </div>
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                  <span className="font-black text-slate-800 dark:text-white">{t('parentPackages.totalPaid', 'الإجمالي المدفوع')}</span>
                  <span className="font-black font-mono text-[#0f7a6c] dark:text-emerald-400 text-lg">
                    {formatCurrency(total, currency, isRtl)}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsInvoiceModalOpen(true)}
                className="w-full py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
              >
                {t('parentPackages.viewReceipt', 'عرض الإيصال')}
              </button>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-soft space-y-4">
              <h3 className="text-base font-black text-slate-800 dark:text-white">
                {t('parentPackages.renewedDetails', 'تفاصيل الاشتراك المجدد')}
              </h3>
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                <div className="w-10 h-10 rounded-full bg-[#0f7a6c] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  {studentInitial}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 dark:text-white">{studentName}</h4>
                  <p className="text-[11px] text-slate-400 dark:text-slate-500">
                    {t('parentPackages.studentOwnerSubtitle', 'الابن صاحب الاشتراك • القرآن الكريم')}
                  </p>
                </div>
              </div>
              <div className="space-y-2.5 text-xs sm:text-sm">
                <div className="flex justify-between items-center text-slate-500 dark:text-slate-400">
                  <span>{t('parentPackages.package', 'الباقة')}</span>
                  <span className="font-bold text-slate-800 dark:text-white">{packageName}</span>
                </div>
                <div className="flex justify-between items-center text-slate-500 dark:text-slate-400">
                  <span>{t('parentPackages.subscriptionDate', 'تاريخ الاشتراك')}</span>
                  <span className="font-bold text-slate-800 dark:text-white font-mono">{subscriptionDate}</span>
                </div>
                <div className="flex justify-between items-center text-slate-500 dark:text-slate-400">
                  <span>{t('parentPackages.monthlySessions', 'الحصص الشهرية')}</span>
                  <span className="font-bold text-slate-800 dark:text-white font-mono">
                    {sessionsCount} {t('parentPackages.sessionsUnit', 'حصة شهرياً')}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#0f7a6c]/10 dark:bg-emerald-950/30 border border-[#0f7a6c]/20 dark:border-emerald-800/40 flex items-center gap-2.5 text-xs font-bold text-[#0f7a6c] dark:text-emerald-300">
            <Info size={16} className="shrink-0" />
            <span>{t('parentPackages.nextStepSchedule', 'خطوتك التالية: راجع جدول ابنك لمعرفة مواعيد حصصه القادمة.')}</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => navigate('/dashboard/parent/schedule')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-[#0f7a6c] hover:bg-[#0c6156] text-white text-xs sm:text-sm font-bold transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              {t('parentPackages.viewChildSchedule', 'عرض جدول الابن')}
            </button>
            <button
              type="button"
              onClick={() => navigate('/dashboard/parent')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-bold transition-colors cursor-pointer"
            >
              {t('parentPackages.parentDashboardBtn', 'لوحة التحكم')}
            </button>
          </div>
        </div>
      )}

      {statusState === 'failed' && (
        <div className="space-y-6 text-start">
          <div className="space-y-1">
            <h1 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white">
              {t('parentPackages.failedTitle', 'لم يكتمل الدفع')}
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-500">
              {t('parentPackages.failedSubtitle', 'عدت إلى منارة العز أكاديمي دون إتمام عملية الدفع.')}
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-100 dark:border-slate-800 shadow-soft text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800/60 flex items-center justify-center mx-auto shadow-sm">
              <XCircle size={32} />
            </div>

            <div className="max-w-md mx-auto space-y-2">
              <h2 className="text-xl sm:text-2xl font-black text-slate-800 dark:text-white">
                {t('parentPackages.failedHeader', 'لم يتم تجديد الاشتراك')}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                {t('parentPackages.failedDesc', 'لم تصلنا نتيجة دفع ناجحة من مزود الدفع لهذا الطلب. يمكنك إعادة المحاولة أو العودة لملخص الطلب وتغيير الباقة.')}
              </p>
            </div>

            <div className="max-w-lg mx-auto p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 space-y-3 text-xs sm:text-sm text-start">
              <div className="flex justify-between items-center text-slate-600 dark:text-slate-400">
                <span>{t('parentPackages.orderNumber', 'رقم الطلب')}</span>
                <span className="font-mono font-bold text-slate-800 dark:text-white" dir="ltr">{orderNumber}</span>
              </div>
              <div className="flex justify-between items-center text-slate-600 dark:text-slate-400">
                <span>{t('parentPackages.student', 'الابن')}</span>
                <span className="font-bold text-slate-800 dark:text-white">{studentName}</span>
              </div>
              <div className="flex justify-between items-center text-slate-600 dark:text-slate-400">
                <span>{t('parentPackages.package', 'الباقة')}</span>
                <span className="font-bold text-slate-800 dark:text-white">{packageName} • شهر واحد</span>
              </div>
              <div className="pt-2 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center font-bold">
                <span className="text-slate-700 dark:text-slate-300">{t('parentPackages.orderTotal', 'إجمالي الطلب')}</span>
                <span className="font-mono font-black text-[#0f7a6c] dark:text-emerald-400 text-base">
                  {formatCurrency(total, currency, isRtl)}
                </span>
              </div>
            </div>

            <div className="max-w-lg mx-auto p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-300 text-start">
              <Info size={16} className="text-slate-400 shrink-0" />
              <span>{t('parentPackages.failedNotice', 'هذه ليست حالة انتظار تأكيد. إذا ظهر خصم في حسابك، تواصل مع الدعم برقم الطلب للتحقق قبل إعادة المحاولة.')}</span>
            </div>

            <div className="max-w-lg mx-auto flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleRetryPayment}
                className="w-full sm:flex-1 py-3.5 rounded-2xl bg-[#0f7a6c] hover:bg-[#0c6156] text-white text-xs sm:text-sm font-bold transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                {t('parentPackages.retryPaymentBtn', 'إعادة المحاولة • {{amount}}', {
                  amount: formatCurrency(total, currency, isRtl),
                })}
              </button>
              <button
                type="button"
                onClick={() => navigate('/dashboard/parent/checkout', { state: { package: sub.package } })}
                className="w-full sm:flex-1 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-bold transition-colors cursor-pointer"
              >
                {t('parentPackages.backToSummary', 'العودة لملخص الطلب')}
              </button>
            </div>

            <div>
              <Link
                to="/dashboard/parent/packages"
                className="text-xs font-bold text-[#0f7a6c] dark:text-emerald-400 hover:underline"
              >
                {t('parentPackages.changePackageLink', 'تغيير الباقة')}
              </Link>
            </div>
          </div>
        </div>
      )}

      <ParentInvoiceModal
        isOpen={isInvoiceModalOpen}
        onClose={() => setIsInvoiceModalOpen(false)}
        subscriptionId={subscriptionId}
        initialData={resolvedSubscription}
        currencyInfo={currencyInfo}
        t={t}
        isRtl={isRtl}
      />
    </div>
  );
}
