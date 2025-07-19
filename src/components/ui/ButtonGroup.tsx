'use client'

import { ReactNode } from 'react'
import clsx from 'clsx'

interface ButtonGroupProps {
    children: ReactNode
    orientation?: 'horizontal' | 'vertical'
    className?: string
    segmented?: boolean
}

export default function ButtonGroup({
    children,
    orientation = 'horizontal',
    className,
    segmented = false,
}: ButtonGroupProps) {
    return (
        <div
            role='group'
            className={clsx(
                'inline-flex',
                orientation === 'vertical' ? 'flex-col' : 'flex-row',
                segmented && 'overflow-hidden rounded-md border border-[var(--color-border)]',
                className
            )}
        >
            {children}
        </div>
    )
}
