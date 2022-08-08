import {Payload} from "../../types";
import {Is, isUnion} from "@byte.london/byteguards";
import {isAgentResponse} from "./agent-response";
import {isIncoming} from "./incoming";
import {isClosedConversation} from "./closed-conversation";
import {isCreatedConversation} from "./created-conversation";
import {isMessage} from "./message";
import {isOutgoing} from "./outgoing";
import { isAction } from "./action";

export const isPayload: Is<Payload> = isUnion(isAgentResponse, isIncoming, isClosedConversation, isCreatedConversation, isMessage);

export {
    isAction,
    isAgentResponse,
    isIncoming,
    isClosedConversation,
    isCreatedConversation,
    isMessage,
    isOutgoing
}