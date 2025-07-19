'use client'

import { ReactNode, useEffect, useRef, useState } from 'react'

interface TooltipProps {
    text: string
    children: ReactNode
}

export default function Tooltip({ text, children }: TooltipProps) {
    const [visible, setVisible] = useState(false)
    const [hydrated, setHydrated] = useState(false)
    const id = useRef(`tooltip-${Math.random().toString(36).substring(2, 9)}`)

    useEffect(() => {
        setHydrated(true)
    }, [])

    if (!hydrated) return <>{children}</>

    return (
        <div
            className='relative inline-block'
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            onFocus={() => setVisible(true)}
            onBlur={() => setVisible(false)}
        >
            <span aria-describedby={id.current} className='focus:outline-none'>
                {children}
            </span>

            {visible && (
                <div
                    id={id.current}
                    role='tooltip'
                    className='absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-1 rounded shadow-md whitespace-nowrap z-50'
                >
                    {text}
                </div>
            )}
        </div>
    )
}
