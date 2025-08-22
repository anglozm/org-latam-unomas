'use server'

import { PrismaClient, Video } from '@prisma/client'

import { revalidatePath } from 'next/cache'

const prisma = new PrismaClient()

/**
 * Creates a new video in the database.
 * @param {object} data - The data for the video to be created.
 * @param {string} data.youtubeId - The YouTube video ID.
 * @param {string} data.title - The video title.
 * @param {string} [data.description] - The optional description of the video.
 * @param {string} data.topic - The video topic.
 * @returns {Promise<Video | null>} - The created video object or null.
 */
export async function createVideo(data: {
    youtubeId: string
    title: string
    description?: string
    topic: string
}): Promise<Video | null> {
    try {
        const newVideo = await prisma.video.create({
            data: {
                youtubeId: data.youtubeId,
                title: data.title,
                description: data.description,
                topic: data.topic,
            },
        })

        revalidatePath('/') // Revalidate the route so that the changes are immediately visible.

        return newVideo
    } catch (error) {
        console.error('Failed to create video:', error)

        return null
    }
}

/**
 * Gets all videos from the database.
 * @returns {Promise<Video[]>} - An array of video objects.
 */
export async function getVideos(): Promise<Video[]> {
    try {
        return await prisma.video.findMany({
            orderBy: {
                title: 'asc', // Sort videos alphabetically
            },
        })
    } catch (error) {
        console.error('Failed to fetch videos:', error)

        return []
    }
}

/**
 * Updates an existing video by its ID.
 * @param {string} id - The ID of the video to update.
 * @param {object} data - The data to update for the video.
 * @returns {Promise<Video | null>} - The updated video object or null.
 */
export async function updateVideo(id: string, data: {
    youtubeId?: string
    title?: string
    description?: string
    topic: string
}): Promise<Video | null> {
    try {
        const updatedVideo = await prisma.video.update({
            where: { id },
            data,
        })

        revalidatePath('/') // Revalidate the route so that the changes are immediately visible.

        return updatedVideo
    } catch (error) {
        console.error('Failed to update video:', error)

        return null
    }
}

/**
 * Deletes a video by its ID.
 * @param {string} id - The ID of the video to be deleted.
 * @returns {Promise<Video | null>} - The deleted video object or null.
 */
export async function deleteVideo(id: string): Promise<Video | null> {
    try {
        const deletedVideo = await prisma.video.delete({
            where: { id },
        })

        revalidatePath('/') // Revalidate the route so that the changes are immediately visible.

        return deletedVideo
    } catch (error) {
        console.error('Failed to delete video:', error)

        return null
    }
}
