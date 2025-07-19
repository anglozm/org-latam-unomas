'use client'

import { ReactNode } from 'react'
import clsx from 'clsx'

type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

interface ContainerProps {
    children: ReactNode
    size?: ContainerSize
    className?: string
}

const sizeMap: Record<ContainerSize, string> = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    '2xl': 'max-w-screen-2xl',
}

export default function Container({
    children,
    size = 'xl',
    className,
}: ContainerProps) {
    return (
        <div
            className={clsx(
                'w-full px-4 md:px-6 lg:px-8 mx-auto',
                sizeMap[size],
                'bg-[var(--color-bg)] text-[var(--color-fg)] transition-colors duration-300',
                className
            )}
        >
            {children}
        </div>
    )
}
