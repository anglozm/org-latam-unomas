import { getTranslations } from 'next-intl/server'

import { getVideos } from '@/actions/videos'

import { ScheduleEvent } from '@/types/ScheduleEvent'

import Section from '@/components/layout/Section'

import Scheduler from '@/components/ui/Scheduler'
import VideoCarousel from '@/components/ui/VideoCarousel'

import clsx from 'clsx'

const dummyEvents: ScheduleEvent[] = [
    {
        id: 1,
        title: 'Reunión de equipo',
        date: '2025-08-04T04:00:00',
        description: 'Reunión semanal para discutir el progreso del proyecto.',
    }, {
        id: 2,
        title: 'Presentación a cliente',
        date: '2025-08-11T14:30:00',
        description: 'Presentación del nuevo diseño de interfaz de usuario.',
    }, {
        id: 3,
        title: 'Almuerzo con el equipo',
        date: '2025-08-18T13:00:00',
        description: 'Almuerzo para celebrar el lanzamiento del nuevo módulo.',
    }, {
        id: 4,
        title: 'Cierre de sprint',
        date: '2025-08-25T17:00:00',
        description: 'Revisión final y demostración del trabajo realizado en el sprint.',
    },
]

export default async function TrainingPage() {
    const t = await getTranslations('training')

    const fetchedVideos = await getVideos()
    const leadershipVideos = fetchedVideos.filter(video => video.topic === 'leadership')
    const nutritionVideos = fetchedVideos.filter(video => video.topic === 'nutrition')

    return (
        <Section
            className={ clsx(
                'text-center mt-12'
            )}
            paddingContainer='px-0 xl:px-4'
            width='max-w-7xl xl:max-w-6xl'
        >
            <Scheduler events={dummyEvents} />

            <VideoCarousel
                className='mt-10'
                videos={leadershipVideos}
                segmentEmoji='🧠'
                segmentTitle={t('leadership')}
            />

            <VideoCarousel
                className='mt-10'
                videos={nutritionVideos}
                segmentEmoji='🌿'
                segmentTitle={t('nutrition')}
            />
        </Section>
    )
}
