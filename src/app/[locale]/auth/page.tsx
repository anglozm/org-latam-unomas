'use client'

import { useTranslations } from 'next-intl'

import { AtSign, KeyRound, User } from 'lucide-react'

import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Section from '@/components/layout/Section'
import Tabs from '@/components/ui/Tabs'

export default function AuthPage() {
    const t = useTranslations('auth')
    const tf = useTranslations('form')

    return (
        <Section className='shadow-lg' margin='xl' corners='4xl' bgColor='gray' size='xl'>
            <Tabs
                classNameTabHeaders='justify-center'
                initialIndex={0}
                tabs={[
                    {
                        label: t('login'),
                        content: (
                            <Section padding='none'>
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
                            <Section padding='none'>
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
