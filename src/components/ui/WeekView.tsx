'use client'

import { useLocale } from 'next-intl'
import {
    addDays,
    eachDayOfInterval,
    format,
    getHours,
    isToday,
    isSameDay,
    parseISO,
    setHours,
    setMinutes
} from 'date-fns'

import { ScheduleEvent } from '@/types/ScheduleEvent'

import { locales } from '@/utils/Constants'

import Container from '@/components/layout/Container'

import clsx from 'clsx'

interface WeekViewProps {
    className?: string
    startOfWeekDate: Date
    events: ScheduleEvent[]
    onDateSelect?: (date: Date) => void
}

const timeSlots = Array.from({ length: 25 }, (_, i) => i)

export default function WeekView({
    className,
    startOfWeekDate,
    events,
    onDateSelect
}: WeekViewProps) {
    const locale = useLocale()
    const dateFnsLocale = locales[locale as keyof typeof locales]

    const daysOfWeek = eachDayOfInterval({
        start: startOfWeekDate,
        end: addDays(startOfWeekDate, 6)
    })

    return (
        <Container
            className={ clsx(
                className,
                'flex flex-col bg-[var(--color-card)] shadow-md',
                'text-[var(--color-fg)] p-4 sm:p-6'
            )}
        >
            {/* Week header */}
            <Container className='flex text-center text-sm font-medium mb-4'>
                {/* Empty cell to align with time bands */}
                <div className='w-100' />

                { daysOfWeek.map(day => (
                    <div
                        key={format(day, 'yyyy-MM-dd')}
                        className={ clsx(
                            'flex flex-col items-center p-2 rounded-md w-full hover:scale-110 duration-100 cursor-pointer',
                            'hover:bg-[var(--color-app-primary)]/10',
                            isToday(day) && 'bg-[var(--color-app-primary)]/80 hover:bg-[var(--color-hover-bg)] text-[var(--color-app-secondary)] hover:text-[var(--color-accent)]'
                        )}
                        onClick={() => onDateSelect?.(day)}
                    >
                        <button className='flex flex-col'>
                            <span className='font-semibold'>
                                {format(day, 'E', { locale: dateFnsLocale })}
                            </span>
                            <span className='font-bold text-lg'>
                                {format(day, 'd')}
                            </span>
                        </button>
                    </div>
                ))}
            </Container>

            {/* Week cells */}
            <Container className='flex'>
                <div className='flex flex-col text-sm text-right pr-2'>
                    { timeSlots.map(time => (
                        <div
                            key={time}
                            className='flex items-end justify-end h-14 border-b border-[var(--color-border)]'
                        >
                            {format(setHours(setMinutes(new Date(), 0), time), 'ha', { locale: dateFnsLocale })}
                        </div>
                    ))}
                </div>

                <div className='grid flex-1 grid-cols-7 gap-1'>
                    { daysOfWeek.map(day => (
                        <div
                            key={format(day, 'yyyy-MM-dd')}
                            className='flex flex-col border-r border-[var(--color-border)] last:border-r-0'
                        >
                            { timeSlots.map(time => {
                                const dayEvents = events.filter(event => isSameDay(parseISO(event.date), day))
                                const eventOnCell = dayEvents.find(event =>
                                    getHours(parseISO(event.date)) === time
                                )

                                return (
                                    <div
                                        key={`${format(day, 'yyyy-MM-dd')}-${time}`}
                                        className={ clsx(
                                            'flex items-center justify-center h-14 border-b border-[var(--color-border)] p-1',
                                            eventOnCell && 'bg-[var(--color-app-primary)]/20 rounded-md'
                                        )}
                                    >
                                        { eventOnCell && (
                                            <div
                                                className={ clsx(
                                                    'w-full h-full rounded-md text-xs p-1 cursor-pointer overflow-hidden',
                                                    'bg-[var(--color-app-primary)] text-[var(--color-app-primary-fg)]'
                                                )}
                                                style={{ backgroundColor: 'var(--color-app-secondary)' }}
                                            >
                                                <span className='font-semibold'>{eventOnCell.title}</span>
                                            </div>
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    ))}
                </div>
            </Container>
        </Container>
    )
}
