'use client'

import { useTranslations } from 'next-intl'

import { Video } from '@/types/Video'

import Section from '@/components/layout/Section'
import VideoCarousel from '@/components/ui/VideoCarousel'

import clsx from 'clsx'

const LEADERSHIP_VIDEOS: Video[] = [
    {
        youtubeId: 'Q0QeGOMLk1M',
        title: 'Liderazgo en el embarazo | Especial día de las madres',
    }, {
        youtubeId: 'UjZIgShzSrk',
        title: '¿Por qué cuesta aplicar lo que aprendemos?',
    }, {
        youtubeId: 'crHpaZVWBvs',
        title: 'El juego interior del tenis',
    }, {
        youtubeId: 'uX-MhU7UvOc',
        title: 'El miedo a hablar | Inspirado en Joseph Lister',
    }, {
        youtubeId: '5Z3SEB5z-HQ',
        title: 'Seguir cuando nadie aplaude',
    },
]

const NUTRITION_VIDEOS: Video[] = [
    {
        youtubeId: '0VE0FEur5sQ',
        title: 'Conociendo Nutrilite',
    }, {
        youtubeId: '58430WjvutI',
        title: 'Proteína Vegetal Nutrilite | Beneficios y Bondades',
    }, {
        youtubeId: 'dJY3RpK6ZQI',
        title: 'Nutrición para deportistas',
    }, {
        youtubeId: '66BxR8vEVg0',
        title: 'Salud cardiovascular',
    }, {
        youtubeId: 'Pii9RIDg5Es',
        title: 'Sistema inmunológico',
    },
]

export default function TrainingPage() {
    const t = useTranslations('training')

    return (
        <Section
            className={ clsx(
                'text-center mt-12'
            )}
            paddingContainer='px-0 xl:px-4'
            width='max-w-7xl xl:max-w-6xl'
        >
            <VideoCarousel videos={LEADERSHIP_VIDEOS} segmentEmoji='🧠' segmentTitle={t('leadership')} />
            <VideoCarousel className='mt-10' videos={NUTRITION_VIDEOS} segmentEmoji='🌿' segmentTitle={t('nutrition')} />
        </Section>
    )
}
