'use client'

import { useTranslations } from 'next-intl'

import { AtSign, KeyRound, User } from 'lucide-react'

import Section from '@/components/layout/Section'

import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Tabs from '@/components/ui/Tabs'

import clsx from 'clsx'

export default function AuthPage() {
    const t = useTranslations('auth')
    const tf = useTranslations('form')

    return (
        <Section
            className={ clsx(
                'mt-20'
            )}
            classNameContainer={ clsx(
                'space-y-10'
            )}
            width='max-w-7xl xl:max-w-6xl'
        >
            <Tabs
                classNameTabHeaders='justify-center'
                initialIndex={0}
                tabs={[
                    {
                        label: t('login'),
                        content: (
                            <Section>
                                <form className='flex flex-col gap-6'>
                                    <Input
                                        label={t('email')}
                                        id='loginEmailInput'
                                        type='email'
                                        icon={<AtSign size={20} />}
                                        placeholder={tf('placeholders.email')}
                                        required
                                    />
                                    <Input
                                        label={t('password')}
                                        id='loginPasswordInput'
                                        type='password'
                                        icon={<KeyRound size={20} />}
                                        placeholder={tf('placeholders.password')}
                                        required
                                    />
                                    <Button className='w-full mt-10' type='submit' variant='primary' size='md'>
                                        {t('login')}
                                    </Button>
                                </form>
                            </Section>
                        )
                    }, {
                        label: t('create-account'),
                        content: (
                            <Section>
                                <form className='flex flex-col gap-4'>
                                    <Input
                                        label={t('full-name')}
                                        id='signupFullnameInput'
                                        type='text'
                                        icon={<User size={20} />}
                                        placeholder={tf('placeholders.full-name')}
                                        required
                                    />
                                    <Input
                                        label={t('email')}
                                        id='signupEmailInput'
                                        type='email'
                                        icon={<AtSign size={20} />}
                                        placeholder={tf('placeholders.email')}
                                        required
                                    />
                                    <Input
                                        label={t('password')}
                                        id='signupPasswordInput'
                                        type='password'
                                        icon={<KeyRound size={20} />}
                                        placeholder={tf('placeholders.password')}
                                        required
                                    />
                                    <Button className='w-full mt-10' type='submit' variant='primary' size='md'>
                                        {t('create-account')}
                                    </Button>
                                </form>
                            </Section>
                        )
                    }
                ]}
            />
        </Section>
    )
}
