'use client'

import { ReactNode } from 'react'
import clsx from 'clsx'
import Container from './Container'

interface SectionProps {
    id?: string
    children: ReactNode
    className?: string
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
    id,
    children,
    className,
    bgColor = 'none',
    padding = 'md',
    size = 'xl',
}: SectionProps) {
    return (
        <section
            id={id}
            className={clsx(
                bgMap[bgColor],
                paddingMap[padding],
                'transition-colors duration-300',
                className
            )}
        >
            <Container size={size}>
                {children}
            </Container>
        </section>
    )
}
