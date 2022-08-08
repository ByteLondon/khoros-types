import {Owner} from "./owner";
import {Author} from "./author";
import {NetworkKey} from "./coordinate";

export type ClosedComment = {
    author: Author,
    coordinate: {
        companyKey: string,
        networkKey: NetworkKey,
        externalId: string,
        botId: string,
        normalizedAuthorId: string
    },
    owner: Owner,
    conversationDisplayId: string,
    conversation: { displayId: number },
    lastUpdatedTS: number,
    comment: string,
    type: 'control'
}