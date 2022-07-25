import {Message} from "../../types";
import {Is, isLiteral, isNumber, isObject, isString, isStruct} from "@byte.london/byteguards";
import {isCoordinateWithMessageId} from "../coordinate";
import {isOwner} from "../owner";
import {isAuthorWithProperties} from "../author";

export const isMessage: Is<Message> = isStruct({
    coordinate: isCoordinateWithMessageId,
    text: isString,
    author: isAuthorWithProperties,
    owner: isOwner,
    publishedTS: isNumber,
    receivedTS: isNumber,
    properties: isObject,
    type: isLiteral('message')
})