import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
// import { NextIntlClientProvider } from 'next-intl'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

import type { Metadata } from 'next'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Uno Más • LATAM',
    description: 'Red de Network Marketing para líderes LATAM.'
}

interface RootLayoutProps {
    children: ReactNode
    params: { locale: string }
}

export default async function RootLayout({
    children,
    // params
}: RootLayoutProps) {
    // const {locale} = params
    //
    // let messages
    //
    // try {
    //     messages = (await import(`@/messages/es.json`)).default
    // } catch (error) {
    //     console.error(error)
    // }

    return (
        <html /*lang={locale} */ suppressHydrationWarning>
        <body className={`${inter.className} bg-[var(--color-bg)] text-[var(--color-fg)]`}>
            {/*<NextIntlClientProvider locale={locale} messages={messages}>*/}
                <Navbar />
                <main className="min-h-screen pt-16">{children}</main>
                <Footer />
            {/*</NextIntlClientProvider>*/}
        </body>
        </html>
    )
}
