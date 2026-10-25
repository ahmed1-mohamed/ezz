import { useMemo, useCallback } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useAuth } from '@/shared/context/useAuth'
import { profileApi } from '@/shared/services/api/profileApi'
import { managersApi } from '@/shared/services/api/managersApi'

export function extractPermissionKeys(source) {
  const set = new Set()
  if (!source) return set

  const addIfKey = (k) => {
    if (typeof k === 'string') {
      const trimmed = k.trim()
      if (trimmed === '*' || trimmed.includes('.')) {
        set.add(trimmed)
      }
    }
  }

  if (Array.isArray(source)) {
    source.forEach(item => {
      if (typeof item === 'string') {
        addIfKey(item)
      } else if (item && typeof item === 'object') {
        const key = item.key || item.action
        addIfKey(key)
        if (Array.isArray(item.keys)) item.keys.forEach(addIfKey)
        if (Array.isArray(item.actions)) {
          item.actions.forEach(a => addIfKey(typeof a === 'object' ? (a.key || a.action) : a))
        }
      }
    })
    return set
  }

  if (typeof source !== 'object') return set

  if (Array.isArray(source.keys)) {
    source.keys.forEach(addIfKey)
  }

  if (Array.isArray(source.actions)) {
    source.actions.forEach(a => addIfKey(typeof a === 'object' ? (a.key || a.action) : a))
  }

  if (source.permissions) {
    if (Array.isArray(source.permissions)) {
      source.permissions.forEach(p => {
        if (typeof p === 'string') addIfKey(p)
        else if (p && typeof p === 'object') {
          addIfKey(p.key || p.action)
          if (Array.isArray(p.keys)) p.keys.forEach(addIfKey)
          if (Array.isArray(p.actions)) {
            p.actions.forEach(a => addIfKey(typeof a === 'object' ? (a.key || a.action) : a))
          }
        }
      })
    } else if (typeof source.permissions === 'object') {
      Object.values(source.permissions).forEach(val => {
        if (Array.isArray(val)) {
          val.forEach(k => addIfKey(typeof k === 'object' ? (k?.key || k?.action) : k))
        } else if (typeof val === 'string') {
          addIfKey(val)
        }
      })
    }
  }

  return set
}

export function useAdminPermissions() {
  const { user } = useAuth()

  const normalizedRole = String(user?.role || '').toLowerCase()
  const isSuperAdmin = normalizedRole === 'super_admin' || normalizedRole === 'superadmin'
  const isPathAdmin = typeof window !== 'undefined' && window.location.pathname.startsWith('/dashboard/admin')
  const isAdmin = !isSuperAdmin && (
    normalizedRole.includes('admin') ||
    normalizedRole.includes('manager') ||
    normalizedRole.includes('supervisor') ||
    normalizedRole === 'staff' ||
    isPathAdmin
  )

  const initialKeys = useMemo(() => {
    if (isSuperAdmin) return new Set(['*'])
    const directSet = new Set()
    const fromPerms = extractPermissionKeys(user?.permissions)
    const fromPerm = extractPermissionKeys(user?.permission)
    fromPerms.forEach(k => directSet.add(k))
    fromPerm.forEach(k => directSet.add(k))
    return directSet
  }, [isSuperAdmin, user?.permissions, user?.permission])

  const userPermissionId = user?.permissionId ||
    user?.permission?.id ||
    user?.permission?._id ||
    (typeof user?.permission === 'string' && user.permission.length === 24 ? user.permission : null)

  const { data: fetchedKeys = [], isLoading } = useQuery({
    queryKey: ['admin-current-permissions', user?.id, userPermissionId],
    queryFn: async () => {
      try {
        let permId = userPermissionId

        let profileData = null
        try {
          const profileRes = await profileApi.fetchProfile()
          profileData = profileRes?.data || profileRes
        } catch (err) {
          console.warn('Profile fetch failed in permissions hook:', err)
        }

        const profilePermKeys = extractPermissionKeys(profileData?.permissions || profileData?.permission)
        if (profilePermKeys.size > 0) {
          return Array.from(profilePermKeys)
        }

        permId = permId ||
          profileData?.permissionId ||
          profileData?.permission?.id ||
          profileData?.permission?._id ||
          (typeof profileData?.permission === 'string' ? profileData.permission : null)

        if (permId) {
          try {
            const singleRes = await managersApi.fetchPermissionById(permId)
            const singleData = singleRes?.data || singleRes
            const singleKeys = extractPermissionKeys(singleData)
            if (singleKeys.size > 0) {
              return Array.from(singleKeys)
            }
          } catch (err) {
            console.warn('fetchPermissionById failed, trying all permissions list:', err)
          }

          const allPermsRes = await managersApi.fetchPermissions()
          const list = allPermsRes?.data || allPermsRes || []
          if (Array.isArray(list)) {
            const matched = list.find(p => (p.id || p._id) === permId)
            if (matched) {
              const matchedKeys = extractPermissionKeys(matched)
              if (matchedKeys.size > 0) return Array.from(matchedKeys)
            }
          }
        } else {
          const allPermsRes = await managersApi.fetchPermissions()
          const list = allPermsRes?.data || allPermsRes || []
          if (Array.isArray(list) && list.length === 1) {
            return Array.from(extractPermissionKeys(list[0]))
          }
        }
      } catch (err) {
        console.error('Failed to resolve admin permissions in hook:', err)
      }

      if (initialKeys.size > 0) {
        return Array.from(initialKeys)
      }

      return []
    },
    enabled: isAdmin && !isSuperAdmin && (!!user?.id || isPathAdmin),
    staleTime: 5 * 60 * 1000,
  })

  const permissionsSet = useMemo(() => {
    if (isSuperAdmin) return new Set(['*'])
    const combined = new Set(initialKeys)
    if (Array.isArray(fetchedKeys)) {
      fetchedKeys.forEach(k => combined.add(k))
    }
    return combined
  }, [isSuperAdmin, initialKeys, fetchedKeys])

  const hasPermission = useCallback((permissionKey) => {
    if (isSuperAdmin) return true
    if (!permissionKey) return true
    if (permissionsSet.has('*')) return true
    return permissionsSet.has(permissionKey)
  }, [isSuperAdmin, permissionsSet])

  const hasAnyPermission = useCallback((permissionKeys = []) => {
    if (isSuperAdmin) return true
    if (!permissionKeys || permissionKeys.length === 0) return true
    if (permissionsSet.has('*')) return true
    return permissionKeys.some(k => permissionsSet.has(k))
  }, [isSuperAdmin, permissionsSet])

  const hasAllPermissions = useCallback((permissionKeys = []) => {
    if (isSuperAdmin) return true
    if (!permissionKeys || permissionKeys.length === 0) return true
    if (permissionsSet.has('*')) return true
    return permissionKeys.every(k => permissionsSet.has(k))
  }, [isSuperAdmin, permissionsSet])

  return {
    isSuperAdmin,
    isAdmin,
    isLoading: isSuperAdmin ? false : isLoading,
    permissionsSet,
    hasPermission,
    hasAnyPermission,
    hasAllPermissions,
  }
}

export default useAdminPermissions
