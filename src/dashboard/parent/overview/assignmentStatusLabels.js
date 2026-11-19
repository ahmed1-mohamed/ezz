export function getSubmissionStatusLabel(status, t) {
  const value = String(status || '').trim().toLowerCase();
  if ((value.includes('تم التسليم') && value.includes('متأخر')) || value.includes('submitted_late') || value.includes('submitted-late')) {
    return t('parent.assignments.submittedLateStatus');
  }
  if (value.includes('تم التسليم') || value === 'submitted' || value === 'completed') {
    return t('parent.assignments.submittedStatus');
  }
  if (value.includes('متأخر') || value.includes('overdue')) {
    return t('parent.assignments.overdueStatus');
  }
  if (value.includes('انتظار') || value.includes('pending')) {
    return t('parent.assignments.pendingStatus');
  }
  return status || t('parent.assignments.pendingStatus');
}

export function getEvaluationStatusLabel(status, t) {
  const value = String(status || '').trim().toLowerCase();
  if (value.includes('تم التقييم') || value === 'evaluated') {
    return t('parent.assignments.evaluatedStatus');
  }
  if (value.includes('غير مقيم') || value.includes('لم يتم') || value === 'not_evaluated' || value === 'not-evaluated') {
    return t('parent.assignments.notEvaluatedStatus');
  }
  if (value.includes('قيد') || value.includes('pending') || value.includes('review')) {
    return t('parent.assignments.evaluationPendingStatus');
  }
  return status || '';
}
