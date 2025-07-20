import { getRequestConfig } from 'next-intl/server'

export default getRequestConfig(async () => {
    // Provide a static locale, fetch a user setting,
    // read from `cookies()`, `headers()`, etc.
    const locale = 'es'
    let messages

    try {
        messages = (await import(`@/messages/${locale}.json`)).default
    } catch {
        messages = (await import(`@/messages/en.json`)).default
    }

    return {
        locale,
        messages
    }
})
