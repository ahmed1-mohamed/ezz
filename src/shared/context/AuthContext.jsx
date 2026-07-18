import { useCallback, useMemo, useState, useEffect } from 'react'
import { AuthContext, AuthActionsContext } from './AuthContextValue.jsx'
import api from '@/shared/services/api/axiosConfig'
import useLocalStorage from '@/shared/hooks/useLocalStorage.jsx'
import { getCookie, setCookie, deleteCookie } from '@/shared/utils/cookieUtils.js'

function readStoredUser() {
    try {
        const token = getCookie('access_token')
        if (!token) {
            deleteCookie('authUser')
            return null
        }
        const saved = getCookie('authUser')
        return saved ? (typeof saved === 'string' ? JSON.parse(saved) : saved) : null
    } catch (error) {
        console.error('Error parsing stored user:', error)
        return null
    }
}

function normalizeRole(roleStr) {
    if (!roleStr || typeof roleStr !== 'string') return 'Parent'
    const r = roleStr.toLowerCase()
    if (r === 'super_admin' || r === 'superadmin') return 'super_admin'
    return roleStr.charAt(0).toUpperCase() + roleStr.slice(1).toLowerCase()
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => readStoredUser())
    const [loading, setLoading] = useState(false)
    const [theme, setTheme] = useLocalStorage('theme', 'light')

    useEffect(() => {
        const token = getCookie('access_token');
        if (token && user) {
            api.get('/api/v1/profile').then(res => {
                const data = res.data?.data || res.data;
                if (data) {
                    setUser(prev => {
                        if (!prev) return prev;
                        const updated = { 
                            ...prev, 
                            name: data.name || prev.name, 
                            image: data.image || prev.image, 
                            email: data.email || prev.email, 
                            role: data.role ? normalizeRole(data.role) : prev.role 
                        };
                        setCookie('authUser', updated, 7);
                        return updated;
                    });
                }
            }).catch(err => {
                console.error("Error fetching latest profile for header:", err);
            });
        }
    }, []);

    const login = useCallback(async (email, password, remember) => {
        setLoading(true)
        try {
            const res = await api.post('/api/v1/auth/login', {
                email: email.trim(),
                password: password
            })
            const data = res.data?.data || res.data
            const accessToken = res.data?.token || res.data?.accessToken || res.data?.access_token || data?.token || data?.accessToken || data?.access_token
            const refreshToken = res.data?.refresh_token || res.data?.refreshToken || data?.refresh_token || data?.refreshToken
            const cookieDays = remember ? 7 : null
            if (accessToken) setCookie('access_token', accessToken, cookieDays)
            if (refreshToken) setCookie('refresh_token', refreshToken, cookieDays)
            const userDetails = data.user || data
            const authUser = {
                id: userDetails.id || 1,
                name: userDetails.name || 'User',
                email: userDetails.email || email,
                role: normalizeRole(userDetails.role),
            }
            setUser(authUser)
            setCookie('authUser', authUser, cookieDays)
            setLoading(false)
            return authUser
        } catch (error) {
            setLoading(false)
            const data = error.response?.data
            const msg = (Array.isArray(data?.message) ? data.message.join(', ') : data?.message) || error.message || 'Login failed'
            throw new Error(msg, { cause: error })
        }
    }, [])

    const loginWithGoogle = useCallback(async (username, password) => {
        setLoading(true)
        try {
            const res = await api.post('/api/v1/auth/google', {
                username: username.trim(),
                password: password
            })
            const data = res.data?.data || res.data
            const accessToken = res.data?.token || res.data?.accessToken || res.data?.access_token || data?.token || data?.accessToken || data?.access_token
            const refreshToken = res.data?.refresh_token || res.data?.refreshToken || data?.refresh_token || data?.refreshToken
            if (accessToken) setCookie('access_token', accessToken, 7)
            if (refreshToken) setCookie('refresh_token', refreshToken, 7)
            const userDetails = data.user || data
            const authUser = {
                id: userDetails.id || 1,
                name: userDetails.name || 'User',
                email: userDetails.email || username,
                role: normalizeRole(userDetails.role),
            }
            setUser(authUser)
            setCookie('authUser', authUser, 7)
            setLoading(false)
            return authUser
        } catch (error) {
            setLoading(false)
            const data = error.response?.data
            const msg = (Array.isArray(data?.message) ? data.message.join(', ') : data?.message) || error.message || 'Google login failed'
            throw new Error(msg, { cause: error })
        }
    }, [])

    const logout = useCallback(() => {
        setUser(null)
        deleteCookie('authUser')
        deleteCookie('access_token')
        deleteCookie('refresh_token')
    }, [])

    const updateUser = useCallback((newData) => {
        setUser((prev) => {
            if (!prev) return prev;
            const updated = { ...prev, ...newData };
            setCookie('authUser', updated, 7);
            return updated;
        });
    }, []);

    const toggleTheme = useCallback(() => {
        setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
    }, [setTheme])

    // User state context — re-renders on login/logout only
    const userValue = useMemo(
        () => ({ user, loading }),
        [user, loading],
    )

    // Actions context — stable function references
    const actionsValue = useMemo(
        () => ({ login, loginWithGoogle, logout, updateUser, theme, toggleTheme, setTheme }),
        [login, loginWithGoogle, logout, updateUser, theme, toggleTheme, setTheme],
    )

    return (
        <AuthContext.Provider value={userValue}>
            <AuthActionsContext.Provider value={actionsValue}>
                {children}
            </AuthActionsContext.Provider>
        </AuthContext.Provider>
    )
}
