'use client'

import React, { useRef, useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'

interface PopoverProps {
    trigger: React.ReactNode
    children: React.ReactNode
    position?: 'top' | 'bottom' | 'left' | 'right'
    className?: string
}

export default function Popover({
    trigger,
    children,
    position = 'bottom',
    className,
}: PopoverProps) {
    const [open, setOpen] = useState(false)
    const triggerRef = useRef<HTMLDivElement>(null)
    const popoverRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                popoverRef.current &&
                !popoverRef.current.contains(event.target as Node) &&
                !triggerRef.current?.contains(event.target as Node)
            ) {
                setOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const positionClasses = {
        top: 'bottom-full mb-2 left-1/2 -translate-x-1/2',
        bottom: 'top-full mt-2 left-1/2 -translate-x-1/2',
        left: 'right-full mr-2 top-1/2 -translate-y-1/2',
        right: 'left-full ml-2 top-1/2 -translate-y-1/2',
    }

    const animationVariants = {
        hidden: { opacity: 0, y: -8 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -8 },
    }

    return (
        <div className='relative inline-block'>
            <div
                ref={triggerRef}
                onClick={() => setOpen(!open)}
                className='cursor-pointer'
            >
                {trigger}
            </div>

            <AnimatePresence>
                { open && (
                    <motion.div
                        ref={popoverRef}
                        initial='hidden'
                        animate='visible'
                        exit='exit'
                        variants={animationVariants}
                        transition={{ duration: 0.15, ease: 'easeOut' }}
                        className={clsx(
                            'absolute z-50 bg-white border border-gray-200 rounded-lg shadow-md p-4 w-64',
                            positionClasses[position],
                            className
                        )}
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
