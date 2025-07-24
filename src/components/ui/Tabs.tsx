'use client'

import { ReactNode, useState } from 'react'

import clsx from 'clsx'

interface Tab {
    label: string
    content: ReactNode
}

interface TabsProps {
    className?: string
    classNameTabHeaders?: string
    classNameTabPanel?: string
    tabs: Tab[]
    initialIndex?: number
}

export default function Tabs({
    className,
    classNameTabHeaders,
    classNameTabPanel,
    tabs,
    initialIndex = 0
}: TabsProps) {
    const [ activeIndex, setActiveIndex ] = useState(initialIndex)

    return (
        <div className={ clsx(
            className,
            'w-full text-[var(--color-fg)]'
        )}>
            {/* Tab Headers */}
            <div
                className={ clsx(
                    classNameTabHeaders,
                    'flex border-b border-[var(--color-border)] mb-4'
                )}
                role='tablist'
            >
                { tabs.map((tab, index) => {
                    const isActive = activeIndex === index

                    return (
                        <button
                            key={index}
                            id={`tab-${index}`}
                            role='tab'
                            aria-selected={isActive}
                            aria-controls={`panel-${index}`}
                            className={ clsx(
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
                className={ clsx(
                    classNameTabPanel,
                    'text-sm text-[var(--color-muted-fg)]'
                )}
                id={`panel-${activeIndex}`}
                role='tabpanel'
                aria-labelledby={`tab-${activeIndex}`}
            >
                {tabs[activeIndex]?.content}
            </div>
        </div>
    )
}
