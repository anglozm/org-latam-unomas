'use client'

import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { ChevronDown } from 'lucide-react'

interface DropdownItem {
    label: string
    onClick: () => void
    disabled?: boolean
}

interface DropdownProps {
    label: string
    items: DropdownItem[]
}

export default function Dropdown({ label, items }: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    // Cierra al hacer clic fuera
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <div className="relative inline-block text-left" ref={ref}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center gap-1 px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 text-sm font-medium"
            >
                {label}
                <ChevronDown size={16} />
            </button>

            {isOpen && (
                <div className="absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5">
                    <ul className="py-1 text-sm text-gray-700">
                        {items.map((item, i) => (
                            <li key={i}>
                                <button
                                    onClick={() => {
                                        item.onClick()
                                        setIsOpen(false)
                                    }}
                                    disabled={item.disabled}
                                    className={clsx(
                                        'w-full text-left px-4 py-2 hover:bg-gray-100 transition',
                                        item.disabled && 'text-gray-400 cursor-not-allowed'
                                    )}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}
