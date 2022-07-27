import {Coordinate} from "../coordinate";
import {AuthorWithProperties} from "../author";
import {MediaObject, MediaTypes} from "./media";

export type OutgoingBase = {
    coordinate: Coordinate,
    text?: string,
    type: "message",
    author: AuthorWithProperties
    processSynchronously?: boolean
}

export type OutgoingList = OutgoingBase & {
    list: unknown
}

export type OutgoingPayload = OutgoingBase & {
    payload: string
}

export type OutgoingMedia = OutgoingBase & {
    "media": [
        MediaObject
    ]
}

export type OutgoingRichContent = OutgoingBase & {
    "mediaType": MediaTypes,
    "url": string,
    "title": string,
    "mediaUrl": string,
    "mimeType": string,
}

export type Outgoing = OutgoingMedia | OutgoingRichContent | OutgoingPayload