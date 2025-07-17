'use client'

import { useTheme } from '@/hooks/useTheme'
import { Moon, Sun } from 'lucide-react'
import clsx from 'clsx'

interface ThemeToggleProps {
    size?: 'sm' | 'md' | 'lg'
    withTooltip?: boolean
}

const sizeMap = {
    sm: 'p-1 h-6 w-6',
    md: 'p-2 h-8 w-8',
    lg: 'p-3 h-10 w-10',
}

export default function ThemeToggle({
    size = 'md',
    withTooltip = true,
}: ThemeToggleProps) {
    const { theme, toggleTheme } = useTheme()
    const isDark = theme === 'dark'

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            aria-pressed={isDark}
            title={withTooltip ? (isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro') : undefined}
            className={clsx(
                'group rounded-md border transition-colors duration-300',
                'border-[var(--color-border)] bg-[var(--color-card)]',
                'hover:shadow focus:outline-none focus:ring-2 focus:ring-blue-500',
                sizeMap[size]
            )}
        >
            <span className="sr-only">Toggle theme</span>

            <span className="relative block w-full h-full transition-transform duration-300">
                <Sun
                    className={clsx(
                        'absolute inset-0 h-full w-full transition-opacity duration-300',
                        isDark ? 'opacity-100 rotate-0 text-yellow-400' : 'opacity-0 -rotate-90'
                    )}
                />
                <Moon
                    className={clsx(
                        'absolute inset-0 h-full w-full transition-opacity duration-300',
                        isDark ? 'opacity-0 rotate-90' : 'opacity-100 text-gray-800'
                    )}
                />
            </span>
        </button>
    )
}
