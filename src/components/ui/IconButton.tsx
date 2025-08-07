'use client'

import { ButtonHTMLAttributes, ReactNode } from 'react'

import Tooltip from './Tooltip'

import clsx from 'clsx'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'destructive' | 'warning' | 'success'
type Size = 'sm' | 'md' | 'lg'

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    variant?: Variant
    size?: Size
    icon: ReactNode
    tooltip?: string
}

export default function IconButton({
    className,
    variant = 'ghost',
    size = 'md',
    icon,
    tooltip = '',
    ...props
}: IconButtonProps) {
    const baseStyle =
        'inline-flex items-center justify-center rounded-md transition-colors duration-500 ' +
        'focus:outline-none focus:ring-1 focus:ring-offset-2'

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
        sm: 'text-sm p-1.5',
        md: 'text-base p-2',
        lg: 'text-lg p-3',
    }

    const button = (
        <button
            type='button'
            className={ clsx(
                className,
                baseStyle,
                variantStyle[variant],
                sizeStyle[size]
            )}
            {...props}
        >
            {icon}
        </button>
    )

    return tooltip ? (
        <Tooltip content={tooltip}>
            {button}
        </Tooltip>
    ) : (
        button
    )
}
