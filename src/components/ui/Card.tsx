'use client'

import { ReactNode } from 'react'
import clsx from 'clsx'
import Image from 'next/image'

interface CardProps {
    title?: string
    description?: string
    imageSrc?: string
    imageAlt?: string
    children?: ReactNode
    className?: string
}

export default function Card({
    title,
    description,
    imageSrc,
    imageAlt = '',
    children,
    className,
}: CardProps) {
    return (
        <div
            className={clsx(
                'bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden transition hover:shadow-md',
                className
            )}
        >
            { imageSrc && (
                <div className='relative w-full h-48'>
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        sizes='(max-width: 768px) 100vw, 33vw'
                        className='object-cover'
                        priority={false}
                    />
                </div>
            )}

            <div className='p-6'>
                {title && <h3 className='text-lg font-semibold text-gray-900 mb-2'>{title}</h3>}
                {description && <p className='text-sm text-gray-600 mb-4'>{description}</p>}
                {children}
            </div>
        </div>
    )
}
