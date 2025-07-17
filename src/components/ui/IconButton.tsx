'use client'

import { ButtonHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'
import Tooltip from './Tooltip'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'destructive'
type Size = 'sm' | 'md' | 'lg'

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: ReactNode
    tooltip?: string
    variant?: Variant
    size?: Size
}

export default function IconButton({
    icon,
    tooltip,
    variant = 'ghost',
    size = 'md',
    className,
    ...props
}: IconButtonProps) {
    const baseStyle =
        'inline-flex items-center justify-center rounded-md transition focus:outline-none focus:ring-2 focus:ring-offset-2'

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
        sm: 'p-1.5 text-sm',
        md: 'p-2 text-base',
        lg: 'p-3 text-lg',
    }

    const button = (
        <button
            type="button"
            className={clsx(
                baseStyle,
                variantStyle[variant],
                sizeStyle[size],
                className
            )}
            {...props}
        >
            {icon}
        </button>
    )

    return tooltip ? (
        <Tooltip text={tooltip}>
            {button}
        </Tooltip>
    ) : (
        button
    )
}
