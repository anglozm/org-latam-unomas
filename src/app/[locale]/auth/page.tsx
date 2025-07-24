'use client'

import { useTranslations } from 'next-intl'

import Container from '@/components/layout/Container'
import Tabs from '@/components/ui/Tabs'

export default function AuthPage() {
    const t = useTranslations('auth')

    return (
        <section className='min-h-[80vh] flex items-center justify-center px-4'>
            <Container className='max-w-md w-full bg-[var(--color-bg)] border border-[var(--color-border)] rounded-2xl shadow-lg p-6 sm:p-8' size='sm'>
                <Tabs
                    classNameTabHeaders='justify-center'
                    initialIndex={0}
                    tabs={[
                        {
                            label: t('login'),
                            content: (
                                <form className='space-y-4'>
                                    <div>
                                        <label id='loginEmailLabel' className='block text-sm font-medium mb-1'>{t('e-mail')}</label>
                                        <input
                                            type='email'
                                            className='w-full px-4 py-2 rounded-lg border border-[var(--color-border)] bg-transparent'
                                        />
                                    </div>
                                    <div>
                                        <label id='loginPasswordLabel' className='block text-sm font-medium mb-1'>{t('password')}</label>
                                        <input
                                            type='password'
                                            className='w-full px-4 py-2 rounded-lg border border-[var(--color-border)] bg-transparent'
                                        />
                                    </div>
                                    <button
                                        type='submit'
                                        className='w-full bg-primary text-white py-2 rounded-lg font-semibold'
                                    >
                                        {t('login')}
                                    </button>
                                </form>
                            )
                        }, {
                            label: t('create-account'),
                            content: (
                                <form className='space-y-4'>
                                    <div>
                                        <label id='signupFullnameLabel' className='block text-sm font-medium mb-1'>{t('full-name')}</label>
                                        <input
                                            type='text'
                                            className='w-full px-4 py-2 rounded-lg border border-[var(--color-border)] bg-transparent'
                                        />
                                    </div>
                                    <div>
                                        <label id='signupEmailLabel' className='block text-sm font-medium mb-1'>{t('e-mail')}</label>
                                        <input
                                            type='email'
                                            className='w-full px-4 py-2 rounded-lg border border-[var(--color-border)] bg-transparent'
                                        />
                                    </div>
                                    <div>
                                        <label id='signupPasswordLabel' className='block text-sm font-medium mb-1'>{t('password')}</label>
                                        <input
                                            type='password'
                                            className='w-full px-4 py-2 rounded-lg border border-[var(--color-border)] bg-transparent'
                                        />
                                    </div>
                                    <button
                                        type='submit'
                                        className='w-full bg-primary text-white py-2 rounded-lg font-semibold'
                                    >
                                        {t('create-account')}
                                    </button>
                                </form>
                            )
                        }
                    ]}
                />
            </Container>
        </section>
    )
}
