import { useTranslations } from 'next-intl'

import Container from '@/components/layout/Container'

import clsx from 'clsx'

type NoDataProps = {
    className?: string
}

export default function NoData({
    className
}: NoDataProps) {
    const t = useTranslations('common')

    return (
        <Container
            className={ clsx(
                className,
                'max-w-screen-xl p-20',
                'max-w-7xl xl:max-w-6xl'
            )}
        >
            <h6 className='text-xl font-semibold'>
                {t('no-data')}
            </h6>
        </Container>
    )
}
