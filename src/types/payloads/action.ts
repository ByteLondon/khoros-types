export const ActionTypeValues = ['postback', 'reply'] as const

export type ActionType = typeof ActionTypeValues[number]

export type Action = {
    type: ActionType,
    payload: string,
    text?: string
}