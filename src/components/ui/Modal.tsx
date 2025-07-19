'use client'

import React, { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import clsx from 'clsx'
import $ from 'jquery'

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    title?: string
    children: React.ReactNode
    className?: string
    width?: 'sm' | 'md' | 'lg'
}

const widthMap = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
}

export default function Modal({
    isOpen,
    onClose,
    title,
    children,
    className,
    width = 'md',
}: ModalProps) {
    const dialogRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!isOpen || !dialogRef.current) return

        const $doc = $(document)
        const $body = $('body')

        const handleKeyDown = (e: JQuery.KeyDownEvent) => {
            if (e.key === 'Escape') onClose()
        }

        const handleClickOutside = (e: JQuery.MouseDownEvent) => {
            if (
                dialogRef.current &&
                !$(dialogRef.current).has(e.target).length &&
                !$(dialogRef.current).is(e.target)
            ) {
                onClose()
            }
        }

        $doc.on('keydown', handleKeyDown)
        $doc.on('mousedown', handleClickOutside)
        $body.css('overflow', 'hidden')

        return () => {
            $doc.off('keydown', handleKeyDown)
            $doc.off('mousedown', handleClickOutside)
            $body.css('overflow', '')
        }
    }, [isOpen, onClose])

    if (!isOpen) return null

    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4'>
            <div
                ref={dialogRef}
                className={clsx(
                    'w-full rounded-md border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-fg)] shadow-lg transition-all',
                    widthMap[width],
                    className
                )}
            >
                <div className='flex items-center justify-between px-4 py-3 border-b border-[var(--color-border)]'>
                    <h3 className='text-lg font-semibold'>{title}</h3>
                    <button
                        onClick={onClose}
                        aria-label='Cerrar modal'
                        className='text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition'
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className='p-4'>{children}</div>
            </div>
        </div>
    )
}
