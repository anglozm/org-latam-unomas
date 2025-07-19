import './globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { Inter } from 'next/font/google'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Uno Más • LATAM',
    description: 'Red de Network Marketing para líderes LATAM.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang='es' suppressHydrationWarning>
            <body className={`${inter.className} bg-white text-gray-900`}>
                <Navbar />
                <main className='min-h-screen pt-16'>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
