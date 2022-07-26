export const MediaTypeValues = ['IMAGE', 'VIDEO'] as const
export type MediaTypes = typeof MediaTypeValues[number]
export type MediaObject =
    {
        "url": string
        "mediaType": MediaTypes
        title?: string
    }