export const getLocalizedValue = (val, isRtl) => {
  if (!val) return ''
  if (typeof val === 'string') return val
  return isRtl ? (val.ar || val.en || '') : (val.en || val.ar || '')
}

const normalizeSchedule = (list = []) =>
  JSON.stringify((list || []).map((s) => [String(s.day || '').toLowerCase(), s.startTime, s.endTime]))

export const saveGroupEdits = async (adminGroupsApi, group, formData) => {
  const groupId = group.id || group._id
  const res = await adminGroupsApi.updateGroup(groupId, {
    name: formData.name,
    country: formData.country,
    maxStudents: formData.maxStudents,
    startDate: formData.startDate,
    endDate: formData.endDate,
    imageFile: formData.imageFile,
  })
  if (Array.isArray(formData.weeklySchedule) && normalizeSchedule(formData.weeklySchedule) !== normalizeSchedule(group.weeklySchedule)) {
    await adminGroupsApi.updateGroupSchedule(groupId, formData.weeklySchedule)
  }
  if (formData.status && formData.status !== group.status) {
    await adminGroupsApi.updateGroupStatus(groupId, formData.status)
  }
  const currentTeacherId = String(group.teacher?.teacher_id || group.teacher?.id || group.teacher?._id || (typeof group.teacher === 'string' ? group.teacher : ''))
  const newTeacherId = String(formData.teacher || '')
  if (newTeacherId && newTeacherId !== currentTeacherId) {
    await adminGroupsApi.changeTeacher(groupId, newTeacherId)
  }
  return res
}
