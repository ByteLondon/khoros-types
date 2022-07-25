export const ActionTypeValues = ['postback', 'reply']

export type ActionType = typeof ActionTypeValues[number]

export type Action = {
    type: ActionType,
    payload: string,
    text: string
}