'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'

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

    const [ currentMonth, setCurrentMonth ] = useState(initialMonth)
    const [ currentYear, setCurrentYear ] = useState(initialYear)

    const weekdayNames = [
        t('weekday-names.sun'),
        t('weekday-names.mon'),
        t('weekday-names.tue'),
        t('weekday-names.wed'),
        t('weekday-names.thu'),
        t('weekday-names.fri'),
        t('weekday-names.sat'),
    ]

    const today = new Date()
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1)
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0)
    const daysInMonth = lastDayOfMonth.getDate()

    const startOffset = firstDayOfMonth.getDay()
    const totalCells = startOffset + daysInMonth
    const calendarCells = Array.from({ length: totalCells }, (_, i) => i)

    const handlePrevMonth = () => {
        setCurrentMonth(current => (current === 0 ? 11 : current - 1))
        setCurrentYear(current => (currentMonth === 0 ? current - 1 : current))
    }
    const handleNextMonth = () => {
        setCurrentMonth(current => (current === 11 ? 0 : current + 1))
        setCurrentYear(current => (currentMonth === 11 ? current + 1 : current))
    }

    const isToday = (day: number) => {
        const date = new Date(currentYear, currentMonth, day)

        return date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear()
    }
    const isHighlighted = (day: number) => {
        return highlightedDates.some(date =>
            date.getDate() === day &&
            date.getMonth() === currentMonth &&
            date.getFullYear() === currentYear
        )
    }

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
                        className='p-2 rounded-xl hover:bg-[var(--color-bg-hover)] transition-colors duration-300'
                        aria-label='Previous month'
                    >
                        <ChevronLeft />
                    </button>
                    <h3 className='text-center min-w-40 transition-transform duration-500'>
                        {new Date(currentYear, currentMonth).toLocaleString(t('lang'), { month: 'long', year: 'numeric' })}
                    </h3>
                    <button
                        onClick={handleNextMonth}
                        className='p-2 rounded-xl hover:bg-[var(--color-bg-hover)] transition-colors duration-300'
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
                            'h-8 rounded-md bg-[var(--color-app-primary)]/10'
                        )}
                    >
                        {name}
                    </div>
                ))}

                { calendarCells.map((cell, index) => {
                    const day = cell - startOffset + 1
                    const isValidDay = day > 0 && day <= daysInMonth

                    const cellClasses = clsx(
                        'flex items-center justify-center h-10 w-full rounded-md',
                        'transition-all duration-100 hover:scale-105 ease-in-out',
                        'cursor-pointer select-none',
                        isValidDay ? 'hover:bg-[var(--color-bg-hover)]' : 'cursor-default opacity-50',
                        isToday(day) && 'bg-[var(--color-app-primary)]/80 text-[var(--color-app-primary-fg)] font-bold',
                        isHighlighted(day) && !isToday(day) && 'bg-[var(--color-app-primary)]/30 text-[var(--color-app-primary-fg)]'
                    )

                    return (
                        <div key={index} className='flex justify-center items-center'>
                            { isValidDay && (
                                <button
                                    className={cellClasses}
                                    onClick={() => onDateSelect?.(new Date(currentYear, currentMonth, day))}
                                >
                                    {day}
                                </button>
                            )}
                        </div>
                    )
                })}
            </Container>
        </Container>
    )
}
