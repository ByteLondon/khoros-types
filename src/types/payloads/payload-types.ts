export const PayloadTypeValues = ['update'] as const

export type PayloadType = typeof PayloadTypeValues[number]