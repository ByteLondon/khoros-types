import {Referral, ReferralSourceValues} from "../../types/payloads/referral";
import {Is, isLiteral, isNumber, isString, isStruct, isUnion} from "@byte.london/byteguards";

export const isReferral: Is<Referral> = isStruct({
    ref: isString,
    source: isLiteral(...ReferralSourceValues),
    type: isLiteral<'OPEN_THREAD'>('OPEN_THREAD'),
    adId: isUnion(isString, isNumber),
    refererUri: isString
})