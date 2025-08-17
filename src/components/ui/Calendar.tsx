'use client'

import { useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import {
    startOfMonth,
    endOfMonth,
    format,
    addMonths,
    subMonths,
    eachDayOfInterval,
    isToday,
    isEqual
} from 'date-fns'
import { es, enUS, ptBR } from 'date-fns/locale'

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
    const t = useTranslations('calendar')

    const locale = useLocale() // ← Get the current lang
    const locales = {
        es,
        'en-US': enUS,
        'pt-BR': ptBR
    }
    const dateFnsLocale = locales[locale as keyof typeof locales]

    const [ currentDate, setCurrentDate ] = useState(new Date(initialYear, initialMonth, 1))

    const firstDayOfMonth = startOfMonth(currentDate)
    const lastDayOfMonth = endOfMonth(currentDate)
    const allDaysInMonth = eachDayOfInterval({
        start: firstDayOfMonth,
        end: lastDayOfMonth
    })

    const weekdayNames = [
        t('weekday-names.sun'),
        t('weekday-names.mon'),
        t('weekday-names.tue'),
        t('weekday-names.wed'),
        t('weekday-names.thu'),
        t('weekday-names.fri'),
        t('weekday-names.sat'),
    ]

    const handlePrevMonth = () => {
        setCurrentDate(subMonths(currentDate, 1))
    }
    const handleNextMonth = () => {
        setCurrentDate(addMonths(currentDate, 1))
    }

    const isDayToday = (date: Date) => isToday(date)
    const isDayHighlighted = (date: Date) =>
        highlightedDates.some(highlightedDate =>
            isEqual(highlightedDate, date)
        )

    // Calculation of the offset for empty days
    const startOffset = firstDayOfMonth.getDay()
    const emptyCells = Array.from({ length: startOffset }, (_, i) => i)

    return (
        <Container
            className={ clsx(
                className,
                'rounded-2xl',
                'bg-[var(--color-card)] shadow-md transition-colors duration-500',
                'text-[var(--color-fg)] p-4 sm:p-6'
            )}
        >
            { showControls && (
                <Container className='flex justify-between items-center text-2xl font-semibold'>
                    <button
                        onClick={handlePrevMonth}
                        className='p-2 rounded-xl hover:bg-[var(--color-hover-bg)] transition-colors duration-300 hover:text-[var(--color-app-primary)] cursor-pointer'
                        aria-label='Previous month'
                    >
                        <ChevronLeft />
                    </button>
                    <h3 className='text-center min-w-40 transition-transform duration-500 hover:text-[var(--color-app-primary)]'>
                        {format(currentDate, 'LLLL yyyy', {locale: dateFnsLocale})}
                    </h3>
                    <button
                        onClick={handleNextMonth}
                        className='p-2 rounded-xl hover:bg-[var(--color-hover-bg)] transition-colors duration-300 hover:text-[var(--color-app-primary)] cursor-pointer'
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
                    const cellClasses = clsx(
                        'flex items-center justify-center h-10 w-full rounded-md',
                        'transition-all duration-100 hover:scale-105 ease-in-out',
                        'cursor-pointer select-none',
                        'hover:bg-[var(--color-hover-bg)] hover:text-[var(--color-accent)]',
                        isDayToday(day) && 'bg-[var(--color-app-primary)]/80 text-[var(--color-app-secondary)] hover:text-[var(--color-app-primary)] font-bold',
                        isDayHighlighted(day) && !isDayToday(day) && 'bg-[var(--color-app-primary)]/30 text-[var(--color-app-primary-fg)]'
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
