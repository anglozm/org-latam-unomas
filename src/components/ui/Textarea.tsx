'use client'

import { TextareaHTMLAttributes } from 'react'

import clsx from 'clsx'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string
    label?: string
    error?: boolean
    errorMessage?: string
}

export default function Textarea({
    className,
    label,
    error,
    errorMessage,
    ...props
}: TextareaProps) {
    return (
        <div className='w-full hover:scale-105 duration-300 ease-in-out'>
            { label && (
                <label
                    htmlFor={props.id || props.name}
                    className={ clsx(
                        'block text-sm font-medium mb-1 ml-2 hover:text-blue-400',
                        'transition-colors duration-500 text-[var(--color-fg)]',
                    )}
                >
                    {label}
                </label>
            )}

            <textarea
                className={ clsx(
                    className,
                    'w-full px-4 py-2 border rounded-[var(--radius)] shadow-sm bg-[var(--color-bg)]',
                    'text-[var(--color-fg)] text-sm resize-none focus:outline-none focus:ring-1',
                    'transition-colors duration-500 placeholder:text-gray-400',
                    error
                        ? 'border-red-500 focus:ring-red-400'
                        : 'border-[var(--color-border)] focus:ring-[var(--color-accent)]'
                )}
                aria-invalid={error}
                rows={4}
                {...props}
            />

            { error && errorMessage && (
                <p className='mt-1 text-sm text-red-600'>{errorMessage}</p>
            )}
        </div>
    )
}
