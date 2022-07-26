export const NetworkKeyValues = ['apple'] as const

export type NetworkKey = typeof NetworkKeyValues[number]

export const ScopeValues = ['PUBLIC', 'PRIVATE'] as const

export type Scope = typeof ScopeValues[number]

export type Coordinate = {
    companyKey: string,
    networkKey: NetworkKey
    externalId: string,
    botId: string,
    scope: Scope,
    parentId?: string
    topLevelId?: string
}

export type CoordinateWithMessageId = Coordinate & {
    messageId: string
}