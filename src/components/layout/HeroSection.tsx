'use client'

import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'

import Image from 'next/image'

import Container from './Container'

import Button from '@/components/ui/Button'
import SlotMachine from '@/components/ui/SlotMachine'

import clsx from 'clsx'

interface HeroSectionProps {
    className?: string
}

export default function HeroSection({
    className
}: HeroSectionProps) {
    const t = useTranslations('hero')
    const router = useRouter()

    return (
        <section
            className={ clsx(
                className,
                'w-full h-full py-4 px-4 text-center flex flex-col items-center justify-center',
                'bg-[var(--color-bg)] text-[var(--color-fg)] transition-colors duration-300'
            )}
        >
            <Container className='flex flex-col lg:flex-row items-center justify-between py-4 gap-10 rounded-4xl'>
                <div className='max-w-xl text-center lg:text-left pt-20 pb-10 md:pt-40 md:pb-10 lg:py-20'>
                    <h1 className='text-4xl font-extrabold mb-4'>{t('title')}</h1>
                    <p className='text-lg text-muted mb-6'>{t('subtitle')}</p>
                    <Button
                        onClick={() => router.push('/auth')}
                        variant='success'
                        size='lg'
                    >
                        {t('cta')}
                    </Button>
                </div>

                <div className='relative w-full max-w-md h-[360px]'>
                    <Image
                        className={ clsx(
                            'rounded-2xl shadow-xl absolute',
                            'top-5 left-10 z-20',
                            'translate-x-1 translate-y-1',
                            'scale-100',
                            'transition-transform duration-500'
                        )}
                        src='/img/artistry-skin_beautiful-model.jpg'
                        alt='Image 1'
                        width={200}
                        height={200}
                        style={{ transform: 'rotateX(20deg) rotateY(-5deg) rotateZ(-10deg)' }}
                        priority
                    />
                    <Image
                        className={ clsx(
                            'rounded-2xl shadow-xl absolute',
                            'top-4 left-52 z-10',
                            'translate-x-2 translate-y-2',
                            'scale-100',
                            'transition-transform duration-500',
                            'group-hover:transform-none'
                        )}
                        src='/img/reading_redhead-woman.jpg'
                        alt='Image 2'
                        width={200}
                        height={200}
                        style={{ transform: 'rotateX(10deg) rotateY(-25deg) rotateZ(15deg)' }}
                    />
                    <Image
                        className={ clsx(
                            'rounded-2xl shadow-xl absolute',
                            'top-44 left-32 z-0',
                            'scale-100 opacity-80',
                            'transition-transform duration-500'
                        )}
                        src='/img/nutrilite_father-and-son_apple.jpg'
                        alt='Image 3'
                        width={200}
                        height={200}
                        style={{ transform: 'rotateX(50deg) rotateY(-5deg) rotateZ(20deg)' }}
                    />
                </div>
            </Container>

            <SlotMachine />
        </section>
    )
}
