import React from 'react'
import CardEvent from "@/app/components/CardEvent"

const EventsPage = () => {
    return (
        <div className="flex mx-auto justify-center items-center">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 m-8">
                <CardEvent
                    imageUrl="/logo/uno-mas_colored-chambray-titan-white.png"
                    imageAlt="Logo chambray uno más"
                    title="Junta de Negocio"
                    description="Evento semanal para explicar el plan de negocio. (Cada Lunes)"
                    listItems={['Bienvenida', 'Presentación del Orador', 'Plan de Negocio', 'Historia de Vida', 'Edificación del Equipo', 'Despedida', 'Vídeo de Cierre']}
                    buttonText="¡Regístrate Gratis!"
                    imageBgColor="bg-secondary-titan-white"
                    titleColor="text-primary-chambray"
                    buttonColor="bg-primary-chambray"
                >
                </CardEvent>
                <CardEvent
                    imageUrl="/logo/uno-mas_colored-lotus-pippin.png"
                    imageAlt="Logo lotus uno más"
                    title="Seminario"
                    description="Evento semanal para explicar el plan de negocio."
                    listItems={['Apertura', 'Plan de Negocio', 'Estilo de Vida del Orador', 'Edificación del Equipo', 'Cierre']}
                    buttonText="¡Obtén tu Ticket!"
                    imageBgColor="bg-secondary-pippin"
                    titleColor="text-primary-lotus"
                    buttonColor="bg-primary-lotus"
                >
                </CardEvent>
                <CardEvent
                    imageUrl="/logo/uno-mas_colored-yellow-metal-feta.png"
                    imageAlt="Logo yellow metal uno más"
                    title="Convención"
                    description="Evento semanal para explicar el plan de negocio."
                    listItems={['Apertura', 'Charla de Líderes', 'Recepción de Invitados Generales', 'Historia de Vida del Orador', 'Edificación del Equipo', 'Reconocimientos', 'Cierre']}
                    buttonText="¡Adquiere tu Entrada!"
                    imageBgColor="bg-secondary-feta"
                    titleColor="text-primary-yellow-metal"
                    buttonColor="bg-primary-yellow-metal"
                >
                </CardEvent>
            </div>
        </div>
    )
}

export default EventsPage
