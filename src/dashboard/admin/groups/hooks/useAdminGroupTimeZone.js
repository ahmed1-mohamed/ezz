import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'
import { useAuth } from '@/shared/context/useAuth.jsx'
import { adminSessionsApi } from '@/shared/services/api/adminSessionsApi.js'
import { getTimeZonePlace } from '../utils/groupTimeUtils.js'

function localizedCountryName(value, isRtl) {
  if (typeof value === 'object' && value !== null) {
    return isRtl ? value.ar || value.en || '' : value.en || value.ar || ''
  }
  return typeof value === 'string' ? value : ''
}

export default function useAdminGroupTimeZone() {
  const { i18n } = useTranslation()
  const { user } = useAuth()
  const isRtl = i18n.language.startsWith('ar')
  const timezoneQuery = useQuery({
    queryKey: ['admin-session-timezone-context', user?.id || user?._id, i18n.language],
    queryFn: () => adminSessionsApi.fetchTimezoneContext(),
    enabled: Boolean(user),
    staleTime: 15 * 60 * 1000,
    retry: false,
  })
  const context = timezoneQuery.data || {}
  const source = context.source || 'default'
  const timeZone = source === 'default' ? '' : context.timeZone || ''
  const countryName = source === 'default'
    ? ''
    : localizedCountryName(context.countryName, isRtl)

  return {
    timeZone,
    countryName,
    source,
    place: getTimeZonePlace(timeZone, isRtl, countryName),
    isResolved: !user || timezoneQuery.isFetched,
    isRtl,
  }
}
