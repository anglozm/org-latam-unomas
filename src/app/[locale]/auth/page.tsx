'use client'

import { useTranslations } from 'next-intl'

import { AtSign, KeyRound, User } from 'lucide-react'

import Button from '@/components/ui/Button'
import Container from '@/components/layout/Container'
import Input from '@/components/ui/Input'
import Section from '@/components/layout/Section'
import Tabs from '@/components/ui/Tabs'

export default function AuthPage() {
    const t = useTranslations('auth')
    const tf = useTranslations('form')

    return (
        <Section className='max-w-xl mx-auto'>
            <Container className='max-w-md w-full bg-[var(--color-bg)] rounded-4xl shadow-lg p-6 sm:p-8'>
                <Tabs
                    classNameTabHeaders='justify-center'
                    initialIndex={0}
                    tabs={[
                        {
                            label: t('login'),
                            content: (
                                <Section className='max-w-xl mx-auto' padding='sm'>
                                    <form className='grid gap-4'>
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
                                <Section className='max-w-xl mx-auto' padding='sm'>
                                    <form className='grid gap-4'>
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
            </Container>
        </Section>
    )
}
