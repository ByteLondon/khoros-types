import {Coordinate} from "../coordinate";
import {Author} from "../author";
import {Conversation} from "../conversation";

export type ClosedConversation = {
    coordinate: Coordinate,
    author: Author,
    operation: 'CLOSED'
    conversation: Conversation
    type: 'update'
}