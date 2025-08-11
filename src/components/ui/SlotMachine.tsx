'use client'

import { LoopColumnProps } from '@/props/LoopColumnProps'

import LoopColumn from './LoopColumn'

import Container from '@/components/layout/Container'

import clsx from 'clsx'

interface SlotMachineProps {
    className?: string
    title?: string
    columns?: LoopColumnProps[]
}

export default function SlotMachine({
    className,
    title,
    columns
}: SlotMachineProps) {
    return (
        <Container
            className={ clsx(
                className
            )}
        >
            <h2 className='text-2xl font-bold text-center text-[var(--color-fg)] transition-colors duration-500 mb-10'>
                {title && title}
            </h2>
            <div
                className= { clsx(
                    ( columns &&
                        (columns.length === 3)
                            ? 'grid grid-cols-2 md:grid-cols-3 gap-6 justify-items-center'
                            : 'grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center'
                    ),
                )}
            >
                { columns && columns.map((column, i) => (
                    <LoopColumn
                        key={i}
                        logos={column.logos}
                        direction={column.direction}
                    />
                ))}
            </div>
        </Container>
    )
}
