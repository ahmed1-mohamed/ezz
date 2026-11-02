// POST /students/:id/add-sessions rejects more than 3 sessions per operation
export const MAX_SESSIONS_PER_OPERATION = 3

export const getRemainingSessions = (balance) => {
  if (typeof balance === 'object' && balance !== null) {
    return balance.remaining !== undefined
      ? Number(balance.remaining)
      : Math.max(0, Number(balance.total ?? 0) - Number(balance.used ?? 0))
  }
  return Number(balance || 0)
}

// The API also caps manual additions at 3 sessions per calendar month (tracked by lastManualAddMonth "YYYY-MM").
export const MAX_MANUAL_SESSIONS_PER_MONTH = 3

export const getMonthlyManualRemaining = (balance, now = new Date()) => {
  const currentMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`
  const addedThisMonth = balance?.lastManualAddMonth === currentMonth ? Number(balance.manualAddedThisMonth || 0) : 0
  return Math.max(0, MAX_MANUAL_SESSIONS_PER_MONTH - addedThisMonth)
}
