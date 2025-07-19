'use client'

import { X } from 'lucide-react'
import clsx from 'clsx'

interface ToastProps {
    type?: 'success' | 'error' | 'info'
    message: string
    onClose: () => void
}

const typeStyles = {
    success: 'bg-green-100 text-green-800 border-green-400',
    error: 'bg-red-100 text-red-800 border-red-400',
    info: 'bg-blue-100 text-blue-800 border-blue-400',
}

export default function Toast({ type = 'info', message, onClose }: ToastProps) {
    return (
        <div
            className={clsx(
                'flex items-center justify-between border-l-4 p-4 rounded-md shadow-md max-w-sm w-full',
                typeStyles[type]
            )}
            role='alert'
        >
            <span className='text-sm font-medium'>{message}</span>
            <button
                onClick={onClose}
                className='ml-4 text-inherit hover:text-black'
                aria-label='Cerrar notificación'
            >
                <X size={18} />
            </button>
        </div>
    )
}
