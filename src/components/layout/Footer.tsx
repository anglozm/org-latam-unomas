'use client'

import Link from 'next/link'

import { FaInstagram, FaYoutube } from 'react-icons/fa6'

import { useTranslations } from 'next-intl'

import { links } from '@/external/links'

import clsx from 'clsx'
import Divider from "@/components/ui/Divider";

export default function Footer() {
    const t = useTranslations('footer')
    const year = new Date().getFullYear()

    return (
        <footer className={ clsx(
            'mt-10 px-5 py-5 border-t border-[var(--color-border)]',
            'bg-[var(--color-bg)] text-[var(--color-fg)] transition-colors duration-500',
        )}>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 transition-colors duration-500'>
                {/* Grid Links */}
                <div className={ clsx(
                    'text-center md:text-start transition-colors duration-500',
                    'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm mb-12'
                )}>
                    <div>
                        <h4 className='transition-colors duration-500 text-[var(--color-accent)] font-semibold mb-3'>
                            {t('get-started.title')}
                        </h4>
                        <ul className='space-y-2'>
                            <li><Link href='/auth' className='hover:underline'>{t('get-started.sign-up')}</Link></li>
                            <li><Link href='/auth' className='hover:underline'>{t('get-started.login')}</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='transition-colors duration-500 text-[var(--color-accent)] font-semibold mb-3'>
                            {t('discover.title')}
                        </h4>
                        <ul className='space-y-2'>
                            <li><Link href={links.amwayAcademy} target='_blank' className='hover:underline'>{t('discover.academy')}</Link></li>
                            <li><Link href={links.nutriliteTraceability} target='_blank' className='hover:underline'>{t('discover.nutrilite-traceability')}</Link></li>
                            <li><Link href={links.artistryTraceability} target='_blank' className='hover:underline'>{t('discover.artistry-traceability')}</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='transition-colors duration-500 text-[var(--color-accent)] font-semibold mb-3'>
                            {t('company.title')}
                        </h4>
                        <ul className='space-y-2'>
                            <li><Link href='/about-us' className='hover:underline'>{t('company.about-us')}</Link></li>
                            <li><Link href='/team' className='hover:underline'>{t('company.team')}</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='transition-colors duration-500 text-[var(--color-accent)] font-semibold mb-3'>
                            {t('legality.title')}
                        </h4>
                        <ul className='space-y-2'>
                            <li><Link href='/privacy-policy' className='hover:underline'>{t('legality.privacy-policy')}</Link></li>
                            <li><Link href='/terms-and-conditions' className='hover:underline'>{t('legality.terms-and-conditions')}</Link></li>
                            <li><Link href='/disclaimers' className='hover:underline'>{t('legality.disclaimers')}</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='transition-colors duration-500 text-[var(--color-accent)] font-semibold mb-3'>
                            {t('help.title')}
                        </h4>
                        <ul className='space-y-2'>
                            <li><Link href='/faq' className='hover:underline'>{t('help.faq')}</Link></li>
                            <li><Link href='/contact-us' className='hover:underline'>{t('help.contact-us')}</Link></li>
                        </ul>
                    </div>
                </div>

                <Divider />

                {/* Social & App Links */}
                <div className='flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-[var(--color-border)] text-sm'>
                    <div className='text-center md:text-left'>
                        <strong className='transition-colors duration-500 text-[var(--color-accent)]'>{t('team-name')}</strong> {t('copyright', {year})}
                    </div>

                    <div className='flex items-center space-x-5 text-3xl'>
                        <Link href='https://instagram.com/unomaslatam' target='_blank' aria-label='Instagram' className='hover:text-rose-600'>
                            <FaInstagram />
                        </Link>
                        <Link href='https://youtube.com/@unomaslatam' target='_blank' aria-label='Youtube' className='hover:text-red-600'>
                            <FaYoutube />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
