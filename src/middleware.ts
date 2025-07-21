import { NextRequest, NextResponse } from 'next/server'
import createMiddleware from 'next-intl/middleware'

const PUBLIC_FILE = /\.(.*)$/

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

    // Ignore static files (images, sources, etc.)
    if (
        PUBLIC_FILE.test(pathname) ||
        pathname.startsWith('/_next') ||
        pathname.startsWith('/favicon') ||
        pathname.startsWith('/img') // ← Important if you use images inside '/public/img'
    ) {
        return NextResponse.next()
    }

    // Delegate locale routes to next-intl
    return createMiddleware({
        locales: ['en', 'es'],
        defaultLocale: 'es'
    })(request)
}

export const config = {
    matcher: [
        '/((?!_next|favicon.ico|robots.txt|sitemap.xml).*)'
    ]
}
