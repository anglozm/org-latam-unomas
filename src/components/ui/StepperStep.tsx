'use client'

import clsx from 'clsx'
import { Check } from 'lucide-react'
import { useEffect, useState } from 'react'

interface StepperStepProps {
    index: number
    title: string
    isActive: boolean
    isCompleted: boolean
    onClick?: () => void
}

export default function StepperStep({
    index,
    title,
    isActive,
    isCompleted,
    onClick,
}: StepperStepProps) {
    const [hydrated, setHydrated] = useState(false)

    useEffect(() => {
        setHydrated(true)
    }, [])

    const renderIndicator = () => {
        if (!hydrated) return index + 1 // seguro para SSR
        return isCompleted ? <Check size={14} /> : index + 1
    }

    return (
        <div
            className={clsx('flex items-center gap-2 cursor-pointer', {
                'text-blue-600': isActive,
                'text-gray-400': !isActive && !isCompleted,
                'text-green-600': isCompleted,
            })}
            onClick={onClick}
        >
            <div
                className={clsx(
                    'flex items-center justify-center w-6 h-6 rounded-full border text-xs font-bold',
                    {
                        'bg-blue-600 text-white border-blue-600': isActive,
                        'bg-green-500 text-white border-green-500': isCompleted,
                        'bg-white border-gray-300': !isActive && !isCompleted,
                    }
                )}
            >
                {renderIndicator()}
            </div>
            <span className="text-sm">{title}</span>
        </div>
    )
}
