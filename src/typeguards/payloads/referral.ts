export const ReferralSourceValues = ['SHORTLINK', 'ADS', 'MESSENGER_CODE']

export type ReferralSource = typeof ReferralSourceValues[number]

export type Referral = {
    ref: string
    source: ReferralSource,
    type: 'OPEN_THREAD'
    adId: string | number
    refererUri: string
}