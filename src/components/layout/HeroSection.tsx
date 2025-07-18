'use client'

import {Info} from 'lucide-react'
import {Mail} from 'lucide-react'
import {Send} from 'lucide-react'

import {useState} from 'react'
import {useTheme} from "@/hooks/useTheme";
import {useToast} from '@/hooks/useToast'
import { Users, TrendingUp } from 'lucide-react'
import { Settings, Trash2, Moon, Sun } from 'lucide-react'

import Link from 'next/link'
import AlertDialog from '@/components/ui/AlertDialog'
import Avatar from '@/components/ui/Avatar'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import ButtonGroup from '@/components/ui/ButtonGroup'
import Card from '@/components/ui/Card'
import CardEvent from '@/components/ui/CardEvent'
import Checkbox from '@/components/ui/Checkbox'
import Container from '@/components/layout/Container'
import Dropdown from '@/components/ui/Dropdown'
import FAQSection from '@/components/ui/FAQSection'
import IconButton from '@/components/ui/IconButton'
import Input from '@/components/ui/Input'
import KPIBox from '@/components/ui/KPIBox'
import LinkButton from "@/components/ui/LinkButton";
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import Modal from '@/components/ui/Modal'
import Notification from '@/components/ui/Notification'
import Popover from '@/components/ui/Popover'
import ProgressBar from "@/components/ui/ProgressBar"
import Radio from '@/components/ui/Radio'
import SearchBar from '@/components/ui/SearchBar'
import Section from '@/components/layout/Section'
import Select from '@/components/ui/Select'
import Skeleton from "@/components/ui/Skeleton"
import Stepper from '@/components/ui/Stepper'
import Tabs from '@/components/ui/Tabs'
import Textarea from '@/components/ui/Textarea'
import Toast from '@/components/ui/Toast'
import Toggle from '@/components/ui/Toggle'
import Tooltip from '@/components/ui/Tooltip'
import clsx from "clsx";

const options = [
    {label: 'Venezuela', value: 've'},
    {label: 'Colombia', value: 'co'},
    {label: 'México', value: 'mx'},
]

const faqItems = [
    {
        question: '¿Qué es "Uno Más"?',
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
        question: '¿Qué implica ser un líder en "Uno Más"?',
        answer: 'Ser un líder es dar el ejemplo y estar dispuesto al servicio del equipo.',
    }, {
        question: '¿Por qué es importante tener un mentor?',
        answer: 'Es importante porque nos ofrece guía y planificación durante el proceso de construcción del negocio.',
    }, {
        question: '¿En qué consisten nuestras mentorías?',
        answer: 'Trabajar lateralidad y profundidad de tu negocio.',
    },
]

interface HeroSectionProps {
    className?: string
}

