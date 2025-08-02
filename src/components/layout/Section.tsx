'use client'

import { ReactNode } from 'react'

import Container from './Container'

import clsx from 'clsx'

interface SectionProps {
    className?: string
    id?: string
    bgColor?: 'none' | 'white' | 'gray' | 'primary'
    margin?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
    padding?: 'none' | 'sm' | 'md' | 'lg'
    corners?: 'none' | 'xl' | '2xl' | '4xl'
    size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
    children: ReactNode
}

const bgMap: Record<NonNullable<SectionProps['bgColor']>, string> = {
    none: '',
    white: 'bg-[var(--color-surface)]',
    gray: 'bg-[var(--color-card)]',
    primary: 'bg-[var(--color-app-primary)]/10' // 10% transparency
}

const marginMap: Record<NonNullable<SectionProps['margin']>, string> = {
    none: '',
    sm: 'my-6',
    md: 'my-12',
    lg: 'my-20',
    xl: 'my-32'
}

const paddingMap: Record<NonNullable<SectionProps['padding']>, string> = {
    none: '',
    sm: 'py-6',
    md: 'py-12',
    lg: 'py-20'
}

const cornersMap: Record<NonNullable<SectionProps['corners']>, string> = {
    none: '',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    '4xl': 'rounded-4xl'
}

export default function Section({
    className,
    id,
    bgColor = 'none',
    margin = 'sm',
    padding = 'sm',
    corners = 'xl',
    size = 'lg',
    children
}: SectionProps) {
    return (
        <section
            id={id}
            className={ clsx(
                className,
                bgMap[bgColor],
                marginMap[margin],
                paddingMap[padding],
                cornersMap[corners],
                'max-w-xl mx-auto transition-colors duration-500'
            )}
        >
            <Container size={size}>
                {children}
            </Container>
        </section>
    )
}
