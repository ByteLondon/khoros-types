import {Incoming, IncomingMessageType, IncomingMessageTypeValues} from "../../types";
import {Is, isLiteral, isNumber, isString, isStruct} from "@byte.london/byteguards";
import {isCoordinate} from "../coordinate";
import {isAuthor} from "../author";
import {isOwner} from "../owner";

export const isIncomingMessageType: Is<IncomingMessageType> = isLiteral(...IncomingMessageTypeValues);

export const isIncoming: Is<Incoming> = isStruct({
    coordinate: isCoordinate,
    text: isString,
    type: isIncomingMessageType,
    author: isAuthor,
    owner: isOwner,
    publishedTS: isNumber,
    receivedTS: isNumber,
    properties: isStruct({
        customField: isString,
        messageSpecificValues: isString
    })
})