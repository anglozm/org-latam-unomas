'use client'

import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
    AlertCircle,
    CheckCircle,
    Info,
    XCircle,
} from 'lucide-react'
import clsx from 'clsx'
import Button from '@/components/ui/Button'

type DialogType = 'info' | 'warning' | 'danger' | 'success'

interface AlertDialogProps {
    open: boolean
    onClose: () => void
    onConfirm?: () => void
    title: string
    description?: string
    confirmText?: string
    cancelText?: string
    type?: DialogType
    className?: string
}

const iconMap = {
    info: {
        icon: <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
        bg: 'bg-[var(--color-info-bg)] text-[var(--color-info-fg)]',
    },
    warning: {
        icon: <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />,
        bg: 'bg-[var(--color-warning-bg)] text-[var(--color-warning-fg)]',
    },
    danger: {
        icon: <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />,
        bg: 'bg-[var(--color-error-bg)] text-[var(--color-error-fg)]',
    },
    success: {
        icon: <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />,
        bg: 'bg-[var(--color-success-bg)] text-[var(--color-success-fg)]',
    },
}

export default function AlertDialog({
    open,
    onClose,
    onConfirm,
    title,
    description,
    confirmText = 'Aceptar',
    cancelText = 'Cancelar',
    type = 'info',
    className,
}: AlertDialogProps) {
    const backdropRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }
        document.addEventListener('keydown', handleEscape)
        return () => document.removeEventListener('keydown', handleEscape)
    }, [onClose])

    const { icon, bg } = iconMap[type]

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    ref={backdropRef}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={(e) => {
                        if (e.target === backdropRef.current) onClose()
                    }}
                >
                    <motion.div
                        className={clsx(
                            'bg-[var(--color-bg)] text-[var(--color-fg)] rounded-lg shadow-lg p-6 w-full max-w-md mx-4 transition-all',
                            className
                        )}
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                    >
                        <div className="flex items-start gap-3">
                            <div className={clsx('p-2 rounded-full', bg)}>{icon}</div>
                            <div className="flex-1">
                                <h2 className="text-lg font-semibold">{title}</h2>
                                {description && (
                                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{description}</p>
                                )}
                            </div>
                        </div>

                        <div className="mt-6 flex justify-end gap-3">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={onClose}
                            >
                                {cancelText}
                            </Button>
                            <Button
                                variant={type === 'danger' ? 'destructive' : 'primary'}
                                size="sm"
                                onClick={onConfirm}
                            >
                                {confirmText}
                            </Button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
