export const CredentialsTypeValues = ['BASIC_AUTH', 'HMAC'] as const
export type CredentialsType = typeof CredentialsTypeValues[number]

export const PlatformValues = ['LITHIUM', 'EXTERNAL'] as const
export type Platform = typeof PlatformValues[number]

export const ModeValues = ['LIVE', 'MAINTENANCE', 'MONITORING'] as const
export type Mode = typeof ModeValues[number]

export type Credentials = {
    type: CredentialsType,
    identity: string,
    secret: string
}

export type Registration = {
    companyKey: string,
    platform: Platform,
    networkKey: string,
    externalId: string,
    appId: string,
    name: string
    avatarUrl: string
    contact: { email: string }
    mode: Mode,
    publicFilter: {
        includeTargeted: boolean
    },
    callbackUrl: string
    credentials: Credentials
}