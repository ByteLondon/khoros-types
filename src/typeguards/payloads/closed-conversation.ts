import {ClosedConversation} from "../../types";
import {Is, isLiteral, isStruct} from "@byte.london/byteguards";
import {isCoordinate} from "../coordinate";
import {isAuthor} from "../author";
import {isConversation} from "../conversation";

export const isClosedConversation: Is<ClosedConversation> = isStruct({
    coordinate: isCoordinate,
    author: isAuthor,
    operation: isLiteral('CLOSED'),
    conversation: isConversation,
    type: isLiteral('update')
})