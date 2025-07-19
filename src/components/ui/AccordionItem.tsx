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
        <div className='border border-[var(--color-border)] rounded-md'>
            <button
                onClick={onToggle}
                className='flex w-full justify-between px-4 py-3 text-left text-sm font-medium
                    text-[var(--color-fg)] bg-[var(--color-bg)] hover:bg-[var(--color-hover-bg)] transition rounded-md'
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
                    'overflow-hidden transition-all px-4 bg-[var(--color-bg-subtle)] text-[var(--color-fg-subtle)]',
                    isOpen ? 'max-h-[500px] py-6' : 'max-h-0'
                )}
            >
                <div className='text-sm'>{content}</div>
            </div>
        </div>
    )
}
