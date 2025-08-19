'use server'

import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache'

const prisma = new PrismaClient()

/**
 * Creates a new video in the database.
 * @param {object} data - The data for the video to be created.
 * @param {string} data.youtubeId - The YouTube video ID.
 * @param {string} data.title - The video title.
 * @param {string} [data.description] - The optional description of the video.
 * @returns {Promise<Video>} - The created video object.
 */
export async function createVideo(data: {
    youtubeId: string
    title: string
    description?: string
}) {
    try {
        const newVideo = await prisma.video.create({
            data: {
                youtubeId: data.youtubeId,
                title: data.title,
                description: data.description,
            },
        })

        // Revalidate the route so that the changes are immediately visible.
        revalidatePath('/')

        return newVideo
    } catch (error) {
        console.error('Failed to create video:', error)

        return null
    }
}

/**
 * Gets all videos from the database.
 * This function is ideal for feeding the video carousel.
 * @returns {Promise<Video[]>} - An array of video objects.
 */
export async function getVideos() {
    try {
        const videos = await prisma.video.findMany({
            orderBy: {
                createdAt: 'desc', // Sort videos from newest to oldest
            },
        })

        return videos
    } catch (error) {
        console.error('Failed to fetch videos:', error)

        return []
    }
}

/**
 * Updates an existing video by its ID.
 * @param {string} id - The ID of the video to update.
 * @param {object} data - The data to update for the video.
 * @returns {Promise<Video>} - The updated video object.
 */
export async function updateVideo(id: string, data: {
    youtubeId?: string
    title?: string
    description?: string
}) {
    try {
        const updatedVideo = await prisma.video.update({
            where: { id },
            data,
        })

        // Revalidate the route so that the changes are immediately visible.
        revalidatePath('/')

        return updatedVideo
    } catch (error) {
        console.error('Failed to update video:', error)

        return null
    }
}

/**
 * Deletes a video by its ID.
 * @param {string} id - The ID of the video to be deleted.
 * @returns {Promise<Video>} - The deleted video object.
 */
export async function deleteVideo(id: string) {
    try {
        const deletedVideo = await prisma.video.delete({
            where: { id },
        })

        // Revalidate the route so that the changes are immediately visible.
        revalidatePath('/')

        return deletedVideo
    } catch (error) {
        console.error('Failed to delete video:', error)

        return null
    }
}
