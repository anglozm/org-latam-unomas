'use client'

import { useTranslations } from 'next-intl'

import Accordion from '@/components/ui/Accordion'
import Section from '@/components/layout/Section'

type FAQItem = {
    question: string
    answer: string
}

type FAQSectionProps = {
    faqItems: FAQItem[]
    allowMultipleOpen?: boolean
}

export default function FAQSection({
    faqItems,
    allowMultipleOpen = false
}: FAQSectionProps) {
    const t = useTranslations('faq')

    const items = faqItems.map(({ question, answer }) => ({
        title: question,
        content: answer
    }))

    return (
        <Section className='text-center mt-10' padding='none'>
            <h2 className='text-3xl font-bold mb-6'>
                {t('title')}
            </h2>
            <Accordion items={items} allowMultipleOpen={allowMultipleOpen} />
        </Section>
    )
}
