'use client'

import { ReactNode, useState } from 'react'

import Divider from '@/components/ui/Divider'

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
            'w-full text-[var(--color-fg)] transition-colors duration-500',
        )}>
            {/* Tab Headers */}
            <div
                className={ clsx(
                    classNameTabHeaders,
                    'flex'
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
                            onClick={() => setActiveIndex(index)}
                            className={ clsx(
                                'px-4 py-2 text-lg font-medium focus:outline-none cursor-pointer',
                                'hover:scale-110 transition-colors duration-200 ease-in-out px-16',
                                isActive
                                    ? 'text-[var(--color-app-fg-primary)] border-b-2 border-[var(--color-app-fg-primary)]'
                                    : 'text-[var(--color-muted-fg)] hover:text-blue-400'
                            )}
                        >
                            {tab.label}
                        </button>
                    )
                })}
            </div>

            <Divider color='bg-[var(--color-border)]' />

            {/* Tab Panel */}
            <div
                className={ clsx(
                    classNameTabPanel,
                    'mt-12',
                    'text-[var(--color-muted-fg)] transition-colors duration-500'
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
