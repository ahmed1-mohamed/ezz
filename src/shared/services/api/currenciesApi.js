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

export function parseExchangeRateData(res) {
  if (!res) {
    return { symbol: '$', exchangeRate: 1 };
  }
  const data = res.data?.data || res.data || res;
  const symbol = data.symbol || data.currencySymbol || data.currency || '$';
  const rawRate = data.exchangeRate ?? data.rate ?? 1;
  const exchangeRate = typeof rawRate === 'number' && rawRate > 0
    ? rawRate
    : (Number(rawRate) > 0 ? Number(rawRate) : 1);
  return {
    symbol: typeof symbol === 'string' && symbol.trim() ? symbol.trim() : '$',
    exchangeRate,
  };
}

export function resolvePackagePrice(rawPrice, currencyInfo, packageItem = null) {
  const num = Number(rawPrice ?? 0);
  if (isNaN(num) || num <= 0) return 0;
  const rate = Number(currencyInfo?.exchangeRate || 1);
  const pkgCurrency = String(packageItem?.currency || '').toUpperCase().trim();
  const isExplicitLocal = pkgCurrency === 'EGP' || pkgCurrency === 'ج.م';
  const isEgypt = Boolean(
    packageItem?.country?.code === 'EG' ||
    String(packageItem?.country?.name || '').includes('مصر') ||
    String(packageItem?.name || '').includes('مصر')
  );
  if (isExplicitLocal || (isEgypt && currencyInfo?.symbol === 'ج.م') || num >= 150 || rate <= 1) {
    return Math.round(num);
  }
  return Math.round(num * rate);
}

export default currenciesApi;

