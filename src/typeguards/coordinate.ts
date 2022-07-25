import {Is, isIntersection, isLiteral, isOptional, isString, isStruct} from "@byte.london/byteguards";
import {Coordinate, CoordinateWithMessageId, NetworkKey, NetworkKeyValues, Scope, ScopeValues} from "../types";

export const isNetworkKey: Is<NetworkKey> = isLiteral(...NetworkKeyValues);

export const isScope: Is<Scope> = isLiteral(...ScopeValues);

export const isCoordinate: Is<Coordinate> = isStruct({
    companyKey: isString,
    networkKey: isNetworkKey,
    externalId: isString,
    botId: isString,
    scope: isScope,
    parentId: isOptional(isString),
    topLevelId: isOptional(isString),
})

export const isCoordinateWithMessageId: Is<CoordinateWithMessageId> = isIntersection(isCoordinate, isStruct({
    messageId: isString
}))