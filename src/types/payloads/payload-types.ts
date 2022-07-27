export const PayloadTypeValues = ['update', 'message'] as const

export type PayloadType = typeof PayloadTypeValues[number]