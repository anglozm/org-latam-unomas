'use client'

import { ReactNode, useEffect, useState } from 'react'
import StepperStep from './StepperStep'

interface Step {
    title: string
    content: ReactNode
}

interface StepperProps {
    steps: Step[]
    initialStep?: number
}

export default function Stepper({ steps, initialStep = 0 }: StepperProps) {
    const [hydrated, setHydrated] = useState(false)
    const [currentStep, setCurrentStep] = useState<number | null>(null)

    useEffect(() => {
        setCurrentStep(initialStep)
        setHydrated(true)
    }, [initialStep])

    if (!hydrated || currentStep === null) return null

    const goTo = (index: number) => {
        if (index <= currentStep + 1) setCurrentStep(index)
    }

    return (
        <div className="w-full">
            <div className="flex items-center justify-between mb-6">
                {steps.map((step, i) => (
                    <StepperStep
                        key={i}
                        index={i}
                        title={step.title}
                        isActive={i === currentStep}
                        isCompleted={i < currentStep}
                        onClick={() => goTo(i)}
                    />
                ))}
            </div>

            <div className="border-t border-gray-200 mb-6" />
            <div>{steps[currentStep]?.content}</div>
        </div>
    )
}
