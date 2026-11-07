import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import useDebounce from '@/shared/hooks/useDebounce';
import {
  Receipt,
  RefreshCw,
  Search,
  Clock,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  CreditCard,
  Eye,
  ChevronLeft,
  ChevronRight,
  Calendar,
  User,
  Users,
} from 'lucide-react';
import { parentPackagesApi } from '@/shared/services/api/parentPackagesApi';
import ParentPackageNavTabs from './components/ParentPackageNavTabs';
import ParentInvoiceModal from './components/ParentInvoiceModal';
import Spinner from '@/shared/components/Spinner';

const STATUS_FILTERS = [
  { id: 'all', labelKey: 'parentPackages.filters.all', defaultLabel: 'الكل' },
  { id: 'pending', labelKey: 'parentPackages.filters.pending', defaultLabel: 'قيد الدفع' },
  { id: 'paid', labelKey: 'parentPackages.filters.paid', defaultLabel: 'مدفوعة' },
  { id: 'expired', labelKey: 'parentPackages.filters.expired', defaultLabel: 'منتهية' },
  { id: 'cancelled', labelKey: 'parentPackages.filters.cancelled', defaultLabel: 'ملغية' },
];

function formatCurrency(amount, currency = 'ج.م') {
  const num = Number(amount || 0);
  return `${num.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 })} ${currency}`;
}

