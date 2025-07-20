import { getRequestConfig } from 'next-intl/server'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export default getRequestConfig(async ({ locale }) => {
    let messages

    try {
        messages = (await import(`@/messages/${locale}.json`)).default
    } catch {
        messages = (await import(`@/messages/es.json`)).default
    }

    return {
        locale,
        messages,
    }
})
