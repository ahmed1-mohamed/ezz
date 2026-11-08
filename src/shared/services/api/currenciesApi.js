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

export default currenciesApi;

