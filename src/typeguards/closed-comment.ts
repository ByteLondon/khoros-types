import {ClosedComment} from "../types";
import {Is, isLiteral, isNumber, isString, isStruct} from "@byte.london/byteguards";
import {isAuthor} from "./author";
import {isOwner} from "./owner";
import {isNetworkKey} from "./coordinate";

export const isClosedComment: Is<ClosedComment> = isStruct({
    author: isAuthor,
    coordinate: isStruct({
        companyKey: isString,
        networkKey: isNetworkKey,
        externalId: isString,
        botId: isString,
        normalizedAuthorId: isString
    }),
    owner: isOwner,
    conversationDisplayId: isString,
    conversation: isStruct({ displayId: isNumber }),
    lastUpdatedTS: isNumber,
    comment: isString,
    type: isLiteral<'control'>('control')
})