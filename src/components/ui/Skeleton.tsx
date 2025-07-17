'use client'

import clsx from 'clsx'

interface SkeletonProps {
    height?: string
    width?: string
    rounded?: boolean
    circle?: boolean
    className?: string
}

export default function Skeleton({
    height = 'h-4',
    width = 'w-full',
    rounded = true,
    circle = false,
    className,
}: SkeletonProps) {
    return (
        <div
            className={clsx(
                'animate-pulse bg-gray-200 dark:bg-gray-700',
                height,
                width,
                {
                    'rounded-md': rounded && !circle,
                    'rounded-full': circle,
                },
                className
            )}
        />
    )
}
