import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '@/shared/context/useAuth.jsx'

export default function RoleBasedRoute({ allowedRoles }) {
    const { user } = useAuth()
    const location = useLocation()

    const hasAccess = user && allowedRoles.some(
        (role) => role.toLowerCase() === user.role.toLowerCase()
    )

    if (!user || !hasAccess) {
        return <Navigate to="/unauthorized" state={{ from: location }} replace />
    }

    return <Outlet />
}
