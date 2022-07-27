import {MediaObject, MediaTypeValues} from "../../types/payloads/media";
import {Is, isLiteral, isOptional, isString, isStruct} from "@byte.london/byteguards";

export const isMediaObject: Is<MediaObject> = isStruct({
    url: isString,
    mediaType: isLiteral(...MediaTypeValues),
    title: isOptional(isString)
})