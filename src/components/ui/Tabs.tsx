'use client'

import { ReactNode, useState } from 'react'
import clsx from 'clsx'

interface Tab {
    label: string
    content: ReactNode
}

interface TabsProps {
    tabs: Tab[]
    initialIndex?: number
    className?: string
}

export default function Tabs({
    tabs,
    initialIndex = 0,
    className
}: TabsProps) {
    const [activeIndex, setActiveIndex] = useState(initialIndex)

    return (
        <div className={clsx('w-full text-[var(--color-fg)]', className)}>
            {/* Tab Headers */}
            <div
                role='tablist'
                className='flex border-b border-[var(--color-border)] mb-4'
            >
                {tabs.map((tab, index) => {
                    const isActive = activeIndex === index
                    return (
                        <button
                            key={index}
                            id={`tab-${index}`}
                            role='tab'
                            aria-selected={isActive}
                            aria-controls={`panel-${index}`}
                            className={clsx(
                                'px-4 py-2 text-sm font-medium focus:outline-none transition',
                                isActive
                                    ? 'text-[var(--color-accent)] border-b-2 border-[var(--color-accent)]'
                                    : 'text-[var(--color-muted-fg)] hover:text-blue-500'
                            )}
                            onClick={() => setActiveIndex(index)}
                        >
                            {tab.label}
                        </button>
                    )
                })}
            </div>

            {/* Tab Panel */}
            <div
                id={`panel-${activeIndex}`}
                role='tabpanel'
                aria-labelledby={`tab-${activeIndex}`}
                className='text-sm text-[var(--color-muted-fg)]'
            >
                {tabs[activeIndex]?.content}
            </div>
        </div>
    )
}
