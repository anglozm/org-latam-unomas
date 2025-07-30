'use client'

import { ReactNode } from 'react'

import Container from './Container'

import clsx from 'clsx'

interface SectionProps {
    className?: string
    id?: string
    children: ReactNode
    bgColor?: 'white' | 'gray' | 'primary' | 'none'
    padding?: 'none' | 'sm' | 'md' | 'lg'
    size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}

const bgMap: Record<NonNullable<SectionProps['bgColor']>, string> = {
    white: 'bg-[var(--color-surface)]',
    gray: 'bg-[var(--color-muted)]',
    primary: 'bg-[var(--color-app-primary)/10]', // 10% transparency
    none: '',
}

const paddingMap: Record<NonNullable<SectionProps['padding']>, string> = {
    none: 'py-0',
    sm: 'py-6',
    md: 'py-12',
    lg: 'py-20',
}

export default function Section({
    className,
    id,
    children,
    bgColor = 'none',
    padding = 'md',
    size = 'xl'
}: SectionProps) {
    return (
        <section
            id={id}
            className={ clsx(
                className,
                bgMap[bgColor],
                paddingMap[padding],
                'transition-colors duration-500'
            )}
        >
            <Container size={size}>
                {children}
            </Container>
        </section>
    )
}
