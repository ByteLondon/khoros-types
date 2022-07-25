import {Coordinate} from "../coordinate";
import {Author} from "../author";
import {PayloadType} from "./payload-types";
import {Conversation} from "../conversation";

export type AgentResponseDetails = {
    publishDate: number,
    text: string
}

export type AgentResponse = {
    coordinate: Coordinate,
    author: Author,
    operation: 'AGENT_RESPONSE',
    conversation: Conversation,
    agentResponse: AgentResponseDetails,
    type: PayloadType
}