'use client'

import { useState } from 'react'

import AccordionItem from './AccordionItem'

import clsx from 'clsx'

type AccordionItemData = {
    title: string
    content: string
}

type AccordionProps = {
    items: AccordionItemData[]
    allowMultipleOpen?: boolean
}

export default function Accordion({
    items,
    allowMultipleOpen = false
}: AccordionProps) {
    const [ openIndexes, setOpenIndexes ] = useState<number[]>([])

    const toggle = (i: number) => {
        if (allowMultipleOpen) {
            setOpenIndexes(prev => (
                prev.includes(i)
                    ? prev.filter(i => i !== i)
                    : [...prev, i]
            ))
        } else {
            setOpenIndexes(prev => (
                prev[0] === i
                    ? []
                    : [i]
            ))
        }
    }

    return (
        <div className={ clsx(
            'space-y-5 rounded-4xl p-10',
            'transition-colors duration-500 bg-[var(--color-bg)] text-[var(--color-fg)]',
        )}>
            { items.map((item, i) => (
                <AccordionItem
                    key={i}
                    title={item.title}
                    content={item.content}
                    isOpen={openIndexes.includes(i)}
                    onToggle={() => toggle(i)}
                />
            ))}
        </div>
    )
}
