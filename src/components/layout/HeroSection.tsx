'use client'

import { useTranslations } from 'next-intl'

import Image from 'next/image'
import Link from 'next/link'

import Container from './Container'

import clsx from 'clsx'

interface HeroSectionProps {
    className?: string
    imageSrc?: string
    imageAlt?: string
}

export default function HeroSection({
    className,
    imageSrc,
    imageAlt
}: HeroSectionProps) {
    const t = useTranslations('hero')

    return (
        <section className={ clsx(
            className,
            'w-full h-full py-20 px-4 text-center flex flex-col items-center justify-center',
            'bg-[var(--color-bg)] text-[var(--color-fg)] transition-colors duration-300'
            )}
        >
            <Container className='flex flex-col-reverse lg:flex-row items-center justify-between gap-10'>
                <div className='max-w-xl text-center lg:text-left'>
                    <h1 className='text-4xl font-extrabold mb-4'>{t('title')}</h1>
                    <p className='text-lg text-muted mb-6'>{t('subtitle')}</p>
                    <Link
                        href='/register'
                        className='inline-block bg-primary text-[var(--color-fg)] font-semibold px-6 py-3 rounded-xl'
                    >
                        {t('cta')}
                    </Link>
                </div>

                { imageSrc && (
                    <div className='w-full max-w-md mx-auto'>
                        <Image
                            src={imageSrc}
                            alt={imageAlt || 'Hero Image'}
                            width={1000}
                            height={1000}
                            className='w-full h-auto object-contain'
                            priority
                        />
                    </div>
                )}
            </Container>
        </section>
    )
}
