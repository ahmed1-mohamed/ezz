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

export const getTeacherImageUrl = (imagePath) => {
  if (!imagePath || typeof imagePath !== 'string' || !imagePath.trim()) return null
  const trimmed = imagePath.trim()
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://') || trimmed.startsWith('data:') || trimmed.startsWith('blob:')) {
    return trimmed
  }
  const cleanPath = trimmed.startsWith('/') ? trimmed.slice(1) : trimmed
  return `https://manaret-ezz.dramcode.top/${cleanPath}`
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
