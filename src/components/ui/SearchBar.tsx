'use client'

import { ChangeEvent } from 'react'
import { Search } from 'lucide-react'
import clsx from 'clsx'

interface SearchBarProps {
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    className?: string
}

export default function SearchBar({
    value,
    onChange,
    placeholder = 'Buscar...',
    className,
}: SearchBarProps) {
    return (
        <div className={clsx('relative w-full max-w-md', className)}>
            <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
            />
            <input
                type="search"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full pl-10 pr-4 py-2 border rounded-[var(--radius)] shadow-sm bg-[var(--color-bg)] text-[var(--color-fg)] text-sm focus:outline-none focus:ring-2 transition placeholder:text-gray-400 border-[var(--color-border)] focus:ring-[var(--color-accent)]"
                aria-label="Campo de búsqueda"
            />
        </div>
    )
}
