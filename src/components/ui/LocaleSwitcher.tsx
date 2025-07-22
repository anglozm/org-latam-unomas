'use client'

import React from 'react'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

import clsx from 'clsx'

const locales = [
    { code: 'es', label: 'Español', icon: '🇻🇪' },
    { code: 'en', label: 'English', icon: '🇺🇸' }
]

export default function LocaleSwitcher() {
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

    // const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    //     const nextLocale = e.target.value
    //     const segments = pathname.split('/')
    //     segments[1] = nextLocale // Replaces the locale
    //     const newPath = segments.join('/') || '/'
    //     router.replace(newPath)
    // }

    return (
        <div className='relative'>
            <button
                onClick={toggleDropdown}
                className={clsx(
                    'flex items-center gap-2 px-3 py-1 rounded-md text-sm border',
                    'border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-fg)]'
                )}
            >
                <span>{current?.icon}</span>
                <span>{current?.label}</span>
            </button>

            { open && (
                <ul
                    className={ clsx(
                        'absolute right-0 mt-2 w-40 rounded-md shadow-lg z-50 bg-[var(--color-card)]',
                        'border border-[var(--color-border)] text-[var(--color-fg)]'
                    )}
                >
                    { locales.map(({ code, label, icon }) => (
                        <li key={code}>
                            <button
                                onClick={() => changeLocale(code)}
                                className='w-full text-left px-4 py-2 text-sm hover:bg-[var(--color-hover-bg)]'
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
