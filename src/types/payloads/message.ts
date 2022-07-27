import {CoordinateWithMessageId} from "../coordinate";
import {AuthorWithProperties} from "../author";
import {Owner} from "../owner";

export type Message = {
    coordinate: CoordinateWithMessageId,
    text: string,
    author: AuthorWithProperties
    owner: Owner,
    publishedTS: number,
    receivedTS: number,
    properties?: Object
    type: 'message'
}