function formatDate(dateVal, isRtl = true) {
  if (!dateVal) return '-';
  try {
    return new Date(dateVal).toLocaleDateString(isRtl ? 'ar-EG' : 'en-US', {
      year: 'numeric',
      month: 'short',
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
      label: t('parentPackages.statusPaid', 'مدفوع'),
      bg: 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200/60 dark:border-emerald-800/40',
      icon: CheckCircle2,
    };
  }
  if (s === 'pending') {
    return {
      label: t('parentPackages.statusPending', 'قيد الدفع'),
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

export default function ParentSubscriptions() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language.startsWith('ar');
  const queryClient = useQueryClient();
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearch = useDebounce(searchQuery, 350);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const queryParams = useMemo(() => {
    const params = {
      page: currentPage,
      limit: 10,
    };
    if (selectedStatus !== 'all') {
      params.status = selectedStatus;
    }
    if (debouncedSearch.trim()) {
      params.search = debouncedSearch.trim();
    }
    return params;
  }, [currentPage, selectedStatus, debouncedSearch]);
  const {
    data: subscriptionsRes,
    isLoading,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ['parentSubscriptionsList', queryParams],
    queryFn: () => parentPackagesApi.fetchSubscriptions(queryParams),
    staleTime: 60 * 1000,
  });
  const rawList = useMemo(() => {
    if (!subscriptionsRes) return [];
    if (Array.isArray(subscriptionsRes.data)) return subscriptionsRes.data;
    if (Array.isArray(subscriptionsRes.subscriptions)) return subscriptionsRes.subscriptions;
    if (Array.isArray(subscriptionsRes)) return subscriptionsRes;
    return [];
  }, [subscriptionsRes]);
  const pagination = useMemo(() => {
    return {
      total: subscriptionsRes?.total || rawList.length,
      pages: subscriptionsRes?.pages || 1,
      page: subscriptionsRes?.page || currentPage,
    };
  }, [subscriptionsRes, rawList.length, currentPage]);
  const filteredList = rawList;
  const handleRefresh = () => {
    queryClient.invalidateQueries({ queryKey: ['parentSubscriptionsList'] });
    refetch();
  };
  const handlePayPending = (sub) => {
    const stripeUrl = sub.stripeUrl || sub.sessionUrl || sub.url || sub.checkoutUrl;
    if (stripeUrl) {
      window.location.assign(stripeUrl);
      return;
    }
    if (sub.package?.id || sub.packageId) {
      const packageId = sub.package?.id || sub.packageId;
      const studentIds = Array.isArray(sub.studentIds) && sub.studentIds.length > 0
        ? sub.studentIds
        : (sub.student?.id ? [sub.student.id] : []);
      parentPackagesApi.createCheckout({ packageId, studentIds })
        .then((res) => {
          const url = res?.url || res?.sessionUrl;
          if (url) {
            window.location.assign(url);
          }
        })
        .catch(() => {});
    }
  };
  return (
    <div className="space-y-6 sm:space-y-8 animate-fadeIn p-3 sm:p-6 lg:p-8" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-start">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white flex items-center gap-3">
            <div className="p-2.5 bg-[#0f7a6c]/10 dark:bg-[#0f7a6c]/20 rounded-2xl text-[#0f7a6c] dark:text-emerald-400">
              <Receipt size={26} />
            </div>
            {t('parentPackages.subscriptionsPageTitle', 'سجل الدفع والاشتراكات')}
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-500 mt-1">
            {t('parentPackages.subscriptionsPageSubtitle', 'متابعة جميع فواتير الاشتراكات المجددة وحالات الدفع لأبنائك')}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleRefresh}
            disabled={isFetching}
            className="p-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-soft cursor-pointer disabled:opacity-50"
            title={t('common.refresh', 'تحديث البيانات')}
          >
            <RefreshCw size={18} className={isFetching ? 'animate-spin text-[#0f7a6c]' : ''} />
          </button>
        </div>
      </div>
      <ParentPackageNavTabs />
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs overflow-x-auto">
          {STATUS_FILTERS.map((f) => {
            const isActive = selectedStatus === f.id;
            return (
              <button
                type="button"
                key={f.id}
                onClick={() => {
                  setSelectedStatus(f.id);
                  setCurrentPage(1);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#0f7a6c] text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {t(f.labelKey, f.defaultLabel)}
              </button>
            );
          })}
        </div>
        <div className="relative w-full md:w-72">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            placeholder={t('parentPackages.searchPlaceholder', 'بحث برقم الطلب أو اسم الباقة...')}
            className="w-full ps-10 pe-4 py-2.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs sm:text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]/30 shadow-xs"
          />
          <Search size={16} className="absolute top-1/2 -translate-y-1/2 start-3.5 text-slate-400" />
        </div>
      </div>
      {isLoading && rawList.length === 0 ? (
        <div className="py-20 flex flex-col items-center justify-center gap-3 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800">
          <Spinner size="lg" />
          <p className="text-xs text-slate-400 font-bold">{t('common.loading', 'جاري تحميل سجل الاشتراكات...')}</p>
        </div>
      ) : filteredList.length === 0 ? (
        <div className="p-12 text-center rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-soft space-y-4">
          <div className="w-16 h-16 rounded-3xl bg-[#0f7a6c]/10 text-[#0f7a6c] dark:text-emerald-400 flex items-center justify-center mx-auto">
            <Receipt size={32} />
          </div>
          <div className="max-w-md mx-auto space-y-1">
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">
              {t('parentPackages.noSubscriptionsTitle', 'لا توجد طلبات اشتراك في هذه الحالة')}
            </h3>
            <p className="text-xs text-slate-400 dark:text-slate-500">
              {t('parentPackages.noSubscriptionsDesc', 'يمكنك استعراض الباقات المتاحة واختيار الباقة المناسبة لأبنائك للبدء.')}
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredList.map((item) => {
            const statusInfo = getStatusBadge(item.status, t);
            const StatusIcon = statusInfo.icon;
            const isPending = String(item.status || '').toLowerCase() === 'pending';
            const orderNum = item.orderNumber || item.subscriptionNumber || (item.id ? `RN-${String(item.id).slice(-8).toUpperCase()}` : '-');
            const packageName = item.package?.name || item.packageName || t('parentPackages.package', 'الباقة');
            const total = Number(item.total || item.finalAmount || item.amount || 0);
            const currency = item.currency || 'ج.م';
            const studentNames = (() => {
              if (Array.isArray(item.students) && item.students.length > 0) {
                return item.students.map((st) => (typeof st.name === 'object' ? st.name.ar || st.name.en : st.name || st.studentName)).filter(Boolean).join('، ');
              }
              if (item.student?.name) {
                return typeof item.student.name === 'object' ? item.student.name.ar || item.student.name.en : item.student.name;
              }
              return item.studentName || t('parentPackages.student', 'الابن');
            })();
            const isFamily = item.package?.type === 'family' || (Array.isArray(item.students) && item.students.length > 1);
            return (
              <div
                key={item.id}
                className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-soft hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 text-start"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#0f7a6c]/10 text-[#0f7a6c] dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <Receipt size={24} />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-base font-extrabold text-slate-800 dark:text-white">
                        {packageName}
                      </h3>
                      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${statusInfo.bg}`}>
                        <StatusIcon size={12} />
                        <span>{statusInfo.label}</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-400 dark:text-slate-500 flex-wrap">
                      <span className="font-mono font-semibold" dir="ltr">{orderNum}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-300">
                        {isFamily ? <Users size={13} className="text-[#0f7a6c]" /> : <User size={13} className="text-[#0f7a6c]" />}
                        <span>{studentNames}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar size={13} />
                        <span>{formatDate(item.createdAt || item.paidAt, isRtl)}</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between md:justify-end gap-4 border-t md:border-t-0 pt-3 md:pt-0 border-slate-100 dark:border-slate-800">
                  <div className="text-start md:text-end">
                    <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 block">
                      {t('parentPackages.total', 'الإجمالي')}
                    </span>
                    <span className="text-base sm:text-lg font-black font-mono text-[#0f7a6c] dark:text-emerald-400">
                      {formatCurrency(total, currency)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {isPending && (
                      <button
                        type="button"
                        onClick={() => handlePayPending(item)}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#0f7a6c] hover:bg-[#0c6156] text-white text-xs font-bold transition-all shadow-sm hover:shadow cursor-pointer"
                        title={t('parentPackages.payNowStripe', 'الدفع عبر Stripe')}
                      >
                        <CreditCard size={14} />
                        <span>{t('parentPackages.payNowStripe', 'إتمام الدفع')}</span>
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => setSelectedInvoice(item)}
                      className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
                      title={t('parentPackages.viewInvoice', 'عرض الفاتورة')}
                    >
                      <Eye size={14} />
                      <span>{t('parentPackages.viewInvoice', 'الفاتورة')}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {pagination.pages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-4">
          <button
            type="button"
            disabled={currentPage <= 1}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 disabled:opacity-40 cursor-pointer"
          >
            {isRtl ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>
          <span className="text-xs font-bold text-slate-600 dark:text-slate-300 px-3">
            {currentPage} / {pagination.pages}
          </span>
          <button
            type="button"
            disabled={currentPage >= pagination.pages}
            onClick={() => setCurrentPage((p) => Math.min(pagination.pages, p + 1))}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 disabled:opacity-40 cursor-pointer"
          >
            {isRtl ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
          </button>
        </div>
      )}
      <ParentInvoiceModal
        isOpen={Boolean(selectedInvoice)}
        onClose={() => setSelectedInvoice(null)}
        subscriptionId={selectedInvoice?.id}
        initialData={selectedInvoice}
        t={t}
        isRtl={isRtl}
      />
    </div>
  );
}