import {isCoordinate} from "../coordinate";
import {
    Is,
    isArrayWithLength,
    isBoolean,
    isIntersection,
    isLiteral,
    isOptional,
    isString,
    isStruct,
    isUnion,
    isUnknown
} from "@byte.london/byteguards";
import {isAuthorWithProperties} from "../author";
import {isMediaObject} from "./media";
import {MediaTypeValues} from "../../types/payloads/media";
import {
    Outgoing,
    OutgoingBase, OutgoingList,
    OutgoingMedia,
    OutgoingPayload,
    OutgoingRichContent
} from "../../types/payloads/outgoing";

export const isOutgoingBase: Is<OutgoingBase> = isStruct({
    coordinate: isCoordinate,
    text: isOptional(isString),
    type: isLiteral<'message'>('message'),
    author: isAuthorWithProperties,
    processSynchronously: isOptional(isBoolean)
})

export const isOutgoingList: Is<OutgoingList> = isIntersection(isOutgoingBase, isStruct({
    list: isUnknown
}))

export const isOutgoingPayload: Is<OutgoingPayload> = isIntersection(isOutgoingBase, isStruct({
    payload: isString
}))

export const isOutgoingMedia: Is<OutgoingMedia> = isIntersection(isOutgoingBase, isStruct({
    media: isArrayWithLength(1)(isMediaObject)
}))

export const isOutgoingRichContent: Is<OutgoingRichContent> = isIntersection(isOutgoingBase, isStruct({
    mediaType: isLiteral(...MediaTypeValues),
    url: isString,
    title: isString,
    mediaUrl: isString,
    mimeType: isString
}))

export const isOutgoing: Is<Outgoing> = isUnion(isOutgoingMedia, isOutgoingRichContent, isOutgoingPayload)