import {Is, isLiteral, isString, isStruct} from "@byte.london/byteguards";
import {Action, ActionTypeValues} from "../../types/payloads/actions";

const isActionType = isLiteral(...ActionTypeValues)

export const isAction: Is<Action> = isStruct({
    type: isActionType,
    payload: isString,
    text: isString
})