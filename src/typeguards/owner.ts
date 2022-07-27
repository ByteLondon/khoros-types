import {Owner, OwnerTypeValues} from "../types";
import {Is, isLiteral, isOptional, isString, isStruct} from "@byte.london/byteguards";

export const isOwner: Is<Owner> = isStruct({
    type: isLiteral(...OwnerTypeValues),
    appId: isOptional(isString)
})