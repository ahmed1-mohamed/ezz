import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { useAuth } from '@/shared/context/useAuth';
import { currenciesApi, detectCountryCode, parseExchangeRateData, resolveUserCurrencyInfo } from '@/shared/services/api/currenciesApi';
import { profileApi } from '@/shared/services/api/profileApi';
import { fetchCountries } from '@/shared/utils/countryUtils';

const EMPTY_COUNTRIES = [];

function getCountryRecord(country, countries = []) {
  const countryId = typeof country === 'object' && country !== null
    ? String(country.id || country._id || '')
    : String(country || '');
  if (!countryId) return null;
  return countries.find((item) => String(item.id || item._id || '') === countryId) || null;
}

function getCountryValues(country) {
  if (!country) return [];
  if (typeof country !== 'object') return [country];
  const name = country.name;
  return [
    typeof name === 'object' && name !== null ? name.en : name,
    typeof name === 'object' && name !== null ? name.ar : null,
    country.nameEn,
    country.nameAr,
    country.isoCode,
    country.alpha2,
    country.countryCode,
    country.code,
    country.phoneCode,
    country.dialCode,
  ].filter(Boolean);
}

function resolveProfileCountryCode(profile, user, countries, countriesLoaded, profileLoaded) {
  if (!profileLoaded) return null;
  const profileCountry = profile?.country ?? profile?.countryId;
  const userCountry = user?.country ?? user?.countryId;
  const authoritativeCountry = profileCountry || userCountry;
  const countryRecord = getCountryRecord(authoritativeCountry, countries);
  const countryId = typeof authoritativeCountry === 'object' && authoritativeCountry !== null
    ? String(authoritativeCountry.id || authoritativeCountry._id || '')
    : String(authoritativeCountry || '');

  // Wait for the countries list before falling back when the profile stores a Mongo ID.
  if (!countryRecord && /^[a-f0-9]{24}$/i.test(countryId) && !countriesLoaded) return null;

  return detectCountryCode([
    ...getCountryValues(countryRecord || authoritativeCountry),
    profile?.countryCode,
    profile?.phone,
    ...(!authoritativeCountry ? [user?.countryCode, user?.phone] : []),
  ]);
}

export default function useParentCurrencyInfo() {
  const { user } = useAuth();
  const { i18n } = useTranslation();
  const language = i18n.language?.startsWith('ar') ? 'ar' : 'en';
  const isRtl = language === 'ar';
  const profileQuery = useQuery({
    queryKey: ['parent-currency-profile', user?.id || user?.email],
    queryFn: () => profileApi.fetchProfile(),
    enabled: Boolean(user?.id || user?.email),
    staleTime: 0,
  });
  const countriesQuery = useQuery({
    queryKey: ['currency-country-list'],
    queryFn: () => fetchCountries(),
    staleTime: 60 * 60 * 1000,
  });

  const profile = profileQuery.data?.success ? profileQuery.data.data : null;
  const countries = countriesQuery.data ?? EMPTY_COUNTRIES;
  const countryCode = useMemo(
    () => resolveProfileCountryCode(profile, user, countries, countriesQuery.isSuccess, profileQuery.isSuccess || profileQuery.isError),
    [profile, user, countries, countriesQuery.isSuccess, profileQuery.isSuccess, profileQuery.isError],
  );
  const exchangeRateQuery = useQuery({
    queryKey: ['currenciesExchangeRate', countryCode, language],
    queryFn: () => currenciesApi.fetchExchangeRate({ country: countryCode }, language),
    enabled: Boolean(countryCode),
    staleTime: 10 * 60 * 1000,
  });

  const currencyInfo = useMemo(() => {
    const apiResult = exchangeRateQuery.data ? parseExchangeRateData(exchangeRateQuery.data) : null;
    if (!countryCode) return { symbol: '$', exchangeRate: 1, code: 'USD' };
    return resolveUserCurrencyInfo({
      user: { ...user, countryCode },
      apiResult,
      isRtl,
    });
  }, [exchangeRateQuery.data, user, countryCode, isRtl]);

  return { currencyInfo, countryCode };
}
