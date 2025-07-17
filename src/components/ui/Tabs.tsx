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

export default function Tabs({ tabs, initialIndex = 0, className }: TabsProps) {
    const [activeIndex, setActiveIndex] = useState(initialIndex)

    return (
        <div className={clsx('w-full', className)}>
            {/* Header / Buttons */}
            <div role="tablist" className="flex border-b border-gray-200 mb-4">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        role="tab"
                        aria-selected={activeIndex === index}
                        className={clsx(
                            'px-4 py-2 text-sm font-medium focus:outline-none transition',
                            activeIndex === index
                                ? 'text-blue-600 border-b-2 border-blue-600'
                                : 'text-gray-500 hover:text-blue-500'
                        )}
                        onClick={() => setActiveIndex(index)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Content */}
            <div role="tabpanel" className="text-sm text-gray-700">
                {tabs[activeIndex]?.content}
            </div>
        </div>
    )
}
