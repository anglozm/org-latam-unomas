'use client'

import { useTranslations } from 'next-intl'

import LoopColumn from './LoopColumn'

import { LogoItem } from '@/types/LogoItem'

import clsx from 'clsx'

const LOGO_ITEMS_C0: LogoItem[] = [
    {
        src: 'https://www.amway.com.ve/files/resources/img/amway-logo-black.svg',
        alt: 'Logo de Amway',
        href: 'https://latinamway.com'
    }, {
        src: '/logo/nutrilite.png',
        alt: 'Logo de Nutrilite',
        href: 'https://nutrilitetraceability.lat'
    }, {
        src: '/logo/artistry.png',
        alt: 'Logo de Artistry',
        href: 'https://artistry.lat/trazabilidad-artistry'
    },
]

const LOGO_ITEMS_C1: LogoItem[] = [
    {
        src: '/logo/anglozm.png',
        alt: 'Logo de anglozm',
        href: 'https://instagram.com/anglozm'
    }, {
        src: '/logo/artistry.png',
        alt: 'Logo de Artistry',
        href: 'https://artistry.lat/trazabilidad-artistry'
    }, {
        src: 'https://www.amway.com.ve/files/resources/img/amway-logo-black.svg',
        alt: 'Logo de Amway',
        href: 'https://latinamway.com'
    }, {
        src: '/logo/p&s-solutions.png',
        alt: 'Logo de PS Solutions',
        href: 'https://instagram.com/pssolutions.pty'
    },
]

const LOGO_ITEMS_C2: LogoItem[] = [
    {
        src: '/logo/p&s-solutions.png',
        alt: 'Logo de PS Solutions',
        href: 'https://instagram.com/pssolutions.pty'
    }, {
        src: '/logo/anglozm.png',
        alt: 'Logo de anglozm',
        href: 'https://instagram.com/anglozm'
    }, {
        src: '/logo/satinique.png',
        alt: 'Logo de Satinique'
    },
]

const LOGO_ITEMS_C3: LogoItem[] = [
    {
        src: '/logo/artistry.png',
        alt: 'Logo de Artistry',
        href: 'https://artistry.lat/trazabilidad-artistry'
    }, {
        src: '/logo/nutrilite.png',
        alt: 'Logo de Nutrilite',
        href: 'https://nutrilitetraceability.lat'
    }, {
        src: 'https://www.amway.com.ve/files/resources/img/amway-logo-black.svg',
        alt: 'Logo de Amway',
        href: 'https://latinamway.com'
    },
]

export default function SlotMachine() {
    const t = useTranslations('hero')

    return (
        <div className={ clsx(
            'max-w-screen-xl w-full bg-[var(--color-bg)] mt-2 py-10 border-[var(--color-border)]',
            'transition-colors duration-500 rounded-4xl'
        )}>
            <div className='px-5 py-5'>
                <h2 className='text-2xl font-bold text-center text-[var(--color-fg)] mb-10 transition-colors duration-500'>
                    {t('sponsors-partners')}
                </h2>
                <div className='grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center'>
                    <LoopColumn logos={LOGO_ITEMS_C0} />
                    <LoopColumn direction='down' logos={LOGO_ITEMS_C1} />
                    <LoopColumn logos={LOGO_ITEMS_C2} />
                    <LoopColumn direction='down' logos={LOGO_ITEMS_C3} />
                </div>
            </div>
        </div>
    )
}
