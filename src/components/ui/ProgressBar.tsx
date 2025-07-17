'use client'

import clsx from 'clsx'

type ProgressBarSize = 'sm' | 'md' | 'lg'
type ProgressBarColor = 'blue' | 'green' | 'gray' | 'red'

interface ProgressBarProps {
    value: number
    max?: number
    size?: ProgressBarSize
    color?: ProgressBarColor
    showLabel?: boolean
    className?: string
}

export default function ProgressBar({
    value,
    max = 100,
    size = 'md',
    color = 'blue',
    showLabel = false,
    className,
}: ProgressBarProps) {
    const percentage = Math.min((value / max) * 100, 100)

    const heightClasses: Record<ProgressBarSize, string> = {
        sm: 'h-1.5',
        md: 'h-2.5',
        lg: 'h-4',
    }

    const colorClasses: Record<ProgressBarColor, string> = {
        blue: 'bg-blue-600',
        green: 'bg-green-500',
        gray: 'bg-gray-500',
        red: 'bg-red-500',
    }

    return (
        <div className="w-full">
            <div
                className={clsx(
                    'relative w-full rounded-full bg-gray-200 overflow-hidden',
                    heightClasses[size],
                    className
                )}
                role="progressbar"
                aria-valuenow={value}
                aria-valuemin={0}
                aria-valuemax={max}
            >
                <div
                    className={clsx('transition-all duration-300', colorClasses[color])}
                    style={{ width: `${percentage}%` }}
                />
            </div>

            {showLabel && (
                <div className="mt-1 text-right text-xs text-gray-700">
                    {Math.round(percentage)}%
                </div>
            )}
        </div>
    )
}
