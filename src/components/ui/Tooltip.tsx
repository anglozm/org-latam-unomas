'use client'

import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import { ReactNode } from 'react'

import clsx from 'clsx'

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
                        className={ clsx(
                            'z-50 px-3 py-1.5 text-sm border border-[var(--color-border)] shadow-md animate-fade-in',
                            'hover:scale-105 duration-300 ease-in-out',
                            'bg-[var(--color-bg)] text-[var(--color-fg)] transition-colors duration-500 rounded-lg'
                        )}
                    >
                        {content}
                        <TooltipPrimitive.Arrow className='fill-[var(--color-border)] hover:scale-105 duration-300 ease-in-out' />
                    </TooltipPrimitive.Content>
                </TooltipPrimitive.Portal>
            </TooltipPrimitive.Root>
        </TooltipPrimitive.Provider>
    )
}
