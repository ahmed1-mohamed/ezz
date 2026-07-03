import { useEffect, useRef } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

export default function ScrollManager() {
    const location = useLocation()
    const navType = useNavigationType()
    const allowSavingRef = useRef(false)

    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual'
        }
    }, [])

    useEffect(() => {
        allowSavingRef.current = false
    }, [location.pathname, location.key])

    useEffect(() => {
        let timeoutId
        const handleScroll = () => {
            if (!allowSavingRef.current) return
            clearTimeout(timeoutId)
            timeoutId = setTimeout(() => {
                const scrollData = { x: window.scrollX, y: window.scrollY }
                sessionStorage.setItem(`scroll_${location.key || location.pathname}`, JSON.stringify(scrollData))
                sessionStorage.setItem(`scroll_refresh_${location.pathname}`, JSON.stringify(scrollData))
            }, 100)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })

        const handleBeforeUnload = () => {
            if (!allowSavingRef.current) return
            const scrollData = { x: window.scrollX, y: window.scrollY }
            sessionStorage.setItem(`scroll_${location.key || location.pathname}`, JSON.stringify(scrollData))
            sessionStorage.setItem(`scroll_refresh_${location.pathname}`, JSON.stringify(scrollData))
        }
        window.addEventListener('beforeunload', handleBeforeUnload)

        return () => {
            clearTimeout(timeoutId)
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('beforeunload', handleBeforeUnload)
        }
    }, [location.key, location.pathname])

    useEffect(() => {
        if (location.state?.scrollToHero) {
            const restoreHero = () => {
                const hero = document.getElementById('hero-section')
                if (hero) {
                    hero.scrollIntoView({ behavior: 'smooth' })
                } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                }
                allowSavingRef.current = true
            }
            restoreHero()
            const t1 = setTimeout(restoreHero, 50)
            const t2 = setTimeout(restoreHero, 150)
            window.history.replaceState({ ...window.history.state, state: null }, '')
            return () => {
                clearTimeout(t1)
                clearTimeout(t2)
            }
        }

        const savedPosition = sessionStorage.getItem(`scroll_${location.key || location.pathname}`)
        const savedRefresh = sessionStorage.getItem(`scroll_refresh_${location.pathname}`)
        const activeSave = savedPosition || savedRefresh

        if (activeSave) {
            const { x, y } = JSON.parse(activeSave)
            let isRestored = false

            const restore = () => {
                if (isRestored) return
                window.scrollTo(x, y)
                if (Math.abs(window.scrollY - y) < 5 || window.scrollY >= document.documentElement.scrollHeight - window.innerHeight) {
                    isRestored = true
                    allowSavingRef.current = true
                }
            }

            const stopRestoration = () => {
                isRestored = true
                allowSavingRef.current = true
            }

            window.addEventListener('wheel', stopRestoration, { passive: true })
            window.addEventListener('touchmove', stopRestoration, { passive: true })
            window.addEventListener('keydown', stopRestoration, { passive: true })

            const observer = new ResizeObserver(() => {
                restore()
            })
            observer.observe(document.documentElement)

            restore()
            const t1 = setTimeout(restore, 50)
            const t2 = setTimeout(restore, 150)
            const t3 = setTimeout(restore, 300)
            const t4 = setTimeout(restore, 600)
            const t5 = setTimeout(restore, 1000)

            const safetyTimeout = setTimeout(() => {
                allowSavingRef.current = true
            }, 1500)

            return () => {
                observer.disconnect()
                window.removeEventListener('wheel', stopRestoration)
                window.removeEventListener('touchmove', stopRestoration)
                window.removeEventListener('keydown', stopRestoration)
                clearTimeout(t1)
                clearTimeout(t2)
                clearTimeout(t3)
                clearTimeout(t4)
                clearTimeout(t5)
                clearTimeout(safetyTimeout)
            }
        } else {
            allowSavingRef.current = true
            if (navType === 'PUSH') {
                window.scrollTo(0, 0)
            }
        }
    }, [location.pathname, location.search, location.key, navType])

    return null
}