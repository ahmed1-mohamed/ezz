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
import {
  currenciesApi,
  parseExchangeRateData,
  resolvePackagePrice,
  resolveCurrencySymbol,
  formatCurrencyDisplay,
} from '@/shared/services/api/currenciesApi';
import Spinner from '@/shared/components/Spinner';

function formatCurrency(amount, currency = '$', isRtl = true) {
  return formatCurrencyDisplay(amount, currency, isRtl);
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

function getStatusBadge(status, t, isRtl = true) {
  const s = String(status || '').toLowerCase();
  if (s === 'paid' || s === 'active' || s === 'completed') {
    return {
      label: t('parentPackages.statusPaid', isRtl ? 'مدفوع ومفعل' : 'Paid in Full'),
      bg: 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200/60 dark:border-emerald-800/40',
      icon: CheckCircle2,
    };
  }
  if (s === 'pending') {
    return {
      label: t('parentPackages.statusPending', isRtl ? 'في انتظار الدفع' : 'Pending Payment'),
      bg: 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border-amber-200/60 dark:border-amber-800/40',
      icon: Clock,
    };
  }
  if (s === 'cancelled' || s === 'canceled') {
    return {
      label: t('parentPackages.statusCancelled', isRtl ? 'ملغي' : 'Cancelled'),
      bg: 'bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border-rose-200/60 dark:border-rose-800/40',
      icon: XCircle,
    };
  }
  return {
    label: t('parentPackages.statusExpired', isRtl ? 'منتهي' : 'Expired'),
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
  const statusInfo = getStatusBadge(sub.status, t, isRtl);
  const StatusIcon = statusInfo.icon;
  const orderNumber = sub.orderNumber || sub.subscriptionNumber || sub.invoiceNumber || (subscriptionId ? `RN-${String(subscriptionId).slice(-8).toUpperCase()}` : '-');
  const transactionRef = sub.transactionRef || sub.referenceNumber || sub.stripePaymentIntentId || sub.paymentId || (subscriptionId ? `TX-${String(subscriptionId).slice(-8).toUpperCase()}` : '-');
  const paymentDate = sub.paidAt || sub.paymentDate || sub.createdAt || sub.updatedAt;
  const packageName = resolvedPackage?.name || sub.package?.name || sub.packageName || t('parentPackages.package', 'الباقة');
  const packageType = resolvedPackage?.type || sub.package?.type || (Array.isArray(sub.students) && sub.students.length > 1 ? 'family' : 'individual');
  const studentNames = (() => {
    if (Array.isArray(sub.students) && sub.students.length > 0) {
      return sub.students.map((st) => (typeof st.name === 'object' ? (isRtl ? st.name.ar || st.name.en : st.name.en || st.name.ar) : st.name || st.studentName)).filter(Boolean).join(isRtl ? '، ' : ', ');
    }
    if (sub.student?.name) {
      return typeof sub.student.name === 'object' ? sub.student.name.ar || sub.student.name.en : sub.student.name;
    }
    if (sub.studentName) return sub.studentName;
    return t('parentPackages.student', isRtl ? 'الابن' : 'Student');
  })();
  const currencyRate = Number(currencyInfo?.exchangeRate || 1);
  const currency = currencyInfo?.symbol || '$';
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
  const shouldConvert = currencyRate > 0 && currencyRate !== 1 && total > 0;
  if (shouldConvert) {
    total = Math.round(total * currencyRate);
    amount = Math.round(amount * currencyRate);
    tax = Number((tax * currencyRate).toFixed(2));
    if (discount > 0) discount = Math.round(discount * currencyRate);
    if (priceAfterDiscount > 0) priceAfterDiscount = Math.round(priceAfterDiscount * currencyRate);
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
                {t('parentPackages.invoiceTitle', isRtl ? 'تفاصيل فاتورة الاشتراك' : 'Subscription Renewal Invoice')}
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
              <p className="text-xs text-slate-400 font-bold">{t('common.loading', isRtl ? 'جاري تحميل التفاصيل...' : 'Loading details...')}</p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between flex-wrap gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 block">
                    {t('parentPackages.invoiceStatus', isRtl ? 'حالة الفاتورة والاشتراك' : 'Invoice & Subscription Status')}
                  </span>
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${statusInfo.bg}`}>
                    <StatusIcon size={14} />
                    <span>{statusInfo.label}</span>
                  </span>
                </div>
                <div className="text-end space-y-1">
                  <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 block">
                    {t('parentPackages.paymentDate', isRtl ? 'تاريخ العملية' : 'Transaction Date')}
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
                    <span>{t('parentPackages.subscriptionDetails', isRtl ? 'بيانات الباقة والاشتراك' : 'Package & Subscription Details')}</span>
                  </h4>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-500">{t('parentPackages.package', isRtl ? 'الباقة' : 'Package')}:</span>
                      <span className="font-bold text-slate-800 dark:text-white">{packageName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">{t('parentPackages.packageType', isRtl ? 'نوع الباقة' : 'Package Type')}:</span>
                      <span className="font-bold text-slate-700 dark:text-slate-200">
                        {packageType === 'family' ? t('parentPackages.familyType', isRtl ? 'عائلية' : 'Family') : t('parentPackages.individualType', isRtl ? 'فردية' : 'Individual')}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">{t('parentPackages.studentSessionsCount', isRtl ? 'عدد الحصص للطالب' : 'Sessions per Student')}:</span>
                      <span className="font-bold text-slate-800 dark:text-white">
                        {sessionsCount > 0 ? `${sessionsCount} ${t('common.session', isRtl ? 'حصة' : 'Sessions')}` : '-'}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-3">
                  <h4 className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase flex items-center gap-1.5">
                    {packageType === 'family' ? <Users size={14} className="text-[#0f7a6c]" /> : <User size={14} className="text-[#0f7a6c]" />}
                    <span>{t('parentPackages.subscribers', isRtl ? 'الطلاب المستفيدون' : 'Subscribed Students')}</span>
                  </h4>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-500">{t('parentPackages.student', isRtl ? 'الابن / الأبناء' : 'Student(s)')}:</span>
                      <span className="font-bold text-slate-800 dark:text-white">{studentNames}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">{t('parentPackages.paymentMethod', 'وسيلة الدفع')}:</span>
                      <span className="font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1">
                        <CreditCard size={13} className="text-blue-500" />
                        <span>{isRtl ? 'Stripe (بطاقة ائتمان)' : 'Stripe (Credit Card)'}</span>
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">{t('parentPackages.transactionRef', isRtl ? 'مرجع العملية' : 'Transaction Reference')}:</span>
                      <span className="font-mono font-bold text-slate-800 dark:text-white text-[11px]" dir="ltr">
                        {transactionRef}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 space-y-2.5">
                <h4 className="text-xs font-black text-slate-700 dark:text-slate-300">
                  {t('parentPackages.financialSummary', isRtl ? 'الملخص المالي' : 'Financial Summary')}
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between text-slate-600 dark:text-slate-400">
                    <span>{t('parentPackages.amount', isRtl ? 'المبلغ' : 'Amount')}</span>
                    <span className="font-bold font-mono">{formatCurrency(amount, currency, isRtl)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-emerald-600 dark:text-emerald-400">
                      <span>{t('parentPackages.discount', isRtl ? 'الخصم' : 'Discount')}</span>
                      <span className="font-bold font-mono">-{formatCurrency(discount, currency, isRtl)}</span>
                    </div>
                  )}
                  {priceAfterDiscount > 0 && (
                    <div className="flex justify-between text-slate-600 dark:text-slate-400">
                      <span>{t('parentPackages.priceAfterDiscount', isRtl ? 'السعر بعد الخصم' : 'Price after discount')}</span>
                      <span className="font-bold font-mono">{formatCurrency(priceAfterDiscount, currency, isRtl)}</span>
                    </div>
                  )}
                  {tax > 0 && (
                    <div className="flex justify-between text-slate-600 dark:text-slate-400">
                      <span>{t('parentPackages.tax', isRtl ? 'الضريبة' : 'Tax / VAT')}</span>
                      <span className="font-bold font-mono">+{formatCurrency(tax, currency, isRtl)}</span>
                    </div>
                  )}
                  <div className="pt-2 border-t border-slate-200 dark:border-slate-700 flex justify-between text-sm">
                    <span className="font-black text-slate-800 dark:text-white">{t('parentPackages.total', isRtl ? 'الإجمالي' : 'Total')}</span>
                    <span className="font-black font-mono text-[#0f7a6c] dark:text-emerald-400 text-base">
                      {formatCurrency(total, currency, isRtl)}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-slate-400 dark:text-slate-500 justify-center">
                <ShieldCheck size={14} className="text-emerald-500" />
                <span>{t('parentPackages.verifiedTransactionNotice', isRtl ? 'عملية دفع إلكترونية آمنة ومسجلة في أكاديمية منارة العز' : 'Verified and secure electronic transaction via official payment gateways')}</span>
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
            {t('common.close', isRtl ? 'إغلاق' : 'Close')}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
