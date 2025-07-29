'use client'

import { useTranslations } from 'next-intl'

import { AtSign, User } from 'lucide-react'

import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Section from '@/components/layout/Section'
import Textarea from '@/components/ui/Textarea'

export default function ContactUsPage() {
    const t = useTranslations('contact')
    const tf = useTranslations('form')

    return (
        <div>
            <Section className='text-center mt-10' padding='none'>
                <h1 className='text-3xl font-bold'>{t('title')}</h1>
                <p className='mt-2 text-muted'>{t('subtitle')}</p>
            </Section>

            <Section className='max-w-xl mx-auto' padding='sm'>
                <form className='grid gap-4'>
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
            </Section>
        </div>
    )
}