export default function HeroSection({className}: HeroSectionProps) {
    const [query, setQuery] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [open, setOpen] = useState(false)
    const { toasts, showToast, dismissToast } = useToast()
    const { theme, toggleTheme } = useTheme()

    return (
        <section
            className={clsx(
                'w-full py-20 px-4 text-center flex flex-col items-center justify-center',
                'bg-[var(--color-bg)] text-[var(--color-fg)] transition-colors duration-300',
                className
            )}
        >
            <CardEvent
                imageUrl="/img/blue-wallpaper_testing.png"
                imageAlt="Zoom con líderes"
                title="Masterclass: Duplica tu Red"
                description="Descubre cómo escalar tu negocio de Network Marketing con técnicas comprobadas."
                listItems={[
                    'Estrategias digitales modernas',
                    'Errores comunes y cómo evitarlos',
                    'Herramientas para duplicar tu red',
                    'Plan de acción efectivo',
                ]}
                buttonText="Registrarme ahora"
                badgeText="Destacado"
                badgeVariant="success"
            />

            <FAQSection faqItems={faqItems} allowMultipleOpen={true} />

            <div className="bg-[var(--color-bg)] text-[var(--color-fg)] border border-[var(--color-border)] rounded-[var(--radius)] shadow p-4">
                Contenido adaptado a light/dark mode
            </div>

            <ButtonGroup segmented>
                <Button variant="ghost">Día</Button>
                <Button variant="ghost">Semana</Button>
                <Button variant="ghost">Mes</Button>
            </ButtonGroup>

            {/*Botón de Ajustes*/}
            <IconButton
                icon={<Settings size={18} />}
                aria-label="Abrir configuración"
                variant="ghost"
                size="md"
            />

            {/*Botón destructivo*/}
            <IconButton
                icon={<Trash2 size={18} />}
                aria-label="Eliminar elemento"
                variant="destructive"
                size="sm"
            />

            {/*Botón para cambiar tema (ejemplo dinámico)*/}
            <IconButton
                icon={theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                aria-label="Cambiar tema"
                onClick={toggleTheme}
                variant="outline"
                size="sm"
            />

            <Tooltip text="Configuración">
                <IconButton
                    icon={<Settings size={18} />}
                    aria-label="Abrir configuración"
                    variant="ghost"
                    size="md"
                />
            </Tooltip>

            <LinkButton href="/dashboard" variant="outline">
                Ir al dashboard
            </LinkButton>

            <Button variant="outline">Ver más</Button>
            <Button variant="destructive" size="sm">Eliminar</Button>
            <Button variant="ghost" isLoading>Procesando</Button>
            <br/>
            <br/>

            <Button onClick={() => setOpen(true)} variant="destructive">
                Eliminar cuenta
            </Button>

            <AlertDialog
                open={open}
                onClose={() => setOpen(false)}
                onConfirm={() => {
                    console.log('Cuenta eliminada')
                    setOpen(false)
                }}
                title='¿Estás completamente seguro?'
                description='Esta acción es irreversible. Perderás todos tus datos.'
                confirmText='Sí, eliminar'
                cancelText='No, cancelar'
                type='info'
            />

            <Section
                id='vision'
                bgColor='gray'
                padding='lg'
            >
                <h2 className="text-3xl font-bold mb-4">Nuestra visión Uno Más</h2>
                <p className="text-gray-700">
                    Crear una comunidad LATAM de líderes en Network Marketing con propósito...
                </p>
            </Section>

            <Notification
                type="success"
                message="¡Listo!"
                description="Tu información ha sido guardada correctamente."
            />

            <Notification
                type="warning"
                message="Atención"
                description="Aún no has completado tu perfil."
                closable={false}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <KPIBox
                    label="Miembros activos"
                    value="128"
                    delta="+12 este mes"
                    icon={<Users size={18} />}
                    color="green"
                />

                <KPIBox
                    label="Crecimiento mensual"
                    value="15.6%"
                    delta="+2.1%"
                    icon={<TrendingUp size={18} />}
                    color="blue"
                />
            </div>

            <Popover
                trigger={<button className="btn btn-sm">Ver detalles</button>}
                position="right"
            >
                <h4 className="font-semibold mb-2">Info rápida</h4>
                <p className="text-sm text-gray-600">Este popover contiene contenido adicional contextual.</p>
            </Popover>


            <Skeleton width="w-32" height="h-6" />
            <Skeleton circle height="h-10" width="h-10" />
            <Skeleton width="w-full" height="h-48" />

            <div className="space-y-3">
                <Skeleton className="bg-secondary-titan-white" width="w-2/3" />
                <Skeleton className="bg-secondary-pippin" width="w-full" height="h-4" />
                <Skeleton className="bg-secondary-bubbles" width="w-1/2" />
            </div>

            <Container size="lg" className="py-12 bg-secondary-feta">
                <h1 className="text-2xl font-bold mb-4">Sobre nosotros</h1>
                <p className="text-gray-600">
                    Somos un equipo comprometido con el desarrollo del Network Marketing en LATAM...
                </p>
            </Container>

            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                Transforma tu vida con{' '}
                <span className="text-blue-600">Uno Más • LATAM</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-8">
                Aprende, lidera y crece dentro de una comunidad que impulsa el Network Marketing en toda Latinoamérica.
            </p>
            <Link
                href="/opportunity"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition"
            >
                Conoce la oportunidad
            </Link>

            <Button>Primario</Button>

            <Button variant="secondary" size="lg">
                Secundario grande
            </Button>

            <Button variant="ghost" leftIcon={<Send size={16}/>}>
                Enviar
            </Button>

            <Button isLoading>
                Cargando...
            </Button>

            <Input
                label="Correo electrónico"
                type="email"
                name="email"
                placeholder="tucorreo@ejemplo.com"
                icon={<Mail size={16}/>}
                error={false}
                errorMessage="Este campo es obligatorio"
            />

            <Select
                label="País"
                name="pais"
                options={options}
                error={false}
                errorMessage="Selecciona un país válido"
            />

            <Textarea
                label="Mensaje"
                name="mensaje"
                placeholder="Escribe tu mensaje aquí..."
                error={false}
                errorMessage="Este campo es obligatorio"
            />

            <div className="p-4">
                <SearchBar
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Buscar socios, productos..."
                />
            </div>

            <button
                onClick={() => setIsOpen(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded"
            >
                Abrir modal
            </button>

            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Formulario rápido">
                <p className="text-sm text-gray-700">
                    Este es el contenido del modal. Puedes colocar aquí formularios, alertas o cualquier componente.
                </p>
            </Modal>

            <Card
                title="Testimonio real"
                description="Gracias a Uno Más, transformé mi vida personal y profesional. Hoy lidero mi propio equipo."
            />

            <Card
                imageSrc="/img/angel-lozada.jpg"
                title="Angel Lozada"
                description="Líder de expansión en Venezuela"
            />

            <Card title="¿Quieres formar parte?">
                <Button variant="primary" size="sm">Únete ahora</Button>
            </Card>

            <Button onClick={() => showToast('¡Guardado con éxito!', 'success')}>Mostrar Toast</Button>

            <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
                {toasts.map((toast) => (
                    <Toast
                        key={toast.id}
                        message={toast.message}
                        type={toast.type}
                        onClose={() => dismissToast(toast.id)}
                    />
                ))}
            </div>

            <Badge>Nuevo</Badge>
            <Badge variant="success">Activo</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="info">Info</Badge>
            <Badge variant="warning">Atención</Badge>

            <Tabs
                tabs={[
                    {
                        label: 'Misión',
                        content: (
                            <p>
                                Nuestra misión es empoderar a líderes LATAM para alcanzar libertad financiera a través
                                del Network Marketing.
                            </p>
                        ),
                    }, {
                        label: 'Visión',
                        content: (
                            <p>
                                Ser la comunidad de crecimiento más influyente en habla hispana, impulsando el
                                emprendimiento consciente.
                            </p>
                        ),
                    }, {
                        label: 'Valores',
                        content: (
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Integridad</li>
                                <li>Compromiso</li>
                                <li>Educación constante</li>
                                <li>Trabajo en equipo</li>
                            </ul>
                        ),
                    },
                ]}
            />

            <br/>
            <br/>
            <Stepper
                steps={[
                    {
                        title: 'Regístrate',
                        content: <p>Completa tus datos básicos para crear tu cuenta.</p>,
                    }, {
                        title: 'Conéctate',
                        content: <p>Únete a nuestro grupo de bienvenida y empieza tu capacitación.</p>,
                    }, {
                        title: 'Duplica',
                        content: <p>Aprende a invitar, educar y ayudar a otros como tú.</p>,
                    },
                ]}
            />
            <br/>
            <br/>

            <Tooltip text="Información importante que el usuario debe conocer">
                <button className="p-2 rounded hover:bg-gray-100">
                    <Info size={18}/>
                </button>
            </Tooltip>

            <Dropdown
                label="Opciones"
                items={[
                    {
                        label: 'Perfil',
                        onClick: () => console.log('Ir a perfil'),
                    },
                    {
                        label: 'Cerrar sesión',
                        onClick: () => console.log('Logout'),
                    },
                ]}
            />

            <Avatar src="/img/angel-lozada.jpg" fallbackText="LG" size="lg" />
            <Avatar src="/img/angel-lozada.jpg" alt="Perfil" size="md" />
            <Avatar src="/img/angel-lozada.jpg" size="sm" />

            <Checkbox
                label="Acepto los términos y condiciones"
                name="terminos"
                error={false}
                errorMessage="Este campo es obligatorio"
            />

            <div className="space-y-2">
                <Radio label="Opción A" name="opciones" value="a" />
                <Radio label="Opción B" name="opciones" value="b" />
                <Radio label="Opción C" name="opciones" value="c" />
            </div>

            <Toggle label="Modo oscuro" size="sm" />
            <Toggle label="Notificaciones" size="md" checked />
            <Toggle label="Activar plan" size="lg" />

            <LoadingSpinner />
            <LoadingSpinner size="sm" color="blue" />
            <LoadingSpinner size="md" color="gray" />
            <LoadingSpinner size="lg" color="white" className="mx-auto my-4" />

            <ProgressBar value={40} />
            <ProgressBar value={75} size="lg" color="green" showLabel />
            <ProgressBar value={90} max={120} color="red" />

        </section>
    )
}
