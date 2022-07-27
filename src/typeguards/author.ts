import {Is, isIntersection, isOptional, isRecord, isString, isStruct} from "@byte.london/byteguards";
import {Author, AuthorWithProperties} from "../types";

export const isAuthor: Is<Author> = isStruct({
    id: isString,
    fullName: isOptional(isString)
})

export const isAuthorWithProperties: Is<AuthorWithProperties> = isIntersection(isAuthor, isStruct({
    properties: isRecord(isString, isString)
}))