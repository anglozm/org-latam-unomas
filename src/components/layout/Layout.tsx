import './globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Mi Red de Negocios',
    description: 'Plataforma para network marketers',
}

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="es" suppressHydrationWarning>
        <body
            className={`${inter.className} bg-[var(--color-bg)] text-[var(--color-fg)] transition-colors duration-300`}
        >
            <Navbar />
            <main className="min-h-screen px-4 sm:px-6 md:px-8">{children}</main>
            <Footer />
        </body>
        </html>
    )
}
