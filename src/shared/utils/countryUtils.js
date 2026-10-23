import api from '@/shared/services/api/axiosConfig'

/**
 * Normalizes a country object from `/api/v1/countries`
 * API format: { id, name, dialCode, flag, code }
 *
 * @param {Object} country
 * @returns {Object}
 */
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

/**
 * Normalizes an array of country objects.
 *
 * @param {Array} list
 * @returns {Array}
 */
export const normalizeCountries = (list = []) => {
  if (!Array.isArray(list)) return []
  return list.map(normalizeCountry)
}

/**
 * Safely extracts the phone dial code (e.g. "+20").
 *
 * @param {Object} country
 * @returns {string}
 */
export const getCountryDialCode = (country) => {
  if (!country) return ''
  return country.dialCode || country.phoneCode || (typeof country.code === 'string' && country.code.startsWith('+') ? country.code : '') || ''
}

let cachedCountriesPromise = null
let cachedCountriesList = null

/**
 * Fetches countries from `/api/v1/countries`, normalizes them, and caches the result.
 *
 * @param {Object} params
 * @returns {Promise<Array>}
 */
export const fetchCountries = async (params = {}) => {
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
  }
}

/**
 * Safely extracts the display name of a country based on the language/isRtl.
 *
 * @param {Object|string} country
 * @param {boolean} isRtl
 * @returns {string}
 */
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

/**
 * Sorts a list of countries alphabetically by country name in the active language (Arabic or English).
 *
 * @param {Array} countries
 * @param {boolean} isRtl
 * @returns {Array}
 */
export const sortCountries = (countries = [], isRtl = true) => {
  if (!Array.isArray(countries)) return []
  const lang = isRtl ? 'ar' : 'en'
  return [...countries].sort((a, b) => {
    const nameA = getCountryName(a, isRtl)
    const nameB = getCountryName(b, isRtl)
    return nameA.localeCompare(nameB, lang, { sensitivity: 'base' })
  })
}

/**
 * Sorts phone country codes alphabetically by country name in the active language (Arabic or English).
 *
 * @param {Array} countryCodes
 * @param {boolean} isRtl
 * @returns {Array}
 */
export const sortCountryCodes = (countryCodes = [], isRtl = true) => {
  if (!Array.isArray(countryCodes)) return []
  const lang = isRtl ? 'ar' : 'en'
  return [...countryCodes].sort((a, b) => {
    const nameA = getCountryName(a, isRtl)
    const nameB = getCountryName(b, isRtl)
    return nameA.localeCompare(nameB, lang, { sensitivity: 'base' })
  })
}
