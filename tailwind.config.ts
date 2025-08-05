import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
    ],
    darkMode: 'class',  // ← IMPORTANT FOR TOGGLE TO DARK MODE
    theme: {
        extend: {
            colors: {
                primary: '#2563EB',         // Blue
                secondary: '#F3F4F6',       // Light gray
                destructive: '#DC2626',     // Red
                success: '#16A34A',         // Green
                warning: '#D97706',         // Orange
                accent: '#7C3AED',          // Purple
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui'],
            },
            spacing: {
                header: '4.5rem',
                section: '6rem',
            },
            borderRadius: {
                DEFAULT: 'var(--radius)',
                md: 'calc(var(--radius) * 0.75)',
                lg: 'calc(var(--radius) * 1.25)',
                xl: 'calc(var(--radius) * 1.5)',
                '2xl': 'calc(var(--radius) * 2)',
            },
            boxShadow: {
                sm: 'var(--shadow-sm)',
                DEFAULT: 'var(--shadow)',
                md: 'var(--shadow-md)',
                lg: 'var(--shadow-lg)',
            },
            transitionTimingFunction: {
                DEFAULT: 'var(--ease)',
            },
            transitionDuration: {
                DEFAULT: 'var(--duration)',
            },
        },
    },
}

export default config
