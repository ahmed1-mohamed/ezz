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
      if (normalized.length > 0) {
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