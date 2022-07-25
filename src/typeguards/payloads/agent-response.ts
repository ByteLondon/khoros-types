import {AgentResponse} from "../../types";
import {Is, isLiteral, isNumber, isString, isStruct} from "@byte.london/byteguards";
import {isCoordinate} from "../coordinate";
import {isAuthor} from "../author";
import {isConversation} from "../conversation";
import {isPayloadType} from "./payload-types";

export const isAgentResponseDetails = isStruct({
    publishDate: isNumber,
    text: isString
})

export const isAgentResponse: Is<AgentResponse> = isStruct({
    coordinate: isCoordinate,
    author: isAuthor,
    operation: isLiteral('AGENT_RESPONSE'),
    conversation: isConversation,
    agentResponse: isAgentResponseDetails,
    type: isPayloadType
})