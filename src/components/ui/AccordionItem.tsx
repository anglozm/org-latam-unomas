'use client'

import { ChevronDown } from 'lucide-react'
import { ReactNode } from 'react'
import clsx from 'clsx'

interface AccordionItemProps {
    title: string
    content: ReactNode
    isOpen: boolean
    onToggle: () => void
}

export default function AccordionItem({
    title,
    content,
    isOpen,
    onToggle,
}: AccordionItemProps) {
    return (
        <div className="border rounded-md">
            <button
                onClick={onToggle}
                className="w-full flex justify-between items-center px-4 py-3 text-left text-sm font-medium text-gray-800 hover:bg-gray-50 transition"
                aria-expanded={isOpen}
            >
                {title}
                <ChevronDown
                    className={clsx(
                        'h-5 w-5 transform transition-transform',
                        isOpen && 'rotate-180'
                    )}
                />
            </button>
            <div
                className={clsx(
                    'overflow-hidden transition-all px-4',
                    isOpen ? 'max-h-[500px] py-3' : 'max-h-0'
                )}
            >
                <div className="text-sm text-gray-600">{content}</div>
            </div>
        </div>
    )
}
