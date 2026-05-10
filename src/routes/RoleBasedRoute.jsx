import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/useAuth.jsx'

export default function RoleBasedRoute({ allowedRoles, children }) {
    const { user } = useAuth()
    const location = useLocation()

    if (!user || !allowedRoles.includes(user.role)) {
        return <Navigate to="/dashboard" state={{ from: location }} replace />
    }

    return children
}
