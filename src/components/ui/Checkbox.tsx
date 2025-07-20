'use client'

import { InputHTMLAttributes, useEffect, useState } from 'react'

import clsx from 'clsx'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    error?: boolean
    errorMessage?: string
}

export default function Checkbox({
    label,
    error,
    errorMessage,
    className,
    checked,
    onChange,
    ...props
}: CheckboxProps) {
    const isControlled = typeof checked === 'boolean'
    const [ internalChecked, setInternalChecked ] = useState<boolean | null>(null)
    const value = isControlled ? checked : internalChecked ?? false

    useEffect(() => {
        if (!isControlled) {
            setInternalChecked(false)
        }
    }, [isControlled])

    const handleChange = () => {
        const newValue = !value
        if (!isControlled) setInternalChecked(newValue)
        onChange?.({ target: { checked: newValue } } as any)
    }

    return (
        <div className='flex flex-col'>
            <label className='inline-flex items-center gap-2 cursor-pointer text-sm text-[var(--color-fg)]'>
                <input
                    type='checkbox'
                    className={clsx(
                        'form-checkbox h-4 w-4 rounded border-[var(--color-border)] text-[var(--color-accent)] focus:ring-[var(--color-accent)]',
                        error && 'border-red-500',
                        className
                    )}
                    checked={value}
                    onChange={handleChange}
                    {...props}
                />
                {label && <span>{label}</span>}
            </label>
            {error && errorMessage && (
                <p className='mt-1 text-sm text-red-600'>{errorMessage}</p>
            )}
        </div>
    )
}
