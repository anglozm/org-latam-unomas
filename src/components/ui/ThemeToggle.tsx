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
                    'group rounded-md border transition-colors duration-500',
                    'border-[var(--color-border)] bg-[var(--color-card)]',
                    'hover:scale-105 duration-300 ease-in-out',
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
                            isDark ? 'opacity-100 rotate-0 text-yellow-400' : 'opacity-0 -rotate-90'
                        )}
                    />
                    <Moon
                        className={ clsx(
                            'absolute inset-0 h-full w-full transition-opacity duration-300',
                            isDark ? 'opacity-0 rotate-90' : 'opacity-100 text-shadow-blue-950'
                        )}
                    />
                </span>
            </button>
        </Tooltip>
    )
}
