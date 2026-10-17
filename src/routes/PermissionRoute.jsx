import { Navigate, useLocation } from 'react-router-dom'
import { useAdminPermissions } from '@/shared/hooks/useAdminPermissions'
import Spinner from '@/shared/components/Spinner'

export default function PermissionRoute({ permission, permissions, children }) {
  const { isSuperAdmin, hasPermission, hasAnyPermission, isLoading } = useAdminPermissions()
  const location = useLocation()

  if (isLoading) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <Spinner />
      </div>
    )
  }

  if (isSuperAdmin) {
    return children
  }

  let isAllowed = true
  if (permission) {
    isAllowed = hasPermission(permission)
  } else if (permissions && permissions.length > 0) {
    isAllowed = hasAnyPermission(permissions)
  }

  if (!isAllowed) {
    return <Navigate to="/dashboard/admin" state={{ from: location }} replace />
  }

  return children
}
