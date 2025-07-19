'use client'

import { useEffect, useState } from 'react'

export function useTheme() {
    const [theme, setTheme] = useState<'light' | 'dark'>('light')

    useEffect(() => {
        const stored = localStorage.getItem('theme') as 'light' | 'dark' | null
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        const initial = stored || (systemPrefersDark ? 'dark' : 'light')
        setTheme(initial)
        document.documentElement.classList.toggle('dark', initial === 'dark')
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme)
        document.documentElement.classList.toggle('dark', newTheme === 'dark')
        localStorage.setItem('theme', newTheme)
    }

    return { theme, toggleTheme }
}
