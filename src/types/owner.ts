export const OwnerTypeValues = ['AGENT', 'BOT']

export type Owner = {
    type: typeof OwnerTypeValues[number]
    appId: string
}