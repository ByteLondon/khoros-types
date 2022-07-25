export const MediaTypeValues = ['IMAGE', 'VIDEO']
export type MediaTypes = typeof MediaTypeValues[number]
export type MediaObject =
    {
        "url": string
        "mediaType": MediaTypes
        title?: string
    }