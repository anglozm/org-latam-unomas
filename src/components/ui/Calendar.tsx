'use client'

import { useState } from 'react'
import { useLocale } from 'next-intl'
import {
    addMonths,
    eachDayOfInterval,
    endOfWeek,
    endOfMonth,
    format,
    isEqual,
    isToday,
    startOfDay,
    startOfWeek,
    startOfMonth,
    subMonths
} from 'date-fns'

import { locales } from '@/utils/Constants'

import { ChevronLeft, ChevronRight } from 'lucide-react'

import Container from '@/components/layout/Container'

import clsx from 'clsx'

interface CalendarProps {
    className?: string
    month: number
    year: number
    onDateSelect?: (date: Date) => void
    highlightedDates?: Date[]
    showControls?: boolean
}

export default function Calendar({
    className,
    month: initialMonth,
    year: initialYear,
    onDateSelect,
    highlightedDates = [],
    showControls = true
}: CalendarProps) {
    const locale = useLocale() // ← Get the current lang
    const dateFnsLocale = locales[locale as keyof typeof locales]

    const [ currentDate, setCurrentDate ] = useState(new Date(initialYear, initialMonth, 1))

    const firstDayOfMonth = startOfMonth(currentDate)
    const lastDayOfMonth = endOfMonth(currentDate)
    const allDaysInMonth = eachDayOfInterval({
        start: firstDayOfMonth,
        end: lastDayOfMonth
    })

    const handlePrevMonth = () => {
        setCurrentDate(subMonths(currentDate, 1))
    }
    const handleNextMonth = () => {
        setCurrentDate(addMonths(currentDate, 1))
    }

    const isDayToday = (date: Date) => isToday(date)
    const isDayHighlighted = (date: Date) =>
        highlightedDates.some(highlightedDate =>
            isEqual(startOfDay(highlightedDate), startOfDay(date)) // ← Both dates are normalized to 00:00 H to be compared
        )

    // Calculation of the offset for empty days
    const startOffset = firstDayOfMonth.getDay()
    const emptyCells = Array.from({ length: startOffset }, (_, i) => i)

    const weekdayNames = eachDayOfInterval({
        start: startOfWeek(currentDate, { weekStartsOn: 0 }),
        end: endOfWeek(currentDate, { weekStartsOn: 0 })
    }).map(day => format(day, 'E', { locale: dateFnsLocale }))

    return (
        <Container
            className={ clsx(
                className,
                'bg-[var(--color-card)] shadow-md',
                'text-[var(--color-fg)] p-4 sm:p-6'
            )}
        >
            { showControls && (
                <Container className='flex justify-between items-center text-2xl font-semibold'>
                    <button
                        onClick={handlePrevMonth}
                        className='p-2 rounded-lg hover:bg-[var(--color-hover-bg)] duration-200 hover:scale-120 hover:text-[var(--color-app-primary)] cursor-pointer'
                        aria-label='Previous month'
                    >
                        <ChevronLeft />
                    </button>
                    <h3 className='text-center min-w-40 transition-transform duration-500 hover:text-[var(--color-app-primary)]'>
                        {format(currentDate, 'LLLL yyyy', { locale: dateFnsLocale })}
                    </h3>
                    <button
                        onClick={handleNextMonth}
                        className='p-2 rounded-lg hover:bg-[var(--color-hover-bg)] duration-200 hover:scale-120 hover:text-[var(--color-app-primary)] cursor-pointer'
                        aria-label='Next month'
                    >
                        <ChevronRight />
                    </button>
                </Container>
            )}

            <Container className='grid grid-cols-7 gap-2 text-center py-4'>
                { weekdayNames.map(name => (
                    <div
                        key={name}
                        className={ clsx(
                            'flex font-medium text-sm items-center justify-center my-4',
                            'h-8 rounded-md bg-[var(--color-app-primary)]/10',
                            'hover:text-[var(--color-app-primary)]'
                        )}
                    >
                        {name}
                    </div>
                ))}

                {/* Empty days from prev month */}
                {emptyCells.map(i => <div key={`empty-${i}`}></div>)}

                {/* Days of the current month */}
                { allDaysInMonth.map(day => {
                    const baseCellClasses = 'flex items-center justify-center h-10 w-full rounded-md transition-all duration-200 ease-in-out cursor-pointer select-none'

                    const todayClasses = 'bg-[var(--color-app-primary)]/80 text-[var(--color-app-secondary)] font-bold'
                    const highlightedClasses = 'bg-[var(--color-app-primary)]/30 text-[var(--color-app-primary-fg)]'

                    const hoverClasses = 'hover:scale-105 hover:bg-[var(--color-hover-bg)] hover:text-[var(--color-accent)]'

                    const isCurrentDay = isDayToday(day)
                    const isEventDay = isDayHighlighted(day)

                    const cellClasses = clsx(
                        baseCellClasses,
                        isCurrentDay && todayClasses,
                        !isCurrentDay && isEventDay && highlightedClasses,
                        hoverClasses
                    )

                    return (
                        <div key={format(day, 'dd-MM-yyyy')} className='flex justify-center items-center'>
                            <button
                                className={cellClasses}
                                onClick={() => onDateSelect?.(day)}
                            >
                                {format(day, 'd')}
                            </button>
                        </div>
                    )
                })}
            </Container>
        </Container>
    )
}
