'use client'

import Link from 'next/link'

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className='bg-[var(--color-bg)] text-[var(--color-fg)] border-t border-[var(--color-border)] mt-12 transition-colors duration-300'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm'>
                {/* Brand */}
                <div className='text-center md:text-left'>
                    <strong className='text-[var(--color-accent)]'>Uno Más • LATAM</strong> &copy; {year}. Todos los derechos reservados.
                </div>

                {/* Secondary links */}
                <div className='flex space-x-4'>
                    <Link href='/privacy-policy' className='hover:underline hover:text-[var(--color-accent)]'>
                        Privacidad
                    </Link>
                    <Link href='/terms-and-conditions' className='hover:underline hover:text-[var(--color-accent)]'>
                        Términos
                    </Link>
                    <Link href='/contact-us' className='hover:underline hover:text-[var(--color-accent)]'>
                        Contacto
                    </Link>
                </div>
            </div>
        </footer>
    )
}
