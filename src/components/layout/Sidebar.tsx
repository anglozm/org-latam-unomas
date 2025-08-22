'use client'

import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'

import { Home } from 'lucide-react'

import Link from 'next/link'

import clsx from 'clsx'

export default function Sidebar() {
    const t = useTranslations('dashboard')

    const pathname = usePathname()

    const navItems = [
        { href: '/', label: t('sidebar.home'), icon: <Home size={18} /> },
    ]

    return (
        <aside
            className={ clsx(
                'hidden md:block w-64 h-screen fixed top-0 left-0 p-6 shadow-sm border-r border-[var(--color-border)]',
                'transition-colors duration-300 bg-[var(--color-surface)] text-[var(--color-fg)]'
        )}>
            <nav className='mt-24 space-y-4'>
                { navItems.map(({ href, label, icon }) => (
                    <Link
                        key={href}
                        href={href}
                        className={ clsx(
                            'flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-500',
                            pathname === href
                                ? 'bg-[var(--color-accent-bg)] text-[var(--color-accent)]'
                                : 'hover:bg-[var(--color-hover-bg)] hover:text-[var(--color-accent)]'
                        )}
                    >
                        {icon}
                        {label}
                    </Link>
                ))}
            </nav>
        </aside>
    )
}
