export const OwnerTypeValues = ['AGENT', 'BOT'] as const

export type Owner = {
    type: typeof OwnerTypeValues[number]
    appId?: string
}