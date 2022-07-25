import {Incoming} from "./incoming";
import {AgentResponse} from "./agent-response";
import {ClosedConversation} from "./closed-conversation";
import {CreatedConversation} from "./created-conversation";
import {Message} from "./message";

export * from './agent-response'
export * from './incoming'
export * from './closed-conversation'
export * from './created-conversation'
export * from './message'

export type Payload = AgentResponse | Incoming | ClosedConversation | CreatedConversation | Message