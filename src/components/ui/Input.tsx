'use client'

import { InputHTMLAttributes, ReactNode } from 'react'

import clsx from 'clsx'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string
    label?: string
    icon?: ReactNode
    error?: boolean
    errorMessage?: string
}

export default function Input({
    className,
    label,
    icon,
    error,
    errorMessage,
    ...props
}: InputProps) {
    const baseStyles =
        'w-full px-5 py-3 border rounded-[var(--radius)] ' +
        'focus:outline-none focus:ring-1 transition shadow-sm ' +
        'text-sm bg-[var(--color-bg)] text-[var(--color-fg)] placeholder:text-gray-400'

    return (
        <div className='w-full'>
            { label && (
                <label
                    htmlFor={props.id || props.name}
                    className='block text-sm font-medium text-[var(--color-fg)] mb-1 ml-2 hover:text-blue-400'
                >
                    {label}
                </label>
            )}

            <div className='relative'>
                { icon && (
                    <span className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'>
                        {icon}
                    </span>
                )}

                <input
                    className={ clsx(
                        baseStyles,
                        className,
                        icon && 'pl-10',
                        error
                            ? 'border-red-500 focus:ring-red-400'
                            : 'border-[var(--color-border)] focus:ring-[var(--color-accent)]'
                    )}
                    aria-invalid={error}
                    {...props}
                />
            </div>

            { error && errorMessage && (
                <p className='mt-1 text-sm text-red-600'>{errorMessage}</p>
            )}
        </div>
    )
}
