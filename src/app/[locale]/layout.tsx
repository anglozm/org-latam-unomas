import '../globals.css'

import React from 'react'

import { Inter } from 'next/font/google'
import { NextIntlClientProvider, hasLocale } from 'next-intl'

import { Metadata } from 'next'
import { ReactNode } from 'react'

import { notFound } from 'next/navigation'

import { routing } from '@/i18n/routing'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import clsx from "clsx";

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
    // Ensure that the incoming `locale` is valid
    const { locale } = await params
    const messages = (await import(`@/messages/${locale}.json`)).default

    if (!hasLocale(routing.locales, locale)) {
        notFound()
    }

    return (
        <html lang={locale} suppressHydrationWarning={true}>
            <body className={ clsx(
                `${inter.className}`,
                'transition-colors duration-500 bg-[var(--color-bg)] text-[var(--color-fg)]'
            )}>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <Navbar key={locale} />
                    <main className='min-h-screen pt-16'>{children}</main>
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
