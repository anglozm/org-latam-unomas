import '../globals.css'

import React from 'react'

import { Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'

import { Metadata } from 'next'
import { ReactNode } from 'react'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Uno Más • LATAM',
    description: 'Red de Network Marketing para líderes LATAM.'
}

interface RootLayoutProps {
    children: ReactNode
}

export default async function RootLayout({
    children
}: RootLayoutProps) {
    const locale = 'es'
    let messages

    try {
        messages = (await import(`@/messages/${locale}.json`)).default
    } catch {
        messages = (await import(`@/messages/en.json`)).default
    }

    return (
        <html lang={locale} suppressHydrationWarning={true}>
            <body className={`${inter.className} bg-[var(--color-bg)] text-[var(--color-fg)]`}>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <Navbar />
                    <main className='min-h-screen pt-16'>{children}</main>
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
