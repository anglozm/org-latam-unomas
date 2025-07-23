'use client'

import Link from 'next/link'

import { FaYoutube } from 'react-icons/fa6'

import { useTranslations } from 'next-intl'

import { links } from '@/external/links'

export default function Footer() {
    const t = useTranslations('footer')
    const year = new Date().getFullYear()

    return (
        <footer className='bg-[var(--color-bg)] text-[var(--color-fg)] border-t border-[var(--color-border)] mt-12 transition-colors duration-300'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
                {/* Grid Links */}
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm mb-12'>
                    <div>
                        <h4 className='text-[var(--color-accent)] font-semibold mb-3'>{t('get-started.title')}</h4>
                        <ul className='space-y-2'>
                            <li><Link href='/register' className='hover:underline'>{t('get-started.sign-up')}</Link></li>
                            <li><Link href='/login' className='hover:underline'>{t('get-started.login')}</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-[var(--color-accent)] font-semibold mb-3'>{t('discover.title')}</h4>
                        <ul className='space-y-2'>
                            <li><Link href={links.amwayAcademy} target='_blank' className='hover:underline'>{t('discover.academy')}</Link></li>
                            <li><Link href={links.nutriliteTraceability} target='_blank' className='hover:underline'>{t('discover.nutrilite-traceability')}</Link></li>
                            <li><Link href={links.artistryTraceability} target='_blank' className='hover:underline'>{t('discover.artistry-traceability')}</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-[var(--color-accent)] font-semibold mb-3'>{t('company.title')}</h4>
                        <ul className='space-y-2'>
                            <li><Link href='/about' className='hover:underline'>{t('company.about-us')}</Link></li>
                            <li><Link href='/team' className='hover:underline'>{t('company.team')}</Link></li>
                            <li><Link href='/partners' className='hover:underline'>{t('company.partners')}</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-[var(--color-accent)] font-semibold mb-3'>{t('legality.title')}</h4>
                        <ul className='space-y-2'>
                            <li><Link href='/privacy-policy' className='hover:underline'>{t('legality.privacy-policy')}</Link></li>
                            <li><Link href='/terms-and-conditions' className='hover:underline'>{t('legality.terms-and-conditions')}</Link></li>
                            <li><Link href='/disclaimers' className='hover:underline'>{t('legality.disclaimers')}</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-[var(--color-accent)] font-semibold mb-3'>{t('help.title')}</h4>
                        <ul className='space-y-2'>
                            <li><Link href='/faq' className='hover:underline'>{t('help.faq')}</Link></li>
                            <li><Link href='/support' className='hover:underline'>{t('help.support')}</Link></li>
                            <li><Link href='/contact-us' className='hover:underline'>{t('help.contact-us')}</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Social & App Links */}
                <div className='flex flex-col md:flex-row items-center justify-between gap-6 border-t pt-6 border-[var(--color-border)] text-sm'>
                    <div className='text-center md:text-left'>
                        <strong className='text-[var(--color-accent)]'>{t('team-name')}</strong> {t('copyright', {year})}
                    </div>

                    <div className='flex items-center space-x-5 text-3xl'>
                        <Link href='https://youtube.com/@unomaslatam' target='_blank' aria-label='Youtube' className='hover:text-red-600'>
                            <FaYoutube />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
