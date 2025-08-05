'use client'

import { Video } from '@/types/Video'

import Container from '@/components/layout/Container'

import clsx from 'clsx'

interface VideoCarouselProps {
    className?: string
    videos: Video[]
    segmentEmoji: string
    segmentTitle: string
}

export default function VideoCarousel({
    className,
    videos,
    segmentEmoji,
    segmentTitle
}: VideoCarouselProps) {
    return (
        <Container
            className={ clsx(
                className,
                'max-w-screen-xl',
                'max-w-7xl xl:max-w-6xl'
            )}
            padding='px-0'
        >
            <h2 className='text-2xl text-left font-bold mb-1 text-[var(--color-fg)] py-2 pl-6 transition-colors duration-500'>
                {segmentEmoji} {segmentTitle}
            </h2>

            <Container className='custom-scrollbar overflow-x-auto scroll-smooth transition-colors duration-500' padding='px-0'>
                <div
                    className={ clsx(
                        'flex gap-6 w-max snap-x snap-mandatory',
                        'transition-colors duration-500 px-6 py-6 rounded-xl'
                    )}
                >
                    { videos.map((video, index) => (
                        <div
                            key={index}
                            className={ clsx(
                                'snap-start flex-shrink-0 min-w-[360px] max-w-[360px] overflow-hidden',
                                'bg-[var(--color-card)] shadow-md rounded-4xl',
                                'transition duration-300 hover:scale-105 ease-in-out'
                            )}
                        >
                            <div className='aspect-video w-full'>
                                <iframe
                                    className='w-full h-full transition-colors duration-500'
                                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                                    title={video.title}
                                    allowFullScreen
                                    loading='lazy'
                                />
                            </div>
                            <div className='text-left p-6'>
                                <h3 className='text-md font-semibold transition-colors duration-500 text-[var(--color-fg)]'>
                                    {video.title}
                                </h3>

                                { video.description && (
                                    <p className='text-sm text-[var(--color-muted-fg)] transition-colors duration-500 mt-4'>
                                        {video.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Container>
    )
}
