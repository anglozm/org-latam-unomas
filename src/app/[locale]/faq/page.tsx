'use client'

import { useTranslations } from 'next-intl'

import FAQSection from '@/components/ui/FAQSection'

export default function FAQPage() {
    const t = useTranslations('faq')

    const faqItems = [
        {
            question: '¿Qué es Uno Más?',
            answer: 'Uno Más es un equipo consolidado que busca conectar personas con oportunidades de ingreso a través de la nueva economía.',
        }, {
            question: '¿Qué hacemos?',
            answer: 'Distribuimos soluciones mediante una plataforma web, a la vez que creamos liderago en las personas de nuestro equipo.',
        }, {
            question: '¿En cuántos países de Latam podemos expandir nuestro mercado?',
            answer: 'Actualmente podemos abrir sucursales en 12 países de Latam.',
        }, {
            question: '¿Qué es dropshipping?',
            answer: 'El dropshipping es un modelo de negocio de comercio electrónico (e-commerce) que permite a los empresarios distribuir soluciones sin necesidad de almacenar inventario ni enviarlos ellos mismos.',
        }, {
            question: '¿Cómo funciona el comercio social?',
            answer: 'Answer.',
        }, {
            question: '¿Cómo ganar tus primeros $500 extra mes a mes?',
            answer: 'La mejor forma de saberlo es aprendiendo en el taller de rentabilidad.',
        }, {
            question: '¿Qué es una línea de auspicio?',
            answer: 'Es el liderazgo construído en el tiempo, que conforma el nuevo empresario de manera ascendente con su equipo de trabajo.',
        }, {
            question: '¿Qué implica ser un líder en Uno Más?',
            answer: 'Ser un líder es dar el ejemplo y estar dispuesto al servicio del equipo.',
        }, {
            question: '¿Por qué es importante tener un mentor?',
            answer: 'Es importante porque nos ofrece guía y planificación durante el proceso de construcción del negocio.',
        }, {
            question: '¿En qué consisten nuestras mentorías?',
            answer: 'Trabajar lateralidad y profundidad de tu negocio.',
        },
    ]

    return <FAQSection faqItems={faqItems} />
}
