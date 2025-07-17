'use client'

import React, { ReactNode } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'destructive'
type Size = 'sm' | 'md' | 'lg'

interface LinkButtonProps {
    href: string
    children: ReactNode
    variant?: Variant
    size?: Size
    className?: string
    leftIcon?: ReactNode
    rightIcon?: ReactNode
    ariaLabel?: string
}

export default function LinkButton({
    href,
    children,
    variant = 'primary',
    size = 'md',
    className,
    leftIcon,
    rightIcon,
    ariaLabel,
}: LinkButtonProps) {
    const baseStyle =
        'inline-flex items-center justify-center font-medium rounded-md transition focus:outline-none focus:ring-2 focus:ring-offset-2'

    const variantStyle: Record<Variant, string> = {
        primary:
            'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
        secondary:
            'bg-[var(--color-muted)] text-[var(--color-fg)] hover:bg-[var(--color-muted-hover)] focus:ring-[var(--color-border)]',
        ghost:
            'bg-transparent text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/20 focus:ring-blue-400',
        outline:
            'border border-[var(--color-border)] text-[var(--color-fg)] hover:bg-[var(--color-muted-hover)] focus:ring-[var(--color-border)]',
        destructive:
            'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    }

    const sizeStyle: Record<Size, string> = {
        sm: 'text-sm px-3 py-1.5',
        md: 'text-base px-4 py-2',
        lg: 'text-lg px-5 py-3',
    }

    return (
        <Link
            href={href}
            className={clsx(
                baseStyle,
                variantStyle[variant],
                sizeStyle[size],
                className
            )}
            aria-label={ariaLabel}
        >
            {leftIcon && <span className="mr-2">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="ml-2">{rightIcon}</span>}
        </Link>
    )
}
