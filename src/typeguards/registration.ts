import {Registration, Credentials} from "../types";
import {Is, isBoolean, isLiteral, isString, isStruct} from "@byte.london/byteguards";

export const isCredentials: Is<Credentials> = isStruct({
    type: isLiteral('BASIC_AUTH'),
    identity: isString,
    secret: isString
})

export const isRegistration: Is<Registration> = isStruct({
    companyKey: isString,
    platform: isLiteral('LITHIUM'),
    networkKey: isString,
    externalId: isString,
    appId: isString,
    name: isString,
    avatarUrl: isString,
    contact: isStruct({
        email: isString
    }),
    mode: isLiteral('LIVE'),
    publicFilter: isStruct({
        includeTargeted: isBoolean
    }),
    callbackUrl: isString,
    credentials: isCredentials
})