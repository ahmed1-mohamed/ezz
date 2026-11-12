import { useQuery } from '@tanstack/react-query';
import { useMemo, useCallback } from 'react';
import api from './axiosConfig';

export const currenciesApi = {
  fetchExchangeRate: async (params) => {
    try {
      const response = await api.get('/api/v1/currencies/public/exchange-rate', { params });
      return response.data;
    } catch (error) {
      console.warn('Failed to fetch exchange rate, fallback to default USD:', error);
      return { symbol: '$', exchangeRate: 1 };
    }
  }
};

export function resolveCurrencySymbol(currency) {
  if (!currency) return null;
  const c = String(currency).trim().toUpperCase();
  if (c === 'USD' || c === '$' || c === 'دولار') return '$';
  if (c === 'EGP' || c === 'ج.م' || c === 'LE' || c === 'L.E' || c === 'جنيه' || c === 'جنية') return 'ج.م';
  if (c === 'SAR' || c === 'ر.س' || c === 'SR') return 'ر.س';
  if (c === 'AED' || c === 'د.إ') return 'د.إ';
  if (c === 'KWD' || c === 'د.ك') return 'د.ك';
  if (c === 'QAR' || c === 'ر.ق') return 'ر.ق';
  if (c === 'BHD' || c === 'د.ب') return 'د.ب';
  if (c === 'OMR' || c === 'ر.ع') return 'ر.ع';
  if (c === 'JOD' || c === 'د.أ') return 'د.أ';
  if (c === 'EUR' || c === '€') return '€';
  if (c === 'GBP' || c === '£') return '£';
  return String(currency).trim();
}

export function resolveCurrencyLabel(currency = '$', isRtl = true) {
  const norm = String(currency || '').trim().toUpperCase();
  const isUSD = norm === 'USD' || norm === '$' || norm === 'دولار';
  const isEGP = norm === 'EGP' || norm === 'ج.م' || norm === 'LE' || norm === 'L.E' || norm === 'جنيه' || norm === 'جنية';
  const isSAR = norm === 'SAR' || norm === 'ر.س' || norm === 'SR';
  if (isUSD) return isRtl ? 'دولار' : '$';
  if (isEGP) return isRtl ? 'ج.م' : 'EGP';
  if (isSAR) return isRtl ? 'ر.س' : 'SAR';
  return resolveCurrencySymbol(currency) || currency || (isRtl ? 'دولار' : '$');
}

export function formatCurrencyDisplay(amount, currency = '$', isRtl = true) {
  if (amount === null || amount === undefined || isNaN(Number(amount))) return '-';
  const num = Number(amount);
  const formattedNum = num.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
  const norm = String(currency || '').trim().toUpperCase();
  const isUSD = norm === 'USD' || norm === '$' || norm === 'دولار';
  if (isUSD) {
    if (isRtl) return `${formattedNum} دولار`;
    return `$${formattedNum}`;
  }
  const label = resolveCurrencyLabel(currency, isRtl);
  return `${formattedNum} ${label}`;
}

export function parseExchangeRateData(res) {
  if (!res) {
    return { symbol: '$', exchangeRate: 1 };
  }
  const data = res.data?.data || res.data || res;
  const rawSymbol = data.symbol || data.currencySymbol || data.currency || '$';
  const symbol = resolveCurrencySymbol(rawSymbol) || '$';
  const rawRate = data.exchangeRate ?? data.rate ?? 1;
  const exchangeRate = typeof rawRate === 'number' && rawRate > 0
    ? rawRate
    : (Number(rawRate) > 0 ? Number(rawRate) : 1);
  return {
    symbol,
    exchangeRate,
  };
}

export const DEFAULT_COUNTRY_CURRENCIES = {
  EG: { symbol: 'ج.م', code: 'EGP', exchangeRate: 50 },
  SA: { symbol: 'ر.س', code: 'SAR', exchangeRate: 3.75 },
  AE: { symbol: 'د.إ', code: 'AED', exchangeRate: 3.67 },
  KW: { symbol: 'د.ك', code: 'KWD', exchangeRate: 0.31 },
  QA: { symbol: 'ر.ق', code: 'QAR', exchangeRate: 3.64 },
  BH: { symbol: 'د.ب', code: 'BHD', exchangeRate: 0.376 },
  OM: { symbol: 'ر.ع', code: 'OMR', exchangeRate: 0.385 },
  JO: { symbol: 'د.أ', code: 'JOD', exchangeRate: 0.71 },
  US: { symbol: '$', code: 'USD', exchangeRate: 1 },
};

export function getCodeFromCountryName(name = '') {
  const norm = String(name || '').toLowerCase().trim();
  if (norm.includes('egypt') || norm.includes('مصر') || norm.includes('egy') || norm === 'eg') return 'EG';
  if (norm.includes('saudi') || norm.includes('سعودي') || norm.includes('ksa') || norm === 'sa') return 'SA';
  if (norm.includes('emirates') || norm.includes('إمارات') || norm.includes('uae') || norm === 'ae') return 'AE';
  if (norm.includes('kuwait') || norm.includes('كويت') || norm === 'kw') return 'KW';
  if (norm.includes('qatar') || norm.includes('قطر') || norm === 'qa') return 'QA';
  if (norm.includes('bahrain') || norm.includes('بحرين') || norm === 'bh') return 'BH';
  if (norm.includes('oman') || norm.includes('عمان') || norm === 'om') return 'OM';
  if (norm.includes('jordan') || norm.includes('أردن') || norm === 'jo') return 'JO';
  return null;
}

