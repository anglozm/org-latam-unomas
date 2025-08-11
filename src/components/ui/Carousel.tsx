'use client'

import React, { useState, useEffect } from 'react'

import Image from 'next/image'

import clsx from 'clsx'

type CarouselItem = {
    src: string
    alt: string
    width?: number
    height?: number
    className?: string
    style?: React.CSSProperties
}

type CarouselProps = {
    items: CarouselItem[]
    duration?: number // Duration in milliseconds for auto-slide
    className?: string
}

export default function Carousel({
    items,
    duration = 5000,
    className
}: CarouselProps) {
    const [ currentSlide, setCurrentSlide ] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % items.length)
        }, duration)

        return () => clearInterval(timer)
    }, [items.length, duration])

    return (
        <div
            className={ clsx(
                className,
                'relative w-full h-[25em] overflow-hidden group'
            )}
        >
            { items.map((item, i) => (
                <div
                    key={i}
                    className={ clsx(
                        'absolute inset-0 transition-opacity duration-1000 ease-in-out',
                        i === currentSlide
                            ? 'opacity-100'
                            : 'opacity-0'
                    )}
                >
                    <Image
                        className={ clsx(
                            'w-full h-full object-cover rounded-2xl shadow-xl transition-transform duration-500',
                            item.className
                        )}
                        src={item.src}
                        alt={item.alt}
                        width={item.width || 200}
                        height={item.height || 200}
                        style={item.style}
                    />
                </div>
            ))}

            {/* Navigation Dots */}
            <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-30'>
                { items.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentSlide(i)}
                        className={clsx(
                            'w-2.5 h-2.5 rounded-full bg-white transition-colors duration-300',
                            i === currentSlide ? 'bg-opacity-100' : 'bg-opacity-50 hover:bg-opacity-75'
                        )}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}
