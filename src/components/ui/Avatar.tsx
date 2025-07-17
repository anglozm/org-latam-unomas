'use client'

import { User } from 'lucide-react'
import clsx from 'clsx'
import Image from 'next/image'

interface AvatarProps {
    src?: string
    alt?: string
    size?: 'sm' | 'md' | 'lg'
    fallbackText?: string // Iniciales
    className?: string
}

const sizeMap = {
    sm: 32,
    md: 48,
    lg: 64,
}

export default function Avatar({
    src,
    alt = 'Avatar',
    size = 'md',
    fallbackText,
    className,
}: AvatarProps) {
    const dimension = sizeMap[size]

    return (
        <div
            className={clsx(
                'relative inline-flex items-center justify-center rounded-full bg-gray-200 text-gray-600 overflow-hidden',
                className
            )}
            style={{ width: dimension, height: dimension, fontSize: size === 'sm' ? '0.75rem' : '0.875rem' }}
            aria-label={alt}
        >
            {src ? (
                <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes={`${dimension}px`}
                    className="object-cover rounded-full"
                />
            ) : fallbackText ? (
                <span className="z-10">{fallbackText}</span>
            ) : (
                <User size={16} className="z-10" />
            )}
        </div>
    )
}
