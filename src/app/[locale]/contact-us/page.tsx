'use client'

import { useTranslations } from 'next-intl'

import { AtSign, User } from 'lucide-react'

import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'

import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'

import clsx from 'clsx'

export default function ContactUsPage() {
    const t = useTranslations('contact')
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
            <Container className='space-y-4 text-center'>
                <h1 className='text-4xl font-bold'>{t('title')}</h1>
                <p className='text-muted'>{t('subtitle')}</p>
            </Container>

            <Container className='mx-auto'>
                <form className='flex flex-col gap-6 max-w-md mx-auto'>
                    <Input
                        label={t('name')}
                        id='name'
                        type='text'
                        icon={<User size={20} />}
                        placeholder={tf('placeholders.full-name')}
                        required
                    />
                    <Input
                        label={t('email')}
                        id='email'
                        type='email'
                        icon={<AtSign size={20} />}
                        placeholder={tf('placeholders.email')}
                        required
                    />
                    <Textarea
                        label={t('message')}
                        id='message'
                        rows={5}
                        placeholder={tf('placeholders.type-us')}
                        required
                    />
                    <Button className='mt-10' type='submit' variant='primary' size='md'>
                        {t('submit')}
                    </Button>
                </form>
            </Container>
        </Section>
    )
}
