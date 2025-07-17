'use client'

import { ReactNode, useState } from 'react'
import {
    CheckCircle,
    AlertTriangle,
    Info,
    XCircle,
    X,
} from 'lucide-react'
import clsx from 'clsx'

type NotificationType = 'success' | 'error' | 'warning' | 'info'

interface NotificationProps {
    type?: NotificationType
    message: string
    description?: string
    closable?: boolean
    className?: string
}

export default function Notification({
    type = 'info',
    message,
    description,
    closable = true,
    className,
}: NotificationProps) {
    const [visible, setVisible] = useState(true)

    if (!visible) return null

    const typeMap = {
        success: {
            icon: <CheckCircle className="h-5 w-5 text-green-600" />,
            bg: 'bg-green-50',
            text: 'text-green-800',
        },
        error: {
            icon: <XCircle className="h-5 w-5 text-red-600" />,
            bg: 'bg-red-50',
            text: 'text-red-800',
        },
        warning: {
            icon: <AlertTriangle className="h-5 w-5 text-yellow-600" />,
            bg: 'bg-yellow-50',
            text: 'text-yellow-800',
        },
        info: {
            icon: <Info className="h-5 w-5 text-blue-600" />,
            bg: 'bg-blue-50',
            text: 'text-blue-800',
        },
    }

    const { icon, bg, text } = typeMap[type]

    return (
        <div
            className={clsx(
                'flex items-start gap-3 px-4 py-3 rounded-md shadow-sm border',
                bg,
                text,
                className
            )}
            role="alert"
        >
            <div className="pt-1">{icon}</div>
            <div className="flex-1">
                <p className="font-semibold">{message}</p>
                {description && <p className="text-sm">{description}</p>}
            </div>
            {closable && (
                <button onClick={() => setVisible(false)} className="pt-1">
                    <X className="h-4 w-4 text-current hover:opacity-70" />
                </button>
            )}
        </div>
    )
}
