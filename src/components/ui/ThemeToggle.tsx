'use client'

import { useTheme } from '@/hooks/useTheme'
import { useTranslations } from 'next-intl'

import { Moon, Sun } from 'lucide-react'

import Tooltip from '@/components/ui/Tooltip'

import clsx from 'clsx'

interface ThemeToggleProps {
    size?: 'sm' | 'md' | 'lg'
    withTooltip?: boolean
}

const sizeMap = {
    sm: 'p-1 h-6 w-6',
    md: 'p-2 h-8 w-8',
    lg: 'p-3 h-10 w-10'
}

export default function ThemeToggle({
    size = 'md',
    withTooltip = true
}: ThemeToggleProps) {
    const t = useTranslations('navbar')
    const { theme, toggleTheme } = useTheme()
    const isDark = theme === 'dark'

    return (
        <Tooltip content={withTooltip ? (isDark ? t('tooltip.to-light-mode') : t('tooltip.to-dark-mode')) : ''}>
            <button
                className={ clsx(
                    'cursor-pointer',
                    'group rounded-md transition-colors duration-500',
                    'bg-[var(--color-app-secondary-bg-contrast-dark)]',
                    'hover:scale-105 ease-in-out',
                    'hover:shadow focus:outline-none focus:ring-1 focus:ring-blue-400',
                    sizeMap[size]
                )}
                onClick={toggleTheme}
                aria-label='Toggle theme'
                aria-pressed={isDark}
            >
                <span className='sr-only'>Toggle theme</span>

                <span className='relative block w-full h-full transition-transform duration-300'>
                    <Sun
                        className={ clsx(
                            'absolute inset-0 h-full w-full transition-opacity duration-300',
                            isDark ? 'opacity-100 rotate-90 transform transition-transform text-yellow-400' : 'opacity-0 -rotate-90 transform transition-transform'
                        )}
                    />
                    <Moon
                        className={ clsx(
                            'absolute inset-0 h-full w-full transition-opacity duration-300',
                            isDark ? 'opacity-0 rotate-90 transform transition-transform' : 'opacity-100 -rotate-90 text-sky-800 transform transition-transform'
                        )}
                    />
                </span>
            </button>
        </Tooltip>
    )
}
