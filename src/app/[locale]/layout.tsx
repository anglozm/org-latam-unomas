import '../globals.css'

import React from 'react'

import { Inter } from 'next/font/google'
// import { headers } from 'next/headers'
import { notFound } from 'next/navigation'

import { NextIntlClientProvider, hasLocale } from 'next-intl'

import { ReactNode } from 'react'
import { Metadata } from 'next'

import { routing } from '@/i18n/routing'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

import clsx from 'clsx'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Uno Más • LATAM',
    description: 'Amway LATAM team'
}

interface RootLayoutProps {
    children: ReactNode,
    params: Promise<{locale: string}>
}

export default async function RootLayout({
    children,
    params
}: RootLayoutProps) {
    const { locale } = await params // Ensure that the incoming `locale` is valid
    const messages = (await import(`@/messages/${locale}.json`)).default

    // ================================= Dashboard path management ================================
    /*
    const headersList = await headers()
    const fullUrlHeader = headersList.get('link') || ''
    const availableLanguages = fullUrlHeader.split(',')
    const separatedLanguages = availableLanguages[0].split(';')
    const fullUrl = separatedLanguages[0] // ← Only first matters
    const path = fullUrl.startsWith('<') && fullUrl.endsWith('>')
        ? fullUrl.slice(1, -1) // ← To discard special chars '<' and '>'
        : fullUrl
    const isDashboardPath = path ? /\/dashboard\/?$/.test(path) : false
    */
    // ============================================================================================

    if (!hasLocale(routing.locales, locale)) {
        notFound()
    }

    return (
        <html lang={locale} suppressHydrationWarning={true} className='transition-colors duration-500 bg-app-gradient'>
            <body className={ clsx(
                `${inter.className}`,
                'transition-colors duration-500 text-[var(--color-fg)]'
            )}>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <Navbar key={locale} />
                    <main className='min-h-screen pt-16'>{children}</main>
                    <Footer />
                    {/*{ !isDashboardPath && <Footer /> }*/}
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
