'use client'

import clsx from 'clsx'

type SpinnerSize = 'sm' | 'md' | 'lg'
type SpinnerColor = 'gray' | 'white' | 'blue'

interface LoadingSpinnerProps {
    size?: SpinnerSize
    color?: SpinnerColor
    className?: string
}

export default function LoadingSpinner({
    size = 'md',
    color = 'gray',
    className,
}: LoadingSpinnerProps) {
    const sizeClasses: Record<SpinnerSize, string> = {
        sm: 'h-4 w-4',
        md: 'h-6 w-6',
        lg: 'h-8 w-8',
    }

    const colorClasses: Record<SpinnerColor, string> = {
        gray: 'border-gray-300 border-t-gray-800',
        white: 'border-white border-t-blue-200',
        blue: 'border-blue-300 border-t-blue-600',
    }

    return (
        <div
            className={clsx(
                'inline-block animate-spin rounded-full border-2 border-solid',
                sizeClasses[size],
                colorClasses[color],
                className
            )}
            role='status'
            aria-label='Cargando'
        />
    )
}
