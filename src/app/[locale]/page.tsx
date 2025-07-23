'use client'

import React from 'react'

import HeroSection from '@/components/layout/HeroSection'

const imageSrc = '/img/wallpaper_testing.png'
const imageAlt = 'Wallpaper testing'

export default function HomePage() {
    return (
        <HeroSection
            className='flex flex-col items-center justify-center text-center px-4 py-20 bg-hero-gradient'
            imageSrc={imageSrc}
            imageAlt={imageAlt}
        />
    )
}
