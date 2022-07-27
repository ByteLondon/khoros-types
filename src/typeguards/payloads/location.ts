import {Is, isArrayWithLength, isNumber, isString, isStruct} from "@byte.london/byteguards";
import {isLiteral} from "@byte.london/byteguards";
import {Location} from '../../types/payloads/location';

export const isLocation: Is<Location> = isStruct({
    type: isLiteral<'GEO_POINT'>('GEO_POINT'),
    countryCode: isString,
    geoDSL: isArrayWithLength(2)(isNumber)
})