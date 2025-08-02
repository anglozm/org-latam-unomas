'use client'

import { Menu, X } from 'lucide-react'

import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

import Image from 'next/image'
import Link from 'next/link'

import Divider from '@/components/ui/Divider'
import LocaleSwitcher from '@/components/ui/LocaleSwitcher'
import ThemeToggle from '@/components/ui/ThemeToggle'
import Tooltip from '@/components/ui/Tooltip'

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
                'fixed top-0 left-0 right-0 z-50 shadow-sm transition-colors duration-500 bg-[var(--color-app-secondary-dark)]',
                'text-[var(--color-fg)]'
            )}
        >
            <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between'>
                {/* Logo */}
                <Link href='/' className='text-xl font-bold text-[var(--color-accent)]'>
                    <Image
                        className='rounded-full hover:scale-120 duration-300 ease-in-out'
                        src='/logo/chambray.png'
                        alt='Uno Más logo'
                        width={50}
                        height={50}
                    />
                </Link>

                <div className='flex items-center justify-center'>
                    {/* Mobile toggle button */}
                    <Tooltip
                        content={ isOpen
                            ? t('tooltip.close-menu')
                            : t('tooltip.open-menu')
                        }
                    >
                        <button
                            className={ clsx(
                                'order-1 md:hidden text-[var(--color-fg)] pl-4 cursor-pointer',
                                isOpen
                                    ? 'hover:text-red-600'
                                    : 'hover:text-[var(--color-app-primary)]'
                            )}
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label='Toggle mobile menu'
                        >
                            { isOpen
                                ? <X className='hover:scale-120 transition-colors duration-300' size={24} />
                                : <Menu className='hover:scale-120 transition-colors duration-300' size={24} />
                            }
                        </button>
                    </Tooltip>

                    {/* Desktop menu */}
                    <ul className='hidden md:flex space-x-6 items-center'>
                        { navLinks.map(({ href, label }) => (
                            <li key={href} className='hover:scale-105 duration-300 ease-in-out'>
                                <Link
                                    href={href}

                                    className={ clsx(
                                        'text-sm font-medium',
                                        pathname === href
                                            ? 'text-[var(--color-app-primary)]'
                                            : 'hover:text-[var(--color-app-primary)]'
                                    )}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <Divider className='hidden md:flex' orientation='vertical' color='bg-[var(--color-app-primary)]' spacing='mx-4' />

                    <ThemeToggle />

                    <ul className='pl-4 md:flex space-x-6 items-center'>
                        <li>
                            <LocaleSwitcher />
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Mobile menu */}
            { isOpen && (
                <div className={ clsx(
                    'md:hidden border-t border-[var(--color-border)] p-4',
                    'transition-colors duration-500 bg-[var(--color-bg)] text-[var(--color-fg)]',
                )}>
                    <ul className='space-y-2'>
                        { navLinks.map(({ href, label }) => (
                            <li key={href}>
                                <Link
                                    href={href}
                                    onClick={() => setIsOpen(false)}
                                    className={ clsx(
                                        'flex flex-col items-end sm:items-center',
                                        'text-base font-medium px-10 py-2 rounded-md',
                                        pathname === href
                                            ? 'text-[var(--color-accent)] bg-[var(--color-accent-bg)]'
                                            : 'hover:bg-[var(--color-hover-bg)] hover:text-[var(--color-accent)]'
                                    )}
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
