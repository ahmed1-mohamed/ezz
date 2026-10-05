export const getLocalizedValue = (val, isRtl) => {
  if (!val) return ''
  if (typeof val === 'string') return val
  return isRtl ? (val.ar || val.en || '') : (val.en || val.ar || '')
}
