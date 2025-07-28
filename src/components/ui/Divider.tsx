'use client'

import clsx from 'clsx'

interface DividerProps {
    className?: string
    orientation?: 'horizontal' | 'vertical'
    spacing?: string // e.g., 'my-4', 'mx-2'
    height?: string // Vertical only
}

export default function Divider({
    className = '',
    orientation = 'horizontal',
    spacing = '',
    height = 'h-10'
}: DividerProps) {
    const isVertical = orientation === 'vertical'

    return (
        <div className={ clsx(
            className,
            spacing,
            isVertical ? (height + ' w-px') : 'w-full h-px',
            'bg-[var(--color-border)]'
        )} />
    )
}
