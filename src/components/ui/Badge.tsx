'use client'

import { ReactNode } from 'react'
import clsx from 'clsx'

type Variant = 'default' | 'success' | 'error' | 'info' | 'warning'

interface BadgeProps {
    children: ReactNode
    variant?: Variant
    className?: string
}

export default function Badge({
    children,
    variant = 'default',
    className,
}: BadgeProps) {
    const baseStyle = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium'

    const variantStyle: Record<Variant, string> = {
        default: 'bg-gray-100 text-gray-800',
        success: 'bg-green-100 text-green-800',
        error: 'bg-red-100 text-red-800',
        info: 'bg-blue-100 text-blue-800',
        warning: 'bg-yellow-100 text-yellow-800',
    }

    return (
        <span className={clsx(baseStyle, variantStyle[variant], className)}>
            {children}
        </span>
    )
}
