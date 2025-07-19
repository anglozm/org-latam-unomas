'use client'

import { usePathname } from 'next/navigation'
import { Home, Users, BarChart, Settings } from 'lucide-react'

import Link from 'next/link'
import clsx from 'clsx'

const navItems = [
    { href: '/', label: 'Inicio', icon: <Home size={18} /> },
    { href: '/team', label: 'Mi equipo', icon: <Users size={18} /> },
    { href: '/dashboard', label: 'Estadísticas', icon: <BarChart size={18} /> },
    { href: '/settings', label: 'Configuración', icon: <Settings size={18} /> },
]

export default function Sidebar() {
    const pathname = usePathname()

    return (
        <aside className='hidden md:block w-64 h-screen fixed top-0 left-0 p-6 shadow-sm border-r transition-colors duration-300 bg-[var(--color-surface)] border-[var(--color-border)] text-[var(--color-fg)]'>
            <h2 className='text-xl font-bold text-[var(--color-accent)] mb-8'>
                Uno Más • LATAM
            </h2>
            <nav className='space-y-3'>
                {navItems.map(({ href, label, icon }) => (
                    <Link
                        key={href}
                        href={href}
                        className={clsx(
                            'flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200',
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