export function getCodeFromPhone(phone = '') {
  const clean = String(phone || '').replace(/[\s\-_]/g, '');
  if (clean.startsWith('+20') || clean.startsWith('0020') || clean.startsWith('010') || clean.startsWith('011') || clean.startsWith('012') || clean.startsWith('015')) return 'EG';
  if (clean.startsWith('+966') || clean.startsWith('00966') || clean.startsWith('05')) return 'SA';
  if (clean.startsWith('+971') || clean.startsWith('00971')) return 'AE';
  if (clean.startsWith('+965') || clean.startsWith('00965')) return 'KW';
  if (clean.startsWith('+974') || clean.startsWith('00974')) return 'QA';
  if (clean.startsWith('+973') || clean.startsWith('00973')) return 'BH';
  if (clean.startsWith('+968') || clean.startsWith('00968')) return 'OM';
  if (clean.startsWith('+962') || clean.startsWith('00962')) return 'JO';
  return null;
}

export function detectCountryCode(candidates = []) {
  for (const item of candidates) {
    if (!item) continue;
    if (typeof item === 'object') {
      const directCode = item.code || item.countryCode || item.iso || item.id;
      if (typeof directCode === 'string') {
        const norm = directCode.trim().toUpperCase();
        if (DEFAULT_COUNTRY_CURRENCIES[norm]) return norm;
      }
      const name = String(item.name || item.nameEn || item.nameAr || '').trim();
      const codeByName = getCodeFromCountryName(name);
      if (codeByName) return codeByName;
    } else if (typeof item === 'string') {
      const str = item.trim();
      const norm = str.toUpperCase();
      if (DEFAULT_COUNTRY_CURRENCIES[norm]) return norm;
      const codeByName = getCodeFromCountryName(str);
      if (codeByName) return codeByName;
      const codeByPhone = getCodeFromPhone(str);
      if (codeByPhone) return codeByPhone;
    }
  }
  try {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    if (timeZone.includes('Cairo')) return 'EG';
    if (timeZone.includes('Riyadh')) return 'SA';
    if (timeZone.includes('Dubai')) return 'AE';
    if (timeZone.includes('Kuwait')) return 'KW';
    if (timeZone.includes('Qatar')) return 'QA';
    if (timeZone.includes('Bahrain')) return 'BH';
    if (timeZone.includes('Muscat')) return 'OM';
    if (timeZone.includes('Amman')) return 'JO';
  } catch (err) {
    void err;
  }
  return 'EG';
}

export function resolveUserCurrencyInfo({ user = null, sub = null, storedInfo = null, apiResult = null } = {}) {
  if (storedInfo?.symbol && storedInfo?.symbol !== '$' && storedInfo?.symbol !== 'USD') {
    return storedInfo;
  }
  if (apiResult?.symbol && apiResult.symbol !== '$' && apiResult.symbol !== 'USD') {
    return apiResult;
  }
  const countryCode = detectCountryCode([
    user?.country,
    user?.countryCode,
    user?.countryId,
    user?.phone,
    sub?.country,
    sub?.package?.country,
    sub?.user?.country,
    sub?.student?.country,
    sub?.phone,
  ]);
  const defaultInfo = DEFAULT_COUNTRY_CURRENCIES[countryCode] || DEFAULT_COUNTRY_CURRENCIES.EG;
  return {
    symbol: defaultInfo.symbol,
    exchangeRate: defaultInfo.exchangeRate,
    code: defaultInfo.code,
  };
}

export function resolvePackagePrice(rawPrice, currencyInfo, _packageItem = null) {
  const num = Number(rawPrice ?? 0);
  if (isNaN(num) || num <= 0) return 0;
  const rate = Number(currencyInfo?.exchangeRate || 1);
  const targetSymbol = resolveCurrencySymbol(currencyInfo?.symbol) || '$';
  if (targetSymbol === 'ج.م' && num >= 150) return Math.round(num);
  if ((targetSymbol === 'ر.س' || targetSymbol === 'د.إ') && num >= 200) return Math.round(num);
  if (rate > 0 && rate !== 1) return Math.round(num * rate);
  if (targetSymbol !== '$' && targetSymbol !== 'USD' && rate > 0) return Math.round(num * rate);
  return Math.round(num);
}

export function useCurrency() {
  const { data: exchangeRateRes, isLoading, isError, refetch } = useQuery({
    queryKey: ['currenciesExchangeRate'],
    queryFn: currenciesApi.fetchExchangeRate,
    staleTime: 1000 * 60 * 10,
  });
  const currencyInfo = useMemo(() => {
    if (exchangeRateRes) return parseExchangeRateData(exchangeRateRes);
    return { symbol: '$', exchangeRate: 1 };
  }, [exchangeRateRes]);
  const convertPrice = useCallback((usdPrice) => {
    return resolvePackagePrice(usdPrice, currencyInfo);
  }, [currencyInfo]);
  const formatPrice = useCallback((amount, isRtl = true) => {
    return formatCurrencyDisplay(amount, currencyInfo.symbol, isRtl);
  }, [currencyInfo.symbol]);
  return {
    currencyInfo,
    symbol: currencyInfo.symbol,
    exchangeRate: currencyInfo.exchangeRate,
    isLoading,
    isError,
    refetch,
    convertPrice,
    formatPrice,
  };
}

export default currenciesApi;
