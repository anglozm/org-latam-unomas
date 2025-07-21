import { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        // unoptimized: true, // ← Deactivate the automatic optimization (For images, etc.). If not, set to false
        path: '/_next/image',
        domains: [],
    },
    // This is the key
    basePath: '', // ← Important let it empty
    trailingSlash: false,
}

const withNextIntl = createNextIntlPlugin()

export default withNextIntl(nextConfig)
