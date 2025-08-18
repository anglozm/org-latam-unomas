'use client'

import { useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import {
    format,
    isSameDay,
    isSameWeek,
    isSameMonth,
    parseISO,
    startOfWeek
} from 'date-fns'

import { ScheduleEvent } from '@/types/ScheduleEvent'

import { locales } from '@/utils/Constants'

import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'

import Calendar from '@/components/ui/Calendar'
import DayView from '@/components/ui/DayView'
import WeekView from '@/components/ui/WeekView'

import clsx from 'clsx'

type ViewType = 'month' | 'week' | 'day'

type SchedulerProps = {
    className?: string
    initialDate?: Date
    events?: ScheduleEvent[]
    defaultView?: ViewType
}

export default function Scheduler({
    className,
    initialDate = new Date(),
    events = [],
    defaultView = 'month'
}: SchedulerProps) {
    const t = useTranslations('scheduler')

    const locale = useLocale() // ← Get the current lang
    const dateFnsLocale = locales[locale as keyof typeof locales]

    const [ currentDate, setCurrentDate ] = useState(initialDate)
    const [ view, setView ] = useState(defaultView)

    // Filter the events to be displayed according to the current view
    const filteredEvents = events.filter(event => {
        const eventDate = parseISO(event.date)

        if (view === 'month') {
            return isSameMonth(eventDate, currentDate)
        }
        if (view === 'week') {
            return isSameWeek(eventDate, currentDate, { weekStartsOn: 1 })
        }
        if (view === 'day') {
            return isSameDay(eventDate, currentDate)
        }

        return false
    })

    // Logic for highlighting days on the calendar
    const highlightedDates = events.map(event => parseISO(event.date))

    return (
        <Section
            className={ clsx(
                className
            )}
            classNameContainer={ clsx(
                'flex flex-col gap-10 py-4',
            )}
            width='max-w-7xl xl:max-w-6xl'
            bgColor='primary'
        >
            <Container className='flex justify-between items-center'>
                <h2 className='text-3xl font-bold hover:text-[var(--color-app-primary)]'>
                    {view === 'month' && format(currentDate, 'MMMM yyyy', { locale: dateFnsLocale })}
                    {view === 'week' && t('week-from') + ` ${format(startOfWeek(currentDate), 'dd MMM', { locale: dateFnsLocale })}`}
                    {view === 'day' && format(currentDate, 'PP', { locale: dateFnsLocale })}
                </h2>
                <div className='flex gap-2'>
                    <button
                        onClick={() => setView('day')}
                        className={ clsx(
                            'px-4 py-2 rounded-md hover:scale-105 duration-100 cursor-pointer',
                            view === 'day' ? 'bg-[var(--color-app-primary)] text-white' : 'text-gray-600 hover:text-[var(--color-app-primary)] bg-[var(--color-app-secondary)]'
                        )}
                    >
                        {t('day')}
                    </button>
                    <button
                        onClick={() => setView('week')}
                        className={ clsx(
                            'px-4 py-2 rounded-md hover:scale-105 duration-100 cursor-pointer',
                            view === 'week' ? 'bg-[var(--color-app-primary)] text-white' : 'text-gray-600 hover:text-[var(--color-app-primary)] bg-[var(--color-app-secondary)]'
                        )}
                    >
                        {t('week')}
                    </button>
                    <button
                        onClick={() => setView('month')}
                        className={ clsx(
                            'px-4 py-2 rounded-md hover:scale-105 duration-100 cursor-pointer',
                            view === 'month' ? 'bg-[var(--color-app-primary)] text-white' : 'text-gray-600 hover:text-[var(--color-app-primary)] bg-[var(--color-app-secondary)]'
                        )}
                    >
                        {t('month')}
                    </button>
                </div>
            </Container>

            {/* Render the DayView component for the day view */}
            { view === 'day' && (
                <DayView
                    date={currentDate}
                    events={filteredEvents}
                />
            )}

            {/* Render the WeekView component for the week view */}
            { view === 'week' && (
                <WeekView
                    startOfWeekDate={startOfWeek(currentDate, { weekStartsOn: 1 })}
                    events={filteredEvents}
                    onDateSelect={ date => {
                        setCurrentDate(date)
                        setView('day')
                    }}
                />
            )}

            {/* Render the Calendar component for the month view */}
            { view === 'month' && (
                <Calendar
                    month={currentDate.getMonth()}
                    year={currentDate.getFullYear()}
                    highlightedDates={highlightedDates}
                    onDateSelect={ date => {
                        setCurrentDate(date)
                        setView('day')
                    }}
                />
            )}
        </Section>
    )
}
