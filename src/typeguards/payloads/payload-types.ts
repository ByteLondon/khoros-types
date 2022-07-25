import {PayloadType, PayloadTypeValues} from "../../types";
import {Is, isLiteral} from "@byte.london/byteguards";

export const isPayloadType: Is<PayloadType> = isLiteral(...PayloadTypeValues);