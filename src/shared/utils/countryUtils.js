import api from '@/shared/services/api/axiosConfig'


export const normalizeCountry = (country) => {
  if (!country || typeof country !== 'object') return country
  const id = country.id || country._id || ''
  const dialCode = country.dialCode || country.phoneCode || (typeof country.code === 'string' && country.code.startsWith('+') ? country.code : '') || ''
  const name = typeof country.name === 'string' ? country.name : (country.name?.ar || country.nameAr || '')
  const nameEn = country.nameEn || (typeof country.name === 'object' ? country.name?.en : '') || (typeof country.name === 'string' ? country.name : '')
  return {
    ...country,
    id,
    _id: id,
    name,
    nameEn,
    dialCode,
    phoneCode: dialCode,
    flag: country.flag || '🌍',
    code: country.code || ''
  }
}


export const normalizeCountries = (list = []) => {
  if (!Array.isArray(list)) return []
  return list.map(normalizeCountry)
}


export const getCountryDialCode = (country) => {
  if (!country) return ''
  return country.dialCode || country.phoneCode || (typeof country.code === 'string' && country.code.startsWith('+') ? country.code : '') || ''
}

let cachedCountriesList = null
let inFlightCountriesPromise = null

export const fetchCountries = async (params = {}) => {
  const hasNoCustomParams = !params || Object.keys(params).length === 0 || (Object.keys(params).length === 1 && params.sort)
  if (cachedCountriesList && hasNoCustomParams) {
    return cachedCountriesList
  }
  if (inFlightCountriesPromise) {
    return inFlightCountriesPromise
  }
  inFlightCountriesPromise = (async () => {
    try {
      const res = await api.get('/api/v1/countries', { params })
      const raw = res?.data?.data || (Array.isArray(res?.data) ? res.data : [])
      const normalized = normalizeCountries(raw)
      if (normalized.length > 0 && hasNoCustomParams) {
        cachedCountriesList = normalized
      }
      return normalized
    } catch (error) {
      console.error('countryUtils.fetchCountries error:', error)
      return cachedCountriesList || []
    } finally {
      inFlightCountriesPromise = null
    }
  })()
  return inFlightCountriesPromise
}

export const searchCountriesBackend = async (query = '') => {
  const trimmed = String(query || '').trim()
  if (!trimmed) {
    return fetchCountries()
  }
  const isDigitsOrPlus = /^[\d\s+]+$/.test(trimmed)
  const cleanNum = trimmed.replace(/\s+/g, '')
  const phoneCodeParam = cleanNum.startsWith('+') ? cleanNum : `+${cleanNum}`
  const promises = []
  if (isDigitsOrPlus) {
    promises.push(
      api.get('/api/v1/countries', { params: { phoneCode: phoneCodeParam } })
        .then((res) => res?.data?.data || (Array.isArray(res?.data) ? res.data : []))
        .catch(() => [])
    )
  }
  if (!isDigitsOrPlus || trimmed.length >= 2) {
    promises.push(
      api.get('/api/v1/countries', { params: { search: trimmed } })
        .then((res) => res?.data?.data || (Array.isArray(res?.data) ? res.data : []))
        .catch(() => [])
    )
  }
  const responses = await Promise.all(promises)
  const seen = new Set()
  const combined = []
  responses.flat().forEach((c) => {
    const id = c.id || c._id
    if (id && !seen.has(id)) {
      seen.add(id)
      combined.push(c)
    }
  })
  return normalizeCountries(combined)
}


export const getCountryName = (country, isRtl = true) => {
  if (!country) return ''
  if (typeof country === 'string') return country
  if (typeof country.name === 'object' && country.name !== null) {
    return isRtl
      ? (country.name.ar || country.name.en || '')
      : (country.name.en || country.name.ar || '')
  }
  return isRtl
    ? (country.name || country.nameAr || country.nameEn || '')
    : (country.nameEn || country.name || country.nameAr || '')
}


export const sortCountries = (countries = [], isRtl = true) => {
  if (!Array.isArray(countries)) return []
  const lang = isRtl ? 'ar' : 'en'
  return [...countries].sort((a, b) => {
    const nameA = getCountryName(a, isRtl)
    const nameB = getCountryName(b, isRtl)
    return nameA.localeCompare(nameB, lang, { sensitivity: 'base' })
  })
}

export const sortCountryCodes = (countryCodes = [], isRtl = true) => {
  if (!Array.isArray(countryCodes)) return []
  const lang = isRtl ? 'ar' : 'en'
  return [...countryCodes].sort((a, b) => {
    const nameA = getCountryName(a, isRtl)
    const nameB = getCountryName(b, isRtl)
    return nameA.localeCompare(nameB, lang, { sensitivity: 'base' })
  })
}
export const DEFAULT_DIAL_CODE = '+971'

export const resolveCountryIdFromLabel = (countries = [], ...labels) => {
  const values = labels.filter(Boolean).map(String)
  if (values.length === 0) return ''
  const byId = countries.find((c) => values.includes(c.id))
  if (byId) return byId.id
  const byFlag = countries.find((c) => c.flag && c.flag !== '🌍' && values.some((v) => v.startsWith(c.flag)))
  if (byFlag) return byFlag.id
  const byName = countries.find((c) => values.some((v) => (c.name && v.includes(c.name)) || (c.nameEn && v.includes(c.nameEn))))
  return byName?.id || ''
}

export const splitPhoneNumber = (phone, codes = []) => {
  const clean = String(phone || '').replace(/\s+/g, '')
  if (!clean) return { code: null, number: '' }
  const match = [...codes].sort((a, b) => b.code.length - a.code.length).find((c) => c.code && clean.startsWith(c.code))
  return match ? { code: match, number: clean.slice(match.code.length) } : { code: null, number: clean }
}

export const joinPhoneNumber = (dialCode, number) => {
  const local = String(number || '').replace(/\D/g, '').replace(/^0+/, '')
  return dialCode && local ? `${dialCode}${local}` : ''
}

export const toDialCodeOptions = (countries = []) =>
  countries
    .map((c) => ({ code: c.dialCode || c.phoneCode || '', flag: c.flag || '🌍', name: c.name || '', nameEn: c.nameEn || '' }))
    .filter((c) => c.code)
