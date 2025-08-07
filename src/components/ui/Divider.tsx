'use client'

import clsx from 'clsx'

interface DividerProps {
    className?: string
    orientation?: 'horizontal' | 'vertical'
    spacing?: string // e.g., 'my-4', 'mx-2'
    height?: string // Vertical only
    color?: string
}

export default function Divider({
    className = '',
    orientation = 'horizontal',
    spacing = '',
    height = 'h-10',
    color = 'bg-gray-400'
}: DividerProps) {
    const isVertical = orientation === 'vertical'

    return (
        <div className={ clsx(
            className,
            spacing,
            color,
            isVertical ? (height + ' w-px') : 'w-full h-px',
            'transition-colors duration-500'
        )} />
    )
}
