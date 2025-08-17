'use client'

import { useState } from 'react'
import {
    format,
    isToday,
    isSameDay,
    isSameWeek,
    isSameMonth,
    parseISO,
    startOfWeek,
    addDays
} from 'date-fns'

import { ScheduleEvent } from '@/types/ScheduleEvent'

import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'

import Calendar from '@/components/ui/Calendar'

import clsx from 'clsx'
import {useTranslations} from "next-intl";

export type ViewType = 'month' | 'week' | 'day'

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

    // ... This is where the logic for rendering the different views would go

    return (
        <Section
            className={ clsx(
                className,
                'w-full'
            )}
            classNameContainer={ clsx(
                'flex flex-col gap-10 py-4',
            )}
            bgColor='primary'
        >
            <Container className='flex justify-between items-center' padding='px-0'>
                <h2 className='text-3xl font-bold hover:text-[var(--color-app-primary)]'>
                    {view === 'month' && format(currentDate, 'MMMM yyyy')}
                    {view === 'week' && `Semana del ${format(startOfWeek(currentDate), 'dd MMM')}`}
                    {view === 'day' && format(currentDate, 'PPP')}
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

            {/* Here would go the logic for weekday and day views */}
            {/* For example, a WeekView or DayView component that receives filteredEvents */}
        </Section>
    )
}
