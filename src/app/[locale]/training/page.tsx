'use client'

import { useTranslations } from 'next-intl'

import { ScheduleEvent } from '@/types/ScheduleEvent'
import { Video } from '@/types/Video'

import Section from '@/components/layout/Section'

import Calendar from '@/components/ui/Calendar'
import Scheduler from '@/components/ui/Scheduler'
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

const today = new Date()
const highlightedEvents = [
    new Date(today.getFullYear(), today.getMonth(), 4),
    new Date(today.getFullYear(), today.getMonth(), 11),
    new Date(today.getFullYear(), today.getMonth(), 18),
    new Date(today.getFullYear(), today.getMonth(), 25)
]
const handleDateSelection = (date: Date) => {
    console.log('Date selected:', date)
}

const dummyEvents: ScheduleEvent[] = [
    {
        id: 1,
        title: 'Reunión de equipo',
        date: '2025-08-18T10:00:00',
        description: 'Reunión semanal para discutir el progreso del proyecto.',
        color: '#4CAF50'
    }, {
        id: 2,
        title: 'Presentación a cliente',
        date: '2025-08-20T14:30:00',
        description: 'Presentación del nuevo diseño de interfaz de usuario.',
        color: '#2196F3'
    }, {
        id: 3,
        title: 'Almuerzo con el equipo',
        date: '2025-08-25T13:00:00',
        description: 'Almuerzo para celebrar el lanzamiento del nuevo módulo.',
        color: '#FFC107'
    }, {
        id: 4,
        title: 'Cierre de sprint',
        date: '2025-08-29T17:00:00',
        description: 'Revisión final y demostración del trabajo realizado en el sprint.',
        color: '#F44336'
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
            <Scheduler
                events={dummyEvents}
                initialDate={new Date()}
            />

            <Calendar
                month={today.getMonth()}
                year={today.getFullYear()}
                highlightedDates={highlightedEvents}
                onDateSelect={handleDateSelection}
            />

            <VideoCarousel
                className='mt-10'
                videos={LEADERSHIP_VIDEOS}
                segmentEmoji='🧠'
                segmentTitle={t('leadership')}
            />

            <VideoCarousel
                className='mt-10'
                videos={NUTRITION_VIDEOS}
                segmentEmoji='🌿'
                segmentTitle={t('nutrition')}
            />
        </Section>
    )
}
