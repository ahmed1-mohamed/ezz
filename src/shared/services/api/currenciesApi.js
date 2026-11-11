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
  if (c === 'EUR' || c === '€') return '€';
  if (c === 'GBP' || c === '£') return '£';
  return String(currency).trim();
}

export function resolveCurrencyLabel(currency = '$', isRtl = true) {
  const norm = String(currency || '').trim().toUpperCase();
  const isUSD = norm === 'USD' || norm === '$' || norm === 'دولار';
  const isEGP = norm === 'EGP' || norm === 'ج.م' || norm === 'LE' || norm === 'L.E' || norm === 'جنيه' || norm === 'جنية';
  const isSAR = norm === 'SAR' || norm === 'ر.س' || norm === 'SR';

  if (isUSD) {
    return isRtl ? 'دولار' : '$';
  }
  if (isEGP) {
    return isRtl ? 'ج.م' : 'EGP';
  }
  if (isSAR) {
    return isRtl ? 'ر.س' : 'SAR';
  }
  return resolveCurrencySymbol(currency) || currency || (isRtl ? 'دولار' : '$');
}

export function formatCurrencyDisplay(amount, currency = '$', isRtl = true) {
  if (amount === null || amount === undefined || isNaN(Number(amount))) return '-';
  const num = Number(amount);
  const formattedNum = num.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
  const norm = String(currency || '').trim().toUpperCase();
  const isUSD = norm === 'USD' || norm === '$' || norm === 'دولار';

  if (isUSD) {
    if (isRtl) {
      return `${formattedNum} دولار`;
    }
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

export function resolvePackagePrice(rawPrice, currencyInfo, packageItem = null) {
  const num = Number(rawPrice ?? 0);
  if (isNaN(num) || num <= 0) return 0;
  const rate = Number(currencyInfo?.exchangeRate || 1);
  const targetSymbol = String(currencyInfo?.symbol || '').toUpperCase().trim();

  // Determine the source currency of this item
  const pkgCurrency = String(
    packageItem?.currency ||
    packageItem?.package?.currency ||
    packageItem?.priceCurrency ||
    ''
  ).toUpperCase().trim();

  const isExplicitUSD = pkgCurrency === 'USD' || pkgCurrency === '$';
  const isExplicitLocal = pkgCurrency === 'EGP' || pkgCurrency === 'ج.م';
  const isTargetUSD = targetSymbol === '$' || targetSymbol === 'USD';
  const isTargetLocal = targetSymbol === 'EGP' || targetSymbol === 'ج.م';

  // If target is USD, price is already in USD unless explicitly local
  if (isTargetUSD) {
    if (isExplicitLocal && rate > 0) {
      return Math.round(num / rate);
    }
    return Math.round(num);
  }

  // If source and target are the same, return as-is
  if (isExplicitLocal && isTargetLocal) {
    return Math.round(num);
  }
  if (isExplicitUSD && isTargetUSD) {
    return Math.round(num);
  }

  // If rate <= 1 (no meaningful conversion), return as-is
  if (rate <= 1) {
    return Math.round(num);
  }

  // If explicitly USD and target is local currency → convert
  if (isExplicitUSD && isTargetLocal) {
    return Math.round(num * rate);
  }

  // If explicitly local and target is USD → convert down
  if (isExplicitLocal && isTargetUSD && rate > 0) {
    return Math.round(num / rate);
  }

  // Heuristic fallback: if no currency field on item, check country/name for Egypt context
  const isEgypt = Boolean(
    packageItem?.country?.code === 'EG' ||
    String(packageItem?.country?.name || '').includes('مصر') ||
    String(packageItem?.name || '').includes('مصر') ||
    String(packageItem?.package?.name || '').includes('مصر')
  );

  // If country is Egypt AND target is EGP, the price may already be in EGP (large numbers)
  if (isEgypt && (targetSymbol === 'ج.م' || targetSymbol === 'EGP')) {
    // Large Egyptian prices (> 500 EGP) are likely already in EGP
    if (num > 500) return Math.round(num);
    return Math.round(num * rate);
  }

  // Default: price is in USD, convert to target
  return Math.round(num * rate);
}

export default currenciesApi;

