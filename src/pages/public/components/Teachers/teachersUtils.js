export const PORTRAIT_FALLBACK_IMAGES = [
  '1500648767791-00dcc994a43e',
  '1506794778202-cad84cf45f1d',
  '1504257432389-52343af06ae3',
  '1504593811423-6dd665756598',
  '1535713875002-d1d0cf377fde',
  '1560250097-0b93528c311a',
  '1507003211169-0a1dd7228f2d',
  '1519085360753-af0119f7cbe7',
  '1552058544-e397bfc48364',
  '1556157382-97eda2d62296',
  '1501196354995-cbb51c65aaea',
  '1527980965255-d3b416303d12'
]

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
}

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

export const getTeacherFallbackImage = (index = 0) => {
  const imageId = PORTRAIT_FALLBACK_IMAGES[index % PORTRAIT_FALLBACK_IMAGES.length]
  return `https://images.unsplash.com/photo-${imageId}?q=80&w=400&h=400&auto=format&fit=crop`
}

export const extractTeacherSubjects = (teachersList = []) => {
  if (!Array.isArray(teachersList)) return []
  const subjectsSet = new Set()
  teachersList.forEach((teacher) => {
    if (Array.isArray(teacher.specializations)) {
      teacher.specializations.forEach((item) => {
        const specName = typeof item === 'object' && item !== null ? item.name : item
        if (typeof specName === 'string' && specName.trim()) {
          subjectsSet.add(specName.trim())
        }
      })
    }
    if (teacher.subject && typeof teacher.subject === 'string' && teacher.subject.trim()) {
      subjectsSet.add(teacher.subject.trim())
    }
  })
  return Array.from(subjectsSet)
}

export const matchesTeacherCountry = (teacher, selectedCountryId, countriesList = []) => {
  if (!selectedCountryId) return true
  const countryObj = countriesList.find((c) => {
    const cId = c.id || c._id
    return cId === selectedCountryId ||
      (c.code && c.code.toLowerCase() === String(selectedCountryId).toLowerCase()) ||
      c.name === selectedCountryId ||
      c.nameEn === selectedCountryId
  })
  const teacherCountryRaw = teacher.country || teacher.countryId || ''
  const teacherCountryStr = typeof teacherCountryRaw === 'object' && teacherCountryRaw !== null
    ? (teacherCountryRaw.name || teacherCountryRaw.ar || teacherCountryRaw.en || '')
    : String(teacherCountryRaw).trim()
  if (teacher.countryId && countryObj) {
    if (teacher.countryId === countryObj.id || teacher.countryId === countryObj._id) {
      return true
    }
  }
  if (teacherCountryStr && countryObj) {
    if (
      teacherCountryStr === countryObj.id ||
      teacherCountryStr === countryObj._id ||
      (countryObj.code && teacherCountryStr.toLowerCase() === countryObj.code.toLowerCase())
    ) {
      return true
    }
  }
  if (countryObj) {
    const targetAr = (countryObj.name || '').toLowerCase().trim()
    const targetEn = (countryObj.nameEn || '').toLowerCase().trim()
    const teacherLower = teacherCountryStr.toLowerCase().trim()
    if (targetAr && (teacherLower.includes(targetAr) || targetAr.includes(teacherLower))) {
      return true
    }
    if (targetEn && (teacherLower.includes(targetEn) || targetEn.includes(teacherLower))) {
      return true
    }
    if (countryObj.flag && teacherCountryStr.includes(countryObj.flag)) {
      return true
    }
    if (countryObj.phoneCode && teacher.phone && String(teacher.phone).startsWith(countryObj.phoneCode)) {
      return true
    }
  } else {
    const teacherLower = teacherCountryStr.toLowerCase().trim()
    const selLower = String(selectedCountryId).toLowerCase().trim()
    if (teacherLower && (teacherLower.includes(selLower) || selLower.includes(teacherLower))) {
      return true
    }
  }
  return false
}
