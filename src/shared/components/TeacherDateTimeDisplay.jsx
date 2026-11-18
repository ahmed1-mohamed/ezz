import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { Calendar } from 'lucide-react';
import { useAuth } from '@/shared/context/useAuth.jsx';
import { profileApi } from '@/shared/services/api/profileApi.js';
import { landingApi } from '@/shared/services/api/landingApi.js';
import { dashboardApi } from '@/shared/services/api/dashboardApi.js';

const isValidTimeZone = (timeZone) => {
  if (!timeZone || typeof timeZone !== 'string') return false;
  try {
    new Intl.DateTimeFormat('en', { timeZone }).format(0);
    return true;
  } catch {
    return false;
  }
};

const getCountryTimeZone = (country) => {
  if (!country || typeof country !== 'object') return '';
  return country.timezone || country.country?.timezone || '';
};

const getCountryDisplayNames = (country, language) => {
  const name = country?.name;
  if (name && typeof name === 'object') {
    return [name[language], name.ar, name.en].filter(Boolean).map(String);
  }
  return name ? [String(name)] : [];
};

const countryMatchesProfile = (candidate, profileCountry, language) => {
  if (!candidate || !profileCountry) return false;
  if (typeof profileCountry === 'object') {
    const profileId = profileCountry.id || profileCountry._id;
    const candidateId = candidate.id || candidate._id;
    if (profileId && candidateId && String(profileId) === String(candidateId)) return true;
  }
  const profileValue = String(
    typeof profileCountry === 'object'
      ? profileCountry.name?.[language] || profileCountry.name?.ar || profileCountry.name?.en || ''
      : profileCountry,
  ).trim().toLocaleLowerCase();
  if (!profileValue) return false;
  if (candidate.flag && profileValue.startsWith(String(candidate.flag).toLocaleLowerCase())) return true;
  return getCountryDisplayNames(candidate, language).some((name) => {
    const normalizedName = name.trim().toLocaleLowerCase();
    return normalizedName && (profileValue === normalizedName || profileValue.endsWith(` ${normalizedName}`));
  });
};

const getTimeZonePlace = (timeZone, isArabic) => {
  const city = String(timeZone || '').split('/').pop()?.replace(/_/g, ' ') || timeZone;
  if (!isArabic) return city;
  const arabicNames = {
    Cairo: 'القاهرة', Riyadh: 'الرياض', Dubai: 'دبي', Kuwait: 'الكويت',
    Qatar: 'الدوحة', Bahrain: 'المنامة', Muscat: 'مسقط', Amman: 'عمّان',
    London: 'لندن', Paris: 'باريس', Berlin: 'برلين', Istanbul: 'إسطنبول',
    Athens: 'أثينا', New_York: 'نيويورك', Los_Angeles: 'لوس أنجلوس',
  };
  return arabicNames[city.replace(/ /g, '_')] || city;
};

