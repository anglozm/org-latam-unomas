'use client'

import React from 'react'

import { useLocale, useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

import Tooltip from '@/components/ui/Tooltip'

import clsx from 'clsx'

const locales = [
    { code: 'es', label: 'Español', icon: '🇻🇪' },
    { code: 'en', label: 'English', icon: '🇺🇸' },
    { code: 'pt', label: 'Português', icon: '🇧🇷' },
]

interface LocaleSwitcherProps {
    withTooltip?: boolean
}

export default function LocaleSwitcher({
    withTooltip = true
}: LocaleSwitcherProps) {
    const t = useTranslations('navbar')

    const [ open, setOpen ] = useState(false)
    const currentLocale = useLocale()
    const pathname = usePathname()
    const router = useRouter()

    const toggleDropdown = () => setOpen(!open)

    const changeLocale = (nextLocale: string) => {
        // To be used with --> import { usePathname, useRouter } from 'next-intl/navigation'
        // router.push(pathname, { locale: nextLocale })

        //===== Generates a new URL with changed locale =====
        const segments = pathname.split('/')
        segments[1] = nextLocale // Replaces locale
        const newPath = segments.join('/') || '/'
        //===================================================

        router.replace(newPath)
        setOpen(false)
    }

    const current = locales.find((l) => l.code === currentLocale)

    return (
        <div className={ clsx(
            'relative transition-colors duration-500'
        )}>
            <Tooltip content={withTooltip ? t('tooltip.to-change-lang') : ''}>
                <button
                    onClick={toggleDropdown}
                    className={ clsx(
                        'cursor-pointer hover:shadow focus:outline-none hover:scale-105 duration-300 ease-in-out',
                        'flex items-center gap-2 rounded-md text-sm focus:ring-1 focus:ring-blue-400 p-2.5 w-28',
                        'bg-[var(--color-app-secondary-bg-contrast-dark)]',
                        'text-[var(--color-fg)] transition-colors duration-500'
                    )}
                >
                    <span>{current?.icon}</span>
                    <span>{current?.label}</span>
                </button>
            </Tooltip>

            { open && (
                <ul
                    className={ clsx(
                        'absolute right-0 mt-2 w-40 rounded-md shadow-lg z-50 bg-[var(--color-card)]',
                        'border border-[var(--color-border)] text-[var(--color-fg)] transition-colors duration-500'
                    )}
                >
                    { locales.map(({ code, label, icon }) => (
                        <li key={code}>
                            <button
                                onClick={() => changeLocale(code)}
                                className={ clsx(
                                    'cursor-pointer transition-colors duration-300',
                                    'w-full text-left px-4 py-2 text-sm hover:bg-[var(--color-hover-bg)]',
                                )}
                            >
                                {icon} {label}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
