'use client'

import React, { ReactNode } from 'react'

import clsx from 'clsx'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'destructive' | 'warning' | 'success'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    variant?: Variant
    size?: Size
    isLoading?: boolean
    leftIcon?: ReactNode
    rightIcon?: ReactNode
}

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    isLoading = false,
    disabled,
    leftIcon,
    rightIcon,
    className,
    ...props
}: ButtonProps) {
    const baseStyle =
        'inline-flex items-center justify-center font-medium rounded-md transition ' +
        'focus:outline-none focus:ring-1 focus:ring-offset-2 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed'

    // Semantic color system using CSS variables for theme support
    const variantStyle: Record<Variant, string> = {
        primary: 'bg-[var(--color-primary)] text-[var(--color-primary-fg)] hover:bg-[var(--color-primary-hover)] focus:ring-[var(--color-primary)]',
        secondary: 'bg-[var(--color-secondary)] text-[var(--color-secondary-fg)] hover:bg-[var(--color-secondary-hover)] focus:ring-[var(--color-secondary)]',
        ghost: 'bg-transparent text-[var(--color-primary)] hover:bg-[var(--color-primary-bg)] focus:ring-[var(--color-primary)]',
        outline: 'bg-[var(--color-card)] border border-[var(--color-border)] text-[var(--color-fg)] hover:bg-[var(--color-bg-hover)] focus:ring-[var(--color-border)]',
        success: 'bg-[var(--color-success)] text-white hover:bg-[var(--color-success-hover)] focus:ring-[var(--color-success)]',
        warning: 'bg-[var(--color-warning)] text-white hover:bg-[var(--color-warning-hover)] focus:ring-[var(--color-warning)]',
        destructive: 'bg-[var(--color-danger)] text-white hover:bg-[var(--color-danger-hover)] focus:ring-[var(--color-danger)]',
    }

    const sizeStyle: Record<Size, string> = {
        sm: 'text-sm px-3 py-1.5',
        md: 'text-base px-4 py-2',
        lg: 'text-lg px-5 py-3',
    }

    return (
        <button
            type='button'
            className={ clsx(
                className,
                baseStyle,
                variantStyle[variant],
                sizeStyle[size]
            )}
            disabled={disabled || isLoading}
            {...props}
        >
            { isLoading ? (
                <span className='animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full' />
            ) : (
                leftIcon && <span className='mr-2'>{leftIcon}</span>
            )}
            {children}
            {rightIcon && <span className='ml-2'>{rightIcon}</span>}
        </button>
    )
}
