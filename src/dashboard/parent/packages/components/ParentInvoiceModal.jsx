import { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { useQuery } from '@tanstack/react-query';
import {
  X,
  Receipt,
  CheckCircle2,
  Clock,
  XCircle,
  AlertTriangle,
  Calendar,
  Layers,
  CreditCard,
  User,
  Users,
  ShieldCheck,
} from 'lucide-react';
import { parentPackagesApi } from '@/shared/services/api/parentPackagesApi';
import { currenciesApi, parseExchangeRateData, resolvePackagePrice, resolveCurrencySymbol } from '@/shared/services/api/currenciesApi';
import Spinner from '@/shared/components/Spinner';

function formatCurrency(amount, currency = '$') {
  const num = Number(amount || 0);
  const formattedNum = num.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
  const sym = resolveCurrencySymbol(currency) || currency || '$';
  if (sym === '$') {
    return `$${formattedNum}`;
  }
  return `${formattedNum} ${sym}`;
}

function formatDate(dateVal, isRtl = true) {
  if (!dateVal) return '-';
  try {
    return new Date(dateVal).toLocaleDateString(isRtl ? 'ar-EG' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return String(dateVal);
  }
}

function getStatusBadge(status, t) {
  const s = String(status || '').toLowerCase();
  if (s === 'paid' || s === 'active' || s === 'completed') {
    return {
      label: t('parentPackages.statusPaid', 'مدفوع ومفعل'),
      bg: 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200/60 dark:border-emerald-800/40',
      icon: CheckCircle2,
    };
  }
  if (s === 'pending') {
    return {
      label: t('parentPackages.statusPending', 'في انتظار الدفع'),
      bg: 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border-amber-200/60 dark:border-amber-800/40',
      icon: Clock,
    };
  }
  if (s === 'cancelled' || s === 'canceled') {
    return {
      label: t('parentPackages.statusCancelled', 'ملغي'),
      bg: 'bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border-rose-200/60 dark:border-rose-800/40',
      icon: XCircle,
    };
  }
  return {
    label: t('parentPackages.statusExpired', 'منتهي'),
    bg: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700',
    icon: AlertTriangle,
  };
}

export default function ParentInvoiceModal({
  isOpen,
  onClose,
  subscriptionId,
  initialData,
  currencyInfo: propCurrencyInfo,
  t,
  isRtl = true,
}) {
  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);
  const { data: exchangeRateRes } = useQuery({
    queryKey: ['currenciesExchangeRate'],
    queryFn: currenciesApi.fetchExchangeRate,
    staleTime: 1000 * 60 * 10,
    enabled: Boolean(isOpen && !propCurrencyInfo),
  });
  const currencyInfo = useMemo(() => {
    if (propCurrencyInfo) return propCurrencyInfo;
    if (exchangeRateRes) return parseExchangeRateData(exchangeRateRes);
    return { symbol: '$', exchangeRate: 1 };
  }, [propCurrencyInfo, exchangeRateRes]);
  const { data: detailsRes, isLoading } = useQuery({
    queryKey: ['parentSubscriptionDetails', subscriptionId],
    queryFn: () => parentPackagesApi.fetchSubscriptionDetails(subscriptionId),
    enabled: Boolean(isOpen && subscriptionId),
    staleTime: 60 * 1000,
  });
  const rawSub = detailsRes?.subscription || detailsRes?.data || detailsRes || initialData || {};
  const sub = rawSub?.subscription || rawSub;
  const pkgId = sub.packageId || sub.package?.id || sub.package?._id;
  const { data: pkgDetails } = useQuery({
    queryKey: ['parentInvoicePackageDetails', pkgId],
    queryFn: () => parentPackagesApi.fetchPackageDetails(pkgId),
    enabled: Boolean(isOpen && pkgId && !sub.package?.sessionsCount),
    staleTime: 5 * 60 * 1000,
  });
  const resolvedPackage = useMemo(() => {
    if (pkgDetails) return { ...(pkgDetails || {}), ...(sub.package || {}) };
    return sub.package || {};
  }, [pkgDetails, sub.package]);
  if (!isOpen || typeof document === 'undefined') return null;
  const statusInfo = getStatusBadge(sub.status, t);
  const StatusIcon = statusInfo.icon;
  const orderNumber = sub.orderNumber || sub.subscriptionNumber || sub.invoiceNumber || (subscriptionId ? `RN-${String(subscriptionId).slice(-8).toUpperCase()}` : '-');
  const transactionRef = sub.transactionRef || sub.referenceNumber || sub.stripePaymentIntentId || sub.paymentId || (subscriptionId ? `TX-${String(subscriptionId).slice(-8).toUpperCase()}` : '-');
  const paymentDate = sub.paidAt || sub.paymentDate || sub.createdAt || sub.updatedAt;
  const packageName = resolvedPackage?.name || sub.package?.name || sub.packageName || t('parentPackages.package', 'الباقة');
  const packageType = resolvedPackage?.type || sub.package?.type || (Array.isArray(sub.students) && sub.students.length > 1 ? 'family' : 'individual');
  const studentNames = (() => {
    if (Array.isArray(sub.students) && sub.students.length > 0) {
      return sub.students.map((st) => (typeof st.name === 'object' ? st.name.ar || st.name.en : st.name || st.studentName)).filter(Boolean).join('، ');
    }
    if (sub.student?.name) {
      return typeof sub.student.name === 'object' ? sub.student.name.ar || sub.student.name.en : sub.student.name;
    }
    if (sub.studentName) return sub.studentName;
    return t('parentPackages.student', 'الابن');
  })();
  const currencyRate = Number(currencyInfo?.exchangeRate || 1);
  const rawCurrency = sub.currency || sub.package?.currency || sub.paymentCurrency;
  const resolvedSymbol = resolveCurrencySymbol(rawCurrency);
  const currency = resolvedSymbol || resolveCurrencySymbol(currencyInfo?.symbol) || '$';
  const rawTax = Number(sub.tax ?? sub.taxAmount ?? sub.vat ?? 0);
  const explicitTotal = Number(sub.total ?? sub.finalAmount ?? sub.totalAmount ?? sub.amountPaid ?? 0);
  const explicitDiscount = Number(
    sub.discountAmount ??
    sub.discount ??
    sub.coupon?.discountAmount ??
    sub.couponDiscount ??
    sub.package?.discountAmount ??
    sub.package?.discount ??
    0
  );
  const explicitPriceAfterDiscount = Number(
    sub.priceAfterDiscount ??
    sub.package?.priceAfterDiscount ??
    sub.subtotalAfterDiscount ??
    sub.amountAfterDiscount ??
    0
  );
  const rawAmount = Number(
    sub.baseAmount ??
    sub.subtotalAmount ??
    sub.subtotal ??
    sub.originalPrice ??
    sub.packagePrice ??
    sub.package?.originalPrice ??
    sub.package?.price ??
    sub.amount ??
    0
  );
  let discount = explicitDiscount;
  let priceAfterDiscount = explicitPriceAfterDiscount;
  let amount = rawAmount;
  let tax = rawTax;
  let total = explicitTotal;
  if (total <= 0) {
    total = amount + tax - discount;
  }
  if (amount <= 0 && total > 0) {
    amount = Math.max(0, total - tax + discount);
  }
  if (total > 0 && amount > 0 && Math.abs((amount + tax - discount) - total) > 1) {
    amount = Math.max(0, total - tax + discount);
  }
  if (discount > 0 && priceAfterDiscount <= 0 && amount > discount) {
    priceAfterDiscount = amount - discount;
  } else if (priceAfterDiscount > 0 && discount <= 0 && amount > priceAfterDiscount) {
    discount = amount - priceAfterDiscount;
  }
  const isUsdScale = currencyRate > 1 && currency !== '$' && currency !== 'USD' && total > 0;
  if (isUsdScale) {
    const convertedTotal = resolvePackagePrice(total, currencyInfo, sub.package ?? sub);
    const convRatio = total > 0 ? convertedTotal / total : 1;
    amount = Math.round(amount * convRatio);
    tax = Number((tax * convRatio).toFixed(2));
    total = convertedTotal;
    if (discount > 0) discount = Math.round(discount * convRatio);
    if (priceAfterDiscount > 0) priceAfterDiscount = Math.round(priceAfterDiscount * convRatio);
  }
  const sessionsCount = Number(
    sub.sessionsPerStudent ??
    resolvedPackage?.sessionsPerStudent ??
    resolvedPackage?.sessionsCount ??
    resolvedPackage?.monthlySessions ??
    resolvedPackage?.sessions ??
    sub.sessionsCount ??
    sub.totalSessions ??
    sub.sessionsBalance?.total ??
    sub.sessions ??
    (Array.isArray(sub.students) && sub.students[0]?.sessionsBalance?.total ? sub.students[0].sessionsBalance.total : 0)
  );
  return createPortal(
    <div
      onClick={onClose}
      className="fixed inset-0 w-screen h-screen min-h-screen z-[99999] flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col max-h-[92vh] text-start relative z-10 print:max-h-none print:shadow-none print:border-none"
      >
        <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0 bg-slate-50/70 dark:bg-slate-800/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#0f7a6c]/10 text-[#0f7a6c] dark:text-emerald-400 flex items-center justify-center font-bold">
              <Receipt size={20} />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-slate-800 dark:text-white">
                {t('parentPackages.invoiceTitle', 'تفاصيل فاتورة الاشتراك')}
              </h3>
              <p className="text-xs text-slate-400 dark:text-slate-500 font-mono mt-0.5" dir="ltr">
                {orderNumber}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>
        </div>
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {isLoading && !sub.id ? (
            <div className="py-16 flex flex-col items-center justify-center gap-3">
              <Spinner size="lg" />
              <p className="text-xs text-slate-400 font-bold">{t('common.loading', 'جاري تحميل التفاصيل...')}</p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between flex-wrap gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 block">
                    {t('parentPackages.invoiceStatus', 'حالة الفاتورة والاشتراك')}
                  </span>
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${statusInfo.bg}`}>
                    <StatusIcon size={14} />
                    <span>{statusInfo.label}</span>
                  </span>
                </div>
                <div className="text-end space-y-1">
                  <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 block">
                    {t('parentPackages.paymentDate', 'تاريخ العملية')}
                  </span>
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                    <Calendar size={13} className="text-[#0f7a6c]" />
                    <span>{formatDate(paymentDate, isRtl)}</span>
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-3">
                  <h4 className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase flex items-center gap-1.5">
                    <Layers size={14} className="text-[#0f7a6c]" />
                    <span>{t('parentPackages.subscriptionDetails', 'بيانات الباقة والاشتراك')}</span>
                  </h4>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-500">{t('parentPackages.package', 'الباقة')}:</span>
                      <span className="font-bold text-slate-800 dark:text-white">{packageName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">{t('parentPackages.packageType', 'نوع الباقة')}:</span>
                      <span className="font-bold text-slate-700 dark:text-slate-200">
                        {packageType === 'family' ? t('parentPackages.familyType', 'عائلية') : t('parentPackages.individualType', 'فردية')}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">{t('parentPackages.studentSessionsCount', 'عدد الحصص للطالب')}:</span>
                      <span className="font-bold text-slate-800 dark:text-white">
                        {sessionsCount > 0 ? `${sessionsCount} ${t('common.session', 'حصة')}` : '-'}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-3">
                  <h4 className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase flex items-center gap-1.5">
                    {packageType === 'family' ? <Users size={14} className="text-[#0f7a6c]" /> : <User size={14} className="text-[#0f7a6c]" />}
                    <span>{t('parentPackages.subscribers', 'الطلاب المستفيدون')}</span>
                  </h4>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-500">{t('parentPackages.student', 'الابن / الأبناء')}:</span>
                      <span className="font-bold text-slate-800 dark:text-white">{studentNames}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">{t('parentPackages.paymentMethod', 'وسيلة الدفع')}:</span>
                      <span className="font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1">
                        <CreditCard size={13} className="text-blue-500" />
                        <span>Stripe (بطاقة ائتمان)</span>
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">{t('parentPackages.transactionRef', 'مرجع العملية')}:</span>
                      <span className="font-mono font-bold text-slate-800 dark:text-white text-[11px]" dir="ltr">
                        {transactionRef}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 space-y-2.5">
                <h4 className="text-xs font-black text-slate-700 dark:text-slate-300">
                  {t('parentPackages.financialSummary', 'الملخص المالي')}
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between text-slate-600 dark:text-slate-400">
                    <span>{t('parentPackages.amount', 'المبلغ')}</span>
                    <span className="font-bold font-mono">{formatCurrency(amount, currency)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-emerald-600 dark:text-emerald-400">
                      <span>{t('parentPackages.discount', 'الخصم')}</span>
                      <span className="font-bold font-mono">-{formatCurrency(discount, currency)}</span>
                    </div>
                  )}
                  {priceAfterDiscount > 0 && (
                    <div className="flex justify-between text-slate-600 dark:text-slate-400">
                      <span>{t('parentPackages.priceAfterDiscount', 'السعر بعد الخصم')}</span>
                      <span className="font-bold font-mono">{formatCurrency(priceAfterDiscount, currency)}</span>
                    </div>
                  )}
                  {tax > 0 && (
                    <div className="flex justify-between text-slate-600 dark:text-slate-400">
                      <span>{t('parentPackages.tax', 'الضريبة')}</span>
                      <span className="font-bold font-mono">+{formatCurrency(tax, currency)}</span>
                    </div>
                  )}
                  <div className="pt-2 border-t border-slate-200 dark:border-slate-700 flex justify-between text-sm">
                    <span className="font-black text-slate-800 dark:text-white">{t('parentPackages.total', 'الإجمالي')}</span>
                    <span className="font-black font-mono text-[#0f7a6c] dark:text-emerald-400 text-base">
                      {formatCurrency(total, currency)}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-slate-400 dark:text-slate-500 justify-center">
                <ShieldCheck size={14} className="text-emerald-500" />
                <span>{t('parentPackages.verifiedTransactionNotice', 'عملية دفع إلكترونية آمنة ومسجلة في أكاديمية منارة العز')}</span>
              </div>
            </>
          )}
        </div>
        <div className="px-6 py-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end bg-slate-50/40 dark:bg-slate-800/20">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
          >
            {t('common.close', 'إغلاق')}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
