import { useEffect } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '@/shared/context/useAuth.jsx'
import { getCookie } from '@/shared/utils/cookieUtils.js'
import SEOHead from '@/shared/components/SEOHead.jsx'

export default function ProtectedRoute() {
    const { user, logout } = useAuth()
    const location = useLocation()
    const token = getCookie('access_token')

    const hasUserButNoToken = !!(user && !token)

    useEffect(() => {
        if (hasUserButNoToken) {
            logout()
        }
    }, [hasUserButNoToken, logout])

    if (!user || !token) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    return (
        <>
            <SEOHead noindex title="Dashboard" />
            <Outlet />
        </>
    )
}
