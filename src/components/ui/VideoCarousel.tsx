'use client'

import { Video } from '@/types/video'

import clsx from 'clsx'

interface VideoCarouselProps {
    videos: Video[]
    segmentEmoji: string
    segmentTitle: string
}

export default function VideoCarousel({
    videos,
    segmentEmoji,
    segmentTitle
}: VideoCarouselProps) {
    return (
        <div className='relative w-full max-w-7xl mx-auto px-4 py-10 rounded-4xl'>
            <h2 className='text-2xl text-start font-bold mb-1 text-[var(--color-fg)] py-2'> {segmentEmoji} {segmentTitle}</h2>

            <div className='overflow-x-auto py-5 rounded-4xl'>
                <div
                    className={ clsx(
                        'flex gap-8 w-max scroll-smooth snap-x snap-mandatory pb-2 pr-2 overflow-x-auto'
                    )}
                >
                    { videos.map((video, index) => (
                        <div
                            key={index}
                            className={ clsx(
                                'snap-start flex-shrink-0 min-w-full sm:min-w-[360px] max-w-[360px] overflow-hidden',
                                'bg-[var(--color-card)] shadow-md border border-[var(--color-border)] rounded-4xl'
                            )}
                        >
                            <div className='aspect-video w-full'>
                                <iframe
                                    className='w-full h-full'
                                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                                    title={video.title}
                                    allowFullScreen
                                    loading='lazy'
                                />
                            </div>
                            <div className='text-start p-6'>
                                <h3 className='text-md font-semibold text-[var(--color-fg)]'>{video.title}</h3>
                                { video.description && (
                                    <p className='text-sm text-[var(--color-muted-fg)] mt-4'>{video.description}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