export default function TeacherDateTimeDisplay({ dateTime = null }) {
  const { t, i18n } = useTranslation();
  const { user } = useAuth();
  const isArabic = i18n?.language?.startsWith('ar') ?? true;
  const language = isArabic ? 'ar' : 'en';
  const userId = user?.id || user?._id || 'current';
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    if (dateTime) return undefined;
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, [dateTime]);

  const profileQuery = useQuery({
    queryKey: ['teacher-clock-profile', userId],
    queryFn: async () => {
      const result = await profileApi.fetchProfile();
      return result?.success ? result.data : null;
    },
    enabled: Boolean(user),
    staleTime: 5 * 60 * 1000,
    retry: false,
  });
  const profileCountry = profileQuery.data?.country || user?.country || null;
  const directProfileTimeZone = getCountryTimeZone(profileCountry);

  const countriesQuery = useQuery({
    queryKey: ['teacher-clock-countries', language],
    queryFn: async () => {
      const result = await landingApi.fetchCountries({ limit: 500 });
      return Array.isArray(result?.data) ? result.data : Array.isArray(result) ? result : [];
    },
    enabled: Boolean(profileCountry) && !directProfileTimeZone,
    staleTime: 24 * 60 * 60 * 1000,
    retry: false,
  });
  const countryList = countriesQuery.data || [];
  const matchedCountry = countryList.find((country) =>
    countryMatchesProfile(country, profileCountry, language),
  );
  const profileTimeZone = directProfileTimeZone || matchedCountry?.timezone || '';
  const profileCountryName =
    (matchedCountry && getCountryDisplayNames(matchedCountry, language)[0]) ||
    (typeof profileCountry === 'object'
      ? getCountryDisplayNames(profileCountry, language)[0]
      : '');

  const shouldFetchResolvedTimeZone =
    Boolean(user) &&
    profileQuery.isFetched &&
    !profileTimeZone &&
    (!profileCountry || countriesQuery.isFetched);
  const resolvedTimeZoneQuery = useQuery({
    queryKey: ['teacher-clock-resolved-timezone', userId],
    queryFn: () => dashboardApi.fetchTeacherStatistics(),
    enabled: shouldFetchResolvedTimeZone,
    staleTime: 15 * 60 * 1000,
    retry: false,
  });
  const statistics = resolvedTimeZoneQuery.data?.data;
  const serverTimeZone =
    statistics?.nextSession?._targetTimezone ||
    statistics?.upcomingSessions?.[0]?._targetTimezone ||
    statistics?._targetTimezone ||
    '';
  const deviceTimeZone = (() => {
    try {
      return Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    } catch {
      return '';
    }
  })();
  const timeZone = [profileTimeZone, serverTimeZone, deviceTimeZone, 'UTC'].find(isValidTimeZone);
  const isUsingDeviceTime = !profileTimeZone && !serverTimeZone;
  const place = profileTimeZone && profileCountryName
    ? profileCountryName
    : getTimeZonePlace(timeZone, isArabic);
  const timeZoneLabel = isUsingDeviceTime
    ? t('teacherDateTime.deviceTime', 'توقيت الجهاز')
    : t('teacherDateTime.timezoneLabel', 'بتوقيت {{place}}', { place });

  const parsedDateTime = dateTime ? new Date(dateTime) : null;
  const hasValidDateTime = parsedDateTime && !Number.isNaN(parsedDateTime.getTime());
  const displayDate = hasValidDateTime ? parsedDateTime : new Date(now);
  const dateTimeHasTime = !dateTime || /T\d{2}:\d{2}/.test(String(dateTime));
  const timeStr = new Intl.DateTimeFormat(isArabic ? 'ar-EG' : 'en-GB', {
    timeZone,
    hour: '2-digit',
    minute: '2-digit',
    ...(dateTime ? {} : { second: '2-digit' }),
    hour12: true,
  }).format(displayDate);
  const dateStr = new Intl.DateTimeFormat(
    isArabic ? 'ar-EG-u-ca-gregory' : 'en-GB-u-ca-gregory',
    {
      timeZone,
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    },
  ).format(displayDate);

  if (dateTime) {
    return (
      <div className="inline-flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 dark:text-slate-400 font-semibold">
        <span className="inline-flex items-center gap-1.5">
          <Calendar size={14} className="text-slate-400" />
          <span>{dateStr}</span>
        </span>
        {dateTimeHasTime && <span>{timeStr}</span>}
        <span className="text-[10px] text-[#00594C] dark:text-emerald-400 font-bold">
          {timeZoneLabel}
        </span>
      </div>
    );
  }

  return (
    <>
      <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-[#d2ede6] text-[#00594C] dark:bg-emerald-950/70 dark:text-emerald-300">
        {timeStr}
      </span>
      <div className="flex flex-col gap-0.5 text-xs text-slate-500 dark:text-slate-400 font-semibold">
        <div className="flex items-center gap-1.5">
          <Calendar size={14} className="text-slate-400" />
          <span>{dateStr}</span>
        </div>
        <span className="text-[10px] text-[#00594C] dark:text-emerald-400 font-bold ms-5">
          {timeZoneLabel}
        </span>
      </div>
    </>
  );
}
