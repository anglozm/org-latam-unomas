'use client'

import { SelectHTMLAttributes } from 'react'
import clsx from 'clsx'

interface Option {
    label: string
    value: string
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: string
    options: Option[]
    error?: boolean
    errorMessage?: string
}

export default function Select({
    label,
    options,
    error,
    errorMessage,
    className,
    ...props
}: SelectProps) {
    return (
        <div className="w-full">
            {label && (
                <label
                    htmlFor={props.id || props.name}
                    className="block text-sm font-medium text-[var(--color-fg)] mb-1"
                >
                    {label}
                </label>
            )}

            <select
                className={clsx(
                    'w-full px-4 py-2 border rounded-[var(--radius)] shadow-sm bg-[var(--color-bg)] text-[var(--color-fg)] text-sm focus:outline-none focus:ring-2 transition',
                    error
                        ? 'border-red-500 focus:ring-red-400'
                        : 'border-[var(--color-border)] focus:ring-[var(--color-accent)]',
                    className
                )}
                aria-invalid={error}
                {...props}
            >
                <option value="">Selecciona una opción</option>
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>

            {error && errorMessage && (
                <p className="mt-1 text-sm text-red-600">{errorMessage}</p>
            )}
        </div>
    )
}
