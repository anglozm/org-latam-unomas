'use client'

import { useState } from 'react'

import AccordionItem from './AccordionItem'

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

    const toggle = (index: number) => {
        if (allowMultipleOpen) {
            setOpenIndexes((prev) =>
                prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
            )
        } else {
            setOpenIndexes((prev) => (prev[0] === index ? [] : [index]))
        }
    }

    return (
        <div className='space-y-4 rounded-md border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-fg)] p-4'>
            { items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    isOpen={openIndexes.includes(index)}
                    onToggle={() => toggle(index)}
                />
            ))}
        </div>
    )
}
