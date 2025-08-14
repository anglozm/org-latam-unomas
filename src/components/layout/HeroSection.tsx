'use client'

import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'

import Image from 'next/image'

import { LoopColumnProps } from '@/props/LoopColumnProps'

import { LogoItem } from '@/types/LogoItem'

import Container from './Container'

import Button from '@/components/ui/Button'
import Carousel from '@/components/ui/Carousel'
import Divider from '@/components/ui/Divider'
import Section from '@/components/layout/Section'
import SlotMachine from '@/components/ui/SlotMachine'

import clsx from 'clsx'

const logoItemsSponsorsC0: LogoItem[] = [
    {
        src: '/logo/amway_black.svg',
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
const logoItemsSponsorsC1: LogoItem[] = [
    {
        src: '/logo/anglozm.png',
        alt: 'Logo de anglozm',
        href: 'https://instagram.com/anglozm'
    }, {
        src: '/logo/artistry.png',
        alt: 'Logo de Artistry',
        href: 'https://artistry.lat/trazabilidad-artistry'
    }, {
        src: '/logo/amway_black.svg',
        alt: 'Logo de Amway',
        href: 'https://latinamway.com'
    }, {
        src: '/logo/p&s-solutions.png',
        alt: 'Logo de PS Solutions',
        href: 'https://instagram.com/pssolutions.pty'
    },
]
const logoItemsSponsorsC2: LogoItem[] = [
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
const logoItemsSponsorsC3: LogoItem[] = [
    {
        src: '/logo/artistry.png',
        alt: 'Logo de Artistry',
        href: 'https://artistry.lat/trazabilidad-artistry'
    }, {
        src: '/logo/nutrilite.png',
        alt: 'Logo de Nutrilite',
        href: 'https://nutrilitetraceability.lat'
    }, {
        src: '/logo/amway_black.svg',
        alt: 'Logo de Amway',
        href: 'https://latinamway.com'
    },
]

const logoItemsCertC0: LogoItem[] = [
    {
        src: '/logo/certification_safer-choice.png',
        alt: 'Logo de Safer Choice',
        href: 'https://epa.gov/saferchoice'
    }, {
        src: '/logo/certification_nsf-international.png',
        alt: 'Logo de NSF',
        href: 'https://nsf.org'
    },
]
const logoItemsCertC1: LogoItem[] = [
    {
        src: '/logo/certification_friend-of-the-sea.png',
        alt: 'Logo de Friend of the Sea',
        href: 'https://friendofthesea.org'
    }, {
        src: '/logo/certification_skin-cancer-foundation.png',
        alt: 'Logo de Skin Cancer Foundation',
        href: 'https://skincancer.org'
    },
]
const logoItemsCertC2: LogoItem[] = [
    {
        src: '/logo/certification_british-allergy-foundation.png',
        alt: 'Logo de British Allergy Foundation',
        href: 'https://allergyuk.org'
    }, {
        src: '/logo/certification_ecocert.png',
        alt: 'Logo de Ecocert',
        href: 'https://ecocert.com/es/home'
    },
]

const allColumnsCertifications: LoopColumnProps[] = [
    { logos: logoItemsCertC0 },
    { logos: logoItemsCertC1, direction: 'down' },
    { logos: logoItemsCertC2 },
]
const allColumnsSponsors: LoopColumnProps[] = [
    { logos: logoItemsSponsorsC0 },
    { logos: logoItemsSponsorsC1, direction: 'down' },
    { logos: logoItemsSponsorsC2 },
    { logos: logoItemsSponsorsC3, direction: 'down' },
]

const carouselImages = [
    {
        src: '/img/maldives_tourism-travel.jpg',
        alt: 'Image 1',
    }, {
        src: '/img/hermitage-bay_antigua-barbuda.jpg',
        alt: 'Image 2',
    }, {
        src: '/img/maldives_beach-sand-pool.jpg',
        alt: 'Image 3',
    }, {
        src: '/img/maldives-holidays_palms-paradise-vacation.jpg',
        alt: 'Image 4',
    }, {
        src: '/img/maldives_resort-pool-ocean-sea-water.jpg',
        alt: 'Image 5',
    },
]

export default function HeroSection() {
    const t = useTranslations('hero')
    const tau = useTranslations('about-us')

    const router = useRouter()

    return (
        <Section
            className={ clsx(
                'text-center mt-20'
            )}
            width='max-w-7xl xl:max-w-6xl'
        >
            <Carousel
                items={carouselImages}
                duration={8000} // Optional: Adjust the slide duration
                className='lg:flex-1/2 xl:flex-5/12'
            />

            <Container className='flex flex-col lg:flex-row lg:text-left'>
                <Container className='flex flex-col lg:flex-1/2 xl:flex-7/12 lg:justify-center lg:text-left py-6'>
                    <h1 className='text-5xl font-extrabold mb-4'>{t('title')}</h1>
                    <p className='text-lg text-muted mb-6'>{t('subtitle')}</p>
                    <Button
                        className={clsx(
                            'mx-auto lg:mx-0 lg:mr-auto mt-8'
                        )}
                        onClick={() => router.push('/auth')}
                        variant='success'
                        size='lg'
                    >
                        {t('cta')}
                    </Button>
                </Container>

                {/* Images */}
                <Container className='lg:flex-1/2 xl:flex-5/12 relative h-[25em]'>
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
                </Container>
            </Container>

            <Divider className='max-w-screen-xl w-full ' color='bg-[var(--color-border)]' />

            <Container className='py-10 md:py-8'>
                <div className='space-y-6 md:space-y-2 py-16 md:py-20'>
                    <h1 className='text-4xl font-bold px-4'>{tau('title')}</h1>
                    <p className='text-lg px-4 sm:px-16 md:px-28 lg:px-44'>
                        {tau('description')}
                    </p>
                </div>

                <Divider className='max-w-screen-xl w-full ' color='bg-[var(--color-border)]' />

                <Container className='grid lg:grid-cols-2 py-16 md:py-20 lg:px-12 gap-10 lg:gap-12' size='2xl'>
                    <div className='space-y-6 md:space-y-2'>
                        <h2 className='text-3xl font-semibold'>{tau('mission.title')}</h2>
                        <p className='text-lg sm:px-12 md:px-4'>{tau('mission.text')}</p>
                    </div>
                    <div className='space-y-6 md:space-y-2'>
                        <h2 className='text-3xl font-semibold'>{tau('vision.title')}</h2>
                        <p className='text-lg sm:px-12 md:px-4'>{tau('vision.text')}</p>
                    </div>
                </Container>

                <Divider className='max-w-screen-xl w-full ' color='bg-[var(--color-border)]' />

                <div className='py-16 md:py-20'>
                    <h3 className='text-xl font-semibold mb-2'>{tau('cta.title')}</h3>
                    <p className='mb-6 sm:px-28 md:px-30 lg:px-40'>{tau('cta.description')}</p>

                    <Button
                        onClick={() => router.push('/contact-us')}
                        variant='primary' size='lg'
                    >
                        {tau('cta.button')}
                    </Button>
                </div>
            </Container>

            <Divider className='max-w-screen-xl w-full ' color='bg-[var(--color-border)]' />

            <SlotMachine className='py-16' title={t('certifications')} columns={allColumnsCertifications} />
            <SlotMachine className='py-16' title={t('sponsors-partners')} columns={allColumnsSponsors} />
        </Section>
    )
}
