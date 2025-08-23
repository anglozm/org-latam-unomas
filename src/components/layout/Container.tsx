'use client'

import { ReactNode } from 'react'

import clsx from 'clsx'

type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

interface ContainerProps {
    className?: string
    children: ReactNode
    corners?: 'none' | 'xl' | '2xl' | '4xl'
    size?: ContainerSize
    padding?: string
}

const cornersMap: Record<NonNullable<ContainerProps['corners']>, string> = {
    none: '',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    '4xl': 'rounded-4xl'
}

const sizeMap: Record<ContainerSize, string> = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    '2xl': 'max-w-screen-2xl'
}

export default function Container({
    className,
    children,
    corners = 'xl',
    size = 'xl',
    padding = 'px-4 sm:px-6 md:px-8 lg:px-4'
}: ContainerProps) {
    return (
        <div
            className={ clsx(
                className,
                cornersMap[corners],
                sizeMap[size],
                padding,
                'w-full transition-colors duration-500',
                'text-[var(--color-fg)]'
            )}
        >
            {children}
        </div>
    )
}
