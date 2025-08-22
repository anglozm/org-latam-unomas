'use client'

import React, { useState } from 'react'

import { Video } from '@prisma/client'

import {
    createVideo,
    deleteVideo,
    updateVideo
} from '@/actions/videos'

import { Trash2, Edit, Save, Plus } from 'lucide-react'

import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'

import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

import clsx from 'clsx'

function VideoTable({
    videos,
    onEdit,
    onDelete,
    onSelect
}: {
    videos: Video[]
    onEdit: (id: string) => void
    onDelete: (id: string) => void
    onSelect: (video: Video) => void
}) {
    return (
        <div className='overflow-x-auto my-8'>
            <table className='min-w-full table-auto text-left whitespace-nowrap'>
                <thead>
                <tr className='border-b border-[var(--color-border)] text-sm font-semibold text-[var(--color-muted-fg)] uppercase'>
                    <th className='p-4'>Título</th>
                    <th className='p-4'>ID de YouTube</th>
                    <th className='p-4'>Descripción</th>
                    <th className='p-4'>Tópico</th>
                    <th className='p-4 text-center'>Acciones</th>
                </tr>
                </thead>
                <tbody>
                { videos.map((video) => (
                    <tr
                        key={video.id}
                        className='border-b border-[var(--color-border)] cursor-pointer hover:bg-[var(--color-bg-hover)] transition-colors duration-200'
                        onClick={() => onSelect(video)}
                    >
                        <td className='p-4 text-[var(--color-fg)]'>{video.title}</td>
                        <td className='p-4 text-[var(--color-fg)]'>{video.youtubeId}</td>
                        <td className='p-4 max-w-xs overflow-hidden text-ellipsis text-[var(--color-muted-fg)]'>{video.description}</td>
                        <td className='p-4 text-[var(--color-fg)]'>{video.topic}</td>
                        <td className='p-4 text-center'>
                            <div className='inline-flex gap-2'>
                                <Button
                                    size='sm'
                                    variant='ghost'
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        onEdit(video.id)
                                    }}
                                    title='Editar video'
                                >
                                    <Edit className='h-4 w-4 text-[var(--color-primary)]' />
                                </Button>
                                <Button
                                    size='sm'
                                    variant='ghost'
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        onDelete(video.id)
                                    }}
                                    title='Eliminar video'
                                >
                                    <Trash2 className='h-4 w-4 text-[var(--color-danger)]' />
                                </Button>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default function DashboardPage() {
    const [ videos, setVideos ] = useState<Video[]>([])
    const [ loading, setLoading ] = useState(false)
    const [ editingVideo, setEditingVideo ] = useState<Video | null>(null)

    // Form state
    const [ formData, setFormData ] = useState({
        youtubeId: '',
        title: '',
        description: '',
        topic: ''
    })

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setLoading(true)

        if (editingVideo) {
            await updateVideo(editingVideo.id, formData)
        } else {
            await createVideo(formData)
        }

        setFormData({ youtubeId: '', title: '', description: '', topic: '' })
        setEditingVideo(null)
        setLoading(false)
    }

    const handleEditClick = (id: string) => {
        const videoToEdit = videos.find((v) => v.id === id)

        if (videoToEdit) {
            setEditingVideo(videoToEdit)

            setFormData({
                youtubeId: videoToEdit.youtubeId,
                title: videoToEdit.title,
                description: videoToEdit.description || '',
                topic: videoToEdit.topic
            })
        }
    }

    const handleDeleteClick = async (id: string) => {
        setLoading(true)

        await deleteVideo(id)

        setVideos(videos.filter((v) => v.id !== id))
        setLoading(false)
    }

    const handleClearForm = () => {
        setFormData({ youtubeId: '', title: '', description: '', topic: '' })
        setEditingVideo(null)
    }

    return (
        <Section
            className={ clsx(
                'text-center mt-20'
            )}
            width='max-w-7xl xl:max-w-6xl'
            padding='none'
        >
            <h1 className='text-3xl font-bold mb-4 text-[var(--color-app-primary)]'>
                Videos management
            </h1>
            {/*<p className='text-[var(--color-fg)] mb-8'>*/}
            {/*    Create, update and delete videos for the project.*/}
            {/*</p>*/}

            {/* Creation/edition form */}
            <Container className='bg-[var(--color-card)] p-6 rounded-2xl shadow-md'>
                <form onSubmit={handleFormSubmit} className='space-y-4'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        <Input
                            label='Title'
                            type='text'
                            name='title'
                            placeholder='Add title'
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value.trim() })}
                            required
                        />
                        <Input
                            label='YouTube ID'
                            type='text'
                            name='youtubeId'
                            placeholder='Ej: Q0QeGOMLk1M'
                            value={formData.youtubeId}
                            onChange={(e) => setFormData({ ...formData, youtubeId: e.target.value.trim() })}
                            required
                        />
                        <Input
                            label='Description (Optional)'
                            type='text'
                            name='description'
                            placeholder='Inserte breve descripción'
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value.trim() })}
                        />
                        <Input
                            label='Topic'
                            type='text'
                            name='topic'
                            placeholder='Ej: leadership'
                            value={formData.topic}
                            onChange={(e) => setFormData({ ...formData, topic: e.target.value.trim().toLowerCase() })}
                            required
                        />
                    </div>
                    <div className='flex justify-end gap-4'>
                        { editingVideo && (
                            <Button
                                type='button'
                                variant='outline'
                                onClick={handleClearForm}
                            >
                                Cancel
                            </Button>
                        )}
                        <Button
                            type='submit'
                            isLoading={loading}
                            leftIcon={editingVideo ? <Save /> : <Plus />}
                            variant={editingVideo ? 'success' : 'primary'}
                        >
                            { editingVideo ? 'Save changes' : 'Create video'}
                        </Button>
                    </div>
                </form>
            </Container>
        </Section>
    )
}
