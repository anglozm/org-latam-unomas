'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'

type ToggleSize = 'sm' | 'md' | 'lg'

interface ToggleProps {
    checked?: boolean
    onChange?: (checked: boolean) => void
    disabled?: boolean
    label?: string
    size?: ToggleSize
}

export default function Toggle({
    checked,
    onChange,
    disabled,
    label,
    size = 'md',
}: ToggleProps) {
    const [internalChecked, setInternalChecked] = useState<boolean | null>(null)
    const isControlled = typeof checked === 'boolean'
    const value = isControlled ? checked : internalChecked ?? false

    useEffect(() => {
        if (!isControlled) {
            setInternalChecked(false)
        }
    }, [isControlled])

    const toggle = () => {
        if (disabled) return
        const newValue = !value
        if (!isControlled) setInternalChecked(newValue)
        onChange?.(newValue)
    }

    const sizeMap: Record<ToggleSize, { outer: string; knob: string; translate: string }> = {
        sm: { outer: 'h-4 w-8', knob: 'h-3 w-3', translate: 'translate-x-4' },
        md: { outer: 'h-5 w-10', knob: 'h-4 w-4', translate: 'translate-x-5' },
        lg: { outer: 'h-6 w-12', knob: 'h-5 w-5', translate: 'translate-x-6' },
    }

    return (
        <div className="flex items-center gap-2">
            {label && <span className="text-sm text-[var(--color-fg)]">{label}</span>}

            <button
                type="button"
                role="switch"
                aria-checked={value}
                disabled={disabled}
                onClick={toggle}
                className={clsx(
                    'relative inline-flex flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors focus:outline-none focus:ring-2',
                    value
                        ? 'bg-[var(--color-accent)]'
                        : 'bg-[var(--color-border)]',
                    'focus:ring-[var(--color-accent)]',
                    disabled && 'opacity-50 cursor-not-allowed',
                    sizeMap[size].outer
                )}
            >
            <span
                className={clsx(
                    'inline-block rounded-full shadow transform transition duration-200',
                    sizeMap[size].knob,
                    'bg-[var(--color-bg-contrast)]',
                    value ? sizeMap[size].translate : 'translate-x-0.5'
                )}
            />
            </button>
        </div>
    )
}
