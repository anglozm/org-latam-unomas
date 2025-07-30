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
        <div className='border-b border-[var(--color-border)] rounded-xl transition-colors duration-500 shadow-sm'>
            <button
                onClick={onToggle}
                aria-expanded={isOpen}
                className={ clsx(
                    'flex w-full justify-between px-5 py-4 text-left text-sm font-medium',
                    'hover:bg-[var(--color-hover-bg)]',
                    'transition-colors duration-500 cursor-pointer',
                    isOpen
                        ? 'text-[var(--color-fg)] bg-[var(--color-bg)] rounded-t-xl'
                        : 'rounded-xl'
                )}
            >
                {title}

                <ChevronDown
                    className={ clsx(
                        isOpen && 'rotate-180',
                        'h-5 w-5 transform transition-transform'
                    )}
                />
            </button>

            <div
                className={ clsx(
                    'overflow-hidden transition-all px-4',
                    'transition-colors duration-500 bg-[var(--color-bg-subtle)] text-[var(--color-fg-subtle)]',
                    isOpen
                        ? 'max-h-[500px] py-6 rounded-b-xl'
                        : 'max-h-0 rounded-xl'
                )}
            >
                <div className='text-sm'>{content}</div>
            </div>
        </div>
    )
}
