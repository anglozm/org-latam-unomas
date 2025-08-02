'use client'

import Link from 'next/link'

import { FaInstagram, FaYoutube } from 'react-icons/fa6'

import { useTranslations } from 'next-intl'

import { links } from '@/external/links'

import Divider from '@/components/ui/Divider'

import clsx from 'clsx'

interface FooterProps {
    className?: string
}

export default function Footer({
    className
}: FooterProps) {
    const t = useTranslations('footer')
    const year = new Date().getFullYear()

    return (
        <footer className={ clsx(
            className,
            'mt-10 p-5 border-t border-[var(--color-border)]',
            'bg-[var(--color-app-primary)] text-[var(--color-fg)] transition-colors duration-500',
        )}>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 transition-colors duration-500'>
                {/* Grid Links */}
                <div className={ clsx(
                    'text-center md:text-start transition-colors duration-500',
                    'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm mb-24'
                )}>
                    <div>
                        <h4 className='transition-colors duration-500 text-[var(--color-app-secondary)] text-lg font-semibold mb-3'>
                            {t('get-started.title')}
                        </h4>
                        <ul className='space-y-2 text-[var(--color-fg-light-over-dark)]'>
                            <li className='hover:scale-105 duration-300 ease-in-out'>
                                <Link href='/auth' className='hover:underline'>{t('get-started.sign-up')}</Link>
                            </li>
                            <li className='hover:scale-105 duration-300 ease-in-out'>
                                <Link href='/auth' className='hover:underline'>{t('get-started.login')}</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='transition-colors duration-500 text-[var(--color-app-secondary)] text-lg font-semibold mb-3'>
                            {t('discover.title')}
                        </h4>
                        <ul className='space-y-2 text-[var(--color-fg-light-over-dark)]'>
                            <li className='hover:scale-105 duration-300 ease-in-out'>
                                <Link href={links.amwayAcademy} target='_blank' className='hover:underline'>{t('discover.academy')}</Link>
                            </li>
                            <li className='hover:scale-105 duration-300 ease-in-out'>
                                <Link href={links.nutriliteTraceability} target='_blank' className='hover:underline'>{t('discover.nutrilite-traceability')}</Link>
                            </li>
                            <li className='hover:scale-105 duration-300 ease-in-out'>
                                <Link href={links.artistryTraceability} target='_blank' className='hover:underline'>{t('discover.artistry-traceability')}</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='transition-colors duration-500 text-[var(--color-app-secondary)] text-lg font-semibold mb-3'>
                            {t('company.title')}
                        </h4>
                        <ul className='space-y-2 text-[var(--color-fg-light-over-dark)]'>
                            <li className='hover:scale-105 duration-300 ease-in-out'>
                                <Link href='/about-us' className='hover:underline'>{t('company.about-us')}</Link>
                            </li>
                            <li className='hover:scale-105 duration-300 ease-in-out'>
                                <Link href='/team' className='hover:underline'>{t('company.team')}</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='transition-colors duration-500 text-[var(--color-app-secondary)] text-lg font-semibold mb-3'>
                            {t('legality.title')}
                        </h4>
                        <ul className='space-y-2 text-[var(--color-fg-light-over-dark)]'>
                            <li className='hover:scale-105 duration-300 ease-in-out'>
                                <Link href='/privacy-policy' className='hover:underline'>{t('legality.privacy-policy')}</Link>
                            </li>
                            <li className='hover:scale-105 duration-300 ease-in-out'>
                                <Link href='/terms-and-conditions' className='hover:underline'>{t('legality.terms-and-conditions')}</Link>
                            </li>
                            <li className='hover:scale-105 duration-300 ease-in-out'>
                                <Link href='/disclaimers' className='hover:underline'>{t('legality.disclaimers')}</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='transition-colors duration-500 text-[var(--color-app-secondary)] text-lg font-semibold mb-3'>
                            {t('help.title')}
                        </h4>
                        <ul className='space-y-2 text-[var(--color-fg-light-over-dark)]'>
                            <li className='hover:scale-105 duration-300 ease-in-out'>
                                <Link href='/faq' className='hover:underline'>{t('help.faq')}</Link>
                            </li>
                            <li className='hover:scale-105 duration-300 ease-in-out'>
                                <Link href='/contact-us' className='hover:underline'>{t('help.contact-us')}</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <Divider />

                {/* Social & App Links */}
                <div className='flex justify-center md:justify-end space-x-2 text-3xl text-[var(--color-fg-light-over-dark)] mt-5 md:mb-7'>
                    <div className={ clsx(
                         'hover:scale-120 duration-300 ease-in-out p-2',
                        'hover:text-[var(--color-fg-dark-over-light)] hover:bg-white rounded-full'
                    )}>

                        <Link href='https://instagram.com/unomaslatam' target='_blank' aria-label='Instagram' className='hover:text-pink-500'>
                            <FaInstagram />
                        </Link>
                    </div>
                    <div className={ clsx(
                         'hover:scale-120 duration-300 ease-in-out p-2',
                        'hover:text-[var(--color-fg-dark-over-light)] hover:bg-white rounded-full'
                    )}>

                        <Link href='https://youtube.com/@unomaslatam' target='_blank' aria-label='Youtube' className='hover:text-red-600'>
                            <FaYoutube />
                        </Link>
                    </div>
                </div>

                {/* Credits & Copyright */}
                <div className='flex flex-col md:flex-row items-center justify-between gap-2 pt-6 text-sm'>
                    <div className='flex text-center md:text-left text-[var(--color-fg-light-over-dark)]'>
                        <p className='hover:scale-110 duration-300'>
                            <strong className='transition-colors duration-500 text-[var(--color-app-secondary)]'>
                                <Link href='mailto:negociodelatam@gmail.com'>
                                    {t('team-name')}
                                </Link>
                            </strong>
                        </p>
                        <p className='ml-2'>
                            &copy; {t('copyright', {year})}
                        </p>
                    </div>

                    <div className='text-center text-[var(--color-fg-light-over-dark)]'>
                        <p>
                            {t('made-with')}
                            <strong><Link className='hover:underline' href={links.amwayAcademy} target='_blank'>Academy</Link></strong>
                            {t('by')}
                            <strong><Link className='hover:underline' href={links.anglozmIG} target='_blank'>@anglozm</Link></strong>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
