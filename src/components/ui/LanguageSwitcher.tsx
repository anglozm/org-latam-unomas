'use client'

import React from 'react'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'

import clsx from 'clsx'

const locales = [
    { code: 'es', label: '🇪🇸 Español' },
    { code: 'en', label: '🇺🇸 English' }
]

export default function LanguageSwitcher() {
    const router = useRouter()
    const pathname = usePathname()
    const currentLocale = useLocale()

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value

        // To be used with --> import { usePathname, useRouter } from 'next-intl/navigation'
        // router.push(pathname, { locale: nextLocale })

        //===== Generates a new URL with changed locale =====
        const segments = pathname.split('/')
        segments[1] = nextLocale // Replaces the locale
        const newPath = segments.join('/') || '/'
        //===================================================

        router.replace(newPath)
    }

    return (
        <select
            onChange={handleChange}
            defaultValue={currentLocale}
            aria-label='Cambiar idioma'
            className={ clsx(
                'px-2 py-1 rounded-md text-sm border border-[var(--color-border)]',
                'bg-[var(--color-card)] text-[var(--color-fg)] transition'
            )}
        >
            { locales.map(({ code, label }) => (
                <option key={code} value={code}>
                    {label}
                </option>
            ))}
        </select>
    )
}
