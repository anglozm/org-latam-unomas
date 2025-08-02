'use client'

import { useEffect, useState } from 'react'

import Image from 'next/image'

import { LogoItem } from '@/types/LogoItem'

import clsx from 'clsx'

const TRANSITION_INTERVAL = 5000
const ANIMATION_DURATION = 500
const SLOT_HEIGHT = 100

interface SlotColumnProps {
    direction?: 'up' | 'down'
    logos: LogoItem[]
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
        <div className={ clsx(
            'h-[100px] w-[150px] overflow-hidden border-[var(--color-border)] rounded-xl',
            'transition duration-300 hover:scale-120 ease-in-out'
        )}>
            <div
                className={ clsx(
                    'flex flex-col items-center',
                    animate && 'transition-transform duration-500 ease-in-out'
                )}
                style={{
                    transform: `translateY(${offset}px)`
                }}
            >
                { extended.map((logo, i) => (
                    <div
                        key={i}
                        className={ clsx(
                            'h-[100px] flex items-center justify-center w-full bg-[var(--color-bg-png)]',
                            'transition-colors duration-500'
                        )}
                    >
                        { logo.href ? (
                            <a href={logo.href} target='_blank' rel='noopener noreferrer'>
                                <Image
                                    src={logo.src}
                                    alt={logo.alt ?? `Logo ${i}`}
                                    width={100}
                                    height={100}
                                    className='object-contain max-h-[80px]'
                                />
                            </a>
                        ) : (
                            <Image
                                src={logo.src}
                                alt={logo.alt ?? `Logo ${i}`}
                                width={100}
                                height={100}
                                className='object-contain max-h-[80px] hover:scale-120 duration-300 ease-in-out'
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
