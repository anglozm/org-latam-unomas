import type { Config } from 'tailwindcss'

const config: Config = {
    content: ['./src/**/*.{ts,tsx}'],
    darkMode: 'class',                      // <--- IMPORTANTE FOR TOGGLE TO DARK MODE
    theme: {
        extend: {
            colors: {
                primary: '#2563EB',         // Azul
                secondary: '#F3F4F6',       // Gris claro
                destructive: '#DC2626',     // Rojo
                success: '#16A34A',         // Verde
                warning: '#D97706',         // Naranja
                accent: '#7C3AED',          // Morado
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
    plugins: [],
}

export default config
