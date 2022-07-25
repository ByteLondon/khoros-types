import {Coordinate} from "../coordinate";
import {Author} from "../author";
import {Owner} from "../owner";
import {Action} from "./actions";
import {Location} from "../../typeguards/payloads/location";
import {Referral} from "../../typeguards/payloads/referral";

export const IncomingMessageTypeValues = ['message', 'update']

export type IncomingMessageType = typeof IncomingMessageTypeValues[number]

export type Incoming = {
    coordinate: Coordinate,
    text: string,
    type: IncomingMessageType,
    actions?: Action[],
    location?: Location,
    author: Author,
    owner: Owner,
    publishedTS: number
    receivedTS: number
    properties: {
        customField: string
        messageSpecificValues: string
    }
    referral?: Referral
}