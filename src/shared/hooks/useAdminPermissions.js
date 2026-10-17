import { useMemo, useCallback } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useAuth } from '@/shared/context/useAuth'
import { profileApi } from '@/shared/services/api/profileApi'
import { managersApi } from '@/shared/services/api/managersApi'

/**
 * Robustly extracts permission key strings from any permission data structure:
 * - Array of strings: ['logs.read', 'messages.read']
 * - Array of objects: [{ key: 'logs.read' }] or [{ name: 'logs.read' }]
 * - Object with `keys`: { keys: ['logs.read'] }
 * - Object with `actions`: { actions: [{ key: 'logs.read' }] }
 * - Object with `permissions`: { permissions: { logs: ['logs.read'] } }
 * - Direct categorized object: { logs: ['logs.read'], messages: ['messages.read'] }
 */
export function extractPermissionKeys(source) {
  const set = new Set()
  if (!source) return set

  if (Array.isArray(source)) {
    source.forEach(item => {
      if (typeof item === 'string') {
        set.add(item)
      } else if (item && typeof item === 'object') {
        const key = item.key || item.name || item.action || item.id
        if (typeof key === 'string') set.add(key)
      }
    })
    return set
  }

  if (typeof source !== 'object') return set

  if (Array.isArray(source.keys)) {
    source.keys.forEach(k => {
      if (typeof k === 'string') set.add(k)
      else if (k && typeof k === 'object' && k.key) set.add(k.key)
    })
  }

  if (Array.isArray(source.actions)) {
    source.actions.forEach(a => {
      if (typeof a === 'string') set.add(a)
      else if (a && typeof a === 'object' && (a.key || a.name)) set.add(a.key || a.name)
    })
  }

  if (source.permissions) {
    if (Array.isArray(source.permissions)) {
      source.permissions.forEach(p => {
        if (typeof p === 'string') set.add(p)
        else if (p && typeof p === 'object' && (p.key || p.name)) set.add(p.key || p.name)
      })
    } else if (typeof source.permissions === 'object') {
      Object.values(source.permissions).forEach(val => {
        if (Array.isArray(val)) {
          val.forEach(k => {
            if (typeof k === 'string') set.add(k)
            else if (k && typeof k === 'object' && (k.key || k.name)) set.add(k.key || k.name)
          })
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
  const isAdmin = !isSuperAdmin && (normalizedRole === 'admin')

  // Direct keys present on user object (if already attached)
  const initialKeys = useMemo(() => {
    if (isSuperAdmin) return new Set(['*'])
    const directSet = new Set()
    const fromPerms = extractPermissionKeys(user?.permissions)
    const fromPerm = extractPermissionKeys(user?.permission)
    fromPerms.forEach(k => directSet.add(k))
    fromPerm.forEach(k => directSet.add(k))
    return directSet
  }, [isSuperAdmin, user?.permissions, user?.permission])

  // Fetch full permission details if not super admin
  const userPermissionId = user?.permissionId ||
    user?.permission?.id ||
    user?.permission?._id ||
    (typeof user?.permission === 'string' ? user.permission : null)

  const { data: fetchedKeys = [], isLoading } = useQuery({
    queryKey: ['admin-current-permissions', user?.id, userPermissionId],
    queryFn: async () => {
      // If we already have direct keys from user object, we can return them
      if (initialKeys.size > 0) {
        return Array.from(initialKeys)
      }

      try {
        // Fetch fresh profile to get permission reference
        const profileRes = await profileApi.fetchProfile()
        const profileData = profileRes?.data

        // Check if profile has populated permissions
        const profilePermKeys = extractPermissionKeys(profileData?.permissions || profileData?.permission)
        if (profilePermKeys.size > 0) {
          return Array.from(profilePermKeys)
        }

        const effectivePermId = profileData?.permissionId ||
          profileData?.permission?.id ||
          profileData?.permission?._id ||
          (typeof profileData?.permission === 'string' ? profileData.permission : null) ||
          userPermissionId

        if (effectivePermId) {
          const allPermsRes = await managersApi.fetchPermissions()
          const list = allPermsRes?.data || allPermsRes || []
          if (Array.isArray(list)) {
            const matched = list.find(p => (p.id || p._id) === effectivePermId)
            if (matched) {
              return Array.from(extractPermissionKeys(matched))
            }
          }
        }
      } catch (err) {
        console.error('Failed to resolve admin permissions in hook:', err)
      }

      return []
    },
    enabled: isAdmin && !isSuperAdmin && !!user?.id,
    staleTime: 5 * 60 * 1000,
  })

  // Combined active permissions set
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
    return permissionsSet.has(permissionKey)
  }, [isSuperAdmin, permissionsSet])

  const hasAnyPermission = useCallback((permissionKeys = []) => {
    if (isSuperAdmin) return true
    if (!permissionKeys || permissionKeys.length === 0) return true
    return permissionKeys.some(k => permissionsSet.has(k))
  }, [isSuperAdmin, permissionsSet])

  const hasAllPermissions = useCallback((permissionKeys = []) => {
    if (isSuperAdmin) return true
    if (!permissionKeys || permissionKeys.length === 0) return true
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
