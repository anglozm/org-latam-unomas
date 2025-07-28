'use client'

import { Menu, X } from 'lucide-react'

import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

import Image from 'next/image'
import Link from 'next/link'
import LocaleSwitcher from '@/components/ui/LocaleSwitcher'
import ThemeToggle from '@/components/ui/ThemeToggle'

import clsx from 'clsx'

export default function Navbar() {
    const t = useTranslations('navbar')
    const [ isOpen, setIsOpen ] = useState(false)
    const pathname = usePathname()

    const navLinks = [
        { href: '/', label: t('home') },
        { href: '/about-us', label: t('about') },
        { href: '/training', label: t('training') },
        { href: '/mentors', label: t('mentors') },
        { href: '/contact-us', label: t('contact') },
    ]

    return (
        <header
            className={ clsx(
                'fixed top-0 left-0 right-0 z-50 shadow-sm transition-colors duration-300 bg-[var(--color-bg)]',
                'border-b border-[var(--color-border)] text-[var(--color-fg)]'
            )}
        >
            <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between'>
                {/* Logo */}
                <Link href='/' className='text-xl font-bold text-[var(--color-accent)]'>
                    <Image
                        className='rounded-full'
                        src='/logo/uno-mas_colored-chambray-titan-white.png'
                        alt='Uno Más logo'
                        width={50}
                        height={50}
                    />
                </Link>

                <div className='flex items-center justify-center'>
                    {/* Mobile toggle button */}
                    <button
                        className='order-1 md:hidden text-[var(--color-fg)] pl-4'
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label='Toggle mobile menu'
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Desktop menu */}
                    <ul className='hidden md:flex space-x-6 items-center mr-6'>
                        { navLinks.map(({ href, label }) => (
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
                    </ul>

                    {/* Theme toggle */}
                    <div className='pl-4 md:border-l border-[var(--color-border)]'>
                        <ThemeToggle />
                    </div>

                    {/* Locale switcher at the end */}
                    <ul className='pl-4 md:flex space-x-6 items-center'>
                        <li>
                            <LocaleSwitcher />
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Mobile menu */}
            { isOpen && (
                <div className='md:hidden border-t border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-fg)] px-4 py-4'>
                    <ul className='space-y-2'>
                        { navLinks.map(({ href, label }) => (
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
