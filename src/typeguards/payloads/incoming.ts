import {Incoming, IncomingMessageType, IncomingMessageTypeValues} from "../../types";
import {Is, isArray, isLiteral, isNumber, isOptional, isString, isStruct} from "@byte.london/byteguards";
import {isCoordinate} from "../coordinate";
import {isAuthor} from "../author";
import {isOwner} from "../owner";
import {isAction} from "./action";
import {isLocation} from "./location";
import {isReferral} from "./referral";

export const isIncomingMessageType: Is<IncomingMessageType> = isLiteral(...IncomingMessageTypeValues);

export const isIncoming: Is<Incoming> = isStruct({
    coordinate: isCoordinate,
    text: isOptional(isString),
    type: isIncomingMessageType,
    actions: isOptional(isArray(isAction)),
    location: isOptional(isLocation),
    author: isAuthor,
    owner: isOwner,
    publishedTS: isNumber,
    receivedTS: isNumber,
    properties: isOptional(isStruct({
        customField: isString,
        messageSpecificValues: isString
    })),
    referral: isOptional(isReferral)
})