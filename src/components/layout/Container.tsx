'use client'

import { ReactNode } from 'react'

import clsx from 'clsx'

type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

interface ContainerProps {
    className?: string
    children: ReactNode
    size?: ContainerSize
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
    size = 'xl'
}: ContainerProps) {
    return (
        <div
            className={ clsx(
                className,
                sizeMap[size],
                'w-full px-4 py-4 md:px-6 lg:px-8 mx-auto',
                'bg-[var(--color-bg)] text-[var(--color-fg)] transition-colors duration-300'
            )}
        >
            {children}
        </div>
    )
}
