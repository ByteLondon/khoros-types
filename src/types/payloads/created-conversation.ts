import {CoordinateWithMessageId} from "../coordinate";
import {Author} from "../author";
import {Conversation} from "../conversation";

export type CreatedConversation = {
    coordinate: CoordinateWithMessageId,
    author: Author,
    operation: 'CREATED'
    conversation: Conversation
    type: 'update'
}