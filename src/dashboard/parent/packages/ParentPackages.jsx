import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import useDebounce from '@/shared/hooks/useDebounce';
import {
  Layers,
  Search,
  Users,
  User,
  Sparkles,
  HelpCircle,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  CreditCard,
} from 'lucide-react';
import { parentPackagesApi } from '@/shared/services/api/parentPackagesApi.js';
import { currenciesApi, parseExchangeRateData } from '@/shared/services/api/currenciesApi.js';
import ParentPackageCard from './components/ParentPackageCard.jsx';
import ParentPackageDetailsModal from './components/ParentPackageDetailsModal.jsx';
import ParentPackageNavTabs from './components/ParentPackageNavTabs.jsx';

const TYPE_FILTERS = [
  { id: 'all', labelKey: 'parentPackages.allTypes', defaultLabel: 'الكل' },
  { id: 'individual', labelKey: 'parentPackages.individualType', defaultLabel: 'فردية' },
  { id: 'family', labelKey: 'parentPackages.familyType', defaultLabel: 'عائلية' },
];

export default function ParentPackages() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearch = useDebounce(searchQuery, 350);
  const [selectedType, setSelectedType] = useState('all');
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [activeModalPackage, setActiveModalPackage] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const queryParams = useMemo(() => {
    const params = {
      page: currentPage,
      limit: 12,
    };
    if (selectedType !== 'all') {
      params.type = selectedType;
    }
    if (debouncedSearch.trim()) {
      params.search = debouncedSearch.trim();
    }
    return params;
  }, [currentPage, selectedType, debouncedSearch]);
  const {
    data: packagesResponse,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['parent-packages-list', queryParams],
    queryFn: () => parentPackagesApi.fetchPackages(queryParams),
  });
  const { data: exchangeRateRes } = useQuery({
    queryKey: ['currenciesExchangeRate'],
    queryFn: () => currenciesApi.fetchExchangeRate(),
    staleTime: 5 * 60 * 1000,
  });
  const currencyInfo = useMemo(() => {
    return parseExchangeRateData(exchangeRateRes);
  }, [exchangeRateRes]);
  const rawPackagesList = useMemo(() => {
    if (!packagesResponse) return [];
    if (Array.isArray(packagesResponse.data)) return packagesResponse.data;
    if (Array.isArray(packagesResponse)) return packagesResponse;
    return [];
  }, [packagesResponse]);
  const paginationInfo = useMemo(() => {
    return {
      total: packagesResponse?.total ?? rawPackagesList.length,
      pages: packagesResponse?.pages ?? 1,
      page: packagesResponse?.page ?? currentPage,
      limit: packagesResponse?.limit ?? 12,
    };
  }, [packagesResponse, rawPackagesList.length, currentPage]);
  const availableCountries = useMemo(() => {
    const set = new Map();
    rawPackagesList.forEach((pkg) => {
      if (pkg?.country?.id && pkg?.country?.name) {
        set.set(pkg.country.id, pkg.country);
      }
    });
    return Array.from(set.values());
  }, [rawPackagesList]);
  const filteredPackages = useMemo(() => {
    let result = rawPackagesList;
    if (selectedType !== 'all') {
      result = result.filter((pkg) => {
        const pkgType = String(pkg?.type || '').toLowerCase();
        const pkgTypeText = String(pkg?.typeText || '').toLowerCase();
        if (selectedType === 'individual') {
          return pkgType === 'individual' || pkgTypeText.includes('فرد');
        }
        if (selectedType === 'family') {
          return pkgType === 'family' || pkgTypeText.includes('عائل');
        }
        return true;
      });
    }
    if (selectedCountry !== 'all') {
      result = result.filter((pkg) => pkg?.country?.id === selectedCountry);
    }
    return result;
  }, [rawPackagesList, selectedType, selectedCountry]);
  const statsOverview = useMemo(() => {
    const total = rawPackagesList.length;
    const individual = rawPackagesList.filter(
      (p) => p?.type === 'individual' || String(p?.typeText || '').includes('فرد')
    ).length;
    const family = rawPackagesList.filter(
      (p) => p?.type === 'family' || String(p?.typeText || '').includes('عائل')
    ).length;
    return { total, individual, family };
  }, [rawPackagesList]);
  const handleOpenDetails = (packageItem) => {
    setActiveModalPackage(packageItem);
    setIsDetailsOpen(true);
  };
  const handleCloseDetails = () => {
    setIsDetailsOpen(false);
    setActiveModalPackage(null);
  };
  const handleSubscribe = (packageItem) => {
    navigate('/dashboard/parent/checkout', {
      state: { package: packageItem, currencyInfo },
    });
  };
  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedType('all');
    setSelectedCountry('all');
    setCurrentPage(1);
  };
  return (
    <div className="p-4 sm:p-8 space-y-8 max-w-7xl mx-auto transition-colors" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="flex justify-start">
        <ParentPackageNavTabs />
      </div>
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#0f7a6c]/10 text-[#0f7a6c] dark:text-emerald-400 border border-[#0f7a6c]/20 flex items-center justify-center shrink-0">
              <Layers className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300">
                  {t('parentPackages.badge', 'باقات الأكاديمية')}
                </span>
                <span className="text-xs font-bold text-slate-400">
                  {paginationInfo.total} {t('parentPackages.availablePackagesCount', 'باقة معتمدة')}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">
                {t('parentPackages.title', 'الباقات والاشتراكات')}
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
                {t(
                  'parentPackages.subtitle',
                  'اختر الباقة المناسبة لأبنائك للبدء في رحلة تعلّم القرآن الكريم واللغة العربية مع نخبة من المعلمين المعتمدين والمجازين'
                )}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                const targetPkg = filteredPackages[0] || rawPackagesList[0] || null;
                navigate('/dashboard/parent/checkout', {
                  state: targetPkg ? { package: targetPkg } : undefined,
                });
              }}
              className="px-5 py-3 rounded-2xl bg-[#0f7a6c] hover:bg-[#0c6156] text-white text-xs sm:text-sm font-extrabold shadow-md shadow-[#0f7a6c]/20 transition-all flex items-center gap-2 cursor-pointer hover:scale-[1.01]"
            >
              <CreditCard className="w-4 h-4" />
              <span>{t('parentPackages.directCheckoutButton', 'إتمام الاشتراك والدفع')}</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 text-xs">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 text-[#0f7a6c] dark:text-emerald-400 flex items-center justify-center shrink-0 shadow-xs border border-slate-200/60 dark:border-slate-700">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-slate-400 font-medium block">{t('parentPackages.allPackagesStat', 'إجمالي الباقات')}</span>
              <span className="text-lg font-black text-slate-900 dark:text-white mt-0.5 block">
                {statsOverview.total} {t('parentPackages.packagesUnit', 'باقات')}
              </span>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 shadow-xs border border-slate-200/60 dark:border-slate-700">
              <User className="w-5 h-5" />
            </div>
            <div>
              <span className="text-slate-400 font-medium">{t('parentPackages.individualPackagesStat', 'باقات فردية')}</span>
              <span className="text-lg font-black text-slate-900 dark:text-white mt-0.5 block">
                {statsOverview.individual} {t('parentPackages.packagesUnit', 'باقات')}
              </span>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 text-amber-500 dark:text-amber-400 flex items-center justify-center shrink-0 shadow-xs border border-slate-200/60 dark:border-slate-700">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <span className="text-slate-400 font-medium">{t('parentPackages.familyPackagesStat', 'باقات عائلية')}</span>
              <span className="text-lg font-black text-slate-900 dark:text-white mt-0.5 block">
                {statsOverview.family} {t('parentPackages.packagesUnit', 'باقات')}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute top-1/2 -translate-y-1/2 start-3.5 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            placeholder={t('parentPackages.searchPlaceholder', 'بحث باسم الباقة أو المزايا...')}
            className="w-full ps-10 pe-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]/30 focus:border-[#0f7a6c]"
          />
        </div>
        <div className="flex items-center gap-2 flex-wrap w-full md:w-auto">
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
            {TYPE_FILTERS.map((filter) => {
              const isActive = selectedType === filter.id;
              return (
                <button
                  type="button"
                  key={filter.id}
                  onClick={() => setSelectedType(filter.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-white dark:bg-slate-900 text-[#0f7a6c] dark:text-emerald-400 shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {t(filter.labelKey, filter.defaultLabel)}
                </button>
              );
            })}
          </div>
          {availableCountries.length > 1 && (
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="py-2 px-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]/30 cursor-pointer"
            >
              <option value="all">{t('parentPackages.allCountries', 'كل الدول')}</option>
              {availableCountries.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.flag ? `${c.flag} ` : ''}{c.name}
                </option>
              ))}
            </select>
          )}
          {(searchQuery || selectedType !== 'all' || selectedCountry !== 'all') && (
            <button
              type="button"
              onClick={handleResetFilters}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              title={t('parentPackages.resetFilters', 'إعادة ضبط التصفية')}
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((sk) => (
            <div
              key={sk}
              className="h-96 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 animate-pulse space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-slate-200 dark:bg-slate-800" />
                <div className="space-y-2 flex-1">
                  <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-1/3" />
                  <div className="h-5 bg-slate-200 dark:bg-slate-800 rounded w-2/3" />
                </div>
              </div>
              <div className="h-16 bg-slate-100 dark:bg-slate-800/60 rounded-2xl" />
              <div className="space-y-2 pt-4">
                <div className="h-3 bg-slate-200 dark:bg-slate-800 rounded w-full" />
                <div className="h-3 bg-slate-200 dark:bg-slate-800 rounded w-4/5" />
                <div className="h-3 bg-slate-200 dark:bg-slate-800 rounded w-3/4" />
              </div>
            </div>
          ))}
        </div>
      ) : isError ? (
        <div className="bg-white dark:bg-slate-900 border border-red-200 dark:border-red-900/60 border-s-4 border-s-red-500 rounded-3xl p-12 text-center shadow-sm space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-rose-50 dark:bg-rose-950/30 text-rose-500 flex items-center justify-center mx-auto">
            <HelpCircle className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
              {t('parentPackages.loadErrorTitle', 'تعذر تحميل قائمة الباقات')}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto">
              {t('parentPackages.loadErrorSubtitle', 'يرجى التأكد من اتصال الإنترنت وإعادة المحاولة')}
            </p>
          </div>
          <button
            type="button"
            onClick={() => refetch()}
            className="px-6 py-2.5 rounded-xl bg-[#0f7a6c] hover:bg-[#0c6156] text-white text-xs font-bold shadow-md transition-colors inline-flex items-center gap-2 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>{t('parentPackages.retryButton', 'إعادة المحاولة')}</span>
          </button>
        </div>
      ) : filteredPackages.length === 0 ? (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-12 text-center shadow-sm space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center mx-auto">
            <Layers className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
              {t('parentPackages.noPackagesFoundTitle', 'لا توجد باقات مطابقة')}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto">
              {t('parentPackages.noPackagesFoundSubtitle', 'لم يتم العثور على أي باقات مطابقة لمعايير البحث أو التصفية الحالية')}
            </p>
          </div>
          <button
            type="button"
            onClick={handleResetFilters}
            className="px-6 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors inline-flex items-center gap-2 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>{t('parentPackages.clearFilters', 'مسح التصفية')}</span>
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPackages.map((pkg) => (
              <ParentPackageCard
                key={pkg.id || pkg._id}
                packageItem={pkg}
                currencyInfo={currencyInfo}
                onViewDetails={handleOpenDetails}
                onSubscribe={handleSubscribe}
              />
            ))}
          </div>
          {paginationInfo.pages > 1 && (
            <div className="flex items-center justify-center gap-2 pt-6">
              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage <= 1}
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer"
              >
                {isRtl ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
              </button>
              <span className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200">
                {currentPage} / {paginationInfo.pages}
              </span>
              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.min(paginationInfo.pages, p + 1))}
                disabled={currentPage >= paginationInfo.pages}
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer"
              >
                {isRtl ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              </button>
            </div>
          )}
        </>
      )}
      <ParentPackageDetailsModal
        isOpen={isDetailsOpen}
        packageItem={activeModalPackage}
        currencyInfo={currencyInfo}
        onClose={handleCloseDetails}
        onSubscribe={handleSubscribe}
      />
    </div>
  );
}
