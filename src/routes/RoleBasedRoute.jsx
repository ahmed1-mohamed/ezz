import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../context/useAuth.jsx'

export default function RoleBasedRoute({ allowedRoles }) {
    const { user } = useAuth()
    const location = useLocation()

    if (!user || !allowedRoles.includes(user.role)) {
        return <Navigate to="/unauthorized" state={{ from: location }} replace />
    }

    return <Outlet />
}
