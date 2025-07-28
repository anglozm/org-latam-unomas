'use client'

import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import { ReactNode } from 'react'

interface TooltipProps {
    content: string
    children: ReactNode
    side?: 'top' | 'right' | 'bottom' | 'left'
    align?: 'start' | 'center' | 'end'
}

export default function Tooltip({
    content,
    children,
    side = 'top',
    align = 'center'
}: TooltipProps) {
    return (
        <TooltipPrimitive.Provider delayDuration={300}>
            <TooltipPrimitive.Root>
                <TooltipPrimitive.Trigger asChild>
                    {children}
                </TooltipPrimitive.Trigger>
                <TooltipPrimitive.Portal>
                    <TooltipPrimitive.Content
                        side={side}
                        align={align}
                        sideOffset={8}
                        className='z-50 px-3 py-1.5 text-sm text-[var(--color-fg)] bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg shadow-md animate-fade-in'
                    >
                        {content}
                        <TooltipPrimitive.Arrow className='fill-[var(--color-border)]' />
                    </TooltipPrimitive.Content>
                </TooltipPrimitive.Portal>
            </TooltipPrimitive.Root>
        </TooltipPrimitive.Provider>
    )
}
