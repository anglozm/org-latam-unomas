'use client'

import { useTranslations } from 'next-intl'

import LoopColumn from './LoopColumn'

const LOGOS_C1 = [
    '/logo/anglozm.png',
    '/logo/p&s-solutions.png',
]

const LOGOS_C2 = [
    '/logo/p&s-solutions.png',
    '/logo/anglozm.png',
]

export default function SlotMachine() {
    const t = useTranslations('hero')

    return (
        <div className='w-full bg-[var(--color-bg)] py-12 border-t border-[var(--color-border)]'>
            <div className='max-w-6xl mx-auto px-4'>
                <h2 className='text-2xl font-bold text-center text-[var(--color-fg)] mb-10'>
                    {t('sponsors-partners')}
                </h2>
                <div className='grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center'>
                    <LoopColumn logos={LOGOS_C1} />
                    <LoopColumn direction='down' logos={LOGOS_C2} />
                    <LoopColumn logos={LOGOS_C1} />
                    <LoopColumn direction='down' logos={LOGOS_C2} />
                </div>
            </div>
        </div>
    )
}
