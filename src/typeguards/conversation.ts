import {Is, isNumber, isString, isStruct} from "@byte.london/byteguards";
import {Conversation} from "../types";

export const isConversation: Is<Conversation> = isStruct({
    displayId: isNumber,
    dispositionId: isNumber,
    encodedDispositionId: isNumber,
    conversationUuid: isString
})