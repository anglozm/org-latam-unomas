import { Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'

import { Metadata } from 'next'
import { ReactNode } from 'react'

import { getLocale } from 'next-intl/server'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

import './globals.css'

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
    const locale = await getLocale()
    let messages

    try {
        messages = (await import(`@/messages/es.json`)).default
    } catch (error) {
        console.error(error)
    }

    return (
        <html lang={locale} suppressHydrationWarning>
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
