import { useCallback, useMemo, useState } from 'react'
import { AuthContext } from './AuthContextValue.jsx'
import { users } from '../services/authService.js'
import useLocalStorage from '../hooks/useLocalStorage.jsx'

function readStoredUser() {
    const saved = localStorage.getItem('authUser') || sessionStorage.getItem('authUser')
    return saved ? JSON.parse(saved) : null
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => readStoredUser())
    const [loading, setLoading] = useState(false)
    const [theme, setTheme] = useLocalStorage('theme', 'light')

    const login = async (email, password, remember) => {
        setLoading(true)

        const normalizedEmail = email.trim().toLowerCase()
        const matchedUser = users.find(
            (item) => item.email === normalizedEmail && item.password === password,
        )

        await new Promise((resolve) => setTimeout(resolve, 500))

        setLoading(false)

        if (!matchedUser) {
            throw new Error('Invalid credentials. Please verify your email and password.')
        }

        const authUser = {
            id: matchedUser.id,
            name: matchedUser.name,
            email: matchedUser.email,
            role: matchedUser.role,
        }

        setUser(authUser)
        const storage = remember ? localStorage : sessionStorage
        storage.setItem('authUser', JSON.stringify(authUser))
        if (remember) {
            sessionStorage.removeItem('authUser')
        } else {
            localStorage.removeItem('authUser')
        }

        return authUser
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem('authUser')
        sessionStorage.removeItem('authUser')
    }

    const toggleTheme = useCallback(() => {
        setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
    }, [setTheme])

    const value = useMemo(
        () => ({ user, loading, login, logout, theme, toggleTheme, setTheme }),
        [user, loading, theme, toggleTheme, setTheme],
    )

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
