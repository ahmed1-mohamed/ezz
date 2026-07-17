import { useContext } from 'react'
import { AuthContext, AuthActionsContext } from './AuthContextValue.jsx'

export function useAuth() {
    const userCtx = useContext(AuthContext)
    const actionsCtx = useContext(AuthActionsContext)
    if (!userCtx || !actionsCtx) {
        throw new Error('useAuth must be used within AuthProvider')
    }
    // Merge both contexts for backward compatibility — existing code doesn't need to change
    return { ...userCtx, ...actionsCtx }
}

export function useAuthUser() {
    const ctx = useContext(AuthContext)
    if (!ctx) throw new Error('useAuthUser must be used within AuthProvider')
    return ctx
}

export function useAuthActions() {
    const ctx = useContext(AuthActionsContext)
    if (!ctx) throw new Error('useAuthActions must be used within AuthProvider')
    return ctx
}
