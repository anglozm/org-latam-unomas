'use client'

import { useState } from 'react'

interface Toast {
    id: string
    message: string
    type: 'success' | 'error' | 'info'
}

export function useToast() {
    const [toasts, setToasts] = useState<Toast[]>([])

    function showToast(message: string, type: Toast['type'] = 'info') {
        const id = crypto.randomUUID()
        setToasts((prev) => [...prev, { id, message, type }])
        setTimeout(() => dismissToast(id), 4000)
    }

    function dismissToast(id: string) {
        setToasts((prev) => prev.filter((toast) => toast.id !== id))
    }

    return { toasts, showToast, dismissToast }
}
