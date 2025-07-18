'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import ThemeToggle from '@/components/ui/ThemeToggle'

const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/about-us', label: '¿Quiénes Somos?' },
    { href: '/opportunity', label: 'Oportunidad' },
    { href: '/products', label: 'Productos' },
    { href: '/testimonials', label: 'Testimonios' },
    { href: '/contact-us', label: 'Contáctanos' },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    return (
        <header className='fixed top-0 left-0 right-0 z-50 shadow-sm transition-colors duration-300 bg-[var(--color-bg)] border-b border-[var(--color-border)] text-[var(--color-fg)]'>
            <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between'>
                {/* Logo */}
                <Link href='/' className='text-xl font-bold text-[var(--color-accent)]'>
                    Uno Más • LATAM
                </Link>

                {/* Mobile toggle button */}
                <button
                    className='md:hidden text-[var(--color-fg)]'
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label='Toggle mobile menu'
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Desktop menu */}
                <ul className='hidden md:flex space-x-6 items-center'>
                    {navLinks.map(({ href, label }) => (
                        <li key={href}>
                            <Link
                                href={href}
                                className={`text-sm font-medium transition ${
                                    pathname === href
                                        ? 'text-[var(--color-accent)] underline underline-offset-4'
                                        : 'hover:text-[var(--color-accent)]'
                                }`}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}

                    {/* Theme toggle */}
                    <div className='ml-6 pl-4 border-l border-[var(--color-border)]'>
                        <ThemeToggle />
                    </div>
                </ul>
            </nav>

            {/* Mobile menu */}
            {isOpen && (
                <div className='md:hidden border-t border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-fg)] px-4 pb-4'>
                    <ul className='space-y-2'>
                        {navLinks.map(({ href, label }) => (
                            <li key={href}>
                                <Link
                                    href={href}
                                    onClick={() => setIsOpen(false)}
                                    className={`block text-base font-medium py-2 px-2 rounded-md transition ${
                                        pathname === href
                                            ? 'text-[var(--color-accent)] bg-[var(--color-accent-bg)]'
                                            : 'hover:bg-[var(--color-hover-bg)] hover:text-[var(--color-accent)]'
                                    }`}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    )
}
