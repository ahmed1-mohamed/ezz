import { useCallback, useMemo, useState, useEffect } from 'react'
import { AuthContext } from './AuthContextValue.jsx'
import api from '@/shared/services/api/axiosConfig'
import useLocalStorage from '@/shared/hooks/useLocalStorage.jsx'

function readStoredUser() {
    try {
        const token = localStorage.getItem('access_token')
        if (!token) {
            localStorage.removeItem('authUser')
            sessionStorage.removeItem('authUser')
            return null
        }
        const saved = localStorage.getItem('authUser') || sessionStorage.getItem('authUser')
        return saved ? JSON.parse(saved) : null
    } catch (error) {
        console.error('Error parsing stored user:', error)
        return null
    }
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => readStoredUser())
    const [loading, setLoading] = useState(false)
    const [theme, setTheme] = useLocalStorage('theme', 'light')

    useEffect(() => {
        const handleStorageChange = (event) => {
            if (event.key === 'access_token' && !event.newValue) {
                logout()
            }
        }
        window.addEventListener('storage', handleStorageChange)
        return () => window.removeEventListener('storage', handleStorageChange)
    }, [])

    const login = async (email, password, remember) => {
        setLoading(true)
        try {
            const res = await api.post('/api/v1/auth/login', {
                email: email.trim(),
                password: password
            })

            const data = res.data?.data || res.data
            const accessToken = res.data?.token || res.data?.accessToken || res.data?.access_token || data?.token || data?.accessToken || data?.access_token
            const refreshToken = res.data?.refresh_token || res.data?.refreshToken || data?.refresh_token || data?.refreshToken

            if (accessToken) {
                localStorage.setItem('access_token', accessToken)
            }
            if (refreshToken) {
                localStorage.setItem('refresh_token', refreshToken)
            }

            const userDetails = data.user || data
            let userRole = 'Parent'
            if (userDetails.role && typeof userDetails.role === 'string') {
                const r = userDetails.role.toLowerCase()
                if (r === 'super_admin' || r === 'superadmin') {
                    userRole = 'super_admin'
                } else {
                    userRole = userDetails.role.charAt(0).toUpperCase() + userDetails.role.slice(1).toLowerCase()
                }
            }
            const authUser = {
                id: userDetails.id || 1,
                name: userDetails.name || 'User',
                email: userDetails.email || email,
                role: userRole,
            }

            setUser(authUser)
            const storage = remember ? localStorage : sessionStorage
            storage.setItem('authUser', JSON.stringify(authUser))

            if (remember) {
                sessionStorage.removeItem('authUser')
            } else {
                localStorage.removeItem('authUser')
            }
            setLoading(false)
            return authUser
        } catch (error) {
            setLoading(false)
            const data = error.response?.data
            const msg = (Array.isArray(data?.message) ? data.message.join(', ') : data?.message) || error.message || 'Login failed'
            throw new Error(msg)
        }
    }

    const loginWithGoogle = async (username, password) => {
        setLoading(true)
        try {
            const res = await api.post('/api/v1/auth/google', {
                username: username.trim(),
                password: password
            })
            const data = res.data?.data || res.data
            const accessToken = res.data?.token || res.data?.accessToken || res.data?.access_token || data?.token || data?.accessToken || data?.access_token
            const refreshToken = res.data?.refresh_token || res.data?.refreshToken || data?.refresh_token || data?.refreshToken
            if (accessToken) {
                localStorage.setItem('access_token', accessToken)
            }
            if (refreshToken) {
                localStorage.setItem('refresh_token', refreshToken)
            }
            const userDetails = data.user || data
            let userRole = 'Parent'
            if (userDetails.role && typeof userDetails.role === 'string') {
                const r = userDetails.role.toLowerCase()
                if (r === 'super_admin' || r === 'superadmin') {
                    userRole = 'super_admin'
                } else {
                    userRole = userDetails.role.charAt(0).toUpperCase() + userDetails.role.slice(1).toLowerCase()
                }
            }
            const authUser = {
                id: userDetails.id || 1,
                name: userDetails.name || 'User',
                email: userDetails.email || username,
                role: userRole,
            }
            setUser(authUser)
            localStorage.setItem('authUser', JSON.stringify(authUser))
            setLoading(false)
            return authUser
        } catch (error) {
            setLoading(false)
            const data = error.response?.data
            const msg = (Array.isArray(data?.message) ? data.message.join(', ') : data?.message) || error.message || 'Google login failed'
            throw new Error(msg)
        }
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem('authUser')
        sessionStorage.removeItem('authUser')
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
    }

    const toggleTheme = useCallback(() => {
        setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
    }, [setTheme])

    const value = useMemo(
        () => ({ user, loading, login, loginWithGoogle, logout, theme, toggleTheme, setTheme }),
        [user, loading, theme, toggleTheme, setTheme],
    )

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
