'use client'

import { useEffect, useState } from 'react'

import Image from 'next/image'

import clsx from 'clsx'

const TRANSITION_INTERVAL = 5000
const ANIMATION_DURATION = 500
const SLOT_HEIGHT = 100

interface SlotColumnProps {
    direction?: 'up' | 'down'
    logos: string[]
}

export default function LoopColumn({
    direction = 'up',
    logos
}: SlotColumnProps) {
    const isUp = direction === 'up'
    const extended = [...logos, logos[0]]
    const [ index, setIndex ] = useState(0)
    const [ animate, setAnimate ] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimate(true)
            setIndex(prev => prev + 1)
        }, TRANSITION_INTERVAL)

        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        if (index === extended.length - 1) {
            const timeout = setTimeout(() => {
                setAnimate(false)
                setIndex(0)
            }, ANIMATION_DURATION + 10)

            return () => clearTimeout(timeout)
        }
    }, [index, extended.length])

    const offset = isUp
        ? (-index * SLOT_HEIGHT)
        : ((index-(logos.length)) * SLOT_HEIGHT)

    return (
        <div className='h-[100px] w-[100px] overflow-hidden border-[var(--color-border)] rounded-md'>
            <div
                className={ clsx(
                    'flex flex-col items-center',
                    animate && 'transition-transform duration-500 ease-in-out'
                )}
                style={{
                    transform: `translateY(${offset}px)`
                }}
            >
                { extended.map((src, i) => (
                    <div
                        key={i}
                        className='h-[100px] flex items-center justify-center w-full'
                    >
                        <Image
                            src={src}
                            alt={`Logo ${i}`}
                            width={100}
                            height={100}
                            className='object-contain max-h-[80px]'
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
