'use client'

import Image from 'next/image'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import clsx from "clsx";

interface CardEventProps {
    imageUrl: string
    imageAlt?: string
    title: string
    titleColor?: string
    description: string
    listItems: string[]
    buttonText: string
    badgeText?: string
    badgeVariant?: 'default' | 'success' | 'error' | 'info' | 'warning'
}

export default function CardEvent({
    imageUrl,
    imageAlt = '',
    title,
    titleColor = '',
    description,
    listItems,
    buttonText,
    badgeText = 'new',
    badgeVariant = 'info',
}: CardEventProps) {
    return (
        <div className="rounded-lg overflow-hidden border border-[var(--color-border)] shadow-sm bg-[var(--color-card)] text-[var(--color-fg)]">
            <div className="relative h-48 w-full bg-[var(--color-muted)]">
                <Image
                    src={imageUrl}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain p-4"
                />

                {badgeText && (
                    <div className="absolute top-2 left-2">
                        <Badge variant={badgeVariant}>{badgeText}</Badge>
                    </div>
                )}
            </div>

            <div className="p-6 space-y-4">
                <h3 className={clsx(titleColor, "text-lg font-semibold text-[var(--color-accent)]")}>{title}</h3>
                <p className="text-sm text-[var(--color-muted-fg)]">{description}</p>

                <ul className="list-disc list-inside text-sm text-[var(--color-muted-fg)] space-y-1">
                    {listItems.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>

                <Button className="mt-4 w-full">{buttonText}</Button>
            </div>
        </div>
    )
}
