'use client'

import Accordion from '@/components/ui/Accordion'

type FAQItem = {
    question: string
    answer: string
}

type FAQSectionProps = {
    faqItems: FAQItem[]
    allowMultipleOpen: boolean
}

export default function FAQSection({
    faqItems,
    allowMultipleOpen = false
}: FAQSectionProps) {
    const items = faqItems.map(({ question, answer }) => ({
        title: question,
        content: answer,
    }))

    return (
        <section className='bg-[var(--color-bg)] text-[var(--color-fg)]'>
            <div className='max-w-3xl mx-auto px-4 py-8'>
                <h2 className='text-2xl font-bold mb-6 text-center'>
                    Preguntas Frecuentes
                </h2>
                <Accordion items={items} allowMultipleOpen={allowMultipleOpen} />
            </div>
        </section>
    )
}
