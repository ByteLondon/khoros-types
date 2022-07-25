import {CreatedConversation} from "../../types";
import {Is, isLiteral, isStruct} from "@byte.london/byteguards";
import {isCoordinateWithMessageId} from "../coordinate";
import {isAuthor} from "../author";
import {isConversation} from "../conversation";

export const isCreatedConversation: Is<CreatedConversation> = isStruct({
    coordinate: isCoordinateWithMessageId,
    author: isAuthor,
    operation: isLiteral('CREATED'),
    conversation: isConversation,
    type: isLiteral('update')
})