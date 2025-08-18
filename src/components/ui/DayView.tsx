'use client'

import { useLocale } from 'next-intl'
import {
    format,
    getHours,
    getMinutes,
    parseISO,
    setHours
} from 'date-fns'

import { ScheduleEvent } from '@/types/ScheduleEvent'

import { locales } from '@/utils/Constants'

import Container from '@/components/layout/Container'

import clsx from 'clsx'

interface DayViewProps {
    className?: string
    date: Date
    events: ScheduleEvent[]
}

const timeSlots = Array.from({ length: 24 * 2 }, (_, i) => i) // 48 30-minute slots

export default function DayView({
    className,
    date,
    events
}: DayViewProps) {
    const locale = useLocale()
    const dateFnsLocale = locales[locale as keyof typeof locales]

    return (
        <Container
            className={ clsx(
                className,
                'flex flex-col bg-[var(--color-card)] shadow-md',
                'text-[var(--color-fg)] p-4 sm:p-6'
            )}
        >
            <div className='font-bold text-2xl mb-4'>
                <span
                    className={ clsx(
                        'flex-1 text-center hover:text-[var(--color-app-primary)]'
                    )}
                >
                    {format(date, 'EEEE, d MMMM', { locale: dateFnsLocale })}
                </span>
            </div>

            <Container className='flex'>
                {/* Hour column */}
                <div className='flex flex-col w-12 text-sm text-right pr-2'>
                    {Array.from({ length: 24 }, (_, i) => i).map(hour => (
                        <div
                            key={hour}
                            className='flex items-start justify-end h-[80px] border-b border-[var(--color-border)] pr-2 pt-2'
                        >
                            {format(setHours(new Date(), hour), 'ha', { locale: dateFnsLocale })}
                        </div>
                    ))}
                </div>

                {/* Events column */}
                <div className='flex-1 relative'>
                    {/* Time slots (background grid) */}
                    <div className='h-full flex flex-col'>
                        {timeSlots.map(i => (
                            <div
                                key={`slot-${i}`}
                                className='h-[40px] border-b border-[var(--color-border)]'
                            />
                        ))}
                    </div>

                    {/* Event container */}
                    <div className='absolute inset-0 p-1 space-y-1'>
                        {events.map(event => {
                            const eventDate = parseISO(event.date)
                            const startHour = getHours(eventDate)
                            const startMinute = getMinutes(eventDate)
                            const totalMinutes = startHour * 60 + startMinute

                            // Position of the event on the grid (top in px)
                            const topPosition = (totalMinutes / 60) * 80 + 4 // 80px per hour, 4px padding

                            // Event duration (we assume 30 minutes for now)
                            const eventHeight = 40 - 2 // 40px for 30 minutes, 2px margin

                            return (
                                <div
                                    key={event.id}
                                    className={clsx(
                                        'absolute w-[95%] rounded-md text-xs p-1',
                                        'bg-[var(--color-app-primary)] text-[var(--color-app-primary-fg)] overflow-hidden',
                                        'shadow-md',
                                    )}
                                    style={{
                                        top: `${topPosition}px`,
                                        height: `${eventHeight}px`,
                                        backgroundColor: event.color || 'var(--color-app-primary)'
                                    }}
                                >
                                    <span className='font-semibold'>{event.title}</span>
                                    {event.description && <p className='text-[10px] truncate'>{event.description}</p>}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Container>
        </Container>
    )
}
