import { useCallback, useMemo, useState, useEffect, useRef } from 'react'
import { AuthContext, AuthActionsContext } from './AuthContextValue.jsx'
import api from '@/shared/services/api/axiosConfig'
import { authApi } from '@/shared/services/api/authApi'
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

    const refreshProfile = useCallback(async (baseUser, cookieDays = 7) => {
        try {
            const res = await api.get('/api/v1/profile');
            const data = res.data?.data || res.data;
            if (data) {
                const updated = {
                    ...baseUser,
                    name: data.name || baseUser.name,
                    image: data.image || data.avatar || data.photo || data.photoUrl || baseUser.image,
                    avatar: data.avatar || data.image || data.photo || data.photoUrl || baseUser.avatar,
                    email: data.email || baseUser.email,
                    role: data.role ? normalizeRole(data.role) : baseUser.role,
                    permission: data.permission || baseUser.permission || null,
                    permissionId: data.permissionId || data.permission?.id || data.permission?._id || (typeof data.permission === 'string' ? data.permission : (baseUser.permissionId || null)),
                    permissions: data.permissions || data.permission?.permissions || data.permission?.keys || baseUser.permissions || null
                };
                setUser(updated);
                setCookie('authUser', updated, cookieDays);
                return updated;
            }
        } catch (err) {
            console.error("Error fetching latest profile:", err);
        }
        return baseUser;
    }, []);

    const refreshedTokenRef = useRef(null);

    useEffect(() => {
        const token = getCookie('access_token');
        if (token && user && refreshedTokenRef.current !== token) {
            refreshedTokenRef.current = token;
            Promise.resolve().then(() => refreshProfile(user));
        }
    }, [refreshProfile, user]);

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
            let authUser = {
                id: userDetails.id || 1,
                name: userDetails.name || 'User',
                email: userDetails.email || email,
                role: normalizeRole(userDetails.role),
                image: userDetails.image || userDetails.avatar || userDetails.photo || userDetails.photoUrl || null,
                avatar: userDetails.avatar || userDetails.image || userDetails.photo || userDetails.photoUrl || null,
                permission: userDetails.permission || null,
                permissionId: userDetails.permissionId || userDetails.permission?.id || userDetails.permission?._id || (typeof userDetails.permission === 'string' ? userDetails.permission : null),
                permissions: userDetails.permissions || userDetails.permission?.permissions || userDetails.permission?.keys || null,
            }
            setUser(authUser)
            setCookie('authUser', authUser, cookieDays)

            const fullProfile = await refreshProfile(authUser, cookieDays)
            if (fullProfile) authUser = fullProfile

            setLoading(false)
            return authUser
        } catch (error) {
            setLoading(false)
            const data = error.response?.data
            const msg = (Array.isArray(data?.message) ? data.message.join(', ') : data?.message) || error.message || 'Login failed'
            throw new Error(msg, { cause: error })
        }
    }, [refreshProfile])

    const signup = useCallback(async (signupData) => {
        setLoading(true)
        try {
            const res = await api.post('/api/v1/auth/signup', signupData)
            const data = res.data?.data || res.data
            const accessToken = res.data?.token || res.data?.accessToken || res.data?.access_token || data?.token || data?.accessToken || data?.access_token
            const refreshToken = res.data?.refresh_token || res.data?.refreshToken || data?.refresh_token || data?.refreshToken
            if (accessToken) setCookie('access_token', accessToken, 7)
            if (refreshToken) setCookie('refresh_token', refreshToken, 7)
            const userDetails = data.user || data
            let authUser = {
                id: userDetails.id || userDetails._id || 1,
                name: signupData.name || userDetails.name || 'User',
                email: userDetails.email || signupData.email,
                role: normalizeRole(userDetails.role || 'Student'),
                image: userDetails.image || userDetails.avatar || null,
                avatar: userDetails.avatar || userDetails.image || null,
            }
            setUser(authUser)
            setCookie('authUser', authUser, 7)

            try {
                const fullProfile = await refreshProfile(authUser, 7)
                if (fullProfile) authUser = fullProfile
            } catch (err) {
                void err;
            }

            setLoading(false)
            return authUser
        } catch (error) {
            setLoading(false)
            const data = error.response?.data
            const msg = (Array.isArray(data?.message) ? data.message.join(', ') : data?.message) || error.message || 'Signup failed'
            throw new Error(msg, { cause: error })
        }
    }, [refreshProfile])

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
            let authUser = {
                id: userDetails.id || 1,
                name: userDetails.name || 'User',
                email: userDetails.email || username,
                role: normalizeRole(userDetails.role),
                image: userDetails.image || userDetails.avatar || userDetails.photo || userDetails.photoUrl || null,
                avatar: userDetails.avatar || userDetails.image || userDetails.photo || userDetails.photoUrl || null,
            }
            setUser(authUser)
            setCookie('authUser', authUser, 7)

            const fullProfile = await refreshProfile(authUser, 7)
            if (fullProfile) authUser = fullProfile

            setLoading(false)
            return authUser
        } catch (error) {
            setLoading(false)
            const data = error.response?.data
            const msg = (Array.isArray(data?.message) ? data.message.join(', ') : data?.message) || error.message || 'Google login failed'
            throw new Error(msg, { cause: error })
        }
    }, [refreshProfile])

    const logout = useCallback(async (options = {}) => {
        const redirectPath = (typeof options === 'string')
            ? options
            : (options && typeof options.redirectPath === 'string' ? options.redirectPath : '/login')

        try {
            await authApi.logout()
        } catch (err) {
            console.warn('API logout error:', err)
        } finally {
            setUser(null)
            deleteCookie('authUser')
            deleteCookie('access_token')
            deleteCookie('refresh_token')
            if (api?.defaults?.headers?.common) {
                delete api.defaults.headers.common['Authorization']
            }
            try {
                localStorage.removeItem('access_token')
                localStorage.removeItem('refresh_token')
                localStorage.removeItem('authUser')
            } catch (err) {
                void err;
            }
            if (redirectPath && typeof redirectPath === 'string') {
                window.location.href = redirectPath
            }
        }
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

    const userValue = useMemo(
        () => ({ user, loading }),
        [user, loading],
    )

    const actionsValue = useMemo(
        () => ({ login, signup, loginWithGoogle, logout, updateUser, theme, toggleTheme, setTheme }),
        [login, signup, loginWithGoogle, logout, updateUser, theme, toggleTheme, setTheme],
    )

    return (
        <AuthContext.Provider value={userValue}>
            <AuthActionsContext.Provider value={actionsValue}>
                {children}
            </AuthActionsContext.Provider>
        </AuthContext.Provider>
    )
}
