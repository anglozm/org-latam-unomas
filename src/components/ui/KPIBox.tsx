'use client'

import { ReactNode } from 'react'
import clsx from 'clsx'

interface KPIBoxProps {
    label: string
    value: string | number
    icon?: ReactNode
    delta?: string
    color?: 'blue' | 'green' | 'gray' | 'red'
    className?: string
}

export default function KPIBox({
    label,
    value,
    icon,
    delta,
    color = 'blue',
    className,
}: KPIBoxProps) {
    const colorMap = {
        blue: 'text-blue-600',
        green: 'text-green-600',
        gray: 'text-gray-600',
        red: 'text-red-600',
    }

    return (
        <div
            className={clsx(
                'bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200',
                className
            )}
        >
            <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium text-gray-500">{label}</p>
                {icon && <div className="text-gray-400">{icon}</div>}
            </div>
            <div className="flex items-baseline justify-between">
                <p className="text-2xl font-bold text-gray-900">{value}</p>
                {delta && (
                    <span className={clsx('text-sm font-medium', colorMap[color])}>
            {delta}
          </span>
                )}
            </div>
        </div>
    )
}
