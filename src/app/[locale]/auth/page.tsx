'use client'

import { useTranslations } from 'next-intl'

import Button from '@/components/ui/Button'
import Container from '@/components/layout/Container'
import Tabs from '@/components/ui/Tabs'

import clsx from 'clsx'

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
                                    <div className='mt-8'>
                                        <label htmlFor='loginEmailInput' className='block text-sm font-medium mb-1 ml-2 hover:text-blue-400'>{t('e-mail')}</label>
                                        <input
                                            id='loginEmailInput'
                                            type='email'
                                            className={ clsx(
                                                'w-full px-4 py-2 rounded-lg border border-[var(--color-border)] bg-transparent',
                                                'focus:outline-none focus:ring-1 focus:ring-blue-500 transition'
                                            )}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor='loginPasswordInput' className='block text-sm font-medium mb-1 ml-2 hover:text-blue-400'>{t('password')}</label>
                                        <input
                                            id='loginPasswordInput'
                                            type='password'
                                            className={ clsx(
                                                'w-full px-4 py-2 rounded-lg border border-[var(--color-border)] bg-transparent',
                                                'focus:outline-none focus:ring-1 focus:ring-blue-500 transition'
                                            )}
                                        />
                                    </div>
                                    <Button
                                        type='submit'
                                        variant='primary'
                                        size='md'
                                        className='w-full cursor-pointer mt-8'
                                    >
                                        {t('login')}
                                    </Button>
                                </form>
                            )
                        }, {
                            label: t('create-account'),
                            content: (
                                <form className='space-y-4'>
                                    <div className='mt-8'>
                                        <label htmlFor='signupFullnameInput' className='block text-sm font-medium mb-1 ml-2 hover:text-blue-400'>{t('full-name')}</label>
                                        <input
                                            id='signupFullnameInput'
                                            type='text'
                                            className={ clsx(
                                                'w-full px-4 py-2 rounded-lg border border-[var(--color-border)] bg-transparent',
                                                'focus:outline-none focus:ring-1 focus:ring-blue-500 transition'
                                            )}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor='signupEmailInput' className='block text-sm font-medium mb-1 ml-2 hover:text-blue-400'>{t('e-mail')}</label>
                                        <input
                                            id='signupEmailInput'
                                            type='email'
                                            className={ clsx(
                                                'w-full px-4 py-2 rounded-lg border border-[var(--color-border)] bg-transparent',
                                                'focus:outline-none focus:ring-1 focus:ring-blue-500 transition'
                                            )}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor='signupPasswordInput' className='block text-sm font-medium mb-1 ml-2 hover:text-blue-400'>{t('password')}</label>
                                        <input
                                            id='signupPasswordInput'
                                            type='password'
                                            className={ clsx(
                                                'w-full px-4 py-2 rounded-lg border border-[var(--color-border)] bg-transparent',
                                                'focus:outline-none focus:ring-1 focus:ring-blue-500 transition'
                                            )}
                                        />
                                    </div>
                                    <Button
                                        type='submit'
                                        variant='primary'
                                        size='md'
                                        className='w-full cursor-pointer mt-8'
                                    >
                                        {t('create-account')}
                                    </Button>
                                </form>
                            )
                        }
                    ]}
                />
            </Container>
        </section>
    )
}
